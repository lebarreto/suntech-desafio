import React, { useState, useEffect } from 'react';
import Geocode from 'react-geocode';
import * as Yup from 'yup';

import home from '../../assets/undraw_suburbs_8b83.svg';
import api from '../../services/api';
import Header from '../../component/Header';
import { Container, Content, FormContainer } from './styles';

const submitSchema = Yup.object().shape({
  cep: Yup.string().required('CEP da residência é obrigatório.'),
  number: Yup.number()
    .required('O número da residência é obrigatório.')
    .min(1, 'O número da residência é obrigatório.'),
  lat: Yup.string().required('A latitude da residência é obrigatória.'),
  long: Yup.string().required('A longitude da residência é obrigatória.'),
  residents: Yup.number()
    .required('O número de residentes é obrigatório.')
    .min(1, 'O número de residentes é obrigatório.'),
});

function AddResidence() {
  const [cep, setCep] = useState('');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');

  const [number, setNumber] = useState(0);
  const [residents, setResidents] = useState(0);

  const [schemaErrors, setSchemaErrors] = useState([]);

  useEffect(() => {
    Geocode.setApiKey('AIzaSyDo-7ru43sOH2dwJGWlSzHLh6L0aq1WPvM');
    Geocode.setLanguage('en');
    Geocode.setRegion('br');
    Geocode.enableDebug();
  }, []);

  function handleCep(e) {
    let cep = e.target.value;
    setCep(cep);
    Geocode.fromAddress(cep).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLat(lat);
        setLong(lng);
      },
      (error) => {
        console.error(error);
      },
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const submitFormData = {
      cep,
      number,
      lat,
      long,
      residents,
    };

    await submitSchema
      .validate(submitFormData, { abortEarly: false })
      .then((value) => console.log(value))
      .catch((errors) => {
        let data = [];
        errors.inner.map((err) => {
          data.push({
            field: err.path,
            message: err.message,
          });
          return { field: err.path, message: err.message };
        });

        setSchemaErrors(data);
      });

    const response = await api.post('/residences', submitFormData);

    if (response.data) {
      window.location.reload();
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <FormContainer>
          <h2>Cadastro de Residências</h2>

          <div>
            <form onSubmit={handleSubmit}>
              <label>CEP</label>
              <input
                name="cep"
                type="text"
                placeholder="CEP da residência"
                value={cep}
                onChange={(e) => handleCep(e)}
              />
              {schemaErrors.find((err) => err.field === 'cep') && (
                <small>O CEP da residência é obrigatório.</small>
              )}

              <label>Número</label>
              <input
                name="number"
                type="text"
                placeholder="Número da residência"
                value={number === 0 ? '' : number}
                onChange={(e) => setNumber(e.target.value)}
              />
              {schemaErrors.find((err) => err.field === 'number') && (
                <small>O número da residência é obrigatório.</small>
              )}

              <label>Latitude</label>
              <input
                name="lat"
                type="text"
                placeholder="Latitude"
                value={lat}
                disabled
              />
              {schemaErrors.find((err) => err.field === 'lat') && (
                <small>A latitude é obrigatória.</small>
              )}

              <label>Longitude</label>
              <input
                name="long"
                type="text"
                placeholder="Longitude"
                value={long}
                disabled
              />
              {schemaErrors.find((err) => err.field === 'long') && (
                <small>A longitude é obrigatória.</small>
              )}

              <label>Quantidade de Residentes</label>
              <input
                name="residents"
                type="text"
                placeholder="Quantidade de Residentes"
                value={residents === 0 ? '' : residents}
                onChange={(e) => setResidents(e.target.value)}
              />
              {schemaErrors.find((err) => err.field === 'residents') && (
                <small>O número de residentes é obrigatório.</small>
              )}

              <div>
                <button type="submit">Cadastrar</button>
              </div>
            </form>
          </div>

          <div className="img">
            <img src={home} alt="Residências" />
          </div>
        </FormContainer>
      </Content>
    </Container>
  );
}

export default AddResidence;

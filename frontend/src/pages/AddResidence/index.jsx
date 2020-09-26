import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Geocode from 'react-geocode';
import * as Yup from 'yup';

import logo from '../../assets/logo.png';
import home from '../../assets/undraw_suburbs_8b83.svg';
import { Container, Header, HeaderContent, Content, Form } from './styles';

function AddResidence() {
  const [cep, setCep] = useState('');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');

  const [number, setNumber] = useState(0);
  const [residents, setResidents] = useState(0);

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

  function handleSubmit() {
    const submitSchema = Yup.object().shape({
      cep: Yup.string().required(),
      number: Yup.number().required().integer(),
      lat: Yup.string().required(),
      long: Yup.string().required(),
      residents: Yup.number().required().integer(),
    });

    const submitFormData = {
      cep,
      number,
      lat,
      long,
      residents,
    };

    submitSchema.isValid(submitFormData).then((valid) => {
      console.log(valid);
    });
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logo} alt="Suntech" />

          <div>
            <Link to="/">
              <strong>Residências</strong>
            </Link>
            <Link to="/map">
              <strong>Mapa de calor</strong>
            </Link>
          </div>
        </HeaderContent>
      </Header>

      <Content>
        <Form>
          <h2>Cadastro de Residências</h2>

          <div>
            <form>
              <label>CEP:</label>
              <input
                type="text"
                name="cep"
                defaultValue={cep}
                placeholder="CEP da residência"
                onChange={(e) => handleCep(e)}
              />

              <label>Número:</label>
              <input
                type="number"
                name="number"
                placeholder="Número da residência"
                onChange={(e) => setNumber(e.target.value)}
              />

              <label>Latitude:</label>
              <input
                type="text"
                name="lat"
                placeholder="Latitude"
                defaultValue={lat}
                disabled
              />

              <label>Longitude:</label>
              <input
                type="text"
                name="long"
                placeholder="Longitude"
                defaultValue={long}
                disabled
              />

              <label>Quantidade de Residentes:</label>
              <input
                type="number"
                name="residents"
                placeholder="Quantidade de Residentes"
                onChange={(e) => setResidents(e.target.value)}
              />
              <button type="button" onClick={() => handleSubmit()}>
                Cadastrar
              </button>
            </form>
          </div>

          <div className="img">
            <img src={home} alt="Residências" />
          </div>
        </Form>
      </Content>
    </Container>
  );
}

export default AddResidence;

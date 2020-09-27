import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, HeaderContent } from './styles';
import logo from '../../assets/logo.png';

function HeaderComponent() {
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
    </Container>
  );
}

export default HeaderComponent;

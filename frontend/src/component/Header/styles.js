import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 22px 0;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    div a {
      float: none;
      display: block;
      text-align: left;
    }
    div {
      float: none;
    }
  }

  img {
    height: 70px;
    width: 120px;
  }

  div {
    margin-left: 40px;
    a {
      text-decoration: none;
      color: #2f2651;
      margin-right: 80px;

      &:hover {
        opacity: 0.8;
      }

      strong {
        font-weight: 300;
        font-size: 20px;
        font-style: italic;
      }
    }
  }
`;

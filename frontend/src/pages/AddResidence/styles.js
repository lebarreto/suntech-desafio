import styled from 'styled-components';
import { shade } from 'polished';

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

export const Content = styled.main`
  max-width: 1120px;
  margin: 44px auto;
  display: flex;
  flex: 1;
`;

export const Form = styled.div`
  background: rgba(201, 199, 210);
  border-radius: 8px;
  flex: 1;
  align-items: center;
  padding-top: 20px;
  box-shadow: 1px 1px rgba(201, 199, 210, 0.6);
  width: 100%;

  h2 {
    color: #2f2651;
    text-align: center;
  }

  div.img {
    float: right;
    margin-right: 300px;
    img {
      height: 700px;
      max-width: 500px;
    }
  }

  div {
    width: 300px;
    float: left;

    form {
      margin: 60px 80px;
      display: flex;
      flex-direction: column;

      label {
        color: #2f2651;
        font-weight: 400;
        font-size: 20px;
        margin-bottom: 15px;
      }

      input {
        background: #fff;
        border-radius: 10px;
        border: 2px solid #fff;
        padding: 16px;
        width: 300px;

        text-align: center;
        color: #2f2651;

        margin-bottom: 30px;
      }

      button {
        background: #2f2651;
        height: 56px;
        border-radius: 10px;
        border: 0;
        padding: 0 16px;
        width: 300px;
        color: #fff;
        font-weight: 600;
        margin-top: 16px;
        transition: background-color 0.2s;
        &:hover {
          background: ${shade(0.2, '#2f2651')};
        }
      }
    }
  }
`;

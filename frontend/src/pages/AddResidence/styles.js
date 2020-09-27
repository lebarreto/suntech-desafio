import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Content = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex: 1;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const FormContainer = styled.div`
  background: rgba(201, 199, 210);
  border-radius: 8px;
  flex: 1;
  align-items: center;
  padding-top: 20px;
  box-shadow: 1px 1px rgba(201, 199, 210, 0.6);

  h2 {
    color: #2f2651;
    text-align: center;
  }

  div.img {
    float: right;
    margin-right: 320px;
    img {
      height: 700px;
      max-width: 500px;
    }
  }

  div {
    width: 400px;
    float: left;

    animation: ${appearFromRight} 2s;

    form {
      margin: 60px 80px;
      display: flex;
      flex-direction: column;

      label {
        color: #2f2651;
        font-weight: 400;
        font-size: 20px;
        margin-bottom: 15px;
        margin-top: 20px;
      }

      small {
        font-size: 16px;
        margin-top: 5px;
      }

      input {
        background: #fff;
        border-radius: 10px;
        border: 2px solid #fff;
        padding: 16px;
        width: 300px;

        text-align: center;
        color: #2f2651;

        margin-bottom: 5px;
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

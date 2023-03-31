import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginStyled = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .formContainer {
    padding: 3rem;
    border: 3px solid var(--color-grey-2);
    border-radius: 20px;
    width: 30rem;
    height: 25rem;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: auto;
    gap: 1rem;
    width: 20rem;

    div {
      display: flex;
      flex-direction: column;

      input {
        border: 1px solid var(--color-grey-2);
        border-radius: 6px;
        font-size: 17px;
        padding: 14px 16px;
        width: 330px;
      }

      span {
        font-size: 0.8rem;
        color: red;
        margin-left: 16px;
        height: 15px;
      }
    }

    button {
      background-color: #1877f2;
      border: none;
      border-radius: 6px;
      font-size: 20px;
      line-height: 48px;
      padding: 0 16px;
      width: 332px;
      color: white;
    }
  }

  .criarConta {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
`;

export const LinkNewAcount = styled(Link)`
  background-color: var(--color-secoundary);
  color: white;
  border-radius: 6px;
  font-size: 17px;
  line-height: 48px;
  padding: 0 16px;
`;

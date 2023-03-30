import styled from "styled-components";

export const CustomerRegistrationStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 50px;

  h2 {
    font-weight: 600;
  }

  button {
    background-color: var(--color-grey-3);
    border-radius: 4px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    color: var(--color-grey-0);
    font-size: 1.3rem;
    font-weight: bold;
  }
`;

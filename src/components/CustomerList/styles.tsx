import styled from "styled-components";

export const CustomerHeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  gap: 300px;
`;

export const CustomerListStyled = styled.ul`
  background-color: var(--color-grey-3);
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 4px;

  margin-top: 10px;
  width: 100%;

  li {
    padding: 0;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 20px;

    max-height: 70px;
    max-width: 100%;

    background-color: var(--color-grey-4);
    border-radius: 4px;
    transition: 0.3s;

    &:hover {
      background-color: var(--color-grey-2);
    }

    div {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      gap: 20px;

      h1 {
        width: 350px;
        height: 100%;
      }

      h2 {
        width: 350px;
      }

      h3 {
        width: 200px;
      }
    }

    section {
      /* background-color: green; */
      padding: 10px;
      cursor: pointer;
    }
  }
`;

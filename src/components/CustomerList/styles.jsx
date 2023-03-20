import styled from "styled-components";

export const CustomerListStyled = styled.ul`
  background-color: var(--color-grey-3);
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 4px;

  margin-top: 10px;

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 20px;

    height: 50px;

    background-color: var(--color-grey-4);
    border-radius: 4px;
    transition: 0.3s;

    &:hover {
      cursor: pointer;
      background-color: var(--color-grey-2);
    }

    h4 {
      font-weight: 700;
      font-size: 0.875rem;
      width: 150px;
    }

    div {
      display: flex;
      flex-direction: row;
      gap: 20px;

      h5 {
        font-size: 0.75rem;
      }
    }
  }
`;

import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100vw;
  height: 118px;
  border-bottom: 1px solid var(--color-grey-1);
  padding: 0rem 0.8rem;
  margin: 0;

  .headerContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-height: 100%;
    justify-content: center;

    h1 {
      font-weight: 700;
      font-size: 1.125rem;
    }

    h2 {
      font-size: 0.75rem;
      color: var(--color-grey-1);
    }
  }

  @media screen and (min-width: 600px) {
    .headerContainer {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

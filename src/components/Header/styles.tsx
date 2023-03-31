import { Link } from "react-router-dom";
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

    /* background-color: gray; */

    h1 {
      font-weight: 700;
      font-size: 1.125rem;
    }

    div {
      /* background-color: green; */
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }

      button {
        font-size: 0.9rem;
        color: var(--color-grey-1);
      }
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

export const LinkEditProfile = styled(Link)`
  font-size: 0.9rem;
  color: var(--color-grey-1);
`;

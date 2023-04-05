import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-background: #fffff;
    --color-primary: #4267b2;
    --color-primary-focus: #4267b2;
    --color-secoundary: #42b72a;
    --color-grey-1: ##1d2129;
    --color-grey-2: #dddfe2;
    --color-grey--3: rgb(191, 192, 194);
    --color-sucess: #3FE864; 
    --color-negative: #E83F5B;
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    
    
    
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }
  body {
    background: var(--color-background);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-size: 1rem;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 400;
    font-size: 1rem;
  }
  button {
    font-size: 1rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: .3s;

    &:hover{
        filter: brightness(1.2);
    }



    .form{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}



.form input[type="text"],
.form input[type="email"],
.form select{
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;

    padding: 0 12px;
    height: 39px;

    border: 1px solid var(--color-grey-2);

    color: var(--color-grey-1);
    border-radius: 4px;
}

.form select option{
    background: var(--color-darkblue);
}

.form input::placeholder{
    color: var(--color-grey-0);
}


  }

  ul, ol, li{
    list-style: none;
  }

  img{
    max-width: 100%;
  }

  .mainContainer{
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0.8rem;
  }

`;

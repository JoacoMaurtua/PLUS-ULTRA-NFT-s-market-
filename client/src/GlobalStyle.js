import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  };

  body{
    background-color: #03091F;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    color: white;
  };

  a{
    color: inherit;
    font-family: inherit;
    text-decoration: none;
  }

  p{
    line-height: 2rem;
  }

  .Before{
    position: relative;
    padding: 3rem;
    &::before{
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
    }
  }

`;

export default GlobalStyle;
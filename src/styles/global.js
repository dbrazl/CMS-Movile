import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

  * {
    border: 0;
    padding: 0;
    margin: 0;
    outline: 0;
  }

  p, button, input, h1, h2, h3, li, a {
    color: #000;
	  font-family: 'Nunito';
  }

  a, a:active, a:visited, a:hover {
    text-decoration: none;
    color: #000;
  }

  li {
    list-style: none;
  }
`;

import { css } from 'styled-components';

const resetCss = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    word-break: keep-all;
  }

  html,
  body {
    padding: 0;
    margin: 0;

    font-size: 62.5%; /* 1rem = 10px */

    width: 100%;
    height: 100%;

    input,
    select,
    button {
      border: 0;
      background: transparent;
    }

    button {
      border: none;
      cursor: pointer;
      padding: 0;
    }

    a {
      text-decoration: none;
      color: unset;
      cursor: pointer;
    }

    input,
    textarea {
      outline: none;
      resize: none;
    }
  }
`;

export default resetCss;

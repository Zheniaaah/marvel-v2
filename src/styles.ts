import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Hind Madurai', sans-serif;
  }
  
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-size: 100%;
    font-family: sans-serif;
    line-height: 1.5;
    scroll-behavior: smooth;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  input, textarea {
    font-family: inherit;
    font-size: inherit;
  }

  img {
    max-width: 100%;
    display: block;
    height: auto;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
  }
`

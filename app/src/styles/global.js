import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        outline: 0;
    }

    body, html {
        background: #eee;
        font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
        width: 100%;
        height: 100%;
    }
`;

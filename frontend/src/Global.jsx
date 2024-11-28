import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Inter';
        font-weight: unset;
        margin: 0;
        padding: 0;
        text-decoration: none;

    }

    @media (min-width: 1366px) {
        body {
            font-size: 1rem; /* Cambiar a 2rem en pantallas pequeñas */
        }
    }
    @media (min-width: 1440px) {
        body {
            font-size: 1.25rem; /* Cambiar a 2rem en pantallas pequeñas */
        }
    }


`

export default Global
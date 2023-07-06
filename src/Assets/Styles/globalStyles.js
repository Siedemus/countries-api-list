import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, ::before, ::after {
    box-sizing: border-box;
}

body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: Nunito Sans;
    transition: 0.5s;
}
`;

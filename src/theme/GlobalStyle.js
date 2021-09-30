import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    
    font-size:${({ theme, isMobile }) =>
       isMobile
          ? theme.typography.fontSize.mobile
          : theme.typography.fontSize.desktop};
    color: ${({ theme, isDark }) =>
       isDark
          ? theme.typography.color.darkTheme
          : theme.typography.color.lightTheme}
   
}
.root {
   max-width: 100vw;
   overflow:hidden;
    background: ${({ theme, isDark }) =>
       isDark
          ? theme.colors.darkTheme.veryDarkBlue
          : theme.colors.lightTheme.veryLightGray};
}

`;
export default GlobalStyle;

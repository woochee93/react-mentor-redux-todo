import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { GlobalStyle, theme } from "theme";
import { toggle } from "reducers/themeToggle.reducer";
import { Header, InputTodo, List, TodoWindow, Wrapper } from "components";

const App = () => {
   const dispatch = useDispatch();
   const isMobile = useSelector((state) => state.themeToggle.isMobile);
   const isDark = useSelector((state) => state.themeToggle.isDark);
   window.onload = () => {
      if (window.innerWidth > theme.layout.mobile) dispatch(toggle("isMobile"));
   };
   window.onresize = () => {
      if (!isMobile && window.innerWidth <= theme.layout.mobile)
         return dispatch(toggle("isMobile"));
      if (isMobile && window.innerWidth > theme.layout.mobile)
         return dispatch(toggle("isMobile"));
   };
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyle isMobile={isMobile} isDark={isDark} />
         <Wrapper>
            <TodoWindow>
               {" "}
               <Header />
               <InputTodo />
               <List />
            </TodoWindow>
         </Wrapper>
      </ThemeProvider>
   );
};
export default App;

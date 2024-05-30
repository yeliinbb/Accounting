import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import ExpenseContextProvider from "./context/ExpenseContext";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ExpenseContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </ExpenseContextProvider>
    </>
  );
};

export default App;

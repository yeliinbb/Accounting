import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useEffect, useState } from "react";
import { ExpenseContext } from "./context/ExpenseContext";

const App = () => {
  const [lists, setLists] = useState([]);

  // 컴포넌트가 마운트될 때 로컬스토리지에서 값을 가져오기
  useEffect(() => {
    const savedLists = localStorage.getItem("lists");
    // const newLists = savedLists ? JSON.parse(savedLists) : [];
    savedLists ? JSON.parse(savedLists) : [];
    // dispatch(setExpenseList(...newLists));
  }, []);

  return (
    <>
      <GlobalStyle />
      <ExpenseContext.Provider
        value={{
          lists,
          setLists,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </ExpenseContext.Provider>
    </>
  );
};

export default App;

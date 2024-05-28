import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExpenseList } from "./redux/slices/expenseSlice";

const App = () => {
  // const expenseList = useSelector((state) => state.expenseList);
  // const dispatch = useDispatch();
  // 컴포넌트가 마운트될 때 로컬스토리지에서 값을 가져오기
  useEffect(() => {
    // JSON.parse(localStorage.getItem("lists")) || [];
    const savedLists = JSON.parse(localStorage.getItem("lists")) || [];
    console.log("savedLists =>", savedLists);
    // if (expenseList) {
    //   dispatch(setExpenseList(...savedLists));
    // }
  }, []);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

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
    const newLists = savedLists ? JSON.parse(savedLists) : [];
    setLists(newLists);
  }, []);

  // // 새로운 리스트를 추가하는 함수
  const addList = (newList) => {
    const updateLists = [newList, ...lists];
    setLists(updateLists);
    localStorage.setItem("lists", JSON.stringify(updateLists));
  };

  const [monthFiltered, setMonthFiltered] = useState("");
  const [filteredLists, setFilteredLists] = useState([]);

  // 저장된 로컬스토리지 lists 데이터 중에서 선택한 달과 맞는 데이터 가져오기 -> getMonth()
  useEffect(() => {
    const filtered = lists.filter(
      (list) => new Date(list.date).getMonth() === monthFiltered
    );
    setFilteredLists(filtered);
  }, [lists, monthFiltered]);

  return (
    <>
      <GlobalStyle />
      <ExpenseContext.Provider
        value={{
          lists,
          setLists,
          addList,
          monthFiltered,
          setMonthFiltered,
          filteredLists,
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

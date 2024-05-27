import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useEffect, useState } from "react";

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
    // setLists((prevLists) => {
    //   const updatedLists = [...prevLists, newList];
    //   localStorage.setItem("inputs", JSON.stringify(updatedLists));
    //   return updatedLists;
    // });
    const updateLists = [newList, ...lists];
    setLists(updateLists);
    localStorage.setItem("lists", JSON.stringify(updateLists));
  };

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home setLists={setLists} lists={lists} addList={addList} />
            }
          />
          <Route
            path="/detail/:id"
            element={<Detail setLists={setLists} lists={lists} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

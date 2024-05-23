import ExpenseList from "../components/ExpenseList";
import Form from "../components/Form";
import MonthsList from "../components/MonthList";
import { useEffect, useState } from "react";

const Home = () => {
  const [lists, setLists] = useState([]);

  // 컴포넌트가 마운트될 때 로컬스토리지에서 값을 가져오기
  useEffect(() => {
    const savedLists = localStorage.getItem("inputs");
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
    localStorage.setItem("inputs", JSON.stringify(updateLists));
  };

  return (
    <>
      <header>
        <h1>ACCOUNTING BOOK</h1>
      </header>
      <main>
        <Form setLists={setLists} lists={lists} addList={addList} />
        <MonthsList />
        <ExpenseList lists={lists} setLists={setLists} />
      </main>
    </>
  );
};

export default Home;

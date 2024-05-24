import ExpenseListByMonth from "../components/ExpenseListByMonth";
import Form from "../components/Form";
import MonthsList from "../components/MonthList";
import { useEffect, useState } from "react";

const Home = ({ lists, setLists, addList }) => {
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
      <header>
        <h1>ACCOUNTING BOOK</h1>
      </header>
      <main>
        <Form
          setLists={setLists}
          lists={lists}
          addList={addList}
          monthFiltered={monthFiltered}
        />
        <MonthsList setMonthFiltered={setMonthFiltered} list={lists} />
        <ExpenseListByMonth filteredLists={filteredLists} />
      </main>
    </>
  );
};

export default Home;

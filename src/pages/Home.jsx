import styled from "styled-components";
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
      <StMain>
        <Form
          setLists={setLists}
          addList={addList}
          monthFiltered={monthFiltered}
        />
        <MonthsList setMonthFiltered={setMonthFiltered} />
        <ExpenseListByMonth filteredLists={filteredLists} />
      </StMain>
    </>
  );
};

export default Home;

const StMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

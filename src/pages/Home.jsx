import styled from "styled-components";
import ExpenseListByMonth from "../components/ExpenseListByMonth";
import Form from "../components/Form";
import MonthNavigation from "../components/MonthNavigation";
import { useState } from "react";

const Home = ({ lists, setLists }) => {
  // 저장된 로컬스토리지 lists 데이터 중에서 선택한 달과 맞는 데이터 가져오기 -> getMonth()
  const [month, setMonth] = useState(
    parseInt(localStorage.getItem("filteredByMonth")) || null
  );

  const filteredExpense = lists.filter(
    (list) => new Date(list.date).getMonth() === month
  );

  return (
    <>
      <header>
        <h1>ACCOUNTING BOOK</h1>
      </header>
      <StMain>
        <Form setLists={setLists} lists={lists} month={month} />
        <MonthNavigation month={month} setMonth={setMonth} />
        <ExpenseListByMonth filteredExpense={filteredExpense} />
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

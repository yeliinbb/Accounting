import styled from "styled-components";
import Expense from "./Expense";
import { ExpenseContext } from "../context/ExpenseContext";
import { useContext } from "react";

const ExpenseListByMonth = () => {
  const { filteredLists = [] } = useContext(ExpenseContext);
  // console.log(filteredLists);
  return (
    <StUl>
      {filteredLists.length > 0 ? (
        filteredLists.map((list) => <Expense key={list.id} list={list} />)
      ) : (
        <StNoExpenseWrapper>
          <StNoExpenseBox>지출이 없습니다.</StNoExpenseBox>
        </StNoExpenseWrapper>
      )}
    </StUl>
  );
};

export default ExpenseListByMonth;

const StUl = styled.ul`
  background-color: #f6f5f4;
  width: 1200px;
  display: grid;
  /* grid-template-rows: repeat(auto-fit,minmax(70px, 1fr)); */
  grid-auto-rows: minmax(80px, auto);
  gap: 10px;
  padding: 20px 30px;
  box-sizing: border-box;
  border-radius: 15px;
`;

const StNoExpenseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StNoExpenseBox = styled.span`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #dbe1d9;
  text-align: center;
  align-content: center;
  font-size: 16px;
`;

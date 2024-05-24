import styled from "styled-components";
import Expense from "./Expense";

const ExpenseListByMonth = ({ filteredLists }) => {
  // 맞다면 클릭했을 때 해당 달 내역만 화면에 보여주기
  // const filteredList = lists.filter((list, index) => {
  //   console.log(list);
  //   return list[date].getMonth() === monthFiltered;
  // });

  return (
    <StUl>
      {filteredLists.map((list) => (
        <Expense key={list.id} list={list} />
      ))}
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

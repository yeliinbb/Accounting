import styled from "styled-components";
import Expense from "./Expense";
import { ExpenseContext } from "../context/ExpenseContext";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredExpense } from "../redux/slices/filteredExpenseSlice";

const ExpenseListByMonth = () => {
  const filteredExpense = useSelector(
    (state) => state.filteredExpense.filtered
  );
  const monthFiltered = useSelector((state) => state.monthFiltered);

  const dispatch = useDispatch();

  // 저장된 로컬스토리지 lists 데이터 중에서 선택한 달과 맞는 데이터 가져오기 -> getMonth()
  useEffect(() => {
    const savedExpense = JSON.parse(localStorage.getItem("lists")) || [];
    // console.log(savedExpense);
    const filtered = savedExpense.filter(
      (list) => new Date(list.date).getMonth() === monthFiltered
    );
    // console.log(filtered);
    if (filtered.length > 0) {
      dispatch(setFilteredExpense(...filtered));
    }
  }, []);

  return (
    <StUl>
      {filteredExpense.length > 0 ? (
        filteredExpense.map((list) => <Expense key={list.id} />)
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

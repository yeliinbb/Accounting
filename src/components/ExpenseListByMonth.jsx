import { useEffect, useState } from "react";
import Expense from "./Expense";

const ExpenseListByMonth = ({ lists, monthFiltered }) => {
  const [filteredLists, setFilteredLists] = useState([]);
  // 저장된 로컬스토리지 lists 데이터 중에서 선택한 달과 맞는 데이터 가져오기 -> getMonth()

  useEffect(() => {
    const filtered = lists.filter(
      (list) => new Date(list.date).getMonth() === monthFiltered
    );
    setFilteredLists(filtered);
  }, [lists, monthFiltered]);
  // 맞다면 클릭했을 때 해당 달 내역만 화면에 보여주기
  // const filteredList = lists.filter((list, index) => {
  //   console.log(list);
  //   return list[date].getMonth() === monthFiltered;
  // });

  return (
    <ul>
      {filteredLists.map((list) => (
        <Expense key={list.id} list={list} />
      ))}
    </ul>
  );
};

export default ExpenseListByMonth;

import Expense from "./Expense";

const ExpenseListByMonth = ({ filteredLists }) => {
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

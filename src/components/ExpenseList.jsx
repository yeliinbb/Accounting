import Expense from "./Expense";

const ExpenseList = ({ lists, setLists }) => {
  return (
    <ul>
      {lists.map((list) => (
        <Expense key={list.id} setLists={setLists} list={list} />
      ))}
    </ul>
  );
};

export default ExpenseList;

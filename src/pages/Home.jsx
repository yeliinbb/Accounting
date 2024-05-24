import ExpenseListByMonth from "../components/ExpenseListByMonth";
import Form from "../components/Form";
import MonthsList from "../components/MonthList";
import { useState } from "react";

const Home = ({ lists, setLists, addList }) => {
  const [monthFiltered, setMonthFiltered] = useState("");
  return (
    <>
      <header>
        <h1>ACCOUNTING BOOK</h1>
      </header>
      <main>
        <Form setLists={setLists} lists={lists} addList={addList} />
        <MonthsList setMonthFiltered={setMonthFiltered} />
        <ExpenseListByMonth
          lists={lists}
          setLists={setLists}
          setMonthFiltered={setMonthFiltered}
          monthFiltered={monthFiltered}
        />
      </main>
    </>
  );
};

export default Home;

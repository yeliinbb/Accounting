import ExpenseList from "../components/ExpenseList";
import Form from "../components/Form";
import MonthsList from "../components/MonthList";

const Home = () => {
  return (
    <>
      <header>
        <h1>ACCOUNTING BOOK</h1>
      </header>
      <main>
        <Form />
        <MonthsList />
        <ExpenseList />
      </main>
    </>
  );
};

export default Home;

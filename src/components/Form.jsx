import uuid from "react-uuid";
import TextInput from "./TextInput";

const Form = ({ setLists, addList }) => {
  // 폼이 제출됐을 때 데이터 저장
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const date = formData.get("date");
    const item = formData.get("item");
    const amount = formData.get("amount");
    const description = formData.get("description");

    const nextList = {
      id: uuid(),
      date,
      item,
      amount: Number(amount),
      description,
    };

    if (!date || !item || !amount || !description) {
      alert("내용을 모두 입력해주세요.");
    } else alert("내용이 입력됐습니다.");

    setLists((prevList) => [nextList, ...prevList]);
    addList(nextList);
    event.target.reset();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      {/* <Box>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" placeholder="YYYY-MM-DD" name="date" />
      </Box>
      <Box>
        <label htmlFor="item">Item</label>
        <input type="text" id="item" placeholder="spending item" name="item" />
      </Box>
      <Box>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          placeholder="spending amount"
          name="amount"
        />
      </Box>
      <Box>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          placeholder="description"
          name="description"
        />
      </Box> */}
      <TextInput type="date" htmlFor="date" name="date" placeholder="date" />
      <TextInput type="text" htmlFor="item" name="item" placeholder="item" />
      <TextInput
        type="number"
        htmlFor="amount"
        name="amount"
        placeholder="amount"
      />
      <TextInput
        type="text"
        htmlFor="description"
        name="description"
        placeholder="description"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;

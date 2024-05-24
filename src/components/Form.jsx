import uuid from "react-uuid";
import TextInput from "./TextInput";
import { useEffect, useRef } from "react";

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

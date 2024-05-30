import uuid from "react-uuid";
import styled from "styled-components";
import { useState } from "react";

const Form = ({ setLists, lists, month }) => {
  // 새로운 리스트를 추가하는 함수
  const addList = (nextList) => {
    const updateLists = [nextList, ...lists];
    setLists(updateLists);
    localStorage.setItem("lists", JSON.stringify(updateLists));
  };

  // forData 상태 관리
  const [formData, setFormData] = useState({
    date: "",
    item: "",
    amount: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  // 날짜 형식 유효성 검사
  const validateDate = (date) => {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(date)) {
      return "날짜는 YYYY-MM-DD 형식이어야 합니다.";
    }
    const parsedDate = new Date(date);
    if (isNaN(parsedDate)) {
      return "유효한 날짜를 입력하세요.";
    }
    return "";
  };

  // 금액 형식 유효성 검사
  const validateAmount = (amount) => {
    if (isNaN(amount)) {
      return "금액은 숫자여야 합니다.";
    }
    if (amount < 0) {
      return "금액은 0보다 작을 수 없습니다.";
    }
    return "";
  };

  // 폼이 제출됐을 때 데이터 저장
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const parseAmount = parseInt(formData.amount, 10);

    const nextList = {
      id: uuid(),
      amount: parseAmount,
      ...formData,
    };

    // 유효성 검사
    const dateError = validateDate(formData.date);
    const amountError = validateAmount(formData.amount);

    // 하나라도 입력이 안 됐을 경우
    if (
      !formData.date ||
      !formData.item ||
      !parseAmount ||
      !formData.description
    ) {
      return alert("내용을 모두 입력해주세요.");
      // 날짜랑 숫자 형식 오류
    } else if (dateError || amountError) {
      // 유효성 검사 실패 시 alert 창으로 오류 메시지 표시
      if (dateError) {
        alert(dateError);
      }
      if (amountError) {
        alert(amountError);
      }
    } else {
      // 유효성 검사 통과 시 데이터를 처리하는 로직 추가 (예: 서버로 전송, 로컬 상태에 저장 등)
      console.log("폼 데이터 제출:", formData);
      alert("내용이 입력됐습니다.");
      addList(nextList);
      // 제출 후 폼 초기화
      setFormData({
        date: "",
        item: "",
        amount: "",
        description: "",
      });
    }
  };

  const monthSelected = ("0" + (month + 1)).slice(-2);

  return (
    <StFrom onSubmit={onSubmitHandler}>
      <StBox>
        <StLabel htmlFor="date">Date</StLabel>
        <StInput
          type="text"
          id="date"
          placeholder={`2024-${monthSelected}-01`}
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </StBox>
      <StBox>
        <StLabel htmlFor="item">Item</StLabel>
        <StInput
          type="text"
          id="item"
          placeholder="spending item"
          name="item"
          value={formData.item}
          onChange={handleChange}
        />
      </StBox>
      <StBox>
        <StLabel htmlFor="amount">Amount</StLabel>
        <StInput
          type="number"
          id="amount"
          placeholder="spending amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
      </StBox>
      <StBox>
        <StLabel htmlFor="description">Description</StLabel>
        <StInput
          type="text"
          id="description"
          placeholder="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </StBox>
      <StBtn type="submit">Save</StBtn>
    </StFrom>
  );
};

export default Form;

const StFrom = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f5f4;
  width: 1200px;
  padding: 30px 50px;
  box-sizing: border-box;
  border-radius: 15px;
  gap: 20px;
`;

const StBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StLabel = styled.label`
  font-size: 18px;
  font-weight: 600;
`;

const StInput = styled.input`
  border: none;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  padding: 0px 7px;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.4);

  ::placeholder {
    color: rgba(0, 0, 0, 0.2);
    align-content: center;
  }
`;

const StBtn = styled.button`
  background-color: #78866b;
  color: #f8f2eb;
  border: 0;
  width: 70px;
  height: 30px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;

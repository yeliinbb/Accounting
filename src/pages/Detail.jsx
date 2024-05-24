import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = ({ lists, setLists }) => {
  // 기존 데이터 가져오기
  const location = useLocation();
  const prevData = location.state;
  // const { id } = useParams();
  // console.log(id);
  // console.log(lists);

  // 수정되는 값 반영을 위한 useRef 사용
  const dateRef = useRef("");
  const itemRef = useRef("");
  const amountRef = useRef("");
  const descriptionRef = useRef("");

  const expenseUpdate = () => {
    // 수정 이벤트가 실행될 때 데이터값 가져오기.
    // 안에서 정의해줘야 수정된 데이터 값을 사용할 수 있음.
    const updatedDate = dateRef.current.value;
    const updatedItem = itemRef.current.value;
    const updatedAmount = amountRef.current.value;
    const updatedDescription = descriptionRef.current.value;

    const updatedList = lists.map((list) =>
      list.id === prevData.id
        ? {
            ...list,
            date: updatedDate,
            item: updatedItem,
            amount: Number(updatedAmount),
            description: updatedDescription,
          }
        : list
    );
    console.log("수정완료");
    setLists(updatedList);
    localStorage.setItem("lists", JSON.stringify(updatedList));
    // window.location.replace("/");
  };
  const expenseDelete = () => {};

  useEffect(() => {
    dateRef.current.focus();
  }, []);

  return (
    <DetailSection>
      <DetailInputBox>
        <label htmlFor="detail-date">Date</label>
        <DetailInput
          type="date"
          id="detail-date"
          defaultValue={prevData.date}
          ref={dateRef}
        />
        <label htmlFor="detail-item">Item</label>
        <DetailInput
          type="text"
          id="detail-item"
          defaultValue={prevData.item}
          ref={itemRef}
        />
        <label htmlFor="detail-amount">Amount</label>
        <DetailInput
          type="number"
          id="detail-amount"
          defaultValue={prevData.amount}
          ref={amountRef}
        />
        <label htmlFor="detail-description">Details</label>
        <DetailInput
          type="text"
          id="detail-description"
          defaultValue={prevData.description}
          ref={descriptionRef}
        />
      </DetailInputBox>
      <DetailBtnBox>
        <Link to="/">
          <StDetailBtn backgroundcolor="#F0AD4E" onClick={expenseUpdate}>
            Edit
          </StDetailBtn>
        </Link>
        <StDetailBtn backgroundcolor="#D9534F" onClick={expenseDelete}>
          Delete
        </StDetailBtn>
        <Link to="/">
          <StDetailBtn backgroundcolor="#418bca">Back to Home</StDetailBtn>
        </Link>
      </DetailBtnBox>
    </DetailSection>
  );
};

export default Detail;

const DetailSection = styled.section`
  background-color: #f6f5f4;
  width: 800px;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const DetailInputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

const DetailInput = styled.input`
  border: 1.5px solid rgba(94, 94, 94, 0.3);
  width: 100%;
  height: 40px;
  border-radius: 5px;
  padding: 0px 7px;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.4);
  margin-bottom: 10px;
`;

const DetailBtnBox = styled.div`
  display: flex;
  gap: 7px;
`;

const StDetailBtn = styled.button`
  background-color: ${(props) => props.backgroundcolor};
  color: #f8f2eb;
  border: 0;
  width: max-content;
  padding: 0px 15px;
  height: 35px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
`;

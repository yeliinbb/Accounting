import styled from "styled-components";

const BtnColorList = ["#F0AD4E", "#D9534F", "#418bca"];
const getBoxName = (color) => {
  switch (color) {
    case "#F0AD4E":
      return "Edit";
    case "#D9534F":
      return "Delete";
    case "#418bca":
      return "Back to Home";
    default:
      return "Click";
  }
};

const Detail = () => {
  return (
    <DetailSection>
      <DetailInputBox>
        <label htmlFor="detail-date">Date</label>
        <DetailInput type="date" id="detail-date" />
        <label htmlFor="detail-item">Item</label>
        <DetailInput type="text" id="detail-item" />
        <label htmlFor="detail-amount">Amount</label>
        <DetailInput type="number" id="detail-amount" />
        <label htmlFor="detail-details">Details</label>
        <DetailInput type="text" id="detail-details" />
      </DetailInputBox>
      <DetailBtnBox>
        {BtnColorList.map((boxColor) => {
          return (
            <DetailBtn key={boxColor} backgroundcolor={boxColor}>
              {getBoxName(boxColor)}
            </DetailBtn>
          );
        })}
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

const DetailBtn = styled.button`
  background-color: ${(props) => props.backgroundcolor};
  color: #f8f2eb;
  border: 0;
  width: max-content;
  padding: 0px 15px;
  height: 35px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
`;

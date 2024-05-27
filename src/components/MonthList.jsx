import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ExpenseContext } from "../context/ExpenseContext";

const MonthNameList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MonthsList = () => {
  const { setMonthFiltered } = useContext(ExpenseContext);

  const [activeIndex, setActiveIndex] = useState(
    parseInt(localStorage.getItem("filteredByMonth")) || null
  );

  // useState의 상태가 0이 아닐 경우 로컬스토리지에서 데이터를 가져와서
  // setMonthfiltered에 activeIndex 넣어 화면에 그려주기
  useEffect(() => {
    if (activeIndex !== 0) {
      setMonthFiltered(parseInt(localStorage.getItem("filteredByMonth")));
    }
  }, []);

  // 클릭했을 때 해당 달 내역만 화면에 보여주기 위해 index 사용
  const handleClick = (index) => {
    setActiveIndex(index);
    setMonthFiltered(index);
    localStorage.setItem("filteredByMonth", index);
  };

  return (
    <StSection>
      {MonthNameList.map((month, index) => {
        return (
          <StMonthBox
            $active={activeIndex === index}
            key={month}
            onClick={() => handleClick(index)}
          >
            {month}
          </StMonthBox>
        );
      })}
    </StSection>
  );
};

export default MonthsList;

const StSection = styled.section`
  background-color: #f6f5f4;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  width: 1200px;
  padding: 20px 30px;
  box-sizing: border-box;
  border-radius: 15px;
`;

const StMonthBox = styled.div`
  background-color: ${(props) => (props.$active ? "#FFA07A" : "#80918e")};
  color: #f8f2eb;
  font-weight: 600;
  text-align: center;
  align-content: center;
  padding: 15px 20px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.$active ? "0px 0px 10px 2px rgba(0, 0, 0, 0.2);" : "none"};
  &:hover {
    transition: 0.15s;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
    background-color: #ffa07a;
  }
`;

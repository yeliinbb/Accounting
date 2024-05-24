import { useState } from "react";
import styled from "styled-components";

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

const MonthsList = ({ setMonthFiltered }) => {
  const [activeIndex, setActiveIndex] = useState(
    localStorage.getItem("filteredByMonth") || 0
  );
  console.log(activeIndex);
  const handleClick = (index) => {
    setActiveIndex(index);
    setMonthFiltered(index);
    localStorage.setItem("filteredByMonth", index);
  };

  return (
    <section>
      {MonthNameList.map((month, index) => {
        return (
          <MonthBox
            $active={activeIndex === index}
            key={month}
            onClick={() => handleClick(index)}
          >
            {month}
          </MonthBox>
        );
      })}
    </section>
  );
};

export default MonthsList;

const MonthBox = styled.div`
  background-color: ${(props) => (props.$active ? "#FFA07A" : "#80918e")};
  color: #f8f2eb;
  font-weight: 600;
  text-align: center;
  align-content: center;
  padding: 15px 20px;
  border-radius: 10px;
  cursor: pointer;
`;

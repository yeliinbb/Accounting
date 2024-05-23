import { useState } from "react";
import styled from "styled-components";

const MonthNameList = [
  { name: "January", isClicked: false },
  { name: "February", isClicked: false },
  { name: "March", isClicked: false },
  { name: "April", isClicked: false },
  { name: "May", isClicked: false },
  { name: "June", isClicked: false },
  { name: "July", isClicked: false },
  { name: "August", isClicked: false },
  { name: "September", isClicked: false },
  { name: "October", isClicked: false },
  { name: "November", isClicked: false },
  { name: "December", isClicked: false },
  // "January",
  // "February",
  // "March",
  // "April",
  // "May",
  // "June",
  // "July",
  // "August",
  // "September",
  // "October",
  // "November",
  // "December",
];

const MonthsList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section>
      {MonthNameList.map((month, index) => {
        return (
          <MonthBox
            $active={activeIndex === index}
            key={month.name}
            onClick={() => handleClick(index)}
          >
            {month.name}
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

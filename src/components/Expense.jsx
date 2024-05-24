// Link로 개별 디테일 페이지 이동
// useParams와 아이디 사용 필요

import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Expense = ({ list }) => {
  const { id, date, item, amount, description } = list;
  // const params = useParams();
  return (
    <Link to={`/detail/${id}`} state={list}>
      <StLi>
        <StLiBox>
          <StLiBoxH3>{date}</StLiBoxH3>
          <StLiBoxP>
            {item} - {description}
          </StLiBoxP>
        </StLiBox>
        <StLiSpan>{`${amount}원`}</StLiSpan>
      </StLi>
    </Link>
  );
};

export default Expense;

const StLi = styled.li`
  background-color: #d1dad0c1;
  /* border: 1px solid #EC5800; */
  /* box-shadow: 0px 0px 10px 1px #ec560056; */
  color: #ec5800;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  gap: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    /* scale: 1.01; */
    transition: 0.2s;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
  }
`;

const StLiBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StLiBoxH3 = styled.h3`
  color: #f8f2eb;
`;

const StLiBoxP = styled.p`
  font-weight: 500;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StLiSpan = styled.span`
  font-weight: 500;
  font-size: 18px;
`;

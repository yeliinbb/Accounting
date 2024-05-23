// Link로 개별 디테일 페이지 이동
// useParams와 아이디 사용 필요

const Expense = ({ setLists, list }) => {
  const { id, date, item, amount, description } = list;
  return (
    <li>
      <div>
        <h3>{date}</h3>
        <p>
          {item} - {description}
        </p>
      </div>
      <span>{`${amount}원`}</span>
    </li>
  );
};

export default Expense;

import { createContext, useCallback, useEffect, useState } from "react";

export const ExpenseContext = createContext(null);

const ExpenseContextProvider = ({ children }) => {
  const [lists, setLists] = useState([]);

  // 컴포넌트가 마운트될 때 로컬스토리지에서 값을 가져오기
  useEffect(() => {
    const savedLists = localStorage.getItem("lists");
    const newLists = savedLists ? JSON.parse(savedLists) : [];
    setLists(newLists);
  }, []);

  // // 새로운 리스트를 추가하는 함수
  const addList = useCallback(
    (nextList) => {
      const updateLists = [nextList, ...lists];
      setLists(updateLists);
      localStorage.setItem("lists", JSON.stringify(updateLists));
    },
    [lists]
  );

  // 선택된 달 상태 관리
  const [monthFiltered, setMonthFiltered] = useState(
    parseInt(localStorage.getItem("filteredByMonth")) || null
  );

  return (
    <ExpenseContext.Provider
      value={{
        lists,
        setLists,
        addList,
        monthFiltered,
        setMonthFiltered,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;

import styled from "styled-components";

const Form = () => {
  return (
    <form>
      <Box>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" />
      </Box>
      <Box>
        <label htmlFor="item">Item</label>
        <input type="text" id="item" placeholder="spending item" />
      </Box>
      <Box>
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" placeholder="spending amount" />
      </Box>
      <Box>
        <label htmlFor="details">Details</label>
        <input type="text" id="details" placeholder="spending details" />
      </Box>
      <button>Save</button>
    </form>
  );
};

export default Form;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

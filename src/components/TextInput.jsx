import styled from "styled-components";

const TextInput = ({ type, htmlFor, name, placeholder }) => {
  return (
    <Box>
      <label htmlFor={htmlFor}>{name}</label>
      <input type={type} id={htmlFor} name={name} placeholder={placeholder} />
    </Box>
  );
};

export default TextInput;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

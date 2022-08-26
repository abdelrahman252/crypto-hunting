import styled from "styled-components";

const SelectButton = ({ children, selected, onClick }) => {
  const Box = styled("span")(({ theme }) => ({
    border: "1px solid gold",
    borderRadius: 5,
    padding: 10,

    fontFamily: "Montserrat",
    cursor: "pointer",
    backgroundColor: selected ? "gold" : "",
    color: selected ? "black" : "",
    fontWeight: selected ? 700 : 500,
    "&:hover": {
      backgroundColor: "gold",
      color: "black",
    },
    width: "22%",
    "@media(max-width: 767px)": {
      display: "flex",
      justifyContent: "center",
      
      alignItems: "center",
    },
  }));
  return <Box onClick={onClick}>{children}</Box>;
};

export default SelectButton;

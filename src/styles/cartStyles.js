const styles = {
  productCount: {
    height: "30px",
    "& a": {
      textDecoration: "none",
      fontWeight: "700",
      color: "black",
    },
  },
  buttonCount: {
    display: "inlineBlock",
    width: "30px",
    height: "30px",
    backgroundColor: "#2196F3",
    color: "white",
    fontSize: "24px",
    lineHeight: "30px",
    textAlign: "center",
    border: "none",
    outline: "none",
    "&:active": {
      backgroundColor: "#1565C0",
    },
    "&:disabled": {
      backgroundColor: "lightgrey",
    },
  },
  numberProduct: {
    display: "inlineBlock",
    width: "46px",
    height: "28px",
    fontSize: "24px",
    border: "1px solid silver",
    textAlign: "center",
  },
};

export default styles;

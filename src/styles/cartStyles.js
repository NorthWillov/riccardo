const styles = {
  root: {
    maxWidth: "650px",
    margin: "0 auto",
  },
  itemCard: {
    display: "flex",
    alignItems: "center",
    maxWidth: "300px",
    marginRight: "0",
    "& p": {
      margin: "0",
      color: "#2e4357",
    },
    "& h6": {
      margin: "0",
    },
  },
  productCount: {
    display: "flex",
    marginTop: "25px",
    "& a": {
      textDecoration: "none",
      fontWeight: "700",
      color: "black",
    },
  },
  productPrice: {
    width: "100px",
    marginTop: "25px",
  },
  trashIcon: {
    marginTop: "20px",
    cursor: "pointer",
  },
  buttonCount: {
    width: "30px",
    margin: "0 15px 0 15px",
    color: "white",
    fontSize: "24px",
    lineHeight: "20px",
    border: "none",
    borderRadius: "0.5rem",
    outline: "none",
    "&:disabled": {
      backgroundColor: "lightgrey",
    },
  },
  numberProduct: {
    width: "60px",
    height: "30px",
    fontSize: "24px",
    border: "1px solid silver",
    borderRadius: "0.5rem",
    textAlign: "center",
  },
  finalBtns: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
  },
  sumToPay: { display: "flex", justifyContent: "flex-end", marginTop: "30px" },
};

export default styles;

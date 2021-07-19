export const useStyles = () => ({
  container: {
    width: "100%",
    border: "0.1rem solid #bbb",
    borderRadius: "0.5rem",
    "&:hover": {
      border: "0.1rem solid black",
    },
  },
  checkGroup: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: "1.5rem",
    justifyContent: "space-between",
    flexWrap: "wrap",
    boxSizing: 'border-box',
    "&::after": {
      content: '""',
      flex: "auto",
    },
  },
});

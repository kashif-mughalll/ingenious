export const useStyles = () => ({
  container: {
    width: "50rem",
    backgroundColor: "grey",
    height: "50vh",
  },
  checkGroup: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: '2rem',
    justifyContent: "space-between",
    flexWrap: "wrap",
    "&::after": {
        content: '""',
        flex: "auto",
      }
  },
});

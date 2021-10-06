export const useStyles = () => ({
  checked: {
    backgroundColor: "blue",
    color: "#fff",
    margin: "0.6rem",
  },
  simple: {
    margin: "0.7rem",
    marginLeft: "0rem",
  },
  label: {
    fontSize: "1.3rem",
    padding : '1.2rem'
  },
  focusChecked: {
      '&:focus': {
        backgroundColor: 'blue',
        color:'white'
      }
  },
  focusUnChecked: {
      '&:focus': {
        backgroundColor: 'rgb(206, 206, 206)',
        color:'black'
      }
  },
});

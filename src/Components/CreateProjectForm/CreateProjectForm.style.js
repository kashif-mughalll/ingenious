export const style = ()=> ({
    inputClass : {
      fontSize : "1.5rem",
      lineheight : "3rem"
    },
    lineHeight : {
      fontSize : "1.4rem",
      lineHeight : "1.7rem",
      boxSizing : "border-box"
    },
    marginClass : {
      marginBottom : "1rem",
    },
    marginClass2 : {
      margin : "1rem 0",
      marginBottom : "3rem",
      boxSizing : 'border-box'
    },
    marginClass22 : {
      margin : "1rem 0",
      marginBottom : "3rem",
      boxSizing : 'border-box',
      marginRight : "3.5rem"
    },
    marginClass3 : {
      margin : "1rem 0",
    },
    marginbottom : {
      marginBottom : "2rem",
    },
    margintop : {
      marginTop : "2rem",
    },
    container : {
      padding: '1rem',
      width : "100%",
      display : 'flex',
      flexDirection : "column",
      backgroundColor: 'white',
      '&::-webkit-scrollbar': {
          width: '6px'
      },
      '&::-webkit-scrollbar-thumb': {
          background: '888', 
          borderRadius: '5px',
      },
      '&::-webkit-scrollbar-thumb:hover': {
          background: '#555',
      }
    },
    modalView: {
      height: '65vh',
      padding: '3rem',
      overflowY: 'scroll',
      borderRadius: '1.5rem',
      display : 'flex',
      flexDirection : "column",
      backgroundColor: 'white',
      '&::-webkit-scrollbar': {
          width: '6px'
      },
      '&::-webkit-scrollbar-thumb': {
          background: '888', 
          borderRadius: '5px',
      },
      '&::-webkit-scrollbar-thumb:hover': {
          background: '#555',
      }
    }
  });
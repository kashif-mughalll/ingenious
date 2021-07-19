export const useStyles = () => ({
    container1: {
        width: '88rem',
        backgroundColor: '#bbb',
        height: '70rem',
    },
    container: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '0.5rem'
    },
    header: {
        width: '100%',
        height: '6rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '0.1rem solid #bbb'
    },
    description: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '1.5rem',
        boxSizing: 'border-box',
    },
    footer: {
        width: '100%',
        height: '4rem',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: '1.6rem',
        borderTop: '0.1rem solid #bbb',
        '& i': {
            paddingRight: '0.5rem',
            fontSize: '2rem'
        },
        '& > div:hover': {
            color: 'rgb(0, 62, 155)',
            cursor: 'pointer'
        }
    },
    author: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    avatar:{
        '& img':{
            width: '5rem',
            height: '5rem',
            padding: '0 1rem',
            borderRadius: '50%',
            overflow: 'hidden',
        }
    },
    mainHead: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
    },
    authName: {
        fontSize: '1.8rem',
        fontWeight: 'bold',
        color: 'rgb(0, 62, 155)',
        '&:hover': {
            cursor: 'pointer',
            color: 'rgb(0, 82, 255)'
        }
    },
    location: {
        fontSize: '1.2rem',
        color: '#666',
        '& i':{
            paddingRight: '0.5rem'
        }
    },
    dates: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        paddingRight: '1.5rem',
        fontSize: '1.2rem',
        color: '#666',
        '& b': {
            color: 'rgb(0, 62, 155)'
        }
    },
    projectTitle: {
        fontSize: '2.4rem',
        fontWeight: 'bold',
        padding: '1rem 0',
        color: 'rgb(0, 62, 155)'
    },
    projectDescription: {
        fontSize: '1.4rem',
        color: '#666',
    },
    projectDomain: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        padding: "1.5rem 0",
        justifyContent: "space-between",
        flexWrap: "wrap",
        boxSizing: 'border-box',
        "&::after": {
          content: '""',
          flex: "auto",
        },
    }
})
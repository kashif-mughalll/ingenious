export const useStyles = () => ({
    container: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '0.5rem',
        marginBottom: '2rem',
        border: '0.1rem solid #ddd',
        cursor: 'pointer'
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
        whiteSpace: 'pre-line',
    },
    footer: {
        width: '100%',
        height: '4rem',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: '1.6rem',
        color: '#333',
        paddingBottom: '1rem',
        opacity: '0.8',
        '& i': {
            paddingRight: '0.7rem',
            fontSize: '1.7rem',
            color: '#777',
        },
        '& > div:hover': {
            color: 'rgb(0, 62, 155)',
            cursor: 'pointer',
            opacity: '1',
            '& i': {
                color: 'rgb(0, 62, 155)'
            }
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
            width: '4rem',
            height: '4rem',
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
        fontSize: '1.6rem',
        fontWeight: 'bold',
        color: '#555',
        marginBottom : '0.3rem',
        '&:hover': {
            cursor: 'pointer',
            color: 'rgb(0, 62, 155)'
        }
    },
    location: {
        fontSize: '1.1rem',
        color: '#666',
        '& i':{
            paddingRight: '0.5rem',
            '&:hover': {
                color: '#e30000a1',
            }
        }
    },
    dates: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        paddingRight: '1.5rem',
        fontSize: '1.2rem',
        color: '#888',
        '& :first-child': {
            marginBottom : '0.8rem'
        }
    },
    projectTitle: {
        fontSize: '2rem',
        fontWeight: 'bold',
        padding: '1rem 0',
        color: 'rgb(0, 62, 155)'
    },
    projectDescription: {
        fontSize: '1.4rem',
        color: '#666',
        lineHeight: '2.2rem',
    },
    projectDomain: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        paddingTop: "1.5rem",
        justifyContent: "space-between",
        marginBottom: '1rem',
        flexWrap: "wrap",
        boxSizing: 'border-box',
        "&::after": {
          content: '""',
          flex: "auto",
        },
    },
    matchBox: {
        color: '#888',
        fontSize: '1.3rem',
        marginTop: '1.8rem'
    }
})
export const useStyles = () => ({
    container: {
        width: '60rem',
        padding: '3rem',
        backgroundColor: 'white',
        maxHeight: '80vh',
        borderRadius: '1rem',
        overflowY: 'scroll',
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
    authDescription: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar:{
        '& img':{
            width: '5rem',
            height: '5rem',
            marginRight: '1rem',
            borderRadius: '50%',
            overflow: 'hidden',
        }
    },
    authName: {
        fontWeight: 'bold',
        fontSize: '2rem',
        fontStyle: 'italic',
    },
    projectName: {
        fontSize: '4rem',
        fontWeight: 'bold',
        marginTop: '2rem',
    },
    dates: {
        marginTop: '3rem',
        fontSize: '1.3rem',
        '& b': {
            marginRight: '0.7rem',
        },
        '& > div': {
            marginTop: '1rem',
        }
    },
    description: {
        marginTop: '3rem',
        '& b': {
            fontSize: '2rem',
        },
        '& div': {
            fontSize: '1.5rem',
            marginTop: '0.8rem',
        },
    },
    button: {
        width: '100%',
        fontSize: '1.6rem',
        color: 'white',
        marginTop: '3rem',
        marginBottom: '1rem',
        backgroundColor: 'rgb(0, 62, 155)',
        padding: '1.5rem 0',
        borderRadius: '0.5rem',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'rgb(0, 45, 112)',
        },
    },
    domain: {
        marginTop: '2rem',
        '& b': {
            fontSize: '2rem',
        },
        '& p': {
            fontSize: '1.5rem',
            margin: '0.7rem 0'
        }
    }
});
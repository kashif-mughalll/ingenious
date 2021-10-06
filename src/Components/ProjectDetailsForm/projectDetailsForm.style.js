export const useStyles = () => ({
    container: {
        padding: '3rem',
        backgroundColor: 'white',
        maxHeight: '75vh',
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
    errorClass:{
        fontSize: '1.3rem',
        color : "red",
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
        fontSize: '1.7rem',
        color: '#555',
    },
    projectName: {
        fontSize: '2.4rem',
        fontWeight: 'bold',
        marginTop: '2rem',
        color: '#666',
    },
    dates: {
        marginTop: '3rem',
        fontSize: '1.3rem',
        color: '#888',
        '& b': {
            marginRight: '0.7rem',
        },
        '& > div': {
            marginTop: '1rem',
        }
    },
    description: {
        marginTop: '3rem',
        color: '#666',
        '& b': {
            fontSize: '1.8rem',
        },
        '& div': {
            fontSize: '1.4rem',
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
    },
    collaborators: {
        marginTop: '2rem'
    }
});
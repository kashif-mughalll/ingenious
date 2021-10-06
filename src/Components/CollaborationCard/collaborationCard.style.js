export const useStyles = () => ({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        border: '0.1rem dashed',
        borderColor: '#ddd white',
        '&:hover': {
            borderColor: '#666 white',
        }
    },
    avatar: {
        height: '6.3rem',
        '& img': {
            width: '5rem',
            height: '5rem',
            margin: '0.7rem',
            borderRadius: '50%',
            overflow: 'hidden',
        }
    },
    details: {
        width: '100%',
        fontSize: '1.4rem',
        padding: '1rem',
        textAlign: 'justify',
        color : '#444'
    },
    buttons: {
        width: '20rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 0.8rem',
        '& i': {
            marginRight: '1rem',
        }
    },
    reject: {
        backgroundColor: 'rgb(235, 50, 50)',
        width: '19rem',
        fontSize: '1.4rem',
        padding: '1rem 0',
        borderRadius: '0.5rem',
        color: 'white',
        margin : '0 0.3rem',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'rgb(255, 50, 50)',
        },
    },
})
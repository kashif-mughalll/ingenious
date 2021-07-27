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
        height: '7.4rem',
        '& img': {
            width: '6rem',
            height: '6rem',
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
    },
    buttons: {
        width: '20rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 0.8rem',
        '&>button': {
            width: '7rem',
            fontSize: '1.4rem',
            padding: '1rem 0',
            borderRadius: '0.5rem',
            color: 'white',
        }
    },
    accept: {
        backgroundColor: 'rgb(0, 62, 155)',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'rgb(0, 62, 255)',
        },
    },
    reject: {
        marginLeft: '0.5rem',
        backgroundColor: 'rgb(235, 50, 50)',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'rgb(255, 50, 50)',
        },
    },
})
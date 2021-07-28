export const useStyles = () => ({
    container: {
        width: '40rem',
        height: '25rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '2rem',
    },
    heading: {
        fontSize: '4rem',
        color: 'rgb(235, 50, 50)',
    },
    description: {
        margin: '3rem 0',
        fontSize: '1.5rem'
    },
    buttons: {
        width: '25rem',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: '0 0.8rem',
        '&>button': {
            width: '10rem',
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
        backgroundColor: 'rgb(235, 50, 50)',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'rgb(255, 50, 50)',
        },
    },
})
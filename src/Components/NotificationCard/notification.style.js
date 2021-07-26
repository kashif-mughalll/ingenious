export const useStyles = () => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    avatar: {
        width: '7rem',
        height: '6rem',
        marginRight: '1rem',
        '& img': {
            width: '100%',
            height: '100%',
            borderRadius: '50%'
        }
    },
    details: {
        width: '100%',
        backgroundColor: 'pink',
        fontSize: '1.4rem',
        padding: '1rem'
    },
    buttons: {
        width: '20rem',
        backgroundColor: 'blue',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
})
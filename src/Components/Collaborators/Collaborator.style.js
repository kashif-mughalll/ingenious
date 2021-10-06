export const useStyles = () => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        margin: '0.5rem 0',
        color: '#888',
        position: 'relative',
    },
    pictureBox: {
        '& img': {
            width: '2.6rem',
            height: '2.6rem',
            borderRadius: '50%',
            border: '0.2rem solid white',
        }
    },
    groupPictureBox: {
        height: '3rem',
        display: 'flex',
        position: 'relative',
        "&>div": {
            position: 'absolute',
            top: '0.8rem'
        },
        "&>:nth-child(1)" : {
            zIndex: '100',
        },
        "&>:nth-child(2)" : {
            zIndex: '80',
            left: '1rem'
        },
        "&>:nth-child(3)" : {
            zIndex: '50',
            left: '1.6rem'
        },
    },
    details: {
        paddingLeft: '1.5rem',
        fontSize: '1.3rem'
    },
    groupDetails: {
        position: 'absolute',
        top: '1.5rem',
        left: '5.5rem',
        fontSize: '1.3rem',
    },
    groupDetails1: {
        left: '4rem'
    },
    groupDetails2: {
        left: '5rem'
    },
    groupDetails3: {
        left: '5.5rem'
    },
})
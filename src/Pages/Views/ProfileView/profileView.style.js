export const useStyles = () => ({
    container: {
        boxSizing: 'border-box',
        width: '100%',
    },
    basic: {
        display: 'flex',
        // alignItems: 'center'
    },
    avatar:{
        '& img':{
            width: '15rem',
            height: '15rem',
            padding: '2rem',
            borderRadius: '50%',
            overflow: 'hidden',
        }
    },
    details: {
        fontSize: '1.7rem',
        '& > div>b': {
            paddingRight: '1rem'
        },
        '&>div': {
            marginTop: '1.5rem'
        }
    },
    name:{
        fontSize: '2.5rem',
    },
    email: {
        color: '#666',
        marginTop: '0 !important'
    },
    // contact: {
    //     paddingTop: '1rem'
    // },
    // dob: {
    //     paddingTop: '1rem'
    // },
    description: {
        display: 'flex',
        marginBottom: '2rem',
        '&>b': {
            fontSize: '1.7rem',
        },
        '&>p': {
            fontSize: '1.4rem',
            paddingRight: '2rem'
        }
    },
    domain: {
        display: 'flex',
        marginBottom: '2rem',
        '& > b': {
            marginTop: '0.6rem',
            fontSize: '1.7rem',
        },
        '& > div': {
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            boxSizing: 'border-box',
            fontSize: '1.4rem',
            paddingRight: '2rem',
            "&::after": {
                content: '""',
                flex: "auto",
            },
        },
    }
})
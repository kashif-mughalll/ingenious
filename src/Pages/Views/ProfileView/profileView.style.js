export const useStyles = () => ({
    container: {
        display: 'flex',
        boxSizing: 'border-box',
        width: '100%',
        overflow: 'hidden',
        padding: '.5rem'
    },
    leftBar: {
        marginRight: '2rem'
    },
    rightBar: {
        width: '100%',
    },
    avatar:{
        height: '22rem',
        '& img':{
            width: '12rem',
            height: '12rem',
            padding: '2rem',
            borderRadius: '50%',
            overflow: 'hidden',
        }
    },
    details: {
        fontSize: '1.7rem',
        height: '18rem',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: '0.5rem',
        '& i': {
            marginRight: '1rem'
        }
    },
    name: {
        fontSize: '2.5rem',
        letterSpacing: '0.2rem',
        color: 'rgb(0, 62, 155)',
    },
    email: {
        color: '#999',
        fontSize: '1.7rem',
    },
    contact: {
        fontSize: '1.8rem',
        marginTop: '1.7rem',
    },
    dob: {
        fontSize: '1.8rem',
        marginTop: '1.7rem',
    },
    about: {
        fontStyle: 'italic',
        padding: '1rem',
        margin: '2rem 0',
        borderRadius: '0.5rem',
        '& h1': {
            fontSize: '2rem',
            color: 'rgb(0, 62, 155)',
        },
        '& p': {
            fontSize: '1.5rem',
            paddingTop: '1rem',
            whiteSpace: 'pre-line',
        },
    },
    domain: {
        padding: '1rem',
        borderRadius: '0.5rem',
    },
    domainHeading: {
        fontSize: '2rem',
        fontStyle: 'italic',
        color: 'rgb(0, 62, 155)',
        marginBottom: '1.5rem'
    },
    domainList: {
        fontSize: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
    },
    domainItem: {
        margin: '1rem 0'
    },
    projects: {
        padding: '1rem',
        borderRadius: '0.5rem',
    },
    projectHeading: {
        marginBottom: '2rem',
        color: 'rgb(0, 62, 155)',
        fontStyle: 'italic',
        marginTop: '2rem'
    }
})
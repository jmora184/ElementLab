


const ENV = {
    dev: {
        apiUrl: 'http://localhost:52840/api/'
    },
    sit: {
        apiUrl: 'https://jobinifinite-backend.azurewebsites.net/api/'
    },
    prod: {
        apiUrl: 'https://jobinifinite.azurewebsites.net/api/'
    }
};

const LINK = {
    dev: {
        apiUrl: 'http://localhost:3000/jobPost/?'
    },
    sit: {
        apiUrl: 'https://jobinifinite-front.azurewebsites.net/jobPost/?'
    },
    prod: {
        apiUrl: 'https://hireclue.com/jobPost/?'
    }
};

const getEnvLink = () => {
    if (window.location.origin.toString() === 'http://localhost:3000') {
        return LINK.dev.apiUrl
    }

    if (window.location.origin.toString() === 'https://jobinifinite-front.azurewebsites.net') {
        return LINK.sit.apiUrl
    }

    if (window.location.origin.toString() === 'https://cluecap.com') {
        return LINK.prod.apiUrl
    }

}

const getEnvVars = () => {
    if (window.location.origin.toString() === 'http://localhost:3000') {
        return ENV.dev.apiUrl
    }

    if (window.location.origin.toString() === 'https://jobinifinite-front.azurewebsites.net') {
        return ENV.sit.apiUrl
    }

    if (window.location.origin.toString() === 'https://cluecap.com') {
        return ENV.prod.apiUrl
    }

}

export const selectedENV = getEnvVars();

export const selectedLINK = getEnvLink();

export const url = 'http://localhost:52840/api'
//Login
export const Login = "Login";


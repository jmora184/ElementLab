import { selectedENV } from '../constants/tokens.jsx';

export var method = async (data) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: data.email,
            fullname: data.fullname,
            message: data.message
        }),
    };

    return await fetch(selectedENV + 'ClueCap/Question', requestOptions)
}
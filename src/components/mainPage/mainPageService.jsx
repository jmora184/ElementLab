import { selectedENV } from '../constants/tokens.jsx';

export var method = async (data) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: data.email,
        }),
    };

    return await fetch('https://long-queen-a2bf.jmora1845.workers.dev/', requestOptions)
}
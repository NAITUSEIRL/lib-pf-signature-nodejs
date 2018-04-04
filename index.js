const checkInput = (secret, payload, prefix) => {
    // To check the input, maybe in the future we need to be more strict!
    if (!secret) {
        throw {
            "errorCode": 'validation/secret-token-missing',
            "errorDescription": 'You must provide the secret token to sign!'
        }
    }
};
module.exports = async (secret, payload, prefix = 'pf_') => {
    // Let's check the input
    checkInput(secret, payload, prefix);
    // Sorts, concatenates and hashes the parameters
    const message = Object.keys(payload)
        .map(k => [k, payload[k]])
        .filter(p => p[0].indexOf(prefix) === 0 && p[0] !== prefix + 'firma' && p[0] !== prefix + 'signature')
        .map(p => p.join(''))
        .sort()
        .join('');

    // Let's sign the payload with the secret
    let hmac = crypto.createHmac('sha256', secret);
    hmac.setEncoding('hex');
    hmac.write(message);
    hmac.end();

    // Return the promise (remember, we are async)
    return hmac.read();
};

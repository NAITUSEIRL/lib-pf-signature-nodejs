# PagoFacil signature library

## This library will help you to sign your transaction using NodeJS

## Installation

Inside your project, install it using NPM

```
npm i @pagofacil/lib-signature-node
```

## Usage

In your code, you have to import the library this way:

```
const pfSign = require('@pagofacil/lib-signature-node');
```

And then, you can use the pfSing module to sign your transactions.

The module takes 3 parameters:

- secret: Is the token secret used to sign the payload.
- payload: Is what you want to sign. It must have a prefix in every key.
- prefix: Every key in the payload needs to be prefixed with a string. By default, is 'pf_'.

This module will return a promise with the signature or throw an error that you can catch as exception.

So, the usage of the module comes to:

```
pfSign(secret, payload, prefix)
    .then(signature => {
        // Do something with the signature
    })
    .catch(error) => {
        // Do something with the error
    });
```

You can also don't give the prefix, if you do so, it will use the default PagoFacil prefix 'pf_'
```
pfSign(secret, payload)
    .then(signature => {
        // Do something with the signature
    })
    .catch(error) => {
        // Do something with the error
    });
```


## Complete Example
```
const pfSign = require('@pagofacil/lib-signature-node');

const payload = {
    myprefix_transactionId: 993,
    myprefix_callbackURL: 'https://mycallbackurl.com/993',
    myprefix_logo: 'https://myamazinglogo.com/993.png'
};

const token_secret = '68b156f5ba3e95d947f2aaded84414a6';

const prefix = 'myprefix';

pfSign(token_secret, payload, prefix)
    .then(signature => {
        console.log('This is the signature for my params', signature);
    })
    .catch(error => {
        console.log('Ups! something just went wrong', error);
    });
```
## Error messages

The error messages are JSON objects with the following structure:

```
{
    errorCode: 'group/what',
    errorDescription: 'A simple error description'
}
```

The possible error codes with detailed information:
- validation/secret-token-missing: means that you haven't give the secret token for sign the payload. Check your parameters when using the module.
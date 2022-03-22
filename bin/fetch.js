const axios = require('axios');

/**
 * Calls the endpoint with authorization bearer token.
 * @param {string} endpoint
 * @param {string} accessToken
 */
async function callApi(endpoint, accessToken) {

    const options = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };

    console.log('request made to web API at: ' + new Date().toString());

    try {
        const response = await axios.default.get(endpoint, options);
        return response.data;
    } catch (error) {
        console.log(error)
        return error;
    }
};

/**
 * Calls the endpoint with authorization bearer token.
 * @param {string} endpoint
 * @param {string} accessToken
 */
 async function callApiPOST(endpoint, body, accessToken) {

    const options = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };

    console.log('request made to web API at: ' + new Date().toString());
    const fakeBody = {
        "message": {
            "subject": "Graph Explorer",
            "body": {
                "contentType": "Text",
                "content": "Graph explorer"
            },
            "toRecipients": [
                {
                    "emailAddress": {
                        "address": "404answernotfound@qycc.onmicrosoft.com"
                    }
                }
            ]
        }
    }

    try {
        const response = await axios.default.post(endpoint, fakeBody, options)
        return response.data;
    } catch (error) {
        console.log(error)
        return error;
    }
};

module.exports = {
    callApi: callApi,
    callApiPOST: callApiPOST,
};
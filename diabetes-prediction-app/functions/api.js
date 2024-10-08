// functions/api.js
exports.handler = async (event, context) => {
    const data = { message: "Hello from your backend!" };
    return {
        statusCode: 200,
        body: JSON.stringify(data),
    };
};

module.exports = {
    email: {
        sendOnSuccess: true,
        sendOnError: true,
        to: "example@example.com",
        from: "node-deploy-hook",
        subjectOnSuccess: "Successfully updated repository",
        subjectOnError: "Failed to update respository",
        transport: {
            service: "Gmail",
            auth: {
                user: "somegmailuser@gmail.com",
                pass: "somepass"
            }
        }
    },
    port: 8888,
    serverRoot: '/var/www/'

};

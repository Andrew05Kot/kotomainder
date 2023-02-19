module.exports.login = (request, response) => {
    response.status(200).json({
        login: {
            email: request.body.email,
            password: request.body.password
        }
    })
}


module.exports.register = (request, response) => {
    request.status(200)
        .json({
            register: true
        })
}
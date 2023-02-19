module.exports.login = (response, request) => {
    request.status(200)
        .json({
            login: true
        })
}


module.exports.register = (response, request) => {
    request.status(200)
        .json({
            register: true
        })
}
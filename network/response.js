exports.succes = function (req, res, message, statusserver) {
    res.status(statusserver || 200).send({
        error: '',
        body: message
    });
    return true;
}

exports.error = function (req, res, message, status, details) {
    res.status(status || 400).send({
        error: message,
        body: ''
    });
    console.error(details);
    return false;
}
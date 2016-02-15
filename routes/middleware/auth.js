module.exports = function (req, res, next) {
    if (req.query.auth) {
        next();
    } else {
        res.status(401); // Unauthorized
        res.json({ err: 'Unauthorized' });
    }
};
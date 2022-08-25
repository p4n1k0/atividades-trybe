module.exports = (req, res, next) => {
    const { rating } = req.body.description;

    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
        const { rating } = req.body.description;

        if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      
        }
    }

    next();
};

const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 400;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        message
    })
}

export default errorMiddleware
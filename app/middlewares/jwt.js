
import jwt from 'jsonwebtoken';
const authMiddleware = (req, res, next) => {
    // Get the token from the Authorization header
    const token = req.headers['authorization'];
    console.log(token);

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token.split(' ')[1], "secretkey"); // 'Bearer <token>' format
        req.user = decoded;
        console.log(decoded); // Attach the decoded token to the request object
        next(); // Call the next middleware or route handler
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

export default authMiddleware;
// middleware/checkRole.js

import jwt from 'jsonwebtoken';
import config from '../config/config.js';

export default function checkRole(allowedRoles) {
    return (req, res, next) => {
        const token = req.header('x-auth-token');

        if (!token) {
            return res.status(401).json({ message: 'No token, authorization denied' });
        }

        try {
            const decoded = jwt.verify(token, config.jwtSecret);

            if (!allowedRoles.includes(decoded.user.role)) {
                return res.status(403).json({ message: 'Unauthorized' });
            }

            next();
        } catch (err) {
            res.status(401).json({ message: 'Token is not valid' });
        }
    };
}

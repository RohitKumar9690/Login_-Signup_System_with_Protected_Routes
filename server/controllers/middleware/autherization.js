import jwt from "jsonwebtoken";

const autherization = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {   
            return res.status(401).send({ message: "Unauthorized" });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded.user;
        next();
        } catch (error) {
            return res.status(401).send({ message: "Unauthorized" });
        }
        };

export default autherization;
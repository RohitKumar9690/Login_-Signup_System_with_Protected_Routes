import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const signup = async (req, res) => {
    const { name, email, password, phone_no } = req.body;
    if (!name || !email || !password || !phone_no) {
        return res.status(400).json({ message: 'Please provide all required fields.', success: false });
    }
    try {
        const user = await User.create({
            name,
            email,
            password,
            phone_no
        })
        user.save();
        return res.status(201).json({ message: 'User created successfully', user, success: true });

    } catch (error) {
        return res.status(400).json({ message: error.message, success: false });
    }
}

const login = async (req, res) => {
    const { email, password, phone_no } = req.body;
    try {
        let user;
        if (email) {
            user = await User.findOne({ email });
        } else if (phone_no) {
            user = await User.findOne({ phone_no });
        }
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or phone number', success: false });
        }

        // Compare the entered password with the stored hashed password
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        // Generate a JWT (include user info in the payload)
        const Payload = {
            user_id: user._id,
            name: user.name,
            email: user.email,
            phone_no: user.phone_no
        }

        const token = jwt.sign(Payload, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 3600000,
            sameSite: 'Strict',
        });

        return res.status(200).json({ message: 'Login successful', token, success: true });
    } catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
}

const logout = async (req, res) => {
    res.clearCookie('token');    
    res.status(200).json({ message: 'Logout successful', success: true });
};

export { signup, login, logout }
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Define user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,  // Name is required
      trim: true,      // Remove leading/trailing spaces
    },
    email: {
      type: String,
      required: true,  // Email is required
      unique: true,    // Email must be unique
      lowercase: true, // Convert email to lowercase
      trim: true,      // Remove leading/trailing spaces
    },
    password: {
      type: String,
      required: true,  // Password is required
      minlength: 6,    // Minimum length for password
    },
    phone_no: {
      type: String,    // Store phone number as a string (to accommodate various formats)
      required: true,  // Phone number is required
      trim: true,      // Remove leading/trailing spaces
    }
  },
  {
    timestamps: true,  // Automatically add createdAt and updatedAt fields
  }
);

// Pre-save hook to hash the password before saving to the database
userSchema.pre('save', async function(next) {
  // Only hash the password if it's modified or new
  if (this.isModified('password')) {
    try {
      const salt = await bcrypt.genSalt(10); // Generate a salt
      this.password = await bcrypt.hash(this.password, salt); // Hash the password
    } catch (err) {
      next(err); // Pass any error to the next middleware
    }
  }
  next(); // Continue with saving the user
});

// Method to compare the entered password with the stored hashed password
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Create and export the User model
const User = mongoose.model("User", userSchema); // Use singular 'User'
export default User;

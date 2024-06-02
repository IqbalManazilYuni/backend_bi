import User from "../models/UserModel.js";

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
  
    // Check if the required fields are provided
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please provide all required information for registration." });
    }
  
    try {
      // Check if the user already exists (you can replace this with your user model logic)
      const existingUser = await User.findOne({ name });
  
      if (existingUser) {
        return res.status(400).json({ message: "name already exists." });
      }
  
      // Create a new user
      const newUser = new User({ name, email, password });
      await newUser.save();
  
      res.status(201).json({ message: "Registration successful" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
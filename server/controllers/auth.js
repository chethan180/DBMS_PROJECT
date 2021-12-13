import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import staff from "../models/staff.js"
import dotenv from 'dotenv';
dotenv.config();

export const signin = async (req, res) => {

  const { Email, Password } = req.body;
  // return res.json(process.env.SECRET_SALT_VALUE);

  try {
    const oldUser = await staff.findOne({ Email });

    if (!oldUser) return res.json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(Password, oldUser.Password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ Email: oldUser.Email, id: oldUser._id }, process.env.SECRET_SALT_VALUE, { expiresIn: "1h" });

    const Staff = {Emp_Id : oldUser.Emp_Id , name : oldUser.Staff_Name ,Email : oldUser.Email ,Type : oldUser.Type };

    res.status(200).json({ result: Staff, token });
  } catch (err) {
    res.status(500).json(error.message);
  }
};



export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    const token = jwt.sign( { email: result.email, id: result._id }, process.env.SECRET_SALT_VALUE, { expiresIn: "1h" } );
   
    const Staff = {Emp_Id : oldUser.Emp_Id , name : oldUser.Staff_Name ,Email : oldUser.Email ,Type : oldUser.Type };

    res.status(200).json({ result: Staff, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};

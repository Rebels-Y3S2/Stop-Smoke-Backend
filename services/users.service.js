import {
    saveUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
} from '../repository/index.js';
import {User, validate} from "../models/index.js";
import bcrypt from "bcrypt";
import Joi from "joi";
import { jsonResponse } from "../utils/serviceUtilities.js";

// Create User service logic
export const saveUserService = (data) => {
    const { name, email, password, description, type  } = data;
    return saveUser({ name, email, password, description, type  });
  };

// Fetch All Users service logic
export const getUsersService = () => {
      return getUsers();
  };

// Fetch User service logic
 export const getUserService = (id) => {
    return getUser(id);
};

// Delete User service logic
export const deleteUserService = (id) => {
    return deleteUser(id);
};

// Update User service logic
export const updateUserService = (id, data) => {
    return updateUser(id, data);
};

// Validate user data
const validateUserData = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

// User Login
export const login = async (req, res) => {
	try {
		const { error } = validateUserData(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		//check if entered password is valid
		const isValidPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!isValidPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "Logged in successfully", userData: user });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
};

// User Registration
export const register = async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

        //To get salt string we will be using genSalt and storing it in the salt variable
		const salt = await bcrypt.genSalt(Number(process.env.SALT));

        //bcrypt password to hashing algorithm
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully", isSuccessfull: true });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error", isSuccessfull: false });
	}
};
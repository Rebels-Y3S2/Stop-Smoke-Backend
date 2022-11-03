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
import responseMessages from '../utils/responseMessages.js'

// Create User service logic
export const saveUserService = (data) => {
    const { firstName, email, password, pic, smokingtype } = data;
    return saveUser({ firstName, email, password, pic, smokingtype });
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
			return res.status(401).send({ message: responseMessages.INVALID_EMAIL_PASSWORD });

		//check if entered password is valid
		const isValidPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!isValidPassword)
			return res.status(401).send({ message: responseMessages.INVALID_EMAIL_PASSWORD });

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: responseMessages.LOGIN_SUCCESS, userData: user });
	} catch (error) {
		res.status(500).send({ message: responseMessages.INTERNAL_SERVER_ERROR });
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
				.send({ message: responseMessages.EMAIL_ALREADY_EXIST });

        //To get salt string we will be using genSalt and storing it in the salt variable
		const salt = await bcrypt.genSalt(Number(process.env.SALT));

        //bcrypt password to hashing algorithm
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: responseMessages.USER_CREATED_SUCCESS, isSuccessfull: true });
	} catch (error) {
		res.status(500).send({ message: responseMessages.INTERNAL_SERVER_ERROR , isSuccessfull: false });
	}
};
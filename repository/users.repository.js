import { User } from "../models/index.js";

// Save User repository logic
export const saveUser = (data) =>
  User.create(data);

// Fetch All users repository logic
export const getUsers = () =>
  User.find();

// Fetch user repository logic
export const getUser= (id) =>
  User.findById(id);

// Delete user repository logic
export const deleteUser = (id) =>
  User.findByIdAndDelete(id);

// Update user repository logic
export const updateUser = (id, data) =>
  User.findByIdAndUpdate(id, data, { new: true });
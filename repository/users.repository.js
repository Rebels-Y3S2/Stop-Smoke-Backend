import { User } from "../models/index.js";

export const saveUser = (data) =>
  User.create(data);

export const getUsers = () =>
  User.find();

export const getUser= (id) =>
  User.findById(id);

export const deleteUser = (id) =>
  User.findByIdAndDelete(id);
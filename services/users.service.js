import {
    saveUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
} from '../repository/index.js';

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
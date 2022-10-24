import {
    saveUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
} from '../repository/index.js';

// Create User service logic
export const saveUserService = async (data) => {
    const { name, email, password, description, type  } = data;
    return saveUser({ name, email, password, description, type  });
  };

// Fetch All Users service logic
export const getUsersService = async () => {
      return getUsers();
  };

// Fetch User service logic
 export const getUserService = async (id) => {
    return getUser(id);
};

// Delete User service logic
export const deleteUserService = async (id) => {
    return deleteUser(id);
};

// Update User service logic
export const updateUserService = async (id, data) => {
    return updateUser(id, data);
};
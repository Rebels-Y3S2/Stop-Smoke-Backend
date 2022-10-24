import {
    saveUser,
    getUsers,
    getUser,
    deleteUser,
} from '../repository/index.js';

export const saveUserService = async (data) => {
    const { name, email, password, description, type  } = data;
    return saveUser({ name, email, password, description, type  });
  };


export const getUsersService = async () => {
      return getUsers();
  };


 export const getUserService = async (id) => {
    return getUser(id);
};

export const deleteUserService = async (id) => {
    return deleteUser(id);
};

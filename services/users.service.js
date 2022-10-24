import {
    saveUser,
    getUsers,
} from '../repository/index.js';

export const saveUserService = async (data) => {
    const { name, email, password, description, type  } = data;
      await saveUser({ name, email, password, description, type  });
      return Promise.resolve("Successfully saved User.");
  };


export const getUsersService = async () => {
      const users  = await getUsers();
      return Promise.resolve(users);
  };
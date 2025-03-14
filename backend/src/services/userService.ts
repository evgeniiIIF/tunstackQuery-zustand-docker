import { AppDataSource } from '../data-source';
import { User } from '../models/User';

export const getUsers = async () => {
  const userRepository = AppDataSource.getRepository(User);
  return await userRepository.find();
};

export const createUser = async (name: string, email: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = userRepository.create({ name, email });
  return await userRepository.save(user);
};
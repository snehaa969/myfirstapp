import { User } from '../models/User';

const USER_INFO_KEY = 'user_info';

export const saveUserInfo = (userInfo: User) => {
  localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
};

export const getUserInfo = (): User | null => {
  const userInfoString = localStorage.getItem(USER_INFO_KEY);
  return userInfoString ? JSON.parse(userInfoString) : null;
};
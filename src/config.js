import dotenv from 'dotenv';

dotenv.config();

export const config = {
  apiUrl: process.env.API_URL,
  userId: process.env.USER_ID,
};

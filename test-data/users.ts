export const users = {
  standard: {
    username: process.env.STANDARD_USER || 'standard_user',
    password: process.env.PASSWORD || 'secret_sauce'
  },
  invalid: {
    username: 'invalid_user',
    password: 'invalid_password'
  }
};

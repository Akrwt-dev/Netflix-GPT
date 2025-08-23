export const checkValidData = (email, password) => {
  // we use regex to check email /regex/.test(email)
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password not vaild";
  return null;
};

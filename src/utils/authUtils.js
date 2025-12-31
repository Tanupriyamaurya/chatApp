
export const loginUser = (email, password) => {
  if (!email || !password) return false;

  const user = { email, isLoggedIn: true };
  localStorage.setItem("user", JSON.stringify(user));
  return true;
};


export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};


export const logoutUser = () => {
  localStorage.removeItem("user");
};


export const isLoggedIn = () => {
  const user = getUser();
  return user?.isLoggedIn === true;
};

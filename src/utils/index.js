export const findAllUsers = async () => {
  try {
    const response = await fetch("http://localhost:5001/users/admin");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async () => {
  try {
    const response = await fetch("http://localhost:5001/users/login");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const register = async () => {
  try {
    const response = await fetch("http://localhost:5001/users/register");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUsername = async () => {
  try {
    const response = await fetch(
      "http://localhost:5001/users/login/updateUsername"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async () => {
  try {
    const response = await fetch("http://localhost:5001/users/login/delete");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

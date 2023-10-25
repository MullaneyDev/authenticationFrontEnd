export const findAllUsers = async () => {
  try {
    const response = await fetch(`http://localhost:5001/user/admin`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`http://localhost:5001/user/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (username, email, password) => {
  try {
    const response = await fetch(`http://localhost:5001/user/register`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        isAdmin: false,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUsername = async (username,newUsername) => {
  try {
    const response = await fetch(
      `http://localhost:5001/user/login/updateUsername`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          newUsername: newUsername,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async () => {
  try {
    const response = await fetch("http://localhost:5001/user/login/delete");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

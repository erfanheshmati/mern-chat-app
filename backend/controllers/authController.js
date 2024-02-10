export const signupUser = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;
  } catch (error) {}
};

export const loginUser = (req, res) => {
  console.log("login");
};

export const logoutUser = (req, res) => {
  console.log("logout");
};

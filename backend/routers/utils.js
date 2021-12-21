import jsonwebtoken from "jsonwebtoken";

export const generateToken = (user) => {
  return jsonwebtoken.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || "somethingsecret",
    { expiresIn: "30d" }
  );
};

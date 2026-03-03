import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
  const { email } = req.body;
  console.log("email:", email);

  // if(fullName ==="") {
  //     throw new ApiError(400, "fullname is required")
  // } This can be done, but have to do this for all the models here!

  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "all field are mandatory:");
  } // New code, this makes the code compact. So is this.

  const existedUser = User.findOne({
    $or: [{ email }, { username }],
  }); //here findOne is used, to check whether the email or password is already there.

  if (existedUser) {
    throw new ApiError(409, "User already exists");
  }

  console.log(existedUser);
});

export { registerUser };

// To register a user
// get the details from fronted
// check if the user exists already
// ch

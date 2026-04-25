import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken; // This is save this in Db
    await user.save({ validateBeforeSave: false });
  } catch (error) {
    throw new ApiError(500, "Failed");
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, username, password } = req.body;
  // console.log("email:", email);

  // if(fullName ==="") {
  //     throw new ApiError(400, "fullname is required")
  // } This can be done, but have to do this for all the models here!

  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "all field are mandatory:");
  } // New code, this makes the code compact. So is this.

  const existedUser = await User.findOne({
    $or: [{ email }, { username }],
  }); //here findOne is used, to check whether the email or password is already there.

  if (existedUser) {
    throw new ApiError(409, "User already exists");
  }

  // console.log(existedUser);

  const avatarLocalPath = req.files?.avatar?.[0]?.path;
  // const coverImageLocalPath = req.files?.coverImage[0]?.path;

  let coverImageLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  ) {
    coverImageLocalPath = req.files.coverImage[0].path;
  }

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar is missing.");
  }

  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    username,
    password,
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while creating the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User created successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  //ToDo:
  // Take username and emailid from frontend , params URL
  // Validate the user
  // And give access

  const { email, username, password } = req.body;

  if (!username || !email) {
    throw new ApiError(400, "Username or password required");
  }

  User.findOne({
    $or: [{ username }, { email }],
    //This will find both email and username in the database
  });

  if (!user) {
    throw new ApiError(404, "User doesn't exists");
  }

  const isPasswordValid = await user.ispasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Password Invalid");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  const logedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };
});

export { registerUser, loginUser };

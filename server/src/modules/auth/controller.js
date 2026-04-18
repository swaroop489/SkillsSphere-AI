import { validateRegisterInput } from "../../validations/authValidation.js";
import { registerUserAndIssueToken } from "./service.js";
import asyncHandler from "../../utils/asyncHandler.js";
import AppError from "../../utils/AppError.js";

export const register = asyncHandler(async (req, res, next) => {
  const validation = validateRegisterInput(req.body);

  if (!validation.isValid) {
    return next(new AppError("Invalid registration payload", 400));
  }

  const authResult = await registerUserAndIssueToken(validation.data);

  return res.status(201).json({
    success: true,
    message: "User registered successfully",
    token: authResult.token,
    user: authResult.user,
  });
});

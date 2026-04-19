import { 
  validateRegisterInput, 
  validateVerifyEmailInput, 
  validateForgotPasswordInput, 
  validateResetPasswordInput,
  validateResendOTPInput 
} from "../../validations/authValidation.js";
import { 
  registerUserAndIssueToken, 
  verifyUserEmail, 
  forgotPasswordRequest, 
  resetUserPassword,
  resendUserOTP 
} from "./service.js";

export const register = async (req, res) => {
  const validation = validateRegisterInput(req.body);

  if (!validation.isValid) {
    return res.status(400).json({
      success: false,
      message: "Invalid registration payload",
      errors: validation.errors
    });
  }

  try {
    const authResult = await registerUserAndIssueToken(validation.data);

    return res.status(201).json({
      success: true,
      message: "User registered successfully. Please check your email for verification code.",
      token: authResult.token,
      user: authResult.user
    });
  } catch (error) {
    if (error.code === "USER_ALREADY_EXISTS" || error?.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "A user with this email already exists"
      });
    }

    return res.status(500).json({
      success: false,
      message: error.message || "Unable to register user right now"
    });
  }
};

export const verifyEmail = async (req, res) => {
  const validation = validateVerifyEmailInput(req.body);

  if (!validation.isValid) {
    return res.status(400).json({
      success: false,
      errors: validation.errors
    });
  }

  try {
    const result = await verifyUserEmail(validation.data.email, validation.data.otp);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export const forgotPassword = async (req, res) => {
  const validation = validateForgotPasswordInput(req.body);

  if (!validation.isValid) {
    return res.status(400).json({
      success: false,
      errors: validation.errors
    });
  }

  try {
    const result = await forgotPasswordRequest(validation.data.email);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export const resetPassword = async (req, res) => {
  const validation = validateResetPasswordInput(req.body);

  if (!validation.isValid) {
    return res.status(400).json({
      success: false,
      errors: validation.errors
    });
  }

  try {
    const result = await resetUserPassword(
      validation.data.email, 
      validation.data.otp, 
      validation.data.newPassword
    );
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export const resendOTP = async (req, res) => {
  const validation = validateResendOTPInput(req.body);

  if (!validation.isValid) {
    return res.status(400).json({
      success: false,
      errors: validation.errors
    });
  }

  try {
    const result = await resendUserOTP(validation.data.email);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

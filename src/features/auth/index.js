import authReducer, {
  login,
  logout,
  refreshToken,
  register,
  changePassword,
  getCurrentUser,
  updateAccount,
} from "./authSlice";

export { login, logout, refreshToken, register, changePassword, getCurrentUser, updateAccount };
export default authReducer;

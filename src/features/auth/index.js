import authReducer, {
  login,
  logout,
  refreshToken,
  register,
  changePassword,
  getUser,
  updateAccount,
} from "./authSlice";

export { login, logout, refreshToken, register, changePassword, getUser, updateAccount };
export default authReducer;

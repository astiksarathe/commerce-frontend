import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginApi,
  registerApi,
  logoutApi,
  refreshTokenApi,
  changePasswordApi,
  getCurrentUserApi,
  updateAccountApi,
} from "./authAPI";

const initialState = {
  user: null,
  accessToken: null,
  isLoading: false,
  error: null,
};

// Async thunks
export const login = createAsyncThunk("auth/login", async (data, { rejectWithValue }) => {
  try {
    const response = await loginApi(data);
    return response.data; // Assuming response contains data key for successful request
  } catch (error) {
    return rejectWithValue(error.response.data); // Return error message from API response
  }
});

export const register = createAsyncThunk("auth/register", async (data, { rejectWithValue }) => {
  try {
    const response = await registerApi(data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const logout = createAsyncThunk("auth/logout", async (data, { rejectWithValue }) => {
  try {
    const response = await logoutApi(data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (data, { rejectWithValue }) => {
    try {
      const response = await refreshTokenApi(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (data, { rejectWithValue }) => {
    try {
      const response = await changePasswordApi(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await getCurrentUserApi(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateAccount = createAsyncThunk(
  "auth/updateAccount",
  async (data, { rejectWithValue }) => {
    try {
      const response = await updateAccountApi(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Slice definition
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Additional reducers can be defined here if needed
  },
  extraReducers: (builder) => {
    // LOGIN
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      localStorage.setItem("accessToken", action.payload.accessToken);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload?.error || { message: "Failed to login" };
    });
    // REGISTER
    builder.addCase(register.fulfilled, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.rejected, (state) => {
      state.isLoading = true;
    });
    // LOGOUT
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoading = false;
      state.user = null;
      state.accessToken = null;
      localStorage.removeItem("accessToken");
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || "Failed to logout";
    });
    // REFRESH_TOKEN
    builder.addCase(refreshToken.fulfilled, (state) => {
      state.isLoading = true;
    });
    builder.addCase(refreshToken.rejected, (state) => {
      state.isLoading = true;
    });
    // CHANGE_PASSWORD
    builder.addCase(changePassword.fulfilled, (state) => {
      state.isLoading = true;
    });
    builder.addCase(changePassword.rejected, (state) => {
      state.isLoading = true;
    });
    // GET_USER
    builder.addCase(getUser.fulfilled, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.isLoading = true;
    });
    // UPDATE_ACCOUNT
    builder.addCase(updateAccount.fulfilled, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateAccount.rejected, (state) => {
      state.isLoading = true;
    });
  },
});

export default authSlice.reducer;

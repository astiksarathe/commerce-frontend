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
import { useCookies } from "../../hooks/useCookies";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const initialState = {
  user: null,
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

export const getCurrentUser = createAsyncThunk(
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
    // Handle pending actions
    builder.addMatcher(
      (action) => action.type.endsWith("/pending"),
      (state) => {
        state.isLoading = true;
        state.error = null;
      }
    );

    // Handle fulfilled actions
    builder.addMatcher(
      (action) => action.type.endsWith("/fulfilled"),
      (state, action) => {
        if (action.type === "auth/login/fulfilled") {
          const { setCookie } = useCookies();
          const { setItem } = useLocalStorage();
          setCookie("accessToken", action.payload.accessToken, {
            expires: new Date(Date.now() + 3600 * 1000),
            secure: true,
          });
          setCookie("refreshToken", action.payload.refreshToken);
          setItem("user", JSON.stringify(action.payload));
        }
        state.isLoading = false;
        state.error = null;
        state.user = action.payload; // Assuming payload contains user data
      }
    );

    // Handle rejected actions
    builder.addMatcher(
      (action) => action.type.endsWith("/rejected"),
      (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Assuming payload contains error message
      }
    );
  },
});

export default authSlice.reducer;

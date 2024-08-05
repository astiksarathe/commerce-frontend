import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductsAPI, getProductByUrlAPI } from "./productAPI";
import { variant as variants, options } from "../../components/quickView/data";
const initialState = {
  productDetails: {},
  productList: [],
  selectedProduct: {},
  selectedProductURL: "",
  selectedProductVariant: [],
  isLoading: false,
  error: null,
  quickViewProduct: {},
  isQuickViewModelOpen: false,
  variantUniqueList: {},
  variantTree: {},
  variantAvailabiltyHash: {},
};

export const getProductByURL = createAsyncThunk("product", async (data, { rejectWithValue }) => {
  try {
    const response = await getProductByUrlAPI(data);
    return response.data; // Assuming response contains data key for successful request
  } catch (error) {
    return rejectWithValue(error.response.data); // Return error message from API response
  }
});

export const getProduct = createAsyncThunk("productId", async (data, { rejectWithValue }) => {
  try {
    const response = await getProductsAPI(data);
    return response.data; // Assuming response contains data key for successful request
  } catch (error) {
    return rejectWithValue(error.response.data); // Return error message from API response
  }
});

const variantAvailabiltyHandler = (availableHash, hash, depthLev) => {
  const checkAndUpdateAvailability = (node, depth, path) => {
    if (depth === depthLev) {
      return availableHash[path] ? availableHash[path].available : false;
    }
    if (!node?.list) return false;

    let overallAvailability = false;
    for (const item of node.list) {
      const currentPath = path ? `${path} / ${item.name}` : item.name;
      const availability = checkAndUpdateAvailability(node[item.name], depth + 1, currentPath);
      item.available = availability;

      overallAvailability = overallAvailability || availability;
    }
    return overallAvailability;
  };
  checkAndUpdateAvailability(hash, 0, "");
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productQuickView: (state, action) => {
      state.quickViewProduct = action.payload;
    },
    quickViewModelHandler: (state, action) => {
      state.isQuickViewModelOpen = action.payload;
    },
    selectedProductForDetail: (state, action) => {
      state.selectedProductURL = action.payload;
    },
    selectVariantHandler: (state, action) => {
      if (action.payload) {
        const { variantName, ind } = action.payload;
        state.selectedProductVariant[ind].name = variantName;
      } else {
        state.selectedProductVariant = options.map((_, ind) => ({ name: "", ind }));
      }
    },
    creaetVariantTree: (state, action) => {
      const availableHash = {};
      const hash = { list: [] };

      for (const variant of variants) {
        const options = variant.options;
        let currentLevel = hash;

        options.forEach((option, index) => {
          if (!currentLevel[option]) {
            currentLevel.list.push({ name: option, available: false });
            currentLevel[option] = index === options.length - 1 ? variant.id : { list: [] };
          }
          currentLevel = currentLevel[option];
        });

        availableHash[variant.title] = { available: variant.available, id: variant.id };
      }
      variantAvailabiltyHandler(availableHash, hash, 3);
      state.variantTree = hash;
      state.variantAvailabiltyHash = availableHash;
    },
  },
  extraReducers: (builder) => {
    // Extra reducers for getProductByURL
    builder.addCase(getProductByURL.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductByURL.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productDetails = action.payload || {};
    });
    builder.addCase(getProductByURL.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Extra reducers for getProduct
    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productList = action.payload || [];
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const {
  selectedProductForDetail,
  productQuickView,
  quickViewModelHandler,
  creaetVariantTree,
  selectVariantHandler,
} = productSlice.actions;

export default productSlice.reducer;

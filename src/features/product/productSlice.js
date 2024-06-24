import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductsAPI, getProductByUrlAPI } from "./productAPI";
import { variant as variants } from "../../components/quickView/data";
const initialState = {
  productList: [],
  selectedProduct: {},
  selectedProductURL: "",
  selectedProductVariant: {},
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

export const getProduct = createAsyncThunk("product", async (data, { rejectWithValue }) => {
  try {
    const response = await getProductsAPI(data);
    return response.data; // Assuming response contains data key for successful request
  } catch (error) {
    return rejectWithValue(error.response.data); // Return error message from API response
  }
});

/**
 *  this function full return data for quickView and product details page
 *  For variants in different format
 *  {
 *    Color:['green', 'yellow', 'red', 'Brown'],
 *    Design:['Moon', 'Galaxy', 'Solar System', 'Saturn', 'Galaxy', 'Solar']
 *  }
 
 *  */

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
    selectProductVariant: (state, action) => {
      state.selectedProductVariant = action.payload;
    },
    selectVariantHandler: (state, action) => {
      state.selectedProductVariant = action.payload;
    },
    creaetVariantTree: (state, action) => {
      const availableHash = {};
      const hash = { list: [] };

      for (const variant of variants) {
        const options = variant.options;
        let currentLevel = hash;

        options.forEach((option, index) => {
          if (!currentLevel[option]) {
            currentLevel.list.push(option);
            currentLevel[option] = index === options.length - 1 ? variant.id : { list: [] };
          }
          currentLevel = currentLevel[option];
        });

        availableHash[variant.id] = variant.available;
      }

      state.variantTree = hash;
      state.variantAvailabiltyHash = availableHash;

      state.selectedProductVariant = variants[0];
    },
    selectVariantByOneOption: (state, action) => {
      const { variantValue, ind } = action.payload;
      const { options } = state.selectedProductVariant;
      const cloneOptions = options?.map((ele) => ele);
      console.log(cloneOptions);
      if (cloneOptions) {
        cloneOptions[ind] = variantValue;
        const title = cloneOptions.join(" / ");
        // replace variant by state.selectedProduct.variants
        const selectedVar = variants.find((variant) => variant.title === title) || {};
        if (selectedVar) {
          state.selectedProductVariant = selectedVar;
        }
      }
    },
    setVariantData: (state, action) => {
      const { options, variants } = action.payload;

      state.variantUniqueList = options.reduce((acc, option, index) => {
        const uniqueValues = [...new Set(variants.map((variant) => variant[`option${index + 1}`]))];
        acc[option] = uniqueValues;
        return acc;
      }, {});

      state.selectedProductVariant = variants[0];
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.endsWith("/fulfilled"),
      (state, action) => {
        state.isLoading = false;
        if (action.meta.arg === state.selectedProductURL) {
          state.selectedProduct = action.payload[0] || {};
        } else if (action.type === "product/fulfilled") {
          state.productList = action.payload || [];
        }
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith("/pending"),
      (state, action) => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      (action) => action.type.endsWith("/rejected"),
      (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      }
    );
  },
});

export const {
  selectedProductForDetail,
  selectVariantByOneOption,
  setVariantData,
  productQuickView,
  quickViewModelHandler,
  creaetVariantTree,
} = productSlice.actions;

export default productSlice.reducer;

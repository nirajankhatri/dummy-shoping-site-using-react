import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "./productConstants";

export const productListReducer = (
  state = { data: {} },
  action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, data: {} };

    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case PRODUCT_LIST_FAIL:
      console.log("ERR")
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { data: {} },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, data: {} };

    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, data: action.payload };

    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

import { UPDATE_CART_DETAILS, SEARCH_PRODUCT } from "./home_action_types";
import Constant from "../../constants";

const { homePageProducts } = Constant;

export const initialData = {
  cartData: [],
  listOfProducts: homePageProducts,
};

const reducer = (state = initialData, action) => {
  switch (action.type) {
    case UPDATE_CART_DETAILS:
      return {
        ...state,
        cartData: action.data,
      };
    case SEARCH_PRODUCT:
      return {
        ...state,
        listOfProducts: action.data,
      };
    default:
      return state;
  }
};

export default reducer;

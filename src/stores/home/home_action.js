import { UPDATE_CART_DETAILS, SEARCH_PRODUCT } from "./home_action_types";

/**
 * @param {object} data updated data
 *
 * @return {object} return object
 */
export function updateBasketCart(data) {
  return {
    type: UPDATE_CART_DETAILS,
    data,
  };
}

/**
 * @param {object} data updated data
 *
 * @return {object} return object
 */
export function searchProduct(data) {
  return {
    type: SEARCH_PRODUCT,
    data,
  };
}

import ShopActionTypes from "./shop.types";
import ShopActionType from "./shop.types";

export const updateCollections = (collectionMap) => ({
  type: ShopActionType.UPDATE_COLLECTION,
  payload: collectionMap,
});

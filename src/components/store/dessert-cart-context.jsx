import PropTypes from "prop-types";

import { createContext, useReducer } from "react";
import { dessertsData } from "../../http";

export const DessertCartContext = createContext({
  dessertItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  updateCartItemQuantity: () => {},
});

// reducer function...
const dessertCartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.dessertItems];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.name === action.payload
    );

    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      console.log("updating items");
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      console.log("adding new product");
      updatedItems.push({
        ...action.payload,
        quantity: 1,
      });
    }
    console.log(updatedItems);

    return {
      ...state,
      dessertItems: updatedItems,
    };
  }
};

export const DessertCartContextProvider = ({ children }) => {
  const [dessertCartState, dessertCartDispatch] = useReducer(
    dessertCartReducer,
    { dessertItems: [] }
  );

  const handleAddItemToCart = async (name) => {
    try {
      console.log("Adding item to cart", name);
      const product = await dessertsData();
      const matchingProduct = product.find(
        (productItem) => productItem.name === name
      );

      console.log(matchingProduct);

      if (matchingProduct) {
        dessertCartDispatch({
          type: "ADD_ITEM",
          payload: matchingProduct,
        });
      } else {
        console.error(`Product "${name}" not found.`);
      }
    } catch (error) {
      console.error("Error fetching dessert data", error);
    }
  };

  const handleUpdateCartItemQuantity = (productId, amount) => {
    dessertCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId,
        amount,
      },
    });
  };

  const ctxValue = {
    dessertItems: dessertCartState.dessertItems,
    addItemToCart: handleAddItemToCart,
    updateCartItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <DessertCartContext.Provider value={ctxValue}>
      {children}
    </DessertCartContext.Provider>
  );
};

// const useCart = () => {
//   const context = useContext(DessertCartContext);
//   if (!context) {
//     throw new Error("useCart ust be used within a CartProvider");
//   }
//   return context;
// };

DessertCartContextProvider.propTypes = {
  children: PropTypes.node,
};

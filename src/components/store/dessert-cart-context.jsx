import PropTypes from "prop-types";

import { createContext, useReducer } from "react";
import { dessertsData } from "../../http";

export const DessertCartContext = createContext({
  dessertItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  updateCartItemQuantity: () => {},
  clearCart: () => {},
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
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({
        ...action.payload,
        quantity: 1,
      });
    }

    return {
      ...state,
      dessertItems: updatedItems,
    };
  }

  if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.dessertItems];

    const updatedItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.name === action.payload.productName
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }
    return {
      ...state,
      dessertItems: updatedItems,
    };
  }

  if (action.type === "REMOVE_CART_ITEM") {
    return {
      ...state.dessertItems,
      dessertItems: state.dessertItems.filter(
        (dessertItem) => dessertItem.name !== action.payload
      ),
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state.dessertItems,
      dessertItems: [],
    };
  }

  return state;
};

export const DessertCartContextProvider = ({ children }) => {
  const [dessertCartState, dessertCartDispatch] = useReducer(
    dessertCartReducer,
    { dessertItems: [] }
  );

  const handleAddItemToCart = async (name) => {
    try {
      const product = await dessertsData();
      const matchingProduct = product.find(
        (productItem) => productItem.name === name
      );

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

  const handleUpdateCartItemQuantity = (productName, amount) => {
    dessertCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productName,
        amount,
      },
    });
  };

  const handleRemoveCartItem = (name) => {
    dessertCartDispatch({
      type: "REMOVE_CART_ITEM",
      payload: name,
    });
  };

  const handleClearCart = () => {
    dessertCartDispatch({
      type: "CLEAR_CART",
    });
  };

  const ctxValue = {
    dessertItems: dessertCartState.dessertItems,
    addItemToCart: handleAddItemToCart,
    removeItemFromCart: handleRemoveCartItem,
    updateCartItemQuantity: handleUpdateCartItemQuantity,
    clearCart: handleClearCart,
  };

  return (
    <DessertCartContext.Provider value={ctxValue}>
      {children}
    </DessertCartContext.Provider>
  );
};

DessertCartContextProvider.propTypes = {
  children: PropTypes.node,
};

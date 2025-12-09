import { productData } from "@/components/SingleCard";

interface CartItem {
  id: string;
  name: string;
  price: number;
  item: productData;
}

interface Action {
  type: string;
  payload: any;
}

interface State {
  cart: CartItem[];
  total_item: string;
  total_amount: string;
}

export default function CartReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, name, price, item } = action.payload;

      const newItem: CartItem = {
        id,
        name,
        price,
        item,
      };

      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    }

    case "REMOVE_FROM_CART": {
      const idToRemove = action.payload;
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== idToRemove),
      };
    }

    default:
      return state;
  }
}

import Cookies from "js-cookie";

export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, productList: action.payload };
    case "ADD_TO_CART":
      const existed = state.card.find((item) => item.id == action.payload.id);
      if (existed) {
        return state;
      } else {
        return { ...state, card: [...state.card, { ...action.payload }] };
      }
    case "Remove": {
      return { ...state, card: (state.card = []) };
    }
    case "Remove_card":
      return {
        ...state,
        card: [...state.card.filter((item) => item.id !== action.payload)],
      };
    case "Add_To_Percentage":
      return { ...state, total: [state.total, { ...action.payload }] };
    case "ADD_To_Details":
      return { ...state, details: action.payload };
  }
};

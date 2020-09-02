export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

//refer to the data layer as a state
//manipulate the data layer with actions , action can be adding or removing item from the basket
const reducer = (state, action) => {
  //Switch in the sense check bunch of cases
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      //Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //Logic for removing item from basket

      //we clone the basket
      let newBasket = [...state.basket];

      //we check to see if the product exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item exist in the basket
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in the basket`
        );
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};
export default reducer;

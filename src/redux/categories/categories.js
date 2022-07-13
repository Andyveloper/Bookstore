const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const initialState = {
  categories: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS: {
      return 'Under Construction';
    }
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default reducer;

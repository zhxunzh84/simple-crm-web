// Reducer and initial state for managing customer-related actions in the Simple CRM system
export const initialState = {
  customers: [],
  loading: false,
  error: null,
  submitting: false,
};
// Customer reducer function handles different action types to update the state accordingly
export function customerReducer(state, action) {
  switch (action.type) {
    // Start fetching customer data
    case "FETCH_START":
      return { ...state, loading: true, error: null };

    // Successfully fetched customer data
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        customers: action.payload,
      };

    // Error occurred while fetching customer data
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Start adding a new customer
    case "ADD_START":
      return { ...state, submitting: true };

    // Successfully added a new customer
    case "ADD_CUSTOMER":
      return {
        ...state,
        submitting: false,
        //showForm: false,
        customers: [...state.customers, action.payload],
      };

    // Error occurred while adding a new customer
    case "ADD_ERROR":
      return { ...state, submitting: false };


    // Update an existing customer's information
    case "UPDATE_CUSTOMER":
      return {
        ...state,
        customers: state.customers.map((c) =>
          c.id === action.payload.id ? action.payload : c,
        ),
      };

    // Delete a customer from the list
    case "DELETE_CUSTOMER":
      return {
        ...state,
        customers: state.customers.filter(
          (c) => c.id !== action.payload,
        ),
      };

    default:
      return state;
  }
}
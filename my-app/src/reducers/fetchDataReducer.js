import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
} from "../actions/fetchDataActions";

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export default function fetchDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

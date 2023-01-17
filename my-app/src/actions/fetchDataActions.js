import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const fetchData = (url) => async (dispatch) => {
  dispatch({ type: FETCH_DATA_START });
  try {
    const response = await axios.get(url);
    dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAIL, payload: error });
  }
};

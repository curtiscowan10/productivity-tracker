import axios from "axios";
import { store } from "../../store/configureStore";

export const actionAttempt = action => `${action}_ATTEMPT`;
export const actionSuccess = action => `${action}_SUCCESS`;
export const actionError = action => `${action}_ERROR`;

export async function callApi({ url, method, data, actionType }) {
  const { dispatch } = store;
  dispatch({
    type: actionAttempt(actionType),
    data,
  });
  const handleError = () => {
    dispatch({
      type: actionError(actionType),
      data,
    });
  };

  const handleResponse = (status, response) => {
    dispatch({
      type: actionSuccess(actionType),
      response,
      data,
    });
  };

  const api = axios.create();
  api.defaults.baseURL = location.protocol + "//" + location.hostname + ":443";

  const apiConfig = {
    method,
    url,
    responseType: "json",
    data,
  };
  api
    .request(apiConfig)
    .then(response => handleResponse(response.status, response.data))
    .catch(handleError);
}

import { getUsersList } from "../constant/UsersConstants";
import axios from "axios";
export const UsersAction = () => async (dispatch) => {
  await dispatch({
    type: getUsersList.REQUEST,
    payload: { loading: true },
  });
  try {
    const { data } = await axios.get(
      `https://66d08599181d059277deec95.mockapi.io/api/users/userlist/`
    );

    await dispatch({
      type: getUsersList.SUCCESS,
      payload: { loading: false, data: data },
    });
  } catch (error) {
    await dispatch({
      type: getUsersList.ERROR,
      payload: { loading: false, data: {} },
    });
  }
};

import { AnyAction, Dispatch } from 'redux';

export const requestMiddleware = () => (next: Dispatch) => async (
  action: AnyAction,
) => {
  if (action.request) {
    const SUCCESS = `${action.type}_SUCCESS`;
    const FAILED = `${action.type}_FAILED`;
    const REQUEST = `${action.type}_REQUEST`;

    next({ type: REQUEST, payload: action.payload });
    try {
      const payload = await action.request();

      if (action.onSuccess) {
        action.onSuccess(payload);
      }
      next({ type: SUCCESS, payload });
    } catch (error) {
      const errorData = {
        errors: error.response.data.errors,
        errorStatus: error.response.status,
      };
      if (action.onFailed) {
        action.onFailed(errorData);
      }

      next({
        type: FAILED,
        payload: errorData,
      });
    }
  } else {
    next(action);
  }
};

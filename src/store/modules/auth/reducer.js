import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  status: {
    signed: false,
    loading: false,
  },
  error: {
    status: false,
    message: '',
    reasons: [],
  },
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/CREATE_SESSION_REQUEST':
        draft.status.loading = true;
        draft.error = INITIAL_STATE.error;
        break;

      case '@auth/CREATE_SESSION_SUCCESS':
        draft.status.loading = false;
        draft.status.signed = true;
        draft.token = action.payload.body.token;
        break;

      case '@auth/CLOSE_SESSION':
        draft.status.signed = false;
        draft.token = null;
        break;

      case '@auth/SESSION_OPERATION_FAIL':
        draft.status.loading = false;
        draft.error.status = true;
        draft.error.message = action.payload.message;
        draft.error.reasons = action.payload.reasons;
        break;

      case '@auth/RESET_ERROR':
        draft.error = INITIAL_STATE.error;
        break;

      default:
        break;
    }
  });
}

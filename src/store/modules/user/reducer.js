import produce from 'immer';

const INITIAL_STATE = {
  profile: {},
  status: {
    loading: false,
  },
  error: {
    status: false,
    message: '',
    reasons: [],
  },
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/CREATE_SESSION_SUCCESS':
        delete action.payload.body.token;
        draft.profile = action.payload.body;
        break;

      default:
        break;
    }
  });
}

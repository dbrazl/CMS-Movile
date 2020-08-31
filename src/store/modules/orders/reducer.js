import produce from 'immer';
import _ from 'lodash';

const INITIAL_STATE = {
  items: [],
  item: {
    sells: [],
  },
  page: 0,
  status: {
    loading: false,
  },
  error: {
    status: false,
    message: '',
    reasons: [],
  },
};

export default function orders(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@order/INDEX_ORDERS_REQUEST':
        draft.status.loading = true;
        draft.error = INITIAL_STATE.error;
        break;

      case '@order/INDEX_ORDERS_SUCCESS':
        draft.status.loading = false;
        draft.page = state.page + 1;
        const unionIndex = _.unionBy(state.items, action.payload.body, 'id');
        draft.items = _.orderBy(unionIndex, ['id'], ['asc']);
        break;

      case '@order/INDEX_ONE_ORDER_REQUEST':
        draft.status.loading = true;
        draft.error = INITIAL_STATE.error;
        break;

      case '@order/INDEX_ONE_ORDER_SUCCESS':
        draft.status.loading = false;
        draft.item = action.payload.body;
        break;

      case '@order/ORDER_OPERATION_FAIL':
        draft.status.loading = false;
        draft.error.stauts = true;
        draft.error.message = action.payload.message;
        draft.error.reasons = action.payload.reasons;
        break;

      default:
    }
  });
}

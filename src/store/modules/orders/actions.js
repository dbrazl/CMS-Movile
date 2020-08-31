export function indexOrderRequest() {
  return {
    type: '@order/INDEX_ORDERS_REQUEST',
  };
}

export function indexOrderSuccess(body) {
  return {
    type: '@order/INDEX_ORDERS_SUCCESS',
    payload: { body },
  };
}

export function indexOneOrderRequest(params) {
  return {
    type: '@order/INDEX_ONE_ORDER_REQUEST',
    payload: { params },
  };
}

export function indexOneOrderSuccess(body) {
  return {
    type: '@order/INDEX_ONE_ORDER_SUCCESS',
    payload: { body },
  };
}

export function orderOperationFail(message, reasons) {
  return {
    type: '@order/ORDER_OPERATION_FAIL',
    payload: { message, reasons },
  };
}

export function resetPage() {
  return {
    type: '@order/RESET_PAGE',
  };
}

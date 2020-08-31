export function createSessionRequest(body) {
  return {
    type: '@auth/CREATE_SESSION_REQUEST',
    payload: { body },
  };
}

export function createSessionSuccess(body) {
  return {
    type: '@auth/CREATE_SESSION_SUCCESS',
    payload: { body },
  };
}

export function closeSession() {
  return {
    type: '@auth/CLOSE_SESSION',
  };
}

export function sessionOperationFail(message, reasons) {
  return {
    type: '@auth/SESSION_OPERATION_FAIL',
    payload: { message, reasons },
  };
}

export function resetError() {
  return {
    type: '@auth/RESET_ERROR',
  };
}

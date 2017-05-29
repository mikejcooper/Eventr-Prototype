import { CLOSE_SIGN_IN_MODAL, OPEN_SIGN_IN_MODAL, CLOSE_EVENT_MODAL, OPEN_EVENT_MODAL } from './types';

export function openSignInModal() {
  return { type: OPEN_SIGN_IN_MODAL }
}

export function openEventModal(event_data_i) {
  return { type: OPEN_EVENT_MODAL, event_data: event_data_i }
}

export function closeSignInModal() {
  return { type: CLOSE_SIGN_IN_MODAL }
}

export function closeEventModal() {
  return { type: CLOSE_EVENT_MODAL }
}
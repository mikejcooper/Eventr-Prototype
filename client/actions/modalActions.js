import { OPEN_SIGN_IN_MODAL } from './types';

export function openSignInModal() {
  return { type: OPEN_SIGN_IN_MODAL }
}

export function closeSignInModal() {
  return { type: CLOSE_SIGN_IN_MODAL }
}
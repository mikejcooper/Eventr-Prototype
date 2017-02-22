import { USER_SCROLL_EVENT } from './types';

export function userScrollEvent(ScrollEvent) {
	console.log("Scroll EVENT");
  return {
    type: USER_SCROLL_EVENT,
    ScrollEvent
  }
}
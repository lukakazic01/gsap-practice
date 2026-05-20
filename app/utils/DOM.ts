export const select = (e: string): HTMLElement | null => document.querySelector(e);
export const selectAll = (e: string): NodeListOf<HTMLElement> => document.querySelectorAll(e);

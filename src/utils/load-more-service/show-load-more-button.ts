import { getLoadMoreButtonElement } from "../element-getters/get-load-more-button-element";

export function showLoadMoreButton(): void {
  const loadMoreButtonElement: HTMLButtonElement | null = getLoadMoreButtonElement();
  
  loadMoreButtonElement.style.display = 'block';
}
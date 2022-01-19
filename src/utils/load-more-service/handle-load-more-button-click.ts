import { getResultsListElement } from "../element-getters/get-results-list-element";
import { hideLoadMoreButton } from "./hide-load-more-button";

export function handleLoadMoreButtonClick(searchResults: HTMLLIElement[]): void {
  const resultsListElement: HTMLUListElement = getResultsListElement();
  const resultsOnPageCount: number = resultsListElement.children.length;
  const resultsToShow: HTMLLIElement[] = searchResults.slice(resultsOnPageCount, resultsOnPageCount + 5);

  if (resultsToShow.length >= 5) {
    resultsToShow.forEach(beerElement => resultsListElement.append(beerElement));
  } else {
    hideLoadMoreButton();
    const noMoreResultsErrorMessageElement: HTMLParagraphElement = document.createElement('p');
    noMoreResultsErrorMessageElement.textContent = 'No more results found :(';
    resultsListElement.append(noMoreResultsErrorMessageElement);
  }
}
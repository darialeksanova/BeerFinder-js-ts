import { getSearchInputElement } from "../element-getters/get-search-input-element";
import { searchBeer } from "./search-beer";

export function handleSearchButtonClick(): void {
  const searchInputElementValue: string = getSearchInputElement().value;
  
  searchBeer(searchInputElementValue);
}
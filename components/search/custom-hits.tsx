import { StateResultsProvided } from "react-instantsearch-core";
import { connectStateResults } from "react-instantsearch-dom";
import { FAQList } from "~/components/faq-list";
import { Faq } from "~/lib/data/faqs";

function Hits(stateResults: StateResultsProvided) {
  const { searchResults, isSearchStalled } = stateResults;
  let results: Faq[];

  try {
    results = searchResults.hits as unknown as Faq[];
  } catch (e) {
    results = [];
  }
  return <FAQList data={results} isLoading={isSearchStalled} />;
}

export default connectStateResults(Hits);

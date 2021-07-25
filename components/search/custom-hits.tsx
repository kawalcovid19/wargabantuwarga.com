import { FAQList } from "~/components/faq-list";
import { FaqData } from "~/lib/faq-databases";

import { StateResultsProvided } from "react-instantsearch-core";
import { connectStateResults } from "react-instantsearch-dom";

function Hits(stateResults: StateResultsProvided) {
  const { searchResults } = stateResults;
  let results: FaqData[];

  try {
    results = searchResults.hits as unknown as FaqData[];
  } catch (e) {
    results = [];
  }
  return <FAQList data={results} />;
}

export default connectStateResults(Hits);

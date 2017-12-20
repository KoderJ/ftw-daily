import React from 'react';
import { FormattedMessage } from 'react-intl';

import css from './SearchAttributes.css';

const SearchAttributes = props => {
  const { listingsAreLoaded, resultsCount, searchInProgress, onMapIconClick} = props;

  const loadingResults = (
    <h2>
      <FormattedMessage id="SearchAttributes.loadingResults" />
    </h2>
  );

  const resultsFound = (
    <h2>
      <FormattedMessage id="SearchAttributes.foundResults" values={{ count: resultsCount }} />
    </h2>
  );

  const noResults = (
    <h2>
      <FormattedMessage id="SearchAttributes.noResults" />
    </h2>
  );

  const resultsFoundMobile = (
    <h2>
      <FormattedMessage id="SearchAttributes.foundResultsMobile" values={{ count: resultsCount }} />
    </h2>
  );

  return (
    <div>
      <div className={css.searchResultSummary}>
        {listingsAreLoaded && resultsCount > 0 ? resultsFound : null}
        {listingsAreLoaded && resultsCount === 0 ? noResults : null}
        {searchInProgress ? loadingResults : null}
      </div>

      <div className={css.searchResultSummaryMobile}>
        <div>
          {listingsAreLoaded && resultsCount > 0 ? resultsFoundMobile : null}
          {listingsAreLoaded && resultsCount === 0 ? noResults : null}
          {searchInProgress ? loadingResults : null}
        </div>
        <div
          className={css.mapIcon}
          onClick={onMapIconClick}
        >
          <FormattedMessage id="SearchAttributes.openMapView" className={css.mapIconText} />
        </div>
      </div>
    </div>
  );
};

export default SearchAttributes;

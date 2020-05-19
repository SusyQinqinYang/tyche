import React from "react";
import { useEffect, useState } from "react";
import RatingInfo from "../../containers/ReviewComponentContainers/RatingInfoContainer";
import ReviewList from "../../containers/ReviewComponentContainers/ReviewListContainer";

const RatingsandReviews = (props) => {
  const [filteredState, setFilteredState] = useState([]);

  useEffect(() => {
    setFilteredState([]);
  }, [props.page]);

  function addFilters(input) {
    setFilteredState([...filteredState, input]);
  }

  function removeFilter(input) {
    setFilteredState(filteredState.filter((item) => item !== input));
  }

  function removeAllFilters(input) {
    setFilteredState([]);
  }

  return (
    <div>
      <h1>Review Component</h1>
      <RatingInfo
        removeAllFilters={removeAllFilters}
        removefromFilter={removeFilter}
        addtoFilter={addFilters}
        page={props.page}
        totalFilters={filteredState}
      />
      <ReviewList totalFilters={filteredState} page={props.page} />
    </div>
  );
};

export default RatingsandReviews;

import React, { Component } from 'react';
import qs from 'qs';

const updateAfter = 700;
const searchStateToUrl = searchState =>
  searchState ? `${window.location.pathname}?${qs.stringify(searchState)}` : '';

const withUrlSync = WrappedComponent =>
  class urlSync extends Component {
    constructor() {
      super();
      this.state = { searchState: qs.parse(window.location.search.slice(1)) };
      window.addEventListener('popstate', ({ state: searchState }) =>
        this.setState({ searchState })
      );
    }

    onSearchStateChange = searchState => {
      clearTimeout(this.debouncedSetState);
      this.debouncedSetState = setTimeout(() => {
        window.history.pushState(
          searchState,
          null,
          searchStateToUrl(searchState)
        );
      }, updateAfter);
      this.setState({ searchState });
    };

    render() {
      return (
        <WrappedComponent {...this.props}
          searchState={this.state.searchState}
          onSearchStateChange={this.onSearchStateChange}
          createURL={searchStateToUrl}
        />
      );
    }
  };

export default withUrlSync

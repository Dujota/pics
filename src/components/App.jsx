import React from 'react';
import unsplash from '../api/unsplash';

// Components
import SearchBar from './SearchBar';

class App extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    // receives 2 arguments url string and the options object
    // Add authorization on the header options object
    const response = await unsplash.get('/search/photos', {
      params: { query: term } // forms the query string for endpoint
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length}
      </div>
    );
  }
}

export default App;

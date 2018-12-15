import React from 'react';
import axios from 'axios';

// Components
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    // receives 2 arguments url string and the options object
    // Add authorization on the header options object
    axios
      .get('https://api.unsplash.com/search/photos', {
        params: { query: term }, // forms the query string for endpoint
        headers: {
          Authorization:
            'Client-ID 5190bd906111c2df1da8575f0e44be267f79c1c479e90c70f3bd9a0bd9d75c5d'
        }
      })
      .then(response => {
        console.log(response.data.results);
      });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;

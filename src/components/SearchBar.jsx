import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' }; // initialize a state variable and set it to empty string/value

  onFormSubmit = e => {
    e.preventDefault();
    console.log(this);
    console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

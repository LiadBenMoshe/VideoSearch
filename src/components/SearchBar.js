import React from "react";

class SearchBar extends React.Component {
  state = { val: "" };

  onformSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmitSearch(this.state.val);
  };

  render() {
    return (
      <div className="ui container search-bar">
        <form onSubmit={this.onformSubmit} className="ui form">
          <div className="field">
            <label>Search Video </label>
            <input
              type="text"
              name="first-name"
              placeholder="Write some.."
              value={this.state.val}
              onChange={(e) => this.setState({ val: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

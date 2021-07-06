import React, { Component } from "react";

class Checkbox extends Component {
  state = {
    isCitizen: false,
  };

  onChange = (e) => {
    this.setState({ isCitizen: e.target.checked });
  };

  render() {
    const { isCitizen } = this.state;
    return (
      <form>
        <h1>Are you a Citizen : {isCitizen ? "yes" : "No"}</h1>
        <label>
          Are you a Citizen?
          <input type="checkbox" checked={isCitizen} onChange={this.onChange} />
        </label>
      </form>
    );
  }
}
export default Checkbox;

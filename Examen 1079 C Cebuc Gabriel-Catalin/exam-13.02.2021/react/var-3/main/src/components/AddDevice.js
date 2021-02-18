import React from "react";

class AddDevice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
    };
    this.handleNameChange = (evt) => {
      this.setState({
        name: evt.target.value,
      });
    };
    this.handlePriceChange = (evt) => {
      this.setState({
        price: parseInt(evt.target.value),
      });
    };
    this.addItem = () => {
      let device = {
        name: this.state.name,
        price: this.state.price,
      };
      this.props.onAdd(device);
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          id="name"
          style={{ marginTop: "20px" }}
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          type="text"
          id="price"
          value={this.state.price}
          style={{ marginLeft: "10px" }}
          onChange={this.handlePriceChange}
        />
        <button
          id="Submit"
          value="Submit"
          onClick={this.addItem}
          style={{ marginLeft: "10px" }}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default AddDevice;

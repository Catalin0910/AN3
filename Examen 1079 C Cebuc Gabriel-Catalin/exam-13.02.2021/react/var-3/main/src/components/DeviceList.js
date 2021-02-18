import React from "react";
import AddDevice from "./AddDevice";

class DeviceList extends React.Component {
  constructor() {
    super();
    this.state = {
      devices: [],
    };
    this.add = (device) => {
      let newDevices = this.state.devices;
      newDevices.push(device);
      this.setState({
        devices: newDevices,
      });
    };
  }

  render() {
    return (
      <div>
        <AddDevice onAdd={this.add} />
        {this.state.devices.map((e, i) => (
          <div>
            {e.name} {e.price}
          </div>
        ))}
      </div>
    );
  }
}

export default DeviceList;

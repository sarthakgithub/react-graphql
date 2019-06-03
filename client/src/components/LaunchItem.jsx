import React from 'react';

class LaunchItem extends React.Component {
  render() {
    const { launch } = this.props;
    const {
      flight_number,
      mission_name,
      launch_date_local,
      launch_success
    } = launch;

    return (
      <div className="row">
        <div>
          <h4>Mission : {mission_name} </h4>
          <p>Date: {launch_date_local} </p>
        </div>
        <div>
          <button>Launch Details</button>
        </div>
      </div>
    );
  }
}

export default LaunchItem;

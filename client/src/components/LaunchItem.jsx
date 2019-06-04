import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

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
          <p>
            Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>{' '}
          </p>
        </div>
        <div>
          <Link to={`/launch/${flight_number}`}>Launch Details</Link>
        </div>
      </div>
    );
  }
}

export default LaunchItem;

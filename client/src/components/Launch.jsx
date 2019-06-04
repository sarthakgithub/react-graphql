import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number : $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
       }
    }
  }
`;

class Launch extends React.Component {
  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);

    return (
      <React.Fragment>
        <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
          {({ loading, data, error }) => {
            if (loading) return <h4>Loading</h4>;
            if (error) console.log('error');
            const { launch } = data;
            const {
              mission_name,
              flight_number,
              launch_year,
              launch_success,
              rocket: { rocket_id, rocket_name, rocket_type }
            } = launch;

            return (
              <div>
                <h1>
                  <span>Mission:</span> {mission_name}
                </h1>
                <h4>Launch Details</h4>
                <ul>
                  <li>Launch Year: {launch_year}</li>
                  <li>Launch Successful: {launch_success ? 'Yes' : 'No'}</li>
                </ul>
                <h4>Rocket Details</h4>
                <ul>
                  <li>Rocket Id: {rocket_id}</li>
                  <li>Rocket Name: {rocket_name}</li>
                  <li>Rocket Type: {rocket_type}</li>
                </ul>
                <Link to="/">Back</Link>
              </div>
            );
          }}
        </Query>
      </React.Fragment>
    );
  }
}

export default Launch;

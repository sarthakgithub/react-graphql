import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;
class Launches extends React.Component {
  render() {
    return (
      <div>
        <h1>Launches</h1>
        <Query query={LAUNCHES_QUERY}>
          {({ loading, data, error }) => {
            if (loading) {
              return <h4>Loading...</h4>;
            }
            if (error) {
              console.log('error', error);
            }
            return (
              <React.Fragment>
                {data &&
                  data.launches.map(launch => {
                    return (
                      <LaunchItem key={launch.flight_number} launch={launch} />
                    );
                  })}
              </React.Fragment>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Launches;

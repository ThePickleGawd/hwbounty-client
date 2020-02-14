import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import Bounty from '../components/Bounty';
import Profile from '../components/Profile';

export class home extends Component {
  state = {
    bounties: null
  };

  componentDidMount() {
    axios
      .get('/bounties')
      .then(res => {
        this.setState({ bounties: res.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    let recentBountiesMarkup = this.state.bounties ? (
      this.state.bounties.map(bounty => (
        <Bounty key={bounty.bountyId} bounty={bounty} />
      ))
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
          {recentBountiesMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile></Profile>
        </Grid>
      </Grid>
    );
  }
}

export default home;

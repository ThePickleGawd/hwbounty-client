import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Bounty from "../components/bounty/Bounty";
import Grid from "@material-ui/core/Grid";
import StaticProfile from "../components/profile/StaticProfile";

import BountySkeleton from "../util/BountySkeleton";
import ProfileSkeleton from "../util/ProfileSkeleton";

import { connect } from "react-redux";
import { getUserData } from "../redux/actions/dataActions";

class user extends Component {
  state = {
    profile: null,
    bountyIdParam: null,
  };

  componentDidMount() {
    const handle = this.props.match.params.handle;
    const bountyId = this.props.match.params.bountyId;

    if (bountyId) this.setState({ bountyIdParam: bountyId });

    this.props.getUserData(handle);
    axios
      .get(`/user/${handle}`)
      .then((res) => {
        this.setState({ profile: res.data.user });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { bounties, loading } = this.props.data;
    const { bountyIdParam } = this.state;

    const bountiesMarkup = loading ? (
      <BountySkeleton />
    ) : bounties === null ? (
      <p>No Bounties from this user</p>
    ) : !bountyIdParam ? (
      bounties.map((bounty) => <Bounty key={bounty.bountyId} bounty={bounty} />)
    ) : (
      bounties.map((bounty) => {
        // eslint-disable-next-line
        if (bounty.bountyId !== bountyIdParam) return;
        else return <Bounty key={bounty.bountyId} bounty={bounty} openDialog />;
      })
    );

    return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
          {bountiesMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          {this.state.profile === null ? (
            <ProfileSkeleton />
          ) : (
            <StaticProfile profile={this.state.profile} />
          )}
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

user.propTypes = {
  getUserData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getUserData })(user);

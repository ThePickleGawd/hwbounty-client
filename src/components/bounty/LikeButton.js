import React, { Component } from "react";
import MyButton from "../../util/MyButton";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Icons
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import { likeBounty, unlikeBounty } from "../../redux/actions/dataActions";

// Redux
import { connect } from "react-redux";

export class LikeButton extends Component {
  likedBounty = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find(
        (like) => like.bountyId === this.props.bountyId
      )
    )
      return true;
    else return false;
  };
  likeBounty = () => {
    this.props.likeBounty(this.props.bountyId);
  };
  unlikeBounty = () => {
    this.props.unlikeBounty(this.props.bountyId);
  };
  render() {
    const { authenticated } = this.props.user;
    const likeButton = !authenticated ? (
      <Link to="/login">
        <MyButton tip="Like">
          <FavoriteBorder color="primary" />
        </MyButton>
      </Link>
    ) : this.likedBounty() ? (
      <MyButton tip="Unlike" onClick={this.unlikeBounty}>
        <FavoriteIcon color="primary" />
      </MyButton>
    ) : (
      <MyButton tip="Like" onClick={this.likeBounty}>
        <FavoriteBorder color="primary" />
      </MyButton>
    );
    return likeButton;
  }
}

LikeButton.propTypes = {
  user: PropTypes.object.isRequired,
  bountyId: PropTypes.string.isRequired,
  likeBounty: PropTypes.func.isRequired,
  unlikeBounty: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = {
  likeBounty,
  unlikeBounty,
};

export default connect(mapStateToProps, mapActionsToProps)(LikeButton);

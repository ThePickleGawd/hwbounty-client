import {
  SET_BOUNTIES,
  LOADING_DATA,
  LIKE_BOUNTY,
  UNLIKE_BOUNTY,
  DELETE_BOUNTY
} from '../types';
import axios from 'axios';

// Get all bounties
export const getBounties = () => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios
    .get('/bounties')
    .then(res => {
      dispatch({
        type: SET_BOUNTIES,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SET_BOUNTIES,
        payload: []
      });
    });
};

// Like a bounty
export const likeBounty = bountyId => dispatch => {
  axios
    .get(`/bounty/${bountyId}/like`)
    .then(res => {
      dispatch({
        type: LIKE_BOUNTY,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// Unlike a bounty
export const unlikeBounty = bountyId => dispatch => {
  axios
    .get(`/bounty/${bountyId}/unlike`)
    .then(res => {
      dispatch({
        type: UNLIKE_BOUNTY,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const deleteBounty = bountyId => dispatch => {
  axios
    .delete(`/bounty/${bountyId}`)
    .then(() => {
      dispatch({ type: DELETE_BOUNTY, payload: bountyId });
    })
    .catch(err => console.log(err));
};

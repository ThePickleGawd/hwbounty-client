import {
  SET_BOUNTIES,
  LIKE_BOUNTY,
  UNLIKE_BOUNTY,
  LOADING_DATA,
  DELETE_BOUNTY
} from '../types';

const initialState = {
  bounties: [],
  bounty: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_BOUNTIES:
      return {
        ...state,
        bounties: action.payload,
        loading: false
      };
    case LIKE_BOUNTY:
    case UNLIKE_BOUNTY:
      let index = state.bounties.findIndex(
        bounty => bounty.bountyId === action.payload.bountyId
      );
      state.bounties[index] = action.payload;
      return {
        ...state
      };
    case DELETE_BOUNTY:
      index = state.bounties.findIndex(
        bounty => bounty.bountyId === action.payload
      );
      state.bounties.splice(index, 1);
      return {
        ...state
      };
    default:
      return state;
  }
}

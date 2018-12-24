import { getInitialData } from '../utils/api';
import { setAuthedUser } from '../actions/authedUser';
import { receiveUsers } from '../actions/users';
import { receiveTweets } from '../actions/tweets';

const AUTHED_ID = 'tylermcginnis';

export function handleInitialData () {
  return dispatch => {
    return getInitialData()
      .then(({users, tweets}) => {
        dispatch(receiveUsers(users));
        dispatch(receiveTweets(tweets));
        dispatch(setAuthedUser(AUTHED_ID));
      })
  }
}

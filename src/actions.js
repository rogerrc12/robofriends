import {CHANGE_SEARCHFIELD, REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_PENDING} from './constants';

export const setSearchField = text => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
})

export const setRequestRobots = async dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });

  try {
    const fetchedData = await ( await fetch('https://jsonplaceholder.typicode.com/users')).json();
    dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: fetchedData }) 
  } catch (error) {
    dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })
  }
}
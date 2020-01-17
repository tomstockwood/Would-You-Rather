import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setCurrentUser } from '../actions/currentUser'

const CURRENT_USER = 'sarahedo'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setCurrentUser(CURRENT_USER))
        // dispatch(hideLoading())
      })
  }
}
import { _getUsers } from "../utils/_DATA";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_USER_ANSWER = 'UPDATE_USER_ANSWER';
export const UPDATE_USER_QUESTIONS = 'UPDATE_USER_QUESTIONS';


export function receiveUsers (users) {
    return {
        type : RECEIVE_USERS,
        users,
    }
}

export function getAllUsers() {
    return (dispatch) => {
      return _getUsers().then((users) => {
        dispatch(receiveUsers(users));
      });
    };
  }


export function updateUserAnswer({ authedUser, qid, answer }) {
  return {
    type: UPDATE_USER_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function updateUserQuestions(userId, questionId) {
  return {
    type: UPDATE_USER_QUESTIONS,
    userId,
    questionId,
  };
}



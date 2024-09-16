import { _getQuestions , _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { updateUserAnswer, updateUserQuestions } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTIONS = "ADD_QUESTIONS";
export const QUESTIONS_ANSWER = "QUESTIONS_ANSWER";

 export function receivequestions (questions) {
    return {
        type : RECEIVE_QUESTIONS,
        questions,
    }
}

function addQuestion (question) {
  return {
    type : ADD_QUESTIONS,
    question,
  }
}

function questionAnswer (answer, qid, authedUser) {
  return {
    type : QUESTIONS_ANSWER,
    authedUser : authedUser.userId,
    answer,
    qid,
  }
}

export function getAllQuestions() {
    return (dispatch) => {
      return _getQuestions().then((questions) => {
        dispatch(receivequestions(questions));
      });
    };
  }


export function handleAddQuestions(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const question = {
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser.userId,
    };

    return _saveQuestion(question).then((question) => {
      dispatch(addQuestion(question));
      dispatch(updateUserQuestions(authedUser.userId, question.id));
    });
  };
}



  export function saveQuestionAnswer(qid, answer) {
    return (dispatch, getState) => {
      const { authedUser } = getState();

      return _saveQuestionAnswer({
        authedUser: authedUser.userId,
        qid,
        answer 
      }).then(() => {

        dispatch({
          type: QUESTIONS_ANSWER,
          authedUser: authedUser.userId,
          qid,
          answer
        });

        dispatch(updateUserAnswer({
          authedUser : authedUser.userId,
          qid,
          answer
        }));
       
      });
    };
  }

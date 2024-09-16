import { RECEIVE_USERS , UPDATE_USER_ANSWER , UPDATE_USER_QUESTIONS } from "../actions/users";

export default function users (state = {}, action) {
    switch (action.type){
        case  RECEIVE_USERS :
        return {
            ...state,
            ...action.users,
        }

        case UPDATE_USER_ANSWER :
            const { authedUser , qid, answer} = action;
            return {
                ...state,
                [authedUser] : {
                    ...state[authedUser],
                    answers : {
                        ...state[authedUser].answers,
                        [qid] : answer
                    }
                }
            }

        case UPDATE_USER_QUESTIONS :
            return {
                ...state,
                [action.userId]: {
                  ...state[action.userId],
                  questions: state[action.userId].questions.concat(action.questionId),
                },
              }

        default :
        return state
    }
}





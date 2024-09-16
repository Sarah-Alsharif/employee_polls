import { RECEIVE_QUESTIONS , ADD_QUESTIONS , QUESTIONS_ANSWER } from "../actions/questions";

export default function questions (state = {}, action) {
    switch (action.type){
        case  RECEIVE_QUESTIONS :
        return {
            ...state,
            ...action.questions,
        }

        case ADD_QUESTIONS :
            return {
                ...state,
                [action.question.id] : action.question,
            }
        
            case ADD_QUESTIONS:
                return {
                  ...state,
                  [action.question.id]: action.question,
                };
          
              case QUESTIONS_ANSWER: {
                const { authedUser, qid, answer } = action;
                const question = state[qid];
                const previousAnswer = question.optionOne.votes.includes(authedUser)
                ? 'optionOne'
                : question.optionTwo.votes.includes(authedUser)
                ? 'optionTwo'
                : null;
             
                return {
                  ...state,
                  [qid]: {
                    ...question,
                    [answer]: {
                      ...question[answer],
                      votes: question[answer].votes.concat([authedUser]),
                    },
                    ...(previousAnswer && previousAnswer !== answer
                      ? {
                          [previousAnswer]: {
                            ...question[previousAnswer],
                            votes: question[previousAnswer].votes.filter(
                              (userId) => userId !== authedUser
                            ), 
                          },
                        }
                      : {}),
                  },
                };
              }

        default :
        return state
    }
}


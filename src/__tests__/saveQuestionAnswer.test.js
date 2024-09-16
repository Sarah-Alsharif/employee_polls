import { _saveQuestionAnswer } from '../utils/_DATA'; 

describe('_saveQuestionAnswer', () => {
  test('should return true when correctly formatted data is provided', async () => {
    const validAnswer = {
      authedUser: 'tylermcginnis',
      qid: 'vthrdm985a262al8qx3do',
      answer: 'optionOne'
    };

    const result = await _saveQuestionAnswer(validAnswer);

    expect(result).toBe(true);
  });


  test('should throw an error when missing required fields', async () => {
    const invalidAnswer = {
      authedUser: 'tylermcginnis',
    };

    await expect(_saveQuestionAnswer(invalidAnswer)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  }); 

});

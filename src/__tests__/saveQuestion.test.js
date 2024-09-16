import { _saveQuestion } from '../utils/_DATA';

describe('_saveQuestion', () => {
  test('should return the saved question with all fields populated when valid data is provided', async () => {
    const validQuestion = {
      optionOneText: "Option 1",
      optionTwoText: "Option 2",
      author: "tylermcginnis"
    };

    const result = await _saveQuestion(validQuestion);

    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('timestamp');
    expect(result.optionOne.text).toBe(validQuestion.optionOneText);
    expect(result.optionTwo.text).toBe(validQuestion.optionTwoText);
    expect(result.optionOne.votes).toEqual([]);
    expect(result.optionTwo.votes).toEqual([]);
    expect(result.author).toBe(validQuestion.author);
  });

  
  test('should throw an error when invalid data is provided', async () => {
    const invalidQuestion = {
      optionOneText: "Option 1"
    };

    await expect(_saveQuestion(invalidQuestion)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

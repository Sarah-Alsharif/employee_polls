import { _getQuestions } from '../utils/_DATA'; 

const mockQuestions = {
    "8xf0y6ziyjabvozdd253nd": {
        id: '8xf0y6ziyjabvozdd253nd',
        author: 'sarahedo',
        timestamp: 1467166872634,
        optionOne: {
          votes: ['sarahedo'],
          text: 'Build our new application with Javascript',
        },
        optionTwo: {
          votes: [],
          text: 'Build our new application with Typescript'
        }
      },
      "6ni6ok3ym7mf1p33lnez": {
        id: '6ni6ok3ym7mf1p33lnez',
        author: 'mtsamis',
        timestamp: 1468479767190,
        optionOne: {
          votes: [],
          text: 'hire more frontend developers',
        },
        optionTwo: {
          votes: ['mtsamis', 'sarahedo'],
          text: 'hire more backend developers'
        }
      }
};

jest.mock('../utils/_DATA', () => ({
    _getQuestions: () => Promise.resolve(mockQuestions)
}));

describe('_getQuestions', () => {
  it('should resolve with the correct questions data', async () => {
    const questions = await _getQuestions();
    expect(questions).toEqual(mockQuestions);
  });
});

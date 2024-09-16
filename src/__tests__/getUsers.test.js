import { _getUsers } from '../utils/_DATA'; 

const mockUsers = {
    sarahedo: {
        id: 'sarahedo',
        password:'password123',
        name: 'Sarah Edo',
        avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
        answers: {
          "8xf0y6ziyjabvozdd253nd": 'optionOne',
          "6ni6ok3ym7mf1p33lnez": 'optionOne',
          "am8ehyc8byjqgar0jgpub9": 'optionTwo',
          "loxhs1bqm25b708cmbf3g": 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
      },
      tylermcginnis: {
        id: 'tylermcginnis',
        password:'abc321',
        name: 'Tyler McGinnis',
        avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
        answers: {
          "vthrdm985a262al8qx3do": 'optionOne',
          "xj352vofupe1dqz9emx13r": 'optionTwo',
        },
        questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
      }
};

jest.mock('../utils/_DATA', () => ({
  _getUsers: () => Promise.resolve(mockUsers)
}));

describe('_getUsers', () => {
  it('should resolve with the correct users data', async () => {
    const users = await _getUsers();
    expect(users).toEqual(mockUsers);
  });
});

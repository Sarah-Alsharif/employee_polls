import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Leaderboard from '../components/Leaderboard';
import store from '../store';

const mockUsers = {
  user1: {
    id: 'user1',
    name: 'sarah alsahrif',
    avatarURL: 'https://example.com/avatar1.png',
    answers: { q1: 'optionOne', q2: 'optionTwo' },
    questions: ['q1', 'q2']
  },
  user2: {
    id: 'user2',
    name: 'nouf alsharif',
    avatarURL: 'https://example.com/avatar2.png',
    answers: { q3: 'optionOne' },
    questions: ['q3']
  }
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn().mockReturnValue(mockUsers),
}));

describe('Leaderboard', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Leaderboard />
        </MemoryRouter>
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

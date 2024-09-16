import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store'; 
import QuestionCard from '../components/QuestionCard'; 

// Mock data
const mockQuestions = [
  {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: Date.now()
  },
  {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'usetylermcginnisr2',
    timestamp: Date.now()
  }
];

describe('QuestionCard Component', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MemoryRouter>
          <QuestionCard questions={mockQuestions} />
        </MemoryRouter>
      </Provider>
    );
    
    expect(asFragment()).toMatchSnapshot();
  });
});

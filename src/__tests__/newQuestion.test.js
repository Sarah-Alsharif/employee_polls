import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import NewQuestion from '../components/NewQuestion';
import store from '../store';
import { setAuthedUser } from '../actions/authedUser';

describe('NewQuestion', () => {

  beforeEach(() => {
    store.dispatch(setAuthedUser({ userId: 'sarahedo', userAvatar: 'https://tylermcginnis.com/would-you-rather/sarah.jpg' }));
  });


  it('should render all expected fields', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NewQuestion />
        </MemoryRouter>
      </Provider>
    );

    const optionOneInput = screen.getByTestId('Option One');
    const optionTwoInput = screen.getByTestId('Option Two');
    expect(optionOneInput).toBeInTheDocument();
    expect(optionTwoInput).toBeInTheDocument();

    const submitButton = screen.getByText('Submit');
    expect(submitButton).toBeInTheDocument();
  });


  it('should handle input changes and enable submit button when both inputs are filled', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NewQuestion />
        </MemoryRouter>
      </Provider>
    );

    const optionOneInput = screen.getByTestId('Option One');
    const optionTwoInput = screen.getByTestId('Option Two');
    const submitButton = screen.getByText('Submit');

    expect(submitButton).toBeDisabled();

    fireEvent.change(optionOneInput, { target: { value: 'Option 1' } });
    fireEvent.change(optionTwoInput, { target: { value: 'Option 2' } });
    expect(submitButton).toBeEnabled();
  });

});

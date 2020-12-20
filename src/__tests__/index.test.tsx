import React from 'react';
import ReactDOM from 'react-dom';
import { request } from 'supertest';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  fireEvent,
  screen,
  waitFor,
  waitForDomChange,
} from '@testing-library/react';
import renderer from 'react-test-renderer';

// Page
import Home from '../pages/index';

// dar fetch na API
// retornar os dados da api
// renderizar resultado

describe('Home page', () => {
  it('should render without crashing', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('text-input')).toBeInTheDocument();
    expect(getByTestId('submit-button')).toBeInTheDocument();
    expect(getByTestId('form')).toBeInTheDocument();
  });

  // it('should submit form', async () => {
  //   const { getByTestId } = render(<Home />);
  //   const textInput = await waitFor(() => getByTestId('text-input'));
  //   const submitButton = await waitFor(() => getByTestId('submit-button'));
  //   fireEvent.change(textInput, { target: { value: 'gabrielprrd' } });
  //   expect(textInput.value).toEqual('gabrielprrd');
  //   fireEvent.click(submitButton);
  //   await waitForDomChange();
  // });

  it('should not trigger handleSubmit function when empty', async () => {
    const handleSubmit = jest.fn();
    const setQuery = jest.fn();
    const { getByTestId } = render(<Home />);
    const form = screen.getAllByTestId('form');
    ReactDOM.render(<form onSubmit={handleSubmit} />);
    const textInput = await waitFor(() => getByTestId('text-input'));
    const submitButton = await waitFor(() => getByTestId('submit-button'));
    fireEvent.change(textInput, { target: { value: '' } });
    fireEvent.click(submitButton);
    expect(screen.getByTestId('form')).toHaveProperty('onSubmit');
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  // it('should alert error when username is invalid', async () => {
  //   const { getByTestId } = render(<Home />);
  //   const textInput = await waitFor(() => getByTestId('text-input'));
  //   const submitButton = await waitFor(() => getByTestId('submit-button'));
  //   fireEvent.change(textInput, { target: { value: ' ' } });
  //   fireEvent.click(submitButton);
  //   expect(textInput.value).toEqual(' ');
  // });
});

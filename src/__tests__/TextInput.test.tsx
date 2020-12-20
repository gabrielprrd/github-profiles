import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

// component
import TextInput from '../components/TextInput';

describe('render TextInput', () => {
  it('should render textInput inside a form without crashing', () => {
    const { container } = render(<form />);
    ReactDOM.render(<TextInput />, container.firstChild);
  });

  it('should update on change', () => {
    const { getByTestId } = render(<TextInput />);
    const textInput = getByTestId('text-input');
    fireEvent.change(textInput, { target: { value: 'test' } });
    expect(textInput.value).toEqual('test');
  });

  it('should have the required attribute', () => {
    const { getByTestId } = render(<TextInput />);
    expect(getByTestId('text-input')).toHaveAttribute('required');
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<TextInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

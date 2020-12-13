import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';

// component
import TextInput from '../components/TextInput';

describe('render TextInput', () => {
  it('should render textInput inside a form without crashing', () => {
    const { container } = render(<form />);
    ReactDOM.render(<TextInput />, container.firstChild);
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<TextInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

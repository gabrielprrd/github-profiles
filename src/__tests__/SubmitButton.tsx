import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SubmitButton from '../components/SubmitButton';

describe('render SubmitButton', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SubmitButton label="search" />, div);
  });

  it('should render button correctly', () => {
    const { getByTestId } = render(<SubmitButton label="search" />);
    expect(getByTestId('submit-button')).toHaveTextContent('search');
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<SubmitButton label="search" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

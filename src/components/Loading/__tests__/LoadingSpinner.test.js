import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoadingSpinner from '../LoadingSpinner';

describe('Loading Spinner', () => {
  test('should match the snapshot of Loading spinner', () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    const component = render(<LoadingSpinner />);
    expect(component).toMatchSnapshot();
  });
});

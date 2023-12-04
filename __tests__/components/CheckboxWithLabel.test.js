import {cleanup, fireEvent, render} from '@testing-library/react';
import CheckboxWithLabel from '../../src/components/CheckboxWithLabel';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test('CheckboxWithLabel changes the label after each click', () => {
  // Arrange: render checkbox and store reference
  const {getByLabelText} = render(
    <CheckboxWithLabel labelOn="on" labelOff="off" />,
  );
  var checkbox = getByLabelText("off")

  // Assert: check that checkbox is initially off
  expect(checkbox.checked).toBe(false);

  // Act: click on the checkbox
  fireEvent.click(checkbox);

  // Assert: check that the checkbox is now on!
  expect(checkbox.checked).toBe(true);
});

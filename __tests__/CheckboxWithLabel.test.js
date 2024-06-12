import {cleanup, fireEvent, render} from '@testing-library/react';
import CheckboxWithLabel from '../src/components/CheckboxWithLabel';

/*
 3. This test suite specifically is about testing React components. It's a bit more complicated, as we're using
 a new library called @testing-library/react. The functions that this API provides help us manipulate the components,
 as if we're a real user!
*/

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

/* TODO: write the test where CheckboxWithLabel changes the label after each click
//Have a look at these docs to help you write the test:
 You need to render the component: https://testing-library.com/docs/react-testing-library/api/#render
 You'll need to virtually click on the checkbox: https://testing-library.com/docs/dom-testing-library/api-events/#fireevent
*/


test("check CheckboxWithLabel changes the label after each click", () => {

  const {getByLabelText} = render (
    <CheckboxWithLabel labelOn="on" labelOff="off"/>
  );

  var checkbox = getByLabelText("off");

  expect(checkbox.checked).toBe(false);

  fireEvent.click(checkbox);

  expect(checkbox.checked).toBe(true);
  // 1. Arrange: render checkbox and store the component as a var, so you can refer to it later.
  // 2. Assert: check that checkbox is initially off. You can do something like 'checkbox.checked' to check its value
  // 3. Act: click on the checkbox using FireEvent
  // 4. Assert: check that the checkbox is now clicked and that the label has changed to "on"!
});

import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

test('testing the login', () => {
  const component = renderer.create(
    <Link page="http://127.0.0.1:3000/">Login</Link>,
  );

});
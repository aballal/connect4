import React from 'react';
import { shallow } from 'enzyme';

import Board from './Board';

function buildComponent() {
  return shallow(<Board />)
}

describe('Board', () => {
  const board = buildComponent();

  it('exists', () => {
    expect(board.length).toEqual(1);
  })
});
import React from 'react';
import { shallow } from 'enzyme';

import Board from './Board';

function buildComponent() {
  return shallow(<Board />)
}

describe('Board', () => {
  const board = buildComponent();

  it('exists', () => {
    expect(board.length).toBe(1);
  });

  it('contains 7 columns', () => {
    expect(board.find(Column).length).toBe(7)
  });

});
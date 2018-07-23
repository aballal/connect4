import React from 'react';
import { shallow } from 'enzyme';

import Board from './Board';
import Column from "./Column";

function buildComponent() {
  return shallow(<Board />)
}

describe('Board', () => {
  const board = buildComponent();

  it('exists', () => {
    expect(board.length).toBe(1);
  });

  it('contains 7 columns', () => {
    // console.log(board.shallow())
    expect(board.find(Column).length).toBe(7)
  });

});
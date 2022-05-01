import React from 'react';
import renderer from 'react-test-renderer';
import {GameTable} from './gameTable';
import {mount} from 'enzyme';
import {cleanup} from '@testing-library/react';

describe('<GameTable />', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });
  it('should find at least 1 square cell', () => {
    const gameMap: string[] = [
      '□□□□□□□□□□',
      '□□□□□□□□□□',
      '□□□□□□□□□□',
      '□□□□□□□□□□',
      '□□□□□□□□□□',
      '□□□□□□□□□□',
      '□□□□□□□□□□',
      '□□□□□□□□□□',
      '□□□□□□□□□□',
      '□□□□□□□□□□',
    ];
    const wrapper = mount(
        <GameTable gameMap={gameMap}/>,
    );
    const element = wrapper.find('square-1-1');
    expect(element).toBeTruthy();
  });
});

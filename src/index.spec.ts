import { assert } from 'chai';
import AlQibla from './index';

describe('Direction passing test', () => {
  it('should match location', () => {
    const answer = 118.98724271028611;
    const lat = 51.5073509;
    const lng = -0.1277583;
    return assert.equal(AlQibla.getDirection(lat, lng), answer);
  });
});

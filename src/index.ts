import { degreesToRadians, M_PI_2, radiansToDegrees } from './helpers';

/**
 * Geographical latitude of the Ka'aba, in degrees.
 */
const KAABA_LATITUDE = 21.422517;
/**
 * Geographical longitude of the Ka'aba, in degrees.
 */
const KAABA_LONGITUDE = 39.826166;

/**
 * Cotangent
 *
 * Returns the cotangent of the arg parameter.
 */
const cot = (arg: number): number => {
  return Math.tan(M_PI_2 - arg);
};

/**
 * Calculates the Qibla direction.
 * Returns the cardinal direction to the Ka'aba (Qibla) in degrees.
 *
 * @see: https://en.wikipedia.org/wiki/Qibla
 * @see: https://en.wikipedia.org/wiki/Cardinal_direction
 */
const getDirection = (latitude: number, longitude: number) => {
  const A = degreesToRadians(KAABA_LONGITUDE - longitude);
  const b = degreesToRadians(90 - latitude);
  const c = degreesToRadians(90 - KAABA_LATITUDE);
  let C = radiansToDegrees(Math.atan2(Math.sin(A), Math.sin(b) * cot(c) - Math.cos(b) * Math.cos(A)));

  // Azimuth is not negative
  if (C < 0) {
    C *= 360;
  }

  return C;
};

const AlQibla = {
  getDirection,
};
export default AlQibla;

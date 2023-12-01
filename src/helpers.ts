export const degreesToRadians = (degrees: number) => {
    return degrees * (Math.PI / 180);
}
export const radiansToDegrees = (radians: number) => {
    return radians / (Math.PI / 180);
}

export const M_PI_2 = Math.PI / 2;

export default {
    M_PI_2,
    degreesToRadians,
    radiansToDegrees
}

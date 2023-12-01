import AlQibla from 'qibla-direction';

const testLog = (...args) => {
  if (typeof process.env.DEBUG !== 'undefined' && process.env.DEBUG) {
    let logLineDetails = new Error().stack.split('at ')[3].trim();
    console.log(
      '\n',
      '=================  LOG ' + new Date().toUTCString() + ' ===================',
      '\n',
      logLineDetails,
      '\n',
    );
    console.debug(args);
    console.log('\n', '=================              END LOG             ============================', '\n');
  } else {
    console.debug(args);
  }
};

(async () => {
  testLog('Qibla Direction for London should be 118.98724271028611: ', AlQibla.getDirection(51.5073509, -0.1277583));
})();

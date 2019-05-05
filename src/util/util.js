'use strict';

module.exports = {
  isProduction: () => process.env.NODE_ENV === 'production',

  getDateTime: () => {
    let date = new Date();
    try {
      return date
        .toJSON()
        .replace(/T/g, ' ')
        .replace(/\.([^z]*)z/g, '');
    } catch (err) {
      console.log(`Error while parsing datetime: ${err}`);
      return '';
    }
  },
};

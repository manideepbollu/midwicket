'use strict';

module.exports = {
  isProduction: () => process.env.NODE_ENV === 'production',
};

var path = require('path');

module.exports = {
  appPath: function() {
    switch (process.platform) {
      case 'darwin':
        return path.join(__dirname, '..', '.tmp', 'mac', 'Brunchcompare.app', 'Contents', 'MacOS', 'Brunchcompare');
      case 'linux':
        return path.join(__dirname, '..', '.tmp', 'linux', 'Brunchcompare');
      default:
        throw 'Unsupported platform';
    }
  }
};

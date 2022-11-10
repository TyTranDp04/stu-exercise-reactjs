const path = require('path');

// Webpack Config
export default {
  // ...
  resolve: {
    alias: {
      ['@']: path.join(root, 'src')
    }   
  }
}
require.ensure(['./plugins/a.js'], function(require) {
    var aModule = require('./plugins/a.js');
}, 'a');
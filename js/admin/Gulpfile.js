var flarum = require('flarum-gulp');

flarum({
    modules: {
        'jellybool/poet': [
            'src/**/*.js'
        ]
    }
});

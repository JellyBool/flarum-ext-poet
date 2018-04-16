'use strict';

System.register('jellybool/poet/main', ['flarum/extend', 'flarum/components/DiscussionHero'], function (_export, _context) {
    "use strict";

    var extend, DiscussionHero;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsDiscussionHero) {
            DiscussionHero = _flarumComponentsDiscussionHero.default;
        }],
        execute: function () {

            app.initializers.add('jellybool-poet', function () {
                extend(DiscussionHero.prototype, 'view', function (vdom) {
                    vdom.children.push(':D');
                    vdom.attrs.style = 'background-color: yellow';
                });
            });
        }
    };
});
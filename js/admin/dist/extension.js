'use strict';

System.register('jellybool/poet/components/PoetSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
  "use strict";

  var SettingsModal, PoetSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }],
    execute: function () {
      PoetSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(PoetSettingsModal, _SettingsModal);

        function PoetSettingsModal() {
          babelHelpers.classCallCheck(this, PoetSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, (PoetSettingsModal.__proto__ || Object.getPrototypeOf(PoetSettingsModal)).apply(this, arguments));
        }

        babelHelpers.createClass(PoetSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('jellybool-poet.admin.settings.title');
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('jellybool-poet.admin.settings.apikey')
              ),
              m('input', { className: 'FormControl', type: 'text', bidi: this.setting('jellybool-poet.apikey') })
            )];
          }
        }]);
        return PoetSettingsModal;
      }(SettingsModal);

      _export('default', PoetSettingsModal);
    }
  };
});;
'use strict';

System.register('jellybool/poet/main', ['flarum/app', 'jellybool/poet/components/PoetSettingsModal'], function (_export, _context) {
    "use strict";

    var app, PoetSettingsModal;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_jellyboolPoetComponentsPoetSettingsModal) {
            PoetSettingsModal = _jellyboolPoetComponentsPoetSettingsModal.default;
        }],
        execute: function () {

            app.initializers.add('jellybool-poet', function () {
                app.extensionSettings['jellybool-poet'] = function () {
                    return app.modal.show(new PoetSettingsModal());
                };
            });
        }
    };
});
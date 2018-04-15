import SettingsModal from 'flarum/components/SettingsModal';

export default class PoetSettingsModal extends SettingsModal {
  className() {
    return 'Modal--small';
  }

  title() {
      return app.translator.trans('jellybool-poet.admin.settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('jellybool-poet.admin.settings.apikey')}</label>
        <input className="FormControl" type="text" bidi={this.setting('jellybool-poet.apikey')}/>
      </div>
    ];
  }
}

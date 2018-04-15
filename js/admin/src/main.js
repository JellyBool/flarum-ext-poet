import app from 'flarum/app';

import PoetSettingsModal from 'jellybool/poet/components/PoetSettingsModal';

app.initializers.add('jellybool-poet', () => {
    app.extensionSettings['jellybool-poet'] = () => app.modal.show(new PoetSettingsModal());
});

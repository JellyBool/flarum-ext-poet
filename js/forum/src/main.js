import { extend } from 'flarum/extend';
import DiscussionHero from 'flarum/components/DiscussionHero';

app.initializers.add('jellybool-poet', function() {
    extend(DiscussionHero.prototype, 'view', function(vdom) {
        vdom.children.push('<p><a href="#">Licensed via po.et</a></p>');
    });
});
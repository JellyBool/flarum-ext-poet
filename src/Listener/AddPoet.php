<?php

namespace JellyBool\Poet\Listener;

use JellyBool\Translug\Translug;
use Flarum\Event\DiscussionWillBeSaved;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Settings\SettingsRepositoryInterface;

/**
 * Class AddPoet
 * @package Jellybool\Chinese\Listener
 */
class AddPoet {

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(DiscussionWillBeSaved::class, [$this, 'timestampOnPoet']);
    }

    /**
     * @param DiscussionWillBeSaved $event
     */
    public function timestampOnPoet(DiscussionWillBeSaved $event)
    {
        $translator = $this->getTranslator();
        $slug = $translator->translug($event->discussion->title);
        $event->discussion->slug = $slug;
    }

    /**
     * @return Translug
     */
    protected function getTranslator()
    {
        return new Translug([
            'appKey' => $this->settings->get('jellybool-poet.apikey')
        ]);
    }
}
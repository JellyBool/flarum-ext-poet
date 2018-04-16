<?php

namespace JellyBool\Poet\Listener;

use Flarum\Tags\Tag;
use JellyBool\Poet\Client;
use JellyBool\Translug\Translug;
use Flarum\Event\DiscussionWillBeSaved;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Settings\SettingsRepositoryInterface;

/**
 * Class AddPoet
 * @package Jellybool\Poet\Listener
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
        $poet = $this->getClient();

        $linkage = (array) $event->data['relationships']['tags']['data'];

        $newTagIds = [];

        foreach ($linkage as $link) {
            $newTagIds[] = (int) $link['id'];
        }

        $newTags = Tag::whereIn('id', $newTagIds)->get();

       $poet->createWork([
            'name'          => $event->discussion->title,
            'datePublished' => $event->discussion->start_time,
            'dateCreated'   => $event->discussion->start_time,
            'author'        => $event->actor->username,
            'tags'          => $newTags->pluck('name')->implode(','),
            'content'       => $event->data['attributes']['content'],
        ]);
    }

    /**
     * @return Translug
     */
    protected function getClient()
    {
        return new Client($this->settings->get('jellybool-poet.apikey'));
    }
}
<?php
use Flarum\Database\Migration;

return Migration::addColumns('discussions', [
    'work_id' => ['string','nullable']
]);
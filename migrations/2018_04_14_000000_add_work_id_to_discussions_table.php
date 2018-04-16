<?php
use Flarum\Database\Migration;
use Illuminate\Database\Schema\Blueprint;

return Migration::addColumns('discussions', function (Blueprint $table) {
    $table->string('work_id')->nullable();
});
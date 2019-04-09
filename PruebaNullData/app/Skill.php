<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $table = 'skills';
    protected $fillable = [
        'nombre',
        'empleado_id'
    ];
    protected $guarded = ['created_at','updated_at'];
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Empleado extends Model
{
    protected $table = 'empleados';
    protected $fillable = [
        'nombre',
        'email',
        'puesto',
        'fecha',
        'domicilio'
    ];
    protected $guarded = ['created_at','updated_at'];
}

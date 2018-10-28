<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class User extends Eloquent {

	protected $collection = 'usuarios';
	protected $connection = 'mongodb';

	protected $fillable = ['name', 'email', 'idade', 'telefone', 'perfil', 'foto', 'lat', 'long', 'id_perfil', 'password'];
	protected $hidden = ['password', 'remember_token', 'updated_at', 'deleted_at'];
	protected $dates = ['deleted_at', 'updated_at', 'created_at'];

}
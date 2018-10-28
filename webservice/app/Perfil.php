<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Perfil extends Eloquent {
	protected $collection = 'perfil';
	protected $connection = 'mongodb';

	protected $fillable = ['nome'];

}

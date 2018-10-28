<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Perfil;
use Illuminate\Http\Request;

class PerfilController extends Controller {

	public function index() {
		return Perfil::all();
	}

	public function store(Request $request) {
		Perfil::create($request->all());

		return Perfil::orderBy('created_at', 'desc')->first();
	}

	public function show($id) {
		//
	}

	public function update(Request $request, $id) {
		Perfil::find($id)->update($request->all());

		return $request->all();
	}

	public function destroy($id) {
		Perfil::find($id)->delete();

		return Perfil::all();
	}

}

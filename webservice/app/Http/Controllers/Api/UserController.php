<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller {

	public function index() {
		return User::all();
	}

	public function store(Request $request) {
		User::create($request->all());
		return $request->all();
	}

	public function show($id) {
		$dados = User::find($id);
		return response($dados);
	}

	public function update(Request $request, $id) {
		$data = $request->all();
		$dados = User::find($id)->update($data);
		return ["status" => ($dados) ? 'ok' : 'erro'];
	}

	public function destroy($id) {
		$usuario = User::find($id);
		if ($usuario) {
			$usuario->delete();
			return response()->json('Usuário deletado com sucesso');
		} else {

			return response('Usuário não encontrado');
		}

	}
}

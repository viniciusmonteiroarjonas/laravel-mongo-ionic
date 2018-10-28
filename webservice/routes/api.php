<?php

//USUARIOS
Route::get('/usuarios', 'Api\UserController@index');
Route::get('/usuarios/{id}', 'Api\UserController@show');
Route::post('/usuarios', 'Api\UserController@store');
Route::put('/usuarios/{id}', 'Api\UserController@update');
Route::delete('/usuarios/{id}', 'Api\UserController@destroy');

//PERFIL
Route::get('/perfil', 'Api\PerfilController@index');
Route::get('/perfil/{id}', 'Api\PerfilController@show');
Route::post('/perfil', 'Api\PerfilController@store');
Route::put('/perfil/{id}', 'Api\PerfilController@update');
Route::delete('/perfil/{id}', 'Api\PerfilController@destroy');

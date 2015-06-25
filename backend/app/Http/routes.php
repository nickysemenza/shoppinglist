<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/test','MainController@test');
Route::get('stores','MainController@getStores');

Route::get('products','MainController@getProducts');
Route::post('products/bulk','MainController@bulkProductAdd');
Route::get('product/{id}','MainController@getProduct');
Route::post('product','MainController@newProduct');
Route::get('list/','MainController@getList');
Route::get('list/{store_id}','MainController@getList');
Route::get('list/check/{id}','MainController@checkOff');
Route::get('list/add/{id}/{quantity}','MainController@addToList');


<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductStore extends Model
{
    protected $table = 'product_store';
    // public function getStore()
    // {
    //     //return $this->belongsToMany('App\Store','omg','aid','asd');
    //     return $this->hasOne('App\Store','id','store_id');
    // }
}

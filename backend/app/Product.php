<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public function product_locations()
    {
        return $this->belongsToMany('App\Store','product_store');
    }
}

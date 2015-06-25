<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ShoppingList extends Model
{
	protected $table = 'list';
    public function line_item()
    {
        return $this->hasOne('App\Product','id','product_id');
    }
}

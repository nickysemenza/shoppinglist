<?php namespace App\Http\Controllers;
use App\Product;
use App\ShoppingList;
use App\Store;
use App\ProductStore;
use Input;
class MainController extends Controller
{
    public function test()
    {
        return ['hi'];
    }
    public function getProducts()
    {
        return Product::all();
    }
    public function getStores()
    {
        return Store::all();
    }
    public function getProduct($id)
    {
        return Product::find($id);
    }
    public function newProduct()
    {
        return;
    }
    
    public function getList($store_id = 0)
    {
        
        $test = ShoppingList::find(9);
        //dd($test->line_item);

        $byStore = [];
        $ret = [];
        foreach (ShoppingList::where("checked",false)->get() as $listItem)
        {
            $product = $listItem->line_item;
            // echo("<pre>");
            // echo("<hr>");
            // echo($product);
            // echo("</pre>");
            // echo $listItem;
            $locs = $product->product_locations;
            foreach($locs as $each_loc)
            {
                $product['quantity']=$listItem->quantity;
                $product['list_item_id']=$listItem->id;
                $byStore['data'][$each_loc['id']]['items'][]=$product;
                $byStore['data'][$each_loc['id']]['name']=$each_loc['name'];
                $byStore['data'][$each_loc['id']]['id']=$each_loc['id'];
            }
             $ret[]= ['product_info'=>$product,
                      'list_item_id'=>$listItem->id,
                        //'locs'=>$locs,
                      'quantity'=>$listItem->quantity,
                      'checked'=>$listItem->checked];
        }
        if($store_id!=0)
        {
            return $byStore;
        }
        return $ret;
    }
    public function checkOff($id)
    {
        $item = ShoppingList::find($id);
        $item->checked=true;
        $item->save();
        return ['ok'];
    }
    public function addToList($id,$quantity)
    {
        $new=new ShoppingList();
        $new->product_id=$id;
        $new->quantity=$quantity;
        $new->save();
        return ['ok'];
    }
    public function bulkProductAdd()
    {
        $data = Input::json()->all();

         foreach($data as $each)
        {
            // echo $each['name'];
            $prod = new Product;
            $prod->name = $each['name'];
            $prod->save();
            $product_id = $prod->id;
            $this->addToList($product_id,1);
            if(isset($each['store']))
            {
               foreach($each['store'] as $key=>$val)
                {
                    //echo $key.".|".$val."|\n";
                    if($val==1)
                    {
                        $piv = new ProductStore;
                        $piv->product_id=$product_id;
                        $piv->store_id=$key;
                        $piv->save();
                    }
            } 
            }

            
        }
         return ['ok'];
    }
}
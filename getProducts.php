<?php
try {
    require_once("connectBooks.php");
	$sql = "select * from product where category =:cate and seen = 1";
    $products = $pdo->prepare($sql); 
    $products -> bindValue( ":cate" , $_REQUEST["cate"]);
    $products -> execute();
    if( $products->rowCount()==0){ //沒有任何好友
        echo "null";
    }else{ //有商品
        $i=0;
        while($productsRows = $products ->fetch(PDO::FETCH_ASSOC)){
            $num=1;
            foreach ($productsRows as $key => $value) {
                if($num==1){
                    $productsList[$i] = $value;
                    $num++;
                }else{
                    $productsList[$i] .= '||'.$value;  
                }
                
            }
            $i++;
        }
        class data{
            public $productssInfo;
        }
        $info = new data();
        $info->productssInfo = $productsList;
        $send = json_encode($info);
        echo $send;
    }

} catch (PDOException $e) {
    echo $e->getMessage();
}









?>
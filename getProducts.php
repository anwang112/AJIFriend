<?php
session_start();
// 商城的產品列表  --by ga
$cate = $_GET["cate"];  
$mem = $_GET["mem"];
try{
    require_once("connectBooks.php");
    $sql = "select * from product where category=?";
    $products = $pdo->prepare( $sql );
    $products -> bindValue( 1 , $cate);
    $products ->execute();

    if( $products->rowCount()==0){ //沒有任何資料
        echo "null";
    }else{ //有資料
        $i=0;
        while($productsRows = $products ->fetch(PDO::FETCH_ASSOC)){
            $num=1;

            // check是否存在在購物明細
            $sql_order = "select count(*) from pro_orderitem where buyerNo = ? and proNo = ?";
            $buyItem = $pdo->prepare( $sql_order );
            $buyItem -> bindValue( 1 , $mem);
            $buyItem -> bindValue( 2 , $productsRows["proNo"]);
            $buyItem -> execute();
            $buyItemRows = $buyItem ->fetch(PDO::FETCH_ASSOC);

            foreach ($productsRows as $key => $value) {
                if($num==1){
                    $productsList[$i] = $value;
                    $num++;
                }else{
                    $productsList[$i] .= '||'.$value;  
                }
                
            }
            
            if($buyItemRows["count(*)"]==0){ //沒有購買紀錄
                $productsList[$i] .= '||' . 'NEVER'; 
            }else{ //有購買紀錄
                $productsList[$i] .= '||' . 'YES'; 
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

}catch(PDOException $e){
    echo $e->getMessage();
}






?>
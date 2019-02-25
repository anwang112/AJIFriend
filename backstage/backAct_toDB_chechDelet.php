<?php
    //跟資料庫要資料

    
    try {
        require_once("../connectBooks.php");
        //總筆數


        if(isset($_REQUEST["actObjDelCheck"]) ){
            // $actDele = $memberData = json_decode($_REQUEST["actDele"]);
            $sqlCheck = "SELECT * FROM activity a JOIN member m where a.host_memNo = m.memNo AND `showOrNot` = '0' ";
            $aa = $pdo->prepare($sqlCheck); 
            $aa -> execute();
            // echo "123456";
            if( $aa->rowCount()==0){ //沒有刪除的活動
                echo "123";
            }else{ //有刪除的活動 塞值進去
                $list=[];
                $i=0;
                while($aaR = $aa -> fetch(PDO::FETCH_ASSOC)){
                    $num = 1;
                    foreach( $aaR as $key => $value ){
                        if($num==1){
                            $list[$i] = $value;
                            $num++;
                        }else{
                            $list[$i] .= ',' . $value;
                        }
                    }
                    $i++;
                }
                // echo 1;
                class data2{
                    public $arr;
                }
                $info = new data2();
                $info -> arr = $list;
                $send = json_encode($info);
                echo $send;
                // echo $send;

            }

        }
    }catch (PDOException $e) {
        echo "錯誤 : ", $e -> getMessage(), "<br>";
        echo "行號 : ", $e -> getLine(), "<br>";
    }

?> 

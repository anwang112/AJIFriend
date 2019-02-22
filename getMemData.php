<?php  
// 獲得會員資料  --by ga
session_start();

    try{
        require_once("connectBooks.php");
        $sql = "select * from member where memNo=?";
        $friend = $pdo->prepare( $sql );
        // $_GET["no"] = 2;
        
        // if(isset($_REQUEST["from"])){ //load試穿角色
        //     if(isset($_SESSION["gift_ta"])){
        //         $friend -> bindValue( 1,$_SESSION["gift_ta"]["no"]);
                
        //     }else{
        //         $friend -> bindValue( 1,$_SESSION["memNo"]);
        //     }
        //     $friend ->execute();
        //     if( $friend->rowCount()==0){ //沒有這個會員
        //         echo "null";
        //     }else{ //有這個會員
        //         $friendRows = $friend ->fetch(PDO::FETCH_ASSOC);
        //         class data{
        //             public $no;
        //             public $name;
        //             public $color;
        //             public $animal;
        //             public $eye;
        //             public $id;
        //             public $hat;
        //             public $clothes;

        //         }
        //         $info = new data();
        //         $info->no= $friendRows["memNo"];
        //         $info->name= $friendRows["mName"];
        //         $info->color= $friendRows["mColor"];
        //         $info->animal= $friendRows["animal"];
        //         $info->eye= $friendRows["eye"];
        //         $info->id= $friendRows["memId"];
        //         $info->hat= $friendRows["wearHat"];
        //         $info->clothes= $friendRows["wearClothes"];
        //         $send = json_encode($info);
        //         echo $send;
        //     }
        
        // }else if(isset($_GET["no"])){ //換試穿角色暱稱
            $data = $_GET["no"];
            $friend -> bindValue( 1,$data);
            $friend ->execute();
            // echo $data;

            if( $friend->rowCount()==0){ //沒有這個會員
                echo "null";
            }else{ //有這個會員
                $friendRows = $friend ->fetch(PDO::FETCH_ASSOC);
                class data{
                    public $no;
                    public $name;
                    public $color;
                    public $animal;
                    public $eye;
                    public $id;
                    public $hat;
                    public $clothes;

                }
                $info = new data();
                if($data!=$_SESSION["memNo"]){
                
                    $_SESSION["gift_ta"]["no"] = $friendRows["memNo"];
                    $_SESSION["gift_ta"]["name"] = $friendRows["mName"];
                    $_SESSION["gift_ta"]["color"] = $friendRows["mColor"];
                    $_SESSION["gift_ta"]["animal"] = $friendRows["animal"];
                    $_SESSION["gift_ta"]["eye"] = $friendRows["eye"];
                    $_SESSION["gift_ta"]["id"] = $friendRows["memId"];
                    $_SESSION["gift_ta"]["hat"] = $friendRows["wearHat"];
                    $_SESSION["gift_ta"]["clothes"] = $friendRows["wearClothes"];

                }else{
                    unset($_SESSION["gift_ta"]);
                }


                $info->no= $friendRows["memNo"];
                $info->name= $friendRows["mName"];
                $info->color= $friendRows["mColor"];
                $info->animal= $friendRows["animal"];
                $info->eye= $friendRows["eye"];
                $info->id= $friendRows["memId"];
                $info->hat= $friendRows["wearHat"];
                $info->clothes= $friendRows["wearClothes"];
                $send = json_encode($info);
                echo $send;
                // echo "成功";
                // header("Location:BearMJ_shop_addcart.php");
            }
            
        // }
    }catch(PDOException $e){
        echo $e->getMessage();
    }
?>
<?php
    require_once("backReport_toDB.php");
?> 

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>檢舉管理</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <script src="../js/jquery-3.3.1.min.js"></script>
    <script src="../js/package/bootstrap.min.js"></script>
    <script src="../js/package/popover.js"></script>
    <link rel="stylesheet" href="../css/backstage.css">
    <script src="../js/backCommon.js"></script>
    <link rel="stylesheet" href="../css/backcss_final.css">
    <style>
        td,th{
            text-align:center;
            width:120px;
        }
    </style>
</head>

<body>
    <!-- Just an image -->
    <script>
        header();
   </script>
    <table class="table table-hover">
        <thead>
            <tr>
                <!-- <td colspan="4">
                        <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 處理狀態
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                  <a class="dropdown-item" href="#">頭飾</a>
                                  <a class="dropdown-item" href="#">Another action</a>
                                  <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                              </div>
                </td> -->
                <!-- <td colspan="3">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="會員編號" aria-label="Recipient's username"
                            aria-describedby="button-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">搜尋
                            </button>
                        </div>
                    </div>
                </td> -->
            </tr>
            <tr>
                <th scope="col">案例編號</th>
                <th scope="col">檢舉內容</th>
                <th scope="col">檢舉人</th>
                <th scope="col">被檢舉會員</th>
                <th scope="col">處理狀態</th>
                <th scope="col">備註</th>
            </tr>
        </thead>
        <tbody>
            <?php $i = 0 ?>
            <?php while($result->fetch(PDO::FETCH_ASSOC)){?>
                <?php 
                    $sqlName = " SELECT * FROM member where memNo = :memNo ";
                    $result_name = $pdo->prepare($sqlName); 
                    $result_name -> bindValue(":memNo",  $memNo);
                    $result_name  -> bindColumn("mName", $mName01); 
                    $result_name  -> execute();
                    $sqlName2 = " SELECT * FROM member where memNo = :memNo ";
                    $result_name2 = $pdo->prepare($sqlName2); 
                    $result_name2 -> bindValue(":memNo",  $ta_memNo);
                    $result_name2  -> bindColumn("mName",  $mName02); 
                    $result_name2  -> execute();
                ?>
            <tr>
                <th scope="row">
                    <a href=""><?php echo $repoNo ;?></a>
                </th>
                <td>
                    <?php echo $reason ;?>
                </td>
                <?php while($result_name ->fetch(PDO::FETCH_ASSOC)){?>
                <td><?php echo $mName01 ;?></td>
                <?php } ?>
                <?php while($result_name2 ->fetch(PDO::FETCH_ASSOC)){?>
                <td><?php echo $mName02 ;?></td>
                <?php } ?>
                
                <td>
                <form action="backReport_toDB.php" method="post" enctype="multipart/form-data">
                    <input type="number" name="statusValue" value="<?php echo $status ;?>"" min="0" max="1">
                    <input type="hidden" name="reportNo" value="<?php echo $repoNo ;?>"">
                    <input type="hidden" name="reportget" value="1111">
                </td>
                <td>
                    <?php if( $status == 0 ){?>
                            <?php echo '尚未處理';?>
                    <?php }else{?>
                        <?php echo '已處理';?>
                    <?php }?>
                </td>
                <td><input type="submit" value="送出"></td>
                </form>
            </tr><?php $i ++ ?>
            <?php } ?>
            
        
        </tbody>
    </table>


    <script>
        buttom()
    </script>
</body>

</html>
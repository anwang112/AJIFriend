<?php
    require_once("backAct_toDB.php");
?> 


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>商品管理</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <script src="../js/jquery-3.3.1.min.js"></script>
    <script src="../js/package/bootstrap.min.js"></script>
    <script src="../js/package/popover.js"></script>
    <link rel="stylesheet" href="../css/backstage.css">
    <script src="../js/backCommon.js"></script>
</head>

<body>
    <!-- Just an image -->
    <script>
        header();
        
   </script>
    <table class="table table-hover">
        <thead>
            <tr>
                <td colspan="2">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            活動類型
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">頭飾</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>

                </td>
                <td colspan="2">
                    <button id="holdAct01" type="button" class="btn btn-secondary">新增活動</button>
                </td>
                <td colspan="3">
                    <div  class="input-group mb-3">
                        <input id="act_search_txt" type="text" class="form-control" placeholder="" aria-label="Recipient's username"
                            aria-describedby="button-addon2">
                        <div class="input-group-append">
                            <button id="act_search_btn" class="btn btn-outline-secondary" type="button" id="button-addon2">搜尋
                            </button>
                        </div>
                    </div>

                </td>
            </tr>
            <tr>
                <th scope="col">活動編號</th>
                <th scope="col">發起人</th>
                <th scope="col">活動名稱</th>
                <th scope="col">活動地點</th>
                <th scope="col">活動圖片</th>
                <th scope="col">活動時間</th>
            </tr>
        </thead>
        <tbody>
             <?php while($activityAll ->fetch(PDO::FETCH_ASSOC)){?>
            <tr>
                <th scope="row">
                    <?php echo $actNo ;?><br> 
                    <button id="act_delet_btn<?php echo $actNo ;?>" type="button" class="btn btn-danger btn-sm">刪除</button>
                </th>
                <td>發起人//<?php echo $mName;?></td> 
                <td>活動名稱//<?php echo $actTitle;?></td>
                <td>地點<?php echo $actLoc;?></td>
                <td>
                    <img src="../images/<?php echo $actImg;?>" style="width:100px;" alt="活動圖片">
                </td>
                <td>
                     <?php echo  substr($act_begin,0,10) ; ?>至<?php echo substr($act_end,0,10);?>
                </td>
            </tr>
             <?php } ?>

        </tbody>
    </table>


    <script>
        buttom()
    </script>
    <script src="../js/backAct.js"></script>
</body>

</html>
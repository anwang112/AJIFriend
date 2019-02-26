<?php

ob_start();
session_start();
if (isset($_SESSION["adminName"]) === false) {
    header("Location:backLogin.php");
    exit();
}
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
    <style>

    *{
        /* outline:1px solid red; */
    }
    .container {
        max-width:unset;
        padding-left:0px;
        /* margin-left:15px; */
    }
    .col-9{
        padding-left:0;
    }
    .list-group-item{
        padding:1.75rem 1.25rem;
    }
    .table td{
        padding:0.25rem;
    }
    .row{
        margin-left:0;
    }
    button{
        margin:auto;    
    }
    tbody th input{
        color:blue;
    }
    thead tr:first-child{
        height:82px;
    }
   a{
       font-weight:normal;
   }
    
    
        td,th{
            text-align:left;
            width:120px;
        }
        .table {
            width: 100%;
            margin-bottom: 1rem;
            background-color: transparent;
        }
    </style>
</head>

<body>

    <!-- 隱藏登入者ㄉinput -->
    <input type="hidden" id="showAdminName" value="<?php echo $_SESSION["adminName"] ?>">


    <!-- Just an image -->
    <!-- <script>
        header();
   </script> -->
   <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="backStage.html">
        <img src="../images/logo2.png" width="130" alt="logo">後台
        </a>    
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#" id="logoutBtn">登出</a>
        </div>
    </nav>

    <div class="container content">
    <div class="row justify-content-center">
        <div class="col-3">
            <div class="list-group">
                <a href="backStage.php" class="list-group-item list-group-item-action">
                    管理員帳號管理
                </a>
                <a href="backMember.php" class="list-group-item list-group-item-action" >會員管理</a>
                <a href="backItem.php" class="list-group-item list-group-item-action">商品管理</a>
                <a href="backReport.php" class="list-group-item list-group-item-action" style="color:#007bff">檢舉管理</a>
                <a href="backAct.php" class="list-group-item list-group-item-action" tabindex="-1" aria-disabled="true">活動管理</a>
            </div>
        </div>
    <div class="col-9">
    <table class="table table-hover">
        <thead>
            <tr>
                <td colspan="4">
                    <div class="dropdown">
                        <!-- <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 處理狀態
                                </button> -->
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">頭飾</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </td>
                <td colspan="3">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="會員編號" aria-label="Recipient's username" aria-describedby="button-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">搜尋
                            </button>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="col">案例編號</th>
                <th scope="col">檢舉內容</th>
                <th scope="col">檢舉人</th>
                <th scope="col">被檢舉會員</th>
                <th scope="col">停權狀態</th>
                <th scope="col">備註</th>
            </tr>
        </thead>
        <tbody>
            <?php $i = 0 ?>
            <?php while ($result->fetch(PDO::FETCH_ASSOC)) { ?>
            <?php 
            $sqlName = " SELECT * FROM member where memNo = :memNo ";
            $result_name = $pdo->prepare($sqlName);
            $result_name->bindValue(":memNo",  $memNo);
            $result_name->bindColumn("mName", $mName01);
            $result_name->execute();

            $sqlName2 = " SELECT * FROM member where memNo = :memNo ";
            $result_name2 = $pdo->prepare($sqlName2);
            $result_name2->bindValue(":memNo",  $ta_memNo);
            $result_name2->bindColumn("mName",  $mName02);
            $result_name2->execute();
            ?>
            <tr>
                <th scope="row">
                    <a href="">
                        <?php echo $repoNo; ?></a>
                </th>
                <td>
                    
                    <?php echo $reason; ?>
                </td>
                <?php while ($result_name->fetch(PDO::FETCH_ASSOC)) { ?>
                <td>
                    <?php echo $mName01; ?>
                </td>
                <?php 
            } ?>
                <?php while ($result_name2->fetch(PDO::FETCH_ASSOC)) { ?>
                <td>
                    <?php echo $mName02; ?>
                </td>
                <?php 
            } ?>

                <td>
                    <form action="backReport_toDB.php" method="post" enctype="multipart/form-data">
                        <input type="number" name="statusValue" value="<?php echo $status; ?>"" min=" 0" max="1">
                        <input type="hidden" name="reportNo" value="<?php echo $repoNo; ?>"">
                    <input type=" hidden" name="reportget" value="1111">
                </td>
                <td><input type="submit" value="送出"></td>
                </form>
            </tr>
            <?php $i++ ?>
            <?php 
        } ?>


        </tbody>
    </table>


    <script>
        buttom()
    </script>

    <script>
        //登入寫入登入框ㄉ
        navbarDropdown = document.getElementById('navbarDropdown');
        showAdminName = document.getElementById('showAdminName');
        window.addEventListener('load', () => {
            navbarDropdown.innerHTML = showAdminName.value;


            //登出
            logoutBtn = document.getElementById('logoutBtn');
            logoutBtn.addEventListener('click', (e) => {
                checkInFoValue = {};
                checkInFoValue.status = '掰掰';
                console.log(e);
                let xhr = new XMLHttpRequest();
                xhr.onload = function() {
                    // checkInfo = JSON.parse(xhr.responseText);
                    if (xhr.responseText == "回到登入頁") {
                        window.location.href = "backLogin.php";
                    }
                }
                xhr.open("Post", "backLogout.php", true);
                xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
                xhr.send("checkInFoValue=" + JSON.stringify(checkInFoValue));

            })
        });
    </script>
</body>

</html> 
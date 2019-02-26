<?php

ob_start();
session_start();
if (isset($_SESSION["adminName"]) === false) {
    header("Location:backLogin.php");
    exit();
}
require_once("backAct_toDB.php");
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>活動管理</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <script src="../js/jquery-3.3.1.min.js"></script>
    <script src="../js/package/bootstrap.min.js"></script>
    <script src="../js/package/popover.js"></script>
    <link rel="stylesheet" href="../css/activity2.css">
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
    tbody th{
        font-weight:normal;
        color:#007bff;
    }
    thead tr:first-child{
        height:82px;
    }
    thead tr th:first-child{
        width:130px;
    }
        #lightbox_holdact_info,#lightbox_holdact{
            opacity:0;
        }
        /* .table thead th {
            vertical-align: bottom;
            border-bottom: 2px solid #dee2e6;
            width: 15%;
            font-size: 20px;
        } */
        td,th{
            text-align:left;
        }
        #maintable{
            width: 100%;
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
        <a class="navbar-brand" href="backStage.php">
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
                <a href="backReport.php" class="list-group-item list-group-item-action">檢舉管理</a>
                <a href="backAct.php" class="list-group-item list-group-item-action" tabindex="-1" aria-disabled="true" style="color:#007bff">活動管理</a>
            </div>
        </div>
    <div class="col-9">
    <table id="maintable" class="table table-hover">
        <thead>
            <tr>
                <td colspan="4">
                    <button id="holdAct02" type="button" class="btn btn-outline-primary">查看已刪除活動</button>
                    <button id="holdAct01" type="button" class="btn btn-outline-primary">新增活動</button>
                </td>
                <td colspan="3">
                    <div class="input-group mb-3">
                        <input id="act_search_txt" type="text" class="form-control" placeholder="活動名稱" aria-label="Recipient's username" aria-describedby="button-addon2">
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
        <tbody id="clearTarget" class="dddd">
            <?php while ($activityAll->fetch(PDO::FETCH_ASSOC)) { ?>
            <tr>
                <th scope="row">
                    <?php echo $actNo; ?>
                    <button id="act_delet_btn<?php echo $actNo; ?>" type="button" class="btn btn-danger btn-sm act_delet_btn ml-4">刪除</button>

                    <input type="hidden" value="<?php echo $actNo; ?>">
                </th>
                <td>
                    <?php echo $mName; ?>
                </td>
                <td>
                    <?php echo $actTitle; ?>
                </td>
                <td>
                    <?php echo $actLoc; ?>
                </td>
                <td>
                    <img src="../images/<?php echo $actImg; ?>" style="width:100px; height:150px;" alt="活動圖片">
                </td>
                <td>
                    <?php echo  substr($act_begin, 0, 10); ?><br>至<br>
                    <?php echo substr($act_end, 0, 10); ?>
                </td>
                
            </tr>
            <?php 
        } ?>
        </tbody>
    </table>

    <div id="lightbox_holdact" class="lightbox_holdact">
        <div id="lightbox_holdact_info" class="lightbox_holdact_info">
            <form action="backAct_toDB.php" method="post" enctype="multipart/form-data">
                <h2>舉辦活動</h2>
                <label class="label1" for="">Step1_上傳圖片<br>
                    <input type="file" id="act_holdActFile" name="act_holdActFile">
                </label>
                <label class="label2" for="">Step2_填寫活動介紹<br>
                    <input type="text" class="input_R" name="actTitle" placeholder="活動名稱">
                    <input id="actIntro" type="text" class="input_R" name="actIntro" placeholder="活動介紹">
                    <input type="text" class="input_R" name="actLoc" placeholder="地點">
                    <input type="date" class="input_R" name="act_begin" placeholder="開始時間">
                    <input type="date" class="input_R" name="act_end" placeholder="結束時間">
                    <input type="hidden" name="newAct" value="1">
                    <input type="hidden" class="btn_R" name="memNo" value="1">
                    <input type="submit" class="btn_R" placeholder="確定">
                </label>
            </form>
            <div class="act_holdActFileBox"><img id="act_holdActFileBox" src="" alt="">--活動圖片--</div>
            <!-- <div class="act_holdActFileBox"><div id="act_holdActFileBox" style="" >--活動圖片--</div></div> -->
            <script type="text/javascript">
                function $id(id) {
                    return document.getElementById(id);
                }

                function initss() {
                    $id("act_holdActFile").onchange = function(e) {
                        var file = e.target.files[0];
                        var reader = new FileReader();
                        reader.onload = function() {
                            // alert(reader.result);
                            // var act_holdActFileBox = $id('act_holdActFileBox');
                            $id("act_holdActFileBox").style.cssText = `padding-bottom: 27%;`;
                            $id("act_holdActFileBox").src = reader.result;
                            // act_holdActFileBox.style.cssText = `
                            // background-image: url('images/activity/${reader.result});
                            // `;
                            // "background-image: url('images/activity/" + reader.result + "');" ";
                        }
                        reader.readAsDataURL(file);
                    }
                }
                window.addEventListener("load", initss, false);
            </script>
        </div>
    </div>

    <script>
        buttom()
    </script>
    <script src="../js/backAct.js"></script>
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
    <!-- <script src="../js/activity2.js"></script> -->
</body>

</html> 
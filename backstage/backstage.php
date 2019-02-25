<?php
ob_start();
session_start();
if (isset($_SESSION["adminName"]) === false) {
    header("Location:backLogin.php");
    exit();
}
try {
    //連線
    require_once("../connectBooks.php");
    $sql = "select * from admin";
    $alladmin = $pdo->prepare($sql);
    $alladmin->execute();

    $alladmin->bindColumn("adminNo", $adminNo);
    $alladmin->bindColumn("adminName", $adminName);
    $alladmin->bindColumn("adminId", $adminId);
    $alladmin->bindColumn("adminPsw", $adminPsw);
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>熊麻吉後台</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <script src="../js/jquery-3.3.1.min.js"></script>
    <script src="../js/package/bootstrap.min.js"></script>
    <script src="../js/package/popover.js"></script>
    <link rel="stylesheet" href="../css/backstage.css">
    <script src="../js/backCommon.js"></script>
    <script src="../js/package/jquery/dist/jquery.min.js"></script>
</head>

<body>
    <!-- Just an image -->
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="backStage.html">
            <img src="../images/logo2.png" width="130" alt="logo">後台
        </a>
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <?php echo $_SESSION["adminName"] ?>
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
                    <a href="backMember.php" class="list-group-item list-group-item-action">會員管理</a>
                    <a href="backItem.php" class="list-group-item list-group-item-action">商品管理</a>
                    <a href="backReport.php" class="list-group-item list-group-item-action">檢舉管理</a>
                    <a href="backAct.php" class="list-group-item list-group-item-action" tabindex="-1" aria-disabled="true">活動管理</a>
                </div>
            </div>
            <div class="col-9">

                <table class="table table-hover">
                    <thead>
                        <tr>
                            <td colspan="5">
                                <button type="button" class="btn btn-outline-info" id="createAdmin">新增管理員</button>
                                <!-- 
                                    <button type="button" class="btn btn-outline-info">更改權限</button> 先鼻要
                                 -->
                            </td>
                        </tr>
                        <tr>
                            <th scope="col">管理員編號</th>
                            <th scope="col">管理員</th>
                            <th scope="col">帳號</th>
                            <th scope="col">密碼</th>
                            <th scope="col">備註</th>
                        </tr>
                    </thead>
                    <tbody>

                        <?php $oo = -1;
                        while ($alladmin->fetch(PDO::FETCH_ASSOC)) {
                            $oo++;
                            ?>
                        <tr value="<?php echo $oo; ?>" class="showAdminInfo">
                            <th scope="row">
                                <input type="text" disabled value="<?php echo $adminNo; ?>">
                            </th>
                            <td>
                                <input type="text" disabled value="<?php echo $adminName; ?>">

                            </td>
                            <td>
                                <input type="text" disabled value="<?php echo $adminId; ?>">

                            </td>
                            <td>
                                <input type="text" disabled value="<?php echo $adminPsw; ?>">

                            </td>
                            <td>
                                <button type="button" value="<?php echo $oo; ?>" class="btn btn-info changeAdmin">編輯</button>
                                <button type="button" value="<?php echo $oo; ?>" class="btn btn-danger dropAdmin">刪除</button>
                            </td>
                        </tr>

                        <?php 
                    } ?>

                    </tbody>
                </table>
            </div>
        </div>
    </div>


    <div id="createAdminWrap" style="display:none;">
        <form>
            <label>
                <span>管理員</span>
                <input type="text" required>
            </label>
            <label>
                <span>帳號</span>
                <input type="text" required>
            </label>
            <label>
                <span>密碼</span>
                <input type="text" required>
            </label>
            <input type="button" value="送出" id="adminSendBtn">
        </form>
    </div>


    <script>
        changeAdmin = document.getElementsByClassName('changeAdmin');
        showAdminInfo = document.getElementsByClassName('showAdminInfo');
        dropAdmin = document.getElementsByClassName('dropAdmin');
        createAdmin = document.getElementById('createAdmin');
        createAdminWrap = document.getElementById('createAdminWrap');
        adminSendBtn = document.getElementById('adminSendBtn');

        changeAdminFunction = (changeAdminData) => {
            console.log(changeAdminData);
            var changexhr = new XMLHttpRequest();
            changexhr.onload = function() {
                console.log(changexhr.responseTex);
                if (changexhr.responseText == "成功儲存") {
                    alert("成功更改!!");
                    location.reload();
                } else if (changexhr.responseText == "成功刪除") {
                    alert("成功刪除!!");
                    location.reload();
                } else if (changexhr.responseText == "成功建立") {
                    alert("成功建立!!");
                    location.reload();
                }
            }
            changexhr.open("Post", "changeAdmin.php", true);
            changexhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            changexhr.send("changeAdminData=" + JSON.stringify(changeAdminData));
        }



        for (let i = 0; i < changeAdmin.length; i++) {
            changeAdmin[i].addEventListener('click', (e) => {
                console.log(e.target.innerHTML);
                switch (e.target.innerHTML) {
                    case "編輯":
                        // console.log(showAdminInfo[e.target.value].getElementsByTagName('input'));
                        for (let i = 1; i < 4; i++) {
                            showAdminInfo[e.target.value].getElementsByTagName('input')[i].removeAttribute("disabled");
                        }
                        e.target.innerHTML = '儲存';
                        break;
                    case "儲存":
                        for (let i = 1; i < 4; i++) {
                            showAdminInfo[e.target.value].getElementsByTagName('input')[i].setAttribute("disabled", "");
                        }
                        changeAdminFunction({
                            adminNo: showAdminInfo[e.target.value].getElementsByTagName('input')[0].value,
                            adminName: showAdminInfo[e.target.value].getElementsByTagName('input')[1].value,
                            adminId: showAdminInfo[e.target.value].getElementsByTagName('input')[2].value,
                            adminPsw: showAdminInfo[e.target.value].getElementsByTagName('input')[3].value,
                            statue: e.target.innerHTML
                        })
                        e.target.innerHTML = '編輯';
                        // console.log(showAdminInfo[e.target.value].getElementsByTagName('input')[0].value);

                        break;
                }
            })
        }
        for (let i = 0; i < changeAdmin.length; i++) {
            dropAdmin[i].addEventListener('click', (e) => {


                changeAdminFunction({
                    adminNo: showAdminInfo[e.target.value].getElementsByTagName('input')[0].value,
                    adminName: showAdminInfo[e.target.value].getElementsByTagName('input')[1].value,
                    adminId: showAdminInfo[e.target.value].getElementsByTagName('input')[2].value,
                    adminPsw: showAdminInfo[e.target.value].getElementsByTagName('input')[3].value,
                    statue: e.target.innerHTML
                })
            })
        }

        createAdmin.addEventListener('click', (e) => {
            createAdminWrap.style.display = "block";
        })
        adminSendBtn.addEventListener('click', (e) => {
            changeAdminFunction({
                adminName: createAdminWrap.getElementsByTagName('input')[0].value,
                adminId: createAdminWrap.getElementsByTagName('input')[1].value,
                adminPsw: createAdminWrap.getElementsByTagName('input')[2].value,
                statue: "建立"
            })
        })

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
    </script>
</body>

</html> 
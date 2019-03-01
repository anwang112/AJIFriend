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
    $sql = "select * from member";
    $allmember = $pdo->prepare($sql);
    $allmember->execute();

    $allmember->bindColumn("memNo", $memNo);
    $allmember->bindColumn("memId", $memId);
    $allmember->bindColumn("mName", $mName);
    $allmember->bindColumn("mMJ", $mMJ);
    $allmember->bindColumn("mCoin", $mCoin);
    $allmember->bindColumn("power", $power);
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
    <title>manager</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <script src="../js/jquery-3.3.1.min.js"></script>
    <script src="../js/package/bootstrap.min.js"></script>
    <script src="../js/package/popover.js"></script>
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
        width:16.5%;
    }
    .row{
        margin-left:0;
    }
    a{
        font-weight:normal;
    }
    thead tr:first-child{
        height:82px;
    }
    </style>
</head>

<body>


    <!-- 隱藏登入者ㄉinput -->
    <input type="hidden" id="showAdminName" value="<?php echo $_SESSION["adminName"] ?> ">


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
                <a href="backMember.php" class="list-group-item list-group-item-action" style="color:#007bff">會員管理</a>
                <a href="backItem.php" class="list-group-item list-group-item-action">商品管理</a>
                <a href="backReport.php" class="list-group-item list-group-item-action">檢舉管理</a>
                <a href="backAct.php" class="list-group-item list-group-item-action" tabindex="-1" aria-disabled="true">活動管理</a>
            </div>
        </div>
    <div class="col-9">
    <table class="table table-hover">
        <thead>
            <tr>
                <td colspan="4"></td>
                <td colspan="3">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="會員帳號" aria-label="Recipient's username" aria-describedby="button-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">搜尋
                            </button>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="col">會員編號</th>
                <th scope="col">會員帳號</th>
                <th scope="col">會員暱稱</th>
                <th scope="col">MJ值</th>
                <th scope="col">金幣數</th>
                <th scope="col">權限</th>
            </tr>
        </thead>
        <tbody id="showMember">
            <?php while ($allmember->fetch(PDO::FETCH_ASSOC)) { ?>
            <tr>
                <th scope="row">
                    <a href="">
                        <?php echo $memNo; ?></a>
                </th>
                <td>
                    <?php echo $memId; ?>
                </td>
                <td>
                    <?php echo $mName; ?>
                </td>
                <td>
                    <?php echo $mMJ; ?>
                </td>
                <td>
                    <?php echo $mCoin; ?>
                </td>
                <td>

                    <?php if ($power == 1) {
                        echo '<button type="button"' . 'value="' . $memNo . '"class="btn btn-primary changePower">正常</button>';
                    } else {
                        echo '<button type="button"' . 'value="' . $memNo . '"class="btn btn-danger changePower">停權</button>';
                    }
                    ?>

                </td>
            </tr>
            <?php 
        }
        ?>
        </tbody>
    </table>


    <script>
        buttom()
    </script>
    <script>
        changePower = document.getElementsByClassName('changePower');
        memberInput = document.getElementById('memberInput');
        showMember = document.getElementById('showMember');

        memberGoGo = (oo, xx = 'xx') => {
            memberData = {
                memNo: oo, //取得是誰
                power: xx, //權限值
            }
            console.log(memberData);
            let xhr = new XMLHttpRequest();
            xhr.onload = function() {
                // console.log(xhr.responseText);

                switch (xhr.responseText) {
                    case "更改成功":
                        alert("成功更改!!");
                        location.reload();
                        break;
                    case "找不到喔":
                        alert("尋不到喔");
                        break;
                    default:
                        serchResule = JSON.parse(xhr.responseText);
                        console.log(serchResule);
                        if (serchResule.power == '1') {
                            showMember.innerHTML = `
                        <tr>
                            <th scope="row">
                                <a href="">
                                    ${serchResule.memNo}</a>
                            </th>
                            <td>
                                    ${serchResule.memId}
                            </td>
                            <td>
                                    ${serchResule.mName}
                            </td>
                            <td>
                                    ${serchResule.mMJ}
                            </td>
                            <td>
                                     ${serchResule.mCoin}
                            </td>
                            <td>
                                <button type="button" value="1" class="btn btn-primary changePower">正常</button>
                            </td>
                        </tr>
                        `;
                            for (let i = 0; i < changePower.length; i++) {
                                changePower[i].addEventListener('click', (e) => {
                                    if (e.target.innerHTML == "正常") {
                                        memberGoGo(e.target.value, '0');
                                    } else if (e.target.innerHTML == "停權") {
                                        memberGoGo(e.target.value, '1');
                                    }

                                    // console.log(e.target.innerHTML);
                                });
                            }
                        } else {
                            showMember.innerHTML = `
                        <tr>
                            <th scope="row">
                                <a href="">
                                    ${serchResule.memNo}</a>
                            </th>
                            <td>
                                    ${serchResule.memId}
                            </td>
                            <td>
                                    ${serchResule.mName}
                            </td>
                            <td>
                                    ${serchResule.mMJ}
                            </td>
                            <td>
                                     ${serchResule.mCoin}
                            </td>
                            <td>
                            <button type="button" value="1" class="btn btn-danger changePower">停權</button>
                            </td>
                        </tr>
                        `;
                            for (let i = 0; i < changePower.length; i++) {
                                changePower[i].addEventListener('click', (e) => {
                                    if (e.target.innerHTML == "正常") {
                                        memberGoGo(e.target.value, '0');
                                    } else if (e.target.innerHTML == "停權") {
                                        memberGoGo(e.target.value, '1');
                                    }

                                    // console.log(e.target.innerHTML);
                                });
                            }
                        }
                        break;
                }

            }
            xhr.open("Post", "backmemberUpdate.php", true);
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.send("memberData=" + JSON.stringify(memberData));

        }

        for (let i = 0; i < changePower.length; i++) {
            changePower[i].addEventListener('click', (e) => {
                if (e.target.innerHTML == "正常") {
                    memberGoGo(e.target.value, '0');
                } else if (e.target.innerHTML == "停權") {
                    memberGoGo(e.target.value, '1');
                }

                // console.log(e.target.innerHTML);
            });
        }
        buttonAddon2 = document.getElementById('buttonAddon2');
        buttonAddon2.addEventListener('click', () => {
            memberGoGo(memberInput.value);
        });











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
<?php
session_start();
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
                <td colspan="4"></td>
                <td colspan="3">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" id="memberInput" placeholder="會員編號" aria-label="Recipient's username" aria-describedby="button-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="buttonAddon2">搜尋
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
                <th scope="col">備註</th>
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
                    <?php echo $memNo; ?>
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


        memberGoGo = (oo, xx = 'xx') => {
            memberData = {
                memNo: oo, //取得是誰
                power: xx, //權限值
            }
            console.log(memberData);
            let xhr = new XMLHttpRequest();
            xhr.onload = function() {
                console.log(xhr.responseText);
            }
            xhr.open("Post", "../backmemberUpdate.php", true);
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.send("memberData=" + JSON.stringify(memberData));

        }

        for (let i = 0; i < changePower.length; i++) {
            changePower[i].addEventListener('click', (e) => {
                if(e.target.innerHTML == "正常"){
                    memberGoGo(e.target.value, '0');
                }else if(e.target.innerHTML == "停權"){
                    memberGoGo(e.target.value, '1');
                }
                
                // console.log(e.target.innerHTML);
            });
        }
        buttonAddon2 = document.getElementById('buttonAddon2');
        buttonAddon2.addEventListener('click', () => {
            memberGoGo(memberInput.value);
        });
    </script>
</body>

</html> 
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="../images/favicon.ico" type="image/x-icon"/>
    <title>熊麻吉後台</title>
    <!-- <link rel="stylesheet" href="../css/backstage.css"> -->
    <!-- <link rel="stylesheet" href="../css/bootstrap.min.css">
    <script src="../js/jquery-3.3.1.min.js"></script>
    <script src="../js/package/bootstrap.min.js"></script>
    <script src="../js/package/popover.js"></script>
    
    <script src="../js/backCommon.js"></script>
    <script src="../js/package/jquery/dist/jquery.min.js"></script> -->

    <style>
          @font-face {
                font-family: 'AdobeFanHeitiStd-Bold';
                src: url(../font/AdobeFanHeitiStd-Bold.otf) format("truetype");

        }
        html body * {
    font-family: 'AdobeFanHeitiStd-Bold', serif;
    letter-spacing: 0.8px;
}
        body{
            width: 100%;
            height: 100vh;
            background-image: url("../images/indexImages/leadingBg.svg");
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
            overflow: hidden;
        }
        .wrap{
            min-width: 620px;
            width: 70%;
            height: 80vh;
            margin: auto;
            /* background-color: #a2988f; */
            border-radius: 5px;
            position: absolute;
            justify-content: center;
            padding: 30px;
            position: absolute;
            top: 0%;
            bottom:0%;
            z-index: 21;
            transition: .5s;
            left: 0;
            right: 0;
            background-image: url("../images/indexImages/leadingWrap.svg");
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
        h1{
            text-align: center;
    margin-top: 150px;
    margin-left: 52px;
        }
        input{
            height: 38px;
    padding: 0 10px;
    width:70%;
    border: none;
    border-radius: 12px;
    font-size: 15px;

        }
        label{
            display:flex;
            justify-content: center;
    align-items: center;
    padding: 20px;
        }
        span{
            margin-right: 20px;
        }
        #sendBtn{
            width: 100%;
            background-color: #f05c79;
    cursor: pointer;
        }
        form{
            /* images/indexImages/leadingInfo.svg */
            position: absolute;
    left: 37%;
    width: 30%;
    min-width: 300px;
        }
        .xxxx{
            justify-content: flex-start;
            margin:auto;
            width:80%;
        }
    </style>

</head>

<body>
    <div class="wrap">
        <h1>後端管理系統</h1>
        <form>
            <label>
                <span>帳號</span>
                <input type="text" required="required" id="adminId">
            </label>
            <label>
                <span>密碼</span>
                <input type="password" required="required" id="adminPsw">
            </label>
            <label class="xxxx">
                <input type="button" id="sendBtn" value="送出">
            </label>
        </form>
    </div>

    <script>
        adminId = document.getElementById('adminId');
        adminPsw = document.getElementById('adminPsw');

        sendBtn = document.getElementById('sendBtn');
        sendBtn.addEventListener('click', () => {


            checkInFoValue = {
                adminId: adminId.value,
                adminPsw: adminPsw.value
            }
            if ((checkInFoValue.adminId == "") || (checkInFoValue.adminPsw == "")) {
                alert("請輸入");
            } else {
                let xhr = new XMLHttpRequest();
                xhr.onload = function() {
                    // checkInfo = JSON.parse(xhr.responseText);
                    if (xhr.responseText == "error") {
                        alert("登入失敗");
                    } else if (xhr.responseText == "成功登入") {
                        window.location.href = "backstage.php";
                    }
                }
                xhr.open("Post", "backcheckLogin.php", true);
                xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
                xhr.send("checkInFoValue=" + JSON.stringify(checkInFoValue));
            }

        });
    </script>
</body>

</html> 
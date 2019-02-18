<?php
    session_start();



?>

<script>
    function userData(){
        var str=`
    `;
    
        document.write(str);

    }

</script>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <input type="hidden" id="userNo" value="<?php echo $_SESSION["memNo"]?>">
    <!-- <input type="hidden" id="userId" value="">
    <input type="hidden" id="userName" value="">
    <input type="hidden" id="userMJ" value="">
    <input type="hidden" id="userCoin" value="">
    <input type="hidden" id="userAnimal" value="">
    <input type="hidden" id="userEye" value="">
    <input type="hidden" id="userColor" value="">
    <input type="hidden" id="userStar" value="">
    <input type="hidden" id="userHobby" value="">
    <input type="hidden" id="userSelf" value="">
    <input type="hidden" id="userHat" value="">
    <input type="hidden" id="userClothes" value="">
    <input type="hidden" id="userPlay" value="">
    <input type="hidden" id="userLove" value=""> -->
</body>
</html>
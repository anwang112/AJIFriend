function header() {

    var top = `<nav class="navbar navbar-light bg-light">
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
    <div class="col-2">
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
    <div class="col-10">`;

    document.write(top);
}

function buttom() {
    var down = `</div></div></div>`;
    document.write(down);
}

var title = document.getElementsByTagName(title).innerHTML;

if(title == 'manager'){
    alert()
;    $('.list-group .index').addClass('achive');
}
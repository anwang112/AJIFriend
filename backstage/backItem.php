<?php
    require_once("backItemToDB.php");
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
    <link rel="stylesheet" href="../css/activity2.css">
    <script src="../js/backCommon.js"></script>
    <style>
        #lightbox_holdact_info,#lightbox_holdact{
            opacity:0;
        }
        .label1{
            position: relative;
            left: 15%;
        }
        .label2{
            width:50%;
            display: flex;
            flex-direction: column;
            position: relative;
            left: 15%;
        }
        #act_holdActFile{
            width:200px;
        }    
        .lightbox_holdact .lightbox_holdact_info{
            display: flex;
            flex-direction: column;
        }
        .lightbox_holdact .lightbox_holdact_info h2 {
            width: 100%;
            text-align:center;
        }
        input{
            width:120px;
            text-align:center;
        }
        td,th{
            text-align:center;
            vertical-align: middle;
            width:120px;
            
        }
        .lightbox_holdact .lightbox_holdact_info form {
            width: 90%;
            height: 0%;
            margin: 10px 5%;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            text-align: center;
        }
        label{
            position: relative;
            left: 8px;
            padding: 2px 5px;
        }
        .lightbox_holdact .lightbox_holdact_info .act_holdActFileBox {
            width: 42%;
            height: 0;
            padding-bottom: 27%;
            border-radius: 15px;
            line-height: 200px;
            border: 1px dashed #fff;
            background-color: #ccc;
            position: absolute;
            top: 100px;
            right: 30px;
            background-position: center center;
            background-size: contain;
            background-repeat: no-repeat;
        }
        .lightbox_holdact .lightbox_holdact_info {
            width: 62%;
            max-width: 1200px;
            height: 70%;
            padding: 20px 20px;
            color: #f05c79;
            background-color: rgba(255, 255, 255, 0.9);
            /* border: 1px solid #f05c79; */
            border-radius: 15px;
            background-color: #ccc;
            background-image: url(../images/activity/spanBg01.svg);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center center;
            margin: auto;
            position: fixed;
            left: 0;
            top: 50px;
            bottom: 0;
            right: 0;
            position: relative;
            bottom: 21%;}
        .lightbox_holdact .lightbox_holdact_info .act_holdActFileBox {
            width: 42%;
            height: 0;
            padding-bottom: 27%;
            border-radius: 15px;
            line-height: 200px;
            border: 1px dashed transparent;
            background-color: transparent;
            position: absolute;
            top: 100px;
            right: 30px;
            background-position: center center;
            background-size: contain;
            background-repeat: no-repeat;
        }
        .input_R{
            width: 160px;
            padding: 4px 5px;
            text-align: center;
            margin-left: 8px;
        }
        /* #myTable button{
            position: relative;
            top: 50px;
        } */
        #myTable input{
            position: relative;
            top: 20px;
        }
        #myTable input[type="submit"]{
            position: relative;
            top: 50px;
        }
    </style>
</head>
<body>
<!-- Just an image -->
<script>
header();
</script>
    <table id="myTable" class="table table-hover">
        <thead>
            <tr>
            <td colspan="6"></td>
                <td colspan="4">
                    <div class="dropdown">
                        <button id="holdAct01" class="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            新增商品
                        </button>
                    </div>
                </td>
                <!-- <td colspan="3">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="商品編號" aria-label="Recipient's username"
                            aria-describedby="button-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">搜尋
                            </button>
                        </div>
                    </div>

                </td> -->
            </tr>
            <tr>
                <th scope="col">NO.</th>
                <th scope="col">商品圖片</th>
                <th scope="col">商品名稱</th>
                <th scope="col">售價</th>
                <th scope="col">MJ值獎勵</th>
                <th scope="col">商品狀態</th>
                <th scope="col">修改</th>
            </tr>
        </thead>
        <tbody>
            <?php $i = 0?>
            <?php while($result->fetch(PDO::FETCH_ASSOC)){?>
            <tr>
            <form action="backItemToDB.php" method="post" enctype="multipart/form-data">
                <th scope="row">
                    <a href="#"><?php echo $proNo ;?></a>
                    <input type="hidden" name="proNo" value="<?php echo $proNo ;?>">
                </th>
                <td>
                    <img  id="act_holdActFileBox" src="../images/<?php echo $img;?>" style="max-height:140px;" alt="活動圖片">
                </td> 
                <td><?php echo $proName ;?><br><input type="text" name="proName" value="<?php echo $proName ;?>"></td>
                <td><?php echo $price ;?><br><input type="text" name="price" value="<?php echo $price ;?>"></td>
                <td><?php echo $proMJ ;?><br><input type="text" name="proMJ" value="<?php echo $proMJ ;?>"></td>
                <td> 
                    <?php if($seen == 1){
                        echo "上架中"."<br>"."<input type='number' name='seen' value='1' min='0' max='1' value='1'>";
                    }else{
                        echo "下架中"."<br>"."<input type='number' name='seen' value='0' min='0' max='1'>";
                    }?>
                </td>
                <td>
                    <input type="submit" value="送出" ">
                </td>
            </form>
            </tr><?php $i++ ;?>
            <?php } ?>
        </tbody>

        <div id="lightbox_holdact" class="lightbox_holdact">
            <div id="lightbox_holdact_info" class="lightbox_holdact_info">
                <form action="backItemToDB.php" method="post" enctype="multipart/form-data">
                <h2>增加商品</h2>
                    <label class="label1" for="">Step1_上傳商品圖片<br>
                    <input type="file" id="act_holdActFile" name="act_holdActFile">
                    </label>
                    <label class="label2" for="">Step2_填寫商品介紹<br>
                    <label for="">商品分類
                        <input type="number" class="input_R" name="category_ins" placeholder="請輸入1或2" min="1" max="2">
                    </label>
                    <label for="">商品名稱<input type="text" class="input_R" name="proName_ins" placeholder=""></label>
                    <label for="">商品價格<input type="number" class="input_R" name="price_ins" placeholder=""  min="0"></label> 
                    <label for="">魅力值<input type="number" class="input_R" name="proMJ_ins" placeholder="請輸入1到1000"  min="0" max="1000"></label>
                    <label for="">商品上架<input type="number" class="input_R" name="seen_ins" placeholder="請輸入1或0" min="0" max="1"></label>
                    <input type="hidden" class="input_R" name="newPro" value="1">
                    <input type="submit" class="input_R" name="" placeholder="">
                    </label>
                </form>
                <div class="act_holdActFileBox"><img id="act_holdActFileBox" src="" alt="">--活動圖片--</div>
                <!-- <div class="act_holdActFileBox"><div id="act_holdActFileBox" style="" >--活動圖片--</div></div> -->
                <script type="text/javascript">
                    function $id(id){
                        return document.getElementById(id);
                    }	
                    function initss(){
                        $id("act_holdActFile").onchange = function(e){
                            var file = e.target.files[0];
                            var reader = new FileReader();
                            reader.onload = function(){
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

                    var holdAct01 = $id('holdAct01');
                        holdAct01.addEventListener('click',function(){
                            lightbox_holdact.style.cssText="display:flex;z-index:10;opacity:1";
                            lightbox_holdact_info.style.cssText="display:block;z-index:10;opacity:1";

                        lightbox_holdact_info.addEventListener('click',function(e){
                            e.stopPropagation();
                        },false);
                        lightbox_holdact.addEventListener('click',function(){
                        lightbox_holdact.style.cssText="display:none;z-index:-1;opacity:0";
                        lightbox_holdact_info.style.cssText="display:none;z-index:-1;opacity:0";
                        },false);
                    },false);
                </script>
            </div>
        </div>
    </table>
<script>
    buttom()    
</script>
</body>
</html>
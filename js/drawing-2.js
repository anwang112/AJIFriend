function $id(id){
    return document.getElementById(id);
}
function nextStep(){
    // 註冊三個步驟
    var step1=document.getElementById("step1");
    var step2=document.getElementById("step2");
    var step3=document.getElementById("step3");
    var upBtn=document.getElementById("upBtn");
    var chooseBtn=document.getElementById("chooseBtn");
    var share=document.getElementById("sharePhoto");
    var controlBar=document.getElementsByClassName("controlBar")[0];
    var friend_Light_Box=document.getElementById("friend_LightBox");
// 判斷式 
// 1到2
    if (next.innerText=="選擇朋友"){
        // console.log(2);
        step1.style.filter="grayscale(100%)";
        step2.style.filter="grayscale(0%)";
        step3.style.filter="grayscale(100%)";
        upBtn.style.display="none";
        chooseBtn.style.display="block";
        back.style.display="block";
        // canvas.style.display="none";
        controlBar.style.display="none";
        power02=true;
        console.log(power02);
        next.innerText="編輯塗鴉";
        back.innerText="選擇背景";

        ooxxGetRole($id("showMe"), {
            animal: storage.getItem("animal"),
            color: storage.getItem("mColor"),
            eyes: storage.getItem("eye"),
            hat: storage.getItem("wearHat"),
            clothes: storage.getItem("wearClothes"),
        });


      

    }
  
// 2到3
    else if(next.innerText=="編輯塗鴉"){
        // console.log(3);
        step1.style.filter="grayscale(100%)";
        step2.style.filter="grayscale(100%)";
        step3.style.filter="grayscale(0%)";
        back.style.display="block";
        upBtn.style.display="none";
        chooseBtn.style.display="none";
        share.style.display="block";
        canvas.style.display="block";
        controlBar.style.display="flex";
        next.style.display="none";
        power02=false;
        power03=true;
        back.innerText="選擇朋友";
        friend_Light_Box.style.display="none";
    }
    
}
function backStep(){
    var step1=document.getElementById("step1");
    var step2=document.getElementById("step2");
    var step3=document.getElementById("step3");
    var upBtn=document.getElementById("upBtn");
    var chooseBtn=document.getElementById("chooseBtn");
    var share=document.getElementById("sharePhoto");
    var controlBar=document.getElementsByClassName("controlBar")[0];

// 2變1
    if(back.innerText=="選擇背景"){
        console.log("back1");
        step1.style.filter="grayscale(0%)";
        step2.style.filter="grayscale(100%)";
        step3.style.filter="grayscale(100%)";
        upBtn.style.display="block";
        chooseBtn.style.display="none";
        back.style.display="none";
        next.innerText="選擇朋友";
        

    }

// 3變2
    else if(back.innerText=="選擇朋友"){
        console.log("back2");
        // step3.style.filter="grayscale(0%)";
        step1.style.filter="grayscale( 100%)";
        step2.style.filter="grayscale(0%)";
        step3.style.filter="grayscale(100%)";
        back.style.display="block";
        next.style.display="block";
        upBtn.style.display="none";
        chooseBtn.style.display="block";
        share.style.display="none";
        canvas.style.display="none";
        controlBar.style.display="none";
        next.innerText="編輯塗鴉";
        back.innerText="選擇背景";
        friend_Light_Box.style.display="block";

    }
}

//將顏色寫到ctx.strokeStyle
function changeColor(e){
    var color = e.target.id;
    var color_Pack = document.getElementsByClassName('colorPack')[0];
    var colorCode = window.getComputedStyle(e.target).getPropertyValue("background-color");
    ctx.strokeStyle = colorCode ;
};
function drawImg(){
    var img = document.getElementsByClassName("bodySvg")[0];
    var img2 = document.getElementsByClassName("eyesSvg")[0];
    var img3 =document.getElementsByClassName("roleHat")[0];
    var imgPrev = document.getElementById("imgPreview");
    ctx.drawImage(imgPrev,0,0,350,350);  
    ctx.drawImage(img,100,105,152,213);  
    ctx.drawImage(img2,100,103,152,212);  
    ctx.drawImage(img3,100,103,152,212);  

}
function saveImage() {
    drawImg();

    var dataURL = canvas.toDataURL("image/png");
    document.getElementById('hidden_data').value = dataURL;

    var formData = new FormData(document.forms["form1"]);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'savePhoto.php', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if( xhr.status == 200 ){
                alert('Succesfully uploaded');  
            }else{
                alert(xhr.status);
            }
        }
    };
        
    xhr.send(formData);
}
// 分享至照片牆
function shareToPhotoWall(){
    if(window.confirm('確定要分享嗎？') == true){
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
          if( xhr.status == 200){
            var newDiv = document.createElement('div');
            newDiv.classList = 'card';
            newDiv.id = 'photo1';
            newDiv.innerHTML = xhr.responseText;
            var area = document.getElementsByClassName('postArea')[0]
            area.insertBefore(newDiv, area.children[1]);
            alert('已分享至照片牆！');
          }else{
            alert( xhr.status );
            }
        }
    
        xhr.open("POST", "ajaxSharePhoto.php", true);
        var myForm = new FormData(document.getElementById('addPic'));
        xhr.send(myForm);
    }
}

function init(){
    $id("upFile").onchange = function(e){
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function(){
            $id("imgPreview").src = reader.result;
        }
        reader.readAsDataURL(file);
    }
    
    var next=document.getElementById("next");
    var back=document.getElementById("back");
    next.addEventListener("click",nextStep,false);
    back.addEventListener("click",backStep,false);
    power01=true;
    power02=false;
    power03=false;


//     var canvas = document.getElementById('canvas');
//     ctx = canvas.getContext('2d');
    
//     // 宣告 改變顏色
//     colors = document.getElementsByClassName('color');
//     for(var i = 0; i < colors.length; i++){
//     colors[i].addEventListener('click', changeColor,false)};
        

//     var drawing = false;
//     var mousePos = { x:0, y:0 };
//     var lastPos = mousePos;
//     canvas.addEventListener("mousedown", function (e) {
//         drawing = true;
//         lastPos = getMousePos(canvas, e);
//     }, false);
//     canvas.addEventListener("mouseup", function (e) {
//         drawing = false;
//     }, false);
//     canvas.addEventListener("mousemove", function (e) {
//         mousePos = getMousePos(canvas, e);
//     }, false);




//     // Get the position of the mouse relative to the canvas
//     function getMousePos(canvasDom, mouseEvent) {
//         var rect = canvasDom.getBoundingClientRect();
//         return {
//             x: mouseEvent.clientX - rect.left,
//             y: mouseEvent.clientY - rect.top
//         };
//     }

//     window.requestAnimFrame = (function (callback) {
//         return window.requestAnimationFrame || 
//            window.webkitRequestAnimationFrame ||
//            window.mozRequestAnimationFrame ||
//            window.oRequestAnimationFrame ||
//            window.msRequestAnimaitonFrame ||
//            function (callback) {
//         window.setTimeout(callback, 1000/60);
//            };
// })();


// function renderCanvas() {

//     if (drawing) {
//       ctx.moveTo(lastPos.x, lastPos.y);
//       ctx.lineTo(mousePos.x, mousePos.y);
//       ctx.lineWidth = 10;
//       ctx.stroke();
//       lastPos = mousePos;
//     }
//   }
  
//   // Allow for animation
// (function drawLoop () {
//     requestAnimFrame(drawLoop);
//     renderCanvas();
//   })();
//   canvas.addEventListener("touchstart", function (e) {
//     mousePos = getTouchPos(canvas, e);
//     var touch = e.touches[0];
//     var mouseEvent = new MouseEvent("mousedown", {
//     clientX: touch.clientX,
//     clientY: touch.clientY
//     });
//     canvas.dispatchEvent(mouseEvent);
//     }, false);
//     canvas.addEventListener("touchend", function (e) {
//     var mouseEvent = new MouseEvent("mouseup", {});
//     canvas.dispatchEvent(mouseEvent);
//     }, false);
//     canvas.addEventListener("touchmove", function (e) {
//     var touch = e.touches[0];
//     var mouseEvent = new MouseEvent("mousemove", {
//     clientX: touch.clientX,
//     clientY: touch.clientY
//     });
//     canvas.dispatchEvent(mouseEvent);
//     }, false);

// // Get the position of a touch relative to the canvas
// function getTouchPos(canvasDom, touchEvent) {
// var rect = canvasDom.getBoundingClientRect();
// return {
// x: touchEvent.touches[0].clientX - rect.left,
// y: touchEvent.touches[0].clientY - rect.top
// };
// }
// // 一鍵清除
//     var clear = document.getElementById("reset");
//     clear.addEventListener('click', function(){
//         canvas.width = canvas.width;
//     },false);
//     document.body.addEventListener("touchstart", function (e) {
//     if (e.target == canvas) {
//       e.preventDefault();
//     }
//     }, false);
//     document.body.addEventListener("touchend", function (e) {
//     if (e.target == canvas) {
//       e.preventDefault();
//     }
//     }, false);
//     document.body.addEventListener("touchmove", function (e) {
//     if (e.target == canvas) {
//       e.preventDefault();
//     }
//     }, false);
  

  




    var share=document.getElementById("picInput");
        share.addEventListener("input",shareToPhotoWall,false);

    // share.onclick = showShareLB;

    // var sure_Close=document.getElementById("sureClose");
    // sure_Close.onclick =sureClose;
    


}	
window.addEventListener("load", init, false);
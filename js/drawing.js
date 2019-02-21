function nextStep(){
    // 註冊三個步驟
    var step1=document.getElementById("step1");
    var step2=document.getElementById("step2");
    var step3=document.getElementById("step3");
    var upBtn=document.getElementById("upBtn");
    var share=document.getElementById("sharePhoto");
    var chooseBtn=document.getElementById("chooseBtn");
    var controlBar=document.getElementsByClassName("controlBar")[0];
// 判斷式 
// 1到2
    if (next.innerText=="選擇朋友"){
        console.log(2);
        step1.style.filter="grayscale(100%)";
        step2.style.filter="grayscale(0%)";
        step3.style.filter="grayscale(100%)";
        upBtn.style.display="none";
        chooseBtn.style.display="block";
        back.style.display="block";
        canvas.style.display="none";
        controlBar.style.display="none";
        power02=true;
        console.log(power02);
        next.innerText="編輯塗鴉";
        back.innerText="選擇背景";
    }
  
// 2到3
    else if(next.innerText=="編輯塗鴉"){
        console.log(3);
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
    }
}

//將顏色寫到ctx.strokeStyle
function changeColor(e){
    var color = e.target.id;
    var color_Pack = document.getElementsByClassName('colorPack')[0];
    var colorCode = window.getComputedStyle(e.target).getPropertyValue("background-color");
    ctx.strokeStyle = colorCode ;
};
//getBoundingClientRect 取得物件完整座標資訊，包含寬高等
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    //這個function將會傳回滑鼠在 canvas上的座標
        return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
        };   
  
};
//透過getMousePos function 去取得滑鼠座標
//mousePos 是一個物件，包含x和y的值
function mouseMove(evt) {
    var mousePos = getMousePos(canvas, evt);
    //利用取回的值畫線
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.lineWidth = 10;
    ctx.stroke();
};


//利用toDataURL() 把canvas轉成data:image
$('#save').on('click', function(){
    var _url = canvas.toDataURL();
    //再把href載入上面的Data:image
    this.href = _url;
});


function $id(id){
	return document.getElementById(id);
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
    
    var canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    // 宣告 改變顏色
    colors = document.getElementsByClassName('color');
    for(var i = 0; i < colors.length; i++){
    colors[i].addEventListener('click', changeColor,false)};

    var x = 0;
    var y = 0;
    //從按下去就會執行第一次的座標取得
    canvas.addEventListener('mousedown', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        //建立path物件
        evt.preventDefault();
        ctx.beginPath(); 
        //每次的點用moveTo去區別開，如果用lineTo會連在一起          
        ctx.moveTo(mousePos.x, mousePos.y);  
        //mousemove的偵聽也在按下去的同時開啟
        canvas.addEventListener('mousemove', mouseMove, false);

      });
    //如果滑鼠放開，將會停止mouseup的偵聽
    canvas.addEventListener('mouseup', function() {
        canvas.removeEventListener('mousemove', mouseMove, false);
        }, false);
    
    // 一鍵清除
    var clear = document.getElementById("reset");
    clear.addEventListener('click', function(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
    },false);
    console.log("reset");

    canvas.addEventListener('touchstart',function(a){
        var x = a.touches[0].clientX;
        var y =a.touches[0].clientY;
        using = true;
        lastPoint = {x: x, y: y};
        },false);
    
    canvas.ontouchmove = function(a){
        var x = a.touches[0].clientX;
        var y = a.touches[0].clientY;
        using = true;
        if (!using) {return}
        var newPoint = {"x": x, "y": y};
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        lastPoint = newPoint;
        
    }
    canvas.addEventListener('touchend',function(a){
        using = false;
        },false);

    
    // canvas.addEventListener('mousemove',usePen);
    // console.log(0);


}	
window.addEventListener("load", init, false);
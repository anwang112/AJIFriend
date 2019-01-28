// function doFirst(){
// 	var canvas = document.getElementById('canvas');
// 	context = canvas.getContext('2d');
// 	// alert(0);
// 	canvas.addEventListener('mousemove',usePen);
// }
// function usePen(e){
// 	context.fillStyle='coral';
	
// 	context.beginPath();
// 	context.arc(e.pageX,e.pageY,5,0,2*Math.PI,true);
// 	context.fill();

// }
// window.addEventListener('load',doFirst);

function nextStep(){
    // 註冊三個步驟
    var step1=document.getElementById("step1");
    var step2=document.getElementById("step2");
    var step3=document.getElementById("step3");
    var upBtn=document.getElementById("upBtn");
    var chooseBtn=document.getElementById("chooseBtn");

    
    // 判斷式 
    if (step2.style.filter="grayscale(100%)") {
        step1.style.filter="grayscale(100%)";
        step2.style.filter="grayscale(0%)";
        upBtn.style.display="none";
        chooseBtn.style.display="block";
        

    }else if(step2.style.filter="grayscale(0%)") {
        step2.style.filter="grayscale(100%)";
        step3.style.filter="grayscale(0%)";
    }

}


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
        // $id("next").onclick=function(){
        // }
        var next=document.getElementById("next");
        next.addEventListener("click",nextStep,false);
    }	
window.addEventListener("load", init, false);
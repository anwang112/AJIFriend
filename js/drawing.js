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
    var back=document.getElementById("back");

    //console.log(step2.style.filter);
    // 判斷式 
// 1到2
    if (power02==false  && power03==false) {
        console.log(0);
        step1.style.filter="grayscale(100%)";
        step2.style.filter="grayscale(0%)";
        step3.style.filter="grayscale(100%)";
        upBtn.style.display="none";
        chooseBtn.style.display="block";
        back.style.display="block";
        power02=true;
        console.log(power02);
    }
    // else if(step2.style.filter = " grayscale(0%)") {
    //     console.log('test');
    //     step2.style.filter="grayscale(100%)";
    //     step3.style.filter="grayscale(0%)";
    // }
// 2到3
    else if(power02==true && power03==false){
        console.log(1);
        step1.style.filter="grayscale(100%)";
        step2.style.filter="grayscale(100%)";
        step3.style.filter="grayscale(0%)";
        back.style.display="block";
        power02=false;
        power03=true;
    }
    
}
function backStep(){
    var step1=document.getElementById("step1");
    var step2=document.getElementById("step2");
    var step3=document.getElementById("step3");
    var upBtn=document.getElementById("upBtn");
    var chooseBtn=document.getElementById("chooseBtn");
    var back=document.getElementById("back");
// 2變1
    if(power02==true  && power03==false){
        console.log(2);
        step1.style.filter="grayscale(0%)";
        step2.style.filter="grayscale(100%)";
        step3.style.filter="grayscale(100%)";
        upBtn.style.display="block";
        chooseBtn.style.display="none";
        back.style.display="none";
    }
// 3變2
    else if(power02==false && power03==true ){
        console.log(3);
        // step3.style.filter="grayscale(0%)";
        step1.style.filter="grayscale( 100%)";
        step2.style.filter="grayscale(0%)";
        step3.style.filter="grayscale(100%)";
        back.style.display="block";
        upBtn.style.display="block";
        chooseBtn.style.display="none";
    }
    // else {
    //     console.log(3);
    //     step1.style.filter="grayscale(0%)";
    //     step2.style.filter="grayscale(100%)";
    //     step3.style.filter="grayscale(100%)";
    //     back.style.display="none";
    //     upBtn.style.display="block";
    //     chooseBtn.style.display="none";

    // }


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
    
    var next=document.getElementById("next");
    var back=document.getElementById("back");
    next.addEventListener("click",nextStep,false);
    back.addEventListener("click",backStep,false);
    power01=true;
    power02=false;
    power03=false;


}	
window.addEventListener("load", init, false);
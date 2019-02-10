
function $id(id) {
    return document.getElementById(id);
}


window.addEventListener('load',function(){
    
    var tab_allAct = $id('tab_allAct');
    var tab_myAct = $id('tab_myAct');
    var partA = $id('partA');
    var partB = $id('partB');
    console.log(tab_myAct);
    tab_allAct.addEventListener('click',function(){
        partA.style.cssText="display:block;";
        partB.style.cssText="display:none;";
        tab_myAct.style.cssText='color:#444;border-bottom:1px solid #444';
        tab_allAct.style.cssText='color:#fff;border-bottom:1px solid #fff';        

    },false);
    tab_myAct.addEventListener('click',function(){
        partB.style.cssText="display:block;";
        partA.style.cssText="display:none;";
        tab_myAct.style.cssText='color:#fff;border-bottom:1px solid #fff';
        tab_allAct.style.cssText='color:#444;border-bottom:1px solid #444';
    },false);

    // if(partA.style.cssText == cTab){
    //     tab_allAct.style.cssText='color:#fff;border-bottom:1px solid #fff';
    // }

},false);
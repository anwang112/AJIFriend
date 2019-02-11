
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

    //#btn_actL btn_actR
    var btn_actL = $id('btn_actL');
    var btn_actR = $id('btn_actR');
    var imgBoxImg = $id('imgBoxImg');
    var imgBoxImg_B = $id('imgBoxImg_B');
    var act_bus = $id('act_bus');
    var count_img = 0 ;
    var btn_actArray = [
        'images/activity/act_number01.svg',
        'images/activity/act_number02.svg',
        'images/activity/act_number03.svg',
    ];
    btn_actL.addEventListener('click',function(){
        if(count_img == 0){
            imgBoxImg.src = btn_actArray[2];
            return count_img = 2 ;
        }else if(count_img == 1){
            imgBoxImg.src = btn_actArray[0];
            return count_img = 0 ;
        }else{
            imgBoxImg.src = btn_actArray[1];
            return count_img = 1 ;
        }
    },false);


    btn_actR.addEventListener('click',function(){
        if(count_img == 0){
            imgBoxImg.src = btn_actArray[1];
            return count_img = 1 ;
        }else if(count_img == 1){
            imgBoxImg.src = btn_actArray[2];
            return count_img = 2 ;
        }else{
            imgBoxImg.src = btn_actArray[0];
            return count_img = 0 ;
        }
    },false);


    //actbox01
    var lightbox_act = $id('lightbox_act');
    var lightbox_act_info = $id('lightbox_act_info');

    imgBoxImg.addEventListener('click',function(e){
        lightbox_act.style.cssText="display:flex;z-index:10;";
        lightbox_act_info.style.cssText="display:flex;z-index:10;";

        lightbox_act_info.addEventListener('click',function(e){
            e.stopPropagation();
        },false);
        lightbox_act.addEventListener('click',function(){
            lightbox_act.style.cssText="display:none;z-index:-1;";
            lightbox_act_info.style.cssText="display:none;z-index:-1;";
        },false);
        var thisSrc = e.target.src;
        imgBoxImg_B.src = thisSrc ;

    },false);

    //actbox02
    var lightbox_holdact = $id('lightbox_holdact');
    var lightbox_holdact_info = $id('lightbox_holdact_info');
    var btn_holdAct=$id('btn_holdAct');
    console.log(lightbox_holdact_info.scrollTop);
    btn_holdAct.addEventListener('click',function(e){

        window.scrollTo(0,730);

        lightbox_holdact.style.cssText="display:flex;z-index:10;";
        lightbox_holdact_info.style.cssText="display:flex;z-index:10;";

        lightbox_holdact_info.addEventListener('click',function(e){
            e.stopPropagation();
        },false);
        lightbox_holdact.addEventListener('click',function(){
            lightbox_holdact.style.cssText="display:none;z-index:-1;";
            lightbox_holdact_info.style.cssText="display:none;z-index:-1;";
        },false);

    },false);


    
},false);




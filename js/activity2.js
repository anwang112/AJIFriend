
function $id(id) {
    return document.getElementById(id);
}
function boxScroll(o){
    o.scrollTop = o.scrollHeight;
}


window.addEventListener('load',function(){
    
    var tab_allAct = $id('tab_allAct');
    var tab_myAct = $id('tab_myAct');
    var btn_holdAct = $id('btn_holdAct');
    var partA = $id('partA');
    var partB = $id('partB');
    console.log(btn_holdAct);
    tab_allAct.addEventListener('click',function(){
        partA.style.cssText="display:block;";
        partB.style.cssText="display:none;";
        btn_holdAct.style.cssText="display:block;";
        tab_myAct.style.cssText='color:rgba(255, 255, 255,.5);';
        tab_allAct.style.cssText='color:#fff;';        

    },false);
    tab_myAct.addEventListener('click',function(){
        partB.style.cssText="display:block;";
        partA.style.cssText="display:none;";
        btn_holdAct.style.cssText="display:none;";
        tab_myAct.style.cssText='color:#fff;';
        tab_allAct.style.cssText='color:rgba(255, 255, 255,.5);';
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
    var act_memberHold = $id('act_memberHold');
    console.log(lightbox_holdact_info.scrollTop);
    btn_holdAct.addEventListener('click',function(e){

        window.scrollTo(0,(act_memberHold.offsetTop + 350));
        console.log(act_memberHold.offsetTop);

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
    
    //join
    var act_memberHold_boxs  = document.getElementsByClassName('act_memberHold_box');
    var act_memberHold_joins = document.getElementsByClassName('act_memberHold_join');
    var tar = new Object;
    console.log(act_memberHold_boxs );
    console.log(act_memberHold_joins);
    for(var i=0; i < act_memberHold_joins.length;i++){
        act_memberHold_boxs[i].addEventListener('mouseenter',function(e){
            var target = e.target.firstChild.nextSibling.nextSibling.nextSibling;
            console.log(target);
            target.style.cssText=`opacity: 1;`;
            target.addEventListener('mouseenter',function(){
                target.style.cssText=`opacity: 1;`;
            },false);
            return tar = target;
        },false);
    }
    for(var i=0; i < act_memberHold_joins.length;i++){
        act_memberHold_boxs[i].addEventListener('mouseleave',function(e){
            tar.style.cssText=`opacity:0;`;
        },false);
    }

    //留言回覆
    var myMessagebox = $id('myMessagebox');
    var myMessagebox_input = $id('myMessagebox_input');
    myMessagebox_input.addEventListener('keydown',function(e){
        if(e.keyCode == 13 ){//enter代碼
            var txt = '阿吉:';
			txt += myMessagebox_input.value;

			if( myMessagebox_input.value != ""){
				var span = document.createElement('p');
				span.setAttribute('style','float:left;display:block;height:30px;position:relative;left:0px;color:#fff');
				span.innerText = txt;
	
				var divspan = document.createElement('div');
				divspan.appendChild(span);
				divspan.setAttribute('style','display:inline-block;width:100%;height:30px;margin:5px 0;');
	
				var clearbox = document.createElement('div');
				divspan.appendChild(clearbox);
				clearbox.setAttribute('class','clearbox');
	
				myMessagebox.appendChild(divspan);
				myMessagebox_input.value='';
	
				boxScroll(myMessagebox);
			}
		}
    },false);

    var JoinMessagebox = $id('JoinMessagebox');
    var JoinMessagebox_input = $id('JoinMessagebox_input');
    
    JoinMessagebox_input.addEventListener('keydown',function(e){
        if(e.keyCode == 13 ){//enter代碼
            var txt = '阿吉:';
			txt += JoinMessagebox_input.value;

			if( JoinMessagebox_input.value != ""){
				var span = document.createElement('p');
				span.setAttribute('style','float:left;display:block;height:30px;position:relative;left:0px;color:#fff');
				span.innerText = txt;
	
				var divspan = document.createElement('div');
				divspan.appendChild(span);
				divspan.setAttribute('style','display:inline-block;width:100%;height:30px;margin:5px 0;');
	
				var clearbox = document.createElement('div');
				divspan.appendChild(clearbox);
				clearbox.setAttribute('class','clearbox');
	
				JoinMessagebox.appendChild(divspan);
				JoinMessagebox_input.value='';
	
				boxScroll(JoinMessagebox);
			}
		}
    },false);

},false);




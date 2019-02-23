function $id(id) {
	return document.getElementById(id);
}

function saveHatCloth(memNo,memHat,memCloth){
    var xhr = new XMLHttpRequest();
	xhr.onload = function () {
		if( xhr.responseText == "null" ){
            console.log('xhr有錯誤喔');
         }else{
			console.log(xhr.responseText);//111
		}
	}

	memberObj = {
		memNo: memNo, //登入後是誰
		memHat: memHat, 
		memCloth: memCloth,
	};
	console.log(memberObj);
	xhr.open("post", "upDateHatCloth.php", true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send( "memberObj=" + JSON.stringify(memberObj));//轉成字串送到php
}

window.addEventListener('load', function () {
	//ooxx來打扣唷以下為ooxx所打ㄉ////////////////////////////////////////////////////////////
	ooxxMyRoom = () => {
		memberUpDateData = {
			memId: 'An', //登入後是誰
			mName: '', //登入後ㄉ值
			selfIntro: '', //登入後ㄉ值
		};
		$id('change').addEventListener('click', () => {
			if ($id('change').innerHTML == '儲存') {

				//拔更改資料寫入物件
				memberUpDateData.mName = $id('mName').value;
				memberUpDateData.selfIntro = $id('selfIntro').value;

				let xhr = new XMLHttpRequest();
				xhr.onload = function () {
					console.log(xhr.responseText);
				}
				xhr.open("Post", "upDateMember.php", true);
				xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
				xhr.send("memberUpDateData=" + JSON.stringify(memberUpDateData));
			}
		})

	}
	ooxxMyRoom();
	////////////////////////////////////////////////////////////////////////////////////////


	////lien////
	//保存衣服設定
	var btnSaveChageCloth = $id('btnSaveChageCloth');
	btnSaveChageCloth.addEventListener('click',function(){
		var memNo = 2 ; //登入情況下
		txt = $id('wearhat').src.split('/'); 	
		txts = $id('putonCloth').src.split('/');
		var memHat = txt[5];
		var memCloth = txts[5];
		saveHatCloth(memNo,memHat,memCloth);
		alert('js');
	},false);



}, false);


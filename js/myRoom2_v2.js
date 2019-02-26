function $id(id) {
	return document.getElementById(id);
}

function saveHatCloth(memNo, memHat, memCloth) {
	var xhr = new XMLHttpRequest();
	xhr.onload = function () {
		if (xhr.responseText == "null") {
			console.log('xhr有錯誤喔');
		} else {
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
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send("memberObj=" + JSON.stringify(memberObj));//轉成字串送到php
}

window.addEventListener('load', function () {
	//ooxx來打扣唷以下為ooxx所打ㄉ////////////////////////////////////////////////////////////
	ooxxMyRoom = () => {
		let memberUpDateData = {
			memId: 'An', //登入後是誰
			mName: '', //登入後ㄉ值
			selfIntro: '', //登入後ㄉ值
			status: ''
		};
		$id('change').addEventListener('click', () => {
			if ($id('change').innerHTML == '儲存') {

				//拔更改資料寫入物件
				memberUpDateData.memId = storage.getItem("memId");
				memberUpDateData.mName = $id('mName').value;
				memberUpDateData.selfIntro = $id('selfIntro').value;
				memberUpDateData.status = '改個人資料'

				let xhr = new XMLHttpRequest();
				xhr.onload = function () {
					let xx = JSON.parse(xhr.responseText)
					storage.setItem('mName', xx.name);
					storage.setItem('self-intro', xx.intro);
					$id('memName').innerHTML = xx.name;
					window.location.reload();
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
	roleHat = document.getElementsByClassName('roleHat')[0];
	roleClothes = document.getElementsByClassName('roleClothes')[0];
	btnSaveChageCloth.addEventListener('click', function () {

		// console.log(roleHat.style.backgroundImage.split('/')[2].split(')')[0]);
		// console.log(roleClothes.style.backgroundImage.split('/')[2].split(')')[0].split('"')[0]);
		var memNo = storage.getItem("memNo"); //登入情況下
		// txt = $id('wearhat').src.split('/'); 	
		// txts = $id('putonCloth').src.split('/');
		var srcHat = roleHat.style.backgroundImage;
		var memHat = srcHat.substring(srcHat.lastIndexOf("/") + 1, srcHat.length - 2);
		var srcClothes = roleClothes.style.backgroundImage;
		var memCloth = srcClothes.substring(srcClothes.lastIndexOf("/") + 1, srcClothes.length - 2);
		saveHatCloth(memNo, memHat, memCloth);

	}, false);



}, false);


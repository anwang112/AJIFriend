function init() {

	var profileLightBox = document.getElementById("profileLightBox");
	var x = document.getElementById("closeProfile");
	var computer = document.getElementById("computer");

	function show() {
		profileLightBox.style.display = "";
		if (edit.innerHTML == "編輯") {

			edit.innerHTML = "編輯";
			mName.style.display = "none";
			constellation.style.display = "none";
			hobby.style.display = "none";
			selfIntro.style.display = "none";
			dataReset.style.display = "none";

			mNameText.style.display = "";
			constellationText.style.display = "";
			hobbyText.style.display = "";
			selfIntroText.style.display = "";
		}
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					// alert(xhr.responseText);
					var XML = xhr.responseXML;
					var str0 = (XML.documentElement.childNodes[0].firstChild.nodeValue);
					var str1 = (XML.documentElement.childNodes[1].firstChild.nodeValue);
					var str2 = (XML.documentElement.childNodes[2].firstChild.nodeValue);
					var str3 = (XML.documentElement.childNodes[3].firstChild.nodeValue);
					var str4 = (XML.documentElement.childNodes[4].firstChild.nodeValue);
					var str5 = (XML.documentElement.childNodes[5].firstChild.nodeValue);
					var str6 = (XML.documentElement.childNodes[6].firstChild.nodeValue);
					var str7 = (XML.documentElement.childNodes[7].firstChild.nodeValue);
					var str8 = (XML.documentElement.childNodes[8].firstChild.nodeValue);
					console.log(str6);
					// var strr = typeof(str6);
					// console.log(strr);
					var newStr2 = str2.substring(0, 10);
					var arrStr6 = str6.split("");
					if (arrStr6[0] == 2) {
						arrStr6[0] = "";
					} else {
						arrStr6[0] = "�见�� ";
					}
					if (arrStr6[1] == 2) {
						arrStr6[1] = "";
					} else {
						arrStr6[1] = "�𤓖敶� ";
					}
					if (arrStr6[2] == 2) {
						arrStr6[2] = "";
					} else {
						arrStr6[2] = "�𨺗璅� ";
					}
					if (arrStr6[3] == 2) {
						arrStr6[3] = "";
					} else {
						arrStr6[3] = "�寥ㄙ ";
					}
					if (arrStr6[4] == 2) {
						arrStr6[4] = "";
					} else {
						arrStr6[4] = "���飛 ";
					}
					if (arrStr6[5] == 2) {
						arrStr6[5] = "";
					} else {
						arrStr6[5] = "��撠� ";
					}
					var newArrStr6 = arrStr6.join("");
					$("#xhrAcctBack").css("display", "").text(str0);
					$("#mNameText").css("display", "").text(str1);
					$("#constellationText").css("display", "").text(newStr2);
					$("#hobbyText").css("display", "").text(newArrStr6);
					$("#selfIntroText").css("display", "").text(str7);

					console.log(localStorage["MEM_no"]);

					$('#mName').val(str1);
					$('#constellation').val(newStr2);
					$('#hobby').val(newArrStr6);
					$('#selfIntro').val(str7);

				} else {
					// alert(xhr.status);
				}
			} else {
				// alert(xhr.readyState);
			}
		}//onready
		var data_info = "MEM_no=" + localStorage["MEM_no"];
		var url = "php/getData.php";
		xhr.open("Post", url, true);
		xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		xhr.send(data_info);
		// console.log(data_info);	
	}
	function close() {
		profileLightBox.style.display = "none";
	}
	computer.onclick = show;
	x.onclick = close;

	//按下編輯後會發生的事
	var edit = document.getElementById("change");
	var dataReset = document.getElementById("dataReset");
	var mName = document.getElementById("mName");
	var constellation = document.getElementById("constellation");
	var hobby = document.getElementById("hobby");
	var selfIntro = document.getElementById("selfIntro");

	var mNameText = document.getElementById("mNameText");
	var constellationText = document.getElementById("constellationText");
	var hobbyText = document.getElementById("hobbyText");
	var selfIntroText = document.getElementById("selfIntroText");


	mName.style.display = "none";
	constellation.style.display = "none";
	hobby.style.display = "none";
	selfIntro.style.display = "none";
	dataReset.style.display = "none";
	function editDATA() {
		if (edit.innerHTML == "編輯") {

			edit.innerHTML = "儲存";
			mName.style.display = "";
			// constellation.style.display = "";
			// memHobby.style.display = "";
			selfIntro.style.display = "";
			dataReset.style.display = "";

			mNameText.style.display = "none";
			// constellationText.style.display = "none";
			// hobbyText.style.display = "none";
			selfIntroText.style.display = "none";
			change.disabled = false;
		} else {
			edit.innerHTML = "編輯";
			mName.style.display = "none";
			constellation.style.display = "none";
			hobby.style.display = "none";
			selfIntro.style.display = "none";
			dataReset.style.display = "none";

			mNameText.style.display = "";
			constellationText.style.display = "";
			hobbyText.style.display = "";
			selfIntroText.style.display = "";

			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {
					if (xhr.status == 200) {
						var XML = xhr.responseXML;
						var str0 = (XML.documentElement.childNodes[0].firstChild.nodeValue);
						var str1 = (XML.documentElement.childNodes[1].firstChild.nodeValue);
						$("#mNameText").css("display", "").text(str0);
						$("#selfIntroText").css("display", "").text(str1);
						localStorage["MEM_nick"] = str0;
						$(".login_pic + span").text(str0);
					} else {
						// alert(xhr.status);
					}
				} else {
					// alert(xhr.readyState);
				}
			}//onready
			var data_info = "MEM_no=" + localStorage["MEM_no"] + "&MEM_nick=" + $(this).parent().parent().find('#memName').val() + "&MEM_like=" + $(this).parent().parent().find('#memHobby').val() + "&MEM_intro=" + $(this).parent().parent().find('#memIntroduce').val();
			var url = "php/sendData.php";
			xhr.open("Post", url, true);
			xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
			xhr.send(data_info);
			change.disabled = false;
		}
	}
	change.onclick = editDATA;


	//按下復原→到一開始的樣子
	var dataReset = document.getElementById("dataReset");
	function resetForLastTime() {
		document.getElementById("mName").value = mNameText.innerHTML;
		document.getElementById("constellation").value = constellationText.innerHTML;
		document.getElementById("hobby").value = hobbyText.innerHTML;
		document.getElementById("selfIntro").value = selfIntroText.innerHTML;
	}

	dataReset.onclick = resetForLastTime;

	//衣櫃區
	function showWardrobeLightBox() {
		var wardrobe = document.getElementById("wardrobe");
		var wardrobeLightBox = document.getElementById("wardrobeLightBox");
		wardrobeLightBox.style.display = "";
	}
	function wardrobeClose() {
		wardrobeLightBox.style.display = "none";
	}
	function showKeepsaveSuccessLightBox() {
		var btnSaveChageCloth = document.getElementById("btnSaveChageCloth");
		var keepSaveClothes = document.getElementById("keepSaveClothes");
		keepSaveClothes.style.display = "";
	}
	function keepSaveClothesClose() {
		keepSaveClothes.style.display = "none";
	}

	// function changeHat(e) {
	// 	var hat = e.target;
	// 	var src = hat.src.replace("hat/hat_", "head/head_");
	// 	document.getElementById("wearhat").src = src;
	// }

	var wardrobe = document.getElementById("wardrobe");
	wardrobe.onclick = showWardrobeLightBox;

	var btnClosetCancel = document.getElementById("btnClosetCancel");
	btnClosetCancel.onclick = wardrobeClose;

	var btnSaveChageCloth = document.getElementById("btnSaveChageCloth");
	btnSaveChageCloth.onclick = showKeepsaveSuccessLightBox;

	var btnkeepSaveClose = document.getElementById("btnkeepSaveClose");
	btnkeepSaveClose.onclick = keepSaveClothesClose;

	var imgs = document.getElementsByClassName("hat");
	// for (var i = 0; i < imgs.length; i++) {
	// 	imgs[i].onclick = changeHat;
	// }

	var clothimgs = document.getElementsByClassName("cloth");

	for (var i = 0; i < clothimgs.length; i++) {
		clothimgs[i].addEventListener('click', (e) => {
			var cloth = e.target;
			var src = cloth.src.replace("cloth/cloth_", "body/body_");
			document.getElementById("putonCloth").src = src;
		})
	}

}
window.onload = init;
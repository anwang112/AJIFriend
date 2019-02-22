function $id(id) {
	return document.getElementById(id);
}

window.addEventListener('load', function () {
	//ooxx來打扣唷以下為ooxx所打ㄉ////////////////////////////////////////////////////////////
	ooxxMyRoom = () => {
		memberUpDateData = {
			memId: 'adminGA', //登入後是誰
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
					alert(xhr.responseText());
				}
				xhr.open("Post", "upDateMember.php", true);
				xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
				xhr.send("memberUpDateData=" + JSON.stringify(memberUpDateData));
			}
		})

	}
	ooxxMyRoom();
	////////////////////////////////////////////////////////////////////////////////////////
}, false);


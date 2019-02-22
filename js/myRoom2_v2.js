function $id(id) {
	return document.getElementById(id);
}

window.addEventListener('load', function () {
	//查看
	var act_readmore = document.getElementsByClassName('act_readmore');

	for (var i = 0; i < act_readmore.length; i++) {
		act_readmore[i].addEventListener('click', function () {
			// location.href('http://localhost/activity_v2.php');
			alert('1');
		}, false);
	}
	console.log('ooxx');
}, false);

	// <input style="display:none" type="text" value="<?php echo $actTitle ;?>">
	// <input style="display:none" type="text" value="<?php echo $actNo ;?>">
	// <input style="display:none" type="text" value="<?php echo $memId ;?>">
	// <input style="display:none" type="text" value="<?php echo $actLoc ;?>">
	// <input style="display:none" type="text" value="<?php echo $act_begin ;?>">
	// <input style="display:none" type="text" value="<?php echo $act_end ;?>">
	// <input style="display:none" type="text" value="<?php echo $actIntro ;?>">
	// <button class="btn_R cancel_act" style="background-color:#ccc;">取消參加</button>
	// <input style="display:none" type="text" value="<?php echo $actNo ;?>">
	// <input class="userInput02" style="display:none" type="text" value="<?php echo $_SESSION["memNo"]?>">
	// <input type="hidden" value="<?php echo $_SESSION["memNo"]?>">  
	// <input type="hidden" value="<?php echo $actNo ;?>"> 
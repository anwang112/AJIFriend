// <!-- 燈箱：衣櫃 -->
function showWardrobeLightBox(){
  //如果點擊(wardrobe)就顯示衣櫃用的燈箱(wardrobeLightBox)
  var wardrobe =document.getElementById("wardrobe");
  var wardrobeLightBox =document.getElementById("wardrobeLightBox");
  wardrobeLightBox.style.display="";
}//showWardrobeLightBox
function wardrobeClose(){
  //將(wardrobe)關起來，並將燈箱隱藏起來
  wardrobeLightBox.style.display="none";
}
function showKeepsaveSuccessLightBox(){
  //如果點擊(btnSaveChageCloth)就顯示確定的燈箱(keepSaveClothes)
  var btnSaveChageCloth = document.getElementById("btnSaveChageCloth");
  var keepSaveClothes = document.getElementById("keepSaveClothes");
  keepSaveClothes.style.display="";
}
function keepSaveClothesClose(){
  keepSaveClothes.style.display="none";
}
// <!-- 燈箱：我的個人資訊 -->
function showMyProfileLightbox(){
  var computer =document.getElementById("computer");
  var profileLightBox =document.getElementById("profileLightBox");
  profileLightBox.style.display="";
}
function myprofileLightboxClose(){
  profileLightBox.style.display="none";
}

function changeHat(e){
  var hat = e.target;
  var src = hat.src.replace("hat/hat_","head/head_");
  document.getElementById("wearhat").src = src;
}
function changeCloth(e){
    var cloth = e.target;
    var src = cloth.src.replace("cloth/cloth_","body/body_");
    document.getElementById("putonCloth").src = src;
}

function init(){
  var wardrobe =document.getElementById("wardrobe");
  wardrobe.onclick =showWardrobeLightBox;
  //===設定wardrobe.onclick 事件處理程序是 showWardrobeLightBox
  var btnClosetCancel =document.getElementById("btnClosetCancel");
  btnClosetCancel.onclick =wardrobeClose;
  //===設定btnClosetCancel.onclick 事件處理程序是wardrobeClose
  var btnSaveChageCloth =document.getElementById("btnSaveChageCloth");
  btnSaveChageCloth.onclick = showKeepsaveSuccessLightBox;

  var btnkeepSaveClose=document.getElementById("btnkeepSaveClose");
  btnkeepSaveClose.onclick =keepSaveClothesClose;
  
  var computer =document.getElementById("computer");
  computer.onclick =showMyProfileLightbox;
  
  var closeProfile =document.getElementById("closeProfile");
  closeProfile.onclick = myprofileLightboxClose;
  

  var imgs = document.getElementsByClassName("hat");
  for( var i=0; i<imgs.length; i++){
    imgs[i].onclick = changeHat;
  }
  //===設定imgs.onclick 事件處理程序是changeHat
  var clothimgs = document.getElementsByClassName("cloth");
  for( var i=0; i<=imgs.length; i++){
    clothimgs[i].onclick = changeCloth;
    // console.log(clothimgs);
  }
  //===設定clothimgs.onclick 事件處理程序是changeCloth
};

window.onload=init;

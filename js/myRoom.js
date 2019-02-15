// <!-- 燈箱：衣櫃 -->
function showWardrobeLightBox(){
  var wardrobe =document.getElementById("wardrobe");
  var wardrobeLightBox =document.getElementById("wardrobeLightBox");
  wardrobeLightBox.style.display="";
}
function wardrobeClose(){
  wardrobeLightBox.style.display="none";
}
function showKeepsaveSuccessLightBox(){
  var btnSaveChageCloth = document.getElementById("btnSaveChageCloth");
  var keepSaveClothes = document.getElementById("keepSaveClothes");
  keepSaveClothes.style.display="";
}
function keepSaveClothesClose(){
  keepSaveClothes.style.display="none";
}
// <!-- 燈箱：我的個人資訊 -->
// function showMyProfileLightbox(){
//   var computer =document.getElementById("computer");
//   var profileLightBox =document.getElementById("profileLightBox");
//   profileLightBox.style.display="";
// }
// function myprofileLightboxClose(){
//   profileLightBox.style.display="none";
// }

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
  
  var btnClosetCancel =document.getElementById("btnClosetCancel");
  btnClosetCancel.onclick =wardrobeClose;
  
  var btnSaveChageCloth =document.getElementById("btnSaveChageCloth");
  btnSaveChageCloth.onclick = showKeepsaveSuccessLightBox;

  var btnkeepSaveClose=document.getElementById("btnkeepSaveClose");
  btnkeepSaveClose.onclick =keepSaveClothesClose;
  
  // var computer =document.getElementById("computer");
  // computer.onclick =showMyProfileLightbox;
  
  // var closeProfile =document.getElementById("closeProfile");
  // closeProfile.onclick = myprofileLightboxClose;
  

  var imgs = document.getElementsByClassName("hat");
  for( var i=0; i<imgs.length; i++){
    imgs[i].onclick = changeHat;
  }
  
  var clothimgs = document.getElementsByClassName("cloth");
  for( var i=0; i<=imgs.length; i++){
    clothimgs[i].onclick = changeCloth;
  }
}
window.onload=init;


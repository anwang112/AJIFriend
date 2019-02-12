commonInit = () => {

    //操作說明
    /*
        宣告註冊 燈箱id 燈箱遮罩ID 燈箱xx按鈕ID
        ex.
        ooxx = document.getElementById('ooxx');
        啟動你要ㄉ動作執行帶入ooxxLightBox函式
        ex. 
        ooxx.addEventListener('click', () => {
            ooxxLightBox(燈箱ID,燈箱遮罩ID,燈箱xx按鈕ID);
        })
    */


    // ooxxLightBox(燈箱ID,燈箱遮罩ID,燈箱xx按鈕ID)
    ooxxLightBox = (...lightBoxArray) => {
        let LightBox = lightBoxArray[0];
        let LightBoxMask = lightBoxArray[1];
        let lightBoxXX = lightBoxArray[2];
        LightBox.style.display = 'none';
        opacity = 0;

        // 關掉按鈕樣式
        lightBoxXXGo = (e) => {
            if ((e.type == 'mousedown') || (e.type == 'touchstart')) {
                lightBoxXX.classList.add('lightBoxDown');
            } else if ((e.type == 'mouseup') || (e.type == 'touchend')) {
                lightBoxXX.classList.remove('lightBoxDown');
            }
        }
        lightBoxXX.addEventListener('mousedown', lightBoxXXGo);
        lightBoxXX.addEventListener('mouseup', lightBoxXXGo);
        lightBoxXX.addEventListener('touchstart', lightBoxXXGo);
        lightBoxXX.addEventListener('touchend', lightBoxXXGo);

        //燈箱開始
        LightBox.style.display = 'none';
        opacity = 0;

        //打開淡入    
        OpenLightBox = () => {
            LightBox.style.display = 'block';
            LightBoxMask.style.display = 'block';
            opacity += 0.086;
            LightBox.style.opacity = opacity;
            OpenLightBoxId = window.requestAnimationFrame(OpenLightBox);
            if (opacity > 1) {
                opacity = 1;
                LightBox.style.opacity = 1;
                cancelAnimationFrame(OpenLightBoxId);
            }
        }

        //關掉燈箱喔
        closeLightBox = () => {
            if (opacity > 0.4) {
                opacity -= 0.086;
            } else {
                opacity -= 0.026;
            }
            LightBox.style.opacity = opacity;
            closeLightBoxId = window.requestAnimationFrame(closeLightBox);
            if (opacity <= 0) {
                LightBoxMask.style.display = 'none';
                opacity = 0;
                LightBox.style.opacity = opacity;
                cancelAnimationFrame(closeLightBoxId);
                LightBox.style.display = 'none';
            }
        }
        // 開啟燈箱
        if (LightBox.style.display == 'none') {
            OpenLightBoxId = window.requestAnimationFrame(OpenLightBox);
        }

        //關掉燈箱函式
        lightBoxXX.addEventListener('click', () => {
            closeLightBoxId = window.requestAnimationFrame(closeLightBox);
        })
        LightBoxMask.addEventListener('click', () => {
            closeLightBoxId = window.requestAnimationFrame(closeLightBox);
        })
    }
<<<<<<< HEAD

=======
// 創建div
    var divTop=document.createElement("div");
    var wrap=document.getElementsByClassName("wrap")[0];
    divTop.className="top";
    divTop.id="LB";

    // 創建img 獲獎照片
    var imgTop=document.createElement("img");
    imgTop.src = parent.childNodes[1].src;
    // 創建img member
    var imgMem=document.createElement("img");
    imgMem.className="member";
    imgMem.src=parent.childNodes[3].src;
    // 創建會員帳號連結
    var aMem=document.createElement("a");
    aMem.src="#";
    aMem.innerText=parent.childNodes[5].innerText;
    // 創建照片得票數
    var spanVote=document.createElement("span");
    spanVote.innerText=parent.childNodes[9].innerText;
    // 創建愛心數
    var imgHeart=document.createElement("img"); 
    imgHeart.className="heart";
    imgHeart.src =parent.childNodes[7].src;
    // 創建p
    var pContent=document.createElement("p");
    console.log(parent.childNodes[11]);
        // pContent.innerText=parent.childNodes[10].innerText;
    pContent.innerText="整個城市都是我們的伸展台";

    //創建svg關閉圖片
    var imgclose=document.createElement("img");
    imgclose.src="/images/times-circle-32.png";
    imgclose.id="close";
    imgclose.addEventListener("click",closeTop,false);

    wrap.appendChild(divTop);
    divTop.appendChild(imgTop);
    divTop.appendChild(imgMem);
    divTop.appendChild(aMem);
    divTop.appendChild(imgHeart);
    divTop.appendChild(spanVote);
    divTop.appendChild(pContent);
    divTop.appendChild(imgclose);
}
function closeTop(){
    var wrap=document.getElementsByClassName("wrap")[0];
    var divTop=document.getElementById("LB");
    wrap.removeChild(divTop);
}
// card的燈箱
function cardLB(e){
    console.log(e.target);
    if( e.target.className.includes('card') ==  false){
        var parent = e.target.parentNode;
    }else{
        var parent = e.target;
    }
    // 創建div
    var divCard=document.createElement("div");
    var postArea=document.getElementsByClassName("postArea")[0];
    divCard.className="card-" +e.target.parentNode.id ;
    divCard.id="cardLB" ;
    

    // 創建img 獲獎照片
    var imgCard=document.createElement("img");
    imgCard.src = e.target.src;
    imgCard.className="cardPhoto";
    // 創建img member
    var imgMem=document.createElement("img");
    imgMem.className="member";
    imgMem.src=e.target.parentNode.children[1].src;
    // 創建會員帳號連結
    var aMem=document.createElement("a");
    aMem.src="#";
    aMem.innerText=e.target.parentNode.children[2].innerText;
    // 創建照片得票數
    var spanVote=document.createElement("span");
    spanVote.innerText=e.target.parentNode.children[3].innerText;
    // 創建愛心數
    var imgHeart=document.createElement("img"); 
    imgHeart.className="heart";
    imgHeart.src ="/images/fullheart-16.png";
    // 創建p
    var pContent=document.createElement("p");
    //console.log(parent.childNodes[11]);
        // pContent.innerText=parent.childNodes[10].innerText;
    pContent.innerText="整個城市都是我們的伸展台";

    //創建svg關閉圖片
    var imgClose=document.createElement("img");
    imgClose.src="/images/times-circle-32.png";
    imgClose.id="close";
    imgClose.addEventListener("click",closeCard,false);
    // 創建svg刪除圖片
    var imgDel=document.createElement("img");
    imgDel.src="/images/trash-alt.svg";
    imgDel.id="del";
    imgDel.addEventListener("click",delCard,false);



    postArea.appendChild(divCard);
    divCard.appendChild(imgCard);
    divCard.appendChild(imgMem);
    divCard.appendChild(aMem);
    divCard.appendChild(imgHeart);
    divCard.appendChild(spanVote);
    divCard.appendChild(pContent);
    divCard.appendChild(imgClose);
    divCard.appendChild(imgDel);
>>>>>>> origin/photo


    



}
window.addEventListener('load', commonInit);








//雜亂程式區
    // cancelAnimationFrame(OpenLightBoxId)
    // window.getComputedStyle(LightBox, null).getPropertyValue("opacity");
    // ooxxBtn.addEventListener('click', LightBoxRun);



    /*
        //燈箱關閉按鈕 
        const lightBoxXX = document.getElementById('lightBoxXX');
        lightBoxXXGo = (e) => {
            if ((e.type == 'mousedown') || (e.type == 'touchstart')) {
                lightBoxXX.classList.add('lightBoxDown');
            } else if ((e.type == 'mouseup') || (e.type == 'touchend')) {
                lightBoxXX.classList.remove('lightBoxDown');
            }
        }
        lightBoxXX.addEventListener('mousedown', lightBoxXXGo);
        lightBoxXX.addEventListener('mouseup', lightBoxXXGo);
        lightBoxXX.addEventListener('touchstart', lightBoxXXGo);
        lightBoxXX.addEventListener('touchend', lightBoxXXGo);
    
        //燈箱開始
        const LightBox = document.getElementById('LightBox');
        const LightBoxMask = document.getElementById('LightBoxMask');
        LightBox.style.display = 'none';
        opacity = 0;
    
        //打開燈箱拉    
        OpenLightBox = () => {
            LightBox.style.display = 'block';
            LightBoxMask.style.display = 'block';
            opacity += 0.086;
            LightBox.style.opacity = opacity;
            OpenLightBoxId = window.requestAnimationFrame(OpenLightBox);
            if (opacity > 1) {
                opacity = 1;
                LightBox.style.opacity = 1;
                cancelAnimationFrame(OpenLightBoxId);
            }
        }
    
        //關掉燈箱喔
        closeLightBox = () => {
            if (opacity > 0.4) {
                opacity -= 0.086;
            } else {
                opacity -= 0.026;
            }
            LightBox.style.opacity = opacity;
            closeLightBoxId = window.requestAnimationFrame(closeLightBox);
            if (opacity <= 0) {
                LightBoxMask.style.display = 'none';
                opacity = 0;
                LightBox.style.opacity = opacity;
                cancelAnimationFrame(closeLightBoxId);
                LightBox.style.display = 'none';
            }
        }
    
        //打開燈箱ㄉ函式
        LightBoxRun = () => {
            if (LightBox.style.display == 'none') {
                OpenLightBoxId = window.requestAnimationFrame(OpenLightBox);
            }
        }
    
        //關掉燈箱函式
        lightBoxXX.addEventListener('click', () => {
            closeLightBoxId = window.requestAnimationFrame(closeLightBox);
        })
        LightBoxMask.addEventListener('click', () => {
            closeLightBoxId = window.requestAnimationFrame(closeLightBox);
        })
    */

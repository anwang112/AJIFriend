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

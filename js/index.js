<<<<<<< HEAD
=======
//id選擇器
$id = (id) => {
    return document.getElementById(id);
}

//淡入
ooxxShow = (...ooxxShowArray) => {
    let object = ooxxShowArray[0];
    let opacityValue = ooxxShowArray[1]; //0.086
    let opacity = 0;
    ooxxShowGo = () => {
        object.style.display = 'block';
        opacity += opacityValue;
        object.style.opacity = opacity;
        if (opacity > 0.98) {
            opacity = 1;
            object.style.opacity = opacity;
            cancelAnimationFrame(ooxxShowId);
        }
        ooxxShowId = window.requestAnimationFrame(ooxxShowGo);
    }
    ooxxShowId = requestAnimationFrame(ooxxShowGo);
}

//淡出
ooxxHide = (...ooxxHideArray) => {
    let object = ooxxHideArray[0];
    let opacityValue = ooxxHideArray[1]; //0.086
    let opacity = 1;
    ooxxHideGo = () => {
        if (opacity > 0.4) {
            opacity -= opacityValue;
        } else {
            opacity -= 0.04;
        }
        object.style.opacity = opacity;
        ooxxHideId = window.requestAnimationFrame(ooxxHideGo);
        if (opacity <= 0) {
            opacity = 0;
            object.style.opacity = opacity;
            cancelAnimationFrame(ooxxHideId);
            object.style.display = 'none';
        }
    }
    ooxxHideId = requestAnimationFrame(ooxxHideGo)
}
//亂數
ooxxRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//眼睛動起來
ooxxEyesGo = (...eyesArray) => {
    eyesArray[0].style.transformBox = `fill-box`;
    eyesArray[1].style.transformBox = `fill-box`;
    eyesArray[0].style.transformOrigin = `center`;
    eyesArray[1].style.transformOrigin = `center`;
    eyesGo = () => {
        eyesArray[0].animate([{
            transform: 'scaleY(1)'
        },
        {
            transform: 'scaleY(0.01)'
        },
        {
            transform: 'scaleY(1)'
        }
        ], {
                duration: 500,
                endDelay: 1000,
            });
        eyesArray[1].animate([{
            transform: 'scaleY(1)'
        },
        {
            transform: 'scaleY(0.01)'
        },
        {
            transform: 'scaleY(1)'
        }
        ], {
                duration: 500,
                endDelay: 1000,
            });
    }
    setInterval(eyesGo, ooxxRandom(2000, 3500));
}

//換帽帽
ooxxChangeHat = (...changeHatArray) => {
    let object = changeHatArray[0];
    let hat = changeHatArray[1];
    object.getElementsByClassName('roleHat')[0].style.backgroundImage = `url(images/hatImages/hat${hat}.png)`;
    let scaleValue = 0;
    object.getElementsByClassName('roleHat')[0].style.transition = `.8s`;
    hatGo = () => {
        if (scaleValue <= 1) {
            scaleValue += 0.06;
            object.getElementsByClassName('roleHat')[0].style.transform = `scale(${scaleValue})`;
            hatId = requestAnimationFrame(hatGo);
        } else if (scaleValue >= 1.5) {
            scaleValue = 1;
            object.getElementsByClassName('roleHat')[0].style.transform = `scale(${scaleValue})`;
            cancelAnimationFrame(hatId)
        }
    }
    hatId = requestAnimationFrame(hatGo);
}

//換衣衣
ooxxChangeClothes = (...changeClothesArray) => {
    let object = changeClothesArray[0];
    let clothes = changeClothesArray[1];
    object.getElementsByClassName('roleClothes')[0].style.backgroundImage = `url(images/clothesImages/clothes${clothes}.png)`;
    let scaleValue = 0;
    object.getElementsByClassName('roleClothes')[0].style.transition = `.8s`;
    clothesGo = () => {
        if (scaleValue <= 1) {
            scaleValue += 0.06;
            object.getElementsByClassName('roleClothes')[0].style.transform = `scale(${scaleValue})`;
            clothesId = requestAnimationFrame(clothesGo);
        } else if (scaleValue >= 1.5) {
            scaleValue = 1;
            object.getElementsByClassName('roleClothes')[0].style.transform = `scale(${scaleValue})`;
            cancelAnimationFrame(clothesId)
        }
    }
    clothesId = requestAnimationFrame(clothesGo);
}





//首頁載入完畢 開始瞜 ~~
>>>>>>> ooxx
indexInit = () => {

    //取得當前螢幕寬度
    if (window.innerWidth) {
        winWidth = window.innerWidth;
    }
    else if ((document.body) && (document.body.clientWidth)) {
        winWidth = document.body.clientWidth;
    }

<<<<<<< HEAD
=======
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //第一部分
    firstScreenFunction = () => {

        //雲ㄉ飄飄動畫
        //取得雲y座標亂數
        cloud = document.getElementsByClassName('cloud');
        cloudArray = [ooxxRandom(-10, -30), ooxxRandom(-20, -70), ooxxRandom(-30, -40), ooxxRandom(-80, -100)];
        for (let i = 0; i < cloud.length; i++) {
            cloud[i].style.top = `${ooxxRandom(i * 10, 40)}%`;
            cloud[i].style.left = `${cloudArray[i]}%`;
        }
        cloudTime = 0;
        cloudGo = () => {
            cloudTime += 0.029;
            if (cloudTime > 129) {
                cloudTime = 0;
            }
            for (let i = 0; i < cloud.length; i++) {
                if (cloudArray[i] >= 100) {
                    cloudArray[i] = -30;
                }
                cloudArray[i] += 0.038;
                cloud[i].style.left = `${cloudArray[i]}%`;
            }
            cloudId = requestAnimationFrame(cloudGo);
        }
        // cloudId = requestAnimationFrame(cloudGo);

        //春天與阿吉動畫區
        AJITalkSpring = () => {
            indexAjiSpring = document.getElementById('AjiSpring').getSVGDocument();
            //春天ㄉ手手
            springHand = indexAjiSpring.getElementsByClassName('cls-9')[0];
            springHand.style.transformBox = `fill-box`;
            springHand.style.transformOrigin = `right bottom`;
            //春天ㄉ手手揮起來
            springHandGoTime = 0;
            springHandGo = () => {
                springHandGoTime++
                if (springHandGoTime > 150) {
                    springHand.animate([
                        { transform: `rotate(0) translateX(0)` },
                        { transform: `rotate(-43deg) translateX(29%)` },
                        { transform: `rotate(0) translateX(0)` }], {
                            duration: 1000,
                            endDelay: 500,
                        });
                    springHandGoTime = 0;
                }
                springHandId = requestAnimationFrame(springHandGo);
            }
            springHandId = requestAnimationFrame(springHandGo);

            //春天阿吉眼睛動起來
            springEye = indexAjiSpring.getElementsByTagName('circle'); //0145
>>>>>>> ooxx

    changeScreen = () => {
        if (window.innerWidth) {
            winWidth = window.innerWidth;
        }
<<<<<<< HEAD
        else if ((document.body) && (document.body.clientWidth)) {
            winWidth = document.body.clientWidth;
=======
        AJITalkSpring();
        //stop-color="rgba(255,255,255,0.6)"
        //邱比特燈光特效 lineStop1.setAttribute('offset', `${lineX1}%`);
        cupidLight01 = document.getElementById('cupidLight01');
        cupidLightOffset = 0;
        cupidLightopacity = 0.1;
        cupidLightEnd = () => {
            if (cupidLightOffset < 1) {
                cupidLightOffset = 0;
                cupidLightopacity -= 0.0128;
                cupidLight01.setAttribute('stop-color', `rgba(255,255,255,${cupidLightopacity}`);
            } else {
                cupidLightOffset -= 0.48;
            }
            cupidLight01.setAttribute('offset', `${cupidLightOffset}%`);
            cupidLightEndId = requestAnimationFrame(cupidLightEnd);
            if (cupidLightopacity < 0.15) {
                cupidLightopacity = 0.1;
                cupidLight01.setAttribute('stop-color', `rgba(255,255,255,${cupidLightopacity}`);
                cancelAnimationFrame(cupidLightEndId);
                cupidLightstartId = requestAnimationFrame(cupidLightstart);
            }
        }
        cupidLightstart = () => {
            if (cupidLightopacity > 1) {
                cupidLightopacity = 1;
                cupidLightOffset += 0.48;
                cupidLight01.setAttribute('offset', `${cupidLightOffset}%`);
            } else {
                cupidLightopacity += 0.0128;
            }
            cupidLight01.setAttribute('stop-color', `rgba(255,255,255,${cupidLightopacity}`);
            cupidLightstartId = requestAnimationFrame(cupidLightstart);
            if (cupidLightOffset >= 100) {
                cupidLightOffset = 100;
                cupidLight01.setAttribute('offset', `${cupidLightOffset}%`);
                cancelAnimationFrame(cupidLightstartId);
                cupidLightEndId = requestAnimationFrame(cupidLightEnd);
            }
>>>>>>> ooxx
        }
        trojanItemGo();
    }
    window.addEventListener('resize', changeScreen);

<<<<<<< HEAD
=======


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
>>>>>>> ooxx
    //  第二屏slider
    trojanList = document.getElementById('trojanList');
    trojanItem = trojanList.getElementsByClassName('trojanItem');
    carousel = trojanList.getElementsByClassName('carousel')[0];

    //排好排好
    trojanItemGo = () => {
        // 公式
        rotate = 360 / trojanItem.length;


        transZ = winWidth / trojanItem.length * 1.8;
        if (winWidth >= 976) {
            transZ = 160;
        } else if (winWidth >= 768) {
            transZ = (winWidth / 2) / trojanItem.length * 1.9;
        } else {
            transZ = winWidth / trojanItem.length * 1.8;
        }
        yyy = 0;

        for (let i = 0; i < trojanItem.length; i++) {
            // if (winWidth >= 768) {
            //     trojanItem[i].style.transform = "rotateY(" + (i * rotate + yyy) + "deg) translateZ(" + transZ + "px) translateX(" + 20 +
            //         "px)";
            // } else {
            //     trojanItem[i].style.transform = "rotateY(" + (i * rotate + yyy) + "deg) translateZ(" + transZ + "px)";
            // }
            // trojanItem[i].style.transform = "translateX(" + 20 +
            //     "px)"+ "rotateY(" + (i * rotate + yyy) + "deg) translateZ(" + transZ + "px)";
                trojanItem[i].style.transform = "rotateY(" + (i * rotate + yyy) + "deg) translateZ(" + transZ + "px)";
        }
    }
    trojanItemGo();

<<<<<<< HEAD
    stage = document.getElementsByClassName('secondScreenSlider')[0];
    stage.addEventListener('click', (e) => {
        yyy -= 360 / trojanItem.length;
        for (let i = 0; i < trojanItem.length; i++) {
            trojanItem[i].style.transform = "rotateY(" + (i * rotate + yyy) + "deg) translateZ(" + transZ + "px)";
=======

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 第三部分
    thirdScreenFunctionn = () => {
        shop = document.getElementById('shop').getSVGDocument();
        shopLight = shop.getElementsByClassName('cls-4');  //0-3是電燈
        modelLight = document.getElementById('modelLight');

        for (let i = 0; i < shopLight.length - 1; i++) {
            shopLight[i].style.transformOrigin = `left bottom`;
            shopLight[i].style.transformBox = `fill-box`;
            shopLight[i].style.transition = `.8s`;
>>>>>>> ooxx
        }
    })

    //建立角色
    KindList = document.getElementById('KindList');
    KindItem = KindList.getElementsByTagName('li');
    role = document.getElementById('role');



    // 選身體
    changeKind = (e) => {
        role.innerHTML = "";
        switch (e.currentTarget.id) {
            case 'bodyBear':
                role.innerHTML = `<embed id="bodySvg" src="image/indexBear.svg" style="display:block;" />`;
                break;
            case 'bodyCat':
                role.innerHTML = `<embed id="bodySvg" src="image/indexCat.svg" style="display:block;" />`;
                break;
            case 'bodyRabbit':
                role.innerHTML = `<embed id="bodySvg" src="image/indexRabbit.svg" style="display:block;" />`;
                break;
            case 'bodyDog':
                role.innerHTML = `<embed id="bodySvg" src="image/indexDog.svg" style="display:block;" />`;
                break;
        }
<<<<<<< HEAD
        bodySvg = document.getElementById("bodySvg");
        bodySvg.addEventListener('load', () => {
            nowColor(rRangValue, gRangValue, bRangValue, bodySvg);
=======
        shopLightId = requestAnimationFrame(shopLightGo);

    }
    thirdScreenFunctionn();
    lightChangeScreen = () => {
        $id('shop').addEventListener('load', () => {
            shop = document.getElementById('shop').getSVGDocument();
            shopLight = shop.getElementsByClassName('cls-4');  //0-3是電燈
            for (let i = 0; i < shopLight.length - 1; i++) {
                shopLight[i].style.transformOrigin = `left bottom`;
                shopLight[i].style.transformBox = `fill-box`;
                shopLight[i].style.transition = `.8s`;
            }
            setTimeout(() => {
                shopLight[1].style.transform = `skewX(20deg)`; //不照
                shopLight[2].style.transform = `skewX(-25deg) translateX(-7%)`; //不照
                shopLight[3].style.transform = `skewX(23deg)`; //不照
                shopLight[0].style.transform = `skewX(-20deg) translateX(-2%)`; //不照
                modelLight.style.boxShadow = `0px 0px 65px 25px Transparent`;

            }, 10);
        });

>>>>>>> ooxx

        })



<<<<<<< HEAD
    }
    for (let i = 0; i < KindItem.length; i++) {
        KindItem[i].addEventListener('click', changeKind);
    }

    //選顏色
    rRang = document.getElementById('rRang');
    gRang = document.getElementById('gRang');
    bRang = document.getElementById('bRang');

    rRangValue = 80;
    gRangValue = 66;
    bRangValue = 59;
    colorList = document.getElementById('colorList');
    colorItem = colorList.getElementsByTagName('input');
    colorMouseStatus = false;
    bodySvg = document.getElementById("bodySvg");

    nowColor = (...getColor) => {
        getColor[3] = getColor[3].getSVGDocument();
        bodyColor = getColor[3].getElementsByClassName('cls-1');
        for (let i = 0; i < bodyColor.length; i++) {
            bodyColor[i].style.fill = `rgb(${getColor[0]},${getColor[1]},${getColor[2]})`;
=======


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 第四部分
    // 判斷開始執行第四部份動畫
    scrollFourthScreen = () => {
        fourthScreen = document.getElementById('fourthScreen'); //第四部份物件
        getFourthScreenTop = fourthScreen.offsetTop; //第四部份ㄉTop
        documentScrollTop = document.documentElement.scrollTop;

        //工式 當前式窗-物件離上方距離
        fourthScrollStatus = parseInt(getFourthScreenTop) - (parseInt(fourthScreen.offsetHeight) - parseInt(fourthScreen.offsetHeight) / 2);
        // console.log(`documentScrollTop = ` + documentScrollTop);
        // console.log(`fourthScrollStatus  = ` + fourthScrollStatus);
        if (documentScrollTop > fourthScrollStatus) {
            fourthScreenFunction();
        }
    }

    //第四部份
    fourthScreenFunction = () => {
        window.removeEventListener('scroll', scrollFourthScreen);
        flash = document.getElementById('flash');  //閃光燈物件
        lineStory = document.getElementById('lineStory');  //線條svg

        var indexLine = document.getElementById('indexLine');
        // console.log(indexLine.getTotalLength()); //印出線條長
        // console.log('第四部份開始執行');
        lineValue = 2146; //總共畫線長度
        indexLine.style.strokeDashoffset = lineValue;
        //紙張
        photoPaperGradient01 = document.getElementById('photoPaperGradient01');
        photoPaperGradient02 = document.getElementById('photoPaperGradient02');
        paperWhiteIdx1 = 0;
        paperWhiteIdx2 = 1;
        paperWhiteIdx3 = 0;
        paperWhiteIdx4 = 1;
        PhotoInfo = document.getElementById('PhotoInfo');
        PhotoInfoRed = document.getElementById('PhotoInfoRed');
        indexPhotoPaper = document.getElementById('indexPhotoPaper');


        //紙張動畫開始
        paperGo = () => {
            paperWhiteIdx1 += 1.05;
            paperWhiteIdx2 += 1.05;
            photoPaperGradient01.setAttribute('offset', `${paperWhiteIdx1}%`);
            photoPaperGradient02.setAttribute('offset', `${paperWhiteIdx2}%`);

            if ((paperWhiteIdx1 >= paperWhiteIdx2) || (paperWhiteIdx1 >= 99)) {
                paperWhiteIdx1 = 100;
                paperWhiteIdx2 = 100;
                cancelAnimationFrame(paperGo);
            }
            paperWhiteIdx3 += 1;
            paperWhiteIdx4 += 1;
            if ((paperWhiteIdx3 >= paperWhiteIdx4) || (paperWhiteIdx3 >= 99)) {
                paperWhiteIdx3 = 100;
                paperWhiteIdx4 = 100;
                PhotoInfoRed.style.opacity = `0`;
                PhotoInfo.style.opacity = `1`;
                indexPhotoPaper.style.transform = `rotate(9deg) translateY(20%)`;
                PhotoInfo.style.right = `-9%`;
                PhotoInfo.style.transform = `rotate(9deg) translateY(20%)`;
                // fourthScreenFunction();
            }
            photoPaperGradient03.setAttribute('offset', `${paperWhiteIdx3}%`);
            photoPaperGradient04.setAttribute('offset', `${paperWhiteIdx4}%`);
            paperId = requestAnimationFrame(paperGo);
        }
        // 畫線動畫開始
        lineGo = () => {
            if (lineValue < 700) {
                lineValue -= 7;
            } else {
                lineValue -= 10;
            }
            lineId = requestAnimationFrame(lineGo);
            indexLine.style.strokeDashoffset = lineValue;
            if (lineValue < 1) {
                cancelAnimationFrame(lineId);
                //相機閃光動畫
                flash.classList.add('flashGo');
                setTimeout(() => {
                    flash.classList.remove('flashGo');
                    paperId = requestAnimationFrame(paperGo);
                }, 1000)
            }
        }
        lineId = requestAnimationFrame(lineGo);
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //第五部分

    //還沒有寫唷//




    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //換角色
    //關掉創角燈箱
    indexCreateCloseBtn = document.getElementById('indexCreateCloseBtn');
    indexCreateCloseBtn.addEventListener('click', () => {
        $id('indexCreateRoleBox').style.display = `none`;
    })
    //tab切換
    createKindList = document.getElementById('createKindList');
    createKindItem = createKindList.getElementsByTagName('li');
    for (let i = 0; i < createKindItem.length; i++) {
        createKindItem[i].addEventListener('click', (e) => {
            $id('animalKindList').style.display = 'none';
            $id('eyesKindList').style.display = 'none';
            $id('colorKindList').style.display = 'none';
            for (let i = 0; i < createKindItem.length; i++) {
                createKindItem[i].style.background = 'transparent';
            }
            switch (e.target.value) {
                case 0:
                    $id('animalKindList').style.display = 'flex';
                    break;
                case 1:
                    $id('eyesKindList').style.display = 'flex';
                    break;
                case 2:
                    $id('colorKindList').style.display = 'flex';
                    break;
            }
            e.target.style.background = '#F05C79';
        })
    }
    //角色值

    if (localStorage.getItem('role') === null) {
        roleObject = {
            animal: 1,
            eyes: 1,
            rColor: 80,
            gColor: 66,
            bColor: 59,
        }
        localStorage.setItem('role', JSON.stringify(roleObject));
    } else {
        var roleObject = JSON.parse(localStorage.getItem('role'));
    }
    $id('rRang').value = roleObject.rColor;
    $id('gRang').value = roleObject.gColor;
    $id('bRang').value = roleObject.bColor;
    //顏色色碼轉換
    ooxxGetColor16 = (r, g, b) => {
        let color;
        if ((r == 0) && (g == 0) && (b == 0)) {
            color = '000000';
        } else {
            color = ((r << 16 | g << 8 | b).toString(16)).slice(-6);
>>>>>>> ooxx
        }
    }

    changeColor = (e) => {
        bodySvg = document.getElementById("bodySvg");
        switch (e.currentTarget.id) {
            case 'rRang':
                rRangValue = e.currentTarget.value;
                break;
            case 'gRang':
                gRangValue = e.currentTarget.value;
                break;
            case 'bRang':
                bRangValue = e.currentTarget.value;
                break;
        }
        nowColor(rRangValue, gRangValue, bRangValue, bodySvg);
    }
    rRang.addEventListener('change', changeColor);
    gRang.addEventListener('change', changeColor);
    bRang.addEventListener('change', changeColor);


<<<<<<< HEAD
    for (let i = 0; i < colorItem.length; i++) {
        colorItem[i].addEventListener('mousedown', (e) => {
=======
        object.getElementsByTagName('embed')[0].addEventListener('load', (e) => {
            switch (eyesValue) {
                case 1:
                    eyes1 = e.path[0].getSVGDocument().getElementsByClassName('cls-4');
                    eyes1[0].style.transformOrigin = `center 52%`;
                    eyes1[1].style.transformOrigin = `center 52%`;

                    eyesAnimate(eyes1[0], eyes1[1]);
                    break;
                case 2:
                    eyes2 = e.path[0].getSVGDocument().getElementsByClassName('cls-3');
                    eyes2[1].style.transformOrigin = `center 52%`;
                    eyes2[2].style.transformOrigin = `center 52%`;
                    eyesAnimate(eyes2[1], eyes2[2]);
                    break;
                case 3:
                    eyes3 = e.path[0].getSVGDocument().getElementsByClassName('cls-3');
                    eyes3[1].style.transformOrigin = `center 52%`;
                    eyes3[2].style.transformOrigin = `center 52%`;
                    eyesAnimate(eyes3[1], eyes3[2]);
                    break;
                case 4:
                    eyes4 = e.path[0].getSVGDocument().getElementsByClassName('cls-4');
                    eyes4[1].style.transformOrigin = `center 52%`;
                    eyes4[3].style.transformOrigin = `center 52%`;
                    eyesAnimate(eyes4[1], eyes4[3]);
                    break;
                case 5:
                    eyes5 = e.path[0].getSVGDocument().getElementsByClassName('cls-2');
                    eyes5[0].style.transformOrigin = `center 52%`;
                    eyes5[1].style.transformOrigin = `center 52%`;
                    eyesAnimate(eyes5[0], eyes5[1]);
                    break;
                case 6:
                    eyes6 = e.path[0].getSVGDocument().getElementsByClassName('cls-4');
                    eyes6[1].style.transformOrigin = `center 51%`;
                    eyes6[4].style.transformOrigin = `center 51%`;
                    eyesAnimate(eyes6[1], eyes6[4]);
                    break;
            }
        })

    }
    //換眼睛
    eyesKindItem = $id('eyesKindList').getElementsByTagName('li');
    roleEyes = $id('myRole').getElementsByClassName('roleEyes')[0];
    for (let i = 0; i < eyesKindItem.length; i++) {
        eyesKindItem[i].addEventListener('click', (e) => {
            ooxxChangeEyes(roleEyes, e.currentTarget.value);
            roleObject.eyes = e.currentTarget.value;
        })
    }

    //換顏色
    coloeBar = $id('colorKindList').getElementsByTagName('input');
    colorMouseStatus = false;
    colorBarMove = () => {
        if (colorMouseStatus == true) {
            roleObject.rColor = $id('rRang').value;
            roleObject.gColor = $id('gRang').value;
            roleObject.bColor = $id('bRang').value;
            ooxxChangeColor($id('myRole').getElementsByClassName('bodySvg')[0], roleObject.rColor, roleObject.gColor, roleObject.bColor);
        }
    }
    for (let i = 0; i < coloeBar.length; i++) {
        coloeBar[i].addEventListener('mousedown', (e) => {
>>>>>>> ooxx
            colorMouseStatus = true;
            if (colorMouseStatus == true) {
                e.target.style.cursor = `grabbing`;
            }
<<<<<<< HEAD
=======
        })
        coloeBar[i].addEventListener('touchstart', (e) => {
            colorMouseStatus = true;
            roleObject.rColor = $id('rRang').value;
            roleObject.gColor = $id('gRang').value;
            roleObject.bColor = $id('bRang').value;
            ooxxChangeColor($id('myRole').getElementsByClassName('bodySvg')[0], roleObject.rColor, roleObject.gColor, roleObject.bColor);
        });
        coloeBar[i].addEventListener('mousemove', colorBarMove);
        coloeBar[i].addEventListener('touchmove', colorBarMove);
    }





    //將角色值存到local裡面
    saveRoleBtn = document.getElementById('saveRoleBtn');
    saveRoleBtn.addEventListener('click', () => {
        localStorage.setItem('role', JSON.stringify(roleObject));
    })

>>>>>>> ooxx

        });
        colorItem[i].addEventListener('mousemove', (e) => {

<<<<<<< HEAD
            if (colorMouseStatus == true) {
                e.target.style.cursor = `grabbing`;
                switch (e.currentTarget.id) {
                    case 'rRang':
                        rRangValue = e.currentTarget.value;
                        break;
                    case 'gRang':
                        gRangValue = e.currentTarget.value;
                        break;
                    case 'bRang':
                        bRangValue = e.currentTarget.value;
                        break;
=======
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //創建會員唷
    createMember = () => {
        memIdKeyStatus = false;
        mNameKeyStatus = false;
        //判斷是否重複
        checkMemberData = (ooxxValue) => {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                checkInfo = JSON.parse(xhr.responseText);
                if (checkInfo.checkmemId == '不能使用') {
                    $id('getCheckmemId').style.color = 'red';
                    $id('getCheckmemId').innerHTML = checkInfo.checkmemId;
                    $id('createMemberBtn').disabled = true;
                }
                if (checkInfo.checkmName == '不能使用') {

                    $id('getCheckmName').style.color = 'red';
                    $id('getCheckmName').innerHTML = checkInfo.checkmName;
>>>>>>> ooxx
                }
                nowColor(rRangValue, gRangValue, bRangValue, bodySvg);
                console.log(rRangValue, gRangValue, bRangValue);

            } else {
                e.target.style.cursor = `grab`;
            }
        });
<<<<<<< HEAD
        colorItem[i].addEventListener('mouseup', (e) => {
            colorMouseStatus = false;
            e.target.style.cursor = `grab`;
        });

    }
=======

        $id('mName').addEventListener('keydown', () => {
            //多打ㄉ原本想說姓名不能一樣ㄉ
            mNameKeyStatus = true;
            if (mNameKeyStatus == true) {
                $id('mName').addEventListener('keyup', () => {
                    checkMemberData({
                        mName: $id('mName').value,
                        check: 'mName',
                    });
                    $id('getCheckmName').innerHTML = '可以使用';
                    $id('getCheckmName').style.color = 'green';
                });
            }
        });
        //完成表單送出ㄉ
        $id('createMemberBtn').addEventListener('click', () => {
            var checkedValue = document.querySelector('.hobbyItem:checked').value;
            if ($id('createMemberBtn').disabled == true) {
                alert("不能喔");
            }
            //把表單值塞入物件傳到php
            createRoleData = {
                memId: $id('memId').value,
                memPsw: $id('memPsw').value,
                mName: $id('mName').value,
                constellation: $id('constellation').value,
                hobby: checkedValue,
                selfIntro: $id('selfIntro').value,
                mColor: ooxxGetColor16(roleObject.rColor, roleObject.gColor, roleObject.bColor),
                eye: roleObject.eyes,
                animal: roleObject.animal,
            }

            var createxhr = new XMLHttpRequest();
            createxhr.onload = function () {
                // checkInfo = JSON.parse(createxhr.responseText);
                alert('註冊成功!!');
                $id('createMemberScreen').display = 'none';
                sendForm();
                $id('createMemberScreen').style.display = 'none';
            }
            createxhr.open("Post", "setUpMember.php", true);
            createxhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            createxhr.send("createRoleData=" + JSON.stringify(createRoleData));
        })

    }
    createMember();


>>>>>>> ooxx

    //選眼睛
    eyesList = document.getElementById('eyesList');
    eyesItem = eyesList.getElementsByTagName('li');
    roleEyes = document.getElementById('roleEyes');
    for (let i = 0; i < eyesItem.length; i++) {
        eyesItem[i].addEventListener('click', (e) => {
            eyesSrc = e.currentTarget.children[0].src;
            console.log(eyesSrc);
            // roleEyes.innerHTML = `<img src="${eyesSrc}">`;
            roleEyes.style.backgroundImage = `url(${eyesSrc})`;
        });
    }










    //背景漸層
    activityFix = document.getElementsByClassName('firstScreenBg')[0];

    gradientStatus = false;
    gradient = {
        x1: 114,
        x2: 183,
        x3: 255,
        y1: 255,
        y2: 210,
        y3: 163,
    }
    gradientEnd = {
        x1: 70,
        x2: 24,
        x3: 62,
        y1: 37,
        y2: 56,
        y3: 78,
    }
    activityFix.style.backgroundImage = `linear-gradient(49deg, rgba(${gradient.x1}, ${gradient.x2}, ${gradient.x3}, 1)0%, rgba(${gradient.y1}, ${gradient.y2}, ${gradient.y3}, 0.8)100%)`;

    ooxxGradient = () => {
        if (gradient.x1 < gradientEnd.x1) {
            gradient.x1++
        } else if (gradient.x1 > gradientEnd.x1) {
            gradient.x1--
        }
        if (gradient.x2 < gradientEnd.x2) {
            gradient.x2++
        } else if (gradient.x2 > gradientEnd.x2) {
            gradient.x2--
        }
        if (gradient.x3 < gradientEnd.x3) {
            gradient.x3++
        } else if (gradient.x3 > gradientEnd.x3) {
            gradient.x3--
        }
        if (gradient.y1 < gradientEnd.y1) {
            gradient.y1++
        } else if (gradient.y1 > gradientEnd.y1) {
            gradient.y1--
        }
        if (gradient.y2 < gradientEnd.y2) {
            gradient.y2++
        } else if (gradient.y2 > gradientEnd.y2) {
            gradient.y2--
        }
        if (gradient.y3 < gradientEnd.y3) {
            gradient.y3++
        } else if (gradient.y3 > gradientEnd.y3) {
            gradient.y3--
        }
        if ((gradient.x1 == gradientEnd.x1) && (gradient.x2 == gradientEnd.x2) && (gradient.x3 == gradientEnd.x3) && (gradient.y1 == gradientEnd.y1) && (gradient.y2 == gradientEnd.y2) && (gradient.y3 == gradientEnd.y3)) {
            clearTimeout(ooxx);
            if (gradientStatus == false) {
                gradientStatus = true;
            } else {
                gradientStatus = false;
            }
            gradientStatusGo();

        }
        activityFix.style.backgroundImage = `linear-gradient(49deg, rgba(${gradient.x1}, ${gradient.x2}, ${gradient.x3}, 1)0%, rgba(${gradient.y1}, ${gradient.y2}, ${gradient.y3}, 0.8)100%)`;
    }

    ooxx = window.setInterval(ooxxGradient, 40);

    function gradientStatusGo() {
        if (gradientStatus == false) {
            gradient = {
                x1: 114,
                x2: 183,
                x3: 255,
                y1: 255,
                y2: 210,
                y3: 163,
            }
            gradientEnd = {
                x1: 70,
                x2: 24,
                x3: 62,
                y1: 37,
                y2: 56,
                y3: 78,
            }
        } else {
            gradientEnd = {
                x1: 114,
                x2: 183,
                x3: 255,
                y1: 255,
                y2: 210,
                y3: 163,
            }
            gradient = {
                x1: 70,
                x2: 24,
                x3: 62,
                y1: 37,
                y2: 56,
                y3: 78,
            }
        }
        ooxx = window.setInterval(ooxxGradient, 40);
    }


}
window.addEventListener('load', indexInit);
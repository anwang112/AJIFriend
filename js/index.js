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
indexInit = () => {

    //取得當前螢幕寬度
    if (window.innerWidth) {
        winWidth = window.innerWidth;
    } else if ((document.body) && (document.body.clientWidth)) {
        winWidth = document.body.clientWidth;
    }

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
                    springHand.animate([{
                            transform: `rotate(0) translateX(0)`
                        },
                        {
                            transform: `rotate(-43deg) translateX(29%)`
                        },
                        {
                            transform: `rotate(0) translateX(0)`
                        }
                    ], {
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

            ooxxEyesGo(springEye[2], springEye[3]);
            ooxxEyesGo(springEye[4], springEye[5]);
        }
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
        }
        cupidLightstartId = requestAnimationFrame(cupidLightstart);

        //阿吉與春天對話開始
        SpringDialogWrap = indexAjiSpring.getElementsByClassName('cls-1')[0]; //春天對話框
        SpringDialogWord = indexAjiSpring.getElementsByClassName('cls-2')[0]; //春天對話文字

        AjiDialogWrap = indexAjiSpring.getElementsByClassName('cls-3')[0]; //阿吉對話框
        AjiDialogWord = indexAjiSpring.getElementsByClassName('cls-2')[1]; //阿吉對話文字

        SpringDialogTime = 0;
        SpringDialogGo = () => {
            SpringDialogTime += 1;
            if (SpringDialogTime == 10) {
                AjiDialogWrap.style.opacity = `0`;
                AjiDialogWord.style.opacity = `0`;
                SpringDialogWrap.style.opacity = `0`;
                SpringDialogWord.style.opacity = `0`;
                $id('AjiSpring').style.opacity = `1`;
            }
            if (SpringDialogTime == 30) {
                SpringDialogWrap.style.transition = `1s`;
                SpringDialogWord.style.transition = `1s`;
                SpringDialogWrap.style.opacity = `1`;
                SpringDialogWord.style.opacity = `1`;
            }
            if (SpringDialogTime == 200) {
                AjiDialogWrap.style.transition = `1s`;
                AjiDialogWord.style.transition = `1s`;
                SpringDialogWrap.style.opacity = `0`;
                SpringDialogWord.style.opacity = `0`;
                AjiDialogWrap.style.opacity = `1`;
                AjiDialogWord.style.opacity = `1`;
            }
            if (SpringDialogTime == 380) {
                SpringDialogWrap.style.opacity = `0`;
                SpringDialogWord.style.opacity = `0`;
                AjiDialogWrap.style.opacity = `0`;
                AjiDialogWord.style.opacity = `0`;
            }
            if (SpringDialogTime == 400) {
                AjiDialogWrap.style.opacity = `1`;
                AjiDialogWord.style.opacity = `1`;
                AjiDialogWord.innerHTML = `我就是<tspan x="0" y="32.10254">什麼都不懂啦</tspan>`;
            }
            if (SpringDialogTime == 650) {
                AjiDialogWrap.style.opacity = `0`;
                AjiDialogWord.style.opacity = `0`;
            }
            if (SpringDialogTime > 700) {
                AjiDialogWord.innerHTML = `大笨蛋
                <tspan xmlns="http://www.w3.org/2000/svg" x="0" y="32.10254">才能追妳這麼久</tspan>`;
                SpringDialogTime = 1;
            }
            // console.log(SpringDialog);
            SpringDialogId = requestAnimationFrame(SpringDialogGo);
        }
        SpringDialogId = requestAnimationFrame(SpringDialogGo);

        $id('createBtn').addEventListener('click', () => {
            $id('indexCreateRoleBox').style.display = 'flex';

        })
        $id('saveRoleBtn').addEventListener('click', () => {
            $id('indexCreateRoleBox').style.display = 'none';
            $id('createMemberScreen').style.display = 'flex';
        })


    }
    firstScreenFunction();



    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  第二屏slider
    secondScreenFunction = () => {
        const trojanList = document.getElementById('trojanList');
        const trojanItem = trojanList.getElementsByClassName('trojanItem');
        const carousel = trojanList.getElementsByClassName('carousel')[0];
        const trojanItemRolebox = document.getElementsByClassName('trojanItemRolebox');

        //百分比進度條
        // const circleOne = document.getElementById('circleOne');
        // const donutTitle = document.querySelector('.donut-title');

        // 放好人物
        ooxxGetRole($id('trojanItemRole01'), {
            animal: 1,
            color: '00aa99',
            eyes: 1,
            hat: 'hat1.png',
            clothes: 'clothes1.png',
        });
        ooxxGetRole($id('trojanItemRole02'), {
            animal: 2,
            color: '118899',
            eyes: 5,
            hat: 'hat2.png',
            clothes: 'clothes2.png',
        });
        ooxxGetRole($id('trojanItemRole03'), {
            animal: 4,
            color: 'aabbff',
            eyes: 4,
            hat: 'hat3.png',
            clothes: 'clothes3.png',
        });
        ooxxGetRole($id('trojanItemRole04'), {
            animal: 1,
            color: '880022',
            eyes: 3,
            hat: 'hat4.png',
            clothes: 'clothes4.png',
        });
        ooxxGetRole($id('trojanItemRole05'), {
            animal: 3,
            color: '2277cc',
            eyes: 1,
            hat: 'hat5.png',
            clothes: 'clothes5.png',
        });
        ooxxGetRole($id('trojanItemRole06'), {
            animal: 2,
            color: '4acc99',
            eyes: 2,
            hat: 'hat6.png',
            clothes: 'clothes6.png',
        });
        ooxxGetRole($id('trojanItemRole07'), {
            animal: 3,
            color: '123456',
            eyes: 4,
            hat: 'hat8.png',
            clothes: 'clothes7.png',
        });

        const circle = document.getElementById("circle");
        const showCircle = document.getElementById('showCircle');

        for (let i = 0; i < trojanItemRolebox.length; i++) {
            ooxxHide(trojanItemRolebox[i], 1);
        }
        // 公式
        rotate = 360 / trojanItem.length;
        transZ = winWidth / trojanItem.length * 1.8;
        if (winWidth >= 976) {
            transZ = 180;
        } else if (winWidth >= 768) {
            transZ = (winWidth / 2) / trojanItem.length * 2.2;
        } else {
            transZ = winWidth / trojanItem.length * 1.8;
        }
        let rotateValue = 0; //每次轉的方值
        let nowRole = 0; //目前角色
        for (let i = 0; i < trojanItem.length; i++) {
            trojanItem[i].style.transform = "rotateY(" + (i * rotate + rotateValue) + "deg) translateZ(" + transZ + "px)";
        }
        ooxxShow(trojanItemRolebox[0], 0.086);

        // rotateY(70deg) translateZ(94px) translateY(1%)
        //椅子動畫
        chair = document.getElementById('chair').getSVGDocument();
        //左手
        chairLeftHand = [
            chair.getElementsByClassName('cls-6')[0],
            chair.getElementsByClassName('cls-2')[3],
            chair.getElementsByClassName('cls-2')[2],
            chair.getElementsByClassName('cls-3')[1],
            chair.getElementsByClassName('cls-4')[1]
        ];
        chairLeftHand[0].style.transformBox = 'fill-box';
        chairLeftHand[0].style.transformOrigin = 'right bottom';
        //右手
        chairRightHand = [
            chair.getElementsByClassName('cls-5')[0],
            chair.getElementsByClassName('cls-2')[0],
            chair.getElementsByClassName('cls-3')[0],
            chair.getElementsByClassName('cls-2')[1],
            chair.getElementsByClassName('cls-4')[0]
        ];
        chairRightHand[0].style.transformBox = 'fill-box';
        chairRightHand[0].style.transformOrigin = 'left bottom';
        for (let i = 1; i < chairLeftHand.length; i++) {
            chairLeftHand[i].style.transition = '.8s';
            chairLeftHand[i].style.opacity = '0';
            chairRightHand[i].style.transition = '.8s';
            chairRightHand[i].style.opacity = '0';
        }

        //亂數人的資訊
        chairinfoArray = [{
                name: "lien",
                star: "射手座",
                hobby: "抓寶可夢"
            },
            {
                name: "An",
                star: "觸女座",
                hobby: "抓寶可夢"
            },
            {
                name: "ooxx",
                star: "雙魚座",
                hobby: "睡覺"
            },
            {
                name: "你好阿",
                star: "水瓶座",
                hobby: "奔跑"
            }
        ]

        //木馬轉轉開始  
        trojanItemGo = () => {
            ooxxHide(trojanItemRolebox[nowRole], 0.086); // 當前ㄉ人消失
            //失偵方式處裡讓人物消失
            for (let i = 0; i < trojanItemRolebox.length; i++) {
                // trojanItemRolebox[i].style.display = `none`;
                trojanItemRolebox[i].style.opacity = `0`;
            }
            rotateValue -= 360 / trojanItem.length; //角色轉過來
            nowRole += 1; //下一位
            switch (nowRole) {
                case 7: //角色超過7又從0開始
                    nowRole = 0;
                    break;
            }
            //全部轉起來
            for (let i = 0; i < trojanItem.length; i++) {
                trojanItem[i].style.transform = "rotateY(" + (i * rotate + rotateValue) + "deg) translateZ(" + transZ + "px)";
            }
            //下一位出現
            ooxxShow(trojanItemRolebox[nowRole], 0.086);

            //數值開始
            randValue = ooxxRandom(10, 100); // 取得默契職亂數
            endcircle = (255 / 100 * randValue);
            let value = 0;
            let circleValue = 255;
            circle.setAttribute("stroke-dashoffset", 255 + "%");
            showCircle.innerHTML = 0;
            cicrleGo = () => {
                value++;
                circleValue -= 2.55;
                circle.setAttribute("stroke-dashoffset", circleValue + "%");
                showCircle.innerHTML = value;
                circleGoId = requestAnimationFrame(cicrleGo);
                if ((value >= randValue) && (circleValue < endcircle)) {
                    cancelAnimationFrame(circleGoId);
                }
            }
            circleGoId = requestAnimationFrame(cicrleGo)
            // rotate(-20deg) translateX(15%)

            //牌子通通消失
            for (let i = 1; i < chairLeftHand.length; i++) {
                chairRightHand[i].style.transition = '.8';
                chairRightHand[i].style.opacity = '0';
            }

            switch (ooxxRandom(0, 1)) {
                case 0:
                    chairLeftHand[0].animate([{
                            transform: 'rotate(0deg) translateX(0%)'
                        },
                        {
                            transform: 'rotate(-20deg) translateX(15%)'
                        },
                        {
                            transform: 'rotate(0deg) translateX(0%)'
                        }
                    ], {
                        duration: 800,
                        // endDelay: 1000,
                    });
                    for (let i = 1; i < chairLeftHand.length; i++) {
                        chairLeftHand[i].animate([{
                                opacity: '0'
                            },
                            {
                                opacity: '1'
                            },
                            {
                                opacity: '0'
                            },
                        ], {
                            duration: 3000,
                            delay: 500
                        });
                    }
                    break;
                case 1:
                    chairRightHand[0].animate([{
                            transform: 'rotate(0deg) translateX(0%)'
                        },
                        {
                            transform: 'rotate(15deg) translateX(-10%)'
                        },
                        {
                            transform: 'rotate(0deg) translateX(0%)'
                        }
                    ], {
                        duration: 800,
                        // endDelay: 1000,
                    });
                    for (let i = 1; i < chairRightHand.length; i++) {
                        chairRightHand[i].animate([{
                                opacity: '0'
                            },
                            {
                                opacity: '1'
                            },
                            {
                                opacity: '0'
                            },
                        ], {
                            duration: 3000,
                            delay: 500
                        });
                    }
                    break;
            }
            if (winWidth > 768) {
                $id('chairName').innerHTML = `${chairinfoArray[ooxxRandom(0, 3)].name}`;
                $id('chairstar').innerHTML = `${chairinfoArray[ooxxRandom(0, 3)].star}`;
                $id('chairHobby').innerHTML = `${chairinfoArray[ooxxRandom(0, 3)].hobby}`;
            }

        }
        trojanItemId = setInterval(trojanItemGo, 3500);

        //改變螢幕寬度
        changeScreen = () => {
            if (window.innerWidth) {
                winWidth = window.innerWidth;
            } else if ((document.body) && (document.body.clientWidth)) {
                winWidth = document.body.clientWidth;
            }
            clearInterval(trojanItemId);
            secondScreenFunction();
        }
    }
    secondScreenFunction();



    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 第三部分
    thirdScreenFunctionn = () => {
        shop = document.getElementById('shop').getSVGDocument();
        shopLight = shop.getElementsByClassName('cls-4'); //0-3是電燈
        modelLight = document.getElementById('modelLight');

        for (let i = 0; i < shopLight.length - 1; i++) {
            shopLight[i].style.transformOrigin = `left bottom`;
            shopLight[i].style.transformBox = `fill-box`;
            shopLight[i].style.transition = `.8s`;
        }
        ooxxGetRole($id('indexModel'), {
            animal: 1,
            color: '50423B',
            eyes: 1,
            hat: `hat${ooxxRandom(1, 15)}.png`,
            clothes: `clothes${ooxxRandom(1, 15)}.png`,
        })
        lightOpen = 0;

        shopLight[1].style.transform = `skewX(20deg)`; //不照
        shopLight[2].style.transform = `skewX(-25deg) translateX(-7%)`; //不照
        shopLight[3].style.transform = `skewX(23deg)`; //不照
        shopLight[0].style.transform = `skewX(-20deg) translateX(-2%)`; //不照
        modelLight.style.boxShadow = `0px 0px 65px 25px Transparent`;
        // 電燈動畫開始
        shopLightGo = () => {
            lightOpen++;
            if (lightOpen < 150) {
                shopLight[1].style.transform = `skewX(20deg)`; //不照
                shopLight[2].style.transform = `skewX(-25deg) translateX(-7%)`; //不照
                shopLight[3].style.transform = `skewX(23deg)`; //不照
                shopLight[0].style.transform = `skewX(-20deg) translateX(-2%)`; //不照
                modelLight.style.boxShadow = `0px 0px 65px 25px Transparent`;
            } else if (lightOpen > 150) {
                shopLight[1].style.transform = `skewX(0)`;
                shopLight[2].style.transform = `skewX(0) translateX(0)`;
                shopLight[3].style.transform = `skewX(0)`;
                shopLight[0].style.transform = `skewX(0) translateX(0)`;
                modelLight.style.boxShadow = `0px -45px 120px 65px white`;
                if (lightOpen == 188) {
                    ooxxChangeHat($id('indexModel'), ooxxRandom(1, 2));
                    ooxxChangeClothes($id('indexModel'), ooxxRandom(1, 3));
                }
                if (lightOpen > 300) {
                    lightOpen = 0;
                }
            }
            shopLightId = requestAnimationFrame(shopLightGo);
        }
        shopLightId = requestAnimationFrame(shopLightGo);

    }
    thirdScreenFunctionn();
    lightChangeScreen = () => {
        $id('shop').addEventListener('load', () => {
            shop = document.getElementById('shop').getSVGDocument();
            shopLight = shop.getElementsByClassName('cls-4'); //0-3是電燈
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




        cancelAnimationFrame(shopLightId);
        thirdScreenFunctionn();
    }



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
        flash = document.getElementById('flash'); //閃光燈物件
        lineStory = document.getElementById('lineStory'); //線條svg

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
                PhotoInfo.style.right = `-6.3%`;
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
                createKindItem[i].style.color = '#000000';
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
            var createKindAll = document.getElementsByClassName("createKindAll")[0];
            if (i == 0) {
                createKindAll.style.borderRadius = "0 10px 10px 10px";
            } else {
                createKindAll.style.borderRadius = "10px 10px 10px 10px";
            }
            e.target.style.background = 'rgba(255,255,255,0.7)';
            e.target.style.color = '#000000';
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
        }
        return color;
    }
    ooxxChangeColor = (...changeColorArray) => {
        let object = changeColorArray[0].getSVGDocument();

        let colorValue = ooxxGetColor16(changeColorArray[1], changeColorArray[2], changeColorArray[3]);
        insertColor = object.getElementsByClassName('cls-2');
        for (let i = 0; i < insertColor.length; i++) {
            insertColor[i].style.fill = `${colorValue}`;
        }
    }
    ooxxGetRole(myRole, {
        animal: roleObject.animal,
        color: ooxxGetColor16(roleObject.rColor, roleObject.gColor, roleObject.bColor),
        eyes: roleObject.eyes,
    });
    // ooxxChangeColor($id('myRole').getElementsByClassName('bodySvg')[0], roleObject.rColor, roleObject.gColor, roleObject.bColor);
    ooxxChangeAnimal = (...changeAnimalArray) => {
        let object = changeAnimalArray[0];
        let animalValue = changeAnimalArray[1];
        object.innerHTML = `<embed class="bodySvg" src="images/roleImages/body${animalValue}.svg" style="display:block;" />`;
        let scaleValue = 0;
        object.getElementsByClassName('bodySvg')[0].style.transition = `.8s`;
        animalGo = () => {
            if (scaleValue <= 1) {
                scaleValue += 0.06;
                object.getElementsByClassName('bodySvg')[0].style.transform = `scale(${scaleValue})`;
                animalId = requestAnimationFrame(animalGo);
            } else if (scaleValue >= 1.15) {
                scaleValue = 1;
                object.getElementsByClassName('bodySvg')[0].style.transform = `scale(${scaleValue})`;
                cancelAnimationFrame(animalId);
            }
        }
        animalId = requestAnimationFrame(animalGo);
    }
    //換角色
    nowRole = $id('myRole').getElementsByClassName('role')[0];
    animalKindItem = $id('animalKindList').getElementsByTagName('li');
    for (let i = 0; i < animalKindItem.length; i++) {
        animalKindItem[i].addEventListener('click', (e) => {
            nowRole.innerHTML = '';
            ooxxChangeAnimal(nowRole, e.currentTarget.value);
            // ooxxChangeColor($id('myRole').getElementsByClassName('bodySvg')[0], rColor, gColor, bColor);
            $id('myRole').getElementsByClassName('bodySvg')[0].addEventListener('load', () => {
                ooxxChangeColor($id('myRole').getElementsByClassName('bodySvg')[0], roleObject.rColor, roleObject.gColor, roleObject.bColor);
            });
            roleObject.animal = e.currentTarget.value;
        })
    }

    ooxxChangeEyes = (...changeEyesArray) => {
        let object = changeEyesArray[0];
        let eyesValue = changeEyesArray[1];
        object.innerHTML = `<embed class="roleEyes" src="images/roleImages/eyes${eyesValue}.svg" style="display:block;" />`;
        let scaleValue = 0.5;
        object.getElementsByClassName('roleEyes')[0].style.transition = `.8s`;
        eyesIGo = () => {
            if (scaleValue <= 1) {
                scaleValue += 0.06;
                object.getElementsByClassName('roleEyes')[0].style.transform = `scale(${scaleValue})`;
                eyesId = requestAnimationFrame(eyesIGo);
            } else if (scaleValue >= 1.25) {
                scaleValue = 1;
                object.getElementsByClassName('roleEyes')[0].style.transform = `scale(${scaleValue})`;
                cancelAnimationFrame(animalId);
            }
        }
        eyesId = requestAnimationFrame(eyesIGo);

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
            colorMouseStatus = true;
            if (colorMouseStatus == true) {
                e.target.style.cursor = `grabbing`;
            }
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
                }
            }
            xhr.open("Post", "checkMember.php", true);
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.send("checkInfo=" + JSON.stringify(ooxxValue));
        }

        $id('memId').addEventListener('keydown', () => {
            memIdKeyStatus = true;
            if (memIdKeyStatus == true) {
                $id('memId').addEventListener('keyup', () => {
                    checkMemberData({
                        memId: $id('memId').value,
                        check: 'memId',
                    });
                    $id('getCheckmemId').innerHTML = '可以使用';
                    $id('getCheckmemId').style.color = 'green';
                    $id('createMemberBtn').disabled = false;
                });
            }
        });

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
                $('#alertText').text('不能唷!');
                $('.alertWrap').show();
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
                $('#alertText').text('註冊成功!');
                $('.alertWrap').show();
                $id('createMemberScreen').display = 'none';
                sendForm($id('memId').value, $id('memPsw').value);
                // 更新登入者面板
                document.getElementsByClassName("loginContent")[0].style.display = "";

                ooxxGetHead($id("loginHead"), {
                    animal: storage.getItem("animal"),
                    color: storage.getItem("mColor"),
                    eyes: storage.getItem("eye"),
                });
                $id("memName").innerText = $id('mName').value;
                $id("memMJ").innerText = 0;

                $id('createMemberScreen').style.display = 'none';
            }
            createxhr.open("Post", "setUpMember.php", true);
            createxhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            createxhr.send("createRoleData=" + JSON.stringify(createRoleData));
        })
        $id('createMemberScreenCloseBtn').addEventListener('click', () => {
            $id('createMemberScreen').style.display = 'none';
        })
    }
    createMember();






    // 髒髒ㄉ背景漸層扣
    // activityFix = document.getElementsByClassName('firstScreenBg')[0];
    // gradientStatus = false;
    // gradient = {
    //     x1: 114,
    //     x2: 183,
    //     x3: 255,
    //     y1: 255,
    //     y2: 210,
    //     y3: 163,
    // }
    // gradientEnd = {
    //     x1: 255,
    //     x2: 240,
    //     x3: 237,
    //     y1: 204,
    //     y2: 231,
    //     y3: 255,
    // }
    // // gradientEnd = {
    // //     x1: 70,
    // //     x2: 24,
    // //     x3: 62,
    // //     y1: 37,
    // //     y2: 56,
    // //     y3: 78,
    // // }
    // activityFix.style.backgroundImage = `linear-gradient(49deg, rgba(${gradient.x1}, ${gradient.x2}, ${gradient.x3}, 1)0%, rgba(${gradient.y1}, ${gradient.y2}, ${gradient.y3}, 0.8)100%)`;

    // ooxxGradient = () => {
    //     if (gradient.x1 < gradientEnd.x1) {
    //         gradient.x1++
    //     } else if (gradient.x1 > gradientEnd.x1) {
    //         gradient.x1--
    //     }
    //     if (gradient.x2 < gradientEnd.x2) {
    //         gradient.x2++
    //     } else if (gradient.x2 > gradientEnd.x2) {
    //         gradient.x2--
    //     }
    //     if (gradient.x3 < gradientEnd.x3) {
    //         gradient.x3++
    //     } else if (gradient.x3 > gradientEnd.x3) {
    //         gradient.x3--
    //     }
    //     if (gradient.y1 < gradientEnd.y1) {
    //         gradient.y1++
    //     } else if (gradient.y1 > gradientEnd.y1) {
    //         gradient.y1--
    //     }
    //     if (gradient.y2 < gradientEnd.y2) {
    //         gradient.y2++
    //     } else if (gradient.y2 > gradientEnd.y2) {
    //         gradient.y2--
    //     }
    //     if (gradient.y3 < gradientEnd.y3) {
    //         gradient.y3++
    //     } else if (gradient.y3 > gradientEnd.y3) {
    //         gradient.y3--
    //     }
    //     if ((gradient.x1 == gradientEnd.x1) && (gradient.x2 == gradientEnd.x2) && (gradient.x3 == gradientEnd.x3) && (gradient.y1 == gradientEnd.y1) && (gradient.y2 == gradientEnd.y2) && (gradient.y3 == gradientEnd.y3)) {
    //         clearTimeout(ooxx);
    //         if (gradientStatus == false) {
    //             gradientStatus = true;
    //         } else {
    //             gradientStatus = false;
    //         }
    //         gradientStatusGo();

    //     }
    //     activityFix.style.backgroundImage = `linear-gradient(49deg, rgba(${gradient.x1}, ${gradient.x2}, ${gradient.x3}, 1)0%, rgba(${gradient.y1}, ${gradient.y2}, ${gradient.y3}, 0.8)100%)`;
    // }

    // ooxx = window.setInterval(ooxxGradient, 40);

    // function gradientStatusGo() {
    //     if (gradientStatus == false) {
    //         gradient = {
    //             x1: 114,
    //             x2: 183,
    //             x3: 255,
    //             y1: 255,
    //             y2: 210,
    //             y3: 163,
    //         }
    //         gradientEnd = {
    //             x1: 255,
    //             x2: 240,
    //             x3: 237,
    //             y1: 204,
    //             y2: 231,
    //             y3: 255,
    //         }
    //     } else {
    //         gradientEnd = {
    //             x1: 114,
    //             x2: 183,
    //             x3: 255,
    //             y1: 255,
    //             y2: 210,
    //             y3: 163,
    //         }
    //         gradient = {
    //             x1: 255,
    //             x2: 240,
    //             x3: 237,
    //             y1: 204,
    //             y2: 231,
    //             y3: 255,
    //         }
    //     }
    //     ooxx = window.setInterval(ooxxGradient, 40);
    // }


    window.addEventListener('resize', changeScreen);
    window.addEventListener('resize', lightChangeScreen);
    window.addEventListener("scroll", scrollFourthScreen);
}


// 走道測試區 可是效果不好
// window.addEventListener("scroll", function (e) {
//     let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
//     console.log(scrollPercentage);
//     sssss01.style.transition = `5s`;
//     sssss02.style.transition = `5s`;
//     ooooo = scrollPercentage * 100;
//     if (ooooo > 1) {
//         // ooooo = scrollPercentage * 100;
//         ooooo1 = ooooo + 1;
//         ooooo2 = ooooo;
//         // console.log(ooooo);
//         sssss01.setAttribute('offset', `${ooooo2}0%`);
//         sssss02.setAttribute('offset', `${ooooo1}0%`);
//     } else {
//         sssss01.setAttribute('offset', `2%`);
//         sssss02.setAttribute('offset', `7%`);
//     }
// });




//雜亂程式區
/*
        //建立角色
        KindList = document.getElementById('KindList');
        KindItem = KindList.getElementsByTagName('li');
        role = document.getElementById('role');

        // 選身體
        changeKind = (e) => {
            role.innerHTML = "";
            switch (e.currentTarget.id) {
                case 'bodyBear':
                    role.innerHTML = `<embed id="bodySvg" src="images/indexImages/indexBear.svg" style="display:block;" />`;
                    break;
                case 'bodyCat':
                    role.innerHTML = `<embed id="bodySvg" src="images/indexImages/indexCat.svg" style="display:block;" />`;
                    break;
                case 'bodyRabbit':
                    role.innerHTML = `<embed id="bodySvg" src="images/indexImages/indexRabbit.svg" style="display:block;" />`;
                    break;
                case 'bodyDog':
                    role.innerHTML = `<embed id="bodySvg" src="images/indexImages/indexDog.svg" style="display:block;" />`;
                    break;
            }
            bodySvg = document.getElementById("bodySvg");
            bodySvg.addEventListener('load', () => {
                nowColor(rRangValue, gRangValue, bRangValue, bodySvg);
            })

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


        for (let i = 0; i < colorItem.length; i++) {
            colorItem[i].addEventListener('mousedown', (e) => {
                colorMouseStatus = true;
                if (colorMouseStatus == true) {
                    e.target.style.cursor = `grabbing`;
                }

            });
            colorItem[i].addEventListener('mousemove', (e) => {

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
                    }
                    nowColor(rRangValue, gRangValue, bRangValue, bodySvg);
                    console.log(rRangValue, gRangValue, bRangValue);

                } else {
                    e.target.style.cursor = `grab`;
                }
            });
            colorItem[i].addEventListener('mouseup', (e) => {
                colorMouseStatus = false;
                e.target.style.cursor = `grab`;
            });

        }

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
        */


//方法2
window.onload = function () {
    setTimeout(() => {
        $(".load").fadeOut();

    }, 2000);
    setTimeout(() => {
        indexInit();

    }, 2000);

};
var demo = {
        score: 0
    },
    scoreDisplay = document.getElementById("scoreDisplay1");

//create a tween that changes the value of the score property of the demo object from 0 to 100 over the course of 20 seconds.
var tween = TweenLite.to(demo, 1.8, {
    score: 100,
    onUpdate: showScore
})

//each time the tween updates this function will be called.
function showScore() {
    scoreDisplay.innerHTML = demo.score.toFixed(0)+'%';
}
// window.addEventListener('load', indexInit);
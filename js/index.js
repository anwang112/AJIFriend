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
    }
    else if ((document.body) && (document.body.clientWidth)) {
        winWidth = document.body.clientWidth;
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    //第一部分
    firstScreenFunction = () => {
        //邱比特射箭
        var arrowSnap = Snap('#arrow');
        // console.log(arrowSnap);
        // var arrowSvg = arrowSnap.paper.path({ d: "M227.77176,240.7343l-99.193,29.323s3.755-7.04966-1.13358-7.84448-13.95248,13.56254-13.95248,13.56254,12.23794,7.60718,15.34584,7.09112,5.53565-5.7388,3.52826-8.61856l-2.00738-2.87976,97.86573-27.496Z", fill: '#a09d9d' });
        var arrowSvg = arrowSnap.select('path');

        // console.log(arrowSvg);
        arrow = document.getElementById('arrow');
        ooo = arrow.getElementsByClassName('ooo')[0];
        ooo.style.transition = `.8s`;


        // animate01 = () => {
        //     arrow.style.right = '-13%';
        //     if (arrow.style.right == `-13`) {
        //         animate02()
        //     }
        // }
        arrow.style.top = '53%';
        arrow.style.right = '25%';

        setTimeout(function () {
            arrowSvg.animate({ d: "M92.71,7.27L92.71,7.27c-9.71-9.69-25.46-9.69-35.18,0L50,14.79l-7.54-7.52C32.75-2.42,17-2.42,7.29,7.27v0 c-9.71,9.69-9.71,25.41,0,35.1L50,85l42.71-42.63C102.43,32.68,102.43,16.96,92.71,7.27z", fill: 'pink' }, 1000, mina.easeout(), function () {
                arrow.style.top = '45%'
                ooo.style.transform = `scale(3) translate(2%, 0%)`;

            });
        }, 1700);


        //叫出創建角色燈箱
        ooo.addEventListener('click', () => {
            ooxxLightBox($id('indexRoleMask'), $id('indexCreateRoleBox'), $id('indexCreateCloseBtn'));
        })
    }
    firstScreenFunction();

    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  第二屏slider
    secondScreenFunction = () => {
        const trojanList = document.getElementById('trojanList');
        const trojanItem = trojanList.getElementsByClassName('trojanItem');
        const carousel = trojanList.getElementsByClassName('carousel')[0];
        const trojanItemRolebox = document.getElementsByClassName('trojanItemRolebox');

        //百分比進度條
        const circleOne = document.getElementById('circleOne');
        const donutTitle = document.querySelector('.donut-title');

        // 放好人物
        ooxxGetRole($id('trojanItemRole01'), { animal: 1, color: '00aa99', eyes: 1, hat: 1, clothes: 1, });
        ooxxGetRole($id('trojanItemRole02'), { animal: 2, color: '118899', eyes: 5, hat: 2, clothes: 3, });
        ooxxGetRole($id('trojanItemRole03'), { animal: 4, color: 'aabbff', eyes: 4, hat: 1, clothes: 1, });
        ooxxGetRole($id('trojanItemRole04'), { animal: 1, color: '44ff22', eyes: 3, hat: 2, clothes: 2, });
        ooxxGetRole($id('trojanItemRole05'), { animal: 3, color: '2277cc', eyes: 1, hat: 2, clothes: 1, });
        ooxxGetRole($id('trojanItemRole06'), { animal: 2, color: '4acc99', eyes: 2, hat: 2, clothes: 2, });
        ooxxGetRole($id('trojanItemRole07'), { animal: 3, color: '123456', eyes: 4, hat: 1, clothes: 3, });

        const circle = document.getElementById("circle");
        const showCircle = document.getElementById('showCircle');

        for (let i = 0; i < trojanItemRolebox.length; i++) {
            ooxxHide(trojanItemRolebox[i], 1);
        }
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
        let rotateValue = 0;  //每次轉的方值
        let nowRole = 0;  //目前角色
        for (let i = 0; i < trojanItem.length; i++) {
            trojanItem[i].style.transform = "rotateY(" + (i * rotate + rotateValue) + "deg) translateZ(" + transZ + "px)";
        }
        ooxxShow(trojanItemRolebox[0], 0.086);

        //木馬轉轉開始  
        trojanItemGo = () => {
            ooxxHide(trojanItemRolebox[nowRole], 0.086);// 當前ㄉ人消失
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
                // circle.setAttribute("stroke-dashoffset", 255 + "%");
                // showCircle.innerHTML = 0;
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
        }

        trojanItemId = setInterval(trojanItemGo, 3000);

        //改變螢幕寬度
        changeScreen = () => {
            if (window.innerWidth) {
                winWidth = window.innerWidth;
            }
            else if ((document.body) && (document.body.clientWidth)) {
                winWidth = document.body.clientWidth;
            }
            clearInterval(trojanItemId);
            secondScreenFunction();
        }
    }
    secondScreenFunction();



    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    // 第三部分

    thirdScreenFunctionn = () => {
        shop = document.getElementById('shop').getSVGDocument();
        shopLight = shop.getElementsByClassName('cls-4');  //0-3是電燈
        modelLight = document.getElementById('modelLight');

        lightChangeScreen = () => {
            shopLight[1].style.transform = `skewX(20deg)`; //不照
            shopLight[2].style.transform = `skewX(-25deg) translateX(-7%)`; //不照
            shopLight[3].style.transform = `skewX(23deg)`; //不照
            shopLight[0].style.transform = `skewX(-20deg) translateX(-2%)`; //不照
            modelLight.style.boxShadow = `0px 0px 65px 25px Transparent`;
            thirdScreenFunctionn();
            cancelAnimationFrame(shopLightId);
        }

        for (let i = 0; i < shopLight.length - 1; i++) {
            shopLight[i].style.transformOrigin = `left bottom`;
            shopLight[i].style.transformBox = `fill-box`;
            shopLight[i].style.transition = `.8s`;
        }
        ooxxGetRole($id('indexModel'), {
            animal: 1,
            color: '50423B',
            eyes: 1,
            hat: ooxxRandom(1, 2),
            clothes: ooxxRandom(1, 3),
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

            if (lightOpen < 300) {
                shopLight[1].style.transform = `skewX(20deg)`; //不照
                shopLight[2].style.transform = `skewX(-25deg) translateX(-7%)`; //不照
                shopLight[3].style.transform = `skewX(23deg)`; //不照
                shopLight[0].style.transform = `skewX(-20deg) translateX(-2%)`; //不照
                modelLight.style.boxShadow = `0px 0px 65px 25px Transparent`;
            } else if (lightOpen > 300) {
                shopLight[1].style.transform = `skewX(0)`;
                shopLight[2].style.transform = `skewX(0) translateX(0)`;
                shopLight[3].style.transform = `skewX(0)`;
                shopLight[0].style.transform = `skewX(0) translateX(0)`;
                modelLight.style.boxShadow = `0px -45px 120px 65px white`;
                if (lightOpen == 333) {

                    ooxxChangeHat($id('indexModel'), ooxxRandom(1, 2));
                    ooxxChangeClothes($id('indexModel'), ooxxRandom(1, 3));

                }
                if (lightOpen > 600) {
                    lightOpen = 0;
                }
            }
            shopLightId = requestAnimationFrame(shopLightGo);
        }
        shopLightId = requestAnimationFrame(shopLightGo);
    }
    thirdScreenFunctionn();


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
        // var indexPhotoPaper = Snap('#indexPhotoPaper');
        // var paperSvg = indexPhotoPaper.select('.cls-1');


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

    /////////////////////////////////////////////////////////////////////////////////////////////////////////






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







    // 背景漸層
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


    window.addEventListener('resize', changeScreen);
    window.addEventListener('resize', lightChangeScreen);
    window.addEventListener("scroll", scrollFourthScreen);
}
window.addEventListener('load', indexInit);
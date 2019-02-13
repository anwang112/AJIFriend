indexInit = () => {

    //取得當前螢幕寬度
    if (window.innerWidth) {
        winWidth = window.innerWidth;
    }
    else if ((document.body) && (document.body.clientWidth)) {
        winWidth = document.body.clientWidth;
    }


    changeScreen = () => {
        if (window.innerWidth) {
            winWidth = window.innerWidth;
        }
        else if ((document.body) && (document.body.clientWidth)) {
            winWidth = document.body.clientWidth;
        }
        trojanItemGo();
    }
    window.addEventListener('resize', changeScreen);

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

    stage = document.getElementsByClassName('secondScreenSlider')[0];
    stage.addEventListener('click', (e) => {
        yyy -= 360 / trojanItem.length;
        for (let i = 0; i < trojanItem.length; i++) {
            trojanItem[i].style.transform = "rotateY(" + (i * rotate + yyy) + "deg) translateZ(" + transZ + "px)";
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
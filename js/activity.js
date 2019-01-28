activityInit = () => {

    // slider輪播
    const activitySlider = document.getElementById('activitySlider');
    const sliderBus = activitySlider.getElementsByTagName('li');
    const sliderImg = document.getElementsByClassName('sliderImg');
    for (let i = 0; i < sliderBus.length; i++) {
        sliderBus[i].style.transform = 'translateX(-' + i * 2 + '00%)';
    }

    //輪胎轉轉
    sliderOO = document.getElementsByClassName('cls-1');

    nowTransform = [];
    sliderCount = 100;
    sliderBusSvg = document.getElementsByClassName('activityBus');

    function busGoGo() {
        for (let i = 0; i <= 6; i += 3) {
            sliderOO[i + 1].classList.add("activityOO");
            sliderOO[i + 2].classList.add("activityOO");
        }

        for (let i = 0; i < sliderBus.length; i++) {
            oldTransform = sliderBus[i].style.transform;
            nowTransform[i] = oldTransform.substring(oldTransform.indexOf("(") + 1, oldTransform.indexOf("%"));
            if (nowTransform[i] >= 200) {
                nowTransform[i] = '-200';
            } else {
                nowTransform[i] = parseInt(nowTransform[i]) + 200;
            }
            sliderBus[i].style.transform = `translateX(${nowTransform[i]}%)`;

            if (sliderBus[i].style.transform == `translateX(-200%)`) {
                sliderBusSvg[i].style.opacity = `0`;
                sliderImg[i].style.opacity = `0`;
            } else {
                sliderBusSvg[i].style.opacity = `1`;
                sliderImg[i].style.opacity = `1`;
            }
        }

        rotate = 0;
        sliderRotate = window.setInterval(() => {
            rotate += 3;
            // console.log(rotate);
            if (rotate > 800) {
                clearInterval(sliderRotate);
                rotate = 0;
            }
            for (let i = 0; i <= 6; i += 3) {
                // sliderOO[i + 1].classList.remove("activityOO");
                // sliderOO[i + 2].classList.remove("activityOO");
                sliderOO[i + 1].style.transform = `rotate(${rotate}deg)`
                sliderOO[i + 2].style.transform = `rotate(${rotate}deg)`
            }
        }, 10)
        // clearInterval(sliderRotate);
    }

    busGo = window.setInterval(busGoGo,4000);

    //輪播摸到停止一下
    activityBus = document.getElementsByClassName('activityBus');
    for (let i = 0; i < activityBus.length; i++) {
        activityBus[i].addEventListener('mouseenter', stopSloder);
    }
    for (let i = 0; i < activityBus.length; i++) {
        activityBus[i].addEventListener('mouseleave', startSloder);
    }
    function stopSloder() {
        clearInterval(busGo);
    }
    function startSloder() {
        busGo = window.setInterval(busGoGo,4000);
    }


    //活動燈箱
    const imgItem = document.getElementsByClassName('activityEventItem');
    const imgBox = document.getElementById('activityEventDetails');
    const hideEventDetails = document.getElementById('hideEventDetails');
    // 活動列表
    const eventList = document.getElementsByClassName('eventList')[0];
    const eventItem = eventList.getElementsByTagName('li');
    opacity = 0; //透明度
    showhideStatus = false;  //判斷是否要啟動燈箱
    for (let i = 0; i < eventItem.length; i++) {
        eventItem[i].addEventListener("click", showImgBox, false);
        eventItem[i].value = i;
    }
    function showImgBox() {
        imgBox.style.display = 'block';
        hideEventDetails.style.display = 'block';
        if ((showhideStatus == false) && (imgBox.style.opacity == 0)) {
            imgBoxShow = setInterval(show, 50);
        }
    }
    function show() {
        opacity += 0.16;
        imgBox.style.opacity = opacity;
        if (opacity > 1) {
            opacity = 1;
            imgBox.style.opacity = 1;
            showhideStatus = true;
            clearTimeout(imgBoxShow);
        }
    }
    hideEventDetails.addEventListener('click', () => {
        hideEventDetails.style.display = 'none';
        if ((showhideStatus == true) && (imgBox.style.opacity == 1)) {
            imgBoxHide = setInterval(hide, 20);
        }
    })
    function hide() {
        opacity -= 0.16;
        imgBox.style.opacity = opacity;
        if (opacity < 0) {
            imgBox.style.opacity = 0;
            clearTimeout(imgBoxHide);
            imgBox.style.display = 'none';
            showhideStatus = false;
        }
    }

    // 發起活動燈箱打開
    const holdBtn = document.getElementById("holdBtn");
    const hideHoldactivity = document.getElementById("hideHoldactivity");
    const holdactivity = document.getElementById("holdactivity");
    holdStatus = false;
    hideHoldactivity.style.opacity = `0`;
    hodeOpacity = 0;
    holdBtn.addEventListener('click', () => {
        holdactivity.style.display = 'block';
        hideHoldactivity.style.display = 'block';
        if ((holdStatus == false) && (hideHoldactivity.style.opacity == 0)) {
            Hold = setInterval(() => {
                hodeOpacity += 0.16;
                holdactivity.style.opacity = hodeOpacity;
                if (hodeOpacity > 1) {
                    hodeOpacity = 1;
                    holdactivity.style.opacity = 1;
                    holdStatus = true;
                    clearTimeout(Hold);
                }
            }, 50);
        }
    });
    hideHoldactivity.addEventListener('click', () => {
        hideHoldactivity.style.display = 'none';
        if ((holdStatus == true) && (holdactivity.style.opacity == 1)) {
            holdactivityHide = setInterval(() => {
                hodeOpacity -= 0.16;
                holdactivity.style.opacity = opacity;
                if (hodeOpacity < 0) {
                    holdactivity.style.opacity = 0;
                    clearTimeout(holdactivityHide);
                    holdactivity.style.display = 'none';
                    holdStatus = false;
                }
            }, 20);
        }
    })


    // 留言板
    localSaveBtn = document.getElementById("localSaveBtn");
    message = document.getElementById("message");
    activityEventMessage = document.getElementsByClassName("activityEventMessage")[0];
    // listItemBtn = cartList.getElementsByTagName('button');
    // clearCart = document.getElementById("clearCart");
    cartArray = [];
    cartCount = 0;
    //事件添加
    localSaveBtn.addEventListener("click", addCart, false);
    // clearCart.addEventListener("click", clearCartAll, false);



    if (localStorage.getItem('carts') === null) {
        var cartArray = [];
        NowcartObject = {
            name: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`
        }
        cartArray[0] = NowcartObject;
        localStorage.setItem('carts', JSON.stringify(cartArray));
    } else {
        var cartArray = JSON.parse(localStorage.getItem('carts'));
    }
    // localStorage.clear('carts');Lorem ipsum dolor sit amet consectetur adipisicing elit.
    // cartArray[0] = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`;
    showCart();
    function addCart(e) {
        e.preventDefault();
        cartObject = {
            name: message.value
        }

        cartArray[cartArray.length] = cartObject;



        cartJson = JSON.stringify(cartArray);
        localStorage.setItem('carts', cartJson);

        message.value = '';
        showCart();
    }


    function showCart() {
        cartArray = JSON.parse(localStorage.getItem('carts'));
        // console.log(getStringJson);
        activityEventMessage.innerHTML = '';


        for (let x in cartArray) {
            if (cartArray[x] !== null) {
                // activityEventMessage.innerHTML += `<li value = ${x}>
                //     <span>${cartArray[x].name}</span>
                //     </li>`;

                activityEventMessage.innerHTML += `<li>
                <div class="messageImg">
                    <img src="https://fakeimg.pl/350x350/?text=World&font=lobster" alt="messageImg">
                </div>
                <p>${cartArray[x].name}</p>
            </li>`

                // for (let i = 0; i < listItemBtn.length; i++) {
                //     listItemBtn[i].onclick = removeItem;
                // }
            }
        }
    }

    // 上傳活動圖
    loadfile = document.getElementById('loadfile');
    getimg = document.getElementById('getimg');
    loadfile.addEventListener('change', () => {
        var file = loadfile.files[0];
        var reader = new FileReader;
        reader.onload = function (e) {
            getimg.src = e.target.result;
        };
        reader.readAsDataURL(file);
    })

    // 背景漸層
    activityFix = document.getElementsByClassName('activityFix')[0];

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

window.addEventListener('load', activityInit);





















// localStorage.removeItem('carts');
// window.location.reload();



    // activityBusArray = [];
    // activityBus = document.getElementsByClassName('activityBus');
    // for (let i = 0; i < activityBus.length; i++) {
    //     activityBusArray[i] = activityBus[i].getSVGDocument().getElementsByClassName('cls-1');
    // }

    // for (let i = 0; i < activityBusArray.length; i++) {
    //     for (let x = 1; x < activityBusArray.length; x++) {
    //         activityBusArray[i][x].style.transformOrigin = `center`;
    //         activityBusArray[i][x].style.transformBox = `fill-box`;
    //     }
    // }


    // BusOO[0][1].style.transformOrigin = `center`;
    // BusOO[0][1].style.transformBox = `fill-box`;
    // BusOO[0][2].style.transformOrigin = `center`;
    // BusOO[0][2].style.transformBox = `fill-box`;

    // BusOO[1][1].style.transformOrigin = `center`;
    // BusOO[1][1].style.transformBox = `fill-box`;
    // BusOO[1][2].style.transformOrigin = `center`;
    // BusOO[1][2].style.transformBox = `fill-box`;

    // BusOO[2][1].style.transformOrigin = `center`;
    // BusOO[2][1].style.transformBox = `fill-box`;
    // BusOO[2][2].style.transformOrigin = `center`;
    // BusOO[2][2].style.transformBox = `fill-box`;





    // turn = 0;
    // activityBusGoGo = window.setInterval(() => {
    //     turn++;
    //     for (let i = 0; i < activityBusArray.length; i++) {
    //         for (let x = 1; x < activityBusArray.length; x++) {
    //             activityBusArray[i][x].style.transform = `rotate(${turn}deg)`;
    //         }
    //     }
    // }, 5);


    //slider
    // const activitySlider = document.getElementById('activitySlider');
    // const activityItem = activitySlider.getElementsByTagName('li');
    // var SliderCount = 0;
    // //每ㄍ車車都位移
    // for (let i = 0; i < activityItem.length; i++) {
    //     activityItem[i].style.transform = 'translateX(-' + i + '00%)';
    // }
    // //輪播開始
    // activitySliderGoGo = window.setInterval(() => {
    //     SliderCount++;
    //     // activitySlider.style.transform = `translateX(+${SliderCount}00%)`;

    //     for (let i = 0; i < activityItem.length; i++) {
    //         // nowTransform = i + SliderCount;
    //         // console.log(nowTransform);   //123
    //         activityItem[i].style.transform = `translateX(${SliderCount - 1}00%)`;
    //     }
    // }, 4000);

    // st1.substring(st1.indexOf("(")+1,st1.indexOf(")"))
    // console.log(sliderBus[1].style.transform);
    // console.log(sliderBus[2].style.transform);
    // nowTransform = sliderBus[1].style.transform;
    // console.log(nowTransform);
    // console.log(nowTransform.substring(nowTransform.indexOf("(")+1,nowTransform.indexOf("%")));
    // console.log(sliderBus[0].style.transform.substring(indexOf("(")+1,sliderBus[0].style.transform.indexOf("%")));
    // console.log(sliderBus[0].style.transform.substring(indexOf("(")+1,sliderBus[0].style.transform.indexOf("%")));
    // console.log(sliderBus[0].style.transform.substring(indexOf("(")+1,sliderBus[0].style.transform.indexOf("%")));

        // for (let x = 0; x < imgItem.length; x++) {
    //     imgItem[x].addEventListener("click", showImgBox, false);
    //     imgItem[x].value = x;
    // }

        // function removeItem() {

    //     xx = this.value;
    //     cartArray = JSON.parse(localStorage.getItem('carts'));

    //     cartArray.splice(xx, 1);
    //     localStorage.removeItem('carts');
    //     localStorage.setItem('carts', JSON.stringify(cartArray));
    //     showCart();
    // }
    // function clearCartAll() {
    //     localStorage.removeItem('carts');
    //     window.location.reload();
    //     // showCart();
    // }
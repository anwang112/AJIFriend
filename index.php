<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/leading.css">
    <title>熊麻吉前導頁</title>
</head>

<body>
    <div class="wrap">

        <div class="loadWrap">
            <embed id="leadCity" src="images/indexImages/leadingCity.svg" style="display:block;" />
            <embed id="leadInfo" src="images/indexImages/leadingInfo.svg" style="display:block;" />
            <!-- 前端按鈕 -->
            <a title="前端" href="home.php" id="leadingFront">
                <svg xmlns="http://www.w3.org/2000/svg" id="Front" viewBox="0 0 307.53273 227.03966">
                    <defs>
                        <style>
                            .cls-1 {
                                fill: #f05c79;
                            }

                            .cls-2 {
                                font-size: 66.80322px;
                                fill: #fae8f0;
                                font-family: AdobeFanHeitiStd-Bold-B5pc-H, Adobe Fan Heiti Std;
                            }
                        </style>
                    </defs>
                    <title>前端</title>
                    <g id="圖層_2" data-name="圖層 2">
                        <g id="圖層_1-2" data-name="圖層 1">
                            <path class="cls-1" d="M90.80527.00205,218.0386.87979c49.58145.342,89.85244,43.40425,89.49173,95.69393V96.574c-.36071,52.28967-41.22195,94.79246-90.8034,94.45042l3.08229-.04041c-2.92,9.46333-2.16409,18.30923-5.0846,27.77227-2.46894,8.00094-10.40865,11.39193-16.2428,4.77575-8.42958-9.55942-10.60943-22.34527-16.39984-33.51387l-92.58837.12853C39.91267,189.80464-.35831,146.74215.0024,94.45247v-.00028C.36312,42.16252,41.22435-.34,90.80527.00205Z" /><text class="cls-2" transform="translate(37.66877 128.7511)">前端</text></g>
                    </g>
                </svg>
            </a>
            <!-- 後端按鈕 -->
            <a title="前端" href="backstage/backstage.html" id="leadingBack">
                <svg xmlns="http://www.w3.org/2000/svg" id="Back" viewBox="0 0 307.53273 227.03966">
                    <defs>
                        <style>
                            .cls-3 {
                                fill: #fae8f0;
                            }

                            .cls-4 {
                                font-size: 66.80322px;
                                fill: #f05c79;
                                font-family: AdobeFanHeitiStd-Bold-B5pc-H, Adobe Fan Heiti Std;
                            }
                        </style>
                    </defs>
                    <title>後端</title>
                    <g id="圖層_2" data-name="圖層 2">
                        <g id="圖層_1-2" data-name="圖層 1">
                            <path class="cls-3" d="M216.72746.00205,89.49413.87979C39.91268,1.22183-.35831,44.284.0024,96.57372V96.574c.36071,52.28967,41.22195,94.79246,90.8034,94.45042l-3.08229-.04041c2.92,9.46333,2.16409,18.30923,5.0846,27.77227,2.46894,8.00094,10.40865,11.39193,16.2428,4.77575,8.42958-9.55942,10.60943-22.34527,16.39984-33.51387l92.58837.12853c49.58092-.342,89.8519-43.40453,89.49119-95.69421v-.00028C307.16961,42.16252,266.30838-.34,216.72746.00205Z" /><text class="cls-4" transform="translate(101.02247 117.94048)">後端</text></g>
                    </g>
                </svg>
            </a>

        </div>
        <div class="loadFloor">
            <embed id="leadStone" src="images/indexImages/leadingStone.svg" style="display:block;" />
        </div>




        <script>
            $id = (id) => {
                return document.getElementById(id);
            }



            window.addEventListener('load', () => {
                leadInfo = $id('leadInfo').getSVGDocument();

                FrontHandOne = leadInfo.getElementsByClassName('cls-2')[0];
                FrontHandTwo = leadInfo.getElementsByClassName('cls-12')[0];

                BackHandOne = leadInfo.getElementsByClassName('cls-8')[0];
                BackTwo = leadInfo.getElementsByTagName('path')[41];
                BackTwo.style.transition = '.4s';

                FrontHandOne.style.transformBox = `fill-box`;
                FrontHandOne.style.transformOrigin = `right top`;
                FrontHandOne.style.transition = '1s';

                FrontHandTwo.style.transformBox = `fill-box`;
                FrontHandTwo.style.transformOrigin = `right bottom`;
                FrontHandTwo.style.transition = '1s';

                BackHandOne.style.transformBox = `fill-box`;
                BackHandOne.style.transformOrigin = `left top`;
                BackHandOne.style.transition = '1s';

                frontTime = 0;
                frontGo = () => {
                    frontTime++;
                    if (frontTime == 1) { //rotate(-40deg) translateX(20%) translateY(-19%)
                        FrontHandOne.style.transform = `rotate(-25deg) translateX(10%) translateY(-11%)`;
                        FrontHandTwo.style.transform = `rotate(-40deg) translateX(20%) translateY(-19%)`;
                    }
                    if (frontTime == 30) {
                        FrontHandOne.style.transform = `rotate(0deg) translateX(0%)  translateY(0%)`;
                        FrontHandTwo.style.transform = `rotate(0deg) translateX(0%) translateY(0%)`;
                    }
                    if (frontTime == 50) {
                        frontTime = 0;
                    }
                    frontId = requestAnimationFrame(frontGo);
                }
                backTime = 0;
                backGo = () => {
                    backTime++;
                    if (backTime == 1) { //rotate(-40deg) translateX(20%) translateY(-19%)
                        BackHandOne.style.transform = `rotate(-25deg) translateX(-14%) translateY(24%)`;
                        BackTwo.style.transform = `translateY(-1%)`;
                    }
                    if (backTime == 30) {
                        BackHandOne.style.transform = `rotate(0deg) translateX(0%) translateY(0%)`;
                        BackTwo.style.transform = `translateY(0%)`;
                    }
                    if (backTime == 50) {
                        backTime = 0;
                    }
                    backId = requestAnimationFrame(backGo);
                }


                $id('Front').addEventListener('mouseenter', () => {
                    frontId = requestAnimationFrame(frontGo);
                })
                $id('Front').addEventListener('mouseleave', () => {
                    cancelAnimationFrame(frontId);
                    FrontHandOne.style.transform = `rotate(0deg) translateX(0%)  translateY(0%)`;
                    FrontHandTwo.style.transform = `rotate(0deg) translateX(0%) translateY(0%)`;
                })
                $id('Back').addEventListener('mouseenter', () => {
                    backId = requestAnimationFrame(backGo);

                })
                $id('Back').addEventListener('mouseleave', () => {
                    BackTwo.style.transform = `translateY(0%)`;
                    BackHandOne.style.transform = `rotate(0deg) translateX(0%) translateY(0%)`;
                    cancelAnimationFrame(backId);
                })


                //角色出現  //106白底 105黑框 104白框
                ooRole = leadInfo.getElementsByTagName('path'); //107-123
                ooRoleWrap = leadInfo.getElementsByClassName('cls-22')[0];
                ooRoleWrap.style.transition = '1.2s';

                //掉下去
                for (let i = 107; i < 124; i++) {
                    ooRole[i].style.transform = `translateY(20%)`;
                    ooRole[i].style.transition = '1s';
                }
                for (let i = 104; i < 107; i++) {
                    ooRole[i].style.transition = '1s';
                }
                setTimeout(() => {
                    ooRole[106].style.opacity = '1';
                    ooRole[104].style.opacity = '1';
                    ooRole[105].style.opacity = '1';
                    ooRoleWrap.style.opacity = '1';
                }, 400);
                // ooRoleTime = 0;
                // ooRoleGo = () => {
                //     ooRoleTime++
                //     if (ooRoleTime == 1) {
                //         for (let i = 107; i < 124; i++) {
                //             ooRole[i].style.transform = `translateY(0%)`;
                //         }
                //     }
                //     if (ooRoleTime == 150) {
                //         for (let i = 107; i < 124; i++) {
                //             ooRole[i].style.transform = `translateY(15%)`;
                //         }
                //     }
                //     if (ooRoleTime == 175) {
                //         ooRoleTime = 0;
                //     }
                //     ooRoleId = requestAnimationFrame(ooRoleGo);
                // }
                // ooRoleId = requestAnimationFrame(ooRoleGo);

                setTimeout(() => {
                    for (let i = 107; i < 124; i++) {
                        ooRole[i].style.transform = `translateY(0%)`;
                    }
                }, 700);

                // ooRole[106].style.opacity = '1';
                // ooRole[104].style.opacity = '1';
                // ooRole[105].style.opacity = '1';

                xxRole = leadInfo.getElementsByTagName('circle');
                console.log(xxRole);

                // 眼睛動起來
                ooxxRandom = (min, max) => {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }
                ooxxEyesGo = (...eyesArray) => {
                    eyesArray[0].style.transformBox = `fill-box`;
                    eyesArray[1].style.transformBox = `fill-box`;
                    eyesArray[0].style.transformOrigin = `center`;
                    eyesArray[1].style.transformOrigin = `center`;
                    eyesArray[0].setAttribute('transform', `translate(0) rotate(45)`);
                    eyesArray[1].setAttribute('transform', `translate(0) rotate(45)`);
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
                            duration: 200,
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
                            duration: 200,
                            endDelay: 1000,
                        });
                    }
                    setInterval(eyesGo, ooxxRandom(2000, 3500));
                }

                ooxxEyesGo(xxRole[1], xxRole[3]);
                ooxxEyesGo(xxRole[12], xxRole[13]);
                ooxxEyesGo(xxRole[5], xxRole[7]);
                ooxxEyesGo(xxRole[10], xxRole[11]);

                //載入出現ㄉ對話框
                // document.getElementsByClassName('cls-22');
            })
        </script>

</body>

</html> 
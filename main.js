! function () {
    var duration = 20
    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget) //button
        let speed = $button.attr('data-speed')
        $button.addClass('active').siblings('.active').removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 5
                break
            case 'normal':
                duration = 1
                break
            case 'fast':
                duration = 0
                break
        }
    })

    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        setTimeout(function run() {
            n += 3
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, duration)
    }
    let code = `
    /*头部*/
    .doraemon .head {
        position: relative;
        width: 320px;
        height: 300px;
        border: 2px solid #555;
        border-radius: 150px;
        background: #07bbee;
        background: -webkit-radial-gradient(right top,
                #fff 10%,
                #07bbee 20%,
                #10a6ce 75%,
                #000 100%);
        background: -moz-radial-gradient(right top,
                #fff 10%,
                #07bbee 20%,
                #10a6ce 75%,
                #000 100%);
        background: -ms-radial-gradient(right top,
                #fff 10%,
                #07bbee 20%,
                #10a6ce 75%,
                #000 100%);
        box-shadow: -5px 10px 15px rgba(0, 0, 0, .45);
    }
    
    /*眼睛*/
    .doraemon .head .eyes {
        position: relative;
        z-index: 3;
    }
    
    .doraemon .head .eyes .eye {
        width: 72px;
        height: 82px;
        background: #fff;
        border: 2px solid #000;
        border-radius: 35px;
        position: absolute;
        top: 40px;
    }
    
    .doraemon .head .eyes .left {
        left: 82px;
    }
    
    .doraemon .head .eyes .right {
        left: 156px;
    }
    
    .doraemon .head .eyes .eye .black {
        width: 14px;
        height: 14px;
        background: #000;
        border-radius: 7px;
        position: absolute;
        top: 40px;
    }
    
    .doraemon .head .eyes .eye .bleft {
        left: 50px;
    }
    
    .doraemon .head .eyes .eye .bright {
        left: 7px;
    }
    
    /*脸部*/
    .doraemon .face {
        position: relative;
        z-index: 2;
    }
    
    .doraemon .face .white {
        width: 265px;
        height: 195px;
        background: #fff;
        position: absolute;
        top: 75px;
        left: 25px;
        border-radius: 150px;
        background: -webkit-radial-gradient
        (right top, #fff 75%, #eee 80%, #999 90%, #444);
        background: -moz-radial-gradient
        (right top, #fff 75%, #eee 80%, #999 90%, #444);
        background: -ms-radial-gradient
        (right top, #fff 75%, #eee 80%, #999 90%, #444);
    }
    
    .doraemon .face .nose {
        width: 30px;
        height: 30px;
        background: #c93300;
        position: absolute;
        top: 110px;
        left: 140px;
        border-radius: 15px;
        border: 2px solid #000;
        z-index: 3;
    }
    
    .doraemon .face .nose .light {
        width: 10px;
        height: 10px;
        border-radius: 5px;
        box-shadow: 19px 8px 5px #fff;
    }
    
    .doraemon .face .nose_line {
        width: 3px;
        height: 100px;
        background: #333;
        position: absolute;
        top: 143px;
        left: 155px;
        z-index: 3;
    }
    
    .doraemon .face .mouse {
        width: 220px;
        height: 400px;
        border-bottom: 3px solid #333;
        border-radius: 120px;
        position: absolute;
        top: -160px;
        left: 45px;
    }
    
    .doraemon .face .whiskers {
        width: 220px;
        height: 80px;
        background: #fff;
        border-radius: 15px;
        z-index: 2;
        /*border: 1px solid red;*/
        position: absolute;
        top: 120px;
        left: 45px;
    }
    
    .doraemon .face .whiskers .whisker {
        width: 60px;
        height: 2px;
        background: #333;
        position: absolute;
        z-index: 2;
    }
    
    .doraemon .whiskers .rTop {
        left: 165px;
        top: 25px;
    }
    
    .doraemon .whiskers .rMiddle {
        left: 167px;
        top: 45px;
    }
    
    .doraemon .whiskers .rBottom {
        left: 165px;
        top: 65px;
    }
    
    .doraemon .whiskers .lTop {
        left: 0;
        top: 25px;
    }
    
    .doraemon .whiskers .lMiddle {
        left: -2px;
        top: 45px;
    }
    
    .doraemon .whiskers .lBottom {
        left: 0;
        top: 65px;
    }
    
    .doraemon .whiskers .r160 {
        -webkit-transform: rotate(160deg);
        -moz-transform: rotate(160deg);
        -ms-transform: rotate(160deg);
        -o-transform: rotate(160deg);
        transform: rotate(160deg);
    }
    
    .doraemon .whiskers .r20 {
        -webkit-transform: rotate(200deg);
        -moz-transform: rotate(200deg);
        -ms-transform: rotate(200deg);
        -o-transform: rotate(200deg);
        transform: rotate(200deg);
    }
    
    /*脖子和叮当*/
    .doraemon .choker {
        width: 230px;
        height: 20px;
        background: #c40;
        border-radius: 10px;
        border: 2px solid #000;
        position: relative;
        top: -40px;
        left: 45px;
        z-index: 4;
        background: -webkit-gradient
        (linear, left top, left bottom, from(#c40), to(#800400));
        background: -moz-linear-gradient
        (center top, #c40, #800400);
        background: -ms-linear-gradient
        (center top, #c40, #800400);
    }
    
    .doraemon .choker .bell {
        width: 40px;
        height: 40px;
        _overflow: hidden;
        border: 2px solid #000;
        border-radius: 50px;
        background: #f9f12a;
        background: -webkit-gradient
        (linear, left top, left bottom, from(#f9f12a),
         color-stop(0.5, #e9e11a), to(#a9a100));
        background: -moz-linear-gradient
        (top, #f9f12a, #e9e11a 75%, #a9a100);
        background: -ms-linear-gradient
        (top, #f9f12a, #e9e11a 75%, #a9a100);
        box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.25);
        position: absolute;
        top: 5px;
        left: 90px;
    }
    
    .doraemon .choker .bell_line {
        width: 36px;
        height: 2px;
        background: #f9f12a;
        border: 2px solid #333;
        border-radius: 3px 3px 0 0;
        position: absolute;
        top: 10px;
    }
    
    .doraemon .choker .bell_circle {
        width: 12px;
        height: 10px;
        background: #000;
        border-radius: 5px;
        position: absolute;
        top: 20px;
        left: 14px;
    }
    
    .doraemon .choker .bell_under {
        width: 3px;
        height: 15px;
        background: #000;
        position: absolute;
        top: 27px;
        left: 18px;
    }
    
    .doraemon .choker .bell_light {
        width: 12px;
        height: 12px;
        border-radius: 10px;
        box-shadow: 19px 8px 5px #fff;
        position: absolute;
        top: -5px;
        left: 5px;
        opacity: 0.7;
    }
    
    .doraemon .bodys {
        position: relative;
        top: -310px;
    }
    
    .doraemon .bodys .body {
        width: 220px;
        height: 165px;
        background: #07beea;
        background: -webkit-gradient
        (linear, right top, left top, from(#07beea),
         color-stop(0.5, #0073b3), color-stop(0.75, #00b0e0), to(#0096be));
        background: -moz-linear-gradient(right center, 
            #07beea, #0073b3 50%, #00b0e0 75%, #0096be 100%);
        background: -ms-linear-gradient(right center, 
            #07beea, #0073b3 50%, #00b0e0 75%, #0096be 100%);
        border: 2px solid #333;
        position: absolute;
        top: 265px;
        left: 50px;
    }
    
    .doraemon .bodys .wraps {
        width: 170px;
        height: 170px;
        background: #fff;
        background: -webkit-gradient(linear, right top, left bottom,
             from(#fff), color-stop(0.75, #fff), color-stop(0.83, #eee), 
             color-stop(0.90, #999), color-stop(0.95, #444), to(#000));
        background: -moz-linear-gradient(right top, #fff,
             #fff 75%, #eee 83%, #999 90%, #444 95%, #000 100%);
        background: -ms-linear-gradient(right top, #fff, 
            #fff 75%, #eee 83%, #999 90%, #444 95%, #000 100%);
        border: 2px solid #000;
        border-radius: 85px;
        position: absolute;
        top: 230px;
        left: 72px;
    }
    
    .doraemon .bodys .pocket {
        width: 130px;
        height: 130px;
        background: #fff;
        background: -webkit-gradient(linear, right top,
        left bottom, from(#fff), color-stop(0.70, #fff), 
        color-stop(0.75, #f8f8f8), color-stop(0.80, #eee), 
        color-stop(0.88, #ddd), to(#fff));
        background: -moz-linear-gradient(right top, #fff, 
            #fff 70%, #f8f8f8 75%, #eee 80%, #ddd 88%, #fff 100%);
        background: -ms-linear-gradient(right top, #fff, 
            #fff 70%, #f8f8f8 75%, #eee 80%, #ddd 88%, #fff 100%);
        border: 2px solid #000;
        border-radius: 65px;
        position: absolute;
        top: 250px;
        left: 92px;
    }
    
    .doraemon .bodys .pocket_mask {
        width: 134px;
        height: 60px;
        background: #fff;
        border-bottom: 2px solid #000;
        position: absolute;
        top: 259px;
        left: 92px;
    }
    
    .doraemon .hand_right,
    .doraemon .hand_left {
        height: 100px;
        width: 100px;
        position: absolute;
        top: 272px;
        left: 248px;
    }
    
    .doraemon .hand_left {
        left: -10px;
    }
    
    .doraemon .arm {
        width: 80px;
        height: 50px;
        background: #07beea;
        background: -webkit-gradient(linear, left top,
        left bottom, from(#07beea), color-stop(0.85, #07beea), to(#555));
        background: -moz-linear-gradient(center top,
             #07beea, #07beea 85%, #555);
        background: -ms-linear-gradient(center top, 
            #07beea, #07beea 85%, #555);
        border: 1px solid #000000;
        box-shadow: -10px 7px 10px rgba(0, 0, 0, .35);
        z-index: -1;
        position: relative;
    }
    
    .doraemon .hand_left .arm {
        top: 17px;
        background: #0096be;
        box-shadow: 5px -7px 10px rgba(0, 0, 0, .25);
        -webkit-transform: rotate(145deg);
        -moz-transform: rotate(145deg);
        -ms-transform: rotate(145deg);
        -o-transform: rotate(145deg);
        transform: rotate(145deg);
    }
    
    .doraemon .hand_right .arm {
        top: 17px;
        -webkit-transform: rotate(35deg);
        -moz-transform: rotate(35deg);
        -ms-transform: rotate(35deg);
        -o-transform: rotate(35deg);
        transform: rotate(35deg);
    }
    
    .doraemon .circle {
        width: 60px;
        height: 60px;
        border: 2px solid #000;
        border-radius: 30px;
        background: #fff;
        background: -webkit-gradient(linear, 
        right top, left bottom, from(#fff), 
        color-stop(0.50, #fff), color-stop(0.70, #eee),
        color-stop(0.80, #ddd), to(#999));
        background: -moz-linear-gradient(right top,
        #fff, #fff 50%, #eee 70%, #ddd 80%, #999 100%);
        background: -ms-linear-gradient(right top, #fff, 
        #fff 50%, #eee 70%, #ddd 80%, #999 100%);
        position: absolute;
    }
    
    .doraemon .hand_right .circle {
        left: 40px;
        top: 32px;
    }
    
    .doraemon .hand_left .circle {
        left: -20px;
        top: 32px;
    }
    
    .doraemon .arm_rewrite {
        height: 45px;
        width: 5px;
        background: #07beea;
        position: relative;
    }
    
    .doraemon .hand_right .arm_rewrite {
        top: -45px;
        left: 22px;
    }
    
    .doraemon .hand_left .arm_rewrite {
        top: -45px;
        left: 60px;
        background: #0096be;
    }
    
    .doraemon .foot {
        width: 280px;
        height: 40px;
        position: relative;
        top: 55px;
        left: 20px;
    }
    
    .doraemon .foot .left,
    .doraemon .foot .right {
        width: 125px;
        height: 30px;
        background: #fff;
        background: -webkit-gradient(linear, 
        right top, left bottom, from(#fff), 
        color-stop(0.75, #fff), color-stop(0.85, #eee), to(#999));
        background: -moz-linear-gradient(right top, 
        #fff, #fff 75%, #eee 85%, #999 100%);
        background: -ms-linear-gradient(right top, 
        #fff, #fff 75%, #eee 85%, #999 100%);
        border: 2px solid #333;
        border-radius: 80px 60px 60px 40px;
        box-shadow: -6px 0 10px rgba()0, 0, 0, .35;
        position: relative;
    }
    
    .doraemon .foot .left {
        left: 8px;
        top: 61px;
    }
    
    .doraemon .foot .right {
        left: 141px;
        top: 31px;
    }
    
    .doraemon .foot .foot_rewrite {
        width: 23px;
        height: 10px;
        background: #fff;
        background: -webkit-gradient(linear, right top, 
        left bottom, from(#666), color-stop(0.83, #fff), to(#999));
        background: -moz-linear-gradient(right top, 
        #666, #fff 83%, #999 100%);
        background: -ms-linear-gradient(right top, 
        #666, #fff 83%, #999 100%);
        border: 2px solid #000;
        border-bottom: none;
        border-radius: 40px 40px 0 0;
        position: relative;
        top: -5px;
        left: 126px;
        _left: 127px;
    }
    
    .doraemon .eyes .eye .black {
        width: 14px;
        height: 14px;
        background: #000;
        border-radius: 7px;
        position: absolute;
        top: 40px;
        -webkit-animation: eyemove 2s linear infinite;
        -moz-animation: eyemove 2s linear infinite;
        -ms-animation: eyemove 2s linear infinite;
        -o-animation: eyemove 2s linear infinite;
        animation: eyemove 2s linear infinite;
    }
    
    @-webkit-keyframes eyemove {
        20% {
            margin: 0 0 0 0;
        }
    
        40% {
            margin: -22px 0 0 0;
        }
    
        60% {
            margin: -22px 0 0 5px;
        }
    
        80% {
            margin: -22px 10px 0 0;
        }
    }
    
    @-mos-keyframes eyemove {
        20% {
            margin: 0 0 0 0;
        }
    
        40% {
            margin: -22px 0 0 0;
        }
    
        60% {
            margin: -22px 0 0 5px;
        }
    
        80% {
            margin: -22px 10px 0 0;
        }
    }
    
    @-ms-keyframes eyemove {
        20% {
            margin: 0 0 0 0;
        }
    
        40% {
            margin: -22px 0 0 0;
        }
    
        60% {
            margin: -22px 0 0 5px;
        }
    
        80% {
            margin: -22px 10px 0 0;
        }
    }
    
    @-o-keyframes eyemove {
        20% {
            margin: 0 0 0 0;
        }
    
        40% {
            margin: -22px 0 0 0;
        }
    
        60% {
            margin: -22px 0 0 5px;
        }
    
        80% {
            margin: -22px 10px 0 0;
        }
    }
    
    @keyframes eyemove {
        20% {
            margin: 0 0 0 0;
        }
    
        40% {
            margin: -22px 0 0 0;
        }
    
        60% {
            margin: -22px 0 0 5px;
        }
    
        80% {
            margin: -22px 10px 0 0;
        }
    }
    /*
    * 好了，这个可爱的哆啦A梦送给你^-^
    */
    `
    writeCode('', code)

}.call()
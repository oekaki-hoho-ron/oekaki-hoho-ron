// サムネ動画をタップしたときの基本アニメーション
function TapAnimation() {
    anime({
        targets: ['#menu-thumb1', '#menu-thumb2', '#menu-thumb3', '#menu-thumb4', '#menu-thumb5', '#menu-thumb6', '#news-thumb3', '#news-thumb2', '#news-thumb3'],
        easing: 'easeOutCubic',
        opacity: 0,
        duration: 1000
    })
    var xb_display = function () {
        document.getElementById("x-button").style = "display:block";
        document.getElementById("container").style = "display:none";
    };
    setTimeout(xb_display,1000);
    anime({
        targets: '#x-button',
        opacity: 1,
        easing: 'easeOutCubic',
        duration: 1000,
        delay: 1000
    })
    anime({
        targets: ['#menu1-contents','#menu2-contents','#menu3-contents','#menu4-contents','#menu5-contents','#menu6-contents',],
        easing: 'easeOutCubic',
        duration: 1000,
        opacity: 1,
        delay: 1000
    })
}

// 選択したmenu1~6に対応したdivを表示
function MenuContentsDisplay(menu_contents) {
      document.getElementById(menu_contents).style = "display:block";
}

// menu1
function anime1() {
    TapAnimation();
    setTimeout('MenuContentsDisplay("menu1-contents");', 1000);
}

// menu2
function anime2() {
    TapAnimation();
    setTimeout('MenuContentsDisplay("menu2-contents");', 1000);
}

// menu3
function anime3() {
    TapAnimation();
    setTimeout('MenuContentsDisplay("menu3-contents");', 1000);
}

// menu4
function anime4() {
    TapAnimation();
    setTimeout('MenuContentsDisplay("menu4-contents");', 1000);
}

// menu5
function anime5() {
    TapAnimation();
    setTimeout('MenuContentsDisplay("menu5-contents");', 1000);
}

// menu6
function anime6() {
    TapAnimation();
    setTimeout('MenuContentsDisplay("menu6-contents");', 1000);
}


// 初期状態のHTMLソースを記録
var defaultHTML;
function DefaultSave()　{
    defaultHTML = document.body.innerHTML;
}

// HTMLソースとvideoタグの状態を初期状態に戻す
function HTMLRestore()　{
    document.body.innerHTML = defaultHTML;
    window.location.reload(false);
}
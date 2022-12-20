let mode = 1;

function mode1() {
    mode = 1;
    $(".mode_exp_inn").text("日常会話でタイピングの練習ができるよ。");
}

function mode2() {
    mode = 1;
    $(".mode_exp_inn").text("今まで行った旅行を思い出しながらタイピング練習ができるよ。");
}

function mode3() {
    mode = 1;
    $(".mode_exp_inn").text("精神的に疲れたらこのモードで練習しよう");
}

function mode4() {
    mode = 1;
    $(".mode_exp_inn").text("普通のタイピングゲームだよ。多分これが一番いいよ。");
}

function GO_typepage(ans) {
    if (ans == "") {
        $(".mode_exp_inn").text("遊ぶモードを選択してください。");
    }else if ( ans == "mode1") {
        window.location.href="../mode1/typing.html"
    }else if ( ans == "mode2") {
        window.location.href="../mode2/typing.html"
    }else if ( ans == "mode3") {
        window.location.href="../mode3/typing.html"
    }else if ( ans == "mode4") {
        window.location.href="../mode4/typing.html"
    }
}

$(function () {
    $("#answerBtn").click(function () {
        const value = document.getElementById("answer").value;
        $(function () {
            const answer = value;
            if (answer == 'ピエロ' || answer == 'ぴえろ') {
                $(".clear").html("正解!!")
                $(".clearText").html("次のストーリーに進む");
                $(".clear").css("display", "inline");
                $(".quizText").css("display", "none");
                $(".quizImg").css("display", "none");
                $("#answerContainer").css("display", "none");
                $(".logLink").css("display", "none");
            } else {
                $(".notClear").html("不正解");
                $(".notClearHint").html("色が関係してるみたい...");
                $(".notClearHint").css("display", "inline");
                $(".notClearText").html("もう一度");
                $(".notClear").css("display", "inline");
                $(".quizText").css("display", "none");
                $(".quizImg").css("display", "none");
                $("#answerContainer").css("display", "none");
                $(".logLink").css("display", "none");
            };
        });
    });
});
window.onload = function () {
    document.getElementById("audio").src = './audio/quiz.mp3';
    var media = document.getElementById("audio");
    media.volume = 1
}
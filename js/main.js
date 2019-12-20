let oneBtn = 0;
let twoBtn = 3;
let threeBtn = 7;


$('#btn-one').on('click',function(){
    oneBtn ++;

    $('#pg-one').width(oneBtn + '%');
});

$('#btn-two').on('click',function(){
    twoBtn += 3;

    $('#pg-two').width(twoBtn + '%');
});

$('#btn-three').on('click',function(){
    threeBtn += 7;

    $('#pg-three').width(threeBtn + '%');
});





// $("#my-progress-bar").width("78%");
// $("#one1").width(progressBarPython);
// $("#two2").width(progressBarHtml);
// $("free3").width(progressBarJs);
// $("#prh").height("1px")

// $(document).ready(init);
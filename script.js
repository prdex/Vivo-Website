const hideClose = () =>{
    $('#close-nav').css({'display':'none'});
    console.log("closed");
}

const showClose = () =>{
    $('#close-nav').css({'display':'inline'});
}

$('.sidenav').sidenav({
    menuWidth: 250,
    closeOnClick: true,
    draggable:true,
    edge: 'right',
    onOpenEnd: showClose,
    onCloseStart: hideClose
});

$('.sidenav-trigger').click(()=>{
    $('#close-nav').css({'display':'inline'});
});


$(window).scroll(function() {
    var abc = document.getElementById('navwrap');
    if ($(this).scrollTop() > 400) {
        $(abc).css({
            "background-color":"#6699ff",
            "transition":"1s"
        })
    } else {
        $(abc).css({
        "background-color":"transparent"
    })
}
});
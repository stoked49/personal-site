/**
 * Created by Irby on 12/21/16.
 */
var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

// $(".el__preview-cont").onmouseover(function() {
//     $( "span" ).addClass( "blueLetter" );
// });

setTimeout(function() {
    $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
    $el.addEventListener('click', function() {
        if (this.classList.contains('s--active')) return;
        $cont.classList.add('s--el-active');
        this.classList.add('s--active');
    });
});

$closeBtnsArr.forEach(function($btn) {
    $btn.addEventListener('click', function(e) {
        e.stopPropagation();
        $cont.classList.remove('s--el-active');
        document.querySelector('.el.s--active').classList.remove('s--active');
    });
});


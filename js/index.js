(function(){
    var wrap = document.getElementsByClassName('wrap')[0];
    var ri = document.getElementsByClassName('ri')[0];
    var box = document.getElementById('box');
    var bigImg = document.getElementsByClassName('bigImg')[0];
    // 当鼠标经过box 显示 隐藏两个
    box.addEventListener('mouseover', function () {
        wrap.style.display = 'block';
        ri.style.display = 'block';
    })
    box.addEventListener('mouseleave', function () {
        wrap.style.display = '';
        ri.style.display = '';
    })
    box.addEventListener('mousemove', function (e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // 盒子高度的一半是100


        var wrapX = x - wrap.offsetWidth / 2
        var wrapY = y - wrap.offsetHeight / 2
        //判断盒子有效移动活动范围
        if (wrapX <= 0) {
            wrapX = 0
        } else if (wrapX >= 200) {
            wrapX = 200
        }
        if (wrapY <= 0) {
            wrapY = 0
        } else if (wrapY >= 200) {
            wrapY = 200
        }
        wrap.style.left = wrapX + 'px';
        wrap.style.top = wrapY + 'px'

        var bigri = ri.offsetWidth - bigImg.offsetWidth
        var bigX = wrapX * bigri / 200
        var bigY = wrapY * bigri / 200
        bigImg.style.left = bigX + 'px';
        bigImg.style.top = bigY + 'px';
    })
})()
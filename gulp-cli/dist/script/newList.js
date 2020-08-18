(function () {
    var pr = $1('.J-prev'); 
    var ne = $1('.J-next');
    var cont = $1('.cont-list'); //父元素
    var lis = document.querySelectorAll('.cont-list li'); //子元素
    var co = $1('.cont')
    // console.log(pr);

    // 当前显示图片的下标
    var imgIndex = 0;
    var liWidth = 275;
    
    var firstCLone = cont.children[0].cloneNode(true);
    var firstCLone1 = cont.children[1].cloneNode(true);
    var firstCLone2 = cont.children[2].cloneNode(true);
    var firstCLone3 = cont.children[3].cloneNode(true);
    cont.appendChild(firstCLone);
    cont.appendChild(firstCLone1);
    cont.appendChild(firstCLone2);
    cont.appendChild(firstCLone3);
    // 获取一张图片的高度

    ne.onclick = function () {
        moveNext();
    }

    pr.onclick = function () {
        movePrev();
    }

    function moveNext() {
        imgIndex++;
        if (imgIndex > lis.length / 4) {
            imgIndex = 1;
            co.scrollLeft = 0;
        }
        animate(co, {
            'scrollLeft': imgIndex * liWidth * 4
        });

    }

    function movePrev() {
        imgIndex--;
        if (imgIndex < 0) {
            imgIndex = lis.length / 4 - 1;
            co.scrollLeft = (lis.length - 1) * liWidth;
        }
        animate(co, {
            'scrollLeft': imgIndex * liWidth * 4
        });
    }

})();
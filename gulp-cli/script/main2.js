(function () {
    var imgs = document.querySelectorAll('.main2BannerMain img');
    var nums = document.querySelectorAll('.main2Num li');
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var timer;
    // 当前显示图片的下标
    var showIndex = 0;
    // 上次显示图片的下标
    var prevIndex = 0;

    // 进入页面执行
    animate(imgs[showIndex], {
        'opacity': 1
    }, function () {
        // 自动播放下一页
        timer = setInterval(function () {
            moveNext();
        }, 3000);
    });

    function moveNext() {
        // 重置上次显示的样式
        imgs[prevIndex].className = '';
        nums[prevIndex].className = '';
        imgs[prevIndex].style.opacity = 0.02;

        // 下标递增
        showIndex++;
        // 判断临界值
        if (showIndex >= imgs.length) {
            showIndex = 0;
        }
        // 当前显示的样式
        imgs[showIndex].className = 'show';
        nums[showIndex].className = 'active';
        // 更新上次显示的下标
        prevIndex = showIndex;

        // 开始动画
        animate(imgs[showIndex], {
            'opacity': 1
        });
    }

    function movePrev() {
        // 重置上次显示的样式
        imgs[prevIndex].className = '';
        nums[prevIndex].className = '';
        imgs[prevIndex].style.opacity = 0.02;

        // 下标递减
        showIndex--;
        // 判断临界值
        if (showIndex < 0) {
            showIndex = imgs.length - 1;
        }
        // 当前显示的样式
        imgs[showIndex].className = 'show';
        nums[showIndex].className = 'active';
        // 更新上次显示的下标
        prevIndex = showIndex;

        // 开始动画
        animate(imgs[showIndex], {
            'opacity': 1
        });
    }

    // 点下一页
    next.onclick = function () {
        // 清除所有计时器
        clearInterval(timer);
        clearInterval(imgs[showIndex].timer);

        // 切换到下一页
        moveNext();

        // 开启自动播放到下一页
        timer = setInterval(function () {
            moveNext();
        }, 3000);
    }

    // 点上一页
    prev.onclick = function () {
        // 清除所有计时器
        clearInterval(timer);
        clearInterval(imgs[showIndex].timer);

        // 切换到上一页
        movePrev();

        // 开启自动播放到下一页
        timer = setInterval(function () {
            moveNext();
        }, 3000);
    }

    for (var i = 0, len = nums.length; i < len; i++) {
        nums[i].index = i;
        nums[i].onclick = function () {
            // 清除所有计时器
            clearInterval(timer);
            clearInterval(imgs[showIndex].timer);

            // 重置上次显示的样式
            imgs[prevIndex].className = '';
            nums[prevIndex].className = '';
            imgs[prevIndex].style.opacity = 0.02;

            showIndex = this.index;

            // 当前显示的样式
            imgs[showIndex].className = 'show';
            nums[showIndex].className = 'active';
            // 更新上次显示的下标
            prevIndex = showIndex;

            // 开始动画
            animate(imgs[showIndex], {
                'opacity': 1
            });

            // 开启自动播放到下一页
            timer = setInterval(function () {
                moveNext();
            }, 3000);
        }
    }
})();
(function (){
    $('.main2Cont .cont-list li').bind({
        mouseenter: function(){
            var index = $(this).index() + 1;
            $(this).find('.main2Cont .cont-list li').css('background-color','#f4f0ea');
            $(this).find('img').attr('src','../image/new'+index+'.jpg');
        },
        mouseleave: function(){
            var index = $(this).index() + 1;
            $(this).find('.main2Cont .cont-list li').css('background-color','');
            $(this).find('img').attr('src','../image/new'+index+'.png');
        }
    })
})();
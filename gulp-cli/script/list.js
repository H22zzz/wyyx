$('.header_module').load('./header.html');
$('.footer_module').load('./footer.html');
(function () {
    var imgs = document.querySelectorAll('.listBannerMain img');
    var nums = document.querySelectorAll('.listNum li');
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
    $.ajax({
        url:'../data/aboutMore.json',
        type:'get',
        dataType:'json',
        success:function(json){
            $.each(json,function(index,item){
                var dom = `
                <div class="list_show_add ${json[index].className}" code = "${json[index].code}">
                    <a href="detail.html"><img src="${json[index].imgurl}">
                    <p><span>${json[index].title}</span></p>
                    <h3>${json[index].title1}</h3>
                    <h4>${json[index].title2}</h4>
                    <div></div>
                    <h2>${json[index].title3}</h2></a>
                </div>`;
                    $('.listMore1 .list_show').append(dom);
                })
            }
    });
    $.ajax({
        url:'../data/aboutMore 2.json',
        type:'get',
        dataType:'json',
        success:function(json){
            $.each(json,function(index,item){
                var dom = `
                <div class="list_show_add ${json[index].className}" code = "${json[index].code}">
                    <a href="detail.html"><img src="${json[index].imgurl}" >
                    <p><span>${json[index].title}</span></p>
                    <h3>${json[index].title1}</h3>
                    <h4>${json[index].title2}</h4>
                    <div></div>
                    <h2>${json[index].title3}</h2></a>
                </div>`; 
                $('.listMore2 .list_show').append(dom);
            })
        }
    });
    
    $('.listMore1 .list_show').on('mouseenter','.list_show_add',function(){
            var index = $(this).index();
            $(this).find('img').attr('src','../image/list'+(index+5)+'.png');
    })
    $('.listMore1 .list_show').on('mouseleave','.list_show_add',function(){
            var index = $(this).index();
            $(this).find('img').attr('src','../image/list'+(index+1)+'.png');
    })
    $('.listMore2 .list_show').on('mouseenter','.list_show_add',function(){
            var index = $(this).index();
            $(this).find('img').attr('src','../image/list2-'+(index+5)+'.jpg');
    })
    $('.listMore2 .list_show').on('mouseleave','.list_show_add',function(){
            var index = $(this).index();
            $(this).find('img').attr('src','../image/list2-'+(index+1)+'.jpg');
    })
    $('.list_show').on('click','.list_show_add',function(){
        var goodsArr = [];
        var code = $(this).attr('code');
        console.log(code);
        goodsArr.push({"code":code});
        localStorage.setItem('goods',JSON.stringify(goodsArr));
    })
    
})();
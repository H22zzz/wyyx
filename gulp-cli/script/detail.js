$(".header_module").load("./header.html");


var code = localStorage.getItem('goods');
code = JSON.parse(code);
$.ajax({
	url: '../data/detail.json',
	type: 'get',
	dataType: 'json',
	success: function (json) {
		$.each(json, function (index, item) {
			if (code[0].code === item.code) {
				var dom = `
				<div class="detail_top">
					<ul>
						<li>首页 > </li>
						<li>居家生活 > </li>
						<li>客餐厅家具 > </li>
						<li>小桌秒变大桌 > </li>
						<li>北欧实木伸缩餐桌 </li>
					</ul>
				</div>
				<div class="detail_bottom">
					<div class="detail_bottom_left">
						<div class="detail_bottom_left_top">
							<img src="../image/big1.jpg" />
							<div class="detailMask"></div>
						</div>
						<div class="detail_bottom_left_bottom">
							<img src="${json[index].minurl1}">
							<img src="${json[index].minurl2}">
							<img src="${json[index].minurl3}">
							<img src="${json[index].minurl4}">
							<img src="${json[index].minurl5}">
							<button>${json[index].mintitle} ></button>
						</div>
					</div>
					<div class="detail_bottom_right">
						<div class="maxBox">
							<img src="../image/big1.png" alt="">
						</div>
						
						
						<div class="detail_bottom_right_top">
							<h1>${json[index].title1}<span>97.5%</span></h1>
							<p>撑腰护颈，舒适就坐一整天<span>好评率 ></span></p>
						</div>
						<div class="detail_bottom_right_mid">
							<div><span>价格</span><h1>￥1099</h1></div>
							<div><p><b>Pro专享</b>Pro会员叠加优惠，到手价<b>1044.05</b><b>立即开通 ></b></p></div>
							<div><span>促销</span><p><b>领￥50红包</b>你的居家神器</p></div>
							<div><p><b>神券周周抢</b>你的消暑神券来了！清凉爆品无门槛直减 </p></div>
							<div><span>购物返</span><p>最高返<b>239积分</b></p></div>
							<div><span>邮费</span><p>满99元免邮</p></div>
							<div>
								<span>配送</span>
								<p>
								至<select >
									<option value="0">请输入地址</option>
									<option value="0">中国</option>
									<option value="0">美国</option>
									<option value="0">日本</option>
									<option value="0">香港</option>
									<option value="0">台湾</option>
								</select>
								</p>
							</div>
							<div></div>
							<div>
							<span>服务</span>
							<p>･ 网易自营品牌    ･ 免费配送到家    ･ 30天无忧退换 ･ 国内部分地区不可配送    </p></div>
						</div>
						
						<div class="detail_bottom_right_bottom">
							<div>
								<span>颜色</span>
							</div>
							<div>
								<span>数量</span>
								<div class="jian">-</div>
								<div class="num">1</div>
								<div class="jia">+</div>
							</div>
							<button class="detail_btn1">立即购买</button>
							<button class="detail_btn2">加入购物车</button>
						</div>
					</div>
				</div>
				`;
				$('.detail').append(dom);
			}
		})

	}
})

$('.detail').on('mouseenter', '.detail_bottom_left_top', function () {
	$('.detailMask').css('display', 'block');
	$('.maxBox').css('display', 'block');
})
$('.detail').on('mouseleave', '.detail_bottom_left_top', function () {
	$('.detailMask').css('display', 'none');
	$('.maxBox').css('display', 'none');
})

$('.detail').on('mousemove','.detail_bottom_left_top',function(ev){
	var e = ev || event;
	var maskX = e.clientX - $('.detail_bottom_left_top').offset().left - $('.detailMask').width()/2;
	var maskY = e.clientY - $('.detail_bottom_left_top').offset().top - $('.detailMask').height()/2 +$(document).scrollTop() ;
	console.log($(document).scrollTop());
	if (maskX <= 0){
		maskX = 0;
	}
	if (maskX >= ( $('.detail_bottom_left_top').width() - $('.detailMask').width())) {
		maskX =  $('.detail_bottom_left_top').width() - $('.detailMask').width();
	}
	if (maskY <= 0){
		maskY = 0;
	}
	if (maskY >= ( $('.detail_bottom_left_top').height() - $('.detailMask').height())) {
			maskY =  $('.detail_bottom_left_top').height() - $('.detailMask').height();
		}
		$('.detailMask').css('left',maskX + 'px');
		$('.detailMask').css('top',maskY + 'px');
		
		var scaleX = maskX / ( $('.detail_bottom_left_top').width() - $('.detailMask').width());
		var scaleY = maskY / ( $('.detail_bottom_left_top').height() - $('.detailMask').height());
	
		// 大图移动的坐标
		var maxImgX = scaleX * ($('.maxBox img').width() - $('.maxBox').width());
		var maxImgY = scaleY * ($('.maxBox img').height() - $('.maxBox').height());
	
		$('.maxBox img').css('left',-maxImgX + 'px');
		$('.maxBox img').css('top',-maxImgY + 'px');
})

$('.detail').on('mouseenter', '.detail_bottom_left_bottom img', function () {
	var index = $(this).index();
	$('.detail_bottom_left_top').find('img').attr('src', '../image/big' + (index + 1) + '.webp');
	$('.detail_bottom_right .maxBox').find('img').attr('src', '../image/big' + (index + 1) + '.png');
})


$(".footer_module").load("./footer.html");
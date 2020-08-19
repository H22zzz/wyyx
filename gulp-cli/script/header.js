(function () {
  var buy = $1('.buy');
  var serv = $1('.serv');
  var buyh3 = $1('.buy h3');
  var buyul = $1('.buy ul');
  var servh3 = $1('.serv h3');
  var servul = $1('.serv ul');

  buy.onmouseenter = function () {
    buyul.style.display = 'block';
    buyh3.className = 'hover';
  }
  buy.onmouseleave = function () {
    buyul.style.display = 'none';
    buyh3.className = '';
  }
  serv.onmouseenter = function () {
    servul.style.display = 'block';
    servh3.className = 'hover';
  }
  serv.onmouseleave = function () {
    servul.style.display = 'none';
    servh3.className = '';
  }


  $('.yx-cp-tabNav-itemD').bind({
    mouseenter: function () {
      $(this).find('.yx-cp-tabNav-dropdown').css('display', 'block');
      var index = $(this).index() - 1;

      $.ajax({
        url: '../data/search.json',
        type: 'get',
        dataType: 'json',
        success: function (json) {
          $('.yx-cp-tabNav-dropdown').html('');
          var dom = `<ul>
            <h3>${json[index].title}</h3>
            <li><img src = "${json[index].url}">${json[index].title2}</li>
            <li><img src = "${json[index].url}">${json[index].title3}</li>
            <li><img src = "${json[index].url}">${json[index].title4}</li>
            <li><img src = "${json[index].url}">${json[index].title5}</li>
            <li><img src = "${json[index].url}">${json[index].title6}</li>
          </ul>
          <ul>
            <h3>${json[index].title}</h3>
            <li><img src = "${json[index].url}">${json[index].title2}</li>
            <li><img src = "${json[index].url}">${json[index].title3}</li>
            <li><img src = "${json[index].url}">${json[index].title4}</li>
            <li><img src = "${json[index].url}">${json[index].title5}</li>
            <li><img src = "${json[index].url}">${json[index].title6}</li>
          </ul>
          <ul>
            <h3>${json[index].title}</h3>
            <li><img src = "${json[index].url}">${json[index].title2}</li>
            <li><img src = "${json[index].url}">${json[index].title3}</li>
            <li><img src = "${json[index].url}">${json[index].title4}</li>
            <li><img src = "${json[index].url}">${json[index].title5}</li>
            <li><img src = "${json[index].url}">${json[index].title6}</li>
          </ul>
          <ul>
            <h3>${json[index].title}</h3>
            <li><img src = "${json[index].url}">${json[index].title2}</li>
            <li><img src = "${json[index].url}">${json[index].title3}</li>
            <li><img src = "${json[index].url}">${json[index].title4}</li>
            <li><img src = "${json[index].url}">${json[index].title5}</li>
            <li><img src = "${json[index].url}">${json[index].title6}</li>
          </ul>
          <ul>
            <h3>${json[index].title}</h3>
            <li><img src = "${json[index].url}">${json[index].title2}</li>
            <li><img src = "${json[index].url}">${json[index].title3}</li>
            <li><img src = "${json[index].url}">${json[index].title4}</li>
            <li><img src = "${json[index].url}">${json[index].title5}</li>
            <li><img src = "${json[index].url}">${json[index].title6}</li>
          </ul>
          <ul>
            <h3>${json[index].title}</h3>
            <li><img src = "${json[index].url}">${json[index].title2}</li>
            <li><img src = "${json[index].url}">${json[index].title3}</li>
            <li><img src = "${json[index].url}">${json[index].title4}</li>
            <li><img src = "${json[index].url}">${json[index].title5}</li>
            <li><img src = "${json[index].url}">${json[index].title6}</li>
          </ul>
          <ul>
            <h3>${json[index].title}</h3>
            <li><img src = "${json[index].url}">${json[index].title2}</li>
            <li><img src = "${json[index].url}">${json[index].title3}</li>
            <li><img src = "${json[index].url}">${json[index].title4}</li>
            <li><img src = "${json[index].url}">${json[index].title5}</li>
            <li><img src = "${json[index].url}">${json[index].title6}</li>
          </ul>
          <ul>
            <h3>${json[index].title}</h3>
            <li><img src = "${json[index].url}">${json[index].title2}</li>
            <li><img src = "${json[index].url}">${json[index].title3}</li>
            <li><img src = "${json[index].url}">${json[index].title4}</li>
            <li><img src = "${json[index].url}">${json[index].title5}</li>
            <li><img src = "${json[index].url}">${json[index].title6}</li>
          </ul>
          `;
          $('.yx-cp-tabNav-dropdown').append(dom);
        }
      });
    },
    mouseleave: function () {
      $(this).find('.yx-cp-tabNav-dropdown').css('display', 'none');
    }
  })

  var user = $1('.user');
  var pw = $1('.pass')
  var btnLogin = $1('.login')
  console.log(user);
  console.log(pw);
  $.ajax({
    url: '../data/login.json',
    type: 'get',
    dataType: 'json',
    success: function (json) {
      // var json = JSON.parse
      console.log(json);
      btnLogin.onclick = function (){
        if(user.value !== json.user || pw.value !== json.pass){
          alert('不对啊我的好哥哥!!user：asd123、、pw：123456');
          return false;
        } else {
          alert('你是真的小天才！！');
          return;
        }
      }
    }
  })
})();
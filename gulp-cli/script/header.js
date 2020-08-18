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

})();
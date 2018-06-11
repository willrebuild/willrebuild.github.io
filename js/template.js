var getMarketItem = function(item) {
  var html = '<div class="netting_4 mks">'+
  '<div class="shadow_2 boxw" style="min-height: 480px;position:relative;">'+
   '<div class="lbs"></div>'+
   '<div class="name">'+item.name+'</div>'+
    '<div class="clear"></div>'+
    '<div class="rarity" style="color:'+getColor(dinosaurRaReArr[item.name].toLowerCase())+';background:url(./assets/pic/'+dinosaurRaReArr[item.name].toLowerCase()+'.png) left top/100% 96% no-repeat;">'+dinosaurRaReArr[item.name]+'</div>'+
    '<div class="lvl">'+Math.round(item.weight*100)/100 + 'Kg</div>'+
    '<div class="clear"></div>'+
    '<div class="fish-img-outer common level-1">'+
     ' <a href="market_buy.html?id='+item.id+'" style="cursor:pointer;"><img class="clickable" src="https://s3-ap-southeast-1.amazonaws.com/mobotoolpush/mu/game/dinosaur_park/'+item.id+'.300.png"></a></div>'+
    '<div class="_tc">'+
      '<div class="price bigrounded _mb15">'+item.price/1000000000000000000 +' NAS</div></div>'+
    '<table class="pars _mb10" style="width:60%; margin:0 auto;">'+
      '<tbody>'+
        '<tr>'+
          '<th align="left">Power:</th>'+
          '<td align="right" class="b">'+parseInt(item.power)+'</td></tr>'+
        '<tr>'+
          '<th align="left">Agility:</th>'+
          '<td align="right" class="b">'+parseInt(item.flex)+'</td></tr>'+
        '<tr tooltipplacement="right">'+
          '<th align="left">Speed:</th>'+
          '<td align="right" class="b">'+parseInt(item.speed)+'</td></tr>'+
      '</tbody>'+
    '</table>'+
    '<div class="_tc">'+
      '<div class="owned">Owner:'+
        '<span class="owner clickable reduce">'+item.owner+'</span></div>'+
    '</div>'+
    '<div class="clear"></div>'+
    '<a href="info.html?id='+item.id+'">'+
      '<img class="info" src="assets/pic/info.png"></a>'+
  
    '<div class="boxbut">'+
      '<a href="market_buy.html?id='+item.id+'" class="button green bigrounded mid">Buy</a></div>'+
   
    '<div class="clear"></div>'+
  '</div>'+
  '</div>';
  return html;
}



var getTopItem = function(item) {
  var button = '<a onclick="attack(' + item.id + ')" class="button red bigrounded mid preorder" style="cursor: pointer;">Attack</a>';
  if (item.sale == 1) {
    button = '<a class="button gray bigrounded mid">On Sale</a>';
  }
  var html = '\
<a  href="info.html?id='+item.id+'" style="cursor: pointer;color:#000 !important;"><div class="dinosaur_item">\
  <div class="container" >\
    <div class="td1">\
      <div class="_tb5">'+item.rank+'. '+item.name+'</div>\
      <div class="color-6e" >\
           <div class="rarity"  style="top:6px;display:inline-block;position:relative;color:'+getColor(dinosaurRaReArr[item.name].toLowerCase())+';background:url(./assets/pic/'+dinosaurRaReArr[item.name].toLowerCase()+'.png) left top/100% 96% no-repeat;">' + dinosaurRaReArr[item.name] + '</div>         \
      </div>\
      <div class="_mt15 _tb7 clickable">\
        <div class="color-6e _tm1">Owner:</div><span class="_tm3">'+item.owner+'</span></div></div>\
    <div class="td2">\
      <div class="fish-img-outer common level-16">\
        <a href="info.html?id='+item.id+'">\
        <img class="clickable" src="https://s3-ap-southeast-1.amazonaws.com/mobotoolpush/mu/game/dinosaur_park/'+item.id+'.300.png">\
        </a>\
      </div>\
    </div>\
    <div class="td3">\
      <div class="pars">\
        <table class="pars" style="width:60%; margin:0 auto;">\
          <tbody>\
            <tr>\
              <td align="left">Power:</td>\
              <td align="right" class="b">' + parseInt(item.power) + '</td></tr>\
            <tr>\
              <td align="left">Agility:</td>\
              <td align="right" class="b">' + parseInt(item.flex) + '</td></tr>\
            <tr tooltipplacement="right">\
              <td align="left">Speed:</td>\
              <td align="right" class="b">' + parseInt(item.speed) + '</td></tr>\
          </tbody>\
        </table>\
      </div>\
    </div>\
    <div class="td4">\
      <div class="_tb3 lb">' + Math.round(item.weight * 100) / 100 + ' Kg</div></div>\
    <div class="clear"></div>\
  </div>\
</div></a>';
  return html;
}

var getInfoItem = function(data) {
  var html = '<div class="netting">'+
  '<div class="netting">'+
    '<div class="netting_12 _mt15 _mb15">'+
      '<div class="_tm0 upc _r c6"></div>'+
      '<h2 class="_mb5 ts_4" style="color:white;">'+data.name+'</h2>'+
      '<div class="upc" style="color:#a8f8ff;">'+dinosaurRaReArr[data.name]+'</div></div>'+
    '<div class="netting_12 _tc">'+
      
      '<div style="min-height:400px;" class="ng-star-inserted">'+
        '<img src="https://s3-ap-southeast-1.amazonaws.com/mobotoolpush/mu/game/dinosaur_park/'+data.id+'.png" class="fish-img-outer common level-5"></div>'+
    '</div>'+
    '<div class="netting_4 _mt15 _mb15">'+
      '<div class="_tb3 cf ts_4">'+
        '<b>weight</b></div>'+
      '<div class="_tb4 ts_4" style="color:#fefd31;">'+
        '<b>'+Math.round(data.weight*100)/100+'</b>KG</div></div>'+
    '<div class="netting_4 _tc">'+
     
      '<div class="whb _mt25 ng-star-inserted" style="background-color:rgba(255,255,255,0)"></div>&nbsp;</div>'+
    '<div class="netting_4 _mt15 _mb15">'+
      '<span class=" _r">'+
        '<div class="_tm0 upc _mb10 cf" style="text-align:center;">Owner:</div>'+
        '<span class="_tb5 clickable" style="float:left;margin-left:10px;font-weight:bold;font-size:12px;">'+data.owner+'</span>'+
        '<div class="clear"></div>'+
     '</span>'+
    '</div>'+
  '</div>'+
'</div>';
  return html;
}

var getAttackItem = function(item) {
  var button = '<a onclick="attack(' + item.id + ')" class="button red bigrounded mid preorder" style="cursor: pointer;">Attack</a>';
  if (item.sale == 1) {
    button = '<a class="button gray bigrounded mid">On Sale</a>';
  }
  var html = '\
 <a onclick="attack(' + item.id + ')" ] style="cursor: pointer;">\
    <div class="netting_4">\
      <div class="shadow_2 boxw" style="position:relative;">\
        <div class="lbs"></div>\
        <div class="name">' + item.name + '</div>\
        <div class="clear"></div>\
        <div class="rarity" style="color:'+getColor(dinosaurRaReArr[item.name].toLowerCase())+';background:url(./assets/pic/'+dinosaurRaReArr[item.name].toLowerCase()+'.png) left top/100% 96% no-repeat;">' + dinosaurRaReArr[item.name] + '</div>\
        <div class="lvl">' + Math.round(item.weight*100) / 100 + ' Kg</div>\
        <div class="clear"></div>\
        <div class="fish-img-outer common level-3">\
          <img class="clickable" src="https://s3-ap-southeast-1.amazonaws.com/mobotoolpush/mu/game/dinosaur_park/' + item.id + '.300.png"></div>\
        <div class="par" style="font-weight:normal !important;">Power:\
          <b>' + parseInt(item.power) + '</b>— Agility:\
          <b>' + parseInt(item.flex) + '</b></div>\
        <div class="_tc">\
          <div class="owned">Owner:\
            <span class="owner clickable">' + item.owner + '</span></div>\
        </div>\
        <div class="clear"></div>\
        <a href="info.html?id=' + item.id + '" class="clickable">\
          <img class="info" src="assets/pic/info.png"></a>\
        <div class="boxbut">' + button + '</div>\
        <div class="clear"></div>\
      </div>\
    </div>\
    </a>\
    ';
  return html;
}

var getDialogDinosaurItem = function(item) {
  var button = '<a data-id="' + item.id + '" class="attack_send button red bigrounded mid _mt25">Send</a>';
  var speed = Math.min(parseInt(item.speed / 5), 19)
  console.log('dinosaurCdArr[speed]', item.id, item.attack_time, dinosaurCdArr[speed])
  if (item.attack_time + dinosaurCdArr[speed] > nebNowTime) {
    button = '<a class="button gray bigrounded mid _mt25">Freezed</a>';
  }
  var html = '\
    <div class="dinosaur_item">\
    <div class="container">\
      <div class="td1">\
        <div class="_tb5">' + item.name + '</div>\
        <div class="rarity _mt5 _mb5" style="color:'+getColor(dinosaurRaReArr[item.name].toLowerCase())+';background:url(./assets/pic/'+dinosaurRaReArr[item.name].toLowerCase()+'.png) left top/100% 96% no-repeat;">' + dinosaurRaReArr[item.name] + '</div>\
        <div>&nbsp;</div>\
        <div>' + Math.round(item.weight*100)/100 + ' Kg</div></div>\
      <div class="td2">\
        <div class="clickable fish-img-outer common level-5">\
          <img border="0" width="auto" src="https://s3-ap-southeast-1.amazonaws.com/mobotoolpush/mu/game/dinosaur_park/' + item.id + '.300.png"></div>\
      </div>\
      <div class="td5">\
        <div class="pars">\
          <table class="pars" style="width:60%; margin:0 auto;">\
            <tbody>\
              <tr>\
                <td align="left">Power:</td>\
                <td align="right" class="b">' + parseInt(item.power) + '</td></tr>\
              <tr>\
                <td align="left">Agility:</td>\
                <td align="right" class="b">' + parseInt(item.flex) + '</td></tr>\
              <tr tooltipplacement="right">\
                <td align="left">Speed:</td>\
                <td align="right" class="b">' + parseInt(item.speed) + '</td></tr>\
            </tbody>\
          </table>\
        </div>\
        <span>' + button + '</span>\
      </div>\
      <div class="clear"></div>\
    </div>\
  </div>'; 
  return html;
}
var getMyDinosaurItem = function(item) {
  var button = '<a onclick="sell(' + item.id + ')" class="button green bigrounded mid">Sell</a>';
  if (item.sale == 1) {
    button = '<a class="button gray bigrounded mid">On Sale</a>';
  }
  var html = '\
  \
  <div class="netting_4">\
  <div class="shadow_2 boxw" style="position:relative;">\
    <div class="lbs"></div>\
    <div class="name">' + item.name + '</div>\
    <div class="clear"></div>\
    <div class="rarity" style="color:'+getColor(dinosaurRaReArr[item.name].toLowerCase())+';background:url(./assets/pic/'+dinosaurRaReArr[item.name].toLowerCase()+'.png) left top/100% 96% no-repeat;">' + dinosaurRaReArr[item.name] + '</div>\
    <div class="lvl">' + Math.round(item.weight*100)/100 + ' Kg</div>\
    <div class="clear"></div>\
    <div class="fish-img-outer common level-5">\
     <a href="info.html?id=' + item.id + '" style="cursor:pointer;"> <img class="clickable" src="https://s3-ap-southeast-1.amazonaws.com/mobotoolpush/mu/game/dinosaur_park/' + item.id + '.300.png"></a></div>\
    <table class="pars _mb10" style="width:60%; margin:0 auto;">\
      <tbody>\
        <tr>\
          <th align="left">Power:</th>\
          <td align="right" class="b">' + parseInt(item.power) + '</td></tr>\
        <tr>\
          <th align="left">Agility:</th>\
          <td align="right" class="b">' + parseInt(item.flex) + '</td></tr>\
        <tr tooltipplacement="right">\
          <th align="left">Speed:</th>\
          <td align="right" class="b">' + parseInt(item.speed) + '</td></tr>\
      </tbody>\
    </table>\
    <div class="clear"></div>\
    <a href="info.html?id=' + item.id + '" class="clickable">\
      <img class="info" src="assets/pic/info.png"></a>\
    <div class="boxbut">' + button + '</div>\
    <div class="clear"></div>\
  </div>\
</div>\
\
';
  return html;
}

var getPages = function(current, total, func) {
  var i = 0, html = '<li><a onclick="{func}(1)">«</a></li>'.replace('{func}', func);
  if (current > 1) {
      html += '<li><a onclick="{func}({i})">←</a></li>'.replace('{func}', func).replace(/{i}/g, current - 1);
  }
  var preNum = 0;
  for (i = current - 5; i < current; i ++) {
      if (i < 1) continue;
      preNum ++;
      html += '<li><a onclick="{func}({i})">{i}</a></li>'.replace('{func}', func).replace(/{i}/g, i);
  }
  html += '<li class="active"><a onclick="{func}({i})">{i}</a></li>'.replace('{func}', func).replace(/{i}/g, current);
  for (i = current + 1; i < current + 10 - preNum; i ++) {
      if (i > total) continue;
      html += '<li><a onclick="{func}({i})">{i}</a></li>'.replace('{func}', func).replace(/{i}/g, i);
  }
  if (current < total) {
      html += '<li><a onclick="{func}({i})">→</a></li>'.replace('{func}', func).replace(/{i}/g, current + 1);
  }
  html += '<li><a onclick="{func}({i})">»</a></li>'.replace('{func}', func).replace(/{i}/g, total);
  html += '<div class="clear"></div>'
  return html;
}
var tpl_head = '\
          <div class="netting">\
            <div class="netting_4">\
                <div id="menu_icon">\
                    <a class="clickable"><img height="40" src="assets/pic/menu.png" width="40"></a>\
                </div>\
                &nbsp;\
            </div>\
            <div class="netting_4">\
              <div class="logo _tc">\
                <img src="assets/pic/logo.png" width="300"></div>\
            </div>\
            <div class="netting_4">\
              <div id="profile_box_top">\
                <div class="box1 shadow_2">\
                  <div class="_tm1">\
                    <div class="_tm1" id="profile_neb_address"></div>\
                    <div class="clear"></div>\
                  </div>\
                </div>\
              </div>\
            </div>\
          </div>\
          <div class="_tc" id="menu">\
            <ul>\
              <li>\
                <a href="market.html">Market</a></li>\
              <li class="">\
                <a href="my_dinosaur_list.html">My Dinosaur</a></li>\
              <li class="">\
                <a href="hatch.html">Hatch</a></li>\
              <li class="">\
                <a href="attack.html">Attack</a></li>\
              <li class="">\
                <a href="top.html">Top</a></li>\
              <li class="_r">\
                <a href="park.html">\
                  <img src="assets/pic/flash.png" style="vertical-align:middle;">Park</a></li>\
              <div class="clear"></div>\
            </ul>\
            <div class="clear"></div>\
          </div>';
          
var tpl_foot = '\
<div class="netting" style="font-size:17px;">\
  <div class="netting_8">\
    <a routerlink="/market" href="market.html">Market</a>·\
    <a routerlink="/my_assets" href="my_dinosaur_list.html">My Dinosaur</a>·\
    <a routerlink="/fight" href="attack.html">Attack</a>·\
    <a routerlink="/catch" href="hatch.html">Hatch</a>·\
    <a routerlink="/top" href="top.html">Top</a></div>\
  <div class="netting_4 _r">\
    <div class="bottom-menu">\
      <a href="park.html" >Park</a>\
  </div>\
</div>\
<div class="netting">\
  <div class="netting_12 _mt10">\
    <p class="_tm1 _tm10">\
      <a class="" target="_blank">User Agreement</a>·\
      <a class="">Privacy Policy</a>·\
      <a class="">Terms of Use</a></p>\
    <p class="_tm1">Copyright © 2018 Dinosaur Park — All Rights Reserved</p></div>\
</div>\
\
<div id="dialog_attack_no_dinosaur" class="dialog dialog614" style="display: none;">\
<p class="_mb25">You don\'t have crypto dinosaur available to perform an attack.</p>\
<hr style="border-top:1px solid #227039 !important;">\
<p class="_mt25">Get Your Crypto Dinosaur:</p>\
<p class="_tb6">1. Try to hatch one in "Hatch" page</p>\
<p>Gives you the random dinosaur for every Hatch ticket.</p>\
<a href="hatch.html" class="button blue bigrounded lit">Hatch</a>\
<p class="_tb6 _mt25">2. Buy from other players on the Market</p>\
<p>Choose the certain crypto dinosaur species with some experience and weight for the price that you consider fair.</p>\
<a href="market.html" class="button green bigrounded lit">Market</a>\
</div>\
\
<div id="dialog_sold" class="dialog dialog414" style="display: none;">\
<p class="_mb25">You need to set the price before you sell it.</p>\
<hr style="border-top:1px solid #227039 !important;">\
<p class="_mt25">Price:</p>\
<p class="_tb6"><input id="sold_money" type="text" name="sold_money" /> NAS</p>\
<p class="_mt20"><a class="button green bigrounded lit">Sell</a></p>\
</div>\
\
<div id="dialog_attack" class="dialog dialog614" style="display: none;">\
<div style="overflow-y:scroll; height: 540px;">\
  <p class="c3 _mb25">\
    Select one of your dinosaur tokens to send for attack:\
  </p>\
  <div id="dialog_dinosaur_list" class="dinosaur_list" style="padding-right:10px;">\
  <div class="_tc _mt25" style="height: 100px;"><img src="assets/pic/loading.gif" /></div>\
  </div>\
</div>\
\
<div id="dialog_message" class="dialog dialog314" style="display: none;">\
<p class="_mt25">message</p>\
</div>\
</div>';

var dialog_attack = null;
var dialog_sold = null;
var dialog_attack_no_dinosaur = null;
var dialog_message = null;
$(function() {
    $('#head').html(tpl_head);
    $('#foot').html(tpl_foot);
    $('#menu ul li').each(function(k, obj) {
      var href = $(obj).find('a').attr('href')
      if (location.href.indexOf(href) > -1) {
        $(obj).addClass('active')
      }
    });

    $("#dialog_attack").dialog({'title': 'Attack'},function(api){dialog_attack = api;});
    $("#dialog_sold").dialog({'title': 'Sell the dinosaur'},function(api){dialog_sold = api;});
    $("#dialog_attack_no_dinosaur").dialog({'title': 'Attack'},function(api){dialog_attack_no_dinosaur = api;});
    
    $("#dialog_message").dialog({
        'title': 'Message',
        'buttons': {
            'OK': function(api){api.close();}
        }
    },function(api){dialog_message = api;});
})

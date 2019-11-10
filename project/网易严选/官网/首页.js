$.get("./首页.json", (str) => {
  txt = str.title;
  // console.log(txt)
  for (var x = 0; x < txt.length; x++) {
    if (txt[x].class == "a") {
      var pop = ""
      pop += `
        <div class="sec2_con1">
            <span class="sec2_con2">${txt[x].span1}</span>
            <span class=${txt[x].redaa}>${txt[x].span2}</span>
        </div>
        <div class="sec2_con4">${txt[x].span3}</div>
        <div class="sec2_con5">
            <img class="sec2_Img" src=${txt[x].img} alt="">
        </div>
        `
      $(".sec2_bottom_title").eq(x).html(pop)

    } else {
      // console.log(x)
      var pop = ""
      pop += `
        <div class="sec2_tit1">
           <span class="sec2_tit2">${txt[x].span1}</span>
        </div>
        <div class="sec2_tit3">${txt[x].span3}</div>
        <div class="sec2_tit4">
            <img class="sec2_tit5" src=${txt[x].img} alt="">
        </div>
        `
      $(".sec2_btm_tb").eq(x - 2).html(pop)
    }
  }
  txt2 = str.title2
  // console.log(txt2)
  for (var y = 0; y < txt2.length; y++) {
    var pop1 = ""
    pop1 += `
        <div class="sec3_top">
            <img src=${txt2[y].img} alt="">
            <div class=${txt2[y].red}>
                <div class=${txt2[y].red2}>
                    <div class="sec3_red_top">${txt2[y].span1}</div>
                    <div class="sec3_red_bottom">${txt2[y].span2}</div>
                </div>
                <div class="sec3_red_rig">${txt2[y].span3}</div>
            </div>
        </div>
        <div class="sec3_letop">
            <img src=${txt2[y].letop} alt="">
        </div>
        <div class="sec3_bottom">
            <p class=${txt2[y].Pspan}>${txt2[y].wenzi}</p>
            <h4 class="sec3_btm_h3 sec3_btm_hh">${txt2[y].Hspan}</h4>
            <p class="sec3_btm_p">
                <span class="sec3_span2">${txt2[y].btmpZ1}</span>
                <span class="sec3_span2">${txt2[y].btmpZ2}</span>
                <span class="sec3_span3">${txt2[y].btmpZ3}</span>
            </p>
        </div>
        <div class="sec3_hove">
            <img src=${txt2[y].hoveimg} alt="">
        </div>
        `
    $(".sec3_Bul li").eq(y).html(pop1)
  }
  var index = 0;
  var open = true
  $(".sec3_btn_right").click(() => {
    if (open) {
      open = false
      if (index == 7) {
        index = 7;
      } else {
        index++
      }
      $(".sec3_div").animate({
        "left": "-1100" * index
      }, 600)
      setTimeout(function () {
        open = true
      }, 1000)
    }
  })
  $(".sec3_btn_left").click(() => {
    if (open) {
      open = false
      if (index == 0) {
        index = 0;
      } else {
        index--
      }
      $(".sec3_div").animate({
        "left": "-1100" * index
      }, 600)
      setTimeout(function () {
        open = true
      }, 1000)
    }
  })

  function Xka(wrap) {
    fz = wrap
    for (var z = 0; z < fz.length; z++) {
      var pop2 = ""
      pop2 += `
        <div class=${fz[z].class1}>
            <img class=${fz[z].class2} src=${fz[z].img1} alt="">
            <div class=${fz[z].class3}>
                <div class=${fz[z].class4}>
                    <div class="sec3_red_top">${fz[z].span1}</div>
                    <div class="sec3_red_bottom">${fz[z].span2}</div>
                </div>
                <div class="sec3_red_rig">${fz[z].span3}</div>
            </div>
        </div>
        <div class="sec4_letop">
            <img src=${fz[z].img2} alt="">
        </div>
        <div class="sec4_xia">
            <p class=${fz[z].class5}>${fz[z].txt1}</p>
            <h4 class=${fz[z].class6}>${fz[z].txt2}</h4>
            <p class=${fz[z].class7}>
                <span class=${fz[z].class8}>${fz[z].snpm1}</span>
                <span class=${fz[z].class8}>${fz[z].snpm2}</span>
                <span class="sec4-npm6">${fz[z].snpm3}</span>
            </p>
        </div>
        `
      $(".sec4_wrap").eq(z).html(pop2)
    }
  }
  Xka(str.title3)

  $(".sec4_item").eq(0).on("click",function(){
    Xka(str.title3)
    $(this).addClass("active").siblings().removeClass("active")
  })
  $(".sec4_item").eq(1).click(function(){
    Xka(str.title4)
    $(this).addClass("active").siblings().removeClass("active")
  })

  var txt4 = str.title5
  for (var z = 0; z < txt4.length; z ++){
    var pop3 = ""
    pop3 += `
    <div class="sec5_itm_d1">
      <img src=${txt4[z].img} alt="">
    </div>
    <div class="sec5_itm_d2">
        <span class="sec5_itm_span1">${txt4[z].wrap1}</span>
        <span class="sec5_itm_span2">
            <span>${txt4[z].span1}</span>
            <span>${txt4[z].span2}</span>
            <span>${txt4[z].span3}</span>
            <span>${txt4[z].span4}</span>
        </span>
        <span class="sec5_itm_span3">
            <span>${txt4[z].wrap2}</span>
        </span>
        <div class="sec5_itm_span4">
            <a href="javascript:;">${txt4[z].wrap3}</a>
        </div>
    </div>
    `
    $(".sec5_itm").eq(z).html(pop3)
  }

  var txt5 = str.title6
  for (var i = 0;i < txt5.length;i ++){
    var pop4 = ""
    pop4 += `
    <div class="sec5_onwrap_le">
       <img src=${txt5[i].img1} alt="">
    </div>
    <div class="sec5_onwrap_ri1">${txt5[i].span3}</div>
    <div class="sec5_onwrap_ri2">
        <span>${txt5[i].span4}</span>
        <span>${txt5[i].span5}</span>
    </div>
    <i class=${txt5[i].class}></i>
    `
    $(".sec5_onwrap").eq(i).html(pop4)
  }
  var pop5 = str.title7
  for (var x = 0;x < pop5.length;x ++){
    var txt6 = ""
      txt6 += `
      <div class="sec6_nav">
        <div class="sec6_nav_le">
            <h3>${pop5[x].info1.h3}</h3>
        </div>
      <div class="sec6_nav_ri">
          <div class="sec6_nav_list">
              <span class="sec6_are">
                  <a href="">${pop5[x].info1.a1}</a>
              </span>
              <span class="sec6_are">
                  <b>${pop5[x].info1.b1}</b>
                  <a href="">${pop5[x].info1.a2}</a>
              </span>
              <span class="sec6_are">
                  <b>${pop5[x].info1.b2}</b>
                  <a href="">${pop5[x].info1.a3}</a>
              </span>
              <span class="sec6_are">
                  <b>${pop5[x].info1.b3}</b>
                  <a href="">${pop5[x].info1.a4}</a>
              </span>
              <span class="sec6_are">
                  <b>${pop5[x].info1.b4}</b>
                  <a href="">${pop5[x].info1.a5}</a>
              </span>
              <span class="sec6_are">
                  <b>${pop5[x].info1.b5}</b>
                  <a href="">${pop5[x].info1.a6}</a>
              </span>
              <span class="sec6_are">
                  <b>${pop5[x].info1.b6}</b>
                  <a href="">${pop5[x].info1.a7}</a>
              </span>
          </div>
          <a class="sec6_a1" href="javascript:;">${pop5[x].info1.a8}</a>
      </div>
      </div>
      <div class="sec6_g_row">
          <div class="swiper-container" style="height:100%">
              <div class="swiper-wrapper">
                  <div class="swiper-slide"
                      style="background-image:url(${pop5[x].info2.lunbo1})"></div>
                  <div class="swiper-slide"
                      style="background-image:url(${pop5[x].info2.lunbo2})"></div>
                  <div class="swiper-slide"
                      style="background-image:url(${pop5[x].info2.lunbo3})"></div>
                  <div class="swiper-slide"
                      style="background-image:url(${pop5[x].info2.lunbo4})"></div>
              </div>
              <div class="swiper-pagination swiper-pagination-white"></div>
              <div class="swiper-button-next swiper-button-white next_right"></div>
              <div class="swiper-button-prev swiper-button-white prev_left"></div>
          </div>
      </div>
      <div class="sec6_g_bom">
        <ul class="sec6_ul">
               
        </ul>
      </div> 
      <script>
        var swiper = new Swiper('.swiper-container', {
          autoplay: {
              delay: 3000,
              disableOnInteraction: false,
          },
          spaceBetween: 30,
          effect: 'fade',
          loop: true,
          pagination: {
              el: '.swiper-pagination',
              clickable: true,
          },
          navigation: {
              nextEl: '.next_right',
              prevEl: '.prev_left',
          },
        });
      </script>
      `
      $(".sec6_wrap").eq(x).html(txt6)
      var pop6 = ""
      for (var y = 0;y <pop5[x].info3.length;y ++){
        pop6 += `
          <li class="sec6_lit">
            <div class="sec6_lit_top">
              <div class="sec6_lit-on1">
                <img src=${pop5[x].info3[y].img1} alt="">
              </div>
              <div class="sec6_lit-on2">
                  <img src=${pop5[x].info3[y].letop} alt="">
              </div>
              <div class="sec6_fen">
                  <div class="sec6_fen-left">
                      <span>${pop5[x].info3[y].span1}</span>
                      <span>${pop5[x].info3[y].span2}</span>
                  </div>
                  <div class="sec6_fen-right">
                    ${pop5[x].info3[y].span3}
                  </div>
              </div>
            </div>
            <div class="sec6_lit_btm">
                <div class=${pop5[x].info3[y].class}>${pop5[x].info3[y].txt}</div>
                <h4>${pop5[x].info3[y].p}</h4>
                <p class="sec6_btm_P">
                    <span>${pop5[x].info3[y].money1}</span>
                    <span>${pop5[x].info3[y].money2}</span>
                </p>
            </div>
            <div class="dec6_hove">
              <img src=${pop5[x].info3[y].hover} alt="">
            </div>
          </li>
        `
      }
      $(".sec6_ul").eq(x).html(pop6)
  }



  for (var x =0;x<str.title8.length;x++){
    var txt7 = ""
    txt7 += `
      <div class="sec7_top">
        <h3>${str.title8[x].h3}</h3>
        <span>${str.title8[x].span}</span>
      </div>
      <div class="sec7_btm">
          <div>
              <img src=${str.title8[x].img1} alt="">
          </div>
          <div>
              <img src=${str.title8[x].img2} alt="">
          </div>
          <div>
              <img src=${str.title8[x].img3} alt="">
          </div>
      </div>
  `
  $(".sec7").eq(x).html(txt7)
  }
 

})





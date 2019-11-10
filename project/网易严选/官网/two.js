$.get("./two.json", (str) => {
    var grow = window.location.search.substring(1)
    feizai(str[grow])
})

function feizai(wrapon) {
    var art = ""
    art = `
    <div class="art1">
        <a href="">${wrapon.test.h}</a>
        <span class="art1_span1"></span>
        <span>${wrapon.test.span1}</span>
    </div>
    <div class="article">
        <div class="swiper-container" style="height:100%">
            <div class="swiper-wrapper">
                <div class="swiper-slide" style=background:url(${wrapon.test.img1})></div>
                <div class="swiper-slide" style=background:url(${wrapon.test.img2})></div>
                <div class="swiper-slide" style=background:url(${wrapon.test.img3})></div>
                <div class="swiper-slide" style=background:url(${wrapon.test.img4})></div>
                <div class="swiper-slide" style=background:url(${wrapon.test.img5})></div>
            </div>
            <div class="swiper-pagination swiper-pagination-white"></div>
            <div class="swiper-button-next swiper-button-white next_right"></div>
            <div class="swiper-button-prev swiper-button-white prev_left"></div>
        </div>
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

    <div class="art2_cent2">
            <div class="art2">
                <div class="art2_top">
                    <span class="art2_top-span">分类：</span>
                    <div class="art2_top-data art2_top_a"></div>
                </div>
                <div class="art2_zhong">
                    <span>配送地区：</span>
                    <div class="art2_top-data">
                        <a href="">全部</a>
                        <a href="">香港</a>
                        <a href="">澳门</a>
                        <a href="">台湾</a>
                        <a href="">日韩</a>
                        <a href="">欧洲</a>
                        <a href="">美洲</a>
                    </div>
                </div>
                <div class="art2_btm">
                    <span>排序：</span>
                    <a href="" class="art2_btm-a">默认</a>
                    <a href="">价格
                        <div class="art2_btm-tu1">
                            <i></i>
                            <i></i>
                        </div>
                    </a>
                    <a href="">
                        上架时间
                        <i></i>
                    </a>
                </div>
            </div>

            <div class="srt3">
                <div class="srt3_box">
                    
                </div>
            </div>
    </div>
    `
    $(".total_cent").html(art)

    var list = ""
    for (key in wrapon.wrap)  {
        // console.log(wrapon.wrap[key])
        list += `
            <a href="">${wrapon.wrap[key]}</a>
        `
    }
    $(".art2_top-data.art2_top_a").html(list)


    
    aa = ""
    for (var x = 0;  x < wrapon.olist.length ;x++ ) {
        hr = ""
        hr += `
        <div class="srt3_box_top">
          <span>${wrapon.olist[x].olitop.span}</span>
          <p>${wrapon.olist[x].olitop.p}</p>
        </div>
        <ul class="srt3_ul">
           
        `

        hh = ""
        for (var y = 0;  y < wrapon.olist[x].olibtm.length ;y++ ) {
            hh += `
            <li class="srt3_li">
                <div class="srt3_itm">
                    <div class="srt3_itm-top">
                        <div class="srt3_itm-img">
                            <img src=${wrapon.olist[x].olibtm[y].img1} alt="">
                        </div>
                        <div class="srt3_le_top">
                            <img src=${wrapon.olist[x].olibtm[y].img2} alt="">
                        </div>
                        <div class="srt3_red" style="background:url(${wrapon.olist[x].olibtm[y].red});background-repeat: no-repeat;">
                            <div class="srt3_red_lef" style="background:url(${wrapon.olist[x].olibtm[y].red2});background-repeat: no-repeat;background-size: auto 100%;background-position: right;">
                                <span class="srt3_lef_span1">${wrapon.olist[x].olibtm[y].span1}</span>
                                <span class="srt3_lef_span2">${wrapon.olist[x].olibtm[y].span2}</span>
                            </div>
                            <p class="srt3_rig">${wrapon.olist[x].olibtm[y].span3}</p>
                        </div>
                    </div>
                    <div class="srt3_itm-btm">
                        <span class=${wrapon.olist[x].olibtm[y].classname}>${wrapon.olist[x].olibtm[y].p1}</span>
                        <h4>${wrapon.olist[x].olibtm[y].p2}</h4>
                        <p>
                            <span class="mony1">${wrapon.olist[x].olibtm[y].mony1}</span>
                            <span class="mony2">${wrapon.olist[x].olibtm[y].mony2}</span>
                        </p>
                        <div class="srt3_foot">
                            <hr>
                            <p>${wrapon.olist[x].olibtm[y].p3}</p>
                        </div>
                    </div>
                    <div class="srt3_hover">
                        <img src=${wrapon.olist[x].olibtm[y].hover} alt="">
                    </div>
                </div>
            </li>
            `
        }
        // hr += hh + "</ul>"
        aa += hr + hh + "</ul>"

    }

        $(".srt3_box").html(aa)

}

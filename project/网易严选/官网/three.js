$.get("./three.json", (str) => {
    for (var x = 0; x < str.info.length; x++) {
        var polit = ""
        polit += `
        <div class="art_container">
            <div class="swiper-container" style="width: 100%;height:100%">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" style="background-image:url(${str.info[x].img1})">
                    </div>
                    <div class="swiper-slide" style="background-image:url(${str.info[x].img2})">
                    </div>
                    <div class="swiper-slide" style="background-image:url(${str.info[x].img3})">
                    </div>
                    <div class="swiper-slide" style="background-image:url(${str.info[x].img4})">
                    </div>
                </div>
                <div class="swiper-pagination swiper-pagination-white"></div>
                <div class="swiper-button-next swiper-button-white ri_next"></div>
                <div class="swiper-button-prev swiper-button-white le_prev"></div>
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
                    nextEl: '.ri_next',
                    prevEl: '.le_prev',
                }
            })
        </script>
        `
        $(".art").html(polit)
    }

    var polit2 = ""
    polit2 = `
        <div class="art1_top">
            <h2 class="art1_top_h2">严选推荐</h2>
            <a class="art1_top_a" href="">更多></a>
        </div>
        <div class="art1_btm">  
    `
    hh = ""
    for (var x = 0; x < str.info2.length; x++) {
        hh += `
            <div class="art1_btm1-on">
                <div>
                    <img class="art1-on_img" src=${str.info2[x].img}>
                </div>
                <h3>${str.info2[x].h3}</h3>
                <p>${str.info2[x].p}</p>
            </div>
        `
    }
    polit2 += hh + "</div>"
    $(".art1_info").html(polit2)

    var polit3 = ""
    polit3 = `
    <div class="srt2_top" >
        <h2>挑款师推荐</h2>
        <a href="javascript:;">更多></a>
    </div >
    <div class="srt2_btm">
        
    `
    var hr = ""
    for (var x = 0;x < str.info3.length;x ++){
        hr += `
        <a class="list_itm" href="javascript:;">
            <div class="list_itm_top">
                <img src=${str.info3[x].img1} alt="">
            </div>
            <div class="list_itm_btm">
                <div class="list_btm-zi1">
                    <div>
                        <img src=${str.info3[x].img2} alt="">
                    </div>
                        <div>${str.info3[x].span1}</div>
                    </div>
                <div>${str.info3[x].span2}</div>
                <p>${str.info3[x].span3}</p>
            </div>
        </a>
        `
    }
    polit3 += hr + "</div>"
    $(".srt2_cent").html(polit3)


    var post = ""
    post = `
        <div class="srt3_top">
            <h2>口碑商品</h2>
            <a href="">更多></a>
        </div>
        <div class="srt3_btm">
        
    `
    var hr1 = ""
    for (var x = 0; x < str.info4.length;x ++){
        hr1 += `
        <a class="srt3_itm" href="">
            <div class="srt3_lt">
                <img class="srt3_lt-img" src=${str.info4[x].img} alt="">
            </div>
            <div class="srt3_rt">
                <h4>${str.info4[x].list}</h4>
                <p>${str.info4[x].span}</p>
            </div>
        </a>
        `
    }
    post += hr1 + "</div>"
    $(".srt3").html(post)

    var squire = ""
    squire = `
        <div class="srt4_top">
            <h2>特色系列</h2>
            <span>更多></span>
        </div>
        <div class="srt4_btm">
            <div class="srt4_btm-le">
                <img class="srt4_img" src="./img/df93bb5e49740960c4639657d6bb834d.jpg">
                <div class="srt4_nei">
                    <h3>
                        <span>棉质生活</span>
                        <span>></span>
                    </h3>
                    <p>无荧光的全棉用品更安心</p>
                </div>
            </div>
            <div class="srt4_btm-rt">
                <img class="srt4_img" src="./img/f11bfe1d0a6d47aef2b5035d10870fb6.jpg">
                <div class="srt4_nei">
                    <h3>
                        <span>珐琅系列</span>
                        <span>></span>
                    </h3>
                    <p>每个大厨都有的万能锅</p>
                </div>
            </div>
        </div>
    `
    $(".srt4").html(squire)

    var aa = ""
    for (var i = 0;i < str.info5.length;i ++){
        aa +=`
            <div class="srt5_itm">
                <div>${str.info5[i].btn}</div>
            </div>
        `
    }
    $(".srt5_pin").html(aa)
    
    $(".srt5_itm").click(function(){
        fei($(this).index())
        $(this).addClass("active").siblings().removeClass("active")
    })

    function fei(x){
        var bb = ""
            bb += `
            <div class="srt5_tCont-lt">
            <div class="srt5-bom">
                <div></div>
                <p>${str.info6[x].p}
                </p>
            </div>
            <a class="srt5-img" href="">
                <img src=${str.info6[x].img} alt="">
                <div class="hove_BJ"></div>
                <span class="hove_zi">去看看></span>
            </a>
            </div>
            <div class=${str.info6[x].class}>
                <div class="srt5_Button">
                    <div>
                    ${str.info6[x].btn}
                    </div>
                </div>
                <div class="shensuo">
                    <a class="Item on" href="">
                        <div>
                            <img src=${str.info6[x].img2} alt="">
                        </div>
                        <p>${str.info6[x].span1}</p>
                    </a>
                    <a class="Item" href="">
                        <div>
                            <img src=${str.info6[x].img3} alt="">
                        </div>
                        <p>${str.info6[x].span2}</p>
                    </a>
                </div>
            </div>
            `
        $(".srt5_tCont").html(bb)
    }
    fei(0)

   

})
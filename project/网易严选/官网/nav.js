var time = setInterval(()=>{
    $("#head_wrap").animate({"top":"-18"},300,()=>{
        $("#head_wrap li").first().appendTo($("#head_wrap"))
        $("#head_wrap").css("top",0)
    })
},2000)
// $("#head_wrap").on("mouseover",function(){
//      clearInterval(time)
// })
// $("#head_wrap").on("mouseout",function(){

// })

$.get("./nav.json", (txt) => {
    console.log(txt)
    for (var x = 0; x < txt.length; x++) {
        var pop = "";
        for (var y = 0; y < txt[x].length; y++) {
            pop += `
                <div class="json_BB">
                    <a class="json_BBa" href="">
                        <img class="json_img" src=${txt[x][y].img1} alt="">
                        <span class="json_span">${txt[x][y].span1}</span>
                    </a>
                </div>
            `
        }
        $(".json_bottom").eq(x).html(pop)
    }
})

$(".a-itm").each(function(i){
    $(".a-itm").eq(i).click(()=>{
        window.open("./two.html?" + i)
    })
})

// $(".a-itm").click(function(){
//    var i= $(this).index()
//    console.log((this).index())
//    window.open("./two.html?" + i)
// })


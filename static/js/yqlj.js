$(function() {

    // 底部展开
    var oInd06Li = $(".yqlj .nav_list .list li");
    var oInd06bo = $(".yqlj .nav_list .list li .bor");
    var oInd06Di = $(".yqlj .nav_list .list li .list_top");
    var oInd06a = $(".yqlj .nav_list .list li .list_top a");
    for (var i = 0; i < oInd06Li.length; i++) {
        $($(oInd06Li)[i]).on("mouseover", function() {
            var index = $(this).index();
            var oLength = $(this).find("a").length;
            $(this).find(".list_top").stop().animate({ height: "150px" }, 200);
            $(this).css({ background: "#1695EF" }).find("p").css({ color: "#fff" });
            $(oInd06bo).css({ background: "#fff" })


        })
        $($(oInd06Li)[i]).on("mouseout", function() {
            $(this).css({ background: "#fff" }).find("p").css({ color: "#333" });
            $(this).find(".list_top").stop().animate({ height: 0 + "px" }, 300);
            $(oInd06bo).css({ background: "#fff" })
        })
    }



    // nav展开
    var oInd09Co = $(".zhengxie17370_ind09 .text_cover");
    var oInd09Li = $(".zhengxie17370_ind09 .nav_bar .nav_list li");
    for (var i = 0; i < oInd09Li.length; i++) {
        $($(oInd09Li)[i]).on("mouseover", function() {
            $(oInd09Co).show();
            $(this).find(".drop").show();
        })
        $($(oInd09Li)[i]).on("mouseout", function() {
            $(oInd09Co).hide();
            $(this).find(".drop").hide()
        })
    }











})
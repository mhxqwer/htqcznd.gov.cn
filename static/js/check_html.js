function check_htmlcon() {
    
    var link_str="";
    /**
     * 检查新闻列表页
     */
    var html_content = document.body.innerHTML;
    var link_arr_news = html_content.match(/\/html\/[a-z]+\/[0-9]+\/[\w\/]+\.html/g);
    if(link_arr_news && link_arr_news.length>0) {
        var link_str_news = link_arr_news.join("|");
        link_str+="link_str_news="+link_str_news;
    }
    /**
     * 检查栏目页
     */
    var link_arr_cate = html_content.match(/\/html\/[a-z]+\/[A-Z\/]+\/index\.html/g);
    if(link_arr_cate && link_arr_cate.length>0) {
        var link_str_cate = link_arr_cate.join("|");
        link_str+="link_str_cate="+link_str_cate;
    }
    /**
     * 发到服务器进行验证
     */
    $.ajax({
        url: "/index.php?m=content&c=index&a=check_html",
        type: "post",
        data: link_str
    });
}
setTimeout("check_htmlcon();", 1000);
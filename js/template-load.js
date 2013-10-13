var json_data;
$.getJSON('data/data.json', function(data) {
    json_data = data;
    var template = $('#menu_template').html();
    var html = Mustache.to_html(template, data);
    $('#menu').html(html);
    loadData();
});

function loadData() {
    var params = new Object;
    var tt = document.location.href.split("?")[1].split('&');
    for(i in tt) {
        params[tt[i].split("=")[0]] = tt[i].split("=")[1];
    }
    for(i in json_data.pages) {
        var page = json_data.pages[i];
        if(page.name == params['page']) {
            var template = $('#'+page.name+'_template').html();
            if(page.data != null)
                template = Mustache.to_html(template, page.data);
            $("#content").html(template);
        }
    }
}


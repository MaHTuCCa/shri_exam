var json_data;
$.getJSON('data/data.json', function(data) {
    json_data = data;
    var template = $('#menu_template').html();
    var html = Mustache.to_html(template, data);
    $('#menu').html(html);

    loadData();
});

$(window).on("popstate", function(e) {
   loadData();
});

function goToURL(url) {
    history.pushState(null, null, url);
    loadData();
}

function loadData() {
    var params = new Object;
    var paramPair = document.location.href.split("?")[1];
    if(paramPair == null) {
        params['page'] = 'home';
    } else {
        paramPair = paramPair.split("#")[0].split('&');
        for(i in paramPair) {
            params[paramPair[i].split("=")[0]] = paramPair[i].split("=")[1];
        }
    }

    for(i in json_data.pages) {
        var page = json_data.pages[i];
        if(page.name == params['page']) {
            var tmpl_name = page.name;
            var data = page.data;
            if(params['item'] >= 0) {
                tmpl_name += '_item';
                data = null;
                for(_data in page.data) {
                    for(i in page.data[_data]) {
                        if(page.data[_data][i].id == params['item']) {
                            data = page.data[_data][i];
                        }
                    }
                }
            }
            var template = $('#'+tmpl_name+'_template').html();

            if(data != null)
                template = Mustache.to_html(template, data);
            $("#content").html(template);
        }
    }
}


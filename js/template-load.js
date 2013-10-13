
$.getJSON('data/student_list.json', function(data) {
    var template = $('#student_template').html();
    var html = Mustache.to_html(template, data);
    html = html.split("&lt;").join("<").split("&gt;").join(">").split("&#x2F;").join("/");
    $('#student_template').html(html);
});

$.getJSON('data/lection_list.json', function(data) {
    var template = $('#lection_template').html();
    var html = Mustache.to_html(template, data);
    html = html.split("&lt;").join("<").split("&gt;").join(">").split("&#x2F;").join("/");
    $('#lection_template').html(html);
});
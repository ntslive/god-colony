(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-6061419-3', 'auto');

$(document).ready(function() {
    var informationClass = 'display-information';

    $('#information-button').click(function(e) {
        console.log('page ready');
        var pageInfo = $('#page-information');

        if (pageInfo.hasClass(informationClass)) {
            pageInfo.removeClass('display-information');
            $(this).text("MORE INFO");
        } else {
            pageInfo.addClass('display-information');
            $(this).text("HIDE INFO");
        }
    });

    ga('send', 'pageview', url);
});


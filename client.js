

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
});


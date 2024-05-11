$('#open-btn').on('click', () => {
    $('#close-btn').css('display', 'block');
    $('#open-btn').css('display', 'none');
    $('.mob-nav').css('display', 'block');
});

$('#close-btn').on('click', () => {
    $('#close-btn').css('display', 'none');
    $('#open-btn').css('display', 'block');
    $('.mob-nav').css('display', 'none');
});
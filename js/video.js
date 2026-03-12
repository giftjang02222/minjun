$(function(){
    $('.gallery-collection li').each(function(index, el){
        $(el).mouseenter(function(){
            $(this).find('video')[0].play()
        })
        $(el).mouseleave(function(){
            $(this).find('video')[0].pause()
            $(this).find('video')[0].currentTime = 0
        })
        $(el).click(function(){
            const title = $(this).find('h3').text()
            const text = $(this).find('p').text()
            const videolink = $(this).find('video').attr('src')

            $('.popup').find('h2').text(title)
            $('.popup').find('p').text(text)
            $('.popup').find('video').attr('src', videolink)

            $('.popup').addClass('on')
            $('.popup').find('video')[0].play()

        })
    })
    $('.popup button').click(function(){
        $('.popup').removeClass('on')
    })
    $('.menu').click(function(){
        $('body, .menu, .ability h2, .gallery .gallery-header h2').toggleClass('on')
    })
})
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
$(function(){
    $('.tabnav li').click(function(){
        let idx = $(this).index()
        console.log(idx)
        $('.tabnav li').removeClass('on')
        $(this).addClass('on')
        $('.tabitem').hide()
        $('.tabitem').eq(idx).show()
    })
    $('.tabnav li').eq(0).trigger('click')

    // eq = 해당하는 인덱스번호
    // trigger = 강제로 이벤트 발생
})
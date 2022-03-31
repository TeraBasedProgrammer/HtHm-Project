/* Корректировка работы тега <audio> 

(на странице одновременно может играть только одна песня; по завершению предыдущего трека начинает играть следующий) */

let audioNL = document.querySelectorAll('audio');
        let audio = Array.apply(null, audioNL);
        audio.forEach(t => {
            let index = audio.indexOf(t);

            t.addEventListener('play', ()=> {
                audio.forEach(subT => {
                    subT !== audio[index] ?
                    (subT.pause(), subT.currentTime = 0) :
                    subT.play()
                })
            })
            t.addEventListener('ended', ()=> {
                t.currentTime = 0;
                index !== audio.length - 1 ?
                    audio[index + 1].play() :
                    null
            })
        });

/* Обработка scroll-up кнопки */

$(function() {
  $('.scrollup').click(function() {
    $("html, body").animate({
      scrollTop:0
    },0);
  })
})
$(window).scroll(function() {
  if ($(this).scrollTop()>400) {
    $('.scrollup').fadeIn();
  }
  else {
    $('.scrollup').fadeOut();
  }
});



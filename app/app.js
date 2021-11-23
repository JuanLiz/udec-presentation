let cloud= document.getElementById('cloud1');
        let cloud2= document.getElementById('cloud2');
        let cloud3= document.getElementById('cloud3');
        let college= document.getElementById('universidad');
        let text= document.getElementById('text');
        let text2= document.getElementById('text2');

        window.addEventListener('scroll', function () {
            let value= window.scrollY;
            cloud.style.top = value*0.45 + 'px';
            cloud2.style.top = value*0.45 + 'px';
            cloud3.style.top = value*0.45 + 'px';
            college.style.top = value *-0.5+ 'px';
            text.style.marginLeft = value * 0.2+ 'px';
            text2.style.marginLeft = value * 0.2+ 'px';
})


AOS.init();


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var additionalOptions = {
    default_bg_color: {r:254, g:254, b:227},
    language: "es",
    font: null
}
window.timeline = new TL.Timeline('timeline-embed', 'timeline.json',additionalOptions);


$(function() {

    $(".btn").on("click", function() {
      //hide all sections
      $(".content-section").hide();
      //show the section depending on which button was clicked
      $("#" + $(this).attr("data-section")).show();
    });
    
    });

    var myModal = document.getElementById('exampleModal')
    var myInput = document.getElementById('myInput')
    
    myModal.addEventListener('shown.bs.modal', function () {
      myInput.focus()
    })
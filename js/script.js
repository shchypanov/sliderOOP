window.onload = function () {


  new Sliders({
    images: '.slider1 img',
    btnPrev: '.slider1 .switch .prev',
    btnNext: '.slider1 .switch .next',
    auto: true,
    rate: 3000
  });

  new Sliders({
    images: '.slider2 img',
    btnPrev: '.slider2 .switch .prev',
    btnNext: '.slider2 .switch .next',
    auto: false
  });


};
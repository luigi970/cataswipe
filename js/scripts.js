window.onload = function (){
    var numPage = 1
    var page = []
    for(let i = 0; i < 4; i++) {
        //numPage + i;
        page.push(numPage + i);
    }

    page.forEach((pag) => {
        fetch('content-page-' + pag + '.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.page-' + pag).innerHTML = data;
        });
    })

}


/* fetch('content-page-' + numPage + '.html')
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector('.page-' + numPage).innerHTML = data;
});
fetch("content-page-2.html")
.then(response => {
  return response.text()
})
.then(data => {
  document.querySelector(".page-2").innerHTML = data;
}); */


/* ******  swipe.js  ****** */
// pure JS
var element = document.getElementById('slider'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next');

window.mySwipe = new Swipe(element, {
  startSlide: 0,
  auto: false,
  draggable: true,
  autoRestart: false,
  continuous: true,
  disableScroll: true,
  stopPropagation: true,
  callback: function(index, element) {},
  transitionEnd: function(index, element) {}
});

// using jQuery
//window.mySwipe = $('#slider').Swipe().data('Swipe');

prevBtn.onclick = mySwipe.prev;
nextBtn.onclick = mySwipe.next;
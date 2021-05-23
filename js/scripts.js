let pages = []
for(let i = 1; i < 5; i++) {
    pages.push(i);
}


pages.forEach((pag) => {
  // Crea las divs para contener los html para usar con swipe
  let div = document.createElement('div');
  div.classList.add('page-' + pag);
  document.querySelector(".swipe-wrap").appendChild(div)

  // Conexion con archivos html
  async function fetchConexion() {
    const conexion = await fetch('content-page-' + pag + '.html');
    const response = await conexion.text();
    return response;
  }
  fetchConexion().then(data => {
    document.querySelector('.page-' + pag).innerHTML = data;
  }).catch(error => {
    console.log('Error', error);
  })
});

/* pages.forEach((pag) => {
    fetch('content-page-' + pag + '.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.page-' + pag).innerHTML = data;
    });
}) */

/* pages.forEach((pag) => {
  async function fetchConexion() {
    const conexion = await fetch('content-page-' + pag + '.html');
    const response = await conexion.text();
    return response;
  }
  fetchConexion().then(data => {
    document.querySelector('.page-' + pag).innerHTML = data;
  }).catch(error => {
    console.log('Error', error);
  })
}) */

/*******/


/* function addElement() {
  const arrayPagina = ['page-1','page-2','page-3','page-4'];
  arrayPagina.forEach((pag) => {
      let div = document.createElement('div');
      div.classList.add(pag);
      document.querySelector(".swipe-wrap").appendChild(div)
  });
}
document.body.onload = addElement; */


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
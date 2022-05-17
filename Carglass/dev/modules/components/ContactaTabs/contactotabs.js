// $('#tab1').click(function(){
//     $('#ctnt-1').addClass('active')
//     $('#ctnt-2').removeClass('active')
//     $('#ctnt-3').removeClass('active')
//     $('#ctnt-4').removeClass('active')
//   });

//   $('#tab2').click(function(){
//     $('#ctnt-2').addClass('active')
//     $('#ctnt-1').removeClass('active')
//     $('#ctnt-3').removeClass('active')
//     $('#ctnt-4').removeClass('active')
//   });

//   $('#tab3').click(function(){
//     $('#ctnt-3').addClass('active')
//     $('#ctnt-2').removeClass('active')
//     $('#ctnt-1').removeClass('active')
//     $('#ctnt-4').removeClass('active')
//   });

//   $('#tab4').click(function(){
//     $('#ctnt-4').addClass('active')
//     $('#ctnt-2').removeClass('active')
//     $('#ctnt-3').removeClass('active')
//     $('#ctnt-1').removeClass('active')
//   });

function showTab1() {
  var element = document.getElementById("ctnt-1");
  var element2 = document.getElementById("ctnt-2");
  var element3 = document.getElementById("ctnt-3");
  var element4 = document.getElementById("ctnt-4");
  element.classList.add("active");
  element2.classList.remove("active");
  element3.classList.remove("active");
  element4.classList.remove("active");

  var tab1 = document.getElementById("tab1");
  var tab2 = document.getElementById("tab2");
  var tab3 = document.getElementById("tab3");
  var tab4 = document.getElementById("tab4");

  tab1.classList.add("active");
  tab2.classList.remove("active");
  tab3.classList.remove("active");
  tab4.classList.remove("active");
}

function showTab2() {
  var element = document.getElementById("ctnt-1");
  var element2 = document.getElementById("ctnt-2");
  var element3 = document.getElementById("ctnt-3");
  var element4 = document.getElementById("ctnt-4");
  element2.classList.add("active");
  element.classList.remove("active");
  element3.classList.remove("active");
  element4.classList.remove("active");

  var tab1 = document.getElementById("tab1");
  var tab2 = document.getElementById("tab2");
  var tab3 = document.getElementById("tab3");
  var tab4 = document.getElementById("tab4");

  tab2.classList.add("active");
  tab1.classList.remove("active");
  tab3.classList.remove("active");
  tab4.classList.remove("active");
}

function showTab3() {
  var element = document.getElementById("ctnt-1");
  var element2 = document.getElementById("ctnt-2");
  var element3 = document.getElementById("ctnt-3");
  var element4 = document.getElementById("ctnt-4");
  element3.classList.add("active");
  element2.classList.remove("active");
  element.classList.remove("active");
  element4.classList.remove("active");

  var tab1 = document.getElementById("tab1");
  var tab2 = document.getElementById("tab2");
  var tab3 = document.getElementById("tab3");
  var tab4 = document.getElementById("tab4");

  tab3.classList.add("active");
  tab2.classList.remove("active");
  tab1.classList.remove("active");
  tab4.classList.remove("active");
}
function showTab4() {
  var element = document.getElementById("ctnt-1");
  var element2 = document.getElementById("ctnt-2");
  var element3 = document.getElementById("ctnt-3");
  var element4 = document.getElementById("ctnt-4");
  element4.classList.add("active");
  element2.classList.remove("active");
  element.classList.remove("active");
  element3.classList.remove("active");

  var tab1 = document.getElementById("tab1");
  var tab2 = document.getElementById("tab2");
  var tab3 = document.getElementById("tab3");
  var tab4 = document.getElementById("tab4");

  tab4.classList.add("active");
  tab2.classList.remove("active");
  tab3.classList.remove("active");
  tab1.classList.remove("active");
}


// function getClickID(clickID) {
//  this.id
// }
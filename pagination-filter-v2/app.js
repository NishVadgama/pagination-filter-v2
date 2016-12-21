//   Meets expectations
//1. onLoad, show first 10 students only
//2. Calculate number of pages needed
//3. add page links/numbers dynamically
//4. When user clicks on a page, students for that page should show
//5. Program should work for any number of students

// Exceeds expectations
//1. include a searchable function
//2. when search button is clicked, it will return search inputs text
//3. if no matches found, return 'error message'

const studentList = document.getElementsByClassName('student-list'); // The UL that holds on the student li's
const studentItem = document.getElementsByClassName('student-item'); //This holds each student section block
const numberOfStudents = studentItem.length;
const itemsPerPage = 10;
const numberOfLinks = Math.ceil(numberOfStudents/itemsPerPage);

// The below code will only show the first 10 students on loading
$(".student-item").hide();
$(".student-item").slice(0, 10).show();

//creating tree/html to DOM  (This creates the div + UL)
var $pagination = $("<div class='pagination'></div>");
$($pagination).append("<ul class ='paginationUL'></ul>");
$(".student-list").after($pagination);

var pageNumber = 0;
var start = itemsPerPage * pageNumber;
var end = start + itemsPerPage;
//creates a pagination depending on the number of students (increments of 10)

while(numberOfLinks > pageNumber){
pageNumber++;
 $(".pagination ul").append("<li><a class=' " + pageNumber + "' href='#'>" +pageNumber + "</a></li>");
}

//this will assigns the number of students for each page when clicked
$(".paginationUL li a.1").on("click", function (){
  $(".student-item").hide().slice(0,10).show();
});
$(".paginationUL li a.2").on("click", function (){
  $(".student-item").hide().slice(10,20).show();
});
$(".paginationUL li a.3").on("click", function (){
  $(".student-item").hide().slice(20,30).show();
});
$(".paginationUL li a.4").on("click", function (){
  $(".student-item").hide().slice(30,40).show();
});
$(".paginationUL li a.5").on("click", function (){
  $(".student-item").hide().slice(40,50).show();
});
$(".paginationUL li a.6").on("click", function (){
  $(".student-item").hide().slice(50,60).show();
});



// var pageNum = 0;
// var start_here = itemsPerPage * pageNum;  //this will be the begining of slice
// var end_here = start_here + itemsPerPage; //this will be end of slice
//
// while(numberOfLinks > pageNumber){
// pageNum++;
//   $(".student-item").hide().slice(start_here, end_here).show();
// }

//The page includes a list of 54 students.
  //display 10 students per page,
  // I think i have to use a jquery plug in here to add pagination
  //and add buttons to jump between the lists of 10 students.

//Your solution should work for any number of student listings,
//whether there were 5, 25, 55 or 100 student listings.

//<div class="page-header cf">  -- Insert Search Functionality

//<ul class="student-list">  - parent of student listings


const studentList = document.getElementsByClassName('student-list'); // The UL that holds on the student li's
const studentItem = document.getElementsByClassName('student-item'); //This holds each student section block
const numberOfStudents = studentItem.length;
const itemsPerPage = 10;
const numberOfLinks = Math.floor(numberOfStudents/itemsPerPage);

// The below code will only show the first 10 students on loading
$(".student-item").slice(itemsPerPage).hide();

//creating pagination to html  (This creates the div + UL)
var $pagination = $("<div class='pagination'></div>");
$($pagination).append("<ul class ='paginationUL'></ul>");
$(".student-list").after($pagination);

//the li tag with the paginatino links will be added dynamically throgh a function



// $($pagination).append("<a class='active' href='#  '>1 </a>");


//creates a pagination depending on the number of students (increments of 10)
// var pageNumber = 0;
// for(var i = 0; i < numberOfLinks.length; i++){
//   $($pagination[i]).append("<a class='active' href='#" + pageNumber + "'> </a>");
//   pageNumber += 1;
// }


if(numberOfStudents > 10) {
 $(".pagination ul").append("<li><a class='active' href='#'> 2</a></li>");
}
if(numberOfStudents > 20) {
  $(".pagination ul").append("<li><a class='active' href='#'> 3</a></li>");
}
if(numberOfStudents > 30) {
$(".pagination ul").append("<li><a class='active' href='#'> 4</a></li>");
}
if(numberOfStudents > 40) {
$(".pagination ul").append("<li><a class='active' href='#'> 5</a></li>");
}
if(numberOfStudents > 50) {
$(".pagination ul").append("<li><a class='active' href='#'> 6</a></li>");
}
if(numberOfStudents > 60) {
$(".pagination ul").append("<li><a class='active' href='#'> 7</a></li>");
}

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
const numberOfLinks = Math.floor(numberOfStudents/itemsPerPage);

// The below code will only show the first 10 students on loading
$(".student-item").slice(itemsPerPage).hide();

//creating tree/html to DOM  (This creates the div + UL)
var $pagination = $("<div class='pagination'></div>");
$($pagination).append("<ul class ='paginationUL'></ul>");
$(".student-list").after($pagination);

//creates a pagination depending on the number of students (increments of 10)
var pageNumber = 0;
while(numberOfLinks > pageNumber){
pageNumber++;
 $(".pagination ul").append("<li><a class='' href='#'>" +pageNumber + "</a></li>");
}

const getPageNumber = document.getElementsByClassName('paginationUL');

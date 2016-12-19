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

//creating pagination to html  (This creates only the first page of 10 students)
var $pagination = $("<div class='pagination'></div>");
$($pagination).append("<ul></ul>");
$($pagination).append("<li></li>");
$($pagination).append("<a class='active' href='#  '>1 </a>");
$(".student-list").after($pagination);

//creates a pagination depending on the number of students (increments of 10)
if(numberOfStudents > 10) {
  $($pagination).append("<a class='' href='#  '> 2</a>");
}
if(numberOfStudents > 20) {
  $($pagination).append("<a class='' href='#  '> 3</a>");
}
if(numberOfStudents > 30) {
  $($pagination).append("<a class='' href='#  '> 4</a>");
}
if(numberOfStudents > 40) {
  $($pagination).append("<a class='' href='#  '> 5</a>");
}
if(numberOfStudents > 50) {
  $($pagination).append("<a class='' href='#  '> 6</a>");
}
if(numberOfStudents > 60) {
  $($pagination).append("<a class='' href='#  '> 7</a>");
}

'use strict';

var numberOfStudents = document.getElementsByClassName("student-details");
var studnetsPerPage = 10;
var numberOfLinks = Math.ceil(numberOfStudents.length/studnetsPerPage);
var currentPage = 0; 
var studentEmail = $(".student-item").find('.email').text();
var studentNames = $(".student-item").find('h3').text();
var results = [];



//1. When the page loads, your program should hide all but the first 10 students in the list.
$(".student-item").hide();
$(".student-item").slice(0, 10).show();


//2.  Look at the HTML in the example-meets.html on lines 119-137 -- this is an example of the markup
//    you'll need to add dynamically to the index.html page to create pagination links.
$(".student-list").after("<div class='pagination'>");
$(".pagination").append("<ul class ='paginationUL'></ul>");


//3.  Since only 10 students should be shown at a time, your programming needs to calculate the number 
//    of pages needed and add the appropriate number of links to the bottom of the page.
while(currentPage < numberOfLinks){
	currentPage++;
	$(".paginationUL").append("<li><a class='' href ='#'>" + currentPage + "</a>");
}

//4.  When a user clicks on “2” in the pagination, students 11 through 20 are shown. When a user clicks “3”, 
//    students 21 through 30 are shown. And so on. When “6” is clicked 51 through 55 should be shown.
$(".paginationUL > li > a").on("click", function(event) {
	$(".paginationUL > li > a").removeClass('active');
    $(this).addClass('active');
	var innerText = $(this).text(); 
    var start = (innerText - 1) * studnetsPerPage;
    var end = start + studnetsPerPage;
    $(".student-item").hide().slice(start, end).show();
});

//  EXTRA CREDIT
//1. Include a search component so that a user could search for a particular student or students. See the file 
//   example-exceeds.html and lines 16-19 for what the markup for the search component should look like.

var $searchBar = $("<div class='student-search'></div>");
$($searchBar).append("<input placeholder='Search for students...'>");
$($searchBar).append("<button>Search</button>");
$(".page-header h2").after($searchBar);

// 2.  When the "Search" button is clicked, the list of students is filtered to match the search. For example if the 
   name Phillip is typed into the box list all students whose name or email includes Phillip.
$(".student-search button").on("click", function() {
	var searchInput = $(".student-search input").val().trim().toLowerCase();
	$(".student-item").hide()
	 

	 if (studentNames.indexOf(searchInput) === -1 || studentEmail.indexOf(searchInput) === -1){
	 	alert("No student found");
	 }else{
	 	

	 }

	
});


//this does dynamic searching as i Type but could not figure out how to make page return to 10 students
// per page after I clear search
// $('.student-search input').on('keyup', function () {
//     var value = this.value;
//     $('.student-list li').hide().each(function () {
//         if ($(this).text().search(value) > -1) {
//             $(this).prevAll('.student-detail').first().add(this).show();

//         }
//     });
// });


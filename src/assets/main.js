$(function() {
   // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/2406398.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      for (var courseNum in response.courses.completed){
        var course = response.courses.completed[courseNum];
        $('#badges').append( "<div class='course'>" +
          "<h3 title='" + course.title + "'>" + course.title + "</h3>" +
          "<img src='" + course.badge + "'></img>" +
          "<a href='" + course.url + "' target='_blank' class='btn btn-primary'" +
          ">See Course</a>"+
        "</div>" );
      }
    }

  });
});

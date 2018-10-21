$(document).ready(function(){
  console.log('scripts loaded');
//establish variables to retrieve from xml file.
  var grants;
  var html = '';
  var url = 'NEH_Grants2010s.xml';
  var projectTitle = '';
  var yearAwarded = '';
  var originalAmount = '';
  var grantDescription = '';
//call ajax
  $.ajax({
    type:'GET',
    url: url,
    data: grants,
    dataType: 'xml',
    async: true,
    success: function(grants){
      //set up column names
      html += '<tr><th>The Project Title</th><th>Year Awarded</th><th>Original Amount</th><th>Grant Description (ToSupport)</th></tr>';
      //get the data from xml file and build table with it
    $(grants).find('Grant').each(function(){
        projectTitle = $(this).find('ProjectTitle').text();
        yearAwarded = $(this).find('YearAwarded').text();
        originalAmount = $(this).find('OriginalAmount').text();
        grantDescription = $(this).find('ToSupport').text();
        //makes sure only table entries with descriptions are shown
        if(grantDescription != 'None'){
          html += '<td><b>' + projectTitle + '</b>';
          html += '<td><b>' + yearAwarded + '</b>';
          html += '<td><b>' + originalAmount + '</b>';
          html += '<td><b>' + grantDescription + '</b> <tr> </tr>';
          html += '</td>';
        }
  });

  $("#results").append(html);

  }
  });
});
/*
1) Build an HTML table using an AJAX call on the provided XML file (NEH_Grants2010s.xml).
   The XML data shows all of the grants awarded by the National Endowment for the Humanities since 2008.
2) The table should have four columns:
    The Project Title, Year Awarded, Original Amount, and grant description (ToSupport)
3) You will notice that the table is a bit messy; some of the grants have no descriptions, leaving large
   blank spaces with just 'None.' Clean this up with conditional logic in your code.
   If the grant has no description, do not include it in the table.
*/

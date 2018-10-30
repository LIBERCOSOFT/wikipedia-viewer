$(document).ready(function(){
  $("#btn").click(function(){
    var $input = $('<input type="text" style="background-color:	#483D8B" id="search-box"> <button id="cancel-btn">X</button>');
    $("#btn").replaceWith($input);
    $("#h2").html("");
     $("#cancel-btn").click(function(){
       var $secondInput = $('<button id="btn"> <i class="glyphicon glyphicon-search"></i> </button>');
       $("#search-box").toggle("fast");
       $("#cancel-btn").toggle("fast");
       $("#cancel-btn").toggle("fast");
        $("#value").html("");
       if($("#cancel-btn").html() == "X"){
         $("#cancel-btn").html($secondInput);
       }else{
         $("#cancel-btn").html("X");
         $("#search-box").val("");
       }
     });
    $("#search-box").keypress(function(e){
      var searchInput = $("#search-box").val().toLowerCase();
      if(e.which == 13){
           $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max' + '&gsrsearch=' + searchInput,
    data: {
        format: 'json'
    },
    dataType: 'jsonp'
}).done(function(data){
             const allResponsePagesKey = Object.keys(data.query.pages);

allResponsePagesKey.forEach((key) => {
  const articleTitle = data.query.pages[key].title;
  const articleExtract = data.query.pages[key].extract;
  
  $("#value").html(`${articleTitle} \n${articleExtract} \n\n`);
});
});
      }
    });
});

});
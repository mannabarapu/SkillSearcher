	$(document).ready(function(){

		

		bootbox.alert({ 
  		size: "small",
  		title: "<b>Welcome User</b>",
  		message: " You can perform a <b>single search</b> at once." +
			"In order to perform a second search you have to <b>reload</b> the page.", 
 		});

		$("#buttonDisplay").click(function(){

			var ResumeInput = $("#textarea").val();
			 var text = ResumeInput.toLowerCase();
			 var searchTxt = $("#input").val();
			 var countArr = [];
			 debugger;
			 var arr = searchTxt.split(",");
			 if (text != "" && searchTxt != "") {
			 	
			 	for (var i=0; i < arr.length; i++) {
			 		 var toBeHighlighted = arr[i];
					 var searchString = arr[i].trim().toLowerCase();
					 var count=0;		
			         var index=3;
					 do{
					   var index= text.indexOf(searchString);
					   if(index != -1)
				       {
					    count++;
					    text = text.slice(index+searchString.length);			   
					   }
					  } while(index!= -1);
					  
					  if (count!= 0) {
					   $("#mainBody").append("<p>"+"<span>"+arr[i]+"</span>"+" ====> "+
					   								"<span>"+count+"</span>"+"<p/>");
					 }

					 $('#textarea').highlightTextarea({
				     words: arr,
					 caseSensitive: false
					});

					text= ResumeInput.toLowerCase();
	 
				 }
				
			 }

			  else{
					    bootbox.alert({
				 		size: "small",
  						title: "<b>Alert!</b>",
				 		message:"Please <b>fill</b> the <b>text boxes</b> before starting search"
				 		});
				 }
			
			 

			 
		});

		$("#buttonClear").click(function(){
		
			location.reload();
		});

});

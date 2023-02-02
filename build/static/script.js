$(window).load(function(){
  //========================================================
  // Adds the active class to selected Pokemon
  //========================================================
	function changeActive() {
    var pkmn = $(".pkmn");
  
   pkmn.click(function(){
     pkmn.removeClass("active");
     $(this).addClass("active");
   });
  }
 
 //========================================================
 // Sets up scrolling functionality for next/prev buttons
 //========================================================
  function setScroll() {
		$(document).on("click", "#prevThumb", function() {
			var leftPos = $("#imageWrapper").scrollLeft();

			if ($("#imageWrapper").scrollLeft() > "0") {
				$("#imageWrapper").animate({scrollLeft: leftPos - 500}, 300);
			}

			else {
				event.preventDefault();
			}
		});

		$(document).on("click", "#nextThumb", function() {
			var leftPos = $("#imageWrapper").scrollLeft();

			if (leftPos < $("#imageWrapper")[0].scrollWidth) {
				$("#imageWrapper").animate({scrollLeft: leftPos + 500}, 300);
			}

			else {
				event.preventDefault();
			}
		});
	}
  
  //========================================================
  // 1) Keeps track of thumbnail index
  // 2) Displays the selcted thumbnail
  //========================================================
  /*function completeCycle(){
    $(".thumb").click(function(){
      $(".thumbWrap").removeClass("activeThumb");
      $(this).parent().addClass("activeThumb");

      var fullImg =	'<div id="imgViewer">'
          fullImg +=		'<a href="'+ $(this).attr("src") +'">';
          fullImg +=			'<img class="full" src="'+ $(this).attr("src") +'"/>';
          fullImg +=		'</a>';
          fullImg +=		'<a href="javascript: void(0)" id="prevFull" class="galNav"></a>';
          fullImg +=		'<a href="javascript: void(0)" id="nextFull" class="galNav"></a>';
          fullImg +=	'</div>';
      $("#fullImageWrapper").append(fullImg);

      currIndex = $(".thumb").index(this);
      newIdx = $(".thumb").index(this) + 1;
      prevIdx = $(".thumb").index(this) - 1;
    });
    
    $("#nextFull").click(function(){
			currIndex += 1;
			newIdx += 1;
			prevIdx += 1;

			if(currIndex > galArr.length-1) {
				currIndex = 0;
				newIdx = currIndex+1;
				prevIdx = galArr.length-1;
				console.log("curr > array-1")
			}

			if(newIdx > galArr.length-1) {
				currIndex = galArr.length-1;
				newIdx = 0;
				prevIdx = currIndex-1;
				console.log("new > array")
			}

			if(prevIdx > galArr.length-1){
				prevIdx = 0;
				console.log("prev > array-1")
			}
			console.log("next clicked. NEW IDX======================", newIdx)
			console.log("curr clicked. NEW CURR IDX=================", currIndex)
			console.log("prev clicked. NEW PREV IDX=================", prevIdx)
			console.log(" ")

			var fullImg =	'<div id="imgViewer">'
           fullImg +=			'<a href="'+ $(.active).attr("src") +'" target="_blank">';
           fullImg +=				'<img id="fullImg" src="'+ $(.active).attr("src") +'"/>';
           fullImg +=			'</a>';
           fullImg +=			'<a href="javascript: void(0)" id="prevFullImage" class="galNav"></a>';
           fullImg +=			'<a href="javascript: void(0)" id="nextFullImage" class="galNav"></a>';
           fullImg +=		'</div>';
			$("#fullImageWrapper").append(fullImg);
		});

		$("#prevFull").click(function(){
			prevIdx -= 1;
			currIndex -=1 ;
			newIdx -= 1;

			if(newIdx < 0) {
				newIdx = galArr.length-1;
				console.log("newIdx < 0")
			}

			if(currIndex < 0) {
				currIndex = galArr.length-1;
				newIdx = 0;
				prevIdx = currIndex-1;
				console.log("curr < 0")
			}

			if(prevIdx < 1) {
				currIndex = 0;
				newIdx = currIndex+1;
				prevIdx = galArr.length-1;
				console.log("prev < 1")
			}
			console.log("next clicked. NEW IDX======================", newIdx)
			console.log("curr clicked. NEW CURR IDX=================", currIndex)
			console.log("prev clicked. NEW PREV IDX=================", prevIdx)
			console.log(" ")
      
       var fullImg =	'<div id="imgViewer">'
           fullImg +=			'<a href="'+ $(.active).attr("src") +'" target="_blank">';
           fullImg +=				'<img id="fullImg" src="'+ $(.active).attr("src") +'"/>';
           fullImg +=			'</a>';
           fullImg +=			'<a href="javascript: void(0)" id="prevFullImage" class="galNav"></a>';
           fullImg +=			'<a href="javascript: void(0)" id="nextFullImage" class="galNav"></a>';
           fullImg +=		'</div>';
        $("#fullImageWrapper").append(fullImg);
		});
  }*/
  
  changeActive();
	setScroll();
  /*completeCycle(); */  
});
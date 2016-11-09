





$( document ).ready(function() {
	console.log("ready");

	var enemyrow= $('#chrow');
	var characterrow = $(".characters")
	
	var daHp= 100;
	
	//make var for Doloris, div in the dom
	var dolores= $("#dolores");
	//append hp
	$("#dhp").append(daHp);

	
	var tfHp= 140;
	//make var for teddy, div in the dom
	var teddy= $("#teddy");
	//append hp 
	$("#thp").append(tfHp);
	
	
	var blHp=155 ;
	// make var for bernard, div in the dom 
	var bernard= $("#bernard");
	// append hp 
	$("#bhp").append(blHp);
	
	
	var mnbHp= 180;
	// make var for the man in black, div in the dom 
	var maninblk= $("#maninblk");
	//append hp
	$("#mnbhp").append(mnbHp);
    
    var state = 0;

    


			   function userchar(){
				// function for delores 
				$(characterrow).on("click", function(){
					$("#yourCh").append(this);
					p = this;
	
				    
				    $("#row5").append(enemyrow);
				    state ++;
				    console.log(state);
				    

				    if (state===1){
				    	$(characterrow).on("click", function(){
				    		$("#defend").append(this);
				    	});
				    	$(".btn-danger").on("click", function(){
				    		console.log(p);
							

				    	});
				    		

				   
				    					}

				    	});
				    };
				

			
				
				
						
						
					
		
				  


				

				

					
					
					//$("}")
			
	userchar();

		









});

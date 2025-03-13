var start=new Date().getTime();
			function getRandomColor() {
				  var letters = '0123456789ABCDEF';
				  var color = '#';
				  for (var i = 0; i < 6; i++) {
				    color += letters[Math.floor(Math.random() * 16)];
				  }
				  return color;
				}

		function shapeAppear(){

			var top=Math.random()*300;
			var left=Math.random()*300;
			var height=Math.random()*150;


			if(Math.random() >0.5){
				document.getElementById("shape").style.borderRadius="50%";

			}
			else{
				document.getElementById("shape").style.borderRadius="0%";

			}

			document.getElementById("shape").style.height=height+"px";
			document.getElementById("shape").style.width=height+"px";
			document.getElementById("shape").style.left=left+"px";
			document.getElementById("shape").style.top=top+"px";
			document.getElementById("shape").style.background=getRandomColor();




			document.getElementById("shape").style.display="block";
			 start=new Date().getTime();
		}

		function shapeAppearDelay(){

		setTimeout(shapeAppear,Math.random()*2500);
	}

			
	shapeAppearDelay();

		
		document.getElementById("shape").onclick=function(){

			document.getElementById("shape").style.display="none";

					var end=new Date().getTime();
					var time=(end-start)/1000;
					 
					document.getElementById("duration").innerHTML=time+"s";

					shapeAppearDelay();

					

		}

		


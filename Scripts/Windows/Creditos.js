var Nomes = {x:0 , y: 700, w: 1200, h:700, u:true, d:false};
var Counting = 0;

var imge = new Image();
imge.src = "Images/Creditos.png"

function SetCred()
{
	fadein = true;
	
	

	context.drawImage(imge,Nomes.x,Nomes.y,Nomes.w,Nomes.h);
	
	context.drawImage(Back,canvas.width - 200, canvas.height - 100, 150,50);
	
	
	if(mouse.x > canvas.width - 200 &&
	mouse.x < canvas.width - 50 &&
	mouse.y >  canvas.height - 100 &&
	mouse.y < canvas.height - 50)
	{
		fadeOut = true;
		auxScene = "Menu";
		mouse.press = false;
	
	}
}

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
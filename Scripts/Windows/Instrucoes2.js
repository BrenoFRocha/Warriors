function SetInstru2()
{
	if(fadeOut)
	{
		fadeIn = true;
		fadeOut = false;
	}
	context.fillStyle = "PINK";
	context.fillRect(0,0,canvas.width,canvas.height);
	
	var bottonI = {x:canvas.width - 200, y:50, w:150, h:50};
	var bottonM = {x:canvas.width - 200, y:canvas.height - 100, w:150, h:50};
	context.fillStyle = "BLACK";
	context.fillRect(bottonI.x,bottonI.y,bottonI.w,bottonI.h);
	context.fillStyle = "BLACK";
	context.fillRect(bottonM.x,bottonM.y,bottonM.w,bottonM.h);
	
	if(mouse.x >= bottonI.x &&
	mouse.x <= bottonI.x + bottonI.w &&
	mouse.y >= bottonI.y &&
	mouse.y <= bottonI.y + bottonI.h &&
	mouse.press)
	{
		fadeOut = true;
		mouse.press = false;
		Scene = "Instrucoes3";
	}
	
	if(mouse.x >= bottonM.x &&
	mouse.x <= bottonM.x + bottonM.w &&
	mouse.y >= bottonM.y &&
	mouse.y <= bottonM.y + bottonM.h &&
	mouse.press)
	{
		fadeOut = true;
		mouse.press = false;
		auxScene = "Menu";
	}
}
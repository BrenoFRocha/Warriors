var Instru2 = new Image();
Instru2.src = "Images/instrucoes2.png";

function SetInstru8()
{
	context.drawImage(Instru2,0,0,canvas.width,canvas.height);
	if(fadeOut)
	{
		fadeIn = true;
		fadeOut = false;
	}
	
	var bottonM = {x:canvas.width - 200, y:canvas.height - 100, w:150, h:50};
	context.drawImage(Back,bottonM.x,bottonM.y,bottonM.w,bottonM.h);
	
	if(mouse.x >= bottonM.x &&
	mouse.x <= bottonM.x + bottonM.w &&
	mouse.y >= bottonM.y &&
	mouse.y <= bottonM.y + bottonM.h)
	{
		fadeOut = true;
		mouse.press = false;
		auxScene = "Menu";
	}
}
var Instru1 = new Image();
Instru1.src = "Images/intrucoes.png";

var setinha = new Image();
setinha.src = "Images/avancar.png";



function SetInstru1()
{
	context.drawImage(Instru1,0,0,canvas.width,canvas.height);
	if(fadeOut)
	{
		fadeIn = true;
		fadeOut = false;
	}
	
	
	var bottonI = {x:canvas.width - 200, y:50, w:150, h:75};
	var bottonM = {x:canvas.width - 200, y:canvas.height - 100, w:150, h:50};
	
	context.drawImage(setinha,bottonI.x,bottonI.y,bottonI.w,bottonI.h);

	context.drawImage(Back,bottonM.x,bottonM.y,bottonM.w,bottonM.h);
	
	if(mouse.x >= bottonI.x &&
	mouse.x <= bottonI.x + bottonI.w &&
	mouse.y >= bottonI.y &&
	mouse.y <= bottonI.y + bottonI.h &&
	mouse.press)
	{
		fadeOut = true;
		mouse.press = false;
		Scene = "Instrucoes8";
	}
	
	if(mouse.x >= bottonM.x &&
	mouse.x <= bottonM.x + bottonM.w &&
	mouse.y >= bottonM.y &&
	mouse.y <= bottonM.y + bottonM.h &&
	mouse.press)
	{
		fadeOut = true;
		mouse.press = false;
		Scene = "Menu";
	}
}
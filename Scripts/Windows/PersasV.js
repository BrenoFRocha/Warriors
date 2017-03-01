function SetWinP()
{
	if(fadeOut)
	{
		fadeIn = true;
		fadeOut = false;
	}
	var WinPW = {x:125, y:0, w:950, h:750};
	var NewG = {x:300 , y:550, w:575, h:150};
	var Menu = {x:450 , y:500, w:275, h:50};

	context.fillStyle = "black";
	context.fillRect(0,0,canvas.width,canvas.height)
	context.drawImage(WinPW1,WinPW.x,WinPW.y,WinPW.w,WinPW.h);
	context.drawImage(NewG1,NewG.x,NewG.y,NewG.w,NewG.h);
	
	if(mouse.x > NewG.x &&
	mouse.x < NewG.x + NewG.w &&
	mouse.y > NewG.y &&
	mouse.y < NewG.y + NewG.h &&
	mouse.press)
	{
		fadeOut = true;
		mouse.press = false;
		Scene = "Menu"
	}	
}
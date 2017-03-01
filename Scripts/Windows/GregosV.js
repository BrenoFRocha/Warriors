function SetWinG()
{
	var WinGW = {x:125, y:0, w:950, h:750};
	var NewG = {x:300 , y:550, w:575, h:150};
	var Menu = {x:450 , y:500, w:275, h:50};

	context.fillStyle = "black";
	context.fillRect(0,0,canvas.width,canvas.height)
	context.drawImage(WinGW1,WinGW.x,WinGW.y,WinGW.w,WinGW.h);
	context.drawImage(NewG1,NewG.x,NewG.y,NewG.w,NewG.h);
	
	if(mouse.x > NewG.x &&
	mouse.x < NewG.x + NewG.w &&
	mouse.y > NewG.y &&
	mouse.y < NewG.y + NewG.h &&
	mouse.press)
	{
		fadeEnabled=true;
		mouse.press = false;
		Scene = "Menu"
	}	
}
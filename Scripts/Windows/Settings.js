var no_audio = false;
var Audionoff = {x: 845, y:400 , w: 140 , h:63};
var GoMenu = {x: 1000, y:600, w: 150, h : 50};
var color = "red";
var colorchange1 = "green";
var colorchange2 = "yellow";
var Lingua1 = {x: 200, y: 400, w:75, h:50};
var Lingua2 = {x: 275, y: 400, w:75, h:50};
 
var fundinho = new Image();
fundinho.src = "Images/opcoes.png"
 
var offing = new Image();
offing.src = "Images/on.png";
 



function SetSettings()
{
	context.drawImage(fundinho,0,0)
	if(fadeOut)
	{
		fadeIn = true;
		fadeOut = false;
	}
	
	context.drawImage(offing,Audionoff.x,Audionoff.y,Audionoff.w,Audionoff.h);
	
	context.drawImage(Back,GoMenu.x,GoMenu.y,GoMenu.w,GoMenu.h);
	
	context.fillStyle = colorchange1;
	context.fillRect(Lingua1.x,Lingua1.y,Lingua1.w,Lingua1.h);
	
	context.fillStyle = colorchange2;
	context.fillRect(Lingua2.x,Lingua2.y,Lingua2.w,Lingua2.h);
	
	if(mouse.x >= Audionoff.x &&
	mouse.x <= Audionoff.x + Audionoff.w &&
	mouse.y >= Audionoff.y &&
	mouse.y <= Audionoff.y + Audionoff.h &&
	mouse.press)
	{
		mouse.press = false;
		if(no_audio == false)
		{
			no_audio = true;
			offing.src = "Images/off.png";
		}
		else
		{
			no_audio = false;
			color = "red";
			offing.src = "Images/on.png";
		}
	}
	if(mouse.x >= GoMenu.x &&
	mouse.x <= GoMenu.x + GoMenu.w &&
	mouse.y >= GoMenu.y &&
	mouse.y <= GoMenu.y + GoMenu.h &&
	mouse.press)
	{
		fadeOut = true;
		mouse.press = false;
		Scene = "Menu";
	}
	
	if(mouse.x >= Lingua1.x &&
	mouse.x <= Lingua2.x + Lingua2.w &&
	mouse.y >= Lingua1.y &&
	mouse.y <= Lingua1.y + Lingua2.h &&
	mouse.press)
	{
		mouse.press = false;
		if(PTBR)
		{
			PTBR = false;
			ENUS = true;
			colorchange1 = "blue";
			colorchange2 = "red";
		}
		else
		{
			ENUS = false;
			PTBR = true;
			colorchange1 = "green";
			colorchange2 = "yellow";
		}
	}
}

var multii = new Image();
	multii.src = "Images/play.png";
	
var Choosing = new Image();
Choosing.src = "Images/menu.png";

var persiansi = new Image();
persiansi.src = "Images/persiansla.png";

var gregosi = new Image();
gregosi.src = "Images/greeksla.png";

function SetTeam()
{
	context.drawImage(Choosing,0,0,canvas.width,canvas.height);
	if(fadeOut)
	{
		fadeIn = true;
		fadeOut = false;
	}
	
	var Multi = {x: 230, y: 400, w:110, h:64};
	context.drawImage(multii,Multi.x,Multi.y,Multi.w,Multi.h)	
	
	if(mouse.x >= Multi.x &&
	mouse.x <= Multi.x + Multi.w &&
	mouse.y >= Multi.y &&
	mouse.y <= Multi.y + Multi.h &&
	mouse.press)
	{
		fadeOut = true;
		mouse.press = false;
		AIG = false;
		AIP = false;
		GT = true;
		PT = true;
		Scene = "Jogo";
	}

	var SingleG = {x:850 , y: 450, w:141, h:38};
	context.drawImage(gregosi,SingleG.x,SingleG.y,SingleG.w,SingleG.h)
	
	if(mouse.x >= SingleG.x &&
	mouse.x <= SingleG.x + SingleG.w &&
	mouse.y >= SingleG.y &&
	mouse.y <= SingleG.y + SingleG.h &&
	mouse.press)
	{
		fadeOut = true;
		mouse.press = false;
		AIG = false;
		AIP = true;
		GT = true;
		PT = false;
		Scene = "Jogo";
	}
	
	var SingleP = {x:840 , y: 380, w:167, h:36};
	context.drawImage(persiansi,SingleP.x,SingleP.y,SingleP.w,SingleP.h)
	
	if(mouse.x >= SingleP.x &&
	mouse.x <= SingleP.x + SingleP.w &&
	mouse.y >= SingleP.y &&
	mouse.y <= SingleP.y + SingleP.h &&
	mouse.press)
	{
		fadeOut = true;
		mouse.press = false;
		AIG = true;
		AIP = false;
		GT = false;
		PT = true;
		Scene = "Jogo";
	}
}
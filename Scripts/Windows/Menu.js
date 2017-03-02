var image1 = new Image();
image1.src = "Images/1.png";
var image2 = new Image();
image2.src = "Images/2.png";
var image3 = new Image();
image3.src = "Images/3.png";
var image4 = new Image();
image4.src = "Images/4.png";
var image5 = new Image();
image5.src = "Images/5.png";
var BJ = new Image();
BJ.src = "Images/newgame.png";
var BA = new Image();
BA.src = "Images/about.png";
var Back = new Image();
Back.src = "Images/back.png";
var BH = new Image();
BH.src = "Images/help.png";


var anima = 0;
var anima1 = false;
var anima2 = false;

var SettingsM = {x: 950, y: 25, w: 225, h: 75};
function SetMenu()
{
	if(fadeOut)
	{
		fadeIn = true;
		fadeOut = false;
	}
	
	
	music1.pause("Music1Game");
	music2.pause("Music2Game");
	
	
	var bottonB = {x:10,y:25,w:150,h:50};
	
	
	if(anima == 0)
	{
		anima2 = false;
		anima1 = true;
	}
	else if(anima == 20)
	{
		anima1 = false;
		anima2 = true;
	}
	if(anima1)
	{
		anima++;
		if(anima >= 0 && anima < 4)
		{
			context.drawImage(image1,0,0,canvas.width,canvas.height);
		}
		if(anima >= 4 && anima < 8)
		{
			context.drawImage(image2,0,0,canvas.width,canvas.height);
		}
		if(anima >= 8 && anima < 12)
		{
			context.drawImage(image3,0,0,canvas.width,canvas.height);
		}
		if(anima >= 12 && anima < 16)
		{
			context.drawImage(image4,0,0,canvas.width,canvas.height);
		}
		if(anima >= 16 && anima < 20)
		{
			context.drawImage(image5,0,0,canvas.width,canvas.height);
		}
	}
	else if(anima2)
	{
		anima--;
		if(anima >= 0 && anima < 4)
		{
			context.drawImage(image1,0,0,canvas.width,canvas.height);
		}
		if(anima >= 4 && anima < 8)
		{
			context.drawImage(image2,0,0,canvas.width,canvas.height);
		}
		if(anima >= 8 && anima < 12)
		{
			context.drawImage(image3,0,0,canvas.width,canvas.height);
		}
		if(anima >= 12 && anima < 16)
		{
			context.drawImage(image4,0,0,canvas.width,canvas.height);
		}
		if(anima >= 16 && anima < 20)
		{
			context.drawImage(image5,0,0,canvas.width,canvas.height);
		}
	}
	else
	{
		context.drawImage(image1,0,0,canvas.width,canvas.height);
	}
	
	
	
	var bottonJ = {x:canvas.width/2 - 125, y:350, w:250, h:50};
	context.drawImage(BJ,bottonJ.x,bottonJ.y,bottonJ.w,bottonJ.h);
	
	if(mouse.x >= bottonJ.x &&
	mouse.x <= bottonJ.x + bottonJ.w &&
	mouse.y >= bottonJ.y &&
	mouse.y <= bottonJ.y + bottonJ.h &&
	mouse.press)
	{
		fadeOut = true;
		mouse.press = false;
		Backon = false;
		TreePosition = null;
		turnfirst = Math.floor(randomRange(0, 1)) 
		music1.currentTime = 0;
		music2.currentTime = 0;
		GNRLDP = false;
		REIDP = false;
		KntDP = false;
		ARCDP = false;
		LANCERDP = false;
		TORREDP = false;
		GNRLDG = false;
		REIDG = false;
		KntDG = false;
		ARCDG = false;
		LANCERDG = false;
		TORREDG = false;
		Mouseoff = null
		for(var i = 0; i < 8; i++) 
		{
			LancerP[i] = new LancersP(LancerP_x[i], 151, 48, 48, 40);			
		}		
		for(var i = 0; i < 8; i++) 
		{
			LancerG[i] = new LancersG(LancerG_x[i], 501, 48, 48, 40);			
		}
		for(var i = 0; i < 1; i++) 
		{
			KingG[i] = new KingsG(KingG_x[i], 551, 48, 48, 65);			
		}	
		for(var i = 0; i < 1; i++) 
		{
			KingP[i] = new KingsP(KingP_x[i], 101, 48, 48, 65);			
		}	
		for(var i = 0; i < 1; i++) 
		{
			GnrlG[i] = new GnrlsG(GnrlG_x[i], 551, 48, 48, 55);			
		}	
		for(var i = 0; i < 1; i++) 
		{
			GnrlP[i] = new GnrlsP(GnrlP_x[i], 101, 48, 48, 55);			
		}	
		for(var i = 0; i < 4; i++) 
		{
			KntP[i] = new KntsP(KntP_x[i], KntP_y[i], 48, 48, 45);			
		}	
		for(var i = 0; i < 4; i++) 
		{
			KntG[i] = new KntsG(KntG_x[i], KntG_y[i], 48, 48, 45);					
		}
		for(var i = 0; i < 8; i++) 
		{
			ArcP[i] = new ArchersP(ArcP_x[i], 101, 48, 48, 30);			
		}	
		for(var i = 0; i < 8; i++) 
		{
			ArcG[i] = new ArchersG(ArcG_x[i], 551, 48, 48, 30);			
		}
		for(var i = 0; i < 2; i++) 
		{
			TorP[i] = new TorsP(TorP_x[i], 201, 48, 48, 70);			
		}	
		for(var i = 0; i < 2; i++) 
		{
			TorG[i] = new TorsG(TorG_x[i], 451, 48, 48, 70);			
		}
		WallP_life = 100;
		WallG_life = 100;
		Click_CG = 0;
		Click_AG = 0;
		Click_LG = 0;  
		Click_TG = 0; 
		Click_GG = 0;  
		Click_KG = 0;
		Click_CP = 0;
		Click_AP = 0;
		Click_LP = 0;  
		Click_TP = 0; 
		Click_GP = 0;  
		Click_KP = 0;
		InfoWallG = false;
		InfoArcG = false;
		InfoGnrlG = false;
		InfoKingG = false;
		InfoLancerG = false;
		InfoKntG = false;
		InfoTorG = false;
		InfoWallP = false;
		InfoArcP = false;
		InfoLancerP = false;
		InfoTorP = false;
		InfoKingP = false;
		InfoGnrlP = false;
		InfoKntP = false;
		TorsGChoosed = null;
		TorsPChoosed = null;
		ArcsGChoosed = null;
		ArcsPChoosed = null;
		KntsGChoosed = null;
		KntsPChoosed = null;
		GnrlGChoosed = null;
		GnrlPChoosed = null;
		KingGChoosed = null;
		KingPChoosed = null;
		LancersGChoosed = null;
		LancersPChoosed = null;
		StringDano1 = "";
		StringDano2 = "";
		StringDano3 = "";
		StringDano4 = "";
		StringDano5 = "";
		StringDano6 = "";
		StringDano7 = "";
		StringDano8 = "";
		StringDano9 = "";
		StringDano10 = "";
		save = 0;
		AIG = null;
		AIP = null;
		PT = null;
		GT = null;
		auxScene = "CTeam";
	}
	
	var bottonI = {x:canvas.width/2 - 125, y:450, w:250, h:50};
	context.drawImage(BH,bottonI.x,bottonI.y,bottonI.w,bottonI.h);
	
	if(mouse.x >= bottonI.x &&
	mouse.x <= bottonI.x + bottonI.w &&
	mouse.y >= bottonI.y &&
	mouse.y <= bottonI.y + bottonI.h &&
	mouse.press)
	{
		fadeOut = true;
		mouse.press = false;
		auxScene = "Instrucoes1";
	}
	
	var bottonC = {x:canvas.width/2 - 125, y:550, w:250, h:50};
	context.drawImage(BA,bottonC.x,bottonC.y,bottonC.w,bottonC.h);
	
	/*if(mouse.x >= bottonC.x &&
	mouse.x <= bottonC.x + bottonC.w &&
	mouse.y >= bottonC.y &&
	mouse.y <= bottonC.y + bottonC.h &&
	mouse.press)
	{
		fadeOut = true;
		mouse.press = false;
		Scene = "Creditos";
	}*/
	
	if(mouse.x >= SettingsM.x &&
	mouse.x <= SettingsM.x + SettingsM.w &&
	mouse.y >= SettingsM.y &&
	mouse.y <= SettingsM.y + SettingsM.h &&
	mouse.press)
	{
		fadeOut = true;
		mouse.press = false;
		auxScene = "Opcoes";
	}
	
	

	if(Backon)
	{
		context.drawImage(Back,bottonB.x,bottonB.y,bottonB.w,bottonB.h);
		
		if(mouse.x >= bottonB.x &&
		mouse.x <= bottonB.x + bottonB.w &&
		mouse.y >= bottonB.y &&
		mouse.y <= bottonB.y + bottonB.h &&
		mouse.press)
		{
			
			fadeOut = true;
			mouse.press = false;
			auxScene = "Jogo";
		}
	}
}
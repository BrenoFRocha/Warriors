var V_persian_background_image = new Image();
var V_persian_again_button = {x: 50, y: 130, w: 128, h:128};
var V_persian_again_button_image = new Image();
V_persian_again_button_image.src = "Images/Persian_Again_Button.png";
var V_persian_menu_button = {x: 625, y: 130, w: 128, h:128};
var V_persian_menu_button_image = new Image();
V_persian_menu_button_image.src = "Images/Persian_Menu_Button.png";

function PVictory()
{
	if(PTBR)
	{
		V_persian_background_image.src = "Images/Persian_Victory.png"
	}
	else
	{
		V_persian_background_image.src = "Images/Vitoria_Persa.png"
	}
	context.drawImage(V_persian_background_image,0,0);
	if(fadeOut)
	{
		fadeIn = true;
		fadeOut = false;
	}

	context.drawImage(V_persian_menu_button_image, V_persian_menu_button.x, V_persian_menu_button.y, V_persian_menu_button.w, V_persian_menu_button.h);
	context.drawImage(V_persian_again_button_image, V_persian_again_button.x, V_persian_again_button.y, V_persian_again_button.w, V_persian_again_button.h);
	
	if(mouse.x >= V_persian_again_button.x &&
	mouse.x <= V_persian_again_button.x + V_persian_again_button.w &&
	mouse.y >= V_persian_again_button.y &&
	mouse.y <= V_persian_again_button.y + V_persian_again_button.h &&
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
		for(var i = 0; i < lancer_number; i++) 
		{
			LancerP[i] = new LancersP(LancerP_x[i], 151, 48, 48, 40);			
		}		
		for(var i = 0; i < lancer_number; i++) 
		{
			LancerG[i] = new LancersG(LancerG_x[i], 401, 48, 48, 40);			
		}
		for(var i = 0; i < 1; i++) 
		{
			KingG[i] = new KingsG(KingG_x[i], limit_down, 48, 48, 65);			
		}	
		for(var i = 0; i < 1; i++) 
		{
			KingP[i] = new KingsP(KingP_x[i], 101, 48, 48, 65);			
		}	
		for(var i = 0; i < 1; i++) 
		{
			GnrlG[i] = new GnrlsG(GnrlG_x[i], limit_down, 48, 48, 55);			
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
		for(var i = 0; i < archer_number; i++) 
		{
			ArcP[i] = new ArchersP(ArcP_x[i], 101, 48, 48, 30);			
		}	
		for(var i = 0; i < archer_number; i++) 
		{
			ArcG[i] = new ArchersG(ArcG_x[i], limit_down, 48, 48, 30);			
		}
		for(var i = 0; i < 2; i++) 
		{
			TorP[i] = new TorsP(TorP_x[i], 201, 48, 48, 30);			
		}	
		for(var i = 0; i < 2; i++) 
		{
			TorG[i] = new TorsG(TorG_x[i], 351, 48, 48, 30);			
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
	
	if(mouse.x >= V_persian_menu_button.x &&
	mouse.x <= V_persian_menu_button.x + V_persian_menu_button.w &&
	mouse.y >= V_persian_menu_button.y &&
	mouse.y <= V_persian_menu_button.y + V_persian_menu_button.h &&
	mouse.press)
	{
		fadeOut = true;
		mouse.press = false;
		auxScene = "Menu";
	}
}
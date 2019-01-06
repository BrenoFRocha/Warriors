var I_background_image = new Image();


var I_war_image = new Image();

var I_exit_button = {x: 60, y: 60, w: 48, h: 48};
var I_war_button = {x: 185, y: 350, w: 430, h: 50};

function SetInstru5()
{
	if(PTBR)
	{
		I_background_image.src = "Images/Instructions_5_Background.png";
		I_war_image.src = "Images/Start_War_Button.png";
	}
	else
	{
		I_background_image.src = "Images/Instrucoes_5_Background.png";
		I_war_image.src = "Images/Comecar_Guerra_Botao.png";
	}
	context.drawImage(I_background_image,0,0);
	if(fadeOut)
	{
		fadeIn = true;
		fadeOut = false;
	}
	
	context.drawImage(I_war_image,I_war_button.x,I_war_button.y,I_war_button.w,I_war_button.h);

	context.drawImage(exit_button_image,I_exit_button.x,I_exit_button.y,I_exit_button.w,I_exit_button.h);
	
	if(mouse.x >= I_war_button.x &&
	mouse.x <= I_war_button.x + I_war_button.w &&
	mouse.y >= I_war_button.y &&
	mouse.y <= I_war_button.y + I_war_button.h &&
	mouse.press)
	{
		mouse.press = false;
		fadeOut = true;
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
	
	if(mouse.x >= I_exit_button.x &&
	mouse.x <= I_exit_button.x + I_exit_button.w &&
	mouse.y >= I_exit_button.y &&
	mouse.y <= I_exit_button.y + I_exit_button.h &&
	mouse.press)
	{
		fadeOut = true;
		mouse.press = false;
		auxScene = "Menu";
	}
}
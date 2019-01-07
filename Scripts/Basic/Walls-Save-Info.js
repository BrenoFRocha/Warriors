var PTBR = true;
var ENUS = false;
var WallG_x = 0;
var WallG_y = 500;
var WallG_w = 600;
var WallG_h = 100;
var WallG_life = 100;

var save = 0;

var WallP_x = 0;
var WallP_y = 0;
var WallP_w = 600;
var WallP_h = 100;
var WallP_life = 100;

var WallG = new Image();
WallG.src = "Images/Units/Greek_Wall.png";

var WallP = new Image();
WallP.src = "Images/Units/Persian_Wall.png";

var Alert = false;
var Mouseoff = false;
var InfoWallG = false;
var InfoWallP = false;
var SWG = new Image();
SWG.src = "Images/Preview/MS_G.png";
var SWP = new Image();
SWP.src = "Images/Preview/MS_P.png";
function StatsWalls()
{
	if(WallP_life <= 0)
	{
		if(Mouseoff == null)
		{
			Mouseoff = true;
			if(Mouseoff)
			{
				Mouseoff = false;
				mouse.press = false;
			}
		}
		WallP_life = 0;
		GT = false;
		PT = false;
		Scene = "WinG";
	}
	if(WallG_life <= 0)
	{
		if(Mouseoff == null)
		{
			Mouseoff = true;
			if(Mouseoff)
			{
				Mouseoff = false;
				mouse.press = false;
			}
		}
		WallG_life = 0;
		GT = false;
		PT = false;
		Scene = "WinP";
	}
	if(mouse.press &&
	mouse.x > WallP_x &&
	mouse.x < WallP_x + WallP_w &&
	mouse.y > WallP_y &&
	mouse.y < WallP_y + WallP_h)
	{
		InfoWallP = true;
		InfoArcP = false;
		InfoLancerP = false;
		InfoTorP = false;
		InfoKingP = false;
		InfoGnrlP = false;
		InfoKntP = false;
	}
	if(InfoWallP)
	{
		context.drawImage(SWP,InfoU_x,InfoU_y,InfoU_w,InfoU_h)
		TextLife(WallP_life,InfoV_x,InfoV_y)
	}
}


var ArcGM = new Image();
ArcGM.src = "Images/Preview/ArcGM.png"
var ArcGA = new Image();
ArcGA.src = "Images/Preview/ArcGA.png"
var ArcPA = new Image();
ArcPA.src = "Images/Preview/ArcPA.png"
var ArcPM = new Image();
ArcPM.src = "Images/Preview/ArcPM.png"
var GnrlGM = new Image();
GnrlGM.src = "Images/Preview/GnrlGM.png"
var GnrlGA = new Image();
GnrlGA.src = "Images/Preview/GnrlGA.png"
var GnrlPM = new Image();
GnrlPM.src = "Images/Preview/GnrlPM.png"
var GnrlPA = new Image();
GnrlPA.src = "Images/Preview/GnrlPA.png"
var LancPM = new Image();
LancPM.src = "Images/Preview/LancPM.png"
var LancPA = new Image();
LancPA.src = "Images/Preview/LancPA.png"
var LancGM = new Image();
LancGM.src = "Images/Preview/LancGM.png"
var LancGA = new Image();
LancGA.src = "Images/Preview/LancGA.png"
var KntGM = new Image();
KntGM.src = "Images/Preview/KntGM.png"
var KntGA = new Image();
KntGA.src = "Images/Preview/KntGA.png"
var KntPM = new Image();
KntPM.src = "Images/Preview/KntPM.png"
var KntPA = new Image();
KntPA.src = "Images/Preview/KntPA.png"
var ReiPM = new Image();
ReiPM.src = "Images/Preview/ReiPM.png"
var ReiPA = new Image();
ReiPA.src = "Images/Preview/ReiPA.png"
var ReiGM = new Image();
ReiGM.src = "Images/Preview/ReiGM.png"
var ReiGA = new Image();
ReiGA.src = "Images/Preview/ReiGA.png"
var TorGM = new Image();
TorGM.src = "Images/Preview/TorGM.png"
var TorGA = new Image();
TorGA.src = "Images/Preview/TorGA.png"
var TorPM = new Image();
TorPM.src = "Images/Preview/TorPM.png"
var TorPA = new Image();
TorPA.src = "Images/Preview/TorPA.png"
var GnrlsGS = new Image();
var GnrlsPS = new Image();
var KingsGS = new Image();
var KingsPS = new Image();
var KntsGS = new Image();
var KntsPS = new Image();
var ArcsGS = new Image();
var ArcsPS = new Image();
var TorsGS = new Image();
var TorsPS = new Image();
var LancersGS = new Image();
var LancersPS = new Image();

GnrlsGS.src = "Images/Units/Greek_General.png";
GnrlsPS.src = "Images/Units/Preview/Persian_General_Info.png";
KingsGS.src = "Images/Units/Greek_King.png";
KingsPS.src = "Images/Units/Preview/Persian_King_Info.png";
KntsGS.src = "Images/Units/Greek_Knight.png";
KntsPS.src = "Images/Units/Preview/Persian_Knight_Info.png";
ArcsGS.src = "Images/Units/Greek_Archer.png";
ArcsPS.src = "Images/Units/Preview/Persian_Archer_Info.png";
TorsGS.src = "Images/Units/Greek_Tower.png";
TorsPS.src = "Images/Units/Persian_Tower.png";
LancersGS.src = "Images/Units/Greek_Lancer.png";
LancersPS.src = "Images/Units/Preview/Persian_Lancer_Info.png";

function DrawInfos()
{
	StatsWalls();
	
	if(InfoTorP)
	{
		InfoTorPS();
	}
	else if(InfoArcP)
	{
		InfoArcPS();
	}
	else if(InfoGnrlP)
	{
		InfoGnrlPS();
	}
	else if(InfoLancerP)
	{
		InfoLancerPS();
	}
	
	else if(InfoKingP)
	{
		InfoKingPS();
	}
	else if(InfoKntP)
	{
		InfoKntPS();
	}
	if(InfoTorG)
	{
		InfoTorGS();
	}
	else if(InfoArcG)
	{
		InfoArcGS();
	}
	else if(InfoKingG)
	{
		InfoKingGS();
	}
	else if(InfoGnrlG)
	{
		InfoGnrlGS();
	}
	else if(InfoLancerG)
	{
		InfoLancerGS();
	}
	else if(InfoKntG)
	{
		InfoKntGS();
	}
	if(mouse.press &&
	mouse.x > WallG_x &&
	mouse.x < WallG_x + WallG_w &&
	mouse.y > WallG_y &&
	mouse.y < WallG_y + WallG_h)
	{
		InfoWallG = true;
		InfoArcG = false;
		InfoGnrlG = false;
		InfoKingG = false;
		InfoLancerG = false;
		InfoKntG = false;
		InfoTorG = false;
	}
	if(InfoWallG)
		{
			context.drawImage(SWG,InfoUG_x,InfoUG_y,InfoUG_w,InfoUG_h)
			TextLifeG(WallG_life,InfoVG_x,InfoVG_y)
		}
}
var InfoArcG = false;
var InfoGnrlG = false;
var InfoKingG = false;
var InfoLancerG = false;
var InfoKntG = false;
var InfoTorG = false;
var InfoArcP = false;
var InfoLancerP = false;
var InfoTorP = false;
var InfoKingP = false;
var InfoGnrlP = false;
var InfoKntP = false;

var InfoU_x = 620;
var InfoU_y = 180;
var InfoU_w = 25;
var InfoU_h = 25;

var InfoM_x = 620;
var InfoM_y = 210;
var InfoM_w = 25;
var InfoM_h = 25;

var InfoA_x = 665;
var InfoA_y = 210;
var InfoA_w = 25;
var InfoA_h = 25;

var InfoV_x = 667.5;
var InfoV_y = 197.5;
var InfoV_w = 25;
var InfoV_h = 25;

function InfoLancerPS()
{
	context.drawImage(LancPA,InfoA_x,InfoA_y,InfoA_w,InfoA_h)
	context.drawImage(LancersPS,InfoU_x,InfoU_y,InfoU_w,InfoU_h)
	context.drawImage(LancPM,InfoM_x,InfoM_y,InfoM_w,InfoM_h)
	TextLife(LancerP[LancersPChoosed].life,InfoV_x,InfoV_y)
}

function InfoArcPS()
{
	context.drawImage(ArcPA,InfoA_x,InfoA_y,InfoA_w,InfoA_h)
	context.drawImage(ArcsPS,InfoU_x,InfoU_y,InfoU_w,InfoU_h)
	context.drawImage(ArcPM,InfoM_x,InfoM_y,InfoM_w,InfoM_h)
	TextLife(ArcP[ArcsPChoosed].life,InfoV_x,InfoV_y)
}

function InfoGnrlPS()
{
	context.drawImage(GnrlPA,InfoA_x,InfoA_y,InfoA_w,InfoA_h)
	context.drawImage(GnrlsPS,InfoU_x,InfoU_y,InfoU_w,InfoU_h)
	context.drawImage(GnrlPM,InfoM_x,InfoM_y,InfoM_w,InfoM_h)
	TextLife(GnrlP[GnrlPChoosed].life,InfoV_x,InfoV_y)
}

function InfoKntPS()
{
	context.drawImage(KntPA,InfoA_x,InfoA_y,InfoA_w,InfoA_h)
	context.drawImage(KntsPS,InfoU_x,InfoU_y,InfoU_w,InfoU_h)
	context.drawImage(KntPM,InfoM_x,InfoM_y,InfoM_w,InfoM_h)
	TextLife(KntP[KntsPChoosed].life,InfoV_x,InfoV_y)
}
function InfoKingPS()
{
	context.drawImage(ReiPA,InfoA_x,InfoA_y,InfoA_w,InfoA_h)
	context.drawImage(KingsPS,InfoU_x,InfoU_y,InfoU_w,InfoU_h)
	context.drawImage(ReiPM,InfoM_x,InfoM_y,InfoM_w,InfoM_h)
	TextLife(KingP[KingPChoosed].life,InfoV_x,InfoV_y)
}

function InfoTorPS()
{
	context.drawImage(TorPA,InfoA_x,InfoA_y,InfoA_w,InfoA_h)
	context.drawImage(TorsPS,InfoU_x,InfoU_y,InfoU_w,InfoU_h)
	context.drawImage(TorPM,InfoM_x,InfoM_y,InfoM_w,InfoM_h)
	TextLife(TorP[TorsPChoosed].life,InfoV_x,InfoV_y)
}
var InfoUG_x = 715;
var InfoUG_y = 180;
var InfoUG_w = 25;
var InfoUG_h = 25;

var InfoMG_x = 760;
var InfoMG_y = 210;
var InfoMG_w = 25;
var InfoMG_h = 25;

var InfoAG_x = 715;
var InfoAG_y = 210;
var InfoAG_w = 25;
var InfoAG_h = 25;

var InfoVG_x = 762.5;
var InfoVG_y = 197.5;
var InfoVG_w = 25;
var InfoVG_h = 25;


function InfoKingGS()
{
	context.drawImage(ReiGA,InfoAG_x,InfoAG_y,InfoAG_w,InfoAG_h)
	context.drawImage(KingsGS,InfoUG_x,InfoUG_y,InfoUG_w,InfoUG_h)
	context.drawImage(ReiGM,InfoMG_x,InfoMG_y,InfoMG_w,InfoMG_h)
	TextLifeG(KingG[KingGChoosed].life,InfoVG_x,InfoVG_y)
}
function InfoTorGS()
{
	context.drawImage(TorGA,InfoAG_x,InfoAG_y,InfoAG_w,InfoAG_h)
	context.drawImage(TorsGS,InfoUG_x,InfoUG_y,InfoUG_w,InfoUG_h)
	context.drawImage(TorGM,InfoMG_x,InfoMG_y,InfoMG_w,InfoMG_h)
	TextLifeG(TorG[TorsGChoosed].life,InfoVG_x,InfoVG_y)
}
function InfoKntGS()
{
	context.drawImage(KntGA,InfoAG_x,InfoAG_y,InfoAG_w,InfoAG_h)
	context.drawImage(KntsGS,InfoUG_x,InfoUG_y,InfoUG_w,InfoUG_h)
	context.drawImage(KntGM,InfoMG_x,InfoMG_y,InfoMG_w,InfoMG_h)
	TextLifeG(KntG[KntsGChoosed].life,InfoVG_x,InfoVG_y)
}
function InfoGnrlGS()
{
	context.drawImage(GnrlGA,InfoAG_x,InfoAG_y,InfoAG_w,InfoAG_h)
	context.drawImage(GnrlsGS,InfoUG_x,InfoUG_y,InfoUG_w,InfoUG_h)
	context.drawImage(GnrlGM,InfoMG_x,InfoMG_y,InfoMG_w,InfoMG_h)
	TextLifeG(GnrlG[GnrlGChoosed].life,InfoVG_x,InfoVG_y)
}
function InfoArcGS()
{
	context.drawImage(ArcGA,InfoAG_x,InfoAG_y,InfoAG_w,InfoAG_h)
	context.drawImage(ArcsGS,InfoUG_x,InfoUG_y,InfoUG_w,InfoUG_h)
	context.drawImage(ArcGM,InfoMG_x,InfoMG_y,InfoMG_w,InfoMG_h)
	TextLifeG(ArcG[ArcsGChoosed].life,InfoVG_x,InfoVG_y)
}
function InfoLancerGS()
{
	context.drawImage(LancGA,InfoAG_x,InfoAG_y,InfoAG_w,InfoAG_h)
	context.drawImage(LancersGS,InfoUG_x,InfoUG_y,InfoUG_w,InfoUG_h)
	context.drawImage(LancGM,InfoMG_x,InfoMG_y,InfoMG_w,InfoMG_h)
	TextLifeG(LancerG[LancersGChoosed].life,InfoVG_x,InfoVG_y)
}
var PTBR = true;
var ENUS = false;
var WallG_x = 0;
var WallG_y = 600;
var WallG_w = 601;
var WallG_h = 100;
var WallG_life = 100;

var save = 0;

var WallP_x = 0;
var WallP_y = 0;
var WallP_w = 601;
var WallP_h = 100;
var WallP_life = 100;

var WallG = new Image();
WallG.src = "Images/Muralha_Grega.png";

var WallP = new Image();
WallP.src = "Images/Muralha_Persa.png";

var SaveC = null;
var Save_x = 1150;
var Save_y = 0;
var Save_w = 50;
var Save_h = 50;
var Save = new Image()
Save.src = "Images/Save.png";
var Alert = false;
//var CountAlert = true;
/*function SaveGame()
{
	if(mouse.press && mouse.x >= Save_x &&
	mouse.x <= Save_x + Save_w &&
	mouse.y >= Save_y &&
	mouse.y <= Save_y + Save_h)
	{
		Backon = true;
		localStorage.setItem("TaSalvo",Backon);
		for(var i = 0; i < 4; i++) 
		{	
			localStorage.setItem("Warriors.SaveC1", KntP[i].x);
			localStorage.setItem("Warriors.SaveC2", KntP[i].y);
			localStorage.setItem("Warriors.SaveC3", KntP[i].life);
		}
		newLine("Jogo Salvo com Sucesso!");
		mouse.press = false;
		save = 0;
		CountAlert = true;
	}
	if(save > 5000 && CountAlert == true)
	{
		Alert = true;
		save = 0;
		if(Alert)
		{
			newLine("Salve seu jogo para evitar a perda de dados.");
			if(save > 5000)
			{
				CountAlert = false;
			}
		}
	}
}*/
var Mouseoff = false;
var InfoWallG = false;
var InfoWallP = false;
var SWG = new Image();
SWG.src = "Images/MS_G.png";
var SWP = new Image();
SWP.src = "Images/MS_P.png"
var MWG = new Image();
MWG.src = "Images/MSGM.png"
var MWP = new Image();
MWP.src = "Images/MSPM.png";
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
		context.drawImage(MWP,InfoA_x,InfoA_y,InfoA_w,InfoA_h)
		context.drawImage(SWP,InfoU_x,InfoU_y,InfoU_w,InfoU_h)
		context.drawImage(MWP,InfoM_x,InfoM_y,InfoM_w,InfoM_h)
		TextLife(WallP_life,InfoV_x,InfoV_y)
	}
}


var ArcGM = new Image();
ArcGM.src = "Images/ArcGM.png"
var ArcGA = new Image();
ArcGA.src = "Images/ArcGA.png"
var ArcPA = new Image();
ArcPA.src = "Images/ArcPA.png"
var ArcPM = new Image();
ArcPM.src = "Images/ArcPM.png"
var GnrlGM = new Image();
GnrlGM.src = "Images/GnrlGM.png"
var GnrlGA = new Image();
GnrlGA.src = "Images/GnrlGA.png"
var GnrlPM = new Image();
GnrlPM.src = "Images/GnrlPM.png"
var GnrlPA = new Image();
GnrlPA.src = "Images/GnrlPA.png"
var LancPM = new Image();
LancPM.src = "Images/LancPM.png"
var LancPA = new Image();
LancPA.src = "Images/LancPA.png"
var LancGM = new Image();
LancGM.src = "Images/LancGM.png"
var LancGA = new Image();
LancGA.src = "Images/LancGA.png"
var KntGM = new Image();
KntGM.src = "Images/KntGM.png"
var KntGA = new Image();
KntGA.src = "Images/KntGA.png"
var KntPM = new Image();
KntPM.src = "Images/KntPM.png"
var KntPA = new Image();
KntPA.src = "Images/KntPA.png"
var ReiPM = new Image();
ReiPM.src = "Images/ReiPM.png"
var ReiPA = new Image();
ReiPA.src = "Images/ReiPA.png"
var ReiGM = new Image();
ReiGM.src = "Images/ReiGM.png"
var ReiGA = new Image();
ReiGA.src = "Images/ReiGA.png"
var TorGM = new Image();
TorGM.src = "Images/TorGM.png"
var TorGA = new Image();
TorGA.src = "Images/TorGA.png"
var TorPM = new Image();
TorPM.src = "Images/TorPM.png"
var TorPA = new Image();
TorPA.src = "Images/TorPA.png"
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
if(PTBR)
{
	GnrlsGS.src = "Images/General_GregoPT.png";
	GnrlsPS.src = "Images/General_PersaPT.png";
	KingsGS.src = "Images/Rei_GregoPT.png";
	KingsPS.src = "Images/Rei_PersaPT.png";
	KntsGS.src = "Images/Cavaleiro_GregaPT.png";
	KntsPS.src = "Images/Cavaleiro_PersaPT.png";
	ArcsGS.src = "Images/Arqueiro_GregoPT.png";
	ArcsPS.src = "Images/Arqueiro_PersaPT.png";
	TorsGS.src = "Images/Torre_GregaPT.png";
	TorsPS.src = "Images/Torre_PersaPT.png";
	LancersGS.src = "Images/Lanceiro_GregoPT.png";
	LancersPS.src = "Images/Lanceiro_PersaPT.png";
}
if(ENUS)
{
	GnrlsGS.src = "Images/General_GregoEN.png";
	GnrlsPS.src = "Images/General_PersaEN.png";
	KingsGS.src = "Images/Rei_GregoEN.png";
	KingsPS.src = "Images/Rei_PersaEN.png";
	KntsGS.src = "Images/Cavaleiro_GregaEN.png";
	KntsPS.src = "Images/Cavaleiro_PersaEN.png";
	ArcsGS.src = "Images/Arqueiro_GregoEN.png";
	ArcsPS.src = "Images/Arqueiro_PersaEN.png";
	TorsGS.src = "Images/Torre_GregaEN.png";
	TorsPS.src = "Images/Torre_PersaEN.png";
	LancersGS.src = "Images/Lanceiro_GregoEN.png";
	LancersPS.src = "Images/Lanceiro_PersaEN.png";
}
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
			context.drawImage(MWG,InfoAG_x,InfoAG_y,InfoAG_w,InfoAG_h)
			context.drawImage(SWG,InfoUG_x,InfoUG_y,InfoUG_w,InfoUG_h)
			context.drawImage(MWG,InfoMG_x,InfoMG_y,InfoMG_w,InfoMG_h)
			TextLife(WallG_life,InfoVG_x,InfoVG_y)
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


var Movimentacao = new Image();
if(PTBR)
{
	Movimentacao.src = "Images/MovimentacaoPT.png";
}
if(ENUS)
{
	Movimentacao.src = "Images/MovimentacaoEN.png";
}
var Movimentacao_x = 605;
var Movimentacao_y = 150;
var Movimentacao_w = 200;
var Movimentacao_h = 50;

var Ataque = new Image();
if(PTBR)
{
	Ataque.src = "Images/AtaquePT.png";
}
if(ENUS)
{
	Ataque.src = "Images/AtaqueEN.png";
}
var Ataque_x = 605;
var Ataque_y = 200;
var Ataque_w = 230;
var Ataque_h = 50;

var Vida = new Image();
if(PTBR)
{
	Vida.src = "Images/VidaPT.png";
}
if(ENUS)
{
	Vida.src = "Images/VidaEN.png";
}
var Vida_x = 613;
var Vida_y = 255;
var Vida_w = 80;
var Vida_h = 40;

var Unidade = new Image();
if(PTBR)
{
	Unidade.src = "Images/UnidadePT.png";
}
if(ENUS)
{
	Unidade.src = "Images/UnidadeEN.png";
}
var Unidade_x = 605;
var Unidade_y = 100;
var Unidade_w = 150;
var Unidade_h = 40;

var InfoU_x = 755;
var InfoU_y = 100;
var InfoU_w = 50;
var InfoU_h = 50;

var InfoM_x = 805;
var InfoM_y = 150;
var InfoM_w = 50;
var InfoM_h = 50;

var InfoA_x = 730;
var InfoA_y = 200;
var InfoA_w = 50;
var InfoA_h = 50;

var InfoV_x = 693;
var InfoV_y = 289;
var InfoV_w = 50;
var InfoV_h = 50;



		


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
var InfoUG_x = 1080;
var InfoUG_y = 100;
var InfoUG_w = 50;
var InfoUG_h = 50;

var InfoMG_x = 1130;
var InfoMG_y = 150;
var InfoMG_w = 50;
var InfoMG_h = 50;

var InfoAG_x = 1050;
var InfoAG_y = 200;
var InfoAG_w = 50;
var InfoAG_h = 50;

var InfoVG_x = 1018;
var InfoVG_y = 289;
var InfoVG_w = 50;
var InfoVG_h = 50;


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
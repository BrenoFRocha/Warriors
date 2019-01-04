var PTBR = true;
var ENUS = false;
var limit_down = 451;
var limit_right = 551;
var lancers_numbers = 8;

function LancersP(LancerP_x, LancerP_y, LancerP_w, LancerP_h, LancerP_l)
{	
	this.x = LancerP_x;
	this.y = LancerP_y;
	this.w = LancerP_w;
	this.h = LancerP_h;
	this.life = LancerP_l;
	this.dead = false;
	this.onClicked = false;;
	this.LancersP = new Image;
	if(PTBR)
	{
		this.LancersP.src = "Images/Lanceiro_PersaPT.png";	
	}
	if(ENUS)
	{
		this.LancersP.src = "Images/Lanceiro_PersaEN.png";	
	}
	this.update = function()
	{
		
	}
	
	this.draw = function(ctx)
	{					
		ctx.drawImage(this.LancersP, this.x, this.y, this.w, this.h);	
	}
}

var LancersGChoosed;
var LancersPChoosed;
var MovL = new Image;
MovL.src = "Images/Celula_M.png";
var AtkL = new Image;
//AtkL.src = "Images/Celula_A.png";

function LancersG(LancerG_x, LancerG_y, LancerG_w, LancerG_h, LancerG_l)
{	
	this.x = LancerG_x;
	this.y = LancerG_y;
	this.w = LancerG_w;
	this.h = LancerG_h;
	this.life = LancerG_l;
	this.dead = false;
	this.onClicked = false;;
	this.LancersG = new Image;
	if(PTBR)
	{
		this.LancersG.src = "Images/Lanceiro_GregoPT.png";	
	}
	if(ENUS)
	{
		this.LancersG.src = "Images/Lanceiro_GregoEN.png";
	}
	this.update = function()
	{
		
	}
	
	this.draw = function(ctx)
	{					
		ctx.drawImage(this.LancersG, this.x, this.y, this.w, this.h);	
	}
}

{//Lanceiros Persas
	var LancerP_x = [251, 51, 151 , 201, 301, 351, 401, 501];	
	var LancerP = [];
	var Click_LP = 0;
	var OrdemLP = LancersPChoosed;
	
	for(var i = 0; i < lancers_numbers; i++) 
	{
		LancerP[i] = new LancersP(LancerP_x[i], 151, 48, 48, 40);			
	}				
}
	
{//Lanceiros Gregos
	var LancerG_x = [251, 51, 151 , 201, 301, 351, 401, 501];	
	var LancerG = [];
	var Click_LG = 0;
	var OrdemLG = LancersGChoosed;
	for(var i = 0; i < lancers_numbers; i++) 
	{
		LancerG[i] = new LancersG(LancerG_x[i], 501, 48, 48, 40);			
	}				
}
function updateLancers()
{
	for(var i = 0; i < LancerG.length; i++) 
	{
		if(mouse.press && LancerG[i].dead == false &&
		mouse.x >= LancerG[i].x &&
		mouse.x <= LancerG[i].x + LancerG[i].w &&
		mouse.y >= LancerG[i].y &&
		mouse.y <= LancerG[i].y + LancerG[i].h)				
		{	
			OrdemLG = LancersGChoosed;
			LancersGChoosed = i;
			InfoArcG = false;
			InfoGnrlG = false;
			InfoKingG = false;
			InfoLancerG = true;
			InfoKntG = false;
			InfoTorG = false;
			InfoWallG = false;
		}
	}
	for(var i = 0; i < LancerP.length; i++) 
	{
		if(mouse.press && LancerP[i].dead == false &&
			mouse.x >= LancerP[i].x &&
			mouse.x <= LancerP[i].x + LancerP[i].w &&
			mouse.y >= LancerP[i].y &&
			mouse.y <= LancerP[i].y + LancerP[i].h)				
		{	
			OrdemLP = LancersPChoosed;
			InfoArcP = false;
			InfoLancerP = true;
			InfoTorP = false;
			InfoKingP = false;
			InfoGnrlP = false;
			InfoKntP = false;
			InfoWallP = false;
			LancersPChoosed = i;
		}
	}
}
function UpdateLancerG()
{		
	if(Vez_Gregos)
	{
		for(var i = 0; i < LancerG.length; i++) 
		{
			if(mouse.press && LancerG[i].dead == false &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h)				
			{		
				if(LancersGChoosed != OrdemLG)
				{
					Click_LG = 0;
				}
				Click_LG += 1;		
				Click_AG = 0;
				Click_GG = 0;  
				Click_TG = 0; 
				Click_CG = 0;  
				Click_KG = 0;
				Click_CP = 0;
				Click_AP = 0;
				Click_LP = 0;  
				Click_TP = 0; 
				Click_GP = 0;  
				Click_KP = 0;
				mouse.press = false;
			}		
		}
	}
}
function UpdateLancerP()
{	
	if(Vez_Persas)
	{
		for(var i = 0; i < LancerP.length; i++) 
		{
			if(mouse.press && LancerP[i].dead == false &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h)				
			{	
				if(LancersPChoosed != OrdemLP)
				{
					Click_LP = 0;
				}
				Click_LP += 1;		
				Click_AP = 0;
				Click_LG = 0;  
				Click_TP = 0; 
				Click_CP = 0;  
				Click_KP = 0;
				Click_CP = 0;
				Click_AP = 0;
				Click_GP = 0;  
				Click_TP = 0; 
				Click_GG = 0;  
				Click_KP = 0;
				mouse.press = false;
			}		
		}
	}
}

function PossibilitiesL()
{
	if(Vez_Gregos)
	{
		if(Click_LG == 1)
		{
			if(LancerG[LancersGChoosed].y > 101)
			{
				context.drawImage(MovL, LancerG[LancersGChoosed].x, LancerG[LancersGChoosed].y - 50, LancerG[LancersGChoosed].w, LancerG[LancersGChoosed].h);
			}
			if(LancerG[LancersGChoosed].y > 151)
			{
				context.drawImage(MovL, LancerG[LancersGChoosed].x , LancerG[LancersGChoosed].y - 100, LancerG[LancersGChoosed].w, LancerG[LancersGChoosed].h);
			}
			if(LancerG[LancersGChoosed].y < limit_down)
			{
				context.drawImage(MovL, LancerG[LancersGChoosed].x, LancerG[LancersGChoosed].y + 50, LancerG[LancersGChoosed].w, LancerG[LancersGChoosed].h);
			}
			if(LancerG[LancersGChoosed].y < limit_down - 50)
			{
				context.drawImage(MovL, LancerG[LancersGChoosed].x, LancerG[LancersGChoosed].y + 100, LancerG[LancersGChoosed].w, LancerG[LancersGChoosed].h);
			}
			context.drawImage(MovL, LancerG[LancersGChoosed].x + 50, LancerG[LancersGChoosed].y, LancerG[LancersGChoosed].w, LancerG[LancersGChoosed].h);
			context.drawImage(MovL, LancerG[LancersGChoosed].x + 100, LancerG[LancersGChoosed].y, LancerG[LancersGChoosed].w, LancerG[LancersGChoosed].h);
			context.drawImage(MovL, LancerG[LancersGChoosed].x - 100, LancerG[LancersGChoosed].y, LancerG[LancersGChoosed].w, LancerG[LancersGChoosed].h);
			context.drawImage(MovL, LancerG[LancersGChoosed].x - 50, LancerG[LancersGChoosed].y, LancerG[LancersGChoosed].w, LancerG[LancersGChoosed].h);
		
			
			if(mouse.x > LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w + 2 &&
			mouse.x < LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w*2 &&
			mouse.y > LancerG[LancersGChoosed].y &&
			mouse.y < LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h &&
			LancerG[LancersGChoosed].x < limit_right)
			{
				LancerG[LancersGChoosed].x += 50;
				if(GregosCouldMoveL())
				{
					LancerG[LancersGChoosed].x -= 50;
					Click_LG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;
				}
				else
				{
					Click_LG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;	
				}
			}
		
			else if(mouse.x > LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w*2 + 3 &&
			mouse.x < LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w*3 &&
			mouse.y > LancerG[LancersGChoosed].y &&
			mouse.y < LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h &&
			LancerG[LancersGChoosed].x < limit_right - 50)
			{
				LancerG[LancersGChoosed].x += 100;
				if(GregosCouldMoveL() || TreeA.x + 50 == LancerG[LancersGChoosed].x && TreeA.y == LancerG[LancersGChoosed].y ||
				TreeB.x + 50 == LancerG[LancersGChoosed].x && TreeB.y == LancerG[LancersGChoosed].y ||
				TreeC.x + 50 == LancerG[LancersGChoosed].x && TreeC.y == LancerG[LancersGChoosed].y ||
				TreeD.x + 50 == LancerG[LancersGChoosed].x && TreeD.y == LancerG[LancersGChoosed].y ||
				TreeE.x + 50 == LancerG[LancersGChoosed].x && TreeE.y == LancerG[LancersGChoosed].y ||
				TreeF.x + 50 == LancerG[LancersGChoosed].x && TreeF.y == LancerG[LancersGChoosed].y)
				{
					LancerG[LancersGChoosed].x -= 100;
					Click_LG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;
				}
				else
				{
					Click_LG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;	
				}
			}
			
			else if(mouse.x < LancerG[LancersGChoosed].x  - 2 &&
			mouse.x > LancerG[LancersGChoosed].x - LancerG[LancersGChoosed].w  &&
			mouse.y > LancerG[LancersGChoosed].y &&
			mouse.y < LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h)
			{
				LancerG[LancersGChoosed].x -= 50;
				if(GregosCouldMoveL())
				{
					LancerG[LancersGChoosed].x += 50;
					Click_LG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;
				}
				else
				{
					Click_LG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;	
				}
			}
		
			else if(mouse.x < LancerG[LancersGChoosed].x - LancerG[LancersGChoosed].w - 3 &&
			mouse.x > LancerG[LancersGChoosed].x - LancerG[LancersGChoosed].w*2 &&
			mouse.y > LancerG[LancersGChoosed].y &&
			mouse.y < LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h)
			{
				LancerG[LancersGChoosed].x -= 100;
				if(GregosCouldMoveL() || TreeA.x - 50 == LancerG[LancersGChoosed].x && TreeA.y == LancerG[LancersGChoosed].y ||
				TreeB.x - 50 == LancerG[LancersGChoosed].x && TreeB.y == LancerG[LancersGChoosed].y ||
				TreeC.x - 50 == LancerG[LancersGChoosed].x && TreeC.y == LancerG[LancersGChoosed].y ||
				TreeD.x - 50 == LancerG[LancersGChoosed].x && TreeD.y == LancerG[LancersGChoosed].y ||
				TreeE.x - 50 == LancerG[LancersGChoosed].x && TreeE.y == LancerG[LancersGChoosed].y ||
				TreeF.x - 50 == LancerG[LancersGChoosed].x && TreeF.y == LancerG[LancersGChoosed].y)
				{
					LancerG[LancersGChoosed].x += 100;
					Click_LG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;
				}
				else
				{
					Click_LG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;	
				}	
			}
				
			else if(mouse.x > LancerG[LancersGChoosed].x &&
			mouse.x < LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w &&
			mouse.y > LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h + 2 &&
			mouse.y < LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h*2 &&
			LancerG[LancersGChoosed].y < limit_down)
			{ 
				LancerG[LancersGChoosed].y += 50;
				if(GregosCouldMoveL())
				{
					LancerG[LancersGChoosed].y -= 50;
					Click_LG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;
				}
				else
				{
					Click_LG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;	
				}	
			}
				
			else if(mouse.x > LancerG[LancersGChoosed].x &&
			mouse.x < LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w &&
			mouse.y > LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h*2 + 3 &&
			mouse.y < LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h*3 &&
			LancerG[LancersGChoosed].y < limit_down - 50)
			{ 
				LancerG[LancersGChoosed].y += 100;
				if(GregosCouldMoveL() || TreeA.y + 50 == LancerG[LancersGChoosed].y && TreeA.x == LancerG[LancersGChoosed].x ||
				TreeB.y + 50 == LancerG[LancersGChoosed].y && TreeB.x == LancerG[LancersGChoosed].x ||
				TreeC.y + 50 == LancerG[LancersGChoosed].y && TreeC.x == LancerG[LancersGChoosed].x ||
				TreeD.y + 50 == LancerG[LancersGChoosed].y && TreeD.x == LancerG[LancersGChoosed].x ||
				TreeE.y + 50 == LancerG[LancersGChoosed].y && TreeE.x == LancerG[LancersGChoosed].x ||
				TreeF.y + 50 == LancerG[LancersGChoosed].y && TreeF.x == LancerG[LancersGChoosed].x)
				{
					LancerG[LancersGChoosed].y -= 100;
					Click_LG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;
				}
				else
				{
					Click_LG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;	
				}		
			}
				
			else if(mouse.x > LancerG[LancersGChoosed].x &&
			mouse.x < LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w &&
			mouse.y < LancerG[LancersGChoosed].y - 2 &&
			mouse.y > LancerG[LancersGChoosed].y - LancerG[LancersGChoosed].h &&
			LancerG[LancersGChoosed].y > 101)
			{ 
				LancerG[LancersGChoosed].y -= 50;
				if(GregosCouldMoveL())
				{
					LancerG[LancersGChoosed].y += 50;
					Click_LG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;
				}
				else
				{
					Click_LG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;	
				}		
			}
				
			else if(mouse.x > LancerG[LancersGChoosed].x &&
			mouse.x < LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w &&
			mouse.y < LancerG[LancersGChoosed].y - LancerG[LancersGChoosed].h - 3 &&
			mouse.y > LancerG[LancersGChoosed].y - LancerG[LancersGChoosed].h*2 &&
			LancerG[LancersGChoosed].y > 151)
			{ 
				LancerG[LancersGChoosed].y -= 100;
				if(GregosCouldMoveL()|| TreeA.y - 50 == LancerG[LancersGChoosed].y && TreeA.x == LancerG[LancersGChoosed].x ||
				TreeB.y - 50 == LancerG[LancersGChoosed].y && TreeB.x == LancerG[LancersGChoosed].x ||
				TreeC.y - 50 == LancerG[LancersGChoosed].y && TreeC.x == LancerG[LancersGChoosed].x ||
				TreeD.y - 50 == LancerG[LancersGChoosed].y && TreeD.x == LancerG[LancersGChoosed].x ||
				TreeE.y - 50 == LancerG[LancersGChoosed].y && TreeE.x == LancerG[LancersGChoosed].x ||
				TreeF.y - 50 == LancerG[LancersGChoosed].y && TreeF.x == LancerG[LancersGChoosed].x)
				{
					LancerG[LancersGChoosed].y += 100;
					Click_LG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;
				}
				else
				{
					Click_LG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;	
				}		
			}
		}

		else if(Click_LG == 2)
		{
			context.drawImage(AtkL,LancerG[LancersGChoosed].x + 50, LancerG[LancersGChoosed].y + 50, LancerG[LancersGChoosed].w, LancerG[LancersGChoosed].h);
			context.drawImage(AtkL,LancerG[LancersGChoosed].x - 50, LancerG[LancersGChoosed].y - 50, LancerG[LancersGChoosed].w, LancerG[LancersGChoosed].h);
			context.drawImage(AtkL,LancerG[LancersGChoosed].x + 50, LancerG[LancersGChoosed].y - 50, LancerG[LancersGChoosed].w, LancerG[LancersGChoosed].h);
			context.drawImage(AtkL,LancerG[LancersGChoosed].x - 50, LancerG[LancersGChoosed].y + 50, LancerG[LancersGChoosed].w, LancerG[LancersGChoosed].h);
		
			if(mouse.x > LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w &&
				mouse.x < LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w*2 &&
				mouse.y < LancerG[LancersGChoosed].y &&
				mouse.y > LancerG[LancersGChoosed].y - LancerG[LancersGChoosed].h&&
				mouse.x >= WallP_x &&
				mouse.x <= WallP_x + WallP_w &&
				mouse.y >= WallP_y &&
				mouse.y <= WallP_y + WallP_h||
				mouse.x < LancerG[LancersGChoosed].x &&
				mouse.x > LancerG[LancersGChoosed].x - LancerG[LancersGChoosed].w &&
				mouse.y < LancerG[LancersGChoosed].y &&
				mouse.y > LancerG[LancersGChoosed].y - LancerG[LancersGChoosed].h &&
				mouse.x >= WallP_x &&
				mouse.x <= WallP_x + WallP_w &&
				mouse.y >= WallP_y &&
				mouse.y <= WallP_y + WallP_h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						WallP_life -= 26;
						if(!PTBR)
						{
							newLine("Golpe Critico! Muralha Persa perde 26 pontos de vida.");
						}
						else
									newLine("Critical attack! - Persian Wall loses 26 life points.");
					}
					else
					{
						damage =  Math.floor(randomRange(16,21));
						WallP_life -= damage;
						if(!PTBR)
						{
							newLine("Golpe Normal - Muralha Persa perde "+damage+" pontos de vida.");
						}
						else
							newLine("Normal attack - Persian Wall loses "+damage+" life points.");
					}
					Click_LG = 0;
					Vez_Gregos = false;	
					Vez_Persas = true;
				}
		
			for(var i = 0; i < ArcP.length; i++) 
			{
				if(mouse.x > LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w &&
				mouse.x < LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w*2 &&
				mouse.y > LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h &&
				mouse.y < LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h*2 &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h||
				mouse.x > LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w &&
				mouse.x < LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w*2 &&
				mouse.y < LancerG[LancersGChoosed].y &&
				mouse.y > LancerG[LancersGChoosed].y - LancerG[LancersGChoosed].h&&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h||
				mouse.x < LancerG[LancersGChoosed].x &&
				mouse.x > LancerG[LancersGChoosed].x - LancerG[LancersGChoosed].w &&
				mouse.y > LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h &&
				mouse.y < LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h*2 &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h||
				mouse.x < LancerG[LancersGChoosed].x &&
				mouse.x > LancerG[LancersGChoosed].x - LancerG[LancersGChoosed].w &&
				mouse.y < LancerG[LancersGChoosed].y &&
				mouse.y > LancerG[LancersGChoosed].y - LancerG[LancersGChoosed].h &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
						{
							ArcP[i].life -= 26;
							if(!PTBR)
							{
								newLine("Golpe Critico! Arqueiro Persa perde 26 pontos de vida.");
							}
							else
								newLine("Critical attack! - Persian Archer loses 26 life points.");
						}
						else
						{
							damage =  Math.floor(randomRange(21,25));
							ArcP[i].life -= damage;
							if(!PTBR)
							{
								newLine("Golpe Normal - Arqueiro Persa perde "+damage+" pontos de vida.");
							}
							else
								newLine("Normal attack - Persian Archer loses "+damage+" life points.");
						}
						Click_LG = 0;
						Vez_Persas = true;	
						Vez_Gregos = false;
				}
			}
			for(var i = 0; i < TorP.length; i++) 
			{
				if(mouse.x > LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w &&
				mouse.x < LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w*2 &&
				mouse.y > LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h &&
				mouse.y < LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h*2 &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h||
				mouse.x > LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w &&
				mouse.x < LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w*2 &&
				mouse.y < LancerG[LancersGChoosed].y &&
				mouse.y > LancerG[LancersGChoosed].y - LancerG[LancersGChoosed].h&&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h||
				mouse.x < LancerG[LancersGChoosed].x &&
				mouse.x > LancerG[LancersGChoosed].x - LancerG[LancersGChoosed].w &&
				mouse.y > LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h &&
				mouse.y < LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h*2 &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h||
				mouse.x < LancerG[LancersGChoosed].x &&
				mouse.x > LancerG[LancersGChoosed].x - LancerG[LancersGChoosed].w &&
				mouse.y < LancerG[LancersGChoosed].y &&
				mouse.y > LancerG[LancersGChoosed].y - LancerG[LancersGChoosed].h &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
						{
							TorP[i].life -= 26;
							if(!PTBR)
							{
								newLine("Golpe Critico! Torre Persa perde 26 pontos de vida.");
							}
							else
												newLine("Critical attack! - Persian Tower loses 26 life points.");
						}
						else
						{
							damage =  Math.floor(randomRange(16,21));
							TorP[i].life -= damage;
							if(!PTBR)
							{
								newLine("Golpe Normal - Torre Persa perde "+damage+ " pontos de vida.");
							}
								else
												newLine("Normal attack - Persian Tower loses "+damage+" life points.");
						}
						Click_LG = 0;
						Vez_Persas = true;	
						Vez_Gregos = false;
				}
			}
			for(var i = 0; i < GnrlP.length; i++) 
			{
				if(mouse.x > LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w &&
				mouse.x < LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w*2 &&
				mouse.y > LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h &&
				mouse.y < LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h*2 &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h||
				mouse.x > LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w &&
				mouse.x < LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w*2 &&
				mouse.y < LancerG[LancersGChoosed].y &&
				mouse.y > LancerG[LancersGChoosed].y - LancerG[LancersGChoosed].h&&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h||
				mouse.x < LancerG[LancersGChoosed].x &&
				mouse.x > LancerG[LancersGChoosed].x - LancerG[LancersGChoosed].w &&
				mouse.y > LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h &&
				mouse.y < LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h*2 &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h||
				mouse.x < LancerG[LancersGChoosed].x &&
				mouse.x > LancerG[LancersGChoosed].x - LancerG[LancersGChoosed].w &&
				mouse.y < LancerG[LancersGChoosed].y &&
				mouse.y > LancerG[LancersGChoosed].y - LancerG[LancersGChoosed].h &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
						{
							GnrlP[i].life -= 26;
							if(!PTBR)
							{
								newLine("Golpe Critico! General Persa perde 26 pontos de vida.");
							}
							else
								newLine("Critical attack! - Persian General loses 26 life points.");
						}
						else
						{
							damage =  Math.floor(randomRange(16,21));
							GnrlP[i].life -= damage;
							if(!PTBR)
							{
								newLine("Golpe Normal - General Persa perde "+damage+" pontos de vida.");
							}
							else
								newLine("Normal attack - Persian General loses "+damage+" life points.");
						}
						Click_LG = 0;
						Vez_Persas = true;	
						Vez_Gregos = false;
				}
			}
			for(var i = 0; i < KingP.length; i++) 
			{
				if(mouse.x > LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w &&
				mouse.x < LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w*2 &&
				mouse.y > LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h &&
				mouse.y < LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h*2 &&
				mouse.x >= KingP[i].x &&
				mouse.x <= KingP[i].x + KingP[i].w &&
				mouse.y >= KingP[i].y &&
				mouse.y <= KingP[i].y + KingP[i].h||
				mouse.x > LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w &&
				mouse.x < LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w*2 &&
				mouse.y < LancerG[LancersGChoosed].y &&
				mouse.y > LancerG[LancersGChoosed].y - LancerG[LancersGChoosed].h&&
				mouse.x >= KingP[i].x &&
				mouse.x <= KingP[i].x + KingP[i].w &&
				mouse.y >= KingP[i].y &&
				mouse.y <= KingP[i].y + KingP[i].h||
				mouse.x < LancerG[LancersGChoosed].x &&
				mouse.x > LancerG[LancersGChoosed].x - LancerG[LancersGChoosed].w &&
				mouse.y > LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h &&
				mouse.y < LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h*2 &&
				mouse.x >= KingP[i].x &&
				mouse.x <= KingP[i].x + KingP[i].w &&
				mouse.y >= KingP[i].y &&
				mouse.y <= KingP[i].y + KingP[i].h||
				mouse.x < LancerG[LancersGChoosed].x &&
				mouse.x > LancerG[LancersGChoosed].x - LancerG[LancersGChoosed].w &&
				mouse.y < LancerG[LancersGChoosed].y &&
				mouse.y > LancerG[LancersGChoosed].y - LancerG[LancersGChoosed].h &&
				mouse.x >= KingP[i].x &&
				mouse.x <= KingP[i].x + KingP[i].w &&
				mouse.y >= KingP[i].y &&
				mouse.y <= KingP[i].y + KingP[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
						{
							KingP[i].life -= 26;
							if(!PTBR)
							{
								newLine("Golpe Critico! Rei Persa perde 26 pontos de vida.");
							}
							else
								newLine("Critical attack! - Persian King loses 26 life points.");
						}
						else
						{
							damage =  Math.floor(randomRange(16,21));
							KingP[i].life -= damage;
							if(!PTBR)
							{
								newLine("Golpe Normal - Rei Persa perde "+damage+ " pontos de vida.");
							}
							else
													newLine("Normal attack - Persian King loses "+damage+" life points.");
						}
						Click_LG = 0;
						Vez_Persas = true;	
						Vez_Gregos = false;
				}
			}
			for(var i = 0; i < KntP.length; i++) 
			{
				if(mouse.x > LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w &&
				mouse.x < LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w*2 &&
				mouse.y > LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h &&
				mouse.y < LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h*2 &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h||
				mouse.x > LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w &&
				mouse.x < LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w*2 &&
				mouse.y < LancerG[LancersGChoosed].y &&
				mouse.y > LancerG[LancersGChoosed].y - LancerG[LancersGChoosed].h&&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h||
				mouse.x < LancerG[LancersGChoosed].x &&
				mouse.x > LancerG[LancersGChoosed].x - LancerG[LancersGChoosed].w &&
				mouse.y > LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h &&
				mouse.y < LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h*2 &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h||
				mouse.x < LancerG[LancersGChoosed].x &&
				mouse.x > LancerG[LancersGChoosed].x - LancerG[LancersGChoosed].w &&
				mouse.y < LancerG[LancersGChoosed].y &&
				mouse.y > LancerG[LancersGChoosed].y - LancerG[LancersGChoosed].h &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
						{
							KntP[i].life -= 26;
							if(!PTBR)
							{
								newLine("Golpe Critico! Cavaleiro Persa perde 26 pontos de vida.");
							}
							else
								newLine("Critical attack! - Persian Knight loses 26 life points.");
						}
						else
						{
							damage =  Math.floor(randomRange(16,21));
							KntP[i].life -= damage;
							if(!PTBR)
							{	
								newLine("Golpe Normal - Cavaleiro Persa perde "+damage+ " pontos de vida.");
							}
							else
								newLine("Normal attack - Persian Knight loses "+damage+" life points.");
						}
						Click_LG = 0;
						Vez_Persas = true;	
						Vez_Gregos = false;
				}
			}
			for(var i = 0; i < LancerP.length; i++) 
			{
				if(mouse.x > LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w &&
				mouse.x < LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w*2 &&
				mouse.y > LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h &&
				mouse.y < LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h*2 &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h||
				mouse.x > LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w &&
				mouse.x < LancerG[LancersGChoosed].x + LancerG[LancersGChoosed].w*2 &&
				mouse.y < LancerG[LancersGChoosed].y &&
				mouse.y > LancerG[LancersGChoosed].y - LancerG[LancersGChoosed].h&&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h||
				mouse.x < LancerG[LancersGChoosed].x &&
				mouse.x > LancerG[LancersGChoosed].x - LancerG[LancersGChoosed].w &&
				mouse.y > LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h &&
				mouse.y < LancerG[LancersGChoosed].y + LancerG[LancersGChoosed].h*2 &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h||
				mouse.x < LancerG[LancersGChoosed].x &&
				mouse.x > LancerG[LancersGChoosed].x - LancerG[LancersGChoosed].w &&
				mouse.y < LancerG[LancersGChoosed].y &&
				mouse.y > LancerG[LancersGChoosed].y - LancerG[LancersGChoosed].h &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
						{
							LancerP[i].life -= 26;
							if(!PTBR)
							{
								newLine("Golpe Critico! Lanceiro Persa perde 26 pontos de vida.");
							}
							else
								newLine("Critical attack! - Persian Lancer loses 26 life points.");
						}
						else
						{
							damage =  Math.floor(randomRange(16,21));
							LancerP[i].life -= damage;
							if(!PTBR)
							{
								newLine("Golpe Normal - Lanceiro Persa perde "+damage+" pontos de vida.");
							}
							else
								newLine("Normal attack - Persian Lancer loses "+damage+" life points.");
						}
						Click_LG = 0;
						Vez_Persas = true;	
						Vez_Gregos = false;
				}
			}
		
		}


	}
	
	else if(Vez_Persas)
	{
		if(Click_LP == 1)
		{
			if(LancerP[LancersPChoosed].y > 101)
			{
				context.drawImage(MovL, LancerP[LancersPChoosed].x, LancerP[LancersPChoosed].y - 50, LancerP[LancersPChoosed].w, LancerP[LancersPChoosed].h);
			}
			if(LancerP[LancersPChoosed].y > 151)
			{
				context.drawImage(MovL, LancerP[LancersPChoosed].x , LancerP[LancersPChoosed].y - 100, LancerP[LancersPChoosed].w, LancerP[LancersPChoosed].h);
			}
			if(LancerP[LancersPChoosed].y < limit_down)
			{
				context.drawImage(MovL, LancerP[LancersPChoosed].x, LancerP[LancersPChoosed].y + 50, LancerP[LancersPChoosed].w, LancerP[LancersPChoosed].h);
			}
			if(LancerP[LancersPChoosed].y < limit_down - 50)
			{
				context.drawImage(MovL, LancerP[LancersPChoosed].x, LancerP[LancersPChoosed].y + 100, LancerP[LancersPChoosed].w, LancerP[LancersPChoosed].h);
			}
			context.drawImage(MovL, LancerP[LancersPChoosed].x + 50, LancerP[LancersPChoosed].y, LancerP[LancersPChoosed].w, LancerP[LancersPChoosed].h);
			context.drawImage(MovL, LancerP[LancersPChoosed].x + 100, LancerP[LancersPChoosed].y, LancerP[LancersPChoosed].w, LancerP[LancersPChoosed].h);
			context.drawImage(MovL, LancerP[LancersPChoosed].x - 100, LancerP[LancersPChoosed].y, LancerP[LancersPChoosed].w, LancerP[LancersPChoosed].h);
			context.drawImage(MovL, LancerP[LancersPChoosed].x - 50, LancerP[LancersPChoosed].y, LancerP[LancersPChoosed].w, LancerP[LancersPChoosed].h);
		
			if(mouse.x > LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w + 2 &&
			mouse.x < LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w*2 &&
			mouse.y > LancerP[LancersPChoosed].y &&
			mouse.y < LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h &&
			LancerP[LancersPChoosed].x < limit_right)
			{
				LancerP[LancersPChoosed].x += 50;
				if(PersasCouldMoveL())
				{
					LancerP[LancersPChoosed].x -= 50;
					Click_LP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;
				}
				else
				{
					Click_LP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;	
				}
			}
		
			else if(mouse.x > LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w*2 + 3 &&
			mouse.x < LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w*3 &&
			mouse.y > LancerP[LancersPChoosed].y &&
			mouse.y < LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h &&
			LancerP[LancersPChoosed].x < limit_right - 50)
			{
				LancerP[LancersPChoosed].x += 100;
				if(PersasCouldMoveL() || TreeA.x + 50 == LancerP[LancersPChoosed].x && LancerP[LancersPChoosed].y == TreeA.y ||
				TreeB.x + 50 == LancerP[LancersPChoosed].x && LancerP[LancersPChoosed].y == TreeB.y ||
				TreeC.x + 50 == LancerP[LancersPChoosed].x && LancerP[LancersPChoosed].y == TreeC.y ||
				TreeD.x + 50 == LancerP[LancersPChoosed].x && LancerP[LancersPChoosed].y == TreeD.y ||
				TreeE.x + 50 == LancerP[LancersPChoosed].x && LancerP[LancersPChoosed].y == TreeE.y ||
				TreeF.x + 50 == LancerP[LancersPChoosed].x && LancerP[LancersPChoosed].y == TreeF.y)
				{
					LancerP[LancersPChoosed].x -= 100;
					Click_LP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;
				}
				else
				{
					Click_LP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;	
				}
			}
			
			else if(mouse.x < LancerP[LancersPChoosed].x  - 2 &&
			mouse.x > LancerP[LancersPChoosed].x - LancerP[LancersPChoosed].w  &&
			mouse.y > LancerP[LancersPChoosed].y &&
			mouse.y < LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h)
			{
				LancerP[LancersPChoosed].x -= 50;
				if(PersasCouldMoveL())
				{
					LancerP[LancersPChoosed].x += 50;
					Click_LP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;
				}
				else
				{
					Click_LP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;	
				}
			}
		
			else if(mouse.x < LancerP[LancersPChoosed].x - LancerP[LancersPChoosed].w - 3 &&
			mouse.x > LancerP[LancersPChoosed].x - LancerP[LancersPChoosed].w*2 &&
			mouse.y > LancerP[LancersPChoosed].y &&
			mouse.y < LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h)
			{
				LancerP[LancersPChoosed].x -= 100;
				if(PersasCouldMoveL() || TreeA.x - 50 == LancerP[LancersPChoosed].x && LancerP[LancersPChoosed].y == TreeA.y ||
				TreeB.x - 50 == LancerP[LancersPChoosed].x && LancerP[LancersPChoosed].y == TreeB.y ||
				TreeC.x - 50 == LancerP[LancersPChoosed].x && LancerP[LancersPChoosed].y == TreeC.y ||
				TreeD.x - 50 == LancerP[LancersPChoosed].x && LancerP[LancersPChoosed].y == TreeD.y ||
				TreeE.x - 50 == LancerP[LancersPChoosed].x && LancerP[LancersPChoosed].y == TreeE.y ||
				TreeF.x - 50 == LancerP[LancersPChoosed].x && LancerP[LancersPChoosed].y == TreeF.y)
				
				{
					LancerP[LancersPChoosed].x += 100;
					Click_LP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;
				}
				else
				{
					Click_LP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;	
				}	
			}
				
			else if(mouse.x > LancerP[LancersPChoosed].x &&
			mouse.x < LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w &&
			mouse.y > LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h + 2 &&
			mouse.y < LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h*2 &&
			LancerP[LancersPChoosed].y < limit_down)
			{ 
				LancerP[LancersPChoosed].y += 50;
				if(PersasCouldMoveL())
				{
					LancerP[LancersPChoosed].y -= 50;
					Click_LP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;
				}
				else
				{
					Click_LP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;	
				}	
			}
				
			else if(mouse.x > LancerP[LancersPChoosed].x &&
			mouse.x < LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w &&
			mouse.y > LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h*2 + 3 &&
			mouse.y < LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h*3 &&
			LancerP[LancersPChoosed].y < limit_down - 50)
			{ 
				LancerP[LancersPChoosed].y += 100;
				if(PersasCouldMoveL() || LancerP[LancersPChoosed].x == TreeA.x &&  TreeA.y + 50 == LancerP[LancersPChoosed].y ||
				LancerP[LancersPChoosed].x == TreeB.x &&  TreeB.y + 50 == LancerP[LancersPChoosed].y ||
				LancerP[LancersPChoosed].x == TreeC.x &&  TreeC.y + 50 == LancerP[LancersPChoosed].y ||
				LancerP[LancersPChoosed].x == TreeD.x &&  TreeD.y + 50 == LancerP[LancersPChoosed].y ||
				LancerP[LancersPChoosed].x == TreeE.x &&  TreeE.y + 50 == LancerP[LancersPChoosed].y ||
				LancerP[LancersPChoosed].x == TreeF.x &&  TreeF.y + 50 == LancerP[LancersPChoosed].y)
				
				{
					LancerP[LancersPChoosed].y -= 100;
					Click_LP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;
				}
				else
				{
					Click_LP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;	
				}		
			}
				
			else if(mouse.x > LancerP[LancersPChoosed].x &&
			mouse.x < LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w &&
			mouse.y < LancerP[LancersPChoosed].y - 2 &&
			mouse.y > LancerP[LancersPChoosed].y - LancerP[LancersPChoosed].h &&
			LancerP[LancersPChoosed].y > 101)
			{ 
				LancerP[LancersPChoosed].y -= 50;
				if(PersasCouldMoveL())
				{
					LancerP[LancersPChoosed].y += 50;
					Click_LP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;
				}
				else
				{
					Click_LP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;	
				}		
			}
				
			else if(mouse.x > LancerP[LancersPChoosed].x &&
			mouse.x < LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w &&
			mouse.y < LancerP[LancersPChoosed].y - LancerP[LancersPChoosed].h - 3 &&
			mouse.y > LancerP[LancersPChoosed].y - LancerP[LancersPChoosed].h*2 &&
			LancerP[LancersPChoosed].y > 151)
			{ 
				LancerP[LancersPChoosed].y -= 100;
				if(PersasCouldMoveL() || LancerP[LancersPChoosed].x == TreeA.x && LancerP[LancersPChoosed].y - 50 == TreeA.y ||
				LancerP[LancersPChoosed].x == TreeB.x && LancerP[LancersPChoosed].y == TreeB.y - 50 ||
				LancerP[LancersPChoosed].x == TreeC.x && LancerP[LancersPChoosed].y == TreeC.y - 50 ||
				LancerP[LancersPChoosed].x == TreeD.x && LancerP[LancersPChoosed].y == TreeD.y - 50 ||
				LancerP[LancersPChoosed].x == TreeE.x && LancerP[LancersPChoosed].y == TreeE.y - 50 ||
				LancerP[LancersPChoosed].x == TreeF.x && LancerP[LancersPChoosed].y == TreeF.y - 50)
				{
					LancerP[LancersPChoosed].y += 100;
					Click_LP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;
				}
				else
				{
					Click_LP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;	
				}		
			}
		}
	
		else if(Click_LP == 2)
		{
			context.drawImage(AtkL,LancerP[LancersPChoosed].x + 50, LancerP[LancersPChoosed].y + 50, LancerP[LancersPChoosed].w, LancerP[LancersPChoosed].h);
			context.drawImage(AtkL,LancerP[LancersPChoosed].x - 50, LancerP[LancersPChoosed].y - 50, LancerP[LancersPChoosed].w, LancerP[LancersPChoosed].h);
			context.drawImage(AtkL,LancerP[LancersPChoosed].x + 50, LancerP[LancersPChoosed].y - 50, LancerP[LancersPChoosed].w, LancerP[LancersPChoosed].h);
			context.drawImage(AtkL,LancerP[LancersPChoosed].x - 50, LancerP[LancersPChoosed].y + 50, LancerP[LancersPChoosed].w, LancerP[LancersPChoosed].h);
		
			if(mouse.x > LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w &&
				mouse.x < LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w*2 &&
				mouse.y > LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h &&
				mouse.y < LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h*2 &&
				mouse.x >= WallG_x &&
				mouse.x <= WallG_x + WallG_w &&
				mouse.y >= WallG_y &&
				mouse.y <= WallG_y + WallG_h||
				mouse.x < LancerP[LancersPChoosed].x &&
				mouse.x > LancerP[LancersPChoosed].x - LancerP[LancersPChoosed].w &&
				mouse.y > LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h &&
				mouse.y < LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h*2 &&
				mouse.x >= WallG_x &&
				mouse.x <= WallG_x + WallG_w &&
				mouse.y >= WallG_y &&
				mouse.y <= WallG_y + WallG_h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						WallG_life -= 26;
						if(!PTBR)
						{
							newLine("Golpe Critico! Muralha Grega perde 26 pontos de vida.");
						}
						else
							newLine("Critical attack! - Greek Wall loses 26 life points.");
					}
					else
					{
						damage =  Math.floor(randomRange(16,21));
						WallG_life -= damage;
						if(!PTBR)
						{
							newLine("Golpe Normal - Muralha Grega perde "+damage+" pontos de vida.");
						}
						else
							newLine("Normal attack - Greek Wall loses "+damage+" life points.");
					}
					Click_LP = 0;
					Vez_Persas = false;	
					Vez_Gregos = true;
				}
		
			for(var i = 0; i < ArcG.length; i++) 
			{
				if(mouse.x > LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w &&
				mouse.x < LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w*2 &&
				mouse.y > LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h &&
				mouse.y < LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h*2 &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h||
				mouse.x > LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w &&
				mouse.x < LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w*2 &&
				mouse.y < LancerP[LancersPChoosed].y &&
				mouse.y > LancerP[LancersPChoosed].y - LancerP[LancersPChoosed].h&&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h||
				mouse.x < LancerP[LancersPChoosed].x &&
				mouse.x > LancerP[LancersPChoosed].x - LancerP[LancersPChoosed].w &&
				mouse.y > LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h &&
				mouse.y < LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h*2 &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h||
				mouse.x < LancerP[LancersPChoosed].x &&
				mouse.x > LancerP[LancersPChoosed].x - LancerP[LancersPChoosed].w &&
				mouse.y < LancerP[LancersPChoosed].y &&
				mouse.y > LancerP[LancersPChoosed].y - LancerP[LancersPChoosed].h &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
						{
							ArcG[i].life -= 26;
							if(!PTBR)
							{
								newLine("Golpe Critico! Arqueiro Grego perde 26 pontos de vida.");
							}
							else
								newLine("Critical attack! - Greek Archer loses 26 life points.");
						}
						else
						{
							damage =  Math.floor(randomRange(21,25));
							ArcG[i].life -= damage;
							if(!PTBR)
							{
								newLine("Golpe Normal - Arqueiro Grego perde "+damage+" pontos de vida.");
							}
							else
												newLine("Normal attack - Greek Archer loses "+damage+" life points.");
						}
						Click_LP = 0;
						Vez_Gregos = true;	
						Vez_Persas = false;
				}
			}
			for(var i = 0; i < TorG.length; i++) 
			{
				if(mouse.x > LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w &&
				mouse.x < LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w*2 &&
				mouse.y > LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h &&
				mouse.y < LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h*2 &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h||
				mouse.x > LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w &&
				mouse.x < LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w*2 &&
				mouse.y < LancerP[LancersPChoosed].y &&
				mouse.y > LancerP[LancersPChoosed].y - LancerP[LancersPChoosed].h&&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h||
				mouse.x < LancerP[LancersPChoosed].x &&
				mouse.x > LancerP[LancersPChoosed].x - LancerP[LancersPChoosed].w &&
				mouse.y > LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h &&
				mouse.y < LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h*2 &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h||
				mouse.x < LancerP[LancersPChoosed].x &&
				mouse.x > LancerP[LancersPChoosed].x - LancerP[LancersPChoosed].w &&
				mouse.y < LancerP[LancersPChoosed].y &&
				mouse.y > LancerP[LancersPChoosed].y - LancerP[LancersPChoosed].h &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
						{
							TorG[i].life -= 26;
							if(!PTBR)
							{
								newLine("Golpe Critico! Torre Grega perde 26 pontos de vida.");
							}
							else
								newLine("Critical attack! - Greek Tower loses 26 life points.");
						}
						else
						{
							damage =  Math.floor(randomRange(16,21));
							TorG[i].life -= damage;
							if(!PTBR)
							{
								newLine("Golpe Normal - Torre Grega perde "+damage+ " pontos de vida.");
							}
							else
								newLine("Normal attack - Greek Tower loses "+damage+" life points.");
						}
						Click_LP = 0;
						Vez_Gregos = true;	
						Vez_Persas = false;
				}
			}
			for(var i = 0; i < GnrlG.length; i++) 
			{
				if(mouse.x > LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w &&
				mouse.x < LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w*2 &&
				mouse.y > LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h &&
				mouse.y < LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h*2 &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h||
				mouse.x > LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w &&
				mouse.x < LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w*2 &&
				mouse.y < LancerP[LancersPChoosed].y &&
				mouse.y > LancerP[LancersPChoosed].y - LancerP[LancersPChoosed].h&&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h||
				mouse.x < LancerP[LancersPChoosed].x &&
				mouse.x > LancerP[LancersPChoosed].x - LancerP[LancersPChoosed].w &&
				mouse.y > LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h &&
				mouse.y < LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h*2 &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h||
				mouse.x < LancerP[LancersPChoosed].x &&
				mouse.x > LancerP[LancersPChoosed].x - LancerP[LancersPChoosed].w &&
				mouse.y < LancerP[LancersPChoosed].y &&
				mouse.y > LancerP[LancersPChoosed].y - LancerP[LancersPChoosed].h &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
						{
							GnrlG[i].life -= 26;
							if(!PTBR)
							{
								newLine("Golpe Critico! General Grego perde 26 pontos de vida.");
							}
							else
								newLine("Critical attack! - Greek General loses 26 life points.");
						}
						else
						{
							damage =  Math.floor(randomRange(16,21));
							GnrlG[i].life -= damage;
							if(!PTBR)
							{
								newLine("Golpe Normal - General Grego perde "+damage+" pontos de vida.");
							}
							else
								newLine("Normal attack - Greek General loses "+damage+" life points.");
						}
						Click_LP = 0;
						Vez_Gregos = true;	
						Vez_Persas = false;
				}
			}
			for(var i = 0; i < KingG.length; i++) 
			{
				if(mouse.x > LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w &&
				mouse.x < LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w*2 &&
				mouse.y > LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h &&
				mouse.y < LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h*2 &&
				mouse.x >= KingG[i].x &&
				mouse.x <= KingG[i].x + KingG[i].w &&
				mouse.y >= KingG[i].y &&
				mouse.y <= KingG[i].y + KingG[i].h||
				mouse.x > LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w &&
				mouse.x < LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w*2 &&
				mouse.y < LancerP[LancersPChoosed].y &&
				mouse.y > LancerP[LancersPChoosed].y - LancerP[LancersPChoosed].h&&
				mouse.x >= KingG[i].x &&
				mouse.x <= KingG[i].x + KingG[i].w &&
				mouse.y >= KingG[i].y &&
				mouse.y <= KingG[i].y + KingG[i].h||
				mouse.x < LancerP[LancersPChoosed].x &&
				mouse.x > LancerP[LancersPChoosed].x - LancerP[LancersPChoosed].w &&
				mouse.y > LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h &&
				mouse.y < LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h*2 &&
				mouse.x >= KingG[i].x &&
				mouse.x <= KingG[i].x + KingG[i].w &&
				mouse.y >= KingG[i].y &&
				mouse.y <= KingG[i].y + KingG[i].h||
				mouse.x < LancerP[LancersPChoosed].x &&
				mouse.x > LancerP[LancersPChoosed].x - LancerP[LancersPChoosed].w &&
				mouse.y < LancerP[LancersPChoosed].y &&
				mouse.y > LancerP[LancersPChoosed].y - LancerP[LancersPChoosed].h &&
				mouse.x >= KingG[i].x &&
				mouse.x <= KingG[i].x + KingG[i].w &&
				mouse.y >= KingG[i].y &&
				mouse.y <= KingG[i].y + KingG[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
						{
							KingG[i].life -= 26;
							if(!PTBR)
							{
								newLine("Golpe Critico! Rei Grego perde 26 pontos de vida.");
							}
							else
								newLine("Critical attack! - Greek King loses 26 life points.");
						}
						else
						{
							damage =  Math.floor(randomRange(16,21));
							KingG[i].life -= damage;
							if(!PTBR)
							{
								newLine("Golpe Normal - Rei Grego perde "+damage+ " pontos de vida.");
							}
							else
								newLine("Normal attack - Greek King loses "+damage+" life points.");
						}
						Click_LP = 0;
						Vez_Gregos = true;	
						Vez_Persas = false;
				}
			}
			for(var i = 0; i < KntG.length; i++) 
			{
				if(mouse.x > LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w &&
				mouse.x < LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w*2 &&
				mouse.y > LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h &&
				mouse.y < LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h*2 &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h||
				mouse.x > LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w &&
				mouse.x < LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w*2 &&
				mouse.y < LancerP[LancersPChoosed].y &&
				mouse.y > LancerP[LancersPChoosed].y - LancerP[LancersPChoosed].h&&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h||
				mouse.x < LancerP[LancersPChoosed].x &&
				mouse.x > LancerP[LancersPChoosed].x - LancerP[LancersPChoosed].w &&
				mouse.y > LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h &&
				mouse.y < LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h*2 &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h||
				mouse.x < LancerP[LancersPChoosed].x &&
				mouse.x > LancerP[LancersPChoosed].x - LancerP[LancersPChoosed].w &&
				mouse.y < LancerP[LancersPChoosed].y &&
				mouse.y > LancerP[LancersPChoosed].y - LancerP[LancersPChoosed].h &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
						{
							KntG[i].life -= 26;
							if(!PTBR)
							{
								newLine("Golpe Critico! Cavaleiro Grego perde 26 pontos de vida.");
							}
							else
								newLine("Critical attack! - Greek Knight loses 26 life points.");
						}
						else
						{
							damage =  Math.floor(randomRange(16,21));
							KntG[i].life -= damage;
							if(!PTBR)
							{
								newLine("Golpe Normal - Cavaleiro Grego perde "+damage+ " pontos de vida.");
							}
							else
								newLine("Normal attack - Greek Knight loses "+damage+" life points.");
						}
						Click_LP = 0;
						Vez_Gregos = true;	
						Vez_Persas = false;
				}
			}
			for(var i = 0; i < LancerG.length; i++) 
			{
				if(mouse.x > LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w &&
				mouse.x < LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w*2 &&
				mouse.y > LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h &&
				mouse.y < LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h*2 &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h||
				mouse.x > LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w &&
				mouse.x < LancerP[LancersPChoosed].x + LancerP[LancersPChoosed].w*2 &&
				mouse.y < LancerP[LancersPChoosed].y &&
				mouse.y > LancerP[LancersPChoosed].y - LancerP[LancersPChoosed].h&&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h||
				mouse.x < LancerP[LancersPChoosed].x &&
				mouse.x > LancerP[LancersPChoosed].x - LancerP[LancersPChoosed].w &&
				mouse.y > LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h &&
				mouse.y < LancerP[LancersPChoosed].y + LancerP[LancersPChoosed].h*2 &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h||
				mouse.x < LancerP[LancersPChoosed].x &&
				mouse.x > LancerP[LancersPChoosed].x - LancerP[LancersPChoosed].w &&
				mouse.y < LancerP[LancersPChoosed].y &&
				mouse.y > LancerP[LancersPChoosed].y - LancerP[LancersPChoosed].h &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
						{
							LancerG[i].life -= 26;
							if(!PTBR)
							{
								newLine("Golpe Critico! Lanceiro Grego perde 26 pontos de vida.");
							}
							else
								newLine("Critical attack! - Greek Lancer loses 26 life points.");
						}
						else
						{
							damage =  Math.floor(randomRange(16,21));
							LancerG[i].life -= damage;
							if(!PTBR)
							{
								newLine("Golpe Normal - Lanceiro Grego perde "+damage+" pontos de vida.");
							}
							else
								newLine("Normal attack - Greek Lancer loses "+damage+" life points.");
						}
						Click_LP = 0;
						Vez_Gregos = true;	
						Vez_Persas = false;
				}
			}
		
		}
	
	}
}

function GregosCouldMoveL()
{
	if((InfoArcP == true && LancerG[LancersGChoosed].x == ArcP[ArcsPChoosed].x && LancerG[LancersGChoosed].y == ArcP[ArcsPChoosed].y)||
	(InfoKntP == true && LancerG[LancersGChoosed].x == KntP[KntsPChoosed].x && LancerG[LancersGChoosed].y == KntP[KntsPChoosed].y) ||
	(InfoTorP == true && LancerG[LancersGChoosed].x == TorP[TorsPChoosed].x && LancerG[LancersGChoosed].y == TorP[TorsPChoosed].y) ||
	(InfoLancerP == true && LancerG[LancersGChoosed].x == LancerP[LancersPChoosed].x && LancerG[LancersGChoosed].y == LancerP[LancersPChoosed].y) ||
	(InfoGnrlP == true && LancerG[LancersGChoosed].x == GnrlP[GnrlPChoosed].x && LancerG[LancersGChoosed].y == GnrlP[GnrlPChoosed].y) ||
	(InfoKingP == true && LancerG[LancersGChoosed].x == KingP[KingPChoosed].x && LancerG[LancersGChoosed].y == KingP[KingPChoosed].y) ||
	(LancerG[LancersGChoosed].x == TreeA.x && LancerG[LancersGChoosed].y == TreeA.y)||
	(LancerG[LancersGChoosed].x == TreeB.x && LancerG[LancersGChoosed].y == TreeB.y)||
	(LancerG[LancersGChoosed].x == TreeC.x && LancerG[LancersGChoosed].y == TreeC.y)||
	(LancerG[LancersGChoosed].x == TreeD.x && LancerG[LancersGChoosed].y == TreeD.y)||
	(LancerG[LancersGChoosed].x == TreeE.x && LancerG[LancersGChoosed].y == TreeE.y)||
	(LancerG[LancersGChoosed].x == TreeF.x && LancerG[LancersGChoosed].y == TreeF.y))
	{
		return true;
	}
	else return false;
}

function PersasCouldMoveL()
{	
	if((InfoArcG == true && LancerP[LancersPChoosed].x == ArcG[ArcsGChoosed].x && LancerP[LancersPChoosed].y == ArcG[ArcsGChoosed].y)||
	(InfoKntG == true && LancerP[LancersPChoosed].x == KntG[KntsGChoosed].x && LancerP[LancersPChoosed].y == KntG[KntsGChoosed].y) ||
	(InfoTorG == true && LancerP[LancersPChoosed].x == TorG[TorsGChoosed].x && LancerP[LancersPChoosed].y == TorG[TorsGChoosed].y) ||
	(InfoLancerG == true && LancerP[LancersPChoosed].x == LancerG[LancersGChoosed].x && LancerP[LancersPChoosed].y == LancerG[LancersGChoosed].y) ||
	(InfoGnrlG == true && LancerP[LancersPChoosed].x == GnrlG[GnrlGChoosed].x && LancerP[LancersPChoosed].y == GnrlG[GnrlGChoosed].y) ||
	(InfoKingG == true && LancerP[LancersPChoosed].x == KingG[KingGChoosed].x && LancerP[LancersPChoosed].y == KingG[KingGChoosed].y) ||
	(LancerP[LancersPChoosed].x == TreeA.x && LancerP[LancersPChoosed].y == TreeA.y)||
	(LancerP[LancersPChoosed].x == TreeB.x && LancerP[LancersPChoosed].y == TreeB.y)||
	(LancerP[LancersPChoosed].x == TreeC.x && LancerP[LancersPChoosed].y == TreeC.y)||
	(LancerP[LancersPChoosed].x == TreeD.x && LancerP[LancersPChoosed].y == TreeD.y)||
	(LancerP[LancersPChoosed].x == TreeE.x && LancerP[LancersPChoosed].y == TreeE.y)||
	(LancerP[LancersPChoosed].x == TreeF.x && LancerP[LancersPChoosed].y == TreeF.y))
	{
		return true;
	}
	else return false;
}

function DieLancers()
{
	for(var i = 0; i < LancerG.length; i++) 
	{
		if(LancerG[i].life <= 0)
		{
			LancerG[i].dead = true;
			
		}
		if(LancerG[i].dead)
		{
			LancerG[i].x = 0;
			LancerG[i].y = 0;
			LancerG[i].w = 0;
			LancerG[i].h = 0;
			LancerG[i].life = 0;
		}		
	}
	for(var i = 0; i < LancerP.length; i++) 
	{
		if(LancerP[i].life <= 0)
		{
			LancerP[i].dead = true;
		}
		if(LancerP[i].dead)
		{	
			LancerP[i].x = 0;
			LancerP[i].y = 0;
			LancerP[i].w = 0;
			LancerP[i].h = 0;
			LancerP[i].life = 0;
		}
	}
}

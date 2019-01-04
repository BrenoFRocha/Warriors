var PTBR = true;
var ENUS = false;
var limit_down = 451;
var limit_right = 551;

function KntsP(KntP_x, KntP_y, KntP_w, KntP_h, KntP_l)
{	
	this.x = KntP_x;
	this.y = KntP_y;
	this.w = KntP_w;
	this.h = KntP_h;
	this.life = KntP_l;
	this.dead = false;
	this.onClicked = false;;
	this.KntsP = new Image;
	if(PTBR)
	{
		this.KntsP.src = "Images/Cavaleiro_PersaPT.png";	
	}
	if(ENUS)
	{
		this.KntsP.src = "Images/Cavaleiro_PersaEN.png";	
	}
	this.draw = function(ctx)
	{					
		ctx.drawImage(this.KntsP, this.x, this.y, this.w, this.h);	
	}
}

var KntsGChoosed;
var KntsPChoosed;
var MovC = new Image;
MovC.src = "Images/Celula_M.png";
var AtkC = new Image;
//AtkC.src = "Images/Celula_A.png";



function KntsG(KntG_x, KntG_y, KntG_w, KntG_h, KntG_l)
{	
	this.x = KntG_x;
	this.y = KntG_y;
	this.w = KntG_w;
	this.h = KntG_h;
	this.life = KntG_l;
	this.dead = false;	
	this.KntsG = new Image;
	if(PTBR)
	{
		this.KntsG.src = "Images/Cavaleiro_GregaPT.png";	
	}
	if(ENUS)
	{
		this.KntsG.src = "Images/Cavaleiro_GregaEN.png";	
	}
	this.update = function()
	{
		
	}
	
	this.draw = function(ctx)
	{					
		ctx.drawImage(this.KntsG, this.x, this.y, this.w, this.h);	
	}		
}

{//Cavaleiros Persas
	var KntP_x = [1,1,limit_right,limit_right];
	var KntP_y = [101,151,101,151];	
	var Click_CP = 0;	
	var KntP = [];
	var OrdemCP = KntsPChoosed;
		
	for(var i = 0; i < 4; i++) 
	{
		KntP[i] = new KntsP(KntP_x[i], KntP_y[i], 48, 48, 45);			
	}				
}
	
{//Cavaleiros Gregas
	var KntG_x = [1,1,limit_right, limit_right];
	var KntG_y = [limit_down,limit_down-50,limit_down,limit_down-50];		
	var KntG = [];
	var Click_CG = 0;
	var OrdemCG = KntsGChoosed;
	
	for(var i = 0; i < 4; i++) 
	{
		KntG[i] = new KntsG(KntG_x[i], KntG_y[i], 48, 48, 45);					
	}				
}
function updateKnts()
{
	for(var i = 0; i < KntG.length; i++) 
	{
		if(mouse.press && KntG[i].dead == false &&
		mouse.x >= KntG[i].x &&
		mouse.x <= KntG[i].x + KntG[i].w &&
		mouse.y >= KntG[i].y &&
		mouse.y <= KntG[i].y + KntG[i].h)				
		{
			OrdemCG = KntsGChoosed;
			KntsGChoosed = i;					
			InfoArcG = false;
			InfoGnrlG = false;
			InfoKingG = false;
			InfoLancerG = false;
			InfoKntG = true;
			InfoTorG = false;
			InfoWallG = false;
		}		
	}
	for(var i = 0; i < KntP.length; i++) 
	{		
		if(mouse.press && KntP[i].dead == false &&
		mouse.x >= KntP[i].x &&
		mouse.x <= KntP[i].x + KntP[i].w &&
		mouse.y >= KntP[i].y &&
		mouse.y <= KntP[i].y + KntP[i].h)				
		{	
			OrdemCP = KntsPChoosed;
			KntsPChoosed = i;
			InfoArcP = false;
			InfoLancerP = false;
			InfoTorP = false;
			InfoKingP = false;
			InfoGnrlP = false;
			InfoKntP = true;
			InfoWallP = false;
		}		
	}
}
function UpdateKntG()
{	
	if(Vez_Gregos)
	{
		for(var i = 0; i < KntG.length; i++) 
		{
			if(mouse.press && KntG[i].dead == false &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h)				
			{	
				if(KntsGChoosed != OrdemCG)
				{
					Click_CG = 0;
				}
				Click_CG += 1;		
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
				mouse.press = false;
			}		
		}
	}
}
function UpdateKntP()
{
	if(Vez_Persas)
	{
		for(var i = 0; i < KntP.length; i++) 
		{		
			if(mouse.press && KntP[i].dead == false &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h)				
			{			
				if(KntsPChoosed != OrdemCP)
				{
					Click_CP = 0;
				}
				Click_CP += 1;		
				mouse.press = false;
				Click_AP = 0;
				Click_LP = 0;  
				Click_TP = 0; 
				Click_GP = 0;  
				Click_KP = 0;
				Click_CG = 0;
				Click_AG = 0;
				Click_LG = 0;  
				Click_TG = 0; 
				Click_GG = 0;  
				Click_KG = 0;
			}	
		}
	}
}
	
function PossibilitiesC()
{
	if(Vez_Gregos)
	{
		if(Click_CG == 1)
		{			
			if(KntG[KntsGChoosed].y > 101)
			{
				context.drawImage(MovC, KntG[KntsGChoosed].x + 50, KntG[KntsGChoosed].y - 50, KntG[KntsGChoosed].w, KntG[KntsGChoosed].h);
				context.drawImage(MovC, KntG[KntsGChoosed].x - 50, KntG[KntsGChoosed].y - 50, KntG[KntsGChoosed].w, KntG[KntsGChoosed].h);
			}
			if(KntG[KntsGChoosed].y < limit_down)
			{
				context.drawImage(MovC, KntG[KntsGChoosed].x + 50, KntG[KntsGChoosed].y + 50, KntG[KntsGChoosed].w, KntG[KntsGChoosed].h);
				context.drawImage(MovC, KntG[KntsGChoosed].x - 50, KntG[KntsGChoosed].y + 50, KntG[KntsGChoosed].w, KntG[KntsGChoosed].h);
			}
																
			if(mouse.x > KntG[KntsGChoosed].x + KntG[KntsGChoosed].w + 3 &&
			mouse.x < KntG[KntsGChoosed].x + KntG[KntsGChoosed].w*2 &&
			mouse.y < KntG[KntsGChoosed].y - 2 &&
			mouse.y > KntG[KntsGChoosed].y - KntG[KntsGChoosed].h &&
			KntG[KntsGChoosed].x < limit_right &&
			KntG[KntsGChoosed].y > 101)
			{					
				KntG[KntsGChoosed].x += 50;
				KntG[KntsGChoosed].y -= 50;		
				
				if(GregosCouldMoveC())
				{
					KntG[KntsGChoosed].x -= 50;
					KntG[KntsGChoosed].y += 50;
					Click_CG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;		
				}
				else
				{
					Click_CG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;					
				}
			}
			else if(mouse.x < KntG[KntsGChoosed].x - 2 &&
			mouse.x > KntG[KntsGChoosed].x - KntG[KntsGChoosed].w &&
			mouse.y < KntG[KntsGChoosed].y - 2 &&
			mouse.y > KntG[KntsGChoosed].y - KntG[KntsGChoosed].h &&
			KntG[KntsGChoosed].y > 101)
			{					
				KntG[KntsGChoosed].x -= 50;
				KntG[KntsGChoosed].y -= 50;	

				if(GregosCouldMoveC())
				{
					KntG[KntsGChoosed].x += 50;
					KntG[KntsGChoosed].y += 50;
					Click_CG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;		
				}
				else
				{
					Click_CG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;					
				}	
			}
			else if(mouse.x < KntG[KntsGChoosed].x - 2 &&
			mouse.x > KntG[KntsGChoosed].x - KntG[KntsGChoosed].w &&
			mouse.y > KntG[KntsGChoosed].y + KntG[KntsGChoosed].h + 3 &&
			mouse.y < KntG[KntsGChoosed].y + KntG[KntsGChoosed].h*2 &&
			KntG[KntsGChoosed].y < limit_down)
			{	
				KntG[KntsGChoosed].x -= 50;
				KntG[KntsGChoosed].y += 50;
				
				if(GregosCouldMoveC())
				{
					KntG[KntsGChoosed].x += 50;
					KntG[KntsGChoosed].y -= 50;
					Click_CG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;		
				}
				else
				{
					Click_CG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;					
				}
			}
			else if(mouse.x > KntG[KntsGChoosed].x + KntG[KntsGChoosed].w + 3 &&
			mouse.x < KntG[KntsGChoosed].x + KntG[KntsGChoosed].w*2 &&
			mouse.y > KntG[KntsGChoosed].y + KntG[KntsGChoosed].h + 3 &&
			mouse.y < KntG[KntsGChoosed].y + KntG[KntsGChoosed].h*2 &&
			KntG[KntsGChoosed].y < limit_down &&
			KntG[KntsGChoosed].x < limit_right)
			{
				KntG[KntsGChoosed].x += 50;
				KntG[KntsGChoosed].y += 50;
				
				if(GregosCouldMoveC())
				{
					KntG[KntsGChoosed].x -= 50;
					KntG[KntsGChoosed].y -= 50;
					Click_CG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;		
				}
				else
				{
					Click_CG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;					
				}	
			}			
		}
		else if(Click_CG == 2)
		{	
			context.drawImage(AtkC,KntG[KntsGChoosed].x + 50, KntG[KntsGChoosed].y, KntG[KntsGChoosed].w, KntG[KntsGChoosed].h);
			context.drawImage(AtkC,KntG[KntsGChoosed].x - 50, KntG[KntsGChoosed].y, KntG[KntsGChoosed].w, KntG[KntsGChoosed].h);
			context.drawImage(AtkC,KntG[KntsGChoosed].x, KntG[KntsGChoosed].y - 50, KntG[KntsGChoosed].w, KntG[KntsGChoosed].h);
			context.drawImage(AtkC,KntG[KntsGChoosed].x, KntG[KntsGChoosed].y + 50, KntG[KntsGChoosed].w, KntG[KntsGChoosed].h);
			
			
			if(mouse.x > KntG[KntsGChoosed].x &&
				mouse.x < KntG[KntsGChoosed].x + KntG[KntsGChoosed].w &&
				mouse.y < KntG[KntsGChoosed].y &&
				mouse.y > KntG[KntsGChoosed].y - KntG[KntsGChoosed].h &&
				mouse.x >= WallP_x &&
				mouse.x <= WallP_x + WallP_w &&
				mouse.y >= WallP_y &&
				mouse.y <= WallP_y + WallP_h ||
				mouse.x < KntG[KntsGChoosed].x &&
				mouse.x > KntG[KntsGChoosed].x - KntG[KntsGChoosed].w &&
				mouse.y < KntG[KntsGChoosed].y &&
				mouse.y > KntG[KntsGChoosed].y - KntG[KntsGChoosed].h &&
				mouse.x >= WallP_x &&
				mouse.x <= WallP_x + WallP_w &&
				mouse.y >= WallP_y &&
				mouse.y <= WallP_y + WallP_h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						WallP_life -= 27;
						if(!PTBR)
						{
							newLine("Golpe Critico! Muralha Persa perde 27 pontos de vida.");
						}
						else
							newLine("Critical attack! - Persian Wall loses 27 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(18,23));
						WallP_life -= damage;
						if(!PTBR)
						{
							newLine("Golpe Normal - Muralha Persa perde "+damage+" pontos de vida.");
						}
						else
							newLine("Normal attack - Persian Wall loses "+damage+" life points.");
					}
					Click_CG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;	
				}
			
			for(var i = 0; i < ArcP.length; i++) 
			{
				if(mouse.x > KntG[KntsGChoosed].x &&
				mouse.x < KntG[KntsGChoosed].x + KntG[KntsGChoosed].w &&
				mouse.y < KntG[KntsGChoosed].y &&
				mouse.y > KntG[KntsGChoosed].y - KntG[KntsGChoosed].h &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h ||
				mouse.x < KntG[KntsGChoosed].x  &&
				mouse.x > KntG[KntsGChoosed].x - KntG[KntsGChoosed].w &&
				mouse.y > KntG[KntsGChoosed].y &&
				mouse.y < KntG[KntsGChoosed].y + KntG[KntsGChoosed].h &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h||
				mouse.x > KntG[KntsGChoosed].x + KntG[KntsGChoosed].w &&
				mouse.x < KntG[KntsGChoosed].x + KntG[KntsGChoosed].w*2 &&
				mouse.y > KntG[KntsGChoosed].y &&
				mouse.y < KntG[KntsGChoosed].y + KntG[KntsGChoosed].h &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h ||
				mouse.x > KntG[KntsGChoosed].x &&
				mouse.x < KntG[KntsGChoosed].x + KntG[KntsGChoosed].w &&
				mouse.y > KntG[KntsGChoosed].y + KntG[KntsGChoosed].h &&
				mouse.y < KntG[KntsGChoosed].y + KntG[KntsGChoosed].h*2 &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						ArcP[i].life -= 27;
						if(!PTBR)
						{
							newLine("Golpe Critico! Arqueiro Persa perde 27 pontos de vida.");
						}
						else
							newLine("Critical attack! - Persian Archer loses 27 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(18,23));
						ArcP[i].life -= damage;
						if(!PTBR)
						{
							newLine("Golpe Normal - Arqueiro Persa "+damage+" pontos de vida.");
						}
						else
								newLine("Normal attack - Persian Archer loses "+damage+" life points.");
					}
					Click_CG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;				
				}
			}
			
			for(var i = 0; i < TorP.length; i++)
			{
				if(mouse.x > KntG[KntsGChoosed].x &&
				mouse.x < KntG[KntsGChoosed].x + KntG[KntsGChoosed].w &&
				mouse.y < KntG[KntsGChoosed].y &&
				mouse.y > KntG[KntsGChoosed].y - KntG[KntsGChoosed].h &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h ||
				mouse.x < KntG[KntsGChoosed].x  &&
				mouse.x > KntG[KntsGChoosed].x - KntG[KntsGChoosed].w &&
				mouse.y > KntG[KntsGChoosed].y &&
				mouse.y < KntG[KntsGChoosed].y + KntG[KntsGChoosed].h &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h||
				mouse.x > KntG[KntsGChoosed].x + KntG[KntsGChoosed].w &&
				mouse.x < KntG[KntsGChoosed].x + KntG[KntsGChoosed].w*2 &&
				mouse.y > KntG[KntsGChoosed].y &&
				mouse.y < KntG[KntsGChoosed].y + KntG[KntsGChoosed].h &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h ||
				mouse.x > KntG[KntsGChoosed].x &&
				mouse.x < KntG[KntsGChoosed].x + KntG[KntsGChoosed].w &&
				mouse.y > KntG[KntsGChoosed].y + KntG[KntsGChoosed].h &&
				mouse.y < KntG[KntsGChoosed].y + KntG[KntsGChoosed].h*2 &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						TorP[i].life -= 27;
						if(!PTBR)
						{
							newLine("Golpe Critico! Torre Persa perde 27 pontos de vida.");
						}
						else
							newLine("Critical attack! - Persian Tower loses 27 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(18,23));
						TorP[i].life -= damage;
						if(!PTBR)
						{
							newLine("Golpe Normal - Torre Persa perde "+damage+" pontos de vida.")
						}
							else
												newLine("Normal attack - Persian Tower loses "+damage+" life points.");
					}
					Click_CG = 0;	
					Vez_Persas = true;	
					Vez_Gregos = false;			
				}
			}
			
			for(var i = 0; i < KntP.length; i++)
			{
				if(mouse.x > KntG[KntsGChoosed].x &&
				mouse.x < KntG[KntsGChoosed].x + KntG[KntsGChoosed].w &&
				mouse.y < KntG[KntsGChoosed].y &&
				mouse.y > KntG[KntsGChoosed].y - KntG[KntsGChoosed].h &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h ||
				mouse.x < KntG[KntsGChoosed].x  &&
				mouse.x > KntG[KntsGChoosed].x - KntG[KntsGChoosed].w &&
				mouse.y > KntG[KntsGChoosed].y &&
				mouse.y < KntG[KntsGChoosed].y + KntG[KntsGChoosed].h &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h||
				mouse.x > KntG[KntsGChoosed].x + KntG[KntsGChoosed].w &&
				mouse.x < KntG[KntsGChoosed].x + KntG[KntsGChoosed].w*2 &&
				mouse.y > KntG[KntsGChoosed].y &&
				mouse.y < KntG[KntsGChoosed].y + KntG[KntsGChoosed].h &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h ||
				mouse.x > KntG[KntsGChoosed].x &&
				mouse.x < KntG[KntsGChoosed].x + KntG[KntsGChoosed].w &&
				mouse.y > KntG[KntsGChoosed].y + KntG[KntsGChoosed].h &&
				mouse.y < KntG[KntsGChoosed].y + KntG[KntsGChoosed].h*2 &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						KntP[i].life -= 27;
						if(!PTBR)
						{
							newLine("Golpe Critico! Cavaleiro Persa perde 27 pontos de vida.");
						}
						else
								newLine("Critical attack! - Persian Knight loses 27 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(18,23))
						KntP[i].life -= damage;
						if(!PTBR)
						{
							newLine("Golpe Normal - Cavaleiro Persa perde "+damage+" pontos de vida.")
						}
						else
								newLine("Normal attack - Persian Knight loses "+damage+" life points.");
					} 
					Click_CG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;					
				}
			}
			
			for(var i = 0; i < LancerP.length; i++)
			{
				if(mouse.x > KntG[KntsGChoosed].x &&
				mouse.x < KntG[KntsGChoosed].x + KntG[KntsGChoosed].w &&
				mouse.y < KntG[KntsGChoosed].y &&
				mouse.y > KntG[KntsGChoosed].y - KntG[KntsGChoosed].h &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h ||
				mouse.x < KntG[KntsGChoosed].x  &&
				mouse.x > KntG[KntsGChoosed].x - KntG[KntsGChoosed].w &&
				mouse.y > KntG[KntsGChoosed].y &&
				mouse.y < KntG[KntsGChoosed].y + KntG[KntsGChoosed].h &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h||
				mouse.x > KntG[KntsGChoosed].x + KntG[KntsGChoosed].w &&
				mouse.x < KntG[KntsGChoosed].x + KntG[KntsGChoosed].w*2 &&
				mouse.y > KntG[KntsGChoosed].y &&
				mouse.y < KntG[KntsGChoosed].y + KntG[KntsGChoosed].h &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h ||
				mouse.x > KntG[KntsGChoosed].x &&
				mouse.x < KntG[KntsGChoosed].x + KntG[KntsGChoosed].w &&
				mouse.y > KntG[KntsGChoosed].y + KntG[KntsGChoosed].h &&
				mouse.y < KntG[KntsGChoosed].y + KntG[KntsGChoosed].h*2 &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						LancerP[i].life -= 27;
						if(!PTBR)
						{
							newLine("Golpe Critico! Lanceiro Persa perde 27 pontos de vida.");
						}
						else
									newLine("Critical attack! - Persian Lancer loses 27 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(20,25))
						LancerP[i].life -= damage;
						if(!PTBR)
						{
							newLine("Golpe Normal - Lanceiro Persa perde "+damage+" pontos de vida.")
						}
						else
							newLine("Normal attack - Persian Lancer loses "+damage+" life points.");
					}	
					Click_CG = 0;	
					Vez_Persas = true;	
					Vez_Gregos = false;	
				}
			}
			
			for(var i = 0; i < GnrlG.length; i++)
			{
				if(mouse.x > KntG[KntsGChoosed].x &&
				mouse.x < KntG[KntsGChoosed].x + KntG[KntsGChoosed].w &&
				mouse.y < KntG[KntsGChoosed].y &&
				mouse.y > KntG[KntsGChoosed].y - KntG[KntsGChoosed].h &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h ||
				mouse.x < KntG[KntsGChoosed].x  &&
				mouse.x > KntG[KntsGChoosed].x - KntG[KntsGChoosed].w &&
				mouse.y > KntG[KntsGChoosed].y &&
				mouse.y < KntG[KntsGChoosed].y + KntG[KntsGChoosed].h &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h||
				mouse.x > KntG[KntsGChoosed].x + KntG[KntsGChoosed].w &&
				mouse.x < KntG[KntsGChoosed].x + KntG[KntsGChoosed].w*2 &&
				mouse.y > KntG[KntsGChoosed].y &&
				mouse.y < KntG[KntsGChoosed].y + KntG[KntsGChoosed].h &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h ||
				mouse.x > KntG[KntsGChoosed].x &&
				mouse.x < KntG[KntsGChoosed].x + KntG[KntsGChoosed].w &&
				mouse.y > KntG[KntsGChoosed].y + KntG[KntsGChoosed].h &&
				mouse.y < KntG[KntsGChoosed].y + KntG[KntsGChoosed].h*2 &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						GnrlP[i].life -= 27;
						if(!PTBR)
						{
							newLine("Golpe Critico! General Persa perde 27 pontos de vida.");
						}
						else
							newLine("Critical attack! - Persian General loses 27 life points.");
					}
					else
					{
						damage = damage = Math.floor(randomRange(18,23))
						GnrlP[i].life -= damage;
						if(!PTBR)
						{
							newLine("Golpe Normal - General Persa perde "+damage+ " pontos de vida.")
						}
						else
								newLine("Normal attack - Persian General loses "+damage+" life points.");
					}
					Click_CG = 0;		
					Vez_Persas = true;						
					Vez_Gregos = false;	
				}
			}
			
			for(var i = 0; i < KingP.length; i++)
			{
				if(mouse.x > KntG[KntsGChoosed].x &&
				mouse.x < KntG[KntsGChoosed].x + KntG[KntsGChoosed].w &&
				mouse.y < KntG[KntsGChoosed].y &&
				mouse.y > KntG[KntsGChoosed].y - KntG[KntsGChoosed].h &&
				mouse.x >= KingP[i].x &&
				mouse.x <= KingP[i].x + KingP[i].w &&
				mouse.y >= KingP[i].y &&
				mouse.y <= KingP[i].y + KingP[i].h ||
				mouse.x < KntG[KntsGChoosed].x  &&
				mouse.x > KntG[KntsGChoosed].x - KntG[KntsGChoosed].w &&
				mouse.y > KntG[KntsGChoosed].y &&
				mouse.y < KntG[KntsGChoosed].y + KntG[KntsGChoosed].h &&
				mouse.x >= KingP[i].x &&
				mouse.x <= KingP[i].x + KingP[i].w &&
				mouse.y >= KingP[i].y &&
				mouse.y <= KingP[i].y + KingP[i].h||
				mouse.x > KntG[KntsGChoosed].x + KntG[KntsGChoosed].w &&
				mouse.x < KntG[KntsGChoosed].x + KntG[KntsGChoosed].w*2 &&
				mouse.y > KntG[KntsGChoosed].y &&
				mouse.y < KntG[KntsGChoosed].y + KntG[KntsGChoosed].h &&
				mouse.x >= KingP[i].x &&
				mouse.x <= KingP[i].x + KingP[i].w &&
				mouse.y >= KingP[i].y &&
				mouse.y <= KingP[i].y + KingP[i].h ||
				mouse.x > KntG[KntsGChoosed].x &&
				mouse.x < KntG[KntsGChoosed].x + KntG[KntsGChoosed].w &&
				mouse.y > KntG[KntsGChoosed].y + KntG[KntsGChoosed].h &&
				mouse.y < KntG[KntsGChoosed].y + KntG[KntsGChoosed].h*2 &&
				mouse.x >= KingP[i].x &&
				mouse.x <= KingP[i].x + KingP[i].w &&
				mouse.y >= KingP[i].y &&
				mouse.y <= KingP[i].y + KingP[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						KingP[i].life -= 27;
						if(!PTBR)
						{
							newLine("Golpe Critico! Rei Persa perde 27 pontos de vida.");
						}
						else
								newLine("Critical attack! - Persian King loses 27 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(18,23))
						KingP[i].life -= damage;
						if(!PTBR)
						{
							newLine("Golpe Normal - Rei Persa perde "+damage+" pontos de vida.")
						}
						else
													newLine("Normal attack - Persian King loses "+damage+" life points.");
					}
					Click_CG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;	
				}
			}
		}
	
	}
	else if(Vez_Persas)
	{
		
		if(Click_CP == 1)
		{						
			
			if(KntP[KntsPChoosed].y > 101)
			{
				context.drawImage(MovC, KntP[KntsPChoosed].x + 50, KntP[KntsPChoosed].y - 50, KntP[KntsPChoosed].w, KntP[KntsPChoosed].h);
				context.drawImage(MovC, KntP[KntsPChoosed].x - 50, KntP[KntsPChoosed].y - 50, KntP[KntsPChoosed].w, KntP[KntsPChoosed].h);
			}
			if(KntP[KntsPChoosed].y < limit_down)
			{
				context.drawImage(MovC, KntP[KntsPChoosed].x + 50, KntP[KntsPChoosed].y + 50, KntP[KntsPChoosed].w, KntP[KntsPChoosed].h);
				context.drawImage(MovC, KntP[KntsPChoosed].x - 50, KntP[KntsPChoosed].y + 50, KntP[KntsPChoosed].w, KntP[KntsPChoosed].h);
			}
							
			if(mouse.x > KntP[KntsPChoosed].x + KntP[KntsPChoosed].w + 3 &&
			mouse.x < KntP[KntsPChoosed].x + KntP[KntsPChoosed].w*2 &&
			mouse.y < KntP[KntsPChoosed].y - 2 &&
			mouse.y > KntP[KntsPChoosed].y - KntP[KntsPChoosed].h &&
			KntP[KntsPChoosed].x < limit_right &&
			KntP[KntsPChoosed].y > 101)
			{					
				KntP[KntsPChoosed].x += 50;
				KntP[KntsPChoosed].y -= 50;											
				
				if(PersasCouldMoveC())
				{
					KntP[KntsPChoosed].x -= 50;
					KntP[KntsPChoosed].y += 50;		
					Click_CP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;			
				}
				else
				{
					Click_CP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;					
				}
			}
			else if(mouse.x < KntP[KntsPChoosed].x - 2 &&
			mouse.x > KntP[KntsPChoosed].x - KntP[KntsPChoosed].w &&
			mouse.y < KntP[KntsPChoosed].y - 2 &&
			mouse.y > KntP[KntsPChoosed].y - KntP[KntsPChoosed].h &&
			KntP[KntsPChoosed].y > 101)
			{					
				KntP[KntsPChoosed].x -= 50;
				KntP[KntsPChoosed].y -= 50;				
				
				if(PersasCouldMoveC())
				{
					KntP[KntsPChoosed].x += 50;
					KntP[KntsPChoosed].y += 50;		
					Click_CP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;			
				}
				else
				{
					Click_CP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;					
				}
			}
			else if(mouse.x < KntP[KntsPChoosed].x - 2 &&
			mouse.x > KntP[KntsPChoosed].x - KntP[KntsPChoosed].w &&
			mouse.y > KntP[KntsPChoosed].y + KntP[KntsPChoosed].h + 3 &&
			mouse.y < KntP[KntsPChoosed].y + KntP[KntsPChoosed].h*2 &&
			KntP[KntsPChoosed].y < limit_down)
			{	
				KntP[KntsPChoosed].x -= 50;
				KntP[KntsPChoosed].y += 50;
				
				if(PersasCouldMoveC())
				{
					KntP[KntsPChoosed].x += 50;
					KntP[KntsPChoosed].y -= 50;		
					Click_CP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;			
				}
				else
				{
					Click_CP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;					
				}	
			}
			else if(mouse.x > KntP[KntsPChoosed].x + KntP[KntsPChoosed].w + 3 &&
			mouse.x < KntP[KntsPChoosed].x + KntP[KntsPChoosed].w*2 &&
			mouse.y > KntP[KntsPChoosed].y + KntP[KntsPChoosed].h + 3 &&
			mouse.y < KntP[KntsPChoosed].y + KntP[KntsPChoosed].h*2 &&
			KntP[KntsPChoosed].y < limit_down &&
			KntP[KntsPChoosed].x < limit_right)
			{
				KntP[KntsPChoosed].x += 50;
				KntP[KntsPChoosed].y += 50;				
								
				if(PersasCouldMoveC())
				{
					KntP[KntsPChoosed].x -= 50;
					KntP[KntsPChoosed].y -= 50;		
					Click_CP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;			
				}
				else
				{
					Click_CP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;					
				}	
			}		
		}
		else if(Click_CP == 2)
		{	
			context.drawImage(AtkC,KntP[KntsPChoosed].x + 50, KntP[KntsPChoosed].y, KntP[KntsPChoosed].w, KntP[KntsPChoosed].h);
			context.drawImage(AtkC,KntP[KntsPChoosed].x - 50, KntP[KntsPChoosed].y, KntP[KntsPChoosed].w, KntP[KntsPChoosed].h);
			context.drawImage(AtkC,KntP[KntsPChoosed].x, KntP[KntsPChoosed].y - 50, KntP[KntsPChoosed].w, KntP[KntsPChoosed].h);
			context.drawImage(AtkC,KntP[KntsPChoosed].x, KntP[KntsPChoosed].y + 50, KntP[KntsPChoosed].w, KntP[KntsPChoosed].h);
			
			
			if(mouse.x > KntP[KntsPChoosed].x &&
				mouse.x < KntP[KntsPChoosed].x + KntP[KntsPChoosed].w &&
				mouse.y > KntP[KntsPChoosed].y + KntP[KntsPChoosed].h &&
				mouse.y < KntP[KntsPChoosed].y + KntP[KntsPChoosed].h*2 &&
				mouse.x >= WallG_x &&
				mouse.x <= WallG_x + WallG_w &&
				mouse.y >= WallG_y &&
				mouse.y <= WallG_y + WallG_h ||
				mouse.x < KntP[KntsPChoosed].x &&
				mouse.x > KntP[KntsPChoosed].x - KntP[KntsPChoosed].w &&
				mouse.y > KntP[KntsPChoosed].y + KntP[KntsPChoosed].h &&
				mouse.y < KntP[KntsPChoosed].y + KntP[KntsPChoosed].h*2 &&
				mouse.x >= WallG_x &&
				mouse.x <= WallG_x + WallG_w &&
				mouse.y >= WallG_y &&
				mouse.y <= WallG_y + WallG_h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						WallG_life -= 27;
						if(!PTBR)
						{
							newLine("Golpe Critico! Muralha Grega perde 27 pontos de vida.");
						}
						else
							newLine("Critical attack! - Greek Wall loses 27 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(18,23));
						WallG_life -= damage;
						if(!PTBR)
						{
							newLine("Golpe Normal - Muralha Grega perde "+damage+" pontos de vida.");
						}
						else
							newLine("Normal attack - Greek Wall loses "+damage+" life points.");
					}
					Click_CP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;	
				}
			
			for(var i = 0; i < ArcG.length; i++) 
			{
				if(mouse.x > KntP[KntsPChoosed].x &&
				mouse.x < KntP[KntsPChoosed].x + KntP[KntsPChoosed].w &&
				mouse.y < KntP[KntsPChoosed].y &&
				mouse.y > KntP[KntsPChoosed].y - KntP[KntsPChoosed].h &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h ||
				mouse.x < KntP[KntsPChoosed].x  &&
				mouse.x > KntP[KntsPChoosed].x - KntP[KntsPChoosed].w &&
				mouse.y > KntP[KntsPChoosed].y &&
				mouse.y < KntP[KntsPChoosed].y + KntP[KntsPChoosed].h &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h||
				mouse.x > KntP[KntsPChoosed].x + KntP[KntsPChoosed].w &&
				mouse.x < KntP[KntsPChoosed].x + KntP[KntsPChoosed].w*2 &&
				mouse.y > KntP[KntsPChoosed].y &&
				mouse.y < KntP[KntsPChoosed].y + KntP[KntsPChoosed].h &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h ||
				mouse.x > KntP[KntsPChoosed].x &&
				mouse.x < KntP[KntsPChoosed].x + KntP[KntsPChoosed].w &&
				mouse.y > KntP[KntsPChoosed].y + KntP[KntsPChoosed].h &&
				mouse.y < KntP[KntsPChoosed].y + KntP[KntsPChoosed].h*2 &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						ArcG[i].life -= 27;
						if(!PTBR)
						{
							newLine("Golpe Critico! Arqueiro Grego perde 27 pontos de vida.");
						}
						else
								newLine("Critical attack! - Greek Archer loses 27 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(18,23));
						ArcG[i].life -= damage;
						if(!PTBR)
						{
							newLine("Golpe Normal - Arqueiro Grego "+damage+" pontos de vida.");
						}
						else
												newLine("Normal attack - Greek Archer loses "+damage+" life points.");
					}
					Click_CP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;				
				}
			}
			
			for(var i = 0; i < TorG.length; i++)
			{
				if(mouse.x > KntP[KntsPChoosed].x &&
				mouse.x < KntP[KntsPChoosed].x + KntP[KntsPChoosed].w &&
				mouse.y < KntP[KntsPChoosed].y &&
				mouse.y > KntP[KntsPChoosed].y - KntP[KntsPChoosed].h &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h ||
				mouse.x < KntP[KntsPChoosed].x  &&
				mouse.x > KntP[KntsPChoosed].x - KntP[KntsPChoosed].w &&
				mouse.y > KntP[KntsPChoosed].y &&
				mouse.y < KntP[KntsPChoosed].y + KntP[KntsPChoosed].h &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h||
				mouse.x > KntP[KntsPChoosed].x + KntP[KntsPChoosed].w &&
				mouse.x < KntP[KntsPChoosed].x + KntP[KntsPChoosed].w*2 &&
				mouse.y > KntP[KntsPChoosed].y &&
				mouse.y < KntP[KntsPChoosed].y + KntP[KntsPChoosed].h &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h ||
				mouse.x > KntP[KntsPChoosed].x &&
				mouse.x < KntP[KntsPChoosed].x + KntP[KntsPChoosed].w &&
				mouse.y > KntP[KntsPChoosed].y + KntP[KntsPChoosed].h &&
				mouse.y < KntP[KntsPChoosed].y + KntP[KntsPChoosed].h*2 &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						TorG[i].life -= 27;
						if(!PTBR)
						{
							newLine("Golpe Critico! Torre Grega perde 27 pontos de vida.");
						}
						else
								newLine("Critical attack! - Greek Tower loses 27 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(18,23));
						TorG[i].life -= damage;
						if(!PTBR)
						{
							newLine("Golpe Normal - Torre Grega perde "+damage+" pontos de vida.")
						}
						else
								newLine("Normal attack - Greek Tower loses "+damage+" life points.");
					}
					Click_CP = 0;	
					Vez_Gregos = true;	
					Vez_Persas = false;			
				}
			}
			
			for(var i = 0; i < KntG.length; i++)
			{
				if(mouse.x > KntP[KntsPChoosed].x &&
				mouse.x < KntP[KntsPChoosed].x + KntP[KntsPChoosed].w &&
				mouse.y < KntP[KntsPChoosed].y &&
				mouse.y > KntP[KntsPChoosed].y - KntP[KntsPChoosed].h &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h ||
				mouse.x < KntP[KntsPChoosed].x  &&
				mouse.x > KntP[KntsPChoosed].x - KntP[KntsPChoosed].w &&
				mouse.y > KntP[KntsPChoosed].y &&
				mouse.y < KntP[KntsPChoosed].y + KntP[KntsPChoosed].h &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h||
				mouse.x > KntP[KntsPChoosed].x + KntP[KntsPChoosed].w &&
				mouse.x < KntP[KntsPChoosed].x + KntP[KntsPChoosed].w*2 &&
				mouse.y > KntP[KntsPChoosed].y &&
				mouse.y < KntP[KntsPChoosed].y + KntP[KntsPChoosed].h &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h ||
				mouse.x > KntP[KntsPChoosed].x &&
				mouse.x < KntP[KntsPChoosed].x + KntP[KntsPChoosed].w &&
				mouse.y > KntP[KntsPChoosed].y + KntP[KntsPChoosed].h &&
				mouse.y < KntP[KntsPChoosed].y + KntP[KntsPChoosed].h*2 &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						KntG[i].life -= 27;
						if(!PTBR)
						{
							newLine("Golpe Critico! Cavaleiro Grego perde 27 pontos de vida.");
						}
						else
								newLine("Critical attack! - Greek Knight loses 27 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(18,23))
						KntG[i].life -= damage;
						if(!PTBR)
						{
							newLine("Golpe Normal - Cavaleiro Grego perde "+damage+" pontos de vida.")
						}
						else
								newLine("Normal attack - Greek Knight loses "+damage+" life points.");
					}					
					Click_CP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;					
				}
			}
			
			for(var i = 0; i < LancerG.length; i++)
			{
				if(mouse.x > KntP[KntsPChoosed].x &&
				mouse.x < KntP[KntsPChoosed].x + KntP[KntsPChoosed].w &&
				mouse.y < KntP[KntsPChoosed].y &&
				mouse.y > KntP[KntsPChoosed].y - KntP[KntsPChoosed].h &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h ||
				mouse.x < KntP[KntsPChoosed].x  &&
				mouse.x > KntP[KntsPChoosed].x - KntP[KntsPChoosed].w &&
				mouse.y > KntP[KntsPChoosed].y &&
				mouse.y < KntP[KntsPChoosed].y + KntP[KntsPChoosed].h &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h||
				mouse.x > KntP[KntsPChoosed].x + KntP[KntsPChoosed].w &&
				mouse.x < KntP[KntsPChoosed].x + KntP[KntsPChoosed].w*2 &&
				mouse.y > KntP[KntsPChoosed].y &&
				mouse.y < KntP[KntsPChoosed].y + KntP[KntsPChoosed].h &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h ||
				mouse.x > KntP[KntsPChoosed].x &&
				mouse.x < KntP[KntsPChoosed].x + KntP[KntsPChoosed].w &&
				mouse.y > KntP[KntsPChoosed].y + KntP[KntsPChoosed].h &&
				mouse.y < KntP[KntsPChoosed].y + KntP[KntsPChoosed].h*2 &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						LancerG[i].life -= 27;
						if(!PTBR)
						{
							newLine("Golpe Critico! Lanceiro Grego perde 27 pontos de vida.");
						}
						else
								newLine("Critical attack! - Greek Lancer loses 27 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(20,25))
						LancerG[i].life -= damage;
						if(!PTBR)
						{
							newLine("Golpe Normal - Lanceiro Grego perde "+damage+" pontos de vida.")
						}
						else
								newLine("Normal attack - Greek Lancer loses "+damage+" life points.");
					}
					Click_CP = 0;	
					Vez_Gregos = true;	
					Vez_Persas = false;	
				}
			}
			
			for(var i = 0; i < GnrlG.length; i++)
			{
				if(mouse.x > KntP[KntsPChoosed].x &&
				mouse.x < KntP[KntsPChoosed].x + KntP[KntsPChoosed].w &&
				mouse.y < KntP[KntsPChoosed].y &&
				mouse.y > KntP[KntsPChoosed].y - KntP[KntsPChoosed].h &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h ||
				mouse.x < KntP[KntsPChoosed].x  &&
				mouse.x > KntP[KntsPChoosed].x - KntP[KntsPChoosed].w &&
				mouse.y > KntP[KntsPChoosed].y &&
				mouse.y < KntP[KntsPChoosed].y + KntP[KntsPChoosed].h &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h||
				mouse.x > KntP[KntsPChoosed].x + KntP[KntsPChoosed].w &&
				mouse.x < KntP[KntsPChoosed].x + KntP[KntsPChoosed].w*2 &&
				mouse.y > KntP[KntsPChoosed].y &&
				mouse.y < KntP[KntsPChoosed].y + KntP[KntsPChoosed].h &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h ||
				mouse.x > KntP[KntsPChoosed].x &&
				mouse.x < KntP[KntsPChoosed].x + KntP[KntsPChoosed].w &&
				mouse.y > KntP[KntsPChoosed].y + KntP[KntsPChoosed].h &&
				mouse.y < KntP[KntsPChoosed].y + KntP[KntsPChoosed].h*2 &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						GnrlG[i].life -= 27;
						if(!PTBR)
						{
							newLine("Golpe Critico! General Grego perde 27 pontos de vida.");
						}
						else
								newLine("Critical attack! - Greek General loses 27 life points.");
					}
					else
					{
						damage = damage = Math.floor(randomRange(18,23))
						GnrlG[i].life -= damage;
						if(!PTBR)
						{
							newLine("Golpe Normal - General Grego perde "+damage+ " pontos de vida.")
						}
						else
							newLine("Normal attack - Greek General loses "+damage+" life points.");
					}
					Click_CP = 0;		
					Vez_Gregos = true;						
					Vez_Persas = false;	
				}
			}
			
			for(var i = 0; i < KingG.length; i++)
			{
				if(mouse.x > KntP[KntsPChoosed].x &&
				mouse.x < KntP[KntsPChoosed].x + KntP[KntsPChoosed].w &&
				mouse.y < KntP[KntsPChoosed].y &&
				mouse.y > KntP[KntsPChoosed].y - KntP[KntsPChoosed].h &&
				mouse.x >= KingG[i].x &&
				mouse.x <= KingG[i].x + KingG[i].w &&
				mouse.y >= KingG[i].y &&
				mouse.y <= KingG[i].y + KingG[i].h ||
				mouse.x < KntP[KntsPChoosed].x  &&
				mouse.x > KntP[KntsPChoosed].x - KntP[KntsPChoosed].w &&
				mouse.y > KntP[KntsPChoosed].y &&
				mouse.y < KntP[KntsPChoosed].y + KntP[KntsPChoosed].h &&
				mouse.x >= KingG[i].x &&
				mouse.x <= KingG[i].x + KingG[i].w &&
				mouse.y >= KingG[i].y &&
				mouse.y <= KingG[i].y + KingG[i].h||
				mouse.x > KntP[KntsPChoosed].x + KntP[KntsPChoosed].w &&
				mouse.x < KntP[KntsPChoosed].x + KntP[KntsPChoosed].w*2 &&
				mouse.y > KntP[KntsPChoosed].y &&
				mouse.y < KntP[KntsPChoosed].y + KntP[KntsPChoosed].h &&
				mouse.x >= KingG[i].x &&
				mouse.x <= KingG[i].x + KingG[i].w &&
				mouse.y >= KingG[i].y &&
				mouse.y <= KingG[i].y + KingG[i].h ||
				mouse.x > KntP[KntsPChoosed].x &&
				mouse.x < KntP[KntsPChoosed].x + KntP[KntsPChoosed].w &&
				mouse.y > KntP[KntsPChoosed].y + KntP[KntsPChoosed].h &&
				mouse.y < KntP[KntsPChoosed].y + KntP[KntsPChoosed].h*2 &&
				mouse.x >= KingG[i].x &&
				mouse.x <= KingG[i].x + KingG[i].w &&
				mouse.y >= KingG[i].y &&
				mouse.y <= KingG[i].y + KingG[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						KingG[i].life -= 27;
						if(!PTBR)
						{
							newLine("Golpe Critico! Rei Grego perde 27 pontos de vida.");
						}
						else
								newLine("Critical attack! - Greek King loses 27 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(18,23))
						KingG[i].life -= damage;
						if(!PTBR)
						{
							newLine("Golpe Normal - Rei Grego perde "+damage+" pontos de vida.")
						}
						else
								newLine("Normal attack - Greek King loses "+damage+" life points.");
					}
					Click_CP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;	
				}
			}
		}
	
	}
}

function PersasCouldMoveC()
{	
	if((InfoArcG == true && KntP[KntsPChoosed].x == ArcG[ArcsGChoosed].x && KntP[KntsPChoosed].y == ArcG[ArcsGChoosed].y)||
	(InfoKntG == true && KntP[KntsPChoosed].x == KntG[KntsGChoosed].x && KntP[KntsPChoosed].y == KntG[KntsGChoosed].y) ||
	(InfoTorG == true && KntP[KntsPChoosed].x == TorG[TorsGChoosed].x && KntP[KntsPChoosed].y == TorG[TorsGChoosed].y) ||
	(InfoLancerG == true && KntP[KntsPChoosed].x == LancerG[LancersGChoosed].x && KntP[KntsPChoosed].y == LancerG[LancersGChoosed].y) ||
	(InfoGnrlG == true && KntP[KntsPChoosed].x == GnrlG[GnrlGChoosed].x && KntP[KntsPChoosed].y == GnrlG[GnrlGChoosed].y) ||
	(InfoKingG == true && KntP[KntsPChoosed].x == KingG[KingGChoosed].x && KntP[KntsPChoosed].y == KingG[KingGChoosed].y) ||
	(KntP[KntsPChoosed].x == TreeA.x && KntP[KntsPChoosed].y == TreeA.y)||
	(KntP[KntsPChoosed].x == TreeB.x && KntP[KntsPChoosed].y == TreeB.y)||
	(KntP[KntsPChoosed].x == TreeC.x && KntP[KntsPChoosed].y == TreeC.y)||
	(KntP[KntsPChoosed].x == TreeD.x && KntP[KntsPChoosed].y == TreeD.y)||
	(KntP[KntsPChoosed].x == TreeE.x && KntP[KntsPChoosed].y == TreeE.y)||
	(KntP[KntsPChoosed].x == TreeF.x && KntP[KntsPChoosed].y == TreeF.y))
	{
		return true;
	}
	else return false;
}

function GregosCouldMoveC()
{
	if((InfoArcP == true && KntG[KntsGChoosed].x == ArcP[ArcsPChoosed].x && KntG[KntsGChoosed].y == ArcP[ArcsPChoosed].y)||
	(InfoKntP == true && KntG[KntsGChoosed].x == KntP[KntsPChoosed].x && KntG[KntsGChoosed].y == KntP[KntsPChoosed].y) ||
	(InfoTorP == true && KntG[KntsGChoosed].x == TorP[TorsPChoosed].x && KntG[KntsGChoosed].y == TorP[TorsPChoosed].y) ||
	(InfoLancerP == true && KntG[KntsGChoosed].x == LancerP[LancersPChoosed].x && KntG[KntsGChoosed].y == LancerP[LancersPChoosed].y) ||
	(InfoGnrlP == true && KntG[KntsGChoosed].x == GnrlP[GnrlPChoosed].x && KntG[KntsGChoosed].y == GnrlP[GnrlPChoosed].y) ||
	(InfoKingP == true && KntG[KntsGChoosed].x == KingP[KingPChoosed].x && KntG[KntsGChoosed].y == KingP[KingPChoosed].y)||
	(KntG[KntsGChoosed].x == TreeA.x && KntG[KntsGChoosed].y == TreeA.y)||
	(KntG[KntsGChoosed].x == TreeB.x && KntG[KntsGChoosed].y == TreeB.y)||
	(KntG[KntsGChoosed].x == TreeC.x && KntG[KntsGChoosed].y == TreeC.y)||
	(KntG[KntsGChoosed].x == TreeD.x && KntG[KntsGChoosed].y == TreeD.y)||
	(KntG[KntsGChoosed].x == TreeE.x && KntG[KntsGChoosed].y == TreeE.y)||
	(KntG[KntsGChoosed].x == TreeF.x && KntG[KntsGChoosed].y == TreeF.y))
	{
		return true;
	}
	else return false;
}
	
function DieKnts()
{
	for(var i = 0; i < KntP.length; i++) 
	{
		if(KntP[i].life <= 0) KntP[i].dead = true;
		if(KntP[i].dead)
		{
			KntP[i].x = 0;
			KntP[i].y = 0;
			KntP[i].w = 0;
			KntP[i].h = 0;
			KntP[i].life = 0;
		}		
	}
	for(var i = 0; i < KntG.length; i++) 
	{
		if(KntG[i].life <= 0) KntG[i].dead = true;	
		if(KntG[i].dead)
		{
			KntG[i].x = 0;
			KntG[i].y = 0;
			KntG[i].w = 0;
			KntG[i].h = 0;
			KntG[i].life = 0;
		}
	}	
}
			


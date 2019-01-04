var PTBR = true;
var ENUS = false;

function TorsP(TorP_x, TorP_y, TorP_w, TorP_h, TorP_l)
{	
	this.x = TorP_x;
	this.y = TorP_y;
	this.w = TorP_w;
	this.h = TorP_h;
	this.life = TorP_l;
	this.dead = false;
	this.onClicked = false;;
	this.TorsP = new Image;
	if(PTBR)
	{
		this.TorsP.src = "Images/Torre_PersaPT.png";	
	}
	if(ENUS)
	{
		this.TorsP.src = "Images/Torre_PersaEN.png";	
	}
	this.update = function()
	{
		
	}
	
	this.draw = function(ctx)
	{					
		ctx.drawImage(this.TorsP, this.x, this.y, this.w, this.h);	
	}
}

var TorsGChoosed;
var TorsPChoosed;
var AtkT = new Image;
//AtkT.src = "Images/Celula_A.png";

function TorsG(TorG_x, TorG_y, TorG_w, TorG_h, TorG_l)
{	
	this.x = TorG_x;
	this.y = TorG_y;
	this.w = TorG_w;
	this.h = TorG_h;
	this.life = TorG_l;
	this.dead = false;
	this.onClicked = false;;
	this.TorsG = new Image;
	if(PTBR)
	{
		this.TorsG.src = "Images/Torre_GregaPT.png";	
	}
	if(ENUS)
	{
		this.TorsG.src = "Images/Torre_GregaEN.png";	
	}
	this.update = function()
	{
		
	}
	
	this.draw = function(ctx)
	{					
		ctx.drawImage(this.TorsG, this.x, this.y, this.w, this.h);	
	}
}

{//Torres Persas
	var TorP_x = [101,451];
	var TorP = [];
	var Click_TP = 0;
	var OrdemTP = TorsPChoosed;
	for(var i = 0; i < 2; i++) 
	{
		TorP[i] = new TorsP(TorP_x[i], 201, 48, 48, 30);			
	}				
}
	
{//Torres Gregas
	var TorG_x = [101,451];
	var TorG = [];
	var Click_TG = 0;
	var OrdemTG = TorsGChoosed;
	for(var i = 0; i < 2; i++) 
	{
		TorG[i] = new TorsG(TorG_x[i], 351, 48, 48, 30);			
	}				
}
function updateTowers()
{
	for(var i = 0; i < TorP.length; i++) 
	{
		if(mouse.press &&
		mouse.x >= TorP[i].x &&
		mouse.x <= TorP[i].x + TorP[i].w &&
		mouse.y >= TorP[i].y &&
		mouse.y <= TorP[i].y + TorP[i].h)	
		{
			OrdemTP = TorsPChoosed;
			TorsPChoosed = i;
			InfoArcP = false;
			InfoLancerP = false;
			InfoTorP = true;
			InfoKingP = false;
			InfoGnrlP = false;
			InfoKntP = false;
			InfoWallP = false;
		}
	}
	for(var i = 0; i < TorG.length; i++) 
	{
		if(mouse.press && 
		mouse.x >= TorG[i].x &&
		mouse.x <= TorG[i].x + TorG[i].w &&
		mouse.y >= TorG[i].y &&
		mouse.y <= TorG[i].y + TorG[i].h)	
		{	
			OrdemTG = TorsGChoosed;
			TorsGChoosed = i;
			InfoArcG = false;
			InfoGnrlG = false;
			InfoKingG = false;
			InfoLancerG = false;
			InfoKntG = false;
			InfoTorG = true;
			InfoWallG = false;
		}
	}
}
function UpdateTowerP()
{	
	if(Vez_Persas)
	{
		for(var i = 0; i < TorP.length; i++) 
		{
			if(mouse.press && TorP[i].dead == false &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h)				
			{	
				if(TorsPChoosed != OrdemTP)
				{
					Click_TP = 0;
				}
				Click_TP += 1;		
				Click_AP = 0;
				Click_LP = 0;  
				Click_TG = 0; 
				Click_CP = 0;  
				Click_KP = 0;
				Click_CP = 0;
				Click_CP = 0;
				Click_CP = 0;
				Click_AP = 0;
				Click_GP = 0;  
				Click_LG = 0; 
				Click_GG = 0;  
				Click_KP = 0;
				mouse.press = false;
			}		
		}
	}
}
function UpdateTowerG()
{
	if(Vez_Gregos)
	{
		for(var i = 0; i < TorG.length; i++) 
		{
			if(mouse.press && TorG[i].dead == false &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h)				
			{						
				if(TorsGChoosed != OrdemTG)
				{
					Click_TG = 0;
				}
				Click_TG += 1;		
				Click_AG = 0;
				Click_GG = 0;  
				Click_LG = 0; 
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


function PossibilitiesT()
{
	if(Vez_Gregos)
	{
		if(LANCERDG == false && KntDG == false && REIDG == false && ARCDG == false && KntDG == false)
		{
			if(Click_TG == 1)
			{
				context.drawImage(AtkT,TorG[TorsGChoosed].x + 50, TorG[TorsGChoosed].y, TorG[TorsGChoosed].w, TorG[TorsGChoosed].h);
				context.drawImage(AtkT,TorG[TorsGChoosed].x - 50, TorG[TorsGChoosed].y, TorG[TorsGChoosed].w, TorG[TorsGChoosed].h);
				context.drawImage(AtkT,TorG[TorsGChoosed].x, TorG[TorsGChoosed].y - 50, TorG[TorsGChoosed].w, TorG[TorsGChoosed].h);
				context.drawImage(AtkT,TorG[TorsGChoosed].x, TorG[TorsGChoosed].y + 50, TorG[TorsGChoosed].w, TorG[TorsGChoosed].h);
				context.drawImage(AtkT,TorG[TorsGChoosed].x + 50, TorG[TorsGChoosed].y + 50, TorG[TorsGChoosed].w, TorG[TorsGChoosed].h);
				context.drawImage(AtkT,TorG[TorsGChoosed].x - 50, TorG[TorsGChoosed].y - 50, TorG[TorsGChoosed].w, TorG[TorsGChoosed].h);
				context.drawImage(AtkT,TorG[TorsGChoosed].x - 50, TorG[TorsGChoosed].y + 50, TorG[TorsGChoosed].w, TorG[TorsGChoosed].h);
				context.drawImage(AtkT,TorG[TorsGChoosed].x + 50, TorG[TorsGChoosed].y - 50, TorG[TorsGChoosed].w, TorG[TorsGChoosed].h);
				context.drawImage(AtkT,TorG[TorsGChoosed].x + 100, TorG[TorsGChoosed].y - 100, TorG[TorsGChoosed].w, TorG[TorsGChoosed].h);
				context.drawImage(AtkT,TorG[TorsGChoosed].x - 100, TorG[TorsGChoosed].y - 100, TorG[TorsGChoosed].w, TorG[TorsGChoosed].h);
				context.drawImage(AtkT,TorG[TorsGChoosed].x + 100, TorG[TorsGChoosed].y + 100, TorG[TorsGChoosed].w, TorG[TorsGChoosed].h);
				context.drawImage(AtkT,TorG[TorsGChoosed].x - 100, TorG[TorsGChoosed].y + 100, TorG[TorsGChoosed].w, TorG[TorsGChoosed].h);
				context.drawImage(AtkT,TorG[TorsGChoosed].x , TorG[TorsGChoosed].y - 100, TorG[TorsGChoosed].w, TorG[TorsGChoosed].h);
				context.drawImage(AtkT,TorG[TorsGChoosed].x , TorG[TorsGChoosed].y + 100, TorG[TorsGChoosed].w, TorG[TorsGChoosed].h);
				context.drawImage(AtkT,TorG[TorsGChoosed].x + 100 , TorG[TorsGChoosed].y , TorG[TorsGChoosed].w, TorG[TorsGChoosed].h);
				context.drawImage(AtkT,TorG[TorsGChoosed].x - 100, TorG[TorsGChoosed].y , TorG[TorsGChoosed].w, TorG[TorsGChoosed].h);
			
				for(var i = 0; i < KntP.length; i++)
				{
					if(mouse.x >= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
					mouse.y >= TorG[TorsGChoosed].y &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
					mouse.x >= KntP[i].x &&
					mouse.x <= KntP[i].x + KntP[i].w &&
					mouse.y >= KntP[i].y &&
					mouse.y <= KntP[i].y + KntP[i].h ||
					mouse.x <= TorG[TorsGChoosed].x  &&
					mouse.x >= TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
					mouse.y >= TorG[TorsGChoosed].y &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
					mouse.x >= KntP[i].x &&
					mouse.x <= KntP[i].x + KntP[i].w &&
					mouse.y >= KntP[i].y &&
					mouse.y <= KntP[i].y + KntP[i].h ||
					mouse.x >= TorG[TorsGChoosed].x  &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.y <= TorG[TorsGChoosed].y &&
					mouse.y >= TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
					mouse.x >= KntP[i].x &&
					mouse.x <= KntP[i].x + KntP[i].w &&
					mouse.y >= KntP[i].y &&
					mouse.y <= KntP[i].y + KntP[i].h ||
					mouse.x >= TorG[TorsGChoosed].x &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.y >= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h  &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
					mouse.x >= KntP[i].x &&
					mouse.x <= KntP[i].x + KntP[i].w &&
					mouse.y >= KntP[i].y &&
					mouse.y <= KntP[i].y + KntP[i].h ||
					mouse.x >= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
					mouse.y <= TorG[TorsGChoosed].y&
					mouse.y >= TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
					mouse.x >= KntP[i].x &&
					mouse.x <= KntP[i].x + KntP[i].w &&
					mouse.y >= KntP[i].y &&
					mouse.y <= KntP[i].y + KntP[i].h ||
					mouse.x <= TorG[TorsGChoosed].x &&
					mouse.x >= TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
					mouse.y <= TorG[TorsGChoosed].y &&
					mouse.y >= TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
					mouse.x >= KntP[i].x &&
					mouse.x <= KntP[i].x + KntP[i].w &&
					mouse.y >= KntP[i].y &&
					mouse.y <= KntP[i].y + KntP[i].h ||
					mouse.x <= TorG[TorsGChoosed].x &&
					mouse.x >= TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
					mouse.y >= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
					mouse.x >= KntP[i].x &&
					mouse.x <= KntP[i].x + KntP[i].w &&
					mouse.y >= KntP[i].y &&
					mouse.y <= KntP[i].y + KntP[i].h ||
					mouse.x >= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
					mouse.y >= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
					mouse.x >= KntP[i].x &&
					mouse.x <= KntP[i].x + KntP[i].w &&
					mouse.y >= KntP[i].y &&
					mouse.y <= KntP[i].y + KntP[i].h)
					{	
						if(Math.floor(randomRange(0,99)<20))
						{
							KntP[i].life -= 24;
							if(!PTBR)
							{
								newLine("Golpe Critico! Cavaleiro Persa perde 24  pontos de vida.");
							}
							else
								newLine("Critical attack! - Persian Knight lose 24 life points.");
						}
						else
						{
							damage = Math.floor(randomRange(13,23));
							KntP[i].life -= damage;
							if(!PTBR)
							{
								newLine("Golpe Normal - Cavaleiro Persa perde "+damage+" pontos de vida.")
							}
							else
								newLine("Normal attack - Persian Knight lose "+damage+" life points.");
						}
						Click_TG = 0;	
						Vez_Persas = true;
						Vez_Gregos = false;	
					}
					if(mouse.x > TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*3 &&
						mouse.y > TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*3 &&
						mouse.x >= KntP[i].x &&
						mouse.x <= KntP[i].x + KntP[i].w &&
						mouse.y >= KntP[i].y &&
						mouse.y <= KntP[i].y + KntP[i].h ||
						mouse.x < TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
						mouse.x > TorG[TorsGChoosed].x - TorG[TorsGChoosed].w*2 &&
						mouse.y > TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*3 &&
						mouse.x >= KntP[i].x &&
						mouse.x <= KntP[i].x + KntP[i].w &&
						mouse.y >= KntP[i].y &&
						mouse.y <= KntP[i].y + KntP[i].h ||
						mouse.x < TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
						mouse.x > TorG[TorsGChoosed].x - TorG[TorsGChoosed].w*2 &&
						mouse.y < TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
						mouse.y > TorG[TorsGChoosed].y - TorG[TorsGChoosed].h*2 &&
						mouse.x >= KntP[i].x &&
						mouse.x <= KntP[i].x + KntP[i].w &&
						mouse.y >= KntP[i].y &&
						mouse.y <= KntP[i].y + KntP[i].h ||
						mouse.x > TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*3 &&
						mouse.y < TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
						mouse.y > TorG[TorsGChoosed].y - TorG[TorsGChoosed].h*2 &&
						mouse.x >= KntP[i].x &&
						mouse.x <= KntP[i].x + KntP[i].w &&
						mouse.y >= KntP[i].y &&
						mouse.y <= KntP[i].y + KntP[i].h ||
						mouse.x > TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*3 &&
						mouse.y > TorG[TorsGChoosed].y  &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
						mouse.x >= KntP[i].x &&
						mouse.x <= KntP[i].x + KntP[i].w &&
						mouse.y >= KntP[i].y &&
						mouse.y <= KntP[i].y + KntP[i].h ||
						mouse.x < TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
						mouse.x > TorG[TorsGChoosed].x - TorG[TorsGChoosed].w*2 &&
						mouse.y > TorG[TorsGChoosed].y  &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
						mouse.x >= KntP[i].x &&
						mouse.x <= KntP[i].x + KntP[i].w &&
						mouse.y >= KntP[i].y &&
						mouse.y <= KntP[i].y + KntP[i].h ||
						mouse.x > TorG[TorsGChoosed].x &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
						mouse.y < TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
						mouse.y > TorG[TorsGChoosed].y - TorG[TorsGChoosed].h*2 &&
						mouse.x >= KntP[i].x &&
						mouse.x <= KntP[i].x + KntP[i].w &&
						mouse.y >= KntP[i].y &&
						mouse.y <= KntP[i].y + KntP[i].h ||
						mouse.x > TorG[TorsGChoosed].x &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
						mouse.y > TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*3 &&
						mouse.x >= KntP[i].x &&
						mouse.x <= KntP[i].x + KntP[i].w &&
						mouse.y >= KntP[i].y &&
						mouse.y <= KntP[i].y + KntP[i].h)
						{
							if(Math.floor(randomRange(0,99)<20))
							{
								KntP[i].life -= 24;
								if(!PTBR)
								{
									newLine("Golpe Critico! Cavaleiro Persa perde 24 pontos de vida.");
								}
								else
									newLine("Critical attack! - Persian Knight lose 24 life points.");
							}
							else
							{
								damage = Math.floor(randomRange(9,19));
								KntP[i].life -= damage;
								if(!PTBR)
								{
									newLine("Golpe Normal - Cavaleiro Persa perde "+damage+" pontos de vida.")
								}
								else
									newLine("Normal attack - Persian Knight lose "+damage+" life points.");
							}
							Click_TG = 0;	
							Vez_Persas = true;
							Vez_Gregos = false;	
						}
				}
				
				for(var i = 0; i < GnrlP.length; i++)
				{
					if(mouse.x >= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
					mouse.y >= TorG[TorsGChoosed].y &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
					mouse.x >= GnrlP[i].x &&
					mouse.x <= GnrlP[i].x + GnrlP[i].w &&
					mouse.y >= GnrlP[i].y &&
					mouse.y <= GnrlP[i].y + GnrlP[i].h ||
					mouse.x <= TorG[TorsGChoosed].x  &&
					mouse.x >= TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
					mouse.y >= TorG[TorsGChoosed].y &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
					mouse.x >= GnrlP[i].x &&
					mouse.x <= GnrlP[i].x + GnrlP[i].w &&
					mouse.y >= GnrlP[i].y &&
					mouse.y <= GnrlP[i].y + GnrlP[i].h ||
					mouse.x >= TorG[TorsGChoosed].x  &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.y <= TorG[TorsGChoosed].y &&
					mouse.y >= TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
					mouse.x >= GnrlP[i].x &&
					mouse.x <= GnrlP[i].x + GnrlP[i].w &&
					mouse.y >= GnrlP[i].y &&
					mouse.y <= GnrlP[i].y + GnrlP[i].h ||
					mouse.x >= TorG[TorsGChoosed].x &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.y >= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h  &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
					mouse.x >= GnrlP[i].x &&
					mouse.x <= GnrlP[i].x + GnrlP[i].w &&
					mouse.y >= GnrlP[i].y &&
					mouse.y <= GnrlP[i].y + GnrlP[i].h ||
					mouse.x >= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
					mouse.y <= TorG[TorsGChoosed].y&
					mouse.y >= TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
					mouse.x >= GnrlP[i].x &&
					mouse.x <= GnrlP[i].x + GnrlP[i].w &&
					mouse.y >= GnrlP[i].y &&
					mouse.y <= GnrlP[i].y + GnrlP[i].h ||
					mouse.x <= TorG[TorsGChoosed].x &&
					mouse.x >= TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
					mouse.y <= TorG[TorsGChoosed].y &&
					mouse.y >= TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
					mouse.x >= GnrlP[i].x &&
					mouse.x <= GnrlP[i].x + GnrlP[i].w &&
					mouse.y >= GnrlP[i].y &&
					mouse.y <= GnrlP[i].y + GnrlP[i].h ||
					mouse.x <= TorG[TorsGChoosed].x &&
					mouse.x >= TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
					mouse.y >= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
					mouse.x >= GnrlP[i].x &&
					mouse.x <= GnrlP[i].x + GnrlP[i].w &&
					mouse.y >= GnrlP[i].y &&
					mouse.y <= GnrlP[i].y + GnrlP[i].h ||
					mouse.x >= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
					mouse.y >= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
					mouse.x >= GnrlP[i].x &&
					mouse.x <= GnrlP[i].x + GnrlP[i].w &&
					mouse.y >= GnrlP[i].y &&
					mouse.y <= GnrlP[i].y + GnrlP[i].h)
					{
						if(Math.floor(randomRange(0,99)<20))
						{
							GnrlP[i].life -= 24;
							if(!PTBR)
							{
								newLine("Golpe Critico! General Persa perde 24 pontos de vida.");
							}
							else
									newLine("Critical attack! - Persian General lose 24 life points.");
						}
						else
						{
							damage = Math.floor(randomRange(10,20));
							GnrlP[i].life -= damage;
							if(!PTBR)
							{
								newLine("Golpe Normal - General Persa perde "+damage+" pontos de vida.")
							}
							else
								newLine("Normal attack - Persian General lose "+damage+" life points.");
						}
						Click_TG = 0;	
						Vez_Persas = true;
						Vez_Gregos = false;	
					}
					if(mouse.x > TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*3 &&
						mouse.y > TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*3 &&
						mouse.x >= GnrlP[i].x &&
						mouse.x <= GnrlP[i].x + GnrlP[i].w &&
						mouse.y >= GnrlP[i].y &&
						mouse.y <= GnrlP[i].y + GnrlP[i].h ||
						mouse.x < TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
						mouse.x > TorG[TorsGChoosed].x - TorG[TorsGChoosed].w*2 &&
						mouse.y > TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*3 &&
						mouse.x >= GnrlP[i].x &&
						mouse.x <= GnrlP[i].x + GnrlP[i].w &&
						mouse.y >= GnrlP[i].y &&
						mouse.y <= GnrlP[i].y + GnrlP[i].h ||
						mouse.x < TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
						mouse.x > TorG[TorsGChoosed].x - TorG[TorsGChoosed].w*2 &&
						mouse.y < TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
						mouse.y > TorG[TorsGChoosed].y - TorG[TorsGChoosed].h*2 &&
						mouse.x >= GnrlP[i].x &&
						mouse.x <= GnrlP[i].x + GnrlP[i].w &&
						mouse.y >= GnrlP[i].y &&
						mouse.y <= GnrlP[i].y + GnrlP[i].h ||
						mouse.x > TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*3 &&
						mouse.y < TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
						mouse.y > TorG[TorsGChoosed].y - TorG[TorsGChoosed].h*2 &&
						mouse.x >= GnrlP[i].x &&
						mouse.x <= GnrlP[i].x + GnrlP[i].w &&
						mouse.y >= GnrlP[i].y &&
						mouse.y <= GnrlP[i].y + GnrlP[i].h ||
						mouse.x > TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*3 &&
						mouse.y > TorG[TorsGChoosed].y  &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
						mouse.x >= GnrlP[i].x &&
						mouse.x <= GnrlP[i].x + GnrlP[i].w &&
						mouse.y >= GnrlP[i].y &&
						mouse.y <= GnrlP[i].y + GnrlP[i].h ||
						mouse.x < TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
						mouse.x > TorG[TorsGChoosed].x - TorG[TorsGChoosed].w*2 &&
						mouse.y > TorG[TorsGChoosed].y  &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
						mouse.x >= GnrlP[i].x &&
						mouse.x <= GnrlP[i].x + GnrlP[i].w &&
						mouse.y >= GnrlP[i].y &&
						mouse.y <= GnrlP[i].y + GnrlP[i].h ||
						mouse.x > TorG[TorsGChoosed].x &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
						mouse.y < TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
						mouse.y > TorG[TorsGChoosed].y - TorG[TorsGChoosed].h*2 &&
						mouse.x >= GnrlP[i].x &&
						mouse.x <= GnrlP[i].x + GnrlP[i].w &&
						mouse.y >= GnrlP[i].y &&
						mouse.y <= GnrlP[i].y + GnrlP[i].h ||
						mouse.x > TorG[TorsGChoosed].x &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
						mouse.y > TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*3 &&
						mouse.x >= GnrlP[i].x &&
						mouse.x <= GnrlP[i].x + GnrlP[i].w &&
						mouse.y >= GnrlP[i].y &&
						mouse.y <= GnrlP[i].y + GnrlP[i].h)
						{
							if(Math.floor(randomRange(0,99)<20))
							{
								GnrlP[i].life -= 24;
								if(!PTBR)
								{
									newLine("Golpe Critico! perde 24 pontos de vida.");
								}
								else
									newLine("Critical attack! - Persian General lose 24 life points.");
							}
							else
							{
								damage = Math.floor(randomRange(6,16));
								GnrlP[i].life -= damage;
								if(!PTBR)
								{
									newLine("Golpe Normal - General Persa perde "+damage+" pontos de vida.")
								}
								else
									newLine("Normal attack - Persian General lose "+damage+" life points.");
							}
							Click_TG = 0;	
							Vez_Persas = true;
							Vez_Gregos = false;	
						}
				}
				
				for(var i = 0; i < KingP.length; i++)
				{
					if(mouse.x >= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
					mouse.y >= TorG[TorsGChoosed].y &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
					mouse.x >= KingP[i].x &&
					mouse.x <= KingP[i].x + KingP[i].w &&
					mouse.y >= KingP[i].y &&
					mouse.y <= KingP[i].y + KingP[i].h ||
					mouse.x <= TorG[TorsGChoosed].x  &&
					mouse.x >= TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
					mouse.y >= TorG[TorsGChoosed].y &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
					mouse.x >= KingP[i].x &&
					mouse.x <= KingP[i].x + KingP[i].w &&
					mouse.y >= KingP[i].y &&
					mouse.y <= KingP[i].y + KingP[i].h ||
					mouse.x >= TorG[TorsGChoosed].x  &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.y <= TorG[TorsGChoosed].y &&
					mouse.y >= TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
					mouse.x >= KingP[i].x &&
					mouse.x <= KingP[i].x + KingP[i].w &&
					mouse.y >= KingP[i].y &&
					mouse.y <= KingP[i].y + KingP[i].h ||
					mouse.x >= TorG[TorsGChoosed].x &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.y >= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h  &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
					mouse.x >= KingP[i].x &&
					mouse.x <= KingP[i].x + KingP[i].w &&
					mouse.y >= KingP[i].y &&
					mouse.y <= KingP[i].y + KingP[i].h ||
					mouse.x >= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
					mouse.y <= TorG[TorsGChoosed].y&
					mouse.y >= TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
					mouse.x >= KingP[i].x &&
					mouse.x <= KingP[i].x + KingP[i].w &&
					mouse.y >= KingP[i].y &&
					mouse.y <= KingP[i].y + KingP[i].h ||
					mouse.x <= TorG[TorsGChoosed].x &&
					mouse.x >= TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
					mouse.y <= TorG[TorsGChoosed].y &&
					mouse.y >= TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
					mouse.x >= KingP[i].x &&
					mouse.x <= KingP[i].x + KingP[i].w &&
					mouse.y >= KingP[i].y &&
					mouse.y <= KingP[i].y + KingP[i].h ||
					mouse.x <= TorG[TorsGChoosed].x &&
					mouse.x >= TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
					mouse.y >= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
					mouse.x >= KingP[i].x &&
					mouse.x <= KingP[i].x + KingP[i].w &&
					mouse.y >= KingP[i].y &&
					mouse.y <= KingP[i].y + KingP[i].h ||
					mouse.x >= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
					mouse.y >= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
					mouse.x >= KingP[i].x &&
					mouse.x <= KingP[i].x + KingP[i].w &&
					mouse.y >= KingP[i].y &&
					mouse.y <= KingP[i].y + KingP[i].h)
					{
						if(Math.floor(randomRange(0,99)<20))
						{
							KingP[i].life -= 24;
							if(!PTBR)
							{
								newLine("Golpe Critico! Rei Persa perde 24  pontos de vida.");
							}
							else
								newLine("Critical attack! - Persian King lose 24 life points.");
						}
						else
						{
							damage = Math.floor(randomRange(10,20));
							KingP[i].life -= damage;
							if(!PTBR)
							{
								newLine("Golpe Normal - Rei Persa perde "+damage+" pontos de vida.")
							}
							else
													newLine("Normal attack - Persian King lose "+damage+" life points.");
						}
						Click_TG = 0;	
						Vez_Persas = true;
						Vez_Gregos = false;	
					}
					if(mouse.x > TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*3 &&
						mouse.y > TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*3 &&
						mouse.x >= KingP[i].x &&
						mouse.x <= KingP[i].x + KingP[i].w &&
						mouse.y >= KingP[i].y &&
						mouse.y <= KingP[i].y + KingP[i].h ||
						mouse.x < TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
						mouse.x > TorG[TorsGChoosed].x - TorG[TorsGChoosed].w*2 &&
						mouse.y > TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*3 &&
						mouse.x >= KingP[i].x &&
						mouse.x <= KingP[i].x + KingP[i].w &&
						mouse.y >= KingP[i].y &&
						mouse.y <= KingP[i].y + KingP[i].h ||
						mouse.x < TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
						mouse.x > TorG[TorsGChoosed].x - TorG[TorsGChoosed].w*2 &&
						mouse.y < TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
						mouse.y > TorG[TorsGChoosed].y - TorG[TorsGChoosed].h*2 &&
						mouse.x >= KingP[i].x &&
						mouse.x <= KingP[i].x + KingP[i].w &&
						mouse.y >= KingP[i].y &&
						mouse.y <= KingP[i].y + KingP[i].h ||
						mouse.x > TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*3 &&
						mouse.y < TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
						mouse.y > TorG[TorsGChoosed].y - TorG[TorsGChoosed].h*2 &&
						mouse.x >= KingP[i].x &&
						mouse.x <= KingP[i].x + KingP[i].w &&
						mouse.y >= KingP[i].y &&
						mouse.y <= KingP[i].y + KingP[i].h ||
						mouse.x > TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*3 &&
						mouse.y > TorG[TorsGChoosed].y  &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
						mouse.x >= KingP[i].x &&
						mouse.x <= KingP[i].x + KingP[i].w &&
						mouse.y >= KingP[i].y &&
						mouse.y <= KingP[i].y + KingP[i].h ||
						mouse.x < TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
						mouse.x > TorG[TorsGChoosed].x - TorG[TorsGChoosed].w*2 &&
						mouse.y > TorG[TorsGChoosed].y  &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
						mouse.x >= KingP[i].x &&
						mouse.x <= KingP[i].x + KingP[i].w &&
						mouse.y >= KingP[i].y &&
						mouse.y <= KingP[i].y + KingP[i].h ||
						mouse.x > TorG[TorsGChoosed].x &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
						mouse.y < TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
						mouse.y > TorG[TorsGChoosed].y - TorG[TorsGChoosed].h*2 &&
						mouse.x >= KingP[i].x &&
						mouse.x <= KingP[i].x + KingP[i].w &&
						mouse.y >= KingP[i].y &&
						mouse.y <= KingP[i].y + KingP[i].h ||
						mouse.x > TorG[TorsGChoosed].x &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
						mouse.y > TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*3 &&
						mouse.x >= KingP[i].x &&
						mouse.x <= KingP[i].x + KingP[i].w &&
						mouse.y >= KingP[i].y &&
						mouse.y <= KingP[i].y + KingP[i].h)
						{
							if(Math.floor(randomRange(0,99)<20))
							{
								KingP[i].life -= 24;
								if(!PTBR)
								{
									newLine("Golpe Critico! Rei Persa perde 24 pontos de vida.");
								}
								else
									newLine("Critical attack! - Persian King lose 24 life points.");
							}
							else
							{
								damage = Math.floor(randomRange(6,16));
								KingP[i].life -= damage;
								if(!PTBR)
								{
									newLine("Golpe Normal - Rei Persa perde "+damage+" pontos de vida.")
								}
								else
													newLine("Normal attack - Persian King lose "+damage+" life points.");
							}
							Click_TG = 0;	
							Vez_Persas = true;
							Vez_Gregos = false;	
						}
				}
				
				for(var i = 0; i < ArcP.length; i++)
				{
					if(mouse.x >= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
					mouse.y >= TorG[TorsGChoosed].y &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
					mouse.x >= ArcP[i].x &&
					mouse.x <= ArcP[i].x + ArcP[i].w &&
					mouse.y >= ArcP[i].y &&
					mouse.y <= ArcP[i].y + ArcP[i].h ||
					mouse.x <= TorG[TorsGChoosed].x  &&
					mouse.x >= TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
					mouse.y >= TorG[TorsGChoosed].y &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
					mouse.x >= ArcP[i].x &&
					mouse.x <= ArcP[i].x + ArcP[i].w &&
					mouse.y >= ArcP[i].y &&
					mouse.y <= ArcP[i].y + ArcP[i].h ||
					mouse.x >= TorG[TorsGChoosed].x  &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.y <= TorG[TorsGChoosed].y &&
					mouse.y >= TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
					mouse.x >= ArcP[i].x &&
					mouse.x <= ArcP[i].x + ArcP[i].w &&
					mouse.y >= ArcP[i].y &&
					mouse.y <= ArcP[i].y + ArcP[i].h ||
					mouse.x >= TorG[TorsGChoosed].x &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.y >= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h  &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
					mouse.x >= ArcP[i].x &&
					mouse.x <= ArcP[i].x + ArcP[i].w &&
					mouse.y >= ArcP[i].y &&
					mouse.y <= ArcP[i].y + ArcP[i].h ||
					mouse.x >= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
					mouse.y <= TorG[TorsGChoosed].y&
					mouse.y >= TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
					mouse.x >= ArcP[i].x &&
					mouse.x <= ArcP[i].x + ArcP[i].w &&
					mouse.y >= ArcP[i].y &&
					mouse.y <= ArcP[i].y + ArcP[i].h ||
					mouse.x <= TorG[TorsGChoosed].x &&
					mouse.x >= TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
					mouse.y <= TorG[TorsGChoosed].y &&
					mouse.y >= TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
					mouse.x >= ArcP[i].x &&
					mouse.x <= ArcP[i].x + ArcP[i].w &&
					mouse.y >= ArcP[i].y &&
					mouse.y <= ArcP[i].y + ArcP[i].h ||
					mouse.x <= TorG[TorsGChoosed].x &&
					mouse.x >= TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
					mouse.y >= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
					mouse.x >= ArcP[i].x &&
					mouse.x <= ArcP[i].x + ArcP[i].w &&
					mouse.y >= ArcP[i].y &&
					mouse.y <= ArcP[i].y + ArcP[i].h ||
					mouse.x >= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
					mouse.y >= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
					mouse.x >= ArcP[i].x &&
					mouse.x <= ArcP[i].x + ArcP[i].w &&
					mouse.y >= ArcP[i].y &&
					mouse.y <= ArcP[i].y + ArcP[i].h)
					{
						if(Math.floor(randomRange(0,99)<20))
						{
							ArcP[i].life -= 24;
							if(!PTBR)
							{
								newLine("Golpe Critico! Arqueiro Persa perde 24 pontos de vida.");
							}
							else
								newLine("Critical attack! - Persian Archer lose 24 life points.");
						}
						else
						{
							damage = Math.floor(randomRange(10,20));
							ArcP[i].life -= damage;
							if(!PTBR)
							{
								newLine("Golpe Normal - Arqueiro Persa perde "+damage+" pontos de vida.")
							}
							else
								newLine("Normal attack - Persian Archer lose "+damage+" life points.");
						}
						Click_TG = 0;	
						Vez_Persas = true;
						Vez_Gregos = false;	
					}
					if(mouse.x > TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*3 &&
						mouse.y > TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*3 &&
						mouse.x >= ArcP[i].x &&
						mouse.x <= ArcP[i].x + ArcP[i].w &&
						mouse.y >= ArcP[i].y &&
						mouse.y <= ArcP[i].y + ArcP[i].h ||
						mouse.x < TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
						mouse.x > TorG[TorsGChoosed].x - TorG[TorsGChoosed].w*2 &&
						mouse.y > TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*3 &&
						mouse.x >= ArcP[i].x &&
						mouse.x <= ArcP[i].x + ArcP[i].w &&
						mouse.y >= ArcP[i].y &&
						mouse.y <= ArcP[i].y + ArcP[i].h ||
						mouse.x < TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
						mouse.x > TorG[TorsGChoosed].x - TorG[TorsGChoosed].w*2 &&
						mouse.y < TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
						mouse.y > TorG[TorsGChoosed].y - TorG[TorsGChoosed].h*2 &&
						mouse.x >= ArcP[i].x &&
						mouse.x <= ArcP[i].x + ArcP[i].w &&
						mouse.y >= ArcP[i].y &&
						mouse.y <= ArcP[i].y + ArcP[i].h ||
						mouse.x > TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*3 &&
						mouse.y < TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
						mouse.y > TorG[TorsGChoosed].y - TorG[TorsGChoosed].h*2 &&
						mouse.x >= ArcP[i].x &&
						mouse.x <= ArcP[i].x + ArcP[i].w &&
						mouse.y >= ArcP[i].y &&
						mouse.y <= ArcP[i].y + ArcP[i].h ||
						mouse.x > TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*3 &&
						mouse.y > TorG[TorsGChoosed].y  &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
						mouse.x >= ArcP[i].x &&
						mouse.x <= ArcP[i].x + ArcP[i].w &&
						mouse.y >= ArcP[i].y &&
						mouse.y <= ArcP[i].y + ArcP[i].h ||
						mouse.x < TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
						mouse.x > TorG[TorsGChoosed].x - TorG[TorsGChoosed].w*2 &&
						mouse.y > TorG[TorsGChoosed].y  &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
						mouse.x >= ArcP[i].x &&
						mouse.x <= ArcP[i].x + ArcP[i].w &&
						mouse.y >= ArcP[i].y &&
						mouse.y <= ArcP[i].y + ArcP[i].h ||
						mouse.x > TorG[TorsGChoosed].x &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
						mouse.y < TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
						mouse.y > TorG[TorsGChoosed].y - TorG[TorsGChoosed].h*2 &&
						mouse.x >= ArcP[i].x &&
						mouse.x <= ArcP[i].x + ArcP[i].w &&
						mouse.y >= ArcP[i].y &&
						mouse.y <= ArcP[i].y + ArcP[i].h ||
						mouse.x > TorG[TorsGChoosed].x &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
						mouse.y > TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*3 &&
						mouse.x >= ArcP[i].x &&
						mouse.x <= ArcP[i].x + ArcP[i].w &&
						mouse.y >= ArcP[i].y &&
						mouse.y <= ArcP[i].y + ArcP[i].h)
						{
							if(Math.floor(randomRange(0,99)<20))
							{
								ArcP[i].life -= 24;
								if(!PTBR)
								{
									newLine("Golpe Critico! Arqueiro Persa perde 24 pontos de vida.");
								}
								else
									newLine("Critical attack! - Persian Archer lose 24 life points.");
							}
							else
							{
								damage = Math.floor(randomRange(6,16));
								ArcP[i].life -= damage;
								if(!PTBR)
								{
									newLine("Golpe Normal - Arqueiro Persa perde "+damage+" pontos de vida.")
								}
								else
									newLine("Normal attack - Persian Archer lose "+damage+" life points.");
							}
							Click_TG = 0;	
							Vez_Persas = true;
							Vez_Gregos = false;	
						}
				}
				
				for(var i = 0; i < LancerP.length; i++)
				{
					if(mouse.x >= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
					mouse.y >= TorG[TorsGChoosed].y &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
					mouse.x >= LancerP[i].x &&
					mouse.x <= LancerP[i].x + LancerP[i].w &&
					mouse.y >= LancerP[i].y &&
					mouse.y <= LancerP[i].y + LancerP[i].h ||
					mouse.x <= TorG[TorsGChoosed].x  &&
					mouse.x >= TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
					mouse.y >= TorG[TorsGChoosed].y &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
					mouse.x >= LancerP[i].x &&
					mouse.x <= LancerP[i].x + LancerP[i].w &&
					mouse.y >= LancerP[i].y &&
					mouse.y <= LancerP[i].y + LancerP[i].h ||
					mouse.x >= TorG[TorsGChoosed].x  &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.y <= TorG[TorsGChoosed].y &&
					mouse.y >= TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
					mouse.x >= LancerP[i].x &&
					mouse.x <= LancerP[i].x + LancerP[i].w &&
					mouse.y >= LancerP[i].y &&
					mouse.y <= LancerP[i].y + LancerP[i].h ||
					mouse.x >= TorG[TorsGChoosed].x &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.y >= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h  &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
					mouse.x >= LancerP[i].x &&
					mouse.x <= LancerP[i].x + LancerP[i].w &&
					mouse.y >= LancerP[i].y &&
					mouse.y <= LancerP[i].y + LancerP[i].h ||
					mouse.x >= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
					mouse.y <= TorG[TorsGChoosed].y&
					mouse.y >= TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
					mouse.x >= LancerP[i].x &&
					mouse.x <= LancerP[i].x + LancerP[i].w &&
					mouse.y >= LancerP[i].y &&
					mouse.y <= LancerP[i].y + LancerP[i].h ||
					mouse.x <= TorG[TorsGChoosed].x &&
					mouse.x >= TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
					mouse.y <= TorG[TorsGChoosed].y &&
					mouse.y >= TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
					mouse.x >= LancerP[i].x &&
					mouse.x <= LancerP[i].x + LancerP[i].w &&
					mouse.y >= LancerP[i].y &&
					mouse.y <= LancerP[i].y + LancerP[i].h ||
					mouse.x <= TorG[TorsGChoosed].x &&
					mouse.x >= TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
					mouse.y >= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
					mouse.x >= LancerP[i].x &&
					mouse.x <= LancerP[i].x + LancerP[i].w &&
					mouse.y >= LancerP[i].y &&
					mouse.y <= LancerP[i].y + LancerP[i].h ||
					mouse.x >= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
					mouse.x <= TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
					mouse.y >= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
					mouse.y <= TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
					mouse.x >= LancerP[i].x &&
					mouse.x <= LancerP[i].x + LancerP[i].w &&
					mouse.y >= LancerP[i].y &&
					mouse.y <= LancerP[i].y + LancerP[i].h)
					{
						if(Math.floor(randomRange(0,99)<20))
						{
							LancerP[i].life -= 24;
							if(!PTBR)
							{
								newLine("Golpe Critico! Lanceiro Persa perde 24 pontos de vida.");
							}
							else
									newLine("Critical attack! - Persian Lancer lose 24 life points.");
						}
						else
						{
							damage = Math.floor(randomRange(10,20));
							LancerP[i].life -= damage;
							if(!PTBR)
							{
								newLine("Golpe Normal - Lanceiro Persa perde "+damage+" pontos de vida.")
							}
							else
								newLine("Normal attack - Persian Lancer lose "+damage+" life points.");
						}
						Click_TG = 0;	
						Vez_Persas = true;
						Vez_Gregos = false;	
					}
					if(mouse.x > TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*3 &&
						mouse.y > TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*3 &&
						mouse.x >= LancerP[i].x &&
						mouse.x <= LancerP[i].x + LancerP[i].w &&
						mouse.y >= LancerP[i].y &&
						mouse.y <= LancerP[i].y + LancerP[i].h ||
						mouse.x < TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
						mouse.x > TorG[TorsGChoosed].x - TorG[TorsGChoosed].w*2 &&
						mouse.y > TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*3 &&
						mouse.x >= LancerP[i].x &&
						mouse.x <= LancerP[i].x + LancerP[i].w &&
						mouse.y >= LancerP[i].y &&
						mouse.y <= LancerP[i].y + LancerP[i].h ||
						mouse.x < TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
						mouse.x > TorG[TorsGChoosed].x - TorG[TorsGChoosed].w*2 &&
						mouse.y < TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
						mouse.y > TorG[TorsGChoosed].y - TorG[TorsGChoosed].h*2 &&
						mouse.x >= LancerP[i].x &&
						mouse.x <= LancerP[i].x + LancerP[i].w &&
						mouse.y >= LancerP[i].y &&
						mouse.y <= LancerP[i].y + LancerP[i].h ||
						mouse.x > TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*3 &&
						mouse.y < TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
						mouse.y > TorG[TorsGChoosed].y - TorG[TorsGChoosed].h*2 &&
						mouse.x >= LancerP[i].x &&
						mouse.x <= LancerP[i].x + LancerP[i].w &&
						mouse.y >= LancerP[i].y &&
						mouse.y <= LancerP[i].y + LancerP[i].h ||
						mouse.x > TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*2 &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w*3 &&
						mouse.y > TorG[TorsGChoosed].y  &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
						mouse.x >= LancerP[i].x &&
						mouse.x <= LancerP[i].x + LancerP[i].w &&
						mouse.y >= LancerP[i].y &&
						mouse.y <= LancerP[i].y + LancerP[i].h ||
						mouse.x < TorG[TorsGChoosed].x - TorG[TorsGChoosed].w &&
						mouse.x > TorG[TorsGChoosed].x - TorG[TorsGChoosed].w*2 &&
						mouse.y > TorG[TorsGChoosed].y  &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h &&
						mouse.x >= LancerP[i].x &&
						mouse.x <= LancerP[i].x + LancerP[i].w &&
						mouse.y >= LancerP[i].y &&
						mouse.y <= LancerP[i].y + LancerP[i].h ||
						mouse.x > TorG[TorsGChoosed].x &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
						mouse.y < TorG[TorsGChoosed].y - TorG[TorsGChoosed].h &&
						mouse.y > TorG[TorsGChoosed].y - TorG[TorsGChoosed].h*2 &&
						mouse.x >= LancerP[i].x &&
						mouse.x <= LancerP[i].x + LancerP[i].w &&
						mouse.y >= LancerP[i].y &&
						mouse.y <= LancerP[i].y + LancerP[i].h ||
						mouse.x > TorG[TorsGChoosed].x &&
						mouse.x < TorG[TorsGChoosed].x + TorG[TorsGChoosed].w &&
						mouse.y < TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*2 &&
						mouse.y > TorG[TorsGChoosed].y + TorG[TorsGChoosed].h*3 &&
						mouse.x >= LancerP[i].x &&
						mouse.x <= LancerP[i].x + LancerP[i].w &&
						mouse.y >= LancerP[i].y &&
						mouse.y <= LancerP[i].y + LancerP[i].h)
						{
							damage1 = Math.floor(randomRange(0,5));
							if(Math.floor(randomRange(0,99)<20))
							{
								LancerP[i].life -= 24;
								if(!PTBR)
								{
									newLine("Golpe Critico! Lanceiro Persa perde 24 pontos de vida.");
								}
								else
									newLine("Critical attack! - Persian Lancer lose 24 life points.");
							}
							else
							{
								damage = Math.floor(randomRange(6,16));
								LancerP[i].life -= damage;
								if(!PTBR)
								{
									newLine("Golpe Normal - Lanceiro Persa perde "+damage+" pontos de vida.")
								}
								else
									newLine("Normal attack - Persian Lancer lose "+damage+" life points.");
							}
							Click_TG = 0;	
							Vez_Persas = true;
							Vez_Gregos = false;	
						}
				}
			
			}
		}
	}
		if(Vez_Persas)
		{
			if(Click_TP == 1)
			{
				context.drawImage(AtkT,TorP[TorsPChoosed].x + 50, TorP[TorsPChoosed].y, TorP[TorsPChoosed].w, TorP[TorsPChoosed].h);
				context.drawImage(AtkT,TorP[TorsPChoosed].x - 50, TorP[TorsPChoosed].y, TorP[TorsPChoosed].w, TorP[TorsPChoosed].h);
				context.drawImage(AtkT,TorP[TorsPChoosed].x, TorP[TorsPChoosed].y - 50, TorP[TorsPChoosed].w, TorP[TorsPChoosed].h);
				context.drawImage(AtkT,TorP[TorsPChoosed].x, TorP[TorsPChoosed].y + 50, TorP[TorsPChoosed].w, TorP[TorsPChoosed].h);
				context.drawImage(AtkT,TorP[TorsPChoosed].x + 50, TorP[TorsPChoosed].y + 50, TorP[TorsPChoosed].w, TorP[TorsPChoosed].h);
				context.drawImage(AtkT,TorP[TorsPChoosed].x - 50, TorP[TorsPChoosed].y - 50, TorP[TorsPChoosed].w, TorP[TorsPChoosed].h);
				context.drawImage(AtkT,TorP[TorsPChoosed].x - 50, TorP[TorsPChoosed].y + 50, TorP[TorsPChoosed].w, TorP[TorsPChoosed].h);
				context.drawImage(AtkT,TorP[TorsPChoosed].x + 50, TorP[TorsPChoosed].y - 50, TorP[TorsPChoosed].w, TorP[TorsPChoosed].h);
				context.drawImage(AtkT,TorP[TorsPChoosed].x + 100, TorP[TorsPChoosed].y - 100, TorP[TorsPChoosed].w, TorP[TorsPChoosed].h);
				context.drawImage(AtkT,TorP[TorsPChoosed].x - 100, TorP[TorsPChoosed].y - 100, TorP[TorsPChoosed].w, TorP[TorsPChoosed].h);
				context.drawImage(AtkT,TorP[TorsPChoosed].x + 100, TorP[TorsPChoosed].y + 100, TorP[TorsPChoosed].w, TorP[TorsPChoosed].h);
				context.drawImage(AtkT,TorP[TorsPChoosed].x - 100, TorP[TorsPChoosed].y + 100, TorP[TorsPChoosed].w, TorP[TorsPChoosed].h);
				context.drawImage(AtkT,TorP[TorsPChoosed].x , TorP[TorsPChoosed].y - 100, TorP[TorsPChoosed].w, TorP[TorsPChoosed].h);
				context.drawImage(AtkT,TorP[TorsPChoosed].x , TorP[TorsPChoosed].y + 100, TorP[TorsPChoosed].w, TorP[TorsPChoosed].h);
				context.drawImage(AtkT,TorP[TorsPChoosed].x + 100 , TorP[TorsPChoosed].y , TorP[TorsPChoosed].w, TorP[TorsPChoosed].h);
				context.drawImage(AtkT,TorP[TorsPChoosed].x - 100, TorP[TorsPChoosed].y , TorP[TorsPChoosed].w, TorP[TorsPChoosed].h);
			
				for(var i = 0; i < KntG.length; i++)
				{
					if(mouse.x >= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
					mouse.y >= TorP[TorsPChoosed].y &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
					mouse.x >= KntG[i].x &&
					mouse.x <= KntG[i].x + KntG[i].w &&
					mouse.y >= KntG[i].y &&
					mouse.y <= KntG[i].y + KntG[i].h ||
					mouse.x <= TorP[TorsPChoosed].x  &&
					mouse.x >= TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
					mouse.y >= TorP[TorsPChoosed].y &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
					mouse.x >= KntG[i].x &&
					mouse.x <= KntG[i].x + KntG[i].w &&
					mouse.y >= KntG[i].y &&
					mouse.y <= KntG[i].y + KntG[i].h ||
					mouse.x >= TorP[TorsPChoosed].x  &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.y <= TorP[TorsPChoosed].y &&
					mouse.y >= TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
					mouse.x >= KntG[i].x &&
					mouse.x <= KntG[i].x + KntG[i].w &&
					mouse.y >= KntG[i].y &&
					mouse.y <= KntG[i].y + KntG[i].h ||
					mouse.x >= TorP[TorsPChoosed].x &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.y >= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h  &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
					mouse.x >= KntG[i].x &&
					mouse.x <= KntG[i].x + KntG[i].w &&
					mouse.y >= KntG[i].y &&
					mouse.y <= KntG[i].y + KntG[i].h ||
					mouse.x >= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
					mouse.y <= TorP[TorsPChoosed].y&
					mouse.y >= TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
					mouse.x >= KntG[i].x &&
					mouse.x <= KntG[i].x + KntG[i].w &&
					mouse.y >= KntG[i].y &&
					mouse.y <= KntG[i].y + KntG[i].h ||
					mouse.x <= TorP[TorsPChoosed].x &&
					mouse.x >= TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
					mouse.y <= TorP[TorsPChoosed].y &&
					mouse.y >= TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
					mouse.x >= KntG[i].x &&
					mouse.x <= KntG[i].x + KntG[i].w &&
					mouse.y >= KntG[i].y &&
					mouse.y <= KntG[i].y + KntG[i].h ||
					mouse.x <= TorP[TorsPChoosed].x &&
					mouse.x >= TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
					mouse.y >= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
					mouse.x >= KntG[i].x &&
					mouse.x <= KntG[i].x + KntG[i].w &&
					mouse.y >= KntG[i].y &&
					mouse.y <= KntG[i].y + KntG[i].h ||
					mouse.x >= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
					mouse.y >= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
					mouse.x >= KntG[i].x &&
					mouse.x <= KntG[i].x + KntG[i].w &&
					mouse.y >= KntG[i].y &&
					mouse.y <= KntG[i].y + KntG[i].h)
					{	
						if(Math.floor(randomRange(0,99)<20))
						{
							KntG[i].life -= 24;
							if(!PTBR)
							{
								newLine("Golpe Critico! Cavaleiro Grego perde 24  pontos de vida.");
							}
							else
								newLine("Critical attack! - Greek Knight lose 24 life points.");
						}
						else
						{
							damage = Math.floor(randomRange(13,23));
							KntG[i].life -= damage;
							if(!PTBR)
							{
								newLine("Golpe Normal - Cavaleiro Grego perde "+damage+" pontos de vida.")
							}
						}
						Click_TP = 	0;	
						Vez_Gregos = true;
						Vez_Persas = false;	
					}
					if(mouse.x > TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*3 &&
						mouse.y > TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*3 &&
						mouse.x >= KntG[i].x &&
						mouse.x <= KntG[i].x + KntG[i].w &&
						mouse.y >= KntG[i].y &&
						mouse.y <= KntG[i].y + KntG[i].h ||
						mouse.x < TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
						mouse.x > TorP[TorsPChoosed].x - TorP[TorsPChoosed].w*2 &&
						mouse.y > TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*3 &&
						mouse.x >= KntG[i].x &&
						mouse.x <= KntG[i].x + KntG[i].w &&
						mouse.y >= KntG[i].y &&
						mouse.y <= KntG[i].y + KntG[i].h ||
						mouse.x < TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
						mouse.x > TorP[TorsPChoosed].x - TorP[TorsPChoosed].w*2 &&
						mouse.y < TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
						mouse.y > TorP[TorsPChoosed].y - TorP[TorsPChoosed].h*2 &&
						mouse.x >= KntG[i].x &&
						mouse.x <= KntG[i].x + KntG[i].w &&
						mouse.y >= KntG[i].y &&
						mouse.y <= KntG[i].y + KntG[i].h ||
						mouse.x > TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*3 &&
						mouse.y < TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
						mouse.y > TorP[TorsPChoosed].y - TorP[TorsPChoosed].h*2 &&
						mouse.x >= KntG[i].x &&
						mouse.x <= KntG[i].x + KntG[i].w &&
						mouse.y >= KntG[i].y &&
						mouse.y <= KntG[i].y + KntG[i].h ||
						mouse.x > TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*3 &&
						mouse.y > TorP[TorsPChoosed].y  &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
						mouse.x >= KntG[i].x &&
						mouse.x <= KntG[i].x + KntG[i].w &&
						mouse.y >= KntG[i].y &&
						mouse.y <= KntG[i].y + KntG[i].h ||
						mouse.x < TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
						mouse.x > TorP[TorsPChoosed].x - TorP[TorsPChoosed].w*2 &&
						mouse.y > TorP[TorsPChoosed].y  &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
						mouse.x >= KntG[i].x &&
						mouse.x <= KntG[i].x + KntG[i].w &&
						mouse.y >= KntG[i].y &&
						mouse.y <= KntG[i].y + KntG[i].h ||
						mouse.x > TorP[TorsPChoosed].x &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
						mouse.y < TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
						mouse.y > TorP[TorsPChoosed].y - TorP[TorsPChoosed].h*2 &&
						mouse.x >= KntG[i].x &&
						mouse.x <= KntG[i].x + KntG[i].w &&
						mouse.y >= KntG[i].y &&
						mouse.y <= KntG[i].y + KntG[i].h ||
						mouse.x > TorP[TorsPChoosed].x &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
						mouse.y > TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*3 &&
						mouse.x >= KntG[i].x &&
						mouse.x <= KntG[i].x + KntG[i].w &&
						mouse.y >= KntG[i].y &&
						mouse.y <= KntG[i].y + KntG[i].h)
						{
							if(Math.floor(randomRange(0,99)<20))
							{
								KntG[i].life -= 24;
								if(!PTBR)
								{
									newLine("Golpe Critico! Cavaleiro Grego perde 24 pontos de vida.");
								}
								else
									newLine("Critical attack! - Greek Knight lose 24 life points.");
							}
							else
							{
								damage = Math.floor(randomRange(9,19));
								KntG[i].life -= damage;
								if(!PTBR)
								{
									newLine("Golpe Normal - Cavaleiro Grego perde "+damage+" pontos de vida.")
								}
								else
									newLine("Normal attack - Greek Knight lose "+damage+" life points.");
							}
							Click_TP = 0;	
							Vez_Gregos = true;
							Vez_Persas = false;	
						}
				}
				
				for(var i = 0; i < GnrlG.length; i++)
				{
					if(mouse.x >= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
					mouse.y >= TorP[TorsPChoosed].y &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
					mouse.x >= GnrlG[i].x &&
					mouse.x <= GnrlG[i].x + GnrlG[i].w &&
					mouse.y >= GnrlG[i].y &&
					mouse.y <= GnrlG[i].y + GnrlG[i].h ||
					mouse.x <= TorP[TorsPChoosed].x  &&
					mouse.x >= TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
					mouse.y >= TorP[TorsPChoosed].y &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
					mouse.x >= GnrlG[i].x &&
					mouse.x <= GnrlG[i].x + GnrlG[i].w &&
					mouse.y >= GnrlG[i].y &&
					mouse.y <= GnrlG[i].y + GnrlG[i].h ||
					mouse.x >= TorP[TorsPChoosed].x  &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.y <= TorP[TorsPChoosed].y &&
					mouse.y >= TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
					mouse.x >= GnrlG[i].x &&
					mouse.x <= GnrlG[i].x + GnrlG[i].w &&
					mouse.y >= GnrlG[i].y &&
					mouse.y <= GnrlG[i].y + GnrlG[i].h ||
					mouse.x >= TorP[TorsPChoosed].x &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.y >= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h  &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
					mouse.x >= GnrlG[i].x &&
					mouse.x <= GnrlG[i].x + GnrlG[i].w &&
					mouse.y >= GnrlG[i].y &&
					mouse.y <= GnrlG[i].y + GnrlG[i].h ||
					mouse.x >= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
					mouse.y <= TorP[TorsPChoosed].y&
					mouse.y >= TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
					mouse.x >= GnrlG[i].x &&
					mouse.x <= GnrlG[i].x + GnrlG[i].w &&
					mouse.y >= GnrlG[i].y &&
					mouse.y <= GnrlG[i].y + GnrlG[i].h ||
					mouse.x <= TorP[TorsPChoosed].x &&
					mouse.x >= TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
					mouse.y <= TorP[TorsPChoosed].y &&
					mouse.y >= TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
					mouse.x >= GnrlG[i].x &&
					mouse.x <= GnrlG[i].x + GnrlG[i].w &&
					mouse.y >= GnrlG[i].y &&
					mouse.y <= GnrlG[i].y + GnrlG[i].h ||
					mouse.x <= TorP[TorsPChoosed].x &&
					mouse.x >= TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
					mouse.y >= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
					mouse.x >= GnrlG[i].x &&
					mouse.x <= GnrlG[i].x + GnrlG[i].w &&
					mouse.y >= GnrlG[i].y &&
					mouse.y <= GnrlG[i].y + GnrlG[i].h ||
					mouse.x >= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
					mouse.y >= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
					mouse.x >= GnrlG[i].x &&
					mouse.x <= GnrlG[i].x + GnrlG[i].w &&
					mouse.y >= GnrlG[i].y &&
					mouse.y <= GnrlG[i].y + GnrlG[i].h)
					{
						if(Math.floor(randomRange(0,99)<20))
						{
							GnrlG[i].life -= 24;
							if(!PTBR)
							{
								newLine("Golpe Critico! General Grego perde 24 pontos de vida.");
							}
							else
								newLine("Critical attack! - Greek General lose 24 life points.");
						}
						else
						{
							damage = Math.floor(randomRange(10,20));
							GnrlG[i].life -= damage;
							if(!PTBR)
							{
								newLine("Golpe Normal - General Grego perde "+damage+" pontos de vida.")
							}
							else
								newLine("Normal attack - Greek General lose "+damage+" life points.");
						}
						Click_TP = 0;	
						Vez_Gregos = true;
						Vez_Persas = false;	
					}
					if(mouse.x > TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*3 &&
						mouse.y > TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*3 &&
						mouse.x >= GnrlG[i].x &&
						mouse.x <= GnrlG[i].x + GnrlG[i].w &&
						mouse.y >= GnrlG[i].y &&
						mouse.y <= GnrlG[i].y + GnrlG[i].h ||
						mouse.x < TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
						mouse.x > TorP[TorsPChoosed].x - TorP[TorsPChoosed].w*2 &&
						mouse.y > TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*3 &&
						mouse.x >= GnrlG[i].x &&
						mouse.x <= GnrlG[i].x + GnrlG[i].w &&
						mouse.y >= GnrlG[i].y &&
						mouse.y <= GnrlG[i].y + GnrlG[i].h ||
						mouse.x < TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
						mouse.x > TorP[TorsPChoosed].x - TorP[TorsPChoosed].w*2 &&
						mouse.y < TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
						mouse.y > TorP[TorsPChoosed].y - TorP[TorsPChoosed].h*2 &&
						mouse.x >= GnrlG[i].x &&
						mouse.x <= GnrlG[i].x + GnrlG[i].w &&
						mouse.y >= GnrlG[i].y &&
						mouse.y <= GnrlG[i].y + GnrlG[i].h ||
						mouse.x > TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*3 &&
						mouse.y < TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
						mouse.y > TorP[TorsPChoosed].y - TorP[TorsPChoosed].h*2 &&
						mouse.x >= GnrlG[i].x &&
						mouse.x <= GnrlG[i].x + GnrlG[i].w &&
						mouse.y >= GnrlG[i].y &&
						mouse.y <= GnrlG[i].y + GnrlG[i].h ||
						mouse.x > TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*3 &&
						mouse.y > TorP[TorsPChoosed].y  &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
						mouse.x >= GnrlG[i].x &&
						mouse.x <= GnrlG[i].x + GnrlG[i].w &&
						mouse.y >= GnrlG[i].y &&
						mouse.y <= GnrlG[i].y + GnrlG[i].h ||
						mouse.x < TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
						mouse.x > TorP[TorsPChoosed].x - TorP[TorsPChoosed].w*2 &&
						mouse.y > TorP[TorsPChoosed].y  &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
						mouse.x >= GnrlG[i].x &&
						mouse.x <= GnrlG[i].x + GnrlG[i].w &&
						mouse.y >= GnrlG[i].y &&
						mouse.y <= GnrlG[i].y + GnrlG[i].h ||
						mouse.x > TorP[TorsPChoosed].x &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
						mouse.y < TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
						mouse.y > TorP[TorsPChoosed].y - TorP[TorsPChoosed].h*2 &&
						mouse.x >= GnrlG[i].x &&
						mouse.x <= GnrlG[i].x + GnrlG[i].w &&
						mouse.y >= GnrlG[i].y &&
						mouse.y <= GnrlG[i].y + GnrlG[i].h ||
						mouse.x > TorP[TorsPChoosed].x &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
						mouse.y > TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*3 &&
						mouse.x >= GnrlG[i].x &&
						mouse.x <= GnrlG[i].x + GnrlG[i].w &&
						mouse.y >= GnrlG[i].y &&
						mouse.y <= GnrlG[i].y + GnrlG[i].h)
						{
							if(Math.floor(randomRange(0,99)<20))
							{
								GnrlG[i].life -= 24;
								if(!PTBR)
								{
									newLine("Golpe Critico! perde 24 pontos de vida.");
								}
								else
									newLine("Critical attack! - Greek General lose 24 life points.");
							}
							else
							{
								damage = Math.floor(randomRange(6,16));
								GnrlG[i].life -= damage;
								if(!PTBR)
								{
									newLine("Golpe Normal - General Grego perde "+damage+" pontos de vida.")
								}
								else
									newLine("Normal attack - Greek General lose "+damage+" life points.");
							}
							Click_TP = 0;	
							Vez_Gregos = true;
							Vez_Persas = false;	
						}
				}
				
				for(var i = 0; i < KingG.length; i++)
				{
					if(mouse.x >= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
					mouse.y >= TorP[TorsPChoosed].y &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
					mouse.x >= KingG[i].x &&
					mouse.x <= KingG[i].x + KingG[i].w &&
					mouse.y >= KingG[i].y &&
					mouse.y <= KingG[i].y + KingG[i].h ||
					mouse.x <= TorP[TorsPChoosed].x  &&
					mouse.x >= TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
					mouse.y >= TorP[TorsPChoosed].y &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
					mouse.x >= KingG[i].x &&
					mouse.x <= KingG[i].x + KingG[i].w &&
					mouse.y >= KingG[i].y &&
					mouse.y <= KingG[i].y + KingG[i].h ||
					mouse.x >= TorP[TorsPChoosed].x  &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.y <= TorP[TorsPChoosed].y &&
					mouse.y >= TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
					mouse.x >= KingG[i].x &&
					mouse.x <= KingG[i].x + KingG[i].w &&
					mouse.y >= KingG[i].y &&
					mouse.y <= KingG[i].y + KingG[i].h ||
					mouse.x >= TorP[TorsPChoosed].x &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.y >= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h  &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
					mouse.x >= KingG[i].x &&
					mouse.x <= KingG[i].x + KingG[i].w &&
					mouse.y >= KingG[i].y &&
					mouse.y <= KingG[i].y + KingG[i].h ||
					mouse.x >= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
					mouse.y <= TorP[TorsPChoosed].y&
					mouse.y >= TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
					mouse.x >= KingG[i].x &&
					mouse.x <= KingG[i].x + KingG[i].w &&
					mouse.y >= KingG[i].y &&
					mouse.y <= KingG[i].y + KingG[i].h ||
					mouse.x <= TorP[TorsPChoosed].x &&
					mouse.x >= TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
					mouse.y <= TorP[TorsPChoosed].y &&
					mouse.y >= TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
					mouse.x >= KingG[i].x &&
					mouse.x <= KingG[i].x + KingG[i].w &&
					mouse.y >= KingG[i].y &&
					mouse.y <= KingG[i].y + KingG[i].h ||
					mouse.x <= TorP[TorsPChoosed].x &&
					mouse.x >= TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
					mouse.y >= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
					mouse.x >= KingG[i].x &&
					mouse.x <= KingG[i].x + KingG[i].w &&
					mouse.y >= KingG[i].y &&
					mouse.y <= KingG[i].y + KingG[i].h ||
					mouse.x >= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
					mouse.y >= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
					mouse.x >= KingG[i].x &&
					mouse.x <= KingG[i].x + KingG[i].w &&
					mouse.y >= KingG[i].y &&
					mouse.y <= KingG[i].y + KingG[i].h)
					{
						if(Math.floor(randomRange(0,99)<20))
						{
							KingG[i].life -= 24;
							if(!PTBR)
							{
								newLine("Golpe Critico! Rei Grego perde 24  pontos de vida.");
							}
							else
								newLine("Critical attack! - Greek King lose 24 life points.");
						}
						else
						{
							damage = Math.floor(randomRange(10,20));
							KingG[i].life -= damage;
							if(!PTBR)
							{
								newLine("Golpe Normal - Rei Grego perde "+damage+" pontos de vida.")
							}
							else
								newLine("Normal attack - Greek King lose "+damage+" life points.");
						}
						Click_TP = 0;	
						Vez_Gregos = true;
						Vez_Persas = false;	
					}
					if(mouse.x > TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*3 &&
						mouse.y > TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*3 &&
						mouse.x >= KingG[i].x &&
						mouse.x <= KingG[i].x + KingG[i].w &&
						mouse.y >= KingG[i].y &&
						mouse.y <= KingG[i].y + KingG[i].h ||
						mouse.x < TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
						mouse.x > TorP[TorsPChoosed].x - TorP[TorsPChoosed].w*2 &&
						mouse.y > TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*3 &&
						mouse.x >= KingG[i].x &&
						mouse.x <= KingG[i].x + KingG[i].w &&
						mouse.y >= KingG[i].y &&
						mouse.y <= KingG[i].y + KingG[i].h ||
						mouse.x < TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
						mouse.x > TorP[TorsPChoosed].x - TorP[TorsPChoosed].w*2 &&
						mouse.y < TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
						mouse.y > TorP[TorsPChoosed].y - TorP[TorsPChoosed].h*2 &&
						mouse.x >= KingG[i].x &&
						mouse.x <= KingG[i].x + KingG[i].w &&
						mouse.y >= KingG[i].y &&
						mouse.y <= KingG[i].y + KingG[i].h ||
						mouse.x > TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*3 &&
						mouse.y < TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
						mouse.y > TorP[TorsPChoosed].y - TorP[TorsPChoosed].h*2 &&
						mouse.x >= KingG[i].x &&
						mouse.x <= KingG[i].x + KingG[i].w &&
						mouse.y >= KingG[i].y &&
						mouse.y <= KingG[i].y + KingG[i].h ||
						mouse.x > TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*3 &&
						mouse.y > TorP[TorsPChoosed].y  &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
						mouse.x >= KingG[i].x &&
						mouse.x <= KingG[i].x + KingG[i].w &&
						mouse.y >= KingG[i].y &&
						mouse.y <= KingG[i].y + KingG[i].h ||
						mouse.x < TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
						mouse.x > TorP[TorsPChoosed].x - TorP[TorsPChoosed].w*2 &&
						mouse.y > TorP[TorsPChoosed].y  &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
						mouse.x >= KingG[i].x &&
						mouse.x <= KingG[i].x + KingG[i].w &&
						mouse.y >= KingG[i].y &&
						mouse.y <= KingG[i].y + KingG[i].h ||
						mouse.x > TorP[TorsPChoosed].x &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
						mouse.y < TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
						mouse.y > TorP[TorsPChoosed].y - TorP[TorsPChoosed].h*2 &&
						mouse.x >= KingG[i].x &&
						mouse.x <= KingG[i].x + KingG[i].w &&
						mouse.y >= KingG[i].y &&
						mouse.y <= KingG[i].y + KingG[i].h ||
						mouse.x > TorP[TorsPChoosed].x &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
						mouse.y > TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*3 &&
						mouse.x >= KingG[i].x &&
						mouse.x <= KingG[i].x + KingG[i].w &&
						mouse.y >= KingG[i].y &&
						mouse.y <= KingG[i].y + KingG[i].h)
						{
							if(Math.floor(randomRange(0,99)<20))
							{
								KingG[i].life -= 24;
								if(!PTBR)
								{
									newLine("Golpe Critico! Rei Grego perde 24 pontos de vida.");
								}
								else
									newLine("Critical attack! - Greek King lose 24 life points.");
							}
							else
							{
								damage = Math.floor(randomRange(6,16));
								KingG[i].life -= damage;
								if(!PTBR)
								{
									newLine("Golpe Normal - Rei Grego perde "+damage+" pontos de vida.")
								}
								else
									newLine("Normal attack - Greek King lose "+damage+" life points.");
							}
							Click_TP = 0;	
							Vez_Gregos = true;
							Vez_Persas = false;	
						}
				}
				
				for(var i = 0; i < ArcG.length; i++)
				{
					if(mouse.x >= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
					mouse.y >= TorP[TorsPChoosed].y &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
					mouse.x >= ArcG[i].x &&
					mouse.x <= ArcG[i].x + ArcG[i].w &&
					mouse.y >= ArcG[i].y &&
					mouse.y <= ArcG[i].y + ArcG[i].h ||
					mouse.x <= TorP[TorsPChoosed].x  &&
					mouse.x >= TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
					mouse.y >= TorP[TorsPChoosed].y &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
					mouse.x >= ArcG[i].x &&
					mouse.x <= ArcG[i].x + ArcG[i].w &&
					mouse.y >= ArcG[i].y &&
					mouse.y <= ArcG[i].y + ArcG[i].h ||
					mouse.x >= TorP[TorsPChoosed].x  &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.y <= TorP[TorsPChoosed].y &&
					mouse.y >= TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
					mouse.x >= ArcG[i].x &&
					mouse.x <= ArcG[i].x + ArcG[i].w &&
					mouse.y >= ArcG[i].y &&
					mouse.y <= ArcG[i].y + ArcG[i].h ||
					mouse.x >= TorP[TorsPChoosed].x &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.y >= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h  &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
					mouse.x >= ArcG[i].x &&
					mouse.x <= ArcG[i].x + ArcG[i].w &&
					mouse.y >= ArcG[i].y &&
					mouse.y <= ArcG[i].y + ArcG[i].h ||
					mouse.x >= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
					mouse.y <= TorP[TorsPChoosed].y&
					mouse.y >= TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
					mouse.x >= ArcG[i].x &&
					mouse.x <= ArcG[i].x + ArcG[i].w &&
					mouse.y >= ArcG[i].y &&
					mouse.y <= ArcG[i].y + ArcG[i].h ||
					mouse.x <= TorP[TorsPChoosed].x &&
					mouse.x >= TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
					mouse.y <= TorP[TorsPChoosed].y &&
					mouse.y >= TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
					mouse.x >= ArcG[i].x &&
					mouse.x <= ArcG[i].x + ArcG[i].w &&
					mouse.y >= ArcG[i].y &&
					mouse.y <= ArcG[i].y + ArcG[i].h ||
					mouse.x <= TorP[TorsPChoosed].x &&
					mouse.x >= TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
					mouse.y >= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
					mouse.x >= ArcG[i].x &&
					mouse.x <= ArcG[i].x + ArcG[i].w &&
					mouse.y >= ArcG[i].y &&
					mouse.y <= ArcG[i].y + ArcG[i].h ||
					mouse.x >= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
					mouse.y >= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
					mouse.x >= ArcG[i].x &&
					mouse.x <= ArcG[i].x + ArcG[i].w &&
					mouse.y >= ArcG[i].y &&
					mouse.y <= ArcG[i].y + ArcG[i].h)
					{
						if(Math.floor(randomRange(0,99)<20))
						{
							ArcG[i].life -= 24;
							if(!PTBR)
							{
								newLine("Golpe Critico! Arqueiro Grego perde 24 pontos de vida.");
							}
							else
								newLine("Critical attack! - Greek Archer lose 24 life points.");
						}
						else
						{
							damage = Math.floor(randomRange(10,20));
							ArcG[i].life -= damage;
							if(!PTBR)
							{
								newLine("Golpe Normal - Arqueiro Grego perde "+damage+" pontos de vida.")
							}
							else
								newLine("Normal attack - Greek Archer lose "+damage+" life points.");
						}
						Click_TP = 0;	
						Vez_Gregos = true;
						Vez_Persas = false;	
					}
					if(mouse.x > TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*3 &&
						mouse.y > TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*3 &&
						mouse.x >= ArcG[i].x &&
						mouse.x <= ArcG[i].x + ArcG[i].w &&
						mouse.y >= ArcG[i].y &&
						mouse.y <= ArcG[i].y + ArcG[i].h ||
						mouse.x < TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
						mouse.x > TorP[TorsPChoosed].x - TorP[TorsPChoosed].w*2 &&
						mouse.y > TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*3 &&
						mouse.x >= ArcG[i].x &&
						mouse.x <= ArcG[i].x + ArcG[i].w &&
						mouse.y >= ArcG[i].y &&
						mouse.y <= ArcG[i].y + ArcG[i].h ||
						mouse.x < TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
						mouse.x > TorP[TorsPChoosed].x - TorP[TorsPChoosed].w*2 &&
						mouse.y < TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
						mouse.y > TorP[TorsPChoosed].y - TorP[TorsPChoosed].h*2 &&
						mouse.x >= ArcG[i].x &&
						mouse.x <= ArcG[i].x + ArcG[i].w &&
						mouse.y >= ArcG[i].y &&
						mouse.y <= ArcG[i].y + ArcG[i].h ||
						mouse.x > TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*3 &&
						mouse.y < TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
						mouse.y > TorP[TorsPChoosed].y - TorP[TorsPChoosed].h*2 &&
						mouse.x >= ArcG[i].x &&
						mouse.x <= ArcG[i].x + ArcG[i].w &&
						mouse.y >= ArcG[i].y &&
						mouse.y <= ArcG[i].y + ArcG[i].h ||
						mouse.x > TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*3 &&
						mouse.y > TorP[TorsPChoosed].y  &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
						mouse.x >= ArcG[i].x &&
						mouse.x <= ArcG[i].x + ArcG[i].w &&
						mouse.y >= ArcG[i].y &&
						mouse.y <= ArcG[i].y + ArcG[i].h ||
						mouse.x < TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
						mouse.x > TorP[TorsPChoosed].x - TorP[TorsPChoosed].w*2 &&
						mouse.y > TorP[TorsPChoosed].y  &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
						mouse.x >= ArcG[i].x &&
						mouse.x <= ArcG[i].x + ArcG[i].w &&
						mouse.y >= ArcG[i].y &&
						mouse.y <= ArcG[i].y + ArcG[i].h ||
						mouse.x > TorP[TorsPChoosed].x &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
						mouse.y < TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
						mouse.y > TorP[TorsPChoosed].y - TorP[TorsPChoosed].h*2 &&
						mouse.x >= ArcG[i].x &&
						mouse.x <= ArcG[i].x + ArcG[i].w &&
						mouse.y >= ArcG[i].y &&
						mouse.y <= ArcG[i].y + ArcG[i].h ||
						mouse.x > TorP[TorsPChoosed].x &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
						mouse.y > TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*3 &&
						mouse.x >= ArcG[i].x &&
						mouse.x <= ArcG[i].x + ArcG[i].w &&
						mouse.y >= ArcG[i].y &&
						mouse.y <= ArcG[i].y + ArcG[i].h)
						{
							if(Math.floor(randomRange(0,99)<20))
							{
								ArcG[i].life -= 24;
								if(!PTBR)
								{
									newLine("Golpe Critico! Arqueiro Grego perde 24 pontos de vida.");
								}
								else
									newLine("Critical attack! - Greek Archer lose 24 life points.");
							}
							else
							{
								damage = Math.floor(randomRange(6,16));
								ArcG[i].life -= damage;
								if(!PTBR)
								{
									newLine("Golpe Normal - Arqueiro Grego perde "+damage+" pontos de vida.")
								}
								else
									newLine("Normal attack - Greek Archer lose "+damage+" life points.");
							}
							Click_TP = 0;	
							Vez_Gregos = true;
							Vez_Persas = false;	
						}
				}
				
				for(var i = 0; i < LancerG.length; i++)
				{
					if(mouse.x >= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
					mouse.y >= TorP[TorsPChoosed].y &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
					mouse.x >= LancerG[i].x &&
					mouse.x <= LancerG[i].x + LancerG[i].w &&
					mouse.y >= LancerG[i].y &&
					mouse.y <= LancerG[i].y + LancerG[i].h ||
					mouse.x <= TorP[TorsPChoosed].x  &&
					mouse.x >= TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
					mouse.y >= TorP[TorsPChoosed].y &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
					mouse.x >= LancerG[i].x &&
					mouse.x <= LancerG[i].x + LancerG[i].w &&
					mouse.y >= LancerG[i].y &&
					mouse.y <= LancerG[i].y + LancerG[i].h ||
					mouse.x >= TorP[TorsPChoosed].x  &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.y <= TorP[TorsPChoosed].y &&
					mouse.y >= TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
					mouse.x >= LancerG[i].x &&
					mouse.x <= LancerG[i].x + LancerG[i].w &&
					mouse.y >= LancerG[i].y &&
					mouse.y <= LancerG[i].y + LancerG[i].h ||
					mouse.x >= TorP[TorsPChoosed].x &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.y >= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h  &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
					mouse.x >= LancerG[i].x &&
					mouse.x <= LancerG[i].x + LancerG[i].w &&
					mouse.y >= LancerG[i].y &&
					mouse.y <= LancerG[i].y + LancerG[i].h ||
					mouse.x >= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
					mouse.y <= TorP[TorsPChoosed].y&
					mouse.y >= TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
					mouse.x >= LancerG[i].x &&
					mouse.x <= LancerG[i].x + LancerG[i].w &&
					mouse.y >= LancerG[i].y &&
					mouse.y <= LancerG[i].y + LancerG[i].h ||
					mouse.x <= TorP[TorsPChoosed].x &&
					mouse.x >= TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
					mouse.y <= TorP[TorsPChoosed].y &&
					mouse.y >= TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
					mouse.x >= LancerG[i].x &&
					mouse.x <= LancerG[i].x + LancerG[i].w &&
					mouse.y >= LancerG[i].y &&
					mouse.y <= LancerG[i].y + LancerG[i].h ||
					mouse.x <= TorP[TorsPChoosed].x &&
					mouse.x >= TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
					mouse.y >= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
					mouse.x >= LancerG[i].x &&
					mouse.x <= LancerG[i].x + LancerG[i].w &&
					mouse.y >= LancerG[i].y &&
					mouse.y <= LancerG[i].y + LancerG[i].h ||
					mouse.x >= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
					mouse.x <= TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
					mouse.y >= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
					mouse.y <= TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
					mouse.x >= LancerG[i].x &&
					mouse.x <= LancerG[i].x + LancerG[i].w &&
					mouse.y >= LancerG[i].y &&
					mouse.y <= LancerG[i].y + LancerG[i].h)
					{
						if(Math.floor(randomRange(0,99)<20))
						{
							LancerG[i].life -= 24;
							if(!PTBR)
							{
								newLine("Golpe Critico! Lanceiro Grego perde 24 pontos de vida.");
							}
							else
								newLine("Critical attack! - Greek Lancer lose 24 life points.");
						}
						else
						{
							damage = Math.floor(randomRange(10,20));
							LancerG[i].life -= damage;
							if(!PTBR)
							{
								newLine("Golpe Normal - Lanceiro Grego perde "+damage+" pontos de vida.")
							}
							else
								newLine("Normal attack - Greek Lancer lose "+damage+" life points.");
						}
						Click_TP = 0;	
						Vez_Gregos = true;
						Vez_Persas = false;	
					}
					if(mouse.x > TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*3 &&
						mouse.y > TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*3 &&
						mouse.x >= LancerG[i].x &&
						mouse.x <= LancerG[i].x + LancerG[i].w &&
						mouse.y >= LancerG[i].y &&
						mouse.y <= LancerG[i].y + LancerG[i].h ||
						mouse.x < TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
						mouse.x > TorP[TorsPChoosed].x - TorP[TorsPChoosed].w*2 &&
						mouse.y > TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*3 &&
						mouse.x >= LancerG[i].x &&
						mouse.x <= LancerG[i].x + LancerG[i].w &&
						mouse.y >= LancerG[i].y &&
						mouse.y <= LancerG[i].y + LancerG[i].h ||
						mouse.x < TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
						mouse.x > TorP[TorsPChoosed].x - TorP[TorsPChoosed].w*2 &&
						mouse.y < TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
						mouse.y > TorP[TorsPChoosed].y - TorP[TorsPChoosed].h*2 &&
						mouse.x >= LancerG[i].x &&
						mouse.x <= LancerG[i].x + LancerG[i].w &&
						mouse.y >= LancerG[i].y &&
						mouse.y <= LancerG[i].y + LancerG[i].h ||
						mouse.x > TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*3 &&
						mouse.y < TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
						mouse.y > TorP[TorsPChoosed].y - TorP[TorsPChoosed].h*2 &&
						mouse.x >= LancerG[i].x &&
						mouse.x <= LancerG[i].x + LancerG[i].w &&
						mouse.y >= LancerG[i].y &&
						mouse.y <= LancerG[i].y + LancerG[i].h ||
						mouse.x > TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*2 &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w*3 &&
						mouse.y > TorP[TorsPChoosed].y  &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
						mouse.x >= LancerG[i].x &&
						mouse.x <= LancerG[i].x + LancerG[i].w &&
						mouse.y >= LancerG[i].y &&
						mouse.y <= LancerG[i].y + LancerG[i].h ||
						mouse.x < TorP[TorsPChoosed].x - TorP[TorsPChoosed].w &&
						mouse.x > TorP[TorsPChoosed].x - TorP[TorsPChoosed].w*2 &&
						mouse.y > TorP[TorsPChoosed].y  &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h &&
						mouse.x >= LancerG[i].x &&
						mouse.x <= LancerG[i].x + LancerG[i].w &&
						mouse.y >= LancerG[i].y &&
						mouse.y <= LancerG[i].y + LancerG[i].h ||
						mouse.x > TorP[TorsPChoosed].x &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
						mouse.y < TorP[TorsPChoosed].y - TorP[TorsPChoosed].h &&
						mouse.y > TorP[TorsPChoosed].y - TorP[TorsPChoosed].h*2 &&
						mouse.x >= LancerG[i].x &&
						mouse.x <= LancerG[i].x + LancerG[i].w &&
						mouse.y >= LancerG[i].y &&
						mouse.y <= LancerG[i].y + LancerG[i].h ||
						mouse.x > TorP[TorsPChoosed].x &&
						mouse.x < TorP[TorsPChoosed].x + TorP[TorsPChoosed].w &&
						mouse.y > TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*2 &&
						mouse.y < TorP[TorsPChoosed].y + TorP[TorsPChoosed].h*3 &&
						mouse.x >= LancerG[i].x &&
						mouse.x <= LancerG[i].x + LancerG[i].w &&
						mouse.y >= LancerG[i].y &&
						mouse.y <= LancerG[i].y + LancerG[i].h)
						{
							damage1 = Math.floor(randomRange(0,5));
							if(Math.floor(randomRange(0,99)<20))
							{
								LancerG[i].life -= 24;
								if(!PTBR)
								{
									newLine("Golpe Critico! Lanceiro Grego perde 24 pontos de vida.");
								}
								else
									newLine("Critical attack! - Greek Lancer lose 24 life points.");
							}
							else
							{
								damage = Math.floor(randomRange(6,16));
								LancerG[i].life -= damage;
								if(!PTBR)
								{
									newLine("Golpe Normal - Lanceiro Grego perde "+damage+" pontos de vida.")
								}
								else
									newLine("Normal attack - Greek Lancer lose "+damage+" life points.");
							}
							Click_TP = 0;	
							Vez_Gregos = true;
							Vez_Persas = false;	
						}
				}
			
			}
		}
		
}



function DieTowers()
{
	for(var i = 0; i < TorP.length; i++) 
	{
		if(TorP[i].life <= 0) TorP[i].dead = true;	
		if(TorP[i].dead)
		{
			TorP[i].x = 0;
			TorP[i].y = 0;
			TorP[i].w = 0;
			TorP[i].h = 0;
			TorP[i].life = 0;
		}		
	}
	for(var i = 0; i < TorG.length; i++) 
	{
		if(TorG[i].life <= 0) TorG[i].dead = true;
		if(TorG[i].dead)
		{
			TorG[i].x = 0;
			TorG[i].y = 0;
			TorG[i].w = 0;
			TorG[i].h = 0;
			TorG[i].life = 0;
		}
	}
}
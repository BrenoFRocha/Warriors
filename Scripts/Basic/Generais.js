var PTBR = true;
var ENUS = false;
var limit_down = 451;
var limit_right = 551;

function GnrlsP(GnrlP_x, GnrlP_y, GnrlP_w, GnrlP_h, GnrlP_l)
{	
	this.x = GnrlP_x;
	this.y = GnrlP_y;
	this.w = GnrlP_w;
	this.h = GnrlP_h;
	this.life = GnrlP_l;
	this.dead = false;
	this.onClicked = false;;
	this.GnrlP = new Image;
	if(PTBR)
	{
		this.GnrlP.src = "Images/General_PersaPT.png";	
	}
	if(ENUS)
	{
		this.GnrlP.src = "Images/General_PersaEN.png";
	}
	this.update = function()
	{
		
	}
	
	this.draw = function(ctx)
	{					
		ctx.drawImage(this.GnrlP, this.x, this.y, this.w, this.h);	
	}
}

var GnrlGChoosed;
var GnrlPChoosed;
var MovG = new Image;
MovG.src = "Images/Celula_M.png";
var AtkG = new Image;
//AtkG.src = "Images/Celula_A.png";

function GnrlsG(GnrlG_x, GnrlG_y, GnrlG_w, GnrlG_h, GnrlG_l)
{	
	this.x = GnrlG_x;
	this.y = GnrlG_y;
	this.w = GnrlG_w;
	this.h = GnrlG_h;
	this.life = GnrlG_l;
	this.dead = false;
	this.onClicked = false;;
	this.GnrlG = new Image;
	if(PTBR)
	{
		this.GnrlG.src = "Images/General_GregoPT.png";	
	}
	if(ENUS)
	{
		this.GnrlG.src = "Images/General_GregoEN.png";	
	}
	this.update = function()
	{
		
	}
	
	this.draw = function(ctx)
	{					
		ctx.drawImage(this.GnrlG, this.x, this.y, this.w, this.h);	
	}
}

{//General Persa
	var GnrlP_x = [301];
	var GnrlP = [];
	var Click_GP = 0;
	
	for(var i = 0; i < 1; i++) 
	{
		GnrlP[i] = new GnrlsP(GnrlP_x[i], 101, 48, 48, 55);			
	}				
}

{//General Grego
	var GnrlG_x = [251];
	var GnrlG = [];
	var Click_GG = 0;
	
	for(var i = 0; i < 1; i++) 
	{
		GnrlG[i] = new GnrlsG(GnrlG_x[i], limit_down, 48, 48, 55);			
	}				
}
function updateGnrls()
{
	for(var i = 0; i < GnrlG.length; i++) 
	{
		if(mouse.press && GnrlG[i].dead == false &&
		mouse.x >= GnrlG[i].x &&
		mouse.x <= GnrlG[i].x + GnrlG[i].w &&
		mouse.y >= GnrlG[i].y &&
		mouse.y <= GnrlG[i].y + GnrlG[i].h)				
		{
			GnrlGChoosed = i;
			InfoGnrlG = true;
			InfoArcG = false;		
			InfoKingG = false;
			InfoLancerG = false;
			InfoKntG = false;
			InfoTorG = false;
			InfoWallG = false;
		}
	}
	for(var i = 0; i < GnrlP.length; i++) 
	{
		if(mouse.press && GnrlP[i].dead == false &&
		mouse.x >= GnrlP[i].x &&
		mouse.x <= GnrlP[i].x + GnrlP[i].w &&
		mouse.y >= GnrlP[i].y &&
		mouse.y <= GnrlP[i].y + GnrlP[i].h)				
		{
			GnrlPChoosed = i;
			InfoGnrlP = true;
			InfoArcP = false;
			InfoLancerP = false;
			InfoTorP = false;
			InfoKingP = false;
			InfoKntP = false;
			InfoWallP = false;
		}
	}
}
function UpdateGnrlG()
{	
	
	
	if(Vez_Gregos)
	{
		for(var i = 0; i < GnrlG.length; i++) 
		{
			if(mouse.press && GnrlG[i].dead == false &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h)				
			{			
				GnrlGChoosed = i;
				Click_GG += 1;		
				Click_AG = 0;
				Click_LG = 0;  
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
function UpdateGnrlP()
{
	if(Vez_Persas)
	{
		for(var i = 0; i < GnrlP.length; i++) 
		{
			if(mouse.press && GnrlP[i].dead == false &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h)				
			{				
				GnrlPChoosed = i;			
				Click_GP += 1;		
				Click_AP = 0;
				Click_LP = 0;  
				Click_TP = 0; 
				Click_CP = 0;  
				Click_KP = 0;
				Click_CP = 0;
				Click_AP = 0;
				Click_LP = 0;  
				Click_TP = 0; 
				Click_GG = 0;  
				Click_KP = 0;
				mouse.press = false;
			}		
		}
	}	
}

function PossibilitiesG()
{
	if(Vez_Gregos)
	{
		if(Click_GG == 1)
		{
			if(GnrlG[GnrlGChoosed].y < limit_down)
			{
				context.drawImage(MovG, GnrlG[GnrlGChoosed].x + 50, GnrlG[GnrlGChoosed].y + 50, GnrlG[GnrlGChoosed].w, GnrlG[GnrlGChoosed].h);
				context.drawImage(MovG, GnrlG[GnrlGChoosed].x - 50, GnrlG[GnrlGChoosed].y + 50, GnrlG[GnrlGChoosed].w, GnrlG[GnrlGChoosed].h);
			}
			if(GnrlG[GnrlGChoosed].y < limit_down-50)
			{
				context.drawImage(MovG, GnrlG[GnrlGChoosed].x - 100, GnrlG[GnrlGChoosed].y + 100, GnrlG[GnrlGChoosed].w, GnrlG[GnrlGChoosed].h);
				context.drawImage(MovG, GnrlG[GnrlGChoosed].x + 100, GnrlG[GnrlGChoosed].y + 100, GnrlG[GnrlGChoosed].w, GnrlG[GnrlGChoosed].h);
			}
			if(GnrlG[GnrlGChoosed].y > 101)
			{
				context.drawImage(MovG, GnrlG[GnrlGChoosed].x - 50, GnrlG[GnrlGChoosed].y - 50, GnrlG[GnrlGChoosed].w, GnrlG[GnrlGChoosed].h);
				context.drawImage(MovG, GnrlG[GnrlGChoosed].x + 50, GnrlG[GnrlGChoosed].y - 50, GnrlG[GnrlGChoosed].w, GnrlG[GnrlGChoosed].h);
			}
			if(GnrlG[GnrlGChoosed].y > 151)
			{
				context.drawImage(MovG, GnrlG[GnrlGChoosed].x - 100, GnrlG[GnrlGChoosed].y - 100, GnrlG[GnrlGChoosed].w, GnrlG[GnrlGChoosed].h);
				context.drawImage(MovG, GnrlG[GnrlGChoosed].x + 100, GnrlG[GnrlGChoosed].y - 100, GnrlG[GnrlGChoosed].w, GnrlG[GnrlGChoosed].h);
			}
			
			if(mouse.x > GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w + 2 &&
			mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w*2 &&
			mouse.y < GnrlG[GnrlGChoosed].y - 2 &&
			mouse.y > GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h &&
			GnrlG[GnrlGChoosed].x < limit_right &&
			GnrlG[GnrlGChoosed].y > 101)
			{
				GnrlG[GnrlGChoosed].x += 50;
				GnrlG[GnrlGChoosed].y -= 50;
				if(GregosCouldMoveG())
				{
					GnrlG[GnrlGChoosed].x -= 50;
					GnrlG[GnrlGChoosed].y += 50;
					Click_GG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;	
				}
				else
				{
					Click_GG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;		
				}
			}
			else if(mouse.x < GnrlG[GnrlGChoosed].x - 2 &&
			mouse.x > GnrlG[GnrlGChoosed].x - GnrlG[GnrlGChoosed].w &&
			mouse.y < GnrlG[GnrlGChoosed].y - 2 &&
			mouse.y > GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h &&
			GnrlG[GnrlGChoosed].y > 101)
			{
				GnrlG[GnrlGChoosed].x -= 50;
				GnrlG[GnrlGChoosed].y -= 50;
				
				if(GregosCouldMoveG())
				{
					GnrlG[GnrlGChoosed].x += 50;
					GnrlG[GnrlGChoosed].y += 50;
					Click_GG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;	
				}
				else
				{
					Click_GG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;		
				}
			}
			else if(mouse.x < GnrlG[GnrlGChoosed].x - 2 &&
			mouse.x > GnrlG[GnrlGChoosed].x - GnrlG[GnrlGChoosed].w &&
			mouse.y > GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h + 2 &&
			mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h*2 &&
			GnrlG[GnrlGChoosed].y < limit_down)
			{
				GnrlG[GnrlGChoosed].x -= 50;
				GnrlG[GnrlGChoosed].y += 50;
				
				if(GregosCouldMoveG())
				{
					GnrlG[GnrlGChoosed].x += 50;
					GnrlG[GnrlGChoosed].y -= 50;
					Click_GG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;	
				}
				else
				{
					Click_GG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;		
				}
			}
			else if(mouse.x > GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w - 3 &&
			mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w*2 &&
			mouse.y > GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h + 3 &&
			mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h*2 &&
			GnrlG[GnrlGChoosed].y < limit_down &&
			GnrlG[GnrlGChoosed].x < limit_right)
			{
				GnrlG[GnrlGChoosed].x += 50;
				GnrlG[GnrlGChoosed].y += 50;
				if(GregosCouldMoveG())
				{
					GnrlG[GnrlGChoosed].x -= 50;
					GnrlG[GnrlGChoosed].y -= 50;
					Click_GG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;	
				}
				else
				{
					Click_GG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;		
				}
			}
			
			else if(mouse.x > GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w*2 + 3 &&
			mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w*3 &&
			mouse.y < GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h - 3&&
			mouse.y > GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h*2 &&
			GnrlG[GnrlGChoosed].x < limit_right-50 &&
			GnrlG[GnrlGChoosed].y > 151)
			{
				GnrlG[GnrlGChoosed].x += 100;
				GnrlG[GnrlGChoosed].y -= 100;
				if(GregosCouldMoveG() || TreeA.x + 50 == GnrlG[GnrlGChoosed].x && TreeA.y - 50 == GnrlG[GnrlGChoosed].y ||
				TreeB.x + 50 == GnrlG[GnrlGChoosed].x && TreeB.y - 50 == GnrlG[GnrlGChoosed].y ||
				TreeC.x + 50 == GnrlG[GnrlGChoosed].x && TreeC.y - 50 == GnrlG[GnrlGChoosed].y ||
				TreeD.x + 50 == GnrlG[GnrlGChoosed].x && TreeD.y - 50 == GnrlG[GnrlGChoosed].y ||
				TreeE.x + 50 == GnrlG[GnrlGChoosed].x && TreeE.y - 50 == GnrlG[GnrlGChoosed].y ||
				TreeF.x + 50 == GnrlG[GnrlGChoosed].x && TreeF.y - 50 == GnrlG[GnrlGChoosed].y)
				{
					GnrlG[GnrlGChoosed].x -= 100;
					GnrlG[GnrlGChoosed].y += 100;
					Click_GG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;	
				}
				else
				{
					Click_GG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;		
				}
			}
			else if(mouse.x < GnrlG[GnrlGChoosed].x - GnrlG[GnrlGChoosed].w - 3 &&
			mouse.x > GnrlG[GnrlGChoosed].x - GnrlG[GnrlGChoosed].w*2 &&
			mouse.y < GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h - 3 &&
			mouse.y > GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h*2 &&
			GnrlG[GnrlGChoosed].y > 151)
			{
				GnrlG[GnrlGChoosed].x -= 100;
				GnrlG[GnrlGChoosed].y -= 100;
				if(GregosCouldMoveG() || TreeA.x - 50 == GnrlG[GnrlGChoosed].x && TreeA.y - 50 == GnrlG[GnrlGChoosed].y ||
				TreeB.x - 50 == GnrlG[GnrlGChoosed].x && TreeB.y - 50 == GnrlG[GnrlGChoosed].y ||
				TreeC.x - 50 == GnrlG[GnrlGChoosed].x && TreeC.y - 50 == GnrlG[GnrlGChoosed].y ||
				TreeD.x - 50 == GnrlG[GnrlGChoosed].x && TreeD.y - 50 == GnrlG[GnrlGChoosed].y ||
				TreeE.x - 50 == GnrlG[GnrlGChoosed].x && TreeE.y - 50 == GnrlG[GnrlGChoosed].y ||
				TreeF.x - 50 == GnrlG[GnrlGChoosed].x && TreeF.y - 50 == GnrlG[GnrlGChoosed].y)
				{
					GnrlG[GnrlGChoosed].x += 100;
					GnrlG[GnrlGChoosed].y += 100;
					Click_GG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;	
				}
				else
				{
					Click_GG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;		
				}
			}
			else if(mouse.x < GnrlG[GnrlGChoosed].x - GnrlG[GnrlGChoosed].w - 3 &&
			mouse.x > GnrlG[GnrlGChoosed].x - GnrlG[GnrlGChoosed].w*2 &&
			mouse.y > GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h*2 + 3 &&
			mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h*3 &&
			GnrlG[GnrlGChoosed].y < limit_down-50) 
			{
				GnrlG[GnrlGChoosed].x -= 100;
				GnrlG[GnrlGChoosed].y += 100;
				if(GregosCouldMoveG() || TreeA.x - 50 == GnrlG[GnrlGChoosed].x && TreeA.y + 50 == GnrlG[GnrlGChoosed].y ||
				TreeB.x - 50 == GnrlG[GnrlGChoosed].x && TreeB.y + 50 == GnrlG[GnrlGChoosed].y ||
				TreeC.x - 50 == GnrlG[GnrlGChoosed].x && TreeC.y + 50 == GnrlG[GnrlGChoosed].y ||
				TreeD.x - 50 == GnrlG[GnrlGChoosed].x && TreeD.y + 50 == GnrlG[GnrlGChoosed].y ||
				TreeE.x - 50 == GnrlG[GnrlGChoosed].x && TreeE.y + 50 == GnrlG[GnrlGChoosed].y ||
				TreeF.x - 50 == GnrlG[GnrlGChoosed].x && TreeF.y + 50 == GnrlG[GnrlGChoosed].y)
				{
					GnrlG[GnrlGChoosed].x += 100;
					GnrlG[GnrlGChoosed].y -= 100;
					Click_GG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;	
				}
				else
				{
					Click_GG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;		
				}
			}
			else if(mouse.x > GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w*2 + 3 &&
			mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w*3 &&
			mouse.y > GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h*2 + 3 &&
			mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h*3 &&
			GnrlG[GnrlGChoosed].y < limit_down-50 &&
			GnrlG[GnrlGChoosed].x < limit_right-50)
			{
				GnrlG[GnrlGChoosed].x += 100;
				GnrlG[GnrlGChoosed].y += 100;
				if(GregosCouldMoveG() || TreeA.x + 50 == GnrlG[GnrlGChoosed].x && TreeA.y + 50 == GnrlG[GnrlGChoosed].y ||
				TreeB.x + 50 == GnrlG[GnrlGChoosed].x && TreeB.y + 50 == GnrlG[GnrlGChoosed].y ||
				TreeC.x + 50 == GnrlG[GnrlGChoosed].x && TreeC.y + 50 == GnrlG[GnrlGChoosed].y ||
				TreeD.x + 50 == GnrlG[GnrlGChoosed].x && TreeD.y + 50 == GnrlG[GnrlGChoosed].y ||
				TreeE.x + 50 == GnrlG[GnrlGChoosed].x && TreeE.y + 50 == GnrlG[GnrlGChoosed].y ||
				TreeF.x + 50 == GnrlG[GnrlGChoosed].x && TreeF.y + 50 == GnrlG[GnrlGChoosed].y)
				{
					GnrlG[GnrlGChoosed].x -= 100;
					GnrlG[GnrlGChoosed].y -= 100;
					Click_GG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;	
				}
				else
				{
					Click_GG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;		
				}
			}	
		}
		
		else if(Click_GG == 2)
		{
			context.drawImage(AtkG,GnrlG[GnrlGChoosed].x + 100, GnrlG[GnrlGChoosed].y, GnrlG[GnrlGChoosed].w, GnrlG[GnrlGChoosed].h);
			context.drawImage(AtkG,GnrlG[GnrlGChoosed].x + 50, GnrlG[GnrlGChoosed].y, GnrlG[GnrlGChoosed].w, GnrlG[GnrlGChoosed].h);
			context.drawImage(AtkG,GnrlG[GnrlGChoosed].x - 100, GnrlG[GnrlGChoosed].y, GnrlG[GnrlGChoosed].w, GnrlG[GnrlGChoosed].h);
			context.drawImage(AtkG,GnrlG[GnrlGChoosed].x - 50, GnrlG[GnrlGChoosed].y, GnrlG[GnrlGChoosed].w, GnrlG[GnrlGChoosed].h);
			context.drawImage(AtkG,GnrlG[GnrlGChoosed].x , GnrlG[GnrlGChoosed].y + 100, GnrlG[GnrlGChoosed].w, GnrlG[GnrlGChoosed].h);
			context.drawImage(AtkG,GnrlG[GnrlGChoosed].x , GnrlG[GnrlGChoosed].y + 50, GnrlG[GnrlGChoosed].w, GnrlG[GnrlGChoosed].h);
			context.drawImage(AtkG,GnrlG[GnrlGChoosed].x , GnrlG[GnrlGChoosed].y - 100, GnrlG[GnrlGChoosed].w, GnrlG[GnrlGChoosed].h);
			context.drawImage(AtkG,GnrlG[GnrlGChoosed].x , GnrlG[GnrlGChoosed].y - 50, GnrlG[GnrlGChoosed].w, GnrlG[GnrlGChoosed].h)
			
			if(mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y < GnrlG[GnrlGChoosed].y &&
				mouse.y > GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h &&
				mouse.x >= WallP_x &&
				mouse.x <= WallP_x + WallP_w &&
				mouse.y >= WallP_y &&
				mouse.y <= WallP_y + WallP_h ||
				mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y < GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h &&
				mouse.y > GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h*2 &&
				mouse.x >= WallP_x &&
				mouse.x <= WallP_x + WallP_w &&
				mouse.y >= WallP_y &&
				mouse.y <= WallP_y + WallP_h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						WallP_life -= 29;
						if(PTBR)
						{
							newLine("Golpe Critico! Muralha Persa perde 29  pontos de vida.");
						}
						else
							newLine("Critical attack! - Persian Wall lose 29 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(16,20))
						WallP_life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - Muralha Persa perde "+damage+" pontos de vida.");
						}
						else
							newLine("Normal attack - Persian Wall lose "+damage+" life points.");
					}
					Click_GG = 0;	
					Vez_Persas = true;		
					Vez_Gregos = false;
					
				}
			
			for(var i = 0; i < LancerP.length; i++)
			{
				if(mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y < GnrlG[GnrlGChoosed].y &&
				mouse.y > GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h ||
				mouse.x < GnrlG[GnrlGChoosed].x  &&
				mouse.x > GnrlG[GnrlGChoosed].x - GnrlG[GnrlGChoosed].w &&
				mouse.y > GnrlG[GnrlGChoosed].y &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h||
				mouse.x > GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w*2 &&
				mouse.y > GnrlG[GnrlGChoosed].y &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h ||
				mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y > GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h*2 &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h ||
				mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y < GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h &&
				mouse.y > GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h*2 &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h ||
				mouse.x < GnrlG[GnrlGChoosed].x - GnrlG[GnrlGChoosed].w &&
				mouse.x > GnrlG[GnrlGChoosed].x - GnrlG[GnrlGChoosed].w*2 &&
				mouse.y > GnrlG[GnrlGChoosed].y &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h||
				mouse.x > GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w*2 &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w*3 &&
				mouse.y > GnrlG[GnrlGChoosed].y &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h ||
				mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y > GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h*2 &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h*3 &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						LancerP[i].life -= 29;
						if(PTBR)
						{
							newLine("Golpe Critico! Lanceiro Persa perde 29 pontos de vida.");
						}
						else
							newLine("Critical attack! - Persian Lancer lose 29 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(20,24))
						LancerP[i].life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - Lanceiro Persa perde "+damage+" pontos de vida.");
						}
						else
							newLine("Normal attack - Persian Lancer lose "+damage+" life points.");
					}
					Click_GG = 0;	
					Vez_Gregos = false;						
					Vez_Persas = true;				
				}
			}
		
			for(var i = 0; i < ArcP.length; i++)
			{
				if(mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y < GnrlG[GnrlGChoosed].y &&
				mouse.y > GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h ||
				mouse.x < GnrlG[GnrlGChoosed].x  &&
				mouse.x > GnrlG[GnrlGChoosed].x - GnrlG[GnrlGChoosed].w &&
				mouse.y > GnrlG[GnrlGChoosed].y &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h||
				mouse.x > GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w*2 &&
				mouse.y > GnrlG[GnrlGChoosed].y &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h ||
				mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y > GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h*2 &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h ||
				mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y < GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h &&
				mouse.y > GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h*2 &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h ||
				mouse.x < GnrlG[GnrlGChoosed].x - GnrlG[GnrlGChoosed].w &&
				mouse.x > GnrlG[GnrlGChoosed].x - GnrlG[GnrlGChoosed].w*2 &&
				mouse.y > GnrlG[GnrlGChoosed].y &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h||
				mouse.x > GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w*2 &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w*3 &&
				mouse.y > GnrlG[GnrlGChoosed].y &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h ||
				mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y > GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h*2 &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h*3 &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						ArcP[i].life -= 29;
						if(PTBR)
						{
							newLine("Golpe Critico! Arqueiro Persa perde 29 pontos de vida.");
						}
						else
								newLine("Critical attack! - Persian Archer lose 29 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(20,24))
						ArcP[i].life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - Arqueiro Persa perde "+damage+" pontos de vida.");
						}
						else
							newLine("Normal attack - Persian Archer lose "+damage+" life points.");
					}
					Click_GG = 0;	
					Vez_Gregos = false;						
					Vez_Persas = true;				
				}
			}
			
			for(var i = 0; i < TorP.length; i++)
			{
				if(mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y < GnrlG[GnrlGChoosed].y &&
				mouse.y > GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h ||
				mouse.x < GnrlG[GnrlGChoosed].x  &&
				mouse.x > GnrlG[GnrlGChoosed].x - GnrlG[GnrlGChoosed].w &&
				mouse.y > GnrlG[GnrlGChoosed].y &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h||
				mouse.x > GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w*2 &&
				mouse.y > GnrlG[GnrlGChoosed].y &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h ||
				mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y > GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h*2 &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h ||
				mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y < GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h &&
				mouse.y > GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h*2 &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h ||
				mouse.x < GnrlG[GnrlGChoosed].x - GnrlG[GnrlGChoosed].w &&
				mouse.x > GnrlG[GnrlGChoosed].x - GnrlG[GnrlGChoosed].w*2 &&
				mouse.y > GnrlG[GnrlGChoosed].y &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h||
				mouse.x > GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w*2 &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w*3 &&
				mouse.y > GnrlG[GnrlGChoosed].y &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h ||
				mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y > GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h*2 &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h*3 &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						TorP[i].life -= 29;
						if(PTBR)
						{
							newLine("Golpe Critico! Torre Persa perde 29 pontos de vida.");
						}
						else
							newLine("Critical attack! - Persian Tower lose 29 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(23,27))
						TorP[i].life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - Torre Persa perde "+damage+" pontos de vida.");
						}
							else
												newLine("Normal attack - Persian Tower lose "+damage+" life points.");
					}
					Click_GG = 0;	
					Vez_Gregos = false;						
					Vez_Persas = true;				
				}
			}
			
			for(var i = 0; i < KingP.length; i++)
			{
				if(mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y < GnrlG[GnrlGChoosed].y &&
				mouse.y > GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h &&
				mouse.x >= KingP[i].x &&
				mouse.x <= KingP[i].x + KingP[i].w &&
				mouse.y >= KingP[i].y &&
				mouse.y <= KingP[i].y + KingP[i].h ||
				mouse.x < GnrlG[GnrlGChoosed].x  &&
				mouse.x > GnrlG[GnrlGChoosed].x - GnrlG[GnrlGChoosed].w &&
				mouse.y > GnrlG[GnrlGChoosed].y &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.x >= KingP[i].x &&
				mouse.x <= KingP[i].x + KingP[i].w &&
				mouse.y >= KingP[i].y &&
				mouse.y <= KingP[i].y + KingP[i].h||
				mouse.x > GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w*2 &&
				mouse.y > GnrlG[GnrlGChoosed].y &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.x >= KingP[i].x &&
				mouse.x <= KingP[i].x + KingP[i].w &&
				mouse.y >= KingP[i].y &&
				mouse.y <= KingP[i].y + KingP[i].h ||
				mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y > GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h*2 &&
				mouse.x >= KingP[i].x &&
				mouse.x <= KingP[i].x + KingP[i].w &&
				mouse.y >= KingP[i].y &&
				mouse.y <= KingP[i].y + KingP[i].h ||
				mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y < GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h &&
				mouse.y > GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h*2 &&
				mouse.x >= KingP[i].x &&
				mouse.x <= KingP[i].x + KingP[i].w &&
				mouse.y >= KingP[i].y &&
				mouse.y <= KingP[i].y + KingP[i].h ||
				mouse.x < GnrlG[GnrlGChoosed].x - GnrlG[GnrlGChoosed].w &&
				mouse.x > GnrlG[GnrlGChoosed].x - GnrlG[GnrlGChoosed].w*2 &&
				mouse.y > GnrlG[GnrlGChoosed].y &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.x >= KingP[i].x &&
				mouse.x <= KingP[i].x + KingP[i].w &&
				mouse.y >= KingP[i].y &&
				mouse.y <= KingP[i].y + KingP[i].h||
				mouse.x > GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w*2 &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w*3 &&
				mouse.y > GnrlG[GnrlGChoosed].y &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.x >= KingP[i].x &&
				mouse.x <= KingP[i].x + KingP[i].w &&
				mouse.y >= KingP[i].y &&
				mouse.y <= KingP[i].y + KingP[i].h ||
				mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y > GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h*2 &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h*3 &&
				mouse.x >= KingP[i].x &&
				mouse.x <= KingP[i].x + KingP[i].w &&
				mouse.y >= KingP[i].y &&
				mouse.y <= KingP[i].y + KingP[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						KingP[i].life -= 29;
						if(PTBR)
						{
							newLine("Golpe Critico! Rei Persa perde 29 pontos de vida.");
						}
						else
								newLine("Critical attack! - Persian King lose 29 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(20,24))
						KingP[i].life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - Rei Persa perde "+damage+" pontos de vida.");
						}
						else
													newLine("Normal attack - Persian King lose "+damage+" life points.");
					}
					Click_GG = 0;	
					Vez_Gregos = false;						
					Vez_Persas = true;				
				}
			}
			
			for(var i = 0; i < KntP.length; i++)
			{
				if(mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y < GnrlG[GnrlGChoosed].y &&
				mouse.y > GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h ||
				mouse.x < GnrlG[GnrlGChoosed].x  &&
				mouse.x > GnrlG[GnrlGChoosed].x - GnrlG[GnrlGChoosed].w &&
				mouse.y > GnrlG[GnrlGChoosed].y &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h||
				mouse.x > GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w*2 &&
				mouse.y > GnrlG[GnrlGChoosed].y &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h ||
				mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y > GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h*2 &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h ||
				mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y < GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h &&
				mouse.y > GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h*2 &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h ||
				mouse.x < GnrlG[GnrlGChoosed].x - GnrlG[GnrlGChoosed].w &&
				mouse.x > GnrlG[GnrlGChoosed].x - GnrlG[GnrlGChoosed].w*2 &&
				mouse.y > GnrlG[GnrlGChoosed].y &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h||
				mouse.x > GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w*2 &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w*3 &&
				mouse.y > GnrlG[GnrlGChoosed].y &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h ||
				mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y > GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h*2 &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h*3 &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						KntP[i].life -= 29;
						if(PTBR)
						{
							newLine("Golpe Critico! Cavaleiro Persa perde 29 pontos de vida.");
						}
						else
								newLine("Critical attack! - Persian Knight lose 29 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(20,24))
						KntP[i].life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - Cavaleiro Persa perde "+damage+" pontos de vida.");
						}
						else
								newLine("Normal attack - Persian Knight lose "+damage+" life points.");
					}
					Click_GG = 0;	
					Vez_Gregos = false;						
					Vez_Persas = true;				
				}
			}
		
			for(var i = 0; i < GnrlP.length; i++)
			{
				if(mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y < GnrlG[GnrlGChoosed].y &&
				mouse.y > GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h ||
				mouse.x < GnrlG[GnrlGChoosed].x  &&
				mouse.x > GnrlG[GnrlGChoosed].x - GnrlG[GnrlGChoosed].w &&
				mouse.y > GnrlG[GnrlGChoosed].y &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h||
				mouse.x > GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w*2 &&
				mouse.y > GnrlG[GnrlGChoosed].y &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h ||
				mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y > GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h*2 &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h ||
				mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y < GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h &&
				mouse.y > GnrlG[GnrlGChoosed].y - GnrlG[GnrlGChoosed].h*2 &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h ||
				mouse.x < GnrlG[GnrlGChoosed].x - GnrlG[GnrlGChoosed].w &&
				mouse.x > GnrlG[GnrlGChoosed].x - GnrlG[GnrlGChoosed].w*2 &&
				mouse.y > GnrlG[GnrlGChoosed].y &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h||
				mouse.x > GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w*2 &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w*3 &&
				mouse.y > GnrlG[GnrlGChoosed].y &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h ||
				mouse.x > GnrlG[GnrlGChoosed].x &&
				mouse.x < GnrlG[GnrlGChoosed].x + GnrlG[GnrlGChoosed].w &&
				mouse.y > GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h*2 &&
				mouse.y < GnrlG[GnrlGChoosed].y + GnrlG[GnrlGChoosed].h*3 &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						GnrlP[i].life -= 29;
						if(PTBR)
						{
							newLine("Golpe Critico! General Persa perde 29 pontos de vida.");
						}
						else
							newLine("Critical attack! - Persian General lose 29 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(20,24))
						GnrlP[i].life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - General Persa perde "+damage+" pontos de vida.");
						}
						else
							newLine("Normal attack - Persian General lose "+damage+" life points.");
					}
					Click_GG = 0;	
					Vez_Gregos = false;						
					Vez_Persas = true;				
				}
			}
		
		}
	
	
	}
	else if(Vez_Persas)
	{
		if(Click_GP == 1)
		{
			if(GnrlP[GnrlPChoosed].y < limit_down)
			{
				context.drawImage(MovG, GnrlP[GnrlPChoosed].x + 50, GnrlP[GnrlPChoosed].y + 50, GnrlP[GnrlPChoosed].w, GnrlP[GnrlPChoosed].h);
				context.drawImage(MovG, GnrlP[GnrlPChoosed].x - 50, GnrlP[GnrlPChoosed].y + 50, GnrlP[GnrlPChoosed].w, GnrlP[GnrlPChoosed].h);
			}
			if(GnrlP[GnrlPChoosed].y < limit_down)
			{
				context.drawImage(MovG, GnrlP[GnrlPChoosed].x - 100, GnrlP[GnrlPChoosed].y + 100, GnrlP[GnrlPChoosed].w, GnrlP[GnrlPChoosed].h);
				context.drawImage(MovG, GnrlP[GnrlPChoosed].x + 100, GnrlP[GnrlPChoosed].y + 100, GnrlP[GnrlPChoosed].w, GnrlP[GnrlPChoosed].h);
			}
			if(GnrlP[GnrlPChoosed].y > 101)
			{
				context.drawImage(MovG, GnrlP[GnrlPChoosed].x - 50, GnrlP[GnrlPChoosed].y - 50, GnrlP[GnrlPChoosed].w, GnrlP[GnrlPChoosed].h);
				context.drawImage(MovG, GnrlP[GnrlPChoosed].x + 50, GnrlP[GnrlPChoosed].y - 50, GnrlP[GnrlPChoosed].w, GnrlP[GnrlPChoosed].h);
			}
			if(GnrlP[GnrlPChoosed].y > 151)
			{
				context.drawImage(MovG, GnrlP[GnrlPChoosed].x - 100, GnrlP[GnrlPChoosed].y - 100, GnrlP[GnrlPChoosed].w, GnrlP[GnrlPChoosed].h);
				context.drawImage(MovG, GnrlP[GnrlPChoosed].x + 100, GnrlP[GnrlPChoosed].y - 100, GnrlP[GnrlPChoosed].w, GnrlP[GnrlPChoosed].h);
			}
			
			if(mouse.x > GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w + 2 &&
			mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w*2 &&
			mouse.y < GnrlP[GnrlPChoosed].y - 2 &&
			mouse.y > GnrlP[GnrlPChoosed].y - GnrlP[GnrlPChoosed].h &&
			GnrlP[GnrlPChoosed].x < limit_right &&
			GnrlP[GnrlPChoosed].y > 101)
			{
				GnrlP[GnrlPChoosed].x += 50;
				GnrlP[GnrlPChoosed].y -= 50;
				if(PersasCouldMoveG())
				{
					GnrlP[GnrlPChoosed].x -= 50;
					GnrlP[GnrlPChoosed].y += 50;
					Click_GP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;	
				}
				else
				{
					Click_GP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;		
				}
			}
			else if(mouse.x < GnrlP[GnrlPChoosed].x - 2 &&
			mouse.x > GnrlP[GnrlPChoosed].x - GnrlP[GnrlPChoosed].w &&
			mouse.y < GnrlP[GnrlPChoosed].y - 2 &&
			mouse.y > GnrlP[GnrlPChoosed].y - GnrlP[GnrlPChoosed].h &&
			GnrlP[GnrlPChoosed].y > 101)
			{
				GnrlP[GnrlPChoosed].x -= 50;
				GnrlP[GnrlPChoosed].y -= 50;
				
				if(PersasCouldMoveG())
				{
					GnrlP[GnrlPChoosed].x += 50;
					GnrlP[GnrlPChoosed].y += 50;
					Click_GP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;	
				}
				else
				{
					Click_GP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;		
				}
			}
			else if(mouse.x < GnrlP[GnrlPChoosed].x - 2 &&
			mouse.x > GnrlP[GnrlPChoosed].x - GnrlP[GnrlPChoosed].w &&
			mouse.y > GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h + 2 &&
			mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*2 &&
			GnrlP[GnrlPChoosed].y < limit_down)
			{
				GnrlP[GnrlPChoosed].x -= 50;
				GnrlP[GnrlPChoosed].y += 50;
				
				if(PersasCouldMoveG())
				{
					GnrlP[GnrlPChoosed].x += 50;
					GnrlP[GnrlPChoosed].y -= 50;
					Click_GP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;	
				}
				else
				{
					Click_GP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;		
				}
			}
			else if(mouse.x > GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w - 3 &&
			mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w*2 &&
			mouse.y > GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h + 3 &&
			mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*2 &&
			GnrlP[GnrlPChoosed].y < limit_down &&
			GnrlP[GnrlPChoosed].x < limit_right)
			{
				GnrlP[GnrlPChoosed].x += 50;
				GnrlP[GnrlPChoosed].y += 50;
				if(PersasCouldMoveG())
				{
					GnrlP[GnrlPChoosed].x -= 50;
					GnrlP[GnrlPChoosed].y -= 50;
					Click_GP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;	
				}
				else
				{
					Click_GP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;		
				}
			}
			
			else if(mouse.x > GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w*2 + 3 &&
			mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w*3 &&
			mouse.y < GnrlP[GnrlPChoosed].y - GnrlP[GnrlPChoosed].h - 3&&
			mouse.y > GnrlP[GnrlPChoosed].y - GnrlP[GnrlPChoosed].h*2 &&
			GnrlP[GnrlPChoosed].x < limit_right-50 &&
			GnrlP[GnrlPChoosed].y > 151)
			{
				GnrlP[GnrlPChoosed].x += 100;
				GnrlP[GnrlPChoosed].y -= 100;
				if(PersasCouldMoveG() || TreeA.x + 50 == GnrlP[GnrlPChoosed].x && TreeA.y - 50 == GnrlP[GnrlPChoosed].y ||
				TreeB.x + 50 == GnrlP[GnrlPChoosed].x && TreeB.y - 50 == GnrlP[GnrlPChoosed].y ||
				TreeC.x + 50 == GnrlP[GnrlPChoosed].x && TreeC.y - 50 == GnrlP[GnrlPChoosed].y ||
				TreeD.x + 50 == GnrlP[GnrlPChoosed].x && TreeD.y - 50 == GnrlP[GnrlPChoosed].y ||
				TreeE.x + 50 == GnrlP[GnrlPChoosed].x && TreeE.y - 50 == GnrlP[GnrlPChoosed].y ||
				TreeF.x + 50 == GnrlP[GnrlPChoosed].x && TreeF.y - 50 == GnrlP[GnrlPChoosed].y)
				{
					GnrlP[GnrlPChoosed].x -= 100;
					GnrlP[GnrlPChoosed].y += 100;
					Click_GP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;	
				}
				else
				{
					Click_GP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;		
				}
			}
			else if(mouse.x < GnrlP[GnrlPChoosed].x - GnrlP[GnrlPChoosed].w - 3 &&
			mouse.x > GnrlP[GnrlPChoosed].x - GnrlP[GnrlPChoosed].w*2 &&
			mouse.y < GnrlP[GnrlPChoosed].y - GnrlP[GnrlPChoosed].h - 3 &&
			mouse.y > GnrlP[GnrlPChoosed].y - GnrlP[GnrlPChoosed].h*2 &&
			GnrlP[GnrlPChoosed].y > 151)
			{
				GnrlP[GnrlPChoosed].x -= 100;
				GnrlP[GnrlPChoosed].y -= 100;
				if(PersasCouldMoveG() || TreeA.x - 50 == GnrlP[GnrlPChoosed].x && TreeA.y - 50 == GnrlP[GnrlPChoosed].y ||
				TreeB.x - 50 == GnrlP[GnrlPChoosed].x && TreeB.y - 50 == GnrlP[GnrlPChoosed].y ||
				TreeC.x - 50 == GnrlP[GnrlPChoosed].x && TreeC.y - 50 == GnrlP[GnrlPChoosed].y ||
				TreeD.x - 50 == GnrlP[GnrlPChoosed].x && TreeD.y - 50 == GnrlP[GnrlPChoosed].y ||
				TreeE.x - 50 == GnrlP[GnrlPChoosed].x && TreeE.y - 50 == GnrlP[GnrlPChoosed].y ||
				TreeF.x - 50 == GnrlP[GnrlPChoosed].x && TreeF.y - 50 == GnrlP[GnrlPChoosed].y)
				{
					GnrlP[GnrlPChoosed].x += 100;
					GnrlP[GnrlPChoosed].y += 100;
					Click_GP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;	
				}
				else
				{
					Click_GP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;		
				}
			}
			else if(mouse.x < GnrlP[GnrlPChoosed].x - GnrlP[GnrlPChoosed].w - 3 &&
			mouse.x > GnrlP[GnrlPChoosed].x - GnrlP[GnrlPChoosed].w*2 &&
			mouse.y > GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*2 + 3 &&
			mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*3 &&
			GnrlP[GnrlPChoosed].y < limit_down-50) 
			{
				GnrlP[GnrlPChoosed].x -= 100;
				GnrlP[GnrlPChoosed].y += 100;
				if(PersasCouldMoveG() || TreeA.x - 50 == GnrlP[GnrlPChoosed].x && TreeA.y + 50 == GnrlP[GnrlPChoosed].y ||
				TreeB.x - 50 == GnrlP[GnrlPChoosed].x && TreeB.y + 50 == GnrlP[GnrlPChoosed].y ||
				TreeC.x - 50 == GnrlP[GnrlPChoosed].x && TreeC.y + 50 == GnrlP[GnrlPChoosed].y ||
				TreeD.x - 50 == GnrlP[GnrlPChoosed].x && TreeD.y + 50 == GnrlP[GnrlPChoosed].y ||
				TreeE.x - 50 == GnrlP[GnrlPChoosed].x && TreeE.y + 50 == GnrlP[GnrlPChoosed].y ||
				TreeF.x - 50 == GnrlP[GnrlPChoosed].x && TreeF.y + 50 == GnrlP[GnrlPChoosed].y)
				{
					GnrlP[GnrlPChoosed].x += 100;
					GnrlP[GnrlPChoosed].y -= 100;
					Click_GP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;	
				}
				else
				{
					Click_GP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;		
				}
			}
			else if(mouse.x > GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w*2 + 3 &&
			mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w*3 &&
			mouse.y > GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*2 + 3 &&
			mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*3 &&
			GnrlP[GnrlPChoosed].y < limit_down-50 &&
			GnrlP[GnrlPChoosed].x < limit_right-50)
			{
				GnrlP[GnrlPChoosed].x += 100;
				GnrlP[GnrlPChoosed].y += 100;
				if(PersasCouldMoveG()|| TreeA.x + 50 == GnrlP[GnrlPChoosed].x && TreeA.y + 50 == GnrlP[GnrlPChoosed].y ||
				TreeB.x + 50 == GnrlP[GnrlPChoosed].x && TreeB.y + 50 == GnrlP[GnrlPChoosed].y ||
				TreeC.x + 50 == GnrlP[GnrlPChoosed].x && TreeC.y + 50 == GnrlP[GnrlPChoosed].y ||
				TreeD.x + 50 == GnrlP[GnrlPChoosed].x && TreeD.y + 50 == GnrlP[GnrlPChoosed].y ||
				TreeE.x + 50 == GnrlP[GnrlPChoosed].x && TreeE.y + 50 == GnrlP[GnrlPChoosed].y ||
				TreeF.x + 50 == GnrlP[GnrlPChoosed].x && TreeF.y + 50 == GnrlP[GnrlPChoosed].y)
				{
					GnrlP[GnrlPChoosed].x -= 100;
					GnrlP[GnrlPChoosed].y -= 100;
					Click_GP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;	
				}
				else
				{
					Click_GP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;		
				}
			}	
		
		}
		
		else if(Click_GP == 2)
		{
			context.drawImage(AtkG,GnrlP[GnrlPChoosed].x + 100, GnrlP[GnrlPChoosed].y, GnrlP[GnrlPChoosed].w, GnrlP[GnrlPChoosed].h);
			context.drawImage(AtkG,GnrlP[GnrlPChoosed].x + 50, GnrlP[GnrlPChoosed].y, GnrlP[GnrlPChoosed].w, GnrlP[GnrlPChoosed].h);
			context.drawImage(AtkG,GnrlP[GnrlPChoosed].x - 100, GnrlP[GnrlPChoosed].y, GnrlP[GnrlPChoosed].w, GnrlP[GnrlPChoosed].h);
			context.drawImage(AtkG,GnrlP[GnrlPChoosed].x - 50, GnrlP[GnrlPChoosed].y, GnrlP[GnrlPChoosed].w, GnrlP[GnrlPChoosed].h);
			context.drawImage(AtkG,GnrlP[GnrlPChoosed].x , GnrlP[GnrlPChoosed].y + 100, GnrlP[GnrlPChoosed].w, GnrlP[GnrlPChoosed].h);
			context.drawImage(AtkG,GnrlP[GnrlPChoosed].x , GnrlP[GnrlPChoosed].y + 50, GnrlP[GnrlPChoosed].w, GnrlP[GnrlPChoosed].h);
			context.drawImage(AtkG,GnrlP[GnrlPChoosed].x , GnrlP[GnrlPChoosed].y - 100, GnrlP[GnrlPChoosed].w, GnrlP[GnrlPChoosed].h);
			context.drawImage(AtkG,GnrlP[GnrlPChoosed].x , GnrlP[GnrlPChoosed].y - 50, GnrlP[GnrlPChoosed].w, GnrlP[GnrlPChoosed].h)
			
			if(mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y > GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*2 &&
				mouse.x >= WallG_x &&
				mouse.x <= WallG_x + WallG_w &&
				mouse.y >= WallG_y &&
				mouse.y <= WallG_y + WallG_h ||
				mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y > GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*2 &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*3 &&
				mouse.x >= WallG_x &&
				mouse.x <= WallG_x + WallG_w &&
				mouse.y >= WallG_y &&
				mouse.y <= WallG_y + WallG_h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						WallG_life -= 29;
						if(PTBR)
						{
							newLine("Golpe Critico! Muralha Grega perde 29  pontos de vida.");
						}
						else
							newLine("Critical attack! - Greek Wall lose 29 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(16,20))
						WallG_life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - Muralha Grega perde "+damage+" pontos de vida.");
						}
						else
							newLine("Normal attack - Greek Wall lose "+damage+" life points.");
					}
					Click_GP = 0;	
					Vez_Gregos = true;		
					Vez_Persas = false;
				}
			
			for(var i = 0; i < LancerG.length; i++)
			{
				if(mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y < GnrlP[GnrlPChoosed].y &&
				mouse.y > GnrlP[GnrlPChoosed].y - GnrlP[GnrlPChoosed].h &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h ||
				mouse.x < GnrlP[GnrlPChoosed].x  &&
				mouse.x > GnrlP[GnrlPChoosed].x - GnrlP[GnrlPChoosed].w &&
				mouse.y > GnrlP[GnrlPChoosed].y &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h||
				mouse.x > GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w*2 &&
				mouse.y > GnrlP[GnrlPChoosed].y &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h ||
				mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y > GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*2 &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h ||
				mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y < GnrlP[GnrlPChoosed].y - GnrlP[GnrlPChoosed].h &&
				mouse.y > GnrlP[GnrlPChoosed].y - GnrlP[GnrlPChoosed].h*2 &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h ||
				mouse.x < GnrlP[GnrlPChoosed].x - GnrlP[GnrlPChoosed].w &&
				mouse.x > GnrlP[GnrlPChoosed].x - GnrlP[GnrlPChoosed].w*2 &&
				mouse.y > GnrlP[GnrlPChoosed].y &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h||
				mouse.x > GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w*2 &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w*3 &&
				mouse.y > GnrlP[GnrlPChoosed].y &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h ||
				mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y > GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*2 &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*3 &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						LancerG[i].life -= 29;
						if(PTBR)
						{
							newLine("Golpe Critico! Lanceiro Grego perde 29 pontos de vida.");
						}
						else
							newLine("Critical attack! - Greek Lancer lose 29 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(20,24))
						LancerG[i].life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - Lanceiro Grego perde "+damage+" pontos de vida.");
						}
						else
								newLine("Normal attack - Greek Lancer lose "+damage+" life points.");
					}
					Click_GP = 0;	
					Vez_Persas = false;						
					Vez_Gregos = true;				
				}
			}
		
			for(var i = 0; i < ArcG.length; i++)
			{
				if(mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y < GnrlP[GnrlPChoosed].y &&
				mouse.y > GnrlP[GnrlPChoosed].y - GnrlP[GnrlPChoosed].h &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h ||
				mouse.x < GnrlP[GnrlPChoosed].x  &&
				mouse.x > GnrlP[GnrlPChoosed].x - GnrlP[GnrlPChoosed].w &&
				mouse.y > GnrlP[GnrlPChoosed].y &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h||
				mouse.x > GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w*2 &&
				mouse.y > GnrlP[GnrlPChoosed].y &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h ||
				mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y > GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*2 &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h ||
				mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y < GnrlP[GnrlPChoosed].y - GnrlP[GnrlPChoosed].h &&
				mouse.y > GnrlP[GnrlPChoosed].y - GnrlP[GnrlPChoosed].h*2 &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h ||
				mouse.x < GnrlP[GnrlPChoosed].x - GnrlP[GnrlPChoosed].w &&
				mouse.x > GnrlP[GnrlPChoosed].x - GnrlP[GnrlPChoosed].w*2 &&
				mouse.y > GnrlP[GnrlPChoosed].y &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h||
				mouse.x > GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w*2 &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w*3 &&
				mouse.y > GnrlP[GnrlPChoosed].y &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h ||
				mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y > GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*2 &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*3 &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						ArcG[i].life -= 29;
						if(PTBR)
						{
							newLine("Golpe Critico! Arqueiro Grego perde 29 pontos de vida.");
						}
						else
						newLine("Critical attack! - Greek Archer lose 29 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(20,24))
						ArcG[i].life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - Arqueiro Grego perde "+damage+" pontos de vida.");
						}
						else
						newLine("Normal attack - Greek Archer lose "+damage+" life points.");
					}
					Click_GP = 0;	
					Vez_Persas = false;						
					Vez_Gregos = true;				
				}
			}
			
			for(var i = 0; i < TorG.length; i++)
			{
				if(mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y < GnrlP[GnrlPChoosed].y &&
				mouse.y > GnrlP[GnrlPChoosed].y - GnrlP[GnrlPChoosed].h &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h ||
				mouse.x < GnrlP[GnrlPChoosed].x  &&
				mouse.x > GnrlP[GnrlPChoosed].x - GnrlP[GnrlPChoosed].w &&
				mouse.y > GnrlP[GnrlPChoosed].y &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h||
				mouse.x > GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w*2 &&
				mouse.y > GnrlP[GnrlPChoosed].y &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h ||
				mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y > GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*2 &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h ||
				mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y < GnrlP[GnrlPChoosed].y - GnrlP[GnrlPChoosed].h &&
				mouse.y > GnrlP[GnrlPChoosed].y - GnrlP[GnrlPChoosed].h*2 &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h ||
				mouse.x < GnrlP[GnrlPChoosed].x - GnrlP[GnrlPChoosed].w &&
				mouse.x > GnrlP[GnrlPChoosed].x - GnrlP[GnrlPChoosed].w*2 &&
				mouse.y > GnrlP[GnrlPChoosed].y &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h||
				mouse.x > GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w*2 &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w*3 &&
				mouse.y > GnrlP[GnrlPChoosed].y &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h ||
				mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y > GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*2 &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*3 &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						TorG[i].life -= 29;
						if(PTBR)
						{
							newLine("Golpe Critico! Torre Grega perde 29 pontos de vida.");
						}
						else
								newLine("Critical attack! - Greek Tower lose 29 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(23,27))
						TorG[i].life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - Torre Grega perde "+damage+" pontos de vida.");
						}
						else
								newLine("Normal attack - Greek Tower lose "+damage+" life points.");
					}
					Click_GP = 0;	
					Vez_Persas = false;						
					Vez_Gregos = true;				
				}
			}
			
			for(var i = 0; i < KingG.length; i++)
			{
				if(mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y < GnrlP[GnrlPChoosed].y &&
				mouse.y > GnrlP[GnrlPChoosed].y - GnrlP[GnrlPChoosed].h &&
				mouse.x >= KingG[i].x &&
				mouse.x <= KingG[i].x + KingG[i].w &&
				mouse.y >= KingG[i].y &&
				mouse.y <= KingG[i].y + KingG[i].h ||
				mouse.x < GnrlP[GnrlPChoosed].x  &&
				mouse.x > GnrlP[GnrlPChoosed].x - GnrlP[GnrlPChoosed].w &&
				mouse.y > GnrlP[GnrlPChoosed].y &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.x >= KingG[i].x &&
				mouse.x <= KingG[i].x + KingG[i].w &&
				mouse.y >= KingG[i].y &&
				mouse.y <= KingG[i].y + KingG[i].h||
				mouse.x > GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w*2 &&
				mouse.y > GnrlP[GnrlPChoosed].y &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.x >= KingG[i].x &&
				mouse.x <= KingG[i].x + KingG[i].w &&
				mouse.y >= KingG[i].y &&
				mouse.y <= KingG[i].y + KingG[i].h ||
				mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y > GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*2 &&
				mouse.x >= KingG[i].x &&
				mouse.x <= KingG[i].x + KingG[i].w &&
				mouse.y >= KingG[i].y &&
				mouse.y <= KingG[i].y + KingG[i].h ||
				mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y < GnrlP[GnrlPChoosed].y - GnrlP[GnrlPChoosed].h &&
				mouse.y > GnrlP[GnrlPChoosed].y - GnrlP[GnrlPChoosed].h*2 &&
				mouse.x >= KingG[i].x &&
				mouse.x <= KingG[i].x + KingG[i].w &&
				mouse.y >= KingG[i].y &&
				mouse.y <= KingG[i].y + KingG[i].h ||
				mouse.x < GnrlP[GnrlPChoosed].x - GnrlP[GnrlPChoosed].w &&
				mouse.x > GnrlP[GnrlPChoosed].x - GnrlP[GnrlPChoosed].w*2 &&
				mouse.y > GnrlP[GnrlPChoosed].y &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.x >= KingG[i].x &&
				mouse.x <= KingG[i].x + KingG[i].w &&
				mouse.y >= KingG[i].y &&
				mouse.y <= KingG[i].y + KingG[i].h||
				mouse.x > GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w*2 &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w*3 &&
				mouse.y > GnrlP[GnrlPChoosed].y &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.x >= KingG[i].x &&
				mouse.x <= KingG[i].x + KingG[i].w &&
				mouse.y >= KingG[i].y &&
				mouse.y <= KingG[i].y + KingG[i].h ||
				mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y > GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*2 &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*3 &&
				mouse.x >= KingG[i].x &&
				mouse.x <= KingG[i].x + KingG[i].w &&
				mouse.y >= KingG[i].y &&
				mouse.y <= KingG[i].y + KingG[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						KingG[i].life -= 29;
						if(PTBR)
						{
							newLine("Golpe Critico! Rei Grego perde 29 pontos de vida.");
						}
						else
							newLine("Critical attack! - Greek King lose 29 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(20,24))
						KingG[i].life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - Rei Grego perde "+damage+" pontos de vida.");
						}
						else
								newLine("Normal attack - Greek King lose "+damage+" life points.");
					}
					Click_GP = 0;	
					Vez_Persas = false;						
					Vez_Gregos = true;				
				}
			}
			
			for(var i = 0; i < KntG.length; i++)
			{
				if(mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y < GnrlP[GnrlPChoosed].y &&
				mouse.y > GnrlP[GnrlPChoosed].y - GnrlP[GnrlPChoosed].h &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h ||
				mouse.x < GnrlP[GnrlPChoosed].x  &&
				mouse.x > GnrlP[GnrlPChoosed].x - GnrlP[GnrlPChoosed].w &&
				mouse.y > GnrlP[GnrlPChoosed].y &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h||
				mouse.x > GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w*2 &&
				mouse.y > GnrlP[GnrlPChoosed].y &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h ||
				mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y > GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*2 &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h ||
				mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y < GnrlP[GnrlPChoosed].y - GnrlP[GnrlPChoosed].h &&
				mouse.y > GnrlP[GnrlPChoosed].y - GnrlP[GnrlPChoosed].h*2 &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h ||
				mouse.x < GnrlP[GnrlPChoosed].x - GnrlP[GnrlPChoosed].w &&
				mouse.x > GnrlP[GnrlPChoosed].x - GnrlP[GnrlPChoosed].w*2 &&
				mouse.y > GnrlP[GnrlPChoosed].y &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h||
				mouse.x > GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w*2 &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w*3 &&
				mouse.y > GnrlP[GnrlPChoosed].y &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h ||
				mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y > GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*2 &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*3 &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						KntG[i].life -= 29;
						if(PTBR)
						{
							newLine("Golpe Critico! Cavaleiro Grego perde 29 pontos de vida.");
						}
						else
								newLine("Critical attack! - Greek Knight lose 29 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(20,24))
						KntG[i].life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - Cavaleiro Grego perde "+damage+" pontos de vida.");
						}
						else
							newLine("Normal attack - Greek Knight lose "+damage+" life points.");
					}
					Click_GP = 0;	
					Vez_Persas = false;						
					Vez_Gregos = true;				
				}
			}
		
			for(var i = 0; i < GnrlG.length; i++)
			{
				if(mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y < GnrlP[GnrlPChoosed].y &&
				mouse.y > GnrlP[GnrlPChoosed].y - GnrlP[GnrlPChoosed].h &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h ||
				mouse.x < GnrlP[GnrlPChoosed].x  &&
				mouse.x > GnrlP[GnrlPChoosed].x - GnrlP[GnrlPChoosed].w &&
				mouse.y > GnrlP[GnrlPChoosed].y &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h||
				mouse.x > GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w*2 &&
				mouse.y > GnrlP[GnrlPChoosed].y &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h ||
				mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y > GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*2 &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h ||
				mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y < GnrlP[GnrlPChoosed].y - GnrlP[GnrlPChoosed].h &&
				mouse.y > GnrlP[GnrlPChoosed].y - GnrlP[GnrlPChoosed].h*2 &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h ||
				mouse.x < GnrlP[GnrlPChoosed].x - GnrlP[GnrlPChoosed].w &&
				mouse.x > GnrlP[GnrlPChoosed].x - GnrlP[GnrlPChoosed].w*2 &&
				mouse.y > GnrlP[GnrlPChoosed].y &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h||
				mouse.x > GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w*2 &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w*3 &&
				mouse.y > GnrlP[GnrlPChoosed].y &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h ||
				mouse.x > GnrlP[GnrlPChoosed].x &&
				mouse.x < GnrlP[GnrlPChoosed].x + GnrlP[GnrlPChoosed].w &&
				mouse.y > GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*2 &&
				mouse.y < GnrlP[GnrlPChoosed].y + GnrlP[GnrlPChoosed].h*3 &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						GnrlG[i].life -= 29;
						if(PTBR)
						{
							newLine("Golpe Critico! General Grego perde 29 pontos de vida.");
						}
						else
								newLine("Critical attack! - Greek General lose 29 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(20,24))
						GnrlG[i].life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - General Grego perde "+damage+" pontos de vida.");
						}
						else
							newLine("Normal attack - Greek General lose "+damage+" life points.");
					}
					Click_GP = 0;	
					Vez_Persas = false;						
					Vez_Gregos = true;				
				}
			}
		
		}
	
	
	}
}

function PersasCouldMoveG()
{	
	if((InfoArcG == true && GnrlP[GnrlPChoosed].x == ArcG[ArcsGChoosed].x && GnrlP[GnrlPChoosed].y == ArcG[ArcsGChoosed].y)||
	(InfoKntG == true && GnrlP[GnrlPChoosed].x == KntG[KntsGChoosed].x && GnrlP[GnrlPChoosed].y == KntG[KntsGChoosed].y) ||
	(InfoTorG == true && GnrlP[GnrlPChoosed].x == TorG[TorsGChoosed].x && GnrlP[GnrlPChoosed].y == TorG[TorsGChoosed].y) ||
	(InfoLancerG == true && GnrlP[GnrlPChoosed].x == LancerG[LancersGChoosed].x && GnrlP[GnrlPChoosed].y == LancerG[LancersGChoosed].y) ||
	(InfoGnrlG == true && GnrlP[GnrlPChoosed].x == GnrlG[GnrlGChoosed].x && GnrlP[GnrlPChoosed].y == GnrlG[GnrlGChoosed].y) ||
	(InfoKingG == true && GnrlP[GnrlPChoosed].x == KingG[KingGChoosed].x && GnrlP[GnrlPChoosed].y == KingG[KingGChoosed].y)||
	(GnrlP[GnrlPChoosed].x == TreeA.x && GnrlP[GnrlPChoosed].y == TreeA.y)||
	(GnrlP[GnrlPChoosed].x == TreeB.x && GnrlP[GnrlPChoosed].y == TreeB.y)||
	(GnrlP[GnrlPChoosed].x == TreeC.x && GnrlP[GnrlPChoosed].y == TreeC.y)||
	(GnrlP[GnrlPChoosed].x == TreeD.x && GnrlP[GnrlPChoosed].y == TreeD.y)||
	(GnrlP[GnrlPChoosed].x == TreeE.x && GnrlP[GnrlPChoosed].y == TreeE.y)||
	(GnrlP[GnrlPChoosed].x == TreeF.x && GnrlP[GnrlPChoosed].y == TreeF.y))
	{
		return true;
	}
	else return false;
}

function GregosCouldMoveG()
{
	if((InfoArcP == true && GnrlG[GnrlGChoosed].x == ArcP[ArcsPChoosed].x && GnrlG[GnrlGChoosed].y == ArcP[ArcsPChoosed].y)||
	(InfoKntP == true && GnrlG[GnrlGChoosed].x == KntP[KntsPChoosed].x && GnrlG[GnrlGChoosed].y == KntP[KntsPChoosed].y) ||
	(InfoTorP == true && GnrlG[GnrlGChoosed].x == TorP[TorsPChoosed].x && GnrlG[GnrlGChoosed].y == TorP[TorsPChoosed].y) ||
	(InfoLancerP == true && GnrlG[GnrlGChoosed].x == LancerP[LancersPChoosed].x && GnrlG[GnrlGChoosed].y == LancerP[LancersPChoosed].y) ||
	(InfoGnrlP == true && GnrlG[GnrlGChoosed].x == GnrlP[GnrlPChoosed].x && GnrlG[GnrlGChoosed].y == GnrlP[GnrlPChoosed].y) ||
	(InfoKingP == true && GnrlG[GnrlGChoosed].x == KingP[KingPChoosed].x && GnrlG[GnrlGChoosed].y == KingP[KingPChoosed].y) ||
	(GnrlG[GnrlGChoosed].x == TreeA.x && GnrlG[GnrlGChoosed].y == TreeA.y)||
	(GnrlG[GnrlGChoosed].x == TreeB.x && GnrlG[GnrlGChoosed].y == TreeB.y)||
	(GnrlG[GnrlGChoosed].x == TreeC.x && GnrlG[GnrlGChoosed].y == TreeC.y)||
	(GnrlG[GnrlGChoosed].x == TreeD.x && GnrlG[GnrlGChoosed].y == TreeD.y)||
	(GnrlG[GnrlGChoosed].x == TreeE.x && GnrlG[GnrlGChoosed].y == TreeE.y)||
	(GnrlG[GnrlGChoosed].x == TreeF.x && GnrlG[GnrlGChoosed].y == TreeF.y))
	{
		return true;
	}
	else return false;
}

function DieGnrls()
{
	for(var i = 0; i < GnrlP.length; i++) 
	{
		if(GnrlP[i].life <= 0) GnrlP[i].dead = true;	
		if(GnrlP[i].dead)
		{
			GnrlP[i].x = 0;
			GnrlP[i].y = 0;
			GnrlP[i].w = 0;
			GnrlP[i].h = 0;
			GnrlP[i].life = 0;
		}
	}
	for(var i = 0; i < GnrlG.length; i++) 
	{
		if(GnrlG[i].life <= 0) GnrlG[i].dead = true;		
		if(GnrlG[i].dead)
		{
			GnrlG[i].x = 0;
			GnrlG[i].y = 0;
			GnrlG[i].w = 0;
			GnrlG[i].h = 0;
			GnrlG[i].life = 0;
		}
	}
}
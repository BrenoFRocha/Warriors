var PTBR = true;
var ENUS = false;
var archer_number = 8;
var limit_down = 451;
var limit_right = 551;

function ArchersP(ArcherP_x, ArcherP_y, ArcherP_w, ArcherP_h, ArcherP_l)
{	
	this.x = ArcherP_x;
	this.y = ArcherP_y;
	this.w = ArcherP_w;
	this.h = ArcherP_h;
	this.life = ArcherP_l;
	this.dead = false;
	this.onClicked = false;;
	this.ArcsP = new Image;
	if(PTBR)
	{
		this.ArcsP.src = "Images/Arqueiro_PersaPT.png";	
	}
	if(ENUS)
	{
		this.ArcsP.src = "Images/Arqueiro_PersaEN.png";	
	}
	this.update = function()
	{
		
	}
	
	this.draw = function(ctx)
	{					
		ctx.drawImage(this.ArcsP, this.x, this.y, this.w, this.h);	
	}
}

var ArcsGChoosed;
var ArcsPChoosed;
var MovA = new Image;
MovA.src = "Images/Celula_M.png";
var AtkA = new Image;

//AtkA.src = "Images/Celula_A.png";

function ArchersG(ArcherG_x, ArcherG_y, ArcherG_w, ArcherG_h, ArcherG_l)
{	
	this.x = ArcherG_x;
	this.y = ArcherG_y;
	this.w = ArcherG_w;
	this.h = ArcherG_h;
	this.life = ArcherG_l;
	this.dead = false;
	this.onClicked = false;;
	this.ArcsG = new Image;
	if(PTBR)
	{
		this.ArcsG.src = "Images/Arqueiro_GregoPT.png";	
	}
	if(ENUS)
	{
		this.ArcsG.src = "Images/Arqueiro_GregoEN.png";	
	}
	this.update = function()
	{
		
	}
	
	this.draw = function(ctx)
	{					
		ctx.drawImage(this.ArcsG, this.x, this.y, this.w, this.h);	
	}
}

{//instanciando Arqueiros Persas
	var ArcP_x = [51, 101, 151 , 201, 351, 401, 451, 501];		
	var ArcP = [];
	var Click_AP = 0;		
	var OrdemAP = ArcsPChoosed;
	
	for(var i = 0; i < archer_number; i++) 
	{
		ArcP[i] = new ArchersP(ArcP_x[i], 101, 48, 48, 30);			
	}				
}
	
{//instanciando Arqueiros Gregos
	var ArcG_x = [51, 101, 151 , 201, 351, 401, 451, 501];
	var ArcG = [];
	var Click_AG = 0;
	var OrdemAG = ArcsGChoosed;
	
	for(var i = 0; i < archer_number; i++) 
	{
		ArcG[i] = new ArchersG(ArcG_x[i], 301, 48, 48, 30);			
	}				
}

function updateArchers()
{
	for(var i = 0; i < ArcG.length; i++) 
	{	
		if(mouse.press && ArcG[i].dead == false &&
		mouse.x >= ArcG[i].x &&
		mouse.x <= ArcG[i].x + ArcG[i].w &&
		mouse.y >= ArcG[i].y &&
		mouse.y <= ArcG[i].y + ArcG[i].h)				
		{
			OrdemAG = ArcsGChoosed;
			ArcsGChoosed = i;
			InfoArcG = true;
			InfoGnrlG = false;
			InfoKingG = false;
			InfoLancerG = false;
			InfoKntG = false;
			InfoTorG = false;
			InfoWallG = false;
		}
	}
	for(var i = 0; i < ArcP.length; i++) 
	{	
		if(mouse.press && ArcP[i].dead == false &&
		mouse.x >= ArcP[i].x &&
		mouse.x <= ArcP[i].x + ArcP[i].w &&
		mouse.y >= ArcP[i].y &&
		mouse.y <= ArcP[i].y + ArcP[i].h)				
		{
			OrdemAP = ArcsPChoosed;
			ArcsPChoosed = i;	
			InfoArcP = true;			
			InfoLancerP = false;
			InfoTorP = false;
			InfoKingP = false;
			InfoGnrlP = false;
			InfoKntP = false;
			InfoWallP = false;
		}
	}
}

function UpdateArcherG()
{	
	if(Vez_Gregos)
	{
		for(var i = 0; i < ArcG.length; i++) 
		{	
			if(mouse.press && ArcG[i].dead == false &&
			mouse.x >= ArcG[i].x &&
			mouse.x <= ArcG[i].x + ArcG[i].w &&
			mouse.y >= ArcG[i].y &&
			mouse.y <= ArcG[i].y + ArcG[i].h)				
			{								
				if(ArcsGChoosed != OrdemAG)
				{
					Click_AG = 0;
				}
				Click_AG += 1;		
				mouse.press = false;
				Click_CG = 0;
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
			}	
		}
	}
}
function UpdateArcherP()
{
	if(Vez_Persas)
	{
		for(var i = 0; i < ArcP.length; i++) 
		{	
			if(mouse.press && ArcP[i].dead == false &&
			mouse.x >= ArcP[i].x &&
			mouse.x <= ArcP[i].x + ArcP[i].w &&
			mouse.y >= ArcP[i].y &&
			mouse.y <= ArcP[i].y + ArcP[i].h)				
			{		
				if(ArcsPChoosed != OrdemAP)
				{
					Click_AP = 0;
				}
				Click_AP += 1;		
				mouse.press = false;
				Click_CG = 0;
				Click_AG = 0;
				Click_LG = 0;  
				Click_TG = 0; 
				Click_GG = 0;  
				Click_KG = 0;
				Click_CP = 0;
				Click_LP = 0;  
				Click_TP = 0; 
				Click_GP = 0;  
				Click_KP = 0;
			}	
		}
	}
	
}

function PossibilitiesA()
{
	if(Vez_Gregos)
	{
		if(Click_AG == 1)
		{
			if(ArcG[ArcsGChoosed].y > 101)
			{
				context.drawImage(MovA, ArcG[ArcsGChoosed].x, ArcG[ArcsGChoosed].y - 50, ArcG[ArcsGChoosed].w, ArcG[ArcsGChoosed].h);
			}
			
			context.drawImage(MovA, ArcG[ArcsGChoosed].x - 50, ArcG[ArcsGChoosed].y, ArcG[ArcsGChoosed].w, ArcG[ArcsGChoosed].h);
			context.drawImage(MovA, ArcG[ArcsGChoosed].x + 50, ArcG[ArcsGChoosed].y, ArcG[ArcsGChoosed].w, ArcG[ArcsGChoosed].h);
			
			if(ArcG[ArcsGChoosed].y < limit_down)
			{
				context.drawImage(MovA, ArcG[ArcsGChoosed].x , ArcG[ArcsGChoosed].y + 50, ArcG[ArcsGChoosed].w, ArcG[ArcsGChoosed].h);
			}
			
			if(mouse.x > ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w + 3 &&
			mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*2 && 
			mouse.y > ArcG[ArcsGChoosed].y &&
			mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
			ArcG[ArcsGChoosed].x < limit_right)
			{
				ArcG[ArcsGChoosed].x += 50;
				if(GregosCouldMoveA())
				{
					ArcG[ArcsGChoosed].x -= 50;
					Click_AG = 1;
					Vez_Gregos = true;
					Vez_Persas = false;
				}
				else
				{
					Click_AG = 0;
					Vez_Gregos = false;
					Vez_Persas = true;	
				}
			}
			else if(mouse.x < ArcG[ArcsGChoosed].x - 2 &&
			mouse.x > ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w && 
			mouse.y >= ArcG[ArcsGChoosed].y &&
			mouse.y <= ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h)
			{
				ArcG[ArcsGChoosed].x -= 50;
				if(GregosCouldMoveA())
				{
					ArcG[ArcsGChoosed].x += 50;
					Click_AG = 1;
					Vez_Gregos = true;
					Vez_Persas = false;
				}
				else
				{
					Click_AG = 0;
					Vez_Gregos = false;
					Vez_Persas = true;	
				}	
			}
			else if(mouse.x > ArcG[ArcsGChoosed].x &&
			mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
			mouse.y > ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h + 3 &&
			mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*2 &&
			ArcG[ArcsGChoosed].y < limit_down)
			{
				ArcG[ArcsGChoosed].y += 50;
				if(GregosCouldMoveA())
				{
					ArcG[ArcsGChoosed].y -= 50;
					Click_AG = 1;
					Vez_Gregos = true;
					Vez_Persas = false;
				}
				else
				{
					Click_AG = 0;
					Vez_Gregos = false;
					Vez_Persas = true;	
				}
			}
			else if(mouse.x > ArcG[ArcsGChoosed].x &&
			mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
			mouse.y < ArcG[ArcsGChoosed].y - 3 &&
			mouse.y > ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h &&
			ArcG[ArcsGChoosed].y > 101)
			{
				ArcG[ArcsGChoosed].y -= 50;
				if(GregosCouldMoveA())
				{
					ArcG[ArcsGChoosed].y += 50;
					Click_AG = 1;
					Vez_Gregos = true;
					Vez_Persas = false;
				}
				else
				{
					Click_AG = 0;
					Vez_Gregos = false;
					Vez_Persas = true;	
				}
			}
		}		
		else if(Click_AG == 2)
		{
			context.drawImage(AtkA,ArcG[ArcsGChoosed].x + 50, ArcG[ArcsGChoosed].y, ArcG[ArcsGChoosed].w, ArcG[ArcsGChoosed].h);
			context.drawImage(AtkA,ArcG[ArcsGChoosed].x - 50, ArcG[ArcsGChoosed].y, ArcG[ArcsGChoosed].w, ArcG[ArcsGChoosed].h);
			context.drawImage(AtkA,ArcG[ArcsGChoosed].x, ArcG[ArcsGChoosed].y - 50, ArcG[ArcsGChoosed].w, ArcG[ArcsGChoosed].h);
			context.drawImage(AtkA,ArcG[ArcsGChoosed].x, ArcG[ArcsGChoosed].y + 50, ArcG[ArcsGChoosed].w, ArcG[ArcsGChoosed].h);
			context.drawImage(AtkA,ArcG[ArcsGChoosed].x + 100, ArcG[ArcsGChoosed].y, ArcG[ArcsGChoosed].w, ArcG[ArcsGChoosed].h);
			context.drawImage(AtkA,ArcG[ArcsGChoosed].x - 100, ArcG[ArcsGChoosed].y, ArcG[ArcsGChoosed].w, ArcG[ArcsGChoosed].h);
			context.drawImage(AtkA,ArcG[ArcsGChoosed].x, ArcG[ArcsGChoosed].y - 100, ArcG[ArcsGChoosed].w, ArcG[ArcsGChoosed].h);
			context.drawImage(AtkA,ArcG[ArcsGChoosed].x, ArcG[ArcsGChoosed].y + 100, ArcG[ArcsGChoosed].w, ArcG[ArcsGChoosed].h);
			context.drawImage(AtkA,ArcG[ArcsGChoosed].x + 150, ArcG[ArcsGChoosed].y, ArcG[ArcsGChoosed].w, ArcG[ArcsGChoosed].h);
			context.drawImage(AtkA,ArcG[ArcsGChoosed].x - 150, ArcG[ArcsGChoosed].y, ArcG[ArcsGChoosed].w, ArcG[ArcsGChoosed].h);
			context.drawImage(AtkA,ArcG[ArcsGChoosed].x, ArcG[ArcsGChoosed].y - 150, ArcG[ArcsGChoosed].w, ArcG[ArcsGChoosed].h);
			context.drawImage(AtkA,ArcG[ArcsGChoosed].x, ArcG[ArcsGChoosed].y + 150, ArcG[ArcsGChoosed].w, ArcG[ArcsGChoosed].h);
			
		
			if(mouse.x > ArcG[ArcsGChoosed].x &&
			mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w &&
			mouse.y < ArcG[ArcsGChoosed].y &&
			mouse.y > ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h*2 &&
			mouse.x >= WallP_x &&
			mouse.x <= WallP_x + WallP_w &&
			mouse.y >= WallP_y &&
			mouse.y <= WallP_y + WallP_h ||
			mouse.x > ArcG[ArcsGChoosed].x &&
			mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w &&
			mouse.y < ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h &&
			mouse.y > ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h*2 &&
			mouse.x >= WallP_x &&
			mouse.x <= WallP_x + WallP_w &&
			mouse.y >= WallP_y &&
			mouse.y <= WallP_y + WallP_h||
			mouse.x > ArcG[ArcsGChoosed].x &&
			mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w &&
			mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*2 &&
			mouse.y > ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*3 &&
			mouse.x >= WallP_x &&
			mouse.x <= WallP_x + WallP_w &&
			mouse.y >= WallP_y &&
			mouse.y <= WallP_y + WallP_h)
			{
				if(Math.floor(randomRange(0,99)<20))
				{
					WallP_life -= 21;
					if(PTBR)
					{
						newLine("Golpe Critico! Muralha Persa perde 21 pontos de vida.");
					}
					else
							newLine("Critical attack! - Persian Wall lose 21 life points.");
				}
				
				else
				{
					damage = Math.floor(randomRange(11,16));
					WallP_life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - Muralha Persa perde "+damage+ " pontos de vida.");
					}
					else
							newLine("Normal attack - Persian Wall lose "+damage+" life points.");
				}
				Click_LP = 0;
				Vez_Gregos = false;	
				Vez_Persas = true;
			}

			for(var i = 0; i < ArcP.length; i++)
			{
				if(mouse.x > ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*2 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*2 &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*3 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*3 &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*4 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h ||
				mouse.x < ArcG[ArcsGChoosed].x &&
				mouse.x > ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h ||
				mouse.x < ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w &&
				mouse.x > ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w*2 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h ||
				mouse.x < ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w*2 &&
				mouse.x > ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w*3 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y < ArcG[ArcsGChoosed].y &&
				mouse.y > ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y < ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h &&
				mouse.y > ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h*2 &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y < ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h*2 &&
				mouse.y > ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h*3 &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y > ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*2 &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y > ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*2 &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*3 &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y > ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*3 &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*4 &&
				mouse.x >= ArcP[i].x &&
				mouse.x <= ArcP[i].x + ArcP[i].w &&
				mouse.y >= ArcP[i].y &&
				mouse.y <= ArcP[i].y + ArcP[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						ArcP[i].life -= 21;
						if(PTBR)
						{
							newLine("Golpe Critico! Arqueiro Persa perde 21 pontos de vida.");
						}
						else
								newLine("Critical attack! - Persian Archer lose 21 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(11,16));
						ArcP[i].life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - Arqueiro Persa perde "+damage+" pontos de vida.");
						}
						else
							newLine("Normal attack - Persian Archer lose "+damage+" life points.");
					}
					Click_AG = 0;		
					Vez_Gregos = false;	
					Vez_Persas = true;						
				}
			}
			
			for(var i = 0; i < KntP.length; i++)
			{
				if(mouse.x > ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*2 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*2 &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*3 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*3 &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*4 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h ||
				mouse.x < ArcG[ArcsGChoosed].x &&
				mouse.x > ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h ||
				mouse.x < ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w &&
				mouse.x > ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w*2 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h ||
				mouse.x < ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w*2 &&
				mouse.x > ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w*3 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y < ArcG[ArcsGChoosed].y &&
				mouse.y > ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y < ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h &&
				mouse.y > ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h*2 &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y < ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h*2 &&
				mouse.y > ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h*3 &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y > ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*2 &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y > ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*2 &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*3 &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y > ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*3 &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*4 &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						KntP[i].life -= 21;
						if(PTBR)
						{
							newLine("Golpe Critico! Cavaleiro Persa perde 21 pontos de vida.");
						}
						else
								newLine("Critical attack! - Persian Knight lose 21 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(11,16));
						KntP[i].life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - Cavaleiro Persa "+damage+ " pontos de vida.");
						}
						else
								newLine("Normal attack - Persian Knight lose "+damage+" life points.");
					}
					Click_AG = 0;	
					Vez_Gregos = false;
					Vez_Persas = true;					
				}
			}
			
			for(var i = 0; i < TorP.length; i++)
			{
				if(mouse.x > ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*2 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*2 &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*3 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*3 &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*4 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h ||
				mouse.x < ArcG[ArcsGChoosed].x &&
				mouse.x > ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h ||
				mouse.x < ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w &&
				mouse.x > ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w*2 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h ||
				mouse.x < ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w*2 &&
				mouse.x > ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w*3 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y < ArcG[ArcsGChoosed].y &&
				mouse.y > ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y < ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h &&
				mouse.y > ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h*2 &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y < ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h*2 &&
				mouse.y > ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h*3 &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y > ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*2 &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y > ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*2 &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*3 &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y > ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*3 &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*4 &&
				mouse.x >= TorP[i].x &&
				mouse.x <= TorP[i].x + TorP[i].w &&
				mouse.y >= TorP[i].y &&
				mouse.y <= TorP[i].y + TorP[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						TorP[i].life -= 21;
						if(PTBR)
						{
							newLine("Golpe Critico! Torre Persa perde 21 pontos de vida.");
						}
						else
							newLine("Critical attack! - Persian Tower lose 21 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(11,16));
						TorP[i].life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - Torre Persa perde "+damage+ " pontos de vida.");
						}
							else
												newLine("Normal attack - Persian Tower lose "+damage+" life points.");
					}
					Click_AG = 0;	
					Vez_Gregos = false;
					Vez_Persas = true;	
				}
			}
			
			for(var i = 0; i < LancerP.length; i++)
			{
				if(mouse.x > ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*2 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*2 &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*3 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*3 &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*4 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h ||
				mouse.x < ArcG[ArcsGChoosed].x &&
				mouse.x > ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h ||
				mouse.x < ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w &&
				mouse.x > ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w*2 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h ||
				mouse.x < ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w*2 &&
				mouse.x > ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w*3 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y < ArcG[ArcsGChoosed].y &&
				mouse.y > ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y < ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h &&
				mouse.y > ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h*2 &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y < ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h*2 &&
				mouse.y > ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h*3 &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y > ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*2 &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y > ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*2 &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*3 &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y > ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*3 &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*4 &&
				mouse.x >= LancerP[i].x &&
				mouse.x <= LancerP[i].x + LancerP[i].w &&
				mouse.y >= LancerP[i].y &&
				mouse.y <= LancerP[i].y + LancerP[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						LancerP[i].life -= 21;
						if(PTBR)
						{
							newLine("Golpe Critico! Lanceiro Persa perde 21 pontos de vida.");
						}
						else
							newLine("Critical attack! - Persian Lancer lose 21 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(11,16))
						LancerP[i].life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - Lanceiro Persa perde "+damage+ " pontos de vida.");
						}
						else
							newLine("Normal attack - Persian Lancer lose "+damage+" life points.");
					}
					Click_AP = 0;	
					Vez_Persas = true;	
					Vez_Gregos = false;	
				}
			}
			
			for(var i = 0; i < GnrlP.length; i++)
			{
				if(mouse.x > ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*2 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*2 &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*3 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*3 &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*4 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h ||
				mouse.x < ArcG[ArcsGChoosed].x &&
				mouse.x > ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h ||
				mouse.x < ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w &&
				mouse.x > ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w*2 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h ||
				mouse.x < ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w*2 &&
				mouse.x > ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w*3 && 
				mouse.y > ArcG[ArcsGChoosed].y &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y < ArcG[ArcsGChoosed].y &&
				mouse.y > ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y < ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h &&
				mouse.y > ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h*2 &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y < ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h*2 &&
				mouse.y > ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h*3 &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y > ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*2 &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y > ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*2 &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*3 &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h ||
				mouse.x > ArcG[ArcsGChoosed].x  &&
				mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
				mouse.y > ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*3 &&
				mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*4 &&
				mouse.x >= GnrlP[i].x &&
				mouse.x <= GnrlP[i].x + GnrlP[i].w &&
				mouse.y >= GnrlP[i].y &&
				mouse.y <= GnrlP[i].y + GnrlP[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						GnrlP[i].life -= 21;
						if(PTBR)
						{
							newLine("Golpe Critico! General Persa perde 21 pontos de vida.");
						}
						else
							newLine("Critical attack! - Persian General lose 21 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(11,16))
						GnrlP[i].life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - General Persa perde "+damage+ " pontos de vida.");
						}
						else
							newLine("Normal attack - Persian General lose "+damage+" life points.");
					}
					Click_AG = 0;		
					Vez_Gregos = false;	
					Vez_Persas = true;					
				}
			}
			
			for(var i = 0; i < KingP.length; i++)
			{
			if(mouse.x > ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w &&
			mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*2 && 
			mouse.y > ArcG[ArcsGChoosed].y &&
			mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
			mouse.x >= KingP[i].x &&
			mouse.x <= KingP[i].x + KingP[i].w &&
			mouse.y >= KingP[i].y &&
			mouse.y <= KingP[i].y + KingP[i].h ||
			mouse.x > ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*2 &&
			mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*3 && 
			mouse.y > ArcG[ArcsGChoosed].y &&
			mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
			mouse.x >= KingP[i].x &&
			mouse.x <= KingP[i].x + KingP[i].w &&
			mouse.y >= KingP[i].y &&
			mouse.y <= KingP[i].y + KingP[i].h ||
			mouse.x > ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*3 &&
			mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w*4 && 
			mouse.y > ArcG[ArcsGChoosed].y &&
			mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
			mouse.x >= KingP[i].x &&
			mouse.x <= KingP[i].x + KingP[i].w &&
			mouse.y >= KingP[i].y &&
			mouse.y <= KingP[i].y + KingP[i].h ||
			mouse.x < ArcG[ArcsGChoosed].x &&
			mouse.x > ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w && 
			mouse.y > ArcG[ArcsGChoosed].y &&
			mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
			mouse.x >= KingP[i].x &&
			mouse.x <= KingP[i].x + KingP[i].w &&
			mouse.y >= KingP[i].y &&
			mouse.y <= KingP[i].y + KingP[i].h ||
			mouse.x < ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w &&
			mouse.x > ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w*2 && 
			mouse.y > ArcG[ArcsGChoosed].y &&
			mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
			mouse.x >= KingP[i].x &&
			mouse.x <= KingP[i].x + KingP[i].w &&
			mouse.y >= KingP[i].y &&
			mouse.y <= KingP[i].y + KingP[i].h ||
			mouse.x < ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w*2 &&
			mouse.x > ArcG[ArcsGChoosed].x - ArcG[ArcsGChoosed].w*3 && 
			mouse.y > ArcG[ArcsGChoosed].y &&
			mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
			mouse.x >= KingP[i].x &&
			mouse.x <= KingP[i].x + KingP[i].w &&
			mouse.y >= KingP[i].y &&
			mouse.y <= KingP[i].y + KingP[i].h ||
			mouse.x > ArcG[ArcsGChoosed].x  &&
			mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
			mouse.y < ArcG[ArcsGChoosed].y &&
			mouse.y > ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h &&
			mouse.x >= KingP[i].x &&
			mouse.x <= KingP[i].x + KingP[i].w &&
			mouse.y >= KingP[i].y &&
			mouse.y <= KingP[i].y + KingP[i].h ||
			mouse.x > ArcG[ArcsGChoosed].x  &&
			mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
			mouse.y < ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h &&
			mouse.y > ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h*2 &&
			mouse.x >= KingP[i].x &&
			mouse.x <= KingP[i].x + KingP[i].w &&
			mouse.y >= KingP[i].y &&
			mouse.y <= KingP[i].y + KingP[i].h ||
			mouse.x > ArcG[ArcsGChoosed].x  &&
			mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
			mouse.y < ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h*2 &&
			mouse.y > ArcG[ArcsGChoosed].y - ArcG[ArcsGChoosed].h*3 &&
			mouse.x >= KingP[i].x &&
			mouse.x <= KingP[i].x + KingP[i].w &&
			mouse.y >= KingP[i].y &&
			mouse.y <= KingP[i].y + KingP[i].h ||
			mouse.x > ArcG[ArcsGChoosed].x  &&
			mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
			mouse.y > ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h &&
			mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*2 &&
			mouse.x >= KingP[i].x &&
			mouse.x <= KingP[i].x + KingP[i].w &&
			mouse.y >= KingP[i].y &&
			mouse.y <= KingP[i].y + KingP[i].h ||
			mouse.x > ArcG[ArcsGChoosed].x  &&
			mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
			mouse.y > ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*2 &&
			mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*3 &&
			mouse.x >= KingP[i].x &&
			mouse.x <= KingP[i].x + KingP[i].w &&
			mouse.y >= KingP[i].y &&
			mouse.y <= KingP[i].y + KingP[i].h ||
			mouse.x > ArcG[ArcsGChoosed].x  &&
			mouse.x < ArcG[ArcsGChoosed].x + ArcG[ArcsGChoosed].w && 
			mouse.y > ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*3 &&
			mouse.y < ArcG[ArcsGChoosed].y + ArcG[ArcsGChoosed].h*4 &&
			mouse.x >= KingP[i].x &&
			mouse.x <= KingP[i].x + KingP[i].w &&
			mouse.y >= KingP[i].y &&
			mouse.y <= KingP[i].y + KingP[i].h)
			{
				if(Math.floor(randomRange(0,99)<20))
				{
					KingP[i].life -= 21;
					if(PTBR)
					{
						newLine("Golpe Critico! Rei Persa perde 21 pontos de vida.");
					}
					else
								newLine("Critical attack! - Persian King lose 21 life points.");
				}
				else
				{
					damage = Math.floor(randomRange(17,21))
					KingP[i].life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - Rei Persa perde "+damage+ " pontos de vida.");
					}
					else
													newLine("Normal attack - Persian King lose "+damage+" life points.");
				}
				Click_AG = 0;			
				Vez_Gregos = false;				
				Vez_Persas = true;	
			}
		}
		}
	
	}	
	else if(Vez_Persas)
	{
		if(Click_AP == 1)
		{
			if(ArcP[ArcsPChoosed].y > 101)
			{
				context.drawImage(MovA, ArcP[ArcsPChoosed].x, ArcP[ArcsPChoosed].y - 50, ArcP[ArcsPChoosed].w, ArcP[ArcsPChoosed].h);
			}
			context.drawImage(MovA, ArcP[ArcsPChoosed].x - 50, ArcP[ArcsPChoosed].y, ArcP[ArcsPChoosed].w, ArcP[ArcsPChoosed].h);
			context.drawImage(MovA, ArcP[ArcsPChoosed].x + 50, ArcP[ArcsPChoosed].y, ArcP[ArcsPChoosed].w, ArcP[ArcsPChoosed].h);
			if(ArcP[ArcsPChoosed].y < limit_down)
			{
				context.drawImage(MovA, ArcP[ArcsPChoosed].x , ArcP[ArcsPChoosed].y + 50, ArcP[ArcsPChoosed].w, ArcP[ArcsPChoosed].h);
			}
			
			if(mouse.x > ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w + 3 &&
			mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*2 && 
			mouse.y > ArcP[ArcsPChoosed].y &&
			mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
			ArcP[ArcsPChoosed].x < limit_right)
			{
				ArcP[ArcsPChoosed].x += 50;
				
				if(PersasCouldMoveA())
				{
					ArcP[ArcsPChoosed].x -= 50;
					Click_AP = 1;
					Vez_Gregos = false;
					Vez_Persas = true;
				}
				else
				{
					Click_AP = 0;
					Vez_Persas = false;
					Vez_Gregos = true;	
				}
			}
			else if(mouse.x < ArcP[ArcsPChoosed].x  - 3 &&
			mouse.x > ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w && 
			mouse.y >= ArcP[ArcsPChoosed].y &&
			mouse.y <= ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h)
			{
				ArcP[ArcsPChoosed].x -= 50;
				
				if(PersasCouldMoveA())
				{
					ArcP[ArcsPChoosed].x += 50;
					Click_AP = 1;
					Vez_Gregos = false;
					Vez_Persas = true;
				}
				else
				{
					Click_AP = 0;
					Vez_Persas = false;
					Vez_Gregos = true;	
				}
			}
			else if(mouse.x > ArcP[ArcsPChoosed].x &&
			mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
			mouse.y > ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h + 3 &&
			mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*2 &&
			ArcP[ArcsPChoosed].y < limit_down)
			{
				ArcP[ArcsPChoosed].y += 50;
				if(PersasCouldMoveA())
				{
					ArcP[ArcsPChoosed].y -= 50;
					Click_AP = 1;
					Vez_Gregos = false;
					Vez_Persas = true;
				}
				else
				{
					Click_AP = 0;
					Vez_Persas = false;
					Vez_Gregos = true;	
				}
			}
			else if(mouse.x > ArcP[ArcsPChoosed].x &&
			mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
			mouse.y < ArcP[ArcsPChoosed].y - 3 &&
			mouse.y > ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h &&
			ArcP[ArcsPChoosed].y > 101)
			{
				ArcP[ArcsPChoosed].y -= 50;
				if(PersasCouldMoveA())
				{
					ArcP[ArcsPChoosed].y += 50;
					Click_AP = 1;
					Vez_Gregos = false;
					Vez_Persas = true;
				}
				else
				{
					Click_AP = 0;
					Vez_Persas = false;
					Vez_Gregos = true;	
				}	
			}
		}
		
		else if(Click_AP == 2)
		{
			context.drawImage(AtkA,ArcP[ArcsPChoosed].x + 50, ArcP[ArcsPChoosed].y, ArcP[ArcsPChoosed].w, ArcP[ArcsPChoosed].h);
			context.drawImage(AtkA,ArcP[ArcsPChoosed].x - 50, ArcP[ArcsPChoosed].y, ArcP[ArcsPChoosed].w, ArcP[ArcsPChoosed].h);
			context.drawImage(AtkA,ArcP[ArcsPChoosed].x, ArcP[ArcsPChoosed].y - 50, ArcP[ArcsPChoosed].w, ArcP[ArcsPChoosed].h);
			context.drawImage(AtkA,ArcP[ArcsPChoosed].x, ArcP[ArcsPChoosed].y + 50, ArcP[ArcsPChoosed].w, ArcP[ArcsPChoosed].h);
			context.drawImage(AtkA,ArcP[ArcsPChoosed].x + 100, ArcP[ArcsPChoosed].y, ArcP[ArcsPChoosed].w, ArcP[ArcsPChoosed].h);
			context.drawImage(AtkA,ArcP[ArcsPChoosed].x - 100, ArcP[ArcsPChoosed].y, ArcP[ArcsPChoosed].w, ArcP[ArcsPChoosed].h);
			context.drawImage(AtkA,ArcP[ArcsPChoosed].x, ArcP[ArcsPChoosed].y - 100, ArcP[ArcsPChoosed].w, ArcP[ArcsPChoosed].h);
			context.drawImage(AtkA,ArcP[ArcsPChoosed].x, ArcP[ArcsPChoosed].y + 100, ArcP[ArcsPChoosed].w, ArcP[ArcsPChoosed].h);
			context.drawImage(AtkA,ArcP[ArcsPChoosed].x + 150, ArcP[ArcsPChoosed].y, ArcP[ArcsPChoosed].w, ArcP[ArcsPChoosed].h);
			context.drawImage(AtkA,ArcP[ArcsPChoosed].x - 150, ArcP[ArcsPChoosed].y, ArcP[ArcsPChoosed].w, ArcP[ArcsPChoosed].h);
			context.drawImage(AtkA,ArcP[ArcsPChoosed].x, ArcP[ArcsPChoosed].y - 150, ArcP[ArcsPChoosed].w, ArcP[ArcsPChoosed].h);
			context.drawImage(AtkA,ArcP[ArcsPChoosed].x, ArcP[ArcsPChoosed].y + 150, ArcP[ArcsPChoosed].w, ArcP[ArcsPChoosed].h);
			
		
			if(mouse.x > ArcP[ArcsPChoosed].x &&
			mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w &&
			mouse.y > ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
			mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*2 &&
			mouse.x >= WallG_x &&
			mouse.x <= WallG_x + WallG_w &&
			mouse.y >= WallG_y &&
			mouse.y <= WallG_y + WallG_w||
			mouse.x > ArcP[ArcsPChoosed].x &&
			mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w &&
			mouse.y > ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*2 &&
			mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*3 &&
			mouse.x >= WallG_x &&
			mouse.x <= WallG_x + WallG_w &&
			mouse.y >= WallG_y &&
			mouse.y <= WallG_y + WallG_w||
			mouse.x > ArcP[ArcsPChoosed].x &&
			mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w &&
			mouse.y > ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*3 &&
			mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*4 &&
			mouse.x >= WallG_x &&
			mouse.x <= WallG_x + WallG_w &&
			mouse.y >= WallG_y &&
			mouse.y <= WallG_y + WallG_w)
			{
				if(Math.floor(randomRange(0,99)<20))
				{
					WallG_life -= 21;
					if(PTBR)
					{
						newLine("Golpe Critico! Muralha Grega perde 21 pontos de vida.");
					}
					else
						newLine("Critical attack! - Greek Wall lose 21 life points.");
				}
				else
				{
					damage = Math.floor(randomRange(11,16));
					WallG_life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - Muralha Grega perde "+damage+ " pontos de vida.");
					}
					else
							newLine("Normal attack - Greek Wall lose "+damage+" life points.");
				}
				Click_LG = 0;
				Vez_Persas = false;	
				Vez_Gregos = true;
			}

			for(var i = 0; i < ArcG.length; i++)
			{
				if(mouse.x > ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*2 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*2 &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*3 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*3 &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*4 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h ||
				mouse.x < ArcP[ArcsPChoosed].x &&
				mouse.x > ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h ||
				mouse.x < ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w &&
				mouse.x > ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w*2 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h ||
				mouse.x < ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w*2 &&
				mouse.x > ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w*3 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y < ArcP[ArcsPChoosed].y &&
				mouse.y > ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y < ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h &&
				mouse.y > ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h*2 &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y < ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h*2 &&
				mouse.y > ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h*3 &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y > ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*2 &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y > ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*2 &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*3 &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y > ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*3 &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*4 &&
				mouse.x >= ArcG[i].x &&
				mouse.x <= ArcG[i].x + ArcG[i].w &&
				mouse.y >= ArcG[i].y &&
				mouse.y <= ArcG[i].y + ArcG[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						ArcG[i].life -= 21;
						if(PTBR)
						{
							newLine("Golpe Critico! Arqueiro Grego perde 21 pontos de vida.");
						}
						else
						newLine("Critical attack! - Greek Archer lose 21 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(11,16));
						ArcG[i].life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - Arqueiro Grego perde "+damage+" pontos de vida.");
						}
						else
						newLine("Normal attack - Greek Archer lose "+damage+" life points.");
					}
					Click_AP = 0;		
					Vez_Persas = false;	
					Vez_Gregos = true;						
				}
			}
			
			for(var i = 0; i < KntG.length; i++)
			{
				if(mouse.x > ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*2 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*2 &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*3 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*3 &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*4 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h ||
				mouse.x < ArcP[ArcsPChoosed].x &&
				mouse.x > ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h ||
				mouse.x < ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w &&
				mouse.x > ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w*2 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h ||
				mouse.x < ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w*2 &&
				mouse.x > ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w*3 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y < ArcP[ArcsPChoosed].y &&
				mouse.y > ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y < ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h &&
				mouse.y > ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h*2 &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y < ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h*2 &&
				mouse.y > ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h*3 &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y > ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*2 &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y > ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*2 &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*3 &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y > ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*3 &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*4 &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						KntG[i].life -= 21;
						if(PTBR)
						{
							newLine("Golpe Critico! Cavaleiro Grego perde 21 pontos de vida.");
						}
						else
								newLine("Critical attack! - Greek Knight lose 21 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(11,16));
						KntG[i].life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - Cavaleiro Grego "+damage+ " pontos de vida.");
						}
						else
							newLine("Normal attack - Greek Knight lose "+damage+" life points.");
					}
					Click_AP = 0;	
					Vez_Persas = false;
					Vez_Gregos = true;					
				}
			}
			
			for(var i = 0; i < TorG.length; i++)
			{
				if(mouse.x > ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*2 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*2 &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*3 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*3 &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*4 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h ||
				mouse.x < ArcP[ArcsPChoosed].x &&
				mouse.x > ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h ||
				mouse.x < ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w &&
				mouse.x > ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w*2 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h ||
				mouse.x < ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w*2 &&
				mouse.x > ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w*3 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y < ArcP[ArcsPChoosed].y &&
				mouse.y > ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y < ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h &&
				mouse.y > ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h*2 &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y < ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h*2 &&
				mouse.y > ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h*3 &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y > ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*2 &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y > ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*2 &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*3 &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y > ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*3 &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*4 &&
				mouse.x >= TorG[i].x &&
				mouse.x <= TorG[i].x + TorG[i].w &&
				mouse.y >= TorG[i].y &&
				mouse.y <= TorG[i].y + TorG[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						TorG[i].life -= 21;
						if(PTBR)
						{
							newLine("Golpe Critico! Torre Grega perde 21 pontos de vida.");
						}
						else
								newLine("Critical attack! - Greek Tower lose 21 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(11,16));
						TorG[i].life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - Torre Grega perde "+damage+ " pontos de vida.");
						}
						else
								newLine("Normal attack - Greek Tower lose "+damage+" life points.");
					}
					Click_AP = 0;	
					Vez_Persas = false;
					Vez_Gregos = true;	
				}
			}
			
			for(var i = 0; i < LancerG.length; i++)
			{
				if(mouse.x > ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*2 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*2 &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*3 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*3 &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*4 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h ||
				mouse.x < ArcP[ArcsPChoosed].x &&
				mouse.x > ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h ||
				mouse.x < ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w &&
				mouse.x > ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w*2 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h ||
				mouse.x < ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w*2 &&
				mouse.x > ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w*3 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y < ArcP[ArcsPChoosed].y &&
				mouse.y > ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y < ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h &&
				mouse.y > ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h*2 &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y < ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h*2 &&
				mouse.y > ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h*3 &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y > ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*2 &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y > ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*2 &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*3 &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y > ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*3 &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*4 &&
				mouse.x >= LancerG[i].x &&
				mouse.x <= LancerG[i].x + LancerG[i].w &&
				mouse.y >= LancerG[i].y &&
				mouse.y <= LancerG[i].y + LancerG[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						LancerG[i].life -= 21;
						if(PTBR)
						{
							newLine("Golpe Critico! Lanceiro Grego perde 21 pontos de vida.");
						}
						else
								newLine("Critical attack! - Greek Lancer lose 21 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(11,16))
						LancerG[i].life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - Lanceiro Grego perde "+damage+ " pontos de vida.");
						}
						else
								newLine("Normal attack - Greek Lancer lose "+damage+" life points.");
					}
					Click_AP = 0;	
					Vez_Persas = false;	
					Vez_Gregos = true;	
				}
			}
			
			for(var i = 0; i < GnrlG.length; i++)
			{
				if(mouse.x > ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*2 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*2 &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*3 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*3 &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*4 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h ||
				mouse.x < ArcP[ArcsPChoosed].x &&
				mouse.x > ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h ||
				mouse.x < ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w &&
				mouse.x > ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w*2 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h ||
				mouse.x < ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w*2 &&
				mouse.x > ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w*3 && 
				mouse.y > ArcP[ArcsPChoosed].y &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y < ArcP[ArcsPChoosed].y &&
				mouse.y > ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y < ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h &&
				mouse.y > ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h*2 &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y < ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h*2 &&
				mouse.y > ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h*3 &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y > ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*2 &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y > ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*2 &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*3 &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h ||
				mouse.x > ArcP[ArcsPChoosed].x  &&
				mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
				mouse.y > ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*3 &&
				mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*4 &&
				mouse.x >= GnrlG[i].x &&
				mouse.x <= GnrlG[i].x + GnrlG[i].w &&
				mouse.y >= GnrlG[i].y &&
				mouse.y <= GnrlG[i].y + GnrlG[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						GnrlG[i].life -= 21;
						if(PTBR)
						{
							newLine("Golpe Critico! General Grego perde 21  pontos de vida.");
						}
						else
							newLine("Critical attack! - Greek General lose 21 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(11,16))
						GnrlG[i].life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - General Grego perde "+damage+ " pontos de vida.");
						}
						else
							newLine("Normal attack - Greek General lose "+damage+" life points.");
					}
					Click_AP = 0;		
					Vez_Persas = false;	
					Vez_Gregos = true;					
				}
			}
			
			for(var i = 0; i < KingG.length; i++)
			{
			if(mouse.x > ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w &&
			mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*2 && 
			mouse.y > ArcP[ArcsPChoosed].y &&
			mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h ||
			mouse.x > ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*2 &&
			mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*3 && 
			mouse.y > ArcP[ArcsPChoosed].y &&
			mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h ||
			mouse.x > ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*3 &&
			mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w*4 && 
			mouse.y > ArcP[ArcsPChoosed].y &&
			mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h ||
			mouse.x < ArcP[ArcsPChoosed].x &&
			mouse.x > ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w && 
			mouse.y > ArcP[ArcsPChoosed].y &&
			mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h ||
			mouse.x < ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w &&
			mouse.x > ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w*2 && 
			mouse.y > ArcP[ArcsPChoosed].y &&
			mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h ||
			mouse.x < ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w*2 &&
			mouse.x > ArcP[ArcsPChoosed].x - ArcP[ArcsPChoosed].w*3 && 
			mouse.y > ArcP[ArcsPChoosed].y &&
			mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h ||
			mouse.x > ArcP[ArcsPChoosed].x  &&
			mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
			mouse.y < ArcP[ArcsPChoosed].y &&
			mouse.y > ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h ||
			mouse.x > ArcP[ArcsPChoosed].x  &&
			mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
			mouse.y < ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h &&
			mouse.y > ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h*2 &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h ||
			mouse.x > ArcP[ArcsPChoosed].x  &&
			mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
			mouse.y < ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h*2 &&
			mouse.y > ArcP[ArcsPChoosed].y - ArcP[ArcsPChoosed].h*3 &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h ||
			mouse.x > ArcP[ArcsPChoosed].x  &&
			mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
			mouse.y > ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h &&
			mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*2 &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h ||
			mouse.x > ArcP[ArcsPChoosed].x  &&
			mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
			mouse.y > ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*2 &&
			mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*3 &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h ||
			mouse.x > ArcP[ArcsPChoosed].x  &&
			mouse.x < ArcP[ArcsPChoosed].x + ArcP[ArcsPChoosed].w && 
			mouse.y > ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*3 &&
			mouse.y < ArcP[ArcsPChoosed].y + ArcP[ArcsPChoosed].h*4 &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h)
			{
				if(Math.floor(randomRange(0,99)<20))
				{
					KingG[i].life -= 21;
					if(PTBR)
					{
						newLine("Golpe Critico! Rei Grego perde 21 pontos de vida.");
					}
					else
						newLine("Critical attack! - Greek King lose 21 life points.");
				}
				else
				{
					damage = Math.floor(randomRange(17,21))
					KingG[i].life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - Rei Grego perde "+damage+ " pontos de vida.");
					}
					else
								newLine("Normal attack - Greek King lose "+damage+" life points.");
				}
				Click_AP = 0;			
				Vez_Persas = false;				
				Vez_Gregos = true;	
			}
		}
		}
	
	}
}
function PersasCouldMoveA()
{	
	if((InfoArcG == true && ArcP[ArcsPChoosed].x == ArcG[ArcsGChoosed].x && ArcP[ArcsPChoosed].y == ArcG[ArcsGChoosed].y)||
	(InfoKntG == true && ArcP[ArcsPChoosed].x == KntG[KntsGChoosed].x && ArcP[ArcsPChoosed].y == KntG[KntsGChoosed].y) ||
	(InfoTorG == true && ArcP[ArcsPChoosed].x == TorG[TorsGChoosed].x && ArcP[ArcsPChoosed].y == TorG[TorsGChoosed].y) ||
	(InfoLancerG == true && ArcP[ArcsPChoosed].x == LancerG[LancersGChoosed].x && ArcP[ArcsPChoosed].y == LancerG[LancersGChoosed].y) ||
	(InfoGnrlG == true && ArcP[ArcsPChoosed].x == GnrlG[GnrlGChoosed].x && ArcP[ArcsPChoosed].y == GnrlG[GnrlGChoosed].y) ||
	(InfoKingG == true && ArcP[ArcsPChoosed].x == KingG[KingGChoosed].x && ArcP[ArcsPChoosed].y == KingG[KingGChoosed].y)||
	(ArcP[ArcsPChoosed].x == TreeA.x && ArcP[ArcsPChoosed].y == TreeA.y)||
	(ArcP[ArcsPChoosed].x == TreeB.x && ArcP[ArcsPChoosed].y == TreeB.y)||
	(ArcP[ArcsPChoosed].x == TreeC.x && ArcP[ArcsPChoosed].y == TreeC.y)||
	(ArcP[ArcsPChoosed].x == TreeD.x && ArcP[ArcsPChoosed].y == TreeD.y)||
	(ArcP[ArcsPChoosed].x == TreeE.x && ArcP[ArcsPChoosed].y == TreeE.y)||
	(ArcP[ArcsPChoosed].x == TreeF.x && ArcP[ArcsPChoosed].y == TreeF.y))
	{
		return true;
	}
	else return false;
}
function GregosCouldMoveA()
{
	if((InfoArcP == true && ArcG[ArcsGChoosed].x == ArcP[ArcsPChoosed].x && ArcG[ArcsGChoosed].y == ArcP[ArcsPChoosed].y)||
	(InfoKntP == true && ArcG[ArcsGChoosed].x == KntP[KntsPChoosed].x && ArcG[ArcsGChoosed].y == KntP[KntsPChoosed].y) ||
	(InfoTorP == true && ArcG[ArcsGChoosed].x == TorP[TorsPChoosed].x && ArcG[ArcsGChoosed].y == TorP[TorsPChoosed].y) ||
	(InfoLancerP == true && ArcG[ArcsGChoosed].x == LancerP[LancersPChoosed].x && ArcG[ArcsGChoosed].y == LancerP[LancersPChoosed].y) ||
	(InfoGnrlP == true && ArcG[ArcsGChoosed].x == GnrlP[GnrlPChoosed].x && ArcG[ArcsGChoosed].y == GnrlP[GnrlPChoosed].y) ||
	(InfoKingP == true && ArcG[ArcsGChoosed].x == KingP[KingPChoosed].x && ArcG[ArcsGChoosed].y == KingP[KingPChoosed].y)||
	(ArcG[ArcsGChoosed].x == TreeA.x && ArcG[ArcsGChoosed].y == TreeA.y)||
	(ArcG[ArcsGChoosed].x == TreeB.x && ArcG[ArcsGChoosed].y == TreeB.y)||
	(ArcG[ArcsGChoosed].x == TreeC.x && ArcG[ArcsGChoosed].y == TreeC.y)||
	(ArcG[ArcsGChoosed].x == TreeD.x && ArcG[ArcsGChoosed].y == TreeD.y)||
	(ArcG[ArcsGChoosed].x == TreeE.x && ArcG[ArcsGChoosed].y == TreeE.y)||
	(ArcG[ArcsGChoosed].x == TreeF.x && ArcG[ArcsGChoosed].y == TreeF.y))
	{
		return true;
	}
	else return false;
}


function DieArchers()
{
	for(var i = 0; i < ArcP.length; i++) 
	{
		if(ArcP[i].life <= 0) 
		{
			ArcP[i].dead = true;		
			ArcP[i].x = 0;
			ArcP[i].y = 0;
			ArcP[i].w = 0;
			ArcP[i].h = 0;
			ArcP[i].life = 0;
		}
	}
	for(var i = 0; i < ArcG.length; i++) 
	{
		if(ArcG[i].life <= 0)
		{
			ArcG[i].dead = true;						
			ArcG[i].x = 0;
			ArcG[i].y = 0;
			ArcG[i].w = 0;
			ArcG[i].h = 0;
			ArcG[i].life = 0;
		}		
	}
	
}
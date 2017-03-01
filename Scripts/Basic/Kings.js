 var PTBR = true;
	var ENUS = false;
 function KingsP(KingP_x, KingP_y, KingP_w, KingP_h, KingP_l)
{	
	this.x = KingP_x;
	this.y = KingP_y;
	this.w = KingP_w;
	this.h = KingP_h;
	this.life = KingP_l;
	this.dead = false;
	this.onClicked = false;;
	this.KingsP = new Image;
	if(PTBR)
	{
		this.KingsP.src = "Images/Rei_PersaPT.png";	
	}
	if(ENUS)
	{
		this.KingsP.src = "Images/Rei_PersaEN.png";	
	}
	this.update = function()
	{
		
	}
	
	this.draw = function(ctx)
	{					
		ctx.drawImage(this.KingsP, this.x, this.y, this.w, this.h);	
	}
}

var KingGChoosed;
var KingPChoosed;
var MovK = new Image;
MovK.src = "Images/Celula_M.png";
var AtkK = new Image;
//AtkK.src = "Images/Celula_A.png";


function KingsG(KingG_x, KingG_y, KingG_w, KingG_h, KingG_l)
{	
	this.x = KingG_x;
	this.y = KingG_y;
	this.w = KingG_w;
	this.h = KingG_h;
	this.life = KingG_l;
	this.dead = false;
	this.onClicked = false;;
	this.KingsG = new Image;
	
	if(PTBR)
	{
		this.KingsG.src = "Images/Rei_GregoPT.png";	
	}
	if(ENUS)
	{
		this.KingsG.src = "Images/Rei_GregoEN.png";
	}
	this.update = function()
	{
		
	}
	
	this.draw = function(ctx)
	{					
		ctx.drawImage(this.KingsG, this.x, this.y, this.w, this.h);	
	}
}

{//Rei Persa
	var KingP_x = [251];
	var KingP = [];
	var Click_KP = 0;

	for(var i = 0; i < 1; i++) 
	{
		KingP[i] = new KingsP(KingP_x[i], 101, 48, 48, 65);			
	}				
}

{//Rei Grego
	var KingG_x = [301];
	var KingG = [];
	var Click_KG = 0;
	
	for(var i = 0; i < 1; i++) 
	{
		KingG[i] = new KingsG(KingG_x[i], 551, 48, 48, 65);			
	}				
}
function updateKings()
{
	for(var i = 0; i < KingG.length; i++) 
	{
		if(mouse.press && KingG[i].dead == false &&
		mouse.x >= KingG[i].x &&
		mouse.x <= KingG[i].x + KingG[i].w &&
		mouse.y >= KingG[i].y &&
		mouse.y <= KingG[i].y + KingG[i].h)				
		{
			InfoArcG = false;
			InfoGnrlG = false;
			InfoKingG = true;
			InfoLancerG = false;
			InfoKntG = false;
			InfoTorG = false;
			InfoWallG = false;
			KingGChoosed = i;
		}
	}
	for(var i = 0; i < KingP.length; i++) 
	{		
		if(mouse.press && KingP[i].dead == false &&
		mouse.x >= KingP[i].x &&
		mouse.x <= KingP[i].x + KingP[i].w &&
		mouse.y >= KingP[i].y &&
		mouse.y <= KingP[i].y + KingP[i].h)				
		{
			InfoArcP = false;
			InfoLancerP = false;
			InfoTorP = false;
			InfoKingP = true;
			InfoGnrlP = false;
			InfoKntP = false;
			InfoWallP = false;
			KingPChoosed = i;
		}
	}
}
function UpdateKingG()
{
	if(Vez_Gregos)
	{
		for(var i = 0; i < KingG.length; i++) 
		{
			if(mouse.press && KingG[i].dead == false &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h)				
				{								
					Click_KG += 1;		
					Click_AG = 0;
					Click_LG = 0;  
					Click_TG = 0; 
					Click_GG = 0;  
					Click_CG = 0;
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
function UpdateKingP()
{
	if(Vez_Persas)
	{
		for(var i = 0; i < KingP.length; i++) 
		{		
			if(mouse.press && KingP[i].dead == false &&
				mouse.x >= KingP[i].x &&
				mouse.x <= KingP[i].x + KingP[i].w &&
				mouse.y >= KingP[i].y &&
				mouse.y <= KingP[i].y + KingP[i].h)				
			{					
				Click_KP += 1;		
				mouse.press = false;
				Click_AP = 0;
				Click_LP = 0;  
				Click_TP = 0; 
				Click_GP = 0;  
				Click_CP = 0;
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

function PossibilitiesK()
{
	if(Vez_Gregos)
	{
		if(Click_KG == 1)
		{
			if(KingG[KingGChoosed].y > 101)
			{
				context.drawImage(MovK, KingG[KingGChoosed].x , KingG[KingGChoosed].y - 50, KingG[KingGChoosed].w, KingG[KingGChoosed].h);			
			}
			if(KingG[KingGChoosed].y > 151)
			{
				context.drawImage(MovK, KingG[KingGChoosed].x , KingG[KingGChoosed].y - 100, KingG[KingGChoosed].w, KingG[KingGChoosed].h);
			}
			if(KingG[KingGChoosed].y < 551)
			{
				context.drawImage(MovK, KingG[KingGChoosed].x, KingG[KingGChoosed].y + 50, KingG[KingGChoosed].w, KingG[KingGChoosed].h);
			}
			if(KingG[KingGChoosed].y < 501)
			{
				context.drawImage(MovK, KingG[KingGChoosed].x, KingG[KingGChoosed].y + 100, KingG[KingGChoosed].w, KingG[KingGChoosed].h);
			}
					
			context.drawImage(MovK, KingG[KingGChoosed].x - 50 , KingG[KingGChoosed].y, KingG[KingGChoosed].w, KingG[KingGChoosed].h);
			context.drawImage(MovK, KingG[KingGChoosed].x + 50 , KingG[KingGChoosed].y, KingG[KingGChoosed].w, KingG[KingGChoosed].h);
			context.drawImage(MovK, KingG[KingGChoosed].x + 100, KingG[KingGChoosed].y , KingG[KingGChoosed].w, KingG[KingGChoosed].h);
			context.drawImage(MovK, KingG[KingGChoosed].x - 100 , KingG[KingGChoosed].y, KingG[KingGChoosed].w, KingG[KingGChoosed].h);
			
			if(mouse.x > KingG[KingGChoosed].x + KingG[KingGChoosed].w + 2 &&
			mouse.x < KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 && 
			mouse.y > KingG[KingGChoosed].y &&
			mouse.y < KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			KingG[KingGChoosed].x < 551)
			{
				KingG[KingGChoosed].x += 50;
				if(GregosCouldMoveK())
				{
					KingG[KingGChoosed].x -= 50;
					Click_KG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;		
				}
				else
				{
					Click_KG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;					
				}				
			}
			else if(mouse.x > KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 + 3 &&
			mouse.x < KingG[KingGChoosed].x + KingG[KingGChoosed].w*3 && 
			mouse.y > KingG[KingGChoosed].y &&
			mouse.y < KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			KingG[KingGChoosed].x < 501)
			{
				KingG[KingGChoosed].x += 100;
				if(GregosCouldMoveK() || TreeA.x + 50 == KingG[KingGChoosed].x && TreeA.y == KingG[KingGChoosed].y ||
				TreeB.x + 50 == KingG[KingGChoosed].x && TreeB.y == KingG[KingGChoosed].y ||
				TreeC.x + 50 == KingG[KingGChoosed].x && TreeC.y == KingG[KingGChoosed].y ||
				TreeD.x + 50 == KingG[KingGChoosed].x && TreeD.y == KingG[KingGChoosed].y ||
				TreeE.x + 50 == KingG[KingGChoosed].x && TreeE.y == KingG[KingGChoosed].y ||
				TreeF.x + 50 == KingG[KingGChoosed].x && TreeF.y == KingG[KingGChoosed].y)
				{
					KingG[KingGChoosed].x -= 100;
					Click_KG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;		
				}
				else
				{
					Click_KG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;					
				}
			}
			else if(mouse.x < KingG[KingGChoosed].x - 2 &&
			mouse.x > KingG[KingGChoosed].x - KingG[KingGChoosed].w && 
			mouse.y > KingG[KingGChoosed].y &&
			mouse.y < KingG[KingGChoosed].y + KingG[KingGChoosed].h)
			{
				KingG[KingGChoosed].x -= 50;
				
				if(GregosCouldMoveK())
				{
					KingG[KingGChoosed].x += 50;
					Click_KG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;		
				}
				else
				{
					Click_KG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;					
				}
			}
			else if(mouse.x < KingG[KingGChoosed].x - KingG[KingGChoosed].w - 3 &&
			mouse.x > KingG[KingGChoosed].x - KingG[KingGChoosed].w*2 && 
			mouse.y > KingG[KingGChoosed].y &&
			mouse.y < KingG[KingGChoosed].y + KingG[KingGChoosed].h)
			{
				KingG[KingGChoosed].x -= 100;
				if(GregosCouldMoveK())
				{
					KingG[KingGChoosed].x += 100;
					Click_KG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;		
				}
				else
				{
					Click_KG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;					
				}
			}
			
			else if(mouse.x > KingG[KingGChoosed].x  &&
			mouse.x < KingG[KingGChoosed].x + KingG[KingGChoosed].w && 
			mouse.y < KingG[KingGChoosed].y - 2 &&
			mouse.y > KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			KingG[KingGChoosed].y > 101)
			{
				KingG[KingGChoosed].y -= 50;
				
				if(GregosCouldMoveK())
				{
					KingG[KingGChoosed].y += 50;
					Click_KG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;		
				}
				else
				{
					Click_KG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;					
				}
			}
			else if(mouse.x > KingG[KingGChoosed].x  &&
			mouse.x < KingG[KingGChoosed].x + KingG[KingGChoosed].w && 
			mouse.y < KingG[KingGChoosed].y - KingG[KingGChoosed].h - 3 &&
			mouse.y > KingG[KingGChoosed].y - KingG[KingGChoosed].h*2 &&
			KingG[KingGChoosed].y > 151)
			{
				KingG[KingGChoosed].y -= 100;
				if(GregosCouldMoveK() || TreeA.x == KingG[KingGChoosed].x && TreeA.y - 50 == KingG[KingGChoosed].y ||
				TreeB.x == KingG[KingGChoosed].x && TreeB.y - 50 == KingG[KingGChoosed].y ||
				TreeC.x == KingG[KingGChoosed].x && TreeC.y - 50 == KingG[KingGChoosed].y ||
				TreeD.x == KingG[KingGChoosed].x && TreeD.y - 50 == KingG[KingGChoosed].y ||
				TreeE.x == KingG[KingGChoosed].x && TreeE.y - 50 == KingG[KingGChoosed].y ||
				TreeF.x == KingG[KingGChoosed].x && TreeF.y - 50 == KingG[KingGChoosed].y)
				{
					KingG[KingGChoosed].y += 100;
					Click_KG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;		
				}
				else
				{
					Click_KG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;					
				}
			}
			else  if(mouse.x > KingG[KingGChoosed].x  &&
			mouse.x < KingG[KingGChoosed].x + KingG[KingGChoosed].w && 
			mouse.y > KingG[KingGChoosed].y + KingG[KingGChoosed].h + 2 &&
			mouse.y < KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			KingG[KingGChoosed].y < 551)
			{
				KingG[KingGChoosed].y+=50;
				if(GregosCouldMoveK())
				{
					KingG[KingGChoosed].y -= 50;
					Click_KG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;		
				}
				else
				{
					Click_KG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;					
				}
			}
			else  if(mouse.x > KingG[KingGChoosed].x  &&
			mouse.x < KingG[KingGChoosed].x + KingG[KingGChoosed].w && 
			mouse.y > KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 + 3 &&
			mouse.y < KingG[KingGChoosed].y + KingG[KingGChoosed].h*3 &&
			KingG[KingGChoosed].y < 501)
			{
				KingG[KingGChoosed].y += 100;
				if(GregosCouldMoveK() || TreeA.x == KingG[KingGChoosed].x && TreeA.y + 50 == KingG[KingGChoosed].y ||
				TreeB.x == KingG[KingGChoosed].x && TreeB.y + 50 == KingG[KingGChoosed].y ||
				TreeC.x == KingG[KingGChoosed].x && TreeC.y + 50 == KingG[KingGChoosed].y ||
				TreeD.x == KingG[KingGChoosed].x && TreeD.y + 50 == KingG[KingGChoosed].y ||
				TreeE.x == KingG[KingGChoosed].x && TreeE.y + 50 == KingG[KingGChoosed].y ||
				TreeF.x == KingG[KingGChoosed].x && TreeF.y + 50 == KingG[KingGChoosed].y)
				{
					KingG[KingGChoosed].y -= 100;
					Click_KG = 1;
					Vez_Persas = false;	
					Vez_Gregos = true;		
				}
				else
				{
					Click_KG = 0;
					Vez_Persas = true;	
					Vez_Gregos = false;					
				}
			}
		}
		
	else if(Click_KG == 2)
	{
		context.drawImage(AtkK,KingG[KingGChoosed].x + 50, KingG[KingGChoosed].y, KingG[KingGChoosed].w, KingG[KingGChoosed].h);
		context.drawImage(AtkK,KingG[KingGChoosed].x - 50, KingG[KingGChoosed].y, KingG[KingGChoosed].w, KingG[KingGChoosed].h);
		context.drawImage(AtkK,KingG[KingGChoosed].x, KingG[KingGChoosed].y - 50, KingG[KingGChoosed].w, KingG[KingGChoosed].h);
		context.drawImage(AtkK,KingG[KingGChoosed].x, KingG[KingGChoosed].y + 50, KingG[KingGChoosed].w, KingG[KingGChoosed].h);
		context.drawImage(AtkK,KingG[KingGChoosed].x + 50, KingG[KingGChoosed].y + 50, KingG[KingGChoosed].w, KingG[KingGChoosed].h);
		context.drawImage(AtkK,KingG[KingGChoosed].x - 50, KingG[KingGChoosed].y - 50, KingG[KingGChoosed].w, KingG[KingGChoosed].h);
		context.drawImage(AtkK,KingG[KingGChoosed].x - 50, KingG[KingGChoosed].y + 50, KingG[KingGChoosed].w, KingG[KingGChoosed].h);
		context.drawImage(AtkK,KingG[KingGChoosed].x + 50, KingG[KingGChoosed].y - 50, KingG[KingGChoosed].w, KingG[KingGChoosed].h);
		context.drawImage(AtkK,KingG[KingGChoosed].x + 100, KingG[KingGChoosed].y - 100, KingG[KingGChoosed].w, KingG[KingGChoosed].h);
		context.drawImage(AtkK,KingG[KingGChoosed].x - 100, KingG[KingGChoosed].y + 100, KingG[KingGChoosed].w, KingG[KingGChoosed].h);
		context.drawImage(AtkK,KingG[KingGChoosed].x - 100, KingG[KingGChoosed].y - 100, KingG[KingGChoosed].w, KingG[KingGChoosed].h);
		context.drawImage(AtkK,KingG[KingGChoosed].x + 100, KingG[KingGChoosed].y + 100, KingG[KingGChoosed].w, KingG[KingGChoosed].h);
		
		if(mouse.x >= KingG[KingGChoosed].x  &&
		mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
		mouse.y <= KingG[KingGChoosed].y &&
		mouse.y >= KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
		mouse.x >= WallP_x &&
		mouse.x <= WallP_x + WallP_w &&
		mouse.y >= WallP_y &&
		mouse.y <= WallP_y + WallP_h ||
		mouse.x >= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
		mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
		mouse.y <= KingG[KingGChoosed].y &&
		mouse.y >= KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
		mouse.x >= WallP_x &&
		mouse.x <= WallP_x + WallP_w &&
		mouse.y >= WallP_y &&
		mouse.y <= WallP_y + WallP_h ||
		mouse.x <= KingG[KingGChoosed].x  &&
		mouse.x >= KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
		mouse.y <= KingG[KingGChoosed].y &&
		mouse.y >= KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
		mouse.x >= WallP_x &&
		mouse.x <= WallP_x + WallP_w &&
		mouse.y >= WallP_y &&
		mouse.y <= WallP_y + WallP_h ||
		mouse.x >= KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
		mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w*3 &&
		mouse.y <= KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
		mouse.y >= KingG[KingGChoosed].y - KingG[KingGChoosed].h*2 &&
		mouse.x >= WallP_x &&
		mouse.x <= WallP_x + WallP_w &&
		mouse.y >= WallP_y &&
		mouse.y <= WallP_y + WallP_h ||
		mouse.x <= KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
		mouse.x >= KingG[KingGChoosed].x - KingG[KingGChoosed].w*2 &&
		mouse.y <= KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
		mouse.y >= KingG[KingGChoosed].y - KingG[KingGChoosed].h*2 &&
		mouse.x >= WallP_x &&
		mouse.x <= WallP_x + WallP_w &&
		mouse.y >= WallP_y &&
		mouse.y <= WallP_y + WallP_h)
		{
			damage = Math.floor(randomRange(25,32));
			if(Math.floor(randomRange(0,99)<20))
			{
				WallP_life -= 32;
				if(PTBR)
				{
					newLine("Golpe Critico! Muralha Persa perde 32 pontos de vida.");
				}
				else
							newLine("Critical attack! - Persian Wall lose 32 life points.");
			}
			else
			{
				WallP_life -= damage
				if(PTBR)
				{
					newLine("Golpe Normal - Muralha Persa perde " +damage+ " pontos de vida.");
				}
				else
							newLine("Normal attack - Persian Wall lose "+damage+" life points.");
			}
			Click_KG = 0;
			Vez_Gregos = false;	
			Vez_Persas = true;
		}
		
		for(var i = 0; i < KntP.length; i++)
		{
			if(mouse.x >= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.y >= KingG[KingGChoosed].y &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			mouse.x >= KntP[i].x &&
			mouse.x <= KntP[i].x + KntP[i].w &&
			mouse.y >= KntP[i].y &&
			mouse.y <= KntP[i].y + KntP[i].h ||
			mouse.x <= KingG[KingGChoosed].x  &&
			mouse.x >= KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.y >= KingG[KingGChoosed].y &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			mouse.x >= KntP[i].x &&
			mouse.x <= KntP[i].x + KntP[i].w &&
			mouse.y >= KntP[i].y &&
			mouse.y <= KntP[i].y + KntP[i].h ||
			mouse.x >= KingG[KingGChoosed].x  &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.y <= KingG[KingGChoosed].y &&
			mouse.y >= KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.x >= KntP[i].x &&
			mouse.x <= KntP[i].x + KntP[i].w &&
			mouse.y >= KntP[i].y &&
			mouse.y <= KntP[i].y + KntP[i].h ||
			mouse.x >= KingG[KingGChoosed].x &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.y >= KingG[KingGChoosed].y + KingG[KingGChoosed].h  &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.x >= KntP[i].x &&
			mouse.x <= KntP[i].x + KntP[i].w &&
			mouse.y >= KntP[i].y &&
			mouse.y <= KntP[i].y + KntP[i].h ||
			mouse.x >= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.y <= KingG[KingGChoosed].y&
			mouse.y >= KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.x >= KntP[i].x &&
			mouse.x <= KntP[i].x + KntP[i].w &&
			mouse.y >= KntP[i].y &&
			mouse.y <= KntP[i].y + KntP[i].h ||
			mouse.x <= KingG[KingGChoosed].x &&
			mouse.x >= KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.y <= KingG[KingGChoosed].y &&
			mouse.y >= KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.x >= KntP[i].x &&
			mouse.x <= KntP[i].x + KntP[i].w &&
			mouse.y >= KntP[i].y &&
			mouse.y <= KntP[i].y + KntP[i].h ||
			mouse.x <= KingG[KingGChoosed].x &&
			mouse.x >= KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.y >= KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.x >= KntP[i].x &&
			mouse.x <= KntP[i].x + KntP[i].w &&
			mouse.y >= KntP[i].y &&
			mouse.y <= KntP[i].y + KntP[i].h ||
			mouse.x >= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.y >= KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.x >= KntP[i].x &&
			mouse.x <= KntP[i].x + KntP[i].w &&
			mouse.y >= KntP[i].y &&
			mouse.y <= KntP[i].y + KntP[i].h)
			{
				damage = Math.floor(randomRange(21,29))
				if(Math.floor(randomRange(0,99)<20))
				{
					KntP[i].life -= 32;
					if(PTBR)
					{
						newLine("Golpe Critico! Cavaleiro Persa perde 32 pontos de vida.");
					}
					else
								newLine("Critical attack! - Persian Knight lose 32 life points.");
				}
				else
				{
					KntP[i].life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - Cavaleiro Persa perde " +damage+ " pontos de vida.")
					}
					else
								newLine("Normal attack - Persian Knight lose "+damage+" life points.");
				}
				Click_KG = 0;	
				Vez_Persas = true;
				Vez_Gregos = false;	
			}
			if(mouse.x > KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
				mouse.x < KingG[KingGChoosed].x + KingG[KingGChoosed].w*3 &&
				mouse.y > KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
				mouse.y < KingG[KingGChoosed].y + KingG[KingGChoosed].h*3 &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h ||
				mouse.x < KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
				mouse.x > KingG[KingGChoosed].x - KingG[KingGChoosed].w*2 &&
				mouse.y > KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
				mouse.y < KingG[KingGChoosed].y + KingG[KingGChoosed].h*3 &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h ||
				mouse.x < KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
				mouse.x > KingG[KingGChoosed].x - KingG[KingGChoosed].w*2 &&
				mouse.y < KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
				mouse.y > KingG[KingGChoosed].y - KingG[KingGChoosed].h*2 &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h ||
				mouse.x > KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
				mouse.x < KingG[KingGChoosed].x + KingG[KingGChoosed].w*3 &&
				mouse.y < KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
				mouse.y > KingG[KingGChoosed].y - KingG[KingGChoosed].h*2 &&
				mouse.x >= KntP[i].x &&
				mouse.x <= KntP[i].x + KntP[i].w &&
				mouse.y >= KntP[i].y &&
				mouse.y <= KntP[i].y + KntP[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						KntP[i].life -= 32;
						if(PTBR)
						{
							newLine("Golpe Critico! Cavaleiro Persa perde 32 pontos de vida.");
						}
						else
								newLine("Critical attack! - Persian Knight lose 32 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(19,23));
						KntP[i].life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - Cavaleiro Persa perde "+damage+" pontos de vida.")
						}
						else
								newLine("Normal attack - Persian Knight lose "+damage+" life points.");
					}
					Click_KG = 0;	
					Vez_Persas = true;
					Vez_Gregos = false;	
				}
		}
		
		for(var i = 0; i < ArcP.length; i++)
		{
			if(mouse.x >= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.y >= KingG[KingGChoosed].y &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			mouse.x >= ArcP[i].x &&
			mouse.x <= ArcP[i].x + ArcP[i].w &&
			mouse.y >= ArcP[i].y &&
			mouse.y <= ArcP[i].y + ArcP[i].h ||
			mouse.x <= KingG[KingGChoosed].x  &&
			mouse.x >= KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.y >= KingG[KingGChoosed].y &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			mouse.x >= ArcP[i].x &&
			mouse.x <= ArcP[i].x + ArcP[i].w &&
			mouse.y >= ArcP[i].y &&
			mouse.y <= ArcP[i].y + ArcP[i].h ||
			mouse.x >= KingG[KingGChoosed].x  &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.y <= KingG[KingGChoosed].y &&
			mouse.y >= KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.x >= ArcP[i].x &&
			mouse.x <= ArcP[i].x + ArcP[i].w &&
			mouse.y >= ArcP[i].y &&
			mouse.y <= ArcP[i].y + ArcP[i].h ||
			mouse.x >= KingG[KingGChoosed].x &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.y >= KingG[KingGChoosed].y + KingG[KingGChoosed].h  &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.x >= ArcP[i].x &&
			mouse.x <= ArcP[i].x + ArcP[i].w &&
			mouse.y >= ArcP[i].y &&
			mouse.y <= ArcP[i].y + ArcP[i].h ||
			mouse.x >= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.y <= KingG[KingGChoosed].y&
			mouse.y >= KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.x >= ArcP[i].x &&
			mouse.x <= ArcP[i].x + ArcP[i].w &&
			mouse.y >= ArcP[i].y &&
			mouse.y <= ArcP[i].y + ArcP[i].h ||
			mouse.x <= KingG[KingGChoosed].x &&
			mouse.x >= KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.y <= KingG[KingGChoosed].y &&
			mouse.y >= KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.x >= ArcP[i].x &&
			mouse.x <= ArcP[i].x + ArcP[i].w &&
			mouse.y >= ArcP[i].y &&
			mouse.y <= ArcP[i].y + ArcP[i].h ||
			mouse.x <= KingG[KingGChoosed].x &&
			mouse.x >= KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.y >= KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.x >= ArcP[i].x &&
			mouse.x <= ArcP[i].x + ArcP[i].w &&
			mouse.y >= ArcP[i].y &&
			mouse.y <= ArcP[i].y + ArcP[i].h ||
			mouse.x >= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.y >= KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.x >= ArcP[i].x &&
			mouse.x <= ArcP[i].x + ArcP[i].w &&
			mouse.y >= ArcP[i].y &&
			mouse.y <= ArcP[i].y + ArcP[i].h)
			{
				
				if(Math.floor(randomRange(0,99)<20))
				{
					ArcP[i].life -= 32;
					if(PTBR)
					{
						newLine("Golpe Critico! Arqueiro Persa perde 32 pontos de vida.");
					}
					else
						newLine("Critical attack! - Persian Archer lose 32 life points.");
				}
				else
				{
					damage = Math.floor(randomRange(21,29))
					ArcP[i].life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - Arqueiro Persa perde "+damage+" pontos de vida")
					}
					else
						newLine("Normal attack - Persian Archer lose "+damage+" life points.");
				}
				Click_KG = 0;	
				Vez_Persas = true;
				Vez_Gregos = false;	
			}
			if(mouse.x > KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.x < KingG[KingGChoosed].x + KingG[KingGChoosed].w*3 &&
			mouse.y > KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.y < KingG[KingGChoosed].y + KingG[KingGChoosed].h*3 &&
			mouse.x >= ArcP[i].x &&
			mouse.x <= ArcP[i].x + ArcP[i].w &&
			mouse.y >= ArcP[i].y &&
			mouse.y <= ArcP[i].y + ArcP[i].h ||
			mouse.x < KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.x > KingG[KingGChoosed].x - KingG[KingGChoosed].w*2 &&
			mouse.y > KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.y < KingG[KingGChoosed].y + KingG[KingGChoosed].h*3 &&
			mouse.x >= ArcP[i].x &&
			mouse.x <= ArcP[i].x + ArcP[i].w &&
			mouse.y >= ArcP[i].y &&
			mouse.y <= ArcP[i].y + ArcP[i].h ||
			mouse.x < KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.x > KingG[KingGChoosed].x - KingG[KingGChoosed].w*2 &&
			mouse.y < KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.y > KingG[KingGChoosed].y - KingG[KingGChoosed].h*2 &&
			mouse.x >= ArcP[i].x &&
			mouse.x <= ArcP[i].x + ArcP[i].w &&
			mouse.y >= ArcP[i].y &&
			mouse.y <= ArcP[i].y + ArcP[i].h ||
			mouse.x > KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.x < KingG[KingGChoosed].x + KingG[KingGChoosed].w*3 &&
			mouse.y < KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.y > KingG[KingGChoosed].y - KingG[KingGChoosed].h*2 &&
			mouse.x >= ArcP[i].x &&
			mouse.x <= ArcP[i].x + ArcP[i].w &&
			mouse.y >= ArcP[i].y &&
			mouse.y <= ArcP[i].y + ArcP[i].h)
			{
				
				if(Math.floor(randomRange(0,99)<20))
				{
					ArcP[i].life -= 32;
					if(PTBR)
					{
						newLine("Golpe Critico! Arqueiro Persa perde 32 pontos de vida.");
					}
					else
						newLine("Critical attack! - Persian Archer lose 32 life points.");
				}
				else
				{
					damage = Math.floor(randomRange(19,23))
					ArcP[i].life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - Arqueiro Persa perde "+damage+" pontos de vida.")
					}
					else
						newLine("Normal attack - Persian Archer lose "+damage+" life points.");
				}
				Click_KG = 0;	
				Vez_Persas = true;
				Vez_Gregos = false;	
			}
		}
		
		for(var i = 0; i < TorP.length; i++)
		{
			if(mouse.x >= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.y >= KingG[KingGChoosed].y &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			mouse.x >= TorP[i].x &&
			mouse.x <= TorP[i].x + TorP[i].w &&
			mouse.y >= TorP[i].y &&
			mouse.y <= TorP[i].y + TorP[i].h ||
			mouse.x <= KingG[KingGChoosed].x  &&
			mouse.x >= KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.y >= KingG[KingGChoosed].y &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			mouse.x >= TorP[i].x &&
			mouse.x <= TorP[i].x + TorP[i].w &&
			mouse.y >= TorP[i].y &&
			mouse.y <= TorP[i].y + TorP[i].h ||
			mouse.x >= KingG[KingGChoosed].x  &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.y <= KingG[KingGChoosed].y &&
			mouse.y >= KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.x >= TorP[i].x &&
			mouse.x <= TorP[i].x + TorP[i].w &&
			mouse.y >= TorP[i].y &&
			mouse.y <= TorP[i].y + TorP[i].h ||
			mouse.x >= KingG[KingGChoosed].x &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.y >= KingG[KingGChoosed].y + KingG[KingGChoosed].h  &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.x >= TorP[i].x &&
			mouse.x <= TorP[i].x + TorP[i].w &&
			mouse.y >= TorP[i].y &&
			mouse.y <= TorP[i].y + TorP[i].h ||
			mouse.x >= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.y <= KingG[KingGChoosed].y&
			mouse.y >= KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.x >= TorP[i].x &&
			mouse.x <= TorP[i].x + TorP[i].w &&
			mouse.y >= TorP[i].y &&
			mouse.y <= TorP[i].y + TorP[i].h ||
			mouse.x <= KingG[KingGChoosed].x &&
			mouse.x >= KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.y <= KingG[KingGChoosed].y &&
			mouse.y >= KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.x >= TorP[i].x &&
			mouse.x <= TorP[i].x + TorP[i].w &&
			mouse.y >= TorP[i].y &&
			mouse.y <= TorP[i].y + TorP[i].h ||
			mouse.x <= KingG[KingGChoosed].x &&
			mouse.x >= KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.y >= KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.x >= TorP[i].x &&
			mouse.x <= TorP[i].x + TorP[i].w &&
			mouse.y >= TorP[i].y &&
			mouse.y <= TorP[i].y + TorP[i].h ||
			mouse.x >= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.y >= KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.x >= TorP[i].x &&
			mouse.x <= TorP[i].x + TorP[i].w &&
			mouse.y >= TorP[i].y &&
			mouse.y <= TorP[i].y + TorP[i].h)
			{
				if(Math.floor(randomRange(0,99)<20))
				{
					TorP[i].life -= 32;
					if(PTBR)
					{
						newLine("Golpe Critico! Torre Persa perde 32 pontos de vida.");
					}
					else
							newLine("Critical attack! - Persian Tower lose 32 life points.");
				}
				else
				{
					damage = Math.floor(randomRange(21,29));
					TorP[i].life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - Torre Persa perde "+damage+ "pontos de vida.")
					}
						else
												newLine("Normal attack - Persian Tower lose "+damage+" life points.");
				}
				Click_KG = 0;	
				Vez_Persas = true;
				Vez_Gregos = false;	
			}
			if(mouse.x > KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.x < KingG[KingGChoosed].x + KingG[KingGChoosed].w*3 &&
			mouse.y > KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.y < KingG[KingGChoosed].y + KingG[KingGChoosed].h*3 &&
			mouse.x >= TorP[i].x &&
			mouse.x <= TorP[i].x + TorP[i].w &&
			mouse.y >= TorP[i].y &&
			mouse.y <= TorP[i].y + TorP[i].h ||
			mouse.x < KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.x > KingG[KingGChoosed].x - KingG[KingGChoosed].w*2 &&
			mouse.y > KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.y < KingG[KingGChoosed].y + KingG[KingGChoosed].h*3 &&
			mouse.x >= TorP[i].x &&
			mouse.x <= TorP[i].x + TorP[i].w &&
			mouse.y >= TorP[i].y &&
			mouse.y <= TorP[i].y + TorP[i].h ||
			mouse.x < KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.x > KingG[KingGChoosed].x - KingG[KingGChoosed].w*2 &&
			mouse.y < KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.y > KingG[KingGChoosed].y - KingG[KingGChoosed].h*2 &&
			mouse.x >= TorP[i].x &&
			mouse.x <= TorP[i].x + TorP[i].w &&
			mouse.y >= TorP[i].y &&
			mouse.y <= TorP[i].y + TorP[i].h ||
			mouse.x > KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.x < KingG[KingGChoosed].x + KingG[KingGChoosed].w*3 &&
			mouse.y < KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.y > KingG[KingGChoosed].y - KingG[KingGChoosed].h*2 &&
			mouse.x >= TorP[i].x &&
			mouse.x <= TorP[i].x + TorP[i].w &&
			mouse.y >= TorP[i].y &&
			mouse.y <= TorP[i].y + TorP[i].h)
			{
				if(Math.floor(randomRange(0,99)<20))
				{
					TorP[i].life -= 32;
					if(PTBR)
					{
						newLine("Golpe Critico! Torre Persa perde 32 pontos de vida.");
					}
					else
							newLine("Critical attack! - Persian Tower lose 32 life points.");
				}	
				else
				{
					damage = Math.floor(randomRange(19,23))
					TorP[i].life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - Torre Persa perde "+damage+ " pontos de vida.")
					}
						else
												newLine("Normal attack - Persian Tower lose "+damage+" life points.");
				}
				Click_KG = 0;	
				Vez_Persas = true;
				Vez_Gregos = false;	
			}
		}
		
		for(var i = 0; i < KingP.length; i++)
		{
			if(mouse.x >= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.y >= KingG[KingGChoosed].y &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			mouse.x >= KingP[i].x &&
			mouse.x <= KingP[i].x + KingP[i].w &&
			mouse.y >= KingP[i].y &&
			mouse.y <= KingP[i].y + KingP[i].h ||
			mouse.x <= KingG[KingGChoosed].x  &&
			mouse.x >= KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.y >= KingG[KingGChoosed].y &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			mouse.x >= KingP[i].x &&
			mouse.x <= KingP[i].x + KingP[i].w &&
			mouse.y >= KingP[i].y &&
			mouse.y <= KingP[i].y + KingP[i].h ||
			mouse.x >= KingG[KingGChoosed].x  &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.y <= KingG[KingGChoosed].y &&
			mouse.y >= KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.x >= KingP[i].x &&
			mouse.x <= KingP[i].x + KingP[i].w &&
			mouse.y >= KingP[i].y &&
			mouse.y <= KingP[i].y + KingP[i].h ||
			mouse.x >= KingG[KingGChoosed].x &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.y >= KingG[KingGChoosed].y + KingG[KingGChoosed].h  &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.x >= KingP[i].x &&
			mouse.x <= KingP[i].x + KingP[i].w &&
			mouse.y >= KingP[i].y &&
			mouse.y <= KingP[i].y + KingP[i].h ||
			mouse.x >= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.y <= KingG[KingGChoosed].y&
			mouse.y >= KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.x >= KingP[i].x &&
			mouse.x <= KingP[i].x + KingP[i].w &&
			mouse.y >= KingP[i].y &&
			mouse.y <= KingP[i].y + KingP[i].h ||
			mouse.x <= KingG[KingGChoosed].x &&
			mouse.x >= KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.y <= KingG[KingGChoosed].y &&
			mouse.y >= KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.x >= KingP[i].x &&
			mouse.x <= KingP[i].x + KingP[i].w &&
			mouse.y >= KingP[i].y &&
			mouse.y <= KingP[i].y + KingP[i].h ||
			mouse.x <= KingG[KingGChoosed].x &&
			mouse.x >= KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.y >= KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.x >= KingP[i].x &&
			mouse.x <= KingP[i].x + KingP[i].w &&
			mouse.y >= KingP[i].y &&
			mouse.y <= KingP[i].y + KingP[i].h ||
			mouse.x >= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.y >= KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.x >= KingP[i].x &&
			mouse.x <= KingP[i].x + KingP[i].w &&
			mouse.y >= KingP[i].y &&
			mouse.y <= KingP[i].y + KingP[i].h)
			{
				
				if(Math.floor(randomRange(0,99)<20))
				{
					KingP[i].life -= 32;
					if(PTBR)
					{
						newLine("Golpe Critico! Rei Persa perde 32 pontos de vida.");
					}
					else
								newLine("Critical attack! - Persian King lose 32 life points.");
				}
				else
				{
					damage = Math.floor(randomRange(21,29));
					KingP[i].life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - Rei Persa perde "+damage+" pontos de vida.")
					}
					else
													newLine("Normal attack - Persian King lose "+damage+" life points.");
				}
				Click_KG = 0;	
				Vez_Persas = true;
				Vez_Gregos = false;	
			}
			if(mouse.x > KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.x < KingG[KingGChoosed].x + KingG[KingGChoosed].w*3 &&
			mouse.y > KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.y < KingG[KingGChoosed].y + KingG[KingGChoosed].h*3 &&
			mouse.x >= KingP[i].x &&
			mouse.x <= KingP[i].x + KingP[i].w &&
			mouse.y >= KingP[i].y &&
			mouse.y <= KingP[i].y + KingP[i].h ||
			mouse.x < KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.x > KingG[KingGChoosed].x - KingG[KingGChoosed].w*2 &&
			mouse.y > KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.y < KingG[KingGChoosed].y + KingG[KingGChoosed].h*3 &&
			mouse.x >= KingP[i].x &&
			mouse.x <= KingP[i].x + KingP[i].w &&
			mouse.y >= KingP[i].y &&
			mouse.y <= KingP[i].y + KingP[i].h ||
			mouse.x < KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.x > KingG[KingGChoosed].x - KingG[KingGChoosed].w*2 &&
			mouse.y < KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.y > KingG[KingGChoosed].y - KingG[KingGChoosed].h*2 &&
			mouse.x >= KingP[i].x &&
			mouse.x <= KingP[i].x + KingP[i].w &&
			mouse.y >= KingP[i].y &&
			mouse.y <= KingP[i].y + KingP[i].h ||
			mouse.x > KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.x < KingG[KingGChoosed].x + KingG[KingGChoosed].w*3 &&
			mouse.y < KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.y > KingG[KingGChoosed].y - KingG[KingGChoosed].h*2 &&
			mouse.x >= KingP[i].x &&
			mouse.x <= KingP[i].x + KingP[i].w &&
			mouse.y >= KingP[i].y &&
			mouse.y <= KingP[i].y + KingP[i].h)
			{
				if(Math.floor(randomRange(0,99)<20))
				{
					KingP[i].life -= 32;
					if(PTBR)
					{
						newLine("Golpe Critico! Rei Persa perde 32 pontos de vida.");
					}
					else
								newLine("Critical attack! - Persian King lose 32 life points.");
				}
				else
				{	
					damage = damage = Math.floor(randomRange(19,23));
					KingP[i].life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - Rei Persa perde "+damage+" pontos de vida." )
					}
					else
													newLine("Normal attack - Persian King lose "+damage+" life points.");
				}
				Click_KG = 0;	
				Vez_Persas = true;
				Vez_Gregos = false;	
			}
		}
		
		for(var i = 0; i < GnrlP.length; i++)
		{
			if(mouse.x >= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.y >= KingG[KingGChoosed].y &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			mouse.x >= GnrlP[i].x &&
			mouse.x <= GnrlP[i].x + GnrlP[i].w &&
			mouse.y >= GnrlP[i].y &&
			mouse.y <= GnrlP[i].y + GnrlP[i].h ||
			mouse.x <= KingG[KingGChoosed].x  &&
			mouse.x >= KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.y >= KingG[KingGChoosed].y &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			mouse.x >= GnrlP[i].x &&
			mouse.x <= GnrlP[i].x + GnrlP[i].w &&
			mouse.y >= GnrlP[i].y &&
			mouse.y <= GnrlP[i].y + GnrlP[i].h ||
			mouse.x >= KingG[KingGChoosed].x  &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.y <= KingG[KingGChoosed].y &&
			mouse.y >= KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.x >= GnrlP[i].x &&
			mouse.x <= GnrlP[i].x + GnrlP[i].w &&
			mouse.y >= GnrlP[i].y &&
			mouse.y <= GnrlP[i].y + GnrlP[i].h ||
			mouse.x >= KingG[KingGChoosed].x &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.y >= KingG[KingGChoosed].y + KingG[KingGChoosed].h  &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.x >= GnrlP[i].x &&
			mouse.x <= GnrlP[i].x + GnrlP[i].w &&
			mouse.y >= GnrlP[i].y &&
			mouse.y <= GnrlP[i].y + GnrlP[i].h ||
			mouse.x >= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.y <= KingG[KingGChoosed].y&
			mouse.y >= KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.x >= GnrlP[i].x &&
			mouse.x <= GnrlP[i].x + GnrlP[i].w &&
			mouse.y >= GnrlP[i].y &&
			mouse.y <= GnrlP[i].y + GnrlP[i].h ||
			mouse.x <= KingG[KingGChoosed].x &&
			mouse.x >= KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.y <= KingG[KingGChoosed].y &&
			mouse.y >= KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.x >= GnrlP[i].x &&
			mouse.x <= GnrlP[i].x + GnrlP[i].w &&
			mouse.y >= GnrlP[i].y &&
			mouse.y <= GnrlP[i].y + GnrlP[i].h ||
			mouse.x <= KingG[KingGChoosed].x &&
			mouse.x >= KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.y >= KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.x >= GnrlP[i].x &&
			mouse.x <= GnrlP[i].x + GnrlP[i].w &&
			mouse.y >= GnrlP[i].y &&
			mouse.y <= GnrlP[i].y + GnrlP[i].h ||
			mouse.x >= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.y >= KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.x >= GnrlP[i].x &&
			mouse.x <= GnrlP[i].x + GnrlP[i].w &&
			mouse.y >= GnrlP[i].y &&
			mouse.y <= GnrlP[i].y + GnrlP[i].h)
			{
				if(Math.floor(randomRange(0,99)<20))
				{
					GnrlP[i].life -= 32;
					if(PTBR)
					{
						newLine("Golpe Critico! General Persa perde 32 pontos de vida.");
					}
					else
							newLine("Critical attack! - Persian General lose 32 life points.");
				}
				else
				{
					damage = Math.floor(randomRange(21,29));
					GnrlP[i].life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - General Persa perde "+damage+ "pontos de vida.")
					}
					else
							newLine("Normal attack - Persian General lose "+damage+" life points.");
				}
				Click_KG = 0;	
				Vez_Persas = true;
				Vez_Gregos = false;	
			}
			if(mouse.x > KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.x < KingG[KingGChoosed].x + KingG[KingGChoosed].w*3 &&
			mouse.y > KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.y < KingG[KingGChoosed].y + KingG[KingGChoosed].h*3 &&
			mouse.x >= GnrlP[i].x &&
			mouse.x <= GnrlP[i].x + GnrlP[i].w &&
			mouse.y >= GnrlP[i].y &&
			mouse.y <= GnrlP[i].y + GnrlP[i].h ||
			mouse.x < KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.x > KingG[KingGChoosed].x - KingG[KingGChoosed].w*2 &&
			mouse.y > KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.y < KingG[KingGChoosed].y + KingG[KingGChoosed].h*3 &&
			mouse.x >= GnrlP[i].x &&
			mouse.x <= GnrlP[i].x + GnrlP[i].w &&
			mouse.y >= GnrlP[i].y &&
			mouse.y <= GnrlP[i].y + GnrlP[i].h ||
			mouse.x < KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.x > KingG[KingGChoosed].x - KingG[KingGChoosed].w*2 &&
			mouse.y < KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.y > KingG[KingGChoosed].y - KingG[KingGChoosed].h*2 &&
			mouse.x >= GnrlP[i].x &&
			mouse.x <= GnrlP[i].x + GnrlP[i].w &&
			mouse.y >= GnrlP[i].y &&
			mouse.y <= GnrlP[i].y + GnrlP[i].h ||
			mouse.x > KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.x < KingG[KingGChoosed].x + KingG[KingGChoosed].w*3 &&
			mouse.y < KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.y > KingG[KingGChoosed].y - KingG[KingGChoosed].h*2 &&
			mouse.x >= GnrlP[i].x &&
			mouse.x <= GnrlP[i].x + GnrlP[i].w &&
			mouse.y >= GnrlP[i].y &&
			mouse.y <= GnrlP[i].y + GnrlP[i].h)
			{
				if(Math.floor(randomRange(0,99)<20))
				{
					GnrlP[i].life -= 32;
					if(PTBR)
					{
						newLine("Golpe Critico! General Persa perde 32 pontos de vida.");
					}
					else
							newLine("Critical attack! - Persian General lose 32 life points.");
				}
				else
				{
					damage = Math.floor(randomRange(19,23));
					GnrlP[i].life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - General Persa perde "+damage+" pontos de vida.")
					}
					else
							newLine("Normal attack - Persian General lose "+damage+" life points.");
				}
				Click_KG = 0;	
				Vez_Persas = true;
				Vez_Gregos = false;	
			}
		}
		
		for(var i = 0; i < LancerP.length; i++)
		{
			if(mouse.x >= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.y >= KingG[KingGChoosed].y &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			mouse.x >= LancerP[i].x &&
			mouse.x <= LancerP[i].x + LancerP[i].w &&
			mouse.y >= LancerP[i].y &&
			mouse.y <= LancerP[i].y + LancerP[i].h ||
			mouse.x <= KingG[KingGChoosed].x  &&
			mouse.x >= KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.y >= KingG[KingGChoosed].y &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			mouse.x >= LancerP[i].x &&
			mouse.x <= LancerP[i].x + LancerP[i].w &&
			mouse.y >= LancerP[i].y &&
			mouse.y <= LancerP[i].y + LancerP[i].h ||
			mouse.x >= KingG[KingGChoosed].x  &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.y <= KingG[KingGChoosed].y &&
			mouse.y >= KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.x >= LancerP[i].x &&
			mouse.x <= LancerP[i].x + LancerP[i].w &&
			mouse.y >= LancerP[i].y &&
			mouse.y <= LancerP[i].y + LancerP[i].h ||
			mouse.x >= KingG[KingGChoosed].x &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.y >= KingG[KingGChoosed].y + KingG[KingGChoosed].h  &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.x >= LancerP[i].x &&
			mouse.x <= LancerP[i].x + LancerP[i].w &&
			mouse.y >= LancerP[i].y &&
			mouse.y <= LancerP[i].y + LancerP[i].h ||
			mouse.x >= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.y <= KingG[KingGChoosed].y&
			mouse.y >= KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.x >= LancerP[i].x &&
			mouse.x <= LancerP[i].x + LancerP[i].w &&
			mouse.y >= LancerP[i].y &&
			mouse.y <= LancerP[i].y + LancerP[i].h ||
			mouse.x <= KingG[KingGChoosed].x &&
			mouse.x >= KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.y <= KingG[KingGChoosed].y &&
			mouse.y >= KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.x >= LancerP[i].x &&
			mouse.x <= LancerP[i].x + LancerP[i].w &&
			mouse.y >= LancerP[i].y &&
			mouse.y <= LancerP[i].y + LancerP[i].h ||
			mouse.x <= KingG[KingGChoosed].x &&
			mouse.x >= KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.y >= KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.x >= LancerP[i].x &&
			mouse.x <= LancerP[i].x + LancerP[i].w &&
			mouse.y >= LancerP[i].y &&
			mouse.y <= LancerP[i].y + LancerP[i].h ||
			mouse.x >= KingG[KingGChoosed].x + KingG[KingGChoosed].w &&
			mouse.x <= KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.y >= KingG[KingGChoosed].y + KingG[KingGChoosed].h &&
			mouse.y <= KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.x >= LancerP[i].x &&
			mouse.x <= LancerP[i].x + LancerP[i].w &&
			mouse.y >= LancerP[i].y &&
			mouse.y <= LancerP[i].y + LancerP[i].h)
			{
				if(Math.floor(randomRange(0,99)<20))
				{
					LancerP[i].life -= 32;
					if(PTBR)
					{
						newLine("Golpe Critico! Lanceiro Persa perde 32 pontos de vida.");
					}
					else
						newLine("Critical attack! - Persian Lancer lose 32 life points.");
				}
				else
				{
					damage = Math.floor(randomRange(21,29));
					LancerP[i].life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - Lanceiro Persa perde "+damage+" pontos de vida.")
					}
					else
						newLine("Normal attack - Persian Lancer lose "+damage+" life points.");
				}
				Click_KG = 0;	
				Vez_Persas = true;
				Vez_Gregos = false;	
			}
			if(mouse.x > KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.x < KingG[KingGChoosed].x + KingG[KingGChoosed].w*3 &&
			mouse.y > KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.y < KingG[KingGChoosed].y + KingG[KingGChoosed].h*3 &&
			mouse.x >= LancerP[i].x &&
			mouse.x <= LancerP[i].x + LancerP[i].w &&
			mouse.y >= LancerP[i].y &&
			mouse.y <= LancerP[i].y + LancerP[i].h ||
			mouse.x < KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.x > KingG[KingGChoosed].x - KingG[KingGChoosed].w*2 &&
			mouse.y > KingG[KingGChoosed].y + KingG[KingGChoosed].h*2 &&
			mouse.y < KingG[KingGChoosed].y + KingG[KingGChoosed].h*3 &&
			mouse.x >= LancerP[i].x &&
			mouse.x <= LancerP[i].x + LancerP[i].w &&
			mouse.y >= LancerP[i].y &&
			mouse.y <= LancerP[i].y + LancerP[i].h ||
			mouse.x < KingG[KingGChoosed].x - KingG[KingGChoosed].w &&
			mouse.x > KingG[KingGChoosed].x - KingG[KingGChoosed].w*2 &&
			mouse.y < KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.y > KingG[KingGChoosed].y - KingG[KingGChoosed].h*2 &&
			mouse.x >= LancerP[i].x &&
			mouse.x <= LancerP[i].x + LancerP[i].w &&
			mouse.y >= LancerP[i].y &&
			mouse.y <= LancerP[i].y + LancerP[i].h ||
			mouse.x > KingG[KingGChoosed].x + KingG[KingGChoosed].w*2 &&
			mouse.x < KingG[KingGChoosed].x + KingG[KingGChoosed].w*3 &&
			mouse.y < KingG[KingGChoosed].y - KingG[KingGChoosed].h &&
			mouse.y > KingG[KingGChoosed].y - KingG[KingGChoosed].h*2 &&
			mouse.x >= LancerP[i].x &&
			mouse.x <= LancerP[i].x + LancerP[i].w &&
			mouse.y >= LancerP[i].y &&
			mouse.y <= LancerP[i].y + LancerP[i].h)
			{
				if(Math.floor(randomRange(0,99)<20))
				{
					LancerP[i].life -= 32;
					if(PTBR)
					{
						newLine("Golpe Critico! Lanceiro Persa perde 32 pontos de vida.");
					}
					else
						newLine("Critical attack! - Persian Lancer lose 32 life points.");
				}
				else
				{
					damage = Math.floor(randomRange(19,23));
					LancerP[i].life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - Lanceiro Persa perde "+damage+" pontos de vida.")
					}
					else
						newLine("Normal attack - Persian Lancer lose "+damage+" life points.");
				}
				Click_KG = 0;	
				Vez_Persas = true;
				Vez_Gregos = false;	
			}
		}
	}
	
	}
	else if(Vez_Persas)
	{
	if(Click_KP == 1)
	{
			if(KingP[KingPChoosed].y > 101)
			{
				context.drawImage(MovK, KingP[KingPChoosed].x , KingP[KingPChoosed].y - 50, KingP[KingPChoosed].w, KingP[KingPChoosed].h);			
			}
			if(KingP[KingPChoosed].y > 151)
			{
				context.drawImage(MovK, KingP[KingPChoosed].x , KingP[KingPChoosed].y - 100, KingP[KingPChoosed].w, KingP[KingPChoosed].h);
			}
			if(KingP[KingPChoosed].y < 551)
			{
				context.drawImage(MovK, KingP[KingPChoosed].x, KingP[KingPChoosed].y + 50, KingP[KingPChoosed].w, KingP[KingPChoosed].h);
			}
			if(KingP[KingPChoosed].y < 501)
			{
				context.drawImage(MovK, KingP[KingPChoosed].x, KingP[KingPChoosed].y + 100, KingP[KingPChoosed].w, KingP[KingPChoosed].h);
			}
					
			context.drawImage(MovK, KingP[KingPChoosed].x - 50 , KingP[KingPChoosed].y, KingP[KingPChoosed].w, KingP[KingPChoosed].h);
			context.drawImage(MovK, KingP[KingPChoosed].x + 50 , KingP[KingPChoosed].y, KingP[KingPChoosed].w, KingP[KingPChoosed].h);
			context.drawImage(MovK, KingP[KingPChoosed].x + 100, KingP[KingPChoosed].y , KingP[KingPChoosed].w, KingP[KingPChoosed].h);
			context.drawImage(MovK, KingP[KingPChoosed].x - 100 , KingP[KingPChoosed].y, KingP[KingPChoosed].w, KingP[KingPChoosed].h);
			
			if(mouse.x > KingP[KingPChoosed].x + KingP[KingPChoosed].w + 2 &&
			mouse.x < KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 && 
			mouse.y > KingP[KingPChoosed].y &&
			mouse.y < KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			KingP[KingPChoosed].x < 551)
			{
				KingP[KingPChoosed].x += 50;
				if(PersasCouldMoveK())
				{
					KingP[KingPChoosed].x -= 50;
					Click_KP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;		
				}
				else
				{
					Click_KP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;					
				}				
			}
			else if(mouse.x > KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 + 3 &&
			mouse.x < KingP[KingPChoosed].x + KingP[KingPChoosed].w*3 && 
			mouse.y > KingP[KingPChoosed].y &&
			mouse.y < KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			KingP[KingPChoosed].x < 501)
			{
				KingP[KingPChoosed].x += 100;
				if(PersasCouldMoveK() || TreeA.x + 50 == KingP[KingPChoosed].x && TreeA.y == KingP[KingPChoosed].y ||
				TreeB.x + 50 == KingP[KingPChoosed].x && TreeB.y == KingP[KingPChoosed].y ||
				TreeC.x + 50 == KingP[KingPChoosed].x && TreeC.y == KingP[KingPChoosed].y ||
				TreeD.x + 50 == KingP[KingPChoosed].x && TreeD.y == KingP[KingPChoosed].y ||
				TreeE.x + 50 == KingP[KingPChoosed].x && TreeE.y == KingP[KingPChoosed].y ||
				TreeF.x + 50 == KingP[KingPChoosed].x && TreeF.y == KingP[KingPChoosed].y)
				{
					KingP[KingPChoosed].x -= 100;
					Click_KP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;		
				}
				else
				{
					Click_KP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;					
				}
			}
			else if(mouse.x < KingP[KingPChoosed].x - 2 &&
			mouse.x > KingP[KingPChoosed].x - KingP[KingPChoosed].w && 
			mouse.y > KingP[KingPChoosed].y &&
			mouse.y < KingP[KingPChoosed].y + KingP[KingPChoosed].h)
			{
				KingP[KingPChoosed].x -= 50;
				
				if(PersasCouldMoveK())
				{
					KingP[KingPChoosed].x += 50;
					Click_KP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;		
				}
				else
				{
					Click_KP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;					
				}
			}
			else if(mouse.x < KingP[KingPChoosed].x - KingP[KingPChoosed].w - 3 &&
			mouse.x > KingP[KingPChoosed].x - KingP[KingPChoosed].w*2 && 
			mouse.y > KingP[KingPChoosed].y &&
			mouse.y < KingP[KingPChoosed].y + KingP[KingPChoosed].h)
			{
				KingP[KingPChoosed].x -= 100;
				if(PersasCouldMoveK() || TreeA.x - 50 == KingP[KingPChoosed].x && TreeA.y == KingP[KingPChoosed].y ||
				TreeB.x - 50 == KingP[KingPChoosed].x && TreeB.y == KingP[KingPChoosed].y ||
				TreeC.x - 50 == KingP[KingPChoosed].x && TreeC.y == KingP[KingPChoosed].y ||
				TreeD.x - 50 == KingP[KingPChoosed].x && TreeD.y == KingP[KingPChoosed].y ||
				TreeE.x - 50 == KingP[KingPChoosed].x && TreeE.y == KingP[KingPChoosed].y ||
				TreeF.x - 50 == KingP[KingPChoosed].x && TreeF.y == KingP[KingPChoosed].y)
				{
					KingP[KingPChoosed].x += 100;
					Click_KP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;		
				}
				else
				{
					Click_KP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;					
				}
			}
			
			else if(mouse.x > KingP[KingPChoosed].x  &&
			mouse.x < KingP[KingPChoosed].x + KingP[KingPChoosed].w && 
			mouse.y < KingP[KingPChoosed].y - 2 &&
			mouse.y > KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			KingP[KingPChoosed].y > 101)
			{
				KingP[KingPChoosed].y -= 50;
				
				if(PersasCouldMoveK())
				{
					KingP[KingPChoosed].y += 50;
					Click_KP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;		
				}
				else
				{
					Click_KP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;					
				}
			}
			else if(mouse.x > KingP[KingPChoosed].x  &&
			mouse.x < KingP[KingPChoosed].x + KingP[KingPChoosed].w && 
			mouse.y < KingP[KingPChoosed].y - KingP[KingPChoosed].h - 3 &&
			mouse.y > KingP[KingPChoosed].y - KingP[KingPChoosed].h*2 &&
			KingP[KingPChoosed].y > 151)
			{
				KingP[KingPChoosed].y -= 100;
				if(PersasCouldMoveK() || TreeA.x == KingP[KingPChoosed].x && TreeA.y - 50 == KingP[KingPChoosed].y ||
				TreeB.x == KingP[KingPChoosed].x && TreeB.y - 50 == KingP[KingPChoosed].y ||
				TreeC.x == KingP[KingPChoosed].x && TreeC.y - 50 == KingP[KingPChoosed].y ||
				TreeD.x == KingP[KingPChoosed].x && TreeD.y - 50 == KingP[KingPChoosed].y ||
				TreeE.x == KingP[KingPChoosed].x && TreeE.y - 50 == KingP[KingPChoosed].y ||
				TreeF.x == KingP[KingPChoosed].x && TreeF.y - 50 == KingP[KingPChoosed].y)
				{
					KingP[KingPChoosed].y += 100;
					Click_KP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;		
				}
				else
				{
					Click_KP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;					
				}
			}
			else  if(mouse.x > KingP[KingPChoosed].x  &&
			mouse.x < KingP[KingPChoosed].x + KingP[KingPChoosed].w && 
			mouse.y > KingP[KingPChoosed].y + KingP[KingPChoosed].h + 2 &&
			mouse.y < KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			KingP[KingPChoosed].y < 551)
			{
				KingP[KingPChoosed].y += 50;
				if(PersasCouldMoveK())
				{
					KingP[KingPChoosed].y -= 50;
					Click_KP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;		
				}
				else
				{
					Click_KP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;					
				}
			}
			else  if(mouse.x > KingP[KingPChoosed].x  &&
			mouse.x < KingP[KingPChoosed].x + KingP[KingPChoosed].w && 
			mouse.y > KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 + 3 &&
			mouse.y < KingP[KingPChoosed].y + KingP[KingPChoosed].h*3 &&
			KingP[KingPChoosed].y < 501)
			{
				KingP[KingPChoosed].y += 100;
				if(PersasCouldMoveK() || TreeA.x == KingP[KingPChoosed].x && TreeA.y + 50 == KingP[KingPChoosed].y ||
				TreeB.x == KingP[KingPChoosed].x && TreeB.y + 50 == KingP[KingPChoosed].y ||
				TreeC.x == KingP[KingPChoosed].x && TreeC.y + 50 == KingP[KingPChoosed].y ||
				TreeD.x == KingP[KingPChoosed].x && TreeD.y + 50 == KingP[KingPChoosed].y ||
				TreeE.x == KingP[KingPChoosed].x && TreeE.y + 50 == KingP[KingPChoosed].y ||
				TreeF.x == KingP[KingPChoosed].x && TreeF.y + 50 == KingP[KingPChoosed].y)
				{
					KingP[KingPChoosed].y -= 100;
					Click_KP = 1;
					Vez_Gregos = false;	
					Vez_Persas = true;		
				}
				else
				{
					Click_KP = 0;
					Vez_Gregos = true;	
					Vez_Persas = false;					
				}
			}
	}
	else if(Click_KP == 2)
	{
		context.drawImage(AtkK,KingP[KingPChoosed].x + 50, KingP[KingPChoosed].y, KingP[KingPChoosed].w, KingP[KingPChoosed].h);
		context.drawImage(AtkK,KingP[KingPChoosed].x - 50, KingP[KingPChoosed].y, KingP[KingPChoosed].w, KingP[KingPChoosed].h);
		context.drawImage(AtkK,KingP[KingPChoosed].x, KingP[KingPChoosed].y - 50, KingP[KingPChoosed].w, KingP[KingPChoosed].h);
		context.drawImage(AtkK,KingP[KingPChoosed].x, KingP[KingPChoosed].y + 50, KingP[KingPChoosed].w, KingP[KingPChoosed].h);
		context.drawImage(AtkK,KingP[KingPChoosed].x + 50, KingP[KingPChoosed].y + 50, KingP[KingPChoosed].w, KingP[KingPChoosed].h);
		context.drawImage(AtkK,KingP[KingPChoosed].x - 50, KingP[KingPChoosed].y - 50, KingP[KingPChoosed].w, KingP[KingPChoosed].h);
		context.drawImage(AtkK,KingP[KingPChoosed].x - 50, KingP[KingPChoosed].y + 50, KingP[KingPChoosed].w, KingP[KingPChoosed].h);
		context.drawImage(AtkK,KingP[KingPChoosed].x + 50, KingP[KingPChoosed].y - 50, KingP[KingPChoosed].w, KingP[KingPChoosed].h);
		context.drawImage(AtkK,KingP[KingPChoosed].x + 100, KingP[KingPChoosed].y - 100, KingP[KingPChoosed].w, KingP[KingPChoosed].h);
		context.drawImage(AtkK,KingP[KingPChoosed].x - 100, KingP[KingPChoosed].y + 100, KingP[KingPChoosed].w, KingP[KingPChoosed].h);
		context.drawImage(AtkK,KingP[KingPChoosed].x - 100, KingP[KingPChoosed].y - 100, KingP[KingPChoosed].w, KingP[KingPChoosed].h);
		context.drawImage(AtkK,KingP[KingPChoosed].x + 100, KingP[KingPChoosed].y + 100, KingP[KingPChoosed].w, KingP[KingPChoosed].h);
		
		if(mouse.x >= KingP[KingPChoosed].x  &&
		mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
		mouse.y >= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
		mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
		mouse.x >= WallG_x &&
		mouse.x <= WallG_x + WallG_w &&
		mouse.y >= WallG_y &&
		mouse.y <= WallG_y + WallG_h ||
		mouse.x >= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
		mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
		mouse.y >= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
		mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
		mouse.x >= WallG_x &&
		mouse.x <= WallG_x + WallG_w &&
		mouse.y >= WallG_y &&
		mouse.y <= WallG_y + WallG_h ||
		mouse.x <= KingP[KingPChoosed].x  &&
		mouse.x >= KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
		mouse.y >= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
		mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
		mouse.x >= WallG_x &&
		mouse.x <= WallG_x + WallG_w &&
		mouse.y >= WallG_y &&
		mouse.y <= WallG_y + WallG_h ||
		mouse.x >= KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
		mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w*3 &&
		mouse.y >= KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
		mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h*3 &&
		mouse.x >= WallG_x &&
		mouse.x <= WallG_x + WallG_w &&
		mouse.y >= WallG_y &&
		mouse.y <= WallG_y + WallG_h ||
		mouse.x <= KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
		mouse.x >= KingP[KingPChoosed].x - KingP[KingPChoosed].w*2 &&
		mouse.y >= KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
		mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h*3 &&
		mouse.x >= WallG_x &&
		mouse.x <= WallG_x + WallG_w &&
		mouse.y >= WallG_y &&
		mouse.y <= WallG_y + WallG_h)
		{
			damage = Math.floor(randomRange(25,32));
			if(Math.floor(randomRange(0,99)<20))
			{
				WallG_life -= 32;
				if(PTBR)
				{
					newLine("Golpe Critico! Muralha Grega perde 32 pontos de vida.");
				}
				else
					newLine("Critical attack! - Greek Wall lose 32 life points.");
			}
			else
			{
				WallG_life -= damage
				if(PTBR)
				{
					newLine("Golpe Normal - Muralha Grega perde " +damage+ " pontos de vida.");
				}
				else
							newLine("Normal attack - Greek Wall lose "+damage+" life points.");
			}
			Click_KP = 0;
			Vez_Persas = false;	
			Vez_Gregos= true;
		}
		
		for(var i = 0; i < KntG.length; i++)
		{
			if(mouse.x >= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.y >= KingP[KingPChoosed].y &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			mouse.x >= KntG[i].x &&
			mouse.x <= KntG[i].x + KntG[i].w &&
			mouse.y >= KntG[i].y &&
			mouse.y <= KntG[i].y + KntG[i].h ||
			mouse.x <= KingP[KingPChoosed].x  &&
			mouse.x >= KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.y >= KingP[KingPChoosed].y &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			mouse.x >= KntG[i].x &&
			mouse.x <= KntG[i].x + KntG[i].w &&
			mouse.y >= KntG[i].y &&
			mouse.y <= KntG[i].y + KntG[i].h ||
			mouse.x >= KingP[KingPChoosed].x  &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.y <= KingP[KingPChoosed].y &&
			mouse.y >= KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.x >= KntG[i].x &&
			mouse.x <= KntG[i].x + KntG[i].w &&
			mouse.y >= KntG[i].y &&
			mouse.y <= KntG[i].y + KntG[i].h ||
			mouse.x >= KingP[KingPChoosed].x &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.y >= KingP[KingPChoosed].y + KingP[KingPChoosed].h  &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.x >= KntG[i].x &&
			mouse.x <= KntG[i].x + KntG[i].w &&
			mouse.y >= KntG[i].y &&
			mouse.y <= KntG[i].y + KntG[i].h ||
			mouse.x >= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.y <= KingP[KingPChoosed].y&
			mouse.y >= KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.x >= KntG[i].x &&
			mouse.x <= KntG[i].x + KntG[i].w &&
			mouse.y >= KntG[i].y &&
			mouse.y <= KntG[i].y + KntG[i].h ||
			mouse.x <= KingP[KingPChoosed].x &&
			mouse.x >= KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.y <= KingP[KingPChoosed].y &&
			mouse.y >= KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.x >= KntG[i].x &&
			mouse.x <= KntG[i].x + KntG[i].w &&
			mouse.y >= KntG[i].y &&
			mouse.y <= KntG[i].y + KntG[i].h ||
			mouse.x <= KingP[KingPChoosed].x &&
			mouse.x >= KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.y >= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.x >= KntG[i].x &&
			mouse.x <= KntG[i].x + KntG[i].w &&
			mouse.y >= KntG[i].y &&
			mouse.y <= KntG[i].y + KntG[i].h ||
			mouse.x >= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.y >= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.x >= KntG[i].x &&
			mouse.x <= KntG[i].x + KntG[i].w &&
			mouse.y >= KntG[i].y &&
			mouse.y <= KntG[i].y + KntG[i].h)
			{
				damage = Math.floor(randomRange(21,29))
				if(Math.floor(randomRange(0,99)<20))
				{
					KntG[i].life -= 32;
					if(PTBR)
					{
						newLine("Golpe Critico! Cavaleiro Grego perde 32 pontos de vida.");
					}
					else
								newLine("Critical attack! - Greek Knight lose 32 life points.");
				}
				else
				{
					KntG[i].life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - Cavaleiro Grego perde " +damage+ " pontos de vida.")
					}
					else
						newLine("Normal attack - Greek Knight lose "+damage+" life points.");
				}
				Click_KP = 0;	
				Vez_Gregos= true;
				Vez_Persas = false;	
			}
			if(mouse.x > KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
				mouse.x < KingP[KingPChoosed].x + KingP[KingPChoosed].w*3 &&
				mouse.y > KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
				mouse.y < KingP[KingPChoosed].y + KingP[KingPChoosed].h*3 &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h ||
				mouse.x < KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
				mouse.x > KingP[KingPChoosed].x - KingP[KingPChoosed].w*2 &&
				mouse.y > KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
				mouse.y < KingP[KingPChoosed].y + KingP[KingPChoosed].h*3 &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h ||
				mouse.x < KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
				mouse.x > KingP[KingPChoosed].x - KingP[KingPChoosed].w*2 &&
				mouse.y < KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
				mouse.y > KingP[KingPChoosed].y - KingP[KingPChoosed].h*2 &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h ||
				mouse.x > KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
				mouse.x < KingP[KingPChoosed].x + KingP[KingPChoosed].w*3 &&
				mouse.y < KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
				mouse.y > KingP[KingPChoosed].y - KingP[KingPChoosed].h*2 &&
				mouse.x >= KntG[i].x &&
				mouse.x <= KntG[i].x + KntG[i].w &&
				mouse.y >= KntG[i].y &&
				mouse.y <= KntG[i].y + KntG[i].h)
				{
					if(Math.floor(randomRange(0,99)<20))
					{
						KntG[i].life -= 32;
						if(PTBR)
						{	
							newLine("Golpe Critico! Cavaleiro Grego perde 32 pontos de vida.");
						}
						else
								newLine("Critical attack! - Greek Knight lose 32 life points.");
					}
					else
					{
						damage = Math.floor(randomRange(19,23));
						KntG[i].life -= damage;
						if(PTBR)
						{
							newLine("Golpe Normal - Cavaleiro Grego perde "+damage+" pontos de vida.")
						}
						else
								newLine("Normal attack - Greek Knight lose "+damage+" life points.");
					}
					Click_KP = 0;	
					Vez_Gregos= true;
					Vez_Persas = false;	
				}
		}
		
		for(var i = 0; i < ArcG.length; i++)
		{
			if(mouse.x >= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.y >= KingP[KingPChoosed].y &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			mouse.x >= ArcG[i].x &&
			mouse.x <= ArcG[i].x + ArcG[i].w &&
			mouse.y >= ArcG[i].y &&
			mouse.y <= ArcG[i].y + ArcG[i].h ||
			mouse.x <= KingP[KingPChoosed].x  &&
			mouse.x >= KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.y >= KingP[KingPChoosed].y &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			mouse.x >= ArcG[i].x &&
			mouse.x <= ArcG[i].x + ArcG[i].w &&
			mouse.y >= ArcG[i].y &&
			mouse.y <= ArcG[i].y + ArcG[i].h ||
			mouse.x >= KingP[KingPChoosed].x  &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.y <= KingP[KingPChoosed].y &&
			mouse.y >= KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.x >= ArcG[i].x &&
			mouse.x <= ArcG[i].x + ArcG[i].w &&
			mouse.y >= ArcG[i].y &&
			mouse.y <= ArcG[i].y + ArcG[i].h ||
			mouse.x >= KingP[KingPChoosed].x &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.y >= KingP[KingPChoosed].y + KingP[KingPChoosed].h  &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.x >= ArcG[i].x &&
			mouse.x <= ArcG[i].x + ArcG[i].w &&
			mouse.y >= ArcG[i].y &&
			mouse.y <= ArcG[i].y + ArcG[i].h ||
			mouse.x >= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.y <= KingP[KingPChoosed].y&
			mouse.y >= KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.x >= ArcG[i].x &&
			mouse.x <= ArcG[i].x + ArcG[i].w &&
			mouse.y >= ArcG[i].y &&
			mouse.y <= ArcG[i].y + ArcG[i].h ||
			mouse.x <= KingP[KingPChoosed].x &&
			mouse.x >= KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.y <= KingP[KingPChoosed].y &&
			mouse.y >= KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.x >= ArcG[i].x &&
			mouse.x <= ArcG[i].x + ArcG[i].w &&
			mouse.y >= ArcG[i].y &&
			mouse.y <= ArcG[i].y + ArcG[i].h ||
			mouse.x <= KingP[KingPChoosed].x &&
			mouse.x >= KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.y >= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.x >= ArcG[i].x &&
			mouse.x <= ArcG[i].x + ArcG[i].w &&
			mouse.y >= ArcG[i].y &&
			mouse.y <= ArcG[i].y + ArcG[i].h ||
			mouse.x >= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.y >= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.x >= ArcG[i].x &&
			mouse.x <= ArcG[i].x + ArcG[i].w &&
			mouse.y >= ArcG[i].y &&
			mouse.y <= ArcG[i].y + ArcG[i].h)
			{
				
				if(Math.floor(randomRange(0,99)<20))
				{
					ArcG[i].life -= 32;
					if(PTBR)
					{
						newLine("Golpe Critico! Arqueiro Grego perde 32 pontos de vida.");
					}
					else
						newLine("Critical attack! - Greek Archer lose 32 life points.");
				}
				else
				{
					damage = Math.floor(randomRange(21,29))
					ArcG[i].life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - Arqueiro Grego perde "+damage+" pontos de vida")
					}
					else
						newLine("Normal attack - Greek Archer lose "+damage+" life points.");
				}
				Click_KP = 0;	
				Vez_Gregos= true;
				Vez_Persas = false;	
			}
			if(mouse.x > KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.x < KingP[KingPChoosed].x + KingP[KingPChoosed].w*3 &&
			mouse.y > KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.y < KingP[KingPChoosed].y + KingP[KingPChoosed].h*3 &&
			mouse.x >= ArcG[i].x &&
			mouse.x <= ArcG[i].x + ArcG[i].w &&
			mouse.y >= ArcG[i].y &&
			mouse.y <= ArcG[i].y + ArcG[i].h ||
			mouse.x < KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.x > KingP[KingPChoosed].x - KingP[KingPChoosed].w*2 &&
			mouse.y > KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.y < KingP[KingPChoosed].y + KingP[KingPChoosed].h*3 &&
			mouse.x >= ArcG[i].x &&
			mouse.x <= ArcG[i].x + ArcG[i].w &&
			mouse.y >= ArcG[i].y &&
			mouse.y <= ArcG[i].y + ArcG[i].h ||
			mouse.x < KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.x > KingP[KingPChoosed].x - KingP[KingPChoosed].w*2 &&
			mouse.y < KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.y > KingP[KingPChoosed].y - KingP[KingPChoosed].h*2 &&
			mouse.x >= ArcG[i].x &&
			mouse.x <= ArcG[i].x + ArcG[i].w &&
			mouse.y >= ArcG[i].y &&
			mouse.y <= ArcG[i].y + ArcG[i].h ||
			mouse.x > KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.x < KingP[KingPChoosed].x + KingP[KingPChoosed].w*3 &&
			mouse.y < KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.y > KingP[KingPChoosed].y - KingP[KingPChoosed].h*2 &&
			mouse.x >= ArcG[i].x &&
			mouse.x <= ArcG[i].x + ArcG[i].w &&
			mouse.y >= ArcG[i].y &&
			mouse.y <= ArcG[i].y + ArcG[i].h)
			{
				
				if(Math.floor(randomRange(0,99)<20))
				{
					ArcG[i].life -= 32;
					if(PTBR)
					{
						newLine("Golpe Critico! Arqueiro Grego perde 32 pontos de vida.");
					}
					else
						newLine("Critical attack! - Greek Archer lose 32 life points.");
				}
				else
				{
					damage = Math.floor(randomRange(19,23))
					ArcG[i].life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - Arqueiro Grego perde "+damage+" pontos de vida.")
					}
					else
						newLine("Normal attack - Greek Archer lose "+damage+" life points.");
				}
				Click_KP = 0;	
				Vez_Gregos= true;
				Vez_Persas = false;	
			}
		}
		
		for(var i = 0; i < TorG.length; i++)
		{
			if(mouse.x >= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.y >= KingP[KingPChoosed].y &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			mouse.x >= TorG[i].x &&
			mouse.x <= TorG[i].x + TorG[i].w &&
			mouse.y >= TorG[i].y &&
			mouse.y <= TorG[i].y + TorG[i].h ||
			mouse.x <= KingP[KingPChoosed].x  &&
			mouse.x >= KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.y >= KingP[KingPChoosed].y &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			mouse.x >= TorG[i].x &&
			mouse.x <= TorG[i].x + TorG[i].w &&
			mouse.y >= TorG[i].y &&
			mouse.y <= TorG[i].y + TorG[i].h ||
			mouse.x >= KingP[KingPChoosed].x  &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.y <= KingP[KingPChoosed].y &&
			mouse.y >= KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.x >= TorG[i].x &&
			mouse.x <= TorG[i].x + TorG[i].w &&
			mouse.y >= TorG[i].y &&
			mouse.y <= TorG[i].y + TorG[i].h ||
			mouse.x >= KingP[KingPChoosed].x &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.y >= KingP[KingPChoosed].y + KingP[KingPChoosed].h  &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.x >= TorG[i].x &&
			mouse.x <= TorG[i].x + TorG[i].w &&
			mouse.y >= TorG[i].y &&
			mouse.y <= TorG[i].y + TorG[i].h ||
			mouse.x >= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.y <= KingP[KingPChoosed].y&
			mouse.y >= KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.x >= TorG[i].x &&
			mouse.x <= TorG[i].x + TorG[i].w &&
			mouse.y >= TorG[i].y &&
			mouse.y <= TorG[i].y + TorG[i].h ||
			mouse.x <= KingP[KingPChoosed].x &&
			mouse.x >= KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.y <= KingP[KingPChoosed].y &&
			mouse.y >= KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.x >= TorG[i].x &&
			mouse.x <= TorG[i].x + TorG[i].w &&
			mouse.y >= TorG[i].y &&
			mouse.y <= TorG[i].y + TorG[i].h ||
			mouse.x <= KingP[KingPChoosed].x &&
			mouse.x >= KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.y >= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.x >= TorG[i].x &&
			mouse.x <= TorG[i].x + TorG[i].w &&
			mouse.y >= TorG[i].y &&
			mouse.y <= TorG[i].y + TorG[i].h ||
			mouse.x >= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.y >= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.x >= TorG[i].x &&
			mouse.x <= TorG[i].x + TorG[i].w &&
			mouse.y >= TorG[i].y &&
			mouse.y <= TorG[i].y + TorG[i].h)
			{
				if(Math.floor(randomRange(0,99)<20))
				{
					TorG[i].life -= 32;
					if(PTBR)
					{
						newLine("Golpe Critico! Torre Grega perde 32 pontos de vida.");
					}
					else
								newLine("Critical attack! - Greek Tower lose 32 life points.");
				}
				else
				{
					damage = Math.floor(randomRange(21,29));
					TorG[i].life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - Torre Grega perde "+damage+ "pontos de vida.")
					}
					else
								newLine("Normal attack - Greek Tower lose "+damage+" life points.");
				}
				Click_KP = 0;	
				Vez_Gregos= true;
				Vez_Persas = false;	
			}
			if(mouse.x > KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.x < KingP[KingPChoosed].x + KingP[KingPChoosed].w*3 &&
			mouse.y > KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.y < KingP[KingPChoosed].y + KingP[KingPChoosed].h*3 &&
			mouse.x >= TorG[i].x &&
			mouse.x <= TorG[i].x + TorG[i].w &&
			mouse.y >= TorG[i].y &&
			mouse.y <= TorG[i].y + TorG[i].h ||
			mouse.x < KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.x > KingP[KingPChoosed].x - KingP[KingPChoosed].w*2 &&
			mouse.y > KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.y < KingP[KingPChoosed].y + KingP[KingPChoosed].h*3 &&
			mouse.x >= TorG[i].x &&
			mouse.x <= TorG[i].x + TorG[i].w &&
			mouse.y >= TorG[i].y &&
			mouse.y <= TorG[i].y + TorG[i].h ||
			mouse.x < KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.x > KingP[KingPChoosed].x - KingP[KingPChoosed].w*2 &&
			mouse.y < KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.y > KingP[KingPChoosed].y - KingP[KingPChoosed].h*2 &&
			mouse.x >= TorG[i].x &&
			mouse.x <= TorG[i].x + TorG[i].w &&
			mouse.y >= TorG[i].y &&
			mouse.y <= TorG[i].y + TorG[i].h ||
			mouse.x > KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.x < KingP[KingPChoosed].x + KingP[KingPChoosed].w*3 &&
			mouse.y < KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.y > KingP[KingPChoosed].y - KingP[KingPChoosed].h*2 &&
			mouse.x >= TorG[i].x &&
			mouse.x <= TorG[i].x + TorG[i].w &&
			mouse.y >= TorG[i].y &&
			mouse.y <= TorG[i].y + TorG[i].h)
			{
				if(Math.floor(randomRange(0,99)<20))
				{
					TorG[i].life -= 32;
					if(PTBR)
					{
						newLine("Golpe Critico! Torre Grega perde 32 pontos de vida.");
					}
					else
						newLine("Critical attack! - Greek Tower lose 32 life points.");
				}
				else
				{
					damage = Math.floor(randomRange(19,23))
					TorG[i].life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - Torre Grega perde "+damage+ " pontos de vida.")
					}
					else
								newLine("Normal attack - Greek Tower lose "+damage+" life points.");
				}
				Click_KP = 0;	
				Vez_Gregos= true;
				Vez_Persas = false;	
			}
		}
		
		for(var i = 0; i < KingG.length; i++)
		{
			if(mouse.x >= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.y >= KingP[KingPChoosed].y &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h ||
			mouse.x <= KingP[KingPChoosed].x  &&
			mouse.x >= KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.y >= KingP[KingPChoosed].y &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h ||
			mouse.x >= KingP[KingPChoosed].x  &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.y <= KingP[KingPChoosed].y &&
			mouse.y >= KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h ||
			mouse.x >= KingP[KingPChoosed].x &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.y >= KingP[KingPChoosed].y + KingP[KingPChoosed].h  &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h ||
			mouse.x >= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.y <= KingP[KingPChoosed].y&
			mouse.y >= KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h ||
			mouse.x <= KingP[KingPChoosed].x &&
			mouse.x >= KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.y <= KingP[KingPChoosed].y &&
			mouse.y >= KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h ||
			mouse.x <= KingP[KingPChoosed].x &&
			mouse.x >= KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.y >= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h ||
			mouse.x >= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.y >= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h)
			{
				
				if(Math.floor(randomRange(0,99)<20))
				{
					KingG[i].life -= 32;
					if(PTBR)
					{
						newLine("Golpe Critico! Rei Grego perde 32 pontos de vida.");
					}
					else
						newLine("Critical attack! - Greek King lose 32 life points.");
				}
				else
				{
					damage = Math.floor(randomRange(21,29));
					KingG[i].life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - Rei Grego perde "+damage+" pontos de vida.")
					}
					else
								newLine("Normal attack - Greek King lose "+damage+" life points.");
				}
				Click_KP = 0;	
				Vez_Gregos= true;
				Vez_Persas = false;	
			}
			if(mouse.x > KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.x < KingP[KingPChoosed].x + KingP[KingPChoosed].w*3 &&
			mouse.y > KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.y < KingP[KingPChoosed].y + KingP[KingPChoosed].h*3 &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h ||
			mouse.x < KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.x > KingP[KingPChoosed].x - KingP[KingPChoosed].w*2 &&
			mouse.y > KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.y < KingP[KingPChoosed].y + KingP[KingPChoosed].h*3 &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h ||
			mouse.x < KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.x > KingP[KingPChoosed].x - KingP[KingPChoosed].w*2 &&
			mouse.y < KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.y > KingP[KingPChoosed].y - KingP[KingPChoosed].h*2 &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h ||
			mouse.x > KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.x < KingP[KingPChoosed].x + KingP[KingPChoosed].w*3 &&
			mouse.y < KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.y > KingP[KingPChoosed].y - KingP[KingPChoosed].h*2 &&
			mouse.x >= KingG[i].x &&
			mouse.x <= KingG[i].x + KingG[i].w &&
			mouse.y >= KingG[i].y &&
			mouse.y <= KingG[i].y + KingG[i].h)
			{
				if(Math.floor(randomRange(0,99)<20))
				{
					KingG[i].life -= 32;
					if(PTBR)
					{
						newLine("Golpe Critico! Rei Grego perde 32 pontos de vida.");
					}
					else
						newLine("Critical attack! - Greek King lose 32 life points.");
				}
				else
				{	
					damage = damage = Math.floor(randomRange(19,23));
					KingG[i].life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - Rei Grego perde "+damage+" pontos de vida." )
					}
					else
								newLine("Normal attack - Greek King lose "+damage+" life points.");
				}
				Click_KP = 0;	
				Vez_Gregos= true;
				Vez_Persas = false;	
			}
		}
		
		for(var i = 0; i < GnrlG.length; i++)
		{
			if(mouse.x >= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.y >= KingP[KingPChoosed].y &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			mouse.x >= GnrlG[i].x &&
			mouse.x <= GnrlG[i].x + GnrlG[i].w &&
			mouse.y >= GnrlG[i].y &&
			mouse.y <= GnrlG[i].y + GnrlG[i].h ||
			mouse.x <= KingP[KingPChoosed].x  &&
			mouse.x >= KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.y >= KingP[KingPChoosed].y &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			mouse.x >= GnrlG[i].x &&
			mouse.x <= GnrlG[i].x + GnrlG[i].w &&
			mouse.y >= GnrlG[i].y &&
			mouse.y <= GnrlG[i].y + GnrlG[i].h ||
			mouse.x >= KingP[KingPChoosed].x  &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.y <= KingP[KingPChoosed].y &&
			mouse.y >= KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.x >= GnrlG[i].x &&
			mouse.x <= GnrlG[i].x + GnrlG[i].w &&
			mouse.y >= GnrlG[i].y &&
			mouse.y <= GnrlG[i].y + GnrlG[i].h ||
			mouse.x >= KingP[KingPChoosed].x &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.y >= KingP[KingPChoosed].y + KingP[KingPChoosed].h  &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.x >= GnrlG[i].x &&
			mouse.x <= GnrlG[i].x + GnrlG[i].w &&
			mouse.y >= GnrlG[i].y &&
			mouse.y <= GnrlG[i].y + GnrlG[i].h ||
			mouse.x >= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.y <= KingP[KingPChoosed].y&
			mouse.y >= KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.x >= GnrlG[i].x &&
			mouse.x <= GnrlG[i].x + GnrlG[i].w &&
			mouse.y >= GnrlG[i].y &&
			mouse.y <= GnrlG[i].y + GnrlG[i].h ||
			mouse.x <= KingP[KingPChoosed].x &&
			mouse.x >= KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.y <= KingP[KingPChoosed].y &&
			mouse.y >= KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.x >= GnrlG[i].x &&
			mouse.x <= GnrlG[i].x + GnrlG[i].w &&
			mouse.y >= GnrlG[i].y &&
			mouse.y <= GnrlG[i].y + GnrlG[i].h ||
			mouse.x <= KingP[KingPChoosed].x &&
			mouse.x >= KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.y >= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.x >= GnrlG[i].x &&
			mouse.x <= GnrlG[i].x + GnrlG[i].w &&
			mouse.y >= GnrlG[i].y &&
			mouse.y <= GnrlG[i].y + GnrlG[i].h ||
			mouse.x >= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.y >= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.x >= GnrlG[i].x &&
			mouse.x <= GnrlG[i].x + GnrlG[i].w &&
			mouse.y >= GnrlG[i].y &&
			mouse.y <= GnrlG[i].y + GnrlG[i].h)
			{
				if(Math.floor(randomRange(0,99)<20))
				{
					GnrlG[i].life -= 32;
					if(PTBR)
					{
						newLine("Golpe Critico! General Grego perde 32 pontos de vida.");
					}
					else
								newLine("Critical attack! - Greek General lose 32 life points.");
				}
				else
				{
					damage = Math.floor(randomRange(21,29));
					GnrlG[i].life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - General Grego perde "+damage+ " pontos de vida.")
					}
					else
							newLine("Normal attack - Greek General lose "+damage+" life points.");
				}
				Click_KP = 0;	
				Vez_Gregos= true;
				Vez_Persas = false;	
			}
			if(mouse.x > KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.x < KingP[KingPChoosed].x + KingP[KingPChoosed].w*3 &&
			mouse.y > KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.y < KingP[KingPChoosed].y + KingP[KingPChoosed].h*3 &&
			mouse.x >= GnrlG[i].x &&
			mouse.x <= GnrlG[i].x + GnrlG[i].w &&
			mouse.y >= GnrlG[i].y &&
			mouse.y <= GnrlG[i].y + GnrlG[i].h ||
			mouse.x < KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.x > KingP[KingPChoosed].x - KingP[KingPChoosed].w*2 &&
			mouse.y > KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.y < KingP[KingPChoosed].y + KingP[KingPChoosed].h*3 &&
			mouse.x >= GnrlG[i].x &&
			mouse.x <= GnrlG[i].x + GnrlG[i].w &&
			mouse.y >= GnrlG[i].y &&
			mouse.y <= GnrlG[i].y + GnrlG[i].h ||
			mouse.x < KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.x > KingP[KingPChoosed].x - KingP[KingPChoosed].w*2 &&
			mouse.y < KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.y > KingP[KingPChoosed].y - KingP[KingPChoosed].h*2 &&
			mouse.x >= GnrlG[i].x &&
			mouse.x <= GnrlG[i].x + GnrlG[i].w &&
			mouse.y >= GnrlG[i].y &&
			mouse.y <= GnrlG[i].y + GnrlG[i].h ||
			mouse.x > KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.x < KingP[KingPChoosed].x + KingP[KingPChoosed].w*3 &&
			mouse.y < KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.y > KingP[KingPChoosed].y - KingP[KingPChoosed].h*2 &&
			mouse.x >= GnrlG[i].x &&
			mouse.x <= GnrlG[i].x + GnrlG[i].w &&
			mouse.y >= GnrlG[i].y &&
			mouse.y <= GnrlG[i].y + GnrlG[i].h)
			{
				if(Math.floor(randomRange(0,99)<20))
				{
					GnrlG[i].life -= 32;
					if(PTBR)
					{
						newLine("Golpe Critico! General Grego perde 32 pontos de vida.");
					}
					else
								newLine("Critical attack! - Greek General lose 32 life points.");
				}
				else
				{
					damage = Math.floor(randomRange(19,23));
					GnrlG[i].life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - General Grego perde "+damage+" pontos de vida.")
					}
					else
							newLine("Normal attack - Greek General lose "+damage+" life points.");
				}
				Click_KP = 0;	
				Vez_Gregos= true;
				Vez_Persas = false;	
			}
		}
		
		for(var i = 0; i < LancerG.length; i++)
		{
			if(mouse.x >= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.y >= KingP[KingPChoosed].y &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			mouse.x >= LancerG[i].x &&
			mouse.x <= LancerG[i].x + LancerG[i].w &&
			mouse.y >= LancerG[i].y &&
			mouse.y <= LancerG[i].y + LancerG[i].h ||
			mouse.x <= KingP[KingPChoosed].x  &&
			mouse.x >= KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.y >= KingP[KingPChoosed].y &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			mouse.x >= LancerG[i].x &&
			mouse.x <= LancerG[i].x + LancerG[i].w &&
			mouse.y >= LancerG[i].y &&
			mouse.y <= LancerG[i].y + LancerG[i].h ||
			mouse.x >= KingP[KingPChoosed].x  &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.y <= KingP[KingPChoosed].y &&
			mouse.y >= KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.x >= LancerG[i].x &&
			mouse.x <= LancerG[i].x + LancerG[i].w &&
			mouse.y >= LancerG[i].y &&
			mouse.y <= LancerG[i].y + LancerG[i].h ||
			mouse.x >= KingP[KingPChoosed].x &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.y >= KingP[KingPChoosed].y + KingP[KingPChoosed].h  &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.x >= LancerG[i].x &&
			mouse.x <= LancerG[i].x + LancerG[i].w &&
			mouse.y >= LancerG[i].y &&
			mouse.y <= LancerG[i].y + LancerG[i].h ||
			mouse.x >= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.y <= KingP[KingPChoosed].y&
			mouse.y >= KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.x >= LancerG[i].x &&
			mouse.x <= LancerG[i].x + LancerG[i].w &&
			mouse.y >= LancerG[i].y &&
			mouse.y <= LancerG[i].y + LancerG[i].h ||
			mouse.x <= KingP[KingPChoosed].x &&
			mouse.x >= KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.y <= KingP[KingPChoosed].y &&
			mouse.y >= KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.x >= LancerG[i].x &&
			mouse.x <= LancerG[i].x + LancerG[i].w &&
			mouse.y >= LancerG[i].y &&
			mouse.y <= LancerG[i].y + LancerG[i].h ||
			mouse.x <= KingP[KingPChoosed].x &&
			mouse.x >= KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.y >= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.x >= LancerG[i].x &&
			mouse.x <= LancerG[i].x + LancerG[i].w &&
			mouse.y >= LancerG[i].y &&
			mouse.y <= LancerG[i].y + LancerG[i].h ||
			mouse.x >= KingP[KingPChoosed].x + KingP[KingPChoosed].w &&
			mouse.x <= KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.y >= KingP[KingPChoosed].y + KingP[KingPChoosed].h &&
			mouse.y <= KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.x >= LancerG[i].x &&
			mouse.x <= LancerG[i].x + LancerG[i].w &&
			mouse.y >= LancerG[i].y &&
			mouse.y <= LancerG[i].y + LancerG[i].h)
			{
				if(Math.floor(randomRange(0,99)<20))
				{
					LancerG[i].life -= 32;
					if(PTBR)
					{
						newLine("Golpe Critico! Lanceiro Grego perde 32 pontos de vida.");
					}
					else
								newLine("Critical attack! - Greek Lancer lose 32 life points.");
				}
				else
				{
					damage = Math.floor(randomRange(21,29));
					LancerG[i].life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - Lanceiro Grego perde "+damage+" pontos de vida.")
					}
					else
								newLine("Normal attack - Greek Lancer lose "+damage+" life points.");
				}
				Click_KP = 0;	
				Vez_Gregos= true;
				Vez_Persas = false;	
			}
			if(mouse.x > KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.x < KingP[KingPChoosed].x + KingP[KingPChoosed].w*3 &&
			mouse.y > KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.y < KingP[KingPChoosed].y + KingP[KingPChoosed].h*3 &&
			mouse.x >= LancerG[i].x &&
			mouse.x <= LancerG[i].x + LancerG[i].w &&
			mouse.y >= LancerG[i].y &&
			mouse.y <= LancerG[i].y + LancerG[i].h ||
			mouse.x < KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.x > KingP[KingPChoosed].x - KingP[KingPChoosed].w*2 &&
			mouse.y > KingP[KingPChoosed].y + KingP[KingPChoosed].h*2 &&
			mouse.y < KingP[KingPChoosed].y + KingP[KingPChoosed].h*3 &&
			mouse.x >= LancerG[i].x &&
			mouse.x <= LancerG[i].x + LancerG[i].w &&
			mouse.y >= LancerG[i].y &&
			mouse.y <= LancerG[i].y + LancerG[i].h ||
			mouse.x < KingP[KingPChoosed].x - KingP[KingPChoosed].w &&
			mouse.x > KingP[KingPChoosed].x - KingP[KingPChoosed].w*2 &&
			mouse.y < KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.y > KingP[KingPChoosed].y - KingP[KingPChoosed].h*2 &&
			mouse.x >= LancerG[i].x &&
			mouse.x <= LancerG[i].x + LancerG[i].w &&
			mouse.y >= LancerG[i].y &&
			mouse.y <= LancerG[i].y + LancerG[i].h ||
			mouse.x > KingP[KingPChoosed].x + KingP[KingPChoosed].w*2 &&
			mouse.x < KingP[KingPChoosed].x + KingP[KingPChoosed].w*3 &&
			mouse.y < KingP[KingPChoosed].y - KingP[KingPChoosed].h &&
			mouse.y > KingP[KingPChoosed].y - KingP[KingPChoosed].h*2 &&
			mouse.x >= LancerG[i].x &&
			mouse.x <= LancerG[i].x + LancerG[i].w &&
			mouse.y >= LancerG[i].y &&
			mouse.y <= LancerG[i].y + LancerG[i].h)
			{
				if(Math.floor(randomRange(0,99)<20))
				{
					LancerG[i].life -= 32;
					if(PTBR)
					{
						newLine("Golpe Critico! Lanceiro Grego perde 32 pontos de vida.");
					}
					else
								newLine("Critical attack! - Greek Lancer lose 32 life points.");
				}
				else
				{
					damage = Math.floor(randomRange(19,23));
					LancerG[i].life -= damage;
					if(PTBR)
					{
						newLine("Golpe Normal - Lanceiro Grego perde "+damage+" pontos de vida.")
					}
					else
								newLine("Normal attack - Greek Lancer lose "+damage+" life points.");
				}
				Click_KP = 0;	
				Vez_Gregos= true;
				Vez_Persas = false;	
			}
		}
	}
	
	}
}

function PersasCouldMoveK()
{	
	if((InfoArcG == true && KingP[KingPChoosed].x == ArcG[ArcsGChoosed].x && KingP[KingPChoosed].y == ArcG[ArcsGChoosed].y)||
	(InfoKntG == true && KingP[KingPChoosed].x == KntG[KntsGChoosed].x && KingP[KingPChoosed].y == KntG[KntsGChoosed].y) ||
	(InfoTorG == true && KingP[KingPChoosed].x == TorG[TorsGChoosed].x && KingP[KingPChoosed].y == TorG[TorsGChoosed].y) ||
	(InfoLancerG == true && KingP[KingPChoosed].x == LancerG[LancersGChoosed].x && KingP[KingPChoosed].y == LancerG[LancersGChoosed].y) ||
	(InfoGnrlG == true && KingP[KingPChoosed].x == GnrlG[GnrlGChoosed].x && KingP[KingPChoosed].y == GnrlG[GnrlGChoosed].y) ||
	(InfoKingG == true && KingP[KingPChoosed].x == KingG[KingGChoosed].x && KingP[KingPChoosed].y == KingG[KingGChoosed].y) ||
	(KingP[KingPChoosed].x == TreeA.x && KingP[KingPChoosed].y == TreeA.y)||
	(KingP[KingPChoosed].x == TreeB.x && KingP[KingPChoosed].y == TreeB.y)||
	(KingP[KingPChoosed].x == TreeC.x && KingP[KingPChoosed].y == TreeC.y)||
	(KingP[KingPChoosed].x == TreeD.x && KingP[KingPChoosed].y == TreeD.y)||
	(KingP[KingPChoosed].x == TreeE.x && KingP[KingPChoosed].y == TreeE.y)||
	(KingP[KingPChoosed].x == TreeF.x && KingP[KingPChoosed].y == TreeF.y))
	{
		return true;
	}
	else return false;
}

function GregosCouldMoveK()
{
	if((InfoArcP == true && KingG[KingGChoosed].x == ArcP[ArcsPChoosed].x && KingG[KingGChoosed].y == ArcP[ArcsPChoosed].y)||
	(InfoKntP == true && KingG[KingGChoosed].x == KntP[KntsPChoosed].x && KingG[KingGChoosed].y == KntP[KntsPChoosed].y) ||
	(InfoTorP == true && KingG[KingGChoosed].x == TorP[TorsPChoosed].x && KingG[KingGChoosed].y == TorP[TorsPChoosed].y) ||
	(InfoLancerP == true && KingG[KingGChoosed].x == LancerP[LancersPChoosed].x && KingG[KingGChoosed].y == LancerP[LancersPChoosed].y) ||
	(InfoGnrlP == true && KingG[KingGChoosed].x == GnrlP[GnrlPChoosed].x && KingG[KingGChoosed].y == GnrlP[GnrlPChoosed].y) ||
	(InfoKingP == true && KingG[KingGChoosed].x == KingP[KingPChoosed].x && KingG[KingGChoosed].y == KingP[KingPChoosed].y) ||
	(KingG[KingGChoosed].x == TreeA.x && KingG[KingGChoosed].y == TreeA.y)||
	(KingG[KingGChoosed].x == TreeB.x && KingG[KingGChoosed].y == TreeB.y)||
	(KingG[KingGChoosed].x == TreeC.x && KingG[KingGChoosed].y == TreeC.y)||
	(KingG[KingGChoosed].x == TreeD.x && KingG[KingGChoosed].y == TreeD.y)||
	(KingG[KingGChoosed].x == TreeE.x && KingG[KingGChoosed].y == TreeE.y)||
	(KingG[KingGChoosed].x == TreeF.x && KingG[KingGChoosed].y == TreeF.y))
	{
		return true;
	}
	else return false;
}


function DieKings()
{
	for(var i = 0; i < KingP.length; i++) 
	{
		if(KingP[i].life <= 0) 
		{
			KingP[i].dead = true;
		}
		if(KingP[i].dead)
		{	
			KingP[i].x = 0;
			KingP[i].y = 0;
			KingP[i].w = 0;
			KingP[i].h = 0;
			KingP[i].life = 0;
		}		
	}
	for(var i = 0; i < KingG.length; i++) 
	{
		if(KingG[i].life <= 0)
		{
			KingG[i].dead = true;
		}
		
		if(KingG[i].dead)
		{
			KingG[i].x = 0;
			KingG[i].y = 0;
			KingG[i].w = 0;
			KingG[i].h = 0;
			KingG[i].life = 0;
		}
	}
}
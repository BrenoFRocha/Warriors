var CountTime = 100;
var AtacadoG = 0;
var PAChoosed = -1;
var AtackMP = true;
var CountM = -1;
var CountOnM = true;
var Boolean8 = false;
var CountTime = 100;
var AtacadoP = 0;
var GAChoosed = -1;
var AtackMG = true;
var CountM = -1;
var CountOnM = true;
var Boolean8 = false;
var limit_down = 451;
var limit_right = 351;

function drawAtacksK()
{
	if(AIG)
	{
		context.drawImage(AtkA,KingG[GAChoosed].x + 50, KingG[GAChoosed].y, KingG[GAChoosed].w, KingG[GAChoosed].h);
		context.drawImage(AtkA,KingG[GAChoosed].x - 50, KingG[GAChoosed].y, KingG[GAChoosed].w, KingG[GAChoosed].h);
		context.drawImage(AtkA,KingG[GAChoosed].x, KingG[GAChoosed].y - 50, KingG[GAChoosed].w, KingG[GAChoosed].h);
		context.drawImage(AtkA,KingG[GAChoosed].x, KingG[GAChoosed].y + 50, KingG[GAChoosed].w, KingG[GAChoosed].h);
		context.drawImage(AtkA,KingG[GAChoosed].x + 50, KingG[GAChoosed].y + 50, KingG[GAChoosed].w, KingG[GAChoosed].h);
		context.drawImage(AtkA,KingG[GAChoosed].x - 50, KingG[GAChoosed].y - 50, KingG[GAChoosed].w, KingG[GAChoosed].h);
		context.drawImage(AtkA,KingG[GAChoosed].x + 50, KingG[GAChoosed].y - 50, KingG[GAChoosed].w, KingG[GAChoosed].h);
		context.drawImage(AtkA,KingG[GAChoosed].x - 50 , KingG[GAChoosed].y + 50, KingG[GAChoosed].w, KingG[GAChoosed].h);
		context.drawImage(AtkA,KingG[GAChoosed].x + 100, KingG[GAChoosed].y + 100, KingG[GAChoosed].w, KingG[GAChoosed].h);
		context.drawImage(AtkA,KingG[GAChoosed].x - 100, KingG[GAChoosed].y - 100, KingG[GAChoosed].w, KingG[GAChoosed].h);
		context.drawImage(AtkA,KingG[GAChoosed].x + 100, KingG[GAChoosed].y - 100, KingG[GAChoosed].w, KingG[GAChoosed].h);
		context.drawImage(AtkA,KingG[GAChoosed].x - 100, KingG[GAChoosed].y + 100, KingG[GAChoosed].w, KingG[GAChoosed].h);
	}
	else if(AIP)
	{
		context.drawImage(AtkA,KingP[PAChoosed].x + 50, KingP[PAChoosed].y, KingP[PAChoosed].w, KingP[PAChoosed].h);
		context.drawImage(AtkA,KingP[PAChoosed].x - 50, KingP[PAChoosed].y, KingP[PAChoosed].w, KingP[PAChoosed].h);
		context.drawImage(AtkA,KingP[PAChoosed].x, KingP[PAChoosed].y - 50, KingP[PAChoosed].w, KingP[PAChoosed].h);
		context.drawImage(AtkA,KingP[PAChoosed].x, KingP[PAChoosed].y + 50, KingP[PAChoosed].w, KingP[PAChoosed].h);
		context.drawImage(AtkA,KingP[PAChoosed].x + 50, KingP[PAChoosed].y + 50, KingP[PAChoosed].w, KingP[PAChoosed].h);
		context.drawImage(AtkA,KingP[PAChoosed].x - 50, KingP[PAChoosed].y - 50, KingP[PAChoosed].w, KingP[PAChoosed].h);
		context.drawImage(AtkA,KingP[PAChoosed].x + 50, KingP[PAChoosed].y - 50, KingP[PAChoosed].w, KingP[PAChoosed].h);
		context.drawImage(AtkA,KingP[PAChoosed].x - 50 , KingP[PAChoosed].y + 50, KingP[PAChoosed].w, KingP[PAChoosed].h);
		context.drawImage(AtkA,KingP[PAChoosed].x + 100, KingP[PAChoosed].y + 100, KingP[PAChoosed].w, KingP[PAChoosed].h);
		context.drawImage(AtkA,KingP[PAChoosed].x - 100, KingP[PAChoosed].y - 100, KingP[PAChoosed].w, KingP[PAChoosed].h);
		context.drawImage(AtkA,KingP[PAChoosed].x + 100, KingP[PAChoosed].y - 100, KingP[PAChoosed].w, KingP[PAChoosed].h);
		context.drawImage(AtkA,KingP[PAChoosed].x - 100, KingP[PAChoosed].y + 100, KingP[PAChoosed].w, KingP[PAChoosed].h);
	}
	
}
function drawAtacksG()
{
	if(AIG)
	{
		context.drawImage(AtkA,GnrlG[GAChoosed].x + 50, GnrlG[GAChoosed].y, GnrlG[GAChoosed].w, GnrlG[GAChoosed].h);
		context.drawImage(AtkA,GnrlG[GAChoosed].x - 50, GnrlG[GAChoosed].y, GnrlG[GAChoosed].w, GnrlG[GAChoosed].h);
		context.drawImage(AtkA,GnrlG[GAChoosed].x, GnrlG[GAChoosed].y - 50, GnrlG[GAChoosed].w, GnrlG[GAChoosed].h);
		context.drawImage(AtkA,GnrlG[GAChoosed].x, GnrlG[GAChoosed].y + 50, GnrlG[GAChoosed].w, GnrlG[GAChoosed].h);
		context.drawImage(AtkA,GnrlG[GAChoosed].x + 100, GnrlG[GAChoosed].y, GnrlG[GAChoosed].w, GnrlG[GAChoosed].h);
		context.drawImage(AtkA,GnrlG[GAChoosed].x - 100, GnrlG[GAChoosed].y, GnrlG[GAChoosed].w, GnrlG[GAChoosed].h);
		context.drawImage(AtkA,GnrlG[GAChoosed].x, GnrlG[GAChoosed].y - 100, GnrlG[GAChoosed].w, GnrlG[GAChoosed].h);
		context.drawImage(AtkA,GnrlG[GAChoosed].x, GnrlG[GAChoosed].y + 100, GnrlG[GAChoosed].w, GnrlG[GAChoosed].h);
	}
	else if(AIP)
	{
		context.drawImage(AtkA,GnrlP[PAChoosed].x + 50, GnrlP[PAChoosed].y, GnrlP[PAChoosed].w, GnrlP[PAChoosed].h);
		context.drawImage(AtkA,GnrlP[PAChoosed].x - 50, GnrlP[PAChoosed].y, GnrlP[PAChoosed].w, GnrlP[PAChoosed].h);
		context.drawImage(AtkA,GnrlP[PAChoosed].x, GnrlP[PAChoosed].y - 50, GnrlP[PAChoosed].w, GnrlP[PAChoosed].h);
		context.drawImage(AtkA,GnrlP[PAChoosed].x, GnrlP[PAChoosed].y + 50, GnrlP[PAChoosed].w, GnrlP[PAChoosed].h);
		context.drawImage(AtkA,GnrlP[PAChoosed].x + 100, GnrlP[PAChoosed].y, GnrlP[PAChoosed].w, GnrlP[PAChoosed].h);
		context.drawImage(AtkA,GnrlP[PAChoosed].x - 100, GnrlP[PAChoosed].y, GnrlP[PAChoosed].w, GnrlP[PAChoosed].h);
		context.drawImage(AtkA,GnrlP[PAChoosed].x, GnrlP[PAChoosed].y - 100, GnrlP[PAChoosed].w, GnrlP[PAChoosed].h);
		context.drawImage(AtkA,GnrlP[PAChoosed].x, GnrlP[PAChoosed].y + 100, GnrlP[PAChoosed].w, GnrlP[PAChoosed].h);
	}
}
function drawAtacksC()
{
	if(AIG)
	{
		context.drawImage(AtkA,KntG[GAChoosed].x + 50, KntG[GAChoosed].y, KntG[GAChoosed].w, KntG[GAChoosed].h);
		context.drawImage(AtkA,KntG[GAChoosed].x - 50, KntG[GAChoosed].y, KntG[GAChoosed].w, KntG[GAChoosed].h);
		context.drawImage(AtkA,KntG[GAChoosed].x, KntG[GAChoosed].y - 50, KntG[GAChoosed].w, KntG[GAChoosed].h);
		context.drawImage(AtkA,KntG[GAChoosed].x, KntG[GAChoosed].y + 50, KntG[GAChoosed].w, KntG[GAChoosed].h);
	}
	else if(AIP)
	{
		context.drawImage(AtkA,KntP[PAChoosed].x + 50, KntP[PAChoosed].y, KntP[PAChoosed].w, KntP[PAChoosed].h);
		context.drawImage(AtkA,KntP[PAChoosed].x - 50, KntP[PAChoosed].y, KntP[PAChoosed].w, KntP[PAChoosed].h);
		context.drawImage(AtkA,KntP[PAChoosed].x, KntP[PAChoosed].y - 50, KntP[PAChoosed].w, KntP[PAChoosed].h);
		context.drawImage(AtkA,KntP[PAChoosed].x, KntP[PAChoosed].y + 50, KntP[PAChoosed].w, KntP[PAChoosed].h);
	}
}
function drawAtacksT()
{
	if(AIG)
	{
		context.drawImage(AtkA,TorG[GAChoosed].x + 50, TorG[GAChoosed].y, TorG[GAChoosed].w, TorG[GAChoosed].h);
		context.drawImage(AtkA,TorG[GAChoosed].x - 50, TorG[GAChoosed].y, TorG[GAChoosed].w, TorG[GAChoosed].h);
		context.drawImage(AtkA,TorG[GAChoosed].x, TorG[GAChoosed].y - 50, TorG[GAChoosed].w, TorG[GAChoosed].h);
		context.drawImage(AtkA,TorG[GAChoosed].x, TorG[GAChoosed].y + 50, TorG[GAChoosed].w, TorG[GAChoosed].h);
		context.drawImage(AtkA,TorG[GAChoosed].x + 50, TorG[GAChoosed].y + 50, TorG[GAChoosed].w, TorG[GAChoosed].h);
		context.drawImage(AtkA,TorG[GAChoosed].x - 50, TorG[GAChoosed].y - 50, TorG[GAChoosed].w, TorG[GAChoosed].h);
		context.drawImage(AtkA,TorG[GAChoosed].x + 50, TorG[GAChoosed].y - 50, TorG[GAChoosed].w, TorG[GAChoosed].h);
		context.drawImage(AtkA,TorG[GAChoosed].x - 50 , TorG[GAChoosed].y + 50, TorG[GAChoosed].w, TorG[GAChoosed].h);
		context.drawImage(AtkA,TorG[GAChoosed].x + 100, TorG[GAChoosed].y, TorG[GAChoosed].w, TorG[GAChoosed].h);
		context.drawImage(AtkA,TorG[GAChoosed].x - 100, TorG[GAChoosed].y, TorG[GAChoosed].w, TorG[GAChoosed].h);
		context.drawImage(AtkA,TorG[GAChoosed].x, TorG[GAChoosed].y - 100, TorG[GAChoosed].w, TorG[GAChoosed].h);
		context.drawImage(AtkA,TorG[GAChoosed].x, TorG[GAChoosed].y + 100, TorG[GAChoosed].w, TorG[GAChoosed].h);
		context.drawImage(AtkA,TorG[GAChoosed].x + 100, TorG[GAChoosed].y + 100, TorG[GAChoosed].w, TorG[GAChoosed].h);
		context.drawImage(AtkA,TorG[GAChoosed].x - 100, TorG[GAChoosed].y - 100, TorG[GAChoosed].w, TorG[GAChoosed].h);
		context.drawImage(AtkA,TorG[GAChoosed].x + 100, TorG[GAChoosed].y - 100, TorG[GAChoosed].w, TorG[GAChoosed].h);
		context.drawImage(AtkA,TorG[GAChoosed].x - 100, TorG[GAChoosed].y + 100, TorG[GAChoosed].w, TorG[GAChoosed].h);
	}
	else if(AIP)
	{
		context.drawImage(AtkA,TorP[PAChoosed].x + 50, TorP[PAChoosed].y, TorP[PAChoosed].w, TorP[PAChoosed].h);
		context.drawImage(AtkA,TorP[PAChoosed].x - 50, TorP[PAChoosed].y, TorP[PAChoosed].w, TorP[PAChoosed].h);
		context.drawImage(AtkA,TorP[PAChoosed].x, TorP[PAChoosed].y - 50, TorP[PAChoosed].w, TorP[PAChoosed].h);
		context.drawImage(AtkA,TorP[PAChoosed].x, TorP[PAChoosed].y + 50, TorP[PAChoosed].w, TorP[PAChoosed].h);
		context.drawImage(AtkA,TorP[PAChoosed].x + 50, TorP[PAChoosed].y + 50, TorP[PAChoosed].w, TorP[PAChoosed].h);
		context.drawImage(AtkA,TorP[PAChoosed].x - 50, TorP[PAChoosed].y - 50, TorP[PAChoosed].w, TorP[PAChoosed].h);
		context.drawImage(AtkA,TorP[PAChoosed].x + 50, TorP[PAChoosed].y - 50, TorP[PAChoosed].w, TorP[PAChoosed].h);
		context.drawImage(AtkA,TorP[PAChoosed].x - 50 , TorP[PAChoosed].y + 50, TorP[PAChoosed].w, TorP[PAChoosed].h);
		context.drawImage(AtkA,TorP[PAChoosed].x + 100, TorP[PAChoosed].y, TorP[PAChoosed].w, TorP[PAChoosed].h);
		context.drawImage(AtkA,TorP[PAChoosed].x - 100, TorP[PAChoosed].y, TorP[PAChoosed].w, TorP[PAChoosed].h);
		context.drawImage(AtkA,TorP[PAChoosed].x, TorP[PAChoosed].y - 100, TorP[PAChoosed].w, TorP[PAChoosed].h);
		context.drawImage(AtkA,TorP[PAChoosed].x, TorP[PAChoosed].y + 100, TorP[PAChoosed].w, TorP[PAChoosed].h);
		context.drawImage(AtkA,TorP[PAChoosed].x + 100, TorP[PAChoosed].y + 100, TorP[PAChoosed].w, TorP[PAChoosed].h);
		context.drawImage(AtkA,TorP[PAChoosed].x - 100, TorP[PAChoosed].y - 100, TorP[PAChoosed].w, TorP[PAChoosed].h);
		context.drawImage(AtkA,TorP[PAChoosed].x + 100, TorP[PAChoosed].y - 100, TorP[PAChoosed].w, TorP[PAChoosed].h);
		context.drawImage(AtkA,TorP[PAChoosed].x - 100, TorP[PAChoosed].y + 100, TorP[PAChoosed].w, TorP[PAChoosed].h);
	}
}
function drawAtacksL()
{
	if(AIG)
	{
		context.drawImage(AtkA,LancerG[GAChoosed].x + 50, LancerG[GAChoosed].y + 50, LancerG[GAChoosed].w, LancerG[GAChoosed].h);
		context.drawImage(AtkA,LancerG[GAChoosed].x - 50, LancerG[GAChoosed].y - 50, LancerG[GAChoosed].w, LancerG[GAChoosed].h);
		context.drawImage(AtkA,LancerG[GAChoosed].x + 50, LancerG[GAChoosed].y - 50, LancerG[GAChoosed].w, LancerG[GAChoosed].h);
		context.drawImage(AtkA,LancerG[GAChoosed].x - 50, LancerG[GAChoosed].y + 50, LancerG[GAChoosed].w, LancerG[GAChoosed].h);
	}
	else if(AIP)
	{
		context.drawImage(AtkA,LancerP[PAChoosed].x + 50, LancerP[PAChoosed].y + 50, LancerP[PAChoosed].w, LancerP[PAChoosed].h);
		context.drawImage(AtkA,LancerP[PAChoosed].x - 50, LancerP[PAChoosed].y - 50, LancerP[PAChoosed].w, LancerP[PAChoosed].h);
		context.drawImage(AtkA,LancerP[PAChoosed].x + 50, LancerP[PAChoosed].y - 50, LancerP[PAChoosed].w, LancerP[PAChoosed].h);
		context.drawImage(AtkA,LancerP[PAChoosed].x - 50, LancerP[PAChoosed].y + 50, LancerP[PAChoosed].w, LancerP[PAChoosed].h);
	}
}
function drawAtacksA()
{
	if(AIG)
	{
		context.drawImage(AtkA,ArcG[GAChoosed].x + 50, ArcG[GAChoosed].y, ArcG[GAChoosed].w, ArcG[GAChoosed].h);
		context.drawImage(AtkA,ArcG[GAChoosed].x - 50, ArcG[GAChoosed].y, ArcG[GAChoosed].w, ArcG[GAChoosed].h);
		context.drawImage(AtkA,ArcG[GAChoosed].x, ArcG[GAChoosed].y - 50, ArcG[GAChoosed].w, ArcG[GAChoosed].h);
		context.drawImage(AtkA,ArcG[GAChoosed].x, ArcG[GAChoosed].y + 50, ArcG[GAChoosed].w, ArcG[GAChoosed].h);
		context.drawImage(AtkA,ArcG[GAChoosed].x + 100, ArcG[GAChoosed].y, ArcG[GAChoosed].w, ArcG[GAChoosed].h);
		context.drawImage(AtkA,ArcG[GAChoosed].x - 100, ArcG[GAChoosed].y, ArcG[GAChoosed].w, ArcG[GAChoosed].h);
		context.drawImage(AtkA,ArcG[GAChoosed].x, ArcG[GAChoosed].y - 100, ArcG[GAChoosed].w, ArcG[GAChoosed].h);
		context.drawImage(AtkA,ArcG[GAChoosed].x, ArcG[GAChoosed].y + 100, ArcG[GAChoosed].w, ArcG[GAChoosed].h);
		context.drawImage(AtkA,ArcG[GAChoosed].x + 150, ArcG[GAChoosed].y, ArcG[GAChoosed].w, ArcG[GAChoosed].h);
		context.drawImage(AtkA,ArcG[GAChoosed].x - 150, ArcG[GAChoosed].y, ArcG[GAChoosed].w, ArcG[GAChoosed].h);
		context.drawImage(AtkA,ArcG[GAChoosed].x, ArcG[GAChoosed].y - 150, ArcG[GAChoosed].w, ArcG[GAChoosed].h);
		context.drawImage(AtkA,ArcG[GAChoosed].x, ArcG[GAChoosed].y + 150, ArcG[GAChoosed].w, ArcG[GAChoosed].h);
	}
	else if(AIP)
	{
		context.drawImage(AtkA,ArcP[PAChoosed].x + 50, ArcP[PAChoosed].y, ArcP[PAChoosed].w, ArcP[PAChoosed].h);
		context.drawImage(AtkA,ArcP[PAChoosed].x - 50, ArcP[PAChoosed].y, ArcP[PAChoosed].w, ArcP[PAChoosed].h);
		context.drawImage(AtkA,ArcP[PAChoosed].x, ArcP[PAChoosed].y - 50, ArcP[PAChoosed].w, ArcP[PAChoosed].h);
		context.drawImage(AtkA,ArcP[PAChoosed].x, ArcP[PAChoosed].y + 50, ArcP[PAChoosed].w, ArcP[PAChoosed].h);
		context.drawImage(AtkA,ArcP[PAChoosed].x + 100, ArcP[PAChoosed].y, ArcP[PAChoosed].w, ArcP[PAChoosed].h);
		context.drawImage(AtkA,ArcP[PAChoosed].x - 100, ArcP[PAChoosed].y, ArcP[PAChoosed].w, ArcP[PAChoosed].h);
		context.drawImage(AtkA,ArcP[PAChoosed].x, ArcP[PAChoosed].y - 100, ArcP[PAChoosed].w, ArcP[PAChoosed].h);
		context.drawImage(AtkA,ArcP[PAChoosed].x, ArcP[PAChoosed].y + 100, ArcP[PAChoosed].w, ArcP[PAChoosed].h);
		context.drawImage(AtkA,ArcP[PAChoosed].x + 150, ArcP[PAChoosed].y, ArcP[PAChoosed].w, ArcP[PAChoosed].h);
		context.drawImage(AtkA,ArcP[PAChoosed].x - 150, ArcP[PAChoosed].y, ArcP[PAChoosed].w, ArcP[PAChoosed].h);
		context.drawImage(AtkA,ArcP[PAChoosed].x, ArcP[PAChoosed].y - 150, ArcP[PAChoosed].w, ArcP[PAChoosed].h);
		context.drawImage(AtkA,ArcP[PAChoosed].x, ArcP[PAChoosed].y + 150, ArcP[PAChoosed].w, ArcP[PAChoosed].h);
	}

}

function AtackAI()
{
	if(Vez_Persas && AIP)
	{
			if(CountOnM)
			{
				CountM++;
			}
			if(AtackMP)
			{
				KntPMove = false;
				GnrlPMove = false;
				KingPMove = false;
				LancerPMove = false;
				ArcPMove = false;
				KingsPCC = 0;
				GnrlsPCC = 0;
				LancersPCC = 0;
				KntsPCC = 0;
				ArcsPCC = 0;
				if(CountM < 1)
				{
					if(KingP[CountM].y == limit_down)
					{
						CountOnM = false;
						KntPMove = false;
						GnrlPMove = false;
						KingPMove = false;
						LancerPMove = false;
						ArcPMove = false;
						context.drawImage(AtkA,KingP[CountM].x + 50, KingP[CountM].y, KingP[CountM].w, KingP[CountM].h);
						context.drawImage(AtkA,KingP[CountM].x - 50, KingP[CountM].y, KingP[CountM].w, KingP[CountM].h);
						context.drawImage(AtkA,KingP[CountM].x, KingP[CountM].y - 50, KingP[CountM].w, KingP[CountM].h);
						context.drawImage(AtkA,KingP[CountM].x, KingP[CountM].y + 50, KingP[CountM].w, KingP[CountM].h);
						context.drawImage(AtkA,KingP[CountM].x + 50, KingP[CountM].y + 50, KingP[CountM].w, KingP[CountM].h);
						context.drawImage(AtkA,KingP[CountM].x - 50, KingP[CountM].y - 50, KingP[CountM].w, KingP[CountM].h);
						context.drawImage(AtkA,KingP[CountM].x + 50, KingP[CountM].y - 50, KingP[CountM].w, KingP[CountM].h);
						context.drawImage(AtkA,KingP[CountM].x - 50 , KingP[CountM].y + 50, KingP[CountM].w, KingP[CountM].h);
						context.drawImage(AtkA,KingP[CountM].x + 100, KingP[CountM].y + 100, KingP[CountM].w, KingP[CountM].h);
						context.drawImage(AtkA,KingP[CountM].x - 100, KingP[CountM].y - 100, KingP[CountM].w, KingP[CountM].h);
						context.drawImage(AtkA,KingP[CountM].x + 100, KingP[CountM].y - 100, KingP[CountM].w, KingP[CountM].h);
						context.drawImage(AtkA,KingP[CountM].x - 100, KingP[CountM].y + 100, KingP[CountM].w, KingP[CountM].h);
						CountTime --;
						if(CountTime <= 0)
						{
							if(Math.floor(randomRange(0,99)<20))
							{
								WallG_life -= 32;
								if(PTBR)
								{
									newLine("Golpe Critico! Muralha Grega perde 32 pontos de vida.");
								}
								else
									newLine("Critical attack! - Greek Wall loses 32 life points.");
							}
							
							else
							{
								damage = Math.floor(randomRange(25,32));
								WallG_life -= damage;
								if(PTBR)
								{
									newLine("Golpe Normal - Muralha Grega perde "+damage+ " pontos de vida.");
								}
								else
									newLine("Normal attack - Greek Wall loses "+damage+" life points.");
							}
							CountTime = 100;
							Vez_Persas = false;	
							Vez_Gregos = true;
						}
					}
					
					else if(GnrlP[CountM].y == limit_down || GnrlP[CountM].y == limit_down-50)
					{
						CountOnM = false;
						KntPMove = false;
						GnrlPMove = false;
						KingPMove = false;
						LancerPMove = false;
						ArcPMove = false;
						context.drawImage(AtkA,GnrlP[CountM].x + 50, GnrlP[CountM].y, GnrlP[CountM].w, GnrlP[CountM].h);
						context.drawImage(AtkA,GnrlP[CountM].x - 50, GnrlP[CountM].y, GnrlP[CountM].w, GnrlP[CountM].h);
						context.drawImage(AtkA,GnrlP[CountM].x, GnrlP[CountM].y - 50, GnrlP[CountM].w, GnrlP[CountM].h);
						context.drawImage(AtkA,GnrlP[CountM].x, GnrlP[CountM].y + 50, GnrlP[CountM].w, GnrlP[CountM].h);
						context.drawImage(AtkA,GnrlP[CountM].x + 100, GnrlP[CountM].y, GnrlP[CountM].w, GnrlP[CountM].h);
						context.drawImage(AtkA,GnrlP[CountM].x - 100, GnrlP[CountM].y, GnrlP[CountM].w, GnrlP[CountM].h);
						context.drawImage(AtkA,GnrlP[CountM].x, GnrlP[CountM].y - 100, GnrlP[CountM].w, GnrlP[CountM].h);
						context.drawImage(AtkA,GnrlP[CountM].x, GnrlP[CountM].y + 100, GnrlP[CountM].w, GnrlP[CountM].h);
						CountTime --;
						if(CountTime <= 0)
						{
							if(Math.floor(randomRange(0,99)<20))
							{
								WallG_life -= 32;
								if(PTBR)
								{
									newLine("Golpe Critico! Muralha Grega perde 32 pontos de vida.");
								}
								else
									newLine("Critical attack! - Greek Wall loses 32 life points.");
							}
							
							else
							{
								damage = Math.floor(randomRange(16,20));
								WallG_life -= damage;
								if(PTBR)
								{
									newLine("Golpe Normal - Muralha Grega perde "+damage+ " pontos de vida.");
								}
								else
									newLine("Normal attack - Greek Wall loses "+damage+" life points.");
							}
							CountTime = 100;
							Vez_Persas = false;	
							Vez_Gregos = true;
						}
					}
					
					else if(KingP[CountM].y == limit_down-50)
					{
						CountOnM = false;
						KntPMove = false;
						GnrlPMove = false;
						KingPMove = false;
						LancerPMove = false;
						ArcPMove = false;
						context.drawImage(AtkA,KingP[CountM].x + 50, KingP[CountM].y, KingP[CountM].w, KingP[CountM].h);
						context.drawImage(AtkA,KingP[CountM].x - 50, KingP[CountM].y, KingP[CountM].w, KingP[CountM].h);
						context.drawImage(AtkA,KingP[CountM].x, KingP[CountM].y - 50, KingP[CountM].w, KingP[CountM].h);
						context.drawImage(AtkA,KingP[CountM].x, KingP[CountM].y + 50, KingP[CountM].w, KingP[CountM].h);
						context.drawImage(AtkA,KingP[CountM].x + 50, KingP[CountM].y + 50, KingP[CountM].w, KingP[CountM].h);
						context.drawImage(AtkA,KingP[CountM].x - 50, KingP[CountM].y - 50, KingP[CountM].w, KingP[CountM].h);
						context.drawImage(AtkA,KingP[CountM].x + 50, KingP[CountM].y - 50, KingP[CountM].w, KingP[CountM].h);
						context.drawImage(AtkA,KingP[CountM].x - 50 , KingP[CountM].y + 50, KingP[CountM].w, KingP[CountM].h);
						context.drawImage(AtkA,KingP[CountM].x + 100, KingP[CountM].y + 100, KingP[CountM].w, KingP[CountM].h);
						context.drawImage(AtkA,KingP[CountM].x - 100, KingP[CountM].y - 100, KingP[CountM].w, KingP[CountM].h);
						context.drawImage(AtkA,KingP[CountM].x + 100, KingP[CountM].y - 100, KingP[CountM].w, KingP[CountM].h);
						context.drawImage(AtkA,KingP[CountM].x - 100, KingP[CountM].y + 100, KingP[CountM].w, KingP[CountM].h);
						CountTime --;
						if(CountTime <= 0)
						{
							if(Math.floor(randomRange(0,99)<20))
							{
								WallG_life -= 32;
								if(PTBR)
								{
									newLine("Golpe Critico! Muralha Grega perde 32 pontos de vida.");
								}
								else
									newLine("Critical attack! - Greek Wall loses 32 life points.");
							}
							
							else
							{
								damage = Math.floor(randomRange(23,27));
								WallG_life -= damage;
								if(PTBR)
								{
									newLine("Golpe Normal - Muralha Grega perde "+damage+ " pontos de vida.");
								}
								else
									newLine("Normal attack - Greek Wall loses "+damage+" life points.");
							}
							CountTime = 100;
							Vez_Persas = false;	
							Vez_Gregos = true;
						}
					}
				}
				if(CountM < 4)
				{
					if(KntP[CountM].y == limit_down)
					{
						CountOnM = false;
						KntPMove = false;
						GnrlPMove = false;
						KingPMove = false;
						LancerPMove = false;
						ArcPMove = false;
						context.drawImage(AtkA,KntP[CountM].x + 50, KntP[CountM].y, KntP[CountM].w, KntP[CountM].h);
						context.drawImage(AtkA,KntP[CountM].x - 50, KntP[CountM].y, KntP[CountM].w, KntP[CountM].h);
						context.drawImage(AtkA,KntP[CountM].x, KntP[CountM].y - 50, KntP[CountM].w, KntP[CountM].h);
						context.drawImage(AtkA,KntP[CountM].x, KntP[CountM].y + 50, KntP[CountM].w, KntP[CountM].h);
						CountTime --;
						if(CountTime <= 0)
						{
							if(Math.floor(randomRange(0,99)<20))
							{
								WallG_life -= 27;
								if(PTBR)
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
								if(PTBR)
								{
									newLine("Golpe Normal - Muralha Grega perde "+damage+ " pontos de vida.");
								}
								else
									newLine("Normal attack - Greek Wall loses "+damage+" life points.");
							}
							CountTime = 100;
							Vez_Persas = false;	
							Vez_Gregos = true;
						}
					}
				}
				if(CountM < 8)
				{
					if(LancerP[CountM].y == limit_down)
					{
						CountOnM = false;
						KntPMove = false;
						GnrlPMove = false;
						KingPMove = false;
						LancerPMove = false;
						ArcPMove = false;
						context.drawImage(AtkA,LancerP[CountM].x + 50, LancerP[CountM].y + 50, LancerP[CountM].w, LancerP[CountM].h);
						context.drawImage(AtkA,LancerP[CountM].x - 50, LancerP[CountM].y - 50, LancerP[CountM].w, LancerP[CountM].h);
						context.drawImage(AtkA,LancerP[CountM].x + 50, LancerP[CountM].y - 50, LancerP[CountM].w, LancerP[CountM].h);
						context.drawImage(AtkA,LancerP[CountM].x - 50, LancerP[CountM].y + 50, LancerP[CountM].w, LancerP[CountM].h);
						CountTime --;
						if(CountTime <= 0)
						{
							if(Math.floor(randomRange(0,99)<20))
							{
								WallG_life -= 26;
								if(PTBR)
								{
									newLine("Golpe Critico! Muralha Grega perde 26 pontos de vida.");
								}
								else
									newLine("Critical attack! - Greek Wall loses 26 life points.");
							}
							
							else
							{
								damage = Math.floor(randomRange(16,21));
								WallG_life -= damage;
								if(PTBR)
								{
									newLine("Golpe Normal - Muralha Grega perde "+damage+ " pontos de vida.");
								}
								else
									newLine("Normal attack - Greek Wall loses "+damage+" life points.");
							}
							CountTime = 100;
							Vez_Persas = false;	
							Vez_Gregos = true;
						}
					}
					else if(ArcP[CountM].y == limit_down - 100 || ArcP[CountM].y == limit_down-50 || ArcP[CountM].y == limit_down)
					{
						CountOnM = false;
						KntPMove = false;
						GnrlPMove = false;
						KingPMove = false;
						LancerPMove = false;
						ArcPMove = false;
						context.drawImage(AtkA,ArcP[CountM].x + 50, ArcP[CountM].y, ArcP[CountM].w, ArcP[CountM].h);
						context.drawImage(AtkA,ArcP[CountM].x - 50, ArcP[CountM].y, ArcP[CountM].w, ArcP[CountM].h);
						context.drawImage(AtkA,ArcP[CountM].x, ArcP[CountM].y - 50, ArcP[CountM].w, ArcP[CountM].h);
						context.drawImage(AtkA,ArcP[CountM].x, ArcP[CountM].y + 50, ArcP[CountM].w, ArcP[CountM].h);
						context.drawImage(AtkA,ArcP[CountM].x + 100, ArcP[CountM].y, ArcP[CountM].w, ArcP[CountM].h);
						context.drawImage(AtkA,ArcP[CountM].x - 100, ArcP[CountM].y, ArcP[CountM].w, ArcP[CountM].h);
						context.drawImage(AtkA,ArcP[CountM].x, ArcP[CountM].y - 100, ArcP[CountM].w, ArcP[CountM].h);
						context.drawImage(AtkA,ArcP[CountM].x, ArcP[CountM].y + 100, ArcP[CountM].w, ArcP[CountM].h);
						context.drawImage(AtkA,ArcP[CountM].x + 150, ArcP[CountM].y, ArcP[CountM].w, ArcP[CountM].h);
						context.drawImage(AtkA,ArcP[CountM].x - 150, ArcP[CountM].y, ArcP[CountM].w, ArcP[CountM].h);
						context.drawImage(AtkA,ArcP[CountM].x, ArcP[CountM].y - 150, ArcP[CountM].w, ArcP[CountM].h);
						context.drawImage(AtkA,ArcP[CountM].x, ArcP[CountM].y + 150, ArcP[CountM].w, ArcP[CountM].h);
						CountTime --;
						if(CountTime <= 0)
						{
							if(Math.floor(randomRange(0,99)<20))
							{
								WallG_life -= 21;
								if(PTBR)
								{
									newLine("Golpe Critico! Muralha Grega perde 21 pontos de vida.");
								}
								else
									newLine("Critical attack! - Greek Wall loses 21 life points.");
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
									newLine("Normal attack - Greek Wall loses "+damage+" life points.");
							}
							CountTime = 100;
							Vez_Persas = false;	
							Vez_Gregos = true;
						}
					}
				
				}
				else
				{
					CountM = -1;
					AtackMP = false;
					Boolean8 = true;
				}
			}
			
			if(Boolean8 && AtackMP == false)
			{
				KntPMove = false;
				GnrlPMove = false;
				KingPMove = false;
				LancerPMove = false;
				ArcPMove = false;
				LancersGCC = 0;
				ArcsGCC = 0;
				KingsGCC = 0;
				KntsGCC = 0;
				GnrlsGCC = 0;
				PAChoosed ++;
				if(PAChoosed > 7)
				{
					AtacadoG ++;
					PAChoosed = 0;
				}
			}
			if(AtackMP == false)
			{
				if(PAChoosed < 8)
				{
					if(AtacadoG < 1)
					{
						if(PAChoosed < 1)
						{
								if(KingG[AtacadoG].x + 50 == KingP[PAChoosed].x && KingG[AtacadoG].y == KingP[PAChoosed].y || KingG[AtacadoG].x - 50 == KingP[PAChoosed].x && KingG[AtacadoG].y == KingP[PAChoosed].y || KingG[AtacadoG].x == KingP[PAChoosed].x && KingG[AtacadoG].y - 50 == KingP[PAChoosed].y || KingG[AtacadoG].x == KingP[PAChoosed].x && KingG[AtacadoG].y + 50 == KingP[PAChoosed].y || KingG[AtacadoG].x + 50 == KingP[PAChoosed].x && KingG[AtacadoG].y + 50 == KingP[PAChoosed].y || KingG[AtacadoG].x - 50 == KingP[PAChoosed].x && KingG[AtacadoG].y + 50 == KingP[PAChoosed].y || KingG[AtacadoG].x + 50 == KingP[PAChoosed].x && KingG[AtacadoG].y - 50 == KingP[PAChoosed].y || KingG[AtacadoG].x - 50 == KingP[PAChoosed].x && KingG[AtacadoG].y - 50 == KingP[PAChoosed].y)
								{
									Boolean8 = false;
									KntPMove = false;
									GnrlPMove = false;
									KingPMove = false;
									LancerPMove = false;
									ArcPMove = false;
									CountTime --;
									if(PAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksK();
										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												KingG[AtacadoG].life -= 32;
												if(PTBR)
												{		
													newLine("Golpe Critico! Rei Grego perde 32 pontos de vida.");
												}
												else
													newLine("Critical attack! - Greek King loses 32 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(21,29));
												KingG[AtacadoG].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - Rei Grego perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Greek King loses "+damage+" life points.");
											}
											KntPMove = true;
											GnrlPMove = true;
											KingPMove = true;
											LancerPMove = true;
											ArcPMove = true;
											Vez_Persas = false;	
											Vez_Gregos = true;	
											CountTime = 100;
										}
									}
								}
								else if(GnrlG[AtacadoG].x + 50 == KingP[PAChoosed].x && GnrlG[AtacadoG].y == KingP[PAChoosed].y || GnrlG[AtacadoG].x - 50 == KingP[PAChoosed].x && GnrlG[AtacadoG].y == KingP[PAChoosed].y || GnrlG[AtacadoG].x == KingP[PAChoosed].x && GnrlG[AtacadoG].y - 50 == KingP[PAChoosed].y || GnrlG[AtacadoG].x == KingP[PAChoosed].x && GnrlG[AtacadoG].y + 50 == KingP[PAChoosed].y || GnrlG[AtacadoG].x + 50 == KingP[PAChoosed].x && GnrlG[AtacadoG].y + 50 == KingP[PAChoosed].y || GnrlG[AtacadoG].x - 50 == KingP[PAChoosed].x && GnrlG[AtacadoG].y + 50 == KingP[PAChoosed].y || GnrlG[AtacadoG].x + 50 == KingP[PAChoosed].x && GnrlG[AtacadoG].y - 50 == KingP[PAChoosed].y || GnrlG[AtacadoG].x - 50 == KingP[PAChoosed].x && GnrlG[AtacadoG].y - 50 == KingP[PAChoosed].y)
								{
									Boolean8 = false;
									KntPMove = false;
									GnrlPMove = false;
									KingPMove = false;
									LancerPMove = false;
									ArcPMove = false;

									CountTime --;
									if(PAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksK();
										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												GnrlG[AtacadoG].life -= 32;
												if(PTBR)
												{
													newLine("Golpe Critico! General Grego perde 32 pontos de vida.");
												}
												else
													newLine("Critical attack! - Greek General loses 32 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(21,29));
												GnrlG[AtacadoG].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - General Grego perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Greek General loses "+damage+" life points.");
											}
											KntPMove = true;
											GnrlPMove = true;
											KingPMove = true;
											LancerPMove = true;
											ArcPMove = true;
											Vez_Persas = false;	
											Vez_Gregos = true;	
											CountTime = 100;
										}
									}
								}
								else if(KingG[AtacadoG].x - 50 == GnrlP[PAChoosed].x && KingG[AtacadoG].y == GnrlP[PAChoosed].y || KingG[AtacadoG].x - 100 == GnrlP[PAChoosed].x && KingG[AtacadoG].y == GnrlP[PAChoosed].y || KingG[AtacadoG].x + 50 == GnrlP[PAChoosed].x && KingG[AtacadoG].y == GnrlP[PAChoosed].y || KingG[AtacadoG].x + 100 == GnrlP[PAChoosed].x && KingG[AtacadoG].y == GnrlP[PAChoosed].y || KingG[AtacadoG].x == GnrlP[PAChoosed].x && KingG[AtacadoG].y - 50 == GnrlP[PAChoosed].y || KingG[AtacadoG].x == GnrlP[PAChoosed].x && KingG[AtacadoG].y - 100 == GnrlP[PAChoosed].y || KingG[AtacadoG].x == GnrlP[PAChoosed].x && KingG[AtacadoG].y + 50 == GnrlP[PAChoosed].y || KingG[AtacadoG].x == GnrlP[PAChoosed].x && KingG[AtacadoG].y + 100 == GnrlP[PAChoosed].y)
								{
									Boolean8 = false;
									KntPMove = false;
									GnrlPMove = false;
									KingPMove = false;
									LancerPMove = false;
									ArcPMove = false;
									CountTime --;
									if(PAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksG();
										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												KingG[AtacadoG].life -= 29;
												if(PTBR)
												{
													newLine("Golpe Critico! Rei Grego perde 29 pontos de vida.");
												}
												else
													newLine("Critical attack! - Greek King loses 29 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(20,24));
												KingG[AtacadoG].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - Rei Grego perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Greek King loses "+damage+" life points.");
											}
											KntPMove = true;
											GnrlPMove = true;
											KingPMove = true;
											LancerPMove = true;
											ArcPMove = true;
											Vez_Persas = false;	
											Vez_Gregos = true;	
											CountTime = 100;
										}
									}
								}
								else if(GnrlG[AtacadoG].x - 50 == GnrlP[PAChoosed].x && GnrlG[AtacadoG].y == GnrlP[PAChoosed].y || GnrlG[AtacadoG].x - 100 == GnrlP[PAChoosed].x && GnrlG[AtacadoG].y == GnrlP[PAChoosed].y || GnrlG[AtacadoG].x + 50 == GnrlP[PAChoosed].x && GnrlG[AtacadoG].y == GnrlP[PAChoosed].y || GnrlG[AtacadoG].x + 100 == GnrlP[PAChoosed].x && GnrlG[AtacadoG].y == GnrlP[PAChoosed].y || GnrlG[AtacadoG].x == GnrlP[PAChoosed].x && GnrlG[AtacadoG].y - 50 == GnrlP[PAChoosed].y || GnrlG[AtacadoG].x == GnrlP[PAChoosed].x && GnrlG[AtacadoG].y - 100 == GnrlP[PAChoosed].y || GnrlG[AtacadoG].x  == GnrlP[PAChoosed].x && GnrlG[AtacadoG].y + 50 == GnrlP[PAChoosed].y || GnrlG[AtacadoG].x == GnrlP[PAChoosed].x && GnrlG[AtacadoG].y + 100 == GnrlP[PAChoosed].y)
								{
									Boolean8 = false;
									KntPMove = false;
									GnrlPMove = false;
									KingPMove = false;
									LancerPMove = false;
									ArcPMove = false;
									CountTime --;
									if(PAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksG();
										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												GnrlG[AtacadoG].life -= 29;
												if(PTBR)
												{
													newLine("Golpe Critico! General Grego perde 29 pontos de vida.");
												}
												else
													newLine("Critical attack! - Greek General loses 29 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(20,24));
												GnrlG[AtacadoG].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - General Grego perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Greek General loses "+damage+" life points.");
											}
											KntPMove = true;
											GnrlPMove = true;
											KingPMove = true;
											LancerPMove = true;
											ArcPMove = true;
											Vez_Persas = false;	
											Vez_Gregos = true;	
											CountTime = 100;
										}
									}
								}
								else if(KingG[AtacadoG].x - 100 == KingP[PAChoosed].x && KingG[AtacadoG].y - 100 == KingP[PAChoosed].y || KingG[AtacadoG].x + 100 == KingP[PAChoosed].x && KingG[AtacadoG].y - 100 == KingP[PAChoosed].y || KingG[AtacadoG].x - 100 == KingP[PAChoosed].x && KingG[AtacadoG].y + 100 == KingP[PAChoosed].y || KingG[AtacadoG].x + 100 == KingP[PAChoosed].x && KingG[AtacadoG].y + 100 == KingP[PAChoosed].y)
								{
									Boolean8 = false;
									KntPMove = false;
									GnrlPMove = false;
									KingPMove = false;
									LancerPMove = false;
									ArcPMove = false;
									CountTime --;
									if(PAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksK();
										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												KingG[AtacadoG].life -= 32;
												if(PTBR)
												{
													newLine("Golpe Critico! Rei Grego perde 32 pontos de vida.");
												}
												else
													newLine("Critical attack! - Greek King loses 32 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(19,23));
												KingG[AtacadoG].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - Rei Grego perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Greek King loses "+damage+" life points.");
											}
											KntPMove = true;
											GnrlPMove = true;
											KingPMove = true;
											LancerPMove = true;
											ArcPMove = true;
											Vez_Persas = false;	
											Vez_Gregos = true;	
											CountTime = 100;
										}
									}
								} 
								else if(GnrlG[AtacadoG].x - 100 == KingP[PAChoosed].x && GnrlG[AtacadoG].y - 100 == KingP[PAChoosed].y || GnrlG[AtacadoG].x + 100 == KingP[PAChoosed].x && GnrlG[AtacadoG].y - 100 == KingP[PAChoosed].y || GnrlG[AtacadoG].x - 100 == KingP[PAChoosed].x && GnrlG[AtacadoG].y + 100 == KingP[PAChoosed].y || GnrlG[AtacadoG].x + 100 == KingP[PAChoosed].x && GnrlG[AtacadoG].y + 100 == KingP[PAChoosed].y)
								{
									Boolean8 = false;
									KntPMove = false;
									GnrlPMove = false;
									KingPMove = false;
									LancerPMove = false;
									ArcPMove = false;
									CountTime --;
									if(PAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksK();
										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												GnrlG[AtacadoG].life -= 32;
												if(PTBR)
												{
													newLine("Golpe Critico! General Grego perde 32 pontos de vida.");
												}
												else
													newLine("Critical attack! - Greek General loses 32 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(19,23));
												GnrlG[AtacadoG].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - General Grego perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Greek General loses "+damage+" life points.");
											}											
											KntPMove = true;
											GnrlPMove = true;
											KingPMove = true;
											LancerPMove = true;
											ArcPMove = true;
											Vez_Persas = false;	
											Vez_Gregos = true;	
											CountTime = 100;
										}
									}
								} 
								
							}
								
							if(PAChoosed < 4)
							{
								if(KingG[AtacadoG].x + 50 == KntP[PAChoosed].x && KingG[AtacadoG].y == KntP[PAChoosed].y || KingG[AtacadoG].x - 50 == KntP[PAChoosed].x && KingG[AtacadoG].y == KntP[PAChoosed].y || KingG[AtacadoG].x == KntP[PAChoosed].x && KingG[AtacadoG].y - 50 == KntP[PAChoosed].y || KingG[AtacadoG].x == KntP[PAChoosed].x && KingG[AtacadoG].y + 50 == KntP[PAChoosed].y)
								{
									Boolean8 = false;
									KntPMove = false;
									GnrlPMove = false;
									KingPMove = false;
									LancerPMove = false;
									ArcPMove = false;
									CountTime --;
									if(PAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksC();

										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												KingG[AtacadoG].life -= 27;
												if(PTBR)
												{
													newLine("Golpe Critico! Rei Grego perde 27 pontos de vida.");
												}
												else
													newLine("Critical attack! - Greek King loses 27 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(18,23));
												KingG[AtacadoG].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - Rei Grego perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Greek King loses "+damage+" life points.");
											}
											KntPMove = true;
											GnrlPMove = true;
											KingPMove = true;
											LancerPMove = true;
											ArcPMove = true;
										
											Vez_Persas = false;	
											Vez_Gregos = true;	
											CountTime = 100;
										}
									}
								}
							
								else if(GnrlG[AtacadoG].x + 50 == KntP[PAChoosed].x && GnrlG[AtacadoG].y == KntP[PAChoosed].y || GnrlG[AtacadoG].x - 50 == KntP[PAChoosed].x && GnrlG[AtacadoG].y == KntP[PAChoosed].y || GnrlG[AtacadoG].x == KntP[PAChoosed].x && GnrlG[AtacadoG].y - 50 == KntP[PAChoosed].y || GnrlG[AtacadoG].x == KntP[PAChoosed].x && GnrlG[AtacadoG].y + 50 == KntP[PAChoosed].y)
								{
									Boolean8 = false;
									KntPMove = false;
									GnrlPMove = false;
									KingPMove = false;
									LancerPMove = false;
									ArcPMove = false;
									CountTime --;
									if(PAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksC();

										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												GnrlG[AtacadoG].life -= 27;
												if(PTBR)
												{
													newLine("Golpe Critico! General Grego perde 27 pontos de vida.");
												}
												else
													newLine("Critical attack! - Greek General loses 27 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(18,23));
												GnrlG[AtacadoG].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - General Grego perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Greek General loses "+damage+" life points.");
											}
											KntPMove = true;
											GnrlPMove = true;
											KingPMove = true;
											LancerPMove = true;
											ArcPMove = true;
										
											Vez_Persas = false;	
											Vez_Gregos = true;	
											CountTime = 100;
										}
									}
								}
							
							}
							
							if(PAChoosed < 2)
							{
								if(KingG[AtacadoG].x + 50 == TorP[PAChoosed].x && KingG[AtacadoG].y == TorP[PAChoosed].y || KingG[AtacadoG].x - 50 == TorP[PAChoosed].x && KingG[AtacadoG].y == TorP[PAChoosed].y || KingG[AtacadoG].x == TorP[PAChoosed].x && KingG[AtacadoG].y - 50 == TorP[PAChoosed].y || KingG[AtacadoG].x == TorP[PAChoosed].x && KingG[AtacadoG].y + 50 == TorP[PAChoosed].y || KingG[AtacadoG].x + 50 == TorP[PAChoosed].x && KingG[AtacadoG].y + 50 == TorP[PAChoosed].y || KingG[AtacadoG].x - 50 == TorP[PAChoosed].x && KingG[AtacadoG].y + 50 == TorP[PAChoosed].y || KingG[AtacadoG].x + 50 == TorP[PAChoosed].x && KingG[AtacadoG].y - 50 == TorP[PAChoosed].y || KingG[AtacadoG].x - 50 == TorP[PAChoosed].x && KingG[AtacadoG].y - 50 == TorP[PAChoosed].y)
								{
									Boolean8 = false;
									KntPMove = false;
									GnrlPMove = false;
									KingPMove = false;
									LancerPMove = false;
									ArcPMove = false;
									CountTime --;
									if(PAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksT();
										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												KingG[AtacadoG].life -= 24;
												if(PTBR)
												{
													newLine("Golpe Critico! Rei Grego perde 24 pontos de vida.");
												}
												else
													newLine("Critical attack! - Greek King loses 24 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(10,20));
												KingG[AtacadoG].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - Rei Grego perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Greek King loses "+damage+" life points.");
											}
											KntPMove = true;
											GnrlPMove = true;
											KingPMove = true;
											LancerPMove = true;
											ArcPMove = true;
											Vez_Persas = false;	
											Vez_Gregos = true;	
											CountTime = 100;
										}
									}
								}
								else if(KingG[AtacadoG].x - 100 == TorP[PAChoosed].x && KingG[AtacadoG].y - 100 == TorP[PAChoosed].y || KingG[AtacadoG].x + 100 == TorP[PAChoosed].x && KingG[AtacadoG].y - 100 == TorP[PAChoosed].y || KingG[AtacadoG].x - 100 == TorP[PAChoosed].x && KingG[AtacadoG].y + 100 == TorP[PAChoosed].y || KingG[AtacadoG].x + 100 == TorP[PAChoosed].x && KingG[AtacadoG].y + 100 == TorP[PAChoosed].y || KingG[AtacadoG].x - 100 == TorP[PAChoosed]. x && KingG[AtacadoG].y == TorP[PAChoosed].y || KingG[AtacadoG].x + 100 == TorP[PAChoosed]. x && KingG[AtacadoG].y == TorP[PAChoosed].y || KingG[AtacadoG].x == TorP[PAChoosed]. x && KingG[AtacadoG].y + 100 == TorP[PAChoosed].y || KingG[AtacadoG].x == TorP[PAChoosed]. x && KingG[AtacadoG].y - 100 == TorP[PAChoosed].y)
								{
									Boolean8 = false;
									KntPMove = false;
									GnrlPMove = false;
									KingPMove = false;
									LancerPMove = false;
									ArcPMove = false;
									CountTime --;
									if(PAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksT();
										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												KingG[AtacadoG].life -= 24;
												if(PTBR)
												{	
													newLine("Golpe Critico! Rei Grego perde 24 pontos de vida.");
												}
												else
													newLine("Critical attack! - Greek King loses 24 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(6,16));
												KingG[AtacadoG].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - Rei Grego perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Greek King loses "+damage+" life points.");
											}
											KntPMove = true;
											GnrlPMove = true;
											KingPMove = true;
											LancerPMove = true;
											ArcPMove = true;
											Vez_Persas = false;	
											Vez_Gregos = true;	
											CountTime = 100;
										}
									}
								} 
								else if(GnrlG[AtacadoG].x + 50 == TorP[PAChoosed].x && GnrlG[AtacadoG].y == TorP[PAChoosed].y || GnrlG[AtacadoG].x - 50 == TorP[PAChoosed].x && GnrlG[AtacadoG].y == TorP[PAChoosed].y || GnrlG[AtacadoG].x == TorP[PAChoosed].x && GnrlG[AtacadoG].y - 50 == TorP[PAChoosed].y || GnrlG[AtacadoG].x == TorP[PAChoosed].x && GnrlG[AtacadoG].y + 50 == TorP[PAChoosed].y || GnrlG[AtacadoG].x + 50 == TorP[PAChoosed].x && GnrlG[AtacadoG].y + 50 == TorP[PAChoosed].y || GnrlG[AtacadoG].x - 50 == TorP[PAChoosed].x && GnrlG[AtacadoG].y + 50 == TorP[PAChoosed].y || GnrlG[AtacadoG].x + 50 == TorP[PAChoosed].x && GnrlG[AtacadoG].y - 50 == TorP[PAChoosed].y || GnrlG[AtacadoG].x - 50 == TorP[PAChoosed].x && GnrlG[AtacadoG].y - 50 == TorP[PAChoosed].y)
								{
									Boolean8 = false;
									KntPMove = false;
									GnrlPMove = false;
									KingPMove = false;
									LancerPMove = false;
									ArcPMove = false;
									CountTime --;
									if(PAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksT();
										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												GnrlG[AtacadoG].life -= 24;
												if(PTBR)
												{
													newLine("Golpe Critico! General Grego perde 24 pontos de vida.");
												}
												else  
													newLine("Critical attack! - Greek General loses 24 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(10,20));
												GnrlG[AtacadoG].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - General Grego perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Greek General loses "+damage+" life points.");
											}
											KntPMove = true;
											GnrlPMove = true;
											KingPMove = true;
											LancerPMove = true;
											ArcPMove = true;
											Vez_Persas = false;	
											Vez_Gregos = true;	
											CountTime = 100;
										}
									}
								}
								else if(GnrlG[AtacadoG].x - 100 == TorP[PAChoosed].x && GnrlG[AtacadoG].y - 100 == TorP[PAChoosed].y || GnrlG[AtacadoG].x + 100 == TorP[PAChoosed].x && GnrlG[AtacadoG].y - 100 == TorP[PAChoosed].y || GnrlG[AtacadoG].x - 100 == TorP[PAChoosed].x && GnrlG[AtacadoG].y + 100 == TorP[PAChoosed].y || GnrlG[AtacadoG].x + 100 == TorP[PAChoosed].x && GnrlG[AtacadoG].y + 100 == TorP[PAChoosed].y || GnrlG[AtacadoG].x - 100 == TorP[PAChoosed]. x && GnrlG[AtacadoG].y == TorP[PAChoosed].y || GnrlG[AtacadoG].x + 100 == TorP[PAChoosed]. x && GnrlG[AtacadoG].y == TorP[PAChoosed].y || GnrlG[AtacadoG].x == TorP[PAChoosed]. x && GnrlG[AtacadoG].y + 100 == TorP[PAChoosed].y || GnrlG[AtacadoG].x == TorP[PAChoosed]. x && GnrlG[AtacadoG].y - 100 == TorP[PAChoosed].y)
								{
									Boolean8 = false;
									KntPMove = false;
									GnrlPMove = false;
									KingPMove = false;
									LancerPMove = false;
									ArcPMove = false;
									CountTime --;
									if(PAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksT();
										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												GnrlG[AtacadoG].life -= 24;
												if(PTBR)
												{
													newLine("Golpe Critico! General Grego perde 24 pontos de vida.");
												}
												else
													newLine("Critical attack! - Greek General loses 24 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(6,16));
												GnrlG[AtacadoG].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - General Grego perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Greek General loses "+damage+" life points.");
											}
											KntPMove = true;
											GnrlPMove = true;
											KingPMove = true;
											LancerPMove = true;
											ArcPMove = true;
											Vez_Persas = false;	
											Vez_Gregos = true;	
											CountTime = 100;
										}
									}
								} 
								
							}
										
							if(PAChoosed < 8)
							{
								if(KingG[AtacadoG].x - 50 == LancerP[PAChoosed].x && KingG[AtacadoG].y - 50 == LancerP[PAChoosed].y || KingG[AtacadoG].x + 50 == LancerP[PAChoosed].x && KingG[AtacadoG].y - 50 == LancerP[PAChoosed].y || KingG[AtacadoG].x - 50 == LancerP[PAChoosed].x && KingG[AtacadoG].y + 50 == LancerP[PAChoosed].y || KingG[AtacadoG].x + 50 == LancerP[PAChoosed].x && KingG[AtacadoG].y + 50 == LancerP[PAChoosed].y)
								{
									Boolean8 = false;
									KntPMove = false;
									GnrlPMove = false;
									KingPMove = false;
									LancerPMove = false;
									ArcPMove = false;
									CountTime --;
									if(PAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksL();

										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												KingG[AtacadoG].life -= 26;
												if(PTBR)
												{
													newLine("Golpe Critico! Rei Grego perde 26 pontos de vida.");
												}
												else
													newLine("Critical attack! - Greek King loses 26 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(16,21));
												KingG[AtacadoG].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - Rei Grego perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Greek King loses "+damage+" life points.");
											}
											KntPMove = true;
											GnrlPMove = true;
											KingPMove = true;
											LancerPMove = true;
											ArcPMove = true;
											
											Vez_Persas = false;	
											Vez_Gregos = true;	
											CountTime = 100;
										}
									}
								}
							
								else if(GnrlG[AtacadoG].x - 50 == LancerP[PAChoosed].x && GnrlG[AtacadoG].y - 50 == LancerP[PAChoosed].y || GnrlG[AtacadoG].x + 50 == LancerP[PAChoosed].x && GnrlG[AtacadoG].y - 50 == LancerP[PAChoosed].y || GnrlG[AtacadoG].x - 50 == LancerP[PAChoosed].x && GnrlG[AtacadoG].y + 50 == LancerP[PAChoosed].y || GnrlG[AtacadoG].x + 50 == LancerP[PAChoosed].x && GnrlG[AtacadoG].y + 50 == LancerP[PAChoosed].y)
								{
									Boolean8 = false;
									KntPMove = false;
									GnrlPMove = false;
									KingPMove = false;
									LancerPMove = false;
									ArcPMove = false;
									CountTime --;
									if(PAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksL();

										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												GnrlG[AtacadoG].life -= 26;
												if(PTBR)
												{
													newLine("Golpe Critico! General Grego perde 26 pontos de vida.");
												}
												else
													newLine("Critical attack! - Greek General loses 26 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(16,21));
												GnrlG[AtacadoG].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - General Grego perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Greek General loses "+damage+" life points.");
											}
											KntPMove = true;
											GnrlPMove = true;
											KingPMove = true;
											LancerPMove = true;
											ArcPMove = true;
											
											Vez_Persas = false;	
											Vez_Gregos = true;	
											CountTime = 100;
										}
									}
								}
							
								else if(KingG[AtacadoG].x == ArcP[PAChoosed].x && KingG[AtacadoG].y - 50 == ArcP[PAChoosed].y || KingG[AtacadoG].x == ArcP[PAChoosed].x && KingG[AtacadoG].y - 100 == ArcP[PAChoosed].y || KingG[AtacadoG].x == ArcP[PAChoosed].x && KingG[AtacadoG].y - 150 == ArcP[PAChoosed].y || KingG[AtacadoG].x == ArcP[PAChoosed].x && KingG[AtacadoG].y + 50 == ArcP[PAChoosed].y || KingG[AtacadoG].x == ArcP[PAChoosed].x && KingG[AtacadoG].y + 100 == ArcP[PAChoosed].y || KingG[AtacadoG].x == ArcP[PAChoosed].x && KingG[AtacadoG].y + 150 == ArcP[PAChoosed].y || KingG[AtacadoG].x - 50 == ArcP[PAChoosed].x && KingG[AtacadoG].y == ArcP[PAChoosed].y || KingG[AtacadoG].x - 100 == ArcP[PAChoosed].x && KingG[AtacadoG].y == ArcP[PAChoosed].y || KingG[AtacadoG].x - 150 == ArcP[PAChoosed].x && KingG[AtacadoG].y == ArcP[PAChoosed].y || KingG[AtacadoG].x + 50 == ArcP[PAChoosed].x && KingG[AtacadoG].y == ArcP[PAChoosed].y || KingG[AtacadoG].x + 100 == ArcP[PAChoosed].x && KingG[AtacadoG].y == ArcP[PAChoosed].y || KingG[AtacadoG].x + 150 == ArcP[PAChoosed].x && KingG[AtacadoG].y == ArcP[PAChoosed].y)
								{
									Boolean8 = false;
									KingPMove = false;
									GnrlPMove = false;
									LancerPMove = false;
									KntPMove = false;
									ArcPMove = false;
									CountTime --;
									
									if(PAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksA();
										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												KingG[AtacadoG].life -= 21;
												if(PTBR)
												{
													newLine("Golpe Critico! Rei Grego perde 21 pontos de vida.");
												}
												else
													newLine("Critical attack! - Greek King loses 21 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(17,21));
												KingG[AtacadoG].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - Rei Grego perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Greek King loses "+damage+" life points.");
											}
											
											KingPMove = true;
											GnrlPMove = true;
											KntPMove = true;
											LancerPMove = true;
											ArcPMove = true;
											Vez_Persas = false;	
											Vez_Gregos = true;	
											CountTime = 100;
										}
									}
								}
								
								else if(GnrlG[AtacadoG].x == ArcP[PAChoosed].x && GnrlG[AtacadoG].y - 50 == ArcP[PAChoosed].y || GnrlG[AtacadoG].x == ArcP[PAChoosed].x && GnrlG[AtacadoG].y - 100 == ArcP[PAChoosed].y || GnrlG[AtacadoG].x == ArcP[PAChoosed].x && GnrlG[AtacadoG].y - 150 == ArcP[PAChoosed].y || GnrlG[AtacadoG].x == ArcP[PAChoosed].x && GnrlG[AtacadoG].y + 50 == ArcP[PAChoosed].y || GnrlG[AtacadoG].x == ArcP[PAChoosed].x && GnrlG[AtacadoG].y + 100 == ArcP[PAChoosed].y || GnrlG[AtacadoG].x == ArcP[PAChoosed].x && GnrlG[AtacadoG].y + 150 == ArcP[PAChoosed].y || GnrlG[AtacadoG].x - 50 == ArcP[PAChoosed].x && GnrlG[AtacadoG].y == ArcP[PAChoosed].y || GnrlG[AtacadoG].x - 100 == ArcP[PAChoosed].x && GnrlG[AtacadoG].y == ArcP[PAChoosed].y || GnrlG[AtacadoG].x - 150 == ArcP[PAChoosed].x && GnrlG[AtacadoG].y == ArcP[PAChoosed].y || GnrlG[AtacadoG].x + 50 == ArcP[PAChoosed].x && GnrlG[AtacadoG].y == ArcP[PAChoosed].y || GnrlG[AtacadoG].x + 100 == ArcP[PAChoosed].x && GnrlG[AtacadoG].y == ArcP[PAChoosed].y || GnrlG[AtacadoG].x + 150 == ArcP[PAChoosed].x && GnrlG[AtacadoG].y == ArcP[PAChoosed].y)
								{
									Boolean8 = false;
									KingPMove = false;
									GnrlPMove = false;
									LancerPMove = false;
									KntPMove = false;
									ArcPMove = false;
									CountTime --;
									
									if(PAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksA();
										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												GnrlG[AtacadoG].life -= 21;
												if(PTBR)
												{
													newLine("Golpe Critico! General Grego perde 21 pontos de vida.");
												}
												else
													newLine("Critical attack! - Greek General loses 21 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(11,16));
												GnrlG[AtacadoG].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - General Grego perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Greek General loses "+damage+" life points.");
											}
											
											KingPMove = true;
											GnrlPMove = true;
											KntPMove = true;
											LancerPMove = true;
											ArcPMove = true;
											Vez_Persas = false;	
											Vez_Gregos = true;	
											CountTime = 100;
										}
									}
								}
							}
						
						}
					
					if(AtacadoG < 2)
					{
						if(PAChoosed < 1)
						{
							if(TorG[AtacadoG].x + 50 == KingP[PAChoosed].x && TorG[AtacadoG].y == KingP[PAChoosed].y || TorG[AtacadoG].x - 50 == KingP[PAChoosed].x && TorG[AtacadoG].y == KingP[PAChoosed].y || TorG[AtacadoG].x == KingP[PAChoosed].x && TorG[AtacadoG].y - 50 == KingP[PAChoosed].y || TorG[AtacadoG].x == KingP[PAChoosed].x && TorG[AtacadoG].y + 50 == KingP[PAChoosed].y || TorG[AtacadoG].x + 50 == KingP[PAChoosed].x && TorG[AtacadoG].y + 50 == KingP[PAChoosed].y || TorG[AtacadoG].x - 50 == KingP[PAChoosed].x && TorG[AtacadoG].y + 50 == KingP[PAChoosed].y || TorG[AtacadoG].x + 50 == KingP[PAChoosed].x && TorG[AtacadoG].y - 50 == KingP[PAChoosed].y || TorG[AtacadoG].x - 50 == KingP[PAChoosed].x && TorG[AtacadoG].y - 50 == KingP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksK();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											TorG[AtacadoG].life -= 32;
											if(PTBR)
											{
												newLine("Golpe Critico! Torre Grega perde 32 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Tower loses 32 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(21,29));
											TorG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Torre Grega perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Tower loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							}
							else if(TorG[AtacadoG].x - 50 == GnrlP[PAChoosed].x && TorG[AtacadoG].y == GnrlP[PAChoosed].y || TorG[AtacadoG].x - 100 == GnrlP[PAChoosed].x && TorG[AtacadoG].y == GnrlP[PAChoosed].y || TorG[AtacadoG].x + 50 == GnrlP[PAChoosed].x && TorG[AtacadoG].y == GnrlP[PAChoosed].y || TorG[AtacadoG].x + 100 == GnrlP[PAChoosed].x && TorG[AtacadoG].y == GnrlP[PAChoosed].y || TorG[AtacadoG].x == GnrlP[PAChoosed].x && TorG[AtacadoG].y - 50 == GnrlP[PAChoosed].y || TorG[AtacadoG].x == GnrlP[PAChoosed].x && TorG[AtacadoG].y - 100 == GnrlP[PAChoosed].y || TorG[AtacadoG].x  == GnrlP[PAChoosed].x && TorG[AtacadoG].y + 50 == GnrlP[PAChoosed].y || TorG[AtacadoG].x == GnrlP[PAChoosed].x && TorG[AtacadoG].y + 100 == GnrlP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksG();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											TorG[AtacadoG].life -= 29;
											if(PTBR)
											{
												newLine("Golpe Critico! Torre Grega perde 29 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Tower loses 29 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(23,27));
											TorG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Torre Grega perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Tower loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							}
							else if(TorG[AtacadoG].x - 100 == KingP[PAChoosed].x && TorG[AtacadoG].y - 100 == KingP[PAChoosed].y || TorG[AtacadoG].x + 100 == KingP[PAChoosed].x && TorG[AtacadoG].y - 100 == KingP[PAChoosed].y || TorG[AtacadoG].x - 100 == KingP[PAChoosed].x && TorG[AtacadoG].y + 100 == KingP[PAChoosed].y || TorG[AtacadoG].x + 100 == KingP[PAChoosed].x && TorG[AtacadoG].y + 100 == KingP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksK();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											TorG[AtacadoG].life -= 32;
											if(PTBR)
											{
												newLine("Golpe Critico! Torre Grega perde 32 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Tower loses 32 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(19,23));
											TorG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Torre Grega perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Tower loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							} 
						
						}
						
						if(PAChoosed < 4)
						{
							if(TorG[AtacadoG].x + 50 == KntP[PAChoosed].x && TorG[AtacadoG].y == KntP[PAChoosed].y || TorG[AtacadoG].x - 50 == KntP[PAChoosed].x && TorG[AtacadoG].y == KntP[PAChoosed].y || TorG[AtacadoG].x == KntP[PAChoosed].x && TorG[AtacadoG].y - 50 == KntP[PAChoosed].y || TorG[AtacadoG].x == KntP[PAChoosed].x && TorG[AtacadoG].y + 50 == KntP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksC();

									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											TorG[AtacadoG].life -= 27;
											if(PTBR)
											{
												newLine("Golpe Critico! Torre Grega perde 27 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Tower loses 27 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(18,23));
											TorG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Torre Grega perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Tower loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							}
						}
						
						if(PAChoosed < 8)
						{
							if(TorG[AtacadoG].x - 50 == LancerP[PAChoosed].x && TorG[AtacadoG].y - 50 == LancerP[PAChoosed].y || TorG[AtacadoG].x + 50 == LancerP[PAChoosed].x && TorG[AtacadoG].y - 50 == LancerP[PAChoosed].y || TorG[AtacadoG].x - 50 == LancerP[PAChoosed].x && TorG[AtacadoG].y + 50 == LancerP[PAChoosed].y || TorG[AtacadoG].x + 50 == LancerP[PAChoosed].x && TorG[AtacadoG].y + 50 == LancerP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksL();

									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											TorG[AtacadoG].life -= 26;
											if(PTBR)
											{
												newLine("Golpe Critico! Torre Grega perde 26 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Tower loses 26 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(16,21));
											TorG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Torre Grega perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Tower loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							}
							
							else if(TorG[AtacadoG].x == ArcP[PAChoosed].x && TorG[AtacadoG].y - 50 == ArcP[PAChoosed].y || TorG[AtacadoG].x == ArcP[PAChoosed].x && TorG[AtacadoG].y - 100 == ArcP[PAChoosed].y || TorG[AtacadoG].x == ArcP[PAChoosed].x && TorG[AtacadoG].y - 150 == ArcP[PAChoosed].y || TorG[AtacadoG].x == ArcP[PAChoosed].x && TorG[AtacadoG].y + 50 == ArcP[PAChoosed].y || TorG[AtacadoG].x == ArcP[PAChoosed].x && TorG[AtacadoG].y + 100 == ArcP[PAChoosed].y || TorG[AtacadoG].x == ArcP[PAChoosed].x && TorG[AtacadoG].y + 150 == ArcP[PAChoosed].y || TorG[AtacadoG].x - 50 == ArcP[PAChoosed].x && TorG[AtacadoG].y == ArcP[PAChoosed].y || TorG[AtacadoG].x - 100 == ArcP[PAChoosed].x && TorG[AtacadoG].y == ArcP[PAChoosed].y || TorG[AtacadoG].x - 150 == ArcP[PAChoosed].x && TorG[AtacadoG].y == ArcP[PAChoosed].y || TorG[AtacadoG].x + 50 == ArcP[PAChoosed].x && TorG[AtacadoG].y == ArcP[PAChoosed].y || TorG[AtacadoG].x + 100 == ArcP[PAChoosed].x && TorG[AtacadoG].y == ArcP[PAChoosed].y || TorG[AtacadoG].x + 150 == ArcP[PAChoosed].x && TorG[AtacadoG].y == ArcP[PAChoosed].y)
							{
								Boolean8 = false;
								TorMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksA();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											TorG[AtacadoG].life -= 21;
											if(PTBR)
											{
												newLine("Golpe Critico! Torre Grega perde 21 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Tower loses 21 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(11,16));
											TorG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Torre Grega perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Tower loses "+damage+" life points.");
										}
										TorMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							}
						}
					}
					
					if(AtacadoG < 4)
					{
						if(PAChoosed < 1)
						{
							if(KntG[AtacadoG].x + 50 == KingP[PAChoosed].x && KntG[AtacadoG].y == KingP[PAChoosed].y || KntG[AtacadoG].x - 50 == KingP[PAChoosed].x && KntG[AtacadoG].y == KingP[PAChoosed].y || KntG[AtacadoG].x == KingP[PAChoosed].x && KntG[AtacadoG].y - 50 == KingP[PAChoosed].y || KntG[AtacadoG].x == KingP[PAChoosed].x && KntG[AtacadoG].y + 50 == KingP[PAChoosed].y || KntG[AtacadoG].x + 50 == KingP[PAChoosed].x && KntG[AtacadoG].y + 50 == KingP[PAChoosed].y || KntG[AtacadoG].x - 50 == KingP[PAChoosed].x && KntG[AtacadoG].y + 50 == KingP[PAChoosed].y || KntG[AtacadoG].x + 50 == KingP[PAChoosed].x && KntG[AtacadoG].y - 50 == KingP[PAChoosed].y || KntG[AtacadoG].x - 50 == KingP[PAChoosed].x && KntG[AtacadoG].y - 50 == KingP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksK();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											KntG[AtacadoG].life -= 32;
											if(PTBR)
											{
												newLine("Golpe Critico! Arqueiro Grego perde 32 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Archer loses 32 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(21,29));
											KntG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Arqueiro Grego perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Archer loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							}
							else if(KntG[AtacadoG].x - 50 == GnrlP[PAChoosed].x && KntG[AtacadoG].y == GnrlP[PAChoosed].y || KntG[AtacadoG].x - 100 == GnrlP[PAChoosed].x && KntG[AtacadoG].y == GnrlP[PAChoosed].y || KntG[AtacadoG].x + 50 == GnrlP[PAChoosed].x && KntG[AtacadoG].y == GnrlP[PAChoosed].y || KntG[AtacadoG].x + 100 == GnrlP[PAChoosed].x && KntG[AtacadoG].y == GnrlP[PAChoosed].y || KntG[AtacadoG].x == GnrlP[PAChoosed].x && KntG[AtacadoG].y - 50 == GnrlP[PAChoosed].y || KntG[AtacadoG].x == GnrlP[PAChoosed].x && KntG[AtacadoG].y - 100 == GnrlP[PAChoosed].y || KntG[AtacadoG].x  == GnrlP[PAChoosed].x && KntG[AtacadoG].y + 50 == GnrlP[PAChoosed].y || KntG[AtacadoG].x == GnrlP[PAChoosed].x && KntG[AtacadoG].y + 100 == GnrlP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksG();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											KntG[AtacadoG].life -= 29;
											if(PTBR)
											{
												newLine("Golpe Critico! Cavaleiro Grego perde 29 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Knight loses 29 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(20,24));
											KntG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Cavaleiro Grego perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Knight loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							}
							else if(KntG[AtacadoG].x - 100 == KingP[PAChoosed].x && KntG[AtacadoG].y - 100 == KingP[PAChoosed].y || KntG[AtacadoG].x + 100 == KingP[PAChoosed].x && KntG[AtacadoG].y - 100 == KingP[PAChoosed].y || KntG[AtacadoG].x - 100 == KingP[PAChoosed].x && KntG[AtacadoG].y + 100 == KingP[PAChoosed].y || KntG[AtacadoG].x + 100 == KingP[PAChoosed].x && KntG[AtacadoG].y + 100 == KingP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksK();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											KntG[AtacadoG].life -= 32;
											if(PTBR)
											{
												newLine("Golpe Critico! Arqueiro Grego perde 32 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Archer loses 32 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(19,23));
											KntG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Arqueiro Grego perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Archer loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							} 
						}
						
						if(PAChoosed < 4)
						{
							if(KntG[AtacadoG].x + 50 == KntP[PAChoosed].x && KntG[AtacadoG].y == KntP[PAChoosed].y || KntG[AtacadoG].x - 50 == KntP[PAChoosed].x && KntG[AtacadoG].y == KntP[PAChoosed].y || KntG[AtacadoG].x == KntP[PAChoosed].x && KntG[AtacadoG].y - 50 == KntP[PAChoosed].y || KntG[AtacadoG].x == KntP[PAChoosed].x && KntG[AtacadoG].y + 50 == KntP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksC();

									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											KntG[AtacadoG].life -= 27;
											if(PTBR)
											{
												newLine("Golpe Critico! Cavaleiro Grego perde 27 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Knight loses 27 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(18,23));
											KntG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Cavaleiro Grego perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Knight loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							}
						
						}
							
						if(PAChoosed < 2)
						{
							if(KntG[AtacadoG].x + 50 == TorP[PAChoosed].x && KntG[AtacadoG].y == TorP[PAChoosed].y || KntG[AtacadoG].x - 50 == TorP[PAChoosed].x && KntG[AtacadoG].y == TorP[PAChoosed].y || KntG[AtacadoG].x == TorP[PAChoosed].x && KntG[AtacadoG].y - 50 == TorP[PAChoosed].y || KntG[AtacadoG].x == TorP[PAChoosed].x && KntG[AtacadoG].y + 50 == TorP[PAChoosed].y || KntG[AtacadoG].x + 50 == TorP[PAChoosed].x && KntG[AtacadoG].y + 50 == TorP[PAChoosed].y || KntG[AtacadoG].x - 50 == TorP[PAChoosed].x && KntG[AtacadoG].y + 50 == TorP[PAChoosed].y || KntG[AtacadoG].x + 50 == TorP[PAChoosed].x && KntG[AtacadoG].y - 50 == TorP[PAChoosed].y || KntG[AtacadoG].x - 50 == TorP[PAChoosed].x && KntG[AtacadoG].y - 50 == TorP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksT();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											KntG[AtacadoG].life -= 24;
											if(PTBR)
											{
												newLine("Golpe Critico! Lanceiro Grego perde 24 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Lancer loses 24 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(13,23));
											KntG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Lanceiro Grego perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Lancer loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							}
							else if(KntG[AtacadoG].x - 100 == TorP[PAChoosed].x && KntG[AtacadoG].y - 100 == TorP[PAChoosed].y || KntG[AtacadoG].x + 100 == TorP[PAChoosed].x && KntG[AtacadoG].y - 100 == TorP[PAChoosed].y || KntG[AtacadoG].x - 100 == TorP[PAChoosed].x && KntG[AtacadoG].y + 100 == TorP[PAChoosed].y || KntG[AtacadoG].x + 100 == TorP[PAChoosed].x && KntG[AtacadoG].y + 100 == TorP[PAChoosed].y || KntG[AtacadoG].x - 100 == TorP[PAChoosed]. x && KntG[AtacadoG].y == TorP[PAChoosed].y || KntG[AtacadoG].x + 100 == TorP[PAChoosed]. x && KntG[AtacadoG].y == TorP[PAChoosed].y || KntG[AtacadoG].x == TorP[PAChoosed]. x && KntG[AtacadoG].y + 100 == TorP[PAChoosed].y || KntG[AtacadoG].x == TorP[PAChoosed]. x && KntG[AtacadoG].y - 100 == TorP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksT();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											KntG[AtacadoG].life -= 24;
											if(PTBR)
											{
												newLine("Golpe Critico! Lanceiro Grego perde 24 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Lancer loses 24 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(9,19));
											KntG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Lanceiro Grego perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Lancer loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							} 
						
						}
						
						if(PAChoosed < 8)
						{
							if(KntG[AtacadoG].x - 50 == LancerP[PAChoosed].x && KntG[AtacadoG].y - 50 == LancerP[PAChoosed].y || KntG[AtacadoG].x + 50 == LancerP[PAChoosed].x && KntG[AtacadoG].y - 50 == LancerP[PAChoosed].y || KntG[AtacadoG].x - 50 == LancerP[PAChoosed].x && KntG[AtacadoG].y + 50 == LancerP[PAChoosed].y || KntG[AtacadoG].x + 50 == LancerP[PAChoosed].x && KntG[AtacadoG].y + 50 == LancerP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksL();

									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											KntG[AtacadoG].life -= 26;
											if(PTBR)
											{
												newLine("Golpe Critico! Cavaleiro Grego perde 26 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Knight loses 26 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(16,21));
											KntG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Cavaleiro Grego perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Knight loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							}
							
							else if(KntG[AtacadoG].x == ArcP[PAChoosed].x && KntG[AtacadoG].y - 50 == ArcP[PAChoosed].y || KntG[AtacadoG].x == ArcP[PAChoosed].x && KntG[AtacadoG].y - 100 == ArcP[PAChoosed].y || KntG[AtacadoG].x == ArcP[PAChoosed].x && KntG[AtacadoG].y - 150 == ArcP[PAChoosed].y || KntG[AtacadoG].x == ArcP[PAChoosed].x && KntG[AtacadoG].y + 50 == ArcP[PAChoosed].y || KntG[AtacadoG].x == ArcP[PAChoosed].x && KntG[AtacadoG].y + 100 == ArcP[PAChoosed].y || KntG[AtacadoG].x == ArcP[PAChoosed].x && KntG[AtacadoG].y + 150 == ArcP[PAChoosed].y || KntG[AtacadoG].x - 50 == ArcP[PAChoosed].x && KntG[AtacadoG].y == ArcP[PAChoosed].y || KntG[AtacadoG].x - 100 == ArcP[PAChoosed].x && KntG[AtacadoG].y == ArcP[PAChoosed].y || KntG[AtacadoG].x - 150 == ArcP[PAChoosed].x && KntG[AtacadoG].y == ArcP[PAChoosed].y || KntG[AtacadoG].x + 50 == ArcP[PAChoosed].x && KntG[AtacadoG].y == ArcP[PAChoosed].y || KntG[AtacadoG].x + 100 == ArcP[PAChoosed].x && KntG[AtacadoG].y == ArcP[PAChoosed].y || KntG[AtacadoG].x + 150 == ArcP[PAChoosed].x && KntG[AtacadoG].y == ArcP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksA();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											KntG[AtacadoG].life -= 21;
											if(PTBR)
											{
												newLine("Golpe Critico! Cavaleiro Grego perde 21 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Knight loses 21 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(11,16));
											KntG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Cavaleiro Grego perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Knight loses "+damage+" life points.");
										}
										
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							}
						}
					}
					
					if(AtacadoG < 8)
					{
						if(PAChoosed == 0)
						{
							if(LancerG[AtacadoG].x + 50 == KingP[PAChoosed].x && LancerG[AtacadoG].y == KingP[PAChoosed].y || LancerG[AtacadoG].x - 50 == KingP[PAChoosed].x && LancerG[AtacadoG].y == KingP[PAChoosed].y || LancerG[AtacadoG].x == KingP[PAChoosed].x && LancerG[AtacadoG].y - 50 == KingP[PAChoosed].y || LancerG[AtacadoG].x == KingP[PAChoosed].x && LancerG[AtacadoG].y + 50 == KingP[PAChoosed].y || LancerG[AtacadoG].x + 50 == KingP[PAChoosed].x && LancerG[AtacadoG].y + 50 == KingP[PAChoosed].y || LancerG[AtacadoG].x - 50 == KingP[PAChoosed].x && LancerG[AtacadoG].y + 50 == KingP[PAChoosed].y || LancerG[AtacadoG].x + 50 == KingP[PAChoosed].x && LancerG[AtacadoG].y - 50 == KingP[PAChoosed].y || LancerG[AtacadoG].x - 50 == KingP[PAChoosed].x && LancerG[AtacadoG].y - 50 == KingP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksK();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											LancerG[AtacadoG].life -= 32;
											if(PTBR)
											{
												newLine("Golpe Critico! Lanceiro Grego perde 32 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Lancer loses 32 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(21,29));
											LancerG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Lanceiro Grego perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Lancer loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							}
							else if(ArcG[AtacadoG].x + 50 == KingP[PAChoosed].x && ArcG[AtacadoG].y == KingP[PAChoosed].y || ArcG[AtacadoG].x - 50 == KingP[PAChoosed].x && ArcG[AtacadoG].y == KingP[PAChoosed].y || ArcG[AtacadoG].x == KingP[PAChoosed].x && ArcG[AtacadoG].y - 50 == KingP[PAChoosed].y || ArcG[AtacadoG].x == KingP[PAChoosed].x && ArcG[AtacadoG].y + 50 == KingP[PAChoosed].y || ArcG[AtacadoG].x + 50 == KingP[PAChoosed].x && ArcG[AtacadoG].y + 50 == KingP[PAChoosed].y || ArcG[AtacadoG].x - 50 == KingP[PAChoosed].x && ArcG[AtacadoG].y + 50 == KingP[PAChoosed].y || ArcG[AtacadoG].x + 50 == KingP[PAChoosed].x && ArcG[AtacadoG].y - 50 == KingP[PAChoosed].y || ArcG[AtacadoG].x - 50 == KingP[PAChoosed].x && ArcG[AtacadoG].y - 50 == KingP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksK();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											ArcG[AtacadoG].life -= 32;
											if(PTBR)
											{
												newLine("Golpe Critico! Arqueiro Grego perde 32 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Archer loses 32 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(21,29));
											ArcG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Arqueiro Grego perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Archer loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							}
							else if(LancerG[AtacadoG].x - 50 == GnrlP[PAChoosed].x && LancerG[AtacadoG].y == GnrlP[PAChoosed].y || LancerG[AtacadoG].x - 100 == GnrlP[PAChoosed].x && LancerG[AtacadoG].y == GnrlP[PAChoosed].y || LancerG[AtacadoG].x + 50 == GnrlP[PAChoosed].x && LancerG[AtacadoG].y == GnrlP[PAChoosed].y || LancerG[AtacadoG].x + 100 == GnrlP[PAChoosed].x && LancerG[AtacadoG].y == GnrlP[PAChoosed].y || LancerG[AtacadoG].x == GnrlP[PAChoosed].x && LancerG[AtacadoG].y - 50 == GnrlP[PAChoosed].y || LancerG[AtacadoG].x == GnrlP[PAChoosed].x && LancerG[AtacadoG].y - 100 == GnrlP[PAChoosed].y || LancerG[AtacadoG].x  == GnrlP[PAChoosed].x && LancerG[AtacadoG].y + 50 == GnrlP[PAChoosed].y || LancerG[AtacadoG].x == GnrlP[PAChoosed].x && LancerG[AtacadoG].y + 100 == GnrlP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksG();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											LancerG[AtacadoG].life -= 29;
											if(PTBR)
											{
												newLine("Golpe Critico! Lanceiro Grego perde 29 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Lancer loses 29 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(20,24));
											LancerG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Lanceiro Grego perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Lancer loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							}
							else if(ArcG[AtacadoG].x - 50 == GnrlP[PAChoosed].x && ArcG[AtacadoG].y == GnrlP[PAChoosed].y || ArcG[AtacadoG].x - 100 == GnrlP[PAChoosed].x && ArcG[AtacadoG].y == GnrlP[PAChoosed].y || ArcG[AtacadoG].x + 50 == GnrlP[PAChoosed].x && ArcG[AtacadoG].y == GnrlP[PAChoosed].y || ArcG[AtacadoG].x + 100 == GnrlP[PAChoosed].x && ArcG[AtacadoG].y == GnrlP[PAChoosed].y || ArcG[AtacadoG].x == GnrlP[PAChoosed].x && ArcG[AtacadoG].y - 50 == GnrlP[PAChoosed].y || ArcG[AtacadoG].x == GnrlP[PAChoosed].x && ArcG[AtacadoG].y - 100 == GnrlP[PAChoosed].y || ArcG[AtacadoG].x  == GnrlP[PAChoosed].x && ArcG[AtacadoG].y + 50 == GnrlP[PAChoosed].y || ArcG[AtacadoG].x == GnrlP[PAChoosed].x && ArcG[AtacadoG].y + 100 == GnrlP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksG()
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											ArcG[AtacadoG].life -= 29;
											if(PTBR)
											{
												newLine("Golpe Critico! Arqueiro Grego perde 29 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Archer loses 21 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(20,24));
											ArcG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Arqueiro Grego perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Archer loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							}
							else if(LancerG[AtacadoG].x - 100 == KingP[PAChoosed].x && LancerG[AtacadoG].y - 100 == KingP[PAChoosed].y || LancerG[AtacadoG].x + 100 == KingP[PAChoosed].x && LancerG[AtacadoG].y - 100 == KingP[PAChoosed].y || LancerG[AtacadoG].x - 100 == KingP[PAChoosed].x && LancerG[AtacadoG].y + 100 == KingP[PAChoosed].y || LancerG[AtacadoG].x + 100 == KingP[PAChoosed].x && LancerG[AtacadoG].y + 100 == KingP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksK();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											LancerG[AtacadoG].life -= 32;
											if(PTBR)
											{
												newLine("Golpe Critico! Lanceiro Grego perde 32 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Lancer loses 32 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(19,23));
											LancerG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Lanceiro Grego perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Lancer loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							} 
							else if(ArcG[AtacadoG].x - 100 == KingP[PAChoosed].x && ArcG[AtacadoG].y - 100 == KingP[PAChoosed].y || ArcG[AtacadoG].x + 100 == KingP[PAChoosed].x && ArcG[AtacadoG].y - 100 == KingP[PAChoosed].y || ArcG[AtacadoG].x - 100 == KingP[PAChoosed].x && ArcG[AtacadoG].y + 100 == KingP[PAChoosed].y || ArcG[AtacadoG].x + 100 == KingP[PAChoosed].x && ArcG[AtacadoG].y + 100 == KingP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksK();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											ArcG[AtacadoG].life -= 32;
											if(PTBR)
											{
												newLine("Golpe Critico! Arqueiro Grego perde 32 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Archer loses 32 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(19,23));
											ArcG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Arqueiro Grego perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Archer loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							} 
						}
						
						if(PAChoosed < 4)
						{
							if(LancerG[AtacadoG].x + 50 == KntP[PAChoosed].x && LancerG[AtacadoG].y == KntP[PAChoosed].y || LancerG[AtacadoG].x - 50 == KntP[PAChoosed].x && LancerG[AtacadoG].y == KntP[PAChoosed].y || LancerG[AtacadoG].x == KntP[PAChoosed].x && LancerG[AtacadoG].y - 50 == KntP[PAChoosed].y || LancerG[AtacadoG].x == KntP[PAChoosed].x && LancerG[AtacadoG].y + 50 == KntP[PAChoosed].y)
							{
								CountTime --;
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksC();

									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											LancerG[AtacadoG].life -= 27;
											if(PTBR)
											{
												newLine("Golpe Critico! Lanceiro Grego perde 27 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Lancer loses 27 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(20,25));
											LancerG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Lanceiro Grego perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Lancer loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							}
							
							else if(ArcG[AtacadoG].x + 50 == KntP[PAChoosed].x && ArcG[AtacadoG].y == KntP[PAChoosed].y || ArcG[AtacadoG].x - 50 == KntP[PAChoosed].x && ArcG[AtacadoG].y == KntP[PAChoosed].y || ArcG[AtacadoG].x == KntP[PAChoosed].x && ArcG[AtacadoG].y - 50 == KntP[PAChoosed].y || ArcG[AtacadoG].x == KntP[PAChoosed].x && ArcG[AtacadoG].y + 50 == KntP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksC();

									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											ArcG[AtacadoG].life -= 27;
											if(PTBR)
											{
												newLine("Golpe Critico! Arqueiro Grego perde 27 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Archer loses 27 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(18,23));
											ArcG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Arqueiro Grego perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Archer loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							}
						
						}
				
						if(PAChoosed < 2)
						{
							if(LancerG[AtacadoG].x + 50 == TorP[PAChoosed].x && LancerG[AtacadoG].y == TorP[PAChoosed].y || LancerG[AtacadoG].x - 50 == TorP[PAChoosed].x && LancerG[AtacadoG].y == TorP[PAChoosed].y || LancerG[AtacadoG].x == TorP[PAChoosed].x && LancerG[AtacadoG].y - 50 == TorP[PAChoosed].y || LancerG[AtacadoG].x == TorP[PAChoosed].x && LancerG[AtacadoG].y + 50 == TorP[PAChoosed].y || LancerG[AtacadoG].x + 50 == TorP[PAChoosed].x && LancerG[AtacadoG].y + 50 == TorP[PAChoosed].y || LancerG[AtacadoG].x - 50 == TorP[PAChoosed].x && LancerG[AtacadoG].y + 50 == TorP[PAChoosed].y || LancerG[AtacadoG].x + 50 == TorP[PAChoosed].x && LancerG[AtacadoG].y - 50 == TorP[PAChoosed].y || LancerG[AtacadoG].x - 50 == TorP[PAChoosed].x && LancerG[AtacadoG].y - 50 == TorP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksT();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											LancerG[AtacadoG].life -= 24;
											if(PTBR)
											{
												newLine("Golpe Critico! Lanceiro Grego perde 24 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Lancer loses 24 life points.");										}
										else
										{
											damage = Math.floor(randomRange(10,20));
											LancerG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Lanceiro Grego perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Lancer loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							}
							else if(LancerG[AtacadoG].x - 100 == TorP[PAChoosed].x && LancerG[AtacadoG].y - 100 == TorP[PAChoosed].y || LancerG[AtacadoG].x + 100 == TorP[PAChoosed].x && LancerG[AtacadoG].y - 100 == TorP[PAChoosed].y || LancerG[AtacadoG].x - 100 == TorP[PAChoosed].x && LancerG[AtacadoG].y + 100 == TorP[PAChoosed].y || LancerG[AtacadoG].x + 100 == TorP[PAChoosed].x && LancerG[AtacadoG].y + 100 == TorP[PAChoosed].y || LancerG[AtacadoG].x - 100 == TorP[PAChoosed]. x && LancerG[AtacadoG].y == TorP[PAChoosed].y || LancerG[AtacadoG].x + 100 == TorP[PAChoosed]. x && LancerG[AtacadoG].y == TorP[PAChoosed].y || LancerG[AtacadoG].x == TorP[PAChoosed]. x && LancerG[AtacadoG].y + 100 == TorP[PAChoosed].y || LancerG[AtacadoG].x == TorP[PAChoosed]. x && LancerG[AtacadoG].y - 100 == TorP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksT();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											LancerG[AtacadoG].life -= 24;
											if(PTBR)
											{
												newLine("Golpe Critico! Lanceiro Grego perde 24 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Lancer loses 24 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(6,16));
											LancerG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Lanceiro Grego perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Lancer loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							} 
							else if(ArcG[AtacadoG].x + 50 == TorP[PAChoosed].x && ArcG[AtacadoG].y == TorP[PAChoosed].y || ArcG[AtacadoG].x - 50 == TorP[PAChoosed].x && ArcG[AtacadoG].y == TorP[PAChoosed].y || ArcG[AtacadoG].x == TorP[PAChoosed].x && ArcG[AtacadoG].y - 50 == TorP[PAChoosed].y || ArcG[AtacadoG].x == TorP[PAChoosed].x && ArcG[AtacadoG].y + 50 == TorP[PAChoosed].y || ArcG[AtacadoG].x + 50 == TorP[PAChoosed].x && ArcG[AtacadoG].y + 50 == TorP[PAChoosed].y || ArcG[AtacadoG].x - 50 == TorP[PAChoosed].x && ArcG[AtacadoG].y + 50 == TorP[PAChoosed].y || ArcG[AtacadoG].x + 50 == TorP[PAChoosed].x && ArcG[AtacadoG].y - 50 == TorP[PAChoosed].y || ArcG[AtacadoG].x - 50 == TorP[PAChoosed].x && ArcG[AtacadoG].y - 50 == TorP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksT();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											ArcG[AtacadoG].life -= 24;
											if(PTBR)
											{
												newLine("Golpe Critico! Arqueiro Grego perde 24 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Archer loses 24 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(10,20));
											ArcG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Arqueiro Grego perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Archer loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							}
							else if(ArcG[AtacadoG].x - 100 == TorP[PAChoosed].x && ArcG[AtacadoG].y - 100 == TorP[PAChoosed].y || ArcG[AtacadoG].x + 100 == TorP[PAChoosed].x && ArcG[AtacadoG].y - 100 == TorP[PAChoosed].y || ArcG[AtacadoG].x - 100 == TorP[PAChoosed].x && ArcG[AtacadoG].y + 100 == TorP[PAChoosed].y || ArcG[AtacadoG].x + 100 == TorP[PAChoosed].x && ArcG[AtacadoG].y + 100 == TorP[PAChoosed].y || ArcG[AtacadoG].x - 100 == TorP[PAChoosed]. x && ArcG[AtacadoG].y == TorP[PAChoosed].y || ArcG[AtacadoG].x + 100 == TorP[PAChoosed]. x && ArcG[AtacadoG].y == TorP[PAChoosed].y || ArcG[AtacadoG].x == TorP[PAChoosed]. x && ArcG[AtacadoG].y + 100 == TorP[PAChoosed].y || ArcG[AtacadoG].x == TorP[PAChoosed]. x && ArcG[AtacadoG].y - 100 == TorP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksT();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											ArcG[AtacadoG].life -= 24;
											if(PTBR)
											{
												newLine("Golpe Critico! Arqueiro Grego perde 24 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Archer loses 24 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(6,16));
											ArcG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Arqueiro Grego perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Archer loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							} 
						
						}
						
						if(PAChoosed < 8)
						{
							if(LancerG[AtacadoG].x - 50 == LancerP[PAChoosed].x && LancerG[AtacadoG].y - 50 == LancerP[PAChoosed].y || LancerG[AtacadoG].x + 50 == LancerP[PAChoosed].x && LancerG[AtacadoG].y - 50 == LancerP[PAChoosed].y || LancerG[AtacadoG].x - 50 == LancerP[PAChoosed].x && LancerG[AtacadoG].y + 50 == LancerP[PAChoosed].y || LancerG[AtacadoG].x + 50 == LancerP[PAChoosed].x && LancerG[AtacadoG].y + 50 == LancerP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksL();

									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											LancerG[AtacadoG].life -= 26;
											if(PTBR)
											{
												newLine("Golpe Critico! Lanceiro Grego perde 27 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Lancer loses 27 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(16,21));
											LancerG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Lanceiro Grego perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Lancer loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							}
							else if(LancerG[AtacadoG].x == ArcP[PAChoosed].x && LancerG[AtacadoG].y - 50 == ArcP[PAChoosed].y || LancerG[AtacadoG].x == ArcP[PAChoosed].x && LancerG[AtacadoG].y - 100 == ArcP[PAChoosed].y || LancerG[AtacadoG].x == ArcP[PAChoosed].x && LancerG[AtacadoG].y - 150 == ArcP[PAChoosed].y || LancerG[AtacadoG].x == ArcP[PAChoosed].x && LancerG[AtacadoG].y + 50 == ArcP[PAChoosed].y || LancerG[AtacadoG].x == ArcP[PAChoosed].x && LancerG[AtacadoG].y + 100 == ArcP[PAChoosed].y || LancerG[AtacadoG].x == ArcP[PAChoosed].x && LancerG[AtacadoG].y + 150 == ArcP[PAChoosed].y || LancerG[AtacadoG].x - 50 == ArcP[PAChoosed].x && LancerG[AtacadoG].y == ArcP[PAChoosed].y || LancerG[AtacadoG].x - 100 == ArcP[PAChoosed].x && LancerG[AtacadoG].y == ArcP[PAChoosed].y || LancerG[AtacadoG].x - 150 == ArcP[PAChoosed].x && LancerG[AtacadoG].y == ArcP[PAChoosed].y || LancerG[AtacadoG].x + 50 == ArcP[PAChoosed].x && LancerG[AtacadoG].y == ArcP[PAChoosed].y || LancerG[AtacadoG].x + 100 == ArcP[PAChoosed].x && LancerG[AtacadoG].y == ArcP[PAChoosed].y || LancerG[AtacadoG].x + 150 == ArcP[PAChoosed].x && LancerG[AtacadoG].y == ArcP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksA();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											LancerG[AtacadoG].life -= 21;
											if(PTBR)
											{
												newLine("Golpe Critico! Lanceiro Grego perde 21 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek Lancer loses 21 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(11,16));
											LancerG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Lanceiro Grego perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek Lancer loses "+damage+" life points.");
										}
										
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							}
							else if(ArcG[AtacadoG].x - 50 == LancerP[PAChoosed].x && ArcG[AtacadoG].y - 50 == LancerP[PAChoosed].y || ArcG[AtacadoG].x + 50 == LancerP[PAChoosed].x && ArcG[AtacadoG].y - 50 == LancerP[PAChoosed].y || ArcG[AtacadoG].x - 50 == LancerP[PAChoosed].x && ArcG[AtacadoG].y + 50 == LancerP[PAChoosed].y || ArcG[AtacadoG].x + 50 == LancerP[PAChoosed].x && ArcG[AtacadoG].y + 50 == LancerP[PAChoosed].y)
							{
								Boolean8 = false;
								KntPMove = false;
								GnrlPMove = false;
								KingPMove = false;
								LancerPMove = false;
								ArcPMove = false;
								CountTime --;
								if(PAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksL();

									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											ArcG[AtacadoG].life -= 26;
											if(PTBR)
											{
												newLine("Golpe Critico! General Grego perde 27 pontos de vida.");
											}
											else
												newLine("Critical attack! - Greek General loses 27 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(21,25));
											ArcG[AtacadoG].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - General Grego perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Greek General loses "+damage+" life points.");
										}
										KntPMove = true;
										GnrlPMove = true;
										KingPMove = true;
										LancerPMove = true;
										ArcPMove = true;
										
										Vez_Persas = false;	
										Vez_Gregos = true;	
										CountTime = 100;
									}
								}
							}
							else if(ArcG[AtacadoG].x == ArcP[PAChoosed].x && ArcG[AtacadoG].y - 50 == ArcP[PAChoosed].y || ArcG[AtacadoG].x == ArcP[PAChoosed].x && ArcG[AtacadoG].y - 100 == ArcP[PAChoosed].y || ArcG[AtacadoG].x == ArcP[PAChoosed].x && ArcG[AtacadoG].y - 150 == ArcP[PAChoosed].y || ArcG[AtacadoG].x == ArcP[PAChoosed].x && ArcG[AtacadoG].y + 50 == ArcP[PAChoosed].y || ArcG[AtacadoG].x == ArcP[PAChoosed].x && ArcG[AtacadoG].y + 100 == ArcP[PAChoosed].y || ArcG[AtacadoG].x == ArcP[PAChoosed].x && ArcG[AtacadoG].y + 150 == ArcP[PAChoosed].y || ArcG[AtacadoG].x - 50 == ArcP[PAChoosed].x && ArcG[AtacadoG].y == ArcP[PAChoosed].y || ArcG[AtacadoG].x - 100 == ArcP[PAChoosed].x && ArcG[AtacadoG].y == ArcP[PAChoosed].y || ArcG[AtacadoG].x - 150 == ArcP[PAChoosed].x && ArcG[AtacadoG].y == ArcP[PAChoosed].y || ArcG[AtacadoG].x + 50 == ArcP[PAChoosed].x && ArcG[AtacadoG].y == ArcP[PAChoosed].y || ArcG[AtacadoG].x + 100 == ArcP[PAChoosed].x && ArcG[AtacadoG].y == ArcP[PAChoosed].y || ArcG[AtacadoG].x + 150 == ArcP[PAChoosed].x && ArcG[AtacadoG].y == ArcP[PAChoosed].y)
							{
							Boolean8 = false;
							KntPMove = false;
							GnrlPMove = false;
							KingPMove = false;
							LancerPMove = false;
							ArcPMove = false;
							CountTime --;
							if(PAChoosed != null && CountTime < 100)
							{
								CountTime --;
								drawAtacksA();
								if(CountTime <= 0)
								{
									if(Math.floor(randomRange(0,99)<20))
									{
										ArcG[AtacadoG].life -= 21;
										if(PTBR)
										{
											newLine("Golpe Critico! Arqueiro Grego perde 21 pontos de vida.");
										}
										else
											newLine("Critical attack! - Greek Archer loses 21 life points.");
									}
									else
									{
										damage = Math.floor(randomRange(11,16));
										ArcG[AtacadoG].life -= damage;
										if(PTBR)
										{
											newLine("Golpe Normal - Arqueiro Grego perde "+damage+" pontos de vida.");
										}
										else
											newLine("Normal attack - Greek Archer loses "+damage+" life points.");
									}
									KntPMove = true;
									GnrlPMove = true;
									KingPMove = true;
									LancerPMove = true;
									ArcPMove = true;
									
									Vez_Persas = false;	
									Vez_Gregos = true;	
									CountTime = 100;
								}
							}
						}
						
					}
				}
				
				}
			}
			if(PAChoosed == 7 && AtacadoG == 9)
			{
				AtackMP = null;
				Boolean8 = false;
				AtacadoG = 0;
				PAChoosed = 0;
			}
			
			if(Boolean8 == false && AtackMP == null && AtacadoG == 0 && PAChoosed == 0)
			{
				if(ChooseP == null)
				{
					randomAIP();
				}
				KntPMove = true;
				GnrlPMove = true;
				KingPMove = true;
				LancerPMove = true;
				ArcPMove = true;
			}
			else
			{
				KntPMove = false;
				GnrlPMove = false;
				KingPMove = false;
				LancerPMove = false;
				ArcPMove = false;
			}
		}
	else if(Vez_Gregos && AIG)
	{
		
			if(CountOnM)
			{
				CountM++;
			}
			if(AtackMG)
			{
				KntGMove = false;
				GnrlGMove = false;
				KingGMove = false;
				LancerGMove = false;
				ArcGMove = false;
				KingsGCC = 0;
				GnrlsGCC = 0;
				LancersGCC = 0;
				KntsGCC = 0;
				ArcsGCC = 0;
				if(CountM < 1)
				{
					if(KingG[CountM].y == 101)
					{
						CountOnM = false;
						KntGMove = false;
						GnrlGMove = false;
						KingGMove = false;
						LancerGMove = false;
						ArcGMove = false;
						context.drawImage(AtkA,KingG[CountM].x + 50, KingG[CountM].y, KingG[CountM].w, KingG[CountM].h);
						context.drawImage(AtkA,KingG[CountM].x - 50, KingG[CountM].y, KingG[CountM].w, KingG[CountM].h);
						context.drawImage(AtkA,KingG[CountM].x, KingG[CountM].y - 50, KingG[CountM].w, KingG[CountM].h);
						context.drawImage(AtkA,KingG[CountM].x, KingG[CountM].y + 50, KingG[CountM].w, KingG[CountM].h);
						context.drawImage(AtkA,KingG[CountM].x + 50, KingG[CountM].y + 50, KingG[CountM].w, KingG[CountM].h);
						context.drawImage(AtkA,KingG[CountM].x - 50, KingG[CountM].y - 50, KingG[CountM].w, KingG[CountM].h);
						context.drawImage(AtkA,KingG[CountM].x + 50, KingG[CountM].y - 50, KingG[CountM].w, KingG[CountM].h);
						context.drawImage(AtkA,KingG[CountM].x - 50 , KingG[CountM].y + 50, KingG[CountM].w, KingG[CountM].h);
						context.drawImage(AtkA,KingG[CountM].x + 100, KingG[CountM].y + 100, KingG[CountM].w, KingG[CountM].h);
						context.drawImage(AtkA,KingG[CountM].x - 100, KingG[CountM].y - 100, KingG[CountM].w, KingG[CountM].h);
						context.drawImage(AtkA,KingG[CountM].x + 100, KingG[CountM].y - 100, KingG[CountM].w, KingG[CountM].h);
						context.drawImage(AtkA,KingG[CountM].x - 100, KingG[CountM].y + 100, KingG[CountM].w, KingG[CountM].h);
						CountTime --;
						if(CountTime <= 0)
						{
							if(Math.floor(randomRange(0,99)<20))
							{
								WallP_life -= 32;
								if(PTBR)
								{
									newLine("Golpe Critico! Muralha Persa perde 32 pontos de vida.");
								}
								else
									newLine("Critical attack! - Persian Wall loses 32 life points.");
							}
							
							else
							{
								damage = Math.floor(randomRange(25,32));
								WallP_life -= damage;
								if(PTBR)
								{
									newLine("Golpe Normal - Muralha Persa perde "+damage+ " pontos de vida.");
								}
								else
									newLine("Normal attack - Persian Wall loses "+damage+" life points.");
							}
							CountTime = 100;
							Vez_Gregos = false;	
							Vez_Persas = true;
						}
					}
					
					else if(GnrlG[CountM].y == 151 || GnrlG[CountM].y == 101)
					{
						CountOnM = false;
						KntGMove = false;
						GnrlGMove = false;
						KingGMove = false;
						LancerGMove = false;
						ArcGMove = false;
						context.drawImage(AtkA,GnrlG[CountM].x + 50, GnrlG[CountM].y, GnrlG[CountM].w, GnrlG[CountM].h);
						context.drawImage(AtkA,GnrlG[CountM].x - 50, GnrlG[CountM].y, GnrlG[CountM].w, GnrlG[CountM].h);
						context.drawImage(AtkA,GnrlG[CountM].x, GnrlG[CountM].y - 50, GnrlG[CountM].w, GnrlG[CountM].h);
						context.drawImage(AtkA,GnrlG[CountM].x, GnrlG[CountM].y + 50, GnrlG[CountM].w, GnrlG[CountM].h);
						context.drawImage(AtkA,GnrlG[CountM].x + 100, GnrlG[CountM].y, GnrlG[CountM].w, GnrlG[CountM].h);
						context.drawImage(AtkA,GnrlG[CountM].x - 100, GnrlG[CountM].y, GnrlG[CountM].w, GnrlG[CountM].h);
						context.drawImage(AtkA,GnrlG[CountM].x, GnrlG[CountM].y - 100, GnrlG[CountM].w, GnrlG[CountM].h);
						context.drawImage(AtkA,GnrlG[CountM].x, GnrlG[CountM].y + 100, GnrlG[CountM].w, GnrlG[CountM].h);
						CountTime --;
						if(CountTime <= 0)
						{
							if(Math.floor(randomRange(0,99)<20))
							{
								WallP_life -= 32;
								if(PTBR)
								{
									newLine("Golpe Critico! Muralha Persa perde 32 pontos de vida.");
								}
								else
									newLine("Critical attack! - Persian Wall loses 32 life points.");
							}
							
							else
							{
								damage = Math.floor(randomRange(16,20));
								WallP_life -= damage;
								if(PTBR)
								{
									newLine("Golpe Normal - Muralha Persa perde "+damage+ " pontos de vida.");
								}
								else
									newLine("Normal attack - Persian Wall loses "+damage+" life points.");
							}
							CountTime = 100;
							Vez_Gregos = false;	
							Vez_Persas = true;
						}
					}
					
					else if(KingG[CountM].y == 151)
					{
						CountOnM = false;
						KntGMove = false;
						GnrlGMove = false;
						KingGMove = false;
						LancerGMove = false;
						ArcGMove = false;
						context.drawImage(AtkA,KingG[CountM].x + 50, KingG[CountM].y, KingG[CountM].w, KingG[CountM].h);
						context.drawImage(AtkA,KingG[CountM].x - 50, KingG[CountM].y, KingG[CountM].w, KingG[CountM].h);
						context.drawImage(AtkA,KingG[CountM].x, KingG[CountM].y - 50, KingG[CountM].w, KingG[CountM].h);
						context.drawImage(AtkA,KingG[CountM].x, KingG[CountM].y + 50, KingG[CountM].w, KingG[CountM].h);
						context.drawImage(AtkA,KingG[CountM].x + 50, KingG[CountM].y + 50, KingG[CountM].w, KingG[CountM].h);
						context.drawImage(AtkA,KingG[CountM].x - 50, KingG[CountM].y - 50, KingG[CountM].w, KingG[CountM].h);
						context.drawImage(AtkA,KingG[CountM].x + 50, KingG[CountM].y - 50, KingG[CountM].w, KingG[CountM].h);
						context.drawImage(AtkA,KingG[CountM].x - 50 , KingG[CountM].y + 50, KingG[CountM].w, KingG[CountM].h);
						context.drawImage(AtkA,KingG[CountM].x + 100, KingG[CountM].y + 100, KingG[CountM].w, KingG[CountM].h);
						context.drawImage(AtkA,KingG[CountM].x - 100, KingG[CountM].y - 100, KingG[CountM].w, KingG[CountM].h);
						context.drawImage(AtkA,KingG[CountM].x + 100, KingG[CountM].y - 100, KingG[CountM].w, KingG[CountM].h);
						context.drawImage(AtkA,KingG[CountM].x - 100, KingG[CountM].y + 100, KingG[CountM].w, KingG[CountM].h);
						CountTime --;
						if(CountTime <= 0)
						{
							if(Math.floor(randomRange(0,99)<20))
							{
								WallP_life -= 32;
								if(PTBR)
								{
									newLine("Golpe Critico! Muralha Persa perde 32 pontos de vida.");
								}
								else
									newLine("Critical attack! - Persian Wall loses 32 life points.");
							}
							
							else
							{
								damage = Math.floor(randomRange(23,27));
								WallP_life -= damage;
								if(PTBR)
								{
									newLine("Golpe Normal - Muralha Persa perde "+damage+ " pontos de vida.");
								}
								else
									newLine("Normal attack - Persian Wall loses "+damage+" life points.");
							}
							CountTime = 100;
							Vez_Gregos = false;	
							Vez_Persas = true;
						}
					}
				}
				if(CountM < 4)
				{
					if(KntG[CountM].y == 101)
					{
						CountOnM = false;
						KntGMove = false;
						GnrlGMove = false;
						KingGMove = false;
						LancerGMove = false;
						ArcGMove = false;
						context.drawImage(AtkA,KntG[CountM].x + 50, KntG[CountM].y, KntG[CountM].w, KntG[CountM].h);
						context.drawImage(AtkA,KntG[CountM].x - 50, KntG[CountM].y, KntG[CountM].w, KntG[CountM].h);
						context.drawImage(AtkA,KntG[CountM].x, KntG[CountM].y - 50, KntG[CountM].w, KntG[CountM].h);
						context.drawImage(AtkA,KntG[CountM].x, KntG[CountM].y + 50, KntG[CountM].w, KntG[CountM].h);
						CountTime --;
						if(CountTime <= 0)
						{
							if(Math.floor(randomRange(0,99)<20))
							{
								WallP_life -= 27;
								if(PTBR)
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
								if(PTBR)
								{
									newLine("Golpe Normal - Muralha Persa perde "+damage+ " pontos de vida.");
								}
							}
							CountTime = 100;
							Vez_Gregos = false;	
							Vez_Persas = true;
						}
					}
				}
				if(CountM < 8)
				{
					if(LancerG[CountM].y == 101)
					{
						CountOnM = false;
						KntGMove = false;
						GnrlGMove = false;
						KingGMove = false;
						LancerGMove = false;
						ArcGMove = false;
						context.drawImage(AtkA,LancerG[CountM].x + 50, LancerG[CountM].y + 50, LancerG[CountM].w, LancerG[CountM].h);
						context.drawImage(AtkA,LancerG[CountM].x - 50, LancerG[CountM].y - 50, LancerG[CountM].w, LancerG[CountM].h);
						context.drawImage(AtkA,LancerG[CountM].x + 50, LancerG[CountM].y - 50, LancerG[CountM].w, LancerG[CountM].h);
						context.drawImage(AtkA,LancerG[CountM].x - 50, LancerG[CountM].y + 50, LancerG[CountM].w, LancerG[CountM].h);
						CountTime --;
						if(CountTime <= 0)
						{
							if(Math.floor(randomRange(0,99)<20))
							{
								WallP_life -= 26;
								if(PTBR)
								{
									newLine("Golpe Critico! Muralha Persa perde 26 pontos de vida.");
								}
								else
									newLine("Critical attack! - Persian Wall loses 26 life points.");
							}
							
							else
							{
								damage = Math.floor(randomRange(16,21));
								WallP_life -= damage;
								if(PTBR)
								{
									newLine("Golpe Normal - Muralha Persa perde "+damage+ " pontos de vida.");
								}
								else
									newLine("Normal attack - Persian Wall loses "+damage+" life points.");
							}
							CountTime = 100;
							Vez_Gregos = false;	
							Vez_Persas = true;
						}
					}
					else if(ArcG[CountM].y == 201 || ArcG[CountM].y == 151 || ArcG[CountM].y == 101)
					{
						CountOnM = false;
						KntGMove = false;
						GnrlGMove = false;
						KingGMove = false;
						LancerGMove = false;
						ArcGMove = false;
						context.drawImage(AtkA,ArcG[CountM].x + 50, ArcG[CountM].y, ArcG[CountM].w, ArcG[CountM].h);
						context.drawImage(AtkA,ArcG[CountM].x - 50, ArcG[CountM].y, ArcG[CountM].w, ArcG[CountM].h);
						context.drawImage(AtkA,ArcG[CountM].x, ArcG[CountM].y - 50, ArcG[CountM].w, ArcG[CountM].h);
						context.drawImage(AtkA,ArcG[CountM].x, ArcG[CountM].y + 50, ArcG[CountM].w, ArcG[CountM].h);
						context.drawImage(AtkA,ArcG[CountM].x + 100, ArcG[CountM].y, ArcG[CountM].w, ArcG[CountM].h);
						context.drawImage(AtkA,ArcG[CountM].x - 100, ArcG[CountM].y, ArcG[CountM].w, ArcG[CountM].h);
						context.drawImage(AtkA,ArcG[CountM].x, ArcG[CountM].y - 100, ArcG[CountM].w, ArcG[CountM].h);
						context.drawImage(AtkA,ArcG[CountM].x, ArcG[CountM].y + 100, ArcG[CountM].w, ArcG[CountM].h);
						context.drawImage(AtkA,ArcG[CountM].x + 150, ArcG[CountM].y, ArcG[CountM].w, ArcG[CountM].h);
						context.drawImage(AtkA,ArcG[CountM].x - 150, ArcG[CountM].y, ArcG[CountM].w, ArcG[CountM].h);
						context.drawImage(AtkA,ArcG[CountM].x, ArcG[CountM].y - 150, ArcG[CountM].w, ArcG[CountM].h);
						context.drawImage(AtkA,ArcG[CountM].x, ArcG[CountM].y + 150, ArcG[CountM].w, ArcG[CountM].h);
						CountTime --;
						if(CountTime <= 0)
						{
							if(Math.floor(randomRange(0,99)<20))
							{
								WallP_life -= 21;
								if(PTBR)
								{
									newLine("Golpe Critico! Muralha Persa perde 21 pontos de vida.");
								}
								else
									newLine("Critical attack! - Persian Wall loses 21 life points.");
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
									newLine("Normal attack - Persian Wall loses "+damage+" life points.");
							}
							CountTime = 100;
							Vez_Gregos = false;	
							Vez_Persas = true;
						}
					}
				
				}
				else
				{
					CountM = -1;
					AtackMG = false;
					Boolean8 = true;
				}
			}
			
			if(Boolean8 && AtackMG == false)
			{
				KntGMove = false;
				GnrlGMove = false;
				KingGMove = false;
				LancerGMove = false;
				ArcGMove = false;
				LancersGCC = 0;
				ArcsGCC = 0;
				KingsGCC = 0;
				KntsGCC = 0;
				GnrlsGCC = 0;
				GAChoosed ++;
				if(GAChoosed > 7)
				{
					AtacadoP ++;
					GAChoosed = 0;
				}
			}
			if(AtackMG == false)
			{
				if(GAChoosed < 8)
				{
					if(AtacadoP < 1)
					{
						if(GAChoosed < 1)
						{
								if(KingP[AtacadoP].x + 50 == KingG[GAChoosed].x && KingP[AtacadoP].y == KingG[GAChoosed].y || KingP[AtacadoP].x - 50 == KingG[GAChoosed].x && KingP[AtacadoP].y == KingG[GAChoosed].y || KingP[AtacadoP].x == KingG[GAChoosed].x && KingP[AtacadoP].y - 50 == KingG[GAChoosed].y || KingP[AtacadoP].x == KingG[GAChoosed].x && KingP[AtacadoP].y + 50 == KingG[GAChoosed].y || KingP[AtacadoP].x + 50 == KingG[GAChoosed].x && KingP[AtacadoP].y + 50 == KingG[GAChoosed].y || KingP[AtacadoP].x - 50 == KingG[GAChoosed].x && KingP[AtacadoP].y + 50 == KingG[GAChoosed].y || KingP[AtacadoP].x + 50 == KingG[GAChoosed].x && KingP[AtacadoP].y - 50 == KingG[GAChoosed].y || KingP[AtacadoP].x - 50 == KingG[GAChoosed].x && KingP[AtacadoP].y - 50 == KingG[GAChoosed].y)
								{
									Boolean8 = false;
									KntGMove = false;
									GnrlGMove = false;
									KingGMove = false;
									LancerGMove = false;
									ArcGMove = false;
									CountTime --;
									if(GAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksK();
										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												KingP[AtacadoP].life -= 32;
												if(PTBR)
												{
													newLine("Golpe Critico! Rei Persa perde 32 pontos de vida.");
												}
												else
													newLine("Critical attack! - Persian King loses 32 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(21,29));
												KingP[AtacadoP].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - Rei Persa perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Persian King loses "+damage+" life points.");
											}
											KntGMove = true;
											GnrlGMove = true;
											KingGMove = true;
											LancerGMove = true;
											ArcGMove = true;
											Vez_Gregos = false;	
											Vez_Persas = true;	
											CountTime = 100;
										}
									}
								}
								else if(GnrlP[AtacadoP].x + 50 == KingG[GAChoosed].x && GnrlP[AtacadoP].y == KingG[GAChoosed].y || GnrlP[AtacadoP].x - 50 == KingG[GAChoosed].x && GnrlP[AtacadoP].y == KingG[GAChoosed].y || GnrlP[AtacadoP].x == KingG[GAChoosed].x && GnrlP[AtacadoP].y - 50 == KingG[GAChoosed].y || GnrlP[AtacadoP].x == KingG[GAChoosed].x && GnrlP[AtacadoP].y + 50 == KingG[GAChoosed].y || GnrlP[AtacadoP].x + 50 == KingG[GAChoosed].x && GnrlP[AtacadoP].y + 50 == KingG[GAChoosed].y || GnrlP[AtacadoP].x - 50 == KingG[GAChoosed].x && GnrlP[AtacadoP].y + 50 == KingG[GAChoosed].y || GnrlP[AtacadoP].x + 50 == KingG[GAChoosed].x && GnrlP[AtacadoP].y - 50 == KingG[GAChoosed].y || GnrlP[AtacadoP].x - 50 == KingG[GAChoosed].x && GnrlP[AtacadoP].y - 50 == KingG[GAChoosed].y)
								{
									Boolean8 = false;
									KntGMove = false;
									GnrlGMove = false;
									KingGMove = false;
									LancerGMove = false;
									ArcGMove = false;

									CountTime --;
									if(GAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksK();
										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												GnrlP[AtacadoP].life -= 32;
												if(PTBR)
												{
													newLine("Golpe Critico! General Persa perde 32 pontos de vida.");
												}
												else
													newLine("Critical attack! - Persian General loses 32 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(21,29));
												GnrlP[AtacadoP].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - General Persa perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Persian General loses "+damage+" life points.");
											}
											KntGMove = true;
											GnrlGMove = true;
											KingGMove = true;
											LancerGMove = true;
											ArcGMove = true;
											Vez_Gregos = false;	
											Vez_Persas = true;	
											CountTime = 100;
										}
									}
								}
								else if(KingP[AtacadoP].x - 50 == GnrlG[GAChoosed].x && KingP[AtacadoP].y == GnrlG[GAChoosed].y || KingP[AtacadoP].x - 100 == GnrlG[GAChoosed].x && KingP[AtacadoP].y == GnrlG[GAChoosed].y || KingP[AtacadoP].x + 50 == GnrlG[GAChoosed].x && KingP[AtacadoP].y == GnrlG[GAChoosed].y || KingP[AtacadoP].x + 100 == GnrlG[GAChoosed].x && KingP[AtacadoP].y == GnrlG[GAChoosed].y || KingP[AtacadoP].x == GnrlG[GAChoosed].x && KingP[AtacadoP].y - 50 == GnrlG[GAChoosed].y || KingP[AtacadoP].x == GnrlG[GAChoosed].x && KingP[AtacadoP].y - 100 == GnrlG[GAChoosed].y || KingP[AtacadoP].x == GnrlG[GAChoosed].x && KingP[AtacadoP].y + 50 == GnrlG[GAChoosed].y || KingP[AtacadoP].x == GnrlG[GAChoosed].x && KingP[AtacadoP].y + 100 == GnrlG[GAChoosed].y)
								{
									Boolean8 = false;
									KntGMove = false;
									GnrlGMove = false;
									KingGMove = false;
									LancerGMove = false;
									ArcGMove = false;
									CountTime --;
									if(GAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksG();
										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												KingP[AtacadoP].life -= 29;
												if(PTBR)
												{
													newLine("Golpe Critico! Rei Persa perde 29 pontos de vida.");
												}
												else
													newLine("Critical attack! - Persian King loses 29 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(20,24));
												KingP[AtacadoP].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - Rei Persa perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Persian King loses "+damage+" life points.");
											}
											KntGMove = true;
											GnrlGMove = true;
											KingGMove = true;
											LancerGMove = true;
											ArcGMove = true;
											Vez_Gregos = false;	
											Vez_Persas = true;	
											CountTime = 100;
										}
									}
								}
								else if(GnrlP[AtacadoP].x - 50 == GnrlG[GAChoosed].x && GnrlP[AtacadoP].y == GnrlG[GAChoosed].y || GnrlP[AtacadoP].x - 100 == GnrlG[GAChoosed].x && GnrlP[AtacadoP].y == GnrlG[GAChoosed].y || GnrlP[AtacadoP].x + 50 == GnrlG[GAChoosed].x && GnrlP[AtacadoP].y == GnrlG[GAChoosed].y || GnrlP[AtacadoP].x + 100 == GnrlG[GAChoosed].x && GnrlP[AtacadoP].y == GnrlG[GAChoosed].y || GnrlP[AtacadoP].x == GnrlG[GAChoosed].x && GnrlP[AtacadoP].y - 50 == GnrlG[GAChoosed].y || GnrlP[AtacadoP].x == GnrlG[GAChoosed].x && GnrlP[AtacadoP].y - 100 == GnrlG[GAChoosed].y || GnrlP[AtacadoP].x  == GnrlG[GAChoosed].x && GnrlP[AtacadoP].y + 50 == GnrlG[GAChoosed].y || GnrlP[AtacadoP].x == GnrlG[GAChoosed].x && GnrlP[AtacadoP].y + 100 == GnrlG[GAChoosed].y)
								{
									Boolean8 = false;
									KntGMove = false;
									GnrlGMove = false;
									KingGMove = false;
									LancerGMove = false;
									ArcGMove = false;
									CountTime --;
									if(GAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksG();
										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												GnrlP[AtacadoP].life -= 29;
												if(PTBR)
												{
													newLine("Golpe Critico! General Persa perde 29 pontos de vida.");
												}
												else
													newLine("Critical attack! - Persian General loses 29 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(20,24));
												GnrlP[AtacadoP].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - General Persa perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Persian General loses "+damage+" life points.");
											}
											KntGMove = true;
											GnrlGMove = true;
											KingGMove = true;
											LancerGMove = true;
											ArcGMove = true;
											Vez_Gregos = false;	
											Vez_Persas = true;	
											CountTime = 100;
										}
									}
								}
								else if(KingP[AtacadoP].x - 100 == KingG[GAChoosed].x && KingP[AtacadoP].y - 100 == KingG[GAChoosed].y || KingP[AtacadoP].x + 100 == KingG[GAChoosed].x && KingP[AtacadoP].y - 100 == KingG[GAChoosed].y || KingP[AtacadoP].x - 100 == KingG[GAChoosed].x && KingP[AtacadoP].y + 100 == KingG[GAChoosed].y || KingP[AtacadoP].x + 100 == KingG[GAChoosed].x && KingP[AtacadoP].y + 100 == KingG[GAChoosed].y)
								{
									Boolean8 = false;
									KntGMove = false;
									GnrlGMove = false;
									KingGMove = false;
									LancerGMove = false;
									ArcGMove = false;
									CountTime --;
									if(GAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksK();
										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												KingP[AtacadoP].life -= 32;
												if(PTBR)
												{
													newLine("Golpe Critico! Rei Persa perde 32 pontos de vida.");
												}
												else
													newLine("Critical attack! - Persian King loses 32 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(19,23));
												KingP[AtacadoP].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - Rei Persa perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Persian King loses "+damage+" life points.");
											}
											KntGMove = true;
											GnrlGMove = true;
											KingGMove = true;
											LancerGMove = true;
											ArcGMove = true;
											Vez_Gregos = false;	
											Vez_Persas = true;	
											CountTime = 100;
										}
									}
								} 
								else if(GnrlP[AtacadoP].x - 100 == KingG[GAChoosed].x && GnrlP[AtacadoP].y - 100 == KingG[GAChoosed].y || GnrlP[AtacadoP].x + 100 == KingG[GAChoosed].x && GnrlP[AtacadoP].y - 100 == KingG[GAChoosed].y || GnrlP[AtacadoP].x - 100 == KingG[GAChoosed].x && GnrlP[AtacadoP].y + 100 == KingG[GAChoosed].y || GnrlP[AtacadoP].x + 100 == KingG[GAChoosed].x && GnrlP[AtacadoP].y + 100 == KingG[GAChoosed].y)
								{
									Boolean8 = false;
									KntGMove = false;
									GnrlGMove = false;
									KingGMove = false;
									LancerGMove = false;
									ArcGMove = false;
									CountTime --;
									if(GAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksK();
										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												GnrlP[AtacadoP].life -= 32;
												if(PTBR)
												{
													newLine("Golpe Critico! General Persa perde 32 pontos de vida.");
												}
												else
													newLine("Critical attack! - Persian General loses 32 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(19,23));
												GnrlP[AtacadoP].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - General Persa perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Persian General loses "+damage+" life points.");
											}
											KntGMove = true;
											GnrlGMove = true;
											KingGMove = true;
											LancerGMove = true;
											ArcGMove = true;
											Vez_Gregos = false;	
											Vez_Persas = true;	
											CountTime = 100;
										}
									}
								} 
								
							}
								
							if(GAChoosed < 4)
							{
								if(KingP[AtacadoP].x + 50 == KntG[GAChoosed].x && KingP[AtacadoP].y == KntG[GAChoosed].y || KingP[AtacadoP].x - 50 == KntG[GAChoosed].x && KingP[AtacadoP].y == KntG[GAChoosed].y || KingP[AtacadoP].x == KntG[GAChoosed].x && KingP[AtacadoP].y - 50 == KntG[GAChoosed].y || KingP[AtacadoP].x == KntG[GAChoosed].x && KingP[AtacadoP].y + 50 == KntG[GAChoosed].y)
								{
									Boolean8 = false;
									KntGMove = false;
									GnrlGMove = false;
									KingGMove = false;
									LancerGMove = false;
									ArcGMove = false;
									CountTime --;
									if(GAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksC();

										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												KingP[AtacadoP].life -= 27;
												if(PTBR)
												{
													newLine("Golpe Critico! Rei Persa perde 27 pontos de vida.");
												}
												else
													newLine("Critical attack! - Persian King loses 27 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(18,23));
												KingP[AtacadoP].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - Rei Persa perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Persian King loses "+damage+" life points.");
											}
											KntGMove = true;
											GnrlGMove = true;
											KingGMove = true;
											LancerGMove = true;
											ArcGMove = true;
										
											Vez_Gregos = false;	
											Vez_Persas = true;	
											CountTime = 100;
										}
									}
								}
							
								else if(GnrlP[AtacadoP].x + 50 == KntG[GAChoosed].x && GnrlP[AtacadoP].y == KntG[GAChoosed].y || GnrlP[AtacadoP].x - 50 == KntG[GAChoosed].x && GnrlP[AtacadoP].y == KntG[GAChoosed].y || GnrlP[AtacadoP].x == KntG[GAChoosed].x && GnrlP[AtacadoP].y - 50 == KntG[GAChoosed].y || GnrlP[AtacadoP].x == KntG[GAChoosed].x && GnrlP[AtacadoP].y + 50 == KntG[GAChoosed].y)
								{
									Boolean8 = false;
									KntGMove = false;
									GnrlGMove = false;
									KingGMove = false;
									LancerGMove = false;
									ArcGMove = false;
									CountTime --;
									if(GAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksC();

										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												GnrlP[AtacadoP].life -= 27;
												if(PTBR)
												{
													newLine("Golpe Critico! General Persa perde 27 pontos de vida.");
												}
												else
													newLine("Critical attack! - Persian General loses 27 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(18,23));
												GnrlP[AtacadoP].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - General Persa perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Persian General loses "+damage+" life points.");
											}
											KntGMove = true;
											GnrlGMove = true;
											KingGMove = true;
											LancerGMove = true;
											ArcGMove = true;
										
											Vez_Gregos = false;	
											Vez_Persas = true;	
											CountTime = 100;
										}
									}
								}
							
							}
							
							if(GAChoosed < 2)
							{
								if(KingP[AtacadoP].x + 50 == TorG[GAChoosed].x && KingP[AtacadoP].y == TorG[GAChoosed].y || KingP[AtacadoP].x - 50 == TorG[GAChoosed].x && KingP[AtacadoP].y == TorG[GAChoosed].y || KingP[AtacadoP].x == TorG[GAChoosed].x && KingP[AtacadoP].y - 50 == TorG[GAChoosed].y || KingP[AtacadoP].x == TorG[GAChoosed].x && KingP[AtacadoP].y + 50 == TorG[GAChoosed].y || KingP[AtacadoP].x + 50 == TorG[GAChoosed].x && KingP[AtacadoP].y + 50 == TorG[GAChoosed].y || KingP[AtacadoP].x - 50 == TorG[GAChoosed].x && KingP[AtacadoP].y + 50 == TorG[GAChoosed].y || KingP[AtacadoP].x + 50 == TorG[GAChoosed].x && KingP[AtacadoP].y - 50 == TorG[GAChoosed].y || KingP[AtacadoP].x - 50 == TorG[GAChoosed].x && KingP[AtacadoP].y - 50 == TorG[GAChoosed].y)
								{
									Boolean8 = false;
									KntGMove = false;
									GnrlGMove = false;
									KingGMove = false;
									LancerGMove = false;
									ArcGMove = false;
									CountTime --;
									if(GAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksT();
										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												KingP[AtacadoP].life -= 24;
												if(PTBR)
												{
													newLine("Golpe Critico! Rei Persa perde 24 pontos de vida.");
												}
												else
													newLine("Critical attack! - Persian King loses 24 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(10,20));
												KingP[AtacadoP].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - Rei Persa perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Persian King loses "+damage+" life points.");
											}
											KntGMove = true;
											GnrlGMove = true;
											KingGMove = true;
											LancerGMove = true;
											ArcGMove = true;
											Vez_Gregos = false;	
											Vez_Persas = true;	
											CountTime = 100;
										}
									}
								}
								else if(KingP[AtacadoP].x - 100 == TorG[GAChoosed].x && KingP[AtacadoP].y - 100 == TorG[GAChoosed].y || KingP[AtacadoP].x + 100 == TorG[GAChoosed].x && KingP[AtacadoP].y - 100 == TorG[GAChoosed].y || KingP[AtacadoP].x - 100 == TorG[GAChoosed].x && KingP[AtacadoP].y + 100 == TorG[GAChoosed].y || KingP[AtacadoP].x + 100 == TorG[GAChoosed].x && KingP[AtacadoP].y + 100 == TorG[GAChoosed].y || KingP[AtacadoP].x - 100 == TorG[GAChoosed]. x && KingP[AtacadoP].y == TorG[GAChoosed].y || KingP[AtacadoP].x + 100 == TorG[GAChoosed]. x && KingP[AtacadoP].y == TorG[GAChoosed].y || KingP[AtacadoP].x == TorG[GAChoosed]. x && KingP[AtacadoP].y + 100 == TorG[GAChoosed].y || KingP[AtacadoP].x == TorG[GAChoosed]. x && KingP[AtacadoP].y - 100 == TorG[GAChoosed].y)
								{
									Boolean8 = false;
									KntGMove = false;
									GnrlGMove = false;
									KingGMove = false;
									LancerGMove = false;
									ArcGMove = false;
									CountTime --;
									if(GAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksT();
										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												KingP[AtacadoP].life -= 24;
												if(PTBR)
												{
													newLine("Golpe Critico! Rei Persa perde 24 pontos de vida.");
												}
												else
													newLine("Critical attack! - Persian King loses 24 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(6,16));
												KingP[AtacadoP].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - Rei Persa perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Persian King loses "+damage+" life points.");
											}
											KntGMove = true;
											GnrlGMove = true;
											KingGMove = true;
											LancerGMove = true;
											ArcGMove = true;
											Vez_Gregos = false;	
											Vez_Persas = true;	
											CountTime = 100;
										}
									}
								} 
								else if(GnrlP[AtacadoP].x + 50 == TorG[GAChoosed].x && GnrlP[AtacadoP].y == TorG[GAChoosed].y || GnrlP[AtacadoP].x - 50 == TorG[GAChoosed].x && GnrlP[AtacadoP].y == TorG[GAChoosed].y || GnrlP[AtacadoP].x == TorG[GAChoosed].x && GnrlP[AtacadoP].y - 50 == TorG[GAChoosed].y || GnrlP[AtacadoP].x == TorG[GAChoosed].x && GnrlP[AtacadoP].y + 50 == TorG[GAChoosed].y || GnrlP[AtacadoP].x + 50 == TorG[GAChoosed].x && GnrlP[AtacadoP].y + 50 == TorG[GAChoosed].y || GnrlP[AtacadoP].x - 50 == TorG[GAChoosed].x && GnrlP[AtacadoP].y + 50 == TorG[GAChoosed].y || GnrlP[AtacadoP].x + 50 == TorG[GAChoosed].x && GnrlP[AtacadoP].y - 50 == TorG[GAChoosed].y || GnrlP[AtacadoP].x - 50 == TorG[GAChoosed].x && GnrlP[AtacadoP].y - 50 == TorG[GAChoosed].y)
								{
									Boolean8 = false;
									KntGMove = false;
									GnrlGMove = false;
									KingGMove = false;
									LancerGMove = false;
									ArcGMove = false;
									CountTime --;
									if(GAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksT();
										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												GnrlP[AtacadoP].life -= 24;
												if(PTBR)
												{
													newLine("Golpe Critico! General Persa perde 24 pontos de vida.");
												}
												else
													newLine("Critical attack! - Persian General loses 24 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(10,20));
												GnrlP[AtacadoP].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - General Persa perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Persian General loses "+damage+" life points.");
											}
											KntGMove = true;
											GnrlGMove = true;
											KingGMove = true;
											LancerGMove = true;
											ArcGMove = true;
											Vez_Gregos = false;	
											Vez_Persas = true;	
											CountTime = 100;
										}
									}
								}
								else if(GnrlP[AtacadoP].x - 100 == TorG[GAChoosed].x && GnrlP[AtacadoP].y - 100 == TorG[GAChoosed].y || GnrlP[AtacadoP].x + 100 == TorG[GAChoosed].x && GnrlP[AtacadoP].y - 100 == TorG[GAChoosed].y || GnrlP[AtacadoP].x - 100 == TorG[GAChoosed].x && GnrlP[AtacadoP].y + 100 == TorG[GAChoosed].y || GnrlP[AtacadoP].x + 100 == TorG[GAChoosed].x && GnrlP[AtacadoP].y + 100 == TorG[GAChoosed].y || GnrlP[AtacadoP].x - 100 == TorG[GAChoosed]. x && GnrlP[AtacadoP].y == TorG[GAChoosed].y || GnrlP[AtacadoP].x + 100 == TorG[GAChoosed]. x && GnrlP[AtacadoP].y == TorG[GAChoosed].y || GnrlP[AtacadoP].x == TorG[GAChoosed]. x && GnrlP[AtacadoP].y + 100 == TorG[GAChoosed].y || GnrlP[AtacadoP].x == TorG[GAChoosed]. x && GnrlP[AtacadoP].y - 100 == TorG[GAChoosed].y)
								{
									Boolean8 = false;
									KntGMove = false;
									GnrlGMove = false;
									KingGMove = false;
									LancerGMove = false;
									ArcGMove = false;
									CountTime --;
									if(GAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksT();
										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												GnrlP[AtacadoP].life -= 24;
												if(PTBR)
												{
													newLine("Golpe Critico! General Persa perde 24 pontos de vida.");
												}
												else
													newLine("Critical attack! - Persian General loses 24 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(6,16));
												GnrlP[AtacadoP].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - General Persa perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Persian General loses "+damage+" life points.");
											}
											KntGMove = true;
											GnrlGMove = true;
											KingGMove = true;
											LancerGMove = true;
											ArcGMove = true;
											Vez_Gregos = false;	
											Vez_Persas = true;	
											CountTime = 100;
										}
									}
								} 
								
							}
										
							if(GAChoosed < 8)
							{
								if(KingP[AtacadoP].x - 50 == LancerG[GAChoosed].x && KingP[AtacadoP].y - 50 == LancerG[GAChoosed].y || KingP[AtacadoP].x + 50 == LancerG[GAChoosed].x && KingP[AtacadoP].y - 50 == LancerG[GAChoosed].y || KingP[AtacadoP].x - 50 == LancerG[GAChoosed].x && KingP[AtacadoP].y + 50 == LancerG[GAChoosed].y || KingP[AtacadoP].x + 50 == LancerG[GAChoosed].x && KingP[AtacadoP].y + 50 == LancerG[GAChoosed].y)
								{
									Boolean8 = false;
									KntGMove = false;
									GnrlGMove = false;
									KingGMove = false;
									LancerGMove = false;
									ArcGMove = false;
									CountTime --;
									if(GAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksL();

										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												KingP[AtacadoP].life -= 26;
												if(PTBR)
												{
													newLine("Golpe Critico! Rei Persa perde 26 pontos de vida.");
												}
												else
													newLine("Critical attack! - Persian General loses 26 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(16,21));
												KingP[AtacadoP].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - Rei Persa perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Persian King loses "+damage+" life points.");
											}
											KntGMove = true;
											GnrlGMove = true;
											KingGMove = true;
											LancerGMove = true;
											ArcGMove = true;
											
											Vez_Gregos = false;	
											Vez_Persas = true;	
											CountTime = 100;
										}
									}
								}
							
								else if(GnrlP[AtacadoP].x - 50 == LancerG[GAChoosed].x && GnrlP[AtacadoP].y - 50 == LancerG[GAChoosed].y || GnrlP[AtacadoP].x + 50 == LancerG[GAChoosed].x && GnrlP[AtacadoP].y - 50 == LancerG[GAChoosed].y || GnrlP[AtacadoP].x - 50 == LancerG[GAChoosed].x && GnrlP[AtacadoP].y + 50 == LancerG[GAChoosed].y || GnrlP[AtacadoP].x + 50 == LancerG[GAChoosed].x && GnrlP[AtacadoP].y + 50 == LancerG[GAChoosed].y)
								{
									Boolean8 = false;
									KntGMove = false;
									GnrlGMove = false;
									KingGMove = false;
									LancerGMove = false;
									ArcGMove = false;
									CountTime --;
									if(GAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksL();

										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												GnrlP[AtacadoP].life -= 26;
												if(PTBR)
												{
													newLine("Golpe Critico! General Persa perde 26 pontos de vida.");
												}
												else
													newLine("Critical attack! - Persian General loses 26 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(16,21));
												GnrlP[AtacadoP].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - General Persa perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Persian General loses "+damage+" life points.");
											}
											KntGMove = true;
											GnrlGMove = true;
											KingGMove = true;
											LancerGMove = true;
											ArcGMove = true;
											
											Vez_Gregos = false;	
											Vez_Persas = true;	
											CountTime = 100;
										}
									}
								}
							
								else if(KingP[AtacadoP].x == ArcG[GAChoosed].x && KingP[AtacadoP].y - 50 == ArcG[GAChoosed].y || KingP[AtacadoP].x == ArcG[GAChoosed].x && KingP[AtacadoP].y - 100 == ArcG[GAChoosed].y || KingP[AtacadoP].x == ArcG[GAChoosed].x && KingP[AtacadoP].y - 150 == ArcG[GAChoosed].y || KingP[AtacadoP].x == ArcG[GAChoosed].x && KingP[AtacadoP].y + 50 == ArcG[GAChoosed].y || KingP[AtacadoP].x == ArcG[GAChoosed].x && KingP[AtacadoP].y + 100 == ArcG[GAChoosed].y || KingP[AtacadoP].x == ArcG[GAChoosed].x && KingP[AtacadoP].y + 150 == ArcG[GAChoosed].y || KingP[AtacadoP].x - 50 == ArcG[GAChoosed].x && KingP[AtacadoP].y == ArcG[GAChoosed].y || KingP[AtacadoP].x - 100 == ArcG[GAChoosed].x && KingP[AtacadoP].y == ArcG[GAChoosed].y || KingP[AtacadoP].x - 150 == ArcG[GAChoosed].x && KingP[AtacadoP].y == ArcG[GAChoosed].y || KingP[AtacadoP].x + 50 == ArcG[GAChoosed].x && KingP[AtacadoP].y == ArcG[GAChoosed].y || KingP[AtacadoP].x + 100 == ArcG[GAChoosed].x && KingP[AtacadoP].y == ArcG[GAChoosed].y || KingP[AtacadoP].x + 150 == ArcG[GAChoosed].x && KingP[AtacadoP].y == ArcG[GAChoosed].y)
								{
									Boolean8 = false;
									KingGMove = false;
									GnrlGMove = false;
									LancerGMove = false;
									KntGMove = false;
									ArcGMove = false;
									CountTime --;
									
									if(GAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksA();
										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												KingP[AtacadoP].life -= 21;
												if(PTBR)
												{
													newLine("Golpe Critico! Rei Persa perde 21 pontos de vida.");
												}
												else
													newLine("Critical attack! - Persian King loses 21 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(17,21));
												KingP[AtacadoP].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - Rei Persa perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Persian King loses "+damage+" life points.");
											}
												
											KingGMove = true;
											GnrlGMove = true;
											KntGMove = true;
											LancerGMove = true;
											ArcGMove = true;
											Vez_Gregos = false;	
											Vez_Persas = true;	
											CountTime = 100;
										}
									}
								}
								
								else if(GnrlP[AtacadoP].x == ArcG[GAChoosed].x && GnrlP[AtacadoP].y - 50 == ArcG[GAChoosed].y || GnrlP[AtacadoP].x == ArcG[GAChoosed].x && GnrlP[AtacadoP].y - 100 == ArcG[GAChoosed].y || GnrlP[AtacadoP].x == ArcG[GAChoosed].x && GnrlP[AtacadoP].y - 150 == ArcG[GAChoosed].y || GnrlP[AtacadoP].x == ArcG[GAChoosed].x && GnrlP[AtacadoP].y + 50 == ArcG[GAChoosed].y || GnrlP[AtacadoP].x == ArcG[GAChoosed].x && GnrlP[AtacadoP].y + 100 == ArcG[GAChoosed].y || GnrlP[AtacadoP].x == ArcG[GAChoosed].x && GnrlP[AtacadoP].y + 150 == ArcG[GAChoosed].y || GnrlP[AtacadoP].x - 50 == ArcG[GAChoosed].x && GnrlP[AtacadoP].y == ArcG[GAChoosed].y || GnrlP[AtacadoP].x - 100 == ArcG[GAChoosed].x && GnrlP[AtacadoP].y == ArcG[GAChoosed].y || GnrlP[AtacadoP].x - 150 == ArcG[GAChoosed].x && GnrlP[AtacadoP].y == ArcG[GAChoosed].y || GnrlP[AtacadoP].x + 50 == ArcG[GAChoosed].x && GnrlP[AtacadoP].y == ArcG[GAChoosed].y || GnrlP[AtacadoP].x + 100 == ArcG[GAChoosed].x && GnrlP[AtacadoP].y == ArcG[GAChoosed].y || GnrlP[AtacadoP].x + 150 == ArcG[GAChoosed].x && GnrlP[AtacadoP].y == ArcG[GAChoosed].y)
								{
									Boolean8 = false;
									KingGMove = false;
									GnrlGMove = false;
									LancerGMove = false;
									KntGMove = false;
									ArcGMove = false;
									CountTime --;
									
									if(GAChoosed != null && CountTime < 100)
									{
										CountTime --;
										drawAtacksA();
										if(CountTime <= 0)
										{
											if(Math.floor(randomRange(0,99)<20))
											{
												GnrlP[AtacadoP].life -= 21;
												if(PTBR)
												{
													newLine("Golpe Critico! General Persa perde 21 pontos de vida.");
												}
												else
													newLine("Critical attack! - Persian General loses 21 life points.");
											}
											else
											{
												damage = Math.floor(randomRange(11,16));
												GnrlP[AtacadoP].life -= damage;
												if(PTBR)
												{
													newLine("Golpe Normal - General Persa perde "+damage+" pontos de vida.");
												}
												else
													newLine("Normal attack - Persian General loses "+damage+" life points.");
											}
											
											KingGMove = true;
											GnrlGMove = true;
											KntGMove = true;
											LancerGMove = true;
											ArcGMove = true;
											Vez_Gregos = false;	
											Vez_Persas = true;	
											CountTime = 100;
										}
									}
								}
							}
						
						}
					
					if(AtacadoP < 2)
					{
						if(GAChoosed < 1)
						{
							if(TorP[AtacadoP].x + 50 == KingG[GAChoosed].x && TorP[AtacadoP].y == KingG[GAChoosed].y || TorP[AtacadoP].x - 50 == KingG[GAChoosed].x && TorP[AtacadoP].y == KingG[GAChoosed].y || TorP[AtacadoP].x == KingG[GAChoosed].x && TorP[AtacadoP].y - 50 == KingG[GAChoosed].y || TorP[AtacadoP].x == KingG[GAChoosed].x && TorP[AtacadoP].y + 50 == KingG[GAChoosed].y || TorP[AtacadoP].x + 50 == KingG[GAChoosed].x && TorP[AtacadoP].y + 50 == KingG[GAChoosed].y || TorP[AtacadoP].x - 50 == KingG[GAChoosed].x && TorP[AtacadoP].y + 50 == KingG[GAChoosed].y || TorP[AtacadoP].x + 50 == KingG[GAChoosed].x && TorP[AtacadoP].y - 50 == KingG[GAChoosed].y || TorP[AtacadoP].x - 50 == KingG[GAChoosed].x && TorP[AtacadoP].y - 50 == KingG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksK();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											TorP[AtacadoP].life -= 32;
											if(PTBR)
											{
												newLine("Golpe Critico! Torre Persa perde 32 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Tower loses 32 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(21,29));
											TorP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Torre Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Tower loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							}
							else if(TorP[AtacadoP].x - 50 == GnrlG[GAChoosed].x && TorP[AtacadoP].y == GnrlG[GAChoosed].y || TorP[AtacadoP].x - 100 == GnrlG[GAChoosed].x && TorP[AtacadoP].y == GnrlG[GAChoosed].y || TorP[AtacadoP].x + 50 == GnrlG[GAChoosed].x && TorP[AtacadoP].y == GnrlG[GAChoosed].y || TorP[AtacadoP].x + 100 == GnrlG[GAChoosed].x && TorP[AtacadoP].y == GnrlG[GAChoosed].y || TorP[AtacadoP].x == GnrlG[GAChoosed].x && TorP[AtacadoP].y - 50 == GnrlG[GAChoosed].y || TorP[AtacadoP].x == GnrlG[GAChoosed].x && TorP[AtacadoP].y - 100 == GnrlG[GAChoosed].y || TorP[AtacadoP].x  == GnrlG[GAChoosed].x && TorP[AtacadoP].y + 50 == GnrlG[GAChoosed].y || TorP[AtacadoP].x == GnrlG[GAChoosed].x && TorP[AtacadoP].y + 100 == GnrlG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksG();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											TorP[AtacadoP].life -= 29;
											if(PTBR)
											{
												newLine("Golpe Critico! Torre Persa perde 29 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Tower loses 29 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(23,27));
											TorP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Torre Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Tower loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							}
							else if(TorP[AtacadoP].x - 100 == KingG[GAChoosed].x && TorP[AtacadoP].y - 100 == KingG[GAChoosed].y || TorP[AtacadoP].x + 100 == KingG[GAChoosed].x && TorP[AtacadoP].y - 100 == KingG[GAChoosed].y || TorP[AtacadoP].x - 100 == KingG[GAChoosed].x && TorP[AtacadoP].y + 100 == KingG[GAChoosed].y || TorP[AtacadoP].x + 100 == KingG[GAChoosed].x && TorP[AtacadoP].y + 100 == KingG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksK();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											TorP[AtacadoP].life -= 32;
											if(PTBR)
											{
												newLine("Golpe Critico! Torre Persa perde 32 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Tower loses 32 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(19,23));
											TorP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Torre Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Tower loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							} 
						
						}
						
						if(GAChoosed < 4)
						{
							if(TorP[AtacadoP].x + 50 == KntG[GAChoosed].x && TorP[AtacadoP].y == KntG[GAChoosed].y || TorP[AtacadoP].x - 50 == KntG[GAChoosed].x && TorP[AtacadoP].y == KntG[GAChoosed].y || TorP[AtacadoP].x == KntG[GAChoosed].x && TorP[AtacadoP].y - 50 == KntG[GAChoosed].y || TorP[AtacadoP].x == KntG[GAChoosed].x && TorP[AtacadoP].y + 50 == KntG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksC();

									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											TorP[AtacadoP].life -= 27;
											if(PTBR)
											{
												newLine("Golpe Critico! Torre Persa perde 27 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Tower loses 27 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(18,23));
											TorP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Torre Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Tower loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							}
						}
						
						if(GAChoosed < 8)
						{
							if(TorP[AtacadoP].x - 50 == LancerG[GAChoosed].x && TorP[AtacadoP].y - 50 == LancerG[GAChoosed].y || TorP[AtacadoP].x + 50 == LancerG[GAChoosed].x && TorP[AtacadoP].y - 50 == LancerG[GAChoosed].y || TorP[AtacadoP].x - 50 == LancerG[GAChoosed].x && TorP[AtacadoP].y + 50 == LancerG[GAChoosed].y || TorP[AtacadoP].x + 50 == LancerG[GAChoosed].x && TorP[AtacadoP].y + 50 == LancerG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksL();

									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											TorP[AtacadoP].life -= 26;
											if(PTBR)
											{
												newLine("Golpe Critico! Torre Persa perde 26 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Tower loses 26 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(16,21));
											TorP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Torre Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Tower loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							}
							
							else if(TorP[AtacadoP].x == ArcG[GAChoosed].x && TorP[AtacadoP].y - 50 == ArcG[GAChoosed].y || TorP[AtacadoP].x == ArcG[GAChoosed].x && TorP[AtacadoP].y - 100 == ArcG[GAChoosed].y || TorP[AtacadoP].x == ArcG[GAChoosed].x && TorP[AtacadoP].y - 150 == ArcG[GAChoosed].y || TorP[AtacadoP].x == ArcG[GAChoosed].x && TorP[AtacadoP].y + 50 == ArcG[GAChoosed].y || TorP[AtacadoP].x == ArcG[GAChoosed].x && TorP[AtacadoP].y + 100 == ArcG[GAChoosed].y || TorP[AtacadoP].x == ArcG[GAChoosed].x && TorP[AtacadoP].y + 150 == ArcG[GAChoosed].y || TorP[AtacadoP].x - 50 == ArcG[GAChoosed].x && TorP[AtacadoP].y == ArcG[GAChoosed].y || TorP[AtacadoP].x - 100 == ArcG[GAChoosed].x && TorP[AtacadoP].y == ArcG[GAChoosed].y || TorP[AtacadoP].x - 150 == ArcG[GAChoosed].x && TorP[AtacadoP].y == ArcG[GAChoosed].y || TorP[AtacadoP].x + 50 == ArcG[GAChoosed].x && TorP[AtacadoP].y == ArcG[GAChoosed].y || TorP[AtacadoP].x + 100 == ArcG[GAChoosed].x && TorP[AtacadoP].y == ArcG[GAChoosed].y || TorP[AtacadoP].x + 150 == ArcG[GAChoosed].x && TorP[AtacadoP].y == ArcG[GAChoosed].y)
							{
								Boolean8 = false;
								TorMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksA();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											TorP[AtacadoP].life -= 21;
											if(PTBR)
											{
												newLine("Golpe Critico! Torre Persa perde 21 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Tower loses 21 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(11,16));
											TorP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Torre Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Tower loses "+damage+" life points.");
										}
										
										TorMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							}
						}
					}
					
					if(AtacadoP < 4)
					{
						if(GAChoosed < 1)
						{
							if(KntP[AtacadoP].x + 50 == KingG[GAChoosed].x && KntP[AtacadoP].y == KingG[GAChoosed].y || KntP[AtacadoP].x - 50 == KingG[GAChoosed].x && KntP[AtacadoP].y == KingG[GAChoosed].y || KntP[AtacadoP].x == KingG[GAChoosed].x && KntP[AtacadoP].y - 50 == KingG[GAChoosed].y || KntP[AtacadoP].x == KingG[GAChoosed].x && KntP[AtacadoP].y + 50 == KingG[GAChoosed].y || KntP[AtacadoP].x + 50 == KingG[GAChoosed].x && KntP[AtacadoP].y + 50 == KingG[GAChoosed].y || KntP[AtacadoP].x - 50 == KingG[GAChoosed].x && KntP[AtacadoP].y + 50 == KingG[GAChoosed].y || KntP[AtacadoP].x + 50 == KingG[GAChoosed].x && KntP[AtacadoP].y - 50 == KingG[GAChoosed].y || KntP[AtacadoP].x - 50 == KingG[GAChoosed].x && KntP[AtacadoP].y - 50 == KingG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksK();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											KntP[AtacadoP].life -= 32;
											if(PTBR)
											{
												newLine("Golpe Critico! Arqueiro Persa perde 32 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Archer loses 32 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(21,29));
											KntP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Arqueiro Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Archer loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							}
							else if(KntP[AtacadoP].x - 50 == GnrlG[GAChoosed].x && KntP[AtacadoP].y == GnrlG[GAChoosed].y || KntP[AtacadoP].x - 100 == GnrlG[GAChoosed].x && KntP[AtacadoP].y == GnrlG[GAChoosed].y || KntP[AtacadoP].x + 50 == GnrlG[GAChoosed].x && KntP[AtacadoP].y == GnrlG[GAChoosed].y || KntP[AtacadoP].x + 100 == GnrlG[GAChoosed].x && KntP[AtacadoP].y == GnrlG[GAChoosed].y || KntP[AtacadoP].x == GnrlG[GAChoosed].x && KntP[AtacadoP].y - 50 == GnrlG[GAChoosed].y || KntP[AtacadoP].x == GnrlG[GAChoosed].x && KntP[AtacadoP].y - 100 == GnrlG[GAChoosed].y || KntP[AtacadoP].x  == GnrlG[GAChoosed].x && KntP[AtacadoP].y + 50 == GnrlG[GAChoosed].y || KntP[AtacadoP].x == GnrlG[GAChoosed].x && KntP[AtacadoP].y + 100 == GnrlG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksG();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											KntP[AtacadoP].life -= 29;
											if(PTBR)
											{
												newLine("Golpe Critico! Cavaleiro Persa perde 29 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Knight loses 29 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(20,24));
											KntP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Cavaleiro Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Knight loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							}
							else if(KntP[AtacadoP].x - 100 == KingG[GAChoosed].x && KntP[AtacadoP].y - 100 == KingG[GAChoosed].y || KntP[AtacadoP].x + 100 == KingG[GAChoosed].x && KntP[AtacadoP].y - 100 == KingG[GAChoosed].y || KntP[AtacadoP].x - 100 == KingG[GAChoosed].x && KntP[AtacadoP].y + 100 == KingG[GAChoosed].y || KntP[AtacadoP].x + 100 == KingG[GAChoosed].x && KntP[AtacadoP].y + 100 == KingG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksK();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											KntP[AtacadoP].life -= 32;
											if(PTBR)
											{
												newLine("Golpe Critico! Arqueiro Persa perde 32 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Knight loses 32 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(19,23));
											KntP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Arqueiro Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Archer loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							} 
						}
						
						if(GAChoosed < 4)
						{
							if(KntP[AtacadoP].x + 50 == KntG[GAChoosed].x && KntP[AtacadoP].y == KntG[GAChoosed].y || KntP[AtacadoP].x - 50 == KntG[GAChoosed].x && KntP[AtacadoP].y == KntG[GAChoosed].y || KntP[AtacadoP].x == KntG[GAChoosed].x && KntP[AtacadoP].y - 50 == KntG[GAChoosed].y || KntP[AtacadoP].x == KntG[GAChoosed].x && KntP[AtacadoP].y + 50 == KntG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksC();

									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											KntP[AtacadoP].life -= 27;
											if(PTBR)
											{
												newLine("Golpe Critico! Cavaleiro Persa perde 27 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Knight loses 27 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(18,23));
											KntP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Cavaleiro Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Knight loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							}
						
						}
							
						if(GAChoosed < 2)
						{
							if(KntP[AtacadoP].x + 50 == TorG[GAChoosed].x && KntP[AtacadoP].y == TorG[GAChoosed].y || KntP[AtacadoP].x - 50 == TorG[GAChoosed].x && KntP[AtacadoP].y == TorG[GAChoosed].y || KntP[AtacadoP].x == TorG[GAChoosed].x && KntP[AtacadoP].y - 50 == TorG[GAChoosed].y || KntP[AtacadoP].x == TorG[GAChoosed].x && KntP[AtacadoP].y + 50 == TorG[GAChoosed].y || KntP[AtacadoP].x + 50 == TorG[GAChoosed].x && KntP[AtacadoP].y + 50 == TorG[GAChoosed].y || KntP[AtacadoP].x - 50 == TorG[GAChoosed].x && KntP[AtacadoP].y + 50 == TorG[GAChoosed].y || KntP[AtacadoP].x + 50 == TorG[GAChoosed].x && KntP[AtacadoP].y - 50 == TorG[GAChoosed].y || KntP[AtacadoP].x - 50 == TorG[GAChoosed].x && KntP[AtacadoP].y - 50 == TorG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksT();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											KntP[AtacadoP].life -= 24;
											if(PTBR)
											{
												newLine("Golpe Critico! Lanceiro Persa perde 24 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Knight loses 24 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(13,23));
											KntP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Lanceiro Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Knight loses "+damage+" life points.");
										}	
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							}
							else if(KntP[AtacadoP].x - 100 == TorG[GAChoosed].x && KntP[AtacadoP].y - 100 == TorG[GAChoosed].y || KntP[AtacadoP].x + 100 == TorG[GAChoosed].x && KntP[AtacadoP].y - 100 == TorG[GAChoosed].y || KntP[AtacadoP].x - 100 == TorG[GAChoosed].x && KntP[AtacadoP].y + 100 == TorG[GAChoosed].y || KntP[AtacadoP].x + 100 == TorG[GAChoosed].x && KntP[AtacadoP].y + 100 == TorG[GAChoosed].y || KntP[AtacadoP].x - 100 == TorG[GAChoosed]. x && KntP[AtacadoP].y == TorG[GAChoosed].y || KntP[AtacadoP].x + 100 == TorG[GAChoosed]. x && KntP[AtacadoP].y == TorG[GAChoosed].y || KntP[AtacadoP].x == TorG[GAChoosed]. x && KntP[AtacadoP].y + 100 == TorG[GAChoosed].y || KntP[AtacadoP].x == TorG[GAChoosed]. x && KntP[AtacadoP].y - 100 == TorG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksT();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											KntP[AtacadoP].life -= 24;
											if(PTBR)
											{
												newLine("Golpe Critico! Lanceiro Persa perde 24 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Knight loses 24 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(9,19));
											KntP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Lanceiro Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Knight loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							} 
						
						}
						
						if(GAChoosed < 8)
						{
							if(KntP[AtacadoP].x - 50 == LancerG[GAChoosed].x && KntP[AtacadoP].y - 50 == LancerG[GAChoosed].y || KntP[AtacadoP].x + 50 == LancerG[GAChoosed].x && KntP[AtacadoP].y - 50 == LancerG[GAChoosed].y || KntP[AtacadoP].x - 50 == LancerG[GAChoosed].x && KntP[AtacadoP].y + 50 == LancerG[GAChoosed].y || KntP[AtacadoP].x + 50 == LancerG[GAChoosed].x && KntP[AtacadoP].y + 50 == LancerG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksL();

									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											KntP[AtacadoP].life -= 26;
											if(PTBR)
											{
												newLine("Golpe Critico! Cavaleiro Persa perde 26 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Knight loses 26 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(16,21));
											KntP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Cavaleiro Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Knight loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							}
							
							else if(KntP[AtacadoP].x == ArcG[GAChoosed].x && KntP[AtacadoP].y - 50 == ArcG[GAChoosed].y || KntP[AtacadoP].x == ArcG[GAChoosed].x && KntP[AtacadoP].y - 100 == ArcG[GAChoosed].y || KntP[AtacadoP].x == ArcG[GAChoosed].x && KntP[AtacadoP].y - 150 == ArcG[GAChoosed].y || KntP[AtacadoP].x == ArcG[GAChoosed].x && KntP[AtacadoP].y + 50 == ArcG[GAChoosed].y || KntP[AtacadoP].x == ArcG[GAChoosed].x && KntP[AtacadoP].y + 100 == ArcG[GAChoosed].y || KntP[AtacadoP].x == ArcG[GAChoosed].x && KntP[AtacadoP].y + 150 == ArcG[GAChoosed].y || KntP[AtacadoP].x - 50 == ArcG[GAChoosed].x && KntP[AtacadoP].y == ArcG[GAChoosed].y || KntP[AtacadoP].x - 100 == ArcG[GAChoosed].x && KntP[AtacadoP].y == ArcG[GAChoosed].y || KntP[AtacadoP].x - 150 == ArcG[GAChoosed].x && KntP[AtacadoP].y == ArcG[GAChoosed].y || KntP[AtacadoP].x + 50 == ArcG[GAChoosed].x && KntP[AtacadoP].y == ArcG[GAChoosed].y || KntP[AtacadoP].x + 100 == ArcG[GAChoosed].x && KntP[AtacadoP].y == ArcG[GAChoosed].y || KntP[AtacadoP].x + 150 == ArcG[GAChoosed].x && KntP[AtacadoP].y == ArcG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksA();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											KntP[AtacadoP].life -= 21;
											if(PTBR)
											{
												newLine("Golpe Critico! Cavaleiro Persa perde 21 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Knight loses 21 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(11,16));
											KntP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Cavaleiro Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Knight loses "+damage+" life points.");
										}
										
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							}
						}
					}
					
					if(AtacadoP < 8)
					{
						if(GAChoosed == 0)
						{
							if(LancerP[AtacadoP].x + 50 == KingG[GAChoosed].x && LancerP[AtacadoP].y == KingG[GAChoosed].y || LancerP[AtacadoP].x - 50 == KingG[GAChoosed].x && LancerP[AtacadoP].y == KingG[GAChoosed].y || LancerP[AtacadoP].x == KingG[GAChoosed].x && LancerP[AtacadoP].y - 50 == KingG[GAChoosed].y || LancerP[AtacadoP].x == KingG[GAChoosed].x && LancerP[AtacadoP].y + 50 == KingG[GAChoosed].y || LancerP[AtacadoP].x + 50 == KingG[GAChoosed].x && LancerP[AtacadoP].y + 50 == KingG[GAChoosed].y || LancerP[AtacadoP].x - 50 == KingG[GAChoosed].x && LancerP[AtacadoP].y + 50 == KingG[GAChoosed].y || LancerP[AtacadoP].x + 50 == KingG[GAChoosed].x && LancerP[AtacadoP].y - 50 == KingG[GAChoosed].y || LancerP[AtacadoP].x - 50 == KingG[GAChoosed].x && LancerP[AtacadoP].y - 50 == KingG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksK();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											LancerP[AtacadoP].life -= 32;
											if(PTBR)
											{
												newLine("Golpe Critico! Lanceiro Persa perde 32 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Lancer loses 32 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(21,29));
											LancerP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Lanceiro Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Lancer loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							}
							else if(ArcP[AtacadoP].x + 50 == KingG[GAChoosed].x && ArcP[AtacadoP].y == KingG[GAChoosed].y || ArcP[AtacadoP].x - 50 == KingG[GAChoosed].x && ArcP[AtacadoP].y == KingG[GAChoosed].y || ArcP[AtacadoP].x == KingG[GAChoosed].x && ArcP[AtacadoP].y - 50 == KingG[GAChoosed].y || ArcP[AtacadoP].x == KingG[GAChoosed].x && ArcP[AtacadoP].y + 50 == KingG[GAChoosed].y || ArcP[AtacadoP].x + 50 == KingG[GAChoosed].x && ArcP[AtacadoP].y + 50 == KingG[GAChoosed].y || ArcP[AtacadoP].x - 50 == KingG[GAChoosed].x && ArcP[AtacadoP].y + 50 == KingG[GAChoosed].y || ArcP[AtacadoP].x + 50 == KingG[GAChoosed].x && ArcP[AtacadoP].y - 50 == KingG[GAChoosed].y || ArcP[AtacadoP].x - 50 == KingG[GAChoosed].x && ArcP[AtacadoP].y - 50 == KingG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksK();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											ArcP[AtacadoP].life -= 32;
											if(PTBR)
											{
												newLine("Golpe Critico! Arqueiro Persa perde 32 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Archer loses 32 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(21,29));
											ArcP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Arqueiro Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Archer loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							}
							else if(LancerP[AtacadoP].x - 50 == GnrlG[GAChoosed].x && LancerP[AtacadoP].y == GnrlG[GAChoosed].y || LancerP[AtacadoP].x - 100 == GnrlG[GAChoosed].x && LancerP[AtacadoP].y == GnrlG[GAChoosed].y || LancerP[AtacadoP].x + 50 == GnrlG[GAChoosed].x && LancerP[AtacadoP].y == GnrlG[GAChoosed].y || LancerP[AtacadoP].x + 100 == GnrlG[GAChoosed].x && LancerP[AtacadoP].y == GnrlG[GAChoosed].y || LancerP[AtacadoP].x == GnrlG[GAChoosed].x && LancerP[AtacadoP].y - 50 == GnrlG[GAChoosed].y || LancerP[AtacadoP].x == GnrlG[GAChoosed].x && LancerP[AtacadoP].y - 100 == GnrlG[GAChoosed].y || LancerP[AtacadoP].x  == GnrlG[GAChoosed].x && LancerP[AtacadoP].y + 50 == GnrlG[GAChoosed].y || LancerP[AtacadoP].x == GnrlG[GAChoosed].x && LancerP[AtacadoP].y + 100 == GnrlG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksG();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											LancerP[AtacadoP].life -= 29;
											if(PTBR)
											{
												newLine("Golpe Critico! Lanceiro Persa perde 29 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Lancer loses 29 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(20,24));
											LancerP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Lanceiro Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Lancer loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							}
							else if(ArcP[AtacadoP].x - 50 == GnrlG[GAChoosed].x && ArcP[AtacadoP].y == GnrlG[GAChoosed].y || ArcP[AtacadoP].x - 100 == GnrlG[GAChoosed].x && ArcP[AtacadoP].y == GnrlG[GAChoosed].y || ArcP[AtacadoP].x + 50 == GnrlG[GAChoosed].x && ArcP[AtacadoP].y == GnrlG[GAChoosed].y || ArcP[AtacadoP].x + 100 == GnrlG[GAChoosed].x && ArcP[AtacadoP].y == GnrlG[GAChoosed].y || ArcP[AtacadoP].x == GnrlG[GAChoosed].x && ArcP[AtacadoP].y - 50 == GnrlG[GAChoosed].y || ArcP[AtacadoP].x == GnrlG[GAChoosed].x && ArcP[AtacadoP].y - 100 == GnrlG[GAChoosed].y || ArcP[AtacadoP].x  == GnrlG[GAChoosed].x && ArcP[AtacadoP].y + 50 == GnrlG[GAChoosed].y || ArcP[AtacadoP].x == GnrlG[GAChoosed].x && ArcP[AtacadoP].y + 100 == GnrlG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksG()
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											ArcP[AtacadoP].life -= 29;
											if(PTBR)
											{
												newLine("Golpe Critico! Arqueiro Persa perde 29 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Archer loses 29 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(20,24));
											ArcP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Arqueiro Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Archer loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							}
							else if(LancerP[AtacadoP].x - 100 == KingG[GAChoosed].x && LancerP[AtacadoP].y - 100 == KingG[GAChoosed].y || LancerP[AtacadoP].x + 100 == KingG[GAChoosed].x && LancerP[AtacadoP].y - 100 == KingG[GAChoosed].y || LancerP[AtacadoP].x - 100 == KingG[GAChoosed].x && LancerP[AtacadoP].y + 100 == KingG[GAChoosed].y || LancerP[AtacadoP].x + 100 == KingG[GAChoosed].x && LancerP[AtacadoP].y + 100 == KingG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksK();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											LancerP[AtacadoP].life -= 32;
											if(PTBR)
											{
												newLine("Golpe Critico! Lanceiro Persa perde 32 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Lancer loses 32 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(19,23));
											LancerP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Lanceiro Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Lancer loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							} 
							else if(ArcP[AtacadoP].x - 100 == KingG[GAChoosed].x && ArcP[AtacadoP].y - 100 == KingG[GAChoosed].y || ArcP[AtacadoP].x + 100 == KingG[GAChoosed].x && ArcP[AtacadoP].y - 100 == KingG[GAChoosed].y || ArcP[AtacadoP].x - 100 == KingG[GAChoosed].x && ArcP[AtacadoP].y + 100 == KingG[GAChoosed].y || ArcP[AtacadoP].x + 100 == KingG[GAChoosed].x && ArcP[AtacadoP].y + 100 == KingG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksK();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											ArcP[AtacadoP].life -= 32;
											if(PTBR)
											{
												newLine("Golpe Critico! Arqueiro Persa perde 32 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Archer loses 32 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(19,23));
											ArcP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Arqueiro Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Archer loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							} 
						}
						
						if(GAChoosed < 4)
						{
							if(LancerP[AtacadoP].x + 50 == KntG[GAChoosed].x && LancerP[AtacadoP].y == KntG[GAChoosed].y || LancerP[AtacadoP].x - 50 == KntG[GAChoosed].x && LancerP[AtacadoP].y == KntG[GAChoosed].y || LancerP[AtacadoP].x == KntG[GAChoosed].x && LancerP[AtacadoP].y - 50 == KntG[GAChoosed].y || LancerP[AtacadoP].x == KntG[GAChoosed].x && LancerP[AtacadoP].y + 50 == KntG[GAChoosed].y)
							{
								CountTime --;
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksC();

									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											LancerP[AtacadoP].life -= 27;
											if(PTBR)
											{
												newLine("Golpe Critico! Lanceiro Persa perde 27 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Lancer loses 27 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(20,25));
											LancerP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Lanceiro Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Lancer loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							}
							
							else if(ArcP[AtacadoP].x + 50 == KntG[GAChoosed].x && ArcP[AtacadoP].y == KntG[GAChoosed].y || ArcP[AtacadoP].x - 50 == KntG[GAChoosed].x && ArcP[AtacadoP].y == KntG[GAChoosed].y || ArcP[AtacadoP].x == KntG[GAChoosed].x && ArcP[AtacadoP].y - 50 == KntG[GAChoosed].y || ArcP[AtacadoP].x == KntG[GAChoosed].x && ArcP[AtacadoP].y + 50 == KntG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksC();

									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											ArcP[AtacadoP].life -= 27;
											if(PTBR)
											{
												newLine("Golpe Critico! Arqueiro Persa perde 27 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Archer loses 27 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(18,23));
											ArcP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Arqueiro Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Archer loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							}
						
						}
				
						if(GAChoosed < 2)
						{
							if(LancerP[AtacadoP].x + 50 == TorG[GAChoosed].x && LancerP[AtacadoP].y == TorG[GAChoosed].y || LancerP[AtacadoP].x - 50 == TorG[GAChoosed].x && LancerP[AtacadoP].y == TorG[GAChoosed].y || LancerP[AtacadoP].x == TorG[GAChoosed].x && LancerP[AtacadoP].y - 50 == TorG[GAChoosed].y || LancerP[AtacadoP].x == TorG[GAChoosed].x && LancerP[AtacadoP].y + 50 == TorG[GAChoosed].y || LancerP[AtacadoP].x + 50 == TorG[GAChoosed].x && LancerP[AtacadoP].y + 50 == TorG[GAChoosed].y || LancerP[AtacadoP].x - 50 == TorG[GAChoosed].x && LancerP[AtacadoP].y + 50 == TorG[GAChoosed].y || LancerP[AtacadoP].x + 50 == TorG[GAChoosed].x && LancerP[AtacadoP].y - 50 == TorG[GAChoosed].y || LancerP[AtacadoP].x - 50 == TorG[GAChoosed].x && LancerP[AtacadoP].y - 50 == TorG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksT();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											LancerP[AtacadoP].life -= 24;
											if(PTBR)
											{
												newLine("Golpe Critico! Lanceiro Persa perde 24 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Lancer loses 24 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(10,20));
											LancerP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Lanceiro Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Lancer loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							}
							else if(LancerP[AtacadoP].x - 100 == TorG[GAChoosed].x && LancerP[AtacadoP].y - 100 == TorG[GAChoosed].y || LancerP[AtacadoP].x + 100 == TorG[GAChoosed].x && LancerP[AtacadoP].y - 100 == TorG[GAChoosed].y || LancerP[AtacadoP].x - 100 == TorG[GAChoosed].x && LancerP[AtacadoP].y + 100 == TorG[GAChoosed].y || LancerP[AtacadoP].x + 100 == TorG[GAChoosed].x && LancerP[AtacadoP].y + 100 == TorG[GAChoosed].y || LancerP[AtacadoP].x - 100 == TorG[GAChoosed]. x && LancerP[AtacadoP].y == TorG[GAChoosed].y || LancerP[AtacadoP].x + 100 == TorG[GAChoosed]. x && LancerP[AtacadoP].y == TorG[GAChoosed].y || LancerP[AtacadoP].x == TorG[GAChoosed]. x && LancerP[AtacadoP].y + 100 == TorG[GAChoosed].y || LancerP[AtacadoP].x == TorG[GAChoosed]. x && LancerP[AtacadoP].y - 100 == TorG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksT();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											LancerP[AtacadoP].life -= 24;
											if(PTBR)
											{
												newLine("Golpe Critico! Lanceiro Persa perde 24 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Lancer loses 24 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(6,16));
											LancerP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Lanceiro Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Lancer loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							} 
							else if(ArcP[AtacadoP].x + 50 == TorG[GAChoosed].x && ArcP[AtacadoP].y == TorG[GAChoosed].y || ArcP[AtacadoP].x - 50 == TorG[GAChoosed].x && ArcP[AtacadoP].y == TorG[GAChoosed].y || ArcP[AtacadoP].x == TorG[GAChoosed].x && ArcP[AtacadoP].y - 50 == TorG[GAChoosed].y || ArcP[AtacadoP].x == TorG[GAChoosed].x && ArcP[AtacadoP].y + 50 == TorG[GAChoosed].y || ArcP[AtacadoP].x + 50 == TorG[GAChoosed].x && ArcP[AtacadoP].y + 50 == TorG[GAChoosed].y || ArcP[AtacadoP].x - 50 == TorG[GAChoosed].x && ArcP[AtacadoP].y + 50 == TorG[GAChoosed].y || ArcP[AtacadoP].x + 50 == TorG[GAChoosed].x && ArcP[AtacadoP].y - 50 == TorG[GAChoosed].y || ArcP[AtacadoP].x - 50 == TorG[GAChoosed].x && ArcP[AtacadoP].y - 50 == TorG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksT();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											ArcP[AtacadoP].life -= 24;
											if(PTBR)
											{
												newLine("Golpe Critico! Arqueiro Persa perde 24 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Archer loses 24 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(10,20));
											ArcP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Arqueiro Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Archer loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							}
							else if(ArcP[AtacadoP].x - 100 == TorG[GAChoosed].x && ArcP[AtacadoP].y - 100 == TorG[GAChoosed].y || ArcP[AtacadoP].x + 100 == TorG[GAChoosed].x && ArcP[AtacadoP].y - 100 == TorG[GAChoosed].y || ArcP[AtacadoP].x - 100 == TorG[GAChoosed].x && ArcP[AtacadoP].y + 100 == TorG[GAChoosed].y || ArcP[AtacadoP].x + 100 == TorG[GAChoosed].x && ArcP[AtacadoP].y + 100 == TorG[GAChoosed].y || ArcP[AtacadoP].x - 100 == TorG[GAChoosed]. x && ArcP[AtacadoP].y == TorG[GAChoosed].y || ArcP[AtacadoP].x + 100 == TorG[GAChoosed]. x && ArcP[AtacadoP].y == TorG[GAChoosed].y || ArcP[AtacadoP].x == TorG[GAChoosed]. x && ArcP[AtacadoP].y + 100 == TorG[GAChoosed].y || ArcP[AtacadoP].x == TorG[GAChoosed]. x && ArcP[AtacadoP].y - 100 == TorG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksT();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											ArcP[AtacadoP].life -= 24;
											if(PTBR)
											{
												newLine("Golpe Critico! Arqueiro Persa perde 24 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Archer loses 24 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(6,16));
											ArcP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Arqueiro Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Archer loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							} 
						
						}
						
						if(GAChoosed < 8)
						{
							if(LancerP[AtacadoP].x - 50 == LancerG[GAChoosed].x && LancerP[AtacadoP].y - 50 == LancerG[GAChoosed].y || LancerP[AtacadoP].x + 50 == LancerG[GAChoosed].x && LancerP[AtacadoP].y - 50 == LancerG[GAChoosed].y || LancerP[AtacadoP].x - 50 == LancerG[GAChoosed].x && LancerP[AtacadoP].y + 50 == LancerG[GAChoosed].y || LancerP[AtacadoP].x + 50 == LancerG[GAChoosed].x && LancerP[AtacadoP].y + 50 == LancerG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksL();

									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											LancerP[AtacadoP].life -= 26;
											if(PTBR)
											{
												newLine("Golpe Critico! Lanceiro Persa perde 27 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Lancer loses 27 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(16,21));
											LancerP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Lanceiro Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Lancer loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							}
							else if(LancerP[AtacadoP].x == ArcG[GAChoosed].x && LancerP[AtacadoP].y - 50 == ArcG[GAChoosed].y || LancerP[AtacadoP].x == ArcG[GAChoosed].x && LancerP[AtacadoP].y - 100 == ArcG[GAChoosed].y || LancerP[AtacadoP].x == ArcG[GAChoosed].x && LancerP[AtacadoP].y - 150 == ArcG[GAChoosed].y || LancerP[AtacadoP].x == ArcG[GAChoosed].x && LancerP[AtacadoP].y + 50 == ArcG[GAChoosed].y || LancerP[AtacadoP].x == ArcG[GAChoosed].x && LancerP[AtacadoP].y + 100 == ArcG[GAChoosed].y || LancerP[AtacadoP].x == ArcG[GAChoosed].x && LancerP[AtacadoP].y + 150 == ArcG[GAChoosed].y || LancerP[AtacadoP].x - 50 == ArcG[GAChoosed].x && LancerP[AtacadoP].y == ArcG[GAChoosed].y || LancerP[AtacadoP].x - 100 == ArcG[GAChoosed].x && LancerP[AtacadoP].y == ArcG[GAChoosed].y || LancerP[AtacadoP].x - 150 == ArcG[GAChoosed].x && LancerP[AtacadoP].y == ArcG[GAChoosed].y || LancerP[AtacadoP].x + 50 == ArcG[GAChoosed].x && LancerP[AtacadoP].y == ArcG[GAChoosed].y || LancerP[AtacadoP].x + 100 == ArcG[GAChoosed].x && LancerP[AtacadoP].y == ArcG[GAChoosed].y || LancerP[AtacadoP].x + 150 == ArcG[GAChoosed].x && LancerP[AtacadoP].y == ArcG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksA();
									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											LancerP[AtacadoP].life -= 21;
											if(PTBR)
											{
												newLine("Golpe Critico! Lanceiro Persa perde 21 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian Lancer loses 21 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(11,16));
											LancerP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - Lanceiro Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian Lancer loses "+damage+" life points.");
										}
										
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							}
							else if(ArcP[AtacadoP].x - 50 == LancerG[GAChoosed].x && ArcP[AtacadoP].y - 50 == LancerG[GAChoosed].y || ArcP[AtacadoP].x + 50 == LancerG[GAChoosed].x && ArcP[AtacadoP].y - 50 == LancerG[GAChoosed].y || ArcP[AtacadoP].x - 50 == LancerG[GAChoosed].x && ArcP[AtacadoP].y + 50 == LancerG[GAChoosed].y || ArcP[AtacadoP].x + 50 == LancerG[GAChoosed].x && ArcP[AtacadoP].y + 50 == LancerG[GAChoosed].y)
							{
								Boolean8 = false;
								KntGMove = false;
								GnrlGMove = false;
								KingGMove = false;
								LancerGMove = false;
								ArcGMove = false;
								CountTime --;
								if(GAChoosed != null && CountTime < 100)
								{
									CountTime --;
									drawAtacksL();

									if(CountTime <= 0)
									{
										if(Math.floor(randomRange(0,99)<20))
										{
											ArcP[AtacadoP].life -= 26;
											if(PTBR)
											{
												newLine("Golpe Critico! General Persa perde 27 pontos de vida.");
											}
											else
												newLine("Critical attack! - Persian General loses 27 life points.");
										}
										else
										{
											damage = Math.floor(randomRange(21,25));
											ArcP[AtacadoP].life -= damage;
											if(PTBR)
											{
												newLine("Golpe Normal - General Persa perde "+damage+" pontos de vida.");
											}
											else
												newLine("Normal attack - Persian General loses "+damage+" life points.");
										}
										KntGMove = true;
										GnrlGMove = true;
										KingGMove = true;
										LancerGMove = true;
										ArcGMove = true;
										
										Vez_Gregos = false;	
										Vez_Persas = true;	
										CountTime = 100;
									}
								}
							}
							else if(ArcP[AtacadoP].x == ArcG[GAChoosed].x && ArcP[AtacadoP].y - 50 == ArcG[GAChoosed].y || ArcP[AtacadoP].x == ArcG[GAChoosed].x && ArcP[AtacadoP].y - 100 == ArcG[GAChoosed].y || ArcP[AtacadoP].x == ArcG[GAChoosed].x && ArcP[AtacadoP].y - 150 == ArcG[GAChoosed].y || ArcP[AtacadoP].x == ArcG[GAChoosed].x && ArcP[AtacadoP].y + 50 == ArcG[GAChoosed].y || ArcP[AtacadoP].x == ArcG[GAChoosed].x && ArcP[AtacadoP].y + 100 == ArcG[GAChoosed].y || ArcP[AtacadoP].x == ArcG[GAChoosed].x && ArcP[AtacadoP].y + 150 == ArcG[GAChoosed].y || ArcP[AtacadoP].x - 50 == ArcG[GAChoosed].x && ArcP[AtacadoP].y == ArcG[GAChoosed].y || ArcP[AtacadoP].x - 100 == ArcG[GAChoosed].x && ArcP[AtacadoP].y == ArcG[GAChoosed].y || ArcP[AtacadoP].x - 150 == ArcG[GAChoosed].x && ArcP[AtacadoP].y == ArcG[GAChoosed].y || ArcP[AtacadoP].x + 50 == ArcG[GAChoosed].x && ArcP[AtacadoP].y == ArcG[GAChoosed].y || ArcP[AtacadoP].x + 100 == ArcG[GAChoosed].x && ArcP[AtacadoP].y == ArcG[GAChoosed].y || ArcP[AtacadoP].x + 150 == ArcG[GAChoosed].x && ArcP[AtacadoP].y == ArcG[GAChoosed].y)
							{
							Boolean8 = false;
							KntGMove = false;
							GnrlGMove = false;
							KingGMove = false;
							LancerGMove = false;
							ArcGMove = false;
							CountTime --;
							if(GAChoosed != null && CountTime < 100)
							{
								CountTime --;
								drawAtacksA();
								if(CountTime <= 0)
								{
									if(Math.floor(randomRange(0,99)<20))
									{
										ArcP[AtacadoP].life -= 21;
										if(PTBR)
										{
											newLine("Golpe Critico! Arqueiro Persa perde 21 pontos de vida.");
										}
										else
											newLine("Critical attack! - Persian Archer loses 21 life points.");
									}
									else
									{
										damage = Math.floor(randomRange(11,16));
										ArcP[AtacadoP].life -= damage;
										if(PTBR)
										{
											newLine("Golpe Normal - Arqueiro Persa perde "+damage+" pontos de vida.");
										}
										else
											newLine("Normal attack - Persian Archer loses "+damage+" life points.");
									}
									KntGMove = true;
									GnrlGMove = true;
									KingGMove = true;
									LancerGMove = true;
									ArcGMove = true;
									
									Vez_Gregos = false;	
									Vez_Persas = true;	
									CountTime = 100;
								}
							}
						}
						
					}
				}
			
				}
			}
			if(GAChoosed == 7 && AtacadoP == 9)
			{
				AtackMG = null;
				Boolean8 = false;
				AtacadoP = 0;
				GAChoosed = 0;
			}
			
			if(Boolean8 == false && AtackMG == null && AtacadoP == 0 && GAChoosed == 0)
			{
				if(ChooseG == null)
				{
					randomAIG();
				}
				KntGMove = true;
				GnrlGMove = true;
				KingGMove = true;
				LancerGMove = true;
				ArcGMove = true;
			}
			else
			{
				KntGMove = false;
				GnrlGMove = false;
				KingGMove = false;
				LancerGMove = false;
				ArcGMove = false;
			}
	}	
}
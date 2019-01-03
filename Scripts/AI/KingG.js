var KingGIA = true; 
var KingsGCC = 0;
var moverK;
var CountTime = 100;
var KingGMove = false;
var CMK = 0;

var Mov1KG = false;
var Mov2KG = false;
var Mov3KG = false;
var Mov4KG = false;
var Mov5KG = false;
var Mov6KG = false;

var MOVMKG1 = null;
var MOVMKG2 = null;
var MOVMKG3 = null;
var MOVMKG4 = null;
var MOVMKG5 = null;
var MOVMKG6 = null;

var POSMKG1 = 0;
var POSMKG2 = 0;
var POSMKG3 = 0;
var POSMKG4 = 0;
var POSMKG5 = 0;
var POSMKG6 = 0;

var limit_down = 451;
var limit_right = 551;

function PossibilitiesAIKG()
{
	if(AIG)
	{
		if(Vez_Gregos)
		{
			
			if(ChooseG == 1)
			{	
				if(KingGMove)
				{	
					moverK = Math.floor(randomRange(1,99));
					
					if(moverK <= 5 && KingsGCC == 0)
					{
						KingsGCC = 1;
					}
					else if(moverK > 5 && moverK <= 10 && KingsGCC == 0)
					{
						KingsGCC = 2;
					}
					else if(moverK > 10 && moverK <= 15 && KingsGCC == 0)
					{
						KingsGCC = 3;
					}
					else if(moverK > 15 && moverK <= 20 && KingsGCC == 0)
					{
						KingsGCC = 4;
					}
					else if(moverK > 20 && moverK <= 50 && KingsGCC == 0)
					{
						KingsGCC = 5;
					}
					else if(moverK > 50 && KingsGCC == 0)
					{
						KingsGCC = 6;
					}
					if(Mov1KG)
					{
						Vez_Gregos = false;
						Vez_Persas = true;
						KingG[0].x -= 50;
						ChooseG = null;
						KingsGCC = 0;
						CountTime = 100;
						Mov1KG = null;
						
					}
					if(Mov2KG)
					{
						Vez_Gregos = false;
						Vez_Persas = true;
						KingG[0].x -= 100;
						ChooseG = null;
						KingsGCC = 0;
						CountTime = 100;
						Mov1KG = null;
						Mov2KG = null;
						
					}
					if(Mov3KG)
					{
						Vez_Gregos = false;
						Vez_Persas = true;
						KingG[0].x += 50;
						ChooseG = null;
						KingsGCC = 0;
						CountTime = 100;
						Mov1KG = null;
						Mov3KG = null;
						
					}
					if(Mov4KG)
					{
						Vez_Gregos = false;
						Vez_Persas = true;
						KingG[0].x += 100;
						ChooseG = null;
						KingsGCC = 0;
						CountTime = 100;
						Mov1KG = null;
						Mov4KG = null;
					}
					if(Mov5KG)
					{
						Vez_Gregos = false;
						Vez_Persas = true;
						KingG[0].y -= 50;
						ChooseG = null;
						KingsGCC = 0;
						CountTime = 100;
						Mov1KG = null;
						Mov5KG = null;
					}
					if(Mov6KG)
					{
						Vez_Gregos = false;
						Vez_Persas = true;
						KingG[0].y -= 100;
						ChooseG = null;
						KingsGCC = 0;
						CountTime = 100;
						Mov1KG = null;
						Mov6KG = null;
					}
					if(KingsGCC != 0)
					{
						if(KingG[0].y > 101)
						{
							context.drawImage(MovK, KingG[0].x , KingG[0].y - 50, KingG[0].w, KingG[0].h);			
						}
						if(KingG[0].y > 151)
						{
							context.drawImage(MovK, KingG[0].x , KingG[0].y - 100, KingG[0].w, KingG[0].h);
						}
						if(KingG[0].y < limit_down)
						{
							context.drawImage(MovK, KingG[0].x, KingG[0].y + 50, KingG[0].w, KingG[0].h);
						}
						if(KingG[0].y < limit_down-50)
						{
							context.drawImage(MovK, KingG[0].x, KingG[0].y + 100, KingG[0].w, KingG[0].h);
						}
						context.drawImage(MovK, KingG[0].x + 50 , KingG[0].y, KingG[0].w, KingG[0].h);	
						context.drawImage(MovK, KingG[0].x + 100, KingG[0].y, KingG[0].w, KingG[0].h);	
						context.drawImage(MovK, KingG[0].x - 50, KingG[0].y, KingG[0].w, KingG[0].h);	
						context.drawImage(MovK, KingG[0].x - 100, KingG[0].y, KingG[0].w, KingG[0].h);	
					}
					
					{//Contador 1
							if(POSMKG1 < 1)
							{
								if((KingG[0].x == GnrlP[POSMKG1].x + 50 && KingG[0].y == GnrlP[POSMKG1].y) ||
								(KingG[0].x == GnrlG[POSMKG1].x + 50 && KingG[0].y == GnrlG[POSMKG1].y) ||
								(KingG[0].x == KingP[POSMKG1].x + 50 && KingG[0].y == KingP[POSMKG1].y))
								{
									MOVMKG1 = false;
								}
							}
							if(POSMKG1 < 2)
							{
								if((KingG[0].x == TorG[POSMKG1].x + 50 && KingG[0].y == TorG[POSMKG1].y)||
								(KingG[0].x == TorP[POSMKG1].x + 50 && KingG[0].y == TorP[POSMKG1].y))
								{
									MOVMKG1 = false;
								}
							}
							if(POSMKG1 < 4)
							{
								if((KingG[0].x == KntG[POSMKG1].x + 50 && KingG[0].y == KntG[POSMKG1].y) ||
								(KingG[0].x == KntP[POSMKG1].x + 50 && KingG[0].y == KntP[POSMKG1].y))
								{
									MOVMKG1 = false;
								}
							}
							
							if(POSMKG1 < 8)
							{
								if((KingG[0].x == TreeA.x + 50 && KingG[0].y == TreeA.y)||
								(KingG[0].x == TreeB.x + 50 && KingG[0].y == TreeB.y)||
								(KingG[0].x == TreeC.x + 50 && KingG[0].y == TreeC.y)||
								(KingG[0].x == TreeD.x + 50 && KingG[0].y == TreeD.y)||
								(KingG[0].x == TreeE.x + 50 && KingG[0].y == TreeE.y)||
								(KingG[0].x == TreeF.x + 50 && KingG[0].y == TreeF.y))
								{
									MOVMKG1 = false;
								}
								
								if((KingG[0].x == LancerP[POSMKG1].x + 50 && KingG[0].y == LancerP[POSMKG1].y)||
								(KingG[0].x == ArcP[POSMKG1].x + 50 && KingG[0].y == ArcP[POSMKG1].y) ||
								(KingG[0].x == ArcG[POSMKG1].x + 50 && KingG[0].y == ArcG[POSMKG1].y) ||
								(KingG[0].x == LancerG[POSMKG1].x + 50 && KingG[0].y == LancerG[POSMKG1].y))
								{
									MOVMKG1 = false;
								}
							}	
						}
						
					{//Contador 2
						if(POSMKG2 < 1)
						{
							if((KingG[0].x == GnrlP[POSMKG2].x + 100 && KingG[0].y == GnrlP[POSMKG2].y) ||
							(KingG[0].x == GnrlG[POSMKG2].x + 100 && KingG[0].y == GnrlG[POSMKG2].y) ||
							(KingG[0].x == KingP[POSMKG2].x + 100 && KingG[0].y == KingP[POSMKG2].y))
							{
								MOVMKG2 = false;
							}
						}
						if(POSMKG2 < 2)
						{
							if((KingG[0].x == TorG[POSMKG2].x + 100 && KingG[0].y == TorG[POSMKG2].y)||
							(KingG[0].x == TorP[POSMKG2].x + 100 && KingG[0].y == TorP[POSMKG2].y))
							{
								MOVMKG2 = false;
							}
						}
						if(POSMKG2 < 4)
						{
							if((KingG[0].x == KntG[POSMKG2].x + 100 && KingG[0].y == KntG[POSMKG2].y) ||
							(KingG[0].x == KntP[POSMKG2].x + 100 && KingG[0].y == KntP[POSMKG2].y))
							{
								MOVMKG2 = false;
							}
						}
						
						if(POSMKG2 < 8)
						{
							if((KingG[0].x == TreeA.x + 50 && KingG[0].y == TreeA.y)||
							(KingG[0].x == TreeB.x + 50 && KingG[0].y == TreeB.y)||
							(KingG[0].x == TreeC.x + 50 && KingG[0].y == TreeC.y)||
							(KingG[0].x == TreeD.x + 50 && KingG[0].y == TreeD.y)||
							(KingG[0].x == TreeE.x + 50 && KingG[0].y == TreeE.y)||
							(KingG[0].x == TreeF.x + 50 && KingG[0].y == TreeF.y)||
							(KingG[0].x == TreeA.x + 100 && KingG[0].y == TreeA.y)||
							(KingG[0].x == TreeB.x + 100 && KingG[0].y == TreeB.y)||
							(KingG[0].x == TreeC.x + 100 && KingG[0].y == TreeC.y)||
							(KingG[0].x == TreeD.x + 100 && KingG[0].y == TreeD.y)||
							(KingG[0].x == TreeE.x + 100 && KingG[0].y == TreeE.y)||
							(KingG[0].x == TreeF.x + 100 && KingG[0].y == TreeF.y))
							{
								MOVMKG2 = false;
							}
							
							if((KingG[0].x == LancerP[POSMKG2].x + 100 && KingG[0].y == LancerP[POSMKG2].y)||
							(KingG[0].x == ArcP[POSMKG2].x + 100 && KingG[0].y == ArcP[POSMKG2].y) ||
							(KingG[0].x == ArcG[POSMKG2].x + 100 && KingG[0].y == ArcG[POSMKG2].y) ||
							(KingG[0].x == LancerG[POSMKG2].x + 100 && KingG[0].y == LancerG[POSMKG2].y))
							{
								MOVMKG2 = false;
							}
						}
					}
					
					{//Contador 3
						if(POSMKG3 < 8)
						{
							if((KingG[0].x == TreeA.x - 50 && KingG[0].y == TreeA.y)||
							(KingG[0].x == TreeB.x - 50 && KingG[0].y == TreeB.y)||
							(KingG[0].x == TreeC.x - 50 && KingG[0].y == TreeC.y)||
							(KingG[0].x == TreeD.x - 50 && KingG[0].y == TreeD.y)||
							(KingG[0].x == TreeE.x - 50 && KingG[0].y == TreeE.y)||
							(KingG[0].x == TreeF.x - 50 && KingG[0].y == TreeF.y))
							{
								MOVMKG3 = false;
							}
							
							if((KingG[0].x == LancerP[POSMKG3].x - 50 && KingG[0].y == LancerP[POSMKG3].y)||
							(KingG[0].x == ArcP[POSMKG3].x - 50 && KingG[0].y == ArcP[POSMKG3].y) ||
							(KingG[0].x == ArcG[POSMKG3].x - 50 && KingG[0].y == ArcG[POSMKG3].y) ||
							(KingG[0].x == LancerG[POSMKG3].x - 50 && KingG[0].y == LancerG[POSMKG3].y))
							{
								MOVMKG3 = false;
							}
						}
						
						if(POSMKG3 < 4)
						{
							if((KingG[0].x == KntG[POSMKG3].x - 50 && KingG[0].y == KntG[POSMKG3].y) ||
							(KingG[0].x == KntP[POSMKG3].x - 50 && KingG[0].y == KntP[POSMKG3].y))
							{
								MOVMKG3 = false;
							}
						}
						if(POSMKG3 < 2)
						{
							if((KingG[0].x == TorG[POSMKG3].x - 50 && KingG[0].y == TorG[POSMKG3].y)||
							(KingG[0].x == TorP[POSMKG3].x - 50 && KingG[0].y == TorP[POSMKG3].y))
							{
								MOVMKG3 = false;
							}
						}
						if(POSMKG3 < 1)
						{
							if((KingG[0].x == GnrlP[POSMKG3].x - 50 && KingG[0].y == GnrlP[POSMKG3].y) ||
							(KingG[0].x == GnrlG[POSMKG3].x - 50 && KingG[0].y == GnrlG[POSMKG3].y) ||
							(KingG[0].x == KingP[POSMKG3].x - 50 && KingG[0].y == KingP[POSMKG3].y))
							{
								MOVMKG3 = false;
							}
						}
					}
					
					{//Contador 4
						if(POSMKG4 < 8)
						{
							if((KingG[0].x == TreeA.x - 50 && KingG[0].y == TreeA.y)||
							(KingG[0].x == TreeB.x - 50 && KingG[0].y == TreeB.y)||
							(KingG[0].x == TreeC.x - 50 && KingG[0].y == TreeC.y)||
							(KingG[0].x == TreeD.x - 50 && KingG[0].y == TreeD.y)||
							(KingG[0].x == TreeE.x - 50 && KingG[0].y == TreeE.y)||
							(KingG[0].x == TreeF.x - 50 && KingG[0].y == TreeF.y)||
							(KingG[0].x == TreeA.x - 100 && KingG[0].y == TreeA.y)||
							(KingG[0].x == TreeB.x - 100 && KingG[0].y == TreeB.y)||
							(KingG[0].x == TreeC.x - 100 && KingG[0].y == TreeC.y)||
							(KingG[0].x == TreeD.x - 100 && KingG[0].y == TreeD.y)||
							(KingG[0].x == TreeE.x - 100 && KingG[0].y == TreeE.y)||
							(KingG[0].x == TreeF.x - 100 && KingG[0].y == TreeF.y))
							{
								MOVMKG4 = false;
							}
							
							if((KingG[0].x == LancerP[POSMKG4].x - 100 && KingG[0].y == LancerP[POSMKG4].y)||
							(KingG[0].x == ArcP[POSMKG4].x - 100 && KingG[0].y == ArcP[POSMKG4].y) ||
							(KingG[0].x == ArcG[POSMKG4].x - 100 && KingG[0].y == ArcG[POSMKG4].y) ||
							(KingG[0].x == LancerG[POSMKG4].x - 100 && KingG[0].y == LancerG[POSMKG4].y))
							{
								MOVMKG4 = false;
							}
						}
						
						if(POSMKG4 < 4)
						{
							if((KingG[0].x == KntG[POSMKG4].x - 100 && KingG[0].y == KntG[POSMKG4].y) ||
							(KingG[0].x == KntP[POSMKG4].x - 100 && KingG[0].y == KntP[POSMKG4].y))
							{
								MOVMKG4 = false;
							}
						}
						if(POSMKG4 < 2)
						{
							if((KingG[0].x == TorG[POSMKG4].x - 100 && KingG[0].y == TorG[POSMKG4].y)||
							(KingG[0].x == TorP[POSMKG4].x - 100 && KingG[0].y == TorP[POSMKG4].y))
							{
								MOVMKG4 = false;
							}
						}
						if(POSMKG4 < 1)
						{
							if((KingG[0].x == GnrlP[POSMKG4].x - 100 && KingG[0].y == GnrlP[POSMKG4].y) ||
							(KingG[0].x == GnrlG[POSMKG4].x - 100 && KingG[0].y == GnrlG[POSMKG4].y) ||
							(KingG[0].x == KingP[POSMKG4].x - 100 && KingG[0].y == KingP[POSMKG4].y))
							{
								MOVMKG4 = false;
							}
						}
					}
					
					{//Contador 5
						if(POSMKG5 < 8)
						{
							if((KingG[0].x == TreeA.x && KingG[0].y == TreeA.y + 50)||
							(KingG[0].x == TreeB.x && KingG[0].y == TreeB.y + 50)||
							(KingG[0].x == TreeC.x && KingG[0].y == TreeC.y + 50)||
							(KingG[0].x == TreeD.x && KingG[0].y == TreeD.y + 50)||
							(KingG[0].x == TreeE.x && KingG[0].y == TreeE.y + 50)||
							(KingG[0].x == TreeF.x && KingG[0].y == TreeF.y + 50))
							{
								MOVMKG5 = false;
							}
							
							if((KingG[0].x == LancerP[POSMKG5].x  && KingG[0].y == LancerP[POSMKG5].y + 50)||
							(KingG[0].x == ArcP[POSMKG5].x  && KingG[0].y == ArcP[POSMKG5].y + 50) ||
							(KingG[0].x == ArcG[POSMKG5].x  && KingG[0].y == ArcG[POSMKG5].y + 50) ||
							(KingG[0].x == LancerG[POSMKG5].x && KingG[0].y == LancerG[POSMKG5].y + 50))
							{
								MOVMKG5 = false;
							}
						}
						
						if(POSMKG5 < 4)
						{
							if((KingG[0].x == KntG[POSMKG5].x  && KingG[0].y == KntG[POSMKG5].y + 50) ||
							(KingG[0].x == KntP[POSMKG5].x  && KingG[0].y == KntP[POSMKG5].y + 50))
							{
								MOVMKG5 = false;
							}
						}
						if(POSMKG5 < 2)
						{
							if((KingG[0].x == TorG[POSMKG5].x  && KingG[0].y == TorG[POSMKG5].y + 50)||
							(KingG[0].x == TorP[POSMKG5].x  && KingG[0].y == TorP[POSMKG5].y + 50))
							{
								MOVMKG5 = false;
							}
						}
						
						if(POSMKG5 < 1)
						{
							if((KingG[0].x == GnrlP[POSMKG5].x  && KingG[0].y == GnrlP[POSMKG5].y + 50) ||
							(KingG[0].x == GnrlG[POSMKG5].x  && KingG[0].y == GnrlG[POSMKG5].y + 50) ||
							(KingG[0].x == KingP[POSMKG5].x  && KingG[0].y == KingP[POSMKG5].y + 50))
							{
								MOVMKG5 = false;
							}
						}
					}
					
					{//Contador 6
						
						if(POSMKG6 < 8)
						{
							if((KingG[0].x == TreeA.x && KingG[0].y == TreeA.y + 100)||
							(KingG[0].x == TreeB.x && KingG[0].y == TreeB.y + 100)||
							(KingG[0].x == TreeC.x && KingG[0].y == TreeC.y + 100)||
							(KingG[0].x == TreeD.x && KingG[0].y == TreeD.y + 100)||
							(KingG[0].x == TreeE.x && KingG[0].y == TreeE.y + 100)||
							(KingG[0].x == TreeF.x && KingG[0].y == TreeF.y + 100)||
							(KingG[0].x == TreeA.x && KingG[0].y == TreeA.y + 50)||
							(KingG[0].x == TreeB.x && KingG[0].y == TreeB.y + 50)||
							(KingG[0].x == TreeC.x && KingG[0].y == TreeC.y + 50)||
							(KingG[0].x == TreeD.x && KingG[0].y == TreeD.y + 50)||
							(KingG[0].x == TreeE.x && KingG[0].y == TreeE.y + 50)||
							(KingG[0].x == TreeF.x && KingG[0].y == TreeF.y + 50))
							{
								MOVMKG6 = false;
							}
							
							if((KingG[0].x == LancerP[POSMKG6].x  && KingG[0].y == LancerP[POSMKG6].y + 100)||
							(KingG[0].x == ArcP[POSMKG6].x  && KingG[0].y == ArcP[POSMKG6].y + 100) ||
							(KingG[0].x == ArcG[POSMKG6].x  && KingG[0].y == ArcG[POSMKG6].y + 100) ||
							(KingG[0].x == LancerG[POSMKG6].x && KingG[0].y == LancerG[POSMKG6].y + 100))
							{
								MOVMKG6 = false;
							}
						}
						
						if(POSMKG6 < 4)
						{
							if((KingG[0].x == KntG[POSMKG6].x  && KingG[0].y == KntG[POSMKG6].y + 100) ||
							(KingG[0].x == KntP[POSMKG6].x  && KingG[0].y == KntP[POSMKG6].y + 100))
							{
								MOVMKG6 = false;
							}
						}
						if(POSMKG6 < 2)
						{
							if((KingG[0].x == TorG[POSMKG6].x  && KingG[0].y == TorG[POSMKG6].y + 100)||
							(KingG[0].x == TorP[POSMKG6].x  && KingG[0].y == TorP[POSMKG6].y + 100))
							{
								MOVMKG6 = false;
							}
						}
						
						if(POSMKG6 < 1)
						{
							if((KingG[0].x == GnrlP[POSMKG6].x  && KingG[0].y == GnrlP[POSMKG6].y + 100) ||
							(KingG[0].x == GnrlG[POSMKG6].x  && KingG[0].y == GnrlG[POSMKG6].y + 100) ||
							(KingG[0].x == KingP[POSMKG6].x  && KingG[0].y == KingP[POSMKG6].y + 100))
							{
								MOVMKG6 = false;
							}
						}
					}
					
					if(KingsGCC == 1)
					{
						if(KingG[0].x > 1)
						{
							if(KingsGCC != 2 && KingsGCC != 3 && KingsGCC != 4 && KingsGCC != 5 && KingsGCC != 6)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMKG1 == null)
									{
										MOVMKG1 = true;
									}
									if(MOVMKG1)
									{	
										POSMKG1 += 1;
									}
									if(POSMKG1 > 10)
									{
										if(Mov1KG == false)
										{
											Mov1KG = true;
										}
									}	
									if(MOVMKG1 == false)
									{
										KingsGCC = 2;
									}
								}
							}
						}
						else
						{
							MOVMKG1 = false;
							KingsGCC = 2;
						}
					}
					if(KingsGCC == 2)
					{
						if(KingG[0].x > 51)
						{
							if(KingsGCC != 1 && KingsGCC != 3 && KingsGCC != 4 && KingsGCC != 5 && KingsGCC != 6)
							{
								
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMKG2 == null)
									{
										MOVMKG2 = true;
									}
									
									if(MOVMKG2)
									{	
										POSMKG2 += 1;
										if(POSMKG2 > 10)
										{
											if(Mov2KG == false)
											{
												Mov2KG = true;
											}
										}	
									}
									if(MOVMKG2 == false)
									{
										KingsGCC = 3;
									}
								}
								
							}						
						}
						else
						{
							MOVMKG2 = false;
							KingsGCC = 3;
						}
					}
					if(KingsGCC == 3)
					{	
						if(KingG[0].x < limit_right)
						{
							if(KingsGCC != 1 && KingsGCC != 2 && KingsGCC != 4 && KingsGCC != 5 && KingsGCC != 6)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMKG3 == null)
									{
										MOVMKG3 = true;
									}
									if(MOVMKG3)
									{	
										POSMKG3 += 1;
										if(POSMKG3 > 10)
										{
											if(Mov3KG == false)
											{
												Mov3KG = true;
											}
											
										}	
									}
									if(MOVMKG3 == false)
									{
										KingsGCC = 4;
									}
								}
							}
						}
						else
						{
							MOVMKG3 = false;
							KingsGCC = 4;
						}
					}
					if(KingsGCC == 4)
					{
						if(KingG[0].x < limit_right-50)
						{
							if(KingsGCC != 1 && KingsGCC != 2 && KingsGCC != 3 && KingsGCC != 5 && KingsGCC != 6)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMKG4 == null)
									{
										MOVMKG4 = true;
									}
									if(MOVMKG4)
									{	
										POSMKG4 += 1;
										if(POSMKG4 > 10)
										{
											if(Mov4KG == false)
											{
												Mov4KG = true;
											}
										
										}	
									}
									if(MOVMKG4 == false)
									{
										KingsGCC = 5;
									}
								}
							}
						}
						else
						{
							MOVMKG4 = false;
							KingsGCC = 5;
						}
					}
					if(KingsGCC == 5)
					{
						if(KingG[0].y > 101)
						{
							if(KingsGCC != 1 && KingsGCC != 2 && KingsGCC != 3 && KingsGCC != 4 && KingsGCC != 6)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMKG5 == null)
									{
										MOVMKG5 = true;
									}
									if(MOVMKG5)
									{	
										POSMKG5 += 1;
										if(POSMKG5 > 10)
										{
											if(Mov5KG == false)
											{
												Mov5KG = true;
											}
										
										}	
									}
									if(MOVMKG5 == false)
									{
										KingsGCC = 6;
									}
								}
							}
						}
						else
						{
							MOVMKG5 = false;
							KingsGCC = 6;
						}
					}
					if(KingsGCC == 6)
					{
						if(KingG[0].y > 151)
						{
							if(KingsGCC != 1 && KingsGCC != 2 && KingsGCC != 3 && KingsGCC != 4 && KingsGCC != 5)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMKG6 == null)
									{
										MOVMKG6 = true;
									}
									if(MOVMKG6)
									{	
										POSMKG6 += 1;
										if(POSMKG6 > 10)
										{
											if(Mov6KG == false)
											{
												Mov6KG = true;
											}
											
										}	
									}	
				
									if(MOVMKG6 == false)
									{
										KingsGCC = 1;
									}
								}
							}
						}
						else
						{
							MOVMKG6 = false;
							KingsGCC = 1;
						}
					}
					if(MOVMKG1 == false && MOVMKG2 == false && MOVMKG3 == false && MOVMKG4 == false && MOVMKG5 == false && MOVMKG6 == false)
					{
						CountTime = 100;
						ChooseG = Math.floor(randomRange(0,5));
						KingsGCC = 0;
						Mov1KG = false;
						Mov2KG = false;
						Mov3KG = false;
						Mov4KG = false;
						Mov5KG = false;
						Mov6KG = false;
						MOVMKG1 = null;
						MOVMKG2 = null;
						MOVMKG3 = null;
						MOVMKG4 = null;
						MOVMKG5 = null;
						MOVMKG6 = null;
						POSMKG1 = 0;
						POSMKG2 = 0;
						POSMKG3 = 0;
						POSMKG4 = 0;
						POSMKG5 = 0;
						POSMKG6 = 0;
					}
				}
			}
		}
	}
}
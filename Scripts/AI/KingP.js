var KingPIA = true; 
var KingsPCC = 0;
var moverK;
var CountTime = 100;
var KingPMove = false;
var CMK = 0;

var Mov1KP = false;
var Mov2KP = false;
var Mov3KP = false;
var Mov4KP = false;
var Mov5KP = false;
var Mov6KP = false;

var MOVMKP1 = null;
var MOVMKP2 = null;
var MOVMKP3 = null;
var MOVMKP4 = null;
var MOVMKP5 = null;
var MOVMKP6 = null;

var POSMKP1 = 0;
var POSMKP2 = 0;
var POSMKP3 = 0;
var POSMKP4 = 0;
var POSMKP5 = 0;
var POSMKP6 = 0;

function PossibilitiesAIKP()
{
	if(AIP)
	{
		if(Vez_Persas)
		{
			
			if(ChooseP == 1)
			{	
				if(KingPMove)
				{	
					moverK = Math.floor(randomRange(1,99));
					
					if(moverK <= 5 && KingsPCC == 0)
					{
						KingsPCC = 1;
					}
					else if(moverK > 5 && moverK <= 10 && KingsPCC == 0)
					{
						KingsPCC = 2;
					}
					else if(moverK > 10 && moverK <= 15 && KingsPCC == 0)
					{
						KingsPCC = 3;
					}
					else if(moverK > 15 && moverK <= 20 && KingsPCC == 0)
					{
						KingsPCC = 4;
					}
					else if(moverK > 20 && moverK <= 50 && KingsPCC == 0)
					{
						KingsPCC = 5;
					}
					else if(moverK > 50 && KingsPCC == 0)
					{
						KingsPCC = 6;
					}
					if(Mov1KP)
					{
						Vez_Persas = false;
						Vez_Gregos = true;
						KingP[0].x -= 50;
						ChooseP = null;
						KingsPCC = 0;
						CountTime = 100;
						Mov1KP = null;
						
					}
					if(Mov2KP)
					{
						Vez_Persas = false;
						Vez_Gregos = true;
						KingP[0].x -= 100;
						ChooseP = null;
						KingsPCC = 0;
						CountTime = 100;
						Mov2KP = null;
						
					}
					if(Mov3KP)
					{
						Vez_Persas = false;
						Vez_Gregos = true;
						KingP[0].x += 50;
						ChooseP = null;
						KingsPCC = 0;
						CountTime = 100;
						Mov3KP = null;
						
					}
					if(Mov4KP)
					{
						Vez_Persas = false;
						Vez_Gregos = true;
						KingP[0].x += 100;
						ChooseP = null;
						KingsPCC = 0;
						CountTime = 100;
						Mov4KP = null;
					}
					if(Mov5KP)
					{
						Vez_Persas = false;
						Vez_Gregos = true;
						KingP[0].y += 50;
						ChooseP = null;
						KingsPCC = 0;
						CountTime = 100;
						Mov5KP = null;
					}
					if(Mov6KP)
					{
						Vez_Persas = false;
						Vez_Gregos = true;
						KingP[0].y += 100;
						ChooseP = null;
						KingsPCC = 0;
						CountTime = 100;
						Mov6KP = null;
					}
					if(KingsPCC != 0)
					{
						if(KingP[0].y > 101)
						{
							context.drawImage(MovK, KingP[0].x , KingP[0].y - 50, KingP[0].w, KingP[0].h);			
						}
						if(KingP[0].y > 151)
						{
							context.drawImage(MovK, KingP[0].x , KingP[0].y - 100, KingP[0].w, KingP[0].h);
						}
						if(KingP[0].y < 551)
						{
							context.drawImage(MovK, KingP[0].x, KingP[0].y + 50, KingP[0].w, KingP[0].h);
						}
						if(KingP[0].y < 501)
						{
							context.drawImage(MovK, KingP[0].x, KingP[0].y + 100, KingP[0].w, KingP[0].h);
						}
						context.drawImage(MovK, KingP[0].x + 50 , KingP[0].y, KingP[0].w, KingP[0].h);	
						context.drawImage(MovK, KingP[0].x + 100, KingP[0].y, KingP[0].w, KingP[0].h);	
						context.drawImage(MovK, KingP[0].x - 50, KingP[0].y, KingP[0].w, KingP[0].h);	
						context.drawImage(MovK, KingP[0].x - 100, KingP[0].y, KingP[0].w, KingP[0].h);	
					}
					
					{//Contador 1
							if(POSMKP1 < 1)
							{
								if((KingP[0].x == GnrlP[POSMKP1].x + 50 && KingP[0].y == GnrlP[POSMKP1].y) ||
								(KingP[0].x == GnrlG[POSMKP1].x + 50 && KingP[0].y == GnrlG[POSMKP1].y) ||
								(KingP[0].x == KingG[POSMKP1].x + 50 && KingP[0].y == KingG[POSMKP1].y))
								{
									MOVMKP1 = false;
								}
							}
							if(POSMKP1 < 2)
							{
								if((KingP[0].x == TorG[POSMKP1].x + 50 && KingP[0].y == TorG[POSMKP1].y)||
								(KingP[0].x == TorP[POSMKP1].x + 50 && KingP[0].y == TorP[POSMKP1].y))
								{
									MOVMKP1 = false;
								}
							}
							if(POSMKP1 < 4)
							{
								if((KingP[0].x == KntG[POSMKP1].x + 50 && KingP[0].y == KntG[POSMKP1].y) ||
								(KingP[0].x == KntP[POSMKP1].x + 50 && KingP[0].y == KntP[POSMKP1].y))
								{
									MOVMKP1 = false;
								}
							}
							
							if(POSMKP1 < 8)
							{
								if((KingP[0].x == TreeA.x + 50 && KingP[0].y == TreeA.y)||
								(KingP[0].x == TreeB.x + 50 && KingP[0].y == TreeB.y)||
								(KingP[0].x == TreeC.x + 50 && KingP[0].y == TreeC.y)||
								(KingP[0].x == TreeD.x + 50 && KingP[0].y == TreeD.y)||
								(KingP[0].x == TreeE.x + 50 && KingP[0].y == TreeE.y)||
								(KingP[0].x == TreeF.x + 50 && KingP[0].y == TreeF.y))
								{
									MOVMKP1 = false;
								}
								
								if((KingP[0].x == LancerP[POSMKP1].x + 50 && KingP[0].y == LancerP[POSMKP1].y)||
								(KingP[0].x == ArcP[POSMKP1].x + 50 && KingP[0].y == ArcP[POSMKP1].y) ||
								(KingP[0].x == ArcG[POSMKP1].x + 50 && KingP[0].y == ArcG[POSMKP1].y) ||
								(KingP[0].x == LancerG[POSMKP1].x + 50 && KingP[0].y == LancerG[POSMKP1].y))
								{
									MOVMKP1 = false;
								}
							}	
						}
						
					{//Contador 2
						if(POSMKP2 < 1)
						{
							if((KingP[0].x == GnrlP[POSMKP2].x + 100 && KingP[0].y == GnrlP[POSMKP2].y) ||
							(KingP[0].x == GnrlG[POSMKP2].x + 100 && KingP[0].y == GnrlG[POSMKP2].y) ||
							(KingP[0].x == KingG[POSMKP2].x + 100 && KingP[0].y == KingG[POSMKP2].y))
							{
								MOVMKP2 = false;
							}
						}
						if(POSMKP2 < 2)
						{
							if((KingP[0].x == TorG[POSMKP2].x + 100 && KingP[0].y == TorG[POSMKP2].y)||
							(KingP[0].x == TorP[POSMKP2].x + 100 && KingP[0].y == TorP[POSMKP2].y))
							{
								MOVMKP2 = false;
							}
						}
						if(POSMKP2 < 4)
						{
							if((KingP[0].x == KntG[POSMKP2].x + 100 && KingP[0].y == KntG[POSMKP2].y) ||
							(KingP[0].x == KntP[POSMKP2].x + 100 && KingP[0].y == KntP[POSMKP2].y))
							{
								MOVMKP2 = false;
							}
						}
						
						if(POSMKP2 < 8)
						{
							if((KingP[0].x == TreeA.x + 50 && KingP[0].y == TreeA.y)||
							(KingP[0].x == TreeB.x + 50 && KingP[0].y == TreeB.y)||
							(KingP[0].x == TreeC.x + 50 && KingP[0].y == TreeC.y)||
							(KingP[0].x == TreeD.x + 50 && KingP[0].y == TreeD.y)||
							(KingP[0].x == TreeE.x + 50 && KingP[0].y == TreeE.y)||
							(KingP[0].x == TreeF.x + 50 && KingP[0].y == TreeF.y)||
							(KingP[0].x == TreeA.x + 100 && KingP[0].y == TreeA.y)||
							(KingP[0].x == TreeB.x + 100 && KingP[0].y == TreeB.y)||
							(KingP[0].x == TreeC.x + 100 && KingP[0].y == TreeC.y)||
							(KingP[0].x == TreeD.x + 100 && KingP[0].y == TreeD.y)||
							(KingP[0].x == TreeE.x + 100 && KingP[0].y == TreeE.y)||
							(KingP[0].x == TreeF.x + 100 && KingP[0].y == TreeF.y))
							{
								MOVMKP2 = false;
							}
							
							if((KingP[0].x == LancerP[POSMKP2].x + 100 && KingP[0].y == LancerP[POSMKP2].y)||
							(KingP[0].x == ArcP[POSMKP2].x + 100 && KingP[0].y == ArcP[POSMKP2].y) ||
							(KingP[0].x == ArcG[POSMKP2].x + 100 && KingP[0].y == ArcG[POSMKP2].y) ||
							(KingP[0].x == LancerG[POSMKP2].x + 100 && KingP[0].y == LancerG[POSMKP2].y))
							{
								MOVMKP2 = false;
							}
						}
					}
					
					{//Contador 3
						if(POSMKP3 < 8)
						{
							if((KingP[0].x == TreeA.x - 50 && KingP[0].y == TreeA.y)||
							(KingP[0].x == TreeB.x - 50 && KingP[0].y == TreeB.y)||
							(KingP[0].x == TreeC.x - 50 && KingP[0].y == TreeC.y)||
							(KingP[0].x == TreeD.x - 50 && KingP[0].y == TreeD.y)||
							(KingP[0].x == TreeE.x - 50 && KingP[0].y == TreeE.y)||
							(KingP[0].x == TreeF.x - 50 && KingP[0].y == TreeF.y))
							{
								MOVMKP3 = false;
							}
							
							if((KingP[0].x == LancerP[POSMKP3].x - 50 && KingP[0].y == LancerP[POSMKP3].y)||
							(KingP[0].x == ArcP[POSMKP3].x - 50 && KingP[0].y == ArcP[POSMKP3].y) ||
							(KingP[0].x == ArcG[POSMKP3].x - 50 && KingP[0].y == ArcG[POSMKP3].y) ||
							(KingP[0].x == LancerG[POSMKP3].x - 50 && KingP[0].y == LancerG[POSMKP3].y))
							{
								MOVMKP3 = false;
							}
						}
						
						if(POSMKP3 < 4)
						{
							if((KingP[0].x == KntG[POSMKP3].x - 50 && KingP[0].y == KntG[POSMKP3].y) ||
							(KingP[0].x == KntP[POSMKP3].x - 50 && KingP[0].y == KntP[POSMKP3].y))
							{
								MOVMKP3 = false;
							}
						}
						if(POSMKP3 < 2)
						{
							if((KingP[0].x == TorG[POSMKP3].x - 50 && KingP[0].y == TorG[POSMKP3].y)||
							(KingP[0].x == TorP[POSMKP3].x - 50 && KingP[0].y == TorP[POSMKP3].y))
							{
								MOVMKP3 = false;
							}
						}
						if(POSMKP3 < 1)
						{
							if((KingP[0].x == GnrlP[POSMKP3].x - 50 && KingP[0].y == GnrlP[POSMKP3].y) ||
							(KingP[0].x == GnrlG[POSMKP3].x - 50 && KingP[0].y == GnrlG[POSMKP3].y) ||
							(KingP[0].x == KingG[POSMKP3].x - 50 && KingP[0].y == KingG[POSMKP3].y))
							{
								MOVMKP3 = false;
							}
						}
					}
					
					{//Contador 4
						if(POSMKP4 < 8)
						{
							if((KingP[0].x == TreeA.x - 50 && KingP[0].y == TreeA.y)||
							(KingP[0].x == TreeB.x - 50 && KingP[0].y == TreeB.y)||
							(KingP[0].x == TreeC.x - 50 && KingP[0].y == TreeC.y)||
							(KingP[0].x == TreeD.x - 50 && KingP[0].y == TreeD.y)||
							(KingP[0].x == TreeE.x - 50 && KingP[0].y == TreeE.y)||
							(KingP[0].x == TreeF.x - 50 && KingP[0].y == TreeF.y)||
							(KingP[0].x == TreeA.x - 100 && KingP[0].y == TreeA.y)||
							(KingP[0].x == TreeB.x - 100 && KingP[0].y == TreeB.y)||
							(KingP[0].x == TreeC.x - 100 && KingP[0].y == TreeC.y)||
							(KingP[0].x == TreeD.x - 100 && KingP[0].y == TreeD.y)||
							(KingP[0].x == TreeE.x - 100 && KingP[0].y == TreeE.y)||
							(KingP[0].x == TreeF.x - 100 && KingP[0].y == TreeF.y))
							{
								MOVMKP4 = false;
							}
							
							if((KingP[0].x == LancerP[POSMKP4].x - 100 && KingP[0].y == LancerP[POSMKP4].y)||
							(KingP[0].x == ArcP[POSMKP4].x - 100 && KingP[0].y == ArcP[POSMKP4].y) ||
							(KingP[0].x == ArcG[POSMKP4].x - 100 && KingP[0].y == ArcG[POSMKP4].y) ||
							(KingP[0].x == LancerG[POSMKP4].x - 100 && KingP[0].y == LancerG[POSMKP4].y))
							{
								MOVMKP4 = false;
							}
						}
						
						if(POSMKP4 < 4)
						{
							if((KingP[0].x == KntG[POSMKP4].x - 100 && KingP[0].y == KntG[POSMKP4].y) ||
							(KingP[0].x == KntP[POSMKP4].x - 100 && KingP[0].y == KntP[POSMKP4].y))
							{
								MOVMKP4 = false;
							}
						}
						if(POSMKP4 < 2)
						{
							if((KingP[0].x == TorG[POSMKP4].x - 100 && KingP[0].y == TorG[POSMKP4].y)||
							(KingP[0].x == TorP[POSMKP4].x - 100 && KingP[0].y == TorP[POSMKP4].y))
							{
								MOVMKP4 = false;
							}
						}
						if(POSMKP4 < 1)
						{
							if((KingP[0].x == GnrlP[POSMKP4].x - 100 && KingP[0].y == GnrlP[POSMKP4].y) ||
							(KingP[0].x == GnrlG[POSMKP4].x - 100 && KingP[0].y == GnrlG[POSMKP4].y) ||
							(KingP[0].x == KingG[POSMKP4].x - 100 && KingP[0].y == KingG[POSMKP4].y))
							{
								MOVMKP4 = false;
							}
						}
					}
					
					{//Contador 5
						if(POSMKP5 < 8)
						{
							if((KingP[0].x == TreeA.x && KingP[0].y == TreeA.y - 50)||
							(KingP[0].x == TreeB.x && KingP[0].y == TreeB.y - 50)||
							(KingP[0].x == TreeC.x && KingP[0].y == TreeC.y - 50)||
							(KingP[0].x == TreeD.x && KingP[0].y == TreeD.y - 50)||
							(KingP[0].x == TreeE.x && KingP[0].y == TreeE.y - 50)||
							(KingP[0].x == TreeF.x && KingP[0].y == TreeF.y - 50))
							{
								MOVMKP5 = false;
							}
							
							if((KingP[0].x == LancerP[POSMKP5].x  && KingP[0].y == LancerP[POSMKP5].y - 50)||
							(KingP[0].x == ArcP[POSMKP5].x  && KingP[0].y == ArcP[POSMKP5].y - 50) ||
							(KingP[0].x == ArcG[POSMKP5].x  && KingP[0].y == ArcG[POSMKP5].y - 50) ||
							(KingP[0].x == LancerG[POSMKP5].x && KingP[0].y == LancerG[POSMKP5].y - 50))
							{
								MOVMKP5 = false;
							}
						}
						
						if(POSMKP5 < 4)
						{
							if((KingP[0].x == KntG[POSMKP5].x  && KingP[0].y == KntG[POSMKP5].y - 50) ||
							(KingP[0].x == KntP[POSMKP5].x  && KingP[0].y == KntP[POSMKP5].y - 50))
							{
								MOVMKP5 = false;
							}
						}
						if(POSMKP5 < 2)
						{
							if((KingP[0].x == TorG[POSMKP5].x  && KingP[0].y == TorG[POSMKP5].y - 50)||
							(KingP[0].x == TorP[POSMKP5].x  && KingP[0].y == TorP[POSMKP5].y - 50))
							{
								MOVMKP5 = false;
							}
						}
						
						if(POSMKP5 < 1)
						{
							if((KingP[0].x == GnrlP[POSMKP5].x  && KingP[0].y == GnrlP[POSMKP5].y - 50) ||
							(KingP[0].x == GnrlG[POSMKP5].x  && KingP[0].y == GnrlG[POSMKP5].y - 50) ||
							(KingP[0].x == KingG[POSMKP5].x  && KingP[0].y == KingG[POSMKP5].y - 50))
							{
								MOVMKP5 = false;
							}
						}
					}
					
					{//Contador 6
						
						if(POSMKP6 < 8)
						{
							if((KingP[0].x == TreeA.x && KingP[0].y == TreeA.y - 100)||
							(KingP[0].x == TreeB.x && KingP[0].y == TreeB.y - 100)||
							(KingP[0].x == TreeC.x && KingP[0].y == TreeC.y - 100)||
							(KingP[0].x == TreeD.x && KingP[0].y == TreeD.y - 100)||
							(KingP[0].x == TreeE.x && KingP[0].y == TreeE.y - 100)||
							(KingP[0].x == TreeF.x && KingP[0].y == TreeF.y - 100)||
							(KingP[0].x == TreeA.x && KingP[0].y == TreeA.y - 50)||
							(KingP[0].x == TreeB.x && KingP[0].y == TreeB.y - 50)||
							(KingP[0].x == TreeC.x && KingP[0].y == TreeC.y - 50)||
							(KingP[0].x == TreeD.x && KingP[0].y == TreeD.y - 50)||
							(KingP[0].x == TreeE.x && KingP[0].y == TreeE.y - 50)||
							(KingP[0].x == TreeF.x && KingP[0].y == TreeF.y - 50))
							{
								MOVMKP6 = false;
							}
							
							if((KingP[0].x == LancerP[POSMKP6].x  && KingP[0].y == LancerP[POSMKP6].y - 100)||
							(KingP[0].x == ArcP[POSMKP6].x  && KingP[0].y == ArcP[POSMKP6].y - 100) ||
							(KingP[0].x == ArcG[POSMKP6].x  && KingP[0].y == ArcG[POSMKP6].y - 100) ||
							(KingP[0].x == LancerG[POSMKP6].x && KingP[0].y == LancerG[POSMKP6].y - 100))
							{
								MOVMKP6 = false;
							}
						}
						
						if(POSMKP6 < 4)
						{
							if((KingP[0].x == KntG[POSMKP6].x  && KingP[0].y == KntG[POSMKP6].y - 100) ||
							(KingP[0].x == KntP[POSMKP6].x  && KingP[0].y == KntP[POSMKP6].y - 100))
							{
								MOVMKP6 = false;
							}
						}
						if(POSMKP6 < 2)
						{
							if((KingP[0].x == TorG[POSMKP6].x  && KingP[0].y == TorG[POSMKP6].y - 100)||
							(KingP[0].x == TorP[POSMKP6].x  && KingP[0].y == TorP[POSMKP6].y - 100))
							{
								MOVMKP6 = false;
							}
						}
						
						if(POSMKP6 < 1)
						{
							if((KingP[0].x == GnrlP[POSMKP6].x  && KingP[0].y == GnrlP[POSMKP6].y - 100) ||
							(KingP[0].x == GnrlG[POSMKP6].x  && KingP[0].y == GnrlG[POSMKP6].y - 100) ||
							(KingP[0].x == KingG[POSMKP6].x  && KingP[0].y == KingG[POSMKP6].y - 100))
							{
								MOVMKP6 = false;
							}
						}
					}
					
					if(KingsPCC == 1)
					{
						if(KingP[0].x > 1)
						{
							if(KingsPCC != 2 && KingsPCC != 3 && KingsPCC != 4 && KingsPCC != 5 && KingsPCC != 6)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMKP1 == null)
									{
										MOVMKP1 = true;
									}
									if(MOVMKP1)
									{	
										POSMKP1 += 1;
									}
									if(POSMKP1 > 10)
									{
										if(Mov1KP == false)
										{
											Mov1KP = true;
										}
									}	
									if(MOVMKP1 == false)
									{
										KingsPCC = 2;
									}
								}
							}
						}
						else
						{
							MOVMKP1 = false;
							KingsPCC = 2;
						}
					}
					if(KingsPCC == 2)
					{
						if(KingP[0].x > 51)
						{
							if(KingsPCC != 1 && KingsPCC != 3 && KingsPCC != 4 && KingsPCC != 5 && KingsPCC != 6)
							{
								
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMKP2 == null)
									{
										MOVMKP2 = true;
									}
									
									if(MOVMKP2)
									{	
										POSMKP2 += 1;
										if(POSMKP2 > 10)
										{
											if(Mov2KP == false)
											{
												Mov2KP = true;
											}
										}	
									}
									if(MOVMKP2 == false)
									{
										KingsPCC = 3;
									}
								}
								
							}						
						}
						else
						{
							MOVMKP2 = false;
							KingsPCC = 3;
						}
					}
					if(KingsPCC == 3)
					{	
						if(KingP[0].x < 551)
						{
							if(KingsPCC != 1 && KingsPCC != 2 && KingsPCC != 4 && KingsPCC != 5 && KingsPCC != 6)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMKP3 == null)
									{
										MOVMKP3 = true;
									}
									if(MOVMKP3)
									{	
										POSMKP3 += 1;
										if(POSMKP3 > 10)
										{
											if(Mov3KP == false)
											{
												Mov3KP = true;
											}
											
										}	
									}
									if(MOVMKP3 == false)
									{
										KingsPCC = 4;
									}
								}
							}
						}
						else
						{
							MOVMKP3 = false;
							KingsPCC = 4;
						}
					}
					if(KingsPCC == 4)
					{
						if(KingP[0].x < 501)
						{
							if(KingsPCC != 1 && KingsPCC != 2 && KingsPCC != 3 && KingsPCC != 5 && KingsPCC != 6)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMKP4 == null)
									{
										MOVMKP4 = true;
									}
									if(MOVMKP4)
									{	
										POSMKP4 += 1;
										
									}
									if(POSMKP4 > 10)
									{
										if(Mov4KP == false)
										{
											Mov4KP = true;
										}
									}	
									if(MOVMKP4 == false)
									{
										KingsPCC = 5;
									}
								}
							}
						}
						else
						{
							MOVMKP4 = false;
							KingsPCC = 5;
						}
					}
					if(KingsPCC == 5)
					{
						if(KingP[0].y < 551)
						{
							if(KingsPCC != 1 && KingsPCC != 2 && KingsPCC != 3 && KingsPCC != 4 && KingsPCC != 6)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMKP5 == null)
									{
										MOVMKP5 = true;
									}
									if(MOVMKP5)
									{	
										POSMKP5 += 1;
										
									}
									if(POSMKP5 > 10)
									{
										if(Mov5KP == false)
										{
											Mov5KP = true;
										}
									
									}	
									if(MOVMKP5 == false)
									{
										KingsPCC = 6;
									}
								}
							}
						}
						else
						{
							MOVMKP5 = false;
							KingsPCC = 6;
						}
					}
					if(KingsPCC == 6)
					{
						if(KingP[0].y < 501)
						{
							if(KingsPCC != 1 && KingsPCC != 2 && KingsPCC != 3 && KingsPCC != 4 && KingsPCC != 5)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMKP6 == null)
									{
										MOVMKP6 = true;
									}
									if(MOVMKP6)
									{	
										POSMKP6 += 1;
										
									}	
									if(POSMKP6 > 10)
									{
										if(Mov6KP == false)
										{
											Mov6KP = true;
										}
										
									}	
									if(MOVMKP6 == false)
									{
										KingsPCC = 1;
									}
								}
							}
						}
						else
						{
							MOVMKP6 = false;
							KingsPCC = 1;
						}
					}
					if(MOVMKP1 == false && MOVMKP2 == false && MOVMKP3 == false && MOVMKP4 == false && MOVMKP5 == false && MOVMKP6 == false)
					{
						CountTime = 100;
						ChooseP = Math.floor(randomRange(0,5));
						KingsPCC = 0;
						Mov1KP = false;
						Mov2KP = false;
						Mov3KP = false;
						Mov4KP = false;
						Mov5KP = false;
						Mov6KP = false;
						MOVMKP1 = null;
						MOVMKP2 = null;
						MOVMKP3 = null;
						MOVMKP4 = null;
						MOVMKP5 = null;
						MOVMKP6 = null;
						POSMKP1 = 0;
						POSMKP2 = 0;
						POSMKP3 = 0;
						POSMKP4 = 0;
						POSMKP5 = 0;
						POSMKP6 = 0;
					}
				}
			}
		}
	}
}
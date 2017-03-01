var KntGIA = true; 
var KntsPCC = 0;
var moverC;
var CountTime = 100;
var KntPMove = false;
var CMC = 0;
var KntsPCChoosed = null;
var MOVMCP1 = null;
var MOVMCP2 = null;
var POSMCP1 = 0;
var POSMCP2 = 0;
var ChooseKP = 0;
var Mov1CP = false;
var Mov2CP = false;


function PossibilitiesAICP()
{
	
	if(AIP)
	{	
		if(Vez_Persas)
		{
			ChooseKP = Math.floor(randomRange(0,99));
			if(KntsPCChoosed == null && ChooseKP <= 75)
			{
				if(KntP[0].y < KntP[1].y && KntP[0].y < KntP[2].y && KntP[0].y < KntP[3].y)
				{
					KntsPCChoosed = 0;
				}
				else if(KntP[1].y < KntP[0].y && KntP[1].y < KntP[2].y && KntP[1].y < KntP[3].y)
				{
					KntsPCChoosed = 1;
				}
				else if(KntP[2].y < KntP[0].y && KntP[2].y < KntP[1].y && KntP[2].y < KntP[2].y)
				{
					KntsPCChoosed = 2;
				}
				else if(KntP[3].y < KntP[0].y && KntP[3].y < KntP[1].y && KntP[3].y < KntP[2].y)
				{
					KntsPCChoosed = 3;
				}
			}
			else if(KntsPCChoosed == null && ChooseKP > 75)
			{
				KntsPCChoosed = Math.floor(randomRange(0,3));
			}
			
			
			if(ChooseP == 4)
			{
				if(KntPMove)
				{	
					moverC = Math.floor(randomRange(1,99))
					
					if(moverC <= 50 && KntsPCC == 0 && KntP[KntsPCChoosed].x > 1 && KntP[KntsPCChoosed].y < 551)
					{
						KntsPCC = 1;
					}
					else if(moverC > 50 && KntsPCC == 0 && KntP[KntsPCChoosed].x < 551 && KntP[KntsPCChoosed].y < 551)
					{
						KntsPCC = 2;
					}
					else
					{
						moverC = Math.floor(randomRange(1,99))
					}
					
					if(Mov1CP)
					{
						Vez_Persas = false;
						Vez_Gregos = true;
						KntP[KntsPCChoosed].x -= 50;
						KntP[KntsPCChoosed].y += 50;
						Mov1CP = false;
						Mov2CP = false;
						POSMCP1 = 0;
						POSMCP2 = 0;
						CMC = 0;
						KntsPCChoosed = null;
						ChooseP = null;
						KntsPCC = 0;
						CountTime = 100;
						
					}
					if(Mov2CP)
					{
						Vez_Persas = false;
						Vez_Gregos = true;
						KntP[KntsPCChoosed].x += 50;
						KntP[KntsPCChoosed].y += 50;
						Mov1CP = false;
						Mov2CP = false;
						POSMCP1 = 0;
						POSMCP2 = 0;
						CMC = 0;
						KntsPCChoosed = null;
						ChooseP = null;
						KntsPCC = 0;
						CountTime = 100;
						
					}
					if(KntsPCC != 0)
					{
						if(KntP[KntsPCChoosed].y > 101)
						{
							context.drawImage(MovC, KntP[KntsPCChoosed].x + 50, KntP[KntsPCChoosed].y - 50, KntP[KntsPCChoosed].w, KntP[KntsPCChoosed].h);	
							context.drawImage(MovC, KntP[KntsPCChoosed].x - 50, KntP[KntsPCChoosed].y - 50, KntP[KntsPCChoosed].w, KntP[KntsPCChoosed].h);								
						}
						if(KntP[KntsPCChoosed].y < 551)
						{
							context.drawImage(MovC, KntP[KntsPCChoosed].x - 50 , KntP[KntsPCChoosed].y + 50, KntP[KntsPCChoosed].w, KntP[KntsPCChoosed].h);	
							context.drawImage(MovC, KntP[KntsPCChoosed].x + 50 , KntP[KntsPCChoosed].y + 50, KntP[KntsPCChoosed].w, KntP[KntsPCChoosed].h);	
						}
					}
					if(CountTime <= 0)
					{
					
						{//Contador 1
							if(POSMCP1 < 1)
							{
								if((KntP[KntsPCChoosed].x == GnrlP[POSMCP1].x + 50 && KntP[KntsPCChoosed].y == GnrlP[POSMCP1].y - 50) ||
								(KntP[KntsPCChoosed].x == KingG[POSMCP1].x + 50 && KntP[KntsPCChoosed].y == KingG[POSMCP1].y - 50)||
								(KntP[KntsPCChoosed].x == KingP[POSMCP1].x + 50 && KntP[KntsPCChoosed].y == KingP[POSMCP1].y - 50)||
								(KntP[KntsPCChoosed].x == GnrlG[POSMCP1].x + 50 && KntP[KntsPCChoosed].y == GnrlG[POSMCP1].y - 50))
								{
									MOVMCP1 = false;
								}
							}
							if(POSMCP1 < 2)
							{
								if((KntP[KntsPCChoosed].x == TorG[POSMCP1].x + 50 && KntP[KntsPCChoosed].y == TorG[POSMCP1].y - 50)||
								(KntP[KntsPCChoosed].x == TorP[POSMCP1].x + 50 && KntP[KntsPCChoosed].y == TorP[POSMCP1].y - 50))
								{
									MOVMCP1 = false;
								}
							}
							if(POSMCP1 < 4)
							{
								if((KntP[KntsPCChoosed].x == KntG[POSMCP1].x + 50 && KntP[KntsPCChoosed].y == KntG[POSMCP1].y - 50))
								{
									MOVMCP1 = false;
								}
							}
							
							if(POSMCP1 < 8)
							{
								if((KntP[KntsPCChoosed].x == TreeA.x + 50 && KntP[KntsPCChoosed].y == TreeA.y - 50)||
								(KntP[KntsPCChoosed].x == TreeB.x + 50 && KntP[KntsPCChoosed].y == TreeB.y - 50)||
								(KntP[KntsPCChoosed].x == TreeC.x + 50 && KntP[KntsPCChoosed].y == TreeC.y - 50)||
								(KntP[KntsPCChoosed].x == TreeD.x + 50 && KntP[KntsPCChoosed].y == TreeD.y - 50)||
								(KntP[KntsPCChoosed].x == TreeE.x + 50 && KntP[KntsPCChoosed].y == TreeE.y - 50)||
								(KntP[KntsPCChoosed].x == TreeF.x + 50 && KntP[KntsPCChoosed].y == TreeF.y - 50))
								{
									MOVMCP1 = false;
								}
								
								if((KntP[KntsPCChoosed].x == LancerP[POSMCP1].x + 50 && KntP[KntsPCChoosed].y == LancerP[POSMCP1].y - 50)||
								(KntP[KntsPCChoosed].x == ArcP[POSMCP1].x + 50 && KntP[KntsPCChoosed].y == ArcP[POSMCP1].y - 50) ||
								(KntP[KntsPCChoosed].x == ArcG[POSMCP1].x + 50 && KntP[KntsPCChoosed].y == ArcG[POSMCP1].y - 50) ||
								(KntP[KntsPCChoosed].x == LancerG[POSMCP1].x + 50 && KntP[KntsPCChoosed].y == LancerG[POSMCP1].y - 50))
								{
									MOVMCP1 = false;
								}
							}	
						}
						
						{//Contador 2
								if(POSMCP2 < 1)
								{
									if((KntP[KntsPCChoosed].x == GnrlP[POSMCP2].x - 50 && KntP[KntsPCChoosed].y == GnrlP[POSMCP2].y - 50) ||
									(KntP[KntsPCChoosed].x == KingG[POSMCP2].x - 50 && KntP[KntsPCChoosed].y == KingG[POSMCP2].y - 50)||
									(KntP[KntsPCChoosed].x == KingP[POSMCP2].x - 50 && KntP[KntsPCChoosed].y == KingP[POSMCP2].y - 50)||
									(KntP[KntsPCChoosed].x == GnrlG[POSMCP2].x - 50 && KntP[KntsPCChoosed].y == GnrlG[POSMCP2].y - 50))
									{
										MOVMCP2 = false;
									}
								}
								if(POSMCP2 < 2)
								{
									if((KntP[KntsPCChoosed].x == TorG[POSMCP2].x - 50 && KntP[KntsPCChoosed].y == TorG[POSMCP2].y - 50)||
									(KntP[KntsPCChoosed].x == TorP[POSMCP2].x - 50 && KntP[KntsPCChoosed].y == TorP[POSMCP2].y - 50))
									{
										MOVMCP2 = false;
									}
								}
								if(POSMCP2 < 4)
								{
									if((KntP[KntsPCChoosed].x == KntG[POSMCP2].x - 50 && KntP[KntsPCChoosed].y == KntG[POSMCP2].y - 50))
									{
										MOVMCP2 = false;
									}
								}
								
								if(POSMCP2 < 8)
								{
									if((KntP[KntsPCChoosed].x == TreeA.x - 50 && KntP[KntsPCChoosed].y == TreeA.y - 50)||
									(KntP[KntsPCChoosed].x == TreeB.x - 50 && KntP[KntsPCChoosed].y == TreeB.y - 50)||
									(KntP[KntsPCChoosed].x == TreeC.x - 50 && KntP[KntsPCChoosed].y == TreeC.y - 50)||
									(KntP[KntsPCChoosed].x == TreeD.x - 50 && KntP[KntsPCChoosed].y == TreeD.y - 50)||
									(KntP[KntsPCChoosed].x == TreeE.x - 50 && KntP[KntsPCChoosed].y == TreeE.y - 50)||
									(KntP[KntsPCChoosed].x == TreeF.x - 50 && KntP[KntsPCChoosed].y == TreeF.y - 50))
									{
										MOVMCP2 = false;
									}
									
									if((KntP[KntsPCChoosed].x == LancerP[POSMCP2].x - 50 && KntP[KntsPCChoosed].y == LancerP[POSMCP2].y - 50)||
									(KntP[KntsPCChoosed].x == ArcP[POSMCP2].x - 50 && KntP[KntsPCChoosed].y == ArcP[POSMCP2].y - 50) ||
									(KntP[KntsPCChoosed].x == ArcG[POSMCP2].x - 50 && KntP[KntsPCChoosed].y == ArcG[POSMCP2].y - 50) ||
									(KntP[KntsPCChoosed].x == LancerG[POSMCP2].x - 50 && KntP[KntsPCChoosed].y == LancerG[POSMCP2].y - 50))
									{
										MOVMCP2 = false;
									}
								}	
						}
						
					}
					if(KntsPCC == 1)
					{
						if(KntP[KntsPCChoosed].x > 1 && KntP[KntsPCChoosed].y < 551)
						{
							if(KntsPCC != 2)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMCP1 == null)
									{
										MOVMCP1 = true;
									}
									else if(MOVMCP1)
									{	
										POSMCP1 += 1;
										if(POSMCP1 > 10)
										{
											if(Mov1CP == false)
											{
												Mov1CP = true;
											}
										}									
									}
									else if(MOVMCP1 == false)
									{
										KntsPCC = 2;
									}
								}
								
							}						
						}
						else
						{
							MOVMCP1 = false;
							KntsPCC = 2;
						}
					}
					if(KntsPCC == 2)
					{
						if(KntP[KntsPCChoosed].x < 551 && KntP[KntsPCChoosed].y < 551)
						{
							if(KntsPCC != 1)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMCP2 == null)
									{
										MOVMCP2 = true;
									}
									else if(MOVMCP2)
									{	
										POSMCP2 += 1;
										if(POSMCP2 > 10)
										{
											if(Mov2CP == false)
											{
												Mov2CP = true;
											}
										}	
									}
									
									else if(MOVMCP2 == false)
									{
										KntsPCC = 1;
									}
								}
							}
						}
						else
						{
							MOVMCP2 = false;
							KntsPCC = 1;
						}
					}
				}
			}
		}
	}
}

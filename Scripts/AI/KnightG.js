var KntGIA = true; 
var KntsGCC = 0;
var moverC;
var CountTime = 100;
var KntGMove = false;
var CMC = 0;
var KntsGCChoosed = null;
var MOVMCG1 = null;
var MOVMCG2 = null;
var POSMCG1 = 0;
var POSMCG2 = 0;
var ChooseKG = 0;
var Mov1CG = false;
var Mov2CG = false;


function PossibilitiesAICG()
{
	
	if(AIG)
	{	
		if(Vez_Gregos)
		{
			ChooseKG = Math.floor(randomRange(0,99));
			if(KntsGCChoosed == null && ChooseKG <= 75)
			{
				if(KntG[0].y < KntG[1].y && KntG[0].y < KntG[2].y && KntG[0].y < KntG[3].y)
				{
					KntsGCChoosed = 0;
				}
				else if(KntG[1].y < KntG[0].y && KntG[1].y < KntG[2].y && KntG[1].y < KntG[3].y)
				{
					KntsGCChoosed = 1;
				}
				else if(KntG[2].y < KntG[0].y && KntG[2].y < KntG[1].y && KntG[2].y < KntG[2].y)
				{
					KntsGCChoosed = 2;
				}
				else if(KntG[3].y < KntG[0].y && KntG[3].y < KntG[1].y && KntG[3].y < KntG[2].y)
				{
					KntsGCChoosed = 3;
				}
			}
			else if(KntsGCChoosed == null && ChooseKG > 75)
			{
				KntsGCChoosed = Math.floor(randomRange(0,3));
			}
			
			
			if(ChooseG == 4)
			{
				if(KntGMove)
				{	
					moverC = Math.floor(randomRange(1,99))
					
					if(moverC <= 50 && KntsGCC == 0 && KntG[KntsGCChoosed].x > 1 && KntG[KntsGCChoosed].y > 101)
					{
						KntsGCC = 1;
					}
					else if(moverC > 50 && KntsGCC == 0 && KntG[KntsGCChoosed].x < 551 && KntG[KntsGCChoosed].y > 101)
					{
						KntsGCC = 2;
					}
					else
					{
						moverC = Math.floor(randomRange(1,99))
					}
					
					if(Mov1CG)
					{
						Vez_Gregos = false;
						Vez_Persas = true;
						KntG[KntsGCChoosed].x -= 50;
						KntG[KntsGCChoosed].y -= 50;
						Mov1CG = false;
						Mov2CG = false;
						POSMCG1 = 0;
						POSMCG2 = 0;
						CMC = 0;
						KntsGCChoosed = null;
						ChooseG = null;
						KntsGCC = 0;
						CountTime = 100;
						
					}
					if(Mov2CG)
					{
						Vez_Gregos = false;
						Vez_Persas = true;
						KntG[KntsGCChoosed].x += 50;
						KntG[KntsGCChoosed].y -= 50;
						Mov1CG = false;
						Mov2CG = false;
						POSMCG1 = 0;
						POSMCG2 = 0;
						CMC = 0;
						KntsGCChoosed = null;
						ChooseG = null;
						KntsGCC = 0;
						CountTime = 100;
						
					}
					if(KntsGCC != 0)
					{
						if(KntG[KntsGCChoosed].y > 101)
						{
							context.drawImage(MovC, KntG[KntsGCChoosed].x + 50, KntG[KntsGCChoosed].y - 50, KntG[KntsGCChoosed].w, KntG[KntsGCChoosed].h);	
							context.drawImage(MovC, KntG[KntsGCChoosed].x - 50, KntG[KntsGCChoosed].y -50, KntG[KntsGCChoosed].w, KntG[KntsGCChoosed].h);								
						}
						if(KntG[KntsGCChoosed].y < 551)
						{
							context.drawImage(MovC, KntG[KntsGCChoosed].x - 50 , KntG[KntsGCChoosed].y + 50, KntG[KntsGCChoosed].w, KntG[KntsGCChoosed].h);	
							context.drawImage(MovC, KntG[KntsGCChoosed].x + 50 , KntG[KntsGCChoosed].y + 50, KntG[KntsGCChoosed].w, KntG[KntsGCChoosed].h);	
						}
					}
					if(CountTime <= 0)
					{
					
						{//Contador 1
							if(POSMCG1 < 1)
							{
								if((KntG[KntsGCChoosed].x == GnrlP[POSMCG1].x + 50 && KntG[KntsGCChoosed].y == GnrlP[POSMCG1].y + 50) ||
								(KntG[KntsGCChoosed].x == KingG[POSMCG1].x + 50 && KntG[KntsGCChoosed].y == KingG[POSMCG1].y + 50)||
								(KntG[KntsGCChoosed].x == KingP[POSMCG1].x + 50 && KntG[KntsGCChoosed].y == KingP[POSMCG1].y + 50)||
								(KntG[KntsGCChoosed].x == GnrlG[POSMCG1].x + 50 && KntG[KntsGCChoosed].y == GnrlG[POSMCG1].y + 50))
								{
									MOVMCG1 = false;
								}
							}
							if(POSMCG1 < 2)
							{
								if((KntG[KntsGCChoosed].x == TorG[POSMCG1].x + 50 && KntG[KntsGCChoosed].y == TorG[POSMCG1].y + 50)||
								(KntG[KntsGCChoosed].x == TorP[POSMCG1].x + 50 && KntG[KntsGCChoosed].y == TorP[POSMCG1].y + 50))
								{
									MOVMCG1 = false;
								}
							}
							if(POSMCG1 < 4)
							{
								if((KntG[KntsGCChoosed].x == KntP[POSMCG1].x + 50 && KntG[KntsGCChoosed].y == KntP[POSMCG1].y + 50))
								{
									MOVMCG1 = false;
								}
							}
							
							if(POSMCG1 < 8)
							{
								if((KntG[KntsGCChoosed].x == TreeA.x + 50 && KntG[KntsGCChoosed].y == TreeA.y + 50)||
								(KntG[KntsGCChoosed].x == TreeB.x + 50 && KntG[KntsGCChoosed].y == TreeB.y + 50)||
								(KntG[KntsGCChoosed].x == TreeC.x + 50 && KntG[KntsGCChoosed].y == TreeC.y + 50)||
								(KntG[KntsGCChoosed].x == TreeD.x + 50 && KntG[KntsGCChoosed].y == TreeD.y + 50)||
								(KntG[KntsGCChoosed].x == TreeE.x + 50 && KntG[KntsGCChoosed].y == TreeE.y + 50)||
								(KntG[KntsGCChoosed].x == TreeF.x + 50 && KntG[KntsGCChoosed].y == TreeF.y + 50))
								{
									MOVMCG1 = false;
								}
								
								if((KntG[KntsGCChoosed].x == LancerP[POSMCG1].x + 50 && KntG[KntsGCChoosed].y == LancerP[POSMCG1].y + 50)||
								(KntG[KntsGCChoosed].x == ArcP[POSMCG1].x + 50 && KntG[KntsGCChoosed].y == ArcP[POSMCG1].y + 50) ||
								(KntG[KntsGCChoosed].x == ArcG[POSMCG1].x + 50 && KntG[KntsGCChoosed].y == ArcG[POSMCG1].y + 50) ||
								(KntG[KntsGCChoosed].x == LancerG[POSMCG1].x + 50 && KntG[KntsGCChoosed].y == LancerG[POSMCG1].y + 50))
								{
									MOVMCG1 = false;
								}
							}	
						}
						
						{//Contador 2
								if(POSMCG2 < 1)
								{
									if((KntG[KntsGCChoosed].x == GnrlP[POSMCG2].x - 50 && KntG[KntsGCChoosed].y == GnrlP[POSMCG2].y + 50) ||
									(KntG[KntsGCChoosed].x == KingG[POSMCG2].x - 50 && KntG[KntsGCChoosed].y == KingG[POSMCG2].y + 50)||
									(KntG[KntsGCChoosed].x == KingP[POSMCG2].x - 50 && KntG[KntsGCChoosed].y == KingP[POSMCG2].y + 50)||
									(KntG[KntsGCChoosed].x == GnrlG[POSMCG2].x - 50 && KntG[KntsGCChoosed].y == GnrlG[POSMCG2].y + 50))
									{
										MOVMCG2 = false;
									}
								}
								if(POSMCG2 < 2)
								{
									if((KntG[KntsGCChoosed].x == TorG[POSMCG2].x - 50 && KntG[KntsGCChoosed].y == TorG[POSMCG2].y + 50)||
									(KntG[KntsGCChoosed].x == TorP[POSMCG2].x - 50 && KntG[KntsGCChoosed].y == TorP[POSMCG2].y + 50))
									{
										MOVMCG2 = false;
									}
								}
								if(POSMCG2 < 4)
								{
									if((KntG[KntsGCChoosed].x == KntP[POSMCG2].x - 50 && KntG[KntsGCChoosed].y == KntP[POSMCG2].y + 50))
									{
										MOVMCG2 = false;
									}
								}
								
								if(POSMCG2 < 8)
								{
									if((KntG[KntsGCChoosed].x == TreeA.x - 50 && KntG[KntsGCChoosed].y == TreeA.y + 50)||
									(KntG[KntsGCChoosed].x == TreeB.x - 50 && KntG[KntsGCChoosed].y == TreeB.y + 50)||
									(KntG[KntsGCChoosed].x == TreeC.x - 50 && KntG[KntsGCChoosed].y == TreeC.y + 50)||
									(KntG[KntsGCChoosed].x == TreeD.x - 50 && KntG[KntsGCChoosed].y == TreeD.y + 50)||
									(KntG[KntsGCChoosed].x == TreeE.x - 50 && KntG[KntsGCChoosed].y == TreeE.y + 50)||
									(KntG[KntsGCChoosed].x == TreeF.x - 50 && KntG[KntsGCChoosed].y == TreeF.y + 50))
									{
										MOVMCG2 = false;
									}
									
									if((KntG[KntsGCChoosed].x == LancerP[POSMCG2].x - 50 && KntG[KntsGCChoosed].y == LancerP[POSMCG2].y + 50)||
									(KntG[KntsGCChoosed].x == ArcP[POSMCG2].x - 50 && KntG[KntsGCChoosed].y == ArcP[POSMCG2].y + 50) ||
									(KntG[KntsGCChoosed].x == ArcG[POSMCG2].x - 50 && KntG[KntsGCChoosed].y == ArcG[POSMCG2].y + 50) ||
									(KntG[KntsGCChoosed].x == LancerG[POSMCG2].x - 50 && KntG[KntsGCChoosed].y == LancerG[POSMCG2].y + 50))
									{
										MOVMCG2 = false;
									}
								}	
						}
						
					}
					if(KntsGCC == 1)
					{
						if(KntG[KntsGCChoosed].x > 1 && KntG[KntsGCChoosed].y > 101)
						{
							if(KntsGCC != 2)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMCG1 == null)
									{
										MOVMCG1 = true;
									}
									else if(MOVMCG1)
									{	
										POSMCG1 += 1;
										if(POSMCG1 > 10)
										{
											if(Mov1CG == false)
											{
												Mov1CG = true;
											}
										}									
									}
									else if(MOVMCG1 == false)
									{
										KntsGCC = 2;
									}
								}
								
							}						
						}
						else
						{
							MOVMCG1 = false;
							KntsGCC = 2;
						}
					}
					if(KntsGCC == 2)
					{
						if(KntG[KntsGCChoosed].x < 551 && KntG[KntsGCChoosed].y > 101)
						{
							if(KntsGCC != 1)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMCG2 == null)
									{
										MOVMCG2 = true;
									}
									else if(MOVMCG2)
									{	
										POSMCG2 += 1;
										if(POSMCG2 > 10)
										{
											if(Mov2CG == false)
											{
												Mov2CG = true;
											}
										}	
									}
									
									else if(MOVMCG2 == false)
									{
										KntsGCC = 1;
									}
								}
							}
						}
						else
						{
							MOVMCG2 = false;
							KntsGCC = 1;
						}
					}
				}
			}
		}
	}
}

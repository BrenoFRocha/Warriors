var ArcGIA = true; 
var ArcsGCC = 0;
var moverA;
var CountTime = 100;
var ArcGMove = false;
var CMA = 0;
var Mov1AG = false;
var Mov2AG = false;
var Mov3AG = false;
var ChooseAG;
var MOVMAG1 = null;
var MOVMAG2 = null;
var MOVMAG3 = null;

var POSMAG1 = 0;
var POSMAG2 = 0;
var POSMAG3 = 0;

var ArcsGCChoosed = null;

function PossibilitiesAIAG()
{
	if(AIG)
	{	
		if(Vez_Gregos)
		{	
			ChooseAG = Math.floor(randomRange(0,99));
			if(ArcsGCChoosed == null && ChooseAG <= 75)
			{
				if(ArcG[0].y < ArcG[1].y && ArcG[0].y < ArcG[2].y && ArcG[0].y < ArcG[3].y && ArcG[0].y < ArcG[4].y && ArcG[0].y < ArcG[5].y && ArcG[0].y < ArcG[6].y && ArcG[0].y < ArcG[7].y)
				{
					ArcsGCChoosed = 0;
				}
				else if(ArcG[1].y < ArcG[1].y && ArcG[0].y < ArcG[2].y && ArcG[1].y < ArcG[3].y && ArcG[1].y < ArcG[4].y && ArcG[1].y < ArcG[5].y && ArcG[1].y < ArcG[6].y && ArcG[1].y < ArcG[7].y)
				{
					ArcsGCChoosed = 1;
				}
				else if(ArcG[2].y < ArcG[1].y && ArcG[2].y < ArcG[0].y && ArcG[2].y < ArcG[3].y && ArcG[2].y < ArcG[4].y && ArcG[2].y < ArcG[5].y && ArcG[2].y < ArcG[6].y && ArcG[2].y < ArcG[7].y)
				{
					ArcsGCChoosed = 2;
				}
				else if(ArcG[3].y < ArcG[1].y && ArcG[3].y < ArcG[2].y && ArcG[3].y < ArcG[0].y && ArcG[3].y < ArcG[4].y && ArcG[3].y < ArcG[5].y && ArcG[3].y < ArcG[6].y && ArcG[3].y < ArcG[7].y)
				{
					ArcsGCChoosed = 3;
				}
				else if(ArcG[4].y < ArcG[1].y && ArcG[4].y < ArcG[2].y && ArcG[4].y < ArcG[3].y && ArcG[4].y < ArcG[0].y && ArcG[4].y < ArcG[5].y && ArcG[4].y < ArcG[6].y && ArcG[4].y < ArcG[7].y)
				{
					ArcsGCChoosed = 4;
				}
				else if(ArcG[5].y < ArcG[1].y && ArcG[5].y < ArcG[2].y && ArcG[5].y < ArcG[3].y && ArcG[5].y < ArcG[4].y && ArcG[5].y < ArcG[0].y && ArcG[5].y < ArcG[6].y && ArcG[5].y < ArcG[7].y)
				{
					ArcsGCChoosed = 5;
				}
				else if(ArcG[6].y < ArcG[1].y && ArcG[6].y < ArcG[2].y && ArcG[6].y < ArcG[3].y && ArcG[6].y < ArcG[4].y && ArcG[6].y < ArcG[5].y && ArcG[6].y < ArcG[0].y && ArcG[6].y < ArcG[7].y)
				{
					ArcsGCChoosed = 6;
				}
				else if(ArcG[7].y < ArcG[1].y && ArcG[7].y < ArcG[2].y && ArcG[7].y < ArcG[3].y && ArcG[7].y < ArcG[4].y && ArcG[7].y < ArcG[5].y && ArcG[7].y < ArcG[6].y && ArcG[7].y < ArcG[0].y)
				{
					ArcsGCChoosed = 7;
				}
			}
			else if(ArcsGCChoosed == null && ChooseLG > 75)
			{
				ArcsGCChoosed = Math.floor(randomRange(0,7));
			}
			
			if(ChooseG == 3)
			{
				if(ArcGMove)
				{	
					moverA = Math.floor(randomRange(1,99))
					
					if(moverA <= 10 && ArcsGCC == 0 && ArcG[ArcsGCChoosed].x > 1)
					{							
						ArcsGCC = 1;
					}
					else if(moverA > 10 && moverA < 20 && ArcsGCC == 0 && ArcG[ArcsGCChoosed].x < 551)
					{						
						ArcsGCC = 2;
					}
					else if(moverA >= 20 && ArcsGCC == 0  && ArcG[ArcsGCChoosed].y > 101)
					{						
						ArcsGCC = 3;
					}
					else
					{
						moverA = Math.floor(randomRange(1,99))
					}

					if(Mov1AG)
					{
						Vez_Gregos = false;
						Vez_Persas = true;
						ArcG[ArcsGCChoosed].x -= 50;
						Mov1AG = null;
						ChooseG = null;
						ArcsGCC = 0;
						CountTime = 100;
						
						
					}
					
					if(Mov2AG)
					{
						Vez_Gregos = false;
						Vez_Persas = true;
						ArcG[ArcsGCChoosed].x += 50;
						Mov2AG = null;
						ChooseG = null;
						ArcsGCC = 0;
						CountTime = 100;
						
						
					}
					
					if(Mov3AG)
					{
						Vez_Gregos = false;
						Vez_Persas = true;
						Mov3AG = null;
						ArcG[ArcsGCChoosed].y -= 50;
						ChooseG = null;
						ArcsGCC = 0;
						CountTime = 100;
						
						
					}
					
					if(ArcsGCC != 0)
					{
						if(ArcG[ArcsGCChoosed].y > 101)
						{
							context.drawImage(MovL, ArcG[ArcsGCChoosed].x , ArcG[ArcsGCChoosed].y - 50, ArcG[ArcsGCChoosed].w, ArcG[ArcsGCChoosed].h);			
						}
						if(ArcG[ArcsGCChoosed].y < 551)
						{
							context.drawImage(MovL, ArcG[ArcsGCChoosed].x , ArcG[ArcsGCChoosed].y + 50, ArcG[ArcsGCChoosed].w, ArcG[ArcsGCChoosed].h);	
						}
						context.drawImage(MovL, ArcG[ArcsGCChoosed].x + 50 , ArcG[ArcsGCChoosed].y, ArcG[ArcsGCChoosed].w, ArcG[ArcsGCChoosed].h);	
						context.drawImage(MovL, ArcG[ArcsGCChoosed].x - 50, ArcG[ArcsGCChoosed].y, ArcG[ArcsGCChoosed].w, ArcG[ArcsGCChoosed].h);	
					}
					
					{//Contador 1
							if(POSMAG1 < 1)
							{
								if((ArcG[ArcsGCChoosed].x == GnrlP[POSMAG1].x + 50 && ArcG[ArcsGCChoosed].y == GnrlP[POSMAG1].y) ||
								(ArcG[ArcsGCChoosed].x == GnrlG[POSMAG1].x + 50 && ArcG[ArcsGCChoosed].y == GnrlG[POSMAG1].y) ||
								(ArcG[ArcsGCChoosed].x == KingP[POSMAG1].x + 50 && ArcG[ArcsGCChoosed].y == KingP[POSMAG1].y)||
								(ArcG[ArcsGCChoosed].x == KingG[POSMAG1].x + 50 && ArcG[ArcsGCChoosed].y == KingG[POSMAG1].y))
								{
									MOVMAG1 = false;
								}
							}
							if(POSMAG1 < 2)
							{
								if((ArcG[ArcsGCChoosed].x == TorG[POSMAG1].x + 50 && ArcG[ArcsGCChoosed].y == TorG[POSMAG1].y)||
								(ArcG[ArcsGCChoosed].x == TorP[POSMAG1].x + 50 && ArcG[ArcsGCChoosed].y == TorP[POSMAG1].y))
								{
									MOVMAG1 = false;
								}
							}
							if(POSMAG1 < 4)
							{
								if((ArcG[ArcsGCChoosed].x == KntG[POSMAG1].x + 50 && ArcG[ArcsGCChoosed].y == KntG[POSMAG1].y) ||
								(ArcG[ArcsGCChoosed].x == KntP[POSMAG1].x + 50 && ArcG[ArcsGCChoosed].y == KntP[POSMAG1].y))
								{
									MOVMAG1 = false;
								}
							}
							if(POSMAG1 < 8 && POSMAG1 != ArcsGCChoosed)
							{
								if(ArcG[ArcsGCChoosed].x == ArcG[POSMAG1].x + 50 && ArcG[ArcsGCChoosed].y == ArcG[POSMAG1].y)
								{
									MOVMAG1 = false;
								}
							}
							if(POSMAG1 < 8)
							{
								if((ArcG[ArcsGCChoosed].x == TreeA.x + 50 && ArcG[ArcsGCChoosed].y == TreeA.y)||
								(ArcG[ArcsGCChoosed].x == TreeB.x + 50 && ArcG[ArcsGCChoosed].y == TreeB.y)||
								(ArcG[ArcsGCChoosed].x == TreeC.x + 50 && ArcG[ArcsGCChoosed].y == TreeC.y)||
								(ArcG[ArcsGCChoosed].x == TreeD.x + 50 && ArcG[ArcsGCChoosed].y == TreeD.y)||
								(ArcG[ArcsGCChoosed].x == TreeE.x + 50 && ArcG[ArcsGCChoosed].y == TreeE.y)||
								(ArcG[ArcsGCChoosed].x == TreeF.x + 50 && ArcG[ArcsGCChoosed].y == TreeF.y))
								{
									MOVMAG1 = false;
								}
								
								if((ArcG[ArcsGCChoosed].x == LancerP[POSMAG1].x + 50 && ArcG[ArcsGCChoosed].y == LancerP[POSMAG1].y)||
								(ArcG[ArcsGCChoosed].x == ArcP[POSMAG1].x + 50 && ArcG[ArcsGCChoosed].y == ArcP[POSMAG1].y) ||
								(ArcG[ArcsGCChoosed].x == LancerG[POSMAG1].x + 50 && ArcG[ArcsGCChoosed].y == LancerG[POSMAG1].y))
								{
									MOVMAG1 = false;
								}
							}	
						}
							
					{//Contador 2
						if(POSMAG2 < 8)
						{
							if((ArcG[ArcsGCChoosed].x == TreeA.x - 50 && ArcG[ArcsGCChoosed].y == TreeA.y)||
							(ArcG[ArcsGCChoosed].x == TreeB.x - 50 && ArcG[ArcsGCChoosed].y == TreeB.y)||
							(ArcG[ArcsGCChoosed].x == TreeC.x - 50 && ArcG[ArcsGCChoosed].y == TreeC.y)||
							(ArcG[ArcsGCChoosed].x == TreeD.x - 50 && ArcG[ArcsGCChoosed].y == TreeD.y)||
							(ArcG[ArcsGCChoosed].x == TreeE.x - 50 && ArcG[ArcsGCChoosed].y == TreeE.y)||
							(ArcG[ArcsGCChoosed].x == TreeF.x - 50 && ArcG[ArcsGCChoosed].y == TreeF.y))
							{
								MOVMAG2 = false;
							}
							
							if((ArcG[ArcsGCChoosed].x == LancerP[POSMAG2].x - 50 && ArcG[ArcsGCChoosed].y == LancerP[POSMAG2].y)||
							(ArcG[ArcsGCChoosed].x == ArcP[POSMAG2].x - 50 && ArcG[ArcsGCChoosed].y == ArcP[POSMAG2].y) ||
							(ArcG[ArcsGCChoosed].x == LancerG[POSMAG2].x - 50 && ArcG[ArcsGCChoosed].y == LancerG[POSMAG2].y))
							{
								MOVMAG2 = false;
							}
						}
						if(POSMAG2 < 8 && POSMAG2 != ArcsGCChoosed)
						{
							if(ArcG[ArcsGCChoosed].x == ArcG[POSMAG2].x - 50 && ArcG[ArcsGCChoosed].y == ArcG[POSMAG2].y)
							{
								MOVMAG2 = false;
							}
						}
						if(POSMAG2 < 4)
						{
							if((ArcG[ArcsGCChoosed].x == KntG[POSMAG2].x - 50 && ArcG[ArcsGCChoosed].y == KntG[POSMAG2].y) ||
							(ArcG[ArcsGCChoosed].x == KntP[POSMAG2].x - 50 && ArcG[ArcsGCChoosed].y == KntP[POSMAG2].y))
							{
								MOVMAG2 = false;
							}
						}
						if(POSMAG2 < 2)
						{
							if((ArcG[ArcsGCChoosed].x == TorG[POSMAG2].x - 50 && ArcG[ArcsGCChoosed].y == TorG[POSMAG2].y)||
							(ArcG[ArcsGCChoosed].x == TorP[POSMAG2].x - 50 && ArcG[ArcsGCChoosed].y == TorP[POSMAG2].y))
							{
								MOVMAG2 = false;
							}
						}
						if(POSMAG2 < 1)
						{
							if((ArcG[ArcsGCChoosed].x == GnrlP[POSMAG2].x - 50 && ArcG[ArcsGCChoosed].y == GnrlP[POSMAG2].y) ||
							(ArcG[ArcsGCChoosed].x == GnrlG[POSMAG2].x - 50 && ArcG[ArcsGCChoosed].y == GnrlG[POSMAG2].y) ||
							(ArcG[ArcsGCChoosed].x == KingP[POSMAG2].x - 50 && ArcG[ArcsGCChoosed].y == KingP[POSMAG2].y)||
							(ArcG[ArcsGCChoosed].x == KingG[POSMAG2].x - 50 && ArcG[ArcsGCChoosed].y == KingG[POSMAG2].y))
							{
								MOVMAG2 = false;
							}
						}
					}
					
					{//Contador 3
						if(POSMAG3 < 8)
						{
							if((ArcG[ArcsGCChoosed].x == TreeA.x && ArcG[ArcsGCChoosed].y == TreeA.y + 50)||
							(ArcG[ArcsGCChoosed].x == TreeB.x && ArcG[ArcsGCChoosed].y == TreeB.y + 50)||
							(ArcG[ArcsGCChoosed].x == TreeC.x && ArcG[ArcsGCChoosed].y == TreeC.y + 50)||
							(ArcG[ArcsGCChoosed].x == TreeD.x && ArcG[ArcsGCChoosed].y == TreeD.y + 50)||
							(ArcG[ArcsGCChoosed].x == TreeE.x && ArcG[ArcsGCChoosed].y == TreeE.y + 50)||
							(ArcG[ArcsGCChoosed].x == TreeF.x && ArcG[ArcsGCChoosed].y == TreeF.y + 50))
							{
								MOVMAG3 = false;
							}
							
							if((ArcG[ArcsGCChoosed].x == LancerP[POSMAG3].x  && ArcG[ArcsGCChoosed].y == LancerP[POSMAG3].y + 50)||
							(ArcG[ArcsGCChoosed].x == ArcP[POSMAG3].x  && ArcG[ArcsGCChoosed].y == ArcP[POSMAG3].y + 50) ||
							(ArcG[ArcsGCChoosed].x == LancerG[POSMAG3].x && ArcG[ArcsGCChoosed].y == LancerG[POSMAG3].y + 50))
							{
								MOVMAG3 = false;
							}
						}
						
						if(POSMAG3 < 8 && POSMAG3 != ArcsGCChoosed)
						{
							if(ArcG[ArcsGCChoosed].x == ArcG[POSMAG3].x && ArcG[ArcsGCChoosed].y == ArcG[POSMAG3].y + 50)
							{
								MOVMAG3 = false;
							}
						}
						
						if(POSMAG3 < 4)
						{
							if((ArcG[ArcsGCChoosed].x == KntG[POSMAG3].x  && ArcG[ArcsGCChoosed].y == KntG[POSMAG3].y + 50) ||
							(ArcG[ArcsGCChoosed].x == KntP[POSMAG3].x  && ArcG[ArcsGCChoosed].y == KntP[POSMAG3].y + 50))
							{
								MOVMAG3 = false;
							}
						}
						if(POSMAG3 < 2)
						{
							if((ArcG[ArcsGCChoosed].x == TorG[POSMAG3].x  && ArcG[ArcsGCChoosed].y == TorG[POSMAG3].y + 50)||
							(ArcG[ArcsGCChoosed].x == TorP[POSMAG3].x  && ArcG[ArcsGCChoosed].y == TorP[POSMAG3].y + 50))
							{
								MOVMAG3 = false;
							}
						}
						
						if(POSMAG3 < 1)
						{
							if((ArcG[ArcsGCChoosed].x == GnrlP[POSMAG3].x  && ArcG[ArcsGCChoosed].y == GnrlP[POSMAG3].y + 50) ||
							(ArcG[ArcsGCChoosed].x == GnrlG[POSMAG3].x  && ArcG[ArcsGCChoosed].y == GnrlG[POSMAG3].y + 50) ||
							(ArcG[ArcsGCChoosed].x == KingP[POSMAG3].x  && ArcG[ArcsGCChoosed].y == KingP[POSMAG3].y + 50)||
							(ArcG[ArcsGCChoosed].x == KingG[POSMAG3].x  && ArcG[ArcsGCChoosed].y == KingG[POSMAG3].y + 50))
							{
								MOVMAG3 = false;
							}
						}
					}
					
					
					if(ArcsGCC == 1)
					{
						if(ArcG[ArcsGCChoosed].x > 1)
						{
							if(ArcsGCC != 2 && ArcsGCC != 3)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMAG1 == null)
									{
										MOVMAG1 = true;
									}
									if(MOVMAG1)
									{	
										POSMAG1 += 1;
									}
									if(POSMAG1 > 10)
									{
										if(Mov1AG == false)
										{
											Mov1AG = true;
										}
										else if(Mov1AG == null)
										{
											MOVMAG1 = null;
											ChooseG = null;
											ArcsGCC = 0;
											CountTime = 100;
											ArcsGCChoosed = null;
											Vez_Gregos = false;
											Vez_Persas = true;
										}	
									}	
									else if(MOVMAG1 == false)
									{
										ArcsGCC = 2;
									}
								}
							}
						}
						else
						{
							MOVMAG1 = false;
							ArcsGCC = 2;
						}
					}
					
					if(ArcsGCC == 2)
					{	
						if(ArcG[ArcsGCChoosed].x < 551)
						{
							if(ArcsGCC != 1 && ArcsGCC != 3)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMAG2 == null)
									{
										MOVMAG2 = true;
									}
									if(MOVMAG2)
									{	
										POSMAG2 += 1;
										if(POSMAG2 > 10)
										{
											if(Mov2AG == false)
											{
												Mov2AG = true;
											}
											if(Mov2AG == null)
											{
												
											}	
										}	
									}
									if(MOVMAG2 == false)
									{
										ArcsGCC = 3;
									}
								}
							}
						}
						else
						{
							MOVMAG2 = false;
							ArcsGCC = 3;
						}
					}
					
					if(ArcsGCC == 3)
					{
						if(ArcG[ArcsGCChoosed].y > 101)
						{
							if(ArcsGCC != 1 && ArcsGCC != 2)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMAG3 == null)
									{
										MOVMAG3 = true;
									}
									if(MOVMAG3)
									{	
										POSMAG3 += 1;
										if(POSMAG3 > 10)
										{
											if(Mov3AG == false)
											{
												Mov3AG = true;
											}
											if(Mov3AG == null)
											{
												ChooseG = null;
												ArcsGCC = 0;
												CountTime = 100;
												ArcsGCChoosed = null;
												Vez_Gregos = false;
												Vez_Persas = true;
											}	
										}	
									}
									if(MOVMAG3 == false)
									{
										ArcsGCC = 1;
									}
								}
							}
						}
						else
						{
							MOVMAG3 = false;
							ArcsGCC = 1;
						}
					}
				}
			}
		}
	}
}


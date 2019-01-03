var ArcPIA = true; 
var ArcsPCC = 0;
var moverA;
var CountTime = 100;
var ArcPMove = false;
var CMA = 0;
var Mov1AP = false;
var Mov2AP = false;
var Mov3AP = false;
var ChooseAP;
var MOVMAP1 = null;
var MOVMAP2 = null;
var MOVMAP3 = null;

var POSMAP1 = 0;
var POSMAP2 = 0;
var POSMAP3 = 0;

var ArcsPCChoosed = null;

var limit_down = 451;
var limit_right = 551;
var archers_number = 8;

function PossibilitiesAIAP()
{
	if(AIP)
	{	
		if(Vez_Persas)
		{	
			ChooseAP = Math.floor(randomRange(0,99));
			if(ArcsPCChoosed == null && ChooseAP <= 75)
			{
				
				if(ArcP[0].y < ArcP[1].y && ArcP[0].y < ArcP[2].y && ArcP[0].y < ArcP[3].y && ArcP[0].y < ArcP[4].y && ArcP[0].y < ArcP[5].y && ArcP[0].y < ArcP[6].y && ArcP[0].y < ArcP[7].y)
				{
					ArcsPCChoosed = 0;
				}
				else if(ArcP[1].y < ArcP[1].y && ArcP[0].y < ArcP[2].y && ArcP[1].y < ArcP[3].y && ArcP[1].y < ArcP[4].y && ArcP[1].y < ArcP[5].y && ArcP[1].y < ArcP[6].y && ArcP[1].y < ArcP[7].y)
				{
					ArcsPCChoosed = 1;
				}
				else if(ArcP[2].y < ArcP[1].y && ArcP[2].y < ArcP[0].y && ArcP[2].y < ArcP[3].y && ArcP[2].y < ArcP[4].y && ArcP[2].y < ArcP[5].y && ArcP[2].y < ArcP[6].y && ArcP[2].y < ArcP[7].y)
				{
					ArcsPCChoosed = 2;
				}
				else if(ArcP[3].y < ArcP[1].y && ArcP[3].y < ArcP[2].y && ArcP[3].y < ArcP[0].y && ArcP[3].y < ArcP[4].y && ArcP[3].y < ArcP[5].y && ArcP[3].y < ArcP[6].y && ArcP[3].y < ArcP[7].y)
				{
					ArcsPCChoosed = 3;
				}
				else if(ArcP[4].y < ArcP[1].y && ArcP[4].y < ArcP[2].y && ArcP[4].y < ArcP[3].y && ArcP[4].y < ArcP[0].y && ArcP[4].y < ArcP[5].y && ArcP[4].y < ArcP[6].y && ArcP[4].y < ArcP[7].y)
				{
					ArcsPCChoosed = 4;
				}
				else if(ArcP[5].y < ArcP[1].y && ArcP[5].y < ArcP[2].y && ArcP[5].y < ArcP[3].y && ArcP[5].y < ArcP[4].y && ArcP[5].y < ArcP[0].y && ArcP[5].y < ArcP[6].y && ArcP[5].y < ArcP[7].y)
				{
					ArcsPCChoosed = 5;
				}
				else if(ArcP[6].y < ArcP[1].y && ArcP[6].y < ArcP[2].y && ArcP[6].y < ArcP[3].y && ArcP[6].y < ArcP[4].y && ArcP[6].y < ArcP[5].y && ArcP[6].y < ArcP[0].y && ArcP[6].y < ArcP[7].y)
				{
					ArcsPCChoosed = 6;
				}
				else if(ArcP[7].y < ArcP[1].y && ArcP[7].y < ArcP[2].y && ArcP[7].y < ArcP[3].y && ArcP[7].y < ArcP[4].y && ArcP[7].y < ArcP[5].y && ArcP[7].y < ArcP[6].y && ArcP[7].y < ArcP[0].y)
				{
					ArcsPCChoosed = 7;
				}
			}
			else if(ArcsPCChoosed == null && ChooseAP > 75)
			{
				ArcsPCChoosed = Math.floor(randomRange(0,archers_number-1));
			}
			
			if(ChooseP == 3)
			{
				if(ArcPMove)
				{	
					moverA = Math.floor(randomRange(1,99))
					
					if(moverA <= 10 && ArcsPCC == 0 && ArcP[ArcsPCChoosed].x > 1)
					{							
						ArcsPCC = 1;
					}
					else if(moverA > 10 && moverA < 20 && ArcsPCC == 0 && ArcP[ArcsPCChoosed].x < limit_right)
					{						
						ArcsPCC = 2;
					}
					else if(moverA >= 20 && ArcsPCC == 0  && ArcP[ArcsPCChoosed].y < limit_down)
					{						
						ArcsPCC = 3;
					}
					else
					{
						moverA = Math.floor(randomRange(1,99))
					}

					if(Mov1AP)
					{
						Vez_Persas = false;
						Vez_Gregos = true;
						ArcP[ArcsPCChoosed].x -= 50;
						Mov1AP = null;
						ChooseP = null;
						ArcsPCC = 0;
						CountTime = 100;
						
						
					}
					
					if(Mov2AP)
					{
						Vez_Persas = false;
						Vez_Gregos = true;
						ArcP[ArcsPCChoosed].x += 50;
						Mov2AP = null;
						ChooseP = null;
						ArcsPCC = 0;
						CountTime = 100;
						
						
					}
					
					if(Mov3AP)
					{
						Vez_Persas = false;
						Vez_Gregos = true;
						Mov3AP = null;
						ArcP[ArcsPCChoosed].y += 50;
						ChooseP = null;
						ArcsPCC = 0;
						CountTime = 100;
						
						
					}
					
					if(ArcsPCC != 0)
					{
						if(ArcP[ArcsPCChoosed].y > 101)
						{
							context.drawImage(MovL, ArcP[ArcsPCChoosed].x , ArcP[ArcsPCChoosed].y - 50, ArcP[ArcsPCChoosed].w, ArcP[ArcsPCChoosed].h);			
						}
						if(ArcP[ArcsPCChoosed].y < limit_down)
						{
							context.drawImage(MovL, ArcP[ArcsPCChoosed].x , ArcP[ArcsPCChoosed].y + 50, ArcP[ArcsPCChoosed].w, ArcP[ArcsPCChoosed].h);	
						}
						context.drawImage(MovL, ArcP[ArcsPCChoosed].x + 50 , ArcP[ArcsPCChoosed].y, ArcP[ArcsPCChoosed].w, ArcP[ArcsPCChoosed].h);	
						context.drawImage(MovL, ArcP[ArcsPCChoosed].x - 50, ArcP[ArcsPCChoosed].y, ArcP[ArcsPCChoosed].w, ArcP[ArcsPCChoosed].h);	
					}
					
					{//Contador 1
							if(POSMAP1 < 1)
							{
								if((ArcP[ArcsPCChoosed].x == GnrlP[POSMAP1].x + 50 && ArcP[ArcsPCChoosed].y == GnrlP[POSMAP1].y) ||
								(ArcP[ArcsPCChoosed].x == GnrlG[POSMAP1].x + 50 && ArcP[ArcsPCChoosed].y == GnrlG[POSMAP1].y) ||
								(ArcP[ArcsPCChoosed].x == KingP[POSMAP1].x + 50 && ArcP[ArcsPCChoosed].y == KingP[POSMAP1].y)||
								(ArcP[ArcsPCChoosed].x == KingG[POSMAP1].x + 50 && ArcP[ArcsPCChoosed].y == KingG[POSMAP1].y))
								{
									MOVMAP1 = false;
								}
							}
							if(POSMAP1 < 2)
							{
								if((ArcP[ArcsPCChoosed].x == TorG[POSMAP1].x + 50 && ArcP[ArcsPCChoosed].y == TorG[POSMAP1].y)||
								(ArcP[ArcsPCChoosed].x == TorP[POSMAP1].x + 50 && ArcP[ArcsPCChoosed].y == TorP[POSMAP1].y))
								{
									MOVMAP1 = false;
								}
							}
							if(POSMAP1 < 4)
							{
								if((ArcP[ArcsPCChoosed].x == KntG[POSMAP1].x + 50 && ArcP[ArcsPCChoosed].y == KntG[POSMAP1].y) ||
								(ArcP[ArcsPCChoosed].x == KntP[POSMAP1].x + 50 && ArcP[ArcsPCChoosed].y == KntP[POSMAP1].y))
								{
									MOVMAP1 = false;
								}
							}
							if(POSMAP1 < 8 && POSMAP1 != ArcsPCChoosed)
							{
								if(ArcP[ArcsPCChoosed].x == ArcP[POSMAP1].x + 50 && ArcP[ArcsPCChoosed].y == ArcP[POSMAP1].y)
								{
									MOVMAP1 = false;
								}
							}
							if(POSMAP1 < 8)
							{
								if((ArcP[ArcsPCChoosed].x == TreeA.x + 50 && ArcP[ArcsPCChoosed].y == TreeA.y)||
								(ArcP[ArcsPCChoosed].x == TreeB.x + 50 && ArcP[ArcsPCChoosed].y == TreeB.y)||
								(ArcP[ArcsPCChoosed].x == TreeC.x + 50 && ArcP[ArcsPCChoosed].y == TreeC.y)||
								(ArcP[ArcsPCChoosed].x == TreeD.x + 50 && ArcP[ArcsPCChoosed].y == TreeD.y)||
								(ArcP[ArcsPCChoosed].x == TreeE.x + 50 && ArcP[ArcsPCChoosed].y == TreeE.y)||
								(ArcP[ArcsPCChoosed].x == TreeF.x + 50 && ArcP[ArcsPCChoosed].y == TreeF.y))
								{
									MOVMAP1 = false;
								}
								
								if((ArcP[ArcsPCChoosed].x == LancerP[POSMAP1].x + 50 && ArcP[ArcsPCChoosed].y == LancerP[POSMAP1].y)||
								(ArcP[ArcsPCChoosed].x == ArcG[POSMAP1].x + 50 && ArcP[ArcsPCChoosed].y == ArcG[POSMAP1].y) ||
								(ArcP[ArcsPCChoosed].x == LancerG[POSMAP1].x + 50 && ArcP[ArcsPCChoosed].y == LancerG[POSMAP1].y))
								{
									MOVMAP1 = false;
								}
							}	
						}
							
					{//Contador 2
						if(POSMAP2 < 8)
						{
							if((ArcP[ArcsPCChoosed].x == TreeA.x - 50 && ArcP[ArcsPCChoosed].y == TreeA.y)||
							(ArcP[ArcsPCChoosed].x == TreeB.x - 50 && ArcP[ArcsPCChoosed].y == TreeB.y)||
							(ArcP[ArcsPCChoosed].x == TreeC.x - 50 && ArcP[ArcsPCChoosed].y == TreeC.y)||
							(ArcP[ArcsPCChoosed].x == TreeD.x - 50 && ArcP[ArcsPCChoosed].y == TreeD.y)||
							(ArcP[ArcsPCChoosed].x == TreeE.x - 50 && ArcP[ArcsPCChoosed].y == TreeE.y)||
							(ArcP[ArcsPCChoosed].x == TreeF.x - 50 && ArcP[ArcsPCChoosed].y == TreeF.y))
							{
								MOVMAP2 = false;
							}
							
							if((ArcP[ArcsPCChoosed].x == LancerP[POSMAP2].x - 50 && ArcP[ArcsPCChoosed].y == LancerP[POSMAP2].y)||
							(ArcP[ArcsPCChoosed].x == ArcG[POSMAP2].x - 50 && ArcP[ArcsPCChoosed].y == ArcG[POSMAP2].y) ||
							(ArcP[ArcsPCChoosed].x == LancerG[POSMAP2].x - 50 && ArcP[ArcsPCChoosed].y == LancerG[POSMAP2].y))
							{
								MOVMAP2 = false;
							}
						}
						if(POSMAP2 < 8 && POSMAP2 != ArcsPCChoosed)
						{
							if(ArcP[ArcsPCChoosed].x == ArcP[POSMAP2].x - 50 && ArcP[ArcsPCChoosed].y == ArcP[POSMAP2].y)
							{
								MOVMAP2 = false;
							}
						}
						if(POSMAP2 < 4)
						{
							if((ArcP[ArcsPCChoosed].x == KntG[POSMAP2].x - 50 && ArcP[ArcsPCChoosed].y == KntG[POSMAP2].y) ||
							(ArcP[ArcsPCChoosed].x == KntP[POSMAP2].x - 50 && ArcP[ArcsPCChoosed].y == KntP[POSMAP2].y))
							{
								MOVMAP2 = false;
							}
						}
						if(POSMAP2 < 2)
						{
							if((ArcP[ArcsPCChoosed].x == TorG[POSMAP2].x - 50 && ArcP[ArcsPCChoosed].y == TorG[POSMAP2].y)||
							(ArcP[ArcsPCChoosed].x == TorP[POSMAP2].x - 50 && ArcP[ArcsPCChoosed].y == TorP[POSMAP2].y))
							{
								MOVMAP2 = false;
							}
						}
						if(POSMAP2 < 1)
						{
							if((ArcP[ArcsPCChoosed].x == GnrlP[POSMAP2].x - 50 && ArcP[ArcsPCChoosed].y == GnrlP[POSMAP2].y) ||
							(ArcP[ArcsPCChoosed].x == GnrlG[POSMAP2].x - 50 && ArcP[ArcsPCChoosed].y == GnrlG[POSMAP2].y) ||
							(ArcP[ArcsPCChoosed].x == KingP[POSMAP2].x - 50 && ArcP[ArcsPCChoosed].y == KingP[POSMAP2].y)||
							(ArcP[ArcsPCChoosed].x == KingG[POSMAP2].x - 50 && ArcP[ArcsPCChoosed].y == KingG[POSMAP2].y))
							{
								MOVMAP2 = false;
							}
						}
					}
					
					{//Contador 3
						if(POSMAP3 < 8)
						{
							if((ArcP[ArcsPCChoosed].x == TreeA.x && ArcP[ArcsPCChoosed].y == TreeA.y - 50)||
							(ArcP[ArcsPCChoosed].x == TreeB.x && ArcP[ArcsPCChoosed].y == TreeB.y - 50)||
							(ArcP[ArcsPCChoosed].x == TreeC.x && ArcP[ArcsPCChoosed].y == TreeC.y - 50)||
							(ArcP[ArcsPCChoosed].x == TreeD.x && ArcP[ArcsPCChoosed].y == TreeD.y - 50)||
							(ArcP[ArcsPCChoosed].x == TreeE.x && ArcP[ArcsPCChoosed].y == TreeE.y - 50)||
							(ArcP[ArcsPCChoosed].x == TreeF.x && ArcP[ArcsPCChoosed].y == TreeF.y - 50))
							{
								MOVMAP3 = false;
							}
							
							if((ArcP[ArcsPCChoosed].x == LancerP[POSMAP3].x  && ArcP[ArcsPCChoosed].y == LancerP[POSMAP3].y - 50)||
							(ArcP[ArcsPCChoosed].x == ArcG[POSMAP3].x  && ArcP[ArcsPCChoosed].y == ArcG[POSMAP3].y - 50) ||
							(ArcP[ArcsPCChoosed].x == LancerG[POSMAP3].x && ArcP[ArcsPCChoosed].y == LancerG[POSMAP3].y - 50))
							{
								MOVMAP3 = false;
							}
						}
						
						if(POSMAP3 < 8 && POSMAP3 != ArcsPCChoosed)
						{
							if(ArcP[ArcsPCChoosed].x == ArcP[POSMAP3].x && ArcP[ArcsPCChoosed].y == ArcP[POSMAP3].y - 50)
							{
								MOVMAP3 = false;
							}
						}
						
						if(POSMAP3 < 4)
						{
							if((ArcP[ArcsPCChoosed].x == KntG[POSMAP3].x  && ArcP[ArcsPCChoosed].y == KntG[POSMAP3].y - 50) ||
							(ArcP[ArcsPCChoosed].x == KntP[POSMAP3].x  && ArcP[ArcsPCChoosed].y == KntP[POSMAP3].y - 50))
							{
								MOVMAP3 = false;
							}
						}
						if(POSMAP3 < 2)
						{
							if((ArcP[ArcsPCChoosed].x == TorG[POSMAP3].x  && ArcP[ArcsPCChoosed].y == TorG[POSMAP3].y - 50)||
							(ArcP[ArcsPCChoosed].x == TorP[POSMAP3].x  && ArcP[ArcsPCChoosed].y == TorP[POSMAP3].y - 50))
							{
								MOVMAP3 = false;
							}
						}
						
						if(POSMAP3 < 1)
						{
							if((ArcP[ArcsPCChoosed].x == GnrlP[POSMAP3].x  && ArcP[ArcsPCChoosed].y == GnrlP[POSMAP3].y - 50) ||
							(ArcP[ArcsPCChoosed].x == GnrlG[POSMAP3].x  && ArcP[ArcsPCChoosed].y == GnrlG[POSMAP3].y - 50) ||
							(ArcP[ArcsPCChoosed].x == KingP[POSMAP3].x  && ArcP[ArcsPCChoosed].y == KingP[POSMAP3].y - 50)||
							(ArcP[ArcsPCChoosed].x == KingG[POSMAP3].x  && ArcP[ArcsPCChoosed].y == KingG[POSMAP3].y - 50))
							{
								MOVMAP3 = false;
							}
						}
					}
					
					
					if(ArcsPCC == 1)
					{
						if(ArcP[ArcsPCChoosed].x > 1)
						{
							if(ArcsPCC != 2 && ArcsPCC != 3)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMAP1 == null)
									{
										MOVMAP1 = true;
									}
									if(MOVMAP1)
									{	
										POSMAP1 += 1;
									}
									if(POSMAP1 > 10)
									{
										if(Mov1AP == false)
										{
											Mov1AP = true;
										}
										else if(Mov1AP == null)
										{
											MOVMAP1 = null;
											ChooseP = null;
											ArcsPCC = 0;
											CountTime = 100;
											ArcsPCChoosed = null;
											Vez_Persas = false;
											Vez_Gregos = true;
										}	
									}	
									else if(MOVMAP1 == false)
									{
										ArcsPCC = 2;
									}
								}
							}
						}
						else
						{
							MOVMAP1 = false;
							ArcsPCC = 2;
						}
					}
					
					if(ArcsPCC == 2)
					{	
						if(ArcP[ArcsPCChoosed].x < limit_right)
						{
							if(ArcsPCC != 1 && ArcsPCC != 3)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMAP2 == null)
									{
										MOVMAP2 = true;
									}
									if(MOVMAP2)
									{	
										POSMAP2 += 1;
										if(POSMAP2 > 10)
										{
											if(Mov2AP == false)
											{
												Mov2AP = true;
											}
											if(Mov2AP == null)
											{
												
											}	
										}	
									}
									if(MOVMAP2 == false)
									{
										ArcsPCC = 3;
									}
								}
							}
						}
						else
						{
							MOVMAP2 = false;
							ArcsPCC = 3;
						}
					}
					
					if(ArcsPCC == 3)
					{
						if(ArcP[ArcsPCChoosed].y < limit_down)
						{
							if(ArcsPCC != 1 && ArcsPCC != 2)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMAP3 == null)
									{
										MOVMAP3 = true;
									}
									if(MOVMAP3)
									{	
										POSMAP3 += 1;
										if(POSMAP3 > 10)
										{
											if(Mov3AP == false)
											{
												Mov3AP = true;
											}
											if(Mov3AP == null)
											{
												ChooseP = null;
												ArcsPCC = 0;
												CountTime = 100;
												ArcsPCChoosed = null;
												Vez_Persas = false;
												Vez_Gregos = true;
											}	
										}	
									}
									if(MOVMAP3 == false)
									{
										ArcsPCC = 1;
									}
								}
							}
						}
						else
						{
							MOVMAP3 = false;
							ArcsPCC = 1;
						}
					}
				}
			}
		}
	}
}


var LancerGIA = true; 
var LancersGCC = 0;
var moverL;
var CountTime = 100;
var LancerGMove = false;
var CML = 0;
var LancersGCChoosed = null;
var Mov1LG = false;
var Mov2LG = false;
var Mov3LG = false;
var Mov4LG = false;
var Mov5LG = false;
var Mov6LG = false;
var MOVMLG1 = null;
var MOVMLG2 = null;
var MOVMLG3 = null;
var MOVMLG4 = null;
var MOVMLG5 = null;
var MOVMLG6 = null;
var ChooseLG;
var POSMLG1 = 0;
var POSMLG2 = 0;
var POSMLG3 = 0;
var POSMLG4 = 0;
var POSMLG5 = 0;
var POSMLG6 = 0;
var limit_down = 451;
var limit_right = 551;
var lancers_number = 8;

function PossibilitiesAILG()
{

	if(AIG)
	{
		if(Vez_Gregos)
		{
			ChooseLG = Math.floor(randomRange(0,99));
			if(LancersGCChoosed == null && ChooseLG <= 75)
			{
				if(LancerG[0].y < LancerG[1].y && LancerG[0].y < LancerG[2].y && LancerG[0].y < LancerG[3].y && LancerG[0].y < LancerG[4].y && LancerG[0].y < LancerG[5].y && LancerG[0].y < LancerG[6].y && LancerG[0].y < LancerG[7].y)
				{
					LancersGCChoosed = 0;
				}
				else if(LancerG[1].y < LancerG[1].y && LancerG[0].y < LancerG[2].y && LancerG[1].y < LancerG[3].y && LancerG[1].y < LancerG[4].y && LancerG[1].y < LancerG[5].y && LancerG[1].y < LancerG[6].y && LancerG[1].y < LancerG[7].y)
				{
					LancersGCChoosed = 1;
				}
				else if(LancerG[2].y < LancerG[1].y && LancerG[2].y < LancerG[0].y && LancerG[2].y < LancerG[3].y && LancerG[2].y < LancerG[4].y && LancerG[2].y < LancerG[5].y && LancerG[2].y < LancerG[6].y && LancerG[2].y < LancerG[7].y)				{
					LancersGCChoosed = 2;
				}
				else if(LancerG[3].y < LancerG[1].y && LancerG[3].y < LancerG[2].y && LancerG[3].y < LancerG[0].y && LancerG[3].y < LancerG[4].y && LancerG[3].y < LancerG[5].y && LancerG[3].y < LancerG[6].y && LancerG[3].y < LancerG[7].y)
				{
					LancersGCChoosed = 3;
				}
				else if(LancerG[4].y < LancerG[1].y && LancerG[4].y < LancerG[2].y && LancerG[4].y < LancerG[3].y && LancerG[4].y < LancerG[0].y && LancerG[4].y < LancerG[5].y && LancerG[4].y < LancerG[6].y && LancerG[4].y < LancerG[7].y)
				{
					LancersGCChoosed = 4;
				}
				else if(LancerG[5].y < LancerG[1].y && LancerG[5].y < LancerG[2].y && LancerG[5].y < LancerG[3].y && LancerG[5].y < LancerG[4].y && LancerG[5].y < LancerG[0].y && LancerG[5].y < LancerG[6].y && LancerG[5].y < LancerG[7].y)
				{
					LancersGCChoosed = 5;
				}
				else if(LancerG[6].y < LancerG[1].y && LancerG[6].y < LancerG[2].y && LancerG[6].y < LancerG[3].y && LancerG[6].y < LancerG[4].y && LancerG[6].y < LancerG[5].y && LancerG[6].y < LancerG[0].y && LancerG[6].y < LancerG[7].y)
				{
					LancersGCChoosed = 6;
				}
				else if(LancerG[7].y < LancerG[1].y && LancerG[7].y < LancerG[2].y && LancerG[7].y < LancerG[3].y && LancerG[7].y < LancerG[4].y && LancerG[7].y < LancerG[5].y && LancerG[7].y < LancerG[6].y && LancerG[7].y < LancerG[0].y)
				{
					LancersGCChoosed = 7;
				}
				else
				{
					ChooseLG = 85;
				}
			}
			else if(LancersGCChoosed == null && ChooseLG > 75)
			{
				LancersGCChoosed = Math.floor(randomRange(0,lancers_number-1));
			}
			
			if(ChooseG == 2)
			{
				if(LancerGMove)
				{	
					moverL = Math.floor(randomRange(1,99))
					
					if(moverL <= 5 && LancersGCC == 0 && LancerG[LancersGCChoosed].x > 1)
					{
						LancersGCC = 1;
					}
					else if(moverL > 5 && moverL <= 10 && LancersGCC == 0 && LancerG[LancersGCChoosed].x > 51)
					{
						LancersGCC = 2;
					}
					else if(moverL > 10 && moverL <= 15 && LancersGCC == 0  && LancerG[LancersGCChoosed].x < limit_right)
					{
						LancersGCC = 3;
					}
					else if(moverL > 15 && moverL <= 20 && LancersGCC == 0  && LancerG[LancersGCChoosed].x < limit_right-50)
					{
						LancersGCC = 4;
					}
					else if(moverL > 20 && moverL <= 50 && LancersGCC == 0  && LancerG[LancersGCChoosed].y > 101)
					{
						LancersGCC = 5;
					}
					else if(moverL > 50 && LancersGCC == 0  && LancerG[LancersGCChoosed].y > 151)
					{
						LancersGCC = 6;
					}
					else
					{
						moverL = Math.floor(randomRange(1,99))
					}
					
					if(Mov1LG)
					{
						Vez_Gregos = false;
						Vez_Persas = true;
						LancerG[LancersGCChoosed].x -= 50;
						CML = 0;
						ChooseG = null;
						LancersGCC = 0;
						CountTime = 100;
						LancersGCChoosed = null;
						Mov1LG = null;
						
					}
					if(Mov2LG)
					{
						Vez_Gregos = false;
						Vez_Persas = true;
						LancerG[LancersGCChoosed].x -= 100;
						CML = 0;
						ChooseG = null;
						LancersGCC = 0;
						CountTime = 100;
						LancersGCChoosed = null;
						Mov2LG = null;
						
					}
					if(Mov3LG)
					{
						Vez_Gregos = false;
						Vez_Persas = true;
						LancerG[LancersGCChoosed].x += 50;
						CML = 0;
						ChooseG = null;
						LancersGCC = 0;
						CountTime = 100;
						LancersGCChoosed = null;
						Mov3LG = null;
						
					}
					if(Mov4LG)
					{
						Vez_Gregos = false;
						Vez_Persas = true;
						LancerG[LancersGCChoosed].x += 100;
						CML = 0;
						ChooseG = null;
						LancersGCC = 0;
						CountTime = 100;
						LancersGCChoosed = null;
						Mov4LG = null;
						
					}
					if(Mov5LG)
					{
						Vez_Gregos = false;
						Vez_Persas = true;
						LancerG[LancersGCChoosed].y -= 50;
						CML = 0;
						ChooseG = null;
						LancersGCC = 0;
						CountTime = 100;
						LancersGCChoosed = null;
						Mov5LG = null;
					}
					if(Mov6LG)
					{
						Vez_Gregos = false;
						Vez_Persas = true;
						LancerG[LancersGCChoosed].y -= 100;
						CML = 0;
						ChooseG = null;
						LancersGCC = 0;
						CountTime = 100;
						LancersGCChoosed = null;
						Mov6LG = null;
						
					}
					if(LancersGCC != 0)
					{
						if(LancerG[LancersGCChoosed].y > 101)
						{
							context.drawImage(MovL, LancerG[LancersGCChoosed].x , LancerG[LancersGCChoosed].y - 50, LancerG[LancersGCChoosed].w, LancerG[LancersGCChoosed].h);			
						}
						if(LancerG[LancersGCChoosed].y > 151)
						{
							context.drawImage(MovL, LancerG[LancersGCChoosed].x , LancerG[LancersGCChoosed].y - 100, LancerG[LancersGCChoosed].w, LancerG[LancersGCChoosed].h);
						}
						if(LancerG[LancersGCChoosed].y < limit_down)
						{
							context.drawImage(MovL, LancerG[LancersGCChoosed].x, LancerG[LancersGCChoosed].y + 50, LancerG[LancersGCChoosed].w, LancerG[LancersGCChoosed].h);
						}
						if(LancerG[LancersGCChoosed].y < limit_down-50)
						{
							context.drawImage(MovL, LancerG[LancersGCChoosed].x, LancerG[LancersGCChoosed].y + 100, LancerG[LancersGCChoosed].w, LancerG[LancersGCChoosed].h);
						}
						context.drawImage(MovL, LancerG[LancersGCChoosed].x + 50 , LancerG[LancersGCChoosed].y, LancerG[LancersGCChoosed].w, LancerG[LancersGCChoosed].h);	
						context.drawImage(MovL, LancerG[LancersGCChoosed].x + 100, LancerG[LancersGCChoosed].y, LancerG[LancersGCChoosed].w, LancerG[LancersGCChoosed].h);	
						context.drawImage(MovL, LancerG[LancersGCChoosed].x - 50, LancerG[LancersGCChoosed].y, LancerG[LancersGCChoosed].w, LancerG[LancersGCChoosed].h);	
						context.drawImage(MovL, LancerG[LancersGCChoosed].x - 100, LancerG[LancersGCChoosed].y, LancerG[LancersGCChoosed].w, LancerG[LancersGCChoosed].h);	
					}
					if(LancersGCChoosed != null)
					{
						{//Contador 1
							if(POSMLG1 < 1)
							{
								if((LancerG[LancersGCChoosed].x == GnrlP[POSMLG1].x + 50 && LancerG[LancersGCChoosed].y == GnrlP[POSMLG1].y) ||
								(LancerG[LancersGCChoosed].x == KingG[POSMLG1].x + 50 && LancerG[LancersGCChoosed].y == KingG[POSMLG1].y) ||
								(LancerG[LancersGCChoosed].x == GnrlG[POSMLG1].x + 50 && LancerG[LancersGCChoosed].y == GnrlG[POSMLG1].y) ||
								(LancerG[LancersGCChoosed].x == KingP[POSMLG1].x + 50 && LancerG[LancersGCChoosed].y == KingP[POSMLG1].y))
								{
									MOVMLG1 = false;
								}
							}
							if(POSMLG1 < 2)
							{
								if((LancerG[LancersGCChoosed].x == TorG[POSMLG1].x + 50 && LancerG[LancersGCChoosed].y == TorG[POSMLG1].y)||
								(LancerG[LancersGCChoosed].x == TorP[POSMLG1].x + 50 && LancerG[LancersGCChoosed].y == TorP[POSMLG1].y))
								{
									MOVMLG1 = false;
								}
							}
							if(POSMLG1 < 4)
							{
								if((LancerG[LancersGCChoosed].x == KntG[POSMLG1].x + 50 && LancerG[LancersGCChoosed].y == KntG[POSMLG1].y) ||
								(LancerG[LancersGCChoosed].x == KntP[POSMLG1].x + 50 && LancerG[LancersGCChoosed].y == KntP[POSMLG1].y))
								{
									MOVMLG1 = false;
								}
							}
							if(POSMLG1 != LancersGCChoosed && POSMLG1 < 8)
							{
								if(LancerG[LancersGCChoosed].x == LancerG[POSMLG1].x + 50 && LancerG[LancersGCChoosed].y == LancerG[POSMLG1].y)
								{
									MOVMLG1 = false;
								}
							}
							if(POSMLG1 < 8)
							{
								if((LancerG[LancersGCChoosed].x == TreeA.x + 50 && LancerG[LancersGCChoosed].y == TreeA.y)||
								(LancerG[LancersGCChoosed].x == TreeB.x + 50 && LancerG[LancersGCChoosed].y == TreeB.y)||
								(LancerG[LancersGCChoosed].x == TreeC.x + 50 && LancerG[LancersGCChoosed].y == TreeC.y)||
								(LancerG[LancersGCChoosed].x == TreeD.x + 50 && LancerG[LancersGCChoosed].y == TreeD.y)||
								(LancerG[LancersGCChoosed].x == TreeE.x + 50 && LancerG[LancersGCChoosed].y == TreeE.y)||
								(LancerG[LancersGCChoosed].x == TreeF.x + 50 && LancerG[LancersGCChoosed].y == TreeF.y))
								{
									MOVMLG1 = false;
								}
								
								if((LancerG[LancersGCChoosed].x == LancerP[POSMLG1].x + 50 && LancerG[LancersGCChoosed].y == LancerP[POSMLG1].y)||
								(LancerG[LancersGCChoosed].x == ArcP[POSMLG1].x + 50 && LancerG[LancersGCChoosed].y == ArcP[POSMLG1].y) ||
								(LancerG[LancersGCChoosed].x == ArcG[POSMLG1].x + 50 && LancerG[LancersGCChoosed].y == ArcG[POSMLG1].y))
								{
									MOVMLG1 = false;
								}
							}	
						}
						
						{//Contador 2
							if(POSMLG2 < 1)
							{
								if((LancerG[LancersGCChoosed].x == GnrlP[POSMLG2].x + 100 && LancerG[LancersGCChoosed].y == GnrlP[POSMLG2].y) ||
								(LancerG[LancersGCChoosed].x == KingG[POSMLG2].x + 100 && LancerG[LancersGCChoosed].y == KingG[POSMLG2].y) ||
								(LancerG[LancersGCChoosed].x == GnrlG[POSMLG2].x + 100 && LancerG[LancersGCChoosed].y == GnrlG[POSMLG2].y) ||
								(LancerG[LancersGCChoosed].x == KingP[POSMLG2].x + 100 && LancerG[LancersGCChoosed].y == KingP[POSMLG2].y))
								{
									MOVMLG2 = false;
								}
							}
							if(POSMLG2 < 2)
							{
								if((LancerG[LancersGCChoosed].x == TorG[POSMLG2].x + 100 && LancerG[LancersGCChoosed].y == TorG[POSMLG2].y)||
								(LancerG[LancersGCChoosed].x == TorP[POSMLG2].x + 100 && LancerG[LancersGCChoosed].y == TorP[POSMLG2].y))
								{
									MOVMLG2 = false;
								}
							}
							if(POSMLG2 < 4)
							{
								if((LancerG[LancersGCChoosed].x == KntG[POSMLG2].x + 100 && LancerG[LancersGCChoosed].y == KntG[POSMLG2].y) ||
								(LancerG[LancersGCChoosed].x == KntP[POSMLG2].x + 100 && LancerG[LancersGCChoosed].y == KntP[POSMLG2].y))
								{
									MOVMLG2 = false;
								}
							}
							if(POSMLG2 != LancersGCChoosed && POSMLG2 < 8)
							{
								if(LancerG[LancersGCChoosed].x == LancerG[POSMLG2].x + 50 && LancerG[LancersGCChoosed].y == LancerG[POSMLG2].y)
								{
									MOVMLG2 = false;
								}
							}
							if(POSMLG2 < 8)
							{
								if((LancerG[LancersGCChoosed].x == TreeA.x + 50 && LancerG[LancersGCChoosed].y == TreeA.y)||
								(LancerG[LancersGCChoosed].x == TreeB.x + 50 && LancerG[LancersGCChoosed].y == TreeB.y)||
								(LancerG[LancersGCChoosed].x == TreeC.x + 50 && LancerG[LancersGCChoosed].y == TreeC.y)||
								(LancerG[LancersGCChoosed].x == TreeD.x + 50 && LancerG[LancersGCChoosed].y == TreeD.y)||
								(LancerG[LancersGCChoosed].x == TreeE.x + 50 && LancerG[LancersGCChoosed].y == TreeE.y)||
								(LancerG[LancersGCChoosed].x == TreeF.x + 50 && LancerG[LancersGCChoosed].y == TreeF.y)||
								(LancerG[LancersGCChoosed].x == TreeA.x + 100 && LancerG[LancersGCChoosed].y == TreeA.y)||
								(LancerG[LancersGCChoosed].x == TreeB.x + 100 && LancerG[LancersGCChoosed].y == TreeB.y)||
								(LancerG[LancersGCChoosed].x == TreeC.x + 100 && LancerG[LancersGCChoosed].y == TreeC.y)||
								(LancerG[LancersGCChoosed].x == TreeD.x + 100 && LancerG[LancersGCChoosed].y == TreeD.y)||
								(LancerG[LancersGCChoosed].x == TreeE.x + 100 && LancerG[LancersGCChoosed].y == TreeE.y)||
								(LancerG[LancersGCChoosed].x == TreeF.x + 100 && LancerG[LancersGCChoosed].y == TreeF.y))
								{
									MOVMLG2 = false;
								}
								
								if((LancerG[LancersGCChoosed].x == LancerP[POSMLG2].x + 100 && LancerG[LancersGCChoosed].y == LancerP[POSMLG2].y)||
								(LancerG[LancersGCChoosed].x == ArcP[POSMLG2].x + 100 && LancerG[LancersGCChoosed].y == ArcP[POSMLG2].y) ||
								(LancerG[LancersGCChoosed].x == ArcG[POSMLG2].x + 100 && LancerG[LancersGCChoosed].y == ArcG[POSMLG2].y))
								{
									MOVMLG2 = false;
								}
							}
						}
						
						{//Contador 3
							if(POSMLG3 < 8)
							{
								if((LancerG[LancersGCChoosed].x == TreeA.x - 50 && LancerG[LancersGCChoosed].y == TreeA.y)||
								(LancerG[LancersGCChoosed].x == TreeB.x - 50 && LancerG[LancersGCChoosed].y == TreeB.y)||
								(LancerG[LancersGCChoosed].x == TreeC.x - 50 && LancerG[LancersGCChoosed].y == TreeC.y)||
								(LancerG[LancersGCChoosed].x == TreeD.x - 50 && LancerG[LancersGCChoosed].y == TreeD.y)||
								(LancerG[LancersGCChoosed].x == TreeE.x - 50 && LancerG[LancersGCChoosed].y == TreeE.y)||
								(LancerG[LancersGCChoosed].x == TreeF.x - 50 && LancerG[LancersGCChoosed].y == TreeF.y))
								{
									MOVMLG3 = false;
								}
								
								if((LancerG[LancersGCChoosed].x == LancerP[POSMLG3].x - 50 && LancerG[LancersGCChoosed].y == LancerP[POSMLG3].y)||
								(LancerG[LancersGCChoosed].x == ArcP[POSMLG3].x - 50 && LancerG[LancersGCChoosed].y == ArcP[POSMLG3].y) ||
								(LancerG[LancersGCChoosed].x == ArcG[POSMLG3].x - 50 && LancerG[LancersGCChoosed].y == ArcG[POSMLG3].y))
								{
									MOVMLG3 = false;
								}
							}
							if(POSMLG3 != LancersGCChoosed && POSMLG3 < 8)
							{
								if(LancerG[LancersGCChoosed].x == LancerG[POSMLG3].x - 50 && LancerG[LancersGCChoosed].y == LancerG[POSMLG3].y)
								{
									MOVMLG3 = false;
								}
							}
							if(POSMLG3 < 4)
							{
								if((LancerG[LancersGCChoosed].x == KntG[POSMLG3].x - 50 && LancerG[LancersGCChoosed].y == KntG[POSMLG3].y) ||
								(LancerG[LancersGCChoosed].x == KntP[POSMLG3].x - 50 && LancerG[LancersGCChoosed].y == KntP[POSMLG3].y))
								{
									MOVMLG3 = false;
								}
							}
							if(POSMLG3 < 2)
							{
								if((LancerG[LancersGCChoosed].x == TorG[POSMLG3].x - 50 && LancerG[LancersGCChoosed].y == TorG[POSMLG3].y)||
								(LancerG[LancersGCChoosed].x == TorP[POSMLG3].x - 50 && LancerG[LancersGCChoosed].y == TorP[POSMLG3].y))
								{
									MOVMLG3 = false;
								}
							}
							if(POSMLG3 < 1)
							{
								if((LancerG[LancersGCChoosed].x == GnrlP[POSMLG3].x - 50 && LancerG[LancersGCChoosed].y == GnrlP[POSMLG3].y) ||
								(LancerG[LancersGCChoosed].x == KingG[POSMLG3].x - 50 && LancerG[LancersGCChoosed].y == KingG[POSMLG3].y) ||
								(LancerG[LancersGCChoosed].x == GnrlG[POSMLG3].x - 50 && LancerG[LancersGCChoosed].y == GnrlG[POSMLG3].y) ||
								(LancerG[LancersGCChoosed].x == KingP[POSMLG3].x - 50 && LancerG[LancersGCChoosed].y == KingP[POSMLG3].y))
								{
									MOVMLG3 = false;
								}
							}
						}
						
						{//Contador 4
							if(POSMLG4 < 8)
							{
								if((LancerG[LancersGCChoosed].x == TreeA.x - 50 && LancerG[LancersGCChoosed].y == TreeA.y)||
								(LancerG[LancersGCChoosed].x == TreeB.x - 50 && LancerG[LancersGCChoosed].y == TreeB.y)||
								(LancerG[LancersGCChoosed].x == TreeC.x - 50 && LancerG[LancersGCChoosed].y == TreeC.y)||
								(LancerG[LancersGCChoosed].x == TreeD.x - 50 && LancerG[LancersGCChoosed].y == TreeD.y)||
								(LancerG[LancersGCChoosed].x == TreeE.x - 50 && LancerG[LancersGCChoosed].y == TreeE.y)||
								(LancerG[LancersGCChoosed].x == TreeF.x - 50 && LancerG[LancersGCChoosed].y == TreeF.y)||
								(LancerG[LancersGCChoosed].x == TreeA.x - 100 && LancerG[LancersGCChoosed].y == TreeA.y)||
								(LancerG[LancersGCChoosed].x == TreeB.x - 100 && LancerG[LancersGCChoosed].y == TreeB.y)||
								(LancerG[LancersGCChoosed].x == TreeC.x - 100 && LancerG[LancersGCChoosed].y == TreeC.y)||
								(LancerG[LancersGCChoosed].x == TreeD.x - 100 && LancerG[LancersGCChoosed].y == TreeD.y)||
								(LancerG[LancersGCChoosed].x == TreeE.x - 100 && LancerG[LancersGCChoosed].y == TreeE.y)||
								(LancerG[LancersGCChoosed].x == TreeF.x - 100 && LancerG[LancersGCChoosed].y == TreeF.y))
								{
									MOVMLG4 = false;
								}
								
								if((LancerG[LancersGCChoosed].x == LancerP[POSMLG4].x - 100 && LancerG[LancersGCChoosed].y == LancerP[POSMLG4].y)||
								(LancerG[LancersGCChoosed].x == ArcP[POSMLG4].x - 100 && LancerG[LancersGCChoosed].y == ArcP[POSMLG4].y) ||
								(LancerG[LancersGCChoosed].x == ArcG[POSMLG4].x - 100 && LancerG[LancersGCChoosed].y == ArcG[POSMLG4].y))
								{
									MOVMLG4 = false;
								}
							}
							if(POSMLG4 != LancersGCChoosed && POSMLG4 < 8)
							{
								if(LancerG[LancersGCChoosed].x == LancerG[POSMLG4].x - 100 && LancerG[LancersGCChoosed].y == LancerG[POSMLG4].y)
								{
									MOVMLG4 = false;
								}
							}
							if(POSMLG4 < 4)
							{
								if((LancerG[LancersGCChoosed].x == KntG[POSMLG4].x - 100 && LancerG[LancersGCChoosed].y == KntG[POSMLG4].y) ||
								(LancerG[LancersGCChoosed].x == KntP[POSMLG4].x - 100 && LancerG[LancersGCChoosed].y == KntP[POSMLG4].y))
								{
									MOVMLG4 = false;
								}
							}
							if(POSMLG4 < 2)
							{
								if((LancerG[LancersGCChoosed].x == TorG[POSMLG4].x - 100 && LancerG[LancersGCChoosed].y == TorG[POSMLG4].y)||
								(LancerG[LancersGCChoosed].x == TorP[POSMLG4].x - 100 && LancerG[LancersGCChoosed].y == TorP[POSMLG4].y))
								{
									MOVMLG4 = false;
								}
							}
							if(POSMLG4 < 1)
							{
								if((LancerG[LancersGCChoosed].x == GnrlP[POSMLG4].x - 100 && LancerG[LancersGCChoosed].y == GnrlP[POSMLG4].y) ||
								(LancerG[LancersGCChoosed].x == KingG[POSMLG4].x - 100 && LancerG[LancersGCChoosed].y == KingG[POSMLG4].y) ||
								(LancerG[LancersGCChoosed].x == GnrlG[POSMLG4].x - 100 && LancerG[LancersGCChoosed].y == GnrlG[POSMLG4].y) ||
								(LancerG[LancersGCChoosed].x == KingP[POSMLG4].x - 100 && LancerG[LancersGCChoosed].y == KingP[POSMLG4].y))
								{
									MOVMLG4 = false;
								}
							}
						}
						
						{//Contador 5
							if(POSMLG5 < 8)
							{
								if((LancerG[LancersGCChoosed].x == TreeA.x && LancerG[LancersGCChoosed].y == TreeA.y + 50)||
								(LancerG[LancersGCChoosed].x == TreeB.x && LancerG[LancersGCChoosed].y == TreeB.y + 50)||
								(LancerG[LancersGCChoosed].x == TreeC.x && LancerG[LancersGCChoosed].y == TreeC.y + 50)||
								(LancerG[LancersGCChoosed].x == TreeD.x && LancerG[LancersGCChoosed].y == TreeD.y + 50)||
								(LancerG[LancersGCChoosed].x == TreeE.x && LancerG[LancersGCChoosed].y == TreeE.y + 50)||
								(LancerG[LancersGCChoosed].x == TreeF.x && LancerG[LancersGCChoosed].y == TreeF.y + 50))
								{
									MOVMLG5 = false;
								}
								
								if((LancerG[LancersGCChoosed].x == LancerP[POSMLG5].x  && LancerG[LancersGCChoosed].y == LancerP[POSMLG5].y + 50)||
								(LancerG[LancersGCChoosed].x == ArcP[POSMLG5].x  && LancerG[LancersGCChoosed].y == ArcP[POSMLG5].y + 50) ||
								(LancerG[LancersGCChoosed].x == ArcG[POSMLG5].x  && LancerG[LancersGCChoosed].y == ArcG[POSMLG5].y + 50))
								{
									MOVMLG5 = false;
								}
							}
							if(POSMLG5 != LancersGCChoosed && POSMLG5 < 8)
							{
								if(LancerG[LancersGCChoosed].x == LancerG[POSMLG5].x  && LancerG[LancersGCChoosed].y == LancerG[POSMLG5].y + 50)
								{
									MOVMLG5 = false;
								}
							}
							if(POSMLG5 < 4)
							{
								if((LancerG[LancersGCChoosed].x == KntG[POSMLG5].x  && LancerG[LancersGCChoosed].y == KntG[POSMLG5].y + 50) ||
								(LancerG[LancersGCChoosed].x == KntP[POSMLG5].x  && LancerG[LancersGCChoosed].y == KntP[POSMLG5].y + 50))
								{
									MOVMLG5 = false;
								}
							}
							if(POSMLG5 < 2)
							{
								if((LancerG[LancersGCChoosed].x == TorG[POSMLG5].x  && LancerG[LancersGCChoosed].y == TorG[POSMLG5].y + 50)||
								(LancerG[LancersGCChoosed].x == TorP[POSMLG5].x  && LancerG[LancersGCChoosed].y == TorP[POSMLG5].y + 50))
								{
									MOVMLG5 = false;
								}
							}
							
							if(POSMLG5 < 1)
							{
								if((LancerG[LancersGCChoosed].x == GnrlP[POSMLG5].x  && LancerG[LancersGCChoosed].y == GnrlP[POSMLG5].y + 50) ||
								(LancerG[LancersGCChoosed].x == KingG[POSMLG5].x  && LancerG[LancersGCChoosed].y == KingG[POSMLG5].y + 50) ||
								(LancerG[LancersGCChoosed].x == GnrlG[POSMLG5].x  && LancerG[LancersGCChoosed].y == GnrlG[POSMLG5].y + 50) ||
								(LancerG[LancersGCChoosed].x == KingP[POSMLG5].x  && LancerG[LancersGCChoosed].y == KingP[POSMLG5].y + 50))
								{
									MOVMLG5 = false;
								}
							}
						}
						
						{//Contador 6
							
							if(POSMLG6 < 8)
							{
								if((LancerG[LancersGCChoosed].x == TreeA.x && LancerG[LancersGCChoosed].y == TreeA.y + 100)||
								(LancerG[LancersGCChoosed].x == TreeB.x && LancerG[LancersGCChoosed].y == TreeB.y + 100)||
								(LancerG[LancersGCChoosed].x == TreeC.x && LancerG[LancersGCChoosed].y == TreeC.y + 100)||
								(LancerG[LancersGCChoosed].x == TreeD.x && LancerG[LancersGCChoosed].y == TreeD.y + 100)||
								(LancerG[LancersGCChoosed].x == TreeE.x && LancerG[LancersGCChoosed].y == TreeE.y + 100)||
								(LancerG[LancersGCChoosed].x == TreeF.x && LancerG[LancersGCChoosed].y == TreeF.y + 100)||
								(LancerG[LancersGCChoosed].x == TreeA.x && LancerG[LancersGCChoosed].y == TreeA.y + 50)||
								(LancerG[LancersGCChoosed].x == TreeB.x && LancerG[LancersGCChoosed].y == TreeB.y + 50)||
								(LancerG[LancersGCChoosed].x == TreeC.x && LancerG[LancersGCChoosed].y == TreeC.y + 50)||
								(LancerG[LancersGCChoosed].x == TreeD.x && LancerG[LancersGCChoosed].y == TreeD.y + 50)||
								(LancerG[LancersGCChoosed].x == TreeE.x && LancerG[LancersGCChoosed].y == TreeE.y + 50)||
								(LancerG[LancersGCChoosed].x == TreeF.x && LancerG[LancersGCChoosed].y == TreeF.y + 50))
								{
									MOVMLG6 = false;
								}
								
								if((LancerG[LancersGCChoosed].x == LancerP[POSMLG6].x  && LancerG[LancersGCChoosed].y == LancerP[POSMLG6].y + 100)||
								(LancerG[LancersGCChoosed].x == ArcP[POSMLG6].x  && LancerG[LancersGCChoosed].y == ArcP[POSMLG6].y + 100) ||
								(LancerG[LancersGCChoosed].x == ArcG[POSMLG6].x  && LancerG[LancersGCChoosed].y == ArcG[POSMLG6].y + 100))
								{
									MOVMLG6 = false;
								}
							}
							if(POSMLG6 != LancersGCChoosed && POSMLG6 < 8)
							{
								if(LancerG[LancersGCChoosed].x == LancerG[POSMLG6].x  && LancerG[LancersGCChoosed].y == LancerG[POSMLG6].y + 100)
								{
									MOVMLG6 = false;
								}
							}
							if(POSMLG6 < 4)
							{
								if((LancerG[LancersGCChoosed].x == KntG[POSMLG6].x  && LancerG[LancersGCChoosed].y == KntG[POSMLG6].y + 100) ||
								(LancerG[LancersGCChoosed].x == KntP[POSMLG6].x  && LancerG[LancersGCChoosed].y == KntP[POSMLG6].y + 100))
								{
									MOVMLG6 = false;
								}
							}
							if(POSMLG6 < 2)
							{
								if((LancerG[LancersGCChoosed].x == TorG[POSMLG6].x  && LancerG[LancersGCChoosed].y == TorG[POSMLG6].y + 100)||
								(LancerG[LancersGCChoosed].x == TorP[POSMLG6].x  && LancerG[LancersGCChoosed].y == TorP[POSMLG6].y + 100))
								{
									MOVMLG6 = false;
								}
							}
							
							if(POSMLG6 < 1)
							{
								if((LancerG[LancersGCChoosed].x == GnrlP[POSMLG6].x  && LancerG[LancersGCChoosed].y == GnrlP[POSMLG6].y + 100) ||
								(LancerG[LancersGCChoosed].x == KingG[POSMLG6].x  && LancerG[LancersGCChoosed].y == KingG[POSMLG6].y + 100) ||
								(LancerG[LancersGCChoosed].x == GnrlG[POSMLG6].x  && LancerG[LancersGCChoosed].y == GnrlG[POSMLG6].y + 100) ||
								(LancerG[LancersGCChoosed].x == KingP[POSMLG6].x  && LancerG[LancersGCChoosed].y == KingP[POSMLG6].y + 100))
								{
									MOVMLG6 = false;
								}
							}
						}
						
						if(LancersGCC == 1)
						{
							if(LancerG[LancersGCChoosed].x > 1)
							{
								if(LancersGCC != 2 && LancersGCC != 3 && LancersGCC != 4 && LancersGCC != 5 && LancersGCC != 6)
								{
									CountTime--;
									if(CountTime <= 0)
									{
										if(MOVMLG1 == null)
										{
											MOVMLG1 = true;
										}
										if(MOVMLG1)
										{	
											POSMLG1 += 1;
										}
										if(POSMLG1 > 10)
										{
											if(Mov1LG == false)
											{
												Mov1LG = true;
											}
											else if(Mov1LG == null)
											{
												LancersGCChoosed = null;
												Vez_Gregos = false;
												Vez_Persas = true;
												CML = 0;
												MOVMLG1 = null;
												ChooseG = null;
												LancersGCC = 0;
												CountTime = 100;
												
											}	
										}	
										else if(MOVMLG1 == false)
										{
											LancersGCC = 2;
										}
									}
								}
							}
							else
							{
								MOVMLG1 = false;
								LancersGCC = 2;
							}
						}
						if(LancersGCC == 2)
						{
							if(LancerG[LancersGCChoosed].x > 51)
							{
								if(LancersGCC != 1 && LancersGCC != 3 && LancersGCC != 4 && LancersGCC != 5 && LancersGCC != 6)
								{
									
									CountTime--;
									if(CountTime <= 0)
									{
										if(MOVMLG2 == null)
										{
											MOVMLG2 = true;
										}
										
										if(MOVMLG2)
										{	
											POSMLG2 += 1;
											if(POSMLG2 > 10)
											{
												if(Mov2LG == false)
												{
													Mov2LG = true;
												}
												else if(Mov2LG == null)
												{
													
												}	
											}	
										}
										if(POSMLG2 != LancersGCChoosed && POSMLG2 < 8)
											{
												if(LancerG[LancersGCChoosed].x == LancerG[POSMLG2].x + 100 && LancerG[LancersGCChoosed].y == LancerG[POSMLG2].y)
												{
													MOVMLG2 = false;
												}
											}
										
										if(MOVMLG2 == false)
										{
											LancersGCC = 3;
										}
									}
									
								}						
							}
							else
							{
								MOVMLG2 = false;
								LancersGCC = 3;
							}
						}
						if(LancersGCC == 3)
						{	
							if(LancerG[LancersGCChoosed].x < limit_right)
							{
								if(LancersGCC != 1 && LancersGCC != 2 && LancersGCC != 4 && LancersGCC != 5 && LancersGCC != 6)
								{
									CountTime--;
									if(CountTime <= 0)
									{
										if(MOVMLG3 == null)
										{
											MOVMLG3 = true;
										}
										if(MOVMLG3)
										{	
											POSMLG3 += 1;
											if(POSMLG3 > 10)
											{
												if(Mov3LG == false)
												{
													Mov3LG = true;
												}
												if(Mov3LG == null)
												{
													CML = 0;
													ChooseG = null;
													LancersGCC = 0;
													CountTime = 100;
													LancersGCChoosed = null;
													Vez_Gregos = false;
													Vez_Persas = true;
												}	
											}	
										}
										if(MOVMLG3 == false)
										{
											LancersGCC = 4;
										}
									}
								}
							}
							else
							{
								MOVMLG3 = false;
								LancersGCC = 4;
							}
						}
						if(LancersGCC == 4)
						{
							if(LancerG[LancersGCChoosed].x < limit_right-50)
							{
								if(LancersGCC != 1 && LancersGCC != 2 && LancersGCC != 3 && LancersGCC != 5 && LancersGCC != 6)
								{
									CountTime--;
									if(CountTime <= 0)
									{
										if(MOVMLG4 == null)
										{
											MOVMLG4 = true;
										}
										if(MOVMLG4)
										{	
											POSMLG4 += 1;
											if(POSMLG4 > 10)
											{
												if(Mov4LG == false)
												{
													Mov4LG = true;
												}
												if(Mov4LG == null)
												{
													CML = 0;
													ChooseG = null;
													LancersGCC = 0;
													CountTime = 100;
													LancersGCChoosed = null;
													Vez_Gregos = false;
													Vez_Persas = true;
												}	
											}	
										}
										if(MOVMLG4 == false)
										{
											LancersGCC = 5;
										}
									}
								}
							}
							else
							{
								MOVMLG4 = false;
								LancersGCC = 5;
							}
						}
						if(LancersGCC == 5)
						{
							if(LancerG[LancersGCChoosed].y > 101)
							{
								if(LancersGCC != 1 && LancersGCC != 2 && LancersGCC != 3 && LancersGCC != 4 && LancersGCC != 6)
								{
									CountTime--;
									if(CountTime <= 0)
									{
										if(MOVMLG5 == null)
										{
											MOVMLG5 = true;
										}
										if(MOVMLG5)
										{	
											POSMLG5 += 1;
											if(POSMLG5 > 10)
											{
												if(Mov5LG == false)
												{
													Mov5LG = true;
												}
												if(Mov5LG == null)
												{
													CML = 0;
													ChooseG = null;
													LancersGCC = 0;
													CountTime = 100;
													LancersGCChoosed = null;
													Vez_Gregos = false;
													Vez_Persas = true;
												}	
											}	
										}
										if(MOVMLG5 == false)
										{
											LancersGCC = 6;
										}
									}
								}
							}
							else
							{
								MOVMLG5 = false;
								LancersGCC = 6;
							}
						}
						if(LancersGCC == 6)
						{
							if(LancerG[LancersGCChoosed].y > 151)
							{
								if(LancersGCC != 1 && LancersGCC != 2 && LancersGCC != 3 && LancersGCC != 4 && LancersGCC != 5)
								{
									CountTime--;
									if(CountTime <= 0)
									{
										if(MOVMLG6 == null)
										{
											MOVMLG6 = true;
										}
										if(MOVMLG6)
										{	
											POSMLG6 += 1;
											if(POSMLG6 > 10)
											{
												if(Mov6LG == false)
												{
													Mov6LG = true;
												}
												if(Mov6LG == null)
												{
													CML = 0;
													ChooseG = null;
													LancersGCC = 0;
													CountTime = 100;
													LancersGCChoosed = null;
													Vez_Gregos = false;
													Vez_Persas = true;
												}	
											}	
										}	
					
										if(MOVMLG6 == false)
										{
											LancersGCC = 1;
										}
									}
								}
							}
							else
							{
								MOVMLG6 = false;
								LancersGCC = 1;
							}
						}
					}
				}
			}
		}
	}
}
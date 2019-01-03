var LancerPIA = true; 
var LancersPCC = 0;
var moverL;
var CountTime = 100;
var LancerPMove = false;
var CML = 0;
var LancersPCChoosed = null;
var Mov1LP = false;
var Mov2LP = false;
var Mov3LP = false;
var Mov4LP = false;
var Mov5LP = false;
var Mov6LP = false;
var MOVMLP1 = null;
var MOVMLP2 = null;
var MOVMLP3 = null;
var MOVMLP4 = null;
var MOVMLP5 = null;
var MOVMLP6 = null;
var ChooseLP;
var POSMLP1 = 0;
var POSMLP2 = 0;
var POSMLP3 = 0;
var POSMLP4 = 0;
var POSMLP5 = 0;
var POSMLP6 = 0;
var limit_down = 451;
var limit_right = 551;
var lancers_number = 8;

function PossibilitiesAILP()
{

	if(AIP)
	{
		if(Vez_Persas)
		{
			ChooseLP = Math.floor(randomRange(0,99));
			if(LancersPCChoosed == null && ChooseLP <= 75)
			{
				if(LancerP[0].y < LancerP[1].y && LancerP[0].y < LancerP[2].y && LancerP[0].y < LancerP[3].y && LancerP[0].y < LancerP[4].y && LancerP[0].y < LancerP[5].y && LancerP[0].y < LancerP[6].y && LancerP[0].y < LancerP[7].y)
				{
					LancersPCChoosed = 0;
				}
				else if(LancerP[1].y < LancerP[1].y && LancerP[0].y < LancerP[2].y && LancerP[1].y < LancerP[3].y && LancerP[1].y < LancerP[4].y && LancerP[1].y < LancerP[5].y && LancerP[1].y < LancerP[6].y && LancerP[1].y < LancerP[7].y)
				{
					LancersPCChoosed = 1;
				}
				else if(LancerP[2].y < LancerP[1].y && LancerP[2].y < LancerP[0].y && LancerP[2].y < LancerP[3].y && LancerP[2].y < LancerP[4].y && LancerP[2].y < LancerP[5].y && LancerP[2].y < LancerP[6].y && LancerP[2].y < LancerP[7].y)
				{
					LancersPCChoosed = 2;
				}
				else if(LancerP[3].y < LancerP[1].y && LancerP[3].y < LancerP[2].y && LancerP[3].y < LancerP[0].y && LancerP[3].y < LancerP[4].y && LancerP[3].y < LancerP[5].y && LancerP[3].y < LancerP[6].y && LancerP[3].y < LancerP[7].y)
				{
					LancersPCChoosed = 3;
				}
				else if(LancerP[4].y < LancerP[1].y && LancerP[4].y < LancerP[2].y && LancerP[4].y < LancerP[3].y && LancerP[4].y < LancerP[0].y && LancerP[4].y < LancerP[5].y && LancerP[4].y < LancerP[6].y && LancerP[4].y < LancerP[7].y)
				{
					LancersPCChoosed = 4;
				}
				else if(LancerP[5].y < LancerP[1].y && LancerP[5].y < LancerP[2].y && LancerP[5].y < LancerP[3].y && LancerP[5].y < LancerP[4].y && LancerP[5].y < LancerP[0].y && LancerP[5].y < LancerP[6].y && LancerP[5].y < LancerP[7].y)
				{
					LancersPCChoosed = 5;
				}
				else if(LancerP[6].y < LancerP[1].y && LancerP[6].y < LancerP[2].y && LancerP[6].y < LancerP[3].y && LancerP[6].y < LancerP[4].y && LancerP[6].y < LancerP[5].y && LancerP[6].y < LancerP[0].y && LancerP[6].y < LancerP[7].y)
				{
					LancersPCChoosed = 6;
				}
				else if(LancerP[7].y < LancerP[1].y && LancerP[7].y < LancerP[2].y && LancerP[7].y < LancerP[3].y && LancerP[7].y < LancerP[4].y && LancerP[7].y < LancerP[5].y && LancerP[7].y < LancerP[6].y && LancerP[7].y < LancerP[0].y)
				{
					LancersPCChoosed = 7;
				}
				else
				{
					ChooseLP = 85;
				}
			}
			else if(LancersPCChoosed == null && ChooseLP > 75)
			{
				LancersPCChoosed = Math.floor(randomRange(0,lancers_number-1));
			}
			
			if(ChooseP == 2)
			{
				if(LancerPMove)
				{	
					moverL = Math.floor(randomRange(1,99))
					
					if(moverL <= 5 && LancersPCC == 0 && LancerP[LancersPCChoosed].x > 1)
					{
						LancersPCC = 1;
					}
					else if(moverL > 5 && moverL <= 10 && LancersPCC == 0 && LancerP[LancersPCChoosed].x > 51)
					{
						LancersPCC = 2;
					}
					else if(moverL > 10 && moverL <= 15 && LancersPCC == 0  && LancerP[LancersPCChoosed].x < limit_right)
					{
						LancersPCC = 3;
					}
					else if(moverL > 15 && moverL <= 20 && LancersPCC == 0  && LancerP[LancersPCChoosed].x < limit_right-50)
					{
						LancersPCC = 4;
					}
					else if(moverL > 20 && moverL <= 50 && LancersPCC == 0  && LancerP[LancersPCChoosed].y < limit_down)
					{
						LancersPCC = 5;
					}
					else if(moverL > 50 && LancersPCC == 0  && LancerP[LancersPCChoosed].y < limit_down-50)
					{
						LancersPCC = 6;
					}
					else
					{
						moverL = Math.floor(randomRange(1,99))
					}
					
					if(Mov1LP)
					{
						Vez_Persas = false;
						Vez_Gregos = true;
						LancerP[LancersPCChoosed].x -= 50;
						CML = 0;
						ChooseP = null;
						LancersPCC = 0;
						CountTime = 100;
						LancersPCChoosed = null;
						Mov1LP = null;
						
					}
					if(Mov2LP)
					{
						Vez_Persas = false;
						Vez_Gregos = true;
						LancerP[LancersPCChoosed].x -= 100;
						CML = 0;
						ChooseP = null;
						LancersPCC = 0;
						CountTime = 100;
						LancersPCChoosed = null;
						Mov2LP = null;
						
					}
					if(Mov3LP)
					{
						Vez_Persas = false;
						Vez_Gregos = true;
						LancerP[LancersPCChoosed].x += 50;
						CML = 0;
						ChooseP = null;
						LancersPCC = 0;
						CountTime = 100;
						LancersPCChoosed = null;
						Mov3LP = null;
						
					}
					if(Mov4LP)
					{
						Vez_Persas = false;
						Vez_Gregos = true;
						LancerP[LancersPCChoosed].x += 100;
						CML = 0;
						ChooseP = null;
						LancersPCC = 0;
						CountTime = 100;
						LancersPCChoosed = null;
						Mov4LP = null;
						
					}
					if(Mov5LP)
					{
						Vez_Persas = false;
						Vez_Gregos = true;
						LancerP[LancersPCChoosed].y += 50;
						CML = 0;
						ChooseP = null;
						LancersPCC = 0;
						CountTime = 100;
						LancersPCChoosed = null;
						Mov5LP = null;
					}
					if(Mov6LP)
					{
						Vez_Persas = false;
						Vez_Gregos = true;
						LancerP[LancersPCChoosed].y += 100;
						CML = 0;
						ChooseP = null;
						LancersPCC = 0;
						CountTime = 100;
						LancersPCChoosed = null;
						Mov6LP = null;
						
					}
					if(LancersPCC != 0)
					{
						if(LancerP[LancersPCChoosed].y > 101)
						{
							context.drawImage(MovL, LancerP[LancersPCChoosed].x , LancerP[LancersPCChoosed].y - 50, LancerP[LancersPCChoosed].w, LancerP[LancersPCChoosed].h);			
						}
						if(LancerP[LancersPCChoosed].y > 151)
						{
							context.drawImage(MovL, LancerP[LancersPCChoosed].x , LancerP[LancersPCChoosed].y - 100, LancerP[LancersPCChoosed].w, LancerP[LancersPCChoosed].h);
						}
						if(LancerP[LancersPCChoosed].y < limit_down)
						{
							context.drawImage(MovL, LancerP[LancersPCChoosed].x, LancerP[LancersPCChoosed].y + 50, LancerP[LancersPCChoosed].w, LancerP[LancersPCChoosed].h);
						}
						if(LancerP[LancersPCChoosed].y < limit_down-50)
						{
							context.drawImage(MovL, LancerP[LancersPCChoosed].x, LancerP[LancersPCChoosed].y + 100, LancerP[LancersPCChoosed].w, LancerP[LancersPCChoosed].h);
						}
						context.drawImage(MovL, LancerP[LancersPCChoosed].x + 50 , LancerP[LancersPCChoosed].y, LancerP[LancersPCChoosed].w, LancerP[LancersPCChoosed].h);	
						context.drawImage(MovL, LancerP[LancersPCChoosed].x + 100, LancerP[LancersPCChoosed].y, LancerP[LancersPCChoosed].w, LancerP[LancersPCChoosed].h);	
						context.drawImage(MovL, LancerP[LancersPCChoosed].x - 50, LancerP[LancersPCChoosed].y, LancerP[LancersPCChoosed].w, LancerP[LancersPCChoosed].h);	
						context.drawImage(MovL, LancerP[LancersPCChoosed].x - 100, LancerP[LancersPCChoosed].y, LancerP[LancersPCChoosed].w, LancerP[LancersPCChoosed].h);	
					}
					if(LancersPCChoosed != null)
					{
						{//Contador 1
							if(POSMLP1 < 1)
							{
								if((LancerP[LancersPCChoosed].x == GnrlP[POSMLP1].x + 50 && LancerP[LancersPCChoosed].y == GnrlP[POSMLP1].y) ||
								(LancerP[LancersPCChoosed].x == KingG[POSMLP1].x + 50 && LancerP[LancersPCChoosed].y == KingG[POSMLP1].y) ||
								(LancerP[LancersPCChoosed].x == GnrlG[POSMLP1].x + 50 && LancerP[LancersPCChoosed].y == GnrlG[POSMLP1].y) ||
								(LancerP[LancersPCChoosed].x == KingP[POSMLP1].x + 50 && LancerP[LancersPCChoosed].y == KingP[POSMLP1].y))
								{
									MOVMLP1 = false;
								}
							}
							if(POSMLP1 < 2)
							{
								if((LancerP[LancersPCChoosed].x == TorG[POSMLP1].x + 50 && LancerP[LancersPCChoosed].y == TorG[POSMLP1].y)||
								(LancerP[LancersPCChoosed].x == TorP[POSMLP1].x + 50 && LancerP[LancersPCChoosed].y == TorP[POSMLP1].y))
								{
									MOVMLP1 = false;
								}
							}
							if(POSMLP1 < 4)
							{
								if((LancerP[LancersPCChoosed].x == KntG[POSMLP1].x + 50 && LancerP[LancersPCChoosed].y == KntG[POSMLP1].y) ||
								(LancerP[LancersPCChoosed].x == KntP[POSMLP1].x + 50 && LancerP[LancersPCChoosed].y == KntP[POSMLP1].y))
								{
									MOVMLP1 = false;
								}
							}
							if(POSMLP1 != LancersPCChoosed && POSMLP1 < 8)
							{
								if(LancerP[LancersPCChoosed].x == LancerG[POSMLP1].x + 50 && LancerP[LancersPCChoosed].y == LancerG[POSMLP1].y)
								{
									MOVMLP1 = false;
								}
							}
							if(POSMLP1 < 8)
							{
								if((LancerP[LancersPCChoosed].x == TreeA.x + 50 && LancerP[LancersPCChoosed].y == TreeA.y)||
								(LancerP[LancersPCChoosed].x == TreeB.x + 50 && LancerP[LancersPCChoosed].y == TreeB.y)||
								(LancerP[LancersPCChoosed].x == TreeC.x + 50 && LancerP[LancersPCChoosed].y == TreeC.y)||
								(LancerP[LancersPCChoosed].x == TreeD.x + 50 && LancerP[LancersPCChoosed].y == TreeD.y)||
								(LancerP[LancersPCChoosed].x == TreeE.x + 50 && LancerP[LancersPCChoosed].y == TreeE.y)||
								(LancerP[LancersPCChoosed].x == TreeF.x + 50 && LancerP[LancersPCChoosed].y == TreeF.y))
								{
									MOVMLP1 = false;
								}
								
								if((LancerP[LancersPCChoosed].x == LancerP[POSMLP1].x + 50 && LancerP[LancersPCChoosed].y == LancerP[POSMLP1].y)||
								(LancerP[LancersPCChoosed].x == ArcP[POSMLP1].x + 50 && LancerP[LancersPCChoosed].y == ArcP[POSMLP1].y) ||
								(LancerP[LancersPCChoosed].x == ArcG[POSMLP1].x + 50 && LancerP[LancersPCChoosed].y == ArcG[POSMLP1].y))
								{
									MOVMLP1 = false;
								}
							}	
						}
						
						{//Contador 2
							if(POSMLP2 < 1)
							{
								if((LancerP[LancersPCChoosed].x == GnrlP[POSMLP2].x + 100 && LancerP[LancersPCChoosed].y == GnrlP[POSMLP2].y) ||
								(LancerP[LancersPCChoosed].x == KingG[POSMLP2].x + 100 && LancerP[LancersPCChoosed].y == KingG[POSMLP2].y) ||
								(LancerP[LancersPCChoosed].x == GnrlG[POSMLP2].x + 100 && LancerP[LancersPCChoosed].y == GnrlG[POSMLP2].y) ||
								(LancerP[LancersPCChoosed].x == KingP[POSMLP2].x + 100 && LancerP[LancersPCChoosed].y == KingP[POSMLP2].y))
								{
									MOVMLP2 = false;
								}
							}
							if(POSMLP2 < 2)
							{
								if((LancerP[LancersPCChoosed].x == TorG[POSMLP2].x + 100 && LancerP[LancersPCChoosed].y == TorG[POSMLP2].y)||
								(LancerP[LancersPCChoosed].x == TorP[POSMLP2].x + 100 && LancerP[LancersPCChoosed].y == TorP[POSMLP2].y))
								{
									MOVMLP2 = false;
								}
							}
							if(POSMLP2 < 4)
							{
								if((LancerP[LancersPCChoosed].x == KntG[POSMLP2].x + 100 && LancerP[LancersPCChoosed].y == KntG[POSMLP2].y) ||
								(LancerP[LancersPCChoosed].x == KntP[POSMLP2].x + 100 && LancerP[LancersPCChoosed].y == KntP[POSMLP2].y))
								{
									MOVMLP2 = false;
								}
							}
							if(POSMLP2 != LancersPCChoosed && POSMLP2 < 8)
							{
								if(LancerP[LancersPCChoosed].x == LancerG[POSMLP2].x + 50 && LancerP[LancersPCChoosed].y == LancerG[POSMLP2].y)
								{
									MOVMLP2 = false;
								}
							}
							if(POSMLP2 < 8)
							{
								if((LancerP[LancersPCChoosed].x == TreeA.x + 50 && LancerP[LancersPCChoosed].y == TreeA.y)||
								(LancerP[LancersPCChoosed].x == TreeB.x + 50 && LancerP[LancersPCChoosed].y == TreeB.y)||
								(LancerP[LancersPCChoosed].x == TreeC.x + 50 && LancerP[LancersPCChoosed].y == TreeC.y)||
								(LancerP[LancersPCChoosed].x == TreeD.x + 50 && LancerP[LancersPCChoosed].y == TreeD.y)||
								(LancerP[LancersPCChoosed].x == TreeE.x + 50 && LancerP[LancersPCChoosed].y == TreeE.y)||
								(LancerP[LancersPCChoosed].x == TreeF.x + 50 && LancerP[LancersPCChoosed].y == TreeF.y)||
								(LancerP[LancersPCChoosed].x == TreeA.x + 100 && LancerP[LancersPCChoosed].y == TreeA.y)||
								(LancerP[LancersPCChoosed].x == TreeB.x + 100 && LancerP[LancersPCChoosed].y == TreeB.y)||
								(LancerP[LancersPCChoosed].x == TreeC.x + 100 && LancerP[LancersPCChoosed].y == TreeC.y)||
								(LancerP[LancersPCChoosed].x == TreeD.x + 100 && LancerP[LancersPCChoosed].y == TreeD.y)||
								(LancerP[LancersPCChoosed].x == TreeE.x + 100 && LancerP[LancersPCChoosed].y == TreeE.y)||
								(LancerP[LancersPCChoosed].x == TreeF.x + 100 && LancerP[LancersPCChoosed].y == TreeF.y))
								{
									MOVMLP2 = false;
								}
								
								if((LancerP[LancersPCChoosed].x == LancerP[POSMLP2].x + 100 && LancerP[LancersPCChoosed].y == LancerP[POSMLP2].y)||
								(LancerP[LancersPCChoosed].x == ArcP[POSMLP2].x + 100 && LancerP[LancersPCChoosed].y == ArcP[POSMLP2].y) ||
								(LancerP[LancersPCChoosed].x == ArcG[POSMLP2].x + 100 && LancerP[LancersPCChoosed].y == ArcG[POSMLP2].y))
								{
									MOVMLP2 = false;
								}
							}
						}
						
						{//Contador 3
							if(POSMLP3 < 8)
							{
								if((LancerP[LancersPCChoosed].x == TreeA.x - 50 && LancerP[LancersPCChoosed].y == TreeA.y)||
								(LancerP[LancersPCChoosed].x == TreeB.x - 50 && LancerP[LancersPCChoosed].y == TreeB.y)||
								(LancerP[LancersPCChoosed].x == TreeC.x - 50 && LancerP[LancersPCChoosed].y == TreeC.y)||
								(LancerP[LancersPCChoosed].x == TreeD.x - 50 && LancerP[LancersPCChoosed].y == TreeD.y)||
								(LancerP[LancersPCChoosed].x == TreeE.x - 50 && LancerP[LancersPCChoosed].y == TreeE.y)||
								(LancerP[LancersPCChoosed].x == TreeF.x - 50 && LancerP[LancersPCChoosed].y == TreeF.y))
								{
									MOVMLP3 = false;
								}
								
								if((LancerP[LancersPCChoosed].x == LancerP[POSMLP3].x - 50 && LancerP[LancersPCChoosed].y == LancerP[POSMLP3].y)||
								(LancerP[LancersPCChoosed].x == ArcP[POSMLP3].x - 50 && LancerP[LancersPCChoosed].y == ArcP[POSMLP3].y) ||
								(LancerP[LancersPCChoosed].x == ArcG[POSMLP3].x - 50 && LancerP[LancersPCChoosed].y == ArcG[POSMLP3].y))
								{
									MOVMLP3 = false;
								}
							}
							if(POSMLP3 != LancersPCChoosed && POSMLP3 < 8)
							{
								if(LancerP[LancersPCChoosed].x == LancerG[POSMLP3].x - 50 && LancerP[LancersPCChoosed].y == LancerG[POSMLP3].y)
								{
									MOVMLP3 = false;
								}
							}
							if(POSMLP3 < 4)
							{
								if((LancerP[LancersPCChoosed].x == KntG[POSMLP3].x - 50 && LancerP[LancersPCChoosed].y == KntG[POSMLP3].y) ||
								(LancerP[LancersPCChoosed].x == KntP[POSMLP3].x - 50 && LancerP[LancersPCChoosed].y == KntP[POSMLP3].y))
								{
									MOVMLP3 = false;
								}
							}
							if(POSMLP3 < 2)
							{
								if((LancerP[LancersPCChoosed].x == TorG[POSMLP3].x - 50 && LancerP[LancersPCChoosed].y == TorG[POSMLP3].y)||
								(LancerP[LancersPCChoosed].x == TorP[POSMLP3].x - 50 && LancerP[LancersPCChoosed].y == TorP[POSMLP3].y))
								{
									MOVMLP3 = false;
								}
							}
							if(POSMLP3 < 1)
							{
								if((LancerP[LancersPCChoosed].x == GnrlP[POSMLP3].x - 50 && LancerP[LancersPCChoosed].y == GnrlP[POSMLP3].y) ||
								(LancerP[LancersPCChoosed].x == KingG[POSMLP3].x - 50 && LancerP[LancersPCChoosed].y == KingG[POSMLP3].y) ||
								(LancerP[LancersPCChoosed].x == GnrlG[POSMLP3].x - 50 && LancerP[LancersPCChoosed].y == GnrlG[POSMLP3].y) ||
								(LancerP[LancersPCChoosed].x == KingP[POSMLP3].x - 50 && LancerP[LancersPCChoosed].y == KingP[POSMLP3].y))
								{
									MOVMLP3 = false;
								}
							}
						}
						
						{//Contador 4
							if(POSMLP4 < 8)
							{
								if((LancerP[LancersPCChoosed].x == TreeA.x - 50 && LancerP[LancersPCChoosed].y == TreeA.y)||
								(LancerP[LancersPCChoosed].x == TreeB.x - 50 && LancerP[LancersPCChoosed].y == TreeB.y)||
								(LancerP[LancersPCChoosed].x == TreeC.x - 50 && LancerP[LancersPCChoosed].y == TreeC.y)||
								(LancerP[LancersPCChoosed].x == TreeD.x - 50 && LancerP[LancersPCChoosed].y == TreeD.y)||
								(LancerP[LancersPCChoosed].x == TreeE.x - 50 && LancerP[LancersPCChoosed].y == TreeE.y)||
								(LancerP[LancersPCChoosed].x == TreeF.x - 50 && LancerP[LancersPCChoosed].y == TreeF.y)||
								(LancerP[LancersPCChoosed].x == TreeA.x - 100 && LancerP[LancersPCChoosed].y == TreeA.y)||
								(LancerP[LancersPCChoosed].x == TreeB.x - 100 && LancerP[LancersPCChoosed].y == TreeB.y)||
								(LancerP[LancersPCChoosed].x == TreeC.x - 100 && LancerP[LancersPCChoosed].y == TreeC.y)||
								(LancerP[LancersPCChoosed].x == TreeD.x - 100 && LancerP[LancersPCChoosed].y == TreeD.y)||
								(LancerP[LancersPCChoosed].x == TreeE.x - 100 && LancerP[LancersPCChoosed].y == TreeE.y)||
								(LancerP[LancersPCChoosed].x == TreeF.x - 100 && LancerP[LancersPCChoosed].y == TreeF.y))
								{
									MOVMLP4 = false;
								}
								
								if((LancerP[LancersPCChoosed].x == LancerP[POSMLP4].x - 100 && LancerP[LancersPCChoosed].y == LancerP[POSMLP4].y)||
								(LancerP[LancersPCChoosed].x == ArcP[POSMLP4].x - 100 && LancerP[LancersPCChoosed].y == ArcP[POSMLP4].y) ||
								(LancerP[LancersPCChoosed].x == ArcG[POSMLP4].x - 100 && LancerP[LancersPCChoosed].y == ArcG[POSMLP4].y))
								{
									MOVMLP4 = false;
								}
							}
							if(POSMLP4 != LancersPCChoosed && POSMLP4 < 8)
							{
								if(LancerP[LancersPCChoosed].x == LancerG[POSMLP4].x - 100 && LancerP[LancersPCChoosed].y == LancerG[POSMLP4].y)
								{
									MOVMLP4 = false;
								}
							}
							if(POSMLP4 < 4)
							{
								if((LancerP[LancersPCChoosed].x == KntG[POSMLP4].x - 100 && LancerP[LancersPCChoosed].y == KntG[POSMLP4].y) ||
								(LancerP[LancersPCChoosed].x == KntP[POSMLP4].x - 100 && LancerP[LancersPCChoosed].y == KntP[POSMLP4].y))
								{
									MOVMLP4 = false;
								}
							}
							if(POSMLP4 < 2)
							{
								if((LancerP[LancersPCChoosed].x == TorG[POSMLP4].x - 100 && LancerP[LancersPCChoosed].y == TorG[POSMLP4].y)||
								(LancerP[LancersPCChoosed].x == TorP[POSMLP4].x - 100 && LancerP[LancersPCChoosed].y == TorP[POSMLP4].y))
								{
									MOVMLP4 = false;
								}
							}
							if(POSMLP4 < 1)
							{
								if((LancerP[LancersPCChoosed].x == GnrlP[POSMLP4].x - 100 && LancerP[LancersPCChoosed].y == GnrlP[POSMLP4].y) ||
								(LancerP[LancersPCChoosed].x == KingG[POSMLP4].x - 100 && LancerP[LancersPCChoosed].y == KingG[POSMLP4].y) ||
								(LancerP[LancersPCChoosed].x == GnrlG[POSMLP4].x - 100 && LancerP[LancersPCChoosed].y == GnrlG[POSMLP4].y) ||
								(LancerP[LancersPCChoosed].x == KingP[POSMLP4].x - 100 && LancerP[LancersPCChoosed].y == KingP[POSMLP4].y))
								{
									MOVMLP4 = false;
								}
							}
						}
						
						{//Contador 5
							if(POSMLP5 < 8)
							{
								if((LancerP[LancersPCChoosed].x == TreeA.x && LancerP[LancersPCChoosed].y == TreeA.y - 50)||
								(LancerP[LancersPCChoosed].x == TreeB.x && LancerP[LancersPCChoosed].y == TreeB.y - 50)||
								(LancerP[LancersPCChoosed].x == TreeC.x && LancerP[LancersPCChoosed].y == TreeC.y - 50)||
								(LancerP[LancersPCChoosed].x == TreeD.x && LancerP[LancersPCChoosed].y == TreeD.y - 50)||
								(LancerP[LancersPCChoosed].x == TreeE.x && LancerP[LancersPCChoosed].y == TreeE.y - 50)||
								(LancerP[LancersPCChoosed].x == TreeF.x && LancerP[LancersPCChoosed].y == TreeF.y - 50))
								{
									MOVMLP5 = false;
								}
								
								if((LancerP[LancersPCChoosed].x == LancerG[POSMLP5].x  && LancerP[LancersPCChoosed].y == LancerG[POSMLP5].y - 50)||
								(LancerP[LancersPCChoosed].x == ArcP[POSMLP5].x  && LancerP[LancersPCChoosed].y == ArcP[POSMLP5].y - 50) ||
								(LancerP[LancersPCChoosed].x == ArcG[POSMLP5].x  && LancerP[LancersPCChoosed].y == ArcG[POSMLP5].y - 50))
								{
									MOVMLP5 = false;
								}
							}
							if(POSMLP5 != LancersPCChoosed && POSMLP5 < 8)
							{
								if(LancerP[LancersPCChoosed].x == LancerP[POSMLP5].x  && LancerP[LancersPCChoosed].y == LancerP[POSMLP5].y - 50)
								{
									MOVMLP5 = false;
								}
							}
							if(POSMLP5 < 4)
							{
								if((LancerP[LancersPCChoosed].x == KntG[POSMLP5].x  && LancerP[LancersPCChoosed].y == KntG[POSMLP5].y - 50) ||
								(LancerP[LancersPCChoosed].x == KntP[POSMLP5].x  && LancerP[LancersPCChoosed].y == KntP[POSMLP5].y - 50))
								{
									MOVMLP5 = false;
								}
							}
							if(POSMLP5 < 2)
							{
								if((LancerP[LancersPCChoosed].x == TorG[POSMLP5].x  && LancerP[LancersPCChoosed].y == TorG[POSMLP5].y - 50)||
								(LancerP[LancersPCChoosed].x == TorP[POSMLP5].x  && LancerP[LancersPCChoosed].y == TorP[POSMLP5].y - 50))
								{
									MOVMLP5 = false;
								}
							}
							
							if(POSMLP5 < 1)
							{
								if((LancerP[LancersPCChoosed].x == GnrlP[POSMLP5].x  && LancerP[LancersPCChoosed].y == GnrlP[POSMLP5].y - 50) ||
								(LancerP[LancersPCChoosed].x == KingG[POSMLP5].x  && LancerP[LancersPCChoosed].y == KingG[POSMLP5].y - 50) ||
								(LancerP[LancersPCChoosed].x == GnrlG[POSMLP5].x  && LancerP[LancersPCChoosed].y == GnrlG[POSMLP5].y - 50) ||
								(LancerP[LancersPCChoosed].x == KingP[POSMLP5].x  && LancerP[LancersPCChoosed].y == KingP[POSMLP5].y - 50))
								{
									MOVMLP5 = false;
								}
							}
						}
						
						{//Contador 6
							
							if(POSMLP6 < 8)
							{
								if((LancerP[LancersPCChoosed].x == TreeA.x && LancerP[LancersPCChoosed].y == TreeA.y - 100)||
								(LancerP[LancersPCChoosed].x == TreeB.x && LancerP[LancersPCChoosed].y == TreeB.y - 100)||
								(LancerP[LancersPCChoosed].x == TreeC.x && LancerP[LancersPCChoosed].y == TreeC.y - 100)||
								(LancerP[LancersPCChoosed].x == TreeD.x && LancerP[LancersPCChoosed].y == TreeD.y - 100)||
								(LancerP[LancersPCChoosed].x == TreeE.x && LancerP[LancersPCChoosed].y == TreeE.y - 100)||
								(LancerP[LancersPCChoosed].x == TreeF.x && LancerP[LancersPCChoosed].y == TreeF.y - 100)||
								(LancerP[LancersPCChoosed].x == TreeA.x && LancerP[LancersPCChoosed].y == TreeA.y - 50)||
								(LancerP[LancersPCChoosed].x == TreeB.x && LancerP[LancersPCChoosed].y == TreeB.y - 50)||
								(LancerP[LancersPCChoosed].x == TreeC.x && LancerP[LancersPCChoosed].y == TreeC.y - 50)||
								(LancerP[LancersPCChoosed].x == TreeD.x && LancerP[LancersPCChoosed].y == TreeD.y - 50)||
								(LancerP[LancersPCChoosed].x == TreeE.x && LancerP[LancersPCChoosed].y == TreeE.y - 50)||
								(LancerP[LancersPCChoosed].x == TreeF.x && LancerP[LancersPCChoosed].y == TreeF.y - 50))
								{
									MOVMLP6 = false;
								}
								
								if((LancerP[LancersPCChoosed].x == LancerG[POSMLP6].x  && LancerP[LancersPCChoosed].y == LancerG[POSMLP6].y - 100)||
								(LancerP[LancersPCChoosed].x == ArcP[POSMLP6].x  && LancerP[LancersPCChoosed].y == ArcP[POSMLP6].y - 100) ||
								(LancerP[LancersPCChoosed].x == ArcG[POSMLP6].x  && LancerP[LancersPCChoosed].y == ArcG[POSMLP6].y - 100))
								{
									MOVMLP6 = false;
								}
							}
							if(POSMLP6 != LancersPCChoosed && POSMLP6 < 8)
							{
								if(LancerP[LancersPCChoosed].x == LancerP[POSMLP6].x  && LancerP[LancersPCChoosed].y == LancerP[POSMLP6].y - 100)
								{
									MOVMLP6 = false;
								}
							}
							if(POSMLP6 < 4)
							{
								if((LancerP[LancersPCChoosed].x == KntG[POSMLP6].x  && LancerP[LancersPCChoosed].y == KntG[POSMLP6].y - 100) ||
								(LancerP[LancersPCChoosed].x == KntP[POSMLP6].x  && LancerP[LancersPCChoosed].y == KntP[POSMLP6].y - 100))
								{
									MOVMLP6 = false;
								}
							}
							if(POSMLP6 < 2)
							{
								if((LancerP[LancersPCChoosed].x == TorG[POSMLP6].x  && LancerP[LancersPCChoosed].y == TorG[POSMLP6].y - 100)||
								(LancerP[LancersPCChoosed].x == TorP[POSMLP6].x  && LancerP[LancersPCChoosed].y == TorP[POSMLP6].y - 100))
								{
									MOVMLP6 = false;
								}
							}
							
							if(POSMLP6 < 1)
							{
								if((LancerP[LancersPCChoosed].x == GnrlP[POSMLP6].x  && LancerP[LancersPCChoosed].y == GnrlP[POSMLP6].y - 100) ||
								(LancerP[LancersPCChoosed].x == KingG[POSMLP6].x  && LancerP[LancersPCChoosed].y == KingG[POSMLP6].y - 100) ||
								(LancerP[LancersPCChoosed].x == GnrlG[POSMLP6].x  && LancerP[LancersPCChoosed].y == GnrlG[POSMLP6].y - 100) ||
								(LancerP[LancersPCChoosed].x == KingP[POSMLP6].x  && LancerP[LancersPCChoosed].y == KingP[POSMLP6].y - 100))
								{
									MOVMLP6 = false;
								}
							}
						}
						
						if(LancersPCC == 1)
						{
							if(LancerP[LancersPCChoosed].x > 1)
							{
								if(LancersPCC != 2 && LancersPCC != 3 && LancersPCC != 4 && LancersPCC != 5 && LancersPCC != 6)
								{
									CountTime--;
									if(CountTime <= 0)
									{
										if(MOVMLP1 == null)
										{
											MOVMLP1 = true;
										}
										if(MOVMLP1)
										{	
											POSMLP1 += 1;
										}
										if(POSMLP1 > 10)
										{
											if(Mov1LP == false)
											{
												Mov1LP = true;
											}
											else if(Mov1LP == null)
											{
												LancersPCChoosed = null;
												Vez_Persas = false;
												Vez_Gregos = true;
												CML = 0;
												MOVMLP1 = null;
												ChooseP = null;
												LancersPCC = 0;
												CountTime = 100;
												
											}	
										}	
										else if(MOVMLP1 == false)
										{
											LancersPCC = 2;
										}
									}
								}
							}
							else
							{
								MOVMLP1 = false;
								LancersPCC = 2;
							}
						}
						if(LancersPCC == 2)
						{
							if(LancerP[LancersPCChoosed].x > 51)
							{
								if(LancersPCC != 1 && LancersPCC != 3 && LancersPCC != 4 && LancersPCC != 5 && LancersPCC != 6)
								{
									
									CountTime--;
									if(CountTime <= 0)
									{
										if(MOVMLP2 == null)
										{
											MOVMLP2 = true;
										}
										
										if(MOVMLP2)
										{	
											POSMLP2 += 1;
											if(POSMLP2 > 10)
											{
												if(Mov2LP == false)
												{
													Mov2LP = true;
												}
												else if(Mov2LP == null)
												{
													
												}	
											}	
										}
										if(POSMLP2 != LancersPCChoosed && POSMLP2 < 8)
											{
												if(LancerP[LancersPCChoosed].x == LancerG[POSMLP2].x + 100 && LancerP[LancersPCChoosed].y == LancerG[POSMLP2].y)
												{
													MOVMLP2 = false;
												}
											}
										
										if(MOVMLP2 == false)
										{
											LancersPCC = 3;
										}
									}
									
								}						
							}
							else
							{
								MOVMLP2 = false;
								LancersPCC = 3;
							}
						}
						if(LancersPCC == 3)
						{	
							if(LancerP[LancersPCChoosed].x < limit_right)
							{
								if(LancersPCC != 1 && LancersPCC != 2 && LancersPCC != 4 && LancersPCC != 5 && LancersPCC != 6)
								{
									CountTime--;
									if(CountTime <= 0)
									{
										if(MOVMLP3 == null)
										{
											MOVMLP3 = true;
										}
										if(MOVMLP3)
										{	
											POSMLP3 += 1;
											if(POSMLP3 > 10)
											{
												if(Mov3LP == false)
												{
													Mov3LP = true;
												}
												if(Mov3LP == null)
												{
													CML = 0;
													ChooseP = null;
													LancersPCC = 0;
													CountTime = 100;
													LancersPCChoosed = null;
													Vez_Persas = false;
													Vez_Gregos = true;
												}	
											}	
										}
										if(MOVMLP3 == false)
										{
											LancersPCC = 4;
										}
									}
								}
							}
							else
							{
								MOVMLP3 = false;
								LancersPCC = 4;
							}
						}
						if(LancersPCC == 4)
						{
							if(LancerP[LancersPCChoosed].x < limit_right-50)
							{
								if(LancersPCC != 1 && LancersPCC != 2 && LancersPCC != 3 && LancersPCC != 5 && LancersPCC != 6)
								{
									CountTime--;
									if(CountTime <= 0)
									{
										if(MOVMLP4 == null)
										{
											MOVMLP4 = true;
										}
										if(MOVMLP4)
										{	
											POSMLP4 += 1;
											if(POSMLP4 > 10)
											{
												if(Mov4LP == false)
												{
													Mov4LP = true;
												}
												if(Mov4LP == null)
												{
													CML = 0;
													ChooseP = null;
													LancersPCC = 0;
													CountTime = 100;
													LancersPCChoosed = null;
													Vez_Persas = false;
													Vez_Gregos = true;
												}	
											}	
										}
										if(MOVMLP4 == false)
										{
											LancersPCC = 5;
										}
									}
								}
							}
							else
							{
								MOVMLP4 = false;
								LancersPCC = 5;
							}
						}
						if(LancersPCC == 5)
						{
							if(LancerP[LancersPCChoosed].y < limit_down)
							{
								if(LancersPCC != 1 && LancersPCC != 2 && LancersPCC != 3 && LancersPCC != 4 && LancersPCC != 6)
								{
									CountTime--;
									if(CountTime <= 0)
									{
										if(MOVMLP5 == null)
										{
											MOVMLP5 = true;
										}
										if(MOVMLP5)
										{	
											POSMLP5 += 1;
											if(POSMLP5 > 10)
											{
												if(Mov5LP == false)
												{
													Mov5LP = true;
												}
												if(Mov5LP == null)
												{
													CML = 0;
													ChooseP = null;
													LancersPCC = 0;
													CountTime = 100;
													LancersPCChoosed = null;
													Vez_Persas = false;
													Vez_Gregos = true;
												}	
											}	
										}
										if(MOVMLP5 == false)
										{
											LancersPCC = 6;
										}
									}
								}
							}
							else
							{
								MOVMLP5 = false;
								LancersPCC = 6;
							}
						}
						if(LancersPCC == 6)
						{
							if(LancerP[LancersPCChoosed].y < limit_down - 50)
							{
								if(LancersPCC != 1 && LancersPCC != 2 && LancersPCC != 3 && LancersPCC != 4 && LancersPCC != 5)
								{
									CountTime--;
									if(CountTime <= 0)
									{
										if(MOVMLP6 == null)
										{
											MOVMLP6 = true;
										}
										if(MOVMLP6)
										{	
											POSMLP6 += 1;
											if(POSMLP6 > 10)
											{
												if(Mov6LP == false)
												{
													Mov6LP = true;
												}
												if(Mov6LP == null)
												{
													CML = 0;
													ChooseP = null;
													LancersPCC = 0;
													CountTime = 100;
													LancersPCChoosed = null;
													Vez_Persas = false;
													Vez_Gregos = true;
												}	
											}	
										}	
					
										if(MOVMLP6 == false)
										{
											LancersPCC = 1;
										}
									}
								}
							}
							else
							{
								MOVMLP6 = false;
								LancersPCC = 1;
							}
						}
					}
				}
			}
		}
	}
}
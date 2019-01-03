var GnrlPIA = true; 
var GnrlsPCC = 0;
var moverG;
var CountTime = 100;
var GnrlPMove = false;
var CMG = 0;

var Mov1GP = false;
var Mov2GP = false;
var Mov3GP = false;
var Mov4GP = false;

var MOVMGP1 = null;
var MOVMGP2 = null;
var MOVMGP3 = null;
var MOVMGP4 = null;

var POSMGP1 = 0;
var POSMGP2 = 0;
var POSMGP3 = 0;
var POSMGP4 = 0;
var limit_down = 451;
var limit_right = 351;

function PossibilitiesAIGP()
{
	if(AIP)
	{
		if(Vez_Persas)
		{
			if(ChooseP == 0)
			{	
				if(GnrlPMove)
				{	
					moverG = Math.floor(randomRange(1,99));
					
					if(moverG <= 25 && GnrlsPCC == 0)
					{
						GnrlsPCC = 1;
					}
					if(moverG > 25 && moverG <= 50 && GnrlsPCC == 0)
					{
						GnrlsPCC = 2;
					}
					if(moverG > 50 && moverG <= 75 && GnrlsPCC == 0)
					{
						GnrlsPCC = 3;
					}
					if(moverG > 75 && GnrlsPCC == 0)
					{
						GnrlsPCC = 4;
					}
						
					if(Mov1GP)
					{
						Vez_Persas = false;
						Vez_Gregos = true;
						GnrlP[0].x -= 100;
						GnrlP[0].y += 100;
						ChooseP = null;
						GnrlsPCC = 0;
						CountTime = 100;
						CMG = 0;
						Mov1GP = null;
						
					}
					if(Mov2GP)
					{
						Vez_Persas = false;
						Vez_Gregos = true;
						GnrlP[0].x -= 50;
						GnrlP[0].y += 50;
						ChooseP = null;
						GnrlsPCC = 0;
						CountTime = 100;
						CMG = 0;
						Mov2GP = null;
						
					}
					if(Mov3GP)
					{
						Vez_Persas = false;
						Vez_Gregos = true;
						GnrlP[0].x += 100;
						GnrlP[0].y += 100;
						ChooseP = null;
						GnrlsPCC = 0;
						CountTime = 100;
						CMG = 0;
						Mov3GP = null;
						
					}
					if(Mov4GP)
					{
						Vez_Persas = false;
						Vez_Gregos = true;
						GnrlP[0].x += 50;
						GnrlP[0].y += 50;
						ChooseP = null;
						GnrlsPCC = 0;
						CountTime = 100;
						CMG = 0;
						Mov4GP = null;
						
					}
					
					if(GnrlsPCC != 0)
					{
						if(GnrlP[0].y < limit_down)
						{
							context.drawImage(MovG, GnrlP[0].x + 50, GnrlP[0].y + 50, GnrlP[0].w, GnrlP[0].h);
							context.drawImage(MovG, GnrlP[0].x - 50, GnrlP[0].y + 50, GnrlP[0].w, GnrlP[0].h);
						}
						if(GnrlP[0].y < limit_down-50)
						{
							context.drawImage(MovG, GnrlP[0].x - 100, GnrlP[0].y + 100, GnrlP[0].w, GnrlP[0].h);
							context.drawImage(MovG, GnrlP[0].x + 100, GnrlP[0].y + 100, GnrlP[0].w, GnrlP[0].h);
						}
						if(GnrlP[0].y > 101)
						{
							context.drawImage(MovG, GnrlP[0].x - 50, GnrlP[0].y - 50, GnrlP[0].w, GnrlP[0].h);
							context.drawImage(MovG, GnrlP[0].x + 50, GnrlP[0].y - 50, GnrlP[0].w, GnrlP[0].h);
						}
						if(GnrlP[0].y > 151)
						{
							context.drawImage(MovG, GnrlP[0].x - 100, GnrlP[0].y - 100, GnrlP[0].w, GnrlP[0].h);
							context.drawImage(MovG, GnrlP[0].x + 100, GnrlP[0].y - 100, GnrlP[0].w, GnrlP[0].h);
						}
					}
					
					
					{//Contador 1
						if(POSMGP1 < 1)
						{
							if((GnrlP[0].x == GnrlG[POSMGP1].x + 100 && GnrlP[0].y == GnrlG[POSMGP1].y - 100) ||
							(GnrlP[0].x == KingG[POSMGP1].x + 100 && GnrlP[0].y == KingG[POSMGP1].y - 100) ||
							(GnrlP[0].x == KingP[POSMGP1].x + 100 && GnrlP[0].y == KingP[POSMGP1].y - 100))
							{
								MOVMGP1 = false;
							}
						}
						if(POSMGP1 < 2)
						{
							if((GnrlP[0].x == TorG[POSMGP1].x + 100 && GnrlP[0].y == TorG[POSMGP1].y - 100)||
							(GnrlP[0].x == TorP[POSMGP1].x + 100 && GnrlP[0].y == TorP[POSMGP1].y - 100))
							{
								MOVMGP1 = false;
							}
						}
						if(POSMGP1 < 4)
						{
							if((GnrlP[0].x == KntG[POSMGP1].x + + 100 && GnrlP[0].y == KntG[POSMGP1].y - 100) ||
							(GnrlP[0].x == KntP[POSMGP1].x + 100 && GnrlP[0].y == KntP[POSMGP1].y - 100))
							{
								MOVMGP1 = false;
							}
						}
						
						if(POSMGP1 < 8)
						{
							if((GnrlP[0].x == TreeA.x + 100 && GnrlP[0].y == TreeA.y - 100)||
							(GnrlP[0].x == TreeB.x + 100 && GnrlP[0].y == TreeB.y - 100)||
							(GnrlP[0].x == TreeC.x + 100 && GnrlP[0].y == TreeC.y - 100)||
							(GnrlP[0].x == TreeD.x + 100 && GnrlP[0].y == TreeD.y - 100)||
							(GnrlP[0].x == TreeE.x + 100 && GnrlP[0].y == TreeE.y - 100)||
							(GnrlP[0].x == TreeF.x + 100 && GnrlP[0].y == TreeF.y - 100))
							{
								MOVMGP1 = false;
							}
							
							if((GnrlP[0].x == LancerP[POSMGP1].x + 100 && GnrlP[0].y == LancerP[POSMGP1].y - 100)||
							(GnrlP[0].x == ArcP[POSMGP1].x + 100 && GnrlP[0].y == ArcP[POSMGP1].y - 100) ||
							(GnrlP[0].x == ArcG[POSMGP1].x + 100 && GnrlP[0].y == ArcG[POSMGP1].y - 100) ||
							(GnrlP[0].x == LancerG[POSMGP1].x + 100 && GnrlP[0].y == LancerG[POSMGP1].y - 100))
							{
								MOVMGP1 = false;
							}
						}	
					}
						
					{//Contador 2
						if(POSMGP2 < 1)
						{
							if((GnrlP[0].x == GnrlG[POSMGP2].x + 50 && GnrlP[0].y == GnrlG[POSMGP2].y - 50) ||
							(GnrlP[0].x == KingG[POSMGP2].x + 50 && GnrlP[0].y == KingG[POSMGP2].y - 50)||
							(GnrlP[0].x == KingP[POSMGP2].x + 50 && GnrlP[0].y == KingP[POSMGP2].y - 50))
							{
								MOVMGP2 = false;
							}
						}
						if(POSMGP2 < 2)
						{
							if((GnrlP[0].x == TorG[POSMGP2].x + 50 && GnrlP[0].y == TorG[POSMGP2].y - 50)||
							(GnrlP[0].x == TorP[POSMGP2].x + 50 && GnrlP[0].y == TorP[POSMGP2].y - 50))
							{
								MOVMGP2 = false;
							}
						}
						if(POSMGP2 < 4)
						{
							if((GnrlP[0].x == KntG[POSMGP2].x + + 50 && GnrlP[0].y == KntG[POSMGP2].y - 50) ||
							(GnrlP[0].x == KntP[POSMGP2].x + 50 && GnrlP[0].y == KntP[POSMGP2].y - 50))
							{
								MOVMGP2 = false;
							}
						}
						
						if(POSMGP2 < 8)
						{
							if((GnrlP[0].x == TreeA.x + 50 && GnrlP[0].y == TreeA.y - 50)||
							(GnrlP[0].x == TreeB.x + 50 && GnrlP[0].y == TreeB.y - 50)||
							(GnrlP[0].x == TreeC.x + 50 && GnrlP[0].y == TreeC.y - 50)||
							(GnrlP[0].x == TreeD.x + 50 && GnrlP[0].y == TreeD.y - 50)||
							(GnrlP[0].x == TreeE.x + 50 && GnrlP[0].y == TreeE.y - 50)||
							(GnrlP[0].x == TreeF.x + 50 && GnrlP[0].y == TreeF.y - 50))
							{
								MOVMGP2 = false;
							}
							
							if((GnrlP[0].x == LancerP[POSMGP2].x + 50 && GnrlP[0].y == LancerP[POSMGP2].y - 50)||
							(GnrlP[0].x == ArcP[POSMGP2].x + 50 && GnrlP[0].y == ArcP[POSMGP2].y - 50) ||
							(GnrlP[0].x == ArcG[POSMGP2].x + 50 && GnrlP[0].y == ArcG[POSMGP2].y - 50) ||
							(GnrlP[0].x == LancerG[POSMGP2].x + 50 && GnrlP[0].y == LancerG[POSMGP2].y - 50))
							{
								MOVMGP2 = false;
							}
						}	
					}
					
					{//Contador 3
							if(POSMGP3 < 1)
							{
								if((GnrlP[0].x == GnrlG[POSMGP3].x - 100 && GnrlP[0].y == GnrlG[POSMGP3].y - 100) ||
								(GnrlP[0].x == KingG[POSMGP3].x - 100 && GnrlP[0].y == KingG[POSMGP3].y - 100)||
								(GnrlP[0].x == KingP[POSMGP3].x - 100 && GnrlP[0].y == KingP[POSMGP3].y - 100))
								{
									MOVMGP3 = false;
								}
							}
							if(POSMGP3 < 2)
							{
								if((GnrlP[0].x == TorG[POSMGP3].x - 100 && GnrlP[0].y == TorG[POSMGP3].y - 100)||
								(GnrlP[0].x == TorP[POSMGP3].x - 100 && GnrlP[0].y == TorP[POSMGP3].y - 100))
								{
									MOVMGP3 = false;
								}
							}
							if(POSMGP3 < 4)
							{
								if((GnrlP[0].x == KntG[POSMGP3].x + + 100 && GnrlP[0].y == KntG[POSMGP3].y - 100) ||
								(GnrlP[0].x == KntP[POSMGP3].x - 100 && GnrlP[0].y == KntP[POSMGP3].y - 100))
								{
									MOVMGP3 = false;
								}
							}
							
							if(POSMGP3 < 8)
							{
								if((GnrlP[0].x == TreeA.x - 100 && GnrlP[0].y == TreeA.y - 100)||
								(GnrlP[0].x == TreeB.x - 100 && GnrlP[0].y == TreeB.y - 100)||
								(GnrlP[0].x == TreeC.x - 100 && GnrlP[0].y == TreeC.y - 100)||
								(GnrlP[0].x == TreeD.x - 100 && GnrlP[0].y == TreeD.y - 100)||
								(GnrlP[0].x == TreeE.x - 100 && GnrlP[0].y == TreeE.y - 100)||
								(GnrlP[0].x == TreeF.x - 100 && GnrlP[0].y == TreeF.y - 100))
								{
									MOVMGP3 = false;
								}
								
								if((GnrlP[0].x == LancerP[POSMGP3].x - 100 && GnrlP[0].y == LancerP[POSMGP3].y - 100)||
								(GnrlP[0].x == ArcP[POSMGP3].x - 100 && GnrlP[0].y == ArcP[POSMGP3].y - 100) ||
								(GnrlP[0].x == ArcG[POSMGP3].x - 100 && GnrlP[0].y == ArcG[POSMGP3].y - 100) ||
								(GnrlP[0].x == LancerG[POSMGP3].x - 100 && GnrlP[0].y == LancerG[POSMGP3].y - 100))
								{
									MOVMGP3 = false;
								}
							}	
					}
					
					{//Contador 4
							if(POSMGP4 < 1)
							{
								if((GnrlP[0].x == GnrlG[POSMGP4].x - 50 && GnrlP[0].y == GnrlG[POSMGP4].y - 50) ||
								(GnrlP[0].x == KingG[POSMGP4].x - 50 && GnrlP[0].y == KingG[POSMGP4].y - 50)||
								(GnrlP[0].x == KingP[POSMGP4].x - 50 && GnrlP[0].y == KingP[POSMGP4].y - 50))
								{
									MOVMGP4 = false;
								}
							}
							if(POSMGP4 < 2)
							{
								if((GnrlP[0].x == TorG[POSMGP4].x - 50 && GnrlP[0].y == TorG[POSMGP4].y - 50)||
								(GnrlP[0].x == TorP[POSMGP4].x - 50 && GnrlP[0].y == TorP[POSMGP4].y - 50))
								{
									MOVMGP4 = false;
								}
							}
							if(POSMGP4 < 4)
							{
								if((GnrlP[0].x == KntG[POSMGP4].x + + 50 && GnrlP[0].y == KntG[POSMGP4].y - 50) ||
								(GnrlP[0].x == KntP[POSMGP4].x - 50 && GnrlP[0].y == KntP[POSMGP4].y - 50))
								{
									MOVMGP4 = false;
								}
							}
							
							if(POSMGP4 < 8)
							{
								if((GnrlP[0].x == TreeA.x - 50 && GnrlP[0].y == TreeA.y - 50)||
								(GnrlP[0].x == TreeB.x - 50 && GnrlP[0].y == TreeB.y - 50)||
								(GnrlP[0].x == TreeC.x - 50 && GnrlP[0].y == TreeC.y - 50)||
								(GnrlP[0].x == TreeD.x - 50 && GnrlP[0].y == TreeD.y - 50)||
								(GnrlP[0].x == TreeE.x - 50 && GnrlP[0].y == TreeE.y - 50)||
								(GnrlP[0].x == TreeF.x - 50 && GnrlP[0].y == TreeF.y - 50))
								{
									MOVMGP4 = false;
								}
								
								if((GnrlP[0].x == LancerP[POSMGP4].x - 50 && GnrlP[0].y == LancerP[POSMGP4].y - 50)||
								(GnrlP[0].x == ArcP[POSMGP4].x - 50 && GnrlP[0].y == ArcP[POSMGP4].y - 50) ||
								(GnrlP[0].x == ArcG[POSMGP4].x - 50 && GnrlP[0].y == ArcG[POSMGP4].y - 50) ||
								(GnrlP[0].x == LancerG[POSMGP4].x - 50 && GnrlP[0].y == LancerG[POSMGP4].y - 50))
								{
									MOVMGP4 = false;
								}
							}	
					}
					
					if(GnrlsPCC == 1)
					{
						if(GnrlP[0].x > 51 && GnrlP[0].y < limit_down-50)
						{
							if(GnrlsPCC != 2 && GnrlsPCC != 3 && GnrlsPCC != 4)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMGP1 == null)
									{
										MOVMGP1 = true;
									}
									if(MOVMGP1)
									{	
										POSMGP1 += 1;
									}
									if(POSMGP1 > 10)
									{
										if(Mov1GP == false)
										{
											Mov1GP = true;
										}
									}	
									else if(MOVMGP1 == false)
									{
										GnrlsPCC = 2;
									}
								}
							}
						}
						else
						{
							MOVMGP1 = false;
							GnrlsPCC = 2;
						}
					}
					if(GnrlsPCC == 2)
					{
						if(GnrlP[0].x > 1 && GnrlP[0].y < limit_down)
						{
							if(GnrlsPCC != 1 && GnrlsPCC != 3 && GnrlsPCC != 4)
							{
								
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMGP2 == null)
									{
										MOVMGP2 = true;
									}
									
									if(MOVMGP2)
									{	
										POSMGP2 += 1;
										if(POSMGP2 > 10)
										{
											if(Mov2GP == false)
											{
												Mov2GP = true;
											}
										}	
									}
									if(MOVMGP2 == false)
									{
										GnrlsPCC = 3;
									}
								}
								
							}						
						}
						else
						{
							MOVMGP2 = false;
							GnrlsPCC = 3;
						}
					}
					if(GnrlsPCC == 3)
					{	
						if(GnrlP[0].x < limit_right-50 && GnrlP[0].y < limit_down-50)
						{
							if(GnrlsPCC != 1 && GnrlsPCC != 2 && GnrlsPCC != 4)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMGP3 == null)
									{
										MOVMGP3 = true;
									}
									if(MOVMGP3)
									{	
										POSMGP3 += 1;
										if(POSMGP3 > 10)
										{
											if(Mov3GP == false)
											{
												Mov3GP = true;
											}
											
										}	
									}
									if(MOVMGP3 == false)
									{
										GnrlsPCC = 4;
									}
								}
							}
						}
						else
						{
							MOVMGP3 = false;
							GnrlsPCC = 4;
						}
					}
					if(GnrlsPCC == 4)
					{
						if(GnrlP[0].x < limit_right && GnrlP[0].y < limit_down)
						{
							if(GnrlsPCC != 1 && GnrlsPCC != 2 && GnrlsPCC != 3)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMGP4 == null)
									{
										MOVMGP4 = true;
									}
									if(MOVMGP4)
									{	
										POSMGP4 += 1;
										if(POSMGP4 > 10)
										{
											if(Mov4GP == false)
											{
												Mov4GP = true;
											}
											
										}	
									}
									if(MOVMGP4 == false)
									{
										GnrlsPCC = 1;
									}
								}
							}
						}
						else
						{
							MOVMGP4 = false;
							GnrlsPCC = 1;
						}
					}
				}
			}
		}
	}
}

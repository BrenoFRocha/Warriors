var GnrlGIA = true; 
var GnrlsGCC = 0;
var moverG;
var CountTime = 100;
var GnrlGMove = false;
var CMG = 0;

var Mov1GG = false;
var Mov2GG = false;
var Mov3GG = false;
var Mov4GG = false;

var MOVMGG1 = null;
var MOVMGG2 = null;
var MOVMGG3 = null;
var MOVMGG4 = null;

var POSMGG1 = 0;
var POSMGG2 = 0;
var POSMGG3 = 0;
var POSMGG4 = 0;

var limit_down = 451;
var limit_right = 351;

function PossibilitiesAIGG()
{
	if(AIG)
	{
		if(Vez_Gregos)
		{
			if(ChooseG == 0)
			{	
				if(GnrlGMove)
				{	
					moverG = Math.floor(randomRange(1,99));
					
					if(moverG <= 25 && GnrlsGCC == 0)
					{
						GnrlsGCC = 1;
					}
					if(moverG > 25 && moverG <= 50 && GnrlsGCC == 0)
					{
						GnrlsGCC = 2;
					}
					if(moverG > 50 && moverG <= 75 && GnrlsGCC == 0)
					{
						GnrlsGCC = 3;
					}
					if(moverG > 75 && GnrlsGCC == 0)
					{
						GnrlsGCC = 4;
					}
						
					if(Mov1GG)
					{
						Vez_Gregos = false;
						Vez_Persas = true;
						GnrlG[0].x -= 100;
						GnrlG[0].y -= 100;
						ChooseG = null;
						GnrlsGCC = 0;
						CountTime = 100;
						CMG = 0;
						Mov1GG = null;
						
					}
					if(Mov2GG)
					{
						Vez_Gregos = false;
						Vez_Persas = true;
						GnrlG[0].x -= 50;
						GnrlG[0].y -= 50;
						ChooseG = null;
						GnrlsGCC = 0;
						CountTime = 100;
						CMG = 0;
						Mov2GG = null;
						
					}
					if(Mov3GG)
					{
						Vez_Gregos = false;
						Vez_Persas = true;
						GnrlG[0].x += 100;
						GnrlG[0].y -= 100;
						ChooseG = null;
						GnrlsGCC = 0;
						CountTime = 100;
						CMG = 0;
						Mov3GG = null;
						
					}
					if(Mov4GG)
					{
						Vez_Gregos = false;
						Vez_Persas = true;
						GnrlG[0].x += 50;
						GnrlG[0].y -= 50;
						ChooseG = null;
						GnrlsGCC = 0;
						CountTime = 100;
						CMG = 0;
						Mov4GG = null;
						
					}
					
					if(GnrlsGCC != 0)
					{
						if(GnrlG[0].y < limit_down)
						{
							context.drawImage(MovG, GnrlG[0].x + 50, GnrlG[0].y + 50, GnrlG[0].w, GnrlG[0].h);
							context.drawImage(MovG, GnrlG[0].x - 50, GnrlG[0].y + 50, GnrlG[0].w, GnrlG[0].h);
						}
						if(GnrlG[0].y < limit_down - 50)
						{
							context.drawImage(MovG, GnrlG[0].x - 100, GnrlG[0].y + 100, GnrlG[0].w, GnrlG[0].h);
							context.drawImage(MovG, GnrlG[0].x + 100, GnrlG[0].y + 100, GnrlG[0].w, GnrlG[0].h);
						}
						if(GnrlG[0].y > 101)
						{
							context.drawImage(MovG, GnrlG[0].x - 50, GnrlG[0].y - 50, GnrlG[0].w, GnrlG[0].h);
							context.drawImage(MovG, GnrlG[0].x + 50, GnrlG[0].y - 50, GnrlG[0].w, GnrlG[0].h);
						}
						if(GnrlG[0].y > 151)
						{
							context.drawImage(MovG, GnrlG[0].x - 100, GnrlG[0].y - 100, GnrlG[0].w, GnrlG[0].h);
							context.drawImage(MovG, GnrlG[0].x + 100, GnrlG[0].y - 100, GnrlG[0].w, GnrlG[0].h);
						}
					}
					
					
					{//Contador 1
						if(POSMGG1 < 1)
						{
							if((GnrlG[0].x == GnrlP[POSMGG1].x + 100 && GnrlG[0].y == GnrlP[POSMGG1].y + 100) ||
							(GnrlG[0].x == KingG[POSMGG1].x + 100 && GnrlG[0].y == KingG[POSMGG1].y + 100) ||
							(GnrlG[0].x == KingP[POSMGG1].x + 100 && GnrlG[0].y == KingP[POSMGG1].y + 100))
							{
								MOVMGG1 = false;
							}
						}
						if(POSMGG1 < 2)
						{
							if((GnrlG[0].x == TorG[POSMGG1].x + 100 && GnrlG[0].y == TorG[POSMGG1].y + 100)||
							(GnrlG[0].x == TorP[POSMGG1].x + 100 && GnrlG[0].y == TorP[POSMGG1].y + 100))
							{
								MOVMGG1 = false;
							}
						}
						if(POSMGG1 < 4)
						{
							if((GnrlG[0].x == KntG[POSMGG1].x + + 100 && GnrlG[0].y == KntG[POSMGG1].y + 100) ||
							(GnrlG[0].x == KntP[POSMGG1].x + 100 && GnrlG[0].y == KntP[POSMGG1].y + 100))
							{
								MOVMGG1 = false;
							}
						}
						
						if(POSMGG1 < 8)
						{
							if((GnrlG[0].x == TreeA.x + 100 && GnrlG[0].y == TreeA.y + 100)||
							(GnrlG[0].x == TreeB.x + 100 && GnrlG[0].y == TreeB.y + 100)||
							(GnrlG[0].x == TreeC.x + 100 && GnrlG[0].y == TreeC.y + 100)||
							(GnrlG[0].x == TreeD.x + 100 && GnrlG[0].y == TreeD.y + 100)||
							(GnrlG[0].x == TreeE.x + 100 && GnrlG[0].y == TreeE.y + 100)||
							(GnrlG[0].x == TreeF.x + 100 && GnrlG[0].y == TreeF.y + 100))
							{
								MOVMGG1 = false;
							}
							
							if((GnrlG[0].x == LancerP[POSMGG1].x + 100 && GnrlG[0].y == LancerP[POSMGG1].y + 100)||
							(GnrlG[0].x == ArcP[POSMGG1].x + 100 && GnrlG[0].y == ArcP[POSMGG1].y + 100) ||
							(GnrlG[0].x == ArcG[POSMGG1].x + 100 && GnrlG[0].y == ArcG[POSMGG1].y + 100) ||
							(GnrlG[0].x == LancerG[POSMGG1].x + 100 && GnrlG[0].y == LancerG[POSMGG1].y + 100))
							{
								MOVMGG1 = false;
							}
						}	
					}
						
					{//Contador 2
						if(POSMGG2 < 1)
						{
							if((GnrlG[0].x == GnrlP[POSMGG2].x + 50 && GnrlG[0].y == GnrlP[POSMGG2].y + 50) ||
							(GnrlG[0].x == KingG[POSMGG2].x + 50 && GnrlG[0].y == KingG[POSMGG2].y + 50)||
							(GnrlG[0].x == KingP[POSMGG2].x + 50 && GnrlG[0].y == KingP[POSMGG2].y + 50))
							{
								MOVMGG2 = false;
							}
						}
						if(POSMGG2 < 2)
						{
							if((GnrlG[0].x == TorG[POSMGG2].x + 50 && GnrlG[0].y == TorG[POSMGG2].y + 50)||
							(GnrlG[0].x == TorP[POSMGG2].x + 50 && GnrlG[0].y == TorP[POSMGG2].y + 50))
							{
								MOVMGG2 = false;
							}
						}
						if(POSMGG2 < 4)
						{
							if((GnrlG[0].x == KntG[POSMGG2].x + + 50 && GnrlG[0].y == KntG[POSMGG2].y + 50) ||
							(GnrlG[0].x == KntP[POSMGG2].x + 50 && GnrlG[0].y == KntP[POSMGG2].y + 50))
							{
								MOVMGG2 = false;
							}
						}
						
						if(POSMGG2 < 8)
						{
							if((GnrlG[0].x == TreeA.x + 50 && GnrlG[0].y == TreeA.y + 50)||
							(GnrlG[0].x == TreeB.x + 50 && GnrlG[0].y == TreeB.y + 50)||
							(GnrlG[0].x == TreeC.x + 50 && GnrlG[0].y == TreeC.y + 50)||
							(GnrlG[0].x == TreeD.x + 50 && GnrlG[0].y == TreeD.y + 50)||
							(GnrlG[0].x == TreeE.x + 50 && GnrlG[0].y == TreeE.y + 50)||
							(GnrlG[0].x == TreeF.x + 50 && GnrlG[0].y == TreeF.y + 50))
							{
								MOVMGG2 = false;
							}
							
							if((GnrlG[0].x == LancerP[POSMGG2].x + 50 && GnrlG[0].y == LancerP[POSMGG2].y + 50)||
							(GnrlG[0].x == ArcP[POSMGG2].x + 50 && GnrlG[0].y == ArcP[POSMGG2].y + 50) ||
							(GnrlG[0].x == ArcG[POSMGG2].x + 50 && GnrlG[0].y == ArcG[POSMGG2].y + 50) ||
							(GnrlG[0].x == LancerG[POSMGG2].x + 50 && GnrlG[0].y == LancerG[POSMGG2].y + 50))
							{
								MOVMGG2 = false;
							}
						}	
					}
					
					{//Contador 3
							if(POSMGG3 < 1)
							{
								if((GnrlG[0].x == GnrlP[POSMGG3].x - 100 && GnrlG[0].y == GnrlP[POSMGG3].y + 100) ||
								(GnrlG[0].x == KingG[POSMGG3].x - 100 && GnrlG[0].y == KingG[POSMGG3].y + 100)||
								(GnrlG[0].x == KingP[POSMGG3].x - 100 && GnrlG[0].y == KingP[POSMGG3].y + 100))
								{
									MOVMGG3 = false;
								}
							}
							if(POSMGG3 < 2)
							{
								if((GnrlG[0].x == TorG[POSMGG3].x - 100 && GnrlG[0].y == TorG[POSMGG3].y + 100)||
								(GnrlG[0].x == TorP[POSMGG3].x - 100 && GnrlG[0].y == TorP[POSMGG3].y + 100))
								{
									MOVMGG3 = false;
								}
							}
							if(POSMGG3 < 4)
							{
								if((GnrlG[0].x == KntG[POSMGG3].x + + 100 && GnrlG[0].y == KntG[POSMGG3].y + 100) ||
								(GnrlG[0].x == KntP[POSMGG3].x - 100 && GnrlG[0].y == KntP[POSMGG3].y + 100))
								{
									MOVMGG3 = false;
								}
							}
							
							if(POSMGG3 < 8)
							{
								if((GnrlG[0].x == TreeA.x - 100 && GnrlG[0].y == TreeA.y + 100)||
								(GnrlG[0].x == TreeB.x - 100 && GnrlG[0].y == TreeB.y + 100)||
								(GnrlG[0].x == TreeC.x - 100 && GnrlG[0].y == TreeC.y + 100)||
								(GnrlG[0].x == TreeD.x - 100 && GnrlG[0].y == TreeD.y + 100)||
								(GnrlG[0].x == TreeE.x - 100 && GnrlG[0].y == TreeE.y + 100)||
								(GnrlG[0].x == TreeF.x - 100 && GnrlG[0].y == TreeF.y + 100))
								{
									MOVMGG3 = false;
								}
								
								if((GnrlG[0].x == LancerP[POSMGG3].x - 100 && GnrlG[0].y == LancerP[POSMGG3].y + 100)||
								(GnrlG[0].x == ArcP[POSMGG3].x - 100 && GnrlG[0].y == ArcP[POSMGG3].y + 100) ||
								(GnrlG[0].x == ArcG[POSMGG3].x - 100 && GnrlG[0].y == ArcG[POSMGG3].y + 100) ||
								(GnrlG[0].x == LancerG[POSMGG3].x - 100 && GnrlG[0].y == LancerG[POSMGG3].y + 100))
								{
									MOVMGG3 = false;
								}
							}	
					}
					
					{//Contador 4
							if(POSMGG4 < 1)
							{
								if((GnrlG[0].x == GnrlP[POSMGG4].x - 50 && GnrlG[0].y == GnrlP[POSMGG4].y + 50) ||
								(GnrlG[0].x == KingG[POSMGG4].x - 50 && GnrlG[0].y == KingG[POSMGG4].y + 50)||
								(GnrlG[0].x == KingP[POSMGG4].x - 50 && GnrlG[0].y == KingP[POSMGG4].y + 50))
								{
									MOVMGG4 = false;
								}
							}
							if(POSMGG4 < 2)
							{
								if((GnrlG[0].x == TorG[POSMGG4].x - 50 && GnrlG[0].y == TorG[POSMGG4].y + 50)||
								(GnrlG[0].x == TorP[POSMGG4].x - 50 && GnrlG[0].y == TorP[POSMGG4].y + 50))
								{
									MOVMGG4 = false;
								}
							}
							if(POSMGG4 < 4)
							{
								if((GnrlG[0].x == KntG[POSMGG4].x + + 50 && GnrlG[0].y == KntG[POSMGG4].y + 50) ||
								(GnrlG[0].x == KntP[POSMGG4].x - 50 && GnrlG[0].y == KntP[POSMGG4].y + 50))
								{
									MOVMGG4 = false;
								}
							}
							
							if(POSMGG4 < 8)
							{
								if((GnrlG[0].x == TreeA.x - 50 && GnrlG[0].y == TreeA.y + 50)||
								(GnrlG[0].x == TreeB.x - 50 && GnrlG[0].y == TreeB.y + 50)||
								(GnrlG[0].x == TreeC.x - 50 && GnrlG[0].y == TreeC.y + 50)||
								(GnrlG[0].x == TreeD.x - 50 && GnrlG[0].y == TreeD.y + 50)||
								(GnrlG[0].x == TreeE.x - 50 && GnrlG[0].y == TreeE.y + 50)||
								(GnrlG[0].x == TreeF.x - 50 && GnrlG[0].y == TreeF.y + 50))
								{
									MOVMGG4 = false;
								}
								
								if((GnrlG[0].x == LancerP[POSMGG4].x - 50 && GnrlG[0].y == LancerP[POSMGG4].y + 50)||
								(GnrlG[0].x == ArcP[POSMGG4].x - 50 && GnrlG[0].y == ArcP[POSMGG4].y + 50) ||
								(GnrlG[0].x == ArcG[POSMGG4].x - 50 && GnrlG[0].y == ArcG[POSMGG4].y + 50) ||
								(GnrlG[0].x == LancerG[POSMGG4].x - 50 && GnrlG[0].y == LancerG[POSMGG4].y + 50))
								{
									MOVMGG4 = false;
								}
							}	
					}
					
					if(GnrlsGCC == 1)
					{
						if(GnrlG[0].x > 51 && GnrlG[0].y > 151)
						{
							if(GnrlsGCC != 2 && GnrlsGCC != 3 && GnrlsGCC != 4)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMGG1 == null)
									{
										MOVMGG1 = true;
									}
									if(MOVMGG1)
									{	
										POSMGG1 += 1;
									}
									if(POSMGG1 > 10)
									{
										if(Mov1GG == false)
										{
											Mov1GG = true;
										}
									}	
									else if(MOVMGG1 == false)
									{
										GnrlsGCC = 2;
									}
								}
							}
						}
						else
						{
							MOVMGG1 = false;
							GnrlsGCC = 2;
						}
					}
					if(GnrlsGCC == 2)
					{
						if(GnrlG[0].x > 1 && GnrlG[0].y > 101)
						{
							if(GnrlsGCC != 1 && GnrlsGCC != 3 && GnrlsGCC != 4)
							{
								
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMGG2 == null)
									{
										MOVMGG2 = true;
									}
									
									if(MOVMGG2)
									{	
										POSMGG2 += 1;
										if(POSMGG2 > 10)
										{
											if(Mov2GG == false)
											{
												Mov2GG = true;
											}
										}	
									}
									if(MOVMGG2 == false)
									{
										GnrlsGCC = 3;
									}
								}
								
							}						
						}
						else
						{
							MOVMGG2 = false;
							GnrlsGCC = 3;
						}
					}
					if(GnrlsGCC == 3)
					{	
						if(GnrlG[0].x < limit_right-50 && GnrlG[0].y > 151)
						{
							if(GnrlsGCC != 1 && GnrlsGCC != 2 && GnrlsGCC != 4)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMGG3 == null)
									{
										MOVMGG3 = true;
									}
									if(MOVMGG3)
									{	
										POSMGG3 += 1;
										if(POSMGG3 > 10)
										{
											if(Mov3GG == false)
											{
												Mov3GG = true;
											}
											
										}	
									}
									if(MOVMGG3 == false)
									{
										GnrlsGCC = 4;
									}
								}
							}
						}
						else
						{
							MOVMGG3 = false;
							GnrlsGCC = 4;
						}
					}
					if(GnrlsGCC == 4)
					{
						if(GnrlG[0].x < limit_right && GnrlG[0].y > 101)
						{
							if(GnrlsGCC != 1 && GnrlsGCC != 2 && GnrlsGCC != 3)
							{
								CountTime--;
								if(CountTime <= 0)
								{
									if(MOVMGG4 == null)
									{
										MOVMGG4 = true;
									}
									if(MOVMGG4)
									{	
										POSMGG4 += 1;
										if(POSMGG4 > 10)
										{
											if(Mov4GG == false)
											{
												Mov4GG = true;
											}
											
										}	
									}
									if(MOVMGG4 == false)
									{
										GnrlsGCC = 1;
									}
								}
							}
						}
						else
						{
							MOVMGG4 = false;
							GnrlsGCC = 1;
						}
					}
				}
			}
		}
	}
}

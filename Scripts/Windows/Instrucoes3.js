var I_background_image = new Image();


var I_next_image = new Image();
I_next_image.src = "Images/next.png";

var I_exit_button = {x: 60, y: 60, w: 48, h: 48};
var I_next_button = {x: 680, y: 485, w: 64, h: 64};

function SetInstru3()
{
	if(PTBR)
	{
		I_background_image.src = "Images/Background/Instructions_3_Background.png";
	}
	else
	{
		I_background_image.src = "Images/Background/Instrucoes_3_Background.png";
	}
	context.drawImage(I_background_image,0,0);
	if(fadeOut)
	{
		fadeIn = true;
		fadeOut = false;
	}
	
	context.drawImage(I_next_image,I_next_button.x,I_next_button.y,I_next_button.w,I_next_button.h);

	context.drawImage(exit_button_image,I_exit_button.x,I_exit_button.y,I_exit_button.w,I_exit_button.h);
	
	if(mouse.x >= I_next_button.x &&
	mouse.x <= I_next_button.x + I_next_button.w &&
	mouse.y >= I_next_button.y &&
	mouse.y <= I_next_button.y + I_next_button.h &&
	mouse.press)
	{
		mouse.press = false;
		fadeOut = true;
		auxScene = "Instrucoes4";
	}
	
	if(mouse.x >= I_exit_button.x &&
	mouse.x <= I_exit_button.x + I_exit_button.w &&
	mouse.y >= I_exit_button.y &&
	mouse.y <= I_exit_button.y + I_exit_button.h &&
	mouse.press)
	{
		fadeOut = true;
		mouse.press = false;
		auxScene = "Menu";
	}
}
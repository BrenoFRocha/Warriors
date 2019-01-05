var I_background_image = new Image();


var I_next_image = new Image();
I_next_image.src = "Images/next.png";

var I_exit_button = {x:72.5, y:80, w: 64, h: 64};
var I_next_button = {x:667.5, y:475, w:64, h:64};

function SetInstru1()
{
	if(PTBR)
	{
		I_background_image.src = "Images/Instructions_1_Background.png";
	}
	else
	{
		I_background_image.src = "Images/Instrucoes_1_Background.png";
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
		fadeOut = true;
		mouse.press = false;
		auxScene = "Instrucoes8";
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
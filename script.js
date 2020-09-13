//button's ID is what determines what was clicked
function fun(id) 
{
	document.calculator.resultbox.value+=id;
}
//nothing in the textbox
function clearScreen()
{
	document.calculator.resultbox.value="";
}
//calculate resule using eval()
function calculateResult()
{
	try {
		//eval(string) will work for */+- (https://www.w3schools.com/jsref/jsref_eval.asp)
		var input = eval(document.calculator.resultbox.value);

		document.calculator.resultbox.value=input;
	} catch(err)
	{
		document.calculator.resultbox.value="Err";
	}
}

//sqrt and ^2 will immediately display result
//once button is pressed
function doSqrt() 
{
	var input2 = document.calculator.resultbox.value;

	try {
		var result2 = Math.sqrt(input2);

		document.calculator.resultbox.value = result2;
	} catch (err)
	{
		document.calculator.resultbox.value="Err";		
	}

}

function doPow()
{
	var input3 = document.calculator.resultbox.value;

	try {
		var result3 = Math.pow(input3, 2);

		document.calculator.resultbox.value = result3;
	} catch (err)
	{
		document.calculator.resultbox.value="Err";		
	}
}
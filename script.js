
function fun(id) 
{
	document.calculator.resultbox.value+=id;
}

function clearScreen()
{
	document.calculator.resultbox.value="";
}

function calculateResult()
{
	try {
		
		var input = eval(document.calculator.resultbox.value);

		document.calculator.resultbox.value=input;
	} catch(err)
	{
		document.calculator.resultbox.value="Err";
	}
}


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
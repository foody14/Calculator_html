var num = "";
var operator = "";
var angka1 = 0;
var angka2 = 0;
var hasil = 0;
var historyNum = 0;

function hitung() 
{
        var nilaiPangkat = hasilPangkat(angka1,angka2,angka1);

        if (operator === "+")
        {
           hasil = angka1 + angka2;
        }
        else if (operator === "-")
        {
           hasil = angka1 - angka2;
        }
        else if (operator === "*")
        {
           hasil = angka1 * angka2;
        }
        else if (operator === "/")
        {
           hasil = angka1 / angka2;
        }
}

function addNumber(idNumber)
{
	num = num + document.getElementById(idNumber).value;
	document.getElementById("output").innerHTML = num;
}

function addOperator(idOperator)
{
	if (num !== "" && angka1 === 0 && hasil === 0)
	{
		angka1 = parseFloat(num);
		historyNum = angka1;
	}
	else if (num !== "" && angka1 !== 0 && hasil === 0)
	{
		angka2 = parseFloat(num);
		hitung();
		historyNum = hasil;
		num = hasil;
		angka1 = hasil;
	}
	else if (hasil !== 0)
	{
		angka1 = hasil;
		historyNum = angka1;
	}
	operator = document.getElementById(idOperator).value;
        document.getElementById("history_operator").innerHTML = operator;
        document.getElementById("history").innerHTML = historyNum;
	document.getElementById("output").innerHTML = num;
	num = "";
}

function equalSign()
{
	if (num !== "" && angka1 !== 0)
	{
		angka2 = parseFloat(num);
		hitung();
		historyNum = angka2;
		num = hasil;
	}
        document.getElementById("history").innerHTML = historyNum;
	document.getElementById("output").innerHTML = num;
	num = 0;
}

function clearSign()
{
	num = "0";
	angka1 = 0;
	angka2 = 0;
	hasil = 0;
	operator = "<br>";
	historyNum = 0;
	document.getElementById("history_operator").innerHTML = operator;
        document.getElementById("history").innerHTML = historyNum;
        document.getElementById("output").innerHTML = num;
}

function hasilPangkat(nilai1, nilai2, nilai3)
{  
   for (var i = 1; i < nilai2; i++)
   {
       nilai1 = nilai1 * nilai3; 
   }
   return nilai1;
}

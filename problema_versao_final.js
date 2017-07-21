/*Todos os comentatios referentes ao codigo serao presentes aqui por praticidade.
O array rounds eh preenchido pela funcao require que puxa os valores do arquivo disponibilizado no arquivo zip
O descarte da mao da maria eh linear, shift pra jogar fora o primeiro elemento array ( carta mais antiga), e push pra colocar no final a 
proxima carta.
O descarte de joao , com metodo splice pego a carta sorteada que pontuou e coloco ela em primeiro, assim me asseguro que sempre a carta que 
sofrera o 'shift' sera a carta ha mais tempo sem ser sorteada. Deixei algunas linhas de codigo vestigial pra ficar mais claro meu 
thought process para a resolucao do desafio.*/

var Jpontos=0;
var Mpontos=0;
var i,j;
var maoM=[];
var maoJ=[];
var rounds=require("./rounds.json");
//var rounds=[3,5,1,7,5,1,10,4,2,9,9,9,5,4,3];
var tempJ;
var temp2;
for(j=0;j<rounds.length;j++)
{
	if(maoM.length<5)
	{
		if(maoM.includes(rounds[j])===false)
		{
		maoM.push(rounds[j]);
		}
		else if(maoM.includes(rounds[j])===true)
		{
			Mpontos++;
		}
	}
		else if (maoM.length==5)
	{
		if(maoM.includes(rounds[j])===true)
		{
			Mpontos++;
		}
		else if(maoM.includes(rounds[j])===false)
		{
		maoM.shift();
		maoM.push(rounds[j]);
		}
	}

	if(maoJ.length<5)
	{
		if(maoJ.includes(rounds[j])===false)
		{
		maoJ.push(rounds[j]);
		}
		else if(maoJ.includes(rounds[j])===true)
		{
		Jpontos++;
		//temp2=maoJ.indexOf(rounds[j]);
		//console.log(temp2);
		//tempJ=maoJ[temp2];
		//console.log(tempJ);
		maoJ.splice(maoJ.indexOf(rounds[j]),1);
		//console.log(maoJ);
		maoJ.push(rounds[j]);
		}
	}
	

	else if(maoJ.length==5)
	{
		if(maoJ.includes(rounds[j])===true)
		{
		Jpontos++;
		//tempJ=rounds[j];
		//temp2=maoJ.indexOf(rounds[j]);	
		maoJ.splice(maoJ.indexOf(rounds[j]),1);
		maoJ.push(rounds[j]);
		}
		else if(maoJ.includes(rounds[j])===false)
		{
		maoJ.shift();
		maoJ.push(rounds[j]);
		}
	}

//console.log(maoJ);
//console.log(maoM);
}
var result=Math.abs(Jpontos-Mpontos);
//console.log(maoJ.length);
console.log(result);
//console.log(Jpontos);
//console.log(Mpontos);
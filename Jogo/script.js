let cod_JogadorX='';
let cod_JogadorO='';
let Quem_Jogar="X";
const Cod_vencedor=[
  '123','456','789', 
  '987','654','321',
  '159','951',
  '357','753',
  '147','741',
  '258','852',
  '369','963',
  '357','753'];
  


 var  Btn1 =document.querySelector('#btn1');
 var  Btn2 =document.querySelector('#btn2');
 var  Btn3 =document.querySelector('#btn3');
 var  Btn4 =document.querySelector('#btn4');
 var  Btn5 =document.querySelector('#btn5');
 var  Btn6 =document.querySelector('#btn6');
 var  Btn7 =document.querySelector('#btn7');
 var  Btn8 =document.querySelector('#btn8');
 var  Btn9 =document.querySelector('#btn9');

Btn1.addEventListener('click', function(){
jogar();
Cod_Gerator('1');
   Btn1.innerHTML=Quem_Jogar;
   
  });
Btn2.addEventListener('click', function(){
  jogar();
  Cod_Gerator('2');
   Btn2.innerHTML=Quem_Jogar;
   
  });
Btn3.addEventListener('click', function(){ 
  jogar();
  Cod_Gerator('3');
  Btn3.innerHTML=Quem_Jogar;
 
});
Btn4.addEventListener('click', function(){ 
  jogar();
  Cod_Gerator('4');
  Btn4.innerHTML=Quem_Jogar;
  
});
Btn5.addEventListener('click', function(){
  jogar();
  Cod_Gerator('5');
  Btn5.innerHTML=Quem_Jogar;
  
});
Btn6.addEventListener('click', function(){ 
  jogar();
  Cod_Gerator('6');
  Btn6.innerHTML=Quem_Jogar;
  
});
Btn7.addEventListener('click', function(){ 
  jogar();
  Cod_Gerator('7');
  Btn7.innerHTML=Quem_Jogar;
  
});
Btn8.addEventListener('click', function(){ 
  jogar();
  Cod_Gerator('8');
  Btn8.innerHTML=Quem_Jogar;
 
});
Btn9.addEventListener('click', function(){ 
  jogar();
  Cod_Gerator('9');
  Btn9.innerHTML=Quem_Jogar;
  

});
function jogar() {
  if(Quem_Jogar=="X")
  {
    Quem_Jogar='O'
  }
  else 
  Quem_Jogar="X"
};
function Cod_Gerator(cod) {
  if(Quem_Jogar=="X")
  {
    cod_JogadorX+=cod;
    Cod_Verificar(cod_JogadorX)
  }
  else 
  {
    cod_JogadorO+=cod;
    Cod_Verificar(cod_JogadorO)
  }
  
};
function Cod_Verificar(cod) {
  for (let index = 0; index < Cod_vencedor.length; index++) {

    if(Cod_vencedor[index]==cod)
    {
      alert(`Jogador ${Quem_Jogar} Ganhou`)
      break;
    }
    
  }

};

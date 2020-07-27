  // **************************** objeto OPERACOES
  var operacoes = new Object();

  // atributos
  operacoes.A = 0;
  operacoes.B = 0;


  // **************************** métodos funcionais
  operacoes.soma = function() { 
     return this.A + this.B;  };
  operacoes.subtracao = function() { 
     return this.A - this.B;       };
  operacoes.multiplicacao = function() { 
     return this.A * this.B;           };
  operacoes.divisao = function() { 
     return this.A / this.B;     };
  operacoes.raizQuadrada = function() { 
     return Math.sqrt(this.A);        };
  operacoes.potenciaQuadrada = function() { 
     return Math.pow(this.A,2);           };
  operacoes.umdivididoporX = function() { 
     return 1 / this.A;                 };


  // **************************** variáveis globais
  var numero1;
  var numero2;
  var operacao;

  // **************************** construtor
  function Operacoes(n1,n2) {
       this.A = n1;
       this.B = n2; 
       this.soma = function()    { 
         return this.A + this.B; };
       this.subtracao = function() { 
         return this.A - this.B;   };
       this.multiplicacao = function() { 
         return this.A * this.B;       };
       this.divisao = function() { 
         return this.A / this.B; };
       this.raizQuadrada = function() { 
         return Math.sqrt(this.A);    };
       this.potenciaQuadrada = function() { 
         return Math.pow(this.A,2);       };
       this.umdivididoporX = function() { 
         return 1 / this.A;             };
    }

  // **************************** funções JAVASCRIPT
  
   function formatacao()
  {
   // formatar o cabeçalho  

    var cabecalho = document.getElementsByClassName("cabecalho");
    cabecalho[0].style.backgroundColor = "#808080";
    cabecalho[0].style.border = "3px solid #ffff00";
    cabecalho[0].style.fontSize = "22px";
    cabecalho[0].style.color = "#ffffff";
    cabecalho[0].style.width = "630px";
    cabecalho[0].style.height = "50px";
    
      
   // formatar o botao
   for ( var i=0 ;  i<20 ; i++  )
   {

    var botao = document.getElementsByClassName("botao");
    botao[i].style.backgroundColor = "#00FFFF";
    botao[i].style.border = "3px solid black";
    botao[i].style.width = "50px";

   }
   
   // formatar o visor

    var visor = document.getElementsByClassName("visor");
    visor[0].style.backgroundColor = "#00FFFF";
    visor[0].style.border = "3px solid black";
    visor[0].style.width = "557px";
    visor[0].style.height = "40px";  
    
    //window.onload;

  }

  function init() {
    formatacao();
    }
    window.onload = init;


  

  function clicouNumero(numero)
    {  document.frmCalculadora.txt_Visor.value += numero;  }

  function clicouCE()  {
       document.frmCalculadora.txt_Visor.value = '';  }

  function clicouOperacao(ope)  {
       operacao = ope;
       numero1 = parseFloat(document.frmCalculadora.txt_Visor.value);
       numero1 = parseFloat(numero1.toFixed(2));
       document.frmCalculadora.txt_Visor.value = '';
       if ((operacao == '√') && (operacao == 'X2') && (operacao == '1/x')) {
         clicouIGUAL(); }
       
    }   

  function clicouIGUAL()  {    
       var resultado = 0;
       numero2 = parseFloat(document.frmCalculadora.txt_Visor.value);  
       numero2 = parseFloat(numero2.toFixed(2)); 
       var obj_operacoes = new Operacoes(numero1,numero2);
       switch (operacao) 
       {  
         case '+': {
            document.frmCalculadora.txt_Visor.value = parseFloat(obj_operacoes.soma()); 
            break;
         }
         case '-': {
            document.frmCalculadora.txt_Visor.value = parseFloat(obj_operacoes.subtracao()); 
            break;
         } 
         case '/': {
            document.frmCalculadora.txt_Visor.value = parseFloat(obj_operacoes.divisao()); 
            break;
         }
         case '*': {
            document.frmCalculadora.txt_Visor.value = parseFloat(obj_operacoes.multiplicacao()); 
            break;
         }
         case '1/x': {
            document.frmCalculadora.txt_Visor.value = parseFloat(obj_operacoes.umdivididoporX()); 
            break;
         }
         case 'X2': {
            document.frmCalculadora.txt_Visor.value = parseFloat(obj_operacoes.potenciaQuadrada()); 
            break;
         }
         case '√': {
            document.frmCalculadora.txt_Visor.value = parseFloat(obj_operacoes.raizQuadrada()); 
            break;
         }
       }
    }

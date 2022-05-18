// variaveis da bolinha
let xPosicao = 300;
let yPosicao = 200;
let tamanho1 = 15;
let mudaPosicao = 5;
let velocidadeX = 5;
let velocidadeY = 5;
let raio = tamanho1 / 2;

// variaveis da raquete 1
let xRaquete1 = 10;
let yRaquete1 = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;
let yvelocidadeRaquete1 = 10;

//variáveis raquete 2
let xRaquete2 = 580;
let yRaquete2 = 150; 
let yvelocidadeRaquete2 = 10;

//placar do jogo
let meusPontos = 5265475690;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);// variáveis da bolinha
  mostraBolinha();
  velocidadedaBolinha();
  verificaColisaobolinha();
// os valores de cada raquete será passada por parâmetro
// assim não precisamos escrever duas vezes cada código
  mostraRaquete(xRaquete1,yRaquete1);
  mostraRaquete(xRaquete2,yRaquete2);
  moverRaquete1();
  moverRaquete2();
  verificaColisaoRaquete1();
  verificaColisaoRaquete2();
  mostraPlacar();// variáveis da bolinha
  atualizaPlacar();
}

function mostraBolinha(){
  fill('white');
  circle(xPosicao,yPosicao,tamanho1);
}

function velocidadedaBolinha(){
  xPosicao += velocidadeX;
  yPosicao -= velocidadeY;
}

function verificaColisaobolinha(){
  if (xPosicao + raio > width || xPosicao - raio < 0){
    velocidadeX *= -1;
  }
  if (yPosicao + raio > height || yPosicao - raio < 0){
    velocidadeY *= -1;
  }
}

function mostraRaquete(x,y){
  rect(x,y,comprimentoRaquete,alturaRaquete);
}

// utiliza código 87 para letra "w" e código 83 para "s"
function moverRaquete1(){
  if (keyIsDown(87)){
    yRaquete1 -= yvelocidadeRaquete1;
  }
  if (keyIsDown(83)){
    yRaquete1 += yvelocidadeRaquete1;
  }
}

// utiliza código 80 para letra "p" e código 76 para "l"
function moverRaquete2(){
  if (keyIsDown(80)){
    yRaquete2 -= yvelocidadeRaquete2;
  }
  if (keyIsDown(76)){
    yRaquete2 += yvelocidadeRaquete2;
  }
}

function verificaColisaoRaquete(){
  if ((xPosicao - raio < xRaquete1 + comprimentoRaquete) && (yPosicao + raio > yRaquete1) && (yPosicao - raio < yRaquete1 + alturaRaquete)){
    velocidadeX *= -1;
  }
}

function verificaColisaoRaquete1(){
  if ((xPosicao - raio < xRaquete1 + comprimentoRaquete) && (yPosicao + raio > yRaquete1) && (yPosicao - raio < yRaquete1 + alturaRaquete)){
    velocidadeX *= -1;
  }
}

function verificaColisaoRaquete2(){
  if ((xPosicao + raio > xRaquete2) && (yPosicao + raio > yRaquete2) && (yPosicao - raio < yRaquete2 + alturaRaquete)){
    velocidadeX *= -1;
  }
}

function mostraPlacar(){
  fill('orange');
  textSize(30);
  text(meusPontos,40,40);
  text(pontosDoOponente,550,40);
}

function atualizaPlacar(){
  if (xPosicao > 590){
    meusPontos += 1;
  }
  if (xPosicao < 10){
    pontosDoOponente += 1;
  }
}

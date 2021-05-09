const container=document.querySelector(".app");

const myApp=[
              { 
               type:" INICIAIS ",
               msg:" ",
               path:"images/letraC",
               structure:[
                              {question:"CA",options:['CAMISETA.jpg','CUPIDO.jpg','CUBO.jpg','CORTINA.jpg'],key:0},

                              {question:"CO",options:['CADERNO.jpg','CUBO.jpg','COCA.jpg','CAMISETA.jpg'],key:2},

                              {question:"CA",options:['CORTINA.jpg','COCA.jpg','CUBO.jpg','CADERNO.jpg'],key:3},
  
                              {question:"CU",options:['CUBO.jpg','CORTINA.jpg','CAMISETA.jpg','CARAMUJO.jpg'],key:0},
                        
                              {question:"CA",options:['CORTINA.jpg','CORACAO.jpg','CEGONHA.jpg','CAMARAO.jpg'],key:3},                                                                           

                              {question:"CU",options:['CUPIDO.jpg','COZINHA.jpg','CABRITO.jpg','CENTOPEIA.jpg'],key:0},

                              {question:"CO",options:['CABANA.jpg','CANOA.jpg','CORTINA.jpg','CAMINHAO.jpg'],key:2},

                              {question:"CA",options:['CONFEITEIRO.jpg','CANOA.jpg','CORACAO.jpg','COLMEIA.jpg'],key:1},

                              {question:"CO",options:['CORACAO.jpg','CAMINHAO.jpg','CARNEIRO.jpg','CATAVENTO.jpg'],key:0},
  
                              {question:"CA",options:['COROA.jpg','CORTINA.jpg','CAMINHAO.jpg','COUVEFLOR.jpg'],key:2},
                        
                              {question:"CO",options:['CAMINHAO.jpg','CASA.jpg','CANOA.jpg','COROA.jpg'],key:3},
                                                                                
                              {question:"CA",options:['CANHAO.jpg','COROA.jpg','COELHO.jpg','CORTINA.jpg'],key:0},

                              {question:"CO",options:['CANGURU.jpg','CENOURA.jpg','COLMEIA.jpg','CEGONHA.jpg'],key:2},

                              {question:"CA",options:['COCO.jpg','CUBO.jpg','COROA.jpg','CANGURU.jpg'],key:3},

                              {question:"CO",options:['COCO.jpg','CABRITO.jpg','CARROSSEL.jpg','CATAVENTO.jpg'],key:0},

                              {question:"CA",options:['CORTINA.jpg','CABRITO.jpg','CIRCO.jpg','CORUJA.jpg'],key:1},

                              {question:"CO",options:['CARROSSEL.jpg','CASA.jpg','COUVEFLOR.jpg','CAMALEAO.jpg'],key:2},       
                                              
                              {question:"CA",options:['CESTA.jpg','CENTOPEIA.jpg','COGUMELOS.jpg','CACHOEIRA.jpg'],key:3},

                              {question:"CO",options:['COELHO.jpg','CENOURA.jpg','CIRCO.jpg','CALCA.jpg'],key:0},
                           
                              {question:"CA",options:['COGUMELOS.jpg','CEREJAS.jpg','CALOR.jpg','CENOURA.jpg'],key:2},                               

                              {question:"CO",options:['CEREJAS.jpg','CORUJA.jpg','CAMALEAO.jpg','CAVALO.jpg'],key:1},                       
                          
                              {question:"CA",options:['CEREAL.jpg','CIRCO.jpg','CIGANA.jpg','CARROSSEL.jpg'],key:3},

                              {question:"CO",options:['CAVALO.jpg','CATAVENTO.jpg','COLAR.jpg','CAMALEAO.jpg'],key:2},
                           
                              {question:"CA",options:['COLAR.jpg','CAMA.jpg','CESTA.jpg','CEBOLA.jpg'],key:1},

                              {question:"CO",options:['COBRA.jpg','CASACO.jpg','CEGONHA.jpg','CARROSSEL.jpg'],key:0}, 

                              {question:"CA",options:['CENTOPEIA.jpg','COGUMELOS.jpg','CORTINA.jpg','CAMALEAO.jpg'],key:3},

                              {question:"CE",options:['CESTA.jpg','CAMISETA.jpg','CORDEIRO.jpg','CADEIRA.jpg'],key:0},

                              {question:"CA",options:['COELHO.jpg','CABANA.jpg','COBRA.jpg','COLAR.jpg'],key:1},

                              {question:"CI",options:['CENTOPEIA.jpg','CATAVENTO.jpg','CIRCO.jpg','COCO.jpg'],key:2},

                              {question:"CA",options:['CESTA.jpg','CASA.jpg','CENTOPEIA.jpg','CORUJA.jpg'],key:1},

                              {question:"CO",options:['CATAVENTO.jpg','CARROSSEL.jpg','CASTELO.jpg','COGUMELOS.jpg'],key:3},
 
                              {question:"CA",options:['CUPIDO.jpg','CORUJA.jpg','CATAVENTO.jpg','CEREJAS.jpg'],key:2},

                              {question:"CI",options:['CIGANA.jpg','CASACO.jpg','CASTELO.jpg','CAMA.jpg'],key:0},

                              {question:"CA",options:['CEREJAS.jpg','CASACO.jpg','CENTOPEIA.jpg','CORDEIRO.jpg'],key:1},

                              {question:"CE",options:['CORUJA.jpg','CACHORRO.jpg','CERCA.jpg','CAMISETA.jpg'],key:2},
                              
                              {question:"CA",options:['CONFEITEIRO.jpg','COLMEIA.jpg','CENTOPEIA.jpg','CASTELO.jpg'],key:3},

                              {question:"CE",options:['CENTOPEIA.jpg','CANGURU.jpg','CAVALO.jpg','CASA.jpg'],key:0},
                              
                              {question:"CA",options:['CEBOLA.jpg','CACHORRO.jpg','CERCA.jpg','CORDEIRO.jpg'],key:1},

                              {question:"CE",options:['CALCA.jpg','CABANA.jpg','CORUJA.jpg','CEREAL.jpg'],key:3},

                              {question:"CA",options:['CALCA.jpg','CEGONHA.jpg','COLAR.jpg','CORACAO.jpg'],key:0},

                              {question:"CO",options:['CENOURA.jpg','COZINHA.jpg','CERCA.jpg','CASA.jpg'],key:1},

                              {question:"CE",options:['CAMISETA.jpg','CASTELO.jpg','CEREJAS.jpg','CAVALO.jpg'],key:2},

                              {question:"CO",options:['CASTELO.jpg','CARANGUEJO.jpg','CARROSSEL.jpg','CORDEIRO.jpg'],key:3},

                              {question:"CE",options: ['CARROSSEL.jpg','CENOURA.jpg','CADEIRA.jpg','CAMISETA.jpg'],key:1},

                              {question:"CA",options:['CIRCO.jpg','CONFEITEIRO.jpg','COCO.jpg','CARANGUEJO.jpg'],key:3},

                              {question:"CE",options:['CORACAO.jpg','CAVALO.jpg','CARANGUEJO.jpg','CEGONHA.jpg'],key:3},
      
                              {question:"CA",options:['CENTOPEIA.jpg','CEGONHA.jpg','CAVALO.jpg','COZINHA.jpg'],key:2},

                              {question:"CE",options:['CAMISETA.jpg','CEBOLA.jpg','CAMA.jpg','CASA.jpg'],key:1},

                              {question:"CA",options:['CADEIRA.jpg','CERCA.jpg','CENTOPEIA.jpg','CEBOLA.jpg'],key:0},

                              {question:"CO",options:['CAMISETA.jpg','CUPIDO.jpg','CONFEITEIRO.jpg','CERCA.jpg'],key:2}
 
                              

                        ]
              },

              { 

                   type:" PALAVRAS  ",
                   msg:" ",
                   path:"images/letraC",
                   structure:[
                              {question:"CADERNO",options:['COCA.jpg','CADERNO.jpg','CUBO.jpg','CORTINA.jpg'],key:1},

                              {question:"COCA",options:['CADERNO.jpg','CUBO.jpg','CAMISETA.jpg','COCA.jpg'],key:3},

                              {question:"CAMISETA",options:['CUBO.jpg','CAMISETA.jpg','CUPIDO.jpg','CORTINA.jpg'],key:1},  

                              {question:"CUBO",options:['CUBO.jpg','CORTINA.jpg','CAMISETA.jpg','CARAMUJO.jpg'],key:0},
                        
                              {question:"CAMARÃO",options:['CORTINA.jpg','CORACAO.jpg','CEGONHA.jpg','CAMARAO.jpg'],key:3},                                                                           

                              {question:"CUPIDO",options:['CUPIDO.jpg','COZINHA.jpg','CABRITO.jpg','CENTOPEIA.jpg'],key:0},

                              {question:"CORTINA",options:['CABANA.jpg','CANOA.jpg','CORTINA.jpg','CAMINHAO.jpg'],key:2},

                              {question:"CANOA",options:['CONFEITEIRO.jpg','CANOA.jpg','CORACAO.jpg','COLMEIA.jpg'],key:1},

                              {question:"CORAÇÃO",options:['CORACAO.jpg','CAMINHAO.jpg','CARNEIRO.jpg','CATAVENTO.jpg'],key:0},
  
                              {question:"CAMINHÃO",options:['COROA.jpg','CORTINA.jpg','CAMINHAO.jpg','COUVEFLOR.jpg'],key:2},
                        
                              {question:"COROA",options:['CAMINHAO.jpg','CASA.jpg','CANOA.jpg','COROA.jpg'],key:3},
                                                                                
                              {question:"CANHÃO",options:['CANHAO.jpg','COROA.jpg','COELHO.jpg','CORTINA.jpg'],key:0},

                              {question:"COLMÉIA",options:['CANGURU.jpg','CENOURA.jpg','COLMEIA.jpg','CEGONHA.jpg'],key:2},

                              {question:"CANGURU",options:['COCO.jpg','CUBO.jpg','COROA.jpg','CANGURU.jpg'],key:3},

                              {question:"CABANA",options:['COELHO.jpg','CABANA.jpg','COBRA.jpg','COLAR.jpg'],key:1},

                              {question:"COCÔ",options:['COCO.jpg','CABRITO.jpg','CARROSSEL.jpg','CATAVENTO.jpg'],key:0},

                              {question:"CABRITO",options:['CORTINA.jpg','CABRITO.jpg','CIRCO.jpg','CORUJA.jpg'],key:1},

                              {question:"COUVE-FLOR",options:['CARROSSEL.jpg','CASA.jpg','COUVEFLOR.jpg','CAMALEAO.jpg'],key:2},       
                                              
                              {question:"CACHOEIRA",options:['CESTA.jpg','CENTOPEIA.jpg','COGUMELOS.jpg','CACHOEIRA.jpg'],key:3},

                              {question:"COELHO",options:['COELHO.jpg','CENOURA.jpg','CIRCO.jpg','CALCA.jpg'],key:0},
                           
                              {question:"CALOR",options:['COGUMELOS.jpg','CEREJAS.jpg','CALOR.jpg','CENOURA.jpg'],key:2},                               

                              {question:"CORUJA",options:['CEREJAS.jpg','CORUJA.jpg','CAMALEAO.jpg','CAVALO.jpg'],key:1},                       
                          
                              {question:"CARROSSEL",options:['CEREAL.jpg','CIRCO.jpg','CIGANA.jpg','CARROSSEL.jpg'],key:3},

                              {question:"COLAR",options:['CAVALO.jpg','CATAVENTO.jpg','COLAR.jpg','CAMALEAO.jpg'],key:2},
                           
                              {question:"CAMA",options:['COLAR.jpg','CAMA.jpg','CESTA.jpg','CEBOLA.jpg'],key:1},

                              {question:"COBRA",options:['COBRA.jpg','CASACO.jpg','CEGONHA.jpg','CARROSSEL.jpg'],key:0}, 

                              {question:"CAMALEÃO",options:['CENTOPEIA.jpg','COGUMELOS.jpg','CORTINA.jpg','CAMALEAO.jpg'],key:3},

                              {question:"CESTA",options:['CESTA.jpg','CAMISETA.jpg','CORDEIRO.jpg','CADEIRA.jpg'],key:0},

                              {question:"CIRCO",options:['CENTOPEIA.jpg','CATAVENTO.jpg','CIRCO.jpg','COCO.jpg'],key:2},

                              {question:"CASA",options:['CESTA.jpg','CASA.jpg','CENTOPEIA.jpg','CORUJA.jpg'],key:1},

                              {question:"COGUMELOS",options:['CATAVENTO.jpg','CARROSSEL.jpg','CASTELO.jpg','COGUMELOS.jpg'],key:3},
 
                              {question:"CATAVENTO",options:['CUPIDO.jpg','CORUJA.jpg','CATAVENTO.jpg','CEREJAS.jpg'],key:2},

                              {question:"CIGANA",options:['CIGANA.jpg','CASACO.jpg','CASTELO.jpg','CAMA.jpg'],key:0},

                              {question:"CASACO",options:['CEREJAS.jpg','CASACO.jpg','CENTOPEIA.jpg','CORDEIRO.jpg'],key:1},

                              {question:"CERCA",options:['CORUJA.jpg','CACHORRO.jpg','CERCA.jpg','CAMISETA.jpg'],key:2},
                              
                              {question:"CASTELO",options:['CONFEITEIRO.jpg','COLMEIA.jpg','CENTOPEIA.jpg','CASTELO.jpg'],key:3},

                              {question:"CENTOPÉIA",options:['CENTOPEIA.jpg','CANGURU.jpg','CAVALO.jpg','CASA.jpg'],key:0},
                              
                              {question:"CACHORRO",options:['CEBOLA.jpg','CACHORRO.jpg','CERCA.jpg','CORDEIRO.jpg'],key:1},

                              {question:"CEREAL",options:['CALCA.jpg','CABANA.jpg','CORUJA.jpg','CEREAL.jpg'],key:3},

                              {question:"COZINHA",options:['CENOURA.jpg','COZINHA.jpg','CERCA.jpg','CASA.jpg'],key:1},

                              {question:"CEREJAS",options:['CAMISETA.jpg','CASTELO.jpg','CEREJAS.jpg','CAVALO.jpg'],key:2},

                              {question:"CORDEIRO",options:['CASTELO.jpg','CARANGUEJO.jpg','CARROSSEL.jpg','CORDEIRO.jpg'],key:3},

                              {question:"CENOURA",options: ['CARROSSEL.jpg','CENOURA.jpg','CADEIRA.jpg','CAMISETA.jpg'],key:1},

                              {question:"CALÇA",options:['CALCA.jpg','CEGONHA.jpg','COLAR.jpg','CORACAO.jpg'],key:0},

                              {question:"CEGONHA",options:['CORACAO.jpg','CAVALO.jpg','CARANGUEJO.jpg','CEGONHA.jpg'],key:3},
      
                              {question:"CAVALO",options:['CENTOPEIA.jpg','CEGONHA.jpg','CAVALO.jpg','COZINHA.jpg'],key:2},

                              {question:"CEBOLA",options:['CAMISETA.jpg','CEBOLA.jpg','CAMA.jpg','CASA.jpg'],key:1},

                              {question:"CARANGUEJO",options:['CIRCO.jpg','CONFEITEIRO.jpg','COCO.jpg','CARANGUEJO.jpg'],key:3},

                              {question:"CONFEITEIRO",options:['CAMISETA.jpg','CUPIDO.jpg','CONFEITEIRO.jpg','CERCA.jpg'],key:2},
 
                              {question:"CADEIRA",options:['CADEIRA.jpg','CERCA.jpg','CENTOPEIA.jpg','CEBOLA.jpg'],key:0}

                          ]
              }

  ]



     // create select element
     const select=document.createElement("select");
           select.setAttribute("onchange","load(this)") 
      for (let j=0;j<myApp.length;j++){
          const option=document.createElement("option");
                option.value=j;
                option.innerHTML=myApp[j].type;
                select.appendChild(option)
      }
     document.querySelector(".quiz-box").appendChild(select)

     //create class
     class App{
           constructor(myApp,container){
                this.app=myApp;
                this.container=container;
                this.index=0;
                this.score=0;
                this.quizSize=this.app.structure.length
                this.optionSize=this.app.structure[0].options.length;
                this.msgEle=this.container.querySelector(".msg"); 
                this.quizEle=this.container.querySelector(".quiz")
                this.optionEle=this.container.querySelector(".option-box");
                this.questionNumber=this.container.querySelector(".question-number");
                this.scoreEle=this.container.querySelector(".score-board"); 
                this.setQuestion();
                this.setOptions();
                this.scoreBoard();

           }

           setQuestion(){ 
               this.msgEle.innerHTML=this.app.msg;
               this.quizEle.innerHTML=this.app.structure[this.index].question;
               this.questionNumber.innerHTML=(this.index+1)+"/"+this.quizSize;
         }

           setOptions(){
                this.optionEle.innerHTML="";
                for(let i=0; i<this.optionSize; i++){
                  const button=document.createElement("button")
                        button.type="button";
                        button.id=i;
                  const img=document.createElement("img");
                        img.src=this.app.path+"/"+this.app.structure[this.index].options[i];
                        button.appendChild(img)
                    this.optionEle.appendChild(button)     
                }
                this.optionClick();
                

           }

           scoreBoard(){
              this.scoreEle.innerHTML=this.score;
           }

           optionClick(){
               const that=this;
              var options=this.optionEle.children;
              for (let i=0; i<options.length; i++) {
                   options[i].addEventListener("click",function(){
                      const span=document.createElement("span");
                     if(this.id==that.app.structure[that.index].key){
                         span.innerHTML="  =D  ";
                         this.classList.add("correta");
                         that.score++;
                         that.scoreBoard();
                      }
                      else{
                          span.innerHTML="  =(  ";
                          this.classList.add("errada");
                      }
                      this.appendChild(span);

                      
                     for (let j=0; j<that.optionEle.children.length; j++) {
                         
                          if(this.id==that.optionEle.children[j].id) {

                          }
                           // you can also show the correct answer when you click on wrong option
                           else if (that.optionEle.children[j].id==that.app.structure[that.index].key){
                                var span2=document.createElement("span")
                                span2.innerHTML=" =P ";
                                that.optionEle.children[j].appendChild(span2)
                               that.optionEle.children[j].classList.add("correta");
                          }
                          else{
                               that.optionEle.children[j].classList.add("hide"); 

                          }
                    
                    }
                    this.style.pointerEvents="none";
                    that.index++;
                    if(that.index>that.quizSize-1){
                        setTimeout(function(){
                          that.quizOver();
                        },2000);
                        that.quizOver();
                    }
                    else{
                    // next quiz update
                    setTimeout(function(){
                      that.setQuestion()
                      that.setOptions()
                    },2000)
                    }

                    })

                }

           }

           quizOver(){

              this.msgEle.innerHTML="";
              this.quizEle.innerHTML="";
              
              if (this.score > this.quizSize/2){
                   
                   this.optionEle.innerHTML="<h1><img src='images/over.png'/><br> </h1>";

              }
              else{
                this.optionEle.innerHTML="<h1><img src='images/game.png'/><br> </h1>";
              }
              
           }
     }
       // create object without onchange of select
       const app1=new App(myApp[0],container) 
            
      function load(ele) {
        const app1=new App(myApp[ele.value],container)
      }


      

     



  
   
   
 



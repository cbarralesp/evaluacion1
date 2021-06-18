 // crear una interface llamada "figura"
    // esta interface tiene 2 metodos abstractos  que son: calcularPerimetro y calcularArea
    // defina 2 clases que implemente la interface(Clases " circulo", "rectangulo", "Triangulo")
    // Crear 2 objetos y ejecutar sus metodos.


    interface Figura {
        superficie: number;
        area: number;
        calcularSuperficie(): number;
        calcularPerimetro(): number;
      }
      
      
      class Cuadrado implements Figura {
        superficie: number;
        area: number;
        constructor(private lado:number) {
          this.superficie = this.calcularSuperficie();
          this.area = this.calcularPerimetro();
        }
      
        calcularSuperficie(): number {
          return this.lado * this.lado;
        }
      
        calcularPerimetro(): number {
          return this.lado * 4;
        }  
      }
      
      
      class Rectangulo implements Figura {
        superficie: number;
        area: number;
        constructor(private ladoMayor:number, private ladoMenor:number) {
          this.superficie = this.calcularSuperficie();
          this.area = this.calcularPerimetro();
        }
      
        calcularSuperficie(): number {
          return this.ladoMayor * this.ladoMenor;
        }
      
        calcularPerimetro(): number {
          return (this.ladoMayor * 2) + (this.ladoMenor * 2);
        }  
      }
      
      
      let cuadrado1: Cuadrado;
      cuadrado1 = new Cuadrado(10);
      console.log(`area del cuadrado : ${cuadrado1.calcularPerimetro()}`);
      console.log(`Superficie del cuadrado : ${cuadrado1.calcularSuperficie()}`);
      let rectangulo1: Rectangulo;
      rectangulo1 = new Rectangulo(10, 5);
      console.log(`area del rectangulo : ${rectangulo1.calcularPerimetro()}`);
      console.log(`Superficie del cuadrado : ${rectangulo1.calcularSuperficie()}`);
// Capturar entradas mediante prompt()
      const num1Input = document.getElementById("num1");
      const num2Input = document.getElementById("num2");

      // Declarar variables y objetos necesarios para simular el proceso seleccionado
      let num1;
      let num2;

      // Crear funciones y/o métodos para realizar operaciones
      const suma = (a, b) => {
        return a + b;
      }

      // Efectuar una salida
      const calculateBtn = document.getElementById("calculate-btn");
      calculateBtn.addEventListener("click", () => {
        num1 = parseInt(num1Input.value);
        num2 = parseInt(num2Input.value);
        const result = suma(num1, num2);
        document.getElementById("result").innerHTML = `El resultado de la suma es: ${result}`;
      });

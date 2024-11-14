# Age Calculator App

## Demo
Puedes ver una demo del proyecto aquí: [Enlace de la demo](https://juserdev.github.io/11-JS-Challenge/)

![Vista del formulario](https://res.cloudinary.com/dz209s6jk/image/upload/v1680193823/Challenges/edhwnh0nvy7vyhejeccf.jpg)

---

## Descripción del Proyecto
El **Age Calculator App** es una aplicación web que permite calcular la edad exacta de una persona en años, meses y días a partir de su fecha de nacimiento. Los usuarios ingresan su día, mes y año de nacimiento, y la aplicación valida los datos y muestra el resultado de forma instantánea. Este proyecto se centra en mejorar las habilidades de JavaScript, manejo del DOM y validación de formularios.

---

## Características
- **Validación de entradas**: 
  - El formulario verifica que los campos de día, mes y año no estén vacíos.
  - Valida que el mes esté entre 1 y 12.
  - Comprueba que el día sea válido para el mes y el año ingresados.
  - No permite años mayores al año actual.
- **Cálculo preciso**:
  - Calcula la edad en años, meses y días, ajustando posibles diferencias negativas en días y meses para un resultado correcto.
- **Mensajes de error dinámicos**:
  - Muestra mensajes de error específicos para cada campo cuando se ingresan datos no válidos.
- **Diseño adaptable**:
  - La aplicación es responsiva y se adapta tanto a dispositivos móviles como de escritorio, proporcionando una experiencia de usuario fluida.

---

## Imágenes del Proyecto
Aquí tienes algunas imágenes de cómo se ve el proyecto en acción:

<div style="display: flex; justify-content: space-between;">
    <img src="https://res.cloudinary.com/dz209s6jk/image/upload/v1680193823/Challenges/edhwnh0nvy7vyhejeccf.jpg" alt="Pantalla Principal" style="height: 300px; width: auto; margin: 10px;">
    <img src="https://res.cloudinary.com/dz209s6jk/image/upload/v1680193823/Challenges/yzbxqmjqz0rshhaxerwb.jpg" alt="Mensaje de Error" style="height: 300px; width: auto; margin: 10px;">
    <img src="https://res.cloudinary.com/dz209s6jk/image/upload/v1680193823/Challenges/cgw08h6powt1zmotfx3q.jpg" alt="Resultado de la Calculadora" style="height: 300px; width: auto; margin: 10px;">
</div>

---

## Agradecimientos
Este proyecto fue desarrollado como parte de un desafío de [Frontend Mentor](https://www.frontendmentor.io). Agradezco a la plataforma por el reto y por brindar la oportunidad de mejorar mis habilidades en desarrollo frontend.

---

## Desarrollo del Challenge
Para este reto, implementé varias funcionalidades utilizando JavaScript:

1. **Validación del formulario**:
   - Verifico que los campos de día, mes y año no estén vacíos para evitar errores de cálculo.
   - El mes debe estar en el rango de 1 a 12, y el día debe ser válido según el mes y el año proporcionados.
   - El año ingresado no puede ser mayor al año actual para evitar fechas futuras.
   
2. **Cálculo de edad**:
   - Uso una función para calcular la diferencia en años, meses y días, teniendo en cuenta ajustes para los días y meses negativos.
   - Utilizo objetos `Date` de JavaScript para manejar la lógica de cálculo.

3. **Mensajes de error**:
   - Los mensajes de error se muestran dinámicamente cuando se ingresan datos incorrectos, y el formulario cambia visualmente para indicar el error.

4. **Interfaz de usuario**:
   - El diseño es minimalista y responsivo, adaptándose a diferentes tamaños de pantalla para mejorar la experiencia del usuario.

---

## Cómo Contribuir
1. Haz un fork del proyecto.
2. Clona tu fork localmente.
3. Crea una rama para tu contribución: `git checkout -b nombre-rama`.
4. Realiza los cambios necesarios y confirma los commits.
5. Envía un pull request describiendo tus mejoras.

---

## Repositorio
Puedes acceder al repositorio del proyecto en GitHub [aquí](https://github.com/JuSeRDev/11-JS-Challenge.git).

---

## Enlace del Desafío
Este reto fue proporcionado por [Frontend Mentor](https://www.frontendmentor.io).

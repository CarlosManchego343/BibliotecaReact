# React

Es una biblioteca de javascript para la construccion de interfazces de usuario.

- Ayuda la modificación del DOM 

- Su objetivo es minimizar los errores que pueden salir a la hora de programar.

- Se necesitan conocimientos basicos del lenguaje Javascript

Se hacen uso de **COMPONENTES** lo cual es un producto de software que se diferencia y se puede reutilizar durante la creación de un proyecto. Se definen con clases o con funciones. Se hace la implementación de un metodo **RENDER** el cual renderiza en el componente raiz un trozo de la interfaz. En un solo componente se puede mezclar codigo Javascript y HTML dentro de un archivo **JSX**.

Consta tambien de **MODULOS** los cuales permiten algunas acciones como por ejemplo: Modificar el DOM, definir rutas de navegación, modificar el estado de los componentes, etc.

Se consta de una doctrina ***SINGLE PAGE*** lo que siginifica que con tan solo un documento se va a cagar todas las interfacez.

# Tecnologia JSX

Es la base de todo el codigo React

- Siempre que se crea una aplicacion en React se crea un fichero de extencion JSX donde se llamaran los diferentes componentes.

- La idea es mezclar los lenguajes Javascript y HTML, donde se envuelven el resultado de JavaScript entre corchetes, un ejemplo seria:

```
    const name = "Carlos Manchego";
    const element = <h1>Hello, {name}</h1>
```

- Se puede: Dar valor a los atributos de los elementos HTML, usar las expresiones en condicionales y bucles, se puede crear varios elementos dentro de uno solo, etc.

# React + Vite

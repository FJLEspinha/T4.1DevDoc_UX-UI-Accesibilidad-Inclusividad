# Descripción del trabajo
En este trabajo se pretende mostrar la usabilidad de las leyes de **UX** que existen y su correcto 
funcionamiento.  
A continuación se pasa a dar una muy breve descripción de las leyes escogidas, de la interactividad 
y del uso de estas en la página.  
Par poder probarla [pincha aquí](https://fjlespinha.github.io/T4.1DevDoc_UX-UI-Accesibilidad-Inclusividad/).
# Ley de contraste
Según la ley de contraste observamos que al tener un grupo de elementos
de forma igual o similar, si uno de ellos se diferencia en algo del resto - tamaño,
color,.. - esto capatará especialmente nuestra atención.  
En el ejemplo incluido en la web, observamos 9 botones iguales en tamaño y con 
el mismo color salvo uno. Este es en el que nos fijamos primero.  
Para comprobar que esto es cierto hay un botón que, de forma aleatoria, cambia el elemento
diferente de ubicación, demostrando de manera clara la veracidad de la ley.

# Ley de Hick
Esta ley esgrime la premisa de que a veces menos es mejor. Lo que quiere decir esto
es que al usuario hay que darle las opciones necesarias para que la toma de decisión le resulte lo mas sencilla y precisa posible.  
En la web vemos 3 opciones de compra: la básica, la intermedia y la premium; todo 
con los datos necesarios para que el usuario sepa cual elegir.  
Como lo que interesa es vender, la última se diferencia ligeramente del resto para 
llamar un poco más la atención del usuario.  
La interactividad con la página se basa en un botón por cada opción que, al ser pulsado, 
salta un modal dando las gracias y felicitando al usuario.

# Ley de Miller
La ley de Miller implica la premisa "7 más menos 2". Esto se relaciona con el hecho de que a las personas les cuesta recordar 
muchas cosas. Sin embargo, esta cantidad comprendida entre 5 y 9 es la ideal para que los usuarios retengan la información.  
En la página tenemos un menú hamburgesa que muestra 5 películas para escoger y ver su información. 
Además, estas cinco películas aparecen presentadas en un carrusel a modo de cartelera. De este modo, a los usuarios les costará 
menos recordar las películas, y la interfaz limpia con elementos desplegables y temporales les ayudarán en la tarea, ya que no se encontrarán saturados de información. Si quieren datos adicionales, debajo del cartel hay un link que les lleva al menú 
hamburgesa para que puedan seleccionar la película y ver su información, como el género y 
la duración, entre otras. Si no, la información principal - título y reparto - estará a su disposición de manera visual en los carteles en la mayoría de los casos. Siendo así, los usuarios retendrán más información con menos datos en pantalla.

# Aspectos técnicos de la página
Cabe destacar ciertos aspectos sobre los elementos de la barra de navegación superior.
Cuando se pasa el cursor sobre los elementos HOME, ABOUT, y CONTACT, el puntero cambia de forma para indicar la posibilidad de interactuación con ellos. Además, aparece una descripción de la acción que se va a realizar. Esto también puede verse en otras partes de la aplicación con las que puede interactuar el usuario.
Por otra parte, los modales que saltan están implementados con HTML y CSS y
los elementos con los que el usuario puede interactuar responden a HTML Native, CSS y JavaScript.
Indicar también que en el carrusel, la cartelera está diseñada con Bootstrap implementado mediante el CDN correspondiente.  
Finalmente, el cambio de color que sufren los botones incluidos en La Ley de Contraste fue implementado mediante una función de JavaScript.  
Para hacer que fuese responsive se uso Flexbox.  
Tengase en cuenta el favicon añadido.


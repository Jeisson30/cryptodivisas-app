# CryptoDivisas App

Este proyecto es una aplicación que muestra información sobre criptomonedas, incluyendo detalles como el nombre, precio, volumen, y mercados  de cotización para cada una. La aplicación permite filtrar y buscar, ver detalles específicos y utilizar una calculadora para convertir valores entre USD y criptomonedas.

## Requisitos Previos

Antes de comenzar, asegúrate de tener los siguientes programas instalados:

- **Node.js** versión 20.9.0
- **NVM (Node Version Manager)**: Para gestionar versiones de Node.js
- **NPM (Node Package Manager)**: Para manejar las dependencias del proyecto

### Instalación de NVM y Node.js

1. Si no tienes **NVM** instalado, puedes hacerlo con el siguiente comando:

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
2. Una vez tengas NVM instalado, puedes instalar y usar la versión de Node.js 20.9.0 con los siguientes comandos:

   ```
   nvm install 20.9.0
   nvm use 20.9.0

   ```
   Verifica la version de nodeJs:

   *node -v*

## Clonar el Proyecto

   Clona el proyecto desde el repositorio en GitHub:

   git clone -b main https://github.com/Jeisson30/cryptodivisas-app.git

   - Una vez clonado abre el proyecto en tu editor de código favorito (por ejemplo, Visual Studio Code, Sublime Text, etc.)

   En la raíz del proyecto, ejecuta el siguiente comando para instalar las dependencias:

   *npm install*

     *Antes de ejecutar el comando,  debes tener un emulador configurado en android studio(ver documento adjunto) o configurar un dispositivo fisico para ver el desarrollo*

   una vez instaladas las dependencias navega hasta la carpeta de android:

   cd android y ejecuta el siguiente comando:

      *npm run android*

   ## Modo Desarrollo.

   Una vez que la app esté instalada, si deseas acceder al modo desarrollo, ejecuta el siguiente comando dentro de la carpeta android:

   npm start
   Esto iniciará el servidor Metro y habilitará el modo de desarrollo.

   Durante el modo de desarrollo, puedes recargar la app presionando la tecla r o haciendo un reload para ver los cambios en tiempo real.

## Características de la App

### Consulta de criptomonedas: 

   La app obtiene datos como el nombre, precio, volumen y otros detalles relevantes de las criptomonedas a través de la API de Coinlore.

### Búsqueda: 
   Puedes filtrar criptomonedas por nombre para encontrar fácilmente la que prefieras. Si no se encuentra, se mostrará un mensaje de error breve.

### Detalles de criptomonedas: 

   Al hacer tap en una tarjeta de criptomoneda, puedes ver detalles más específicos, como los mercados en los que se cotiza.

### Calculadora: 

   La app incluye una calculadora que convierte valores de USD a la criptomoneda seleccionada.
   Desarrollo
   Se tomaron en cuenta las especificaciones tecnológicas requeridas para el desarrollo de la app y se cubrieron los puntos establecidos. Puedes validar estos aspectos revisando el código fuente proporcionado.

## Aspectos de Mejora
El diseño de la app podría mejorarse para optimizar la experiencia de usuario, utilizando herramientas como Figma o algún otro entorno de diseño gráfico, alineado con la marca empresarial.

## Contacto
Cualquier inquietud será aclarada con gusto.

Cordialmente,
** Jeisson Pulido **

# 🍔 BurgerLab - Ecommerce de Hamburguesas Customizables

## Descripción

BurgerLab es una aplicación web de ecommerce desarrollada como Trabajo Práctico para la materia, utilizando **Next.js**, **React**, **MongoDB**, **Mongoose** y **Tailwind CSS**.

La aplicación permite a los usuarios explorar productos, personalizar hamburguesas, administrar favoritos, realizar compras y consultar sus órdenes, mientras que los administradores cuentan con un dashboard para gestionar productos, categorías y órdenes.

---

## Tecnologías utilizadas

* Next.js (App Router)
* React
* Tailwind CSS
* MongoDB
* Mongoose
* JavaScript
* Context API

---

## Funcionalidades implementadas

### Tienda

* Catálogo de productos.
* Vista de detalle de producto.
* Productos relacionados.
* Sistema de categorías.
* Carrito de compras.
* Favoritos.
* Registro e inicio de sesión.
* Perfil de usuario.
* Historial de órdenes.
* Checkout.
* Generación de órdenes con número secuencial.

### Personalización de productos

* Constructor de hamburguesas.
* Selección de tamaño.
* Selección de tipo de medallón.
* Ingredientes extra.
* Papas fritas.
* Bebida.
* Cálculo dinámico del precio.
* Vista previa visual de la hamburguesa.

### Panel de administración

* Dashboard administrativo.
* Gestión de productos.
* Gestión de categorías.
* Listado de órdenes.
* Cambio de estado de órdenes.
* Visualización de métricas principales.

---

## Estructura del proyecto

```text
src/
 ├── app/
 ├── components/
 ├── context/
 ├── lib/
 ├── models/
 └── ...
```

---

## Instalación

Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Instalar dependencias:

```bash
npm install
```

o

```bash
yarn
```

Crear un archivo `.env.local` basado en:

```env
MONGODB_URI=...
```

Ejecutar el proyecto:

```bash
npm run dev
```

o

```bash
yarn dev
```

Abrir:

```
http://localhost:3000
```

---

## Usuario de prueba

### Usuario

```
email: usuario@test.com
password: 123456
```

### Administrador

```
email: admin@test.com
password: 123456
```

*(Modificar por los datos reales del proyecto.)*

---

## Uso de Inteligencia Artificial

Durante el desarrollo del proyecto se utilizó Inteligencia Artificial como herramienta de apoyo al proceso de programación.

Su uso estuvo enfocado principalmente en:

* asistencia para desarrollar y validar parte de la lógica de determinadas funcionalidades;
* generación de propuestas de implementación que luego fueron analizadas, adaptadas e integradas manualmente;
* utilización como agente para acelerar el diseño de la interfaz, refinando componentes, estilos y organización visual mediante Tailwind CSS.

En todos los casos, las soluciones fueron revisadas, comprendidas y ajustadas antes de incorporarse al proyecto.

---

## Reflexión sobre el uso de IA

La Inteligencia Artificial resultó una herramienta útil para agilizar el desarrollo, especialmente en tareas repetitivas, mejoras de interfaz y exploración de distintas alternativas de implementación.

Sin embargo, su utilización no reemplazó el proceso de diseño ni la comprensión del código. Fue necesario analizar cada propuesta, adaptarla a la arquitectura del proyecto, corregir errores y realizar modificaciones para que se ajustara a los requerimientos de la consigna.

En este proyecto la IA fue utilizada como una herramienta de asistencia al desarrollo y productividad, mientras que las decisiones de implementación, integración y resolución de problemas quedaron bajo mi responsabilidad.

---

## Autora

Vicky
Tecnología Multimedial

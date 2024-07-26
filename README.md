# Proyecto Kingdom Hearts API

## Descripción

Este proyecto es una API para gestionar información sobre los juegos y plataformas de la serie Kingdom Hearts, así como usuarios que interactúan con la aplicación. Utiliza MongoDB con Mongoose para el manejo de datos y Express.js para definir los endpoints.

## Modelos de Datos

### KhGames

- **name**: Nombre del juego.
- **img**: URL de la imagen.
- **score**: Puntuación del juego (tipo `Number`).
- **year**: Año de lanzamiento.
- **description**: Descripción del juego.
- **category**: Categoría del juego (Array de Strings con valores posibles: `Action-RPG`, `JRPG`, `Rol`, `Musical`, `Virtual-Reality`).

### KhPlatforms

- **name**: Nombre de la plataforma.
- **img**: URL de la imagen.
- **KingdomHeartsGames**: Array de IDs de juegos asociados a esta plataforma (referencias a `KingdomHeartsGames`).

### Users

- **userName**: Nombre del usuario.
- **password**: Contraseña del usuario (hash).
- **role**: Rol del usuario (valor posible: `admin` o `user`).

## Endpoints

### 1. **KhGames**

#### Obtener Todos los Juegos

- **Ruta**: `GET /api/khgames`
- **Descripción**: Obtiene una lista de todos los juegos de Kingdom Hearts.
- **Autenticación**: Admin

#### Obtener Juego por ID

- **Ruta**: `GET /api/khgames/:id`
- **Descripción**: Obtiene un juego específico por su ID.
- **Parámetros**:
  - `id`: ID del juego.
- **Autenticación**: Ninguna

#### Obtener Juegos por Categoría

- **Ruta**: `GET /api/khgames/category/:category`
- **Descripción**: Obtiene juegos de Kingdom Hearts filtrados por categoría.
- **Parámetros**:
  - `category`: Categoría del juego (Action-RPG, JRPG, Rol, Musical, Virtual-Reality).
- **Autenticación**: Ninguna

#### Obtener Juegos por Puntuación

- **Ruta**: `GET /api/khgames/score/:score`
- **Descripción**: Obtiene juegos de Kingdom Hearts con una puntuación mayor o igual a la especificada.
- **Parámetros**:
  - `score`: Puntuación mínima.
- **Autenticación**: Ninguna

#### Crear un Nuevo Juego

- **Ruta**: `POST /api/khgames`
- **Descripción**: Crea un nuevo juego de Kingdom Hearts.
- **Body**:
  ```json
  {
    "name": "Nombre del juego",
    "img": "URL de la imagen",
    "score": 8.5,
    "year": 2024,
    "description": "Descripción del juego",
    "category": ["Action-RPG"]
  }
  ```

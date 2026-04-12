# 🍩 Homer's Donut Shop - Git Training

> *"Mmm... commits..."*

## 📚 Descripción

Este es un repositorio de práctica para aprender **Git y GitHub** en la Unidad III.

La página web incluye:
- Animaciones CSS divertidas
- Interactividad con JavaScript
- Donuts que rebotan 🍩

---

## 🎯 Ejercicio de Clase

### Instrucciones para cada participante:
1. **Verificar Git instalado**
   ```bash
   git --version
   ```

2. **Acceder a tu cuenta de GitHub**
   - Configurar tu nombre:
   ```bash
   git config --global user.name "Tu Nombre"
   ```
   - Configurar tu email:
   ```bash
   git config --global user.email "tu@email.com
   ```

3. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Reniery-lb/capacitacion-git.git
   cd capacitacion-git
   ```

4. **Crear tu rama** (usa tu nombre)
   ```bash
   git checkout -b feature/tu-nombre
   ```

5. **Editar el archivo `index.html`**
   - Busca la línea que dice:
     ```html
     <!-- Los nombres del equipo se agregarán aquí -->
     ```
   - Agrega tu nombre debajo:
     ```html
     <li class="team-member">Tu Nombre Completo - <em>Developer</em></li>
     ```

6. **Hacer commit y push**
   ```bash
   git add index.html
   git commit -m "feat: agrega [Tu Nombre] al equipo de desarrollo"
   git push origin feature/tu-nombre
   ```

---

## 📁 Estructura del Proyecto

```
capacitacion-git/
├── index.html      # Página principal
├── styles.css      # Estilos y animaciones
├── script.js       # Interactividad
└── README.md       # Este archivo
```

---

## 🛠️ Comandos Git que Practicaremos

| Comando | Descripción |
|---------|-------------|
| `git clone <url>` | Clonar repositorio remoto |
| `git branch` | Ver ramas existentes |
| `git checkout -b <rama>` | Crear y cambiar a nueva rama |
| `git add <archivo>` | Añadir archivos al staging |
| `git commit -m "mensaje"` | Confirmar cambios |
| `git push origin <rama>` | Subir cambios al remoto |
| `git pull origin <rama>` | Bajar cambios del remoto |
| `git log --oneline` | Ver historial de commits |
| `git status` | Ver estado del repositorio |

---

## 👥 Equipo de Desarrollo

Los nombres de los participantes se irán agregando en el `index.html`.

---

## 🎁 Extras Divertidos

- **Click en los donuts**: ¡Efecto de sparkles! ✨
- **Konami Code**: ↑↑↓↓←→←→BA (pruébalo en la página)
- **Animaciones**: Los donuts rebotan y el título se menea

---

## 📄 Licencia

Este proyecto es parte de una capacitación educativa.

---

**Created with ❤️ by The Team**

*"Anyone can get a bad commit. It takes courage to fix it."*

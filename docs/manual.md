# 📘 Manual de Usuario - Git y GitHub

## Unidad III: Control de Versiones

---

## 📖 Tabla de Contenidos

1. [¿Qué es Git?](#qué-es-git)
2. [¿Qué es GitHub?](#qué-es-github)
3. [Instalación](#instalación)
4. [Comandos Básicos](#comandos-básicos)
5. [Flujo de Trabajo](#flujo-de-trabajo)
6. [Trabajo en Equipo](#trabajo-en-equipo)
7. [Solución de Problemas](#solución-de-problemas)

---

## ¿Qué es Git?

**Git** es un sistema de control de versiones distribuido.

### Características principales:
- ✅ Permite rastrear cambios en el código
- ✅ Trabaja de forma local (en tu computadora)
- ✅ Permite múltiples ramas (branches)
- ✅ Facilita el trabajo en equipo
- ✅ Permite revertir cambios si algo sale mal

### Analogía simple:
> Imagina que Git es como un "guardar partida" en un videojuego. Cada commit es un punto de guardado al que puedes regresar si algo sale mal.

---

## ¿Qué es GitHub?

**GitHub** es una plataforma en la nube que usa Git para:
- 🌐 Alojar repositorios remotamente
- 👥 Facilitar la colaboración en equipo
- 🔀 Permitir Pull Requests y Code Review
- 📊 Mostrar el historial de proyectos
- 🎯 Gestionar issues y tareas

### Diferencia clave:
| Git | GitHub |
|-----|--------|
| Software local | Servicio en la nube |
| Control de versiones | Alojamiento y colaboración |
| Funciona sin internet | Requiere internet para sincronizar |

---

## Instalación

### Paso 1: Instalar Git

1. Ve a https://git-scm.com/
2. Descarga la versión para tu sistema operativo
3. Ejecuta el instalador (siguiente, siguiente, siguiente)
4. Verifica la instalación:
   ```bash
   git --version
   ```

### Paso 2: Configurar tu identidad

```bash
# Configurar tu nombre
git config --global user.name "Tu Nombre Completo"

# Configurar tu email (el de tu cuenta de GitHub)
git config --global user.email "tu-email@ejemplo.com"

# Verificar configuración
git config --list
```

### Paso 3: Crear cuenta en GitHub

1. Ve a https://github.com/
2. Click en "Sign Up"
3. Completa el formulario
4. Verifica tu email

---

## Comandos Básicos

### 📋 `git status`
Muestra el estado actual del repositorio.

```bash
git status
```

**Salida típica:**
```
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  modified:   index.html

Untracked files:
  nuevo-archivo.js

no changes added to commit
```

---

### 📥 `git clone`
Clona un repositorio remoto a tu máquina local.

```bash
git clone https://github.com/usuario/proyecto.git
```

---

### 📝 `git add`
Añade archivos al área de staging (preparación para commit).

```bash
# Añadir un archivo específico
git add index.html

# Añadir todos los archivos
git add .

# Añadir todos los archivos .js
git add *.js
```

---

### ✅ `git commit`
Guarda los cambios en el historial local.

```bash
# Commit con mensaje
git commit -m "feat: agrega nueva funcionalidad"

# Commit detallado
git commit -m "fix: corrige error en el botón

- Se arregló el bug del botón de submit
- Se mejoró la validación del formulario"
```

### 📌 Buenas prácticas para mensajes de commit:

| Prefijo | Significado | Ejemplo |
|---------|-------------|---------|
| `feat:` | Nueva funcionalidad | `feat: agrega botón de logout` |
| `fix:` | Corrección de bug | `fix: corrige color del header` |
| `docs:` | Cambios en documentación | `docs: actualiza README` |
| `style:` | Cambios estéticos | `style: mejora espaciado` |
| `refactor:` | Refactorización | `refactor: simplifica función de login` |

---

### 📤 `git push`
Sube tus commits al repositorio remoto.

```bash
# Subir rama actual
git push origin main

# Subir rama específica
git push origin feature/nueva-funcionalidad

# Primera vez que subes una rama
git push -u origin feature/mi-rama
```

---

### 📥 `git pull`
Baja cambios del repositorio remoto.

```bash
git pull origin main
```

> ⚠️ **Importante:** Siempre haz `pull` antes de empezar a trabajar para evitar conflictos.

---

### 🌿 `git branch`
Gestiona las ramas del repositorio.

```bash
# Ver ramas existentes
git branch

# Crear nueva rama
git branch feature/nueva-funcionalidad

# Cambiar de rama
git checkout feature/nueva-funcionalidad

# Crear y cambiar en un solo comando
git checkout -b feature/nueva-funcionalidad

# Eliminar rama local
git branch -d feature/nueva-funcionalidad
```

---

### 📜 `git log`
Muestra el historial de commits.

```bash
# Log básico
git log

# Log en una línea (más compacto)
git log --oneline

# Log con gráfico de ramas
git log --oneline --graph --all

# Últimos 5 commits
git log -5
```

---

## Flujo de Trabajo Típico

### Flujo básico individual:

```bash
# 1. Actualizar tu repositorio local
git pull origin main

# 2. Crear rama para tu feature
git checkout -b feature/mi-cambio

# 3. Hacer tus cambios (editar archivos)

# 4. Verificar qué cambió
git status
git diff

# 5. Añadir cambios
git add .

# 6. Hacer commit
git commit -m "feat: mi nueva funcionalidad"

# 7. Subir cambios
git push origin feature/mi-cambio
```

### Flujo en equipo con Pull Requests:

```
1. git pull origin main           # Actualízate
2. git checkout -b feature/x      # Crea tu rama
3. (haces cambios)                # Trabaja
4. git add .                      # Prepara cambios
5. git commit -m "feat: x"        # Confirma
6. git push origin feature/x      # Sube
7. [En GitHub] Crea Pull Request  # Pide revisión
8. [Team] Revisa y aprueba        # Code review
9. [Team] Merge a main            # Integra
```

---

## Trabajo en Equipo

### 🔄 ¿Qué es un Pull Request (PR)?

Un **PR** es una solicitud para que tus cambios sean revisados e integrados al proyecto principal.

### Pasos para crear un PR:

1. Sube tu rama con `git push`
2. Ve a GitHub → tu repositorio
3. Click en "Pull Requests" → "New Pull Request"
4. Selecciona:
   - **base:** `main` (donde quieres que vayan tus cambios)
   - **compare:** `feature/tu-rama` (tus cambios)
5. Escribe título y descripción
6. Click en "Create Pull Request"
7. Pide review a compañeros

### 📝 Buenas prácticas para PRs:

✅ **Buen título:**
```
feat: agrega autenticación con Google
```

❌ **Mal título:**
```
actualización
```

✅ **Buena descripción:**
```markdown
## Cambios
- Agrega botón de login con Google
- Configura OAuth en backend
- Añade tests de autenticación

## Screenshots
[imagen adjunta]

## Checklist
- [ ] Tests pasan
- [ ] Documentación actualizada
```

---

## Solución de Problemas Comunes

### 🚨 "Changes not staged for commit"

**Problema:** Modificaste archivos pero no los has añadido al staging.

**Solución:**
```bash
git add <archivo>
git commit -m "mensaje"
```

---

### 🚨 "Please enter a commit message"

**Problema:** No pusiste mensaje con `-m`.

**Solución:**
```bash
# Opción 1: Salir y reintentar con -m
# (en Vim: escribe :q! y Enter)

git commit -m "tu mensaje"

# Opción 2: Escribe el mensaje en el editor
```

---

### 🚨 "There is no tracking for this branch"

**Problema:** Es la primera vez que subes esta rama.

**Solución:**
```bash
git push -u origin nombre-de-tu-rama
```

---

### 🚨 "Merge conflict"

**Problema:** Dos personas modificaron la misma línea de código.

**Solución:**
1. Abre el archivo con conflicto
2. Busca las marcas de conflicto:
   ```
   <<<<<<< HEAD
   tu código
   =======
   código de otro
   >>>>>>> feature/otra-rama
   ```
3. Edita para dejar solo el código correcto
4. Elimina las marcas de conflicto
5. Haz commit del archivo corregido

---

### 🚨 "Forgot to add file to last commit"

**Problema:** Olvidaste incluir un archivo en tu último commit.

**Solución:**
```bash
git add archivo-olvidado
git commit --amend --no-edit
git push --force-with-lease  # Solo si aún no hiciste push
```

---

### 🚨 "Accidentally committed to wrong branch"

**Problema:** Hiciste commit en `main` pero debería ir en otra rama.

**Solución:**
```bash
# Crear rama desde el commit actual
git branch feature/correcta

# Regresar main al estado anterior
git reset --hard HEAD~1

# Cambiar a la rama correcta
git checkout feature/correcta

# Subir cambios
git push origin feature/correcta
```

---

## 🎓 Glosario

| Término | Definición |
|---------|------------|
| **Commit** | Un punto de guardado en el historial |
| **Branch** | Una línea de desarrollo independiente |
| **Merge** | Unir dos ramas |
| **Clone** | Copiar un repositorio remoto |
| **Fork** | Copiar un repositorio de otro usuario |
| **Pull** | Bajar cambios del remoto |
| **Push** | Subir cambios al remoto |
| **Remote** | Repositorio en GitHub (u otro servidor) |
| **HEAD** | Puntero a tu posición actual |
| **Staging** | Área donde preparas cambios para commit |

---

## 📚 Recursos Adicionales

- 📖 [Git Documentation](https://git-scm.com/doc)
- 🎮 [Learn Git Branching](https://learngitbranching.js.org/) - Juego interactivo
- 📺 [Git y GitHub para Principiantes](https://www.youtube.com/results?search_query=git+github+tutorial)
- 📋 [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

---

**Manual creado para la Unidad III - Capacitación Git 2026**

---
sidebar_position: 7
title: Actividades
slug: /actividades
---

## ID 40

## Descripción

## Activities

<details>
<summary>
<div class="title-activitie">

### Activity_List_Actividades
[Ver Activitie](../activities/Activity_List_Actividades.md)
</div>
</summary>

La **```Activity_List_Actividades```** tiene las siguientes activities:
<details>
<summary>
<div class="title-activitie">

#### Activity_CheckList_Actividad
[Ver Activitie](../activities/Activity_CheckList_Actividad.md)
</div>
</summary>

La **```Activity_CheckList_Actividad```** tiene la siguientes condiciones:
```js
switch (tipoUsuario)

case TipoUsuario.CHECKLIST
```
</details>

<details>
<summary>
<div class="title-activitie">

#### Activity_Registro_Actividad
[Ver Activitie](../activities/Activity_Registro_Actividad.md)
</div>
</summary>

La **```Activity_Registro_Actividad```** tiene la siguientes condiciones:
```js
switch (tipoUsuario)

case TipoUsuario.NOVEDAD
```

Así mismo tiene la siguiente activitie:
<details>
<summary>
<div class="title-activitie">

#### Activity_Nuevo_Comentario
[Ver Activitie](../activities/Activity_Nuevo_Comentario.md)
</div>
</summary>

La **```Activity_Nuevo_Comentario```** tiene la siguientes condiciones:
```js
if (v == fab_comentario)

if (guardar)

if (msj.equals("Valido"))

if (id > 0)
```
</details>
</details>

<details>
<summary>
<div class="title-activitie">

#### Activity_Registro_Actividad
[Ver Activitie](../activities/Activity_Registro_Actividad.md)
</div>
</summary>

La **```Activity_Registro_Actividad```** tiene la siguientes condiciones:
```js
switch (tipoUsuario)

default
```
</details>
</details>

- [```Activity_List_Actividades```](./../activities/Activity_List_Actividades.md)

  <!-- Primer Activity dentro de Activity_List_Actividades -->
  :::danger Condición ```Activity_CheckList_Actividad```
  ```js
  switch (tipoUsuario)

  case TipoUsuario.CHECKLIST
  ```
  :::
  - [```Activity_CheckList_Actividad```](./../activities/Activity_CheckList_Actividad.md)

  <!-- Segunda Activity dentro de Activity_List_Actividades -->
  :::danger Condición ```Activity_Registro_Actividad```
  ```js
  switch (tipoUsuario)

  // highlight-next-line
  case TipoUsuario.NOVEDAD
  ```
  :::
  - [```Activity_Registro_Actividad```](./../activities/Activity_Registro_Actividad.md)

    <!-- Primer Activity dentro de Activity_Registro_Actividad -->
    :::danger Condición ```Activity_Nuevo_Comentario```
    ```js
    if (v == fab_comentario)

    if (guardar)

    if (msj.equals("Valido"))

    // highlight-next-line 
    if (id > 0)
    ```
    :::
    - [```Activity_Nuevo_Comentario```](./../activities/Activity_Nuevo_Comentario.md)

  <!-- Tercera Activity dentro de Activity_List_Actividades -->
  :::danger Condición ```Activity_Registro_Actividad```
  ```js
  switch (tipoUsuario)

  default
  ```
  :::
  - [```Activity_Registro_Actividad```](./../activities/Activity_Registro_Actividad.md)

## Ultima Actualización

<div class="ultima-actualizacion">
    <small>
        <i> Ultima actualización:<b> 24 de mayo de 2022.</b></i>
  </small>

  <small>
    <i> Actualizado por:<b> Julian A. Ortiz.</b></i>
  </small>
</div>
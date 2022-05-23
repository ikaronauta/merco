---
sidebar_position: 3
title: Transferencia
slug: /transferencia
---

## ID 6

## Descripción

## Preferences

```js
prefsEditor.putString("tareaActual", "Transferencia")
```

## Activities

- [```Activity_Transferencia2```](./../activities/Activity_Transferencia2.md)

  <!-- Primer Activity dentro de Activity_Transferencia2 -->
  :::danger Condición ```Activity_Buscador```
  ```js
  if (v == imgBuscar)
  ```
  :::
  - [```Activity_Buscador```](./../activities/Activity_Buscador.md)

  <!-- Segunda Activity dentro de Activity_Transferencia2 -->
  :::danger Condicion ```Activity_Productos_Transferencia```
  ```js
  if (v == imgAdd)
  ```
  :::

  <!-- Tercera Activity dentro de Activity_Transferencia2 -->
  - [```Activity_Productos_Transferencia```](./../activities/Activity_Productos_Transferencia.md)

    - [```Activity_Datos_Producto_Transferencia```](./../activities/Activity_Datos_Producto_Transferencia.md)  

  <!-- Cuarta Activity dentro de Activity_Transferencia2 -->
  - [```Activity_Datos_Producto_Transferencia```](./../activities/Activity_Datos_Producto_Transferencia.md)

## Ultima Actualización

<div class="ultima-actualizacion">
  <small>
    <i>
      Ultima actualización:
      <b> 20 de mayo de 2022.</b>
    </i>
  </small>

  <small>
    <i>
      Actualizado por:
      <b> Julian A. Ortiz.</b>
    </i>
  </small>
</div>
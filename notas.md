---
sidebar_position: 2
title: Registro Espacios
slug: /registro_espacios
---

## ID 5

## Descripción

## Preferences

```js
prefsEditor.putString("tareaActual", "RegistroEspacios")
```

## Activities

- [```Activity_Categorias_Espacio```](./../activities/Activity_Categorias_Espacio.md)

:::danger Condición
```js 
else (mPrefs.getString("tareaActual", "").equals("RegistroEspaciosObservacion"))
```
:::

- [```Activity_Registro_Espacio```](./../activities/Activity_Registro_Espacio.md)

  :::danger Condición
    ```js 
    if (view == fab_marcarFoto)
    ```
  :::
  - [```Activity_Foto_Espacio```](./../activities/Activity_Foto_Espacio.md)  
  

  :::danger Condición
  ```js 
  if (view == imgCuadricula)

  if (registroCuadricula.equals(""))
  ```
  :::
  - [```Activity_Registro_Espacio_Cuadricula```](./../activities/Activity_Registro_Espacio_Cuadricula.md)

    :::danger Condición
  ```js 
  if (view == imgCuadricula)

  else (registroCuadricula.equals(""))
  ```
  - [```Activity_Registro_Espacio_Cuadricula```](./../activities/Activity_Registro_Espacio_Cuadricula.md)

:::danger Condición
```js 
if(v == fab_btninformeEspacio)
```
:::

- [```Activity_Informe_Espacios```](./../activities/Activity_Informe_Espacios.md)

## Ultima Actualización

<div class="ultima-actualizacion">
  <small>
    <i>
      Ultima actualización:
      <b> 19 de mayo de 2022.</b>
    </i>
  </small>

  <small>
    <i>
      Actualizado por:
      <b> Julian A. Ortiz.</b>
    </i>
  </small>
</div>
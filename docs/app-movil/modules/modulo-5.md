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

<details>
<summary>
<div class="title-activitie">

### Activity Categorias Espacio  

[Ver Activitie](activity-categorias-espacio)
</div>
</summary>

La ***Activity Categorias Espacio*** tiene la siguiente condicion:

```js 
else (mPrefs.getString("tareaActual", "").equals("RegistroEspaciosObservacion"))
```

Así mismo dentro de la ***Activity Categorias Espacio*** se encuentran las siguientes activities:

<details>
<summary>
<div class="title-activitie">

#### Activity Registro Espacio  

[Ver Activitie](activity-registro-espacio)
</div>
</summary>

La ***Activity Registro Espacio*** tiene la siguiente condicion:

```js
if (view == fab_marcarFoto)
```

Así mismo dentro de la ***Activity Registro Espacio*** se encuentran las siguientes activities:

<details>
<summary>
<div class="title-activitie">

#### Activity Foto Espacio  

[Ver Activitie](activity-foto-espacio)
</div>
</summary>

```js title="Condiciones activity-foto-espacio"
if (view == imgCuadricula)

if (registroCuadricula.equals(""))
```

</details>

<details>
<summary>
<div class="title-activitie">

#### Activity Registro Espacio Cuadricula  

[Ver Activitie](activity-registro-espacio-cuadricula)
</div>
</summary>

```js title="Condiciones"
if (view == imgCuadricula)

else (registroCuadricula.equals(""))
```

</details>

<details>
<summary>
<div class="title-activitie">

#### Activity Registro Espacio Cuadricula  

[Ver Activitie](activity-registro-espacio-cuadricula)
</div>

</summary>
</details>

</details>

<details>
<summary>
<div class="title-activitie">

#### Activity Informe Espacios  

[Ver Activitie](activity-informe-espacios)
</div>
</summary>

La ***Activity Informe Espacios*** tiene la siguiente condicion:

```js
if(v == fab_btninformeEspacio)
```

Así mismo dentro de la ***Activity Informe Espacios*** se encuentran la siguiente activitie:

<details>
<summary>
<div class="title-activitie">

#### Activity WebViewEspacios  

[Ver Activitie](activity-webviewespacios)
</div>

</summary>
</details>

</details>

</details>


## Ultima Actualización

<div class="ultima-actualizacion">
  <small>
    <i>
      Ultima actualización:
      <b> 2 de junio de 2022.</b>
    </i>
  </small>

  <small>
    <i>
      Actualizado por:
      <b> Julian A. Ortiz.</b>
    </i>
  </small>
</div>
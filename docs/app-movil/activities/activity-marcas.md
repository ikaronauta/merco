---
sidebar_position: 2
title: Activity_Marcas
slug: /activity-marcas
---

## Descripción

***

## Ruta

```js
  Proyect\merco\app\src\main\java\com\bpmco\appmerco\Activity_Marcas.java
```

***

## Tablas

```marca``` 

***

## Consultas

### Consulta A

```sql title="Tipo" 
  Select
```

```js title="Método desde donde se invoca"
  private void cargarMarcas(int categoria)
```

```js title="Condiciones"
  if (mPrefs.getString("tareaActual", "").equals("CHEQUEO_PRECIOS_MAX/MIN"))
```

```js title="Método"
  manejador.getHandlerMarca().getListaMarcasMaxMin(categoria)
```

```sql title="Query"

  SELECT DISTINCT m.mar_id, m.mar_nombre, m.cat_id FROM marca m
  JOIN productoMaxMin p ON m.mar_id = p.mar_id
  JOIN producto_competenciaMaxMin pc ON p.pro_codigo = pc.pro_id
  WHERE m.cat_id = ? AND p.mar_id IS NOT NULL

  Cursor cursor = db.rawQuery(sql, new String[]{String.valueOf(cat_id)})

```

```js title="Módulos"
    CHEQUEO_DE_PRECIOS_MARCAS_TRAZABILIDAD
```

***

### Consulta B

```sql title="Tipo" 
  Select
```

```js title="Método desde donde se invoca"
  private void cargarMarcas(int categoria)
```

```js title="Condiciones"
  null
```

```js title="Método"
  manejador.getHandlerMarca().getListaMarcasCompMaxMin(categoria)
```

```sql title="Query"

  SELECT DISTINCT m.mar_id, m.mar_nombre, m.cat_id FROM marca m
  JOIN producto_competenciaMaxMin pc ON m.mar_id = pc.mar_id
  WHERE m.cat_id = ? 

  Cursor cursor = db.rawQuery(sql, new String[]{String.valueOf(cat_id)})

```

```js title="Módulos"
    CHEQUEO_DE_PRECIOS_MARCAS_TRAZABILIDAD
```

***

### Consulta C

```sql title="Tipo" 
  Select
```

```js title="Método desde donde se invoca"
  private void cargarMarcas(int categoria)
```

```js title="Condiciones"
  if (mPrefs.getString("tareaActual", "").equals("CHEQUEO_DE_PRECIOS_MARCAS"))

    // highlight-next-line
    if (mPrefs.getString("empresa", "").equals("EC")) /*Esta es la condición que contiene el metodo*/
```

```js title="Método"
  manejador.getHandlerMarca().getListaMarcasPorCanal(categoria, objetoCanal.getId(), objetoCliente.getCli_subCanal())
```

```sql title="Query"

  SELECT DISTINCT m.mar_id, m.mar_nombre, m.cat_id FROM marca m
  JOIN producto p ON m.mar_id = p.mar_id
  JOIN producto_competencia pc ON p.pro_codigo = pc.pro_id
  WHERE m.cat_id = ? AND pc.pro_canal = ? AND p.pro_subCanal = ? AND p.mar_id IS NOT NULL
  ORDER BY m.mar_nombre ASC

  Cursor cursor = db.rawQuery(sql, new String[]{String.valueOf(cat_id), canal, subCanal})

```

```js title="Módulos"
    CHEQUEO_DE_PRECIOS_MARCAS_TRAZABILIDAD
```

***

### Consulta D

```sql title="Tipo" 
  Select
```

```js title="Método desde donde se invoca"
  private void cargarMarcas(int categoria)
```

```js title="Condiciones"
  if (mPrefs.getString("tareaActual", "").equals("CHEQUEO_DE_PRECIOS_MARCAS"))

    // highlight-next-line
    else (mPrefs.getString("empresa", "").equals("EC")) /*Esta es la condición que contiene el metodo*/
```

```js title="Método"
  manejador.getHandlerMarca().getListaMarcasPorCanal(categoria, objetoCliente.getCli_canal(), objetoCliente.getCli_subCanal())
```

```sql title="Query"

  SELECT DISTINCT m.mar_id, m.mar_nombre, m.cat_id FROM marca m
  JOIN producto p ON m.mar_id = p.mar_id
  JOIN producto_competencia pc ON p.pro_codigo = pc.pro_id
  WHERE m.cat_id = ? AND pc.pro_canal = ? AND p.pro_subCanal = ? AND p.mar_id IS NOT NULL
  ORDER BY m.mar_nombre ASC

  Cursor cursor = db.rawQuery(sql, new String[]{String.valueOf(cat_id), canal, subCanal})
 
```

```js title="Módulos"
    CHEQUEO_DE_PRECIOS_MARCAS_TRAZABILIDAD
```

***

### Consulta E

```sql title="Tipo" 
  Select
```

```js title="Método desde donde se invoca"
  private void cargarMarcas(int categoria)
```

```js title="Condiciones"
  null
```

```js title="Método"
  manejador.getHandlerMarca().getListaMarcasCompPorCanal(categoria, objetoCliente.getCli_canal())
```

```sql title="Query"

  SELECT DISTINCT m.mar_id, m.mar_nombre, m.cat_id FROM marca m
  JOIN producto_competencia pc ON m.mar_id = pc.mar_id
  WHERE m.cat_id = ? AND pc.pro_canal = ? ORDER BY m.mar_nombre ASC

  Cursor cursor = db.rawQuery(sql, new String[]{String.valueOf(cat_id), canal})

```

```js title="Módulos"
    CHEQUEO_DE_PRECIOS_MARCAS_TRAZABILIDAD
```

***

### Consulta F

```sql title="Tipo" 
 Select
```

```js title="Método desde donde se invoca"
  private void cargarMarcas(int categoria)
```

```js title="Condiciones"
  if (mPrefs.getString("tareaActual", "").equals("CHEQUEO_DE_PRECIOS_MARCAS_V2")
      || mPrefs.getString("tareaActual", "").equals("CHEQUEO_DE_PRECIOS_MARCAS_TRAZABILIDAD"))
```

```js title="Método"
  manejador.getHandlerMarca().getListaMarcasPorCanalYSubCanal(categoria, objetoCliente.getCli_canal(), objetoCliente.getCli_subCanal())
```

```sql title="Query"

  SELECT DISTINCT m.mar_id, m.mar_nombre, m.cat_id FROM marca m
  JOIN producto p ON m.mar_id = p.mar_id
  INNER JOIN productoPrecio pp ON p.pro_codigo = pp.proCodigo
  JOIN producto_competencia pc ON p.pro_codigo = pc.pro_id
  WHERE m.cat_id = ? AND pc.pro_canal = ? AND pp.prpSubCanal = ? AND p.mar_id IS NOT NULL
  ORDER BY m.mar_nombre ASC

  Cursor cursor = db.rawQuery(sql, new String[]{String.valueOf(cat_id), canal, subCanal})

```

```js title="Módulos"
    CHEQUEO_DE_PRECIOS_MARCAS_TRAZABILIDAD
```

***

### Consulta G

```sql title="Tipo" 
  Select
```

```js title="Método desde donde se invoca"
  private void cargarMarcas(int categoria)
```

```js title="Condiciones"
  null
```

```js title="Método"
  manejador.getHandlerMarca().getListaMarcasCompPorCanal(categoria, objetoCliente.getCli_canal())
```

```sql title="Query"

  SELECT DISTINCT m.mar_id, m.mar_nombre, m.cat_id FROM marca m
  JOIN producto_competencia pc ON m.mar_id = pc.mar_id
  WHERE m.cat_id = ? AND pc.pro_canal = ? ORDER BY m.mar_nombre ASC

  Cursor cursor = db.rawQuery(sql, new String[]{String.valueOf(cat_id), canal})

```

```js title="Módulos"
    CHEQUEO_DE_PRECIOS_MARCAS_TRAZABILIDAD
```

***
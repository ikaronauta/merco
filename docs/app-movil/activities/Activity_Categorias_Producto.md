---
sidebar_position: 1
title: Activity_Categorias_Producto
slug: /activity-categorias-producto
---

## Descripción

***

## Ruta

```js
  Proyect\merco\app\src\main\java\com\bpmco\appmerco\Activity_Categorias_Producto.java
```

***

## Tablas

```categoria_producto``` 

***

## Consultas

### Consulta A

```sql title="Tipo"
  Select
```

```js title="Método desde donde se invoca"
  private void cargarDatos()
```

```js title="Condiciones"
  if(mPrefs.getString("tareaActual", "").equals("CHEQUEO_DE_PRECIOS") || mPrefs.getString("tareaActual", "").equals("CHEQUEO_DE_PRECIOS_MARCAS"))  
  
    if(clienteActual != null)

      // highlight-next-line
      if (mPrefs.getString("empresa", "").equals("EC")) /*Esta es la condición que contiene el metodo*/
```

```js title="Método"
  manejador.getHandlerCategoriaProducto().getCategoriasCompetenciaPorCanal(objetoCanal.getId(), objetoCliente.getCli_subCanal())
```

```sql title="Query"
  
  SELECT DISTINCT ccat_codigo, ccla_txt, ccla_color,orden
  FROM categoria_producto WHERE ccat_codigo IN
    (
      SELECT DISTINCT pr.cat_id
      FROM producto pr
      JOIN producto_competencia proc ON proc.pro_id = pr.pro_codigo
      WHERE proc.pro_canal = ? AND pr.pro_subCanal = ?
    )
    ORDER BY ccla_txt, orden ASC

  Cursor cursor = db.rawQuery(selectQuery, new String[]{canal, subCanal});
  
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
  private void cargarDatos()
```

```js title="Condiciones"
  if(mPrefs.getString("tareaActual", "").equals("CHEQUEO_DE_PRECIOS") || mPrefs.getString("tareaActual", "").equals("CHEQUEO_DE_PRECIOS_MARCAS"))  
  
    if(clienteActual != null)

      // highlight-next-line
      ELSE mPrefs.getString("empresa", "").equals("EC") /*Esta es la condición que contiene el metodo*/
```

```js title="Método"
  manejador.getHandlerCategoriaProducto().getCategoriasCompetenciaPorCanal(objetoCliente.getCli_canal(), objetoCliente.getCli_subCanal())
```

```sql title="Query"
  
  SELECT DISTINCT ccat_codigo, ccla_txt, ccla_color,orden
  FROM categoria_producto WHERE ccat_codigo IN
    (
      SELECT DISTINCT pr.cat_id
      FROM producto pr
      JOIN producto_competencia proc ON proc.pro_id = pr.pro_codigo
      WHERE proc.pro_canal = ? AND pr.pro_subCanal = ?
    )
    ORDER BY ccla_txt, orden ASC

  Cursor cursor = db.rawQuery(selectQuery, new String[]{canal, subCanal})
  
```

```js title="Módulos"
    CHEQUEO_DE_PRECIOS_MARCAS_TRAZABILIDAD
````

***

### Consulta C

```sql title="Tipo"
  Select
```

```js title="Método desde donde se invoca"
  private void cargarDatos()
```

```js title="Condiciones"
  if(mPrefs.getString("tareaActual", "").equals("CHEQUEO_DE_PRECIOS_MARCAS_V2") || mPrefs.getString("tareaActual", "").equals("CHEQUEO_DE_PRECIOS_MARCAS_TRAZABILIDAD"))

    // highlight-next-line
    if(clienteActual != null) /*Esta es la condición que contiene el metodo*/
```

```js title="Método"
  manejador.getHandlerCategoriaProducto().getCategoriasCompetenciaPorCanalYSubCanal(objetoCliente.getCli_canal(), objetoCliente.getCli_subCanal());
```

```sql title="Query"

  SELECT DISTINCT ccat_codigo, ccla_txt, ccla_color,orden 
  FROM categoria_producto WHERE ccat_codigo IN
    (
      SELECT DISTINCT pr.cat_id 
      FROM producto pr 
      INNER JOIN productoPrecio pp ON pr.pro_codigo = pp.proCodigo
      JOIN producto_competencia proc ON proc.pro_id = pr.pro_codigo
      WHERE proc.pro_canal = ? AND pp.prpSubCanal = ?
    ) 
    ORDER BY ccla_txt, orden ASC

  Cursor cursor = db.rawQuery(selectQuery, new String[]{canal, subCanal})

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
  private void cargarDatos()
```

```js title="Condiciones"
  if(mPrefs.getString("tareaActual", "").equals("OrdenarPDV"))

    // highlight-next-line
    if(clienteActual != null) /*Esta es la condición que contiene el metodo*/
```

```js title="Método"
  manejador.getHandlerCategoriaProducto().getCategoriasProductosOrdenarPDV(clienteActual.getCli_id())
```

```sql title="Query"

  SELECT DISTINCT cat.ccla_color, cat.orden, cat.ccla_txt, cat.ccat_codigo
  FROM rotacionDia rot
  JOIN producto pro ON rot.rd_EAN_material = pro.codigoEAN
  JOIN categoria_producto cat ON pro.cat_id = cat.ccat_codigo
  JOIN cliente cli ON rot.rd_EAN_ptoventa = cli.cli_codigoEAN
  WHERE cli.cli_id = ?
  GROUP BY cat.ccat_codigo ORDER BY cat.orden

  Cursor cursor = db.rawQuery(selectQuery, new String[]{codEAN})

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
  private void cargarDatos()
```

```js title="Condiciones"
  if(mPrefs.getString("tareaActual", "").equals("CHEQUEO_PRECIOS_MAX/MIN"))

    // highlight-next-line
    if(clienteActual != null) /*Esta es la condición que contiene el metodo*/
```

```js title="Método"
  manejador.getHandlerCategoriaProducto().getCategoriasCompetenciaMaxMin(clienteMercaderistaActual.getClme_id())
```

```sql title="Query"

  SELECT ccat_codigo, ccla_txt, ccla_color,orden 
  FROM categoria_producto WHERE ccat_codigo IN
    (
      SELECT DISTINCT pr.cat_id
      FROM productoMaxMin pr
      JOIN producto_competenciaMaxMin proc ON proc.pro_id = pr.pro_codigo
    )
    ORDER BY orden"

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
  private void cargarDatos()
```

```js title="Condiciones"
  if((mPrefs.getString("tareaActual", "").equals("MallaCodificacion")) )

    // highlight-next-line
    if(clienteActual != null) /*Esta es la condición que contiene el metodo*/
```

```js title="Método"
  manejador.getHandlerCategoriaProducto().getCategoriasProductosMalla(clienteMercaderistaActual.getClme_id(), clienteActual.getCli_id())
```

```sql title="Query"

  SELECT DISTINCT cat.ccla_color, cat.orden, cat.ccla_txt, cat.ccat_codigo
  FROM cliente_mercaderista v JOIN cliente cl ON cl.cli_id = v.cli_id
  JOIN productoscliente pc on pc.cli_codSAP = cl.cli_codigoSap
  JOIN producto pro on pc.pro_codigo = pro.pro_codigo
  JOIN productosventa pv on pro.pro_codigo = pv.pro_codigo
  JOIN categoria_producto cat ON pro.cat_id = cat.ccat_codigo
  WHERE v.clme_id = ? AND pv.cli_id = ?
  GROUP BY cat.ccat_codigo ORDER BY cat.orden

  Cursor cursor = db.rawQuery(selectQuery, new String[]{String.valueOf(session), cli_id})

```

```js title="Módulos"
    CHEQUEO_DE_PRECIOS_MARCAS_TRAZABILIDAD
```

***


*Ultima actualización:   
12 de mayo de 2022.*
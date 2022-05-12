---
title: Activity_Chequeo_Precios
slug: /activity-chequeo-precios
---

## Descripción

***

## Ruta

```js
  Proyect\merco\app\src\main\java\com\bpmco\appmerco\Activity_Chequeo_Precios.java
```

***

## Tablas

```registroPreciosMarca```  
```producto_competencia```  
```producto```

***

## Consultas

### Consulta A

```sql title="Tipo" 
    Select
```

```js title="Método desde donde se invoca"
    private void cargarProductosPendientes(int marca)
```

```js title="Condiciones"
    if (categoriaProductoActual != null)
```

```js title="Método"
    manejador.getHandlerRegistroPrecioMarca().getPendientesPorMarcaYCanal(clienteMercaderistaActual, marca, canalId)
```

```sql title="Query"

    SELECT DISTINCT proc_codigo, pro_id, proc_nombre FROM producto_competencia pcom
    WHERE mar_id = ? AND pcom.pro_canal = ? AND proc_codigo NOT IN
        (
            SELECT codigoPro FROM registroPreciosMarca WHERE sesion = ?
        )

    Cursor cursor = db.rawQuery(selectQuery, new String[]{String.valueOf(marca), canal, String.valueOf(programacion.getClme_id())})

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
    private void cargarProductosPendientes(int marca)
```

```js title="Condiciones"
    if (mPrefs.getString("tareaActual", "").equals("CHEQUEO_DE_PRECIOS_MARCAS_V2"))
```

```js title="Método"
    manejador.getHandlerRegistroPrecioMarca().getPendientesPorMarca2YCanalYSubCanal(clienteMercaderistaActual, marca, canalId, objetoCliente.getCli_subCanal())
```

```sql title="Query"

    SELECT DISTINCT pcom.pro_codigo, pro_producto, prpPrecioMin, prpPrecioMax
    FROM producto pcom
    INNER JOIN productoPrecio pp ON pcom.pro_codigo = pp.proCodigo
    INNER JOIN producto_competencia comp ON pcom.pro_codigo = comp.pro_id
    WHERE pcom.mar_id = ? AND comp.pro_canal = ? AND pp.prpSubCanal = ? AND pcom.pro_codigo NOT IN
        (
            SELECT codigoProPropio FROM registroPreciosMarca WHERE sesion = ? AND codigoPro = '0'
        )

    Cursor cursor = db.rawQuery(selectQuery, new String[]{String.valueOf(marca), canal, subCanal, String.valueOf(programacion.getClme_id())})

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
    private void cargarProductosPendientes(int marca)
```

```js title="Condiciones"
    else (mPrefs.getString("tareaActual", "").equals("CHEQUEO_DE_PRECIOS_MARCAS_V2"))
```

```js title="Método"
    manejador.getHandlerRegistroPrecioMarca().getPendientesPorMarca2YCanal(clienteMercaderistaActual, marca, canalId)
```

```sql title="Query"

    SELECT DISTINCT pro_codigo, pro_producto, precioMin, precioMax
    FROM producto pcom
    INNER JOIN producto_competencia comp ON pcom.pro_codigo = comp.pro_id
    WHERE pcom.mar_id = ? AND comp.pro_canal = ? AND pro_codigo NOT IN
        (
            SELECT codigoProPropio FROM " + this._tabla + " WHERE sesion = ? AND codigoPro = '0'
        )

    Cursor cursor = db.rawQuery(selectQuery, new String[]{String.valueOf(marca), canal, String.valueOf(programacion.getClme_id())})

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
    private void cargarRegistrados(int marca)
```

```js title="Condiciones"
    if (categoriaProductoActual != null)
```

```js title="Método"
    manejador.getHandlerRegistroPrecioMarca().getRegistradosMarca(clienteMercaderistaActual.getClme_id(), marca)
```

```sql title="Query"

    SELECT fecha, cliente, codigoPro, codigoProPropio, valor, coordenada,sesion,agotado,noCodificado, enviado, mercaderista, precioOferta, pc.proc_nombre
    FROM registroPreciosMarca rp
    INNER JOIN producto_competencia pc ON rp.codigoPro = pc.proc_codigo
    WHERE sesion = ?
    AND pc.mar_id = ?

    Cursor cursor = db.rawQuery(selectQuery, new String[]{String.valueOf(session), String.valueOf(marca)})

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
    private void cargarRegistrados(int marca)
```

```js title="Condiciones"
    if (categoriaProductoActual != null)
```

```js title="Método"
    manejador.getHandlerRegistroPrecioMarca().getRegistradosMarca2(clienteMercaderistaActual.getClme_id(), marca)
```

```sql title="Query"

    SELECT fecha,cliente, codigoPro, codigoProPropio, valor, coordenada, sesion, agotado,noCodificado, enviado, mercaderista, precioOferta, pc.pro_producto
    FROM registroPreciosMarca rp
    INNER JOIN producto pc ON rp.codigoProPropio = pc.pro_codigo
    WHERE sesion = ?
    AND pc.mar_id = ?

    Cursor cursor = db.rawQuery(selectQuery, new String[]{String.valueOf(session), String.valueOf(marca)})

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
    private void addProducto(MER_registroPreciosMarca item)
```

```js title="Condiciones"
    if (view != null)
```

```js title="Método"
    manejador.getHandlerProductoCompetencia().getProductoCompPorId(item.getCodigoProducto())
```

```sql title="Query"

    SELECT proc_codigo, proc_nombre, cat_id, pro_id, mar_id, pro_canal
    FROM producto_competencia WHERE proc_codigo = ?

    Cursor cursor = db.rawQuery(selectQuery, new String[]{codigo})

```

```js title="Módulos"
    CHEQUEO_DE_PRECIOS_MARCAS_TRAZABILIDAD
```

***

### Consulta H

```sql title="Tipo" 
    Select
```

```js title="Método desde donde se invoca"
    private void addProducto2(MER_registroPreciosMarca item)
```

```js title="Condiciones"
    if (view != null)
```

```js title="Método"
    manejador.getHandlerProducto().getProductoPorId(item.getCodigoProductoPropio())
```

```sql title="Query"

    SELECT pro_producto, pro_codigo, cat_id, precioMin, precioMax, codigoEAN, codigoPLU, precioSugerido, graId, pro_subCanal
    FROM producto WHERE pro_codigo = ?

```

```js title="Módulos"
    CHEQUEO_DE_PRECIOS_MARCAS_TRAZABILIDAD
```

***

### Consulta I

```js title="Tipo" 
    null
```

```js title="Método desde donde se invoca"
    private boolean almacenarRegistro(MER_registroPreciosMarca registro, String precio, int opcion, int precioOferta)
```

```js title="Condiciones"
    null
```

```js title="Método"
    manejador.getHandlerRegistroPrecioMarca().addRegistroPrecioMarca(registro)
```

```js title="Query"
    null
```

```js title="Módulos"
    CHEQUEO_DE_PRECIOS_MARCAS_TRAZABILIDAD
```

***

### Consulta J

```js title="Tipo" 
    null
```

```js title="Método desde donde se invoca"
    private boolean actualizarRegistro(MER_registroPreciosMarca registro, String precio, int opcion, int precioOferta)
```

```js title="Condiciones"
    null
```

```js title="Método"
    manejador.getHandlerRegistroPrecioMarca().updateRegistroPrecioMarca(registro)
```

```js title="Query"
    null
```

```js title="Módulos"
    CHEQUEO_DE_PRECIOS_MARCAS_TRAZABILIDAD
```

***
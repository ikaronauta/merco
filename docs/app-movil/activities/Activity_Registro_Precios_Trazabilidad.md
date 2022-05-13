---
title: Activity_Registro_Precios_Trazabilidad
slug: /activity-registro-precios-trazabilidad
---

## Descripción

***

## Ruta

```js
  Proyect\merco\app\src\main\java\com\bpmco\appmerco\Activity_Marcas.java
```

***

## Tablas

:::tip
Se muetra al nombre de la tabla y el metodo que la gestiona.
:::

```js title="Tabla registroPreciosMarca"
    registroPreciosMarca = getHandlerRegistroPrecioMarca()
``` 

***

## Módulos

[```CHEQUEO_DE_PRECIOS_MARCAS_TRAZABILIDAD```](../modules/modulo-44.md)

***

## Consultas

### Consulta A

```sql title="Tipo" 
    Select
```

```js title="Método desde donde se invoca"
    private void cargarProductos(int marca)
```

```js title="Condiciones"
    if (categoriaProductoActual != null)
```

```js title="Método"
    manejador.getHandlerRegistroPrecioMarca().getPendientesPorMarcaYCanalTrazabilidad(clienteMercaderistaActual, marca, objetoCliente.getCli_canal(), fecha)
```

```sql title="Query"

  // getPendientesPorMarcaYCanalTrazabilidad() = Método que gestiona Query 

    SELECT IFNULL(r.regFecha, ''), IFNULL(r.regCodProductoComp, pcom.proc_codigo), pcom.proc_nombre, IFNULL(r.regValor, '0'), IFNULL(r.regAgotado, '0'), IFNULL(r.regNoCodificado, '0'), r.regPrecioOferta, r.regTipo, IFNULL(r.regId, 0), '0', '0'
    FROM producto_competencia pcom 
    LEFT JOIN  
        (
            SELECT r.regFecha, r.regCodProductoComp, regId regId, regValor regValor, regAgotado,regNoCodificado, regPrecioOferta, regTipo
            FROM registroTrazabilidadChequeoPrecios r
            INNER JOIN
                (
                    SELECT MAX(regFecha) regFecha, MAX(regId || regCodProductoComp) sumReg, regCodProductoComp, cliId
                    FROM registroTrazabilidadChequeoPrecios
                    WHERE cliId = ?
                    GROUP BY regCodProductoComp, cliId
                ) 
                r2 ON r.regFecha = r2.regFecha AND r.regId || r.regCodProductoComp = r2.sumReg AND r.regCodProductoComp = r2.regCodProductoComp
                AND r.cliId = r2.cliId
                WHERE r.cliId = ?
        )
        r ON r.regCodProductoComp = pcom.proc_codigo
        WHERE pcom.mar_id = ? AND pcom.pro_canal = ?

    Cursor cursor = db.rawQuery(selectQuery, new String[]{clienteId, clienteId, String.valueOf(marca), canal})

```

***

### Consulta B

```sql title="Tipo" 
    Select
```

```js title="Método desde donde se invoca"
    private void cargarProductos(int marca)
```

```js title="Condiciones"
    if (categoriaProductoActual != null)
```

```js title="Método"
    manejador.getHandlerRegistroPrecioMarca().getPendientesPorMarca2YCanalYSubCanalTrazabilidad(clienteMercaderistaActual, marca, objetoCliente.getCli_canal(), objetoCliente.getCli_subCanal(), fecha)
```

```sql title="Query"

  // getPendientesPorMarcaYCanalTrazabilidad() = Método que gestiona Query 

    SELECT DISTINCT IFNULL(r.regFecha, ''), IFNULL(r.regCodProductoPropio, pcom.pro_codigo), pcom.pro_producto, IFNULL(r.regValor, '0'), 
    IFNULL(r.regAgotado, '0'), IFNULL(r.regNoCodificado, '0'), r.regPrecioOferta, r.regTipo, IFNULL(r.regId, 0), prpPrecioMin, prpPrecioMax
    FROM producto pcom
    INNER JOIN productoPrecio pp ON pcom.pro_codigo = pp.proCodigo
    INNER JOIN producto_competencia comp ON pcom.pro_codigo = comp.pro_id 
    LEFT JOIN
        (
            SELECT r.regFecha, r.regCodProductoPropio, regId regId, regValor regValor, regAgotado, regNoCodificado, regPrecioOferta, regTipo
            FROM registroTrazabilidadChequeoPrecios r
            INNER JOIN
                (
                    SELECT MAX(regFecha) regFecha, MAX(regId || regCodProductoPropio) sumReg, regCodProductoPropio
                    FROM registroTrazabilidadChequeoPrecios
                    WHERE cliId = ?
                    GROUP BY regCodProductoPropio
                )
                r2 ON r.regFecha = r2.regFecha AND r.regCodProductoPropio = r2.regCodProductoPropio
                AND r.regId || r.regCodProductoPropio = r2.sumReg
        )
        r ON r.regCodProductoPropio = pcom.pro_codigo
        WHERE pcom.mar_id = ? AND comp.pro_canal = ? AND pp.prpSubCanal = ?

    Cursor cursor = db.rawQuery(selectQuery, new String[]{clienteId, String.valueOf(marca), canal, subCanal})

```

***

*Ultima actualización:   
13 de mayo de 2022.*
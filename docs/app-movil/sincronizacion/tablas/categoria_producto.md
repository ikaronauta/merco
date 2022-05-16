---
sidebar_position: 1
title: categoria_producto
slug: /categoria_producto
---

***

## Endpoint

```Metodo.SINCRONIZARCATEGORIASPRODUCTO```  
```SICP```

***

## Tablas

- ```clmer_productoClasificacion```

***

## Consultas

### Consulta A

```js title="Condiciones"
    if (mer_jerarquia == "V")
```

```sql title="Query"

    SELECT ccat_codigo 'sin_id','a' AS 'sin_tipo', ccla_txt,ccla_color,ccat_orden 
    FROM clmer_productoClasificacion 
    WHERE ccat_codigo IN (4,13)
  
```

***

### Consulta B

```js title="Condiciones"
    else (mer_jerarquia == "V")
```

```sql title="Query"

    SELECT ccat_codigo 'sin_id','a' AS 'sin_tipo', ccla_txt,ccla_color,ccat_orden 
    FROM clmer_productoClasificacion 
    WHERE ccat_sincronizacion = '1'
  
```
***

## Update

<div class="ultima-actualizacion">
  <small>
    <i>
      Ultima actualización:
      <b> 16 de mayo de 2022.</b>
    </i>
  </small>

  <small>
    <i>
      Actualizado por:
      <b> Julian A. Ortiz.</b>
    </i>
  </small>
</div>
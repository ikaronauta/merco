---
sidebar_position: 1
title: Activity_Categorias_Producto
slug: /activity-categorias-producto
---

## Descripción

***

## Ruta

***

## Tablas

```categoria_producto```  
```producto_competencia```  
```producto```  

***

## Consultas


### Consulta A

- #### Tipo {#tipo-consulta-a}
```js 
  Select
```

- #### Método {#metodo-consulta-a}
```js 
  manejador.getHandlerCategoriaProducto().getCategoriasCompetenciaPorCanal(objetoCanal.getId(), objetoCliente.getCli_subCanal())
```

- #### Método que invoca {#metodo-que-invoca-consulta-a}
```js
  private void cargarDatos()
```

- #### Módulos {#modulos-consulta-a}
[```CHEQUEO_DE_PRECIOS```](../modulos/modulo-44.md)  
[```CHEQUEO_DE_PRECIOS_MARCAS```](../modulos/modulo-44.md)

- #### Condiciones {#condiciones-consulta-a}
```js
  mPrefs.getString("empresa", "").equals("EC")
```

- #### Query {#query-consulta-a}
```sql
  (
    SELECT DISTINCT ccat_codigo, ccla_txt, ccla_color,orden
    FROM categoria_producto WHERE ccat_codigo IN
      (
        SELECT DISTINCT pr.cat_id
        FROM producto pr
        JOIN producto_competencia proc ON proc.pro_id = pr.pro_codigo
        WHERE proc.pro_canal = ? AND pr.pro_subCanal = ?
      )
    ORDER BY ccla_txt, orden ASC
  )
```

***

### Consulta B

- #### Tipo {#tipo-consulta-b}
```js 
Select
```

- #### Método {#metodo-consulta-b}
```js 
manejador.getHandlerCategoriaProducto().getCategoriasCompetenciaPorCanal(objetoCliente.getCli_canal(), objetoCliente.getCli_subCanal())
```

- #### Método que invoca {#metodo-que-invoca-consulta-b}
```js
private void cargarDatos()
```

- #### Módulos {#modulos-consulta-b}
[```CHEQUEO_DE_PRECIOS```](../modulos/modulo-44.md)  
[```CHEQUEO_DE_PRECIOS_MARCAS```](../modulos/modulo-44.md)

- #### Condiciones {#condiciones-consulta-b}
```js
  mPrefs.getString("empresa", "").equals("EC")
```

- #### Query {#query-consulta-b}
```sql
  (
    SELECT DISTINCT ccat_codigo, ccla_txt, ccla_color,orden
    FROM categoria_producto WHERE ccat_codigo IN
      (
        SELECT DISTINCT pr.cat_id
        FROM producto pr
        JOIN producto_competencia proc ON proc.pro_id = pr.pro_codigo
        WHERE proc.pro_canal = ? AND pr.pro_subCanal = ?
      )
    ORDER BY ccla_txt, orden ASC
  )
```

***
*Ultima actualización:   
**xx** de **xxxx** de **2022** *
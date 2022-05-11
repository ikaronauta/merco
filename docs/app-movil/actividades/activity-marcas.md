---
sidebar_position: 2
title: Activity_Marcas
slug: /activity-marcas
---

## Descripción

***

## Ruta

***

## Tablas

```pendiente```  
```pendiente```  
```pendiente```  

***

## Consultas


### Consulta A

- #### Tipo {#tipo-consulta-a}
```js 
  Pendiente
```

- #### Método {#metodo-consulta-a}
```js 
  Pendiente
```

- #### Método que invoca {#metodo-que-invoca-consulta-a}
```js
  Pendiente
```

- #### Módulos {#modulos-consulta-a}
```PENDIENTE```   
```PENDIENTE```

- #### Condiciones {#condiciones-consulta-a}
```js
  Pendiente
```

- #### Query {#query-consulta-a}
```sql
  (
    Pendiente
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
```js
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
---
sidebar_position: 1
title: Información General MerCo
description: informacion-general-merco
slug: /
---

### Repositorio

:::caution
El siguiente repositorio es provisional. 
:::

>***[https://github.com/ikaronauta/merco](https://github.com/ikaronauta/merco)***

### Descripción


:::caution
La información consignada en esta guía de consulta es susceptible a modificaciones y mejoras. 
:::

### Mapa del Sitio

```js
// highlight-next-line
Merco
|
├── Información-General-Merco.md
|
├── App-movil.md
|   |
│   ├── Descripción General
│   └── Descripción Modulos
|
// highlight-next-line
├── Modulos
|   |
│   ├── Informacion-General.md
|   |
│   └── Modulo-chequeo-de-precios-por-marca-v2.md
|       |
│       ├── Descripcion
│       ├── Preferences ("tareaActual" , "CHEQUEO_DE_PRECIOS_MARCAS_TRAZABILIDAD")
│       └── Actividades 
│           ├── Activity_Categorias_Producto
│           └── Activity_Marcas
|
// highlight-next-line
├── Actividades
|   |
|   ├── Activity_Categorias_Producto.md
|   |   |
|   |   ├── Descripción
|   |   ├── Ruta
|   |   ├── Tablas
|   |   |   |
|   |   |   ├── categoria_producto
|   |   |   ├── producto_competencia
|   |   |   └── producto
|   |   |   
|   |   └── Consultas
|   |       |
|   |       ├── Consulta A 
|   |       |   |
|   |       |   ├── Tipo (select)
|   |       |   ├── Metodo (getHandlerCategoriaProducto().getCategoriasCompetenciaPorCanal(objetoCanal.getId() objetoCliente.getCli_subCanal())
|   |       |   ├── MetodoDesdeDondeSeInvoca (cargarDatos)
|   |       |   ├── Modulos (CHEQUEO_DE_PRECIOS, CHEQUEO_DE_PRECIOS_MARCAS)
|   |       |   ├── Condiciones 
|   |       |   |   └── mPrefs.getString("empresa", "").equals("EC"))
|   |       |   └── Query (SELECT DISTINCT ccat_codigo, ccla_txt, ccla_color,orden 
|   |       |            FROM categoria_producto WHERE ccat_codigo IN(SELECT DISTINCT pr.cat_id
|   |       |            FROM producto pr 
|   |       |            JOIN producto_competencia proc ON proc.pro_id = pr.pro_codigo 
|   |       |            WHERE proc.pro_canal = ? AND pr.pro_subCanal = ?)
|   |       |            ORDER BY ccla_txt, orden ASC)
|   |       |
|   |       ├── Consulta B
|   |       |   |
|   |       |   ├── Tipo (select)
|   |       |   ├── Metodo (getHandlerCategoriaProducto().getCategoriasCompetenciaPorCanal(objetoCliente.getCli_canal(), objetoCliente.getCli_subCanal()))
|   |       |   ├── MetodoDesdeDondeSeInvoca (cargarDatos)
|   |       |   ├── Modulos (CHEQUEO_DE_PRECIOS, CHEQUEO_DE_PRECIOS_MARCAS)
|   |       |   ├── Condiciones (ELSE mPrefs.getString("empresa", "").equals("EC"))
|   |       |   └── Query (SELECT DISTINCT ccat_codigo, ccla_txt, ccla_color,orden
|   |       |           FROM categoria_producto WHERE ccat_codigo IN(SELECT DISTINCT pr.cat_id 
|   |       |           FROM producto pr 
|   |       |           JOIN producto_competencia proc ON proc.pro_id = pr.pro_codigo 
|   |       |           WHERE proc.pro_canal = ? AND pr.pro_subCanal = ?)
|   |       |           ORDER BY ccla_txt, orden ASC)
|   |       |
|   |       └── Consulta etc
|   |           ├── Tipo (select, update, insert, delete)
|   |           ├── Metodo 
|   |           ├── MetodoDesdeDondeSeInvoca 
|   |           ├── Modulos 
|   |           ├── Condiciones 
|   |           └── Query
|   |
|   ├── Actividad-B.md
|   |   ├── Descripción
|   |   ├── Ruta
|   |   ├── Tablas
|   |   └── Consultas
|   |       |
|   |       ├── Consulta A
|   |       |   ├── Tipo
|   |       |   ├── Condición
|   |       |   └── Query
|   |       |
|   |       ├── Consulta B
|   |       |   ├── Tipo
|   |       |   ├── Condición
|   |       |   └── Query
|   |       |
|   |       └── Etc...
|   |
|   └── Etc
|
└── Sincronizacion.md
    ├── Descripcion
    ├── Ruta
    ├── WebService
    └── Tablas
        |
        ├── Tabla-A
        ├── EndPoint
        └── SQL Servidor


```

***
*Ultima actualización:   
**xx** de **xxxx** de **2022** * 
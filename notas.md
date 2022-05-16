      // highlight-next-line
      └── Tablas (Carpeta)
        |
        ├── Tabla-categoria_producto.md
            ├── EndPoint 
                |
                Metodo.SINCRONIZARCATEGORIASPRODUCTO
                SICP

                Tablas:
                  clmer_productoClasificacion

            └── Consultas

                Consulta-A
                  condicion: 
                  if (mer_jerarquia == "V")
                  sql:
                  SELECT ccat_codigo 'sin_id','a' AS 'sin_tipo', ccla_txt,ccla_color,ccat_orden 
                  FROM clmer_productoClasificacion 
                  WHERE ccat_codigo IN (4,13);

              Consulta-B
                condicion: else mer_jerarquia=='V'
                  sql:
                  SELECT ccat_codigo 'sin_id','a' AS 'sin_tipo', ccla_txt,ccla_color,ccat_orden 
                  FROM clmer_productoClasificacion 
                  WHERE ccat_sincronizacion = '1'
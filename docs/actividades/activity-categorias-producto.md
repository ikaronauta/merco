---
sidebar_position: 1
title: Activity_Categorias_Producto
slug: /activity-categorias-producto
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Descripción


## Ruta


## Tablas

- categoria_producto
- producto_competencia
- producto

## Consultas


### Consulta A

<Tabs>
  <TabItem value="Tipo" label="Tipo" default>
    <section>
      <b>Select</b>
    </section>
  </TabItem>

  <TabItem value="Método" label="Método">
    <section>
      <b>manejador</b>.<p class='red'>getHandlerCategoriaProducto()</p>.<p class='green'>getCategoriasCompetenciaPorCanal(objetoCanal.getId()</p>, <p class='blue'>objetoCliente.getCli_subCanal())</p>;
    </section>
  </TabItem>

  <TabItem value="Método desde donde se invoca" label="Método desde donde se invoca">
    <section>
      private void <p class='red'>cargarDatos()</p>
    </section>
  </TabItem>

  <TabItem value="Módulos" label="Módulos" default>
    <section>
      <li>CHEQUEO_DE_PRECIOS</li>
      <li>CHEQUEO_DE_PRECIOS_MARCAS</li>
    </section>
  </TabItem>

  <TabItem value="Condiciones" label="Condiciones">
    <section>
      <b>mPrefs</b>.<p class='red'>getString("empresa", "")</p>.<p class='green'>equals("EC"))</p>
      </section>
  </TabItem>

  <TabItem value="Query" label="Query">
    <section>
      <p>(<p class='green'>SELECT DISTINCT</p> ccat_codigo, ccla_txt, ccla_color,orden</p> 
      <p><p class='blue'>FROM</p> categoria_producto <p class='blue'>WHERE</p> ccat_codigo <p class='blue'>IN</p>(<p class='blue'>SELECT DISTINCT</p> pr.cat_id</p>
      <p><p class='blue'>FROM</p> producto pr</p>
      <p><p class='blue'>JOIN</p> producto_competencia proc <p class='blue'>ON</p> proc.pro_id = pr.pro_codigo</p>
      <p><p class='blue'>WHERE</p> proc.pro_canal = ? <p class='blue'>AND</p> pr.pro_subCanal = ?)</p>
      <p><p class='blue'>ORDER BY</p> ccla_txt, orden <p class='blue'>ASC</p>)</p>
    </section>
  </TabItem>
</Tabs>


### Consulta B

<Tabs>
  <TabItem value="1" label="Tipo" default>
    <section>
      <b>Select</b>
    </section>
  </TabItem>

  <TabItem value="2" label="Método">
    <section>
      <b>manejador</b>.<p class='red'>getHandlerCategoriaProducto()</p>.<p class='green'>getCategoriasCompetenciaPorCanal(objetoCliente.getCli_canal()</p>, <p class='blue'>objetoCliente.getCli_subCanal()))</p>;
    </section>    
  </TabItem>

  <TabItem value="3" label="Método desde donde se invoca">
    <section>
      private void <p class='red'>cargarDatos()</p>
    </section>    
  </TabItem>

  <TabItem value="4" label="Módulos" default>
    <section>
      <li>CHEQUEO_DE_PRECIOS</li>
      <li>CHEQUEO_DE_PRECIOS_MARCAS</li>
    </section>    
  </TabItem>

  <TabItem value="Condiciones" label="Condiciones">
    <section>
      <p class='blue'>ELSE</p> <b>mPrefs</b>.<p class='red'>getString("empresa", "")</p>.<p class='green'>equals("EC"))</p>
      </section>
  </TabItem>

  <TabItem value="5" label="Query">
    <section>
      <p>(<p class='green'>SELECT DISTINCT</p> ccat_codigo, ccla_txt, ccla_color,orden</p> 
      <p><p class='blue'>FROM</p> categoria_producto <p class='blue'>WHERE</p> ccat_codigo <p class='blue'>IN</p>(<p class='blue'>SELECT DISTINCT</p> pr.cat_id</p>
      <p><p class='blue'>FROM</p> producto pr</p>
      <p><p class='blue'>JOIN</p> producto_competencia proc <p class='blue'>ON</p> proc.pro_id = pr.pro_codigo</p>
      <p><p class='blue'>WHERE</p> proc.pro_canal = ? <p class='blue'>AND</p> pr.pro_subCanal = ?)</p>
      <p><p class='blue'>ORDER BY</p> ccla_txt, orden <p class='blue'>ASC</p>)</p>
    </section>    
  </TabItem>
</Tabs>


***
*Ultima actualización:   
**xx** de **xxxx** de **2022** *
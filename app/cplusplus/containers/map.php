<?php include($_SERVER['DOCUMENT_ROOT'] . "/header.php") ?>

<div id="cpp_grid">
  <div id="cpp_sidebar">
    <div class="sidebarButton">Introduction</div>
    <div class="sidebarButton">Data Types</div>
    <div class="sidebarButton">Variables</div>
    <div class="cpp_sidebar_h1">Solutions</div>
    <div class="cpp_sidebar_h2">Algebra</div>
    <div>Quadratic Equation</div>
    <div>Greatest Common Divisor</div>
  </div>
  <div class="cpp_main">

    <div id="cpp_map">
      <h1>Map</h1> 
      <h2>Map Definition</h2>
      The <span class="cpp_container">std::<span class="cpp_container_color">map</span>&lt;K,V,C,A&gt;</span> is an ordered associative container defined in the <span class="cpp_header cpp_header_color">&lt;map&gt;</span> header. It is a container of key-value pairs, optimized for lookup. It is implemented as a balanced binary tree (red-black tree). The default ordering criterion for a key, K is <span class="cpp_container">std::<span class="cpp_container_color">less</span>&lt;K&gt;</span> The default template argument A, that the container uses to acquire and release memory is defaulted to <span class="cpp_container">std::<span class="cpp_container_color">allocator</span>&lt;<span class="cpp_container">std::<span class="cpp_container_color">pair</span>&lt;const K,T&gt;</span>&gt;</span>.

      <h2>Map Declaration</h2>
      <p>The syntax</p>
      <code code-include="/code/cpp/containers/map/01_mapDeclaration.txt"></code>

      <h2>Map Iteration</h2>
      <p>Method 1: Iterator</p>
      <code code-include="/code/cpp/containers/map/02_mapIteration1.txt"></code>
      <p>Method 2: Range-Based For-Loop (C++ 11)</p>
      <code code-include="/code/cpp/containers/map/03_mapIteration2.txt"></code>

      <h2>Member Functions</h2>
      <h3>Operations:</h3>
      <h4>find</h4>
      <p>Searches the container for an element with a key equivalent to k and returns an iterator to it if found, otherwise it returns an iterator to map::end.</p>
      <code code-include="/code/cpp/containers/map/find.txt"></code>

      <h2>Read Int Vector</h2>
      <table class="code_table">
        <tr>
            <th>Input</th>
            <th>Output</th>
        </tr>
        <tr>
            <td>5</td>
            <td>1 2 3 4 5</td>
        </tr>
        <tr>
            <td>1 2 3 4 5</td>
            <td></td>
        </tr>
      </table>
      <br>
      <code code-include="/code/cpp/containers/vector/readIntVector.cpp"></code>

    </div> <!-- END cpp_map -->

  </div>
</div>

<?php include($_SERVER['DOCUMENT_ROOT'] . "/footer.php") ?>
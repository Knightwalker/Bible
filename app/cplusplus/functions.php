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
  <div id="cpp_main">

    <div id="cpp_quadratic_equation">
      <h1>Functions in C++</h1>
      <h2>Function Declaration</h2>
      <p>A function is a block of code, which may take some input (arguments), does some specific computation and produces output (return statement). The idea is to put some commonly or repeatedly done task together and make a function so that instead of writing the same code again and again for different inputs, we can call the function. Based on the return type, the function can either return something or nothing (void).</p>
      <p>The syntax</p>
      <code code-include="/app/cplusplus/code/functions_syntax1.txt"></code>
      <p>For example, a function to read four variables and return the sum of them can be written as</p>
      <code code-include="/app/cplusplus/code/functions_syntax2.txt"></code>
    </div>

  </div>
</div>

<?php include($_SERVER['DOCUMENT_ROOT'] . "/footer.php") ?>
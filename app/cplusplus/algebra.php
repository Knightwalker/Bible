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
      <h1>Algebra</h1>
      <h2>Quadratic Equation</h2>
        <table class="code_table">
          <tr>
              <th>Input</th>
              <th>Output</th>
          </tr>
          <tr>
              <td>2 5 -3</td>
              <td>0.5 -3</td>
          </tr>
          <tr>
              <td>10 1 3</td>
              <td>no roots</td>
          </tr>
        </table>
        <br>
        <code code-include="/code/quadratic_equation.cpp"></code>
    </div>

    <div id="cpp_greatest_common_divisor">
      <h1>Algebra</h1>
      <h2>Greatest Common Divisor</h2>
      <table class="code_table">
        <tr>
            <th>Input</th>
            <th>Output</th>
        </tr>
        <tr>
            <td>10 25</td>
            <td>50 50</td>
        </tr>
        <tr>
            <td>5</td>
            <td>50</td>
        </tr>
      </table>
      <br>
      <code code-include="/code/greatest_common_divisor.cpp"></code>
    </div>

  </div>
</div>

<?php include($_SERVER['DOCUMENT_ROOT'] . "/footer.php") ?>
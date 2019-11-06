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

    <div id="cpp_longest_increasing_subsequence_of_continuous_elements">
      <h1>Algorithms</h1>
      <h2>Longest Increasing Subsequence (LIS) of Continuous Elements</h2>
        <table class="code_table2">
          <tr>
              <th>Input</th>
              <th>Output</th>
          </tr>
          <tr>
              <td>25 7 9 11 13 15 17 21 23 27 3 5 19</td>
              <td>9</td>
          </tr>
        </table>
        <br>
        <code code-include="/code/cpp/solutions/algorithms/longest_increasing_subsequence_of_continuous_elements.cpp"></code>
    </div>

  </div>
</div>

<?php include($_SERVER['DOCUMENT_ROOT'] . "/footer.php") ?>
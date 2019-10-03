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

    <div id="cpp_vector">
      <h1>Vectors</h1> 
      <h2>Vector Definition</h2>
      <p>Dynamic array - Vector (C++) / List (C#) is a resizable array and when an element is inserted, the container doubles its capacity automatically. Vector elements are placed in contiguous storage so that they can be accessed and traversed using iterators.</p>
      <h2>Vector Declaration</h2>
      <p>The syntax</p>
      <code code-include="/code/cpp/vector/01_vectorDeclaration.txt"></code>

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
      <code code-include="/code/cpp/vector/readIntVector.cpp"></code>

      <h2>Read Int Vector V2</h2>
      <p>Read a single line from the console, assign the input to a stringstream variable and start reading numbers one by one, cast them to integer and push them inside a vector, which is provided by reference.</p>
      <table class="code_table">
        <tr>
            <th>Input</th>
            <th>Output</th>
        </tr>
        <tr>
            <td>1 2 3 4 5</td>
            <td>1 2 3 4 5</td>
        </tr>
        <tr>
            <td>1 &nbsp;2 &nbsp;3 &nbsp;4  &nbsp;&nbsp;&nbsp;5</td>
            <td>1 2 3 4 5</td>
        </tr>
        <tr>
            <td>1 2 3 nope 4 5</td>
            <td>1 2 3</td>
        </tr>
      </table>
      <br>
      <code code-include="/code/cpp/vector/readIntVectorV2.cpp"></code>

      <h2>Read String Vector</h2>
      <table class="code_table">
        <tr>
            <th>Input</th>
            <th>Output</th>
        </tr>
        <tr>
            <td>5</td>
            <td>a b c d e</td>
        </tr>
        <tr>
            <td>a b c d e</td>
            <td></td>
        </tr>
      </table>
      <br>
      <code code-include="/code/cpp/vector/readStringVector.cpp"></code>

      <h2>Split String To Int Vector</h2>
      <table class="code_table">
        <tr>
            <th>Input</th>
            <th>Output</th>
        </tr>
        <tr>
            <td>1 2 3 4 5</td>
            <td>1 2 3 4 5</td>
        </tr>
      </table>
      <br>
      <code code-include="/code/cpp/vector/splitStringToIntVector.cpp"></code>
    </div>

    <h2>Split String To String Vector</h2>
      <table class="code_table">
        <tr>
            <th>Input</th>
            <th>Output</th>
        </tr>
        <tr>
            <td>a b c d e</td>
            <td>a b c d e</td>
        </tr>
      </table>
      <br>
      <code code-include="/code/cpp/vector/splitStringToStringVector.cpp"></code>
    </div>

  </div>
</div>

<?php include($_SERVER['DOCUMENT_ROOT'] . "/footer.php") ?>
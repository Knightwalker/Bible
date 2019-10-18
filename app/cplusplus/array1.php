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

    <div id="cpp_array1">
      <h1>Array (C / C++)</h1> 
      <h2>Array Definition</h2>
      <ul class="ul_custom">
        <li>An array is a collection of data types, all of the same type, accessed using a common name.</li>
        <li>A one-dimensional array is like a list;  A two dimensional array is like a table;  The C/C++ language places no limits on the number of dimensions in an array, though specific implementations may.</li>
        <li>Some texts refer to one-dimensional arrays as vectors, two-dimensional arrays as matrices, and use the general term arrays when the number of dimensions is unspecified or unimportant.</li>
      </ul>

      <h2>Array Declaration</h2>
      <p>1. Array declaration by specifying size</p>
      <code code-include="/code/cpp/c_array/01_1_arrayDeclaration.txt"></code>

      <p>2. Array declaration by initializing elements</p>
      <code code-include="/code/cpp/c_array/01_2_arrayDeclaration.txt"></code>

      <p>3. Array declaration by specifying size and initializing elements</p>
      <code code-include="/code/cpp/c_array/01_3_arrayDeclaration.txt"></code>

      <p>4. Empty Int Array declaration and initializing</p>
      <code code-include="/code/cpp/c_array/01_4_arrayDeclaration.txt"></code>

      <h2>Read Int Array</h2>
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
      <code code-include="/code/cpp/c_array/01_read2DIntVector.cpp"></code>

      <h2>Multidimensional Arrays (2D, 3D... ND)</h2>
      <ul class="ul_custom">
        <li>Multi-dimensional arrays are declared by providing more than one set of square [ ] brackets after the variable name in the declaration statement.</li>
        <li>One dimensional arrays do not require the dimension to be given if the array is to be completely initialized.  By analogy, multi-dimensional arrays do not require the first dimension to be given if the array is to be completely initialized.  All dimensions after the first must be given in any case.</li>
        <li>For two dimensional arrays, the first dimension is commonly considered to be the number of rows, and the second dimension the number of columns.</li>
        <li>Two dimensional arrays are considered by C/C++ to be an array of ( single dimensional arrays ).  For example, "int numbers[ 5 ][ 6 ]"  would refer to a single dimensional array of 5 elements, wherein each element is a single dimensional array of 6 integers.  By extension, "int numbers[ 12 ][ 5 ][ 6 ]" would refer to an array of twelve elements, each of which is a two dimensional array, and so on.</li>
        <li>Multidimensional arrays may be completely initialized by listing all data elements within a single pair of curly {} braces, as with single dimensional arrays.</li>
        <li>Multidimensional arrays may be partially initialized by not providing complete initialization data.  Individual rows of a multidimensional array may be partially initialized, provided that subset braces are used.</li>
        <li>Individual data items in a multidimensional array are accessed by fully qualifying an array element.  Alternatively, a smaller dimensional array may be accessed by partially qualifying the array name.  For example, if  "data" has been declared as a three dimensional array of floats, then data[ 1 ][ 2 ][ 5 ] would refer to a float, data[ 1 ][ 2 ] would refer to a one-dimensional array of floats, and data[ 1 ] would refer to a two-dimensional array of floats.  The reasons for this and the incentive to do this relate to memory-management issues that are beyond the scope of these notes.</li>
      </ul>
      <br>
      <code code-include="/code/cpp/containers/vector/02_vectorOptimization.txt"></code>
     
      <h2>2D Array (Matrix)</h2>

      <h3>2D Array | Diagonal, Upper Right Triangle and Bottom Left Triangle</h3>
      <h4>Method 1 - Iterate through the whole matrix with a for-loop</h4>
      <div class="matrix_grid">
        <div class="matrix_sub1">         
          <table class="array5x5explanation">
            <tr><th class="array5x5_td_green">Bottom Left Triangle</th><th class="array5x5_td_orange">Diagonal</th><th class="array5x5_td_blue">Upper Right Triangle</th></tr>
            <tr><td>a10 (i > j)</td><td>a00 (i == j)</td><td>a01 (i < j)</td></tr>
            <tr><td>a20 (i > j)</td><td>a11 (i == j)</td><td>a02 (i < j)</td></tr>
            <tr><td>a21 (i > j)</td><td>a22 (i == j)</td><td>a03 (i < j)</td></tr>
            <tr><td>a30 (i > j)</td><td>a33 (i == j)</td><td>a04 (i < j)</td></tr>
            <tr><td>a31 (i > j)</td><td>a44 (i == j)</td><td>a12 (i < j)</td></tr>
            <tr><td>a32 (i > j)</td><td>a44 (i == j)</td><td>a13 (i < j)</td></tr>
            <tr><td>a40 (i > j)</td><td>a44 (i == j)</td><td>a14 (i < j)</td></tr>
            <tr><td>a41 (i > j)</td><td>a44 (i == j)</td><td>a23 (i < j)</td></tr>
            <tr><td>a42 (i > j)</td><td>a44 (i == j)</td><td>a24 (i < j)</td></tr>
            <tr><td>a43 (i > j)</td><td>a44 (i == j)</td><td>a34 (i < j)</td></tr>
          </table>     
        </div>
        <div class="matrix_sub2">
          <table class="array5x5">
            <tr><td class="array5x5_td_orange">1</td><td class="array5x5_td_blue">2</td><td class="array5x5_td_blue">3</td><td class="array5x5_td_blue">4</td><td class="array5x5_td_blue">5</td></tr>
            <tr><td class="array5x5_td_green">1</td><td class="array5x5_td_orange">2</td><td class="array5x5_td_blue">3</td><td class="array5x5_td_blue">4</td><td class="array5x5_td_blue">5</td></tr>
            <tr><td class="array5x5_td_green">1</td><td class="array5x5_td_green">2</td><td class="array5x5_td_orange">3</td><td class="array5x5_td_blue">4</td><td class="array5x5_td_blue">5</td></tr>
            <tr><td class="array5x5_td_green">1</td><td class="array5x5_td_green">2</td><td class="array5x5_td_green">3</td><td class="array5x5_td_orange">4</td><td class="array5x5_td_blue">5</td></tr>
            <tr><td class="array5x5_td_green">1</td><td class="array5x5_td_green">2</td><td class="array5x5_td_green">3</td><td class="array5x5_td_green">4</td><td class="array5x5_td_orange">5</td></tr>
          </table>
        </div>
        <div class="matrix_sub3">
          <p>==</p>
        </div>
        <div class="matrix_sub4">
          <table class="array5x5">
            <tr><td class="array5x5_td_orange">a00</td><td class="array5x5_td_blue">a01</td><td class="array5x5_td_blue">a02</td><td class="array5x5_td_blue">a03</td><td class="array5x5_td_blue">a04</td></tr>
            <tr><td class="array5x5_td_green">a10</td><td class="array5x5_td_orange">a11</td><td class="array5x5_td_blue">a12</td><td class="array5x5_td_blue">a13</td><td class="array5x5_td_blue">a14</td></tr>
            <tr><td class="array5x5_td_green">a20</td><td class="array5x5_td_green">a21</td><td class="array5x5_td_orange">a22</td><td class="array5x5_td_blue">a23</td><td class="array5x5_td_blue">a24</td></tr>
            <tr><td class="array5x5_td_green">a30</td><td class="array5x5_td_green">a31</td><td class="array5x5_td_green">a32</td><td class="array5x5_td_orange">a33</td><td class="array5x5_td_blue">a34</td></tr>
            <tr><td class="array5x5_td_green">a40</td><td class="array5x5_td_green">a41</td><td class="array5x5_td_green">a42</td><td class="array5x5_td_green">a43</td><td class="array5x5_td_orange">a44</td></tr>
          </table>
        </div>
      </div>
      <br/>
      <code code-include="/code/cpp/c_array/04_findDiagonalAndTriangles.cpp"></code>

      <h3>Matrix | Anti-Diagonal, Upper Left Triangle and Bottom Right Triangle</h3>
      <h4>Method 1 - Iterate through the whole matrix with a for-loop</h4>
      <div class="matrix_grid">
        <div class="matrix_sub1">
          <table class="array5x5explanation">
            <tr><th class="array5x5_td_blue">Upper Left Triangle</th><th class="array5x5_td_orange">Anti-Diagonal</th><th class="array5x5_td_green">Bottom Right Triangle</th></tr>
            <tr><td>a10 (n - 1 - i > j)</td><td>a00 (n - 1 - i == j)</td><td>a01 (n - 1 - i < j)</td></tr>
            <tr><td>a20 (n - 1 - i > j)</td><td>a11 (n - 1 - i == j)</td><td>a02 (n - 1 - i < j)</td></tr>
            <tr><td>a21 (n - 1 - i > j)</td><td>a22 (n - 1 - i == j)</td><td>a03 (n - 1 - i < j)</td></tr>
            <tr><td>a30 (n - 1 - i > j)</td><td>a33 (n - 1 - i == j)</td><td>a04 (n - 1 - i < j)</td></tr>
            <tr><td>a31 (n - 1 - i > j)</td><td>a44 (n - 1 - i == j)</td><td>a12 (n - 1 - i < j)</td></tr>
            <tr><td>a32 (n - 1 - i > j)</td><td>a44 (n - 1 - i == j)</td><td>a13 (n - 1 - i < j)</td></tr>
            <tr><td>a40 (n - 1 - i > j)</td><td>a44 (n - 1 - i == j)</td><td>a14 (n - 1 - i < j)</td></tr>
            <tr><td>a41 (n - 1 - i > j)</td><td>a44 (n - 1 - i == j)</td><td>a23 (n - 1 - i < j)</td></tr>
            <tr><td>a42 (n - 1 - i > j)</td><td>a44 (n - 1 - i == j)</td><td>a24 (n - 1 - i < j)</td></tr>
            <tr><td>a43 (n - 1 - i > j)</td><td>a44 (n - 1 - i == j)</td><td>a34 (n - 1 - i < j)</td></tr>
          </table>     
        </div>
        <div class="matrix_sub2">
          <table class="array5x5">
            <tr><td class="array5x5_td_blue">1</td><td class="array5x5_td_blue">2</td><td class="array5x5_td_blue">3</td><td class="array5x5_td_blue">4</td><td class="array5x5_td_red">5</td></tr>
            <tr><td class="array5x5_td_blue">1</td><td class="array5x5_td_blue">2</td><td class="array5x5_td_blue">3</td><td class="array5x5_td_red">4</td><td class="array5x5_td_green">5</td></tr>
            <tr><td class="array5x5_td_blue">1</td><td class="array5x5_td_blue">2</td><td class="array5x5_td_red">3</td><td class="array5x5_td_green">4</td><td class="array5x5_td_green">5</td></tr>
            <tr><td class="array5x5_td_blue">1</td><td class="array5x5_td_red">2</td><td class="array5x5_td_green">3</td><td class="array5x5_td_green">4</td><td class="array5x5_td_green">5</td></tr>
            <tr><td class="array5x5_td_red">1</td><td class="array5x5_td_green">2</td><td class="array5x5_td_green">3</td><td class="array5x5_td_green">4</td><td class="array5x5_td_green">5</td></tr>
          </table>
        </div>
        <div class="matrix_sub3">
          <p>==</p>
        </div>
        <div class="matrix_sub4">
          <table class="array5x5">
            <tr><td class="array5x5_td_blue">a00</td><td class="array5x5_td_blue">a01</td><td class="array5x5_td_blue">a02</td><td class="array5x5_td_blue">a03</td><td class="array5x5_td_red">a04</td></tr>
            <tr><td class="array5x5_td_blue">a10</td><td class="array5x5_td_blue">a11</td><td class="array5x5_td_blue">a12</td><td class="array5x5_td_red">a13</td><td class="array5x5_td_green">a14</td></tr>
            <tr><td class="array5x5_td_blue">a20</td><td class="array5x5_td_blue">a21</td><td class="array5x5_td_red">a22</td><td class="array5x5_td_green">a23</td><td class="array5x5_td_green">a24</td></tr>
            <tr><td class="array5x5_td_blue">a30</td><td class="array5x5_td_red">a31</td><td class="array5x5_td_green">a32</td><td class="array5x5_td_green">a33</td><td class="array5x5_td_green">a34</td></tr>
            <tr><td class="array5x5_td_red">a40</td><td class="array5x5_td_green">a41</td><td class="array5x5_td_green">a42</td><td class="array5x5_td_green">a43</td><td class="array5x5_td_green">a44</td></tr>
          </table>
        </div>
      </div>
      <br/>
      <code code-include="/code/cpp/c_array/05_findAntiDiagonalAndTriangles.cpp"></code>

    </div> <!-- END cpp_array1 -->

  </div>
</div>

<style>
.matrix_grid {
  display: grid;
  grid-template-columns: 60% 15% 5% 15%;
}
.matrix_sub1 { grid-column: 1; }
.matrix_sub2 { grid-column: 2; margin-top: auto; margin-bottom: auto; }
.matrix_sub3 { grid-column: 3; margin: auto; font-weight: bolder; font-size: 24px; }
.matrix_sub4 { grid-column: 4; margin-top: auto; margin-bottom: auto; }
.array5x5 {
  border-collapse: collapse;
  border: 1px solid #000000;
  width: 100%;
  margin: auto;
}
.array5x5 td {
  border: 1px solid;
  padding: 5px;
  text-align: center;
}
.array5x5_td_red {
  background: #F25022;
}
.array5x5_td_green {
  background: #7FBA00;
}
.array5x5_td_blue {
  background: #00A4EF;
}
.array5x5_td_orange {
  background: #FFB900;
}

.array5x5explanation {
  border-collapse: collapse;
  border: 1px solid #000000;
  margin: auto;
  text-align: center;
  table-layout: fixed;
  width: 80%;
}
.array5x5explanation th {
  border-left: 1px solid;
  border-right: 1px solid;
  border-bottom: 1px solid;
  padding: 5px;
  text-align: center;
}
.array5x5explanation td {
  border-left: 1px solid;
  border-right: 1px solid;
  padding: 5px;
  text-align: center;
}

</style>

<?php include($_SERVER['DOCUMENT_ROOT'] . "/footer.php") ?>
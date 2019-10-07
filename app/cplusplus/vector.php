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
      <h1>Vector</h1> 
      <h2>Vector Definition</h2>
      The <span class="cpp_container">std::<span class="cpp_container_color">vector</span>&lt;T,A&gt;</span> is a sequence container defined in the <span class="cpp_header cpp_header_color">&lt;vector&gt;</span> header. The default template argument A, that the container uses to acquire and release memory is <span class="cpp_container">std::<span class="cpp_container_color">allocator</span>&lt;T&gt;</span>. Vectors are arrays that can change in size, a <b>Dynamic Array</b> (resizable array) and when an element is inserted, if (size == capacity) the container doubles its capacity automatically. Vector elements are placed in contiguous storage so that they can be accessed and traversed using iterators.

      <h2>Vector Declaration</h2>
      <p>The syntax</p>
      <code code-include="/code/cpp/containers/vector/01_vectorDeclaration.txt"></code>

      <h2>Vector Optimization</h2>
      <p>Vectors capacity is increasing with the formula 2^N, where each time if (size == capacity), the vector would dynamically allocate a new array, with 2x more capacity and copy all the elements to it. This is a relatively expensive task in terms of processing time, and thus, we can optimize it by reserving more capacity beforehand with <b>vect.reserve(10);</b> if we are expecting a big number of elements. e.g 10 000 000 elements.</p>
      <code code-include="/code/cpp/containers/vector/02_vectorOptimization.txt"></code>

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
      <code code-include="/code/cpp/containers/vector/readStringVector.cpp"></code>

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
      <code code-include="/code/cpp/containers/vector/splitStringToIntVector.cpp"></code>

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
      <code code-include="/code/cpp/containers/vector/splitStringToStringVector.cpp"></code>

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
      <code code-include="/code/cpp/containers/vector/readIntVectorV2.cpp"></code>
      
      <h2>Read 2D Int Vector</h2>
      <table class="code_table">
        <tr>
            <th>Input</th>
            <th>Output</th>
        </tr>
        <tr>
            <td>2 3</td>
            <td>1 2 3</td>
        </tr>
        <tr>
            <td>1 2 3</td>
            <td>4 5 6</td>
        </tr>
        <tr>
            <td>4 5 6</td>
            <td></td>
        </tr>
      </table>
      <br>
      <code code-include="/code/cpp/containers/vector/read2DIntVector.cpp"></code>

    </div> <!-- END cpp_vector -->

  </div>
</div>

<?php include($_SERVER['DOCUMENT_ROOT'] . "/footer.php") ?>
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

    <div id="cpp_strings_and_streams">
      <h1>Strings And Streams</h1> 
      <h2>Vector Definition</h2>
      <p>Dynamic array - Vector (C++) / List (C#) is a resizable array and when an element is inserted, the container doubles its capacity automatically. Vector elements are placed in contiguous storage so that they can be accessed and traversed using iterators.</p>
      <h2>Vector Declaration</h2>
      <p>The syntax</p>
      <code code-include="/code/cpp/vector/01_vectorDeclaration.txt"></code>

      <h2>Find And Replace All Occurrences</h2>
      <table class="code_table">
        <tr>
            <th>Input</th>
            <th>Output</th>
        </tr>
        <tr>
            <td>I am the night. Dark Night! No, not the knight</td>
            <td>I am the day. Dark Night! No, not the kday</td>
        </tr>
        <tr>
            <td>night</td>
            <td></td>
        </tr>
        <tr>
            <td>day</td>
            <td></td>
        </tr>
      </table>
      <br>
      <code code-include="/code/cpp/strings_and_streams/findAndReplaceAllOccurrences.cpp"></code>
    
    </div>
     
  </div>
</div>

<?php include($_SERVER['DOCUMENT_ROOT'] . "/footer.php") ?>
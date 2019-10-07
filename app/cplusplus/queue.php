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

    <div id="cpp_stack" class="syntax_highlighter_cplusplus">
      <h1>Queue</h1> 
      <h2>Queue Definition</h2>
      The <span class="cpp_container">std::<span class="cpp_container_color">stack</span>&lt;T,C&gt;</span> is a container adaptor defined in the <span class="cpp_header cpp_header_color">&lt;stack&gt;</span> header. The default container type C is <span class="cpp_container">std::<span class="cpp_container_color">vector</span>&lt;T&gt;</span> and the structure functionality is LIFO (Last In First Out), where each new element is added at the top of the <span class="cpp_container cpp_container_color">stack</span>.
    
      <p>The functions associated with stack are:</p>
      <ul class="ul_custom">
        <li>empty() – Returns whether the stack is empty – Time Complexity : O(1)</li>
        <li>size() – Returns the size of the stack – Time Complexity : O(1)</li>
        <li>top() – Returns a reference to the top most element of the stack – Time Complexity : O(1)</li>
        <li>push(g) – Adds the element ‘g’ at the top of the stack – Time Complexity : O(1)</li>
        <li>pop() – Deletes the top most element of the stack – Time Complexity : O(1)</li>
      </ul>
      <h2>Queue Declaration</h2>
      <p>The syntax</p>
      <code code-include="/code/cpp/containers/stack/01_stackDeclaration.txt"></code>

      <h2>readIntQueueFromStringStream</h2>
      <table class="code_table">
        <tr>
            <th>Input</th>
            <th>Output</th>
        </tr>
        <tr>
            <td>1 2 3 4 5</td>
            <td>5 4 3 2 1</td>
        </tr>
      </table>
      <br>
      <code code-include="/code/cpp/containers/queue/readIntQueueFromStringStream.cpp"></code>

      
    
      

    </div> <!-- END cpp_stack -->

  </div>
</div>

<?php include($_SERVER['DOCUMENT_ROOT'] . "/footer.php") ?>
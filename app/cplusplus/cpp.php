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
      <div id="cplusplus_img" class="img"></div>
      <h1>C++ Programming Language</h1>
      <div class="cpp_main_grid">
         <div class="cpp_main_grid_1">
            <div>I. Basics</div>
            <div>1. Introduction</div>
            <div>2. Data Types</div>
            <div>3. Conditions</div>
            <div>4. For-loops</div>
            <div>5. While-loops</div>
            <div>6. Functions</div>
            <div>7. Arrays</div>
            <div>8. <span onclick="openPage('cplusplus_vectors')" class="btn3">Vectors</span></div>
            <ul class="ul_custom">
               <li>Read Int Vector</li>
               <li>Read String Vector</li>
               <li>Split String To Int Vector</li>
               <li>Split String To String Vector</li>
            </ul>
            <br>
            <div>II. Functions</div>
            <div>1. <span onclick="openPage('cplusplus_functions')" class="btn3">Functions in C++</span></div>
         </div>

         <div class="cpp_main_grid_2">
            <div>III. Solutions</div>
            <div>1. <span onclick="openPage('cplusplus_algebra')" class="btn3">Algebra</span></div>
            <ul class="ul_custom">
               <li>Quadratic Equation</li>
               <li>Greatest Common Divisor</li>
            </ul>
         </div>

      </div>
  </div>
</div>

<?php include($_SERVER['DOCUMENT_ROOT'] . "/footer.php") ?>
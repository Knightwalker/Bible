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
            <div><b>I. Basics</b></div>
            <div>1. Introduction</div>
            <div>2. Data Types</div>
            <div>3. Conditions</div>
            <div>4. For-loops</div>
            <div>5. While-loops</div>
            <div>6. Functions</div>
            <div>7. <span onclick="openPage('cplusplus_array1')" class="btn3">array</span></div>
            <div>8. <span onclick="openPage('cplusplus_strings_and_streams')" class="btn3">Strings and Streams</span></div>
            <ul class="ul_custom">
               <li>findAndReplaceAllOccurrences</li>
            </ul>
            <br>
            <div>II. Functions</div>
            <div>1. <span onclick="openPage('cplusplus_functions')" class="btn3">Functions in C++</span></div>
            <br>
            <div><b>IV. Object Oriented Programming (OOP)</b></div>
            <div>2. <span onclick="openPage('cplusplus_classes_and_objects')" class="btn3">classes and objects</span></div>
         </div>

         <div class="cpp_main_grid_2">
            <div><b>III. Standard Template Library (STL)</b></div>
            <div>1. <span onclick="openPage('cplusplus_stl')" class="btn3">Introduction to STL</span></div>
            <br>
            <div><b>III.1. Algorithms:</b></div>
            <div>1. <span onclick="openPage('cplusplus_sorting')" class="btn3">sorting</span></div>
            <div>2. <span onclick="openPage('cplusplus_searching')" class="btn3">searching</span></div>
            <br>
            <div><b>III.2. Containers:</b></div>
            <div><b>Sequence Containers:</b></div>
            <div>1. <span onclick="openPage('cplusplus_vector')" class="btn3">vector</span></div>
            <div>2. <span onclick="openPage('cplusplus_vector')" class="btn3">list</span></div>
            <div>3. <span onclick="openPage('cplusplus_vector')" class="btn3">forward_list</span></div>
            <div>4. <span onclick="openPage('cplusplus_vector')" class="btn3">deque</span></div>
            <br>
            <div><b>Associative Containers:</b></div>
            <div>1. <span onclick="openPage('cplusplus_map')" class="btn3">map</span></div>
            <div>2. <span onclick="openPage('cplusplus_map')" class="btn3">set</span></div>
            <div>3. <span onclick="openPage('cplusplus_map')" class="btn3">unordered_map</span></div>
            <div>4. <span onclick="openPage('cplusplus_map')" class="btn3">unordered_set</span></div>
            <br>
            <div><b>Container Adaptors:</b></div>
            <div>1. <span onclick="openPage('cplusplus_stack')" class="btn3">stack</span></div>
            <div>2. <span onclick="openPage('cplusplus_queue')" class="btn3">queue</span></div>
            <div>3. <span onclick="openPage('cplusplus_vector')" class="btn3">priority_queue</span></div>
            <br>
            <div><b>III.3. Iterators:</b></div>
            <div>1. <span onclick="openPage('cplusplus_iterators')" class="btn3">input</span></div>
            <div>2. <span onclick="openPage('cplusplus_iterators')" class="btn3">output</span></div>
            <div>3. <span onclick="openPage('cplusplus_iterators')" class="btn3">forward</span></div>
            <div>4. <span onclick="openPage('cplusplus_iterators')" class="btn3">bidirectional</span></div>
            <div>5. <span onclick="openPage('cplusplus_iterators')" class="btn3">random_access</span></div>
            <br>
            <div><b>V. Solutions</b></div>
            <div>1. <span onclick="openPage('cplusplus_algorithms')" class="btn3">Algorithms</span></div>
            <ul class="ul_custom">
               <li>Longest Increasing Subsequence (LIS) of Continuous Elements</li>
            </ul>
            <br/>
            <div>2. <span onclick="openPage('cplusplus_algebra')" class="btn3">Algebra</span></div>
            <ul class="ul_custom">
               <li>Quadratic Equation</li>
               <li>Greatest Common Divisor</li>
            </ul>
            <br/>
            <div><b>Graphics:</b></div>
            <div>1. <span onclick="openPage('cplusplus_blur_algorithm')" class="btn3">Blur Algorithm</span></div>
         </div>

      </div>
  </div>
</div>

<?php include($_SERVER['DOCUMENT_ROOT'] . "/footer.php") ?>
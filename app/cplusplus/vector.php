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

      <h2>readIntVectorFromStringStream</h2>
      <p>Let me start with streams as such: streams are potentially endless sources of data input or data output. Take the STDIN, where potentially endless data can come in. Streams provide an interface to such an device, they capsulate it and provide means to get the information of such streams, or to put them into those devices.

In the first line with question mark (stringstream ss(str)) you create a new stream. However this is a stringstream, so as source you do not provide a streaming device, but a string. As the text for the problem says, in C++ these streams are used for extraction of different data types in a string. So, what we get in line in question is a stringstream object called ss, that encapsulates a string, and allows as to access the string as we could access any other stream (remember that cin and cout are streams as well).

Now to the second line. ss >> tmp is a simple extraction. Remember cin >> a from previous exercises. It does the same thing here: Get me the next thing on the stream (which actually is a string) and put it in the variable tmp. Now the trick is, that tmp is of type int, so only if the next thing in the stream is an integer value will this work. The while(ss >> tmp) checks, if it actually did work. If the string is empty (I'm not sure with C++ but in C, strings terminate with an invisible character \0), or if the next thing is not a number, then the test fails, and while skips the rest.

For the last line we are now in the body of the while loop, so the last character was a number and it got saved into tmp. As en example, let's say we had "1,2", then now the 1 is extracted as integer and saved into tmp, and the remaining string in the stream is ",2". We can add that number to the vector (result.push_back(tmp);), and due to the structure of the string, which we know, we now expect the next element to be of type character, as it is the ,. We need to extract that from the string, because otherwise in the next loop of the while case will try to extracht a number as the next thing of the string, but gets the comma, which cannot be extracted as integer, and therefore the loop condition will fail and we jump out after only the first extracted number.

We actually never use ch, it's just to get rid of all the commas and make the loop work.

I hope this helps?

... and of course, once the string is empty, extracting a number will fail aswell, so this is how we get all numbers, then exit the loop and return the vector to the calling function (in this case main()).</p>
      <table class="code_table">
        <tr><th>Input</th><th>Output</th></tr>
        <tr><td>23,4,56</td><td>23</td></tr>
        <tr><td></td><td>4</td></tr>
        <tr><td></td><td>56</td></tr>
      </table>
      <br>
      <code code-include="/code/cpp/containers/vector/readIntVectorFromStringStream1.cpp"></code>

      <h2>readIntVectorFromStringStream V2</h2>
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
      <code code-include="/code/cpp/containers/vector/readIntVectorFromStringStream2.cpp"></code>
      
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
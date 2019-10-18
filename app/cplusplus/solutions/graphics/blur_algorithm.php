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
      <h1>Blur Algorithm</h1> 
      <h2>Vector Definition</h2>
      <p>Colors in computers are often represented in the RGB format, with an 8-bit (0-255) number per each of the R (red), the G (green) and the B (blue) color channels. An example of an RGB color would be the triplet <b>255, 0, 0,</b> which is the color <b>red</b> (red channel has the highest value, the other channels are “dark” as they have 0s as values) and <b>128, 128, 0</b> is the <b>olive</b> color (yeah, I know, olives are vegetables, not colors, but that’s how color experts seem to define it. It’s a very dark, greenish yellow. Anyway, that’s beside the point)</p>
      <p>A common way of writing this format (e.g. in CSS) is to use the hexadecimal triplet notation, or Hex Code – we write a “#” in front of a string of 6 alphanumeric characters (letters and/or numbers), each 2 of which represent a hexadecimal number from <b>0</b> to <b>255</b>, with <b>00</b> being equal to <b>0</b> and <b>FF</b> being equal to <b>255</b>. For the above examples, <b>red</b> would be written as <b>#ff0000</b>, and <b>olive</b> would be written as <b>#808000</b></p>

      <p>Blurring works by essentially blending two or more collors into one. For example if we have two colors written in the Hex Code format (with a “#” in front of exactly 6 hexadecimal digits), first we compute the “average” between the colors – by calculating the average of each channel separately – and prints the resulting color in the same Hex Code format to the console. For computing the average of the channels of two colors, just sum the numbers of the channels and divide them by 2 (integer division, i.e. round down to the nearest integer, i.e. take the floor value).<p>

      <h2>Method 1 (Lazy) | Used by a lot of software, like Apple's IPhone!</h2>
      <ul>
        <li><b>Color1</b> has the components <b>red1, green1, blue1,</b></li>
        <li><b>Color2</b> has the components <b>red2, green2, blue2,</b></li>
        <li>The "average" of those two colors is calculated as <b>(red1 + red2) / 2, (green1 + green2) / 2, (blue1 + blue2) / 2.</b></li>
        <li>For our 2 example colors <b>#ff0000</b> and <b>#808000</b>, the average would be <b>#bf4000</b></li>
      </ul>

      <p>(because ff = 255, 80 = 128, (255 + 128) / 2 = 383 / 2 = 191, which is bf in hexadecimal, for the red channel, and 00 = 0, 80 = 128, (128 + 0) / 2 = 64, which is 40 in hexadecimal, for the green channel)</p>
      <table class="code_table">
        <tr>
            <th>Input</th>
            <th>Output</th>
        </tr>
        <tr>
            <td>#ff0000 #808000</td>
            <td>#bf4000</td>
        </tr>
        <tr>
            <td>#ff0000 #808000</td>
            <td>#1d78c1</td>
        </tr>
      </table>
      <br>
      <code code-include="/code/cpp/solutions/graphics/blending_colors.cpp"></code>

      <h2>Method 2 (The Accurate Way)</h2>
      <p>Side note: If you’re interested, the above method is not exactly how color “averaging” is done in real systems – the correct approach would be raising each channel’s value to the power of 2 before doing the average and then taking the square root of the result, but we don’t want to do that in this task for the sake of simplicity, if you want to learn more, see this video: https://youtu.be/LKnqECcg6Gw</p>

    </div> <!-- END CPP_STRINGs_AND_STREAMS-->
     
  </div>
</div>

<?php include($_SERVER['DOCUMENT_ROOT'] . "/footer.php") ?>
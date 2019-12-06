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

    <div id="cpp_grapth_traversal">
      <h1>Graph Traversal</h1> 
      <h2>Graph Traversal Definition</h2>
      <p>In computer science, graph traversal (also known as graph search) refers to the process of visiting (checking and/or updating) each vertex in a graph. Such traversals are classified by the order in which the vertices are visited. Tree traversal is a special case of graph traversal.</p>

      <h2>Depth-First Search (DFS)</h2>
      <p>Depth-First Search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking.</p>
      <div class="matrix_grid">
        <div class="matrix_sub1">
            <div>Easy</div>
            <div id="dfs_labyrinth1_render_btn">Start</div>
            <table id="dfs_labyrinth1" class="array5x5"></table>
        </div>
        <div class="matrix_sub2">
            <div>Medium</div>
            <div id="dfs_labyrinth2_render_btn">Start</div>
            <table id="dfs_labyrinth1" class="array5x5"></table>
        </div>
        <div class="matrix_sub3">
            <div>Hard</div>
            <div id="dfs_labyrinth3_render_btn">Start</div>
            <table id="dfs_labyrinth1" class="array5x5"></table>
        </div>
      </div>
      <br>
      <code code-include="/code/cpp/04_OOP/classes_and_objects/01_definingClassAndDeclaringObject.txt"></code>

      <h2>The "8 Queens" Puzzle</h2> <a href="https://en.wikipedia.org/wiki/Eight_queens_puzzle">https://en.wikipedia.org/wiki/Eight_queens_puzzle</a>
      <p>The eight queens puzzle is the problem of placing eight chess queens on an 8×8 chessboard so that no two queens threaten each other; thus, a solution requires that no two queens share the same row, column, or diagonal.</p>
      <table class="code_table">
        <tr>
            <th>Input</th>
            <th>Output</th>
        </tr>
        <tr>
            <td>(no input)</td>
            <td>* - - - - - - -</td>
        </tr>
        <tr>
            <td></td>
            <td>- - - - * - - -</td>
        </tr>
        <tr>
            <td></td>
            <td>- - - - - - - *</td>
        </tr>
        <tr>
            <td></td>
            <td>- - - - - * - -</td>
        </tr>
        <tr>
            <td></td>
            <td>- - * - - - - -</td>
        </tr>
        <tr>
            <td></td>
            <td>- - - - - - * -</td>
        </tr>
        <tr>
            <td></td>
            <td>- * - - - - - -</td>
        </tr>
        <tr>
            <td></td>
            <td>- - - * - - - -</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>(91 solutions more)</td>
        </tr>
      </table>
      <br>
      <code code-include="/code/cpp/05_Algorithms/08_8QueensProblem.cpp"></code>

    </div> <!-- END cpp_recursion -->

  </div>
</div>

<script>

    class Labyrinth {
      constructor() {
        this.size = 14,
        this.maze = [
          ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          ['*', 's', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', ' ', '*'],
          ['*', ' ', '*', '*', '*', '*', ' ', '*', ' ', '*', ' ', ' ', ' ', '*'],
          ['*', ' ', '*', ' ', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*'],
          ['*', ' ', '*', ' ', '*', '*', '*', '*', ' ', '*', ' ', '*', '*', '*'],
          ['*', ' ', '*', ' ', '*', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*'],
          ['*', ' ', '*', ' ', '*', ' ', '*', '*', '*', '*', '*', '*', ' ', '*'],
          ['*', ' ', '*', ' ', '*', ' ', '*', ' ', ' ', ' ', ' ', '*', ' ', '*'],
          ['*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', '*', ' ', '*', ' ', '*'],
          ['*', ' ', '*', '*', '*', '*', '*', ' ', ' ', '*', ' ', '*', ' ', '*'],
          ['*', ' ', '*', ' ', ' ', ' ', '*', '*', ' ', '*', ' ', ' ', ' ', '*'],
          ['*', ' ', '*', ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          ['*', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '*'],
          ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', 'e', '*']
        ],
          this.mazeCollection = [],
          this.pathVect = [];
          this.pathsDict = [];
          this.steps = 0;
      }

      _hasPath(y, x) {
		    if (this.maze[y][x] == '*') {
			    return false; // there is a wall, no path ahead
		    }

		    if (this.maze[y][x] == '.') {
			    return false; // we have been here already, escape endless loop
		    }

        if (this.maze[y][x] == 'e') { // save current exit and search for more
          if (this.pathsDict[this.steps] === undefined) { // if key does not exist
            this.pathsDict[this.steps] = [];
            this.pathsDict[this.steps].push([...this.pathVect]);
          } else {
            this.pathsDict[this.steps].push([...this.pathVect]);
          }
          
          return false; // search for more exits
        }

        return true;
      }

      _findExit(y, x) {
       
        if (this._hasPath(y, x) == false) {
			    return;
		    }
     
        this.maze[y][x] = '.'; // mark the visited cell
        this.pathVect.push({y, x});
        this.steps++;

        this.mazeCollection.push(this.maze.map(x => ({...x}))); // push a deep copy of the current maze inside the render collection

        this._findExit(y - 1, x); // check up
        this._findExit(y, x - 1); // check left
        this._findExit(y, x + 1); // check right
        this._findExit(y + 1, x); // check down

        this.maze[y][x] = ' '; // backtrack happens here
        this.pathVect.pop();
        this.steps--;

      }

      calculate() {   
        // function printNumbers(from, to) {
        //   let timer = setInterval(() => { from <= to ? console.log(from++) : clearInterval(timer); }, 1000);
        //   }

        //   function printNumbers(from, to) {
        //   setTimeout(function int() {
        //   console.log(from++);
        //   if (from <= to) setTimeout(int, 1000);
        //   }, 1000);
        // }
        // printNumbers(10, 20);

      }

      _drawShortestExit() {
        // Get the smallest key from the pathsDict, e.g the sortest path
        let key = Object.keys(this.pathsDict).reduce((key, v) => this.pathsDict[v] < this.pathsDict[key] ? v : key);
        let arr = this.pathsDict[key][0];
        this.maze[arr[0].y][arr[0].x] = 's';
        this.mazeCollection.push(this.maze.map(x => ({...x}))); // push a deep copy of the current maze inside the render collection
        for (let i = 1; i < arr.length; i++) {
          let y = arr[i].y;
          let x = arr[i].x;
          this.maze[y][x] = 'p';
          this.mazeCollection.push(this.maze.map(x => ({...x}))); // push a deep copy of the current maze inside the render collection
        }

        console.log(this);

        let myTimer = setInterval(doStuff, 100, this);
        let counter = 0;

        function doStuff(that) {
          that.drawLabyrinth(labyrinth1El, that.mazeCollection[counter++]); 
          console.log(that.mazeCollection.length);
          console.log(counter);

          if (counter >= that.mazeCollection.length) {
            clearInterval(myTimer);
          }
        }

        //this.mazeCollection = []; i need to figure out how to reset this !!!

      }

      findExit() {
        this._findExit(1, 1);
        this._drawShortestExit();
      }

      drawLabyrinth(el, collection) {
        let table = document.createElement("table");
        let tbody = document.createElement("tbody");
        table.appendChild(tbody);

        for (let row = 0; row < this.size; row++) {
          let tr = document.createElement("tr");
         
          for (let col = 0; col < this.size; col++) {
            let td = document.createElement("td");

            if (collection[row][col] == '*') {
              td.className = "array5x5_td_orange";
              td.innerText = "*";
            } else if (collection[row][col] == 's') {
              td.className = "array5x5_td_green";
              td.innerText = "s";
            } else if (collection[row][col] == 'e') {
              td.className = "array5x5_td_red";
              td.innerText = "e";
            } else if (collection[row][col] == 'p') {
              td.className = "array5x5_td_green";
              td.innerText = ".";
            } else if (collection[row][col] == '.') {
              td.className = "array5x5_td_blue";
              td.innerText = ".";
            } else if (collection[row][col] == ' ') {
              td.className = "array5x5_td_white";
              td.innerText = " ";
            }

            tr.appendChild(td);
          }

          tbody.appendChild(tr);
        }

        el.innerHTML = table.innerHTML;
      }
    
    }

    let labyrinth1El = document.getElementById("dfs_labyrinth1");  
    let labyrinth = new Labyrinth();
    labyrinth.drawLabyrinth(labyrinth1El, labyrinth.maze);
  
    let labyrinthRenderBtn = document.getElementById("dfs_labyrinth1_render_btn");  
    labyrinthRenderBtn.addEventListener("click", function(){ labyrinth.findExit(); });

    
</script>

<style>

#dfs_labyrinth1_render_btn {
  border: 1px solid;
  margin-bottom: 2px;
  cursor: pointer;
}

#dfs_labyrinth1_render_btn:hover {
  background-color: #00a4ef;
}

.matrix_grid {
  display: grid;
  grid-template-columns: 30% 25% 25%;
}
.matrix_sub1 { grid-column: 1; }
.matrix_sub2 { grid-column: 2; }
.matrix_sub3 { grid-column: 3; }

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
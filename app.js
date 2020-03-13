// NodeJS Core Modules
const fs = require("fs");
const path = require('path');

// Third Party Modules
const express = require('express');
const ejs = require('ejs');
const app = express();

// Configs
const hostname = "localhost";
const port = 3000;

app.set('views', path.join(__dirname, '/public'));
app.use("/public", express.static(__dirname + '/public'));
app.use("/resources", express.static(__dirname + '/resources'));

app.locals.loggedIn = true;

// Routes
app.get("/", function(req, res) { res.render("index.ejs"); });
app.get("/csharp", function(req, res) { res.render("csharp.ejs"); });
app.get("/mssql", function(req, res) { res.render("mssql.ejs"); });
app.get("/cpp", function(req, res) { res.render("cpp/cpp.ejs"); });
app.get("/javascript", function(req, res) { res.render("javascript/javascript.ejs"); });

// C++
// I. Basics
app.get("/cpp/data_types", function(req, res) { 
  res.render("cpp/01_Basics/data_types.ejs"); 
});

app.get("/cpp/array1", function(req, res) {
  let strArrayDeclaration1 = fs.readFileSync('resources/cpp/c_array/01_1_arrayDeclaration.txt', 'utf8');
  let strArrayDeclaration2 = fs.readFileSync('resources/cpp/c_array/01_2_arrayDeclaration.txt', 'utf8');
  let strArrayDeclaration3 = fs.readFileSync('resources/cpp/c_array/01_3_arrayDeclaration.txt', 'utf8');
  let strArrayDeclaration4 = fs.readFileSync('resources/cpp/c_array/01_4_arrayDeclaration.txt', 'utf8');
  let strRead2DIntVector = fs.readFileSync('resources/cpp/c_array/01_read2DIntVector.cpp', 'utf8');
  let strFindDiagonalAndTriangles = fs.readFileSync('resources/cpp/c_array/04_findDiagonalAndTriangles.cpp', 'utf8');
  let strFindAntiDiagonalAndTriangles = fs.readFileSync('resources/cpp/c_array/05_findAntiDiagonalAndTriangles.cpp', 'utf8');

  let options = {
    strArrayDeclaration1: strArrayDeclaration1,
    strArrayDeclaration2: strArrayDeclaration2,
    strArrayDeclaration3: strArrayDeclaration3,
    strArrayDeclaration4: strArrayDeclaration4,
    strRead2DIntVector: strRead2DIntVector,
    strFindDiagonalAndTriangles: strFindDiagonalAndTriangles,
    strFindAntiDiagonalAndTriangles: strFindAntiDiagonalAndTriangles
  }

  res.render("cpp/array1.ejs", options);

});

app.get("/cpp/functions", function(req, res) {
  let strFunctionsSyntax = fs.readFileSync('resources/cpp/functions_syntax1.txt', 'utf8');
  let strFunctionsSyntax2 = fs.readFileSync('resources/cpp/functions_syntax2.txt', 'utf8');

  let options = {
    strFunctionsSyntax: strFunctionsSyntax,
    strFunctionsSyntax2: strFunctionsSyntax2
  }

  res.render("cpp/functions.ejs", options);
});

app.get("/cpp/strings_and_streams", function(req, res) { res.render("cpp/strings_and_streams.ejs"); });

app.get("/cpp/classes_and_objects", function(req, res) { res.render("cpp/04_OOP/classes_and_objects.ejs"); });

app.get("/cpp/recursion", function(req, res) { 
  let _8QueensProblem = fs.readFileSync('resources/cpp/05_Algorithms/recursion/08_8QueensProblem.cpp', 'utf8');

  let options = {
    _8QueensProblem: _8QueensProblem
  }

  res.render("cpp/05_Algorithms/recursion.ejs", options); 

});
app.get("/cpp/graph_traversal", function(req, res) { 

  let _8QueensProblem = fs.readFileSync('resources/cpp/05_Algorithms/recursion/08_8QueensProblem.cpp', 'utf8');

  let options = {
    _8QueensProblem: _8QueensProblem
  }
  
  res.render("cpp/05_Algorithms/graph_traversal.ejs", options); 

});

// III. Standard Template Library (STL)
app.get("/cpp/stl", function(req, res) { res.render("cpp/03_STL/stl.ejs"); });
app.get("/cpp/sorting", function(req, res) { 
  let strVectorSorting = fs.readFileSync('resources/cpp/03_STL/01_vectorSorting.cpp', 'utf8');

  let options = {
    strVectorSorting: strVectorSorting
  }

  res.render("cpp/03_STL/sorting.ejs", options); 
});
app.get("/cpp/searching", function(req, res) { res.render("cpp/03_STL/searching.ejs", options); });
app.get("/cpp/vector", function(req, res) { 
  let vectorDeclaration = fs.readFileSync('resources/cpp/03_STL/containers/vector/01_vectorDeclaration.txt', 'utf8');
  let vectorOptimization = fs.readFileSync('resources/cpp/03_STL/containers/vector/02_vectorOptimization.txt', 'utf8');
  let readIntVector = fs.readFileSync('resources/cpp/03_STL/containers/vector/readIntVector.cpp', 'utf8');
  let readStringVector = fs.readFileSync('resources/cpp/03_STL/containers/vector/readStringVector.cpp', 'utf8');
  let read2DIntVector = fs.readFileSync('resources/cpp/03_STL/containers/vector/read2DIntVector.cpp', 'utf8');
  let readIntVectorFromStringStream = fs.readFileSync('resources/cpp/03_STL/containers/vector/07_readIntVectorFromStringStream.cpp', 'utf8');
  let readStringVectorFromStringStream = fs.readFileSync('resources/cpp/03_STL/containers/vector/08_readStringVectorFromStringStream.cpp', 'utf8');
  let splitStringToIntVector = fs.readFileSync('resources/cpp/03_STL/containers/vector/09_splitStringToIntVector.cpp', 'utf8');
  let splitStringToStringVector = fs.readFileSync('resources/cpp/03_STL/containers/vector/10_splitStringToStringVector.cpp', 'utf8');

  let options = {
    vectorDeclaration: vectorDeclaration,
    vectorOptimization: vectorOptimization,
    readIntVector: readIntVector,
    readStringVector: readStringVector,
    read2DIntVector: read2DIntVector,
    readIntVectorFromStringStream: readIntVectorFromStringStream,
    readStringVectorFromStringStream: readStringVectorFromStringStream,
    splitStringToIntVector: splitStringToIntVector,
    splitStringToStringVector: splitStringToStringVector,
  }

  res.render("cpp/03_STL/containers/vector.ejs", options); 
});

app.get("/cpp/stack", function(req, res) { 

  let stackDeclaration = fs.readFileSync('resources/cpp/03_STL/containers/stack/01_stackDeclaration.txt', 'utf8');
  let readIntStackFromStringStream = fs.readFileSync('resources/cpp/03_STL/containers/stack/readIntStackFromStringStream.cpp', 'utf8');

  let options = {
    stackDeclaration: stackDeclaration,
    readIntStackFromStringStream: readIntStackFromStringStream
  }

  res.render("cpp/03_STL/containers/stack.ejs", options); 
});

app.get("/cpp/queue", function(req, res) { 

  let stackDeclaration = fs.readFileSync('resources/cpp/03_STL/containers/queue/01_stackDeclaration.txt', 'utf8');
  let readIntQueueFromStringStream = fs.readFileSync('resources/cpp/03_STL/containers/queue/readIntQueueFromStringStream.cpp', 'utf8');

  let options = {
    stackDeclaration: stackDeclaration,
    readIntQueueFromStringStream: readIntQueueFromStringStream
  }

  res.render("cpp/03_STL/containers/queue.ejs", options); 
});

app.get("/cpp/map", function(req, res) { 

  let mapDeclaration = fs.readFileSync('resources/cpp/03_STL/containers/map/01_mapDeclaration.txt', 'utf8');
  let mapIteration1 = fs.readFileSync('resources/cpp/03_STL/containers/map/02_mapIteration1.txt', 'utf8');
  let mapIteration2 = fs.readFileSync('resources/cpp/03_STL/containers/map/03_mapIteration2.txt', 'utf8');

  let options = {
    mapDeclaration: mapDeclaration,
    mapIteration1: mapIteration1,
    mapIteration2: mapIteration2,
  }

  res.render("cpp/03_STL/containers/map.ejs", options); 
});

app.get("/cpp/iterators", function(req, res) { res.render("cpp/03_STL/iterators.ejs"); });


// V. Solutions
app.get("/cpp/algorithms", function(req, res) { 
  let LIS_ContinuousElements = fs.readFileSync('resources/cpp/05_Solutions/algorithms/LIS_ContinuousElements.cpp', 'utf8');

  let options = {
    LIS_ContinuousElements: LIS_ContinuousElements
  }

  res.render("cpp/05_Solutions/algorithms.ejs", options); 
});
app.get("/cpp/algebra", function(req, res) { 
  let quadratic_equation = fs.readFileSync('resources/cpp/05_Solutions/algorithms/quadratic_equation.cpp', 'utf8');
  let greatest_common_divisor = fs.readFileSync('resources/cpp/05_Solutions/algorithms/greatest_common_divisor.cpp', 'utf8');

  let options = {
    quadratic_equation: quadratic_equation,
    greatest_common_divisor: greatest_common_divisor
  }

  res.render("cpp/05_Solutions/algebra.ejs", options); 
});
app.get("/cpp/blur_algorithm", function(req, res) { 
  let blendingColors = fs.readFileSync('resources/cpp/05_Solutions/graphics/blendingColors.cpp', 'utf8');

  let options = {
    blendingColors: blendingColors
  }

  res.render("cpp/05_Solutions/graphics/blur_algorithm.ejs", options); 
});



app.get("/javascript/classes_and_objects", function(req, res) { 
  res.render("javascript/classes_and_objects.ejs"); 
});


app.listen(port, hostname, function() {
  console.log(`Server running at http://${hostname}:${port}/`);
});
function openPage(argument1) 
{
  let path = "";

  if (argument1 == "home") { path = "/index.php"; }
  else if (argument1 == "courses") { path = "/courses.php"; }
  else if (argument1 == "csharp") { path = "/csharp.php"; }
  else if (argument1 == "mssql") { path = "/mssql.php"; }

  // C++
  else if (argument1 == "cplusplus") { path = "/app/cplusplus/cplusplus.php"; }
  else if (argument1 == "cplusplus_functions") { path = "/app/cplusplus/functions.php"; }
  else if (argument1 == "cplusplus_array1") { path = "/app/cplusplus/array1.php"; }
  else if (argument1 == "cplusplus_vector") { path = "/app/cplusplus/vector.php"; }
  else if (argument1 == "cplusplus_stack") { path = "/app/cplusplus/stack.php"; }
  else if (argument1 == "cplusplus_queue") { path = "/app/cplusplus/queue.php"; }
  // III. Standard Template Library (STL)
  else if (argument1 == "cplusplus_stl") { path = "/app/cplusplus/03_STL/stl.php"; }
  else if (argument1 == "cplusplus_sorting") { path = "/app/cplusplus/03_STL/sorting.php"; }
  else if (argument1 == "cplusplus_searching") { path = "/app/cplusplus/03_STL/searching.php"; }
  else if (argument1 == "cplusplus_map") { path = "/app/cplusplus/containers/map.php"; }
  else if (argument1 == "cplusplus_iterators") { path = "/app/cplusplus/iterators.php"; }
  else if (argument1 == "cplusplus_strings_and_streams") { path = "/app/cplusplus/strings_and_streams.php"; }

  // IV. Object Oriented Programming (OOP)
  else if (argument1 == "cplusplus_classes_and_objects") { path = "/app/cplusplus/04_OOP/classes_and_objects.php"; }

  // IV. Object Oriented Programming (OOP)
  else if (argument1 == "cplusplus_recursion") { path = "/app/cplusplus/05_Algorithms/recursion.php"; }

  // V. Solutions
  else if (argument1 == "cplusplus_algorithms") { path = "/app/cplusplus/solutions/algorithms.php"; }
  else if (argument1 == "cplusplus_algebra") { path = "/app/cplusplus/solutions/algebra.php"; }
  // Graphics
  else if (argument1 == "cplusplus_blur_algorithm") { path = "/app/cplusplus/solutions/graphics/blur_algorithm.php"; }

  location.href = path;

}
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
  else if (argument1 == "cplusplus_iterators") { path = "/app/cplusplus/iterators.php"; }
  else if (argument1 == "cplusplus_algebra") { path = "/app/cplusplus/algebra.php"; }
  else if (argument1 == "cplusplus_strings_and_streams") { path = "/app/cplusplus/strings_and_streams.php"; }

  location.href = path;

}
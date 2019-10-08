#include <iostream>;

using std::cin;
using std::cout;
using std::endl;

int main() {

    int n = 5;
    int matrix[5][5]{
        {1, 2, 3, 4, 5},
	{1, 2, 3, 4, 5},
	{1, 2, 3, 4, 5},
	{1, 2, 3, 4, 5},
	{1, 2, 3, 4, 5}
    };

    // print diagonal
    for (int i = 0; i < n; i++)
    {
	for (int j = 0; j < n; j++)
        {	
	    if (i == j) { 
	        cout << matrix[i][j] << " ";
	    }
        }
    }
    // result
    // 1 2 3 4 5

    // print upper right triangle
    for (int i = 0; i < n; i++)
    {
	for (int j = 0; j < n; j++)
        {	
	    if (i < j) { 
	        cout << matrix[i][j] << " ";
	    }
        }
        cout << endl;
    }
    // result
    // 2 3 4 5
    // 3 4 5
    // 4 5
    // 5

    // print bottom left triangle
    for (int i = 0; i < n; i++)
    {
	for (int j = 0; j < n; j++)
        {	
	    if (i > j) { 
	        cout << matrix[i][j] << " ";
	    }
        }
        cout << endl;
    }
    // result
    // 1
    // 1 2
    // 1 2 3
    // 1 2 3 4

    return 0;
}
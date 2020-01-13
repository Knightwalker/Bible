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

    // print anti-diagonal
    for (int i = 0; i < n; i++)
    {
	for (int j = 0; j < n; j++)
        {	
	    if (n - 1 - i == j) { 
	        cout << matrix[i][j] << " ";
	    }
        }
    }
    // result
    // 5 4 3 2 1

    // print upper left triangle
    for (int i = 0; i < n; i++)
    {
	for (int j = 0; j < n; j++)
        {	
	    if (n - 1 - i > j) { 
	        cout << matrix[i][j] << " ";
	    }
        }
        cout << endl;
    }
    // result
    // 1 2 3 4
    // 1 2 3
    // 1 2
    // 1

    // print bottom right triangle
    for (int i = 0; i < n; i++)
    {
	for (int j = 0; j < n; j++)
        {	
	    if (n - 1 - i < j) { 
	        cout << matrix[i][j] << " ";
	    }
        }
        cout << endl;
    }
    // result
    // 5
    // 4 5
    // 3 4 5
    // 2 3 4 5

    return 0;
}
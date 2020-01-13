#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

bool predicate1(int a, int b) {

	if (a <= b) {
		return true;
	}
	else if (a > b)
	{
		return false;
	}
	
}

bool predicate2(int a, int b) {

	if (a > b) {
		return true;
	}
	else if (a <= b)
	{
		return false;
	}

}

struct myclass {
	bool operator() (int i, int j) { return (i < j); }
} myobject;

int main() {
	vector<int> vect1{ 32, 71, 12, 45, 26, 80, 53, 33 }; // 32 71 12 45 26 80 53 33
	vector<int> vect2{ 32, 71, 12, 45, 26, 80, 53, 33 }; // 32 71 12 45 26 80 53 33
	vector<int> vect3{ 32, 71, 12, 45, 26, 80, 53, 33 }; // 32 71 12 45 26 80 53 33
	vector<int> vect4{ 32, 71, 12, 45, 26, 80, 53, 33 }; // 32 71 12 45 26 80 53 33
	vector<int> vect5{ 32, 71, 12, 45, 26, 80, 53, 33 }; // 32 71 12 45 26 80 53 33

	// using default comparison (operator <):
	std::sort(vect1.begin(), vect1.end()); // 12 26 32 33 45 53 71 80

	// using predicate function as comparator -> sort ascending
	std::sort(vect2.begin(), vect2.end(), predicate1); // 12 26 32 33 45 53 71 80

	// using predicate function as comparator -> sort descending
	std::sort(vect3.begin(), vect3.end(), predicate2); // 80 71 53 45 33 32 26 12

	// using an object as comparator -> sort ascending
	std::sort(vect4.begin(), vect4.end(), myobject); // 12 26 32 33 45 53 71 80

	// using a template argument
	std::sort(vect5.begin(), vect5.end(), less<int>()); // 12 26 32 33 45 53 71 80

	// print out content:
	std::cout << "vect5 contains:";
	for (std::vector<int>::iterator it = vect5.begin(); it != vect5.end(); ++it)
		std::cout << ' ' << *it;
	std::cout << '\n';

	return 0;

}
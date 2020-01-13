#include <iostream>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::vector;

int main()
{
	vector<string> stringVect {"Hello", ", ", "World!"};

	for (vector<string>::iterator it = stringVect.begin(); it != stringVect.end(); it++) {
		cout << *it << " has size: " << it->size() << endl;
	}

}
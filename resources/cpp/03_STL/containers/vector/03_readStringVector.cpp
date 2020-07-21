#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::vector;

void readStringVector(vector<string>& vect);

int main()
{
	vector<string> inputStringVect; readStringVector(inputStringVect);

	for (size_t i = 0; i < inputStringVect.size(); i++) {
		cout << inputStringVect[i] << " ";
	}

	return 0;
}

void readStringVector(vector<string>& vect) {
	int n = 0; cin >> n;
	string el = "";
	for (int i = 0; i < n; i++) {
		cin >> el;
		vect.push_back(el);
	}
}
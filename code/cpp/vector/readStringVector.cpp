#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::vector;

int readStringVector(vector<string>& vector);

int main()
{
	vector<string> inputStringVect; readStringVector(inputStringVect);

	for (int i = 0; i < inputStringVect.size(); i++)
	{
		cout << inputStringVect[i] << " ";
	}

	return 0;
}

int readStringVector(vector<string>& vector) {

	int n = 0; cin >> n;
	string el = "";
	for (int i = 0; i < n; i++)
	{
		cin >> el;
		vector.push_back(el);
	}

	return 0;
}
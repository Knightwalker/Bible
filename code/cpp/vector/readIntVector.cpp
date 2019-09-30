#include <iostream>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::vector;

int readIntVector(vector<int>& vector);

int main()
{
	vector<int> inputIntVect; readIntVector(inputIntVect);

	for (size_t i = 0; i < inputIntVect.size(); i++)
	{
		cout << inputIntVect[i] << " ";
	}

	return 0;
}

int readIntVector(vector<int>& vector) {

	int n = 0; cin >> n;
	int el = 0;
	for (size_t i = 0; i < n; i++)
	{
		cin >> el;
		vector.push_back(el);
	}

	return 0;
}
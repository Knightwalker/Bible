#include <iostream>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::vector;

void readIntVector(vector<int>& vect);

int main()
{
	vector<int> inputIntVect; readIntVector(inputIntVect);

	for (size_t i = 0; i < inputIntVect.size(); i++)
	{
		cout << inputIntVect[i] << " ";
	}

	return 0;
}

void readIntVector(vector<int>& vect) {
    int n = 0; cin >> n;
    int el = 0;
    for (int i = 0; i < n; i++) {
        cin >> el;
        vect.push_back(el);
    }
}
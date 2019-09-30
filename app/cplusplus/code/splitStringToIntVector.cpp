#include <iostream>
#include <string>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::stoi;
using std::string;
using std::vector;

vector<int> splitStringToIntVector(string inputString, char delimiter);

int main() {
	string inputString = ""; getline(cin, inputString);

	vector<int> stringVect = splitStringToIntVector(inputString, ' ');

	int stringVectSize = stringVect.size();
	for (int i = 0; i < stringVectSize; ++i) {
		cout << stringVect[i] << endl;
	}

	return 0;
}

vector<int> splitStringToIntVector(string inputString, char delimiter) {
	vector<int> intVect;

	string element = "";
	int inputStringLength = inputString.length();
	for (int i = 0; i < inputStringLength; i++) {
		if (inputString[i] == delimiter) {
			intVect.push_back(stoi(element));
			element = "";
		}
		else {
			element += inputString[i];
		}
	}
	intVect.push_back(stoi(element));

	return intVect;
}
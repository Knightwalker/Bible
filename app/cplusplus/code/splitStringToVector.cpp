#include <iostream>
#include <string>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::vector;

vector<string> splitStringToVector(string inputString, char delimiter);

int main() {
	string inputString = ""; getline(cin, inputString);

	vector<string> stringVect = splitStringToVector(inputString, ' ');

	int stringVectSize = stringVect.size();
	for (int i = 0; i < stringVectSize; ++i) {
		cout << stringVect[i] << endl;
	}

	return 0;
}

vector<string> splitStringToVector(string inputString, char delimiter) {
	vector<string> stringVect;

	string element = "";
	int inputStringLength = inputString.length();
	for (int i = 0; i < inputStringLength; i++) {
		if (inputString[i] == delimiter) {
			stringVect.push_back(element);
			element = "";
		}
		else {
			element += inputString[i];
		}
	}
	stringVect.push_back(element);

	return stringVect;
}
#include <iostream>
#include <string>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::vector;

int splitStringToStringVector(vector<string>& originalVector, string inputString, char delimiter);

int main() {
	string inputString = ""; getline(cin, inputString);
	vector<string> stringVect; splitStringToStringVector(stringVect, inputString, ' ');

	for (int i = 0; i < stringVect.size(); i++) {
		cout << stringVect[i] << " ";
	}

	return 0;
}

int splitStringToStringVector(vector<string>& originalVector, string inputString, char delimiter) {
	string element = "";
	int inputStringLength = inputString.length();
	for (int i = 0; i < inputStringLength; i++) {
		if (inputString[i] == delimiter) {
			originalVector.push_back(element);
			element = "";
		}
		else {
			element += inputString[i];
		}
	}
	originalVector.push_back(element);

	return 0;
}
#include <iostream>
#include <string>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::stoi;
using std::string;
using std::vector;

int splitStringToIntVector(vector<int>& originalVector, string inputString, char delimiter);

int main() {
	string inputString = ""; getline(cin, inputString);
	vector<int> intVect; splitStringToIntVector(intVect, inputString, ' ');

	for (int i = 0; i < intVect.size(); i++) {
		cout << intVect[i] << " ";
	}

	return 0;
}

int splitStringToIntVector(vector<int>& originalVector, string inputString, char delimiter) {
	string element = "";
	int inputStringLength = inputString.length();
	for (int i = 0; i < inputStringLength; i++) {
		if (inputString[i] == delimiter) {
			originalVector.push_back(stoi(element));
			element = "";
		}
		else {
			element += inputString[i];
		}
	}
	originalVector.push_back(stoi(element));

	return 0;
}
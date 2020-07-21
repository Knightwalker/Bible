#include <iostream>

using std::cin;
using std::cout;
using std::endl;
using std::string;

bool isInteger(const std::string& str);

int main()
{
	string n1 = "1";
	string n2 = "+10";
	string n3 = "-100";
	string n4 = "one";
	string n5 = "-ten";
	string n6 = "+on3_hundr3d";

	cout << isInteger(n1) << endl; // true
	cout << isInteger(n2) << endl; // true
	cout << isInteger(n3) << endl; // true
	cout << isInteger(n4) << endl; // false
	cout << isInteger(n5) << endl; // false
	cout << isInteger(n6) << endl; // false
}

bool isInteger(const std::string& str) {
	int strLen = str.length();

	if (!isdigit(str[0])) {
		if (str[0] != '+' && str[0] != '-') {
			return false;
		}
	}

	for (int i = 1; i < strLen; i++) {
		if (!isdigit(str[i])) {
			return false;
		}
	}

	return true;
}
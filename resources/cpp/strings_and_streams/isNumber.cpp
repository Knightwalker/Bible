#include <iostream>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::string;

bool isNumber(string& str);

int main() {
	string a = "100";
	string b = "one_hundred";
	string c = "-100";
	string d = "-on3_hundr3d";

	cout << isNumber(a) << endl; // true
	cout << isNumber(b) << endl; // false
	cout << isNumber(c) << endl; // true
	cout << isNumber(d) << endl; // false

	return 0;
}

bool isNumber(string& str) {
	int strLen = str.length();

	for (int i = 0; i < strLen; i++)
		if (isdigit(str[i]) == false) {
			if (str[i] != '-') {
				return false;
			}
			else if (str[i] == '-' && i < strLen - 1) {
				if (isdigit(str[i + 1]) == false) {
					return false;
				}
			}
		}

	return true;

}
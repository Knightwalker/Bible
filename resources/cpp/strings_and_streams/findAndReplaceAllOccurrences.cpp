#include <iostream>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::string;

void findAndReplaceAllOccurrences(string& data, string searchForStr, string replaceWithStr);

int main() {
	string input = ""; getline(cin, input);
	string searchForStr = "";  getline(cin, searchForStr);
	string replaceWithStr = ""; getline(cin, replaceWithStr);

	findAndReplaceAllOccurrences(input, searchForStr, replaceWithStr);

	cout << input << endl;

	return 0;
}

void findAndReplaceAllOccurrences(string& data, string searchForStr, string replaceWithStr) {
	// Get the starting index of the first occurrence
	int pos = data.find(searchForStr);

	// Repeat till end is reached
	while (pos != string::npos) {
		// Replace this occurrence of Sub String
		data.replace(pos, searchForStr.size(), replaceWithStr);

		// Get the next occurrence from the current position
		pos = data.find(searchForStr, pos + replaceWithStr.size());
	}
}
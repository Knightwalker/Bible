#include <iostream>;
#include <string>;
#include <vector>;
#include <sstream>;

using std::cin;
using std::cout;
using std::endl;
using std::string;
using std::vector;
using std::istringstream;

void readStringVectorFromStringStream(vector<string>& vect);

int main() {
	vector<string> stringVect; readStringVectorFromStringStream(stringVect);

	int stringVectSize = stringVect.size();
	for (int i = 0; i < stringVectSize; ++i)
	{
		cout << stringVect[i] << " ";
	}

	return 0;
}

void readStringVectorFromStringStream(vector<string>& vect) {
	string inputLine = ""; getline(cin, inputLine);
	istringstream input(inputLine);
	string el;
	while (input >> el) {
		vect.push_back(el);
	}
}
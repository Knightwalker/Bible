#include <iostream>;
#include <sstream>;
#include <string>;
#include <vector>;

using std::cin;
using std::cout;
using std::endl;
using std::istringstream;
using std::vector;
using std::string;

void readIntVectorFromStringStream(vector<int>& vect);

int main() {
	vector<int> intVect; readIntVectorFromStringStream(intVect);
	int intVectSize = intVect.size();

	for (int i = 0; i < intVectSize; ++i)
	{
		cout << intVect[i] << " ";
	}

	return 0;
}

void readIntVectorFromStringStream(vector<int>& vect) {
	string inputLine = ""; getline(cin, inputLine);
	istringstream input(inputLine);

	int n;
	while (input >> n) {
		vect.push_back(n);
	}

}
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

int readIntVectorV2(vector<int>& vector);

int main() {
	
	vector<int> intVect; readIntVectorV2(intVect);
	int intVectSize = intVect.size();

	for (int i = 0; i < intVectSize; i++) {
		std::cout << intVect[i] << " ";
	}

	return 0;
}

int readIntVectorV2(vector<int>& vector) {
	string inputLine = ""; getline(cin, inputLine);
	istringstream input(inputLine);

	int n;
	while (input >> n) {
		vector.push_back(n);
	}

	return 0;
}
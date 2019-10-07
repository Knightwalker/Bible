#include <iostream>;
#include <sstream>;
#include <string>;
#include <stack>;

using std::cin;
using std::cout;
using std::endl;
using std::istringstream;
using std::string;
using std::stack;

void readIntStackFromStringStream(stack<int>& intStack);

int main() {

	stack<int> intStack; readIntStackFromStringStream(intStack);

	while(!intStack.empty()) {
		cout << intStack.top() << " ";
		intStack.pop();
	}

	return 0;
}

void readIntStackFromStringStream(stack<int>& intStack) {
	string inputLine = ""; getline(cin, inputLine);
	istringstream input(inputLine);
	int n;
	while (input >> n) {
		intStack.push(n);
	}
}
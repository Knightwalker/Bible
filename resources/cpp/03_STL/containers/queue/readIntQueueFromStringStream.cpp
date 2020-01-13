#include <iostream>;
#include <sstream>;
#include <string>;
#include <queue>;

using std::cin;
using std::cout;
using std::endl;
using std::istringstream;
using std::string;
using std::queue;

void readIntQueueFromStringStream(queue<int>& intQueue);

int main() {

	queue<int> intQueue; readIntQueueFromStringStream(intQueue);

	while (!intQueue.empty()) {
		cout << intQueue.front() << " ";
		intQueue.pop();
	}

	return 0;
}

void readIntQueueFromStringStream(queue<int>& intQueue) {
	string inputLine = ""; getline(cin, inputLine);
	istringstream input(inputLine);

	int n;
	while (input >> n) {
		intQueue.push(n);
	}

}
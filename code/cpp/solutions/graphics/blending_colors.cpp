#include<iostream>;
#include<string>;
#include<sstream>;
#include<iomanip>;
using namespace std;

int main()
{
	string color_one = ""; cin >> color_one;
	string color_two = ""; cin >> color_two;

	stringstream ss; ss << "#";
	for (int i = 0; i < 3; i++)
	{
		int n1 = stoi(color_one.substr(i * 2 + 1, 2), nullptr, 16);
		int n2 = stoi(color_two.substr(i * 2 + 1, 2), nullptr, 16);
		ss << hex << setw(2) << setfill('0') << (n1 + n2) / 2;
	}

	string result(ss.str());
	cout << result << endl;

	return 0;
}
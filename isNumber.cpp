#include <iostream>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::string;

bool isNumber(string sNumber);

int main()
{
	const int numbersSize = 16;
	string numbers[numbersSize] = {
		"1",
		"+1",
		"-1",
		"123",
		"+123",
		"-123",
		"123.456",
		"+123.456",
		"-123.456",
		"+1+",
		"-1-",
		"+123+",
		"-123-",
		"123.456.789",
		"a123",
		"Hello there!"
	};

	for (unsigned int i = 0; i < numbersSize; i++) {
		if (isNumber(numbers[i])) {
			cout << "isNumber(" << numbers[i] << ") YES" << endl;
		}
		else {
			cout << "isNumber(" << numbers[i] << ") NO" << endl;
		}
	}

	return 0;
}

bool isNumber(string sNumber) {
	char c = '0';
	unsigned int sNumberSize = sNumber.size();

	if (sNumberSize == 0) {
		return false;
	}
	else if (sNumberSize == 1) {
		// can only contain numbers 0-9 -> else it is not a number
		c = sNumber[0];
		if (c < '0' || c > '9') {
			return false;
		}
	}
	else if (sNumberSize > 1) {
		c = sNumber[0];
		// the first character can only contain numbers 0-9 or flag the number as positive or negative -> else it is not a number
		if (c < '0' || c > '9') {
			if (c != '+' && c != '-') {
				return false;
			}
		}

		// the following characters can only contain numbers 0-9 or a single '.' (representing a decimal number) -> else it is not a number
		int dotCount = 0;
		for (unsigned int i = 1; i < sNumber.size(); i++) {
			c = sNumber[i];

			if (c < '0' || c > '9') {
				if (c == '.') {
					dotCount++;
					if (dotCount >= 2) {
						return false;
					}
				}
				else {
					return false;
				}
			}
		}

	}

	return true;
}
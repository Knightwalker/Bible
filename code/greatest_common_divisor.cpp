#include <iostream>
using namespace std;

int gcd(int x, int y) {
  while(y) {
    int t = y;
    y = x % y;
    x = t;
  }

  return x;
}

int main() {
  int x = 0;
  int y = 0;
  cin >> x >> y;

  int res = gcd(x, y);
  cout << res << endl;

  return 0;
}
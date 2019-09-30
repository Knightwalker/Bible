#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

vector<double> quadratic_equation(int a, int b, int c) {
int Discriminant = (b * b) - (4 * a * c);
vector<double> result;
   
   // greater than 0 = 2 roots
   if (Discriminant > 0) {
      double x1 = ((b * (-1)) + sqrt(Discriminant)) / (2 * a);
      double x2 = ((b * (-1)) - sqrt(Discriminant)) / (2 * a);
      cout << "Discriminant > 0 | two roots" << endl;
      result.push_back(x1); 
      result.push_back(x2);

   // exactly 0 = 1 root
   } else if (Discriminant == 0) {
      double x = (b * (-1)) / (2 * a);
      cout << "Discriminant = 0 | one root" << endl;
      result.push_back(x);

   // less than 0 = no roots
   } else if (Discriminant < 0) {
      cout << "Discriminant < 0 | no roots" << endl;
   }

   return result;
   
}

int main() {
   int a = 0;
   int b = 0;
   int c = 0;
   cin >> a >> b >> c;

   vector<double> result = quadratic_equation(a, b, c);
   for (int i = 0; i < result.size(); i++) {
      cout << "x" << i + 1 << " = " << result[i] << endl;
   }

   return 0;

}
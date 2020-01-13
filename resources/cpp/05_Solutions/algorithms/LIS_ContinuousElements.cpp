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

int main()
{
    vector<int> intVect; readIntVectorFromStringStream(intVect);

    int seqCount = 1;
    int bestSeqCount = 1;
    int bestSeqEndIndex = 0;

    for (int i = 1; i < intVect.size(); i++) {

        int prevEl = intVect[i - 1];
        int currentEl = intVect[i];

        if (prevEl < currentEl) { 
            seqCount++; 
        }
        else { 
            seqCount = 1; 
        }

        if (seqCount >= bestSeqCount) {
            bestSeqCount = seqCount;
            bestSeqEndIndex = i;
        }

    }

    cout << bestSeqCount << endl;
    //cout << bestSeqEndIndex << endl;
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
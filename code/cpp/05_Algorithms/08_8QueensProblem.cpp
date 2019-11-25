#include <iostream>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::string;

class EightQueens {
private:
	string chessBoard[8][8] =
	{
		{ "-", "-", "-", "-", "-", "-", "-", "-" },
		{ "-", "-", "-", "-", "-", "-", "-", "-" },
		{ "-", "-", "-", "-", "-", "-", "-", "-" },
		{ "-", "-", "-", "-", "-", "-", "-", "-" },
		{ "-", "-", "-", "-", "-", "-", "-", "-" },
		{ "-", "-", "-", "-", "-", "-", "-", "-" },
		{ "-", "-", "-", "-", "-", "-", "-", "-" },
		{ "-", "-", "-", "-", "-", "-", "-", "-" },
	};
	int solutions = 0;
	int queens = 0;

	void PutQueens(int row = 0) {

		if (row == 8) {
			// Print solution
			for (int i = 0; i < 8; i++)
			{
				for (int j = 0; j < 8; j++)
				{
					cout << chessBoard[i][j] << " ";
				}
				cout << endl;
			}
			cout << (++solutions) << endl;
			cout << endl;
			return;
		}

		for (int col = 0; col < 8; col++) {
			if (canPlaceQueen(row, col)) {
				chessBoard[row][col] = "*"; // place the queen
				queens++;
				PutQueens(row + 1);         // solve for next queen
				chessBoard[row][col] = "-"; // backtrack
				queens--;
			}
		}

	}

	bool canPlaceQueen(int row, int col)
	{
		// check up
		int y = row;
		int x = col;

		while (true)
		{
			y--;
			if (y < 0) { break; }
			if (chessBoard[y][x] == "*")
			{
				return false;
			}
		}

		// check down
		y = row;
		x = col;

		while (true)
		{
			y++;
			if (y >= 8) { break; }
			if (chessBoard[y][x] == "*")
			{
				return false;
			}
		}

		// since we are filling one column at a time,
		// we will check if no queen is placed in that particular row
		for (int i = 0; i < 8; i++)
		{
			if (chessBoard[row][i] == "*")
			{
				return false;
			}
		}

		// we are filling one column at a time,so we need to check the upper and
		// diagonal as well
		// check upper diagonal
		for (int i = row, j = col; i >= 0 && j >= 0; i--, j--)
		{
			if (chessBoard[i][j] == "*")
			{
				return false;
			}
		}

		for (int i = row, j = col; i < 8 && j < 8; i++, j++)
		{
			if (chessBoard[i][j] == "*")
			{
				return false;
			}
		}

		// check lower diagonal
		for (int i = row, j = col; i < 8 && j >= 0; i++, j--)
		{
			if (chessBoard[i][j] == "*")
			{
				return false;
			}
		}

		for (int i = row, j = col; i >= 0 && j < 8; i--, j++)
		{
			if (chessBoard[i][j] == "*")
			{
				return false;
			}
		}

		// if we are here that means we are safe to place Queen at row, col
		return true;
	}

public:

	void solveQueensPuzzle() {
		this->PutQueens();
	}


};

int main()
{
	EightQueens eightQueensProblem;
	eightQueensProblem.solveQueensPuzzle();
}
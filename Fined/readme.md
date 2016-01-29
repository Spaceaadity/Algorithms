##Synopsis
The Head Librarian at a library wants you to create a program that calculates the fine for returning a book after the return date. You are given the actual and the expected return dates. Calculate the fine as follows:

If the book is returned on or before the expected return date, no fine will be charged. In other words, the fine is 0.
If the book is returned in the same calendar month as the expected return date, the fine = 15 Hackos × the number of late days.
If the book is not returned in the same calendar month but in the same calendar year as the expected return date, the fine = 500 Hackos × the number of late months.
If the book is not returned in the same calendar year, the fine is fixed at 10000 Hackos.

###Input 
You are given the actual and the expected return dates in D M Y format on two separate lines. The first line contains the D M Y values for the actual return date and the next line contains the D M Y values for the expected return date.

###Output 
Print a single value representing the fine.

###Constraints: 
1≤D≤31 
1≤M≤12 
1≤Y≤3000 
The given date is a valid date on a Gregorian calendar.

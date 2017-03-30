Symbol = Value
I       		1
V       	5
X     		 10
L       	50
C      	100
D       	500
M       	1,000


i ii iii iv v   vi vii viii ix x

step 1: program checks if number is between 1 and 3999
input: number is between 1 and 3999
output: proceeds to function

step 2: program recognizes number as one of the base roman values (i, v, x, L, C, D, M)
input:  500
output: D

step 3: Program notes how many thousands are present and displays it
input:  3169
output: 3

step 4: Program represents number of thousands in corresponding Roman numerals
input: 3169
output: MMM

step 5: Program takes the modulus and repeats steps 3 and 4 for 100(C) and adds it to end result of step 4.
input: 3169
output: MMMC

step 6: Program takes the modulus and repeats steps 3 and 4 for 10(X) and adds it to end result of step 4 and step 5.
input: 3169
output: MMMCLX

step 7: Program takes the modulus and repeats steps 3 and 4 for 1(I) and adds it to end result of step 4, step 5, and step 6.
input: 3169
output: MMMCLXIX.

step 8: The program tacks a zero to the front of numbers less than 1,000.

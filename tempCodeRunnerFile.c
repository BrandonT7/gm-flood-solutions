#include <stdio.h>
int main(void){
 int lower, upper;
 printf("Enter lower and upper: ");
 scanf("%d %d", &lower, &upper);
 printf("Perfect numbers between %d and %d:\n", lower, upper);
 for(int num = lower; num <= upper; num++){
 if (num <= 0) continue;
 int sum = 0;
 for(int i = 1; i <= num/2; i++)
 if(num % i == 0) sum += i;
 if(sum == num) printf("%d\n", num);
 }
 return 0;
}
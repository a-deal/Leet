var climbStairs = function (n) {
    //Store already computed numbers in hash
    var computed = {}


    //fibnacci(n + 1) === numbers of ways to climb stairs either by ones or twos.
    return findFib(n + 1)

    function findFib (nth) {
        //findFib will find the nth number in the sequence
         if ( nth < 2 ) {
             return nth;
         } else if (nth < 5) {
             return nth - 1;
         }
         else {
            computed[nth - 1] = computed[nth - 1] || findFib(nth - 1);
            computed[nth - 2] = computed[nth - 2] || findFib(nth - 2);
            return computed[nth - 1] + computed[nth - 2]
        }
    }
}

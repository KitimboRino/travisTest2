/**
    devDependencies
    1-  babel:- for converting our code into a compatible version
    2-  chai:- assertion library for Node and the browser that
        can be delightfully paired with any javascript testing framework.
    3-  Mocha:- test framework running on Node.js and in the browser, 
        making asynchronous testing simple and fun
 */

/*References
    https://babeljs.io/setup#installation
    https://www.chaijs.com/
    https://mochajs.org/
    https://www.mylifeasasoftwareengineer.com/lets-code-the-tdd-way
*/

//The iterative approach 

const Factorial= answer =>{
    try{
         //checking for datatype entered
        if (typeof answer !== 'number'){
            return 'undefined';
        }
        //checking if answer is -tive (less than 0)
        else if (answer < 0) {
            return 'undefined';
        }
        else{
            let factorial = 1;
            for (let i= answer; i>=1; i--){
                factorial = factorial * i;
            }
            return factorial;
        }

    }catch (err){
        console.log('Failed to test the code');
    }
    
};

module.exports = Factorial;

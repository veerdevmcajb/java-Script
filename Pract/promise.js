/**
 * Promise :
 *  A promise is an object representing the eventual 
 *  completion of failure of an asynchronous operation.
 * 
 * status of a promise:
 * pending : Initial state, neither fulfilled nor rejected.
 * Funfilled operation completed successfully
 * Rejected: Operation failed.
 * 
 */

 function step1(){
    return new Promise((resolve)=>{
        setTimeout{()=>{
            console.log('step 1');
            resolve();
        },1000};
    });
 }

 step1();


 function step2() {
    return new Promise ((resolve)=>{
        setTimeout{()=>{
            console.log('step 2');
            resolve();
        },1000};
    });
 }
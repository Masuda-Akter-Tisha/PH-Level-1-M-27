// document.getElementById ('btn').addEventListener ('click', function () {});
// addEventListener ('click', function () {}) //callback function

function settleLife (isBCS, bibaho ) {
    if (isBCS) {
        bibaho ('pori');
        
    }
}

function marriage (patri) {
 console.log('name:', patri, 'bolo kobol!');
} //This is callBack function

settleLife (true, marriage)
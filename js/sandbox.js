// testing axios call
// global variables

const api_url = "https://jsonplaceholder.typicode.com/posts/1"
function init(){
    //setup variables, const
    // clickhandlers
    //
    console.log("hello sandbox");
    test_axios();
}

function test_axios(){
    const result = axios.get(api_url);
    console.log(result);
}

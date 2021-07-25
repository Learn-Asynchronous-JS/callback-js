console.log('start');

function getData(id, callback) {
    setTimeout(() => {
        const result =  {items: [1,2,3,4,5]}
        callback(result);
    }, 4000);
}

const items = getData(1, items => {
    console.log(items);
});

console.log('end');
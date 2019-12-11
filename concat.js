function concat(arr1, arr2){
    return arr1.concat(arr2);
}

// console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
// console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
// console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
// console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);

function merge(arr1, arr2) {
    let merge = [...arr1, ...arr2];

    return merge.sort((a, b) => a-b);
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
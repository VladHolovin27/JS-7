//1//
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let b = [];
let j = 0;
for(let i = 0; i < a.length; i++) {
    if(5 < a[i]) {
        b[j++] = a[i];
    }
}
for(let k = 1; k < b.length; k++) {
    console.log(b[k]);
}

//2//
let c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let m = [];
let q = [];
let v = 0;
let p = 0;
for(let s = 0; s < c.length; s++) {
    if(c[s] > s) {
        m[v++] = c[s];
    }
    else if(c[s] < s) {
        q[p++] = c[s];
    }
}
for(let e = 0; e < q.length; e++) {
    console.log(q[e]);
}
console.log("менші");
for(let o = 0; o < m.length; o++) {
    console.log(m[o]);
}
console.log("більші");
//export

export function fool(){
    //
}

export var kode =42;

var bar = [1,2,3]
export {bar}

export {kode,bar}

//rename

function foolRename(){

}

export {foolRename as foo}

export {kode}
kode = 100;
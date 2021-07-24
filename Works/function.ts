function getAverage(...a: number[]): string {

    let total=0;
    let count=0;
     
    for(let i=0;i<a.length;i++){
        total+=a[i];
        count++
    }

    const result = total/count;

    return 'result :' +result 
}


getAverage(20,40,80)
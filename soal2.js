let average = (bi, en, mth, science)=> {
    
    let hasil = (bi+en+mth+science)/4
    if(hasil > 100) {
        console.log(`nilai salah`);  
    } else if( hasil>= 90) {
    console.log(`hasil = ${hasil}, Grade = A`); 
    } else if(hasil >= 80) {
        console.log(`hasil = ${hasil}, Grade = B`);  
    } else if(hasil >= 70) {
        console.log(`hasil = ${hasil}, Grade = C`);  
    } else if(hasil >= 60) {
        console.log(`hasil = ${hasil}, Grade = D`);  
    } else if(hasil >= 0) {
        console.log(`hasil = ${hasil}, Grade = E`);  
    } else {
        console.log(`nilai harus diisi semua`);
    }

}
average(90,80,85,90)

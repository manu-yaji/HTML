a=[1,2,3,4,1,5,6,2,7,1];
b=[];
var k=0
// for(var i=0;i<a.length;i++)
// {
//     for(var j=0;j<=b.length;j++)
//     {
//         if(a[i]!=b[j])
//         {
//             b[b.length]=a[i];
//         }
//     }
// }
for(var i=0;i<a.length;i++)
{
    if(a[i] in b)
    {}
    else{
        b[k]=a[i];
        k++;
    }
}
console.log(b);
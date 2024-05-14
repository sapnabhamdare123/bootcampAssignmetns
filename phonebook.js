function contact(Name, Phone, Email) {
    return {
        Name: Name,
        Phone: Phone,
        Email: Email,
    };
}

let person1 = contact("sapna", 9420895087, "sapnabhamdare22");
let person2 = contact("saloni", 1274637890, "salonidfj.com");
let person3 = contact("simran", 9876523657, "simaran@ke.com");

let arr = [person1, person2, person3];

console.log(arr);

let index;

function search(FirstName){

    let found = false;
    index = null;
    for(let i=0; i<arr.length; i++)
    {
        if(FirstName == arr[i].Name){
            console.log(arr[i]);
            index  = i ;
            found = true;
            break;
        }
    }
    if (found == false) {
        console.log("contact does not exist")
    }
}
search("simran");


function update(Phone,Email){
    arr[index].Phone = Phone;
    arr[index].Email = Email;

}
update(123456789,"dinky@gmail.com");
console.log(arr);



function deletecontact(){
    return delete(arr[index])
}

deletecontact()
console.log(arr)
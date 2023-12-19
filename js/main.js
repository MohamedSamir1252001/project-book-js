
var siteName = document.getElementById('siteName');
var siteUrl = document.getElementById('siteUrl');
var  submit = document.getElementById('submit') ;
var booksContainer=[];

if(localStorage.getItem("Mybooks") != null){
    booksContainer = JSON.parse(localStorage.getItem("Mybooks")) ;
    display(booksContainer) ;
};

submit.addEventListener("click" , function(){
    if(validation()==true && sitValidation()==true){

        var books={
            name:siteName.value,
            URL:siteUrl.value,
        }
        booksContainer.push(books);
    
        localStorage.setItem('Mybooks', JSON.stringify(booksContainer))
    
        display(booksContainer) ;
    
        clean();
        siteName.classList.remove("is-valid");
        siteUrl.classList.remove("is-valid");
    }else{
        alert("noooooooooo");
    }
});

function display(list){
    var box='';
    for(var i=0 ; i<list.length ; i++){
        box +=`

        <tr>
            <td>${i+1}</td>
            <td>${list[i].name}</td>
            <td><a href="${list[i].URL}" class="btn btn-success"><i class="fa-regular fa-eye"></i> Vist</a></td>
            <td><button onclick="deleteBook(${i})" class="btn btn-danger"><i class="fa-regular fa-trash-can"></i> Delete</button></td>
            
        </tr>
        
              `
    }
    document.getElementById("displayBody").innerHTML = box ;
}

function clean(){
 siteName.value='';
 siteUrl.value='';
};

function deleteBook(index){
    booksContainer.splice(index,1) ;
    localStorage.setItem('Mybooks', JSON.stringify(booksContainer));
    display(booksContainer);
};



function validation(){
    var reg = /^[a-zA-Z]{3,}$/;
    if(reg.test(siteName.value) == true){
        siteName.classList.replace("is-invalid" , "is-valid") ;
        return true ;
    }else{
        siteName.classList.add("is-invalid") ;
        return false ;
    }
};




function sitValidation(){
    var reg = /((http\W{3}|https\W{3}|)[w]{3}.\w+.(com|org|IO)|[a-z]{3,}.[a-z]{2,})/i;
    if(reg.test(siteUrl.value)==true){
        siteUrl.classList.replace("is-invalid" , "is-valid");
        return true;
    }
    else{
        siteUrl.classList.add("is-invalid");
        return false;
    }
}






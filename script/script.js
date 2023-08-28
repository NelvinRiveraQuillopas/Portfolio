const menu = class {
    constructor(con_title,ctnt,idx,sel){
        this.title=con_title;
        this.content=ctnt;
        this.Index=idx;
        this.isSelect=sel;
     }
    load(){
        document.getElementById("displaycontent").src = Colhead[this.Index].content;
        document.getElementById("title").innerText = Colhead[this.Index].title;
        }
      
};

var Colhead = [6];
Colhead[0] = new menu("About Me","about.html",0,false);
Colhead[1] = new menu("Skills","skills.html",1,false);
Colhead[2] = new menu("Projects","projects.html",2,false);
Colhead[3] = new menu("Certificates","certificates.html",3,false);
Colhead[4] = new menu("Contact","contact.html",4,false);
Colhead[5] = new menu("Change Themes","themes.html",5,false);

function Init(){    
    document.getElementById("displaycontent").src = Colhead[0].content;
}
function changeBGColor_over(idx){
    document.getElementsByClassName("col").item(idx).style.backgroundColor = "blueviolet";
}
function changeBGColor_remove(idx){
    if (Colhead[idx].isSelect == false){
        document.getElementsByClassName("col").item(idx).style.backgroundColor = "transparent";
    }
}
function SelectPage(idx){

    for (i=0;i<=5;i++){
        if (idx == i){
            document.getElementsByClassName("col").item(i).style.backgroundColor = "blueviolet";
            Colhead[i].isSelect = true;
        } 
        else{
            document.getElementsByClassName("col").item(i).style.backgroundColor = "transparent";
            Colhead[i].isSelect = false;
        }
    }
  
    Colhead[idx].load();
    
}



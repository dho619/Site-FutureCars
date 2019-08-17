/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function submit_client(){
    if (document.form1.nome.value === ""){
        alert("Campo nome obrigatório");
        return false;
    }else if (document.form1.email.value === ""){
        alert("Campo email obrigatório");
        return false;
    } else if (document.form1.cpf.value === ""){
        alert("Campo cpf obrigatório");
        return false;
    } if (document.form1.senha.value === ""){
        alert("Campo senha obrigatório");
        return false;
    }
}


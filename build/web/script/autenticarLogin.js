function submit_login(){
    if (document.form1.cpf.value === ""){
        alert("Campo cpf obrigatório");
        return false;
    }else if (document.form1.senha.value === ""){
        alert("Campo senha obrigatório");
        return false;
    }else if (document.form1.senha.value === 'senha' && document.form1.cpf.value === '123'){
        alert("Login efetuado com Sucesso!", onclick="window.close();");
        window.close();
        return false;
    } else {
        alert("Login e/ou senha incorretos!");
        return false;
    }
}


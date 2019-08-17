<%-- 
    Document   : apresenta-cliente
    Created on : 10/06/2019, 16:44:25
    Author     : aluno
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="css/autenticar.css">
        <title>Apresentação</title>
    </head>
    <body>
        <h1>Olá <%=request.getParameter("nome")%> seja bem vindo!</h1>
        <br/>
        <h2>Seu cpf é <%=request.getParameter("cpf")%> e o mesmo será usado para seu login.</h2>
    </body>
</html>

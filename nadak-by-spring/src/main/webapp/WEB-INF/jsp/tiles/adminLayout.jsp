<%--
  Created by IntelliJ IDEA.
  User: abdc
  Date: 2022/10/24
  Time: 9:19 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <title><tiles:insertAttribute name="title"/></title>
    <tiles:insertAttribute name="header" />
</head>
<body class="stat">
<div id="wrapper">
    <main id="container">
        <!-- ============header========================== -->
        <header id="header" class="header-gradient">
            <tiles:insertAttribute name="top" />
        </header>
        <!-- ============//header========================== -->

        <!-- ============content========================== -->
        <tiles:insertAttribute name="body" />
        <!-- ============//content========================== -->
    </main>

    <!-- ============footer========================== -->
    <footer id="footer" >
        <tiles:insertAttribute name="footer" />
    </footer>
    <!-- ============//footer========================== -->
</div>
</body>
</html>
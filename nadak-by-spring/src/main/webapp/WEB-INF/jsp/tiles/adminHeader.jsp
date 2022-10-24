<%--
  Created by IntelliJ IDEA.
  User: abdc
  Date: 2022/10/24
  Time: 9:19 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="_ctxPath" value="${pageContext.request.contextPath}" scope="application"/>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="format-detection" content="telephone=no">
<!-- css -->
<link rel="stylesheet" href="<c:url value='/assets/admin/css/reset.css'/>">
<link rel="stylesheet" href="<c:url value='/assets/admin/css/font.css'/>">
<link rel="stylesheet" href="<c:url value='/assets/admin/css/style.css'/>">
<!-- //css -->

<script>
    var _ctxPath = "${_ctxPath}";
    var _sitePath = "";
</script>

<!-- js -->
<script type="text/javascript" src="<c:url value='/assets/admin/js/lib/jquery/jquery-1.12.4.min.js'/>"></script>
<script type="text/javascript" src="<c:url value='/assets/admin/js/lib/jquery/jquery-ui.min.js'/>"></script>
<script type="text/javascript" src="<c:url value='/assets/admin/js/lib/jquery/jquery.easing.min.js'/>"></script>
<script type="text/javascript" src="<c:url value='/assets/admin/js/lib/jquery/common.js'/>"></script>
<!-- //js -->
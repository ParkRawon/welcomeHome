<%@page import="co.yedam.UserVO"%>
<%@page import="co.yedam.UserDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>register.jsp</title>
</head>
<body>
	<%
		String uid = request.getParameter("user_id");
		String upw = request.getParameter("user_pw");
		String uname = request.getParameter("user_name");
		String ugen = request.getParameter("user_gen");
		String uhobby = request.getParameter("user_hobby");
		String ubirth = request.getParameter("user_brith");
		
		UserVO vo = new UserVO();
		vo.setUserId(uid);
		vo.setUserPw(upw);
		vo.setUserName(uname);
		vo.setUserGen(ugen);
		vo.setUserHobby(uhobby);
		vo.setUserBirth(ubirth);
		
		UserDAO dao = new UserDAO();
		dao.insertUser(vo);
		
		out.print("<script>alert('입력성공')</script>");
		out.print("<h1>입력완료('입력성공')</h1>");
	%>

</body>
</html>
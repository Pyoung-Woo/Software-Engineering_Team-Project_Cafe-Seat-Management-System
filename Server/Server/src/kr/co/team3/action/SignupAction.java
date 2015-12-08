package kr.co.team3.action;

import java.io.IOException;
import java.sql.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.co.team3.dao.MemberDAO;
import kr.co.team3.dto.Member;
import kr.co.team3.action.*;


public class SignupAction implements Action {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		String email=request.getParameter("email");
		String passwd=request.getParameter("passwd");
		String name=request.getParameter("name");
	
		
		Member m=new Member();
	
		
		
		m.setEmail(email);
		m.setPw(passwd);
		m.setName(name);
		
		MemberDAO dao=MemberDAO.getMemberDAO();
		int result= dao.insertMember(m);
		
		if(result !=0){
			response.addHeader("Access-Control-Allow-Origin", "*");
			response.getWriter().write("success");
		}
		else{
			response.addHeader("Access-Control-Allow-Origin", "*");
			response.getWriter().write("fail");
		}
	}

}

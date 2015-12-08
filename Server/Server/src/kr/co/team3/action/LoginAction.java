package kr.co.team3.action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;

import kr.co.team3.dao.MemberDAO;
import kr.co.team3.dto.Member;
import kr.co.team3.action.*;

public class LoginAction implements Action {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("LoginAction");
		String email = request.getParameter("email");
		String passwd = request.getParameter("passwd");
		HttpSession session = request.getSession();
		JSONObject result = new JSONObject();
		MemberDAO dao = MemberDAO.getMemberDAO();
		
		
		if (dao.isMember(email, passwd)==0) {
			response.addHeader("Access-Control-Allow-Origin", "*");
			response.getWriter().write("fail");
		} 
		else {
			
			session.setAttribute("email", email);
			response.addHeader("Access-Control-Allow-Origin", "*");
			response.getWriter().write("success");

		}

	
	}

}

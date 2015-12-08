package kr.co.team3.action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import kr.co.team3.dao.MemberDAO;

public class AddFavorListAction implements Action{
	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	
		
		String email = request.getParameter("email");
		
		int c_num = Integer.parseInt(request.getParameter("c_num"));
		
		MemberDAO dao = MemberDAO.getMemberDAO();
		
		int result = dao.insertFavoriteList(email, c_num);
		
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.getWriter().write(result);
	}

}

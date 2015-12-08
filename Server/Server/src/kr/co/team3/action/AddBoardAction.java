package kr.co.team3.action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kr.co.team3.dao.BoardDAO;
import kr.co.team3.dao.MemberDAO;
import kr.co.team3.dto.Board;
import kr.co.team3.dto.Member;

public class AddBoardAction implements Action {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		// title, email content b_num
		String title=request.getParameter("title");
		String email=request.getParameter("email");
		String content=request.getParameter("content");
	
		
		Board b = new Board();
	
		
		
		b.setEmail(email);
		b.setTitle(title);
		b.setContent(content);
		
		BoardDAO dao=BoardDAO.getBoardDAO();
		int result= dao.insertBoard(b);
		
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

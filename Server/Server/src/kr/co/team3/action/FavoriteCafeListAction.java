package kr.co.team3.action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONArray;

import kr.co.team3.dao.CafeDAO;

public class FavoriteCafeListAction implements Action {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	HttpSession session = request.getSession();
		
		String email = (String) session.getAttribute("email");
		
		CafeDAO pDao = CafeDAO.getCafeDAO();
		
		JSONArray arr = pDao.selectfavoriteList(email);
	
		response.setContentType("application/json");
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.getWriter().write(arr.toString());
	}

}

package kr.co.team3.action;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import kr.co.team3.dao.CafeDAO;

public class RPIAction implements Action{

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

		
		CafeDAO pDao = CafeDAO.getCafeDAO();
		
		String str = pDao.sendRPI();
	
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.getWriter().write(str);
	}

}

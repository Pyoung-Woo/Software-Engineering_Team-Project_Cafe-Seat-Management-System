package kr.co.team3.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import kr.co.team3.dto.Board;
import kr.co.team3.dto.Member;
import kr.co.team3.util.DBManager;

public class BoardDAO {
static BoardDAO dao = new BoardDAO();
	
	private BoardDAO(){
		System.out.println("MemberDAO");
	}
	
	public static BoardDAO getBoardDAO(){
		return dao;
	}
	
public int insertBoard(Board b){
		
		String sql = "insert into c_board values(default, ?, ?, ?)";
		Connection con = DBManager.getConnection();
		PreparedStatement pstmt = null;
		int result = 0;
		System.out.println(result);
		

		
		try {			
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, b.getEmail());
			pstmt.setString(2, b.getTitle());
			pstmt.setString(3, b.getContent());
		
			result = pstmt.executeUpdate();
						
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally{
			DBManager.close(con,pstmt);
		}
		return result;
	}

public JSONArray selectBoardList() {
	JSONArray jsonArr = new JSONArray();
	
	String sql = "select * from c_board";
	Connection con = DBManager.getConnection();
	PreparedStatement pstmt = null;
	ResultSet rs = null;

	
	try {
		
		pstmt = con.prepareStatement(sql);	
		rs = pstmt.executeQuery();
		
		
		
		while(rs.next()) {  
			JSONObject obj = new JSONObject();
			obj.put("email", rs.getString("email"));
			obj.put("title", rs.getString("title"));
			obj.put("content", rs.getString("content"));
			
			
			jsonArr.add(obj);
			
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}finally{
		DBManager.close(con, pstmt);
		
	}
	return jsonArr;
}
	
}

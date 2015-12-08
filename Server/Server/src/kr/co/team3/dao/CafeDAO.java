package kr.co.team3.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import kr.co.team3.util.DBManager;

public class CafeDAO {
static CafeDAO dao = new CafeDAO();
	
	private CafeDAO(){
		System.out.println("MemberDAO");
	}
	
	public static CafeDAO getCafeDAO(){
		return dao;
	}
	
	public JSONArray selectCafeList() {
		JSONArray jsonArr = new JSONArray();
		
		String sql = "select c_name, c_num from c_cafe";
		Connection con = DBManager.getConnection();
		PreparedStatement pstmt = null;
		ResultSet rs = null;
	
		
		try {
			
			pstmt = con.prepareStatement(sql);	
			rs = pstmt.executeQuery();
			
			
			
			while(rs.next()) {  
				JSONObject obj = new JSONObject();
				obj.put("c_num", rs.getInt("c_num"));
				obj.put("c_name", rs.getString("c_name"));
				
				
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
	
	public String sendRPI() {
		String str = "";
		String sql = "select * from c_cafe where c_num = 1";
		Connection con = DBManager.getConnection();
		PreparedStatement pstmt = null;
		ResultSet rs = null;
	
		
		try {
			
			pstmt = con.prepareStatement(sql);	
			rs = pstmt.executeQuery();
			
			
			
			while(rs.next()) {  
				str = rs.getString("c_name") + "/" + rs.getInt("c_seats") + "/" + rs.getInt("c_total");
				
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			DBManager.close(con, pstmt);
			
		}
		return str;
	}
	
	public JSONArray selectfavoriteList(String email) {
		JSONArray jsonArr = new JSONArray();
		
		String sql = "select a.c_name, a.c_num from c_cafe a join (select c_num from c_favoritelist where email = ?) b on a.c_num =b.c_num ";
		Connection con = DBManager.getConnection();
		PreparedStatement pstmt = null;
		ResultSet rs = null;
	
		
		try {
			
			pstmt = con.prepareStatement(sql);	
			pstmt.setString(1, email);
			rs = pstmt.executeQuery();
			
			
			
			while(rs.next()) {  
				JSONObject obj = new JSONObject();
				obj.put("c_num", rs.getInt("c_num"));
				obj.put("c_name", rs.getString("c_name"));
				
				
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
	
	public JSONArray selectCafeInfo(int c_num) {
		JSONArray jsonArr = new JSONArray();
		
		String sql = "select * from c_cafe where c_num = ?";
		Connection con = DBManager.getConnection();
		PreparedStatement pstmt = null;
		ResultSet rs = null;
	
		
		try {
			
			pstmt = con.prepareStatement(sql);
			
			pstmt.setInt(1, c_num);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {  
				JSONObject obj = new JSONObject();
				obj.put("c_num", rs.getInt("c_num"));
				obj.put("c_address", rs.getString("c_address"));
				obj.put("c_event", rs.getString("c_event"));
				obj.put("c_intro", rs.getString("c_intro"));
				obj.put("c_name", rs.getString("c_name"));
				obj.put("c_seats", rs.getInt("c_seats"));
				obj.put("c_total", rs.getInt("c_total"));
				
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

package kr.co.team3.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import kr.co.team3.dto.Member;
import kr.co.team3.util.DBManager;



public class MemberDAO {
	
	static MemberDAO dao = new MemberDAO();
	
	private MemberDAO(){
		System.out.println("MemberDAO");
	}
	
	public static MemberDAO getMemberDAO(){
		return dao;
	}
	
	public int isMember(String email, String passwd){
		String sql = "select * from c_member where email='"+email+"' and passwd='"+passwd+"' ";
		Connection con = DBManager.getConnection();
		PreparedStatement pstmt = null;
		ResultSet rs = null;
	
		
		try {
			pstmt = con.prepareStatement(sql);	
			rs = pstmt.executeQuery();
			
			if(rs.next()) {     
				
				return 1;
			}
	
			
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			DBManager.close(con, pstmt);
			
		}
		return 0;
	}
	
	//ȸ������
	public int insertMember(Member m){
		
		String sql = "insert into c_member values(?, ?, ?)";
		Connection con = DBManager.getConnection();
		PreparedStatement pstmt = null;
		int result = 0;
		System.out.println(result);
		

		
		try {

			System.out.println(m.getEmail());
			System.out.println(m.getPw());
			System.out.println(m.getName());
			
			
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, m.getEmail());
			pstmt.setString(2, m.getPw());
			pstmt.setString(3, m.getName());
		
			result = pstmt.executeUpdate();
			System.out.println("Sign up!");
						
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally{
			DBManager.close(con,pstmt);
		}
		return result;
	}
	
public int insertFavoriteList(String email, int c_num){
		
		String sql = "insert into c_favoritelist values(?, ?)";
		Connection con = DBManager.getConnection();
		PreparedStatement pstmt = null;
		int result = 0;
		System.out.println(result);
		

		
		try {

			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, email);
			pstmt.setInt(2, c_num);
		
			result = pstmt.executeUpdate();
						
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally{
			DBManager.close(con,pstmt);
		}
		return result;
	}
	
	

}

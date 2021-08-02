package co.yedam.board;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DAO {
	protected Connection conn;
	protected Statement stmt;
	protected PreparedStatement pstmt;
	protected ResultSet rs;
	
	public void connect() {
		try {
			Class.forName("org.sqlite.JDBC"); //드라이버로딩
			String url ="D:\\sqlite\\db\\chinook\\chinook.db"; //DB연결
			conn = 	DriverManager.getConnection("jdbc:sqlite:"+url);
			System.out.println("connected!");
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public void disconnect() {
		if(conn != null) 
			try {
				conn.close();
			}catch (SQLException e) {
				e.printStackTrace();
			}
	}

}

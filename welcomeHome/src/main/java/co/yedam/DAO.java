package co.yedam;

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
			Class.forName("oracle.jdbc.driver.OracleDriver"); //드라이버로딩
			String url ="jdbc:oracle:thin:@localhost:1521:xe"; //DB연결
			conn = 	DriverManager.getConnection(url,"hr","hr");
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

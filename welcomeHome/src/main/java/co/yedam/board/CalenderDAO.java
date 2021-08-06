package co.yedam.board;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class CalenderDAO extends DAO {
	private static CalenderDAO instance;

	private CalenderDAO() {

	}

	public static CalenderDAO getInstance() {
		instance = new CalenderDAO();
		return instance;
	}

	// 이벤트 조회
	public List<HashMap<String, Object>> selectAll() {
		connect();
		List<HashMap<String, Object>> list = new ArrayList<HashMap<String, Object>>();
		try {
			pstmt = conn.prepareStatement("select * from schedule");
			rs = pstmt.executeQuery();
			while (rs.next()) {
				HashMap<String, Object> map = new HashMap<>();
				map.put("title", rs.getString("title"));
				map.put("start", rs.getString("start"));
				map.put("end", rs.getString("end"));
				list.add(map);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return list;
	}

	// 이벤트 입력
	public HashMap<String, Object> insert(Calender cal) {
		connect();
		try {
			pstmt = conn.prepareStatement("insert into schedule values(?,?,?)");
			pstmt.setString(1, cal.getTitle());
			pstmt.setString(2, cal.getStart());
			pstmt.setString(3, cal.getEnd());
			int r = pstmt.executeUpdate();
			System.out.println("입력:" +r);
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return null;
	}

	// 이벤트 삭제
	public HashMap<String, Object> delete(String title) {
		connect();
		String sql = "delete from schedule where title=?";
		HashMap<String, Object> map = new HashMap<String, Object>();
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, title);
			int r = pstmt.executeUpdate();
			System.out.println("삭제:" + r);
			map.put("title", title);

			return map;
		} catch (SQLException e) {
			e.printStackTrace();
			
		} finally {
			disconnect();
		}
		return null;
	}

}

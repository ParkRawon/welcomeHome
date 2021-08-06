package co.yedam.board;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;


@WebServlet("/CalenderServlet")
public class CalenderServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public CalenderServlet() {
        super();       
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charest=utf-8");
		response.setCharacterEncoding("utf-8");
		PrintWriter out = response.getWriter();
		
		String cmd  = request.getParameter("cmd");
		if (cmd == null) {
			
		
		}else if(cmd.equals("selectAll")) {
			    response.setContentType("text/json;charset=utf-8");
				List<HashMap<String, Object>> list = CalenderDAO.getInstance().selectAll();
				
				Gson gson = new GsonBuilder().create();
				String json = gson.toJson(list);
				out.println(json);
				

			
		}else if(cmd.equals("insert")) {
			    response.setContentType("text/json;charset=utf-8");
				String title = request.getParameter("title");
				String start = request.getParameter("start");
				String end = request.getParameter("end");
				Calender cal = new Calender();
				cal.setTitle(title);
				cal.setTitle(start);
				cal.setTitle(end);
				HashMap<String, Object> map = CalenderDAO.getInstance().insert(cal);
				Gson gson = new GsonBuilder().create();
				out.println(gson.toJson(map));
							
			
			
		}else if(cmd.equals("delete")) {
			response.setContentType("text/json;charset=utf-8");
			String title = request.getParameter("title");
			

			HashMap<String, Object> map = CalenderDAO.getInstance().delete(title);
			Gson gson = new GsonBuilder().create();
			out.println(gson.toJson(map));
			
		}		
		
	}
	
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}

}

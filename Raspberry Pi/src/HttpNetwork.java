import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class HttpNetwork  {
 
    public static void main (String args[]) {

        GUI g = new GUI();
        g.go();

    	}
    	
       
    public Cafe getCafe(){
    	String strHtmlSource = strGetData();
    	String[] data = strHtmlSource.split("/");
    	Cafe c = new Cafe();
    	c.setName(data[0]);
    	c.setSeats(Integer.parseInt(data[1]));
    	c.setTotal(Integer.parseInt(data[2]));
    	
    	return c;
    }
    
 
    public String strGetData() {
  
        BufferedReader    oBufReader = null;
        HttpURLConnection httpConn   = null;
        String strBuffer = "";
        String strRslt   = "";
      
        try
        {
            String strEncodeUrl = "http://webauthoring.ajou.ac.kr:18080/Team3Server/team3?cmd=rpi";
            URL oOpenURL = new URL(strEncodeUrl);
          
            httpConn =  (HttpURLConnection) oOpenURL.openConnection();          
            httpConn.setRequestMethod("GET");          
            httpConn.connect();          
            oBufReader = new BufferedReader(new InputStreamReader(oOpenURL.openStream()));
  
            //Buffer에 있는 내용을 읽어 차례로 화면에 뿌려준다.
            while((strBuffer = oBufReader.readLine()) != null)
            {
                if(strBuffer.length() > 1)
                {
                    strRslt += strBuffer;
                }
            }
          
        } catch( Exception ee) {
          ee.getMessage();
        }
  
        return strRslt;
    }
 
    /**
     * <p>현재날짜시간가져오기</p>
     * @return
     */
    public static String getCurrentDate24()
    {
        java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss", java.util.Locale.KOREA);
        return formatter.format(new java.util.Date());
    }
} 
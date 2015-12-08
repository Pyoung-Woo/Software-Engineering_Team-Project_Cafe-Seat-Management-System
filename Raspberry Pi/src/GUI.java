

import javax.swing.*;
import java.awt.*;

public class GUI {
	
	public void go(){
		JFrame frame = new JFrame();
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		while(true){
		HttpNetwork net = new HttpNetwork();
        Cafe c = net.getCafe();
		JPanel panel1 = new JPanel();

		JLabel name = new JLabel("Cafe Name: ");
		JLabel c_name = new JLabel(c.getName());
		panel1.add(name);
		panel1.add(c_name);
		
		JPanel panel2 = new JPanel();
		
		JLabel label = new JLabel("Seats/Total: ");
		label.setFont(new Font("Sans",Font.PLAIN,50));
		JLabel seats = new JLabel(c.getSeats() +"/"+ c.getTotal());
		seats.setFont(new Font("Sans",Font.PLAIN,50));
		panel2.add(label);
		panel2.add(seats);

	
		//frame.getContentPane().add(BorderLayout.NORTH, panel1);
		frame.getContentPane().add(BorderLayout.CENTER, panel2);
		frame.setVisible(true);
		frame.setSize(500, 400);
		
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		}
		
		
		
	}


}

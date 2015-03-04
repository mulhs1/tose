package tose.gui;

import java.awt.Container;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.GroupLayout;
import javax.swing.JButton;
import javax.swing.JComponent;
import javax.swing.JFrame;

public class SearchGUI extends JFrame {

	private static final long serialVersionUID = 6089813469504709706L;

	public SearchGUI() {
		this.initUI();
	}
	
	private void initUI() {
		
		// TODO Auslagern in Search-Button Klasse
		JButton searchButton = new JButton("Suchen");

        searchButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent event) {
                // TODO Show results-table
            }
        });

        // Add Search button
        this.createLayout(searchButton);
		
		// Set GUI Defaults
		setTitle("Search Flicker");
        setSize(300, 200);
		setLocationRelativeTo(null);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
	}
	
	private void createLayout(JComponent... arg) {
		Container pane = getContentPane();
        GroupLayout gl = new GroupLayout(pane);
        pane.setLayout(gl);

        gl.setAutoCreateContainerGaps(true);

        gl.setHorizontalGroup(gl.createSequentialGroup()
                .addComponent(arg[0])
        );

        gl.setVerticalGroup(gl.createSequentialGroup()
                .addComponent(arg[0])
        );
	}
}
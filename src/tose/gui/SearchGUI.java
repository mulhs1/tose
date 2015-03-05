package tose.gui;

import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.FocusEvent;
import java.awt.event.FocusListener;
import java.util.List;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

import model.SearchResultMetadataDTO;
import util.SearchHelper;
import util.ToseConstants;
import api.Api;

public class SearchGUI extends JFrame {

	private static final long serialVersionUID = 6089813469504709706L;

	private JButton searchButton;
	private JTextField input;
	private JTable resultsTable = new JTable();

	public SearchGUI() {
		this.initUI();
	}

	private void initUI() {
		searchButton = new JButton("Suchen");
		input = new JTextField(ToseConstants.SEARCH_INPUT_PLACEHOLDER);

		input.addFocusListener(new FocusListener() {

			@Override
			public void focusLost(FocusEvent e) {
				JTextField f = (JTextField) e.getComponent();
				f.setText(ToseConstants.SEARCH_INPUT_PLACEHOLDER);
			}

			@Override
			public void focusGained(FocusEvent e) {
				JTextField f = (JTextField) e.getComponent();
				f.setText("");
			}
		});

		searchButton.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent event) {
				fillResultTable(Api.mockSearch());
			}
		});

		// Add Search button
		GridLayout gridLayout = new GridLayout(0, 1);
		gridLayout.setVgap(10);
		gridLayout.setHgap(10);
		this.setLayout(gridLayout);

		this.add(input);
		this.add(searchButton);
		this.add(new JScrollPane(resultsTable));

		// Set GUI Defaults
		setTitle("Search Flicker");
		setSize(800, 400);
		setLocationRelativeTo(null);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
	}

	private void fillResultTable(List<SearchResultMetadataDTO> mockSearch) {
		DefaultTableModel model = new DefaultTableModel();
		model.setColumnIdentifiers(ToseConstants.SEARCH_RESULT_COLUMN_NAMES);

		resultsTable.setModel(model);

		for (SearchResultMetadataDTO item : mockSearch) {

			Object[] o = new Object[5];
			o[0] = item.getPhotoLink();
			o[1] = item.getText();
			o[2] = item.getLikes();
			o[3] = item.getAuthorLink();
			o[4] = SearchHelper.formatTags(item.getTags());
			model.addRow(o);
		}

		this.revalidate();
		this.repaint();
	}
}
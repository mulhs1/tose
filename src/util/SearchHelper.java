package util;

import java.util.List;

import org.apache.commons.lang3.StringUtils;

public class SearchHelper {

	private SearchHelper() {
	}

	public static String formatTags(List<String> tags) {
		return StringUtils.join(tags, ", ");
	}
}
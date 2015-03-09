package model;

import java.util.List;

public class SearchResultMetadataDTO {
	private String photoLink;
	private String text;
	private int likes;
	private String authorLink;
	private List<String> tags;

	public SearchResultMetadataDTO() {
	}

	public SearchResultMetadataDTO(String photoLink, String text, int likes,
			String authorLink, List<String> tags) {
		super();
		this.photoLink = photoLink;
		this.text = text;
		this.likes = likes;
		this.authorLink = authorLink;
		this.tags = tags;
	}

	public String getPhotoLink() {
		return photoLink;
	}

	public void setPhotoLink(String photoLink) {
		this.photoLink = photoLink;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public int getLikes() {
		return likes;
	}

	public void setLikes(int likes) {
		this.likes = likes;
	}

	public String getAuthorLink() {
		return authorLink;
	}

	public void setAuthorLink(String authorLink) {
		this.authorLink = authorLink;
	}

	public List<String> getTags() {
		return tags;
	}

	public void setTags(List<String> tags) {
		this.tags = tags;
	}
}

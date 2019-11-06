package com.example.jpa.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "posts")
public class Post extends AuditModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "postSeq")
	@SequenceGenerator(name = "postSeq", sequenceName = "postSeq", allocationSize = 1, initialValue = 1)
	private Long id;
	
	@NotNull
	@Size(max = 100)
	@Column(unique =  true)
	private String title;
	
	@NotNull
	@Size(max = 250)
	private String description;
	
	@NotNull
	@Lob
	private String content;
	
	public Post() {
		
	}
	
	public Post(String title, String description, String content) {
		this.title = title;
		this.description = description;
		this.content = content;
	}

	public Post(Long id, String title, String description, String content) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.content = content;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Override
	public String toString() {
		return "Post [id=" + id + ", title=" + title + ", description=" + description + ", content=" + content + "]";
	}
	
}

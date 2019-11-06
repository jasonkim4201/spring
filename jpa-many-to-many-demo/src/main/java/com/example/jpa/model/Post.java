package com.example.jpa.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "posts")
public class Post {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "postSequence")
	@SequenceGenerator(name = "postSequence", sequenceName = "postSequence", allocationSize = 1)
	private Long id;
	
	@NotNull
	@Size(max = 100)
	@Column(unique = true)
	private String title;
	
	@NotNull
	@Size(max = 250)
	private String description;
	
	@NotNull
	@Lob
	private String content;
	
	@NotNull
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "posted_at")
	private Date postedAt = new Date();
	
	@NotNull
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "last_updated_at")
	private Date lastUpdateAt = new Date();
	
	@ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
	@JoinTable(name = "post_tags", joinColumns = {@JoinColumn(name = "post_id") },
									inverseJoinColumns = { @JoinColumn (name = "tag_id") })
	private Set<Tag> tags = new HashSet<>();
	
	public Post() {
		
	}

	public Post(String title, String description, String content) {
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

	public Date getPostedAt() {
		return postedAt;
	}

	public void setPostedAt(Date postedAt) {
		this.postedAt = postedAt;
	}

	public Date getLastUpdateAt() {
		return lastUpdateAt;
	}

	public void setLastUpdateAt(Date lastUpdateAt) {
		this.lastUpdateAt = lastUpdateAt;
	}

	public Set<Tag> getTags() {
		return tags;
	}

	public void setTags(Set<Tag> tags) {
		this.tags = tags;
	}

	@Override
	public String toString() {
		return "Post [id=" + id + ", title=" + title + ", description=" + description + ", content=" + content
				+ ", postedAt=" + postedAt + ", lastUpdateAt=" + lastUpdateAt + ", tags=" + tags + "]";
	}
	
}

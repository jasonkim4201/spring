package com.example.jpa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.jpa.model.Post;
import com.example.jpa.model.Tag;
import com.example.jpa.repository.PostRepository;
import com.example.jpa.repository.TagRepository;

@SpringBootApplication
public class JpaOneToManyDemoApplication implements CommandLineRunner{

	private PostRepository postRepository;
	private TagRepository tagRepository;
	
	public JpaOneToManyDemoApplication() {
		
	}
	
	@Autowired
	public JpaOneToManyDemoApplication(PostRepository postRepository, TagRepository tagRepository) {
		this.postRepository = postRepository;
		this.tagRepository = tagRepository;
	}
	
	public static void main(String[] args) {
		SpringApplication.run(JpaOneToManyDemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		deleteStuff();
		createStuff();
		displayStuff();
	}
	
	private void deleteStuff() {
		postRepository.deleteAll();
		tagRepository.deleteAll();;
	}

	private void createStuff() {
		Post post = new Post("many to many with spring boot", "learning to map this", "this content shows it works");
		Tag tag = new Tag("Spring boot");
		Tag tag2 = new Tag("Hibernate");
		Tag tag3 = new Tag("Java");
		post.getTags().add(tag);
		post.getTags().add(tag2);
		post.getTags().add(tag3);
		tag.getPosts().add(post);
		tag2.getPosts().add(post);
		tag3.getPosts().add(post);
		postRepository.save(post);
	}
	
	private void displayStuff() {
		System.out.println("stuff");
	}
	
}
	
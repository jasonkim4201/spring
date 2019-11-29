package com.example.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.model.Todo;

@Service
public class TodoHardCodedService {
	// mock db

	private static List<Todo> todos = new ArrayList<>();
	private static long idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "tester", "learn to dance", new Date(), false));
		todos.add(new Todo(++idCounter, "tester", "learn to code", new Date(), false));
		todos.add(new Todo(++idCounter, "tester", "learn react", new Date(), false));
		todos.add(new Todo(++idCounter, "jasonkim", "learn cooking", new Date(), false));
		todos.add(new Todo(++idCounter, "jasonkim", "learn piano", new Date(), false));
	}
	
	public List<Todo> findAll() {
		// todos.forEach(System.out::println);
		return todos;
	}
	
	// delete by id needs to have .equals() overridden
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		
		if (todo == null) {
			return null;
		}
		
		if (todos.remove(todo)) {
			return todo;
		}
		return null;
	}

	public Todo findById(long id) {
		for (Todo todo: todos) {
			if (todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
	
	
	
}
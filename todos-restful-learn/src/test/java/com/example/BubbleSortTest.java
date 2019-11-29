package com.example;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

class BubbleSortTest {

	static int[] array = {123, 2, 3, -234, 53, 24, 88, 784, 41114, 74, -5888};
	
	@BeforeAll()
	static void sort() {
		BubbleSort bubbleSort = new BubbleSort();
		bubbleSort.bubble(array);
	}


	@Test
	void bubbleTest1() {
		assertEquals(-5888, array[0]);
	
	}

	@Test
	void bubbleTest2() {
		assertEquals(-234, array[1]);
	
	}
	
	@Test
	void bubbleTest3() {
		assertEquals(784, array[array.length - 2]);
	
	}
	
	@Test
	void bubbleTest4() {
		assertEquals(41114, array[array.length -1]);
	
	}
	
	
}

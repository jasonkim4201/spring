package com.example.jpa;

public class TestConnection {
	public static void main(String[] args) {
		String url = "jdbc:oracle:thin:@trainingdb.chbgixfeoffe.us-east-2.rds.amazonaws.com:1521:orcl";
		String user = "jpa_one_to_many_demo";
		String pw = "p4ssw0rd";
		System.out.println("success");
		
		Long number = 123123432423L;
		String test = String.format("This is a test to see the number: %d", number);
		System.out.println(test);
		try {
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
}

package com.tutorpro;

import com.tutorpro.model.*;
import com.tutorpro.services.AssessmentService;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;


@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@SpringBootTest
class AssessmentServiceTests {
	Assessment assessment = new Assessment();
	Student student = new Student();
	Question question = new Question();

	@Autowired
	private AssessmentService assessmentService;

	@Autowired
	private StudentRepository studentRepository;

	final int testStudentId = 0;
	final String testSubject = "Unit Test Assessment Subject";
	final String testName = "Unit Test Assessment Name";
	final String testDescription = "Unit Test Assessment Description";
	final String questionSubject = "Unit Test";
	final String questionText = "Unit Test Question";
	final String questionAnswer= "Unit Test Answer";
	final String incorrectQuestion1 = "Unit Test Incorrect 1";
	final String incorrectQuestion2 = "Unit Test Incorrect 2";
	final String incorrectQuestion3 = "Unit Test Incorrect 3";
	final String questionReference = "Unit Test Reference";
	ArrayList<Question> questionsArray = new ArrayList();

	@Test
	@Order(1)
	void testCreatingAssessment() {
		assessment.setAssessmentID(assessmentService.createAssessmentId());
		student.setUserID(testStudentId);
		student.setStudentID(testStudentId);
		studentRepository.save(student);
		assessment.setStudentID(student.getStudentID());
		assessment.setSubject(testSubject);
		assessment.setName(testName);
		assessment.setDescription(testDescription);
		question.setQuestionId(assessmentService.createQuestionId());
		question.setGradeLevel(10);
		question.setSubject(questionSubject);
		question.setQuestion(questionText);
		question.setAnswer(questionAnswer);
		question.setIncorrectAnswer1(incorrectQuestion1);
		question.setIncorrectAnswer2(incorrectQuestion2);
		question.setIncorrectAnswer3(incorrectQuestion3);
		question.setReference(questionReference);
		questionsArray.add(question);
		Assertions.assertEquals("Assessment created successfully", assessmentService.createAssessment(assessment, questionsArray));
	}

	@Test
	@Order(2)
	void testGettingStudentAssessments() {
		List<Assessment> studentAssessments = assessmentService.getStudentAssessments(assessment.getStudentID());
		Assertions.assertEquals(assessment.getStudentID(), studentAssessments.get(0).getStudentID());
		Assertions.assertEquals(assessment.getAssessmentID(), studentAssessments.get(0).getAssessmentID());
		Assertions.assertEquals(testSubject, studentAssessments.get(0).getSubject());
		Assertions.assertEquals(testName, studentAssessments.get(0).getName());
		Assertions.assertEquals(testDescription, studentAssessments.get(0).getDescription());
	}

	@Test
	@Order(3)
	void testGettingAssessmentQuestions() {
		List<Question> assessmentQuestion = assessmentService.getAssessmentQuestions(assessment.getAssessmentID());
		Assertions.assertEquals(question.getQuestion(), assessmentQuestion.get(0).getQuestion());
		Assertions.assertEquals(question.getAnswer(), assessmentQuestion.get(0).getAnswer());
		Assertions.assertEquals(question.getIncorrectAnswer1(), assessmentQuestion.get(0).getIncorrectAnswer1());
		Assertions.assertEquals(question.getIncorrectAnswer2(), assessmentQuestion.get(0).getIncorrectAnswer2());
		Assertions.assertEquals(question.getIncorrectAnswer3(), assessmentQuestion.get(0).getIncorrectAnswer3());
		Assertions.assertEquals(question.getGradeLevel(), assessmentQuestion.get(0).getGradeLevel());
		Assertions.assertEquals(question.getSubject(), assessmentQuestion.get(0).getSubject());
		Assertions.assertEquals(question.getReference(), assessmentQuestion.get(0).getReference());
	}

	@AfterAll
	void deleteAssessment() {
		assessmentService.deleteAssessment(assessment.getAssessmentID());
		studentRepository.deleteById(student.getStudentID());
		assessmentService.deleteQuestion(question.getQuestionId());
		assessmentService.deleteAssessmentToQuestion();
	}
}

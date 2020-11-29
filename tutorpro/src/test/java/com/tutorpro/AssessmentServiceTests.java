package com.tutorpro;

import com.tutorpro.model.*;
import com.tutorpro.services.AssessmentService;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;


@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@SpringBootTest
class AssessmentServiceTests {
	Assessment assessment = new Assessment();
	Student student = new Student();

	@Autowired
	private AssessmentService assessmentService;

	@Autowired
	private StudentRepository studentRepository;

	final int testStudentId = 0;
	final String testSubject = "Unit Test Assessment Subject";
	final String testName = "Unit Test Assessment Name";
	final String testDescription = "Unit Test Assessment Description";

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
		Assertions.assertEquals("Assessment created successfully", assessmentService.createAssessment(assessment));
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

	@AfterAll
	void deleteAssessment() {
		assessmentService.deleteAssessment(assessment.getAssessmentID());
		studentRepository.deleteById(student.getStudentID());
	}
}

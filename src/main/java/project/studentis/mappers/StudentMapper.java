package project.studentis.mappers;

import project.studentis.dtos.StudentDto;
import project.studentis.entities.Student;

public class StudentMapper {
    public static StudentDto mapToStudentDto(Student student) {
        return new StudentDto(
                student.getId(),
                student.getName(),
                student.getEmail(),
                student.getDepartment().getId(),
                student.getDob(),
                student.getGpa()
        );
    }

    public static Student mapToStudent(StudentDto studentDto) {
        Student student = new Student();
        student.setId(studentDto.getId());
        student.setName(studentDto.getName());
        student.setEmail(studentDto.getEmail());
        student.setDob(studentDto.getDob());
        student.setGpa(studentDto.getGpa());

        return student;
    }
}
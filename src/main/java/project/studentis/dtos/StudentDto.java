package project.studentis.dtos;

import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StudentDto {
    private Long id;

    private String name;

    private String email;

    private Long departmentId;

    private Date dob;

    private Double gpa;
}

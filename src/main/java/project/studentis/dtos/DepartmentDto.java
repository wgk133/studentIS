package project.studentis.dtos;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class DepartmentDto {
    private Long id;

    private String departmentName;

    private String departmentDescription;

    private Date createdOn;
}

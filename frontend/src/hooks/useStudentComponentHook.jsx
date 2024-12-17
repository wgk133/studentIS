import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { listDepartments } from "../services/DepartmentService";
import {
  createStudent,
  getStudentById,
  updateStudent,
} from "../services/StudentService";

const useStudentComponentHook = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gpa, setGpa] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [departments, setDepartments] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchDepartment = async () => {
    const response = await listDepartments();
    setDepartments(response.data);
  };

  useEffect(() => {
    fetchDepartment();
  }, []);

  const saveOrUpdateStudent = async (e) => {
    e.preventDefault();

    const student = { name, email, departmentId, dob, gpa };

    if (name && email && departmentId && dob && gpa) {
      try {
        if (id) {
          await updateStudent(id, student);
          toast.info("Student updated successfully!");
          navigate("/");
        } else {
          await createStudent(student);
          toast.success("Student added successfully!");
          navigate("/");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
        console.error("Error saving/updating student:", error);
      }
    } else {
      toast.error("Please fill in all the fields!");
    }
  };

  const getStudentData = async (studentId) => {
    const response = await getStudentById(studentId);
    const student = response.data;
    setName(student.name);
    setEmail(student.email);
    setDob(student.dob);
    setGpa(student.gpa);
    setDepartmentId(student.departmentId);
  };

  useEffect(() => {
    if (id) {
      setTitle("Update Student");
      getStudentData(id);
    } else {
      setTitle("Add Student");
    }
  }, [id]);

  return {
    name,
    setName,
    email,
    setEmail,
    dob,
    setDob,
    gpa,
    setGpa,
    departmentId,
    setDepartmentId,
    departments,
    saveOrUpdateStudent,
    title,
    setTitle,
  };
};

export default useStudentComponentHook;

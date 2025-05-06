export function saveStudentData(student) {
    localStorage.setItem(student.enrollment, JSON.stringify(student));
  }
  
  export function getStudentData(enrollment) {
    const data = localStorage.getItem(enrollment);
    return data ? JSON.parse(data) : null;
  }
  
  export function updateStudentStatus(enrollment, field, value) {
    let student = getStudentData(enrollment);
    if (student) {
      student[field] = value;
      if (field !== "notifications") {
        student.notifications = student.notifications || [];
        student.notifications.unshift(`${field} updated: ${value}`);
      }
      saveStudentData(student);
    }
  }
  
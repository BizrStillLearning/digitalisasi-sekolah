<!-- DataIndukSiswa.vue -->
<template>
    <div>
      <h1 class="text-2xl font-bold mb-4">Data Induk Siswa</h1>
      
      <!-- Student Form -->
      <StudentForm @submit="handleFormSubmit" :student="selectedStudent" :isEdit="isEdit" />
      
      <!-- Student Table -->
      <StudentTable :students="students" @edit="editStudent" @delete="deleteStudent" />
    </div>
  </template>
  
  <script>
  import StudentTable from '../components/StudentTable.vue';
  import StudentForm from '../components/StudentForm.vue';
  
  export default {
    components: {
      StudentTable,
      StudentForm
    },
    data() {
      return {
        students: [
          { nis: '123456', name: 'John Doe', class: '10A', major: 'Science', status: 'Active' }
          // Data siswa lainnya
        ],
        selectedStudent: null,
        isEdit: false
      };
    },
    methods: {
      handleFormSubmit(student) {
        if (this.isEdit) {
          // Update existing student
          const index = this.students.findIndex(s => s.nis === student.nis);
          if (index !== -1) {
            this.students.splice(index, 1, student);
          }
        } else {
          // Add new student
          this.students.push(student);
        }
        // Reset form and state
        this.selectedStudent = null;
        this.isEdit = false;
      },
      editStudent(student) {
        this.selectedStudent = student;
        this.isEdit = true;
      },
      deleteStudent(nis) {
        this.students = this.students.filter(student => student.nis !== nis);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Optional: Add specific styles for this view */
  </style>
  
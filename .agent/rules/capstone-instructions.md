---
trigger: always_on
---

# ANTIGRAVITY_INSTRUCTIONS.md

## Project: Learning Management System (LMS) with Similarity Checker for SHS

> **Research / Capstone Topic:** A **Learning Management System** that supports **Course Outline**, **OBTLP Mapping**, **Automated Grading**, and a **Similarity Checker** for student submissions (essays/open-ended tasks).  
> **Primary Users:** Admin, Teacher, Student  
> **Goal:** Provide a focused LMS for SHS that improves learning workflow and reduces plagiarism risks **without expanding to full “enterprise LMS” scope**.

---

## 1) Scope Boundary (STRICT)

### ✅ IN SCOPE

- User roles: **Admin / Teacher / Student**
- **Class/Section management** (create class, enroll students)
- **Course Outline** module (teacher creates, students view)
- **OBTLP mapping** (teacher maps outcomes ↔ lessons/activities)
- **Learning materials** posting (files/links, announcements)
- **Activities/Assignments** (especially open-ended tasks)
- **Student submissions** (upload/paste text)
- **Similarity checker** (compare against internal submissions corpus)
- **Automated grading** (grade computation + gradebook + export)

### ❌ OUT OF SCOPE (DO NOT BUILD)

- Payments/billing
- Enrollment/registrar-level system
- Attendance w/ QR/biometrics
- Video conferencing integration
- Parent portal
- Chat/messenger clone
- AI tutoring/recommendation engine
- Public web forum

---

## 2) System Features (Must-Have)

### A. Accounts & Access

- Login / Logout
- Forgot password
- Role-based access control (RBAC)
- Profile settings + change password

### B. Admin (Setup Only)

- Manage users (teachers/students)
- Manage classes/sections
- Enroll/import students into classes (CSV optional)
- Minimal settings (term/school year optional)

### C. Teacher (Core Modules)

- Create/edit **Course Outline**
- Create/edit **OBTLP Mapping**
- Post materials (files/links)
- Create activities/assignments (title, instructions, due date, points/rubric)
- View submissions inbox
- Run similarity check on submission(s)
- Grade submissions (rubric/manual score) + auto compute totals
- Gradebook + export (CSV/PDF)

### D. Student (Core Modules)

- Join/view classes
- View course outline + materials
- View activities + due dates
- Submit work (upload/paste text)
- View submission status/history
- View grades + feedback (limited similarity feedback optional)

---

## 3) Required Pages (Screens)

### Shared / Public

- Landing (optional)
- Login
- Forgot/Reset Password
- Profile

### Admin

- Admin Dashboard
- Users (Teachers / Students)
- Classes / Sections
- Enrollment / Import
- Settings (minimal)

### Teacher

- Teacher Dashboard (My Classes, flagged similarity, pending submissions)
- Class Home (tabs/modules)
- Course Outline (Create/Edit/View)
- OBTLP Mapping
- Materials
- Activities / Assignments
- Submissions Inbox
- Similarity Report (highlight + score + matches)
- Grading
- Gradebook
- Reports / Export

### Student

- Student Dashboard (My Classes, upcoming deadlines)
- Class Home
- Course Outline (View)
- Materials
- Activities
- Submit Activity
- My Submissions
- Grades
- (Optional) Similarity Feedback (View-only)

---

## 4) Sidebar Navigation (Role-Based)

### Common

- Dashboard
- My Classes
- Profile
- Logout

### Teacher (inside a class)

- Class Home
- Course Outline
- OBTLP Mapping
- Materials
- Activities / Assignments
- Submissions Inbox
- Similarity Reports
- Gradebook
- Reports / Export

### Student (inside a class)

- Class Home
- Course Outline
- Materials
- Activities
- Submit / My Submissions
- Grades

### Admin

- Admin Dashboard
- Users
- Classes / Sections
- Enrollment / Import
- Settings

---

## 5) Similarity Checker Rules (Research-Centered)

### Purpose

Detect similarity between a student’s submission and **internal submission corpus** (same class/subject/term) to support academic integrity.

### Allowed Comparison Sources (Safer + within scope)

- Compare against:
  - other students’ past submissions in the same class
  - previous submissions by the same student (optional)
- Do **NOT** require external web crawling or plagiarism databases (out of scope).

### Output Requirements

- Similarity score: **0–100%**
- Matched sources list (submission IDs, student anonymized in teacher view if required)
- Highlight matched text segments
- Teacher remarks/decision field (e.g., “Needs review”, “Accepted”, “Resubmit”)

### Recommended Method (Simple + Defensible)

Pick **one** approach and document it clearly:

- **Option A (Fast & Simple):** N-gram (e.g., 5-grams) + Jaccard similarity
- **Option B (More Robust):** TF-IDF cosine similarity (text vectorization)
- Optional preprocessing:
  - lowercase, remove punctuation
  - collapse whitespace
  - stopword removal (optional)
  - stemming/lemmatization (optional)

> Keep the algorithm explainable for defense and within your timeline.

---

## 6) Automated Grading Rules

- Activities have:
  - max points
  - rubric criteria (optional)
  - due date
- Gradebook should:
  - compute totals automatically
  - support grading breakdown per activity type (optional)
- Students can:
  - view grades + teacher remarks
- Exports:
  - CSV for gradebook
  - PDF summary (optional)

---

## 7) Core Data Entities (Minimum Viable)

- User(id, role, name, email, password_hash)
- Class(id, name, subject, grade_level, section, teacher_id, term)
- Enrollment(id, class_id, student_id)
- CourseOutline(id, class_id, content_json/text, updated_at)
- OBTLPMap(id, class_id, mapping_json, updated_at)
- Material(id, class_id, title, type[file/link], url/path, created_at)
- Activity(id, class_id, title, instructions, due_date, points, rubric_json, type)
- Submission(id, activity_id, student_id, text_content, file_path, created_at, status)
- SimilarityResult(id, submission_id, score, matches_json, created_at)
- Grade(id, submission_id, score, feedback, graded_by, graded_at)

---

## 8) User Stories (Capstone-Friendly)

### Teacher

- As a teacher, I can create a course outline so students understand the plan.
- As a teacher, I can map activities to learning outcomes (OBTLP).
- As a teacher, I can review submissions and run similarity checks.
- As a teacher, I can grade submissions and auto compute final grades.

### Student

- As a student, I can view materials and activities for my class.
- As a student, I can submit my output and see submission status.
- As a student, I can view my grades and teacher feedback.

### Admin

- As an admin, I can manage users and class sections.

---

## 9) Non-Functional Requirements

- Security: password hashing, role-based permissions
- Privacy: limit who can see similarity matches (teacher only by default)
- Performance: similarity checking should handle typical SHS class sizes
- Reliability: prevent data loss, basic backups (if applicable)
- Usability: simple navigation, minimal clicks

---

## 10) Deliverables Checklist (What to Show in Defense)

- System Flow: Login → Class → Activity → Submission → Similarity → Gradebook
- ERD / Database schema (based on entities above)
- UI screenshots (pages listed above)
- Similarity algorithm explanation + sample output
- Grade computation demo + export
- Testing: functional tests (login, submit, similarity run, grading)

---

## 11) Build Priority (Recommended Order)

1. Auth + Roles
2. Classes + Enrollment
3. Activities + Submissions
4. Similarity Checker
5. Grading + Gradebook
6. Course Outline + OBTLP
7. Reports/Export + polish

---

## 12) Guardrails for the Team

- If a feature does not support **outline, OBTLP, submissions, similarity, or grading**, reject it.
- Keep UI consistent: one global sidebar + class submenu.
- Prefer simple, defendable choices over complex integrations.

---

End of instructions.

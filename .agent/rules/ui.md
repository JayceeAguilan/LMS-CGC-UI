---
trigger: always_on
---

# ANTIGRAVITY_UI_INSTRUCTIONS.md

## UI-Only Build Guide — LMS with Similarity Checker (SHS Capstone)

> **Purpose (UI only):** Build the complete **front-end interface** for the LMS capstone focused on:
> **Course Outline + OBTLP Mapping + Activities/Submissions + Similarity Report + Gradebook**
> (No backend logic required yet; use mock data + placeholder states.)

---

## 1) UI Scope Boundary (STRICT)

### ✅ Build these UI modules

- Auth screens (login/reset)
- Role-based dashboards (Admin / Teacher / Student)
- Class workspace UI
- Course Outline UI
- OBTLP Mapping UI
- Materials UI
- Activities UI
- Submission UI (upload/paste)
- Similarity Report UI (results + highlight preview)
- Grading UI + Gradebook UI
- Reports/Export UI (buttons + modal)

### ❌ Do NOT add these pages/components

- Payments, registrar enrollment system, attendance QR, chat, video calls, parent portal, forums, AI tutor.

---

## 2) Layout Rules (Global)

### A. App Shell

- **Topbar**: App name + current role + profile dropdown
- **Left Sidebar**: Primary navigation (role-based)
- **Main Content Area**: page content with breadcrumbs

### B. Navigation Behavior

- Sidebar supports:
  - Collapse/expand
  - Active state highlight
  - “My Classes” is always accessible
- Class pages must show:
  - **Class Switcher** (dropdown) OR “Back to My Classes”

### C. Responsiveness

- Desktop-first (capstone defense), but must work on mobile:
  - Sidebar becomes drawer
  - Tables become stacked cards

---

## 3) Role-Based Sidebar Contents (UI)

### Common (all roles)

- Dashboard
- My Classes
- Profile
- Logout

### Admin

- Admin Dashboard
- Users
- Classes / Sections
- Enrollment / Import
- Settings (Minimal)

### Teacher (Global)

- Teacher Dashboard
- My Classes
- Flagged Similarity (shortcut)
- Reports / Export (optional shortcut)

### Teacher (Inside a Selected Class)

- Class Home
- Course Outline
- OBTLP Mapping
- Materials
- Activities / Assignments
- Submissions Inbox
- Similarity Reports
- Gradebook

### Student (Global)

- Student Dashboard
- My Classes

### Student (Inside a Selected Class)

- Class Home
- Course Outline
- Materials
- Activities
- Submit / My Submissions
- Grades

---

## 4) Required Pages (UI Screens Checklist)

### A. Auth (Shared)

1. Login
2. Forgot Password
3. Reset Password
4. Profile (View/Edit + Change Password)

### B. Admin Screens

1. Admin Dashboard (cards + quick counts)
2. Users List (tabs: Teachers/Students)
3. User Form (Add/Edit)
4. Classes/Sections List
5. Class Form (Create/Edit)
6. Enrollment (Add students / Import CSV modal)
7. Settings (minimal toggle/select)

### C. Teacher Screens

1. Teacher Dashboard
   - Cards: My Classes, Pending Submissions, Flagged Similarity
2. My Classes (grid cards)
3. Class Home (tabs/summary)
4. Course Outline (Editor + Preview)
5. OBTLP Mapping (matrix/table UI)
6. Materials (list + upload modal)
7. Activities/Assignments (list + create form)
8. Activity Details
   - Instructions, due date, rubric preview, submissions count
9. Submissions Inbox
   - filter: submitted/missing/late
10. Submission Viewer

- student info, submission text/file preview, actions

11. Similarity Report

- score badge, matched sources list, highlight preview panel

12. Grading Screen

- rubric scoring UI + final score + feedback box

13. Gradebook

- table + computed totals + export buttons

14. Reports/Export

- buttons only + download modal (UI placeholder)

### D. Student Screens

1. Student Dashboard
   - cards: My Classes, Upcoming Deadlines
2. My Classes (join/view)
3. Class Home
4. Course Outline (read-only)
5. Materials (read-only)
6. Activities (list with due labels)
7. Activity Details (instructions + submit CTA)
8. Submit Activity
   - upload file + paste text option
   - submit button + confirmation modal
9. My Submissions
   - status chips (submitted/late/returned)
10. Grades

- list per activity + breakdown

---

## 5) UI Components (Reusable)

### Navigation + Structure

- Sidebar (collapsible)
- Topbar + Profile dropdown
- Breadcrumbs
- Tabs (inside class pages)
- Page header with actions (Add, Export, Filter)

### Data Display

- Cards (class cards, stats)
- Tables (gradebook, user lists, submissions list)
- Empty state component (no classes, no submissions)
- Loading skeleton (UI-only)

### Actions & Inputs

- Modal: Add/Edit user, Add/Edit class, Upload material, Confirm submit
- Form components: input, select, date picker, file upload, textarea
- Search + filter bar (for classes, activities, submissions)
- Toast notifications (success/error placeholders)

### Badges/Chips (important)

- Role badge (Admin/Teacher/Student)
- Submission status: Missing / Submitted / Late / Graded
- Similarity level: Low / Medium / High (UI labels only)

---

## 6) Similarity Report UI Spec (Front-End Only)

### Required Visual Blocks

- **Similarity Score Card**
  - large percentage + label (e.g., “24% Similarity”)
- **Match Sources List**
  - each item: source title + date + “view match” button
- **Text Viewer Split Panel**
  - left: student submission preview
  - right: matched text preview
- **Highlighted Matches**
  - UI highlight styling (no algorithm needed)

### Actions (UI only)

- “Flag for review”
- “Add teacher remark”
- “Return for resubmission” (button only)

---

## 7) Gradebook UI Spec

### Must show:

- Rows: students
- Columns: activities + total + computed final grade
- Export buttons: CSV / PDF (UI only)
- Filters:
  - show missing only
  - show graded only

### Grading Screen UI

- Rubric criteria list (if enabled)
- Score input + auto total display (front-end computed placeholder)
- Teacher feedback textarea
- Save draft / Publish grade buttons

---

## 8) Visual Style Rules (Keep it Capstone-Friendly)

- Clean, minimal, school-appropriate
- Strong readability (large headings, clear spacing)
- Avoid heavy animations
- Use consistent:
  - 8px spacing system
  - button styles (primary/secondary/danger)
  - table styles

---

## 9) UI Data Mocking Rules

- Use mock JSON for:
  - classes, activities, students, submissions, similarity results, grades
- Every page must render:
  - Normal state
  - Empty state
  - Loading state
  - Error state (simple banner)

---

## 10) Acceptance Criteria (UI Done = Pass)

- Role-based sidebar works (Admin/Teacher/Student)
- All required pages exist and are navigable
- Class workflow is visually complete:
  - Teacher: Activity → Submissions → Similarity → Gradebook
  - Student: Activities → Submit → Grades
- Screens look consistent and ready for defense screenshots

---

End of UI-only instructions.

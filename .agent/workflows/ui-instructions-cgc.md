---
description: UI-only workflow for the LMS with Similarity Checker (Citi Global College SHS): build role-based layouts and screens for Course Outline, OBTLP mapping, activities/submissions, similarity report UI, and gradebook—using mock data only.
---

# UI WORKFLOW — LMS-CGC (UI ONLY)

**Project:** Learning Management System with Similarity Checker for Citi Global College Senior High School  
**Focus Modules:** Course Outline, OBTLP Mapping, Automated Grading, Similarity Checker  
**Goal (UI):** Build a complete, navigable front-end that is ready for screenshots and defense. No backend required yet.

---

## 1) UI SCOPE (STRICT)

### ✅ IN-SCOPE UI

- Auth screens (login/reset)
- Role-based dashboards (Admin/Teacher/Student)
- Class workspace UI
- Course Outline UI (create/edit/view)
- OBTLP mapping UI (table/matrix)
- Materials UI (post/view)
- Activities UI (create/view)
- Submissions UI (upload/paste + status)
- Similarity report UI (score + highlights + matched sources list)
- Grading UI + Gradebook UI (computed totals UI only)
- Reports/Export UI (buttons + modal only)

### ❌ OUT OF SCOPE UI (DO NOT CREATE)

- Payments/billing
- Registrar-grade enrollment system
- Attendance QR/biometric
- Chat/messenger
- Video calls / conferencing integration
- Parent portal
- Forums/community feed
- AI tutor/recommendations

If a UI page doesn’t support **outline, OBTLP, submissions, similarity, or grading**, reject it.

---

## 2) APP SHELL (GLOBAL LAYOUT)

### Layout

- **Topbar:** App name + current role badge + class selector (when inside class) + profile menu
- **Sidebar (left):** role-based navigation, collapsible
- **Main area:** page header + content; show breadcrumbs on class pages

### Responsive

- Desktop-first (defense), mobile-ready:
  - Sidebar → drawer on small screens
  - Tables → stacked cards

---

## 3) ROLE-BASED SIDEBAR (CONTENTS)

### Common (all roles)

- Dashboard
- My Classes
- Profile
- Logout

### Admin

- Admin Dashboard
- Users (Teachers/Students)
- Classes / Sections
- Enrollment / Import
- Settings (Minimal)

### Teacher (Global)

- Teacher Dashboard
- My Classes
- Flagged Similarity (shortcut)

### Teacher (Inside a Class)

- Class Home
- Course Outline
- OBTLP Mapping
- Materials
- Activities / Assignments
- Submissions Inbox
- Similarity Reports
- Gradebook
- Reports / Export (optional shortcut)

### Student (Global)

- Student Dashboard
- My Classes

### Student (Inside a Class)

- Class Home
- Course Outline (View)
- Materials
- Activities
- Submit / My Submissions
- Grades

---

## 4) REQUIRED UI PAGES (CHECKLIST)

### Auth (Shared)

- Login
- Forgot Password
- Reset Password
- Profile (View/Edit + Change Password)

### Admin

- Admin Dashboard (stats cards)
- Users List + Add/Edit User Form
- Classes List + Add/Edit Class Form
- Enrollment Page (add students + import modal)
- Settings (minimal)

### Teacher

- Teacher Dashboard (cards: classes, pending, flagged)
- My Classes (grid/cards)
- Class Home (summary + quick actions)
- Course Outline (Editor + Preview)
- OBTLP Mapping (matrix/table)
- Materials (list + upload modal)
- Activities (list + create form)
- Activity Details (instructions + rubric preview + submissions count)
- Submissions Inbox (filters: submitted/missing/late)
- Submission Viewer (preview + actions)
- Similarity Report (score + match list + highlight UI)
- Grading Screen (rubric + score + feedback)
- Gradebook (table + totals + export buttons)
- Reports/Export (UI buttons + modal only)

### Student

- Student Dashboard (upcoming deadlines)
- My Classes
- Class Home
- Course Outline (read-only)
- Materials (read-only)
- Activities List
- Activity Details + Submit CTA
- Submit Activity (upload + paste text)
- My Submissions (status chips)
- Grades (list + breakdown)

---

## 5) UI COMPONENTS (REUSABLE)

- Sidebar (collapsible) + active states
- Topbar + profile dropdown
- Breadcrumbs (Class > Module > Page)
- Tabs (within Class Home)
- Search + filter bar (activities/submissions/users)
- Cards (stats, class cards)
- Table + responsive card view
- Badges/Chips:
  - Role badge: Admin/Teacher/Student
  - Submission status: Missing/Submitted/Late/Graded
  - Similarity level: Low/Medium/High (UI labels only)
- Modals:
  - Add/Edit class, Add/Edit activity, Upload material, Confirm submit
- Empty/Loading/Error states:
  - Empty state message + CTA button
  - Skeleton loaders
  - Error banner placeholder

---

## 6) SIMILARITY REPORT UI SPEC (FRONT-END ONLY)

### Must show

- Similarity % badge (large)
- Matched sources list (internal submissions only; mock)
- Split preview:
  - left: student submission preview
  - right: matched text preview
- Highlighted matches (UI-only styling)
- Teacher remark textbox + status buttons (UI only):
  - Flag for review
  - Accept
  - Return for resubmission

No plagiarism algorithm implementation in UI phase.

---

## 7) GRADEBOOK UI SPEC (FRONT-END ONLY)

- Gradebook table:
  - rows = students, columns = activities + total + computed final grade
- Filters: show missing only, show graded only
- Export buttons: CSV/PDF (UI-only)
- Grading page:
  - rubric criteria list + score inputs
  - auto-total display (frontend computed placeholder)
  - feedback box + save/publish buttons (UI-only)

---

## 8) MOCK DATA RULES

- Use mock JSON objects for:
  - classes, activities, students, submissions, similarity results, grades
- Every page must render:
  - Normal state
  - Empty state
  - Loading state
  - Error state

---

## 9) OUTPUT RULES (WHEN GENERATING UI)

When asked to create a screen:

1. Provide the page structure (header/actions/content)
2. List components needed
3. Provide HTML/CSS layout or UI wireframe structure
4. Include mock data placeholders
5. Ensure navigation links match the sidebar

---

## 10) UI ACCEPTANCE (DONE = PASS)

- Role-based sidebar works (Admin/Teacher/Student)
- All pages exist and are navigable
- Class workflow UI is complete:
  - Teacher: Activity → Submissions → Similarity → Gradebook
  - Student: Activities → Submit → Grades
- Consistent styling, ready for defense screenshots

---

END

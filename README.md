# Trello-Based Task Management System

## Overview
A Trello-inspired task management application developed using **HTML, CSS, and vanilla JavaScript**, designed to demonstrate dynamic UI rendering, state management, and client-side data persistence.

The application enables users to create tasks with structured metadata, including **due date, due time, and priority level**. Tasks are dynamically rendered within a Kanban-style board, allowing users to efficiently organize and track their workflow.

Additionally, the application includes dynamic dashboard sections that automatically display tasks based on specific conditions, which are urgent priority tasks, tasks due today, tasks due tomorrow, and overdue tasks

These sections update in real time. When a task is marked as Done or deleted, it is automatically removed from these lists. If no tasks meet a category’s condition, the corresponding section is hidden from the interface.

## Features
* Create tasks with:
  - Task name
  - Due date and time
  - Priority level (Low, Moderate, Urgent)
* Kanban-style board:
  - To-Do
  - In Progress
  - Done
* Drag-and-drop functionality for task movement (mobile and desktop)
* Edit task modal (Update Task Name, Priority Level, Due Date and Time)
* Delete tasks with confirmation prompt
* Dynamic dashboard sections:
  - Due Today
  - Due Tomorrow
  - Urgent Tasks
  - Overdue Tasks
* Conditional rendering:
  - Sections appear only when relevant
  - Automatically update when tasks are completed or deleted
* Persistent storage using **localStorage**
* Mobile users can use this app
---

## Tech Stack
- **HTML5** – Structure
- **CSS3** – Styling and layout (Grid & Flexbox), Mobile view
- **JavaScript (Vanilla)** – Application logic, DOM manipulation, and event handling
- **Browser localStorage API** – Data persistence

---

## How It Works
- Tasks are stored as objects in an array
- The UI is dynamically updated using **DOM manipulation**
- Drag-and-drop events update task status in real time
- Task data is saved in **localStorage**, ensuring persistence across sessions
- Conditional logic determines task categorization (today, overdue, priority, etc.)

---

## Getting Started

### Live Application
Access the application here:  
https://yanemeeyyyy.github.io/Trello-Based-Task-Management-System/

---

### How to Use

1. **Create a Task**  
   Enter the task name, due date, due time, and select a priority level, and all inputs are required.
   <img width="1918" height="866" alt="image" src="https://github.com/user-attachments/assets/3267142d-88e8-4781-b3cb-f0150da0d82e" />
   <img width="1918" height="868" alt="image" src="https://github.com/user-attachments/assets/81c1e4e4-6fb9-4ddf-8825-bb0f08816dd3" />
   <img width="1918" height="862" alt="image" src="https://github.com/user-attachments/assets/41bc6012-41ee-4dca-bace-e35469315fdb" />
   <img width="1918" height="868" alt="image" src="https://github.com/user-attachments/assets/65d78ba3-a5bc-4448-b4df-4a6e1cc9ca3b" />
   <img width="1918" height="867" alt="image" src="https://github.com/user-attachments/assets/f40939df-3404-41d3-afbc-61cd1272c7a1" />

2. **Add the Task**  
   Click the **“Add Task”** button. The task will appear in the **To-Do** column.
   <img width="1918" height="866" alt="image" src="https://github.com/user-attachments/assets/eb2bb7d9-6421-4d3f-9813-4a7550949073" />
   <img width="1918" height="866" alt="image" src="https://github.com/user-attachments/assets/87690579-383e-4875-95be-03e3e9d20932" />

3. **Manage Tasks**  
   - Use the **Edit** button to update the task name

     <img width="552" height="242" alt="image" src="https://github.com/user-attachments/assets/9990ebe0-84dd-4a5b-ab7b-778bb1e42fea" />
     <img width="552" height="241" alt="image" src="https://github.com/user-attachments/assets/aa713bd8-bea5-4f73-bb7c-3500cc5e38a1" />
     <img width="1918" height="866" alt="image" src="https://github.com/user-attachments/assets/72d400dd-ae65-4154-a84d-18ab74a0b564" />

   - Use the **Delete** button to remove the task (with confirmation)
     <img width="533" height="159" alt="image" src="https://github.com/user-attachments/assets/c87cfddc-2204-4285-83dd-c8fa5b2be911" />
     <img width="1919" height="868" alt="image" src="https://github.com/user-attachments/assets/c255d84d-0272-47ac-8cc4-2811281493d3" />


4. **Track Progress**  
   Drag and drop tasks across columns:
   **To-Do → In Progress → Done**
  <img width="1919" height="872" alt="image" src="https://github.com/user-attachments/assets/bf5c74d8-c05e-491f-8507-b97a11d379a6" />
  <img width="1898" height="661" alt="image" src="https://github.com/user-attachments/assets/4f482679-be66-4edb-ae94-b8df1f732d5d" />



5. **Monitor Task Status**  
   The system automatically categorizes tasks into:
   - Due Today
   <img width="1902" height="196" alt="image" src="https://github.com/user-attachments/assets/5c91f211-53e8-4172-a4a1-4a2ad78e1f0b" />
   - Due Tomorrow
   <img width="953" height="210" alt="image" src="https://github.com/user-attachments/assets/98f84f3c-3dec-4749-9eaf-70537b739501" />
   - Priority (Urgent) Tasks
   <img width="1902" height="196" alt="image" src="https://github.com/user-attachments/assets/5c91f211-53e8-4172-a4a1-4a2ad78e1f0b" />  
   - Overdue Tasks
   <img width="946" height="240" alt="image" src="https://github.com/user-attachments/assets/47a42584-aacf-4ddf-bb49-25c3c9f9af72" />

   These sections update dynamically based on task status.

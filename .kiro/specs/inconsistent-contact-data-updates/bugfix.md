# Bugfix Requirements: Inconsistent Contact Data Updates

## 1. Bug Description

### 1.1 Current Defective Behavior
Contact information (email, phone, LinkedIn, GitHub, resume link) is hardcoded directly in `src/components/Sidebar.jsx`. When contact details need to be updated, developers must:
- Locate and modify multiple hardcoded values within the component
- Risk missing some instances or introducing typos
- Cannot easily reuse contact data in other components

**Specific Issues:**
- Email: `akashgautamm22@gmail.com` is hardcoded in line 44
- Phone: `8077554658` is hardcoded in line 51
- LinkedIn: `https://www.linkedin.com/in/satyam-kumar-152840323/` is hardcoded in line 30 (incorrect URL)
- GitHub: `https://github.com/SatyamKumarCS` is hardcoded in line 23 (incorrect URL)
- Resume: `https://drive.google.com/file/d/1ayOjkNwV2cKutZAMME8peDT8tMdasAz3/view?usp=drive_link` is hardcoded in line 15

### 1.2 When It Happens
The bug manifests when:
- Contact information needs to be updated (e.g., new LinkedIn profile, phone number change)
- New components need to display contact information
- Maintaining consistency across multiple locations becomes error-prone

### 1.3 Impact
- **Maintainability**: High maintenance burden for simple contact updates
- **Consistency**: Risk of inconsistent contact data across the application
- **Scalability**: Difficult to reuse contact data in future components
- **Developer Experience**: Tedious manual updates prone to human error

## 2. Expected Correct Behavior

### 2.1 Centralized Contact Data
Contact information should be defined once in a centralized location (`src/data.js`) and imported where needed.

### 2.2 Single Source of Truth
All components should reference the centralized contact data structure, ensuring:
- One place to update contact information
- Automatic propagation of changes to all components
- Type-safe access to contact fields

### 2.3 Correct Contact Information
The centralized data should contain the correct, up-to-date contact information:
- Email: `akashgautamm22@gmail.com`
- Phone: `8077554658`
- LinkedIn: `https://www.linkedin.com/in/akash-gautam-42ba31307/`
- GitHub: `https://github.com/Akashgautam25`
- Resume: `https://drive.google.com/file/d/1ayOjkNwV2cKutZAMME8peDT8tMdasAz3/view?usp=drive_link`

## 3. Preservation Requirements

### 3.1 Visual Appearance
All existing styling, layout, and visual presentation in Sidebar.jsx must remain unchanged.

### 3.2 Link Functionality
All links (email mailto, phone tel, external links) must continue to work exactly as before.

### 3.3 Hot Reload Behavior
Vite's hot module replacement should continue to work seamlessly when contact data is updated.

### 3.4 Component Structure
The Sidebar component's JSX structure and class names should remain unchanged.

### 3.5 Existing Projects Data
The existing `projects` array in `src/data.js` must not be affected or modified.

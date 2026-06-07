# Resume Section Guide

This guide explains how to add or modify entries in the resume section of your portfolio.

## Structure

The resume is divided into three main categories:
- **Experience**: `src/app/resume/experience/`
- **Education**: `src/app/resume/education/`
- **Leadership**: `src/app/resume/leadership/`

Each entry is represented by a folder within one of these categories.

## How to Add a New Entry

1. **Copy the Template**:
   Copy the `src/app/resume/_template` folder to the desired category and rename it to your slug (e.g., `src/app/resume/experience/my-company`).

2. **Configure Metadata (`entry.js`)**:
   Edit the `entry.js` file in your new folder. This data is used for the summary card on the main `/resume` page.
   ```javascript
   export const entry = {
       title: "Software Engineer Intern",
       subtitle: "Company Name | Location",
       date: "May 2025 – August 2025",
       intro: "Brief summary. You can use <strong>HTML</strong> for links."
   };
   ```

3. **Create Detail Page (`page.js`)**:
   Edit the `page.js` file to add the full description. 

4. **Add Images (Optional)**:
   - Place your images in `public/blogweb/resume/[category]/[slug]/`.
   - Reference them in your `page.js` using the path `/blogweb/resume/[category]/[slug]/your-image.png`.
   - See `src/app/resume/experience/galaxeye/page.js` for a high-quality example of how to layout images and "Proof of Work" sections.

## Projects Section

Projects are currently managed in the `PROJECTS` array within `src/app/resume/page.js`. 

## Technical Details

- The main resume page uses `getResumeEntries(category)` in `src/lib/resume.js` to scan folders.
- It looks for `entry.js` and parses the `entry` object using a regex and `new Function()`.
- Folders starting with an underscore (like `_template`) are automatically ignored.

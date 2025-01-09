为了高效地将VB程序转换成ReactJS页面，并标记需要调用数据库或API的方法，可以编写一个通用的Prompt模板给GitHub Copilot，明确任务的目标和细节。这是一个适合这种情况的Prompt模板：

---

### Common Prompt Template

**Task Description:**  
You are a code converter. Your task is to help me rewrite the given VB code into ReactJS components or functions. Ensure that:  
1. Each VB method is converted into a ReactJS function or component as appropriate.  
2. Any method involving database or API calls is marked with a `// TODO: Implement database or API logic` comment.  
3. Retain the functionality and logic of the original VB code while adhering to ReactJS best practices.  
4. Highlight or modularize reused logic (e.g., common utility functions).  

**Input:**  
Provide the given VB method or block of code.

**Output Example:**  
For each method, convert it into a ReactJS equivalent, following these conventions:  
```javascript
// Original VB Method Name: <OriginalMethodName>
function <ReactFunctionName>() {
    // TODO: Implement database or API logic if applicable
    // Converted logic from VB code goes here
}
```

---

### How to Apply It  
1. **For a VB Class:** Use this prompt for each method in the class:
   ```text
   Convert the following VB method into a ReactJS function. Remember to mark any database or API calls with a TODO comment:
   ```
   Follow this by pasting the method.

2. **For a Full VB Program:** Divide the program into smaller chunks, focusing on one class or group of methods at a time. Use a context-preserving prompt:
   ```text
   Convert this VB class into a ReactJS module with functions or components. Use TODO comments for database or API calls. Retain the original logic and modularize reused code:
   ```
   Include a snippet of the class.

3. **To Address Dependencies:** Identify commonly used classes and ask Copilot:
   ```text
   Identify and list all dependencies and references in this VB code. Summarize their roles and suggest how they might be implemented or imported in a ReactJS project.
   ```
   
4. **For Database Calls:** Add:
   ```text
   When the VB code interacts with a database, generate a placeholder function in ReactJS and include a TODO comment for actual implementation.
   ```

通过这种方式，你可以逐步把代码转化成ReactJS，并清晰标记需要额外处理的地方，同时减少遗漏深层次调用的风险。

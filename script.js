/**
 * ============================================================================
 * Interview Boost - Premium Quiz-Based Preparation Platform
 * Vanilla JavaScript Architecture
 * ============================================================================
 */

// --- Global Quiz Database ---
const QUESTION_BANK = {
  python: [
    {
      id: "py-1",
      category: "Python",
      question: "Which keyword is used to define a function in Python?",
      options: ["function", "def", "fun", "define"],
      correct: 1,
      explanation: "In Python, the 'def' keyword is used to declare and define a user-defined function.",
      difficulty: "Easy"
    },
    {
      id: "py-2",
      category: "Python",
      question: "What will be the output of type([]) in Python?",
      code: "print(type([]))",
      options: ["<class 'tuple'>", "<class 'array'>", "<class 'list'>", "<class 'dict'>"],
      correct: 2,
      explanation: "Square brackets '[]' create a list in Python, so its type is <class 'list'>.",
      difficulty: "Easy"
    },
    {
      id: "py-3",
      category: "Python",
      question: "Which of the following data structures is immutable in Python?",
      options: ["List", "Dictionary", "Set", "Tuple"],
      correct: 3,
      explanation: "Tuples cannot be altered after creation, making them immutable. Lists, dictionaries, and sets are mutable.",
      difficulty: "Medium"
    },
    {
      id: "py-4",
      category: "Python",
      question: "What is the primary purpose of the __init__ method in a Python class?",
      options: [
        "To destroy class instances",
        "Constructor to initialize instance attributes",
        "To import required libraries",
        "To compile the Python bytecode"
      ],
      correct: 1,
      explanation: "'__init__' is the constructor method automatically invoked when a new instance of a class is created.",
      difficulty: "Medium"
    },
    {
      id: "py-5",
      category: "Python",
      question: "What is the average time complexity of key lookup in a Python dictionary?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
      correct: 2,
      explanation: "Python dictionaries are implemented using hash tables, offering O(1) average-time complexity for lookups.",
      difficulty: "Hard"
    },
    {
      id: "py-6",
      category: "Python",
      question: "What will be the output of the following list comprehension?",
      code: "nums = [x * 2 for x in range(4) if x % 2 == 0]\nprint(nums)",
      options: ["[0, 2, 4]", "[0, 4]", "[2, 6]", "[0, 2, 4, 6]"],
      correct: 1,
      explanation: "range(4) produces 0, 1, 2, 3. The condition 'x % 2 == 0' selects 0 and 2. Multiplied by 2, we get [0, 4].",
      difficulty: "Medium"
    },
    {
      id: "py-7",
      category: "Python",
      question: "Which built-in module is used in Python to achieve genuine parallelism across multiple CPU cores?",
      options: ["threading", "multiprocessing", "asyncio", "parallel"],
      correct: 1,
      explanation: "Because of the Global Interpreter Lock (GIL), the 'multiprocessing' module spawns independent processes with separate GILs for multi-core parallelism.",
      difficulty: "Hard"
    },
    {
      id: "py-8",
      category: "Python",
      question: "What does the 'pass' statement do in Python?",
      options: [
        "Terminates the program immediately",
        "Acts as a null operation placeholder",
        "Skips the current loop iteration",
        "Returns None from a generator"
      ],
      correct: 1,
      explanation: "'pass' is a null statement used when syntax requires code but no action is needed, such as in empty functions or classes.",
      difficulty: "Easy"
    },
    {
      id: "py-9",
      category: "Python",
      question: "Which of the following is used to define a generator function in Python?",
      options: ["The return keyword", "The yield keyword", "The generate keyword", "The iter function"],
      correct: 1,
      explanation: "A generator function uses the 'yield' statement instead of 'return' to yield values one at a time and preserve its execution frame state.",
      difficulty: "Medium"
    },
    {
      id: "py-10",
      category: "Python",
      question: "What is the difference between a shallow copy and a deep copy in Python?",
      options: [
        "A shallow copy copies objects recursively; deep copy does not",
        "A shallow copy copies outer references; deep copy recursively duplicates nested compound objects",
        "Deep copy only works on primitive types",
        "They are identical under the copy module"
      ],
      correct: 1,
      explanation: "copy.copy() creates a new object but references the original children. copy.deepcopy() recursively clones the entire object hierarchy.",
      difficulty: "Medium"
    },
    {
      id: "py-11",
      category: "Python",
      question: "What is a decorator in Python?",
      options: [
        "A design tool for graphic user interfaces",
        "A callable that takes a function as argument and returns an enhanced function without modifying its source",
        "A class that must inherit from BaseDecorator",
        "A compile-time macro"
      ],
      correct: 1,
      explanation: "Decorators are callables that accept a function or method and return a wrapped version with added behavior (e.g. @staticmethod, @functools.lru_cache).",
      difficulty: "Hard"
    },
    {
      id: "py-12",
      category: "Python",
      question: "What will the expression bool('False') evaluate to in Python?",
      code: "print(bool('False'))",
      options: ["False", "True", "None", "ValueError"],
      correct: 1,
      explanation: "In Python, any non-empty string evaluates to True in a boolean context. bool('') is False, but bool('False') is True.",
      difficulty: "Easy"
    }
  ],

  java: [
    {
      id: "java-1",
      category: "Java",
      question: "Which of the following is NOT a primitive data type in Java?",
      options: ["int", "boolean", "String", "double"],
      correct: 2,
      explanation: "String is a class and an Object in Java, not a primitive data type. Primitives include byte, short, int, long, float, double, char, and boolean.",
      difficulty: "Easy"
    },
    {
      id: "java-2",
      category: "Java",
      question: "What is the size of an int data type in Java?",
      options: ["16 bits (2 bytes)", "32 bits (4 bytes)", "64 bits (8 bytes)", "Depends on the OS"],
      correct: 1,
      explanation: "Java integers are strictly 32-bit (4 bytes) signed two's complement integers across all platforms, ensuring portability.",
      difficulty: "Easy"
    },
    {
      id: "java-3",
      category: "Java",
      question: "What does the 'final' keyword signify when applied to a Java class?",
      options: [
        "The class cannot be instantiated",
        "The class cannot be subclassed/extended",
        "All methods inside must be abstract",
        "The class is allocated in metaspace only"
      ],
      correct: 1,
      explanation: "Declaring a class as 'final' prevents other classes from extending or inheriting from it (e.g., java.lang.String is final).",
      difficulty: "Medium"
    },
    {
      id: "java-4",
      category: "Java",
      question: "Which interface is the root of the Java Collections hierarchy (excluding Maps)?",
      options: ["Iterable", "Collection", "List", "Set"],
      correct: 1,
      explanation: "java.util.Collection is the root interface of the collections hierarchy, which is further inherited by List, Set, and Queue.",
      difficulty: "Medium"
    },
    {
      id: "java-5",
      category: "Java",
      question: "What is the primary function of the 'volatile' keyword in Java multithreading?",
      options: [
        "Locks the method for synchronization",
        "Guarantees visibility of variable changes across threads",
        "Prevents garbage collection of the reference",
        "Ensures atomic increments"
      ],
      correct: 1,
      explanation: "'volatile' ensures reads and writes go directly to main memory rather than thread-local CPU caches, guaranteeing thread visibility.",
      difficulty: "Hard"
    },
    {
      id: "java-6",
      category: "Java",
      question: "Where are objects allocated at runtime in the Java Virtual Machine?",
      options: ["Stack memory", "Heap memory", "Program Counter register", "Metaspace"],
      correct: 1,
      explanation: "All Java objects and arrays are allocated dynamically on the Heap, while local variables and method call frames reside on the Stack.",
      difficulty: "Medium"
    },
    {
      id: "java-7",
      category: "Java",
      question: "What happens if a checked exception is neither caught nor declared in a 'throws' clause?",
      options: [
        "The program compiles but throws warning",
        "A compile-time error occurs",
        "JVM automatically catches and logs it",
        "It gets converted to a RuntimeException"
      ],
      correct: 1,
      explanation: "In Java, checked exceptions are verified at compile time. Failure to catch or declare them results in a compilation failure.",
      difficulty: "Medium"
    },
    {
      id: "java-8",
      category: "Java",
      question: "Which collection class maintains insertion order and allows null elements?",
      options: ["HashSet", "TreeSet", "LinkedHashSet", "ArrayDeque"],
      correct: 2,
      explanation: "LinkedHashSet maintains a doubly-linked list running through all of its entries, thus preserving insertion order.",
      difficulty: "Hard"
    },
    {
      id: "java-9",
      category: "Java",
      question: "Which of the following classes is immutable in Java?",
      options: ["StringBuilder", "StringBuffer", "String", "ArrayList"],
      correct: 2,
      explanation: "java.lang.String objects are immutable; any modification creates a new String object. StringBuffer and StringBuilder are mutable.",
      difficulty: "Easy"
    },
    {
      id: "java-10",
      category: "Java",
      question: "What is the purpose of the 'transient' keyword in Java?",
      options: [
        "Makes a variable thread-safe",
        "Prevents the marked variable from being serialized",
        "Forces memory allocation in CPU cache",
        "Allows a class to be subclassed dynamically"
      ],
      correct: 1,
      explanation: "Fields marked with 'transient' are ignored during the object serialization process and restored to default values upon deserialization.",
      difficulty: "Medium"
    },
    {
      id: "java-11",
      category: "Java",
      question: "What is the key difference between Comparable and Comparator interfaces in Java?",
      options: [
        "Comparable provides compare(), Comparator provides compareTo()",
        "Comparable modifies original class with single natural ordering; Comparator provides external custom sorting logic",
        "Comparable only works for numerical arrays",
        "Comparator cannot be used with Lambda expressions"
      ],
      correct: 1,
      explanation: "Comparable is implemented by the class itself (natural sort via compareTo), whereas Comparator defines separate comparison strategies (via compare).",
      difficulty: "Hard"
    },
    {
      id: "java-12",
      category: "Java",
      question: "Can a constructor in Java be declared as 'final' or 'static'?",
      options: [
        "Yes, both are allowed",
        "Only static is allowed",
        "Only final is allowed",
        "No, constructors cannot be final, static, or abstract"
      ],
      correct: 3,
      explanation: "Constructors are never inherited so 'final' is meaningless, and they belong to instance initialization so 'static' is prohibited.",
      difficulty: "Medium"
    }
  ],

  sql: [
    {
      id: "sql-1",
      category: "SQL",
      question: "Which clause is used to filter aggregated groups in SQL?",
      options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
      correct: 1,
      explanation: "HAVING is evaluated after aggregation to filter groups produced by GROUP BY. WHERE filters individual rows before aggregation.",
      difficulty: "Easy"
    },
    {
      id: "sql-2",
      category: "SQL",
      question: "What is the fundamental difference between TRUNCATE and DELETE in SQL?",
      options: [
        "DELETE removes the table structure, TRUNCATE retains it",
        "TRUNCATE is DDL, deallocates pages, and is faster than DELETE which logs row deletions",
        "DELETE cannot be filtered with a WHERE clause",
        "TRUNCATE can fire row-level triggers"
      ],
      correct: 1,
      explanation: "TRUNCATE is a DDL command that deallocates data pages with minimal logging and cannot fire row triggers, making it significantly faster.",
      difficulty: "Medium"
    },
    {
      id: "sql-3",
      category: "SQL",
      question: "Which JOIN returns all records from Table A, along with matching records from Table B?",
      code: "SELECT * FROM TableA [JOIN] TableB ON TableA.id = TableB.a_id;",
      options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN"],
      correct: 1,
      explanation: "LEFT JOIN (or LEFT OUTER JOIN) returns all records from the left table (TableA) and matching rows from the right table (TableB).",
      difficulty: "Easy"
    },
    {
      id: "sql-4",
      category: "SQL",
      question: "What does the 'I' stand for in ACID transaction properties?",
      options: ["Indexing", "Integrity", "Isolation", "Inheritance"],
      correct: 2,
      explanation: "ACID stands for Atomicity, Consistency, Isolation, and Durability. Isolation ensures concurrent transactions execute without interfering.",
      difficulty: "Medium"
    },
    {
      id: "sql-5",
      category: "SQL",
      question: "What is the result of COUNT(column_name) if all 5 rows for that column contain NULL?",
      options: ["5", "0", "NULL", "Error"],
      correct: 1,
      explanation: "COUNT(column_name) excludes NULL values, so it evaluates to 0. COUNT(*) on the other hand counts all rows regardless of NULLs.",
      difficulty: "Medium"
    },
    {
      id: "sql-6",
      category: "SQL",
      question: "Which index structure is the default in most relational databases for primary keys and range scans?",
      options: ["Hash Index", "B-Tree Index", "Bitmap Index", "Inverted Index"],
      correct: 1,
      explanation: "B-Tree (and B+Tree) indices keep data sorted, allowing logarithmic search, insertion, and efficient range queries.",
      difficulty: "Hard"
    },
    {
      id: "sql-7",
      category: "SQL",
      question: "Which SQL constraint ensures that all values in a column are distinct?",
      options: ["CHECK", "FOREIGN KEY", "UNIQUE", "DEFAULT"],
      correct: 2,
      explanation: "The UNIQUE constraint guarantees uniqueness for each row in the specified column.",
      difficulty: "Easy"
    },
    {
      id: "sql-8",
      category: "SQL",
      question: "Which SQL keyword eliminates duplicate records from the final result set?",
      options: ["DISTINCT", "DIFFERENT", "UNIQUE", "FILTER"],
      correct: 0,
      explanation: "The SELECT DISTINCT statement is used to return only distinct (different) values.",
      difficulty: "Easy"
    },
    {
      id: "sql-9",
      category: "SQL",
      question: "Which condition must be met for a relational table to satisfy Third Normal Form (3NF)?",
      options: [
        "It must have no foreign keys",
        "It must be in 2NF and have no transitive functional dependencies for non-prime attributes",
        "It must contain exactly one column as primary key",
        "All attributes must be character strings"
      ],
      correct: 1,
      explanation: "3NF requires the relation to be in 2NF and that no non-prime attribute depends transitively on any candidate key.",
      difficulty: "Hard"
    },
    {
      id: "sql-10",
      category: "SQL",
      question: "Which SQL window function assigns a sequential unique integer to rows within a partition starting from 1?",
      code: "SELECT emp_name, dept, [FUNCTION]() OVER (PARTITION BY dept ORDER BY salary DESC) as rnk FROM employees;",
      options: ["RANK()", "DENSE_RANK()", "ROW_NUMBER()", "NTILE()"],
      correct: 2,
      explanation: "ROW_NUMBER() assigns continuous sequential integers (1, 2, 3...) regardless of duplicate values in the ORDER BY clause.",
      difficulty: "Medium"
    },
    {
      id: "sql-11",
      category: "SQL",
      question: "What is the primary difference between a Clustered Index and a Non-Clustered Index?",
      options: [
        "A table can have multiple clustered indices but only one non-clustered index",
        "A clustered index defines the physical order of data rows on disk, while a non-clustered index creates a separate lookup structure with pointers",
        "Clustered indices cannot be used on numerical columns",
        "Non-clustered indices automatically drop primary keys"
      ],
      correct: 1,
      explanation: "A table has only one clustered index because physical rows can only be ordered one way. Non-clustered indices store keys and row pointers separately.",
      difficulty: "Hard"
    },
    {
      id: "sql-12",
      category: "SQL",
      question: "What is a Deadlock in database transaction management and how does the DBMS resolve it?",
      options: [
        "A hardware crash resolved by restarting the server",
        "A situation where two transactions wait for locks held by each other; DBMS detects the cycle and aborts one transaction",
        "A buffer overflow resolved by truncating logs",
        "An unindexed full table scan"
      ],
      correct: 1,
      explanation: "A deadlock is a mutual wait state between concurrent transactions. The DBMS engine uses a wait-for graph or lock timeouts to terminate and rollback one transaction.",
      difficulty: "Hard"
    }
  ],

  html_css: [
    {
      id: "web-1",
      category: "HTML & CSS",
      question: "Which HTML5 semantic element is intended for self-contained, syndicate-able content such as blog posts?",
      options: ["<section>", "<article>", "<aside>", "<main>"],
      correct: 1,
      explanation: "The <article> tag specifies independent, self-contained content that makes sense on its own (blog posts, news articles).",
      difficulty: "Easy"
    },
    {
      id: "web-2",
      category: "HTML & CSS",
      question: "What is the correct CSS specificity hierarchy from lowest to highest?",
      options: [
        "Class < Element < ID < Inline Style",
        "Element < Class < ID < Inline Style",
        "ID < Class < Element < Inline Style",
        "Element < ID < Class < Inline Style"
      ],
      correct: 1,
      explanation: "Element selectors have specificity (0,0,0,1), classes (0,0,1,0), IDs (0,1,0,0), and inline styles have highest specificity (1,0,0,0).",
      difficulty: "Medium"
    },
    {
      id: "web-3",
      category: "HTML & CSS",
      question: "In CSS Flexbox, which property aligns flex items along the cross-axis?",
      options: ["justify-content", "align-items", "flex-direction", "align-self"],
      correct: 1,
      explanation: "'justify-content' aligns items along the main axis, while 'align-items' aligns items along the cross axis.",
      difficulty: "Easy"
    },
    {
      id: "web-4",
      category: "HTML & CSS",
      question: "What does the 'rem' unit in CSS relate to?",
      options: [
        "The font-size of the parent element",
        "The font-size of the root <html> element",
        "The viewport width divided by 10",
        "The display resolution in DPI"
      ],
      correct: 1,
      explanation: "'rem' stands for Root EM, meaning it is calculated relative to the font-size of the document's root (<html>) element.",
      difficulty: "Medium"
    },
    {
      id: "web-5",
      category: "HTML & CSS",
      question: "What is the difference between 'display: none' and 'visibility: hidden'?",
      options: [
        "They are completely identical",
        "'display: none' removes the element from document flow; 'visibility: hidden' hides it while preserving its space",
        "'visibility: hidden' removes element from DOM tree entirely",
        "'display: none' only works on block elements"
      ],
      correct: 1,
      explanation: "'display: none' causes the element to be treated as if it does not exist in the layout, whereas 'visibility: hidden' still occupies space.",
      difficulty: "Medium"
    },
    {
      id: "web-6",
      category: "HTML & CSS",
      question: "What is the correct order of the standard CSS Box Model from innermost to outermost?",
      options: [
        "Margin -> Border -> Padding -> Content",
        "Content -> Padding -> Border -> Margin",
        "Content -> Border -> Padding -> Margin",
        "Padding -> Content -> Border -> Margin"
      ],
      correct: 1,
      explanation: "The CSS box model starts with Content at the center, surrounded by Padding, then Border, and finally Margin.",
      difficulty: "Easy"
    },
    {
      id: "web-7",
      category: "HTML & CSS",
      question: "Which meta tag is required in HTML5 to ensure proper rendering and touch zooming on mobile devices?",
      options: [
        "<meta name='screen-resolution' content='responsive'>",
        "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
        "<meta http-equiv='mobile-display' content='fluid'>",
        "<meta name='touch-scale' content='auto'>"
      ],
      correct: 1,
      explanation: "The viewport meta tag instructs mobile browsers to match the screen's width in device-independent pixels and set initial scale to 1.",
      difficulty: "Easy"
    },
    {
      id: "web-8",
      category: "HTML & CSS",
      question: "What does 'box-sizing: border-box' do?",
      options: [
        "Removes all margins from the element",
        "Includes padding and border within the specified element width and height",
        "Forces borders to be rounded",
        "Increases the outer margin by 10px"
      ],
      correct: 1,
      explanation: "With 'border-box', width and height include content, padding, and border, preventing unexpected expansion when adding padding.",
      difficulty: "Medium"
    },
    {
      id: "web-9",
      category: "HTML & CSS",
      question: "Which CSS Grid expression creates a responsive column layout without requiring media queries?",
      code: "grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));",
      options: [
        "Fixed-column layout with 280px widths",
        "Responsive grid columns that fit as many 280px columns as possible and stretch proportionally to fill leftover space",
        "Horizontal scrolling row layout",
        "A masonry mosaic layout"
      ],
      correct: 1,
      explanation: "repeat(auto-fit, minmax(280px, 1fr)) allows columns to wrap and automatically expand to share remaining space across all screen sizes.",
      difficulty: "Medium"
    },
    {
      id: "web-10",
      category: "HTML & CSS",
      question: "What is the purpose of the 'aria-live' attribute in HTML accessibility?",
      options: [
        "Streams real-time audio through WebSockets",
        "Informs assistive technologies (screen readers) when an element's content updates dynamically",
        "Animates the element on mouse move",
        "Loads data before page render"
      ],
      correct: 1,
      explanation: "aria-live ('polite' or 'assertive') informs screen readers to announce changes to dynamic content regions (e.g. toasts, score counters).",
      difficulty: "Medium"
    },
    {
      id: "web-11",
      category: "HTML & CSS",
      question: "In CSS, what is the default value of the 'position' property for all elements?",
      options: ["relative", "absolute", "static", "fixed"],
      correct: 2,
      explanation: "The default CSS position is 'static'. Static elements follow normal document flow and are not affected by top/right/bottom/left/z-index properties.",
      difficulty: "Easy"
    },
    {
      id: "web-12",
      category: "HTML & CSS",
      question: "What CSS property and value is standard for preventing text selection during user interactions on button elements?",
      options: ["text-decoration: none", "user-select: none", "pointer-events: none", "cursor: default"],
      correct: 1,
      explanation: "'user-select: none' prevents users from unintentionally highlighting or copying text when clicking or double-clicking UI controls.",
      difficulty: "Easy"
    }
  ],

  javascript: [
    {
      id: "js-1",
      category: "JavaScript",
      question: "What is a closure in JavaScript?",
      options: [
        "A function that runs immediately when defined",
        "A function bundled with references to its surrounding lexical environment",
        "A method to close browser tabs programmatically",
        "A syntax error caused by unclosed parentheses"
      ],
      correct: 1,
      explanation: "A closure gives a function access to its outer scope even after that outer function has finished executing.",
      difficulty: "Medium"
    },
    {
      id: "js-2",
      category: "JavaScript",
      question: "What will typeof NaN return in JavaScript?",
      code: "console.log(typeof NaN);",
      options: ["'undefined'", "'nan'", "'number'", "'object'"],
      correct: 2,
      explanation: "In JavaScript, NaN (Not-a-Number) is a special numeric value defined by the IEEE 754 floating-point standard, so typeof NaN is 'number'.",
      difficulty: "Easy"
    },
    {
      id: "js-3",
      category: "JavaScript",
      question: "What will be printed to the console in the following code?",
      code: "console.log(0.1 + 0.2 === 0.3);",
      options: ["true", "false", "undefined", "TypeError"],
      correct: 1,
      explanation: "Due to binary IEEE 754 floating-point precision, 0.1 + 0.2 equals 0.30000000000000004, which is not strictly equal to 0.3.",
      difficulty: "Medium"
    },
    {
      id: "js-4",
      category: "JavaScript",
      question: "What is the core difference between 'let' and 'var' in terms of scope?",
      options: [
        "'let' is block-scoped, while 'var' is function-scoped",
        "'var' cannot be hoisted",
        "'let' can be redeclared in the same scope",
        "'var' is only accessible inside loops"
      ],
      correct: 0,
      explanation: "'let' and 'const' are scoped to the nearest enclosing block ({}), whereas 'var' variables are scoped to the containing function.",
      difficulty: "Easy"
    },
    {
      id: "js-5",
      category: "JavaScript",
      question: "What is the primary role of the JavaScript Event Loop?",
      options: [
        "To compile JavaScript code into assembly",
        "To monitor call stack and push tasks from callback queue when stack is empty",
        "To allocate memory for garbage collection",
        "To perform multi-threaded math calculations"
      ],
      correct: 1,
      explanation: "The Event Loop constantly checks if the call stack is empty; once empty, it moves callbacks from the microtask/task queues to the stack.",
      difficulty: "Hard"
    },
    {
      id: "js-6",
      category: "JavaScript",
      question: "Which array method creates a new array populated with the results of calling a provided function on every element?",
      options: ["forEach()", "filter()", "map()", "reduce()"],
      correct: 2,
      explanation: "map() returns a new array transformed by the callback function without mutating the original array.",
      difficulty: "Easy"
    },
    {
      id: "js-7",
      category: "JavaScript",
      question: "Which method prevents any addition, modification, or deletion of properties on an object?",
      options: ["Object.seal()", "Object.freeze()", "Object.preventExtensions()", "Object.lock()"],
      correct: 1,
      explanation: "Object.freeze() makes an object completely immutable by disallowing additions, deletions, and value modifications.",
      difficulty: "Medium"
    },
    {
      id: "js-8",
      category: "JavaScript",
      question: "What will Promise.all() do if one of the promises in the input array rejects?",
      options: [
        "Wait for remaining promises and return errors array",
        "Immediately reject with the error of the first rejected promise",
        "Retry the failed promise 3 times",
        "Return null for the rejected value"
      ],
      correct: 1,
      explanation: "Promise.all() has fail-fast behavior: if any promise rejects, it immediately rejects with that rejection reason.",
      difficulty: "Hard"
    },
    {
      id: "js-9",
      category: "JavaScript",
      question: "What will be the output of ['10', '10', '10'].map(parseInt) in JavaScript?",
      code: "console.log(['10', '10', '10'].map(parseInt));",
      options: ["[10, 10, 10]", "[10, NaN, 2]", "[10, 0, 1]", "TypeError"],
      correct: 1,
      explanation: "map passes (element, index, array) to parseInt(str, radix). For index 0: parseInt('10', 0)=10. For index 1: parseInt('10', 1)=NaN (radix 1 invalid). For index 2: parseInt('10', 2)=2 (binary).",
      difficulty: "Hard"
    },
    {
      id: "js-10",
      category: "JavaScript",
      question: "What is Debouncing in JavaScript web application development?",
      options: [
        "A technique to run a function at fixed periodic time intervals",
        "A technique ensuring a function is only invoked after a specified delay has passed since its last trigger",
        "A technique for garbage collecting unused closures",
        "A syntax validator in webpack"
      ],
      correct: 1,
      explanation: "Debouncing limits the rate at which a function fires by resetting a timer whenever new events occur (e.g. search autocomplete, window resize).",
      difficulty: "Medium"
    },
    {
      id: "js-11",
      category: "JavaScript",
      question: "What is the priority difference between Microtasks and Macrotasks in the JavaScript Event Loop?",
      options: [
        "Macrotasks execute before Microtasks",
        "The microtask queue (Promises, queueMicrotask) is completely drained before the next macrotask (setTimeout, setInterval) runs",
        "They execute simultaneously using Web Workers",
        "Priority depends on the operating system scheduler"
      ],
      correct: 1,
      explanation: "After each macrotask completes, the JavaScript runtime exhausts all pending microtasks before executing the next macrotask or UI render.",
      difficulty: "Hard"
    },
    {
      id: "js-12",
      category: "JavaScript",
      question: "Which operator is the Nullish Coalescing operator in modern JavaScript?",
      code: "const val = input ?? defaultValue;",
      options: ["||", "??", "?.", "&&"],
      correct: 1,
      explanation: "The '??' operator returns its right-hand operand only when its left-hand operand is null or undefined (unlike '||' which triggers on 0 or '').",
      difficulty: "Easy"
    }
  ],

  data_structures: [
    {
      id: "ds-1",
      category: "Data Structures",
      question: "What is the worst-case time complexity of QuickSort?",
      options: ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"],
      correct: 2,
      explanation: "When the chosen pivot is consistently the smallest or greatest element (e.g. sorted array with poor pivot), QuickSort degrades to O(n^2).",
      difficulty: "Medium"
    },
    {
      id: "ds-2",
      category: "Data Structures",
      question: "Which data structure follows the First-In, First-Out (FIFO) principle?",
      options: ["Stack", "Queue", "Binary Tree", "Heap"],
      correct: 1,
      explanation: "A Queue processes elements in the order they arrive: First-In, First-Out.",
      difficulty: "Easy"
    },
    {
      id: "ds-3",
      category: "Data Structures",
      question: "What is the average time complexity to search an item in a balanced Binary Search Tree (AVL or Red-Black)?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correct: 1,
      explanation: "Because height of a balanced BST is kept at O(log n), searching takes logarithmic time.",
      difficulty: "Medium"
    },
    {
      id: "ds-4",
      category: "Data Structures",
      question: "Which data structure is most appropriate for implementing Undo/Redo operations in an editor?",
      options: ["Stack", "Queue", "Hash Table", "Graph"],
      correct: 0,
      explanation: "A Stack's Last-In, First-Out (LIFO) property is ideal for tracking historical state transitions for undo and redo.",
      difficulty: "Easy"
    },
    {
      id: "ds-5",
      category: "Data Structures",
      question: "Which algorithm finds the single-source shortest path in a weighted graph with non-negative edge weights?",
      options: ["Kruskal's Algorithm", "Dijkstra's Algorithm", "Floyd-Warshall", "Tarjan's Algorithm"],
      correct: 1,
      explanation: "Dijkstra's algorithm uses a priority queue/min-heap to find the shortest path from a source node in O((V + E) log V) time.",
      difficulty: "Hard"
    },
    {
      id: "ds-6",
      category: "Data Structures",
      question: "What is the property that defines a Min-Heap binary tree?",
      options: [
        "Every node's left child is strictly smaller than right child",
        "The root node's key is the minimum among all keys, and this applies recursively to every subtree",
        "It contains no duplicate values",
        "All leaf nodes are at identical depth"
      ],
      correct: 1,
      explanation: "In a Min-Heap, each parent node key is less than or equal to the keys of its children, guaranteeing the minimum element at root.",
      difficulty: "Medium"
    },
    {
      id: "ds-7",
      category: "Data Structures",
      question: "What is the auxiliary space complexity of standard Depth First Search (DFS) on a graph with V vertices?",
      options: ["O(1)", "O(V)", "O(E^2)", "O(V * E)"],
      correct: 1,
      explanation: "DFS requires a call stack or explicit stack to store nodes along the current traversal path, which takes at most O(V) memory.",
      difficulty: "Hard"
    },
    {
      id: "ds-8",
      category: "Data Structures",
      question: "Which collision resolution strategy in Hash Tables links colliding elements into a linked list at each bucket index?",
      options: ["Linear Probing", "Quadratic Probing", "Separate Chaining", "Double Hashing"],
      correct: 2,
      explanation: "Separate Chaining stores collisions in an auxiliary data structure (such as a linked list or small BST) at each table bucket.",
      difficulty: "Medium"
    },
    {
      id: "ds-9",
      category: "Data Structures",
      question: "What is the time complexity of building a Binary Heap from an unordered array of N elements?",
      options: ["O(N log N)", "O(N)", "O(N^2)", "O(log N)"],
      correct: 1,
      explanation: "Using Floyd's bottom-up sift-down algorithm (build_heap), the summation of heights results in a tight mathematical bound of O(N) time.",
      difficulty: "Hard"
    },
    {
      id: "ds-10",
      category: "Data Structures",
      question: "Which data structure is fundamentally required to implement Breadth-First Search (BFS) on a graph?",
      options: ["Stack", "Queue", "Priority Queue", "Disjoint Set (Union-Find)"],
      correct: 1,
      explanation: "BFS explores nodes level by level in First-In, First-Out sequence, requiring a standard Queue.",
      difficulty: "Easy"
    },
    {
      id: "ds-11",
      category: "Data Structures",
      question: "Which tree traversal on a Binary Search Tree (BST) visits nodes in strictly sorted ascending order?",
      options: ["Pre-order (Root, Left, Right)", "In-order (Left, Root, Right)", "Post-order (Left, Right, Root)", "Level-order traversal"],
      correct: 1,
      explanation: "In a BST, all left-subtree keys < root < right-subtree keys. Visiting Left, then Root, then Right (In-order) outputs keys in sorted order.",
      difficulty: "Easy"
    },
    {
      id: "ds-12",
      category: "Data Structures",
      question: "What is the amortized time complexity of inserting an element into a dynamic array (like std::vector or Python list)?",
      options: ["O(N)", "O(1)", "O(log N)", "O(N^2)"],
      correct: 1,
      explanation: "Although capacity-doubling copies N elements in O(N) worst case, geometric growth guarantees an amortized constant time O(1) per append.",
      difficulty: "Medium"
    }
  ],

  aptitude: [
    {
      id: "apt-1",
      category: "Aptitude",
      question: "A train 240 m long crosses a platform of length 360 m in 30 seconds. What is the speed of the train in km/h?",
      options: ["60 km/h", "72 km/h", "80 km/h", "90 km/h"],
      correct: 1,
      explanation: "Total distance = 240 + 360 = 600 m. Speed in m/s = 600 / 30 = 20 m/s. Convert to km/h: 20 * (18 / 5) = 72 km/h.",
      difficulty: "Medium"
    },
    {
      id: "apt-2",
      category: "Aptitude",
      question: "If the price of petrol increases by 25%, by what percentage should a driver reduce consumption to keep expenditure constant?",
      options: ["15%", "20%", "25%", "33.3%"],
      correct: 1,
      explanation: "Reduction % = [r / (100 + r)] * 100 = [25 / 125] * 100 = 1/5 * 100 = 20%.",
      difficulty: "Easy"
    },
    {
      id: "apt-3",
      category: "Aptitude",
      question: "Two numbers are in the ratio 3:4. If their LCM is 84, what is the greater number?",
      options: ["21", "28", "32", "36"],
      correct: 1,
      explanation: "Let numbers be 3x and 4x. LCM = 12x. 12x = 84 => x = 7. Greater number = 4 * 7 = 28.",
      difficulty: "Easy"
    },
    {
      id: "apt-4",
      category: "Aptitude",
      question: "A can finish a task in 12 days and B in 18 days. If they work together, how many days will they take?",
      options: ["6.5 days", "7.2 days", "8 days", "9 days"],
      correct: 1,
      explanation: "Work per day = 1/12 + 1/18 = (3 + 2)/36 = 5/36. Total days = 36 / 5 = 7.2 days.",
      difficulty: "Medium"
    },
    {
      id: "apt-5",
      category: "Aptitude",
      question: "What is the compound interest on $10,000 for 2 years at 10% per annum compounded annually?",
      options: ["$2,000", "$2,100", "$2,210", "$2,500"],
      correct: 1,
      explanation: "Amount = P(1 + r/100)^t = 10,000 * (1.10)^2 = 10,000 * 1.21 = $12,100. Interest = 12,100 - 10,000 = $2,100.",
      difficulty: "Medium"
    },
    {
      id: "apt-6",
      category: "Aptitude",
      question: "A bag has 4 red, 5 blue, and 6 green balls. If one ball is drawn randomly, what is the probability that it is NOT blue?",
      options: ["1/3", "2/5", "2/3", "3/5"],
      correct: 2,
      explanation: "Total balls = 4 + 5 + 6 = 15. Non-blue balls = 4 + 6 = 10. Probability = 10 / 15 = 2/3.",
      difficulty: "Easy"
    },
    {
      id: "apt-7",
      category: "Aptitude",
      question: "A trader marks goods 40% above cost price and allows a discount of 20%. What is his net profit percentage?",
      options: ["10%", "12%", "16%", "20%"],
      correct: 1,
      explanation: "Net change = 40 - 20 - (40 * 20)/100 = 20 - 8 = +12% profit.",
      difficulty: "Hard"
    },
    {
      id: "apt-8",
      category: "Aptitude",
      question: "The average of 5 consecutive odd numbers is 27. What is the smallest of these numbers?",
      options: ["21", "23", "25", "27"],
      correct: 1,
      explanation: "In an arithmetic progression of 5 items, the average is the middle (3rd) term = 27. The numbers are 23, 25, 27, 29, 31. Smallest is 23.",
      difficulty: "Easy"
    },
    {
      id: "apt-9",
      category: "Aptitude",
      question: "Pipe A can fill a tank in 6 hours and Pipe B can empty it in 8 hours. If both pipes are opened simultaneously, in how many hours will the tank be full?",
      options: ["14 hours", "20 hours", "24 hours", "48 hours"],
      correct: 2,
      explanation: "Net rate per hour = 1/6 - 1/8 = (4 - 3)/24 = 1/24 tank/hour. Time to fill tank completely = 24 hours.",
      difficulty: "Medium"
    },
    {
      id: "apt-10",
      category: "Aptitude",
      question: "In how many distinct ways can the letters of the word 'LEADER' be arranged?",
      options: ["120", "360", "720", "1440"],
      correct: 1,
      explanation: "Word 'LEADER' has 6 letters with 'E' repeating 2 times. Total permutations = 6! / 2! = 720 / 2 = 360.",
      difficulty: "Medium"
    },
    {
      id: "apt-11",
      category: "Aptitude",
      question: "Two fair six-sided dice are thrown simultaneously. What is the probability that the sum of the numbers is 8?",
      options: ["1/6", "5/36", "7/36", "1/4"],
      correct: 1,
      explanation: "Total outcomes = 36. Outcomes with sum 8 are (2,6), (3,5), (4,4), (5,3), (6,2), which is 5 outcomes. Probability = 5/36.",
      difficulty: "Easy"
    },
    {
      id: "apt-12",
      category: "Aptitude",
      question: "A student walks at 4 km/h and arrives 10 minutes late. Next day he walks at 5 km/h and arrives 5 minutes early. What is the distance to his college?",
      options: ["4 km", "5 km", "6 km", "7.5 km"],
      correct: 1,
      explanation: "Difference in time = 10 + 5 = 15 minutes = 1/4 hour. Distance D = (S1 * S2 / |S1 - S2|) * delta_t = (4 * 5 / 1) * (1/4) = 5 km.",
      difficulty: "Hard"
    }
  ],

  logical_reasoning: [
    {
      id: "lr-1",
      category: "Logical Reasoning",
      question: "Complete the numerical series: 3, 7, 15, 31, 63, ?",
      options: ["94", "112", "127", "129"],
      correct: 2,
      explanation: "Each number is generated by (previous * 2) + 1. Thus: (63 * 2) + 1 = 126 + 1 = 127.",
      difficulty: "Easy"
    },
    {
      id: "lr-2",
      category: "Logical Reasoning",
      question: "Pointing to a photograph, Rohit said, 'She is the daughter of my grandfather's only son.' How is Rohit related to the girl?",
      options: ["Father", "Brother", "Cousin", "Uncle"],
      correct: 1,
      explanation: "Grandfather's only son is Rohit's father. The daughter of Rohit's father is Rohit's sister. Therefore, Rohit is her brother.",
      difficulty: "Medium"
    },
    {
      id: "lr-3",
      category: "Logical Reasoning",
      question: "In a certain code, 'LIGHT' is coded as 'MJHIU'. How is 'FLAME' coded in that same system?",
      options: ["GMBNF", "GKBND", "ELZLD", "HNCPE"],
      correct: 0,
      explanation: "Each letter is shifted forward by +1 position in the alphabet: F->G, L->M, A->B, M->N, E->F. Result is GMBNF.",
      difficulty: "Easy"
    },
    {
      id: "lr-4",
      category: "Logical Reasoning",
      question: "Statements: All cats are dogs. Some dogs are birds. Which conclusion logically follows?",
      options: [
        "Some cats are birds",
        "All dogs are cats",
        "Neither conclusion definitely follows",
        "All birds are dogs"
      ],
      correct: 2,
      explanation: "The intersection of cats and birds cannot be confirmed with certainty from the given statements; neither follows necessarily.",
      difficulty: "Medium"
    },
    {
      id: "lr-5",
      category: "Logical Reasoning",
      question: "If South-East becomes North, and North-East becomes West, what will West become?",
      options: ["North-East", "South-East", "South-West", "North-West"],
      correct: 1,
      explanation: "South-East turning into North is a 135-degree anti-clockwise rotation. Rotating West 135 degrees anti-clockwise gives South-East.",
      difficulty: "Hard"
    },
    {
      id: "lr-6",
      category: "Logical Reasoning",
      question: "Find the odd one out: 27, 64, 125, 144, 216",
      options: ["27", "64", "125", "144"],
      correct: 3,
      explanation: "27 (3^3), 64 (4^3), 125 (5^3), and 216 (6^3) are perfect cubes. 144 is 12^2 (a square, not a cube).",
      difficulty: "Medium"
    },
    {
      id: "lr-7",
      category: "Logical Reasoning",
      question: "At 3:15, what is the acute angle between the hour hand and the minute hand of a clock?",
      options: ["0 degrees", "7.5 degrees", "15 degrees", "22.5 degrees"],
      correct: 1,
      explanation: "At 15 minutes, the minute hand is at 90°. The hour hand moves 0.5° per minute: 3*30° + 15*0.5° = 90° + 7.5° = 97.5°. Angle = 97.5° - 90° = 7.5°.",
      difficulty: "Hard"
    },
    {
      id: "lr-8",
      category: "Logical Reasoning",
      question: "Five friends A, B, C, D, E sit in a row. E is at the extreme left. B sits next to C, and D is to the immediate right of B. Who is in the middle?",
      options: ["A", "B", "C", "D"],
      correct: 1,
      explanation: "Arranging from left to right: E, C, B, D, A. The middle position (3rd of 5) is occupied by B.",
      difficulty: "Medium"
    },
    {
      id: "lr-9",
      category: "Logical Reasoning",
      question: "If 1st January 2024 was a Monday, what day of the week was 1st January 2025? (Note: 2024 is a leap year)",
      options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      correct: 1,
      explanation: "A leap year has 366 days = 52 weeks + 2 odd days. Monday + 2 odd days = Wednesday.",
      difficulty: "Medium"
    },
    {
      id: "lr-10",
      category: "Logical Reasoning",
      question: "Find the next number in the series: 4, 9, 25, 49, 121, ?",
      options: ["144", "169", "196", "225"],
      correct: 1,
      explanation: "The series consists of the squares of consecutive prime numbers: 2^2=4, 3^2=9, 5^2=25, 7^2=49, 11^2=121. The next prime is 13, so 13^2 = 169.",
      difficulty: "Hard"
    },
    {
      id: "lr-11",
      category: "Logical Reasoning",
      question: "In a straight row of 40 students facing North, Rohan is 18th from the left end. What is his position from the right end?",
      options: ["22nd", "23rd", "24th", "21st"],
      correct: 1,
      explanation: "Position from right = (Total - Position from left) + 1 = (40 - 18) + 1 = 22 + 1 = 23rd.",
      difficulty: "Easy"
    },
    {
      id: "lr-12",
      category: "Logical Reasoning",
      question: "If 'A + B' means A is the mother of B, and 'A * B' means A is the father of B, what does 'P * Q + R' mean?",
      options: ["P is the uncle of R", "P is the maternal grandfather of R", "P is the father of R", "P is the brother of R"],
      correct: 1,
      explanation: "P is the father of Q, and Q is the mother of R. Therefore, P is the maternal grandfather of R.",
      difficulty: "Medium"
    }
  ],

  verbal_ability: [
    {
      id: "va-1",
      category: "Verbal Ability",
      question: "Choose the most accurate synonym for 'METICULOUS':",
      options: ["Careless", "Thorough & Precise", "Aggressive", "Indifferent"],
      correct: 1,
      explanation: "'Meticulous' means showing great attention to detail, very careful and precise.",
      difficulty: "Easy"
    },
    {
      id: "va-2",
      category: "Verbal Ability",
      question: "Select the direct antonym for 'EPHEMERAL':",
      options: ["Transient", "Fleeting", "Permanent", "Fragile"],
      correct: 2,
      explanation: "'Ephemeral' means lasting for a very short time. Its opposite is 'Permanent' or everlasting.",
      difficulty: "Medium"
    },
    {
      id: "va-3",
      category: "Verbal Ability",
      question: "Choose the grammatically correct verb: 'Neither the manager nor the employees ______ informed of the schedule change.'",
      options: ["was", "were", "is", "has been"],
      correct: 1,
      explanation: "With 'neither... nor', the verb agrees with the subject closest to it. 'employees' is plural, so 'were' is correct.",
      difficulty: "Medium"
    },
    {
      id: "va-4",
      category: "Verbal Ability",
      question: "What does the idiom 'Bite the bullet' mean?",
      options: [
        "To cause an argument deliberately",
        "To face a grim situation with courage and fortitude",
        "To consume food quickly under pressure",
        "To fail an examination completely"
      ],
      correct: 1,
      explanation: "'To bite the bullet' means to bravely face and endure a grim or inevitable hardship.",
      difficulty: "Easy"
    },
    {
      id: "va-5",
      category: "Verbal Ability",
      question: "Identify the word with correct spelling:",
      options: ["Accomodation", "Acommodation", "Accommodation", "Acomodation"],
      correct: 2,
      explanation: "'Accommodation' is spelled with double 'c' and double 'm'.",
      difficulty: "Easy"
    },
    {
      id: "va-6",
      category: "Verbal Ability",
      question: "Choose the correct preposition: 'She has been working in Bengaluru ______ March 2021.'",
      options: ["for", "since", "from", "during"],
      correct: 1,
      explanation: "'since' is used with a specific point in past time in present perfect continuous tense.",
      difficulty: "Easy"
    },
    {
      id: "va-7",
      category: "Verbal Ability",
      question: "Identify the literary device used in: 'The ancient trees whispered secrets to the midnight breeze.'",
      options: ["Metaphor", "Personification", "Hyperbole", "Simile"],
      correct: 1,
      explanation: "Attributing human qualities (whispering secrets) to trees is personification.",
      difficulty: "Medium"
    },
    {
      id: "va-8",
      category: "Verbal Ability",
      question: "Convert to passive voice: 'The placement cell organized an campus recruitment drive.'",
      options: [
        "A campus recruitment drive was organized by the placement cell.",
        "A campus recruitment drive had been organized.",
        "The placement cell was organizing a drive.",
        "A drive is being organized by the cell."
      ],
      correct: 0,
      explanation: "Simple past active ('organized') converts to simple past passive ('was organized by...').",
      difficulty: "Medium"
    },
    {
      id: "va-9",
      category: "Verbal Ability",
      question: "Choose the correct meaning of the vocabulary word 'UBIQUITOUS':",
      options: ["Extremely rare", "Present everywhere simultaneously", "Deceptive or misleading", "Violently angry"],
      correct: 1,
      explanation: "'Ubiquitous' means existing or being present everywhere, omnipresent.",
      difficulty: "Easy"
    },
    {
      id: "va-10",
      category: "Verbal Ability",
      question: "Identify the antonym for the word 'CANDID':",
      options: ["Frank", "Guarded / Deceitful", "Outspoken", "Truthful"],
      correct: 1,
      explanation: "'Candid' means truthful and straightforward. Its antonym is guarded, secretive, or deceitful.",
      difficulty: "Medium"
    },
    {
      id: "va-11",
      category: "Verbal Ability",
      question: "Identify the error in the sentence: 'Each of the candidates have submitted their assignment on time.'",
      options: [
        "'Each of the'",
        "'candidates'",
        "'have submitted'",
        "'on time'"
      ],
      correct: 2,
      explanation: "The indefinite pronoun 'Each' is singular and requires the singular auxiliary verb 'has submitted' instead of 'have submitted'.",
      difficulty: "Medium"
    },
    {
      id: "va-12",
      category: "Verbal Ability",
      question: "Choose the sentence with correct modifier placement:",
      options: [
        "Walking into the interview room, the questions seemed intimidating to Sarah.",
        "Walking into the interview room, Sarah found the questions intimidating.",
        "Sarah saw the interview room walking quickly.",
        "The questions were intimidating walking into the room."
      ],
      correct: 1,
      explanation: "In option B, the introductory participial phrase 'Walking into the interview room' correctly modifies the subject 'Sarah' rather than 'the questions' (dangling modifier).",
      difficulty: "Hard"
    }
  ]
};

// --- App State Management ---
const AppState = {
  activeCategory: "all",
  pendingCategory: "all",
  configuredQuestionCount: 50,
  currentQuizQuestions: [],
  currentQuestionIndex: 0,
  userAnswers: {}, // index -> optionIndex
  timerSecondsRemaining: 3000, // 50 minutes default
  totalAllocatedSeconds: 3000,
  timerInterval: null,
  quizActive: false,
  quizStartTime: null,
  soundEnabled: localStorage.getItem("ib_sound_enabled") !== "false",
  theme: localStorage.getItem("ib_theme") || "dark"
};

// --- Web Audio Synthetic Sound Engine (Zero external dependencies) ---
const SoundEngine = {
  ctx: null,

  init() {
    if (!this.ctx && typeof window.AudioContext !== "undefined") {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },

  playClick() {
    if (!AppState.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === "suspended") this.ctx.resume();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {
      // Audio context might be restricted before interaction
    }
  },

  playSuccess() {
    if (!AppState.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === "suspended") this.ctx.resume();
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99]; // C5, E5, G5 major triad
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.12, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.2);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.2);
      });
    } catch (e) {}
  }
};

// --- DOM Cache ---
const DOM = {
  themeToggleBtn: document.getElementById("themeToggleBtn"),
  soundToggleBtn: document.getElementById("soundToggleBtn"),
  navLinks: document.querySelectorAll(".nav-link"),
  mobileNavToggle: document.getElementById("mobileNavToggle"),
  navLinksContainer: document.getElementById("navLinksContainer"),

  // Views
  homeSection: document.getElementById("homeSection"),
  categoriesSection: document.getElementById("categoriesSection"),
  dashboardSection: document.getElementById("dashboardSection"),
  aboutSection: document.getElementById("aboutSection"),
  quizSection: document.getElementById("quizSection"),
  resultSection: document.getElementById("resultSection"),

  // Quiz DOM Elements
  quizBadge: document.getElementById("quizBadge"),
  quizQuestionCounter: document.getElementById("quizQuestionCounter"),
  answeredCounterDisplay: document.getElementById("answeredCounterDisplay"),
  quizTimerWrap: document.getElementById("quizTimerWrap"),
  quizTimerDisplay: document.getElementById("quizTimerDisplay"),
  quizProgressFill: document.getElementById("quizProgressFill"),
  questionPalette: document.getElementById("questionPalette"),
  questionCard: document.getElementById("questionCard"),
  questionText: document.getElementById("questionText"),
  questionCodeWrap: document.getElementById("questionCodeWrap"),
  questionCode: document.getElementById("questionCode"),
  optionsList: document.getElementById("optionsList"),
  btnPrevQuestion: document.getElementById("btnPrevQuestion"),
  btnNextQuestion: document.getElementById("btnNextQuestion"),
  btnSubmitQuiz: document.getElementById("btnSubmitQuiz"),
  btnQuitQuiz: document.getElementById("btnQuitQuiz"),

  // Assessment Configuration Modal (50-100 Questions)
  quizConfigModal: document.getElementById("quizConfigModal"),
  configModalTitle: document.getElementById("configModalTitle"),
  configModalDesc: document.getElementById("configModalDesc"),
  questionCountSlider: document.getElementById("questionCountSlider"),
  questionCountBadge: document.getElementById("questionCountBadge"),
  configTimeEstimateText: document.getElementById("configTimeEstimateText"),
  modalConfigStartBtn: document.getElementById("modalConfigStartBtn"),
  modalConfigCancelBtn: document.getElementById("modalConfigCancelBtn"),
  lengthPresetsContainer: document.getElementById("lengthPresetsContainer"),
  heroMarathonBtn: document.getElementById("heroMarathonBtn"),

  // Result DOM Elements
  resultHeadline: document.getElementById("resultHeadline"),
  resultFeedbackMsg: document.getElementById("resultFeedbackMsg"),
  resultScorePercent: document.getElementById("resultScorePercent"),
  scoreGaugeCircle: document.getElementById("scoreGaugeCircle"),
  statFinalScore: document.getElementById("statFinalScore"),
  statAccuracy: document.getElementById("statAccuracy"),
  statCorrectCount: document.getElementById("statCorrectCount"),
  statWrongCount: document.getElementById("statWrongCount"),
  statTimeTaken: document.getElementById("statTimeTaken"),
  btnRetryQuiz: document.getElementById("btnRetryQuiz"),
  btnChooseCategory: document.getElementById("btnChooseCategory"),
  btnGoDashboard: document.getElementById("btnGoDashboard"),
  reviewAnswersContainer: document.getElementById("reviewAnswersContainer"),

  // Dashboard DOM Elements
  dashTotalQuizzes: document.getElementById("dashTotalQuizzes"),
  dashAvgScore: document.getElementById("dashAvgScore"),
  dashBestScore: document.getElementById("dashBestScore"),
  dashTotalCorrect: document.getElementById("dashTotalCorrect"),
  recentAttemptsBody: document.getElementById("recentAttemptsBody"),
  chartCanvasWrap: document.getElementById("chartCanvasWrap"),
  categoryMasteryList: document.getElementById("categoryMasteryList"),
  btnClearHistory: document.getElementById("btnClearHistory"),

  // Confirmation Modal
  confirmModal: document.getElementById("confirmModal"),
  modalTitle: document.getElementById("modalTitle"),
  modalDesc: document.getElementById("modalDesc"),
  modalConfirmBtn: document.getElementById("modalConfirmBtn"),
  modalCancelBtn: document.getElementById("modalCancelBtn"),

  // Toast Container
  toastContainer: document.getElementById("toastContainer")
};

// --- Toast Notification Utility ---
function showToast(message, icon = "info") {
  if (!DOM.toastContainer) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>${message}</span>`;
  DOM.toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// --- Theme Management ---
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  AppState.theme = theme;
  localStorage.setItem("ib_theme", theme);
  if (DOM.themeToggleBtn) {
    DOM.themeToggleBtn.innerHTML = theme === "light" 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  }
}

function toggleTheme() {
  const newTheme = AppState.theme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
  SoundEngine.playClick();
  showToast(`Switched to ${newTheme} mode`);
}

// --- Sound Toggle ---
function updateSoundButton() {
  if (DOM.soundToggleBtn) {
    DOM.soundToggleBtn.innerHTML = AppState.soundEnabled
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
  }
}

function toggleSound() {
  AppState.soundEnabled = !AppState.soundEnabled;
  localStorage.setItem("ib_sound_enabled", AppState.soundEnabled);
  updateSoundButton();
  SoundEngine.playClick();
  showToast(AppState.soundEnabled ? "Sound enabled" : "Sound muted");
}

// --- LocalStorage History Utilities ---
const HISTORY_KEY = "ib_quiz_history";

function getQuizHistory() {
  try {
    const data = localStorage.getItem(HISTORY_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function saveQuizAttempt(record) {
  const history = getQuizHistory();
  history.unshift(record); // Prepend recent attempt
  // Cap history to 50 attempts
  if (history.length > 50) history.pop();
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function clearQuizHistory() {
  localStorage.removeItem(HISTORY_KEY);
  renderDashboard();
  showToast("Quiz attempt history cleared");
}

// --- View Router (Single-Page Seamless Navigation) ---
function showView(viewId) {
  // Hide active sections
  if (DOM.quizSection) DOM.quizSection.classList.remove("active");
  if (DOM.resultSection) DOM.resultSection.classList.remove("active");

  const views = [DOM.homeSection, DOM.categoriesSection, DOM.dashboardSection, DOM.aboutSection];
  views.forEach(v => {
    if (v) v.style.display = "block";
  });

  if (viewId === "quiz") {
    views.forEach(v => { if (v) v.style.display = "none"; });
    if (DOM.quizSection) DOM.quizSection.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (viewId === "result") {
    views.forEach(v => { if (v) v.style.display = "none"; });
    if (DOM.resultSection) DOM.resultSection.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  // Smooth scroll to target standard section
  const targetElement = document.getElementById(viewId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }

  // Update active state in nav
  DOM.navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${viewId}`);
  });
}

// --- Dynamic Quiz Engine (Supports 10 to 100 questions) ---
function shuffleArray(array) {
  const clone = [...array];
  for (let i = clone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

function openQuizConfigModal(categoryId = "all", defaultCount = 50) {
  AppState.pendingCategory = categoryId;
  AppState.configuredQuestionCount = defaultCount;

  if (DOM.configModalTitle) {
    if (categoryId === "all") {
      DOM.configModalTitle.textContent = "Placement Assessment (50–100 Qs)";
      if (DOM.configModalDesc) {
        DOM.configModalDesc.textContent = "Select from 10 to 100 questions from our 108-question technical and aptitude repository.";
      }
    } else {
      const catObj = QUESTION_BANK[categoryId];
      const catName = catObj && catObj[0] ? catObj[0].category : "Subject Quiz";
      DOM.configModalTitle.textContent = `${catName} Assessment`;
      if (DOM.configModalDesc) {
        DOM.configModalDesc.textContent = `Choose your assessment length for ${catName} (10 to 100 questions).`;
      }
    }
  }

  // Sync slider and badges
  if (DOM.questionCountSlider) {
    DOM.questionCountSlider.value = defaultCount;
  }
  if (DOM.questionCountBadge) {
    DOM.questionCountBadge.textContent = `${defaultCount} Qs`;
  }
  if (DOM.configTimeEstimateText) {
    DOM.configTimeEstimateText.textContent = `Allocated Time: ${defaultCount} Minutes (1 min / question)`;
  }
  if (DOM.modalConfigStartBtn) {
    DOM.modalConfigStartBtn.textContent = `Launch ${defaultCount} Qs Assessment`;
  }

  // Update preset active chip
  document.querySelectorAll("#lengthPresetsContainer .preset-chip").forEach(chip => {
    chip.classList.toggle("active", parseInt(chip.getAttribute("data-count"), 10) === defaultCount);
  });

  if (DOM.quizConfigModal) {
    DOM.quizConfigModal.classList.add("active");
  }
}

function closeQuizConfigModal() {
  if (DOM.quizConfigModal) {
    DOM.quizConfigModal.classList.remove("active");
  }
}

function startQuiz(categoryId = "all", requestedCount = 50) {
  closeQuizConfigModal();
  AppState.activeCategory = categoryId;
  AppState.userAnswers = {};
  AppState.currentQuestionIndex = 0;
  AppState.quizActive = true;
  AppState.quizStartTime = Date.now();

  let questions = [];
  if (categoryId === "all") {
    // Merge all questions across all 9 categories (108 total questions)
    Object.values(QUESTION_BANK).forEach(catQuestions => {
      questions.push(...catQuestions);
    });
    // Shuffle and pick requested question count (up to 100)
    const count = Math.min(requestedCount, questions.length);
    questions = shuffleArray(questions).slice(0, count);
  } else if (QUESTION_BANK[categoryId]) {
    // Specific category requested
    let catQuestions = shuffleArray(QUESTION_BANK[categoryId]);
    if (requestedCount > catQuestions.length) {
      // When 50-100 questions are requested for a single category, supplement with related CS questions
      const extraQuestions = [];
      Object.keys(QUESTION_BANK).forEach(cat => {
        if (cat !== categoryId) {
          extraQuestions.push(...QUESTION_BANK[cat]);
        }
      });
      const combined = [...catQuestions, ...shuffleArray(extraQuestions)];
      questions = combined.slice(0, Math.min(requestedCount, combined.length));
    } else {
      questions = catQuestions.slice(0, requestedCount);
    }
  }

  if (questions.length === 0) {
    showToast("No questions available for this category yet.");
    return;
  }

  AppState.currentQuizQuestions = questions;
  AppState.totalAllocatedSeconds = questions.length * 60; // 1 min per question (e.g. 50 mins for 50 Qs, 100 mins for 100 Qs)
  AppState.timerSecondsRemaining = AppState.totalAllocatedSeconds;

  // Setup UI badge
  const categoryLabel = categoryId === "all" 
    ? `Grand Placement Assessment (${questions.length} Questions)` 
    : `${questions[0].category} Assessment (${questions.length} Qs)`;
  if (DOM.quizBadge) DOM.quizBadge.textContent = categoryLabel;

  renderQuestionPalette();
  renderCurrentQuestion();
  startTimer();
  showView("quiz");
  SoundEngine.playClick();
}

function renderQuestionPalette() {
  if (!DOM.questionPalette) return;
  DOM.questionPalette.innerHTML = "";
  const total = AppState.currentQuizQuestions.length;
  const answeredCount = Object.keys(AppState.userAnswers).length;

  if (DOM.answeredCounterDisplay) {
    DOM.answeredCounterDisplay.textContent = `${answeredCount} / ${total} Answered`;
  }

  for (let i = 0; i < total; i++) {
    const btn = document.createElement("button");
    btn.className = "palette-btn";
    btn.textContent = i + 1;
    btn.setAttribute("aria-label", `Go to question ${i + 1}`);
    btn.setAttribute("data-qindex", i);

    if (i === AppState.currentQuestionIndex) {
      btn.classList.add("active");
    }
    if (AppState.userAnswers[i] !== undefined) {
      btn.classList.add("answered");
    }

    btn.addEventListener("click", () => {
      SoundEngine.playClick();
      AppState.currentQuestionIndex = i;
      renderCurrentQuestion();
    });

    DOM.questionPalette.appendChild(btn);
  }
}

function renderCurrentQuestion() {
  const currentQ = AppState.currentQuizQuestions[AppState.currentQuestionIndex];
  if (!currentQ) return;

  const total = AppState.currentQuizQuestions.length;
  const currentNum = AppState.currentQuestionIndex + 1;

  // Counter
  if (DOM.quizQuestionCounter) {
    DOM.quizQuestionCounter.textContent = `Question ${currentNum} of ${total}`;
  }

  // Progress Bar
  if (DOM.quizProgressFill) {
    const percent = ((currentNum) / total) * 100;
    DOM.quizProgressFill.style.width = `${percent}%`;
  }

  // Question Text
  if (DOM.questionText) {
    DOM.questionText.textContent = `${currentNum}. ${currentQ.question}`;
  }

  // Optional Code Snippet
  if (DOM.questionCodeWrap && DOM.questionCode) {
    if (currentQ.code) {
      DOM.questionCodeWrap.style.display = "block";
      DOM.questionCode.textContent = currentQ.code;
    } else {
      DOM.questionCodeWrap.style.display = "none";
    }
  }

  // Options List
  if (DOM.optionsList) {
    DOM.optionsList.innerHTML = "";
    const letters = ["A", "B", "C", "D"];

    currentQ.options.forEach((optText, optIdx) => {
      const isSelected = AppState.userAnswers[AppState.currentQuestionIndex] === optIdx;
      const optionBtn = document.createElement("button");
      optionBtn.className = `option-item ${isSelected ? "selected" : ""}`;
      optionBtn.setAttribute("type", "button");
      optionBtn.innerHTML = `
        <span class="option-key">${letters[optIdx]}</span>
        <span class="option-label">${optText}</span>
      `;

      optionBtn.addEventListener("click", () => {
        selectOption(optIdx);
      });

      DOM.optionsList.appendChild(optionBtn);
    });
  }

  // Nav buttons state
  if (DOM.btnPrevQuestion) {
    DOM.btnPrevQuestion.disabled = AppState.currentQuestionIndex === 0;
    DOM.btnPrevQuestion.style.opacity = AppState.currentQuestionIndex === 0 ? "0.4" : "1";
  }

  // If last question, show "Submit Quiz" button prominently
  if (DOM.btnNextQuestion) {
    const isLast = AppState.currentQuestionIndex === total - 1;
    DOM.btnNextQuestion.style.display = isLast ? "none" : "inline-flex";
  }

  renderQuestionPalette();

  // Ensure active question button in question palette is visible
  if (DOM.questionPalette) {
    const activePaletteBtn = DOM.questionPalette.querySelector(`[data-qindex="${AppState.currentQuestionIndex}"]`);
    if (activePaletteBtn) {
      activePaletteBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    }
  }
}

function selectOption(optionIndex) {
  AppState.userAnswers[AppState.currentQuestionIndex] = optionIndex;
  SoundEngine.playClick();
  renderCurrentQuestion();
}

function nextQuestion() {
  if (AppState.currentQuestionIndex < AppState.currentQuizQuestions.length - 1) {
    AppState.currentQuestionIndex++;
    SoundEngine.playClick();
    renderCurrentQuestion();
  }
}

function prevQuestion() {
  if (AppState.currentQuestionIndex > 0) {
    AppState.currentQuestionIndex--;
    SoundEngine.playClick();
    renderCurrentQuestion();
  }
}

// --- Timer System ---
function formatTimer(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

function startTimer() {
  clearInterval(AppState.timerInterval);
  updateTimerDisplay();

  AppState.timerInterval = setInterval(() => {
    AppState.timerSecondsRemaining--;
    updateTimerDisplay();

    if (AppState.timerSecondsRemaining <= 0) {
      clearInterval(AppState.timerInterval);
      showToast("Time is up! Submitting your assessment...");
      finishQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  if (!DOM.quizTimerDisplay) return;
  DOM.quizTimerDisplay.textContent = formatTimer(AppState.timerSecondsRemaining);

  if (AppState.timerSecondsRemaining <= 60) {
    DOM.quizTimerWrap.classList.add("warning");
  } else {
    DOM.quizTimerWrap.classList.remove("warning");
  }
}

// --- Quiz Submission & Scoring ---
function confirmSubmitQuiz() {
  const total = AppState.currentQuizQuestions.length;
  const answeredCount = Object.keys(AppState.userAnswers).length;
  const unansweredCount = total - answeredCount;

  if (unansweredCount > 0) {
    showConfirmationModal({
      title: "Unanswered Questions",
      desc: `You have ${unansweredCount} unanswered question(s). Are you sure you want to finish and submit now?`,
      confirmText: "Yes, Submit",
      onConfirm: () => finishQuiz()
    });
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  clearInterval(AppState.timerInterval);
  AppState.quizActive = false;

  const total = AppState.currentQuizQuestions.length;
  let correctCount = 0;

  AppState.currentQuizQuestions.forEach((q, idx) => {
    if (AppState.userAnswers[idx] === q.correct) {
      correctCount++;
    }
  });

  const percentage = Math.round((correctCount / total) * 100);
  const elapsedSeconds = AppState.totalAllocatedSeconds - Math.max(0, AppState.timerSecondsRemaining);
  const timeTakenStr = formatTimer(elapsedSeconds);

  // Performance message
  let feedbackMessage = "";
  let kicker = "";
  if (percentage >= 80) {
    kicker = "Interview Ready";
    feedbackMessage = "Excellent! You are interview ready. Your core concepts and speed are outstanding.";
  } else if (percentage >= 60) {
    kicker = "Solid Performance";
    feedbackMessage = "Good job! Keep practicing. Review the questions you missed to achieve top percentile.";
  } else {
    kicker = "Needs Focus";
    feedbackMessage = "Keep learning and try again. Consistent practice is the secret to cracking technical rounds.";
  }

  // Save to LocalStorage History
  const categoryName = AppState.activeCategory === "all" ? "Mock Assessment" : AppState.currentQuizQuestions[0].category;
  const record = {
    id: "att-" + Date.now(),
    date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }),
    category: categoryName,
    categoryId: AppState.activeCategory,
    score: correctCount,
    total: total,
    percentage: percentage,
    timeTaken: timeTakenStr,
    timestamp: Date.now()
  };
  saveQuizAttempt(record);

  // Render Result Page
  if (DOM.resultHeadline) DOM.resultHeadline.textContent = kicker;
  if (DOM.resultFeedbackMsg) DOM.resultFeedbackMsg.textContent = feedbackMessage;
  if (DOM.resultScorePercent) DOM.resultScorePercent.textContent = `${percentage}%`;
  if (DOM.statFinalScore) DOM.statFinalScore.textContent = `${correctCount} / ${total}`;
  if (DOM.statAccuracy) DOM.statAccuracy.textContent = `${percentage}%`;
  if (DOM.statCorrectCount) DOM.statCorrectCount.textContent = correctCount;
  if (DOM.statWrongCount) DOM.statWrongCount.textContent = total - correctCount;
  if (DOM.statTimeTaken) DOM.statTimeTaken.textContent = timeTakenStr;

  // Animate Circular Gauge
  if (DOM.scoreGaugeCircle) {
    const circumference = 440;
    const offset = circumference - (circumference * percentage) / 100;
    DOM.scoreGaugeCircle.style.strokeDashoffset = 440;
    setTimeout(() => {
      DOM.scoreGaugeCircle.style.strokeDashoffset = offset;
    }, 150);
  }

  // Render Answers Review
  renderReviewList();

  // Show result view
  showView("result");
  SoundEngine.playSuccess();
  renderDashboard(); // refresh dashboard in background
}

function renderReviewList() {
  if (!DOM.reviewAnswersContainer) return;
  DOM.reviewAnswersContainer.innerHTML = "";

  AppState.currentQuizQuestions.forEach((q, idx) => {
    const userSelected = AppState.userAnswers[idx];
    const isCorrect = userSelected === q.correct;
    const letters = ["A", "B", "C", "D"];

    const reviewCard = document.createElement("div");
    reviewCard.className = `review-item ${isCorrect ? "was-correct" : "was-wrong"}`;

    const userAnsText = userSelected !== undefined ? `${letters[userSelected]}. ${q.options[userSelected]}` : "Not answered";
    const correctAnsText = `${letters[q.correct]}. ${q.options[q.correct]}`;

    reviewCard.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="review-question-title">Q${idx + 1}. ${q.question}</span>
        <span class="review-status-tag ${isCorrect ? "correct" : "wrong"}">
          ${isCorrect ? "Correct" : "Incorrect"}
        </span>
      </div>
      <div class="review-details">
        <div><strong>Your Choice:</strong> <span style="color: ${isCorrect ? "var(--color-success)" : "var(--color-danger)"};">${userAnsText}</span></div>
        <div><strong>Correct Choice:</strong> <span style="color: var(--color-success);">${correctAnsText}</span></div>
      </div>
      <div class="review-explanation">
        <strong>Explanation:</strong> ${q.explanation}
      </div>
    `;

    DOM.reviewAnswersContainer.appendChild(reviewCard);
  });
}

// --- Performance Dashboard Engine ---
function renderDashboard() {
  const history = getQuizHistory();

  // KPI calculations
  const totalQuizzes = history.length;
  let totalScoreSum = 0;
  let bestScore = 0;
  let totalCorrect = 0;

  history.forEach(item => {
    totalScoreSum += item.percentage;
    if (item.percentage > bestScore) bestScore = item.percentage;
    totalCorrect += item.score;
  });

  const avgScore = totalQuizzes > 0 ? Math.round(totalScoreSum / totalQuizzes) : 0;

  if (DOM.dashTotalQuizzes) DOM.dashTotalQuizzes.textContent = totalQuizzes;
  if (DOM.dashAvgScore) DOM.dashAvgScore.textContent = `${avgScore}%`;
  if (DOM.dashBestScore) DOM.dashBestScore.textContent = `${bestScore}%`;
  if (DOM.dashTotalCorrect) DOM.dashTotalCorrect.textContent = totalCorrect;

  // Render Bar Chart (Recent 7 attempts)
  if (DOM.chartCanvasWrap) {
    DOM.chartCanvasWrap.innerHTML = "";
    const recentSample = history.slice(0, 7).reverse();

    if (recentSample.length === 0) {
      DOM.chartCanvasWrap.innerHTML = `<div class="empty-history-placeholder" style="width:100%;">Complete your first quiz to generate live performance analytics.</div>`;
    } else {
      recentSample.forEach((item, index) => {
        const barCol = document.createElement("div");
        barCol.className = "chart-bar-col";
        const barHeight = Math.max(10, (item.percentage / 100) * 180);

        barCol.innerHTML = `
          <div class="chart-bar" style="height: ${barHeight}px;" data-score="${item.percentage}%"></div>
          <span class="chart-bar-label">${item.category.split(" ")[0]}</span>
        `;
        DOM.chartCanvasWrap.appendChild(barCol);
      });
    }
  }

  // Category Mastery progress bars
  if (DOM.categoryMasteryList) {
    DOM.categoryMasteryList.innerHTML = "";
    const categoriesList = [
      { id: "python", name: "Python" },
      { id: "java", name: "Java" },
      { id: "sql", name: "SQL" },
      { id: "javascript", name: "JavaScript" },
      { id: "data_structures", name: "Data Structures" },
      { id: "aptitude", name: "Aptitude" }
    ];

    categoriesList.forEach(cat => {
      const attempts = history.filter(h => h.categoryId === cat.id);
      let catAvg = 0;
      if (attempts.length > 0) {
        catAvg = Math.round(attempts.reduce((acc, c) => acc + c.percentage, 0) / attempts.length);
      }

      const masteryItem = document.createElement("div");
      masteryItem.className = "mastery-item";
      masteryItem.innerHTML = `
        <div class="mastery-header">
          <span>${cat.name}</span>
          <span>${attempts.length > 0 ? catAvg + "%" : "Not attempted"}</span>
        </div>
        <div class="mastery-progress-bg">
          <div class="mastery-progress-bar" style="width: ${catAvg}%;"></div>
        </div>
      `;
      DOM.categoryMasteryList.appendChild(masteryItem);
    });
  }

  // Recent Attempts Table
  if (DOM.recentAttemptsBody) {
    DOM.recentAttemptsBody.innerHTML = "";
    if (history.length === 0) {
      DOM.recentAttemptsBody.innerHTML = `
        <tr>
          <td colspan="5" class="empty-history-placeholder">
            No quiz attempts recorded yet. Click 'Start Practicing' to take your first test!
          </td>
        </tr>
      `;
    } else {
      history.slice(0, 10).forEach(item => {
        const row = document.createElement("tr");
        let badgeClass = "badge-status ";
        if (item.percentage >= 80) badgeClass += "pass";
        else if (item.percentage >= 60) badgeClass += "average";
        else badgeClass += "retry";

        row.innerHTML = `
          <td><strong>${item.category}</strong></td>
          <td>${item.date}</td>
          <td>${item.score} / ${item.total} (${item.percentage}%)</td>
          <td>${item.timeTaken}</td>
          <td><span class="${badgeClass}">${item.percentage >= 80 ? "Interview Ready" : item.percentage >= 60 ? "Good" : "Needs Review"}</span></td>
        `;
        DOM.recentAttemptsBody.appendChild(row);
      });
    }
  }
}

// --- Confirmation Modal Utility ---
function showConfirmationModal({ title, desc, confirmText, onConfirm }) {
  if (!DOM.confirmModal) return;
  DOM.modalTitle.textContent = title;
  DOM.modalDesc.textContent = desc;
  DOM.modalConfirmBtn.textContent = confirmText || "Confirm";

  DOM.confirmModal.classList.add("active");

  const handleConfirm = () => {
    DOM.confirmModal.classList.remove("active");
    DOM.modalConfirmBtn.removeEventListener("click", handleConfirm);
    if (onConfirm) onConfirm();
  };

  const handleCancel = () => {
    DOM.confirmModal.classList.remove("active");
    DOM.modalConfirmBtn.removeEventListener("click", handleConfirm);
  };

  DOM.modalConfirmBtn.addEventListener("click", handleConfirm);
  DOM.modalCancelBtn.onclick = handleCancel;
}

// --- Keyboard Shortcuts ---
function initKeyboardShortcuts() {
  window.addEventListener("keydown", (e) => {
    if (!AppState.quizActive) return;

    // Keys 1, 2, 3, 4
    if (["1", "2", "3", "4"].includes(e.key)) {
      const optIdx = parseInt(e.key, 10) - 1;
      selectOption(optIdx);
    }
    // Keys A, B, C, D (case insensitive)
    const keyLower = e.key.toLowerCase();
    if (["a", "b", "c", "d"].includes(keyLower)) {
      const map = { a: 0, b: 1, c: 2, d: 3 };
      selectOption(map[keyLower]);
    }
    // Next / Previous
    if (e.key === "ArrowRight" || keyLower === "n") {
      nextQuestion();
    }
    if (e.key === "ArrowLeft" || keyLower === "p") {
      prevQuestion();
    }
  });
}

// --- Event Listeners Setup ---
function setupEventListeners() {
  // Theme & Sound
  if (DOM.themeToggleBtn) DOM.themeToggleBtn.addEventListener("click", toggleTheme);
  if (DOM.soundToggleBtn) DOM.soundToggleBtn.addEventListener("click", toggleSound);

  // Mobile nav toggle
  if (DOM.mobileNavToggle && DOM.navLinksContainer) {
    DOM.mobileNavToggle.addEventListener("click", () => {
      DOM.navLinksContainer.classList.toggle("mobile-open");
    });
  }

  // Smooth Navigation Links
  DOM.navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const sectionId = href.substring(1);
        showView(sectionId);
        if (DOM.navLinksContainer) DOM.navLinksContainer.classList.remove("mobile-open");
      }
    });
  });

  // Category filter tabs
  const filterBtns = document.querySelectorAll(".filter-btn");
  const categoryCards = document.querySelectorAll(".category-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const targetGroup = btn.getAttribute("data-filter");

      categoryCards.forEach(card => {
        if (targetGroup === "all" || card.getAttribute("data-group") === targetGroup) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
      SoundEngine.playClick();
    });
  });

  // Start Quiz Buttons on Category Cards
  document.querySelectorAll(".btn-start-quiz").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".category-card");
      const catId = card.getAttribute("data-category");
      openQuizConfigModal(catId, 12);
    });
  });

  // Hero Section CTA buttons
  const heroStartBtn = document.getElementById("heroStartBtn");
  if (heroStartBtn) {
    heroStartBtn.addEventListener("click", () => {
      openQuizConfigModal("all", 10);
    });
  }

  // Hero 50-100 Question Marathon Assessment CTA
  if (DOM.heroMarathonBtn) {
    DOM.heroMarathonBtn.addEventListener("click", () => {
      openQuizConfigModal("all", 50);
    });
  }

  const heroExploreBtn = document.getElementById("heroExploreBtn");
  if (heroExploreBtn) {
    heroExploreBtn.addEventListener("click", () => {
      showView("categoriesSection");
    });
  }

  // Nav Practice Now button
  const navPracticeBtn = document.getElementById("navPracticeBtn");
  if (navPracticeBtn) {
    navPracticeBtn.addEventListener("click", () => {
      openQuizConfigModal("all", 50);
    });
  }

  // Assessment Configuration Modal Events (50 - 100 questions range)
  if (DOM.questionCountSlider) {
    DOM.questionCountSlider.addEventListener("input", (e) => {
      const val = parseInt(e.target.value, 10);
      AppState.configuredQuestionCount = val;
      if (DOM.questionCountBadge) DOM.questionCountBadge.textContent = `${val} Qs`;
      if (DOM.configTimeEstimateText) {
        DOM.configTimeEstimateText.textContent = `Allocated Time: ${val} Minutes (1 min / question)`;
      }
      if (DOM.modalConfigStartBtn) {
        DOM.modalConfigStartBtn.textContent = `Launch ${val} Qs Assessment`;
      }
      document.querySelectorAll("#lengthPresetsContainer .preset-chip").forEach(chip => {
        chip.classList.toggle("active", parseInt(chip.getAttribute("data-count"), 10) === val);
      });
    });
  }

  document.querySelectorAll("#lengthPresetsContainer .preset-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const count = parseInt(chip.getAttribute("data-count"), 10);
      AppState.configuredQuestionCount = count;
      if (DOM.questionCountSlider) DOM.questionCountSlider.value = count;
      if (DOM.questionCountBadge) DOM.questionCountBadge.textContent = `${count} Qs`;
      if (DOM.configTimeEstimateText) {
        DOM.configTimeEstimateText.textContent = `Allocated Time: ${count} Minutes (1 min / question)`;
      }
      if (DOM.modalConfigStartBtn) {
        DOM.modalConfigStartBtn.textContent = `Launch ${count} Qs Assessment`;
      }
      document.querySelectorAll("#lengthPresetsContainer .preset-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      SoundEngine.playClick();
    });
  });

  if (DOM.modalConfigStartBtn) {
    DOM.modalConfigStartBtn.addEventListener("click", () => {
      startQuiz(AppState.pendingCategory, AppState.configuredQuestionCount);
    });
  }

  if (DOM.modalConfigCancelBtn) {
    DOM.modalConfigCancelBtn.addEventListener("click", closeQuizConfigModal);
  }

  // Quiz Navigation Buttons
  if (DOM.btnPrevQuestion) DOM.btnPrevQuestion.addEventListener("click", prevQuestion);
  if (DOM.btnNextQuestion) DOM.btnNextQuestion.addEventListener("click", nextQuestion);
  if (DOM.btnSubmitQuiz) DOM.btnSubmitQuiz.addEventListener("click", confirmSubmitQuiz);

  if (DOM.btnQuitQuiz) {
    DOM.btnQuitQuiz.addEventListener("click", () => {
      showConfirmationModal({
        title: "Quit Assessment?",
        desc: "Your current progress in this quiz session will be discarded.",
        confirmText: "Quit",
        onConfirm: () => {
          clearInterval(AppState.timerInterval);
          AppState.quizActive = false;
          showView("categoriesSection");
        }
      });
    });
  }

  // Result Page Action Buttons
  if (DOM.btnRetryQuiz) {
    DOM.btnRetryQuiz.addEventListener("click", () => {
      startQuiz(AppState.activeCategory, AppState.currentQuizQuestions.length || 50);
    });
  }

  if (DOM.btnChooseCategory) {
    DOM.btnChooseCategory.addEventListener("click", () => {
      showView("categoriesSection");
    });
  }

  if (DOM.btnGoDashboard) {
    DOM.btnGoDashboard.addEventListener("click", () => {
      showView("dashboardSection");
    });
  }

  // Clear History
  if (DOM.btnClearHistory) {
    DOM.btnClearHistory.addEventListener("click", () => {
      showConfirmationModal({
        title: "Clear All History?",
        desc: "This will permanently remove your stored assessment attempts from this browser.",
        confirmText: "Clear History",
        onConfirm: clearQuizHistory
      });
    });
  }

  // Export History (JSON)
  const btnExportHistory = document.getElementById("btnExportHistory");
  if (btnExportHistory) {
    btnExportHistory.addEventListener("click", () => {
      const history = getQuizHistory();
      const blob = new Blob([JSON.stringify(history, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `interview_boost_history_${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast("Quiz history exported successfully");
    });
  }
}

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(AppState.theme);
  updateSoundButton();
  setupEventListeners();
  initKeyboardShortcuts();
  renderDashboard();
});

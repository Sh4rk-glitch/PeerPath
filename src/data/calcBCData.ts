

export interface Lesson {
  id: string;
  topic: string;
  videoId: string;
  quiz?: any[];
}

export interface Unit {
  title: string;
  lessons: Lesson[];
}

export interface CourseCurriculum {
  [unitKey: string]: Unit;
}

export interface AllCurriculumData {
  [courseSlug: string]: CourseCurriculum;
}

export const curriculumData: Record<string, any> = {
  "ap-calculus-BC": {
    "unit-1": {
      title: "Unit 1: Limits and Continuity",
      lessons: [
        {
          id: "1-1",
          topic: "1.1 Introducing Calculus: Can We Calculate Instantaneous Rates of Change?",
          videoId: "txhXvi8vlrQ", // Verified Embeddable - Intro to Rates
          quiz: [
            {
              q: "What is the primary difference between Algebra and Calculus?",
              options: [
                { text: "Algebra deals with variables; Calculus deals with numbers.", correct: false },
                { text: "Algebra calculates static, average rates of change; Calculus calculates dynamic, instantaneous rates of change.", correct: true },
                { text: "Calculus is only used for curved graphs.", correct: false },
                { text: "There is no fundamental difference.", correct: false }
              ],
              explanation: "Algebra can find the average speed over an hour using a secant line. Calculus uses limits to find the exact speed at a specific millisecond using a tangent line."
            },
            {
              q: "Graphically, an average rate of change is represented by the slope of a:",
              options: [
                { text: "Tangent line", correct: false },
                { text: "Secant line", correct: true },
                { text: "Normal line", correct: false },
                { text: "Horizontal asymptote", correct: false }
              ],
              explanation: "A secant line connects two distinct points on a curve, representing the average rate of change between them."
            },
            {
              q: "Graphically, an instantaneous rate of change is represented by the slope of a:",
              options: [
                { text: "Secant line", correct: false },
                { text: "Tangent line", correct: true },
                { text: "Perpendicular line", correct: false },
                { text: "Vertical asymptote", correct: false }
              ],
              explanation: "A tangent line touches the curve at exactly one point, representing the exact rate of change at that specific instant."
            },
            {
              q: "How do we conceptually move from a secant line to a tangent line?",
              options: [
                { text: "By moving the two points on the secant line infinitely far apart.", correct: false },
                { text: "By bringing the two points on the secant line infinitely close together.", correct: true },
                { text: "By changing the function to a linear equation.", correct: false },
                { text: "By taking the reciprocal of the slope.", correct: false }
              ],
              explanation: "As the distance between the two points approaches zero (a limit), the secant line becomes the tangent line."
            },
            {
              q: "If a car travels 100 miles in 2 hours, what does the value 50 mph represent?",
              options: [
                { text: "Instantaneous velocity at hour 1", correct: false },
                { text: "Average velocity over the 2 hours", correct: true },
                { text: "Maximum velocity achieved", correct: false },
                { text: "Acceleration", correct: false }
              ],
              explanation: "Total distance divided by total time gives an average. We don't know the exact speed at any specific moment from this data alone."
            },
            {
              q: "Which of the following requires Calculus to solve?",
              options: [
                { text: "Finding the slope of a straight line.", correct: false },
                { text: "Finding the exact speed of a falling object at exactly t = 3 seconds.", correct: true },
                { text: "Finding the intersection of two lines.", correct: false },
                { text: "Finding the area of a rectangle.", correct: false }
              ],
              explanation: "Finding an exact speed at a single instant on a curved trajectory (falling objects accelerate) requires a limit, which is the foundation of Calculus."
            },
            {
              q: "The formula for the slope of a secant line is equivalent to:",
              options: [
                { text: "The difference quotient: (f(x+h) - f(x)) / h", correct: true },
                { text: "The quadratic formula", correct: false },
                { text: "Area = base * height", correct: false },
                { text: "y = mx + b", correct: false }
              ],
              explanation: "The difference quotient is just the slope formula (y2 - y1) / (x2 - x1) applied to function notation, where h is the distance between x values."
            },
            {
              q: "As 'h' (the distance between two x-values) approaches 0 in the difference quotient, we find:",
              options: [
                { text: "The average rate of change", correct: false },
                { text: "The y-intercept", correct: false },
                { text: "The instantaneous rate of change", correct: true },
                { text: "An undefined error", correct: false }
              ],
              explanation: "Applying a limit as h approaches 0 turns the average rate of change (secant) into the instantaneous rate of change (tangent)."
            },
            {
              q: "Why can't we simply set h = 0 in the difference quotient (f(x+h) - f(x)) / h to find the tangent slope?",
              options: [
                { text: "It would result in division by zero.", correct: true },
                { text: "It would make the slope infinite.", correct: false },
                { text: "It would result in a negative number.", correct: false },
                { text: "Because h must always be 1.", correct: false }
              ],
              explanation: "Setting h=0 makes the denominator 0, which is undefined. This is why we need limits—to see what value the function *approaches* as h gets infinitesimally small."
            },
            {
              q: "In the context of rates of change, what does the word 'infinitesimal' mean?",
              options: [
                { text: "Infinitely large", correct: false },
                { text: "Exactly zero", correct: false },
                { text: "Approaching zero, but not exactly zero", correct: true },
                { text: "A constant number like Pi", correct: false }
              ],
              explanation: "Calculus relies on the concept of infinitesimals—quantities that are closer to zero than any standard real number, but are not zero themselves."
            }
          ]
        },
        {
          id: "1-2",
          topic: "1.2 Defining Limits and Using Limit Notation",
          videoId: "V98KUHeyQWQ", // Verified Embeddable
          quiz: [
            { 
              q: "According to the formal definition, what does lim (x→c) f(x) = L mean?", 
              options: [
                { text: "f(c) is exactly equal to L.", correct: false }, 
                { text: "As the x-values get infinitely close to c from both sides, the y-values get infinitely close to L.", correct: true },
                { text: "The function crosses the x-axis at c.", correct: false },
                { text: "The rate of change at x = c is L.", correct: false }
              ],
              explanation: "A limit describes the behavior of a function as it approaches a specific x-value, regardless of what actually happens at that exact point."
            },
            { 
              q: "Does the actual value of the function at c, f(c), need to exist for the limit to exist?", 
              options: [
                { text: "Yes, the limit is always exactly f(c).", correct: false }, 
                { text: "No, a limit describes the behavior approaching c, not what happens exactly at c.", correct: true },
                { text: "Only if the function is linear.", correct: false },
                { text: "Yes, otherwise it is an asymptote.", correct: false }
              ],
              explanation: "A function can have a hole at x = c (meaning f(c) is undefined), but the limit can still exist if the graph approaches a specific y-value from both sides."
            },
            {
              q: "What is the notation for a right-hand limit?",
              options: [
                { text: "lim (x→c) f(x)", correct: false },
                { text: "lim (x→c⁺) f(x)", correct: true },
                { text: "lim (x→c⁻) f(x)", correct: false },
                { text: "lim (x→∞) f(x)", correct: false }
              ],
              explanation: "The plus sign superscript (c⁺) indicates that we are approaching the value c from the right side (values greater than c)."
            },
            {
              q: "In order for a general two-sided limit lim (x→c) f(x) to exist, which of the following must be true?",
              options: [
                { text: "The function must be continuous at x = c.", correct: false },
                { text: "The left-hand limit and right-hand limit must both exist and equal the same value.", correct: true },
                { text: "The limit must equal 0.", correct: false },
                { text: "The function must be defined at x = c.", correct: false }
              ],
              explanation: "If a graph approaches y = 2 from the left and y = 5 from the right, the general limit Does Not Exist (DNE) because the two sides do not agree."
            },
            {
              q: "If lim (x→3⁻) f(x) = 4 and lim (x→3⁺) f(x) = 4, but f(3) = 10, what is lim (x→3) f(x)?",
              options: [
                { text: "10", correct: false },
                { text: "4", correct: true },
                { text: "14", correct: false },
                { text: "Does Not Exist", correct: false }
              ],
              explanation: "Since the left and right hand limits both equal 4, the general limit is 4. The actual function value at f(3) = 10 is irrelevant to the limit."
            },
            {
              q: "Which symbol denotes that a limit does not approach a finite number, but rather grows without bound?",
              options: [
                { text: "DNE", correct: false },
                { text: "0", correct: false },
                { text: "∞ (Infinity)", correct: true },
                { text: "c", correct: false }
              ],
              explanation: "While formally a limit of infinity means the limit 'does not exist' as a real number, we use ∞ to specifically describe the unbounded behavior of the function."
            },
            {
              q: "If a limit evaluates to 0 / 0 when you plug in the c value, this is called:",
              options: [
                { text: "An infinite limit", correct: false },
                { text: "An indeterminate form", correct: true },
                { text: "A continuous point", correct: false },
                { text: "A definite integral", correct: false }
              ],
              explanation: "0/0 is an indeterminate form. It means you must use algebraic manipulation (like factoring) to find the actual limit."
            },
            {
              q: "The statement 'lim (x→a) f(x) = L' is read out loud as:",
              options: [
                { text: "The limit of x as a approaches f of x is L.", correct: false },
                { text: "The limit of f of x as x approaches a is L.", correct: true },
                { text: "f of x equals L when x equals a.", correct: false },
                { text: "As L approaches a, x equals f of x.", correct: false }
              ],
              explanation: "This is the standard verbalization of limit notation."
            },
            {
              q: "If lim (x→2⁻) f(x) = 7 and lim (x→2⁺) f(x) = -7, what can we conclude?",
              options: [
                { text: "lim (x→2) f(x) = 0", correct: false },
                { text: "lim (x→2) f(x) = 7", correct: false },
                { text: "lim (x→2) f(x) Does Not Exist", correct: true },
                { text: "f(2) is undefined", correct: false }
              ],
              explanation: "Because 7 ≠ -7, the left and right limits do not match, therefore the general two-sided limit does not exist."
            },
            {
              q: "Why are one-sided limits useful?",
              options: [
                { text: "They are easier to calculate than two-sided limits.", correct: false },
                { text: "They allow us to describe the behavior of functions at endpoints of domains or at jump discontinuities.", correct: true },
                { text: "They are the only limits used in integrals.", correct: false },
                { text: "They always equal zero.", correct: false }
              ],
              explanation: "For functions like the square root of x, the domain starts at 0. We cannot take a two-sided limit at x=0, but we can evaluate the right-hand limit to understand the function's behavior."
            }
          ]
        },
        {
          id: "1-3",
          topic: "1.3 Estimating Limit Values from Graphs",
          videoId: "TXTGDlDr2JM", // Verified Embeddable
          quiz: [
            { q: "If the left-hand limit approaches y=3 and the right-hand limit approaches y=5 at x=2, what is lim(x→2)?", options: [{text: "3", correct: false}, {text: "5", correct: false}, {text: "DNE", correct: true}, {text: "4", correct: false}], explanation: "A general limit only exists if both one-sided limits converge to the same value." },
            { q: "A graph has a hole at (4, 7). What is the limit as x approaches 4?", options: [{text: "7", correct: true}, {text: "DNE", correct: false}, {text: "0", correct: false}, {text: "Infinity", correct: false}], explanation: "Limits describe what the y-value approaches, regardless of whether the point actually exists there." },
            { q: "At a vertical asymptote x=1, the graph shoots up to infinity on both sides. Formally, the limit:", options: [{text: "Is 1", correct: false}, {text: "Is 0", correct: false}, {text: "Does Not Exist", correct: true}, {text: "Is defined as a real number", correct: false}], explanation: "Infinity is not a real number, so the limit technically Does Not Exist (though we write = ∞ to describe behavior)." },
            { q: "If a graph oscillates infinitely rapidly between -1 and 1 as it approaches x=0, the limit:", options: [{text: "Is 0", correct: false}, {text: "Is 1", correct: false}, {text: "Is -1", correct: false}, {text: "DNE", correct: true}], explanation: "Because the function never settles on a single value, the limit does not exist." },
            { q: "True or False: A solid dot on a graph always indicates the limit's value.", options: [{text: "True", correct: false}, {text: "False", correct: true}], explanation: "A solid dot is the function value f(c). The limit is the y-value the graph's paths point toward." },
            { q: "If lim(x→c⁻) f(x) = L and f(c) = K, what do we know about lim(x→c)?", options: [{text: "It is L", correct: false}, {text: "It is K", correct: false}, {text: "We don't have enough info (need right-hand limit)", correct: true}, {text: "It DNE", correct: false}], explanation: "You must know the behavior from BOTH sides to evaluate a two-sided limit." },
            { q: "What visual feature indicates a 'jump' discontinuity?", options: [{text: "A vertical dashed line", correct: false}, {text: "A gap between two separate curve endpoints at the same x-value", correct: true}, {text: "A single missing point", correct: false}, {text: "A sharp corner", correct: false}], explanation: "Jump discontinuities happen when left and right limits are finite but unequal." },
            { q: "If a function is a straight horizontal line at y=4, what is lim(x→10)?", options: [{text: "10", correct: false}, {text: "4", correct: true}, {text: "0", correct: false}, {text: "DNE", correct: false}], explanation: "The limit of a constant function is just that constant value." },
            { q: "Tracing a curve with your finger from the left towards x=a finds the:", options: [{text: "Derivative", correct: false}, {text: "Right-hand limit", correct: false}, {text: "Left-hand limit", correct: true}, {text: "Function value", correct: false}], explanation: "Approaching from x-values less than 'a' gives the left-hand limit." },
            { q: "If a graph shows f(2) = 5 but the curves on both sides point to y=8, what is lim(x→2)?", options: [{text: "5", correct: false}, {text: "8", correct: true}, {text: "DNE", correct: false}, {text: "13", correct: false}], explanation: "The limit is independent of the actual function value at that specific point." }
          ]
        },
        {
          id: "1-4",
          topic: "1.4 Estimating Limit Values from Tables",
          videoId: "qmzzZRr3-5k", 
          quiz: [
            { q: "To estimate lim(x→3), which x-values should be in your table?", options: [{text: "1, 2, 3", correct: false}, {text: "2.9, 2.99 AND 3.1, 3.01", correct: true}, {text: "3, 4, 5", correct: false}, {text: "0, 3, 6", correct: false}], explanation: "You need values infinitesimally close to 3 from both sides." },
            { q: "If a table shows y-values 4.9, 4.99, 4.999... the limit is likely:", options: [{text: "4", correct: false}, {text: "4.999", correct: false}, {text: "5", correct: true}, {text: "DNE", correct: false}], explanation: "The values are converging towards the integer 5." },
            { q: "If the table shows y-values jumping: 1, -1, 1, -1 as x→0, the limit:", options: [{text: "Is 0", correct: false}, {text: "Is 1", correct: false}, {text: "DNE", correct: true}, {text: "Is -1", correct: false}], explanation: "Oscillation means the function does not approach a single target value." },
            { q: "If x-values approach 2 and y-values are 10, 100, 1000, 10000... the limit:", options: [{text: "Is 0", correct: false}, {text: "Is 10000", correct: false}, {text: "DNE (goes to infinity)", correct: true}, {text: "Is 2", correct: false}], explanation: "Unbounded growth means there is a vertical asymptote, so the limit formally DNE." },
            { q: "Why might a table be misleading?", options: [{text: "Calculators can't do decimals", correct: false}, {text: "The function might behave wildly between the tested points", correct: true}, {text: "Tables are banned on the AP exam", correct: false}, {text: "Tables only show derivatives", correct: false}], explanation: "A table only gives discrete snapshots; it misses what happens in the microscopic gaps." },
            { q: "If f(5) shows 'ERROR' on a calculator table, can lim(x→5) exist?", options: [{text: "No", correct: false}, {text: "Yes, if the surrounding values converge", correct: true}, {text: "Only if the error is 0/0", correct: false}, {text: "Yes, it will always be 0", correct: false}], explanation: "An error just means f(c) is undefined, but the limit looks at the approach, not the destination." },
            { q: "For lim(x→0), testing x = 0.1, 0.01, 0.001 only gives you the:", options: [{text: "Left-hand limit", correct: false}, {text: "Right-hand limit", correct: true}, {text: "General limit", correct: false}, {text: "Derivative", correct: false}], explanation: "Positive values approaching 0 represent the approach from the right side." },
            { q: "To find the left-hand limit at x=0, you should test:", options: [{text: "0.1, 0.01", correct: false}, {text: "1, 2, 3", correct: false}, {text: "-0.1, -0.01, -0.001", correct: true}, {text: "0", correct: false}], explanation: "Values slightly less than 0 are negative decimals approaching 0." },
            { q: "If the right-hand table goes to 5 and the left-hand table goes to -5, the general limit:", options: [{text: "Is 0", correct: false}, {text: "Is 5", correct: false}, {text: "DNE", correct: true}, {text: "Is -5", correct: false}], explanation: "The two sides must agree for a general limit to exist." },
            { q: "When constructing a table, how close should your x-values get to 'c'?", options: [{text: "Within 1 unit", correct: false}, {text: "Within 0.1 units", correct: false}, {text: "Progressively closer (e.g., .1, .01, .001)", correct: true}, {text: "It doesn't matter", correct: false}], explanation: "You must establish a clear trend of convergence by getting progressively closer." }
          ]
        },
        {
          id: "1-5",
          topic: "1.5 Determining Limits Using Algebraic Properties of Limits",
          videoId: "cqOHGzG01lo", 
          quiz: [
            {
              q: "If lim(x→c) f(x) = 5 and lim(x→c) g(x) = -2, what is lim(x→c) [f(x) + g(x)]?",
              options: [
                { text: "3", correct: true },
                { text: "7", correct: false },
                { text: "-10", correct: false },
                { text: "Does Not Exist", correct: false }
              ],
              explanation: "The Sum Rule for limits states that the limit of a sum is the sum of the limits: 5 + (-2) = 3."
            },
            {
              q: "If lim(x→a) f(x) = 4 and lim(x→a) g(x) = 3, what is lim(x→a) [f(x) * g(x)]?",
              options: [
                { text: "7", correct: false },
                { text: "12", correct: true },
                { text: "4/3", correct: false },
                { text: "1", correct: false }
              ],
              explanation: "The Product Rule for limits states that the limit of a product is the product of the limits: 4 * 3 = 12."
            },
            {
              q: "If lim(x→2) f(x) = 8, what is lim(x→2) [3 * f(x)]?",
              options: [
                { text: "8", correct: false },
                { text: "11", correct: false },
                { text: "24", correct: true },
                { text: "Does Not Exist", correct: false }
              ],
              explanation: "The Constant Multiple Rule allows you to pull the constant out: 3 * lim(x→2) f(x) = 3 * 8 = 24."
            },
            {
              q: "If lim(x→1) f(x) = 10 and lim(x→1) g(x) = 0, what is lim(x→1) [f(x) / g(x)]?",
              options: [
                { text: "10", correct: false },
                { text: "0", correct: false },
                { text: "Does Not Exist (or infinity)", correct: true },
                { text: "1", correct: false }
              ],
              explanation: "The Quotient Rule only applies if the limit of the denominator is not zero. Since it is 0, the limit DNE (it approaches a vertical asymptote)."
            },
            {
              q: "What is lim(x→5) 7?",
              options: [
                { text: "0", correct: false },
                { text: "5", correct: false },
                { text: "7", correct: true },
                { text: "35", correct: false }
              ],
              explanation: "The limit of a constant is just the constant itself, regardless of what x approaches."
            },
            {
              q: "If lim(x→c) f(x) = 16, what is lim(x→c) [sqrt(f(x))]?",
              options: [
                { text: "4", correct: true },
                { text: "16", correct: false },
                { text: "8", correct: false },
                { text: "256", correct: false }
              ],
              explanation: "The Power/Root Rule for limits allows you to take the square root of the limit: sqrt(16) = 4."
            },
            {
              q: "Which condition must be met to use the Quotient Property of Limits?",
              options: [
                { text: "The numerator limit must be 0.", correct: false },
                { text: "The denominator limit must not be 0.", correct: true },
                { text: "Both limits must be positive.", correct: false },
                { text: "The functions must be linear.", correct: false }
              ],
              explanation: "If the limit of the denominator is 0, you cannot directly apply the quotient property and must use other algebraic manipulations."
            },
            {
              q: "If lim(x→-1) f(x) = -3, evaluate lim(x→-1) [f(x)]².",
              options: [
                { text: "-9", correct: false },
                { text: "9", correct: true },
                { text: "-6", correct: false },
                { text: "6", correct: false }
              ],
              explanation: "Using the power property: (-3)² = 9."
            },
            {
              q: "If f(x) and g(x) are polynomials, how do you find lim(x→c) [f(x) + g(x)]?",
              options: [
                { text: "Find the derivative.", correct: false },
                { text: "Use direct substitution: f(c) + g(c).", correct: true },
                { text: "Set both equal to zero.", correct: false },
                { text: "Look at the highest power of x.", correct: false }
              ],
              explanation: "Polynomials are continuous everywhere, so the limit at any point c is simply the function's value evaluated at c."
            },
            {
              q: "If lim(x→a) f(x) DNE, and lim(x→a) g(x) = 5, can lim(x→a) [f(x) + g(x)] exist?",
              options: [
                { text: "Yes, it is always 5.", correct: false },
                { text: "Yes, depending on the functions.", correct: false },
                { text: "No, the sum limit will also DNE.", correct: true },
                { text: "It will equal 0.", correct: false }
              ],
              explanation: "If one limit does not exist (and the other is finite), their sum cannot resolve to a finite real number."
            }
          ]
        },
        {
          id: "1-6",
          topic: "1.6 Determining Limits Using Algebraic Manipulation",
          videoId: "b1jrYrWHVfw", 
          quiz: [
            {
              q: "What is the very first step you should ALWAYS try when evaluating a limit analytically?",
              options: [
                { text: "Factoring", correct: false },
                { text: "Direct Substitution", correct: true },
                { text: "Finding a common denominator", correct: false },
                { text: "Multiplying by the conjugate", correct: false }
              ],
              explanation: "Always plug the c-value in first. If it yields a real number, you are done. Only use algebraic manipulation if you get an indeterminate form."
            },
            {
              q: "If direct substitution results in 0/0, what does this mathematically indicate?",
              options: [
                { text: "The limit is exactly 0.", correct: false },
                { text: "The limit Does Not Exist (vertical asymptote).", correct: false },
                { text: "It is an Indeterminate Form, and there is likely a hole in the graph.", correct: true },
                { text: "The limit is infinity.", correct: false }
              ],
              explanation: "0/0 means 'more work to do.' It usually indicates a removable discontinuity (a hole) that can be factored out."
            },
            {
              q: "Evaluate lim(x→3) [(x² - 9) / (x - 3)]",
              options: [
                { text: "0", correct: false },
                { text: "3", correct: false },
                { text: "6", correct: true },
                { text: "Does Not Exist", correct: false }
              ],
              explanation: "Factor the numerator: (x-3)(x+3). Cancel the (x-3) terms. Substitute x=3 into the remaining (x+3) to get 3+3 = 6."
            },
            {
              q: "When a limit problem contains a square root and yields 0/0, what is the standard algebraic strategy?",
              options: [
                { text: "Factoring out an x", correct: false },
                { text: "Finding a common denominator", correct: false },
                { text: "Multiplying the numerator and denominator by the conjugate", correct: true },
                { text: "Squaring both sides", correct: false }
              ],
              explanation: "Multiplying by the conjugate clears the radical expression, usually allowing a term to cancel out."
            },
            {
              q: "Evaluate lim(x→0) [(x² + 5x) / x]",
              options: [
                { text: "0", correct: false },
                { text: "5", correct: true },
                { text: "1", correct: false },
                { text: "Does Not Exist", correct: false }
              ],
              explanation: "Factor out an x from the numerator: x(x + 5). Cancel the x. Substitute x=0 into (x + 5) to get 5."
            },
            {
              q: "When dealing with complex fractions (fractions within fractions) resulting in 0/0, what is the best approach?",
              options: [
                { text: "Multiply by the conjugate", correct: false },
                { text: "Find a common denominator to combine the complex fractions", correct: true },
                { text: "Direct substitution", correct: false },
                { text: "Set the numerator to 0", correct: false }
              ],
              explanation: "Combining the complex fractions using a common denominator will usually reveal a factor that can be canceled."
            },
            {
              q: "Evaluate lim(x→-2) [(x² + x - 2) / (x + 2)]",
              options: [
                { text: "0", correct: false },
                { text: "-3", correct: true },
                { text: "3", correct: false },
                { text: "Does Not Exist", correct: false }
              ],
              explanation: "Factor the top: (x+2)(x-1). Cancel (x+2). Substitute -2 into (x-1) to get -3."
            },
            {
              q: "If direct substitution yields a non-zero number divided by zero (e.g., 5/0), what does this mean?",
              options: [
                { text: "The limit is 0.", correct: false },
                { text: "It is an indeterminate form; you must factor.", correct: false },
                { text: "The limit Does Not Exist (it's a vertical asymptote).", correct: true },
                { text: "The limit is exactly 5.", correct: false }
              ],
              explanation: "Unlike 0/0, a non-zero number over 0 means the function has a vertical asymptote, and the limit goes to infinity or negative infinity (DNE)."
            },
            {
              q: "What algebraic technique is required to evaluate lim(x→4) [ (sqrt(x) - 2) / (x - 4) ]?",
              options: [
                { text: "Long division", correct: false },
                { text: "Multiplying by the conjugate (sqrt(x) + 2)", correct: true },
                { text: "Finding a common denominator", correct: false },
                { text: "Factoring a quadratic", correct: false }
              ],
              explanation: "Multiplying numerator and denominator by (sqrt(x) + 2) yields (x - 4) in the numerator, which cancels with the denominator."
            },
            {
              q: "After canceling the problematic terms causing the 0/0, what is the final step?",
              options: [
                { text: "Set the equation equal to 0.", correct: false },
                { text: "Graph the function.", correct: false },
                { text: "Perform direct substitution again on the simplified expression.", correct: true },
                { text: "Assume the limit does not exist.", correct: false }
              ],
              explanation: "Once the 'hole' is mathematically removed, direct substitution will give you the limit's value."
            }
          ]
        },
        {
          id: "1-7",
          topic: "1.7 Selecting Procedures for Determining Limits",
          videoId: "Gia_YJoFN_4", 
          quiz: [
            { q: "What is the FIRST step you should always take when evaluating a limit analytically?", options: [{text: "Factor the expression", correct: false}, {text: "Direct Substitution", correct: true}, {text: "Use the Squeeze Theorem", correct: false}, {text: "Multiply by a conjugate", correct: false}], explanation: "If direct substitution yields a real number, you are finished immediately." },
            { q: "If direct substitution yields a non-zero number over zero (e.g., 5/0), you should conclude:", options: [{text: "The limit is 0", correct: false}, {text: "You must factor it", correct: false}, {text: "There is a vertical asymptote and the limit DNE", correct: true}, {text: "Multiply by the conjugate", correct: false}], explanation: "Number/0 indicates a vertical asymptote, meaning unbounded behavior." },
            { q: "If direct substitution yields 0/0, what does this mean?", options: [{text: "The limit is 0", correct: false}, {text: "The limit DNE", correct: false}, {text: "It is an indeterminate form; use algebraic manipulation", correct: true}, {text: "The function is continuous", correct: false}], explanation: "0/0 means a hole exists and more algebra is required." },
            { q: "Which procedure is best for lim(x→3) [(x²-9)/(x-3)]?", options: [{text: "Conjugate method", correct: false}, {text: "Factoring", correct: true}, {text: "Squeeze Theorem", correct: false}, {text: "Common Denominator", correct: false}], explanation: "It's a difference of squares that easily factors." },
            { q: "Which procedure is best for a limit involving [sqrt(x+4) - 2] / x ?", options: [{text: "Factoring", correct: false}, {text: "Common Denominators", correct: false}, {text: "Multiplying by the Conjugate", correct: true}, {text: "Direct Substitution only", correct: false}], explanation: "Radicals in an indeterminate limit almost always require the conjugate." },
            { q: "Which procedure is best for limits of complex fractions like [(1/x) - (1/2)] / (x-2)?", options: [{text: "Finding a common denominator", correct: true}, {text: "Conjugate", correct: false}, {text: "Squeeze theorem", correct: false}, {text: "Graphing only", correct: false}], explanation: "Combining the inner fractions usually reveals a factor that cancels." },
            { q: "If a limit involves an oscillating trig function multiplied by a shrinking term, like x²*sin(1/x), use:", options: [{text: "Factoring", correct: false}, {text: "The Squeeze Theorem", correct: true}, {text: "Conjugates", correct: false}, {text: "Direct Substitution", correct: false}], explanation: "The Squeeze Theorem is perfect for bounding wild trig functions." },
            { q: "If you get 0/0, factor, cancel, and then get 0/0 AGAIN upon substituting, you should:", options: [{text: "Assume it DNE", correct: false}, {text: "Factor or manipulate it again", correct: true}, {text: "The limit is 0", correct: false}, {text: "The limit is infinity", correct: false}], explanation: "Sometimes multiple layers of factors need to be canceled." },
            { q: "True or False: You can use algebraic manipulation to find a limit even if the function is not continuous there.", options: [{text: "True", correct: true}, {text: "False", correct: false}], explanation: "Algebraic manipulation specifically helps us find limits at removable discontinuities (holes)." },
            { q: "After canceling the term that causes the 0/0, what must you do?", options: [{text: "Set it to 0", correct: false}, {text: "Plug the c-value back into the simplified expression", correct: true}, {text: "Write DNE", correct: false}, {text: "Find the derivative", correct: false}], explanation: "The simplified expression fills the 'hole', allowing direct substitution to work." }
          ]
        },
        {
          id: "1-8",
          topic: "1.8 Determining Limits Using the Squeeze Theorem",
          videoId: "6IwCydD8IMQ", 
          quiz: [
            {
              q: "What is the primary condition required to use the Squeeze (Sandwich) Theorem?",
              options: [
                { text: "The function must be a polynomial.", correct: false },
                { text: "The function must be bounded below and above by two other functions.", correct: true },
                { text: "The limit must evaluate to 0/0.", correct: false },
                { text: "The function must involve a square root.", correct: false }
              ],
              explanation: "The theorem requires g(x) ≤ f(x) ≤ h(x) near the point of interest."
            },
            {
              q: "If g(x) ≤ f(x) ≤ h(x) and lim(x→c) g(x) = L and lim(x→c) h(x) = L, what is lim(x→c) f(x)?",
              options: [
                { text: "0", correct: false },
                { text: "L", correct: true },
                { text: "Does Not Exist", correct: false },
                { text: "2L", correct: false }
              ],
              explanation: "If the lower bound and upper bound both go to L, the function squeezed between them must also go to L."
            },
            {
              q: "The Squeeze Theorem is most commonly used to evaluate limits involving which type of functions?",
              options: [
                { text: "Logarithmic functions", correct: false },
                { text: "Rational functions with holes", correct: false },
                { text: "Oscillating trigonometric functions like sine and cosine", correct: true },
                { text: "Exponential functions", correct: false }
              ],
              explanation: "Because sine and cosine are naturally bounded between -1 and 1, they are perfect candidates for the Squeeze Theorem."
            },
            {
              q: "Evaluate lim(x→0) [x² * sin(1/x)]",
              options: [
                { text: "1", correct: false },
                { text: "0", correct: true },
                { text: "Does Not Exist", correct: false },
                { text: "Infinity", correct: false }
              ],
              explanation: "Since -1 ≤ sin(1/x) ≤ 1, multiplying by x² gives -x² ≤ x²sin(1/x) ≤ x². As x→0, both -x² and x² go to 0, squeezing the limit to 0."
            },
            {
              q: "What are the natural bounds for the function f(x) = cos(x)?",
              options: [
                { text: "0 ≤ cos(x) ≤ 1", correct: false },
                { text: "-∞ < cos(x) < ∞", correct: false },
                { text: "-1 ≤ cos(x) ≤ 1", correct: true },
                { text: "-π ≤ cos(x) ≤ π", correct: false }
              ],
              explanation: "The amplitude of a standard cosine or sine wave restricts its output to between -1 and 1."
            },
            {
              q: "If -3x ≤ f(x) ≤ x² + 2 for all x near 1, what is lim(x→1) f(x)?",
              options: [
                { text: "1", correct: false },
                { text: "3", correct: false },
                { text: "The Squeeze Theorem cannot be applied here.", correct: true },
                { text: "-3", correct: false }
              ],
              explanation: "lim(x→1) of -3x is -3. lim(x→1) of x²+2 is 3. Since the bounds do not converge to the same value (-3 ≠ 3), the Squeeze Theorem cannot determine the exact limit."
            },
            {
              q: "Evaluate lim(x→0) [sin(x) / x] using the geometric Squeeze Theorem proof (or memory of the special limit).",
              options: [
                { text: "0", correct: false },
                { text: "1", correct: true },
                { text: "Does Not Exist", correct: false },
                { text: "Infinity", correct: false }
              ],
              explanation: "This is a fundamental AP Calculus limit established by the Squeeze Theorem using sector areas of a circle. The limit is 1."
            },
            {
              q: "Evaluate lim(x→0) [(1 - cos(x)) / x]",
              options: [
                { text: "1", correct: false },
                { text: "0", correct: true },
                { text: "Does Not Exist", correct: false },
                { text: "-1", correct: false }
              ],
              explanation: "This is the second fundamental limit derived alongside the Squeeze Theorem. Its value is exactly 0."
            },
            {
              q: "If 4x - 9 ≤ f(x) ≤ x² - 4x + 7 for x ≥ 0, find lim(x→4) f(x).",
              options: [
                { text: "7", correct: true },
                { text: "4", correct: false },
                { text: "9", correct: false },
                { text: "Does Not Exist", correct: false }
              ],
              explanation: "Evaluate the lower bound at x=4: 4(4)-9 = 7. Evaluate the upper bound at x=4: (4)² - 4(4) + 7 = 7. Since both bounds are 7, the limit is 7."
            },
            {
              q: "Why does direct substitution fail for lim(x→0) x * sin(1/x)?",
              options: [
                { text: "Because it results in infinity.", correct: false },
                { text: "Because sin(1/0) is undefined and oscillates infinitely as x approaches 0.", correct: true },
                { text: "Because x cannot equal 0.", correct: false },
                { text: "It doesn't fail; it equals 1.", correct: false }
              ],
              explanation: "As x approaches 0, 1/x grows infinitely large, causing the sine function to oscillate rapidly between -1 and 1 without settling, requiring the Squeeze Theorem."
            }
          ]
        },
        {
          id: "1-9",
          topic: "1.9 & 1.10 Exploring Types of Discontinuities and Continuity",
          videoId: "F6ydE70SeeU", // Verified Embeddable - Continuity
          quiz: [
            {
              q: "What are the three conditions for a function f(x) to be continuous at a point x = c?",
              options: [
                { text: "f(c) exists, the limit as x→c exists, and f(c) = 0.", correct: false },
                { text: "f(c) exists, the limit as x→c exists, and lim(x→c) f(x) = f(c).", correct: true },
                { text: "The limit exists, the function is positive, and the derivative exists.", correct: false },
                { text: "The left hand limit equals the right hand limit, and f(c) = 1.", correct: false }
              ],
              explanation: "For continuity at a point, the function must have a value, the limit must exist (left and right sides meet), and the function's value must exactly plug the hole where the limits meet."
            },
            {
              q: "A 'hole' in a graph is formally classified as what type of discontinuity?",
              options: [
                { text: "Jump discontinuity", correct: false },
                { text: "Infinite discontinuity", correct: false },
                { text: "Removable discontinuity", correct: true },
                { text: "Oscillating discontinuity", correct: false }
              ],
              explanation: "It is called 'removable' because you could 'fix' the discontinuity by simply redefining the function at that single point to fill the hole."
            },
            {
              q: "A vertical asymptote represents what type of discontinuity?",
              options: [
                { text: "Removable discontinuity", correct: false },
                { text: "Infinite discontinuity", correct: true },
                { text: "Jump discontinuity", correct: false },
                { text: "Endpoint discontinuity", correct: false }
              ],
              explanation: "Because the function values grow without bound (approaching infinity or negative infinity), it is an infinite discontinuity."
            },
            {
              q: "If lim(x→a⁻) f(x) = 5 and lim(x→a⁺) f(x) = -2, what type of discontinuity exists at x = a?",
              options: [
                { text: "Jump discontinuity", correct: true },
                { text: "Removable discontinuity", correct: false },
                { text: "Infinite discontinuity", correct: false },
                { text: "No discontinuity", correct: false }
              ],
              explanation: "Because both one-sided limits exist as finite numbers but are not equal, the graph 'jumps' from one y-value to another."
            },
            {
              q: "Which of the following functions is continuous for all real numbers?",
              options: [
                { text: "f(x) = 1/x", correct: false },
                { text: "f(x) = tan(x)", correct: false },
                { text: "f(x) = x² + 3x - 5", correct: true },
                { text: "f(x) = sqrt(x)", correct: false }
              ],
              explanation: "Polynomials are continuous everywhere. 1/x has a vertical asymptote, tan(x) has vertical asymptotes, and sqrt(x) is only defined for x ≥ 0."
            },
            {
              q: "If f(x) = (x² - 4)/(x - 2), what type of discontinuity occurs at x = 2?",
              options: [
                { text: "Infinite discontinuity", correct: false },
                { text: "Removable discontinuity", correct: true },
                { text: "Jump discontinuity", correct: false },
                { text: "The function is continuous at x = 2", correct: false }
              ],
              explanation: "The numerator factors to (x-2)(x+2). The (x-2) terms cancel, meaning the discontinuity can be algebraically 'removed', resulting in a hole, not an asymptote."
            },
            {
              q: "If f(x) = (x + 3)/(x - 2), what type of discontinuity occurs at x = 2?",
              options: [
                { text: "Removable discontinuity", correct: false },
                { text: "Infinite discontinuity", correct: true },
                { text: "Jump discontinuity", correct: false },
                { text: "Continuous", correct: false }
              ],
              explanation: "Because the (x-2) in the denominator does not cancel with the numerator, x=2 creates a non-removable division by zero, resulting in a vertical asymptote (infinite discontinuity)."
            },
            {
              q: "True or False: If a function has a limit at x = c, it must be continuous at x = c.",
              options: [
                { text: "True", correct: false },
                { text: "False", correct: true }
              ],
              explanation: "False. A graph can have a hole at x = c. The limit exists because both sides approach the hole, but the function is not continuous because f(c) is undefined or located elsewhere."
            },
            {
              q: "How do you mathematically confirm continuity over a closed interval [a, b]?",
              options: [
                { text: "The function must be continuous on (a, b), lim(x→a⁺) f(x) = f(a), and lim(x→b⁻) f(x) = f(b).", correct: true },
                { text: "The function just needs to be continuous on the open interval (a, b).", correct: false },
                { text: "The limit as x approaches infinity must exist.", correct: false },
                { text: "f(a) must equal f(b).", correct: false }
              ],
              explanation: "You must check the open interval and then ensure the one-sided limits 'lock in' to the actual function values at the endpoints."
            },
            {
              q: "What is the defining characteristic of a piecewise function that is continuous at its boundary x = c?",
              options: [
                { text: "Both pieces must evaluate to 0 at c.", correct: false },
                { text: "Both pieces must be linear.", correct: false },
                { text: "The left piece evaluated at c must exactly equal the right piece evaluated at c.", correct: true },
                { text: "The boundary point must be undefined.", correct: false }
              ],
              explanation: "For the pieces to connect seamlessly (no jump discontinuity), the left-hand limit must equal the right-hand limit at the boundary."
            }
          ]
        },
        {
          id: "1-11",
          topic: "1.11 Defining Continuity at a Point",
          videoId: "fZovVDejI4E", 
          quiz: [
            { q: "A function f(x) is continuous at x=c if and only if:", options: [{text: "lim(x→c) f(x) = f(c)", correct: true}, {text: "f(c) exists", correct: false}, {text: "lim(x→c) f(x) exists", correct: false}, {text: "f'(c) exists", correct: false}], explanation: "This single equation encompasses all three rules: the limit exists, the value exists, and they equal each other." },
            { q: "If a function has a hole at x=2 but is defined as f(2)=5 elsewhere, is it continuous at x=2?", options: [{text: "Yes", correct: false}, {text: "No", correct: true}, {text: "Only if the limit is 5", correct: false}, {text: "Not enough info", correct: false}], explanation: "Unless the limit specifically equals 5, the function is discontinuous because the point doesn't plug the hole." },
            { q: "What type of discontinuity violates the condition 'f(c) is defined'?", options: [{text: "An undefined hole or vertical asymptote", correct: true}, {text: "A jump discontinuity", correct: false}, {text: "A sharp corner", correct: false}, {text: "A continuous curve", correct: false}], explanation: "If there's no solid dot anywhere at that x-value, f(c) doesn't exist." },
            { q: "If lim(x→1⁻) = 3 and lim(x→1⁺) = 4, why is it discontinuous at x=1?", options: [{text: "Because f(1) is undefined", correct: false}, {text: "Because the general limit does not exist", correct: true}, {text: "Because 3 ≠ 4", correct: false}, {text: "Because it's an asymptote", correct: false}], explanation: "The limit must exist for a function to be continuous. Since left ≠ right, the limit DNE." },
            { q: "Are polynomial functions continuous everywhere?", options: [{text: "Yes", correct: true}, {text: "No, they have holes", correct: false}, {text: "No, they have asymptotes", correct: false}, {text: "Only positive polynomials", correct: false}], explanation: "Polynomials are smooth, unbroken curves by definition." },
            { q: "Where is f(x) = 1/(x-3) discontinuous?", options: [{text: "x = 0", correct: false}, {text: "x = 1", correct: false}, {text: "x = 3", correct: true}, {text: "It is continuous everywhere", correct: false}], explanation: "x=3 makes the denominator zero, creating a vertical asymptote." },
            { q: "A removable discontinuity violates which continuity condition?", options: [{text: "f(c) exists", correct: false}, {text: "The limit exists", correct: false}, {text: "The limit equals f(c)", correct: true}, {text: "The function is differentiable", correct: false}], explanation: "The limit exists at a hole, but either f(c) is undefined, or f(c) is defined at a different y-value, so they aren't equal." },
            { q: "For a piecewise function to be continuous at the breakpoint x=c, what must happen?", options: [{text: "Both pieces must equal 0", correct: false}, {text: "Both pieces must evaluate to the same y-value at x=c", correct: true}, {text: "Both pieces must be linear", correct: false}, {text: "The limit must be infinity", correct: false}], explanation: "The two segments must connect seamlessly for the limit to exist and equal the function value." },
            { q: "If f(c) exists and lim(x→c) f(x) exists, is the function definitely continuous?", options: [{text: "Yes", correct: false}, {text: "No, they must equal each other.", correct: true}, {text: "Only if the limit is 0", correct: false}, {text: "Yes, that is the definition", correct: false}], explanation: "You can have a hole at y=2 (limit is 2) and a dot at y=5 (f(c)=5). They exist, but aren't equal." },
            { q: "Which of the following functions has a jump discontinuity?", options: [{text: "y = x²", correct: false}, {text: "y = 1/x", correct: false}, {text: "y = |x|/x", correct: true}, {text: "y = sin(x)", correct: false}], explanation: "|x|/x evaluates to -1 for all negative x and 1 for all positive x, creating a jump at x=0." }
          ]
        },
        {
          id: "1-12",
          topic: "1.12 Confirming Continuity over an Interval",
          videoId: "F6ydE70SeeU", 
          quiz: [
            { q: "A function is continuous on an open interval (a, b) if:", options: [{text: "It is continuous at every single point inside the interval.", correct: true}, {text: "It is continuous at a and b.", correct: false}, {text: "It has no roots.", correct: false}, {text: "It is a straight line.", correct: false}], explanation: "Open interval continuity requires no breaks or holes anywhere between a and b." },
            { q: "To be continuous on a CLOSED interval [a, b], the function must be continuous on (a, b) AND:", options: [{text: "f(a) = f(b)", correct: false}, {text: "lim(x→a⁺)f(x)=f(a) and lim(x→b⁻)f(x)=f(b)", correct: true}, {text: "The derivative must exist.", correct: false}, {text: "lim(x→a)f(x) must equal 0.", correct: false}], explanation: "The endpoints must 'lock in' seamlessly from the inside of the interval." },
            { q: "Is f(x) = 1/x continuous on the interval [1, 5]?", options: [{text: "Yes", correct: true}, {text: "No, it has an asymptote", correct: false}, {text: "No, it's a fraction", correct: false}, {text: "Not enough info", correct: false}], explanation: "The asymptote is at x=0, which is outside the interval [1, 5]. So within the interval, it is perfectly continuous." },
            { q: "Is f(x) = 1/(x-3) continuous on the interval [0, 5]?", options: [{text: "Yes", correct: false}, {text: "No", correct: true}, {text: "Only at x=3", correct: false}, {text: "Yes, except at endpoints", correct: false}], explanation: "The asymptote is at x=3, which is trapped inside the interval [0, 5], breaking the continuity." },
            { q: "Which of the following functions is continuous on [-1, 1]?", options: [{text: "y = 1/x", correct: false}, {text: "y = sqrt(x)", correct: false}, {text: "y = x³ - 4x", correct: true}, {text: "y = ln(x)", correct: false}], explanation: "Polynomials are continuous everywhere. The others are undefined or have asymptotes within that specific interval." },
            { q: "Why is f(x) = sqrt(x) continuous on [0, 5] even though a two-sided limit at x=0 doesn't exist?", options: [{text: "Because continuity on a closed interval only requires a right-hand limit at the left endpoint.", correct: true}, {text: "Because it's a trick question; it isn't.", correct: false}, {text: "Because square roots are always continuous.", correct: false}, {text: "Because f(0) = 0.", correct: false}], explanation: "Endpoint continuity only cares about approaching from the inside of the interval." },
            { q: "If a piecewise function splits at x=2, what must you check to prove continuity on [0, 4]?", options: [{text: "Only f(0) and f(4)", correct: false}, {text: "The limits and function value exactly at x=2", correct: true}, {text: "The derivative at x=2", correct: false}, {text: "If it crosses the x-axis", correct: false}], explanation: "You must ensure the two pieces connect seamlessly at the boundary x=2." },
            { q: "Can a function be continuous on (0, 5) but discontinuous on [0, 5]?", options: [{text: "No", correct: false}, {text: "Yes, if there are holes or asymptotes exactly at the endpoints x=0 or x=5.", correct: true}, {text: "Yes, but only if it's a sine wave.", correct: false}, {text: "No, open and closed intervals are the same.", correct: false}], explanation: "If the endpoints are undefined (like 1/x at x=0), the closed interval fails even if the open interval is fine." },
            { q: "True or False: If f(x) is continuous on [a, b], you can draw it from x=a to x=b without lifting your pencil.", options: [{text: "True", correct: true}, {text: "False", correct: false}], explanation: "This is the classic, informal definition of continuity on an interval." },
            { q: "If a function is continuous on [-2, 2], which theorem are you guaranteed to be able to use?", options: [{text: "Pythagorean Theorem", correct: false}, {text: "Intermediate Value Theorem (IVT)", correct: true}, {text: "Mean Value Theorem", correct: false}, {text: "Squeeze Theorem", correct: false}], explanation: "Continuity on a closed interval is the required condition for the IVT." }
          ]
        },
        {
          id: "1-13",
          topic: "1.13 Removing Discontinuities",
          videoId: "cHp3foku50g", 
          quiz: [
            { q: "What does it mean to 'remove' a discontinuity?", options: [{text: "Erasing the asymptote", correct: false}, {text: "Redefining the function at a single point so it fills a hole, making it continuous.", correct: true}, {text: "Taking the derivative", correct: false}, {text: "Multiplying by zero", correct: false}], explanation: "You create a new extended function that plugs the hole with the correct y-value." },
            { q: "Which type of discontinuity is the ONLY type that can be removed?", options: [{text: "Vertical Asymptote", correct: false}, {text: "Jump Discontinuity", correct: false}, {text: "Hole (Removable Discontinuity)", correct: true}, {text: "Infinite Discontinuity", correct: false}], explanation: "You can't patch an infinite gap or a jump with a single dot. You can only patch a single missing point." },
            { q: "If f(x) = (x²-4)/(x-2), how do you remove the discontinuity at x=2?", options: [{text: "Define f(2) = 0", correct: false}, {text: "Define f(2) = 4", correct: true}, {text: "Define f(2) = 2", correct: false}, {text: "It cannot be removed", correct: false}], explanation: "The limit as x→2 is 4. By defining the function value to equal the limit, you plug the hole." },
            { q: "To find the y-value needed to remove a discontinuity at x=c, you must calculate:", options: [{text: "f'(c)", correct: false}, {text: "f(0)", correct: false}, {text: "lim(x→c) f(x)", correct: true}, {text: "lim(x→∞) f(x)", correct: false}], explanation: "The limit tells you exactly what y-value the surrounding curve is pointing toward." },
            { q: "Can you remove the discontinuity in f(x) = 1/x at x=0?", options: [{text: "Yes, by defining f(0) = 0", correct: false}, {text: "Yes, by defining f(0) = 1", correct: false}, {text: "No, because it is an infinite discontinuity (asymptote).", correct: true}, {text: "No, because x cannot be zero", correct: false}], explanation: "Because the limit does not exist, there is no single y-value you can assign to plug the gap." },
            { q: "If a piecewise function has a jump discontinuity where the left limit is 3 and the right is 5, can it be removed?", options: [{text: "Yes, by defining the point as 4", correct: false}, {text: "No, jump discontinuities cannot be removed by redefining a single point.", correct: true}, {text: "Yes, by defining the point as 8", correct: false}, {text: "Only if you use derivatives", correct: false}], explanation: "A single dot cannot connect two lines that are at completely different heights." },
            { q: "The function g(x) = (sin x)/x is undefined at x=0. To make it continuous, what value should you assign to g(0)?", options: [{text: "0", correct: false}, {text: "1", correct: true}, {text: "Infinity", correct: false}, {text: "Pi", correct: false}], explanation: "The special limit lim(x→0) (sin x)/x = 1. Assigning g(0)=1 perfectly fills the hole." },
            { q: "Algebraically, removable discontinuities usually occur when:", options: [{text: "A factor in the denominator cancels with a factor in the numerator.", correct: true}, {text: "A factor in the denominator cannot be canceled.", correct: false}, {text: "There is a square root.", correct: false}, {text: "The function is piecewise.", correct: false}], explanation: "Canceling the factor mathematically removes the division-by-zero error, leaving a hole." },
            { q: "If you create an 'extended function' to remove a discontinuity, the new function is:", options: [{text: "Discontinuous everywhere", correct: false}, {text: "Continuous at that specific point", correct: true}, {text: "A straight line", correct: false}, {text: "Undefined", correct: false}], explanation: "The whole purpose of the extended function is to restore continuity." },
            { q: "If f(x) = (x² - x - 6) / (x - 3), what point (x, y) needs to be filled to remove the discontinuity?", options: [{text: "(3, 0)", correct: false}, {text: "(3, 5)", correct: true}, {text: "(-2, 0)", correct: false}, {text: "(0, -6)", correct: false}], explanation: "Factor to (x-3)(x+2). Cancel (x-3). The limit as x→3 is (3)+2 = 5. So the hole is at (3, 5)." }
          ]
        },
        {
          id: "1-14",
          topic: "1.14 & 1.15 Infinite Limits and Asymptotes",
          videoId: "sxbRc50OfwM", // Replace with Asymptote video
          quiz: [
            {
              q: "A vertical asymptote at x = c occurs when:",
              options: [
                { text: "lim(x→c) f(x) = 0", correct: false },
                { text: "lim(x→∞) f(x) = c", correct: false },
                { text: "lim(x→c) f(x) = ±∞", correct: true },
                { text: "f(c) = 0", correct: false }
              ],
              explanation: "When x approaches a finite number but the y-values grow without bound, it creates a vertical boundary line."
            },
            {
              q: "A horizontal asymptote at y = L occurs when:",
              options: [
                { text: "lim(x→c) f(x) = ±∞", correct: false },
                { text: "lim(x→±∞) f(x) = L", correct: true },
                { text: "f(0) = L", correct: false },
                { text: "lim(x→L) f(x) = 0", correct: false }
              ],
              explanation: "Horizontal asymptotes describe the end behavior of a function. We find them by taking the limit as x approaches positive or negative infinity."
            },
            {
              q: "Evaluate lim(x→∞) [(3x² + 5x) / (2x² - 1)]",
              options: [
                { text: "0", correct: false },
                { text: "3/2", correct: true },
                { text: "∞", correct: false },
                { text: "3", correct: false }
              ],
              explanation: "When evaluating limits at infinity for rational functions, if the highest degrees of the numerator and denominator are equal, the limit is the ratio of their leading coefficients (3/2)."
            },
            {
              q: "Evaluate lim(x→∞) [(4x + 1) / (x³ - 2x)]",
              options: [
                { text: "4", correct: false },
                { text: "∞", correct: false },
                { text: "0", correct: true },
                { text: "Does Not Exist", correct: false }
              ],
              explanation: "If the degree of the denominator is larger than the numerator, the bottom grows much faster, driving the entire fraction to 0."
            },
            {
              q: "Evaluate lim(x→∞) [(5x³) / (x² + 1)]",
              options: [
                { text: "5", correct: false },
                { text: "0", correct: false },
                { text: "∞", correct: true },
                { text: "1", correct: false }
              ],
              explanation: "If the degree of the numerator is larger, the top grows faster without bound, so the limit goes to infinity (no horizontal asymptote)."
            },
            {
              q: "Can a function cross its horizontal asymptote?",
              options: [
                { text: "No, never.", correct: false },
                { text: "Yes, functions can cross horizontal asymptotes.", correct: true },
                { text: "Only if the function is a trigonometric function.", correct: false },
                { text: "Only at x = 0.", correct: false }
              ],
              explanation: "A horizontal asymptote only dictates the 'end behavior' at extreme ends of the x-axis. A function can cross it locally near the origin."
            },
            {
              q: "Can a function cross its vertical asymptote?",
              options: [
                { text: "Yes, always.", correct: false },
                { text: "No, because the function is undefined at that x-value.", correct: true },
                { text: "Yes, but only once.", correct: false },
                { text: "Only if it is a piecewise function.", correct: false }
              ],
              explanation: "A vertical asymptote occurs at an x-value where the function is fundamentally undefined (like dividing by zero). It cannot cross."
            },
            {
              q: "What is lim(x→-∞) e^x?",
              options: [
                { text: "∞", correct: false },
                { text: "1", correct: false },
                { text: "0", correct: true },
                { text: "-∞", correct: false }
              ],
              explanation: "As you move to the far left of the graph of e^x, the values get closer and closer to the x-axis (y=0)."
            },
            {
              q: "To find the vertical asymptotes of a rational function f(x) = p(x)/q(x), you should:",
              options: [
                { text: "Set p(x) = 0.", correct: false },
                { text: "Look at the ratio of leading coefficients.", correct: false },
                { text: "Factor, cancel any common terms (holes), and set the remaining denominator q(x) = 0.", correct: true },
                { text: "Plug in 0 for x.", correct: false }
              ],
              explanation: "Vertical asymptotes only occur at non-removable discontinuities where the denominator equals zero."
            },
            {
              q: "What is lim(x→∞) [sin(x) / x]?",
              options: [
                { text: "1", correct: false },
                { text: "0", correct: true },
                { text: "∞", correct: false },
                { text: "Does Not Exist", correct: false }
              ],
              explanation: "The numerator sin(x) is bounded between -1 and 1, but the denominator x grows infinitely large. A bounded number divided by infinity approaches 0."
            }
          ]
        },
        {
          id: "1-16",
          topic: "1.16 Intermediate Value Theorem (IVT)",
          videoId: "cHp3foku50g", // Replace with IVT video
          quiz: [
            {
              q: "What is the mandatory prerequisite condition for applying the Intermediate Value Theorem (IVT)?",
              options: [
                { text: "The function must be differentiable.", correct: false },
                { text: "The function must be continuous on the closed interval [a, b].", correct: true },
                { text: "The function must be a polynomial.", correct: false },
                { text: "The function must cross the x-axis.", correct: false }
              ],
              explanation: "If a function has jumps, holes, or asymptotes, it can 'skip' over y-values. IVT only guarantees you hit every y-value if the graph is an unbroken, continuous curve."
            },
            {
              q: "What does the Intermediate Value Theorem guarantee?",
              options: [
                { text: "That the function will have a maximum and minimum.", correct: false },
                { text: "That the derivative equals 0 somewhere.", correct: false },
                { text: "If f(a) = y1 and f(b) = y2, the function must take on every y-value between y1 and y2 at least once.", correct: true },
                { text: "That the limit exists everywhere.", correct: false }
              ],
              explanation: "If you are continuous and go from y=2 to y=10, you have to cross y=5 somewhere in between."
            },
            {
              q: "If f(x) is continuous on [1, 4], f(1) = -3, and f(4) = 5, what does IVT guarantee?",
              options: [
                { text: "f(x) has a vertical asymptote.", correct: false },
                { text: "f(x) must have a root (f(c) = 0) somewhere between x = 1 and x = 4.", correct: true },
                { text: "The limit does not exist.", correct: false },
                { text: "f(2) must equal 0.", correct: false }
              ],
              explanation: "Because -3 is negative and 5 is positive, an unbroken curve connecting them must cross the x-axis (y=0) at least once."
            },
            {
              q: "Does the IVT tell you exactly *where* the c-value is?",
              options: [
                { text: "Yes, it gives a formula to calculate it.", correct: false },
                { text: "Yes, it is always exactly in the middle of a and b.", correct: false },
                { text: "No, it is an 'existence' theorem. It only guarantees that the value exists somewhere in the interval.", correct: true },
                { text: "No, it only works for x-intercepts.", correct: false }
              ],
              explanation: "IVT proves that a value exists, but it doesn't do the algebra for you to find the specific x-coordinate."
            },
            {
              q: "A student notes that f(0) = 4 and f(5) = 10, and claims IVT guarantees f(c) = 7 for some c in (0,5). What did they forget to verify?",
              options: [
                { text: "If the function is linear.", correct: false },
                { text: "If the function is continuous.", correct: true },
                { text: "If 7 is a prime number.", correct: false },
                { text: "If the function has a derivative.", correct: false }
              ],
              explanation: "Without explicitly stating or proving the function is continuous, you cannot apply IVT on the AP Exam."
            },
            {
              q: "If f(x) = 1/x, f(-1) = -1, and f(1) = 1. Can we use IVT to prove f(x) = 0 on [-1, 1]?",
              options: [
                { text: "Yes, because 0 is between -1 and 1.", correct: false },
                { text: "No, because f(x) is not continuous at x = 0.", correct: true },
                { text: "Yes, 1/x is always continuous.", correct: false },
                { text: "No, because limits don't apply here.", correct: false }
              ],
              explanation: "There is an infinite discontinuity (vertical asymptote) at x=0. Because the interval [-1, 1] contains this break, IVT fails. The graph never actually hits y=0."
            },
            {
              q: "If a function represents the temperature of a room over 24 hours, can IVT be applied?",
              options: [
                { text: "Yes, because temperature changes continuously without teleporting from 60° to 70° instantly.", correct: true },
                { text: "No, because temperature isn't a math function.", correct: false },
                { text: "Only if the temperature increases all day.", correct: false },
                { text: "No, time is discrete.", correct: false }
              ],
              explanation: "Physical phenomena like temperature, time, and distance are inherently continuous, making them perfect real-world applications for IVT."
            },
            {
              q: "If f(x) is continuous, f(2) = 10 and f(5) = 20, does IVT guarantee that f(c) = 30 for some c in (2, 5)?",
              options: [
                { text: "Yes.", correct: false },
                { text: "No, IVT only guarantees y-values *between* 10 and 20.", correct: true },
                { text: "Yes, if it's a parabola.", correct: false },
                { text: "No, because 30 is not an integer.", correct: false }
              ],
              explanation: "The graph *might* go up to 30 before coming back down to 20, but IVT does not *guarantee* it. It only guarantees values trapped between the endpoints."
            },
            {
              q: "Which AP Free Response Question phrase strongly hints that you need to use the Intermediate Value Theorem?",
              options: [
                { text: "'Find the maximum value...'", correct: false },
                { text: "'Explain why there must be a value c such that f(c) = k...'", correct: true },
                { text: "'Evaluate the limit...'", correct: false },
                { text: "'Find the area under the curve...'", correct: false }
              ],
              explanation: "Any question asking you to prove that a specific y-value 'must exist' or 'must occur' without solving an equation is an IVT question."
            },
            {
              q: "How many times might the function hit the guaranteed y-value?",
              options: [
                { text: "Exactly once.", correct: false },
                { text: "At least once, but possibly multiple times.", correct: true },
                { text: "Exactly twice.", correct: false },
                { text: "Zero times.", correct: false }
              ],
              explanation: "A continuous wave could oscillate back and forth across y=5 several times between the two endpoints. IVT guarantees 'at least one' intersection."
            }
          ]
        }
      ]
    },
    "unit-2": {
      title: "Unit 2: Differentiation: Definition and Fundamental Properties",
      lessons: [
        {
          id: "2-1",
          topic: "2.1 Defining Average and Instantaneous Rates of Change",
          videoId: "565kZuUBNr8", 
          quiz: [
            {
              q: "The average rate of change of f(x) over the interval [a, b] is given by:",
              options: [
                { text: "f'(a)", correct: false },
                { text: "(f(b) - f(a)) / (b - a)", correct: true },
                { text: "f(b) - f(a)", correct: false },
                { text: "lim(h→0) (f(x+h) - f(x))/h", correct: false }
              ],
              explanation: "This is the standard slope formula (y2 - y1) / (x2 - x1), which finds the slope of the secant line."
            },
            {
              q: "The instantaneous rate of change of f(x) at x = a is defined as:",
              options: [
                { text: "The slope of the secant line.", correct: false },
                { text: "lim(h→0) [f(a+h) - f(a)] / h", correct: true },
                { text: "The area under the curve.", correct: false },
                { text: "f(a) / a", correct: false }
              ],
              explanation: "This limit definition of the derivative mathematically shrinks the secant line into a tangent line."
            },
            {
              q: "If s(t) represents the position of an object, what does the instantaneous rate of change of s(t) represent?",
              options: [
                { text: "Total distance traveled", correct: false },
                { text: "Average speed", correct: false },
                { text: "Instantaneous velocity", correct: true },
                { text: "Acceleration", correct: false }
              ],
              explanation: "The rate of change of position with respect to time is velocity."
            },
            {
              q: "Geometrically, what does the derivative f'(a) represent?",
              options: [
                { text: "The y-intercept of the function.", correct: false },
                { text: "The slope of the tangent line to the curve at x = a.", correct: true },
                { text: "The x-intercept of the function.", correct: false },
                { text: "The highest point on the graph.", correct: false }
              ],
              explanation: "The derivative gives the exact steepness of the curve at a single, specific point."
            },
            {
              q: "Which notation is NOT a standard way to write the derivative of y = f(x)?",
              options: [
                { text: "f'(x)", correct: false },
                { text: "dy/dx", correct: false },
                { text: "y'", correct: false },
                { text: "Δy/Δx", correct: true }
              ],
              explanation: "Δy/Δx represents average rate of change (algebra). dy/dx represents instantaneous rate of change (calculus)."
            },
            {
              q: "If f(x) = 5x + 3, what is f'(2)?",
              options: [
                { text: "13", correct: false },
                { text: "5", correct: true },
                { text: "2", correct: false },
                { text: "0", correct: false }
              ],
              explanation: "The function is a straight line. The slope of a straight line is constant everywhere. The slope is 5, so the derivative is 5 everywhere."
            },
            {
              q: "What must be true for a function to be differentiable at a point?",
              options: [
                { text: "It only needs to be continuous.", correct: false },
                { text: "It must be continuous, and its graph must be 'smooth' (no sharp corners or cusps).", correct: true },
                { text: "It must cross the x-axis.", correct: false },
                { text: "The limit must evaluate to infinity.", correct: false }
              ],
              explanation: "Differentiability requires continuity AND smoothness. At a sharp corner (like absolute value of x at 0), the left and right tangent slopes don't match."
            },
            {
              q: "If a function is differentiable at x = c, what else is automatically guaranteed?",
              options: [
                { text: "It is continuous at x = c.", correct: true },
                { text: "It is equal to 0 at x = c.", correct: false },
                { text: "It has a horizontal tangent line at x = c.", correct: false },
                { text: "It is increasing.", correct: false }
              ],
              explanation: "Differentiability implies continuity. However, continuity does NOT imply differentiability (e.g., sharp corners)."
            },
            {
              q: "The alternate limit definition of the derivative at a point x = a is:",
              options: [
                { text: "lim(x→a) [f(x) - f(a)] / (x - a)", correct: true },
                { text: "lim(x→0) f(x)/x", correct: false },
                { text: "f(a+h) - f(a)", correct: false },
                { text: "lim(h→a) [f(x+h) - f(x)] / h", correct: false }
              ],
              explanation: "This formula directly takes the slope between a moving point (x, f(x)) and the fixed point (a, f(a)) as x slides toward a."
            },
            {
              q: "If you evaluate a derivative using the limit definition, and the result is DNE (Does Not Exist), what does it mean?",
              options: [
                { text: "You did the math wrong.", correct: false },
                { text: "The function does not have a defined tangent slope at that point (e.g., a corner, cusp, or vertical tangent).", correct: true },
                { text: "The function is a polynomial.", correct: false },
                { text: "The point is an x-intercept.", correct: false }
              ],
              explanation: "Points of non-differentiability cause the limit definition of the derivative to fail."
            },
          ]
          
        },
        {
          id: "2.2",
          topic: "2.2 Defining the Derivative of a Function",
          videoId: "tfdPnsp9bck",
          quiz: [
                { q: "What is the limit definition of the derivative?", options: [{text: "lim(h→0) [f(x+h)-f(x)]/h", correct: true}, {text: "lim(h→0) [f(x+h)+f(x)]/h", correct: false}, {text: "f'(x) = x^n", correct: false}, {text: "None", correct: false}], explanation: "The limit of the difference quotient defines the instantaneous slope." },
                { q: "If f'(a) = 0, what can we say about the tangent line at x=a?", options: [{text: "It is vertical", correct: false}, {text: "It is horizontal", correct: true}, {text: "It has a slope of 1", correct: false}, {text: "It is undefined", correct: false}], explanation: "A slope of zero indicates a horizontal tangent." },
                { q: "Which of the following is an alternative notation for f'(x)?", options: [{text: "dy/dx", correct: true}, {text: "Δy/Δx", correct: false}, {text: "y", correct: false}, {text: "∫f(x)dx", correct: false}], explanation: "Leibniz notation dy/dx is interchangeable with f'(x)." },
                { q: "If a graph has a 'sharp corner' at x=c, what is f'(c)?", options: [{text: "0", correct: false}, {text: "1", correct: false}, {text: "Undefined", correct: true}, {text: "Infinity", correct: false}], explanation: "Derivatives must be smooth; sharp points have undefined derivatives." },
                { q: "What does the derivative represent at any point x?", options: [{text: "Area", correct: false}, {text: "Instantaneous rate of change", correct: true}, {text: "Average value", correct: false}, {text: "Total sum", correct: false}], explanation: "It is the rate at which the output changes relative to the input." },
                { q: "If f(x) = c, where c is a constant, what is f'(x)?", options: [{text: "c", correct: false}, {text: "1", correct: false}, {text: "0", correct: true}, {text: "x", correct: false}], explanation: "Constants do not change; their rate of change is zero." },
                { q: "True or False: A function can be continuous but not differentiable.", options: [{text: "True", correct: true}, {text: "False", correct: false}], explanation: "Example: Absolute value function at the origin (continuous but has a corner)." },
                { q: "What is the relationship between the slope of the secant line and the derivative?", options: [{text: "Derivative is the limit of the secant slope as h→0", correct: true}, {text: "They are unrelated", correct: false}, {text: "Secant is the derivative", correct: false}, {text: "None", correct: false}], explanation: "As points get closer, the secant line approaches the tangent line slope." },
                { q: "If f'(c) = 5, what is the slope of the normal line?", options: [{text: "5", correct: false}, {text: "-5", correct: false}, {text: "-1/5", correct: true}, {text: "1/5", correct: false}], explanation: "Normal lines are perpendicular to tangent lines, so use the negative reciprocal." },
                { q: "Does the derivative exist at a vertical tangent?", options: [{text: "Yes", correct: false}, {text: "No", correct: true}, {text: "Only if y > 0", correct: false}, {text: "Only for trig", correct: false}], explanation: "Vertical slopes are undefined; therefore, the derivative DNE." }
            ]
        },
        {
          id: "2.3",
          topic: "2.3 Differentiability and Continuity",
          videoId: "1_31o8r5TM4",
          quiz: [
            { 
              q: "If f(x) is differentiable at x=c, what is true about f(x) at x=c?", 
              options: [
                { text: "It must be continuous at x=c.", correct: true }, 
                { text: "It does not have to be continuous.", correct: false }, 
                { text: "It is only continuous if f(c)=0.", correct: false }, 
                { text: "The limit does not exist.", correct: false }
              ], 
              explanation: "Differentiability is a stronger condition than continuity; if a function has a derivative at a point, it is guaranteed to be continuous there." 
            },
            { 
              q: "If f(x) is continuous at x=c, is it always differentiable at x=c?", 
              options: [
                { text: "Yes", correct: false }, 
                { text: "No", correct: true }, 
                { text: "Only if f(c) > 0", correct: false }, 
                { text: "Only if it is a polynomial", correct: false }
              ], 
              explanation: "Continuity does not guarantee differentiability. Sharp corners or cusps are continuous but not differentiable." 
            },
            { 
              q: "What visual indicator on a graph signals a point that is continuous but NOT differentiable?", 
              options: [
                { text: "A vertical asymptote", correct: false }, 
                { text: "A sharp corner or cusp", correct: true }, 
                { text: "A hole", correct: false }, 
                { text: "A horizontal intercept", correct: false }
              ], 
              explanation: "At a sharp corner, the left-hand derivative and right-hand derivative do not equal each other." 
            },
            { 
              q: "Consider f(x) = |x|. Why is it not differentiable at x=0?", 
              options: [
                { text: "It is not continuous.", correct: false }, 
                { text: "The left-side slope is -1 and right-side slope is +1.", correct: true }, 
                { text: "It is undefined at x=0.", correct: false }, 
                { text: "It is a horizontal line.", correct: false }
              ], 
              explanation: "Because the slopes from either side don't match, the limit definition of the derivative DNE." 
            },
            { 
              q: "If a function has a vertical tangent at x=c, is it differentiable there?", 
              options: [
                { text: "Yes", correct: false }, 
                { text: "No", correct: true }, 
                { text: "Only if the function is continuous", correct: false }, 
                { text: "Yes, but the slope is 0", correct: false }
              ], 
              explanation: "A vertical tangent line has an undefined slope, so the derivative does not exist." 
            },
            { 
              q: "If the limit of the difference quotient lim(h→0) [f(c+h)-f(c)]/h exists, the function is:", 
              options: [
                { text: "Only continuous", correct: false }, 
                { text: "Differentiable at x=c", correct: true }, 
                { text: "Only differentiable at x=0", correct: false }, 
                { text: "None of these", correct: false }
              ], 
              explanation: "That limit is the exact definition of the derivative." 
            },
            { 
              q: "Can a function with a jump discontinuity be differentiable?", 
              options: [
                { text: "Yes", correct: false }, 
                { text: "No, it is not even continuous.", correct: true }, 
                { text: "Yes, if the jump is small", correct: false }, 
                { text: "Only for trig functions", correct: false }
              ], 
              explanation: "Differentiability requires continuity; a jump discontinuity breaks continuity." 
            },
            { 
              q: "If f(x) is differentiable on an interval, what can you say about the graph's appearance?", 
              options: [
                { text: "It must be jagged.", correct: false }, 
                { text: "It must be 'smooth'.", correct: true }, 
                { text: "It must be a straight line.", correct: false }, 
                { text: "It must be a horizontal line.", correct: false }
              ], 
              explanation: "Differentiability implies that the slope changes continuously, creating a smooth path." 
            },
            { 
              q: "True or False: A function can be differentiable at x=c but have a hole at x=c.", 
              options: [
                { text: "True", correct: false }, 
                { text: "False", correct: true }
              ], 
              explanation: "A hole is a point of discontinuity. Since differentiability implies continuity, this is impossible." 
            },
            { 
              q: "If the left-hand derivative and right-hand derivative at x=c are not equal, then f'(c):", 
              options: [
                { text: "Equals 0", correct: false }, 
                { text: "Does not exist", correct: true }, 
                { text: "Is undefined but the limit exists", correct: false }, 
                { text: "Is 1", correct: false }
              ], 
              explanation: "The derivative exists only if the two-sided limit of the difference quotient exists and is a single finite value." 
            }
          ]
        },
        {
          id: "2.4",
          topic: "2.4 Power Rule & Sum/Difference Rule",
          videoId: "17X5g9QArTc",
          quiz: [
            { 
              q: "Using the Power Rule, what is the derivative of f(x) = x^8?", 
              options: [{text: "8x^7", correct: true}, {text: "x^7", correct: false}, {text: "7x^8", correct: false}, {text: "8x^8", correct: false}], 
              explanation: "Power Rule: d/dx(x^n) = nx^(n-1). Bring 8 down, subtract 1 to get 7." 
            },
            { 
              q: "What is the derivative of f(x) = 12?", 
              options: [{text: "12", correct: false}, {text: "1", correct: false}, {text: "0", correct: true}, {text: "x", correct: false}], 
              explanation: "The derivative of any constant is always 0 because a constant does not change." 
            },
            { 
              q: "What is the derivative of f(x) = x^10 + x^2?", 
              options: [{text: "10x^9 + 2x", correct: true}, {text: "10x^10 + 2x^2", correct: false}, {text: "x^9 + x", correct: false}, {text: "10x^9 + 2", correct: false}], 
              explanation: "The Sum Rule allows you to derive each term individually: d/dx(x^10) + d/dx(x^2)." 
            },
            { 
              q: "Differentiate f(x) = 4x^3 - 5x^2.", 
              options: [{text: "12x^2 - 10x", correct: true}, {text: "4x^2 - 5x", correct: false}, {text: "12x^3 - 10x^2", correct: false}, {text: "x^2 - x", correct: false}], 
              explanation: "Use the Power Rule on each term: 4(3x^2) - 5(2x) = 12x^2 - 10x." 
            },
            { 
              q: "What is the derivative of f(x) = x^{-2}?", 
              options: [{text: "-2x^{-1}", correct: false}, {text: "-2x^{-3}", correct: true}, {text: "2x^{-3}", correct: false}, {text: "-1/2 x^{-3}", correct: false}], 
              explanation: "Bring down the -2, then subtract 1 from the exponent: -2 - 1 = -3." 
            },
            { 
              q: "Find f'(x) for f(x) = 6x.", 
              options: [{text: "0", correct: false}, {text: "1", correct: false}, {text: "6", correct: true}, {text: "6x", correct: false}], 
              explanation: "The derivative of a linear term ax is simply the coefficient a." 
            },
            { 
              q: "What is the derivative of f(x) = sqrt(x)? (Hint: rewrite as x^{1/2})", 
              options: [{text: "1/2 x^{-1/2}", correct: true}, {text: "1/2 x^{1/2}", correct: false}, {text: "x^{-1/2}", correct: false}, {text: "1/sqrt(x)", correct: false}], 
              explanation: "Bring down 1/2, subtract 1 from 1/2 to get -1/2." 
            },
            { 
              q: "The derivative of a difference f(x) - g(x) is equal to:", 
              options: [{text: "f'(x) - g'(x)", correct: true}, {text: "f'(x) + g'(x)", correct: false}, {text: "f'(x) * g'(x)", correct: false}, {text: "None", correct: false}], 
              explanation: "The Difference Rule states d/dx(f-g) = f' - g'." 
            },
            { 
              q: "What is d/dx [ 3x^4 - 2x^3 + x ]?", 
              options: [{text: "12x^3 - 6x^2 + 1", correct: true}, {text: "4x^3 - 3x^2 + 1", correct: false}, {text: "12x^4 - 6x^3 + 1", correct: false}, {text: "None", correct: false}], 
              explanation: "Derive term by term: 3(4x^3) - 2(3x^2) + 1." 
            },
            { 
              q: "If f(x) = x^π, what is f'(x)?", 
              options: [{text: "πx^{π-1}", correct: true}, {text: "πx^π", correct: false}, {text: "x^π", correct: false}, {text: "None", correct: false}], 
              explanation: "The Power Rule applies to any real exponent n, even irrational numbers like Pi." 
            }
          ]
        },
        {
          id: "2.5",
          topic: "2.5 Derivatives of Cosine, Sine, and Exponential Functions",
          videoId: "PEqCa0U77mc",
          quiz: [
            { q: "What is d/dx [sin(x)]?", options: [{text: "cos(x)", correct: true}, {text: "-cos(x)", correct: false}, {text: "sin(x)", correct: false}, {text: "-sin(x)", correct: false}], explanation: "The derivative of sine is cosine." },
            { q: "What is d/dx [cos(x)]?", options: [{text: "sin(x)", correct: false}, {text: "-sin(x)", correct: true}, {text: "cos(x)", correct: false}, {text: "-cos(x)", correct: false}], explanation: "The derivative of cosine is negative sine." },
            { q: "What is d/dx [e^x]?", options: [{text: "e^x", correct: true}, {text: "x*e^(x-1)", correct: false}, {text: "ln(x)", correct: false}, {text: "None", correct: false}], explanation: "The exponential function e^x is unique because its derivative is itself." },
            { q: "Evaluate the derivative of f(x) = 3*sin(x) at x=0.", options: [{text: "0", correct: false}, {text: "3", correct: true}, {text: "1", correct: false}, {text: "-3", correct: false}], explanation: "f'(x) = 3*cos(x). At x=0, 3*cos(0) = 3*1 = 3." },
            { q: "True or False: The derivative of e^(2x) is e^(2x).", options: [{text: "True", correct: false}, {text: "False", correct: true}], explanation: "By the chain rule, you must multiply by the derivative of the exponent (2), so it is 2*e^(2x)." },
            { q: "What is d/dx [sin(x) + e^x]?", options: [{text: "cos(x) + e^x", correct: true}, {text: "-cos(x) + e^x", correct: false}, {text: "cos(x) - e^x", correct: false}, {text: "sin(x) + e^x", correct: false}], explanation: "The derivative of a sum is the sum of the derivatives." },
            { q: "What is the slope of f(x) = cos(x) at x = π/2?", options: [{text: "0", correct: false}, {text: "-1", correct: true}, {text: "1", correct: false}, {text: "π/2", correct: false}], explanation: "f'(x) = -sin(x). At x=π/2, -sin(π/2) = -1." },
            { q: "If f(x) = 5*e^x, what is f'(1)?", options: [{text: "5", correct: false}, {text: "e", correct: false}, {text: "5e", correct: true}, {text: "0", correct: false}], explanation: "f'(x) = 5*e^x. At x=1, 5*e^1 = 5e." },
            { q: "Which function's derivative is its own negative?", options: [{text: "sin(x)", correct: false}, {text: "cos(x)", correct: false}, {text: "Neither", correct: false}, {text: "Both involve negative signs in their derivatives", correct: true}], explanation: "d/dx[sin(x)] = cos(x), d/dx[cos(x)] = -sin(x). Their derivatives cycle through positive and negative states." },
            { q: "What is d/dx [e^x + cos(x)]?", options: [{text: "e^x - sin(x)", correct: true}, {text: "e^x + sin(x)", correct: false}, {text: "e^x + cos(x)", correct: false}, {text: "None", correct: false}], explanation: "The derivative of e^x is e^x and the derivative of cos(x) is -sin(x)." }
          ]
        },
        {
          id: "2.6",
          topic: "2.6 The Product Rule",
          videoId: "Qgdm04QqyDs",
          quiz: [
            { q: "What is the formula for the derivative of u(x)v(x)?", options: [{text: "u'v + uv'", correct: true}, {text: "u'v - uv'", correct: false}, {text: "u'v'", correct: false}, {text: "None", correct: false}], explanation: "The product rule: derivative of the first times the second + first times derivative of the second." },
            { q: "For f(x) = x^2 * sin(x), what is u(x) and what is v(x)?", options: [{text: "u=x^2, v=sin(x)", correct: true}, {text: "u=x, v=sin(x)", correct: false}, {text: "u=2x, v=cos(x)", correct: false}, {text: "None", correct: false}], explanation: "Split the product into the two distinct functions x^2 and sin(x)." },
            { q: "Derivative of x^2 * sin(x) is:", options: [{text: "2x*sin(x) + x^2*cos(x)", correct: true}, {text: "2x*cos(x)", correct: false}, {text: "x^2*cos(x)", correct: false}, {text: "None", correct: false}], explanation: "Apply u'v + uv': (2x)(sin(x)) + (x^2)(cos(x))." },
            { q: "True or False: The product rule is simply the product of the derivatives.", options: [{text: "True", correct: false}, {text: "False", correct: true}], explanation: "This is a common trap; the rule is much more complex than just multiplying derivatives." },
            { q: "If f(x) = x * e^x, what is f'(x)?", options: [{text: "e^x", correct: false}, {text: "x*e^x", correct: false}, {text: "e^x + x*e^x", correct: true}, {text: "None", correct: false}], explanation: "u=x, v=e^x. f' = (1)(e^x) + (x)(e^x)." },
            { q: "Derivative of f(x) = x * cos(x)?", options: [{text: "cos(x) - x*sin(x)", correct: true}, {text: "cos(x) + x*sin(x)", correct: false}, {text: "1 - sin(x)", correct: false}, {text: "None", correct: false}], explanation: "u'v + uv' = (1)(cos(x)) + (x)(-sin(x))." },
            { q: "Product rule for three functions f(x)g(x)h(x)?", options: [{text: "f'gh + fg'h + fgh'", correct: true}, {text: "f'g'h'", correct: false}, {text: "f'g'h", correct: false}, {text: "None", correct: false}], explanation: "It extends naturally: derive one, keep the others, and add them together." },
            { q: "Derivative of f(x) = (x^2 + 1)(x^3 + 2)?", options: [{text: "2x(x^3+2) + (x^2+1)(3x^2)", correct: true}, {text: "(2x)(3x^2)", correct: false}, {text: "x^5 + x^3", correct: false}, {text: "None", correct: false}], explanation: "Apply u'v + uv' to the two polynomial factors." },
            { q: "If u(0)=1, u'(0)=2, v(0)=3, v'(0)=4, what is (uv)'(0)?", options: [{text: "6", correct: false}, {text: "8", correct: false}, {text: "10", correct: true}, {text: "7", correct: false}], explanation: "u'v + uv' = (2)(3) + (1)(4) = 6 + 4 = 10." },
            { q: "Can the product rule be applied to constants?", options: [{text: "Yes, but it's overkill", correct: true}, {text: "No", correct: false}, {text: "Only if constant is zero", correct: false}, {text: "None", correct: false}], explanation: "Yes, you can treat a constant as a function, though it simplifies to 0 anyway." }
          ]
        },
        {
          id: "2.7",
          topic: "2.7 The Quotient Rule",
          videoId: "qF96Ayj5mgE",
          quiz: [
            { q: "The Quotient Rule formula is:", options: [{text: "(u'v - uv') / v^2", correct: true}, {text: "(uv' - u'v) / v^2", correct: false}, {text: "(u'v + uv') / v^2", correct: false}, {text: "None", correct: false}], explanation: "Remember: Low d-High minus High d-Low, over the square of what's below." },
            { q: "Which part of the Quotient Rule gets differentiated first?", options: [{text: "The Low/Denominator", correct: false}, {text: "The High/Numerator", correct: true}, {text: "Neither", correct: false}, {text: "Both at once", correct: false}], explanation: "You must differentiate the numerator (High) first in the quotient rule." },
            { q: "Derivative of f(x) = (x^2) / (x+1)?", options: [{text: "(2x(x+1) - x^2(1)) / (x+1)^2", correct: true}, {text: "(x^2(1) - 2x(x+1)) / (x+1)^2", correct: false}, {text: "2x", correct: false}, {text: "None", correct: false}], explanation: "Apply (u'v - uv')/v^2 where u=x^2 and v=x+1." },
            { q: "True or False: The quotient rule can always be rewritten as a product rule using negative exponents.", options: [{text: "True", correct: true}, {text: "False", correct: false}], explanation: "Yes, f(x)/g(x) = f(x) * [g(x)]^-1. This is often an easier way to differentiate!" },
            { q: "What happens to the denominator in the Quotient Rule?", options: [{text: "It is subtracted", correct: false}, {text: "It is squared", correct: true}, {text: "It is ignored", correct: false}, {text: "It is multiplied by the numerator", correct: false}], explanation: "The denominator is always squared: v^2." },
            { q: "Derivative of f(x) = sin(x)/x?", options: [{text: "(x*cos(x) - sin(x)) / x^2", correct: true}, {text: "(sin(x) - x*cos(x)) / x^2", correct: false}, {text: "cos(x)", correct: false}, {text: "None", correct: false}], explanation: "u=sin(x), v=x. (cos(x)*x - sin(x)*1) / x^2." },
            { q: "If f(x) = 1/x, use Quotient Rule to find f'(x).", options: [{text: "-1/x^2", correct: true}, {text: "1/x^2", correct: false}, {text: "-x^2", correct: false}, {text: "None", correct: false}], explanation: "u=1, v=x. (0*x - 1*1) / x^2 = -1/x^2." },
            { q: "If the denominator is a constant 'k', do you need the Quotient Rule?", options: [{text: "Yes", correct: false}, {text: "No, just treat as (1/k)*f(x)", correct: true}, {text: "Only if k > 0", correct: false}, {text: "None", correct: false}], explanation: "Constants pull out; don't make it harder than it needs to be!" },
            { q: "Derivative of e^x / x?", options: [{text: "(e^x*x - e^x) / x^2", correct: true}, {text: "(e^x - x*e^x) / x^2", correct: false}, {text: "e^x", correct: false}, {text: "None", correct: false}], explanation: "Apply (u'v - uv')/v^2: (e^x * x - e^x * 1) / x^2." },
            { q: "What is the result of 'Low d-High' when High is a constant 'c'?", options: [{text: "v * 0 = 0", correct: true}, {text: "v * c", correct: false}, {text: "v", correct: false}, {text: "None", correct: false}], explanation: "The derivative of any constant is 0." }
          ]
        },
        {
          id: "2.8",
          topic: "2.8 Derivatives of Trig Functions",
          videoId: "fWSKy8sJ5gs",
          quiz: [
            { q: "d/dx [tan(x)] is:", options: [{text: "sec^2(x)", correct: true}, {text: "csc^2(x)", correct: false}, {text: "sec(x)tan(x)", correct: false}, {text: "None", correct: false}], explanation: "Standard derivative identity." },
            { q: "d/dx [sec(x)] is:", options: [{text: "sec(x)tan(x)", correct: true}, {text: "sec(x)", correct: false}, {text: "tan(x)", correct: false}, {text: "None", correct: false}], explanation: "Standard derivative identity." },
            { q: "d/dx [cot(x)] is:", options: [{text: "-csc^2(x)", correct: true}, {text: "csc^2(x)", correct: false}, {text: "sec^2(x)", correct: false}, {text: "None", correct: false}], explanation: "Standard derivative identity (all 'co-' trig derivatives have negative signs)." },
            { q: "d/dx [csc(x)] is:", options: [{text: "-csc(x)cot(x)", correct: true}, {text: "csc(x)cot(x)", correct: false}, {text: "-sec(x)tan(x)", correct: false}, {text: "None", correct: false}], explanation: "Standard derivative identity." },
            { q: "Which trig derivative is positive?", options: [{text: "cot(x)", correct: false}, {text: "cos(x)", correct: false}, {text: "tan(x)", correct: true}, {text: "csc(x)", correct: false}], explanation: "Derivative of tan(x) is positive sec^2(x)." },
            { q: "Derivative of tan(x) using quotient rule on sin(x)/cos(x)?", options: [{text: "1/cos^2(x) = sec^2(x)", correct: true}, {text: "cos^2(x)", correct: false}, {text: "sin^2(x)", correct: false}, {text: "None", correct: false}], explanation: "(cos*cos - sin*-sin) / cos^2 = (cos^2 + sin^2) / cos^2 = 1/cos^2 = sec^2." },
            { q: "True or False: The derivative of all 'co-' trig functions (cos, cot, csc) contains a negative sign.", options: [{text: "True", correct: true}, {text: "False", correct: false}], explanation: "A great memory trick: co-functions have negative derivatives." },
            { q: "Evaluate d/dx [3*tan(x)] at x=0.", options: [{text: "0", correct: false}, {text: "3", correct: true}, {text: "1", correct: false}, {text: "None", correct: false}], explanation: "3*sec^2(0) = 3*1^2 = 3." },
            { q: "Derivative of sec^2(x)?", options: [{text: "2sec(x)sec(x)tan(x)", correct: true}, {text: "2sec(x)", correct: false}, {text: "tan^2(x)", correct: false}, {text: "None", correct: false}], explanation: "Uses the chain rule: 2*sec(x) * d/dx(sec(x))." },
            { q: "Which trig functions relate to sec^2(x)?", options: [{text: "tan(x)", correct: true}, {text: "sin(x)", correct: false}, {text: "cos(x)", correct: false}, {text: "None", correct: false}], explanation: "d/dx tan(x) = sec^2(x)." }
          ]
        },
        {
          id: "2.9",
          topic: "2.9 Derivatives of Inverse Functions",
          videoId: "Xq0YEXPwi4Y",
          quiz: [
            { 
              q: "If f(a) = b, what is the formula for the derivative of the inverse at b, (f^-1)'(b)?", 
              options: [{text: "1 / f'(a)", correct: true}, {text: "f'(a)", correct: false}, {text: "-f'(a)", correct: false}, {text: "None", correct: false}], 
              explanation: "The derivative of an inverse function is the reciprocal of the derivative of the original function at the corresponding point." 
            },
            { 
              q: "If f(2) = 5 and f'(2) = 3, what is (f^-1)'(5)?", 
              options: [{text: "1/3", correct: true}, {text: "3", correct: false}, {text: "5", correct: false}, {text: "1/5", correct: false}], 
              explanation: "The derivative of the inverse at 5 is the reciprocal of the derivative of the function at 2." 
            },
            { 
              q: "True or False: The domain of f^-1 is the range of f.", 
              options: [{text: "True", correct: true}, {text: "False", correct: false}], 
              explanation: "By definition, the inverse function swaps the domain and range of the original function." 
            },
            { 
              q: "What visual relationship exists between the graphs of f(x) and f^-1(x)?", 
              options: [{text: "Reflection over the line y = x", correct: true}, {text: "Rotation by 90 degrees", correct: false}, {text: "Same graph", correct: false}, {text: "None", correct: false}], 
              explanation: "Inverse functions are always reflections of each other across the line y = x." 
            },
            { 
              q: "If f(x) = x^3, what is f^-1(x)?", 
              options: [{text: "cube root of x", correct: true}, {text: "x^(1/2)", correct: false}, {text: "x^3", correct: false}, {text: "None", correct: false}], 
              explanation: "The cube root is the inverse operation of cubing a number." 
            },
            { 
              q: "What is the slope of f^-1(x) at x = 8 if f(x) = x^3 and f(2) = 8?", 
              options: [{text: "1/12", correct: true}, {text: "12", correct: false}, {text: "1/8", correct: false}, {text: "None", correct: false}], 
              explanation: "f'(x) = 3x^2. f'(2) = 3(2^2) = 12. Inverse derivative = 1/12." 
            },
            { 
              q: "Can a function have an inverse if it is not one-to-one?", 
              options: [{text: "Yes", correct: false}, {text: "No", correct: true}, {text: "Only if linear", correct: false}, {text: "None", correct: false}], 
              explanation: "A function must pass the Horizontal Line Test (one-to-one) to be invertible." 
            },
            { 
              q: "If f'(x) is always positive, is the function invertible?", 
              options: [{text: "Yes, it is strictly increasing", correct: true}, {text: "No", correct: false}, {text: "Only if f(0)=0", correct: false}, {text: "None", correct: false}], 
              explanation: "Strictly increasing (or decreasing) functions pass the horizontal line test." 
            },
            { 
              q: "The derivative of f^-1 at f(a) is 1/f'(a). What is required for this to be defined?", 
              options: [{text: "f'(a) ≠ 0", correct: true}, {text: "f'(a) = 0", correct: false}, {text: "f(a) = 0", correct: false}, {text: "None", correct: false}], 
              explanation: "You cannot divide by zero, so the derivative of the original function at that point must be non-zero." 
            },
            { 
              q: "What is the derivative of f^-1(x) if f(x) = e^x?", 
              options: [{text: "1/x", correct: true}, {text: "e^x", correct: false}, {text: "ln(x)", correct: false}, {text: "None", correct: false}], 
              explanation: "The inverse of e^x is ln(x). The derivative of ln(x) is 1/x." 
            }
          ]
        },
        {
          id: "2.10",
          topic: "2.10 Introduction to Related Rates",
          videoId: "qCkUfBiWeX8",
          quiz: [
            { q: "What is the core strategy for Related Rates problems?", options: [{text: "Differentiate with respect to time (t)", correct: true}, {text: "Solve for y first", correct: false}, {text: "Set all rates to 0", correct: false}, {text: "None", correct: false}], explanation: "Related rates involve variables that change over time, so we apply the chain rule with respect to t (dt)." },
            { q: "If A = πr^2, what is dA/dt?", options: [{text: "2πr * (dr/dt)", correct: true}, {text: "2π * (dr/dt)", correct: false}, {text: "π * (dr/dt)", correct: false}, {text: "None", correct: false}], explanation: "Using the chain rule: d/dt(πr^2) = 2πr * dr/dt." },
            { q: "True or False: In related rates, constants are treated as variables during differentiation.", options: [{text: "True", correct: false}, {text: "False", correct: true}], explanation: "Constants stay constant; variables like r, h, or V change over time." },
            { q: "What does dr/dt represent?", options: [{text: "The rate at which radius changes over time", correct: true}, {text: "The radius at time t", correct: false}, {text: "The acceleration of radius", correct: false}, {text: "None", correct: false}], explanation: "This notation represents the derivative of r with respect to t." },
            { q: "When solving a related rates problem, what is the first step?", options: [{text: "Differentiate immediately", correct: false}, {text: "Draw a diagram and identify known/unknown rates", correct: true}, {text: "Plug in numbers", correct: false}, {text: "None", correct: false}], explanation: "Visualization and variable identification are essential before applying calculus." },
            { q: "If V = (4/3)πr^3, what is dV/dt?", options: [{text: "4πr^2 * (dr/dt)", correct: true}, {text: "4πr * (dr/dt)", correct: false}, {text: "(4/3)πr^2 * (dr/dt)", correct: false}, {text: "None", correct: false}], explanation: "Power rule gives 3*(4/3)πr^2 * dr/dt = 4πr^2 * dr/dt." },
            { q: "If a ladder slides down a wall, which variable is constant?", options: [{text: "The ladder length", correct: true}, {text: "The height", correct: false}, {text: "The distance from wall", correct: false}, {text: "None", correct: false}], explanation: "The hypotenuse of the triangle (the ladder) does not change in length." },
            { q: "Which derivative represents the rate of change of volume?", options: [{text: "dV/dt", correct: true}, {text: "dV/dr", correct: false}, {text: "dr/dt", correct: false}, {text: "None", correct: false}], explanation: "dV/dt is the standard notation for change in volume over time." },
            { q: "When differentiating implicit functions in related rates, what must you always multiply by?", options: [{text: "dt", correct: false}, {text: "d/dt", correct: false}, {text: "the derivative of that variable with respect to t", correct: true}, {text: "None", correct: false}], explanation: "Every variable changing over time must be followed by its derivative with respect to t." },
            { q: "Can related rates be used for triangles?", options: [{text: "Yes, using Pythagorean theorem", correct: true}, {text: "No", correct: false}, {text: "Only for right triangles", correct: false}, {text: "None", correct: false}], explanation: "Yes, x^2 + y^2 = z^2 is commonly differentiated to relate rates in triangles." }
          ]
        }
      ]
      
    },
        "unit-3": {
      title: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions",
      lessons: [
            {
          id: "3.1",
          topic: "3.1 The Chain Rule",
          videoId: "H-ybCx8gt-8",
          quiz: [
            { q: "What is the Chain Rule formula for f(g(x))?", options: [{text: "f'(g(x)) * g'(x)", correct: true}, {text: "f'(g'(x))", correct: false}, {text: "f'(g(x))", correct: false}, {text: "None", correct: false}], explanation: "Differentiate the outer, keep inner, multiply by derivative of inner." },
            { q: "Derivative of sin(x^2)?", options: [{text: "cos(x^2) * 2x", correct: true}, {text: "cos(x^2)", correct: false}, {text: "2x*sin(x^2)", correct: false}, {text: "None", correct: false}], explanation: "Derivative of sin(u) is cos(u)*u'." },
            { q: "Derivative of (3x+1)^10?", options: [{text: "10(3x+1)^9 * 3", correct: true}, {text: "10(3x+1)^9", correct: false}, {text: "(3x+1)^9", correct: false}, {text: "None", correct: false}], explanation: "Power rule outside (10u^9) times derivative of inside (3)." },
            { q: "Derivative of e^(x^2)?", options: [{text: "e^(x^2) * 2x", correct: true}, {text: "e^(x^2)", correct: false}, {text: "2x*e^x", correct: false}, {text: "None", correct: false}], explanation: "Derivative of e^u is e^u * u'." },
            { q: "Is the Chain Rule required for f(x) = (2x+3)^5?", options: [{text: "Yes", correct: true}, {text: "No", correct: false}, {text: "Only if x=0", correct: false}, {text: "None", correct: false}], explanation: "Yes, it is a composition of a power function and a linear function." },
            { q: "Derivative of tan(5x)?", options: [{text: "sec^2(5x) * 5", correct: true}, {text: "sec^2(5x)", correct: false}, {text: "5tan(5x)", correct: false}, {text: "None", correct: false}], explanation: "Derivative of tan(u) is sec^2(u) * u'." },
            { q: "Derivative of [cos(x)]^3?", options: [{text: "3[cos(x)]^2 * -sin(x)", correct: true}, {text: "3[cos(x)]^2", correct: false}, {text: "-sin^3(x)", correct: false}, {text: "None", correct: false}], explanation: "Outside: 3u^2. Inside derivative: -sin(x)." },
            { q: "Derivative of f(x) = f(2x)?", options: [{text: "f'(2x) * 2", correct: true}, {text: "f'(2x)", correct: false}, {text: "2*f(x)", correct: false}, {text: "None", correct: false}], explanation: "Outer f' kept at (2x) * derivative of 2x." },
            { q: "Derivative of sqrt(1+x^2)?", options: [{text: "(1/2)(1+x^2)^(-1/2) * 2x", correct: true}, {text: "(1/2)(1+x^2)^(-1/2)", correct: false}, {text: "1/sqrt(x^2)", correct: false}, {text: "None", correct: false}], explanation: "Power rule for sqrt, then chain rule for inside (1+x^2)." },
            { q: "Chain rule is specifically for?", options: [{text: "Composition f(g(x))", correct: true}, {text: "Addition", correct: false}, {text: "Multiplication", correct: false}, {text: "None", correct: false}], explanation: "Chain rule is specifically for composition f(g(x))." }
          ]
        },
        {
          id: "3.2",
          topic: "3.2 Implicit Differentiation",
          videoId: "LGY-DjFsALc",
          quiz: [
            { q: "What is appended when differentiating y implicitly?", options: [{text: "dy/dx", correct: true}, {text: "x", correct: false}, {text: "Nothing", correct: false}, {text: "y'", correct: false}], explanation: "Because y is a function of x, chain rule dictates appending dy/dx." },
            { q: "Find dy/dx for x^2 + y^2 = 25.", options: [{text: "2x + 2y*dy/dx = 0", correct: true}, {text: "2x + 2y = 0", correct: false}, {text: "2x + 2y*y' = 25", correct: false}, {text: "None", correct: false}], explanation: "Derive x^2 (2x) and y^2 (2y*dy/dx)." },
            { q: "Final dy/dx for x^2 + y^2 = 25?", options: [{text: "-x/y", correct: true}, {text: "x/y", correct: false}, {text: "-y/x", correct: false}, {text: "None", correct: false}], explanation: "2y*dy/dx = -2x => dy/dx = -x/y." },
            { q: "When to use implicit?", options: [{text: "When y is hard to isolate", correct: true}, {text: "Only for x", correct: false}, {text: "Never", correct: false}, {text: "None", correct: false}], explanation: "Implicit is for equations where y is 'mixed in' with x." },
            { q: "Derivative of xy (product rule + implicit)?", options: [{text: "y + x*dy/dx", correct: true}, {text: "x*dy/dx", correct: false}, {text: "y + x", correct: false}, {text: "None", correct: false}], explanation: "Product rule: (1)y + (x)dy/dx." },
            { q: "Derivative of sin(y)?", options: [{text: "cos(y) * dy/dx", correct: true}, {text: "cos(y)", correct: false}, {text: "-cos(y)*dy/dx", correct: false}, {text: "None", correct: false}], explanation: "Derivative of sin(u) is cos(u)*u', so use dy/dx." },
            { q: "Derivative of y^3?", options: [{text: "3y^2 * dy/dx", correct: true}, {text: "3y^2", correct: false}, {text: "y^2 * dy/dx", correct: false}, {text: "None", correct: false}], explanation: "Power rule 3y^2 then multiply by derivative of inside (dy/dx)." },
            { q: "Slope of x^2 + y^2 = 1 at (1/sqrt(2), 1/sqrt(2))?", options: [{text: "-1", correct: true}, {text: "1", correct: false}, {text: "0", correct: false}, {text: "None", correct: false}], explanation: "Slope = -x/y. -(1/sqrt(2))/(1/sqrt(2)) = -1." },
            { q: "Can you find second derivatives implicitly?", options: [{text: "Yes, by differentiating dy/dx again", correct: true}, {text: "No", correct: false}, {text: "Only for x", correct: false}, {text: "None", correct: false}], explanation: "Yes, differentiate the result of the first derivative implicitly again." },
            { q: "Crucial step after differentiating all terms?", options: [{text: "Solve for dy/dx", correct: true}, {text: "Set to 1", correct: false}, {text: "Factor x", correct: false}, {text: "None", correct: false}], explanation: "Group all terms with dy/dx on one side and factor it out." }
          ]
        },
        {
          id: "3.3",
          topic: "3.3 Differentiating Inverse Trig Functions",
          videoId: "OGRiQbphPfU",
          quiz: [
            { q: "d/dx [arcsin(x)] is:", options: [{text: "1/sqrt(1-x^2)", correct: true}, {text: "1/(1+x^2)", correct: false}, {text: "-1/sqrt(1-x^2)", correct: false}, {text: "1/x", correct: false}], explanation: "Standard derivative identity for arcsin." },
            { q: "d/dx [arccos(x)] is:", options: [{text: "-1/sqrt(1-x^2)", correct: true}, {text: "1/sqrt(1-x^2)", correct: false}, {text: "-1/(1+x^2)", correct: false}, {text: "None", correct: false}], explanation: "Co-function derivatives are negative." },
            { q: "d/dx [arctan(x)] is:", options: [{text: "1/(1+x^2)", correct: true}, {text: "-1/(1+x^2)", correct: false}, {text: "1/sqrt(1-x^2)", correct: false}, {text: "None", correct: false}], explanation: "Standard derivative identity for arctan." },
            { q: "d/dx [arccot(x)] is:", options: [{text: "-1/(1+x^2)", correct: true}, {text: "1/(1+x^2)", correct: false}, {text: "1/sqrt(1-x^2)", correct: false}, {text: "None", correct: false}], explanation: "Co-function identity for arccot." },
            { q: "d/dx [arcsec(x)] is:", options: [{text: "1/(|x|sqrt(x^2-1))", correct: true}, {text: "1/(x^2-1)", correct: false}, {text: "-1/(|x|sqrt(x^2-1))", correct: false}, {text: "None", correct: false}], explanation: "Arcsecant derivative involves absolute value." },
            { q: "d/dx [arccsc(x)] is:", options: [{text: "-1/(|x|sqrt(x^2-1))", correct: true}, {text: "1/(|x|sqrt(x^2-1))", correct: false}, {text: "1/(1+x^2)", correct: false}, {text: "None", correct: false}], explanation: "Co-function identity for arccsc." },
            { q: "What is d/dx [arcsin(2x)]?", options: [{text: "2/sqrt(1-4x^2)", correct: true}, {text: "1/sqrt(1-4x^2)", correct: false}, {text: "2/sqrt(1-x^2)", correct: false}, {text: "None", correct: false}], explanation: "Apply chain rule: 1/sqrt(1-(2x)^2) * d/dx(2x)." },
            { q: "True or False: The derivative of all 'co-' inverse trig functions is negative.", options: [{text: "True", correct: true}, {text: "False", correct: false}], explanation: "True: arccos, arccot, and arccsc all contain a negative sign." },
            { q: "Derivative of arctan(e^x)?", options: [{text: "e^x / (1+e^(2x))", correct: true}, {text: "e^x / (1+e^x)", correct: false}, {text: "1 / (1+e^(2x))", correct: false}, {text: "None", correct: false}], explanation: "Chain rule: 1/(1+(e^x)^2) * e^x." },
            { q: "What is the slope of arcsin(x) at x=0?", options: [{text: "1", correct: true}, {text: "0", correct: false}, {text: "undefined", correct: false}, {text: "None", correct: false}], explanation: "f'(0) = 1/sqrt(1-0) = 1." }
          ]
        },
        {
          id: "3.4",
          topic: "3.4 Differentiating Logarithmic Functions",
          videoId: "Dp9sgIvaKPk",
          quiz: [
            { q: "What is d/dx [ln(x)]?", options: [{text: "1/x", correct: true}, {text: "x", correct: false}, {text: "e^x", correct: false}, {text: "None", correct: false}], explanation: "The fundamental derivative of the natural log." },
            { q: "What is d/dx [ln(g(x))]?", options: [{text: "g'(x)/g(x)", correct: true}, {text: "1/g(x)", correct: false}, {text: "g(x)/g'(x)", correct: false}, {text: "None", correct: false}], explanation: "Chain rule for natural logs." },
            { q: "Derivative of ln(x^2)?", options: [{text: "2/x", correct: true}, {text: "1/x^2", correct: false}, {text: "2x/x^2", correct: true}, {text: "None", correct: false}], explanation: "Can be solved as 2x/x^2 = 2/x or using log properties: 2*ln(x) -> 2/x." },
            { q: "Derivative of ln(5x)?", options: [{text: "1/x", correct: true}, {text: "5/x", correct: false}, {text: "1/(5x)", correct: false}, {text: "None", correct: false}], explanation: "ln(5)+ln(x) -> 0 + 1/x = 1/x." },
            { q: "Derivative of log_10(x)?", options: [{text: "1/(x*ln(10))", correct: true}, {text: "1/x", correct: false}, {text: "ln(10)/x", correct: false}, {text: "None", correct: false}], explanation: "d/dx[log_a(x)] = 1/(x*ln(a))." },
            { q: "True or False: d/dx [ln(x^n)] = n/x.", options: [{text: "True", correct: true}, {text: "False", correct: false}], explanation: "Correct: n * ln(x) -> n * (1/x) = n/x." },
            { q: "Derivative of ln(sin(x))?", options: [{text: "cot(x)", correct: true}, {text: "tan(x)", correct: false}, {text: "1/sin(x)", correct: false}, {text: "None", correct: false}], explanation: "cos(x)/sin(x) = cot(x)." },
            { q: "What is logarithmic differentiation?", options: [{text: "Taking ln of both sides", correct: true}, {text: "Adding logs", correct: false}, {text: "Multiplying logs", correct: false}, {text: "None", correct: false}], explanation: "Technique used to differentiate products/powers by first applying ln." },
            { q: "Derivative of ln(x^2 + 1)?", options: [{text: "2x / (x^2 + 1)", correct: true}, {text: "1 / (x^2 + 1)", correct: false}, {text: "2x", correct: false}, {text: "None", correct: false}], explanation: "u'/u = (2x)/(x^2+1)." },
            { q: "Derivative of ln(e^x)?", options: [{text: "1", correct: true}, {text: "e^x", correct: false}, {text: "1/e^x", correct: false}, {text: "None", correct: false}], explanation: "ln(e^x) is simply x, derivative is 1." }
          ]
        },
        {
          id: "3.5",
          topic: "3.5 Derivatives of Exponential Functions",
          videoId: "yg_497u6JnA",
          quiz: [
            { q: "Derivative of e^x?", options: [{text: "e^x", correct: true}, {text: "x*e^(x-1)", correct: false}, {text: "ln(x)", correct: false}, {text: "None", correct: false}], explanation: "The exponential function is its own derivative." },
            { q: "Derivative of a^x (base a)?", options: [{text: "a^x * ln(a)", correct: true}, {text: "a^x", correct: false}, {text: "x*a^(x-1)", correct: false}, {text: "None", correct: false}], explanation: "Exponential derivatives require the ln(base) factor." },
            { q: "Derivative of e^(5x)?", options: [{text: "5e^(5x)", correct: true}, {text: "e^(5x)", correct: false}, {text: "5e^x", correct: false}, {text: "None", correct: false}], explanation: "Chain rule: e^(5x) * 5." },
            { q: "Derivative of 2^x?", options: [{text: "2^x * ln(2)", correct: true}, {text: "2^x", correct: false}, {text: "x*2^(x-1)", correct: false}, {text: "None", correct: false}], explanation: "Base a derivative is a^x ln(a)." },
            { q: "Derivative of x * e^x?", options: [{text: "e^x + x*e^x", correct: true}, {text: "e^x", correct: false}, {text: "x*e^x", correct: false}, {text: "None", correct: false}], explanation: "Product rule: (1)e^x + (x)e^x." },
            { q: "Derivative of e^(cos x)?", options: [{text: "-sin(x) * e^(cos x)", correct: true}, {text: "cos(x) * e^(cos x)", correct: false}, {text: "e^(cos x)", correct: false}, {text: "None", correct: false}], explanation: "Chain rule: e^(cos x) * d/dx(cos x)." },
            { q: "Derivative of e^(x^2)?", options: [{text: "2x * e^(x^2)", correct: true}, {text: "e^(x^2)", correct: false}, {text: "2x*e^x", correct: false}, {text: "None", correct: false}], explanation: "Chain rule: e^(x^2) * 2x." },
            { q: "Derivative of 5^(3x)?", options: [{text: "5^(3x) * ln(5) * 3", correct: true}, {text: "5^(3x) * ln(5)", correct: false}, {text: "3 * 5^(3x)", correct: false}, {text: "None", correct: false}], explanation: "Base a derivative times ln(a) times chain rule for the exponent." },
            { q: "Derivative of e^ln(x)?", options: [{text: "1", correct: true}, {text: "e^ln(x)", correct: false}, {text: "x", correct: false}, {text: "None", correct: false}], explanation: "e^ln(x) = x, derivative of x is 1." },
            { q: "Derivative of e^(-x)?", options: [{text: "-e^(-x)", correct: true}, {text: "e^(-x)", correct: false}, {text: "-e^x", correct: false}, {text: "None", correct: false}], explanation: "Chain rule: e^(-x) * d/dx(-x) = -e^(-x)." }
          ]
        },
        {
          id: "3.6",
          topic: "3.6 Derivatives of Inverse Functions",
          videoId: "Xq0YEXPwi4Y",
          quiz: [
            { q: "Inverse derivative formula?", options: [{text: "(f^-1)'(b) = 1 / f'(a)", correct: true}, {text: "(f^-1)'(b) = f'(a)", correct: false}, {text: "(f^-1)'(b) = -f'(a)", correct: false}, {text: "None", correct: false}], explanation: "Reciprocal of the slope of the original function." },
            { q: "If f(1) = 2 and f'(1) = 4, what is (f^-1)'(2)?", options: [{text: "1/4", correct: true}, {text: "4", correct: false}, {text: "1/2", correct: false}, {text: "2", correct: false}], explanation: "Reciprocal of f'(1)." },
            { q: "Condition for invertible function?", options: [{text: "One-to-one (Horizontal Line Test)", correct: true}, {text: "Continuous", correct: false}, {text: "Differentiable", correct: false}, {text: "None", correct: false}], explanation: "Must be monotonic or one-to-one." },
            { q: "If f(x) = x^3, what is (f^-1)'(8)?", options: [{text: "1/12", correct: true}, {text: "12", correct: false}, {text: "1/8", correct: false}, {text: "None", correct: false}], explanation: "f'(2)=12. Reciprocal is 1/12." },
            { q: "Derivative of f^-1(x) at x=e?", options: [{text: "e", correct: true}, {text: "1/e", correct: false}, {text: "1", correct: false}, {text: "None", correct: false}], explanation: "For f(x)=ln(x), f'(1)=1/1=1, reciprocal is 1." },
            { q: "Does (f^-1)'(b) exist if f'(a)=0?", options: [{text: "No (division by zero)", correct: true}, {text: "Yes", correct: false}, {text: "Only if b=0", correct: false}, {text: "None", correct: false}], explanation: "Cannot have a horizontal tangent on original function if the inverse is to be differentiable." },
            { q: "Visual relationship of f and f^-1?", options: [{text: "Reflect over y=x", correct: true}, {text: "Rotate 180 degrees", correct: false}, {text: "Same graph", correct: false}, {text: "None", correct: false}], explanation: "Symmetry about y=x." },
            { q: "If f(x) is strictly increasing, is it invertible?", options: [{text: "Yes", correct: true}, {text: "No", correct: false}, {text: "None", correct: false}, {text: "Only if continuous", correct: false}], explanation: "Strictly increasing means one-to-one." },
            { q: "Derivative of f^-1(x) at x=5 if f(x)=2x+1?", options: [{text: "1/2", correct: true}, {text: "2", correct: false}, {text: "1", correct: false}, {text: "None", correct: false}], explanation: "f'(x)=2, reciprocal is 1/2." },
            { q: "Relationship between domain of f and f^-1?", options: [{text: "Domain of f is range of f^-1", correct: true}, {text: "Same domain", correct: false}, {text: "No relationship", correct: false}, {text: "None", correct: false}], explanation: "Inputs and outputs are swapped." }
          ]
        }

      ]
    },
        "unit-4": {
      title: "Unit 4: Contextual Applications of Differentiation",
      lessons: [
            {
          id: "4.1",
          topic: "4.1 Introduction to Related Rates",
          videoId: "qCkUfBiWeX8",
          quiz: [
            { q: "What is the primary variable of differentiation in related rates?", options: [{text: "Time (t)", correct: true}, {text: "x", correct: false}, {text: "y", correct: false}, {text: "None", correct: false}], explanation: "Related rates focus on how variables change over time." },
            { q: "What must you append to any y-term when differentiating w.r.t t?", options: [{text: "dy/dt", correct: true}, {text: "dx/dt", correct: false}, {text: "Nothing", correct: false}, {text: "d/dy", correct: false}], explanation: "Chain rule requires multiplying by the derivative of y w.r.t time." },
            { q: "If A = πr^2, what is dA/dt?", options: [{text: "2πr * (dr/dt)", correct: true}, {text: "π * dr/dt", correct: false}, {text: "2π * (dr/dt)", correct: false}, {text: "None", correct: false}], explanation: "Differentiating w.r.t t yields 2πr * dr/dt." },
            { q: "What do you do if a problem gives you a constant length?", options: [{text: "Derivative is 0", correct: true}, {text: "Assign variable", correct: false}, {text: "Solve for it", correct: false}, {text: "None", correct: false}], explanation: "Constants do not change, so their derivative is 0." },
            { q: "Which tool relates sides of a right triangle?", options: [{text: "Pythagorean Theorem", correct: true}, {text: "Power Rule", correct: false}, {text: "Chain Rule", correct: false}, {text: "None", correct: false}], explanation: "a^2 + b^2 = c^2 is the foundation for triangle-based rates." },
            { q: "What does dV/dt represent?", options: [{text: "Rate of change of volume", correct: true}, {text: "Total volume", correct: false}, {text: "Acceleration", correct: false}, {text: "None", correct: false}], explanation: "It is the derivative of V w.r.t time." },
            { q: "True or False: Related rates always use the chain rule.", options: [{text: "True", correct: true}, {text: "False", correct: false}], explanation: "Every variable changing over time requires chain rule factors." },
            { q: "What is a standard unit for dr/dt?", options: [{text: "Units / time", correct: true}, {text: "Units", correct: false}, {text: "Units^2 / time^2", correct: false}, {text: "None", correct: false}], explanation: "Length change per unit of time." },
            { q: "If a rate is 'decreasing', what sign is it?", options: [{text: "Negative", correct: true}, {text: "Positive", correct: false}, {text: "Zero", correct: false}, {text: "None", correct: false}], explanation: "Decreasing rates are negative derivatives." },
            { q: "What step follows finding the derivative equation?", options: [{text: "Plug in values", correct: true}, {text: "Square variables", correct: false}, {text: "Differentiate again", correct: false}, {text: "None", correct: false}], explanation: "Substitute the specific 'snapshot' values after differentiating." }
          ]
        },
        {
          id: "4.2",
          topic: "4.2 Solving Related Rates Problems",
          videoId: "iK625WaKomM",
          quiz: [
            { q: "First step in solving related rates?", options: [{text: "Draw/Identify", correct: true}, {text: "Derive", correct: false}, {text: "Square", correct: false}, {text: "None", correct: false}], explanation: "Visualization is critical." },
            { q: "How to relate variables for a cone? (V=1/3πr^2h)", options: [{text: "Use similar triangles", correct: true}, {text: "Add them", correct: false}, {text: "Ignore r", correct: false}, {text: "None", correct: false}], explanation: "Similar triangles allow you to write r in terms of h." },
            { q: "Does the Pythagorean Theorem apply if the ladder slides?", options: [{text: "Yes", correct: true}, {text: "No", correct: false}, {text: "Only if v > 0", correct: false}, {text: "None", correct: false}], explanation: "x^2 + y^2 = L^2." },
            { q: "What is 'unknown' in most related rates?", options: [{text: "A specific rate", correct: true}, {text: "The function", correct: false}, {text: "The constant", correct: false}, {text: "None", correct: false}], explanation: "You solve for the missing rate of change." },
            { q: "How are known values used?", options: [{text: "After differentiating", correct: true}, {text: "Before differentiating", correct: false}, {text: "Never", correct: false}, {text: "None", correct: false}], explanation: "Never plug in numbers before differentiating, or you'll get 0." },
            { q: "What is the relation for a sphere? (V = 4/3πr^3)", options: [{text: "dV/dt = 4πr^2(dr/dt)", correct: true}, {text: "dV/dt = 4πr(dr/dt)", correct: false}, {text: "dV/dt = 4/3πr^2", correct: false}, {text: "None", correct: false}], explanation: "Standard differentiation for a sphere." },
            { q: "What if multiple variables change?", options: [{text: "Use product/chain rule", correct: true}, {text: "Pick one", correct: false}, {text: "Add them", correct: false}, {text: "None", correct: false}], explanation: "All changing variables must be accounted for." },
            { q: "What defines a 'snapshot' in related rates?", options: [{text: "A specific instant in time", correct: true}, {text: "The whole interval", correct: false}, {text: "The start", correct: false}, {text: "None", correct: false}], explanation: "Rates change, so we evaluate at one moment." },
            { q: "Why use similar triangles?", options: [{text: "To reduce variables", correct: true}, {text: "To add variables", correct: false}, {text: "To find angles", correct: false}, {text: "None", correct: false}], explanation: "It helps define one variable by the other to keep differentiation simple." },
            { q: "Final step after solving for the rate?", options: [{text: "Include units", correct: true}, {text: "Square it", correct: false}, {text: "Negate it", correct: false}, {text: "None", correct: false}], explanation: "Always communicate units for rate problems." }
          ]
        },
        {
          id: "4.3",
          topic: "4.3 Mean Value Theorem (MVT)",
          videoId: "8w_YyS4_xZc",
          quiz: [
            { q: "MVT guarantees a point where f'(c) equals:", options: [{text: "Average slope", correct: true}, {text: "Zero", correct: false}, {text: "Max slope", correct: false}, {text: "None", correct: false}], explanation: "Instantaneous slope equals secant slope." },
            { q: "Requirements for MVT?", options: [{text: "Continuous and Differentiable", correct: true}, {text: "Only Continuous", correct: false}, {text: "Only Differentiable", correct: false}, {text: "None", correct: false}], explanation: "Standard hypotheses." },
            { q: "What interval does MVT use?", options: [{text: "Closed [a, b]", correct: true}, {text: "Open (a, b)", correct: false}, {text: "Infinite", correct: false}, {text: "None", correct: false}], explanation: "Closed interval is required." },
            { q: "If f'(c) = (f(b)-f(a))/(b-a), this is:", options: [{text: "MVT", correct: true}, {text: "Power Rule", correct: false}, {text: "Chain Rule", correct: false}, {text: "None", correct: false}], explanation: "The MVT equation." },
            { q: "Can MVT apply to |x| on [-1, 1]?", options: [{text: "No", correct: true}, {text: "Yes", correct: false}, {text: "Only at x=0", correct: false}, {text: "None", correct: false}], explanation: "Not differentiable at x=0." },
            { q: "What does Rolle's Theorem guarantee?", options: [{text: "f'(c) = 0", correct: true}, {text: "f'(c) = 1", correct: false}, {text: "f'(c) = slope", correct: false}, {text: "None", correct: false}], explanation: "A specific case where f(a)=f(b)." },
            { q: "True or False: MVT applies to constant functions.", options: [{text: "True", correct: true}, {text: "False", correct: false}], explanation: "Slope is 0, secant is 0." },
            { q: "If f(a)=f(b), what is the average slope?", options: [{text: "0", correct: true}, {text: "1", correct: false}, {text: "undefined", correct: false}, {text: "None", correct: false}], explanation: "f(a)-f(b) = 0." },
            { q: "MVT is valid for which functions?", options: [{text: "Smooth/Continuous", correct: true}, {text: "Jump Discontinuity", correct: false}, {text: "Asymptotes", correct: false}, {text: "None", correct: false}], explanation: "Must be well-behaved." },
            { q: "Why use MVT?", options: [{text: "To prove existence of c", correct: true}, {text: "To find f(x)", correct: false}, {text: "To find x", correct: false}, {text: "None", correct: false}], explanation: "It proves at least one such 'c' exists." }
          ]
        },
        {
          id: "4.4",
          topic: "4.4 Extreme Value Theorem (EVT)",
          videoId: "Sx2lPZlnWfs",
          quiz: [
            { q: "Where do absolute extrema exist?", options: [{text: "Endpoints or Critical pts", correct: true}, {text: "Only critical pts", correct: false}, {text: "Only endpoints", correct: false}, {text: "None", correct: false}], explanation: "Check everywhere." },
            { q: "EVT requirement?", options: [{text: "Closed/Continuous interval", correct: true}, {text: "Open interval", correct: false}, {text: "Infinite interval", correct: false}, {text: "None", correct: false}], explanation: "Must have endpoints." },
            { q: "Are absolute extrema guaranteed?", options: [{text: "Yes, on closed/continuous", correct: true}, {text: "No", correct: false}, {text: "Only for x^2", correct: false}, {text: "None", correct: false}], explanation: "Guaranteed by EVT." },
            { q: "A critical point is where:", options: [{text: "f'(x)=0 or undefined", correct: true}, {text: "f'(x)=1", correct: false}, {text: "f(x)=0", correct: false}, {text: "None", correct: false}], explanation: "Standard definition." },
            { q: "If endpoint is f(a)=5 and crit pt is 2, what is absolute max?", options: [{text: "5", correct: true}, {text: "2", correct: false}, {text: "0", correct: false}, {text: "None", correct: false}], explanation: "Max is the largest value." },
            { q: "True or False: Absolute min can be at an endpoint.", options: [{text: "True", correct: true}, {text: "False", correct: false}], explanation: "Always check endpoints." },
            { q: "Is f(x) = 1/x continuous on [1, 2]?", options: [{text: "Yes", correct: true}, {text: "No", correct: false}, {text: "None", correct: false}], explanation: "No discontinuity in that range." },
            { q: "What is an absolute maximum?", options: [{text: "Highest point", correct: true}, {text: "Critical point", correct: false}, {text: "Endpoint", correct: false}, {text: "None", correct: false}], explanation: "The global maximum on the interval." },
            { q: "How many abs max can a function have?", options: [{text: "One (value)", correct: true}, {text: "Many", correct: false}, {text: "Zero", correct: false}, {text: "None", correct: false}], explanation: "The absolute maximum value is unique." },
            { q: "If f'(x) never equals 0, where is the max?", options: [{text: "At an endpoint", correct: true}, {text: "Nowhere", correct: false}, {text: "None", correct: false}], explanation: "If no crit points exist, the max/min must be at endpoints." }
          ]
        },
                {
          id: "4.5",
          topic: "4.5 Increasing/Decreasing Intervals",
          videoId: "ZP9NRZTL_zU",
          quiz: [
            { q: "If f'(x) > 0 on an interval, the function is:", options: [{text: "Increasing", correct: true}, {text: "Decreasing", correct: false}, {text: "Constant", correct: false}, {text: "None", correct: false}], explanation: "A positive slope means the function is rising." },
            { q: "If f'(x) < 0 on an interval, the function is:", options: [{text: "Decreasing", correct: true}, {text: "Increasing", correct: false}, {text: "Constant", correct: false}, {text: "None", correct: false}], explanation: "A negative slope means the function is falling." },
            { q: "Where do you find the intervals of increase/decrease?", options: [{text: "Between critical points", correct: true}, {text: "At intercepts", correct: false}, {text: "At zeros", correct: false}, {text: "None", correct: false}], explanation: "Critical points divide the domain into intervals where the sign of f' is constant." },
            { q: "True or False: A function can be increasing at a point where f'(x)=0.", options: [{text: "True", correct: true}, {text: "False", correct: false}], explanation: "Yes (e.g., x^3 at x=0), but it is not strictly increasing." },
            { q: "What is the first step to find intervals?", options: [{text: "Find critical points", correct: true}, {text: "Find second derivative", correct: false}, {text: "Find x-intercepts", correct: false}, {text: "None", correct: false}], explanation: "Critical points determine the boundaries of the intervals." },
            { q: "If f'(x) = 0 for all x, the function is:", options: [{text: "Constant", correct: true}, {text: "Increasing", correct: false}, {text: "Decreasing", correct: false}, {text: "None", correct: false}], explanation: "Zero derivative means no change." },
            { q: "If f(x) = x^2, where is it decreasing?", options: [{text: "(-inf, 0)", correct: true}, {text: "(0, inf)", correct: false}, {text: "Nowhere", correct: false}, {text: "None", correct: false}], explanation: "Derivative 2x < 0 when x < 0." },
            { q: "How do you test an interval?", options: [{text: "Pick a test point", correct: true}, {text: "Check endpoints", correct: false}, {text: "Graph it", correct: false}, {text: "None", correct: false}], explanation: "Test a point in the interval to determine the sign of f'." },
            { q: "What does a sign change of f' mean?", options: [{text: "Extrema or transition", correct: true}, {text: "Discontinuity", correct: false}, {text: "Asymptote", correct: false}, {text: "None", correct: false}], explanation: "A change in sign indicates a relative max or min." },
            { q: "Can a function be increasing on two separate intervals?", options: [{text: "Yes", correct: true}, {text: "No", correct: false}, {text: "Only if linear", correct: false}, {text: "None", correct: false}], explanation: "Yes, separated by points where the derivative is 0 or undefined." }
          ]
        },
        {
          id: "4.6",
          topic: "4.6 First Derivative Test",
          videoId: "G5wlKltW7pM",
          quiz: [
            { q: "Relative max occurs when f' changes from:", options: [{text: "Positive to negative", correct: true}, {text: "Negative to positive", correct: false}, {text: "Positive to positive", correct: false}, {text: "None", correct: false}], explanation: "Slope changes from rising to falling." },
            { q: "Relative min occurs when f' changes from:", options: [{text: "Negative to positive", correct: true}, {text: "Positive to negative", correct: false}, {text: "Negative to negative", correct: false}, {text: "None", correct: false}], explanation: "Slope changes from falling to rising." },
            { q: "Does f'(c)=0 guarantee a max or min?", options: [{text: "No", correct: true}, {text: "Yes", correct: false}, {text: "Only for x^2", correct: false}, {text: "None", correct: false}], explanation: "It could be an inflection point, like x^3." },
            { q: "What do you do if f' does not change sign?", options: [{text: "It is not a relative extremum", correct: true}, {text: "It is a max", correct: false}, {text: "It is a min", correct: false}, {text: "None", correct: false}], explanation: "No sign change means the function continues in the same direction." },
            { q: "Is the first derivative test valid at endpoints?", options: [{text: "No", correct: true}, {text: "Yes", correct: false}, {text: "Only for local", correct: false}, {text: "None", correct: false}], explanation: "It applies to critical points within the domain." },
            { q: "Derivative of f(x) = x^3 at 0 is 0. Is it a max/min?", options: [{text: "No", correct: true}, {text: "Yes, max", correct: false}, {text: "Yes, min", correct: false}, {text: "None", correct: false}], explanation: "No sign change in f' around 0." },
            { q: "What if f' is undefined?", options: [{text: "Check for sign change", correct: true}, {text: "Ignore it", correct: false}, {text: "Assume min", correct: false}, {text: "None", correct: false}], explanation: "Critical points can be where f' is undefined." },
            { q: "Can you have multiple relative extrema?", options: [{text: "Yes", correct: true}, {text: "No", correct: false}, {text: "Only two", correct: false}, {text: "None", correct: false}], explanation: "Yes, depending on the function's complexity." },
            { q: "What is the goal of the first derivative test?", options: [{text: "Classify critical points", correct: true}, {text: "Find x-intercepts", correct: false}, {text: "Find y-intercepts", correct: false}, {text: "None", correct: false}], explanation: "To determine if they are relative maxes, mins, or neither." },
            { q: "If f' is always positive, how many extrema?", options: [{text: "Zero", correct: true}, {text: "One", correct: false}, {text: "Many", correct: false}, {text: "None", correct: false}], explanation: "Never changes direction, so no extrema." }
          ]
        },
        {
          id: "4.7",
          topic: "4.7 Using L’Hôpital’s Rule for Determining Limits of Indeterminate Forms",
          videoId: "QQAzlLZRDiQ",
          quiz: [
            { q: "What indeterminate form is required to use L’Hôpital’s Rule?", options: [{text: "0/0 or ∞/∞", correct: true}, {text: "0*∞", correct: false}, {text: "1^∞", correct: false}, {text: "None", correct: false}], explanation: "L’Hôpital’s Rule specifically requires 0/0 or ∞/∞." },
            { q: "What is the correct procedure for L’Hôpital’s Rule?", options: [{text: "Derive top and bottom separately", correct: true}, {text: "Quotient rule", correct: false}, {text: "Multiply limits", correct: false}, {text: "None", correct: false}], explanation: "It is the limit of the derivative of the numerator divided by the derivative of the denominator." },
            { q: "True or False: You can apply L’Hôpital’s Rule to 5/0.", options: [{text: "False", correct: true}, {text: "True", correct: false}], explanation: "5/0 is not indeterminate; it is a vertical asymptote." },
            { q: "If the limit is still indeterminate after applying the rule, what do you do?", options: [{text: "Apply the rule again", correct: true}, {text: "Stop and guess", correct: false}, {text: "Use quotient rule", correct: false}, {text: "None", correct: false}], explanation: "You can apply L’Hôpital’s Rule iteratively until the form is resolved." },
            { q: "What is the derivative of the numerator if f(x)=sin(x)?", options: [{text: "cos(x)", correct: true}, {text: "-cos(x)", correct: false}, {text: "sin(x)", correct: false}, {text: "None", correct: false}], explanation: "The derivative of sin(x) is cos(x)." },
            { q: "What is the derivative of the denominator if g(x)=x^2?", options: [{text: "2x", correct: true}, {text: "x", correct: false}, {text: "2", correct: false}, {text: "None", correct: false}], explanation: "The derivative of x^2 is 2x." },
            { q: "L’Hôpital’s Rule is a tool for finding:", options: [{text: "Limits", correct: true}, {text: "Derivatives", correct: false}, {text: "Integrals", correct: false}, {text: "None", correct: false}], explanation: "It is a limit-evaluating technique." },
            { q: "True or False: L’Hôpital’s Rule is the same as the quotient rule.", options: [{text: "False", correct: true}, {text: "True", correct: false}], explanation: "They are completely different operations." },
            { q: "If the limit is 0/∞, can you use the rule?", options: [{text: "No", correct: true}, {text: "Yes", correct: false}, {text: "Only if x=0", correct: false}, {text: "None", correct: false}], explanation: "Only 0/0 and ∞/∞ apply." },
            { q: "What happens if the limit of the new ratio doesn't exist?", options: [{text: "Rule is inconclusive", correct: true}, {text: "Limit is 0", correct: false}, {text: "Limit is ∞", correct: false}, {text: "None", correct: false}], explanation: "If the derivative ratio doesn't approach a limit, the original limit might not either." }
          ]
        }
      ]
    },
          "unit-5": {
        "title": "Unit 5: Analytical Applications of Differentiation",
        "lessons": [
          {
            "id": "5.1",
            "topic": "5.1 Using the Mean Value Theorem",
            "videoId": "bZYTDst1MOo",
            "quiz": [
              { "q": "What are the two hypothesis requirements for the Mean Value Theorem on [a, b]?", "options": [{"text": "Continuous on [a, b], differentiable on (a, b)", "correct": true}, {"text": "Continuous on (a, b), differentiable on [a, b]", "correct": false}, {"text": "f(a) must equal f(b)", "correct": false}, {"text": "None", "correct": false}], "explanation": "MVT requires a function to be continuous on the closed interval and differentiable on the open interval." },
              { "q": "The MVT guarantees that the instantaneous rate of change equals what?", "options": [{"text": "The average rate of change", "correct": true}, {"text": "Zero", "correct": false}, {"text": "The maximum rate of change", "correct": false}, {"text": "None", "correct": false}], "explanation": "The theorem states that f'(c) = [f(b) - f(a)] / (b - a) for some c in (a, b)." },
              { "q": "If a car travels 120 miles in 2 hours, what does the MVT guarantee?", "options": [{"text": "The car traveled exactly 60 mph at least once", "correct": true}, {"text": "The car was always traveling 60 mph", "correct": false}, {"text": "The car never stopped", "correct": false}, {"text": "None", "correct": false}], "explanation": "The average velocity is 60 mph, so the instantaneous velocity must equal 60 mph at some point." },
              { "q": "Which theorem is a specific case of the MVT where f(a) = f(b)?", "options": [{"text": "Rolle's Theorem", "correct": true}, {"text": "Extreme Value Theorem", "correct": false}, {"text": "Intermediate Value Theorem", "correct": false}, {"text": "None", "correct": false}], "explanation": "Rolle's Theorem states if f(a)=f(b) under MVT conditions, then f'(c) = 0." },
              { "q": "Can MVT be applied to f(x) = 1/x on [-1, 1]?", "options": [{"text": "No, it is discontinuous at x = 0", "correct": true}, {"text": "Yes, it is continuous", "correct": false}, {"text": "Yes, because it has endpoints", "correct": false}, {"text": "None", "correct": false}], "explanation": "The function is not continuous on the closed interval [-1, 1] due to the asymptote at x = 0." },
              { "q": "If MVT applies, where is the guaranteed value 'c' located?", "options": [{"text": "Strictly inside the open interval (a, b)", "correct": true}, {"text": "At one of the endpoints", "correct": false}, {"text": "Outside the interval", "correct": false}, {"text": "None", "correct": false}], "explanation": "The value c must lie strictly between a and b, meaning c ∈ (a, b)." },
              { "q": "What is the geometric interpretation of the MVT?", "options": [{"text": "Tangent line is parallel to the secant line", "correct": true}, {"text": "Tangent line is horizontal", "correct": false}, {"text": "Secant line has a slope of zero", "correct": false}, {"text": "None", "correct": false}], "explanation": "The average rate of change is the slope of the secant line, and f'(c) is the slope of the tangent line." },
              { "q": "True or False: If a function is differentiable on (a, b), it is automatically continuous on [a, b].", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "Differentiability on the open interval does not guarantee continuity at the closed endpoints." },
              { "q": "If f(x) is a linear function, how many points satisfy the MVT?", "options": [{"text": "Infinitely many (all points in the interval)", "correct": true}, {"text": "Exactly one", "correct": false}, {"text": "Zero", "correct": false}, {"text": "None", "correct": false}], "explanation": "For a line, the instantaneous slope is everywhere equal to the average slope." },
              { "q": "What is the first step when justifying a conclusion using the MVT on an AP FRQ?", "options": [{"text": "State that f is continuous and differentiable", "correct": true}, {"text": "Calculate the derivative", "correct": false}, {"text": "Set f'(c) equal to 0", "correct": false}, {"text": "None", "correct": false}], "explanation": "You must always explicitly verify and declare that the hypotheses are met before applying the theorem." }
            ]
          },
          {
            "id": "5.2",
            "topic": "5.2 Extreme Value Theorem, Global Versus Local Extrema, and Critical Points",
            "videoId": "ZIqfI2QVLRI",
            "quiz": [
              { "q": "What does the Extreme Value Theorem guarantee?", "options": [{"text": "An absolute max and min on a closed interval", "correct": true}, {"text": "A relative max and min on an open interval", "correct": false}, {"text": "That f'(c) = 0 exists", "correct": false}, {"text": "None", "correct": false}], "explanation": "EVT guarantees both an absolute maximum and an absolute minimum for a continuous function on a closed interval." },
              { "q": "A critical point of a function f occurs where:", "options": [{"text": "f'(x) = 0 or f'(x) is undefined", "correct": true}, {"text": "f(x) = 0", "correct": false}, {"text": "f''(x) = 0", "correct": false}, {"text": "None", "correct": false}], "explanation": "Critical points are values in the domain where the first derivative is zero or does not exist." },
              { "q": "Can a relative minimum occur at a point where f'(x) is undefined?", "options": [{"text": "Yes, like the vertex of a sharp V-shape", "correct": true}, {"text": "No, f'(x) must equal 0", "correct": false}, {"text": "Only if the function is linear", "correct": false}, {"text": "None", "correct": false}], "explanation": "Functions like f(x) = |x| have a relative minimum at x=0 where the derivative is undefined." },
              { "q": "What is the difference between global and local extrema?", "options": [{"text": "Global is over the whole interval; local is in a neighborhood", "correct": true}, {"text": "Global only occurs at endpoints", "correct": false}, {"text": "Local can never equal global values", "correct": false}, {"text": "None", "correct": false}], "explanation": "Global (absolute) extrema are the absolute highest/lowest values on the entire domain; local are peaks/valleys relative to nearby points." },
              { "q": "True or False: Every critical point must be a local maximum or minimum.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "Consider f(x) = x^3 at x = 0; it is a critical point but neither a max nor a min." },
              { "q": "If f(x) is continuous on an open interval (a, b), does EVT apply?", "options": [{"text": "No, the interval must be closed", "correct": true}, {"text": "Yes, continuity is the only requirement", "correct": false}, {"text": "Only if the interval is infinite", "correct": false}, {"text": "None", "correct": false}], "explanation": "EVT strictly requires a closed interval to guarantee absolute extrema." },
              { "q": "Where can absolute extrema occur on a closed interval?", "options": [{"text": "Critical points or endpoints", "correct": true}, {"text": "Only critical points", "correct": false}, {"text": "Only endpoints", "correct": false}, {"text": "None", "correct": false}], "explanation": "Absolute extrema are found by comparing the function values at interior critical points and boundary endpoints." },
              { "q": "Can a function have multiple locations for its absolute maximum?", "options": [{"text": "Yes, but only one unique maximum value", "correct": true}, {"text": "No, it can only occur at one x-value", "correct": false}, {"text": "Yes, and it can have multiple maximum values", "correct": false}, {"text": "None", "correct": false}], "explanation": "A function like y = sin(x) reaches its maximum value of 1 at multiple x-values." },
              { "q": "If a critical point is not in the specified interval, what should you do?", "options": [{"text": "Ignore it", "correct": true}, {"text": "Test it anyway", "correct": false}, {"text": "Change the interval", "correct": false}, {"text": "None", "correct": false}], "explanation": "Only critical points within the boundaries of the interval are relevant to the problem." },
              { "q": "If f'(c) = 0, what can we definitively conclude about f at c?", "options": [{"text": "c is a critical point", "correct": true}, {"text": "c is a local maximum", "correct": false}, {"text": "c is an inflection point", "correct": false}, {"text": "None", "correct": false}], "explanation": "f'(c) = 0 satisfies the definition of a critical point, but further testing is needed to classify it." }
            ]
          },
          {
            "id": "5.3",
            "topic": "5.3 Determining Intervals on Which a Function Is Increasing or Decreasing",
            "videoId": "kX42vSyN8Eo",
            "quiz": [
              { "q": "A function f is increasing on an interval if for all points in that interval:", "options": [{"text": "f'(x) > 0", "correct": true}, {"text": "f'(x) < 0", "correct": false}, {"text": "f'(x) = 0", "correct": false}, {"text": "None", "correct": false}], "explanation": "A positive first derivative indicates a positive slope, meaning the function values are rising." },
              { "q": "What mathematical tool is used to find intervals of increase or decrease?", "options": [{"text": "A sign chart of the first derivative", "correct": true}, {"text": "The power rule alone", "correct": false}, {"text": "A sign chart of the original function", "correct": false}, {"text": "None", "correct": false}], "explanation": "Testing the sign of f'(x) on intervals bounded by critical points identifies where f increases or decreases." },
              { "q": "If f'(x) < 0 on (1, 5), what is f doing on that interval?", "options": [{"text": "Decreasing", "correct": true}, {"text": "Increasing", "correct": false}, {"text": "Concave down", "correct": false}, {"text": "None", "correct": false}], "explanation": "A negative derivative indicates a downward slope, so the function is decreasing." },
              { "q": "What values partition the domain into test intervals for increasing/decreasing behavior?", "options": [{"text": "Critical points", "correct": true}, {"text": "X-intercepts", "correct": false}, {"text": "Y-intercepts", "correct": false}, {"text": "None", "correct": false}], "explanation": "A derivative can only change signs where it passes through zero or is undefined (critical points)." },
              { "q": "If f(x) = x^2 - 4x, where is the function decreasing?", "options": [{"text": "(-∞, 2)", "correct": true}, {"text": "(2, ∞)", "correct": false}, {"text": "(-∞, 4)", "correct": false}, {"text": "None", "correct": false}], "explanation": "f'(x) = 2x - 4. Setting 2x - 4 < 0 yields x < 2." },
              { "q": "How do you test the sign of f'(x) within an interval?", "options": [{"text": "Plug any value from the interval into f'(x)", "correct": true}, {"text": "Plug the endpoints into f(x)", "correct": false}, {"text": "Plug any value from the interval into f(x)", "correct": false}, {"text": "None", "correct": false}], "explanation": "Evaluating f'(x) at a single test point determines the sign for the entire continuous interval." },
              { "q": "True or False: If f(x) is strictly increasing, f'(x) can never equal 0 at any single point.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "f(x) = x^3 is strictly increasing everywhere, even though f'(0) = 0 momentarily." },
              { "q": "If f'(x) is positive everywhere on its domain, what does the graph look like from left to right?", "options": [{"text": "It always goes up", "correct": true}, {"text": "It always goes down", "correct": false}, {"text": "It forms a parabola", "correct": false}, {"text": "None", "correct": false}], "explanation": "A constantly positive slope means the function rises continuously across its entire domain." },
              { "q": "Why can't a function change from increasing to decreasing without a critical point?", "options": [{"text": "By the Intermediate Value Theorem applied to f'", "correct": true}, {"text": "Because of the Extreme Value Theorem", "correct": false}, {"text": "It can if it's a linear function", "correct": false}, {"text": "None", "correct": false}], "explanation": "For a continuous derivative to change signs from positive to negative, it must pass through zero (IVT), creating a critical point." },
              { "q": "On the AP Exam, is a sign chart alone acceptable as full justification?", "options": [{"text": "No, you must write out the conclusion in sentence form", "correct": true}, {"text": "Yes, sign charts are considered full proof", "correct": false}, {"text": "Only for multiple choice questions", "correct": false}, {"text": "None", "correct": false}], "explanation": "AP readers use sign charts to see your work, but final justification requires a sentence stating 'f is increasing because f' > 0'." }
            ]
          },
          {
            "id": "5.4",
            "topic": "5.4 Using the First Derivative Test to Determine Relative (Local) Extrema",
            "videoId": "9ukMCDAhz3E",
            "quiz": [
              { "q": "According to the First Derivative Test, a local maximum occurs if f' changes from:", "options": [{"text": "Positive to negative", "correct": true}, {"text": "Negative to positive", "correct": false}, {"text": "Positive to zero", "correct": false}, {"text": "None", "correct": false}], "explanation": "When the slope changes from positive (climbing) to negative (falling), a peak is formed." },
              { "q": "According to the First Derivative Test, a local minimum occurs if f' changes from:", "options": [{"text": "Negative to positive", "correct": true}, {"text": "Positive to negative", "correct": false}, {"text": "Negative to zero", "correct": false}, {"text": "None", "correct": false}], "explanation": "When the slope changes from negative (descending) to positive (climbing), a valley is formed." },
              { "q": "What happens if f' is positive on both sides of a critical point?", "options": [{"text": "There is no local extremum at that point", "correct": true}, {"text": "It is a local maximum", "correct": false}, {"text": "It is a local minimum", "correct": false}, {"text": "None", "correct": false}], "explanation": "Without a sign change in the first derivative, the function continues upwards, meaning no local extremum exists." },
              { "q": "To apply the First Derivative Test, what must first be identified?", "options": [{"text": "Critical points of the function", "correct": true}, {"text": "The second derivative", "correct": false}, {"text": "Inflection points", "correct": false}, {"text": "None", "correct": false}], "explanation": "Local extrema can only occur at critical points, so they must be found first." },
              { "q": "If f'(x) = (x-3)(x+2) and changes signs, what occurs at x = 3?", "options": [{"text": "Local minimum", "correct": true}, {"text": "Local maximum", "correct": false}, {"text": "Inflection point", "correct": false}, {"text": "None", "correct": false}], "explanation": "For x slightly less than 3, f' is negative. For x slightly greater than 3, f' is positive. Negative to positive means a minimum." },
              { "q": "True or False: The First Derivative Test can be used to classify endpoints of an interval.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "The First Derivative Test applies strictly to interior critical points where a sign change can happen on both sides." },
              { "q": "If f'(x) is undefined at x = 0, but changes from positive to negative, what is at x = 0?", "options": [{"text": "A relative maximum", "correct": true}, {"text": "A relative minimum", "correct": false}, {"text": "Nothing", "correct": false}, {"text": "None", "correct": false}], "explanation": "As long as the function is continuous, a change from positive to negative derivative indicates a local max (like a cusp)." },
              { "q": "What is a common student error when writing justifications for the First Derivative Test?", "options": [{"text": "Using pronouns like 'it' instead of naming 'f' or 'f''", "correct": true}, {"text": "Using fractions", "correct": false}, {"text": "Finding too many critical points", "correct": false}, {"text": "None", "correct": false}], "explanation": "AP grading requires explicit notation (e.g., 'f has a relative max because f' changes from positive to negative')." },
              { "q": "If f'(x) = x^2, does x = 0 contain a relative extremum?", "options": [{"text": "No, because x^2 is never negative", "correct": true}, {"text": "Yes, a relative minimum", "correct": false}, {"text": "Yes, a relative maximum", "correct": false}, {"text": "None", "correct": false}], "explanation": "Because x^2 ≥ 0, f' does not change sign at x = 0, so it is not an extremum." },
              { "q": "If f'(c) = 0 and f' changes from negative to positive at c, f(c) is a:", "options": [{"text": "Relative minimum value", "correct": true}, {"text": "Relative maximum value", "correct": false}, {"text": "Critical location only", "correct": false}, {"text": "None", "correct": false}], "explanation": "The value f(c) is the actual minimum output value of the function at that location." }
            ]
          },
          {
            "id": "5.5",
            "topic": "5.5 Using the Candidates Test to Determine Absolute (Global) Extrema",
            "videoId": "BV6d7uJ2NkQ",
            "quiz": [
              { "q": "What is the primary purpose of the Candidates Test?", "options": [{"text": "To find absolute extrema on a closed interval", "correct": true}, {"text": "To find local extrema on an open interval", "correct": false}, {"text": "To find where a function is concave up", "correct": false}, {"text": "None", "correct": false}], "explanation": "The Candidates Test is the analytical method used to satisfy the Extreme Value Theorem." },
              { "q": "Who are the 'candidates' evaluated in the Candidates Test?", "options": [{"text": "Interior critical points and the boundary endpoints", "correct": true}, {"text": "Only the critical points", "correct": false}, {"text": "Only the endpoints", "correct": false}, {"text": "None", "correct": false}], "explanation": "Absolute extrema must occur either at a critical point inside the interval or at the boundaries." },
              { "q": "What do you calculate for each candidate in the final step of the test?", "options": [{"text": "The original function value f(x)", "correct": true}, {"text": "The derivative value f'(x)", "correct": false}, {"text": "The second derivative value f''(x)", "correct": false}, {"text": "None", "correct": false}], "explanation": "You compare actual function outputs to see which candidate yields the highest (max) or lowest (min) value." },
              { "q": "If f(x) has critical points at x=1 and x=4, and the interval is [0, 3], which critical point is ignored?", "options": [{"text": "x = 4", "correct": true}, {"text": "x = 1", "correct": false}, {"text": "x = 0", "correct": false}, {"text": "None", "correct": false}], "explanation": "x = 4 lies outside the interval [0, 3] and is not a valid candidate." },
              { "q": "Given f(0)=2, f(1)=5, and f(3)=-1 on [0, 3], what is the absolute maximum value?", "options": [{"text": "5", "correct": true}, {"text": "2", "correct": false}, {"text": "-1", "correct": false}, {"text": "1", "correct": false}], "explanation": "5 is the largest output value among all candidates." },
              { "q": "Given f(0)=2, f(1)=5, and f(3)=-1 on [0, 3], at what x-value does the absolute minimum occur?", "options": [{"text": "x = 3", "correct": true}, {"text": "x = 1", "correct": false}, {"text": "-1", "correct": false}, {"text": "None", "correct": false}], "explanation": "The absolute minimum value is -1, which occurs at the location x = 3." },
              { "q": "True or False: An absolute extremum can occur at a point where the derivative doesn't exist.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "Points where f' is undefined are critical points, making them eligible candidates." },
              { "q": "If a function is strictly decreasing on [a, b], where must the absolute maximum be?", "options": [{"text": "At x = a", "correct": true}, {"text": "At x = b", "correct": false}, {"text": "In the middle", "correct": false}, {"text": "None", "correct": false}], "explanation": "Since it falls the entire time, it starts at its highest point, which is the left endpoint x = a." },
              { "q": "What formatting is recommended for presenting the Candidates Test on the AP exam?", "options": [{"text": "A table of x-values and corresponding f(x) values", "correct": true}, {"text": "A sign chart with arrows", "correct": false}, {"text": "A long narrative essay", "correct": false}, {"text": "None", "correct": false}], "explanation": "An x | f(x) table is highly efficient and preferred by AP readers for showing candidate evaluation." },
              { "q": "If f is continuous on [a, b] and has no critical points, where do the extrema lie?", "options": [{"text": "At the endpoints a and b", "correct": true}, {"text": "The function has no extrema", "correct": false}, {"text": "At x = 0", "correct": false}, {"text": "None", "correct": false}], "explanation": "If there are no interior critical points, the absolute max and min must be located at the boundaries." }
            ]
          },
          {
            "id": "5.6",
            "topic": "5.6 Determining Concavity of Functions over Their Domains",
            "videoId": "9-H6bRE3SOY",
            "quiz": [
              { "q": "A graph is described as concave up on an interval if:", "options": [{"text": "f''(x) > 0", "correct": true}, {"text": "f''(x) < 0", "correct": false}, {"text": "f'(x) > 0", "correct": false}, {"text": "None", "correct": false}], "explanation": "A positive second derivative means the slope of the function is increasing, making it bend upward like a cup." },
              { "q": "A graph is described as concave down on an interval if:", "options": [{"text": "f''(x) < 0", "correct": true}, {"text": "f''(x) > 0", "correct": false}, {"text": "f'(x) < 0", "correct": false}, {"text": "None", "correct": false}], "explanation": "A negative second derivative means the slope is decreasing, making it bend downward like a frown." },
              { "q": "What is a point of inflection?", "options": [{"text": "A point where the concavity changes sign", "correct": true}, {"text": "A point where f''(x) = 0", "correct": false}, {"text": "A point where the function stops", "correct": false}, {"text": "None", "correct": false}], "explanation": "An inflection point requires an actual change in concavity behavior from up-to-down or down-to-up." },
              { "q": "Does f''(c) = 0 guarantee an inflection point at c?", "options": [{"text": "No, concavity must change signs around c", "correct": true}, {"text": "Yes, always", "correct": false}, {"text": "Only if f'(c) = 0", "correct": false}, {"text": "None", "correct": false}], "explanation": "For example, f(x) = x^4 has f''(0) = 0, but the graph is concave up on both sides, so it is not an inflection point." },
              { "q": "If a graph sits entirely above its tangent lines, it is:", "options": [{"text": "Concave up", "correct": true}, {"text": "Concave down", "correct": false}, {"text": "Decreasing", "correct": false}, {"text": "None", "correct": false}], "explanation": "Functions that bend upward always stay above their local linear approximations (tangent lines)." },
              { "q": "If f'(x) is decreasing on an interval, then f(x) is:", "options": [{"text": "Concave down", "correct": true}, {"text": "Concave up", "correct": false}, {"text": "Decreasing", "correct": false}, {"text": "None", "correct": false}], "explanation": "If f' is decreasing, its derivative f'' must be negative, which signifies a concave down structure." },
              { "q": "What points partition a sign chart for evaluating concavity?", "options": [{"text": "Points where f''(x) = 0 or is undefined", "correct": true}, {"text": "Critical points of f(x)", "correct": false}, {"text": "Zeros of f(x)", "correct": false}, {"text": "None", "correct": false}], "explanation": "Concavity changes can only happen where the second derivative equals zero or does not exist." },
              { "q": "If f(x) = x^3, what point is an inflection point?", "options": [{"text": "x = 0", "correct": true}, {"text": "x = 1", "correct": false}, {"text": "No inflection point exists", "correct": false}, {"text": "None", "correct": false}], "explanation": "f''(x) = 6x, which changes from negative (for x<0) to positive (for x>0) at x=0." },
              { "q": "If a graph sits entirely below its tangent lines, it is:", "options": [{"text": "Concave down", "correct": true}, {"text": "Concave up", "correct": false}, {"text": "Linear", "correct": false}, {"text": "None", "correct": false}], "explanation": "Functions that curve downward fall below their tangent lines." },
              { "q": "True or False: A function can have an inflection point where f''(x) is undefined.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "As long as the function is continuous and concavity changes sign across that value, it is an inflection point." }
            ]
          },
          {
            "id": "5.7",
            "topic": "5.7 Using the Second Derivative Test to Determine Extrema",
            "videoId": "FZV_reDw01A",
            "quiz": [
              { "q": "What is the primary objective of the Second Derivative Test?", "options": [{"text": "To classify local extrema at critical points where f'(c)=0", "correct": true}, {"text": "To find inflection points", "correct": false}, {"text": "To determine absolute maximums", "correct": false}, {"text": "None", "correct": false}], "explanation": "The test uses concavity at a specific flat spot (f'(c)=0) to determine if it's a peak or a valley." },
              { "q": "If f'(c) = 0 and f''(c) > 0, what does c represent?", "options": [{"text": "A relative minimum", "correct": true}, {"text": "A relative maximum", "correct": false}, {"text": "An inflection point", "correct": false}, {"text": "None", "correct": false}], "explanation": "A horizontal tangent on a curve that is concave up (holding water) forms a local minimum." },
              { "q": "If f'(c) = 0 and f''(c) < 0, what does c represent?", "options": [{"text": "A relative maximum", "correct": true}, {"text": "A relative minimum", "correct": false}, {"text": "An inflection point", "correct": false}, {"text": "None", "correct": false}], "explanation": "A horizontal tangent on a curve that is concave down (shedding water) forms a local maximum." },
              { "q": "What is the conclusion if f'(c) = 0 and f''(c) = 0?", "options": [{"text": "The test is inconclusive", "correct": true}, {"text": "It is a relative maximum", "correct": false}, {"text": "It is an inflection point", "correct": false}, {"text": "None", "correct": false}], "explanation": "When f''(c) = 0, the test fails, and you must revert to the First Derivative Test to determine behavior." },
              { "q": "Can the Second Derivative Test be used if f'(c) is undefined?", "options": [{"text": "No, f'(c) must equal 0", "correct": true}, {"text": "Yes, always", "correct": false}, {"text": "Only if f''(c) is also undefined", "correct": false}, {"text": "None", "correct": false}], "explanation": "The Second Derivative Test strictly requires a flat, horizontal tangent line where f'(c)=0." },
              { "q": "If f'(3) = 0 and f''(3) = -5, what happens at x = 3?", "options": [{"text": "Relative maximum", "correct": true}, {"text": "Relative minimum", "correct": false}, {"text": "Inconclusive", "correct": false}, {"text": "None", "correct": false}], "explanation": "Since f'' is negative, the graph is concave down at that flat point, yielding a relative max." },
              { "q": "Why do students sometimes confuse the Second Derivative Test results?", "options": [{"text": "They associate 'positive' with maximum instead of minimum", "correct": true}, {"text": "They forget to find critical points", "correct": false}, {"text": "They confuse it with the quotient rule", "correct": false}, {"text": "None", "correct": false}], "explanation": "Counterintuitively, a positive second derivative creates a minimum because the graph curves upward." },
              { "q": "True or False: The Second Derivative Test requires constructing an entire interval sign chart.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "Unlike the First Derivative Test, the Second Derivative Test only requires evaluating f''(x) at a single point." },
              { "q": "What is a major limitation of the Second Derivative Test?", "options": [{"text": "It fails if f''(c) = 0 or is undefined", "correct": true}, {"text": "It is less accurate than graphing", "correct": false}, {"text": "It can only be used on polynomials", "correct": false}, {"text": "None", "correct": false}], "explanation": "Its reliance on the existence and non-zero value of the second derivative leaves many scenarios inconclusive." },
              { "q": "If f'(x) = 3x^2 - 6x, and f''(x) = 6x - 6, evaluate the critical point x = 2.", "options": [{"text": "Relative minimum because f''(2) = 6 > 0", "correct": true}, {"text": "Relative maximum because f''(2) = 6 > 0", "correct": false}, {"text": "Inconclusive", "correct": false}, {"text": "None", "correct": false}], "explanation": "f'(2) = 0 and f''(2) = 6. Positive concavity means a relative minimum." }
            ]
          },
          {
            "id": "5.8",
            "topic": "5.8 Sketching Graphs of Functions and Their Derivatives",
            "videoId": "l2804R1SKkE",
            "quiz": [
              { "q": "If the graph of f'(x) is below the x-axis, the graph of f(x) must be:", "options": [{"text": "Decreasing", "correct": true}, {"text": "Increasing", "correct": false}, {"text": "Concave down", "correct": false}, {"text": "None", "correct": false}], "explanation": "Being below the x-axis means f'(x) < 0, which corresponds to a decreasing parent function." },
              { "q": "An x-intercept on the graph of f'(x) corresponds to what on f(x)?", "options": [{"text": "A critical point (where f'(x) = 0)", "correct": true}, {"text": "An inflection point", "correct": false}, {"text": "A y-intercept", "correct": false}, {"text": "None", "correct": false}], "explanation": "Where the derivative graph crosses or touches y=0 indicates locations where the parent slope is zero." },
              { "q": "If the graph of f'(x) has a relative maximum, what features does f(x) have at that location?", "options": [{"text": "An inflection point", "correct": true}, {"text": "A relative maximum", "correct": false}, {"text": "A vertical asymptote", "correct": false}, {"text": "None", "correct": false}], "explanation": "A peak on f' means the slope of f' (which is f'') changes sign, creating an inflection point on f." },
              { "q": "If the graph of f'(x) is increasing, what is the concavity of f(x)?", "options": [{"text": "Concave up", "correct": true}, {"text": "Concave down", "correct": false}, {"text": "Linear", "correct": false}, {"text": "None", "correct": false}], "explanation": "f' increasing means its slope (f'') is positive, which translates to a concave up parent graph." },
              { "q": "If the graph of f(x) is a parabola opening downward, its derivative f'(x) is a line with:", "options": [{"text": "A negative slope", "correct": true}, {"text": "A positive slope", "correct": false}, {"text": "A slope of zero", "correct": false}, {"text": "None", "correct": false}], "explanation": "A downward parabola has a decreasing slope, which translates to a derivative line with a negative slope." },
              { "q": "True or False: You can determine the exact y-intercept of f(x) purely by looking at the graph of f'(x).", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "The derivative tells you the shape and behavior, but shifts the parent function up/down unpredictably without an initial value." },
              { "q": "If the graph of f'(x) crosses from above the x-axis to below it at x = c, f(x) has a:", "options": [{"text": "Relative maximum", "correct": true}, {"text": "Relative minimum", "correct": false}, {"text": "Point of inflection", "correct": false}, {"text": "None", "correct": false}], "explanation": "This means f' changes from positive to negative, indicating a local peak on f." },
              { "q": "If the graph of f(x) has a sharp point/cusp, what does the graph of f'(x) look like there?", "options": [{"text": "A break, hole, or vertical asymptote", "correct": true}, {"text": "A horizontal tangent", "correct": false}, {"text": "An x-intercept", "correct": false}, {"text": "None", "correct": false}], "explanation": "Sharp turns mean the derivative does not exist, creating a discontinuity on the graph of f'." },
              { "q": "If f'(x) is a constant horizontal line at y = 3, what is the shape of f(x)?", "options": [{"text": "A linear line with a slope of 3", "correct": true}, {"text": "A parabola", "correct": false}, {"text": "A horizontal line", "correct": false}, {"text": "None", "correct": false}], "explanation": "A constant positive slope yields a straight, upward-sloping linear function." },
              { "q": "If f'(x) is positive and decreasing, the graph of f(x) is:", "options": [{"text": "Increasing and concave down", "correct": true}, {"text": "Decreasing and concave down", "correct": false}, {"text": "Increasing and concave up", "correct": false}, {"text": "None", "correct": false}], "explanation": "Positive f' means increasing; decreasing f' means f'' is negative, which means concave down." }
            ]
          },
          {
            "id": "5.9",
            "topic": "5.9 Connecting a Function, Its First Derivative, and Its Second Derivative",
            "videoId": "eckJYWSgUJ4",
            "quiz": [
              { "q": "If f(x) is concave up, what is true about the first derivative f'(x)?", "options": [{"text": "f'(x) is increasing", "correct": true}, {"text": "f'(x) is positive", "correct": false}, {"text": "f'(x) is constant", "correct": false}, {"text": "None", "correct": false}], "explanation": "Concave up dictates that f'' > 0, meaning the rate of change of f' is positive, so f' is increasing." },
              { "q": "When a particle's velocity and acceleration have the same sign, the particle is:", "options": [{"text": "Speeding up", "correct": true}, {"text": "Slowing down", "correct": false}, {"text": "At rest", "correct": false}, {"text": "None", "correct": false}], "explanation": "If velocity (f') and acceleration (f'') work together in the same direction, speed increases." },
              { "q": "If a particle's velocity is positive but its acceleration is negative, the particle is:", "options": [{"text": "Slowing down", "correct": true}, {"text": "Speeding up", "correct": false}, {"text": "Moving backwards", "correct": false}, {"text": "None", "correct": false}], "explanation": "Opposing signs between f' and f'' mean the forces pull against the motion, slowing the object down." },
              { "q": "An inflection point on f(x) corresponds to what on the f''(x) graph?", "options": [{"text": "An x-intercept where it changes signs", "correct": true}, {"text": "A local maximum", "correct": false}, {"text": "A local minimum", "correct": false}, {"text": "None", "correct": false}], "explanation": "Inflection points require f'' to transition across zero between positive and negative values." },
              { "q": "If f''(x) is always negative, what can be said about any critical point where f'(c) = 0?", "options": [{"text": "It must be an absolute maximum", "correct": true}, {"text": "It must be a relative minimum", "correct": false}, {"text": "It is an inflection point", "correct": false}, {"text": "None", "correct": false}], "explanation": "If a function is concave down everywhere, its single flat spot must peak as the absolute maximum." },
              { "q": "If f'(c) = 0 and f''(c) does not exist, can a sign change still yield an extremum?", "options": [{"text": "Yes, if f' changes signs across c", "correct": true}, {"text": "No, f'' must exist", "correct": false}, {"text": "Only if f(c) = 0", "correct": false}, {"text": "None", "correct": false}], "explanation": "The first derivative test operates independently of the existence of f''." },
              { "q": "If f(x) is decreasing and concave up, what are the signs of f' and f''?", "options": [{"text": "f' < 0 and f'' > 0", "correct": true}, {"text": "f' > 0 and f'' < 0", "correct": false}, {"text": "f' < 0 and f'' < 0", "correct": false}, {"text": "None", "correct": false}], "explanation": "Decreasing demands negative f', while concave up demands positive f''." },
              { "q": "True or False: If f''(x) > 0, then f(x) must be increasing.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "f''(x) > 0 only means concave up; the function can be decreasing while curving upward (like the left half of a standard parabola)." },
              { "q": "What features map together across f, f', and f'' at a point of inflection?", "options": [{"text": "f change concavity, f' has an extremum, f'' changes sign", "correct": true}, {"text": "f has an extremum, f' is zero, f'' is zero", "correct": false}, {"text": "All three graphs have x-intercepts", "correct": false}, {"text": "None", "correct": false}], "explanation": "This represents the full analytical alignment of a structural inflection point." },
              { "q": "If the slope of f'(x) is negative, what does that communicate about f(x)?", "options": [{"text": "f(x) is concave down", "correct": true}, {"text": "f(x) is decreasing", "correct": false}, {"text": "f(x) is concave up", "correct": false}, {"text": "None", "correct": false}], "explanation": "The slope of f' is f'', so a negative slope means f'' < 0, indicating a concave down behavior." }
            ]
          },
          {
            "id": "5.10",
            "topic": "5.10 Introduction to Optimization Problems",
            "videoId": "iQvx_giyCKc",
            "quiz": [
              { "q": "What is the primary objective of an optimization problem?", "options": [{"text": "To find the maximum or minimum value of a variable", "correct": true}, {"text": "To find the rate of change over time", "correct": false}, {"text": "To find the area under a curve", "correct": false}, {"text": "None", "correct": false}], "explanation": "Optimization focuses on finding the most efficient configuration (maximizing profit, minimizing area, etc.)." },
              { "q": "What is the primary equation in optimization?", "options": [{"text": "The formula for the quantity you want to maximize/minimize", "correct": true}, {"text": "The constraint equation", "correct": false}, {"text": "The Pythagorean Theorem", "correct": false}, {"text": "None", "correct": false}], "explanation": "The primary equation targets the exact value being optimized (e.g., Volume, Cost)." },
              { "q": "What is the purpose of a constraint equation in optimization?", "options": [{"text": "To relate multiple variables so one can be substituted out", "correct": true}, {"text": "To serve as the derivative", "correct": false}, {"text": "To define the absolute maximum", "correct": false}, {"text": "None", "correct": false}], "explanation": "Constraints provide relationships (like fixed perimeter) to reduce a primary multivariable equation down to a single variable." },
              { "q": "If you want to maximize the area of a garden bounded by a fixed fence length, what is the constraint?", "options": [{"text": "The perimeter formula", "correct": true}, {"text": "The area formula", "correct": false}, {"text": "The cost of the fence", "correct": false}, {"text": "None", "correct": false}], "explanation": "The limited amount of fencing limits the perimeter, acting as the boundary condition." },
              { "q": "Why must you establish a domain for the variable in an optimization problem?", "options": [{"text": "To determine realistic physical limits and find endpoints", "correct": true}, {"text": "To solve for y-intercepts", "correct": false}, {"text": "To apply L'Hopital's rule", "correct": false}, {"text": "None", "correct": false}], "explanation": "Physical measurements (like length) cannot be negative, establishing intervals for testing global extrema." },
              { "q": "True or False: Optimization problems always have a closed domain.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "Some problems have open domains (e.g., minimizing surface area of an open box with fixed volume where side lengths can be infinitely large)." },
              { "q": "What calculus operation is performed on the primary equation to find the optimum point?", "options": [{"text": "Differentiation", "correct": true}, {"text": "Integration", "correct": false}, {"text": "Taking a limit to infinity", "correct": false}, {"text": "None", "correct": false}], "explanation": "Differentiating and finding critical points locates potential peaks or valleys." },
              { "q": "If your primary equation has two variables (x and y), what must you do before differentiating?", "options": [{"text": "Use the constraint to express the equation in terms of one variable", "correct": true}, {"text": "Perform implicit differentiation", "correct": false}, {"text": "Set both variables to zero", "correct": false}, {"text": "None", "correct": false}], "explanation": "Standard single-variable calculus optimization requires a single independent variable before deriving." },
              { "q": "In an optimization problem, what does a critical point where the derivative equals zero represent?", "options": [{"text": "A potential maximum or minimum configuration", "correct": true}, {"text": "An endpoint", "correct": false}, {"text": "A point of inflection", "correct": false}, {"text": "None", "correct": false}], "explanation": "The critical point indicates a turning point where the target value reaches a peak or valley." },
              { "q": "What shape maximizes the area of a four-sided rectangular enclosure with a fixed perimeter?", "options": [{"text": "A square", "correct": true}, {"text": "A long, narrow rectangle", "correct": false}, {"text": "A circle", "correct": false}, {"text": "None", "correct": false}], "explanation": "Algebraically and via calculus, a square maximizes the area enclosed by a fixed rectangular perimeter." }
            ]
          },
          {
            "id": "5.11",
            "topic": "5.11 Solving Optimization Problems",
            "videoId": "lx8RcYcYVuU",
            "quiz": [
              { "q": "When optimizing on a closed interval, what test must you use to guarantee the absolute max/min?", "options": [{"text": "Candidates Test", "correct": true}, {"text": "First Derivative Test", "correct": false}, {"text": "Ratio Test", "correct": false}, {"text": "None", "correct": false}], "explanation": "Checking endpoints and critical points guarantees the global optimum on a closed interval." },
              { "q": "If an optimization problem has an open interval domain, how can you justify a local max is the absolute max?", "options": [{"text": "Show it is the only critical point and the function changes from increasing to decreasing", "correct": true}, {"text": "Assume it's true because it's a word problem", "correct": false}, {"text": "Evaluate the endpoints", "correct": false}, {"text": "None", "correct": false}], "explanation": "If a function has only one critical point and always increases before it and decreases after, that point must be the global maximum." },
              { "q": "You want to minimize cost C(x). You find C'(x) = 0 at x = 5. If C''(5) > 0, what does this confirm?", "options": [{"text": "x = 5 minimizes the cost", "correct": true}, {"text": "x = 5 maximizes the cost", "correct": true}, {"text": "The test is inconclusive", "correct": false}, {"text": "None", "correct": false}], "explanation": "By the Second Derivative Test, a positive second derivative confirms a local minimum." },
              { "q": "If a problem asks for the 'minimum perimeter', what is your primary equation?", "options": [{"text": "The perimeter formula", "correct": true}, {"text": "The area formula", "correct": false}, {"text": "The volume formula", "correct": false}, {"text": "None", "correct": false}], "explanation": "The function you take the derivative of is always the target quantity explicitly named." },
              { "q": "A box with a square base has volume V = x^2 * h = 100. If you want to minimize surface area, what is your constraint equation?", "options": [{"text": "x^2 * h = 100", "correct": true}, {"text": "A = 2x^2 + 4xh", "correct": false}, {"text": "h = 100x", "correct": false}, {"text": "None", "correct": false}], "explanation": "The fixed volume of 100 acts as the restrictive constraint equation." },
              { "q": "What should you do if an optimization problem yields a negative dimensions solution (e.g., width = -3)?", "options": [{"text": "Discard it as extraneous based on the domain", "correct": true}, {"text": "Make it positive and use it", "correct": false}, {"text": "Restart the whole problem", "correct": false}, {"text": "None", "correct": false}], "explanation": "Physical objects cannot have negative dimensions; it falls outside the practical domain." },
              { "q": "True or False: The value that optimizes an equation will always be an integer.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "Optimal sizes frequently involve fractions, decimals, or irrational numbers like square roots." },
              { "q": "What must you check carefully in the final question prompt of an optimization problem?", "options": [{"text": "Whether it asks for the dimensions or the actual maximum value", "correct": true}, {"text": "The variable names", "correct": false}, {"text": "The font size", "correct": false}, {"text": "None", "correct": false}], "explanation": "Some problems ask for the sizes (e.g., width and height) while others ask for the final optimized value (e.g., maximum area)." },
              { "q": "If the derivative of a profit function is P'(x) = 40 - 2x, what production level maximizes profit?", "options": [{"text": "x = 20", "correct": true}, {"text": "x = 40", "correct": false}, {"text": "x = 10", "correct": false}, {"text": "None", "correct": false}], "explanation": "Setting 40 - 2x = 0 gives 2x = 40, so x = 20." },
              { "q": "Why is verifying the type of extremum (max vs min) required on AP FRQs?", "options": [{"text": "To prove your critical point isn't the opposite of what you want", "correct": true}, {"text": "To get credit for basic arithmetic", "correct": false}, {"text": "To find the y-intercept", "correct": false}, {"text": "None", "correct": false}], "explanation": "Finding a critical point is only half the battle; you must justify that it is indeed a maximum or minimum using an analytical test." }
            ]
          },
          {
            "id": "5.12",
            "topic": "5.12 Exploring Behaviors of Implicit Relations",
            "videoId": "cF3gYwItbWM",
            "quiz": [
              { "q": "Where does an implicit relation have a horizontal tangent line?", "options": [{"text": "Where the numerator of dy/dx equals 0 (and denominator ≠ 0)", "correct": true}, {"text": "Where the denominator of dy/dx equals 0", "correct": false}, {"text": "Where y = 0", "correct": false}, {"text": "None", "correct": false}], "explanation": "A horizontal tangent occurs when the overall slope value is zero, requiring a zero numerator." },
              { "q": "Where does an implicit relation have a vertical tangent line?", "options": [{"text": "Where the denominator of dy/dx equals 0 (and numerator ≠ 0)", "correct": true}, {"text": "Where the numerator of dy/dx equals 0", "correct": false}, {"text": "Where x = 0", "correct": false}, {"text": "None", "correct": false}], "explanation": "An undefined slope (vertical line) corresponds to a fraction with a division-by-zero error in the denominator." },
              { "q": "If dy/dx = -x/y, where are the horizontal tangents located?", "options": [{"text": "Along the line x = 0 (y ≠ 0)", "correct": true}, {"text": "Along the line y = 0", "correct": false}, {"text": "At the origin only", "correct": false}, {"text": "None", "correct": false}], "explanation": "Setting the numerator -x = 0 gives x = 0." },
              { "q": "If dy/dx = -x/y, where are the vertical tangents located?", "options": [{"text": "Along the line y = 0 (x ≠ 0)", "correct": true}, {"text": "Along the line x = 0", "correct": false}, {"text": "Everywhere", "correct": false}, {"text": "None", "correct": false}], "explanation": "Setting the denominator y = 0 identifies where the derivative becomes undefined." },
              { "q": "What tool is used to determine the concavity of an implicit curve at a point?", "options": [{"text": "Finding the second derivative d^2y/dx^2 via implicit differentiation", "correct": true}, {"text": "The first derivative test", "correct": false}, {"text": "Evaluating the limit to infinity", "correct": false}, {"text": "None", "correct": false}], "explanation": "Concavity always relies on computing and evaluating the second derivative expression." },
              { "q": "When finding d^2y/dx^2 implicitly, what must you substitute back into the final expression?", "options": [{"text": "The original expression for dy/dx", "correct": true}, {"text": "Zero", "correct": false}, {"text": "The original equation of the curve", "correct": false}, {"text": "None", "correct": false}], "explanation": "Differentiating implicitly yields a dy/dx term inside your second derivative, which must be substituted with its known first-derivative definition." },
              { "q": "What happens if both the numerator and denominator of dy/dx equal 0 at a point?", "options": [{"text": "The behavior is indeterminate and requires closer analysis", "correct": true}, {"text": "The tangent is definitely vertical", "correct": false}, {"text": "The tangent is definitely horizontal", "correct": false}, {"text": "None", "correct": false}], "explanation": "A 0/0 derivative indicates a singular point on the curve (like an intersection or sharp node) requiring advanced limit evaluation." },
              { "q": "True or False: An implicit relation must be a function to evaluate its tangent lines.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "Calculus can analyze slopes on non-function graphs like circles, ellipses, and foliums." },
              { "q": "If d^2y/dx^2 > 0 at a point where dy/dx = 0 on an implicit curve, that point is a:", "options": [{"text": "Local minimum", "correct": true}, {"text": "Local maximum", "correct": false}, {"text": "Inflection point", "correct": false}, {"text": "None", "correct": false}], "explanation": "By the Second Derivative Test, a flat tangent line combined with upward concavity creates a local minimum." },
              { "q": "When calculating the derivative of a term like 3y^2 with respect to x, you write:", "options": [{"text": "6y * (dy/dx)", "correct": true}, {"text": "6y", "correct": false}, {"text": "6x", "correct": false}, {"text": "None", "correct": false}], "explanation": "The chain rule requires multiplying by the derivative of the inner variable y with respect to the independent variable x." }
            ]
          }
        ]
      },
            "unit-6": {
        "title": "Unit 6: Integration and Accumulation of Change",
        "lessons": [
          {
            "id": "6.1",
            "topic": "6.1 Exploring Accumulation of Change",
            "videoId": "cgDBFQ9GkZw",
            "quiz": [
              { "q": "If a rate of change f'(t) is given in meters/second, what are the units of the accumulation function?", "options": [{"text": "Meters", "correct": true}, {"text": "Seconds", "correct": false}, {"text": "Meters/second^2", "correct": false}, {"text": "None", "correct": false}], "explanation": "Accumulation represents the net change, which multiplies the rate unit by the independent variable unit (m/s * s = meters)." },
              { "q": "What geometric feature corresponds to the total accumulation of change under a rate curve?", "options": [{"text": "The area between the curve and the horizontal axis", "correct": true}, {"text": "The slope of the tangent line", "correct": false}, {"text": "The y-intercept", "correct": false}, {"text": "None", "correct": false}], "explanation": "Definite integrals and accumulation are structurally identical to the net area under a rate function graph." },
              { "q": "True or False: Accumulation of change can be negative.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "If the rate of change is negative (below the axis), the total accumulation decreases, yielding a negative net change." },
              { "q": "If a pool drains at a rate of R(t) gallons/minute, what does the integral of R(t) from t=0 to t=10 represent?", "options": [{"text": "The total amount of water drained in the first 10 minutes", "correct": true}, {"text": "The rate at which the pool is draining at t=10", "correct": false}, {"text": "The acceleration of the water", "correct": false}, {"text": "None", "correct": false}], "explanation": "Integrating a rate of change gives the total net accumulation of that quantity over the interval." },
              { "q": "If the rate function is constant at y = 5 from t = 2 to t = 6, what is the total accumulation?", "options": [{"text": "20", "correct": true}, {"text": "5", "correct": false}, {"text": "30", "correct": false}, {"text": "None", "correct": false}], "explanation": "Area of the rectangle is height * width = 5 * (6 - 2) = 20." },
              { "q": "What does a horizontal line above the axis on a rate graph imply about the accumulation graph?", "options": [{"text": "The accumulation graph is a line with a constant positive slope", "correct": true}, {"text": "The accumulation graph is flat", "correct": false}, {"text": "The accumulation graph is decreasing", "correct": false}, {"text": "None", "correct": false}], "explanation": "A constant positive rate means accumulation increases at a constant, linear speed." },
              { "q": "If a rate curve crosses from above the axis to below the axis at t = c, what happens to the accumulation function at c?", "options": [{"text": "It reaches a relative maximum", "correct": true}, {"text": "It reaches a relative minimum", "correct": false}, {"text": "It turns into zero", "correct": false}, {"text": "None", "correct": false}], "explanation": "The rate changes from positive to negative, meaning accumulation stops growing and begins falling." },
              { "q": "How does accumulation relate to the concept of an antiderivative?", "options": [{"text": "The accumulation function is an antiderivative of the rate function", "correct": true}, {"text": "They are opposites", "correct": false}, {"text": "They are unrelated", "correct": false}, {"text": "None", "correct": false}], "explanation": "Accumulating a rate yields a function whose derivative matches the original rate." },
              { "q": "If an object has a variable velocity v(t), how is its net displacement calculated?", "options": [{"text": "By integrating v(t) over the given time interval", "correct": true}, {"text": "By taking the derivative of v(t)", "correct": false}, {"text": "By finding v(t) squared", "correct": false}, {"text": "None", "correct": false}], "explanation": "Displacement is the total accumulation of change in position, found via integration." },
              { "q": "What notation is standard for representing a general accumulation function with a variable upper limit?", "options": [{"text": "Integral from a to x of f(t) dt", "correct": true}, {"text": "Integral of f(x) dx", "correct": false}, {"text": "f'(x)", "correct": false}, {"text": "None", "correct": false}], "explanation": "Using a dummy variable t inside and x as the upper bound allows the function to vary across an interval." }
            ]
          },
          {
            "id": "6.2",
            "topic": "6.2 Approximating Areas with Riemann Sums",
            "videoId": "Tc4Ix6NmKZE",
            "quiz": [
              { "q": "Which Riemann sum uses the left boundary of each subinterval to evaluate the height?", "options": [{"text": "Left Riemann Sum", "correct": true}, {"text": "Right Riemann Sum", "correct": false}, {"text": "Midpoint Riemann Sum", "correct": false}, {"text": "None", "correct": false}], "explanation": "Left Riemann sums pick the x-value at the far left of each subinterval for the rectangle's height." },
              { "q": "If a function is strictly increasing, a Left Riemann sum will always produce an:", "options": [{"text": "Underapproximation", "correct": true}, {"text": "Overapproximation", "correct": false}, {"text": "Exact value", "correct": false}, {"text": "None", "correct": false}], "explanation": "Because the function climbs, the left boundary value is always the lowest value in each subinterval." },
              { "q": "If a function is strictly decreasing, a Right Riemann sum will always produce an:", "options": [{"text": "Underapproximation", "correct": true}, {"text": "Overapproximation", "correct": false}, {"text": "Exact value", "correct": false}, {"text": "None", "correct": false}], "explanation": "For a falling curve, the right edge lands at the lowest value, leading to an undercount." },
              { "q": "How do you calculate the width (Δx) of equal subintervals on [a, b] for n rectangles?", "options": [{"text": "(b - a) / n", "correct": true}, {"text": "(a - b) / n", "correct": false}, {"text": "n / (b - a)", "correct": false}, {"text": "None", "correct": false}], "explanation": "The entire width of the domain (b - a) divided by the number of slices n gives individual slice width." },
              { "q": "True or False: Subintervals must always be equal in width when calculating a Riemann sum from a table.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "AP problems often provide tables with uneven intervals, requiring you to look at each Δx separately." },
              { "q": "What value determines rectangle height in a Midpoint Riemann sum?", "options": [{"text": "The function value at the average of the subinterval endpoints", "correct": true}, {"text": "The average of f(a) and f(b)", "correct": false}, {"text": "The highest peak point", "correct": false}, {"text": "None", "correct": false}], "explanation": "You take the average x-value inside the subinterval, plug it into f(x), and use that output as the height." },
              { "q": "What shape approximation method is closely linked to Riemann sums but uses angled tops?", "options": [{"text": "Trapezoidal Sum", "correct": true}, {"text": "Circular Sum", "correct": false}, {"text": "Parabolic approximation", "correct": false}, {"text": "None", "correct": false}], "explanation": "Trapezoidal sums connect boundaries with straight diagonal segments rather than flat rectangular steps." },
              { "q": "The accuracy of a Riemann sum increases as:", "options": [{"text": "The number of subintervals (n) approaches infinity", "correct": true}, {"text": "The width of intervals increases", "correct": false}, {"text": "The function gets steeper", "correct": false}, {"text": "None", "correct": false}], "explanation": "Infinitely small slices reduce the error gap down to zero, converging on the exact integral." },
              { "q": "If f(x) is concave up, a Trapezoidal sum will always be an:", "options": [{"text": "Overapproximation", "correct": true}, {"text": "Underapproximation", "correct": false}, {"text": "Exact area", "correct": false}, {"text": "None", "correct": false}], "explanation": "Because the curve bends inward, a straight secant line spanning the trapezoid top sits completely above the actual graph." },
              { "q": "When writing out a Riemann sum step-by-step, what is the best strategy?", "options": [{"text": "Factor out common terms if widths are uniform, or compute width * height for each slice", "correct": true}, {"text": "Integrate the function first", "correct": false}, {"text": "Square the values", "correct": false}, {"text": "None", "correct": false}], "explanation": "Explicitly showing each (base * height) combination guarantees maximum partial credit on FRQs." }
            ]
          },
          {
            "id": "6.3",
            "topic": "6.3 Riemann Sums, Summation Notation, and Definite Integral Notation",
            "videoId": "wpbPzBcX42c",
            "quiz": [
              { "q": "The definite integral is formally defined as what limit of a Riemann sum?", "options": [{"text": "The limit as n approaches infinity of the sum of f(x_i) * Δx", "correct": true}, {"text": "The limit as n approaches 0", "correct": false}, {"text": "The limit as x approaches c", "correct": false}, {"text": "None", "correct": false}], "explanation": "An integral is defined strictly as the limit of an infinite sum of infinitesimally thin rectangles." },
              { "q": "In the limit expression, what does 'Δx' transform into when written in definite integral notation?", "options": [{"text": "dx", "correct": true}, {"text": "∫", "correct": false}, {"text": "x", "correct": false}, {"text": "None", "correct": false}], "explanation": "The discrete width Δx converges to the differential dx notation under the infinite limit." },
              { "q": "In the summation limit definition, what formula represents x_i for a left-endpoint or right-endpoint sum?", "options": [{"text": "a + i * Δx", "correct": true}, {"text": "a + i", "correct": false}, {"text": "b - i * Δx", "correct": false}, {"text": "None", "correct": false}], "explanation": "You start at the left boundary 'a' and jump forward i full widths of Δx to locate the coordinate." },
              { "q": "Convert the limit as n approaches infinity of the sum from i=1 to n of (2 + 3i/n)^5 * (3/n) to an integral on [2, 5].", "options": [{"text": "Integral from 2 to 5 of x^5 dx", "correct": true}, {"text": "Integral from 0 to 3 of x^5 dx", "correct": false}, {"text": "Integral from 2 to 5 of (2+x)^5 dx", "correct": false}, {"text": "None", "correct": false}], "explanation": "Here, Δx = 3/n, meaning the span is 3. Starting at a=2 gives the upper boundary b=5, making x_i = x, giving x^5." },
              { "q": "What does the symbol '∫' originally represent historical-etymologically?", "options": [{"text": "An elongated 'S' for Sum", "correct": true}, {"text": "A stylized 'I' for Integral", "correct": false}, {"text": "A symbol for slope", "correct": false}, {"text": "None", "correct": false}], "explanation": "Leibniz used the long 'S' (summa) to describe the continuous summation of areas." },
              { "q": "What are the components labeled 'a' and 'b' on the definite integral symbol?", "options": [{"text": "Limits of integration", "correct": true}, {"text": "Critical constants", "correct": false}, {"text": "Asymptotes", "correct": false}, {"text": "None", "correct": false}], "explanation": "They mark the continuous horizontal boundaries of the region being evaluated." },
              { "q": "True or False: If a limit of a Riemann sum is evaluated, the final answer will contain the variable 'i'.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "The counter 'i' is eliminated once the summation rules are executed and the limit is calculated." },
              { "q": "If an AP question asks you to match a complex limit-of-sum expression to an integral, what component should you locate first?", "options": [{"text": "Identify Δx (the term outside the main function match)", "correct": true}, {"text": "Find the exponent", "correct": false}, {"text": "Look for a zero", "correct": false}, {"text": "None", "correct": false}], "explanation": "Finding Δx immediately clarifies the width (b - a) of the corresponding integration boundaries." },
              { "q": "What is the index of summation?", "options": [{"text": "The variable that tracks the loops of the sum (typically i or k)", "correct": true}, {"text": "The function height", "correct": false}, {"text": "The upper bound", "correct": false}, {"text": "None", "correct": false}], "explanation": "The index acts as the counter variable that cycles step-by-step from 1 to n." },
              { "q": "If the expression inside the limit sum is cos(πi/n) * (π/n), and the interval starts at 0, what is the integral?", "options": [{"text": "Integral from 0 to π of cos(x) dx", "correct": true}, {"text": "Integral from 0 to 1 of cos(πx) dx", "correct": false}, {"text": "Integral from 0 to π of sin(x) dx", "correct": false}, {"text": "None", "correct": false}], "explanation": "Δx = π/n, so the interval span is π. Starting at 0 means the interval is [0, π], matching cos(x)." }
            ]
          },
          {
            "id": "6.4",
            "topic": "6.4 Fundamental Theorem of Calculus and Accumulation Functions",
            "videoId": "hnSWSHGHs34",
            "quiz": [
              { "q": "The Fundamental Theorem of Calculus Part 1 establishes a direct link between:", "options": [{"text": "Differentiation and Integration as inverse operations", "correct": true}, {"text": "Limits and Continuity", "correct": false}, {"text": "Secant and Tangent lines", "correct": false}, {"text": "None", "correct": false}], "explanation": "It proves that the derivative of an accumulation function returns the original integrand function." },
              { "q": "If G(x) is the integral from a to x of f(t) dt, what is G'(x)?", "options": [{"text": "f(x)", "correct": true}, {"text": "f'(x)", "correct": false}, {"text": "f(x) - f(a)", "correct": false}, {"text": "None", "correct": false}], "explanation": "Taking the derivative simply cancels out the integral sign and swaps the variable into the function." },
              { "q": "If G(x) is the integral from a to x^3 of f(t) dt, what is G'(x)?", "options": [{"text": "f(x^3) * 3x^2", "correct": true}, {"text": "f(x^3)", "correct": false}, {"text": "f'(x^3)", "correct": false}, {"text": "None", "correct": false}], "explanation": "The Chain Rule must be applied: substitute the upper function bound, then multiply by its derivative." },
              { "q": "If G(x) is the integral from x to b of f(t) dt, what is G'(x)?", "options": [{"text": "-f(x)", "correct": true}, {"text": "f(x)", "correct": false}, {"text": "-f'(x)", "correct": false}, {"text": "None", "correct": false}], "explanation": "Because the variable sits at the lower bound, reversing the bounds introduces a negative sign: -integral from b to x." },
              { "q": "What must be true about the integrand function f(t) for this theorem to apply cleanly?", "options": [{"text": "It must be continuous on the interval", "correct": true}, {"text": "It must be differentiable everywhere", "correct": false}, {"text": "It must equal zero at endpoints", "correct": false}, {"text": "None", "correct": false}], "explanation": "Continuity is the underlying required condition for the Fundamental Theorem of Calculus to hold." },
              { "q": "If the accumulation function has a constant at the bottom bound, does that constant affect the derivative value?", "options": [{"text": "No, its derivative drops to zero", "correct": true}, {"text": "Yes, it must be subtracted", "correct": false}, {"text": "Only if the constant is negative", "correct": false}, {"text": "None", "correct": false}], "explanation": "The rate of accumulation at the moving upper edge does not depend on where the static edge started." },
              { "q": "True or False: The derivative of the integral from 2 to x of sin(t^2) dt is sin(x^2).", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "Direct application of FTC Part 1: replace the dummy variable t with x." },
              { "q": "If the bounds of an integral go from x^2 to x^3, how do you find the derivative?", "options": [{"text": "Apply FTC to both bounds independently and subtract: f(x^3)*3x^2 - f(x^2)*2x", "correct": true}, {"text": "You cannot derive it", "correct": false}, {"text": "The derivative is zero", "correct": false}, {"text": "None", "correct": false}], "explanation": "You split the integral at an intermediate constant point and evaluate both variable limits using the chain rule." },
              { "q": "If G(x) is an area accumulation function, what structural feature does G''(x) track?", "options": [{"text": "The slope of the original function f(x)", "correct": true}, {"text": "The area under f(x)", "correct": false}, {"text": "The y-intercept of f(x)", "correct": false}, {"text": "None", "correct": false}], "explanation": "Since G'(x) = f(x), taking another derivative means G''(x) = f'(x), tracking the slope of f." },
              { "q": "Why is this theorem called the Fundamental Theorem?", "options": [{"text": "It connects rate of change with total accumulation structurally", "correct": true}, {"text": "It is the oldest math formula", "correct": false}, {"text": "It was discovered by Newton alone", "correct": false}, {"text": "None", "correct": false}], "explanation": "It unifies the two primary branches of calculus—derivatives and integrals—into a single coherent field." }
            ]
          },
          {
            "id": "6.5",
            "topic": "6.5 Interpreting the Behavior of Accumulation Functions Involving Area",
            "videoId": "00G3lDAv6e4",
            "quiz": [
              { "q": "If g(x) is the integral from 0 to x of f(t) dt, where does g(x) have critical points?", "options": [{"text": "Where f(x) = 0 or is undefined", "correct": true}, {"text": "Where f'(x) = 0", "correct": false}, {"text": "Where f(x) matches the endpoints", "correct": false}, {"text": "None", "correct": false}], "explanation": "Since g'(x) = f(x), the critical points of g occur precisely where f(x) satisfies the critical point definition." },
              { "q": "Using g(x) = integral of f(t) dt, where does g(x) have a relative maximum?", "options": [{"text": "Where f(x) crosses the x-axis from positive to negative", "correct": true}, {"text": "Where f(x) is at a peak", "correct": false}, {"text": "Where f(x) is zero only", "correct": false}, {"text": "None", "correct": false}], "explanation": "A local max requires the derivative (f) to transition from positive to negative values." },
              { "q": "Using g(x) = integral of f(t) dt, where is the graph of g(x) concave down?", "options": [{"text": "Where f(x) is decreasing (f'(x) < 0)", "correct": true}, {"text": "Where f(x) is negative", "correct": false}, {"text": "Where f(x) is flat", "correct": false}, {"text": "None", "correct": false}], "explanation": "Concavity of g depends on g'', which equals f'. If f is decreasing, f' < 0, so g is concave down." },
              { "q": "Where are the inflection points of g(x) located if g'(x) = f(x)?", "options": [{"text": "At the relative extrema of f(x)", "correct": true}, {"text": "At the x-intercepts of f(x)", "correct": false}, {"text": "Nowhere", "correct": false}, {"text": "None", "correct": false}], "explanation": "Inflection points require g'' (or f') to change sign, which happens at the peaks and valleys of f." },
              { "q": "If the graph of f(t) forms a triangle above the axis with an area of 4 on [0, 2], what is g(2) if g(0)=0?", "options": [{"text": "4", "correct": true}, {"text": "2", "correct": false}, {"text": "8", "correct": false}, {"text": "None", "correct": false}], "explanation": "The definite integral equals the accumulated geometric area under the curve, which evaluates to 4." },
              { "q": "If the interval moves from x = 3 to x = 1 (backwards) over a positive region of f(t), what is the sign of the accumulation?", "options": [{"text": "Negative", "correct": true}, {"text": "Positive", "correct": false}, {"text": "Zero", "correct": false}, {"text": "None", "correct": false}], "explanation": "Integrating backwards inverts the sign of the geometric area calculation." },
              { "q": "True or False: If f(x) is always positive, g(x) must have a relative maximum.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "If f is always positive, g' is always positive; the graph increases continuously without turning around." },
              { "q": "If an AP FRQ asks you to calculate g(5) given a piecewise geometric graph of f, how should you show work?", "options": [{"text": "Break down the area into familiar shapes (triangles, semicircles, rectangles) and sum them up", "correct": true}, {"text": "Guess the equation", "correct": false}, {"text": "Estimate by counting small grid squares", "correct": false}, {"text": "None", "correct": false}], "explanation": "Explicitly adding up geometric area components shows correct analytical integration approach." },
              { "q": "If g(x) has a horizontal tangent line, what must be true about the graph of f(x) at that point?", "options": [{"text": "It must cross or touch the x-axis", "correct": true}, {"text": "It must be horizontal too", "correct": false}, {"text": "It must have an inflection point", "correct": false}, {"text": "None", "correct": false}], "explanation": "Horizontal tangent means g'(x) = 0, which directly forces f(x) = 0." },
              { "q": "If f(x) is a semicircle above the axis, what shape family does the accumulation function belong to?", "options": [{"text": "An analytical transcendental curve containing trig/curved components", "correct": true}, {"text": "A standard polynomial", "correct": false}, {"text": "A straight line", "correct": false}, {"text": "None", "correct": false}], "explanation": "Integrating the curve of a circle involves circular trigonometric structures." }
            ]
          },
          {
            "id": "6.6",
            "topic": "6.6 Calculating Properties of Definite Integrals",
            "videoId": "QcHz3h81U-s",
            "quiz": [
              { "q": "What is the value of the integral from a to a of f(x) dx?", "options": [{"text": "0", "correct": true}, {"text": "1", "correct": false}, {"text": "f(a)", "correct": false}, {"text": "None", "correct": false}], "explanation": "An integral over zero width encloses zero area." },
              { "q": "How does swapping the limits of integration affect the value of the integral?", "options": [{"text": "It negates the value", "correct": true}, {"text": "It keeps it identical", "correct": false}, {"text": "It squares the value", "correct": false}, {"text": "None", "correct": false}], "explanation": "The integral from b to a is equal to negative the integral from a to b." },
              { "q": "If the integral from 1 to 4 is 5, and from 4 to 7 is 3, what is the integral from 1 to 7?", "options": [{"text": "8", "correct": true}, {"text": "2", "correct": false}, {"text": "15", "correct": false}, {"text": "None", "correct": false}], "explanation": "By the additive property of intervals, you can stitch together contiguous integration blocks." },
              { "q": "If the integral from 0 to 5 of f(x) dx is 10, what is the value of the integral from 0 to 5 of 3*f(x) dx?", "options": [{"text": "30", "correct": true}, {"text": "10", "correct": false}, {"text": "13", "correct": false}, {"text": "None", "correct": false}], "explanation": "Constant scalar multipliers can be factored cleanly outside the integration operation." },
              { "q": "What is the integral from a to b of [f(x) + g(x)] dx equal to?", "options": [{"text": "The integral of f(x) plus the integral of g(x)", "correct": true}, {"text": "The integral of f(x) multiplied by g(x)", "correct": false}, {"text": "f(b) + g(a)", "correct": false}, {"text": "None", "correct": false}], "explanation": "Integration distributes linearly across addition and subtraction operations." },
              { "q": "True or False: The integral of a product f(x)*g(x) equals the integral of f(x) times the integral of g(x).", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "There is no product rule for integrals; they do not distribute across multiplication." },
              { "q": "If the integral from 2 to 8 of f(x) dx is 12, what is the integral from 8 to 2 of f(x) dx?", "options": [{"text": "-12", "correct": true}, {"text": "12", "correct": false}, {"text": "0", "correct": false}, {"text": "None", "correct": false}], "explanation": "Reversing the direction of the integration boundaries negates the output value." },
              { "q": "If f(x) is an odd function, what is the integral of f(x) from -a to a?", "options": [{"text": "0", "correct": true}, {"text": "2 * integral from 0 to a", "correct": false}, {"text": "f(a)", "correct": false}, {"text": "None", "correct": false}], "explanation": "For odd functions, symmetric areas across the origin cancel out perfectly (e.g., sin(x) from -π to π)." },
              { "q": "If f(x) is an even function, what is the integral of f(x) from -a to a?", "options": [{"text": "2 * the integral from 0 to a", "correct": true}, {"text": "0", "correct": false}, {"text": "f(a) - f(-a)", "correct": false}, {"text": "None", "correct": false}], "explanation": "Even functions are symmetrical across the y-axis, doubling the area calculated on one side." },
              { "q": "If f(x) ≤ g(x) on [a, b], what is the relationship between their definite integrals?", "options": [{"text": "Integral of f(x) ≤ Integral of g(x)", "correct": true}, {"text": "Integral of f(x) ≥ Integral of g(x)", "correct": false}, {"text": "They are equal", "correct": false}, {"text": "None", "correct": false}], "explanation": "By the comparison property, a smaller function always bounds a smaller or equal net area." }
            ]
          },
          {
            "id": "6.7",
            "topic": "6.7 Evaluating Definite Integrals Using Accumulation and Fundamental Theorem of Calculus",
            "videoId": "fdJ-NdflShM",
            "quiz": [
              { "q": "What does the Fundamental Theorem of Calculus Part 2 state for evaluating integrals analytically?", "options": [{"text": "Integral from a to b of f(x) dx = F(b) - F(a), where F' = f", "correct": true}, {"text": "Integral = f'(b) - f'(a)", "correct": false}, {"text": "Integral = F(a) - F(b)", "correct": false}, {"text": "None", "correct": false}], "explanation": "To calculate a definite integral, find an antiderivative F(x) and evaluate it at the top bound minus the bottom bound." },
              { "q": "What is the definite integral from 1 to 3 of 2x dx?", "options": [{"text": "8", "correct": true}, {"text": "9", "correct": false}, {"text": "4", "correct": false}, {"text": "None", "correct": false}], "explanation": "Antiderivative of 2x is x^2. Evaluating gives 3^2 - 1^2 = 9 - 1 = 8." },
              { "q": "When computing a definite integral, why isn't the constant of integration '+C' written down?", "options": [{"text": "It cancels out during subtraction: (F(b)+C) - (F(a)+C)", "correct": true}, {"text": "It turns into zero", "correct": false}, {"text": "It is illegal", "correct": false}, {"text": "None", "correct": false}], "explanation": "Because C - C = 0, the constant vanishes completely when computing definite boundary evaluations." },
              { "q": "What is the value of the integral from 0 to π of sin(x) dx?", "options": [{"text": "2", "correct": true}, {"text": "0", "correct": false}, {"text": "-2", "correct": false}, {"text": "None", "correct": false}], "explanation": "Antiderivative is -cos(x). Evaluating gives -cos(π) - (-cos(0)) = -(-1) - (-1) = 1 + 1 = 2." },
              { "q": "If F(2) = 5 and the integral of F'(x) from 2 to 6 is 10, find F(6).", "options": [{"text": "15", "correct": true}, {"text": "5", "correct": false}, {"text": "10", "correct": false}, {"text": "None", "correct": false}], "explanation": "By FTC, Integral = F(6) - F(2). So, 10 = F(6) - 5, which means F(6) = 15." },
              { "q": "What is a common arithmetic mistake made when using FTC Part 2?", "options": [{"text": "Forgetting to distribute a negative sign to the entire lower bound evaluation block", "correct": true}, {"text": "Forgetting to multiply by 2", "correct": false}, {"text": "Using the power rule incorrectly", "correct": false}, {"text": "None", "correct": false}], "explanation": "Always put brackets around the F(a) calculation component to protect the distributed subtraction sign." },
              { "q": "True or False: The integral from 1 to 2 of (1/x) dx equals ln(2).", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "Antiderivative of 1/x is ln|x|. Evaluation yields ln(2) - ln(1) = ln(2) - 0 = ln(2)." },
              { "q": "What is the integral from 0 to 1 of e^x dx?", "options": [{"text": "e - 1", "correct": true}, {"text": "e", "correct": false}, {"text": "1", "correct": false}, {"text": "None", "correct": false}], "explanation": "Antiderivative of e^x is e^x. Evaluating yields e^1 - e^0 = e - 1." },
              { "q": "If you are integrating a piecewise function across a boundary split point, what should you do?", "options": [{"text": "Split the integral into two separate integrals matching the domain regions", "correct": true}, {"text": "Pick one part and ignore the other", "correct": false}, {"text": "Average the two formulas", "correct": false}, {"text": "None", "correct": false}], "explanation": "Interval additivity lets you safely integrate piecewise equations section by section." },
              { "q": "What does FTC provide that Riemann sums cannot do easily?", "options": [{"text": "An exact, fast analytical evaluation method without infinite limit calculations", "correct": true}, {"text": "An approximation tool", "correct": false}, {"text": "A way to graph shapes", "correct": false}, {"text": "None", "correct": false}], "explanation": "FTC bypasses tedious limit calculations by converting area accumulation directly into a fast algebraic shortcut." }
            ]
          },
          {
            "id": "6.8",
            "topic": "6.8 Finding Antiderivatives and Indefinite Integrals: Basic Rules and Notation",
            "videoId": "Bl5H1DKCM90",
            "quiz": [
              { "q": "What distinguishes an indefinite integral from a definite integral notationally?", "options": [{"text": "Indefinite integrals have no boundaries (a and b) and require +C", "correct": true}, {"text": "Indefinite integrals use a different symbol", "correct": false}, {"text": "Indefinite integrals cannot be solved", "correct": false}, {"text": "None", "correct": false}], "explanation": "Indefinite integrals represent the entire general family of antiderivative functions, flagged by a missing set of limits and an explicit +C." },
              { "q": "What is the integration Power Rule for the integral of x^n dx (where n ≠ -1)?", "options": [{"text": "(x^(n+1)) / (n + 1) + C", "correct": true}, {"text": "n * x^(n-1)", "correct": false}, {"text": "x^(n+1) + C", "correct": false}, {"text": "None", "correct": false}], "explanation": "The inverse of the power rule for derivatives requires adding 1 to the power and dividing by that brand new exponent value." },
              { "q": "Why does the standard power rule fail for the integral of x^(-1) dx?", "options": [{"text": "It leads to division by zero", "correct": true}, {"text": "The answer is imaginary", "correct": false}, {"text": "The rule still works", "correct": false}, {"text": "None", "correct": false}], "explanation": "Plugging in n = -1 yields x^0 / 0, which is undefined. This specific form yields the natural log curve ln|x|." },
              { "q": "What is the indefinite integral of k dx (where k is a constant)?", "options": [{"text": "kx + C", "correct": true}, {"text": "0", "correct": false}, {"text": "k + C", "correct": false}, {"text": "None", "correct": false}], "explanation": "Since the derivative of kx is k, the reverse operation maps back to a linear expression." },
              { "q": "What is the indefinite integral of sec^2(x) dx?", "options": [{"text": "tan(x) + C", "correct": true}, {"text": "sec(x) + C", "correct": false}, {"text": "-tan(x) + C", "correct": false}, {"text": "None", "correct": false}], "explanation": "Since the derivative of tangent is secant squared, the antiderivative follows directly." },
              { "q": "True or False: The integral of cos(x) dx is -sin(x) + C.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "The derivative of sin(x) is cos(x), so the integral of cos(x) is positive sin(x) + C. (Don't confuse it with derivative rules)." },
              { "q": "What is the indefinite integral of 1 / (1 + x^2) dx?", "options": [{"text": "arctan(x) + C", "correct": true}, {"text": "arcsin(x) + C", "correct": false}, {"text": "ln(1+x^2) + C", "correct": false}, {"text": "None", "correct": false}], "explanation": "This specific fraction corresponds to the derivative profile of the inverse tangent function." },
              { "q": "What is the indefinite integral of 1 / sqrt(1 - x^2) dx?", "options": [{"text": "arcsin(x) + C", "correct": true}, {"text": "arccos(x) + C", "correct": false}, {"text": "arctan(x) + C", "correct": false}, {"text": "None", "correct": false}], "explanation": "This matches the derivative definition of the inverse sine function." },
              { "q": "What should you do to evaluate the integral of a complex polynomial fraction like (x^3 + 2) / x dx?", "options": [{"text": "Divide the terms algebraically first, then integrate separately", "correct": true}, {"text": "Use the quotient rule for integrals", "correct": false}, {"text": "Integrate top and bottom separately", "correct": false}, {"text": "None", "correct": false}], "explanation": "Simplifying the fraction gives x^2 + 2/x, which can then be easily solved using the power and log rules." },
              { "q": "What does the differential 'dx' indicate inside an indefinite integral?", "options": [{"text": "It names the independent variable of integration", "correct": true}, {"text": "It stands for distance", "correct": false}, {"text": "It represents a constant value", "correct": false}, {"text": "None", "correct": false}], "explanation": "The dx clarifies which letter is treated as the changing base variable during antiderivations." }
            ]
          },
          {
            "id": "6.9",
            "topic": "6.9 Integrating Using Substitution",
            "videoId": "VOD8ItScG2I",
            "quiz": [
              { "q": "Integration by Substitution (U-Substitution) is essentially the reverse process of which derivative rule?", "options": [{"text": "Chain Rule", "correct": true}, {"text": "Product Rule", "correct": false}, {"text": "Quotient Rule", "correct": false}, {"text": "None", "correct": false}], "explanation": "U-substitution simplifies composite inner functions by accounting for their nested chain rule derivatives." },
              { "q": "What are you looking for when choosing a candidate for 'u' inside an integrand?", "options": [{"text": "An inner function whose derivative is also present as a factor", "correct": true}, {"text": "The easiest term to derive", "correct": false}, {"text": "The constant term", "correct": false}, {"text": "None", "correct": false}], "explanation": "The target setup requires identifying a composite grouping g(x) alongside its matching differential partner g'(x) dx." },
              { "q": "If you set u = x^2 + 5, what is the corresponding differential du?", "options": [{"text": "2x dx", "correct": true}, {"text": "2x", "correct": false}, {"text": "x^2 dx", "correct": false}, {"text": "None", "correct": false}], "explanation": "The complete differential incorporates the derivative multiplied by the target independent component dx." },
              { "q": "When performing U-substitution on a DEFINITE integral, what critical extra step is required?", "options": [{"text": "Convert the upper and lower limits of integration into terms of u", "correct": true}, {"text": "Keep limits exactly the same", "correct": false}, {"text": "Remove the limits entirely", "correct": false}, {"text": "None", "correct": false}], "explanation": "Changing boundaries using u = g(x) ensures you evaluate matching outputs directly without back-substituting x later." },
              { "q": "If the original integral is from x=0 to x=2, and u = 3x + 1, what are the new limits of integration?", "options": [{"text": "1 to 7", "correct": true}, {"text": "0 to 2", "correct": false}, {"text": "1 to 6", "correct": false}, {"text": "None", "correct": false}], "explanation": "Plugging limits into the equation: u(0) = 3(0)+1 = 1, and u(2) = 3(2)+1 = 7." },
              { "q": "What do you do if your chosen u-derivative is off by a constant factor (e.g., you need 3x dx but only have x dx)?", "options": [{"text": "Balance it by multiplying the outside of the integral by 1/3", "correct": true}, {"text": "Pick a different u", "correct": false}, {"text": "Ignore the constant factor", "correct": false}, {"text": "None", "correct": false}], "explanation": "Constants can pass freely through integral signs, allowing you to scale differentials as needed." },
              { "q": "Evaluate the integral of 2x * e^(x^2) dx using substitution.", "options": [{"text": "e^(x^2) + C", "correct": true}, {"text": "2e^(x^2) + C", "correct": false}, {"text": "e^x + C", "correct": false}, {"text": "None", "correct": false}], "explanation": "Setting u = x^2 means du = 2x dx, turning the expression into the integral of e^u du, which yields e^u + C." },
              { "q": "True or False: If an integral still contains 'x' terms after executing your u-substitution swap, you can proceed immediately.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "An integral cannot be processed with mixed independent variables; every x must be systematically replaced." },
              { "q": "What advanced algebraic strategy is useful if an extra x remains after substitution (e.g., integrating x * sqrt(x+1) dx)?", "options": [{"text": "Solve the u-equation for x (x = u - 1) and substitute it back into the leftover spots", "correct": true}, {"text": "Give up on substitution", "correct": false}, {"text": "Use the power rule directly", "correct": false}, {"text": "None", "correct": false}], "explanation": "This method, known as back-substitution or linear substitution, resolves lingering independent variables." },
              { "q": "What is the integral of tan(x) dx solved via u-substitution?", "options": [{"text": "-ln|cos(x)| + C (or ln|sec(x)| + C)", "correct": true}, {"text": "sec^2(x) + C", "correct": false}, {"text": "sin(x) + C", "correct": false}, {"text": "None", "correct": false}], "explanation": "Rewriting tan(x) as sin(x)/cos(x) and selecting u = cos(x) gives du = -sin(x) dx, leading to the logarithmic form." }
            ]
          },
          {
            "id": "6.10",
            "topic": "6.10 Integrating Using Long Division and Completing the Square",
            "videoId": "lgj-y22SmXk",
            "quiz": [
              { "q": "When is algebraic long division recommended before attempting to integrate a rational function?", "options": [{"text": "When the degree of the numerator is greater than or equal to the degree of the denominator", "correct": true}, {"text": "When the denominator is linear", "correct": false}, {"text": "When there are radical signs", "correct": false}, {"text": "None", "correct": false}], "explanation": "Improper rational expressions must be divided out first to split the setup into standard, easily integrable polynomial sections." },
              { "q": "If an integrand is 1 / (x^2 + 4x + 5), what algebraic technique prepares it for standard integration?", "options": [{"text": "Completing the square", "correct": true}, {"text": "Long division", "correct": false}, {"text": "U-substitution directly", "correct": false}, {"text": "None", "correct": false}], "explanation": "Completing the square turns the denominator into (x + 2)^2 + 1, configuring it for an arctan inverse trig rule lookup." },
              { "q": "What basic inverse trigonometric rule format is generated by completing the square on 1 / (a^2 + u^2)?", "options": [{"text": "(1/a) * arctan(u/a) + C", "correct": true}, {"text": "arcsin(u/a) + C", "correct": false}, {"text": "arctan(u) + C", "correct": false}, {"text": "None", "correct": false}], "explanation": "This matches the structured template for arctangent integrations incorporating variable constants." },
              { "q": "After dividing (x^2 + 1) by (x + 1), what expression configuration do you integrate?", "options": [{"text": "x - 1 + 2/(x+1)", "correct": true}, {"text": "x + 2", "correct": false}, {"text": "x - 1", "correct": false}, {"text": "None", "correct": false}], "explanation": "Performing polynomial division yields a polynomial quotient section paired with a rational fraction remainder." },
              { "q": "True or False: Completing the square can be used inside square roots to prepare terms for the arcsin rule.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "Expressions like 1 / sqrt(9 - x^2 - 6x) resolve down to inverse sine structures once the quadratic terms are grouped." },
              { "q": "What is the template integral for the basic arcsin rule: integral of 1 / sqrt(a^2 - u^2) du?", "options": [{"text": "arcsin(u/a) + C", "correct": true}, {"text": "(1/a) * arcsin(u/a) + C", "correct": false}, {"text": "arctan(u/a) + C", "correct": false}, {"text": "None", "correct": false}], "explanation": "Unlike arctan, the inverse sine standard integration template does not feature an outer 1/a coefficient factor." },
              { "q": "If you add and subtract a value to complete the square inside an expression, you are effectively multiplying or adding what basic element?", "options": [{"text": "Adding a strategic zero", "correct": true}, {"text": "Multiplying by one", "correct": false}, {"text": "Squaring everything", "correct": false}, {"text": "None", "correct": false}], "explanation": "Adding and immediately subtracting the same value preserves expression equality while rearranging its structure." },
              { "q": "What value completes the square for the terms x^2 + 6x?", "options": [{"text": "9", "correct": true}, {"text": "3", "correct": false}, {"text": "36", "correct": false}, {"text": "None", "correct": false}], "explanation": "Take half of the linear coefficient (6 / 2 = 3) and square it (3^2 = 9)." },
              { "q": "If polynomial long division leaves a remainder, how is that remainder factored into the integral?", "options": [{"text": "It is placed over the original divisor function and integrated, often using natural log rules", "correct": true}, {"text": "It is dropped entirely", "correct": false}, {"text": "It is multiplied by x", "correct": false}, {"text": "None", "correct": false}], "explanation": "The fractional remainder persists over the divisor, typically evaluating into log or arctan formats." },
              { "q": "Why are these advanced algebraic steps required on the AP Calculus test?", "options": [{"text": "To manipulate hidden patterns into standard integration formulas", "correct": true}, {"text": "To test your speed arithmetic skills", "correct": false}, {"text": "Because calculators cannot run them", "correct": false}, {"text": "None", "correct": false}], "explanation": "Many integration scenarios require algebraic rewriting before any calculus formulas can be applied." }
            ]
          },
          {
          "id": "6.11",
          "topic": "6.11 Integrating Using Integration by Parts",
          "videoId": "UgwFNb9-gk0",
          "quiz": [
            { "q": "Integration by Parts (IBP) is derived from which derivative rule?", "options": [{"text": "Product Rule", "correct": true}, {"text": "Chain Rule", "correct": false}, {"text": "Quotient Rule", "correct": false}, {"text": "None", "correct": false}], "explanation": "Integrating the product rule formula $d(uv) = u\\,dv + v\\,du$ yields the IBP formula: $\\int u\\,dv = uv - \\int v\\,du$." },
            { "q": "What acronym acts as a reliable rule of thumb for selecting the 'u' substitution priority?", "options": [{"text": "LIATE (Log, Inverse Trig, Algebraic, Trig, Exponential)", "correct": true}, {"text": "LOHID", "correct": false}, {"text": "PEMDAS", "correct": false}, {"text": "None", "correct": false}], "explanation": "LIATE ranks functions from easiest-to-derive/hardest-to-integrate downward to establish 'u' selection priorities." },
            { "q": "If you are integrating $\\int x \\cdot \\ln(x)\\,dx$, what should your choice of 'u' be?", "options": [{"text": "u = ln(x)", "correct": true}, {"text": "u = x", "correct": false}, {"text": "dv = ln(x) dx", "correct": false}, {"text": "None", "correct": false}], "explanation": "According to LIATE, Logarithmic functions take priority over Algebraic functions ($x$) for 'u'." },
            { "q": "When executing the tabular method for repetitive IBP loops, when do you stop extending rows in the derivative column?", "options": [{"text": "When the derivative reaches zero", "correct": true}, {"text": "After exactly 3 rows", "correct": false}, {"text": "When the functions switch signs", "correct": false}, {"text": "None", "correct": false}], "explanation": "The tabular shortcut terminates when the polynomial branch differentiates fully to a zero baseline." },
            { "q": "True or False: When evaluating a definite integral using IBP, the boundary limits are applied to the entire isolated expression $[uv] - \\int v\\,du$.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "The boundaries evaluate across both the integrated $uv$ component and the final leftover integral block." },
            { "q": "What happens if your choice of 'dv' cannot be easily integrated?", "options": [{"text": "You likely swapped your selection choices for u and dv", "correct": true}, {"text": "The integral DNE", "correct": false}, {"text": "You must use long division", "correct": false}, {"text": "None", "correct": false}], "explanation": "Since the workflow requires matching a 'dv' component to integrate up into 'v', choose a profile you can easily integrate." },
            { "q": "Evaluate $\\int \\ln(x)\\,dx$ using Integration by Parts.", "options": [{"text": "x * ln(x) - x + C", "correct": true}, {"text": "1/x + C", "correct": false}, {"text": "x * ln(x) + C", "correct": false}, {"text": "None", "correct": false}], "explanation": "Set $u = \\ln(x)$, $dv = dx$. This gives $du = (1/x)dx$, $v = x$. Formula: $uv - \\int v\\,du = x\\ln(x) - \\int x(1/x)dx = x\\ln(x) - x + C$." },
            { "q": "What is the differential relationship of du in terms of u?", "options": [{"text": "du = u' dx", "correct": true}, {"text": "du = dx", "correct": false}, {"text": "du = v", "correct": false}, {"text": "None", "correct": false}], "explanation": "The complete differential operator requires multiplying by the independent change coordinate element $dx$." },
            { "q": "In a 'looping' or 'cyclic' IBP problem (like $\\int e^x \\sin(x)\\,dx$), how do you solve for the final expression?", "options": [{"text": "Apply parts twice to regenerate the original integral expression, then isolate it algebraically", "correct": true}, {"text": "Differentiate infinitely", "correct": false}, {"text": "The calculation never resolves", "correct": false}, {"text": "None", "correct": false}], "explanation": "Cyclic integrals return back to their starting form, allowing you to combine matching structural integrations onto one side like a standard algebraic variable." },
            { "q": "True or False: The tabular method can be safely executed on any arbitrary product combination of transcendental equations.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "The tabular layout is optimized for scenarios where one term is a polynomial that reduces completely to zero, or for cyclic setups. It doesn't bypass complex irreducible loops easily." }
          ]
        },
        {
          "id": "6.12",
          "topic": "6.12 Using Linear Partial Fractions",
          "videoId": "FF3IXYlbork",
          "quiz": [
            { "q": "What is the primary baseline structural objective when using partial fraction decomposition?", "options": [{"text": "To split a complex rational fraction with a factorable denominator into a sum of simpler fractions", "correct": true}, {"text": "To factor the numerator", "correct": false}, {"text": "To clear out all denominators", "correct": false}, {"text": "None", "correct": false}], "explanation": "Decomposition tears complex rational functions apart into easily targetable fractions that evaluate cleanly using standard log patterns." },
            { "q": "What algebraic step must be verified before performing a standard linear partial fraction setup?", "options": [{"text": "The degree of the numerator must be strictly strictly less than the degree of the denominator", "correct": true}, {"text": "The numerator must be constant", "correct": false}, {"text": "The terms must contain square roots", "correct": false}, {"text": "None", "correct": false}], "explanation": "If the expression is improper (numerator degree $\\geq$ denominator degree), you must execute polynomial long division first." },
            { "q": "Set up the decomposition template format for: $1 / [(x - 3)(x + 2)]$.", "options": [{"text": "A / (x - 3) + B / (x + 2)", "correct": true}, {"text": "(Ax + B) / [(x - 3)(x + 2)]", "correct": false}, {"text": "A / (x - 3) - B / (x + 2)", "correct": false}, {"text": "None", "correct": false}], "explanation": "Distinct linear denominator factors branch out using single arbitrary constant numerators, $A$ and $B$." },
            { "q": "What rapid algebraic trick can quickly find the numerators for distinct linear partial fractions without solving systems of linear equations?", "options": [{"text": "The Heaviside Cover-Up Method", "correct": true}, {"text": "The Power rule shortcut", "correct": false}, {"text": "Synthetic substitution division", "correct": false}, {"text": "None", "correct": false}], "explanation": "The Cover-Up method evaluates individual numerator constants by evaluating the equation at the root of the zeroed denominator factor while covering up that term." },
            { "q": "Decompose $1 / [(x - 1)(x + 1)]$ and find the value of constant A over $(x - 1)$.", "options": [{"text": "1/2", "correct": true}, {"text": "-1/2", "correct": false}, {"text": "1", "correct": false}, {"text": "None", "correct": false}], "explanation": "Using the cover-up method at $x = 1$: covering $(x-1)$ leaves $1/(x+1) \\rightarrow 1/(1+1) = 1/2$." },
            { "q": "What integration lookup rule is most frequently generated by linear partial fraction outputs?", "options": [{"text": "The natural log absolute value rule: $\\int 1/u\\,du = \\ln|u| + C$", "correct": true}, {"text": "The power rule", "correct": false}, {"text": "The arc length formula", "correct": false}, {"text": "None", "correct": false}], "explanation": "Linear terms in denominators integrate straight into matching logarithmic structures." },
            { "q": "True or False: AP Calculus BC scope strictly limits partial fractions to non-repeating distinct linear factors.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "Advanced configurations like repeating linear factors or irreducible quadratic terms are outside the explicit testing bounds of the AP Calculus BC framework." },
            { "q": "Integrate $\\int 1 / (x^2 - x)\\,dx$ by splitting it into partial fractions first.", "options": [{"text": "ln|x - 1| - ln|x| + C", "correct": true}, {"text": "ln|x| - ln|x - 1| + C", "correct": false}, {"text": "arctan(x) + C", "correct": false}, {"text": "None", "correct": false}], "explanation": "Factoring gives $1/[x(x-1)] = -1/x + 1/(x-1)$. Integrating those pieces yields $-\\ln|x| + \\ln|x-1| + C$." },
            { "q": "What constant is always added back to the final step of an indefinite partial fraction evaluation?", "options": [{"text": "The integration constant + C", "correct": true}, {"text": "The variable x", "correct": false}, {"text": "0", "correct": false}, {"text": "None", "correct": false}], "explanation": "Every indefinite integral tracking path must resolve with the general placeholder arbitrary constant." },
            { "q": "If an integral setup has the form $\\int (x+5) / (x-2)\\,dx$, can you apply partial fractions right away?", "options": [{"text": "No, because the degrees are equal; divide using long division first", "correct": true}, {"text": "Yes, directly", "correct": false}, {"text": "Only if x is positive", "correct": false}, {"text": "None", "correct": false}], "explanation": "Equal degrees create an improper rational expression. Dividing yields $1 + 7/(x-2)$, which can then be integrated cleanly." }
          ]
        },
        {
          "id": "6.13",
          "topic": "6.13 Evaluating Improper Integrals",
          "videoId": "HQLULM7uq7Y",
          "quiz": [
            { "q": "What two unique properties can classify a definite integral as an 'improper integral'?", "options": [{"text": "Infinite integration limits, or an infinite vertical asymptote discontinuity within the integration path boundaries", "correct": true}, {"text": "Negative boundaries", "correct": false}, {"text": "Trig functions in the fractions", "correct": false}, {"text": "None", "correct": false}], "explanation": "Improper integrals are defined by either spanning across an infinite window ($[a, \\infty)$) or attempting to step directly across a vertical division-by-zero asymptote jump." },
            { "q": "How must improper integrals be formally evaluated to earn full credit on an AP FRQ?", "options": [{"text": "By rewriting the problematic boundary bound as a limit parameter variable (e.g., limit as b approaches infinity)", "correct": true}, {"text": "By plugging in infinity as a standard real number value", "correct": false}, {"text": "By guessing the convergence pattern", "correct": false}, {"text": "None", "correct": false}], "explanation": "Infinity is not a real number and cannot be directly evaluated using standard arithmetic brackets. You must use notation like $\\lim_{b \\to \\infty} \\int_a^b f(x)\\,dx$." },
            { "q": "If the limit of an improper integral resolves to a finite real value, the integral is said to:", "options": [{"text": "Converge", "correct": true}, {"text": "Diverge", "correct": false}, {"text": "Turn indeterminate", "correct": false}, {"text": "None", "correct": false}], "explanation": "Convergence means the net accumulated area successfully approaches a stable, finite numerical value." },
            { "q": "If the limit of an improper integral does not settle on a finite value (grows to infinity or oscillates), it is said to:", "options": [{"text": "Diverge", "correct": true}, {"text": "Converge", "correct": false}, {"text": "Minimize", "correct": false}, {"text": "None", "correct": false}], "explanation": "Divergence flags an infinite area expansion pattern that fails to approach a finite ceiling limit." },
            { "q": "Evaluate the improper integral: $\\int_1^{\\infty} 1/x^2\\,dx$.", "options": [{"text": "1 (Converges)", "correct": true}, {"text": "Diverges to infinity", "correct": false}, {"text": "0", "correct": false}, {"text": "None", "correct": false}], "explanation": "$\xbb \\lim_{b \\to \\infty} [-1/x]_1^b = \\lim_{b \\to \\infty} (-1/b - (-1/1)) = 0 + 1 = 1$." },
            { "q": "Evaluate the improper integral: $\\int_1^{\\infty} 1/x\\,dx$.", "options": [{"text": "Diverges to infinity", "correct": true}, {"text": "1", "correct": false}, {"text": "ln(2)", "correct": false}, {"text": "None", "correct": false}], "explanation": "$\\lim_{b \\to \\infty} [\\ln|x|]_1^b = \\lim_{b \\to \\infty} (\\ln(b) - \\ln(1)) = \\infty$. The area grows without bound." },
            { "q": "According to the p-integral test shortcut rule, for what values of p does $\\int_1^{\\infty} 1/x^p\\,dx$ converge?", "options": [{"text": "p > 1", "correct": true}, {"text": "p < 1", "correct": false}, {"text": "p ≤ 1", "correct": false}, {"text": "All p parameters", "correct": false}], "explanation": "If the power exponent $p$ is strictly greater than 1, the curve flattens fast enough to entrap a finite boundary space volume." },
            { "q": "Why is the definite integral $\\int_0^2 1/(x-1)\\,dx$ considered an improper integral?", "options": [{"text": "It contains an interior infinite discontinuity at x = 1", "correct": true}, {"text": "The endpoints are basic integers", "correct": false}, {"text": "It has an even power setup", "correct": false}, {"text": "None", "correct": false}], "explanation": "Even though the limits $[0, 2]$ look normal, the function breaks down completely at $x = 1$, splitting the integration path into two independent improper subsets." },
            { "q": "If an improper integral is split into two independent sections (e.g. from negative infinity to positive infinity), what must occur for the entire cumulative integral to converge?", "options": [{"text": "Both individual component sections must converge independently", "correct": true}, {"text": "Only one needs to converge", "correct": false}, {"text": "Their infinity values must cancel out", "correct": false}, {"text": "None", "correct": false}], "explanation": "If even a single subset branch diverges to infinity, the entire configuration is flagged as divergent." },
            { "q": "What notation error causes students to lose the setup point on an AP Calculus BC Free Response Question?", "options": [{"text": "Leaving the infinity symbol on the bracket limit evaluations without writing the word 'lim'", "correct": true}, {"text": "Using the wrong tracking letters", "correct": false}, {"text": "Omitting the +C constant in a definite evaluation", "correct": false}, {"text": "None", "correct": false}], "explanation": "AP rubrics require proper limit notation to formally establish how an improper region is evaluated." }
          ]
        }
        ]
      },
              "unit-7": {
          "title": "Unit 7: Differential Equations",
          "lessons": [
            {
              "id": "7.1",
              "topic": "7.1 Modeling Situations with Differential Equations",
              "videoId": "Elrcj9Ix40c",
              "quiz": [
                { "q": "What is a differential equation?", "options": [{"text": "An equation that contains a derivative", "correct": true}, {"text": "An equation solved using only limits", "correct": false}, {"text": "A formula for the slope of a tangent line only", "correct": false}, {"text": "None", "correct": false}], "explanation": "Any equation containing a derivative or differential term (like dy/dx or y') is classified as a differential equation." },
                { "q": "Translate: 'The rate of change of volume V with respect to time t is proportional to the square root of V.'", "options": [{"text": "dV/dt = k * sqrt(V)", "correct": true}, {"text": "V = k * sqrt(t)", "correct": false}, {"text": "dV/dt = k * V^2", "correct": false}, {"text": "None", "correct": false}], "explanation": "'Rate of change' indicates a derivative, and 'proportional to' introduces a constant of proportionality, k." },
                { "q": "If a population growth rate is described by dP/dt = 0.05P, what type of growth model does this represent?", "options": [{"text": "Exponential growth", "correct": true}, {"text": "Linear growth", "correct": false}, {"text": "Quadratic growth", "correct": false}, {"text": "None", "correct": false}], "explanation": "When the rate of change of a quantity is directly proportional to the quantity itself, it models exponential behavior." },
                { "q": "What does the constant 'k' represent in a differential equation modeling proportionality?", "options": [{"text": "The constant of proportionality", "correct": true}, {"text": "The initial value", "correct": false}, {"text": "The integration constant", "correct": false}, {"text": "None", "correct": false}], "explanation": "The constant k scales the relationship between the rate of change and the state variable." },
                { "q": "Translate: 'A temperature T cools at a rate proportional to the difference between T and the room temperature of 70 degrees.'", "options": [{"text": "dT/dt = k(T - 70)", "correct": true}, {"text": "dT/dt = k(70 - t)", "correct": false}, {"text": "T = k(T - 70)", "correct": false}, {"text": "None", "correct": false}], "explanation": "This sets up Newton's Law of Cooling, where the rate dT/dt matches the scaled difference (T - 70)." },
                { "q": "True or False: A differential equation can have infinitely many solutions.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "Without a specific initial condition, integrating a differential equation yields a general solution family containing '+C'." },
                { "q": "What is the order of a differential equation?", "options": [{"text": "The highest derivative present in the equation", "correct": true}, {"text": "The number of variables", "correct": false}, {"text": "The exponent of the main variable", "correct": false}, {"text": "None", "correct": false}], "explanation": "For AP Calculus AB, we focus almost exclusively on first-order differential equations, which contain only a first derivative." },
                { "q": "If dy/dx = 3x^2, what is the general solution family?", "options": [{"text": "y = x^3 + C", "correct": true}, {"text": "y = 6x + C", "correct": false}, {"text": "y = x^3", "correct": false}, {"text": "None", "correct": false}], "explanation": "Integrating both sides with respect to x yields the standard cubic family with an arbitrary constant." },
                { "q": "In a word problem, if a rate is 'decreasing proportionally,' what sign should be assumed for the constant relationship?", "options": [{"text": "Negative (or explicit subtraction)", "correct": true}, {"text": "Positive", "correct": false}, {"text": "Zero", "correct": false}, {"text": "None", "correct": false}], "explanation": "Decreasing rates imply a negative derivative, which requires a negative multiplier or setting k < 0." },
                { "q": "What is the primary goal when analyzing a differential equation in calculus?", "options": [{"text": "To find the original function y = f(x) that makes the equation true", "correct": true}, {"text": "To find the numerical slope at one point", "correct": false}, {"text": "To eliminate all variables", "correct": false}, {"text": "None", "correct": false}], "explanation": "Solving a differential equation means uncovering the parent function that satisfies the derivative relationship." }
              ]
            },
            {
              "id": "7.2",
              "topic": "7.2 Verifying Solutions for Differential Equations",
              "videoId": "4JY40RKmC9c",
              "quiz": [
                { "q": "How do you verify if a given function y = f(x) is a solution to a differential equation?", "options": [{"text": "Differentiate the function and substitute it and its derivatives into the equation", "correct": true}, {"text": "Find the x-intercepts of the equation", "correct": false}, {"text": "Set the equation equal to zero", "correct": false}, {"text": "None", "correct": false}], "explanation": "Verification involves a direct algebraic check to see if the function satisfies the structural conditions of the derivative equation." },
                { "q": "Is y = e^(3x) a valid solution to the differential equation dy/dx = 3y?", "options": [{"text": "Yes, because dy/dx = 3e^(3x) and 3y = 3e^(3x)", "correct": true}, {"text": "No, it is incorrect", "correct": false}, {"text": "Only if x = 0", "correct": false}, {"text": "None", "correct": false}], "explanation": "Substituting both sides shows that 3e^(3x) equals 3e^(3x), confirming it is a solution." },
                { "q": "What is a particular solution to a differential equation?", "options": [{"text": "A specific solution that satisfies a given initial condition, eliminating the '+C'", "correct": true}, {"text": "The solution containing an active +C factor", "correct": false}, {"text": "The derivative of the solution", "correct": false}, {"text": "None", "correct": false}], "explanation": "A particular solution uses a designated point (initial condition) to solve for a specific numerical value of C." },
                { "q": "If a general solution is y = C*e^x, and the initial condition is (0, 4), what is the particular solution?", "options": [{"text": "y = 4e^x", "correct": true}, {"text": "y = e^x + 4", "correct": false}, {"text": "y = 4e^0", "correct": false}, {"text": "None", "correct": false}], "explanation": "Plugging in the point gives 4 = C*e^0, meaning 4 = C*1, so C = 4." },
                { "q": "True or False: If a function satisfies a differential equation at a single point, it is a global solution.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "A solution must satisfy the differential equation identically across an entire open interval, not just at one point." },
                { "q": "Verify if y = sin(x) satisfies y' + y = 0.", "options": [{"text": "No, because cos(x) + sin(x) does not identically equal 0", "correct": true}, {"text": "Yes, it satisfies it", "correct": false}, {"text": "Only if x = π", "correct": false}, {"text": "None", "correct": false}], "explanation": "y' = cos(x). Substituting gives cos(x) + sin(x) = 0, which is false for general values of x." },
                { "q": "Which of the following is the general solution to dy/dx = 2x?", "options": [{"text": "y = x^2 + C", "correct": true}, {"text": "y = 2 + C", "correct": false}, {"text": "y = x^2", "correct": false}, {"text": "None", "correct": false}], "explanation": "Integrating 2x yields x^2 + C, which can be verified by deriving it back to 2x." },
                { "q": "What does a initial condition like f(1) = 3 provide structurally?", "options": [{"text": "An (x, y) coordinate pair of (1, 3)", "correct": true}, {"text": "The slope value at x = 1", "correct": false}, {"text": "A root location", "correct": false}, {"text": "None", "correct": false}], "explanation": "It tells you that when the independent variable x is 1, the dependent variable y must equal 3." },
                { "q": "Can a linear function like y = 4x be a solution to a differential equation?", "options": [{"text": "Yes, if the equation structure matches (e.g., dy/dx = 4)", "correct": true}, {"text": "No, solutions must be exponential", "correct": false}, {"text": "Only if it passes through the origin", "correct": false}, {"text": "None", "correct": false}], "explanation": "Any class of mathematical function can solve a differential equation if its derivatives fit the pattern." },
                { "q": "If you are asked to show verification on an AP free-response question, what must you do explicitly?", "options": [{"text": "Show your derivative calculations separately before substituting them into the equation template", "correct": true}, {"text": "Just state 'it works'", "correct": false}, {"text": "Graph both equations", "correct": false}, {"text": "None", "correct": false}], "explanation": "Showing clear step-by-step differentiation and subsequent substitution ensures you earn full procedural credit." }
              ]
            },
            {
              "id": "7.3",
              "topic": "7.3 Sketching Slope Fields",
              "videoId": "ijA_c48-AxQ",
              "quiz": [
                { "q": "What is a slope field?", "options": [{"text": "A visual representation of a differential equation using short line segments showing slopes at grid points", "correct": true}, {"text": "A graph of the second derivative", "correct": false}, {"text": "A 3D surface plot", "correct": false}, {"text": "None", "correct": false}], "explanation": "Slope fields provide a geometric view of a differential equation's behavior by plotting localized tangent line segments across a coordinate grid." },
                { "q": "If dy/dx = 0 at a specific coordinate point, what does the slope segment look like there?", "options": [{"text": "A flat horizontal line segment", "correct": true}, {"text": "A vertical line segment", "correct": false}, {"text": "A diagonal line segment", "correct": false}, {"text": "None", "correct": false}], "explanation": "A derivative of zero translates geometrically to a completely horizontal tangent line segment." },
                { "q": "If dy/dx is undefined at a coordinate point, how is it represented on an AP slope field grid?", "options": [{"text": "The point is left completely blank without a segment", "correct": true}, {"text": "A vertical line is drawn", "correct": false}, {"text": "A dot is placed", "correct": false}, {"text": "None", "correct": false}], "explanation": "AP guidelines specify leaving coordinates where the derivative is undefined (like division by zero) entirely empty." },
                { "q": "If dy/dx = x, how do the slope segments behave as you move from left to right along a horizontal row?", "options": [{"text": "The segments become steeper as x increases", "correct": true}, {"text": "The segments stay parallel", "correct": false}, {"text": "The segments flatten out", "correct": false}, {"text": "None", "correct": false}], "explanation": "Because the slope relies solely on x, moving right increases the numerical slope value, tilting the segments upward." },
                { "q": "If dy/dx = y, what is true about all the slope segments along any given horizontal line (where y is constant)?", "options": [{"text": "All segments along that horizontal row are parallel and identical", "correct": true}, {"text": "The segments change tilt", "correct": false}, {"text": "All segments are vertical", "correct": false}, {"text": "None", "correct": false}], "explanation": "Since x is not in the formula, changing x does not alter the slope; only the row's y-value dictates the tilt." },
                { "q": "What feature do you look for on a slope field if the differential equation is dy/dx = -x/y?", "options": [{"text": "Circular rotation patterns centered around the origin", "correct": true}, {"text": "Parallel vertical columns", "correct": false}, {"text": "Horizontal lines everywhere", "correct": false}, {"text": "None", "correct": false}], "explanation": "This profile creates perpendicular tangents tracking along circular solution curves ($x^2 + y^2 = C$)." },
                { "q": "True or False: A slope field allows you to roughly sketch a particular solution curve passing through a given point.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "By treating the segments like directional arrows, you can trace a path through the grid to visualize the particular solution." },
                { "q": "When sketching a slope field line segment for a steep slope (e.g., m = 4), how should it look relative to m = 1?", "options": [{"text": "Visibly steeper and tilted more sharply upward", "correct": true}, {"text": "Identical", "correct": false}, {"text": "Less steep", "correct": false}, {"text": "None", "correct": false}], "explanation": "While sketches don't need to be perfect, AP readers look for a clear visual distinction between flat, moderate, and steep slopes." },
                { "q": "If dy/dx = x - y, where will all the horizontal segments (slope = 0) be located?", "options": [{"text": "Along the diagonal line y = x", "correct": true}, {"text": "Along the x-axis", "correct": false}, {"text": "Along the y-axis", "correct": false}, {"text": "None", "correct": false}], "explanation": "Setting x - y = 0 resolves to the line y = x. All points along this line will have horizontal segments." },
                { "q": "When sketching a solution curve onto a slope field on an AP exam, what boundary rule must you follow?", "options": [{"text": "Extend the curve to the edges of the grid but do not cross fields where the derivative is undefined", "correct": true}, {"text": "Draw a straight line connecting arrows", "correct": false}, {"text": "Keep the curve strictly inside one quadrant", "correct": false}, {"text": "None", "correct": false}], "explanation": "A solution curve must remain a function and cannot cross through undefined zones where the derivative breaks down." }
              ]
            },
            {
              "id": "7.4",
              "topic": "7.4 Reasoning Using Slope Fields",
              "videoId": "Ax03UQV9HLM",
              "quiz": [
                { "q": "How can you distinguish between a slope field dependent only on x versus one dependent only on y?", "options": [{"text": "Look for patterns: uniform slopes in columns (only x) vs uniform slopes in rows (only y)", "correct": true}, {"text": "Check the signs at the origin", "correct": false}, {"text": "Look for asymptotes", "correct": false}, {"text": "None", "correct": false}], "explanation": "If slopes are identical vertically down columns, the derivative ignores y. If they are identical horizontally across rows, it ignores x." },
                { "q": "If a slope field shows an entire quadrant of segments tilting downward from left to right, what does that imply?", "options": [{"text": "The derivative expression dy/dx is negative in that quadrant", "correct": true}, {"text": "The derivative is zero", "correct": false}, {"text": "The parent function is increasing", "correct": false}, {"text": "None", "correct": false}], "explanation": "Downward-sloping segments correspond to negative derivative values ($dy/dx < 0$)." },
                { "q": "If a solution curve traced on a slope field looks like a parabola opening upward, what could be the matching differential equation?", "options": [{"text": "dy/dx = x", "correct": true}, {"text": "dy/dx = y", "correct": false}, {"text": "dy/dx = x^2", "correct": false}, {"text": "None", "correct": false}], "explanation": "If dy/dx = x, integrating both sides gives $y = 0.5x^2 + C$, which is an upward-opening parabola." },
                { "q": "How can you eliminate incorrect differential equation options when matching with a slope field?", "options": [{"text": "Test specific test points (like signs in different quadrants or where segments are flat)", "correct": true}, {"text": "Look at the title of the graph", "correct": false}, {"text": "Check the grid count", "correct": false}, {"text": "None", "correct": false}], "explanation": "Testing coordinates where the slope should be zero, positive, or negative lets you quickly eliminate incorrect choices." },
                { "q": "If a slope field has a row of horizontal lines along the line y = 3, which equation matches this behavior?", "options": [{"text": "dy/dx = y - 3", "correct": true}, {"text": "dy/dx = x - 3", "correct": false}, {"text": "dy/dx = 3x", "correct": false}, {"text": "None", "correct": false}], "explanation": "Plugging in y = 3 into dy/dx = y - 3 gives a slope of 0, matching the horizontal segments." },
                { "q": "True or False: If a slope field's segments look exponential, the derivative expression must contain an e^x term.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "The differential equation dy/dx = y produces exponential solution curves ($y = C e^x$) without needing an e^x term in the derivative itself." },
                { "q": "If a slope field contains alternating positive and negative slopes across the y-axis, the derivative is likely:", "options": [{"text": "An odd function with respect to x", "correct": true}, {"text": "Dependent only on y", "correct": false}, {"text": "Constant everywhere", "correct": false}, {"text": "None", "correct": false}], "explanation": "A sign flip when x changes signs points to an x-dependent term like x or $x^3$." },
                { "q": "What happens to the segments on a slope field for dy/dx = 1/x as x approaches infinity?", "options": [{"text": "They flatten out toward a slope of 0", "correct": true}, {"text": "They become vertical", "correct": false}, {"text": "They alternate signs", "correct": false}, {"text": "None", "correct": false}], "explanation": "As x grows large, 1/x approaches 0, meaning the segments flatten out." },
                { "q": "If a slope field shows tracking paths that completely flatten out horizontally at a certain level, that level represents a:", "options": [{"text": "Horizontal asymptote solution", "correct": true}, {"text": "Vertical asymptote", "correct": false}, {"text": "Cusp location", "correct": false}, {"text": "None", "correct": false}], "explanation": "Continuous rows of flat segments indicate equilibrium solutions where the rate of change is zero." },
                { "q": "When looking at a multiple-choice matching problem on the AP exam, what is the fastest sign check?", "options": [{"text": "Check if slopes are positive or negative in Quadrant I versus Quadrant II", "correct": true}, {"text": "Count the total number of segments", "correct": false}, {"text": "Calculate the exact angle of one segment", "correct": false}, {"text": "None", "correct": false}], "explanation": "Checking quadrant signs ($x > 0, y > 0$ vs $x < 0, y > 0$) filters out mismatched algebraic signs instantly." }
              ]
            },
            {
              "id": "7.5",
              "topic": "7.5 Finding General Solutions Using Separation of Variables",
              "videoId": "UYxf-G2dgPQ",
              "quiz": [
                { "q": "What is the core prerequisite step in the Separation of Variables method?", "options": [{"text": "Move all y terms and 'dy' to one side, and all x terms and 'dx' to the other side via multiplication/division", "correct": true}, {"text": "Integrate immediately without moving terms", "correct": false}, {"text": "Set the derivative equal to zero", "correct": false}, {"text": "None", "correct": false}], "explanation": "You must completely separate the variables mathematically ($f(y) dy = g(x) dx$) before you can integrate both sides." },
                { "q": "If dy/dx = x/y, what does the equation look like after separating variables?", "options": [{"text": "y dy = x dx", "correct": true}, {"text": "1/y dy = x dx", "correct": false}, {"text": "y dx = x dy", "correct": false}, {"text": "None", "correct": false}], "explanation": "Multiplying both sides by y and dx separates the variables cleanly." },
                { "q": "If an AP student separates variables incorrectly on an FRQ, how much partial credit can they receive for the rest of the problem?", "options": [{"text": "0 points out of 5 or 6 total points", "correct": true}, {"text": "Most of the credit", "correct": false}, {"text": "Half credit", "correct": false}, {"text": "None", "correct": false}], "explanation": "The AP rubric enforces a strict guardrail: failing to separate variables correctly results in an immediate 0 for that entire part of the question." },
                { "q": "When separating variables for dy/dx = k*y, what is the correct setup?", "options": [{"text": "1/y dy = k dx", "correct": true}, {"text": "y dy = k dx", "correct": false}, {"text": "dy = k*y dx", "correct": false}, {"text": "None", "correct": false}], "explanation": "Dividing by y isolates the y terms on the left side with dy." },
                { "q": "What function is generated when you integrate 1/y dy?", "options": [{"text": "ln|y|", "correct": true}, {"text": "y^2 / 2", "correct": false}, {"text": "ln(y)", "correct": false}, {"text": "None", "correct": false}], "explanation": "The antiderivative of 1/y is natural log, and absolute value bars are required." },
                { "q": "When executing separation of variables, when should the constant of integration '+C' be added?", "options": [{"text": "Immediately when the integration step is performed", "correct": true}, {"text": "At the very end of algebraic isolation", "correct": false}, {"text": "Never", "correct": false}, {"text": "None", "correct": false}], "explanation": "The constant +C must appear the moment integrals are removed. Forgetting it early disrupts the algebraic solution." },
                { "q": "If ln|y| = x + C, how do you isolate y exponentially?", "options": [{"text": "y = A * e^x, where A = ±e^C", "correct": true}, {"text": "y = e^x + C", "correct": false}, {"text": "y = e^x + e^C", "correct": false}, {"text": "None", "correct": false}], "explanation": "Exponentiating both sides gives $|y| = e^(x+C) = e^C * e^x$. Replacing $\pm e^C$ with a new constant A simplifies the expression." },
                { "q": "True or False: Terms like 'x + y' can be separated using standard multiplication and division isolation.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "Equations like dy/dx = x + y cannot be separated using basic multiplication or division; they are non-separable in this curriculum." },
                { "q": "Separate variables for dy/dx = 3x^2 * y^2.", "options": [{"text": "1/y^2 dy = 3x^2 dx", "correct": true}, {"text": "y^2 dy = 3x^2 dx", "correct": false}, {"text": "1/y^2 dx = 3x^2 dy", "correct": false}, {"text": "None", "correct": false}], "explanation": "Dividing by $y^2$ and multiplying by dx moves the variables to their respective sides." },
                { "q": "Why do we typically only add '+C' to the independent variable (x) side instead of both sides?", "options": [{"text": "Two constants can be combined into a single constant on one side", "correct": true}, {"text": "The left side constant is always zero", "correct": false}, {"text": "It is a rule chosen by convention", "correct": false}, {"text": "None", "correct": false}], "explanation": "Combining constants ($C_2 - C_1 = C$) keeps the algebra clean without changing the solution." }
              ]
            },
            {
              "id": "7.6",
              "topic": "7.6 Finding Particular Solutions Using Initial Conditions and Separation of Variables",
              "videoId": "O0iR87gOWdg",
              "quiz": [
                { "q": "What distinguishes a particular solution from a general solution?", "options": [{"text": "It handles a specific initial coordinate condition to replace C with a number", "correct": true}, {"text": "It contains multiple variables", "correct": false}, {"text": "It has no derivatives", "correct": false}, {"text": "None", "correct": false}], "explanation": "A particular solution uses an initial condition to determine the specific constant value, defining one unique curve out of the solution family." },
                { "q": "If dy/dx = x/y and the particular solution curve passes through (0, -2), what must you consider when isolating y from y^2 = x^2 + 4?", "options": [{"text": "Select the negative square root: y = -sqrt(x^2 + 4)", "correct": true}, {"text": "Select the positive square root: y = sqrt(x^2 + 4)", "correct": false}, {"text": "Keep the ± sign active", "correct": false}, {"text": "None", "correct": false}], "explanation": "Because the initial condition has a negative y-value (-2), you must choose the negative root for the function to be valid at that point." },
                { "q": "When is the most algebraically stable moment to solve for 'C' using your initial condition?", "options": [{"text": "Immediately after integrating before complex algebraic isolation", "correct": true}, {"text": "At the very final isolated line", "correct": false}, {"text": "Before separating variables", "correct": false}, {"text": "None", "correct": false}], "explanation": "Plugging in initial values right after integration minimizes algebraic errors down the line." },
                { "q": "Solve for C: y^2 = x^2 + C given the initial condition (3, 5).", "options": [{"text": "C = 16", "correct": true}, {"text": "C = 4", "correct": false}, {"text": "C = 34", "correct": false}, {"text": "None", "correct": false}], "explanation": "Substituting the values gives $5^2 = 3^2 + C$, so $25 = 9 + C$, which means C = 16." },
                { "q": "True or False: The domain of a particular solution to a differential equation must be continuous and contain the initial condition.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "AP Calculus requires a particular solution to be differentiable on a continuous interval that includes the initial condition x-value." },
                { "q": "If dy/dx = y and y(0) = 5, what is the unique particular solution?", "options": [{"text": "y = 5e^x", "correct": true}, {"text": "y = e^x + 5", "correct": false}, {"text": "y = 5e^0", "correct": false}, {"text": "None", "correct": false}], "explanation": "This is the exponential growth model $y = C e^x$. Setting x = 0 and y = 5 gives C = 5." },
                { "q": "What is a common error when handling log steps like ln|y| = x + C with initial condition (0, -3)?", "options": [{"text": "Forgetting that absolute value converts -3 to positive 3 inside the log", "correct": true}, {"text": "Trying to take the log of a negative number directly without absolute values", "correct": false}, {"text": "Ignoring the constant", "correct": false}, {"text": "None", "correct": false}], "explanation": "The absolute value bars require evaluating ln|-3| as ln(3), which preserves the real value calculation." },
                { "q": "If the solution to a differential equation is y = 1 / (x + C) and y(0) = 2, what is C?", "options": [{"text": "C = 1/2", "correct": true}, {"text": "C = 2", "correct": false}, {"text": "C = -2", "correct": false}, {"text": "None", "correct": false}], "explanation": "Substituting gives $2 = 1 / (0 + C)$, so $2 = 1/C$, which means C = 1/2." },
                { "q": "What step must always be performed at the end of finding a particular solution on an AP FRQ?", "options": [{"text": "Explicitly isolate y to write the solution as f(x) =", "correct": true}, {"text": "Leave it in implicit form", "correct": false}, {"text": "Verify with a sign chart", "correct": false}, {"text": "None", "correct": false}], "explanation": "AP prompts expect you to isolate the dependent variable to express your final answer as an explicit function, $y = f(x)$." },
                { "q": "If dy/dx = 1/x and y(1) = 0, what is the particular solution for its valid domain x > 0?", "options": [{"text": "y = ln(x)", "correct": true}, {"text": "y = ln|x| + 1", "correct": false}, {"text": "y = x", "correct": false}, {"text": "None", "correct": false}], "explanation": "Integrating gives $y = ln|x| + C$. Substituting (1,0) gives $0 = ln(1) + C$, so C = 0. Since the domain must contain x=1, the solution is y = ln(x) for x > 0." }
              ]
            },
            {
              "id": "7.7",
              "topic": "7.7 Finding Particular Solutions Using Initial Conditions and Separation of Variables",
              "videoId": "RBy5HpCSRfY",
              "quiz": [
                { "q": "What is the first step in solving a separable differential equation dy/dx = g(x)h(y)?", "options": [{"text": "Move all y terms to the left and x terms to the right", "correct": true}, {"text": "Take the derivative of both sides", "correct": false}, {"text": "Set dy/dx to zero", "correct": false}, {"text": "None", "correct": false}], "explanation": "Separation of variables requires isolating dx and dy with their corresponding functions before integrating." },
                { "q": "When solving dy/dx = 2xy with y(0) = 3, what is the correct first separation?", "options": [{"text": "(1/y) dy = 2x dx", "correct": true}, {"text": "dy = 2xy dx", "correct": false}, {"text": "y dy = 2x dx", "correct": false}, {"text": "None", "correct": false}], "explanation": "Divide by y and multiply by dx to get the y terms with dy and x terms with dx." },
                { "q": "After integrating both sides of a separated equation, why must you include +C?", "options": [{"text": "To represent the general family of solutions", "correct": true}, {"text": "To make the math look harder", "correct": false}, {"text": "Because it cancels out", "correct": false}, {"text": "None", "correct": false}], "explanation": "The constant C is required for the indefinite integral before applying initial conditions." },
                { "q": "Given integral(1/y) dy = integral(2x) dx, what is the implicit general solution?", "options": [{"text": "ln|y| = x^2 + C", "correct": true}, {"text": "y = x^2 + C", "correct": false}, {"text": "ln(y) = 2x^2 + C", "correct": false}, {"text": "None", "correct": false}], "explanation": "The antiderivative of 1/y is ln|y| and the antiderivative of 2x is x^2." },
                { "q": "If ln|y| = x^2 + C, what is the explicit solution for y?", "options": [{"text": "y = Ce^(x^2)", "correct": true}, {"text": "y = e^(x^2) + C", "correct": false}, {"text": "y = ln(x^2) + C", "correct": false}, {"text": "None", "correct": false}], "explanation": "Exponentiating both sides gives y = e^(x^2 + C), which simplifies to y = e^C * e^(x^2), where e^C is a new constant C." },
                { "q": "Using y = Ce^(x^2) and y(0) = 3, what is the value of C?", "options": [{"text": "3", "correct": true}, {"text": "0", "correct": false}, {"text": "1", "correct": false}, {"text": "None", "correct": false}], "explanation": "3 = C * e^(0^2) -> 3 = C * 1 -> C = 3." },
                { "q": "True or False: You can solve for C before or after isolating y.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "While true, solving for C early often simplifies the algebraic work significantly." },
                { "q": "If you get ln|y| = x + C, what is the general solution for y?", "options": [{"text": "y = Ce^x", "correct": true}, {"text": "y = e^x + C", "correct": false}, {"text": "y = x + C", "correct": false}, {"text": "None", "correct": false}], "explanation": "Exponentiating both sides yields y = Ce^x." },
                { "q": "Solve dy/dx = y/x given y(1) = 2. What is the particular solution?", "options": [{"text": "y = 2x", "correct": true}, {"text": "y = x^2", "correct": false}, {"text": "y = x + 1", "correct": false}, {"text": "None", "correct": false}], "explanation": "ln|y| = ln|x| + C -> y = Cx. Plugging in (1, 2) gives 2 = C(1), so C=2." },
                { "q": "Why is the absolute value used in ln|y|?", "options": [{"text": "To handle negative values of y in the domain", "correct": true}, {"text": "Because it looks better", "correct": false}, {"text": "To force the answer to be positive", "correct": false}, {"text": "None", "correct": false}], "explanation": "The antiderivative of 1/y is strictly ln|y| to ensure the domain matches the original differential equation." }
              ]
            },
            {
              "id": "7.8",
              "topic": "7.8 Exponential Models with Differential Equations",
              "videoId": "eXGxhHKqYmg",
              "quiz": [
                { "q": "What is the general solution to the differential equation dy/dt = ky?", "options": [{"text": "y(t) = y0 * e^(kt)", "correct": true}, {"text": "y(t) = kt^2 + y0", "correct": false}, {"text": "y(t) = y0 + kt", "correct": false}, {"text": "None", "correct": false}], "explanation": "This is the standard model for exponential growth and decay." },
                { "q": "In dy/dt = ky, what does the constant k represent?", "options": [{"text": "The relative growth or decay rate", "correct": true}, {"text": "The initial amount", "correct": false}, {"text": "The time elapsed", "correct": false}, {"text": "None", "correct": false}], "explanation": "k > 0 indicates growth, while k < 0 indicates decay." },
                { "q": "If a population doubles in 5 years, what is the growth rate equation?", "options": [{"text": "2y0 = y0 * e^(k*5)", "correct": true}, {"text": "y0 = 2y0 * e^(k*5)", "correct": false}, {"text": "2 = k * 5", "correct": false}, {"text": "None", "correct": false}], "explanation": "Setting y(5) = 2y0 allows you to solve for k." },
                { "q": "How do you find the decay constant k if an item has a half-life of 50 years?", "options": [{"text": "0.5 = e^(k*50)", "correct": true}, {"text": "0.5 = e^(50/k)", "correct": false}, {"text": "k = 50 * ln(0.5)", "correct": false}, {"text": "None", "correct": false}], "explanation": "At t=50, the amount is half of y0, so 0.5y0 = y0 * e^(50k)." },
                { "q": "True or False: Exponential decay models eventually reach zero.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "Mathematically, e^(kt) only approaches zero as t approaches infinity; it never technically hits zero." },
                { "q": "What is Newton's Law of Cooling differential equation?", "options": [{"text": "dT/dt = -k(T - Tenv)", "correct": true}, {"text": "dT/dt = kT", "correct": false}, {"text": "dT/dt = -kT", "correct": false}, {"text": "None", "correct": false}], "explanation": "The rate of change is proportional to the difference between the object temperature and the ambient temperature." },
                { "q": "In Newton's Law of Cooling, what happens to (T - Tenv) as t increases?", "options": [{"text": "It decays exponentially toward zero", "correct": true}, {"text": "It grows linearly", "correct": false}, {"text": "It stays constant", "correct": false}, {"text": "None", "correct": false}], "explanation": "The difference between the object and the environment shrinks until they reach thermal equilibrium." },
                { "q": "If dy/dt = 0.05y, how long does it take to triple?", "options": [{"text": "ln(3) / 0.05", "correct": true}, {"text": "3 / 0.05", "correct": false}, {"text": "0.05 * ln(3)", "correct": false}, {"text": "None", "correct": false}], "explanation": "3 = e^(0.05t) -> ln(3) = 0.05t -> t = ln(3)/0.05." },
                { "q": "If a radioactive isotope has 100g at t=0 and 25g at t=10, what is the half-life?", "options": [{"text": "5 years", "correct": true}, {"text": "10 years", "correct": false}, {"text": "2.5 years", "correct": false}, {"text": "None", "correct": false}], "explanation": "It takes 5 years to go from 100 to 50, and another 5 years to go from 50 to 25." },
                { "q": "What is the solution to dy/dt = -0.5y with y(0) = 100?", "options": [{"text": "y(t) = 100e^(-0.5t)", "correct": true}, {"text": "y(t) = 100e^(0.5t)", "correct": false}, {"text": "y(t) = -0.5t + 100", "correct": false}, {"text": "None", "correct": false}], "explanation": "This follows the y = y0e^(kt) template with y0=100 and k=-0.5." }
              ]
            },
            {
            "id": "7.9",
            "topic": "7.9 Logistic Models with Differential Equations",
            "videoId": "DaBVapQZ948",
            "quiz": [
                { "question": "What is the standard algebraic structure of the logistic growth differential equation?", "options": [{"text": "dP/dt = k * P * (1 - P / M), where M is the carrying capacity", "correct": true}, {"text": "dP/dt = k * P", "correct": false}, {"text": "dP/dt = k * (M - P)", "correct": false}, {"text": "None", "correct": false}], "explanation": "Logistic setups incorporate both an exponential expansion factor ($kP$) paired against a resource ceiling constraint term $(1 - P/M)$." },
                { "q": "What does the parameter 'M' represent in a logistic tracking scenario?", "options": [{"text": "The carrying capacity (the maximum stable sustainable population limit)", "correct": true}, {"text": "The initial population base", "correct": false}, {"text": "The maximum growth speed", "correct": false}, {"text": "None", "correct": false}], "explanation": "Carrying capacity defines the upper structural horizontal asymptote that bounds population growth over long periods of time." },
                { "q": "At what explicit population level does a logistic system experience its absolute maximum growth rate?", "options": [{"text": "At exactly half of the carrying capacity (P = M / 2)", "correct": true}, {"text": "When P reaches the full carrying capacity M", "correct": false}, {"text": "At time t = 0", "correct": false}, {"text": "None", "correct": false}], "explanation": "The maximum rate corresponds to the inflection point of the logistic S-curve, occurring precisely at half capacity: $P = M / 2$." },
                { "q": "If a differential equation is stated as $dP/dt = 0.2P - 0.001P^2$, rewrite it to find the carrying capacity M.", "options": [{"text": "dP/dt = 0.2P * (1 - P / 200), so M = 200", "correct": true}, {"text": "M = 0.2", "correct": false}, {"text": "M = 1000", "correct": false}, {"text": "None", "correct": false}], "explanation": "Factoring out $0.2P$ gives $0.2P(1 - 0.005P)$. Since $0.005 = 1/200$, the carrying capacity constant maps directly to 200." },
                { "q": "What is the limit of the population function $P(t)$ as time $t$ approaches infinity if the starting population $P_0 > 0$?", "options": [{"text": "The carrying capacity, M", "correct": true}, {"text": "Infinity", "correct": false}, {"text": "Zero", "correct": false}, {"text": "None", "correct": false}], "explanation": "Over time, regardless of whether you start below or above the carrying capacity, the system stabilizes and flattens out toward the carrying capacity asymptote ($M$)." },
                { "q": "If a starting population begins completely above the carrying capacity ($P_0 > M$), what is the sign of $dP/dt$ initially?", "options": [{"text": "Negative (the population will immediately drop down toward M)", "correct": true}, {"text": "Positive", "correct": false}, {"text": "Zero", "correct": false}, {"text": "None", "correct": false}], "explanation": "If $P > M$, the factor $(1 - P/M)$ becomes negative, driving the derivative negative and causing the population to decrease toward equilibrium." },
                { "q": "What structural feature matches the point on a logistic curve where the growth rate transitions from increasing to decreasing?", "options": [{"text": "An inflection point on the graph of P(t)", "correct": true}, {"text": "A local maximum", "correct": false}, {"text": "A vertical asymptote", "correct": false}, {"text": "None", "correct": false}], "explanation": "The inflection point marks the spot where the concavity changes from concave up (accelerating growth) to concave down (slowing growth)." },
                { "q": "True or False: A population starting at exactly $P_0 = M$ will experience zero growth ($dP/dt = 0$) for all time.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "Setting $P = M$ drives the constraint factor $(1 - M/M)$ to 0. This creates an equilibrium solution where the population remains flat." },
                { "q": "If a logistic equation is written in the form $dP/dt = kP(M - P)$, what is the population value for maximum growth rate?", "options": [{"text": "M / 2", "correct": true}, {"text": "1 / 2k", "correct": false}, {"text": "M", "correct": false}, {"text": "None", "correct": false}], "explanation": "Even in this alternate factored format, the maximum growth rate still occurs precisely at half the carrying capacity, $P = M / 2$." },
                { "q": "What shape family characterizes the solution curve $P(t)$ for an initial condition starting below half capacity ($0 < P_0 < M/2$)?", "options": [{"text": "An elongated S-shape curve (sigmoidal curve)", "correct": true}, {"text": "A standard upward parabola", "correct": false}, {"text": "A straight linear line", "correct": false}, {"text": "None", "correct": false}], "explanation": "The curve starts expanding exponentially, passes its inflection point at $M/2$, and then curves downward asymptotically toward $M$ to form an S-shape." }
            ]
            }
          ]
        },
              "unit-8": {
        "title": "Unit 8: Applications of Integration",
        "lessons": [
          {
            "id": "8.1",
            "topic": "8.1 Finding the Average Value of a Function on an Interval",
            "videoId": "s-HR0q7Vh9o",
            "quiz": [
              { "q": "What is the formula for the average value of a continuous function f(x) on [a, b]?", "options": [{"text": "1/(b-a) * Integral from a to b of f(x) dx", "correct": true}, {"text": "Integral from a to b of f(x) dx", "correct": false}, {"text": "[f(b) - f(a)] / (b - a)", "correct": false}, {"text": "None", "correct": false}], "explanation": "The average value divides the total accumulated area under the curve by the width of the interval (b - a)." },
              { "q": "What theorem guarantees that a continuous function will equal its average value at least once on an open interval?", "options": [{"text": "Mean Value Theorem for Integrals", "correct": true}, {"text": "Extreme Value Theorem", "correct": false}, {"text": "Intermediate Value Theorem", "correct": false}, {"text": "None", "correct": false}], "explanation": "The MVT for Integrals guarantees a value c in (a, b) such that f(c) equals the average value of the function." },
              { "q": "If the definite integral of f(x) from 2 to 6 is 12, what is the average value of f(x) on this interval?", "options": [{"text": "3", "correct": true}, {"text": "12", "correct": false}, {"text": "2", "correct": false}, {"text": "4", "correct": false}], "explanation": "Average value = 1/(6 - 2) * 12 = 1/4 * 12 = 3." },
              { "q": "Geometric interpretation: The average value represents the height of a rectangle over [a, b] whose area is exactly equal to what?", "options": [{"text": "The definite integral of the function over that interval", "correct": true}, {"text": "The derivative at the midpoint", "correct": false}, {"text": "The total perimeter of the graph", "correct": false}, {"text": "None", "correct": false}], "explanation": "Average value flattens the curve into a rectangle with an identical net-signed area profile." },
              { "q": "If the average value of a function is 5 over the interval [1, 4], what is the value of the definite integral over that same span?", "options": [{"text": "15", "correct": true}, {"text": "5", "correct": false}, {"text": "20", "correct": false}, {"text": "None", "correct": false}], "explanation": "Rearranging the formula: Integral = Average Value * (b - a) = 5 * (4 - 1) = 15." },
              { "q": "True or False: The average value of a function can be negative.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "If a function spends more net area below the x-axis than above it, its average value will be negative." },
              { "q": "What is the average value of f(x) = c (a constant function) on any interval [a, b]?", "options": [{"text": "c", "correct": true}, {"text": "0", "correct": false}, {"text": "c * (b - a)", "correct": false}, {"text": "None", "correct": false}], "explanation": "A constant value never changes, so its average output remains identically c." },
              { "q": "What is a common student error when evaluating average value problems on the AP exam?", "options": [{"text": "Setting up the integral correctly but forgetting to multiply by the 1/(b-a) front coefficient", "correct": true}, {"text": "Using the wrong boundaries", "correct": false}, {"text": "Using the power rule backwards", "correct": false}, {"text": "None", "correct": false}], "explanation": "Forgetting the scalar width fraction leaves you with the total accumulation instead of the average height value." },
              { "q": "Find the average value of f(x) = 2x on the interval [0, 3].", "options": [{"text": "3", "correct": true}, {"text": "9", "correct": false}, {"text": "6", "correct": false}, {"text": "None", "correct": false}], "explanation": "The integral of 2x from 0 to 3 is x^2 evaluated from 0 to 3, which is 9. Multiplying by 1/(3-0) gives 9/3 = 3." },
              { "q": "If a function represents a velocity profile in ft/sec, what is the unit of measure for its average value over a time interval?", "options": [{"text": "ft/sec", "correct": true}, {"text": "feet", "correct": false}, {"text": "ft/sec^2", "correct": false}, {"text": "None", "correct": false}], "explanation": "The average value returns an output height profile matching the units of the original function y-axis." }
            ]
          },
          {
            "id": "8.2",
            "topic": "8.2 Connecting Position, Velocity, and Acceleration of Functions Using Integrals",
            "videoId": "tSqZJiVPtAY",
            "quiz": [
              { "q": "Integrating an acceleration function a(t) with respect to time yields which kinematic function?", "options": [{"text": "Velocity, v(t) + C", "correct": true}, {"text": "Position, x(t) + C", "correct": false}, {"text": "Speed", "correct": false}, {"text": "None", "correct": false}], "explanation": "Velocity is the antiderivative of acceleration: v(t) = ∫a(t) dt." },
              { "q": "Integrating a velocity function v(t) over an interval [a, b] calculates what physical quantity?", "options": [{"text": "Displacement (net change in position)", "correct": true}, {"text": "Total distance traveled", "correct": false}, {"text": "Final acceleration", "correct": false}, {"text": "None", "correct": false}], "explanation": "The definite integral of velocity yields the net displacement: x(b) - x(a)." },
              { "q": "How do you analytically calculate the TOTAL distance traveled by a particle given its velocity v(t) on [a, b]?", "options": [{"text": "Integrate the absolute value of velocity: Integral of |v(t)| dt", "correct": true}, {"text": "Integrate velocity directly without modifications", "correct": false}, {"text": "Take the derivative of velocity", "correct": false}, {"text": "None", "correct": false}], "explanation": "Integrating speed |v(t)| treats backward movement as positive distance, preventing positive and negative movements from canceling out." },
              { "q": "If a particle starts at position x(0) = 4 and its velocity is integrated from t=0 to t=5 resulting in 10, what is its final position x(5)?", "options": [{"text": "14", "correct": true}, {"text": "10", "correct": false}, {"text": "6", "correct": false}, {"text": "None", "correct": false}], "explanation": "Using the accumulation model: Final Position = Initial Position + Displacement = 4 + 10 = 14." },
              { "q": "True or False: If a particle's displacement is zero over a time interval, its total distance traveled must also be zero.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "A runner completing a lap around a circular track has a displacement of zero, but has covered a non-zero physical distance." },
              { "q": "What is the difference between displacement and total distance visually on a velocity graph?", "options": [{"text": "Displacement is net area (above minus below); Distance is absolute area (all areas made positive)", "correct": true}, {"text": "They look identical", "correct": false}, {"text": "Distance is the slope of the velocity curve", "correct": false}, {"text": "None", "correct": false}], "explanation": "Displacement preserves signs, whereas total distance reflects a geometric area sum where sections below the t-axis are reflected upward." },
              { "q": "If a particle is moving backward, what can be concluded about its velocity v(t)?", "options": [{"text": "v(t) < 0", "correct": true}, {"text": "v(t) > 0", "correct": false}, {"text": "a(t) < 0", "correct": false}, {"text": "None", "correct": false}], "explanation": "The directional sign of velocity indicates the direction of motion relative to the coordinate origin." },
              { "q": "A particle has a velocity of v(t) = t - 3. Over the interval [0, 4], where should you split the integral to calculate total distance without a calculator?", "options": [{"text": "At t = 3, where the particle changes direction", "correct": true}, {"text": "At t = 2", "correct": false}, {"text": "Do not split it", "correct": false}, {"text": "None", "correct": false}], "explanation": "Setting v(t) = 0 yields t = 3. You evaluate the absolute value by separating into intervals [0, 3] and [3, 4]." },
              { "q": "How is final velocity v(b) found using an initial velocity condition v(a)?", "options": [{"text": "v(b) = v(a) + Integral from a to b of a(t) dt", "correct": true}, {"text": "v(b) = Integral from a to b of a(t) dt", "correct": false}, {"text": "v(b) = v'(a)", "correct": false}, {"text": "None", "correct": false}], "explanation": "By the Fundamental Theorem of Calculus, the final value is the initial value plus the accumulated change in velocity." },
              { "q": "If an integral problem mentions an object is 'at rest,' what initial condition value is given implicitly?", "options": [{"text": "v(t) = 0", "correct": true}, {"text": "x(t) = 0", "correct": false}, {"text": "a(t) = 0", "correct": false}, {"text": "None", "correct": false}], "explanation": "'At rest' means the object has stopped moving momentarily or permanently, meaning its velocity is zero." }
            ]
          },
          {
            "id": "8.3",
            "topic": "8.3 Using Accumulation Functions and Definite Integrals in Applied Contexts",
            "videoId": "0-i34IEzOrs",
            "quiz": [
              { "q": "In applied accumulation problems, how is the total amount of a quantity calculated when given both an 'Inflow' rate and an 'Outflow' rate?", "options": [{"text": "Amount = Initial Amount + Integral of (Inflow Rate - Outflow Rate) dt", "correct": true}, {"text": "Amount = Integral of Inflow Rate * Outflow Rate dt", "correct": false}, {"text": "Amount = Inflow Rate - Outflow Rate", "correct": false}, {"text": "None", "correct": false}], "explanation": "The net rate of change is the entering rate minus the leaving rate; integrating this net rate tracks the total accumulation." },
              { "q": "Water enters a tank at E(t) gal/hr and leaves at L(t) gal/hr. What equation determines when the volume of water in the tank is at a relative maximum?", "options": [{"text": "E(t) - L(t) = 0", "correct": true}, {"text": "E'(t) = 0", "correct": false}, {"text": "Integral of (E(t) - L(t)) dt = 0", "correct": false}, {"text": "None", "correct": false}], "explanation": "Extrema occur at critical points where the derivative function—which is the net rate E(t) - L(t)—equals zero." },
              { "q": "If gravel is arriving at a plant at a rate of G(t) tons per hour, what does the expression 'Integral from 1 to 4 of G(t) dt' compute?", "options": [{"text": "The total tons of gravel arriving between hours 1 and 4", "correct": true}, {"text": "The average rate of gravel arrival", "correct": false}, {"text": "The acceleration of gravel delivery", "correct": false}, {"text": "None", "correct": false}], "explanation": "Integrating a rate over an interval yields the total accumulated amount of the item added during that timeframe." },
              { "q": "If a tank contains 500 gallons of oil at t = 0, and oil leaks out at a rate of H(t) gal/min, what is the formula for the volume V(t) remaining at any time t?", "options": [{"text": "V(t) = 500 - Integral from 0 to t of H(x) dx", "correct": true}, {"text": "V(t) = Integral from 0 to t of H(x) dx", "correct": false}, {"text": "V(t) = 500 - H(t)", "correct": false}, {"text": "None", "correct": false}], "explanation": "The remaining amount is the starting volume minus the accumulated volume that leaked out over time." },
              { "q": "True or False: To find the absolute maximum amount of a substance in an rate context problem on a closed interval, you must apply the Candidates Test.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "Just like standard optimization, an absolute maximum in a contextual problem can occur at the endpoints or interior critical points." },
              { "q": "If the net rate of change of a population is positive ($E(t) - L(t) > 0$), what is happening to the total population function?", "options": [{"text": "The population is increasing", "correct": true}, {"text": "The population is decreasing", "correct": false}, {"text": "The population is at a maximum", "correct": false}, {"text": "None", "correct": false}], "explanation": "A positive net derivative indicates that the primary accumulation graph is increasing." },
              { "q": "What tool helps compute values when an accumulation integrand rate does not have an analytical antiderivative on an AP calculator-active section?", "options": [{"text": "Numerical integration using a graphing calculator (fnInt)", "correct": true}, {"text": "Riemann sums approximation", "correct": false}, {"text": "L'Hopital's rule", "correct": false}, {"text": "None", "correct": false}], "explanation": "On calculator-active sections, you should compute integrals numerically rather than trying to evaluate complex antiderivatives by hand." },
              { "q": "If an integral evaluates an item rate given in 'people per minute' over an interval measured in 'minutes', what is the final unit profile?", "options": [{"text": "people", "correct": true}, {"text": "people/minute^2", "correct": false}, {"text": "minutes", "correct": false}, {"text": "None", "correct": false}], "explanation": "Integrating multiplies the rate unit by the time differential unit: (people/min) * min = people." },
              { "q": "If a problem asks if the amount of water in a pool is increasing or decreasing at t = 3, what do you evaluate?", "options": [{"text": "The sign of the net rate equation: Inflow(3) - Outflow(3)", "correct": true}, {"text": "The value of the integral up to 3", "correct": false}, {"text": "The second derivative at 3", "correct": false}, {"text": "None", "correct": false}], "explanation": "Increasing/decreasing behavior depends on the sign of the first derivative, which is the net rate at that instant." },
              { "q": "Why is it important to include initial values when setting up equations for total contextual accumulation?", "options": [{"text": "Omitting the starting value creates a baseline offset error", "correct": true}, {"text": "The calculator requires it", "correct": false}, {"text": "It changes the rate profile", "correct": false}, {"text": "None", "correct": false}], "explanation": "The integral only tracks the change over time; it cannot account for existing quantities present before integration began." }
            ]
          },
          {
            "id": "4", 
            "topic": "8.4 Area Between Curves of Functions Given as Expressions of x",
            "videoId": "Ip16U-aFC-Q",
            "quiz": [
              { "q": "What is the standard definite integral setup for finding the area between two curves f(x) and g(x) on [a, b] where f(x) ≥ g(x)?", "options": [{"text": "Integral from a to b of [f(x) - g(x)] dx", "correct": true}, {"text": "Integral from a to b of [g(x) - f(x)] dx", "correct": false}, {"text": "Integral from a to b of [f(x) + g(x)] dx", "correct": false}, {"text": "None", "correct": false}], "explanation": "The area bounded between two functions is found by integrating the upper function minus the lower function over the interval." },
              { "q": "How do you find the boundaries of integration (a and b) if they are not explicitly given in an area problem?", "options": [{"text": "Set the two equations equal to each other ($f(x) = g(x)$) and solve for their intersection x-values", "correct": true}, {"text": "Find the x-intercepts of the top function", "correct": false}, {"text": "Assume boundaries are 0 and 1", "correct": false}, {"text": "None", "correct": false}], "explanation": "The intersection points of the boundaries define where the enclosed region opens and closes." },
              { "q": "True or False: Bounded area calculations can result in a negative value.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "Geometric area between curves is strictly non-negative. If your calculation yields a negative value, the top and bottom functions were likely swapped." },
              { "q": "What should you do if two curves cross each other within the interval of integration, changing which function is on top?", "options": [{"text": "Split the region into subregions at the intersection point, and integrate [Top - Bottom] for each section separately", "correct": true}, {"text": "Integrate across the whole interval anyway", "correct": false}, {"text": "Average the two functions", "correct": false}, {"text": "None", "correct": false}], "explanation": "Splitting the integral ensures that the integrand [Top - Bottom] remains positive across each distinct region." },
              { "q": "Find the area of the region bounded by y = x^2 and y = x from x=0 to x=1.", "options": [{"text": "1/6", "correct": true}, {"text": "1/2", "correct": false}, {"text": "1/3", "correct": false}, {"text": "None", "correct": false}], "explanation": "On [0, 1], y = x is above y = x^2. Integral of (x - x^2) dx = [x^2/2 - x^3/3] from 0 to 1 = 1/2 - 1/3 = 1/6." },
              { "q": "When visualizing the area between curves under an x-profile integration setup, what type of representative rectangles are summed?", "options": [{"text": "Vertical rectangles with width dx and height [Top - Bottom]", "correct": true}, {"text": "Horizontal rectangles with width dy", "correct": false}, {"text": "Squares", "correct": false}, {"text": "None", "correct": false}], "explanation": "Integrating with respect to x sums vertical rectangular strips across a horizontal domain." },
              { "q": "If f(x) = 5 and g(x) = -2 on [0, 4], what is the area between them?", "options": [{"text": "28", "correct": true}, {"text": "12", "correct": false}, {"text": "8", "correct": false}, {"text": "None", "correct": false}], "explanation": "Top minus bottom is 5 - (-2) = 7. The integral of 7 from 0 to 4 is 7 * (4 - 0) = 28." },
              { "q": "If you use a graphing calculator to find the area between crossing curves, what notation shortcuts the split-region step?", "options": [{"text": "Integral from a to b of |f(x) - g(x)| dx", "correct": true}, {"text": "Integral from a to b of (f(x) - g(x))^2 dx", "correct": false}, {"text": "fnInt(f(x) - g(x))", "correct": false}, {"text": "None", "correct": false}], "explanation": "The absolute value automatically flips negative differences into positive values, eliminating the need to manually split the integral at intersection points." },
              { "q": "True or False: The area between curves changes if both curves are shifted vertically upward by adding a constant k.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "Subtracting the functions cancels out the shift: [f(x) + k] - [g(x) + k] = f(x) - g(x), meaning the enclosed area remains identical." },
              { "q": "What is the area bounded by y = sin(x) and the x-axis (y = 0) from x = 0 to x = π?", "options": [{"text": "2", "correct": true}, {"text": "0", "correct": false}, {"text": "1", "correct": false}, {"text": "None", "correct": false}], "explanation": "The integral of sin(x) - 0 from 0 to π is -cos(x) evaluated from 0 to π, which gives 1 - (-1) = 2." }
            ]
          },
          {
            "id": "8.5",
            "topic": "8.5 Area Between Curves of Functions Given as Expressions of y",
            "videoId": "YuP1GocyG0o",
            "quiz": [
              { "q": "When integrating with respect to y to find a bounded area, what is the correct orientation layout?", "options": [{"text": "Integral from c to d of [Right Function - Left Function] dy", "correct": true}, {"text": "Integral of [Left - Right] dy", "correct": false}, {"text": "Integral of [Top - Bottom] dy", "correct": false}, {"text": "None", "correct": false}], "explanation": "To ensure a positive area, integrate the rightmost function (larger x-values) minus the leftmost function (smaller x-values) with respect to y." },
              { "q": "When is it more advantageous to integrate with respect to y instead of x?", "options": [{"text": "When the boundary curves are naturally solved for x in terms of y, or when a top/bottom split changes multiple times horizontally", "correct": true}, {"text": "When the functions are polynomials", "correct": false}, {"text": "Always", "correct": false}, {"text": "None", "correct": false}], "explanation": "Integrating with respect to y simplifies the problem when a region is bounded by a single right function and a single left function." },
              { "q": "The limits of integration (c and d) in a y-axis area integration setup represent what values?", "options": [{"text": "The y-coordinates of the boundary intersection points", "correct": true}, {"text": "The x-intercepts", "correct": false}, {"text": "The domain endpoints on the x-axis", "correct": false}, {"text": "None", "correct": false}], "explanation": "Because integration occurs along the vertical axis, limits must track the lowest and highest y-values of the region." },
              { "q": "If a bounding region is enclosed by $x = y^2$ and $x = y + 2$, what are the integration boundaries?", "options": [{"text": "y = -1 to y = 2", "correct": true}, {"text": "y = 0 to y = 4", "correct": false}, {"text": "y = -2 to y = 1", "correct": false}, {"text": "None", "correct": false}], "explanation": "Setting them equal: $y^2 = y + 2 \\rightarrow y^2 - y - 2 = 0 \\rightarrow (y-2)(y+1) = 0$, giving intersection points at y = -1 and y = 2." },
              { "q": "What type of representative approximation rectangles are summed in a y-profile integration setup?", "options": [{"text": "Horizontal rectangles with thickness dy and length [Right - Left]", "correct": true}, {"text": "Vertical rectangles with thickness dx", "correct": false}, {"text": "Triangles", "correct": false}, {"text": "None", "correct": false}], "explanation": "Integrating with respect to y sums horizontal rectangular strips from the bottom boundary up to the top boundary." },
              { "q": "True or False: The equation of the y-axis itself used as a boundary line is written as y = 0.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "The equation of the y-axis is x = 0. The equation y = 0 represents the horizontal x-axis." },
              { "q": "Convert the boundary equation y = ln(x) into an expression of y suitable for a y-integration setup.", "options": [{"text": "x = e^y", "correct": true}, {"text": "x = ln(y)", "correct": false}, {"text": "x = e^x", "correct": false}, {"text": "None", "correct": false}], "explanation": "Inverting y = ln(x) by exponentiating both sides isolates x as an explicit function of y: $x = e^y$." },
              { "q": "If a right curve is x = 5 and a left curve is x = y^2 from y = -1 to y = 1, what is the proper setup?", "options": [{"text": "Integral from -1 to 1 of (5 - y^2) dy", "correct": true}, {"text": "Integral from -1 to 1 of (y^2 - 5) dy", "correct": false}, {"text": "Integral of (5 - x) dx", "correct": false}, {"text": "None", "correct": false}], "explanation": "Applying the [Right - Left] rule leads directly to the integrand $(5 - y^2)$." },
              { "q": "What is a common student pitfall when setting up a y-integration problem from an x-solved equation?", "options": [{"text": "Forgetting to square or change the limits of integration to match y-coordinates", "correct": true}, {"text": "Using dy instead of dx", "correct": false}, {"text": "Integrating the wrong function", "correct": false}, {"text": "None", "correct": false}], "explanation": "Using x-values as the limits of integration in a dy integral is a frequent error that leads to an incorrect result." },
              { "q": "True or False: The geometric area of a shape calculated via x-integration will match the value calculated via y-integration.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "The physical size of an enclosed region is invariant; changing the axis of integration is simply an alternative method to compute the same area." }
            ]
          },
          {
            "id": "8.6",
            "topic": "8.6 Finding Volumes with Cross Sections: Squares and Rectangles",
            "videoId": "qMXPnfx2MQM",
            "quiz": [
              { "q": "What is the general integral formula for computing the volume of a solid based on known cross-sectional areas?", "options": [{"text": "Volume = Integral from a to b of A(x) dx, where A(x) is the area function of the cross section", "correct": true}, {"text": "Volume = Integral of π * f(x) dx", "correct": false}, {"text": "Volume = Area * Perimeter", "correct": false}, {"text": "None", "correct": false}], "explanation": "Integrating the cross-sectional area function sums up infinitely thin slices to calculate the total volume." },
              { "q": "If a solid has a base bounded by curves on the xy-plane, and its cross sections perpendicular to the x-axis are SQUARES, what is A(x)?", "options": [{"text": "A(x) = (base)^2, where base = [Top Curve - Bottom Curve]", "correct": true}, {"text": "A(x) = 2 * base", "correct": false}, {"text": "A(x) = π * (base)^2", "correct": false}, {"text": "None", "correct": false}], "explanation": "The area of a square is $side^2$. The side length of the square corresponds to the distance between the upper and lower boundary curves." },
              { "q": "A solid has cross sections perpendicular to the x-axis that are RECTANGLES whose height is 3 times the base. What is A(x)?", "options": [{"text": "A(x) = 3 * (base)^2, where base = [Top - Bottom]", "correct": true}, {"text": "A(x) = 3 * base", "correct": false}, {"text": "A(x) = 1/2 * base * (3*base)", "correct": false}, {"text": "None", "correct": false}], "explanation": "Area of a rectangle is $base \\times height$. Since $height = 3 \\times base$, the cross-sectional area is $3 \\times (base)^2$." },
              { "q": "If the cross sections are perpendicular to the y-axis instead of the x-axis, how does the integral setup change?", "options": [{"text": "Integrate with respect to y using a horizontal base measurement: base = [Right Curve - Left Curve]", "correct": true}, {"text": "Keep everything in terms of x", "correct": false}, {"text": "Multiply the final answer by π", "correct": false}, {"text": "None", "correct": false}], "explanation": "Perpendicular to the y-axis requires slicing horizontally, using a dy thickness and a right-minus-left base measurement." },
              { "q": "True or False: Volume calculations using cross sections require multiplying the integral by π.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "A factor of π is only used when the cross sections are circles or semicircles. For squares and rectangles, use their standard geometric formulas." },
              { "q": "A region is bounded by y = x and y = 0 from x = 0 to x = 2. If cross sections perpendicular to the x-axis are squares, write the volume integral.", "options": [{"text": "Integral from 0 to 2 of x^2 dx", "correct": true}, {"text": "Integral from 0 to 2 of x dx", "correct": false}, {"text": "Integral of π*x^2 dx", "correct": false}, {"text": "None", "correct": false}], "explanation": "The base length is $x - 0 = x$. Since the cross sections are squares, the area is $x^2$, which leads to the integral of $x^2$." },
              { "q": "If an AP question specifies that cross sections are rectangles of 'height 5', what is the area formula A(x)?", "options": [{"text": "A(x) = 5 * base", "correct": true}, {"text": "A(x) = 5^2 * base", "correct": false}, {"text": "A(x) = 5 * base^2", "correct": false}, {"text": "None", "correct": false}], "explanation": "The height is a constant 5, so the area function scales linearly with the base length: $5 \\times base$." },
              { "q": "What physical feature of a solid do the limits of integration (a and b) determine?", "options": [{"text": "The start and end locations of the solid's base on the slicing axis", "correct": true}, {"text": "The maximum height of the solid", "correct": false}, {"text": "The total surface area", "correct": false}, {"text": "None", "correct": false}], "explanation": "The boundaries define the span over which the cross-sectional slices are accumulated." },
              { "q": "Evaluate the volume if the base is on [0, 1], base length is x, and cross sections are squares.", "options": [{"text": "1/3", "correct": true}, {"text": "1/2", "correct": false}, {"text": "1", "correct": false}, {"text": "None", "correct": false}], "explanation": "The integral of $x^2$ from 0 to 1 evaluates to $[x^3/3]$ from 0 to 1, which equals 1/3." },
              { "q": "What is a common error when setting up volume cross-section equations?", "options": [{"text": "Squaring the individual functions separately (e.g., Top^2 - Bottom^2) instead of squaring the entire base expression (Top - Bottom)^2", "correct": true}, {"text": "Using fractions", "correct": false}, {"text": "Integrating with respect to x", "correct": false}, {"text": "None", "correct": false}], "explanation": "You must find the net base length first by subtracting the functions ($Top - Bottom$) *before* applying the cross-sectional area formula." }
            ]
          },
          {
            "id": "8.7",
            "topic": "8.7 Finding Volumes with Cross Sections: Triangles and Semicircles",
            "videoId": "ZegdFKZwHAA",
            "quiz": [
              { "q": "If a solid has cross sections perpendicular to the x-axis that are SEMICIRCLES, what is the cross-sectional area formula A(x)?", "options": [{"text": "A(x) = (π/8) * (base)^2, where base = [Top - Bottom]", "correct": true}, {"text": "A(x) = (π/2) * (base)^2", "correct": false}, {"text": "A(x) = π * (base)^2", "correct": false}, {"text": "None", "correct": false}], "explanation": "The radius of the semicircle is $base / 2$. The area of a semicircle is $(1/2)\\pi r^2 = (1/2)\\pi(base/2)^2 = (\\pi/8)base^2$." },
              { "q": "If a solid has cross sections that are ISOSCELES RIGHT TRIANGLES with their hypotenuse on the base, what is the area formula A(x)?", "options": [{"text": "A(x) = (1/4) * (base)^2", "correct": true}, {"text": "A(x) = (1/2) * (base)^2", "correct": false}, {"text": "A(x) = (sqrt(3)/4) * (base)^2", "correct": false}, {"text": "None", "correct": false}], "explanation": "For an isosceles right triangle with its hypotenuse on the base, geometry dictates the height is half the hypotenuse, yielding $Area = (1/2) \\times base \\times (base/2) = (1/4)base^2$." },
              { "q": "If a solid has cross sections that are EQUILATERAL TRIANGLES, what is the geometric area multiplier applied to the base squared?", "options": [{"text": "sqrt(3) / 4", "correct": true}, {"text": "1 / 2", "correct": false}, {"text": "1 / 4", "correct": false}, {"text": "None", "correct": false}], "explanation": "The standard area formula for an equilateral triangle with side length s is $A = \\frac{\\sqrt{3}}{4}s^2$." },
              { "q": "If a solid has cross sections that are ISOSCELES RIGHT TRIANGLES with a leg on the xy-plane base, what is the area formula A(x)?", "options": [{"text": "A(x) = (1/2) * (base)^2", "correct": true}, {"text": "A(x) = (1/4) * (base)^2", "correct": false}, {"text": "A(x) = (base)^2", "correct": false}, {"text": "None", "correct": false}], "explanation": "Since the leg serves as both the base and the height, the triangle area formula reduces to $(1/2) \\times base \\times base = (1/2)base^2$." },
              { "q": "True or False: The front coefficient factor for a semicircle cross-section volume calculation is π/2.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "The front coefficient is π/8 because the diameter (base) must be halved to find the radius before squaring." },
              { "q": "A solid's base is bounded by a curve where the net distance [Top - Bottom] is 4. If a single cross section at this point is a semicircle, what is its area?", "options": [{"text": "2π", "correct": true}, {"text": "8π", "correct": false}, {"text": "16π", "correct": false}, {"text": "None", "correct": false}], "explanation": "Since the diameter is 4, the radius is 2. Semicircle area = $(1/2)\\pi r^2 = (1/2)\\pi(2)^2 = 2\\pi$." },
              { "q": "What should you do with constant geometric factors (like π/8 or sqrt(3)/4) when evaluating volume integrals?", "options": [{"text": "Factor them outside the integral to simplify the integration step", "correct": true}, {"text": "Keep them inside and derive them", "correct": false}, {"text": "Discard them until the final step", "correct": false}, {"text": "None", "correct": false}], "explanation": "Factoring out constants simplifies the integrand and reduces the risk of arithmetic errors during evaluation." },
              { "q": "If the cross sections are perpendicular to the y-axis, and are equilateral triangles, what is the integrand?", "options": [{"text": "(sqrt(3)/4) * (Right - Left)^2 dy", "correct": true}, {"text": "(1/2) * (Right - Left) dy", "correct": false}, {"text": "(sqrt(3)/4) * (Top - Bottom)^2 dx", "correct": false}, {"text": "None", "correct": false}], "explanation": "Slicing perpendicular to the y-axis requires a horizontal base measurement ($Right - Left$) integrated with respect to y." },
              { "q": "True or False: Semicircle cross sections generate a solid of revolution.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": " solids of revolution are generated by rotating a region around an axis. Cross-section solids are built by stacking flat shapes along a base." },
              { "q": "A base has a width of 6 units. An equilateral triangle cross section is built on this base. What is its area?", "options": [{"text": "9 * sqrt(3)", "correct": true}, {"text": "36 * sqrt(3)", "correct": false}, {"text": "18", "correct": false}, {"text": "None", "correct": false}], "explanation": "Area = $(\\sqrt{3}/4) \\times 6^2 = (\\sqrt{3}/4) \\times 36 = 9\\sqrt{3}$." }
            ]
          },
          {
            "id": "8.8",
            "topic": "8.8 Volume Solids of Revolution: Disk Method",
            "videoId": "SAHSVg7Jw_A",
            "quiz": [
              { "q": "What is the standard integral formula for the Disk Method when revolving a single function f(x) around the horizontal x-axis?", "options": [{"text": "Volume = π * Integral from a to b of [f(x)]^2 dx", "correct": true}, {"text": "Volume = Integral of f(x) dx", "correct": false}, {"text": "Volume = 2π * Integral of x * f(x) dx", "correct": false}, {"text": "None", "correct": false}], "explanation": "The Disk Method calculates volume by summing circular disks with area $\\pi r^2$, where the radius r is equal to the function height $f(x)$." },
              { "q": "When using the Disk Method, what is the spatial relationship between the representative rectangular slices and the axis of revolution?", "options": [{"text": "The strips are perpendicular to the axis of revolution", "correct": true}, {"text": "The strips are parallel to the axis of revolution", "correct": false}, {"text": "They are skewed at a 45-degree angle", "correct": false}, {"text": "None", "correct": false}], "explanation": "Slicing a solid of revolution perpendicular to its rotation axis creates circular cross-sectional disks." },
              { "q": "If you revolve a function around a horizontal line other than the x-axis (e.g., y = L), how is the radius r(x) expressed?", "options": [{"text": "r(x) = |f(x) - L| (Top curve minus bottom line equation)", "correct": true}, {"text": "r(x) = f(x) + L", "correct": false}, {"text": "r(x) = L - x", "correct": false}, {"text": "None", "correct": false}], "explanation": "The radius is the net distance between the boundary function curve and the axis of rotation." },
              { "q": "True or False: The Disk Method can only be used if the bounded region lies flat against the axis of revolution without any gaps.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "If there is a gap between the region and the axis of rotation, revolving it creates a hollow solid, which requires the Washer Method instead." },
              { "q": "Revolve the region bounded by y = x and the x-axis from x = 0 to x = 2 around the x-axis. Write the integral setup.", "options": [{"text": "π * Integral from 0 to 2 of x^2 dx", "correct": true}, {"text": "Integral from 0 to 2 of x^2 dx", "correct": false}, {"text": "π * Integral from 0 to 2 of x dx", "correct": false}, {"text": "None", "correct": false}], "explanation": "The radius is $r = x$. Squaring the radius and multiplying by the front coefficient $\\pi$ yields the correct volume integrand." },
              { "q": "If a region is revolved around the vertical y-axis using the Disk Method, what is the integration setup?", "options": [{"text": "π * Integral from c to d of [f(y)]^2 dy", "correct": true}, {"text": "π * Integral of [f(x)]^2 dx", "correct": false}, {"text": "Integral of f(y) dy", "correct": false}, {"text": "None", "correct": false}], "explanation": "Revolving around a vertical axis requires horizontal disk slices, which means integrating with respect to y." },
              { "q": "What basic geometric shape is formed when a single rectangle of width dx is revolved around an axis?", "options": [{"text": "A cylinder (thin coin-shaped disk)", "correct": true}, {"text": "A sphere", "correct": false}, {"text": "A cone", "correct": false}, {"text": "None", "correct": false}], "explanation": "Revolving a rectangular strip around an axis sweeps out a thin cylinder with volume $V = \\pi r^2 h$." },
              { "q": "Evaluate the volume of the solid formed by revolving y = 3 around the x-axis from x = 0 to x = 4.", "options": [{"text": "36π", "correct": true}, {"text": "12π", "correct": false}, {"text": "24π", "correct": false}, {"text": "None", "correct": false}], "explanation": "Volume = $\\pi \\int_0^4 3^2 dx = \\pi \\int_0^4 9 dx = \\pi [9x]_0^4 = 36\\pi$." },
              { "q": "Where does the factor of π come from in the disk and washer volume formulas?", "options": [{"text": "The geometric area formula for a circle ($\\pi r^2$)", "correct": true}, {"text": "The definition of arc length", "correct": false}, {"text": "A constant of integration", "correct": false}, {"text": "None", "correct": false}], "explanation": "Because revolving a region around an axis generates circular cross sections, their areas include a factor of $\\pi$." },
              { "q": "What is a common error when setting up Disk Method problems?", "options": [{"text": "Forgetting to write the π coefficient outside the integral sign", "correct": true}, {"text": "Squaring the function twice", "correct": false}, {"text": "Using a dy instead of dx layout on the horizontal axis", "correct": false}, {"text": "None", "correct": false}], "explanation": "Forgetting the factor of $\\pi$ scales the answer incorrectly and is a frequent oversight on the AP exam." }
            ]
          },
          {
            "id": "8.9",
            "topic": "8.9 Volume Solids of Revolution: Washer Method",
            "videoId": "SAHSVg7Jw_A",
            "quiz": [
              { "q": "What is the standard definite integral formula for the Washer Method around a horizontal axis?", "options": [{"text": "Volume = π * Integral from a to b of [(R(x))^2 - (r(x))^2] dx", "correct": true}, {"text": "Volume = π * Integral of (R(x) - r(x))^2 dx", "correct": false}, {"text": "Volume = Integral of R(x)^2 dx", "correct": false}, {"text": "None", "correct": false}], "explanation": "The Washer Method calculates volume by subtracting the inner hollow core from the outer solid volume: $\\pi(R^2 - r^2)$." },
              { "q": "How are the Outer Radius R(x) and Inner Radius r(x) defined geometrically?", "options": [{"text": "R(x) is the distance from the axis to the outer curve; r(x) is the distance from the axis to the inner curve", "correct": true}, {"text": "R(x) is top, r(x) is bottom always", "correct": false}, {"text": "They are evaluated from the y-intercept", "correct": false}, {"text": "None", "correct": false}], "explanation": "Radii are measured as distances starting from the axis of revolution out to the boundary curves." },
              { "q": "What is a major algebraic error students make when expanding the Washer Method integrand?", "options": [{"text": "Writing (R - r)^2 instead of the correct R^2 - r^2 format", "correct": true}, {"text": "Factoring out the π", "correct": false}, {"text": "Integrating too early", "correct": false}, {"text": "None", "correct": false}], "explanation": "The difference of two squared areas ($R^2 - r^2$) is algebraically distinct from the square of a difference ($(R - r)^2$)." },
              { "q": "If the region bounded by y = x and y = x^2 is revolved around the x-axis, identify R(x) and r(x).", "options": [{"text": "R(x) = x, r(x) = x^2", "correct": true}, {"text": "R(x) = x^2, r(x) = x", "correct": false}, {"text": "R(x) = x - x^2, r(x) = 0", "correct": false}, {"text": "None", "correct": false}], "explanation": "On the interval [0, 1], the line $y = x$ is further from the x-axis than the parabola $y = x^2$, making it the outer radius." },
              { "q": "If a region is revolved around the line y = -1, which sits below the entire bounded area, how is the outer radius R(x) calculated?", "options": [{"text": "R(x) = Top Curve - (-1) = Top Curve + 1", "correct": true}, {"text": "R(x) = Top Curve - 1", "correct": false}, {"text": "R(x) = 1 - Top Curve", "correct": false}, {"text": "None", "correct": false}], "explanation": "Distance is calculated as top value minus bottom value. This increases the radius by adding 1 unit to the distance to the rotation axis." },
              { "q": "When revolving around a vertical axis of rotation with a gap, what variable of integration is used?", "options": [{"text": "y-variable (dy layout) with radii defined as [Right - Axis]", "correct": true}, {"text": "x-variable (dx layout)", "correct": false}, {"text": "It can be either", "correct": false}, {"text": "None", "correct": false}], "explanation": "Revolving around a vertical line requires horizontal washer slices, meaning the integration occurs with respect to y." },
              { "q": "True or False: The Washer Method is equivalent to finding the volume of the outer solid and subtracting the volume of the inner hollow space.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "The Washer Method uses linear subtraction to remove the inner volume from the outer volume." },
              { "q": "If a region is rotated around an axis that passes directly through the interior of the region, can you use the standard Washer Method?", "options": [{"text": "No, the region overlaps itself and creates a solid that must be broken down or restricted", "correct": true}, {"text": "Yes, the formulas work regardless", "correct": false}, {"text": "Only if the area is symmetrical", "correct": false}, {"text": "None", "correct": false}], "explanation": "The region must lie entirely on one side of the axis of rotation for standard solid of revolution rules to apply." },
              { "q": "Write the integrand for revolving y = e^x and y = 1 around the line y = 4 (on [0, 2]).", "options": [{"text": "π * [(4 - 1)^2 - (4 - e^x)^2] dx", "correct": true}, {"text": "π * [(e^x)^2 - 1^2] dx", "correct": false}, {"text": "π * [(4 - e^x)^2 - 3^2] dx", "correct": false}, {"text": "None", "correct": false}], "explanation": "The axis is at y = 4. The curve further away is $y = 1$ ($R = 4 - 1 = 3$), and the closer curve is $y = e^x$ ($r = 4 - e^x$)." },
              { "q": "If an AP FRQ asks for a volume setup 'but do not evaluate', what components must be present for full credit?", "options": [{"text": "The π coefficient, integral symbol with limits, and the explicit squared radii expression with the correct differential (dx or dy)", "correct": true}, {"text": "Just the antiderivative function", "correct": false}, {"text": "A sketch of the solid", "correct": false}, {"text": "None", "correct": false}], "explanation": "A complete mathematical expression must include the integration limits, the constant $\\pi$, and the proper differential to receive full credit." }
            ]
          },
          {
            "id": "8.10",
            "topic": "8.10 Volume Solids of Revolution with Washers Separated Regions",
            "videoId": "UZCvQmmifEA",
            "quiz": [
              { "q": "When a bounding region is split into multiple sub-regions that must be rotated independently, how do you find the total volume?", "options": [{"text": "Set up a separate disk or washer integral for each distinct sub-region and add the volumes together", "correct": true}, {"text": "Combine the curves into a single average equation", "correct": false}, {"text": "Integrate across the entire span using the outermost boundaries only", "correct": false}, {"text": "None", "correct": false}], "explanation": "If the boundary curves intersect and switch tracking order (which curve is outer vs inner), the solid must be broken down at the intersection point into independent integration setups." },
              { "q": "Suppose region R1 is bounded by y=x and y=0 from [0,1], and region R2 is bounded by y=2-x and y=0 from [1,2]. If the combined region is rotated around the x-axis, what is the correct setup?", "options": [{"text": "π * [Integral from 0 to 1 of x^2 dx + Integral from 1 to 2 of (2-x)^2 dx]", "correct": true}, {"text": "π * Integral from 0 to 2 of (x - (2-x))^2 dx", "correct": false}, {"text": "Integral from 0 to 2 of (2-x)^2 dx", "correct": false}, {"text": "None", "correct": false}], "explanation": "The upper boundary function shifts tracking at x = 1, requiring two separate disk method integrals split at that point." },
              { "q": "True or False: If a region is split into two parts across an intersection point, you can subtract the smaller volume from the larger volume to find the total revolved volume.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "The sub-regions sit side-by-side along the axis of integration; their volumes add together to form the cumulative geometric solid." },
              { "q": "What geometric event causes a single solid of revolution problem to require a split-region layout?", "options": [{"text": "The inner or outer boundary function equations swap places at an intersection point", "correct": true}, {"text": "The region crosses the y-axis", "correct": false}, {"text": "The axis of rotation is vertical", "correct": false}, {"text": "None", "correct": false}], "explanation": "When curves cross, the analytical definition of $R(x)$ or $r(x)$ updates, forcing a split to maintain positive geometric parameters." },
              { "q": "If you are rotating a piecewise defined function around an axis, what dictates your limits of integration?", "options": [{"text": "The domain split points specified by the piecewise definition", "correct": true}, {"text": "The x-intercepts of the first piece only", "correct": false}, {"text": "The limits are always from 0 to infinity", "correct": false}, {"text": "None", "correct": false}], "explanation": "The limits of integration must align with the structural changes of the piecewise parent function." },
              { "q": "When calculating split volumes on a calculator-active section of the AP exam, what is the most efficient workflow?", "options": [{"text": "Store the intersection coordinates as variables (A, B, etc.) and reference them directly in your definite numerical integrals", "correct": true}, {"text": "Round intersection coordinates to the nearest tenth immediately", "correct": false}, {"text": "Solve every algebraic step by hand before typing it in", "correct": false}, {"text": "None", "correct": false}], "explanation": "Using full calculator precision for stored intersection limits prevents rounding truncation errors in the final volume computation." },
              { "q": "True or False: If two adjacent regions are revolved around the same axis, the constant factor π can be factored out of the entire combined addition statement.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "Since $\\pi$ is a constant multiplier on each individual integral, it can be cleanly factored out of the total summation: $\\pi( \\int f(x) dx + \\int g(x) dx )$." },
              { "q": "If region A yields a volume of 5π when rotated, and adjacent region B yields a volume of 3π when rotated, what is the combined volume?", "options": [{"text": "8π", "correct": true}, {"text": "2π", "correct": false}, {"text": "15π^2", "correct": false}, {"text": "None", "correct": false}], "explanation": "Volumes of non-overlapping adjacent solids add linearly." },
              { "q": "What should you construct first when solving a complex multi-region volume problem on an FRQ?", "options": [{"text": "A clearly labeled sketch highlighting the intersection points and vertical or horizontal tracking lines", "correct": true}, {"text": "The final derivative step", "correct": false}, {"text": "An optimization constraint equation", "correct": false}, {"text": "None", "correct": false}], "explanation": "Visualizing where boundaries shift prevents using the wrong inner or outer radius over an interval segment." },
              { "q": "If a region requires a split integration approach when tracking vertically (with respect to x), what alternative approach might avoid the split?", "options": [{"text": "Inverting the equations and integrating horizontally with respect to y", "correct": true}, {"text": "Rotating around a different axis", "correct": false}, {"text": "Using a left Riemann sum", "correct": false}, {"text": "None", "correct": false}], "explanation": "A region that has shifting top/bottom profiles might feature a completely uniform single right/left profile when viewed horizontally." }
            ]
          },
          {
            "id": "8.11",
            "topic": "8.11 Volume Solids of Revolution: Shell Method",
            "videoId": "dN7mS08yrc8",
            "quiz": [
              { "q": "What is the general integral formula for the Shell Method when revolving a region bounded by f(x) around the vertical y-axis?", "options": [{"text": "Volume = 2π * Integral from a to b of x * f(x) dx", "correct": true}, {"text": "Volume = π * Integral of [f(x)]^2 dx", "correct": false}, {"text": "Volume = 2π * Integral of [f(x)]^2 dx", "correct": false}, {"text": "None", "correct": false}], "explanation": "The Shell Method tracks cylindrical shells with volume $V = 2\\pi \\cdot \\text{radius} \\cdot \\text{height} \\cdot \\text{thickness}$, where radius is $x$ and height is $f(x)$." },
              { "q": "When using the Shell Method, what is the geometric relationship between the representative rectangular slices and the axis of revolution?", "options": [{"text": "The strips are parallel to the axis of revolution", "correct": true}, {"text": "The strips are perpendicular to the axis of revolution", "correct": false}, {"text": "They are unrelated", "correct": false}, {"text": "None", "correct": false}], "explanation": "Unlike the disk/washer methods, the Shell Method uses rectangular slices sliced completely parallel to the rotation axis." },
              { "q": "If a region is revolved around a horizontal axis using the Shell Method, what variable of integration must be used?", "options": [{"text": "y-variable (dy layout)", "correct": true}, {"text": "x-variable (dx layout)", "correct": false}, {"text": "Either variable", "correct": false}, {"text": "None", "correct": false}], "explanation": "Parallel slicing along a horizontal rotation axis creates horizontal shell cylinders, requiring integration with respect to y." },
              { "q": "If you are revolving a region around the vertical line x = -2 using the Shell Method, how is the radius shell dimension expressed?", "options": [{"text": "Radius = x - (-2) = x + 2", "correct": true}, {"text": "Radius = x - 2", "correct": false}, {"text": "Radius = 2 - x", "correct": false}, {"text": "None", "correct": false}], "explanation": "The distance from a coordinate x to the line x = -2 is calculated as $x - (-2) = x + 2$." },
              { "q": "True or False: While the Shell Method is useful to know, any solid of revolution on the AP Calculus AB exam can technically be set up using Disks or Washers by inverting the equations.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "The Shell Method is not explicitly tested by name on the AP Calculus AB exam; it serves as an alternative approach to solve problems that can also be modeled with disks/washers by changing the integration axis." },
              { "q": "What is the structural definition of the front constant multiplier in the Shell Method formula?", "options": [{"text": "2π, originating from the circumference of a circle", "correct": true}, {"text": "π, originating from circular area", "correct": false}, {"text": "π/2", "correct": false}, {"text": "None", "correct": false}], "explanation": "Unrolling a cylindrical shell opens it into a flat rectangular slab whose length matches the circular circumference formula $2\\pi r$." },
              { "q": "If the height of a shell is bounded between a top curve f(x) and a bottom curve g(x), how is the height component written inside the integrand?", "options": [{"text": "Height = f(x) - g(x)", "correct": true}, {"text": "Height = f(x) + g(x)", "correct": false}, {"text": "Height = [f(x) - g(x)]^2", "correct": false}, {"text": "None", "correct": false}], "explanation": "The physical height of the parallel shell rectangle is the direct distance from the upper function down to the lower function." },
              { "q": "Evaluate the volume integral setup using shells for y = x^2 from x = 0 to x = 2 rotated around the y-axis.", "options": [{"text": "2π * Integral from 0 to 2 of x^3 dx", "correct": true}, {"text": "π * Integral from 0 to 2 of x^4 dx", "correct": false}, {"text": "2π * Integral from 0 to 2 of x^2 dx", "correct": false}, {"text": "None", "correct": false}], "explanation": "Radius is $x$, height is $x^2$. Multiplying them gives $x \\cdot x^2 = x^3$, scaled by the front $2\\pi$ coefficient." },
              { "q": "What is a common error when transitioning between Washer setups and Shell setups?", "options": [{"text": "Squaring the radius or height functions inside the Shell integral by mistake", "correct": true}, {"text": "Forgetting to integrate", "correct": false}, {"text": "Using the wrong limits", "correct": false}, {"text": "None", "correct": false}], "explanation": "The Shell formula uses linear dimensions ($2\\pi \\cdot r \\cdot h$) inside the integral, not squared functions like the washer method ($\\pi(R^2 - r^2)$)." },
              { "q": "If a shell radius is defined along y, and the region is bounded on the right by x = 4 and the left by x = y, what is the volume setup around the x-axis?", "options": [{"text": "2π * Integral of y * (4 - y) dy", "correct": true}, {"text": "2π * Integral of x * (4 - x) dx", "correct": false}, {"text": "π * Integral of (4^2 - y^2) dy", "correct": false}, {"text": "None", "correct": false}], "explanation": "Revolving around the horizontal x-axis using shells uses a radius of $y$ and a horizontal height profile of $(4 - y)$ integrated with respect to y." }
            ]
          },
          {
            "id": "8.12",
            "topic": "8.12 Length of a Smooth Curve Azimuthal Parameters Planar Regions",
            "videoId": "-syuzvTJV4o",
            "quiz": [
              { "q": "What is the primary underlying geometric foundation used to derive the arc length formula for a curve?", "options": [{"text": "The Pythagorean Theorem applied to tiny differential segments", "correct": true}, {"text": "The area of a circle section", "correct": false}, {"text": "The definition of an asymptote", "correct": false}, {"text": "None", "correct": false}], "explanation": "Arc length sums up infinitesimally small hypotenuse segments: $dL = \\sqrt{dx^2 + dy^2}$." },
              { "q": "What is the standard definite integral formula for the length of a smooth curve y = f(x) from x = a to x = b?", "options": [{"text": "Integral from a to b of sqrt(1 + [f'(x)]^2) dx", "correct": true}, {"text": "Integral from a to b of sqrt(1 + f(x)) dx", "correct": false}, {"text": "Integral from a to b of [f'(x)]^2 dx", "correct": false}, {"text": "None", "correct": false}], "explanation": "Factoring out $dx$ from the differential hypotenuse structure yields the standard arc length integrand expression: $\\sqrt{1 + [f'(x)]^2}$." },
              { "q": "What condition must be satisfied by a function across an interval to be classified as a 'smooth curve' eligible for arc length calculation?", "options": [{"text": "The first derivative f'(x) must be continuous on the interval", "correct": true}, {"text": "The function must be a polynomial", "correct": false}, {"text": "The function must equal zero at endpoints", "correct": false}, {"text": "None", "correct": false}], "explanation": "A curve is smooth if its derivative is continuous, meaning it has no sharp turns, cusps, or vertical breaks across the interval." },
              { "q": "If a curve is defined as an expression of y ($x = g(y)$) from y = c to y = d, what is the arc length formula?", "options": [{"text": "Integral from c to d of sqrt(1 + [g'(y)]^2) dy", "correct": true}, {"text": "Integral of sqrt(1 + g(y)) dy", "correct": false}, {"text": "Integral of [g(y)]^2 dy", "correct": false}, {"text": "None", "correct": false}], "explanation": "The formula adapts symmetrically when tracking along the vertical axis, using the derivative with respect to y ($dx/dy$)." },
              { "q": "True or False: Arc length calculations on the AP Calculus AB exam are frequently calculator-active due to the algebraic complexity of the radical integrand.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "The radical structure $\\sqrt{1 + [f'(x)]^2}$ rarely generates a clean expression that can be integrated easily by hand, making it a common topic for numerical calculator integration." },
              { "q": "If f(x) = 3x + 2, what is the arc length from x = 1 to x = 4 solved analytically?", "options": [{"text": "3 * sqrt(10)", "correct": true}, {"text": "9", "correct": false}, {"text": "sqrt(10)", "correct": false}, {"text": "None", "correct": false}], "explanation": "f'(x) = 3. Integrand = $\\sqrt{1 + 3^2} = \\sqrt{10}$. Integral of $\\sqrt{10}$ from 1 to 4 is $\\sqrt{10} \\cdot (4 - 1) = 3\\sqrt{10}$." },
              { "q": "What is a common student notation error when setting up the arc length integral?", "options": [{"text": "Plugging the original function f(x) into the formula instead of its derivative f'(x)", "correct": true}, {"text": "Forgetting to include the radical sign", "correct": false}, {"text": "Multiplying the integral by π", "correct": false}, {"text": "None", "correct": false}], "explanation": "The formula requires squaring the rate of change ($f'(x)$), not the parent function value ($f(x)$)." },
              { "q": "If an AP question asks you to set up but not evaluate an integral for the perimeter of a region bounded by y = x^2 and y = 4, what elements must you add?", "options": [{"text": "The boundary line segment length (8 units) plus the arc length integral of the curved section", "correct": true}, {"text": "Only the integral of the curve", "correct": false}, {"text": "The total area integral", "correct": false}, {"text": "None", "correct": false}], "explanation": "Perimeter requires summing all boundary edges, which includes both curved segments (found via the arc length integral) and flat boundary lines." },
              { "q": "Calculate the derivative component needed for the arc length of y = x^(3/2).", "options": [{"text": "(3/2) * x^(1/2)", "correct": true}, {"text": "x^(3/2)", "correct": false}, {"text": "(2/5) * x^(5/2)", "correct": false}, {"text": "None", "correct": false}], "explanation": "Applying the derivative power rule gives $y' = \\frac{3}{2}x^{1/2}$." },
              { "q": "True or False: The arc length of a curve can be a negative value if the function is decreasing.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "Because the integrand squares the derivative and sits inside a principal square root, the value is strictly positive, reflecting a physical distance path length." }
            ]
          },
          {
          "id": "8.13",
          "topic": "8.13 The Arc Length of a Smooth, Planar Curve and Distance Traveled",
          "videoId": "t_F7Ug23zbw",
          "quiz": [
            { "q": "What is the standard definite integral formula for the arc length of a smooth parametric curve on the interval [a, b]?", "options": [{"text": "Integral from a to b of sqrt([dx/dt]^2 + [dy/dt]^2) dt", "correct": true}, {"text": "Integral from a to b of sqrt(1 + [dy/dx]^2) dx", "correct": false}, {"text": "Integral from a to b of (dx/dt + dy/dt) dt", "correct": false}, {"text": "None", "correct": false}], "explanation": "Derived from the Pythagorean theorem applied to infinitesimally small vector steps, the total length along a parametric path evaluates as the integral of speed over time." },
            { "q": "The integrand expression $\\sqrt{(dx/dt)^2 + (dy/dt)^2}$ inside the parametric arc length formula is equivalent to what physical value?", "options": [{"text": "The speed of the particle", "correct": true}, {"text": "The acceleration vector magnitude", "correct": false}, {"text": "The net displacement vector", "correct": false}, {"text": "None", "correct": false}], "explanation": "Speed is the scalar magnitude of the velocity vector. Integrating speed over a time interval calculates the complete physical distance traveled along the curve path." },
            { "q": "What condition must be met by the component derivatives $dx/dt$ and $dy/dt$ across the interval for the curve to be 'smooth'?", "options": [{"text": "They must be continuous and not simultaneously zero", "correct": true}, {"text": "They must be linear functions", "correct": false}, {"text": "They must equal each other", "correct": false}, {"text": "None", "correct": false}], "explanation": "A smooth curve requires continuous derivative components so that there are no abrupt breaks, loops, sharp points, or cusps on the interval path." },
            { "q": "If a particle moves along a path such that $dx/dt = t$ and $dy/dt = 1$, write out the radical expression inside the distance integral.", "options": [{"text": "sqrt(t^2 + 1)", "correct": true}, {"text": "sqrt(t + 1)", "correct": false}, {"text": "t^2 + 1", "correct": false}, {"text": "None", "correct": false}], "explanation": "Squaring the individual component functions and adding them together inside the square root yields $\\sqrt{(t)^2 + (1)^2} = \\sqrt{t^2 + 1}$." },
            { "q": "If a particle traces out a complete circle of radius $R$ exactly twice from $t = 0$ to $t = 2\\pi$, what value will the arc length integral evaluate to?", "options": [{"text": "4πR", "correct": true}, {"text": "2πR", "correct": false}, {"text": "0", "correct": false}, {"text": "None", "correct": false}], "explanation": "The arc length integral tracks distance traveled dynamically over time. Since it loops around the perimeter ($2\\pi R$) twice, the total accumulated value doubles to $4\\pi R$." },
            { "q": "True or False: The distance traveled value calculated via a parametric arc length integral can be negative if the particle moves to the left.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "Because the speed component involves squared terms inside a principal square root, the integrand is strictly non-negative, meaning distance traveled is always $\\geq 0$." },
            { "q": "If an AP free-response question asks for 'the total distance traveled' of a vector-valued position function $r(t) = \\langle x(t), y(t) \\rangle$, what operation is performed?", "options": [{"text": "Evaluate the definite integral of the magnitude of the velocity vector: $\\int_a^b ||v(t)||\\,dt$", "correct": true}, {"text": "Find the magnitude of the displacement change", "correct": false}, {"text": "Integrate the position components separately", "correct": false}, {"text": "None", "correct": false}], "explanation": "The magnitude of the velocity vector is identical to the speed formula, making total distance traveled structurally synonymous with the parametric arc length framework." },
            { "q": "What base geometric rule is generalized by the arc length integral equation template?", "options": [{"text": "The Pythagorean Theorem", "correct": true}, {"text": "The Law of Sines", "correct": false}, {"text": "The Area of an Ellipse", "correct": false}, {"text": "None", "correct": false}], "explanation": "Summing an infinite chain of straight hypotenuses ($dL = \\sqrt{dx^2 + dy^2}$) approximates the total curved path distance down to an exact parameter." },
            { "q": "If $dx/dt = 3$ and $dy/dt = 4$ constant over the interval $t = 0$ to $t = 5$, what is the total distance traveled?", "options": [{"text": "25", "correct": true}, {"text": "5", "correct": false}, {"text": "35", "correct": false}, {"text": "None", "correct": false}], "explanation": "Speed = $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$. Distance = $\\int_0^5 5\\,dt = 5 \\cdot (5 - 0) = 25$." },
            { "q": "Why are parametric arc length questions on the AP Calculus BC exam frequently calculator-active?", "options": [{"text": "The radical combination of squared functions rarely yields an expression that can be integrated cleanly by hand", "correct": true}, {"text": "Calculators are required to process variables", "correct": false}, {"text": "To look up trigonometric graphs", "correct": false}, {"text": "None", "correct": false}], "explanation": "Most square roots of added squares do not possess neat analytical antiderivatives, requiring the calculator's numerical integration function (`fnInt`) to compute a value." }
          ]
        }
        ]
      },
            "unit-9": {
        "title": "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
        "lessons": [
          {
            "id": "9.1",
            "topic": "9.1 Defining and Differentiating Parametric Equations",
            "videoId": "T1jyGI9kKeY",
            "quiz": [
              { "q": "If x = f(t) and y = g(t), what is the formula for the first derivative dy/dx?", "options": [{"text": "(dy/dt) / (dx/dt)", "correct": true}, {"text": "(dx/dt) / (dy/dt)", "correct": false}, {"text": "(dy/dt) * (dx/dt)", "correct": false}, {"text": "None", "correct": false}], "explanation": "By the chain rule, dy/dx is the rate of change of y with respect to t divided by the rate of change of x with respect to t." },
              { "q": "Where does a parametric curve have a horizontal tangent line?", "options": [{"text": "Where dy/dt = 0 and dx/dt ≠ 0", "correct": true}, {"text": "Where dx/dt = 0 and dy/dt ≠ 0", "correct": false}, {"text": "Where both equal 0", "correct": false}, {"text": "None", "correct": false}], "explanation": "A horizontal tangent requires a slope of zero, meaning the numerator dy/dt must be zero while the denominator remains non-zero." },
              { "q": "Where does a parametric curve have a vertical tangent line?", "options": [{"text": "Where dx/dt = 0 and dy/dt ≠ 0", "correct": true}, {"text": "Where dy/dt = 0 and dx/dt ≠ 0", "correct": false}, {"text": "Where y = 0", "correct": false}, {"text": "None", "correct": false}], "explanation": "A vertical tangent occurs where the slope is undefined, which happens when the denominator dx/dt equals zero." },
              { "q": "If x = t^2 and y = t^3, what is dy/dx in terms of t?", "options": [{"text": "(3/2)t", "correct": true}, {"text": "(2/3)t", "correct": false}, {"text": "3t^2", "correct": false}, {"text": "None", "correct": false}], "explanation": "dx/dt = 2t and dy/dt = 3t^2. Dividing them gives (3t^2) / (2t) = (3/2)t." },
              { "q": "True or False: Eliminating the parameter t is always required to differentiate a parametric equation.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "You can find dy/dx directly in terms of t using parametric differentiation without converting back to rectangular form." },
              { "q": "What parameter is typically used to represent the independent variable in parametric motion equations?", "options": [{"text": "t (usually representing time)", "correct": true}, {"text": "x", "correct": false}, {"text": "θ", "correct": false}, {"text": "None", "correct": false}], "explanation": "Parametric paths describe positions x and y independently, usually stepping forward across a shared timeline t." },
              { "q": "If a parametric particle is at rest, what must be true about its component derivatives?", "options": [{"text": "Both dx/dt = 0 and dy/dt = 0 simultaneously", "correct": true}, {"text": "Only dx/dt = 0", "correct": false}, {"text": "Only dy/dt = 0", "correct": false}, {"text": "None", "correct": false}], "explanation": "An object is completely at rest only if it is stopped horizontally and vertically at the same moment." },
              { "q": "Find dx/dt if x = cos(t).", "options": [{"text": "-sin(t)", "correct": true}, {"text": "sin(t)", "correct": false}, {"text": "-cos(t)", "correct": false}, {"text": "None", "correct": false}], "explanation": "The derivative of cos(t) with respect to t is standardly -sin(t)." },
              { "q": "If dx/dt is positive, how is the particle moving horizontally?", "options": [{"text": "To the right", "correct": true}, {"text": "To the left", "correct": false}, {"text": "Stationary", "correct": false}, {"text": "None", "correct": false}], "explanation": "A positive horizontal rate of change means the x-coordinate is growing larger (moving right)." },
              { "q": "If dy/dt is negative, how is the particle moving vertically?", "options": [{"text": "Downward", "correct": true}, {"text": "Upward", "correct": false}, {"text": "Stationary", "correct": false}, {"text": "None", "correct": false}], "explanation": "A negative vertical rate of change means the y-coordinate is decreasing (moving down)." }
            ]
          },
          {
            "id": "9.2",
            "topic": "9.2 Second Derivatives of Parametric Equations",
            "videoId": "RhhMq_nsvgQ",
            "quiz": [
              { "q": "What is the correct formal template formula for the second derivative d^2y/dx^2 of a parametric curve?", "options": [{"text": "[d/dt (dy/dx)] / (dx/dt)", "correct": true}, {"text": "(d^2y/dt^2) / (d^2x/dt^2)", "correct": false}, {"text": "d/dt (dy/dx)", "correct": false}, {"text": "None", "correct": false}], "explanation": "To find the rate of change of the slope with respect to x, you differentiate the slope function with respect to t, and divide by dx/dt again." },
              { "q": "What is the most dangerous common student trap when finding a parametric second derivative?", "options": [{"text": "Simply dividing the second derivative of y by the second derivative of x", "correct": true}, {"text": "Forgetting the chain rule", "correct": false}, {"text": "Using radians instead of degrees", "correct": false}, {"text": "None", "correct": false}], "explanation": "Dividing y'' by x'' completely ignores the implicit chain rule required when differentiating with respect to x." },
              { "q": "If dy/dx = 3t^2 and x = t^2, find d^2y/dx^2.", "options": [{"text": "3", "correct": true}, {"text": "6t", "correct": false}, {"text": "3t", "correct": false}, {"text": "None", "correct": false}], "explanation": "d/dt(dy/dx) = 6t. dx/dt = 2t. Dividing them gives 6t / 2t = 3." },
              { "q": "What structural characteristic of a parent curve does a negative d^2y/dx^2 indicate?", "options": [{"text": "The graph is concave down", "correct": true}, {"text": "The graph is concave up", "correct": false}, {"text": "The graph is decreasing", "correct": false}, {"text": "None", "correct": false}], "explanation": "Just like standard coordinates, the second derivative of y with respect to x controls the visual concavity profile." },
              { "q": "True or False: The denominator used in calculating the first derivative and the second derivative of a parametric curve is identical.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "Both operations divide by the primary horizontal scaling factor, dx/dt." },
              { "q": "If d/dt(dy/dx) = 12t^2 and dx/dt = 2t, what is the second derivative value?", "options": [{"text": "6t", "correct": true}, {"text": "24t^3", "correct": false}, {"text": "6t^2", "correct": false}, {"text": "None", "correct": false}], "explanation": "12t^2 / 2t = 6t." },
              { "q": "Can you evaluate the concavity of a parametric curve at a specific point without knowing the exact Cartesian function?", "options": [{"text": "Yes, by computing the numerical sign of the parametric second derivative at that t-value", "correct": true}, {"text": "No, it is impossible", "correct": false}, {"text": "Only at the origin", "correct": false}, {"text": "None", "correct": false}], "explanation": "The parametric formulas yield exact values for structural characteristics like slope and concavity directly." },
              { "q": "If dx/dt = 3 and d/dt(dy/dx) = 9, what is the value of d^2y/dx^2?", "options": [{"text": "3", "correct": true}, {"text": "27", "correct": false}, {"text": "1/3", "correct": false}, {"text": "None", "correct": false}], "explanation": "Dividing the components gives 9 / 3 = 3." },
              { "q": "If dy/dx is constant, what is the value of the second derivative?", "options": [{"text": "0", "correct": true}, {"text": "1", "correct": false}, {"text": "Undefined", "correct": false}, {"text": "None", "correct": false}], "explanation": "The derivative of a constant value is zero, so the numerator of the second derivative equation collapses to zero." },
              { "q": "Why is the second derivative formula structured with an extra division by dx/dt?", "options": [{"text": "To convert a rate per unit time into a rate per unit horizontal distance x", "correct": true}, {"text": "To match the power rule template", "correct": false}, {"text": "To clear out common denominators", "correct": false}, {"text": "None", "correct": false}], "explanation": "Since the independent variable is x, any differentiation loop with respect to t requires scaling by dt/dx to adjust units." }
            ]
          },
          {
            "id": "9.3",
            "topic": "9.3 Arc Lengths of Curves Given by Parametric Equations",
            "videoId": "EB6ZwRPsjXY",
            "quiz": [
              { "q": "What is the definite integral formula for computing the arc length of a parametric curve on the interval [a, b]?", "options": [{"text": "Integral from a to b of sqrt([dx/dt]^2 + [dy/dt]^2) dt", "correct": true}, {"text": "Integral of sqrt(1 + [dy/dx]^2) dx", "correct": false}, {"text": "Integral of (dx/dt + dy/dt) dt", "correct": false}, {"text": "None", "correct": false}], "explanation": "Derived from the Pythagorean theorem, the total distance along a parametric path unrolls as the accumulation of small hypotenuse segments." },
              { "q": "The integrand expression inside the parametric arc length formula is identical to what physical measurement?", "options": [{"text": "The speed of the particle", "correct": true}, {"text": "The acceleration vector magnitude", "correct": false}, {"text": "The displacement", "correct": false}, {"text": "None", "correct": false}], "explanation": "Speed is defined as $\\sqrt{(dx/dt)^2 + (dy/dt)^2}$. Integrating speed over time calculates total distance traveled (arc length)." },
              { "q": "If dx/dt = 3 and dy/dt = 4 on the interval t=0 to t=2, evaluate the arc length.", "options": [{"text": "10", "correct": true}, {"text": "5", "correct": false}, {"text": "14", "correct": false}, {"text": "None", "correct": false}], "explanation": "Integrand = $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$. The integral of 5 from 0 to 2 is $5 \\times (2 - 0) = 10$." },
              { "q": "True or False: The limits of integration (a and b) in the parametric arc length formula represent values of x.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "The boundaries match the limits of the independent parameter variable, which are values of t." },
              { "q": "What happens to the calculated arc length if a particle traces over the exact same path twice across the integrated interval?", "options": [{"text": "The integral will double the actual physical path length", "correct": true}, {"text": "It stays the same", "correct": false}, {"text": "It drops to zero", "correct": false}, {"text": "None", "correct": false}], "explanation": "Integration continuously accumulates speed over time, tracking tracking loops regardless of spatial overlapping." },
              { "q": "If dx/dt = t and dy/dt = 1, write out the internal radical setup.", "options": [{"text": "sqrt(t^2 + 1)", "correct": true}, {"text": "sqrt(t + 1)", "correct": false}, {"text": "t^2 + 1", "correct": false}, {"text": "None", "correct": false}], "explanation": "Squaring the individual rate components directly generates the radicand expression $t^2 + 1$." },
              { "q": "True or False: Parametric arc length can be evaluated for curves that cross over themselves.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "Because coordinates x and y are isolated via time, loops do not disrupt the mathematical tracking of linear path length." },
              { "q": "What basic geometric rule is generalized by the arc length calculus formula?", "options": [{"text": "The Pythagorean Theorem", "correct": true}, {"text": "The Law of Cosines", "correct": false}, {"text": "The Area of a Triangle", "correct": false}, {"text": "None", "correct": false}], "explanation": "Summing infinite tiny straight hypotenuses approximates the overall curved perimeter distance." },
              { "q": "If an AP question says 'write but do not evaluate an integral for distance traveled,' what must you omit?", "options": [{"text": "Do not execute any manual analytical antiderivatives or numeric calculations", "correct": true}, {"text": "Omit the limits", "correct": false}, {"text": "Omit the radical sign", "correct": false}, {"text": "None", "correct": false}], "explanation": "Setting up the full integral statement with boundaries and differentials fulfills the prompt requirements completely." },
              { "q": "Why are parametric arc length questions frequently calculator-active?", "options": [{"text": "The radical combination of squared terms rarely simplifies into a format that can be solved easily by hand", "correct": true}, {"text": "To save time", "correct": false}, {"text": "Calculators are required to read parameter data", "correct": false}, {"text": "None", "correct": false}], "explanation": "Most square roots of added functions do not possess clear analytical antiderivatives, requiring a numerical solver." }
            ]
          },
          {
            "id": "9.4",
            "topic": "9.4 Defining and Differentiating Vector-Valued Functions",
            "videoId": "iZyFv-eBWDc",
            "quiz": [
              { "q": "What is a vector-valued function in a 2D space?", "options": [{"text": "A function that takes a scalar input t and outputs a vector ⟨x(t), y(t)⟩", "correct": true}, {"text": "A standard multi-variable function", "correct": false}, {"text": "A single number output matrix", "correct": false}, {"text": "None", "correct": false}], "explanation": "Vector-valued functions organize parametric components into an ordered vector format." },
              { "q": "How do you differentiate a vector-valued function r(t) = ⟨x(t), y(t)⟩?", "options": [{"text": "Differentiate each component function independently: r'(t) = ⟨x'(t), y'(t)⟩", "correct": true}, {"text": "Use the quotient rule on components", "correct": false}, {"text": "Find the magnitude first", "correct": false}, {"text": "None", "correct": false}], "explanation": "Derivatives of vector functions operate term-by-term on each component." },
              { "q": "If position is r(t) = ⟨t^3, sin(t)⟩, what is the velocity vector v(t)?", "options": [{"text": "⟨3t^2, cos(t)⟩", "correct": true}, {"text": "⟨3t^2, -cos(t)⟩", "correct": false}, {"text": "3t^2 + cos(t)", "correct": false}, {"text": "None", "correct": false}], "explanation": "Differentiating component by component yields $3t^2$ for x and $\\cos(t)$ for y." },
              { "q": "What notation describes the derivative vector of a velocity vector?", "options": [{"text": "Acceleration vector, a(t) = v'(t) = r''(t)", "correct": true}, {"text": "Speed factor", "correct": false}, {"text": "Displacement vector", "correct": false}, {"text": "None", "correct": false}], "explanation": "Acceleration tracks the instantaneous rate of change of the components inside the velocity vector." },
              { "q": "True or False: The derivative of a vector-valued function is another vector.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "Differentiating preserves the structural tracking layout, producing a vector that points in the direction of motion." },
              { "q": "Find the acceleration vector at t = 1 if v(t) = ⟨4t^3, 6t⟩.", "options": [{"text": "⟨12, 6⟩", "options": [{"text": "⟨12, 6⟩", "correct": true}, {"text": "⟨4, 6⟩", "correct": false}, {"text": "⟨12t^2, 6⟩", "correct": false}, {"text": "None", "correct": false}], "explanation": "a(t) = ⟨12t^2, 6⟩. Evaluating at t = 1 yields ⟨12, 6⟩." }], "explanation": "a(t) = ⟨12t^2, 6⟩. Evaluating at t = 1 yields ⟨12, 6⟩." },
              { "q": "What is the visual direction of a velocity vector relative to the curve path?", "options": [{"text": "It is tangent to the path of motion", "correct": true}, {"text": "It is perpendicular to the path", "correct": false}, {"text": "It points toward the origin", "correct": false}, {"text": "None", "correct": false}], "explanation": "The velocity vector points directly along the instantaneous line of travel tangent to the curve." },
              { "q": "If r(t) = ⟨5, 2t⟩, find r'(t).", "options": [{"text": "⟨0, 2⟩", "correct": true}, {"text": "⟨5, 2⟩", "correct": false}, {"text": "2", "correct": false}, {"text": "None", "correct": false}], "explanation": "The derivative of a constant 5 is 0; the derivative of 2t is 2." },
              { "q": "What operation converts a position vector into an acceleration vector?", "options": [{"text": "Differentiating twice consecutively", "correct": true}, {"text": "Integrating twice", "correct": false}, {"text": "Finding the magnitude", "correct": false}, {"text": "None", "correct": false}], "explanation": "Deriving position yields velocity; deriving a second time yields acceleration." },
              { "q": "True or False: The components of a vector-valued function can be integrated but cannot be differentiated if they contain trigonometry.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "Any differentiable single-variable equation can be handled within a vector component structure." }
            ]
          },
          {
            "id": "9.5",
            "topic": "9.5 Integrating Vector-Valued Functions",
            "videoId": "LHIQfNu5fT8",
            "quiz": [
              { "q": "How do you evaluate the indefinite integral of a vector-valued function?", "options": [{"text": "Integrate each component function separately and add a constant vector ⟨C_1, C_2⟩", "correct": true}, {"text": "Integrate only the x component", "correct": false}, {"text": "Combine components into a single scalar integral", "correct": false}, {"text": "None", "correct": false}], "explanation": "Integration distributes component-by-component, with each section generating its own integration constant." },
              { "q": "If v(t) = ⟨2t, 3⟩, find the general indefinite integral vector.", "options": [{"text": "⟨t^2 + C_1, 3t + C_2⟩", "correct": true}, {"text": "⟨t^2, 3t⟩", "correct": false}, "⟨2, 0⟩", {"text": "None", "correct": false}], "explanation": "Antiderivatives: ∫2t dt = t^2 + C1 and ∫3 dt = 3t + C2." },
              { "q": "How do you evaluate a DEFINITE vector integral from a to b?", "options": [{"text": "Evaluate the definite integral for each component function independently over [a, b]", "correct": true}, {"text": "Subtract the vectors first", "correct": false}, {"text": "The output is a scalar number", "correct": false}, {"text": "None", "correct": false}], "explanation": "A definite vector integral calculates net area/change for each track component, returning a definitive evaluation vector." },
              { "q": "If you are given an initial position vector r(0) = ⟨1, 2⟩ and a velocity vector to integrate, what role does r(0) play?", "options": [{"text": "It acts as the initial condition vector to solve for the constants C_1 and C_2", "correct": true}, {"text": "It is ignored", "correct": false}, {"text": "It is multiplied by the integral", "correct": false}, {"text": "None", "correct": false}], "explanation": "Initial vectors establish the baseline position offsets at time zero to pinpoint a particular solution path." },
              { "q": "Evaluate the definite integral from 0 to 1 of ⟨3t^2, 2t⟩ dt.", "options": [{"text": "⟨1, 1⟩", "correct": true}, {"text": "⟨0, 0⟩", "correct": false}, {"text": "2", "correct": false}, {"text": "None", "correct": false}], "explanation": "Components integrate to $t^3$ and $t^2$. Evaluating from 0 to 1 yields $1^3 - 0^3 = 1$ and $1^2 - 0^2 = 1$, giving ⟨1, 1⟩." },
              { "q": "True or False: Integrating an acceleration vector yields a position vector directly.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "Integrating acceleration yields a velocity vector; you must integrate velocity to uncover the position vector." },
              { "q": "What is the notation for the constant vector of integration?", "options": [{"text": "C = ⟨C_1, C_2⟩", "correct": true}, {"text": "+ C", "correct": false}, {"text": "0", "correct": false}, {"text": "None", "correct": false}], "explanation": "Because it applies to a multi-component vector structure, the constant is an ordered pair array." },
              { "q": "If the integral of a velocity vector over [1, 4] is ⟨5, -2⟩, what does this vector represent?", "options": [{"text": "The horizontal and vertical net displacement of the particle", "correct": true}, {"text": "The final speed vector", "correct": false}, {"text": "The total distance", "correct": false}, {"text": "None", "correct": false}], "explanation": "Integrating velocity directly tracks components linearly, providing the net directional displacement vector." },
              { "q": "True or False: Every standard integration technique (like u-substitution) can be applied inside a vector component integral.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "Each component functions as a standard single-variable calculus integral." },
              { "q": "What is the net accumulation format for position vector r(t) using an initial position r(a)?", "options": [{"text": "r(t) = r(a) + Integral from a to t of v(x) dx", "correct": true}, {"text": "r(t) = Integral of v(t) dt", "correct": false}, {"text": "r(t) = r'(a)", "correct": false}, {"text": "None", "correct": false}], "explanation": "The position at any time t is the starting coordinates vector plus the accumulated component displacements." }
            ]
          },
          {
            "id": "9.6",
            "topic": "9.6 Solving Motion Problems Using Parametric and Vector-Valued Functions",
            "videoId": "2GQjDXn1uBw",
            "quiz": [
              { "q": "How is the speed of a particle modeled by a vector-valued function calculated?", "options": [{"text": "The magnitude of the velocity vector: sqrt([dx/dt]^2 + [dy/dt]^2)", "correct": true}, {"text": "The derivative of velocity", "correct": false}, {"text": "dx/dt + dy/dt", "correct": false}, {"text": "None", "correct": false}], "explanation": "Speed is the absolute scalar magnitude of the velocity vector components at an instant." },
              { "q": "What is the distinction between velocity and speed in planar motion?", "options": [{"text": "Velocity is a vector specifying direction; speed is a scalar number specifying magnitude", "correct": true}, {"text": "They are identical parameters", "correct": false}, {"text": "Speed is a vector", "correct": false}, {"text": "None", "correct": false}], "explanation": "Velocity preserves directional tracking component splits, while speed simplifies that data into a single scalar value." },
              { "q": "If a particle moves along a path with velocity vector v(t) = ⟨3, 4⟩, what is its constant speed?", "options": [{"text": "5", "correct": true}, {"text": "7", "correct": false}, {"text": "25", "correct": false}, {"text": "None", "correct": false}], "explanation": "Magnitude = $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$." },
              { "q": "How do you calculate total distance traveled in planar vector motion over [a, b]?", "options": [{"text": "Integrate the scalar speed function: Integral from a to b of sqrt([dx/dt]^2 + [dy/dt]^2) dt", "correct": true}, {"text": "Integrate the velocity vector directly", "correct": false}, {"text": "Find the change in acceleration", "correct": false}, {"text": "None", "correct": false}], "explanation": "Accumulating speed over a time span tracks every unit of travel along the path, matching the arc length formula." },
              { "q": "True or False: The displacement vector equals the total distance traveled value.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "Displacement is a straight line vector measuring start-to-end offset. Total distance is a scalar tracking the complete convoluted path length." },
              { "q": "A particle has position vector r(t). Its acceleration vector satisfies what derivative relationship?", "options": [{"text": "a(t) = r''(t)", "correct": true}, {"text": "a(t) = r'(t)", "correct": false}, {"text": "a(t) = Integral of v(t) dt", "correct": false}, {"text": "None", "correct": false}], "explanation": "Acceleration is the second derivative of the position components vector." },
              { "q": "If a particle's horizontal velocity component dx/dt = 0 at t = 2, what does this imply about its motion?", "options": [{"text": "The particle has stopped moving horizontally and is only moving vertically", "correct": true}, {"text": "The particle is entirely at rest", "correct": false}, {"text": "The particle is turning around vertically", "correct": false}, {"text": "None", "correct": false}], "explanation": "A zero component indicates that motion along that specific axis has paused momentarily." },
              { "q": "What formula defines the magnitude of an acceleration vector ⟨x''(t), y''(t)⟩?", "options": [{"text": "sqrt([x''(t)]^2 + [y''(t)]^2)", "correct": true}, {"text": "x''(t) + y''(t)", "correct": false}, {"text": "Derivative of speed", "correct": false}, {"text": "None", "correct": false}], "explanation": "The magnitude of any 2D vector uses the square root of its summed component squares." },
              { "q": "True or False: If you integrate a velocity vector component-by-component, you get displacement components.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "Integrating velocity yields the net directional components of the displacement change vector." },
              { "q": "If an AP question asks for the 'position of the particle at t = 3' given initial position at t = 0, what is the structure of the answer?", "options": [{"text": "An ordered pair coordinate vector ⟨x(3), y(3)⟩", "correct": true}, {"text": "A single scalar number", "correct": false}, {"text": "A derivative equation", "correct": false}, {"text": "None", "correct": false}], "explanation": "Position requests require specifying the coordinate location on the plane." }
            ]
          },
          {
            "id": "9.7",
            "topic": "9.7 Defining Polar Coordinates and Differentiating in Polar Form",
            "videoId": "66-wUer6cm8",
            "quiz": [
              { "q": "What coordinate variables define a point in the polar coordinate system?", "options": [{"text": "r (distance from the origin) and θ (counterclockwise angle from the positive x-axis)", "correct": true}, {"text": "x and y", "correct": false}, {"text": "Slope and intercept", "correct": false}, {"text": "None", "correct": false}], "explanation": "Polar coordinates locate points using a radial distance r paired with a rotational angle θ." },
              { "q": "What are the standard conversion equations used to transform polar coordinates into rectangular coordinates?", "options": [{"text": "x = r * cos(θ) and y = r * sin(θ)", "correct": true}, {"text": "x = r * sin(θ) and y = r * cos(θ)", "correct": false}, {"text": "r = x^2 + y^2", "correct": false}, {"text": "None", "correct": false}], "explanation": "Derived from right-triangle trigonometry, these projection profiles transform polar definitions into Cartesian coordinates." },
              { "q": "What does the polar derivative rate dr/dθ represent physically?", "options": [{"text": "The rate at which the radius changes relative to the angle θ", "correct": true}, {"text": "The actual tangent slope dy/dx of the curve", "correct": false}, {"text": "The arc length rate", "correct": false}, {"text": "None", "correct": false}], "explanation": "dr/dθ tracks how the curve expands outward or contracts inward toward the pole as it rotates." },
              { "q": "How is the actual Cartesian tangent slope dy/dx calculated for a polar curve r = f(θ)?", "options": [{"text": "dy/dx = (dy/dθ) / (dx/dθ), using the parameter transformations", "correct": true}, {"text": "dy/dx = dr/dθ", "correct": false}, {"text": "dy/dx = tan(θ)", "correct": false}, {"text": "None", "correct": false}], "explanation": "Polar curves are treated as parametric equations with θ as the parameter, meaning $dy/dx = (dy/d\\theta) / (dx/d\\theta)$." },
              { "q": "Using the product rule on y = r * sin(θ), what is dy/dθ?", "options": [{"text": "(dr/dθ) * sin(θ) + r * cos(θ)", "correct": true}, {"text": "(dr/dθ) * cos(θ)", "correct": false}, {"text": "r * cos(θ)", "correct": false}, {"text": "None", "correct": false}], "explanation": "Differentiating $y = r(\\theta)\\sin(\\theta)$ requires applying the product rule since both r and the trigonometric term vary with θ." },
              { "q": "Using the product rule on x = r * cos(θ), what is dx/dθ?", "options": [{"text": "(dr/dθ) * cos(θ) - r * sin(θ)", "correct": true}, {"text": "(dr/dθ) * sin(θ)", "correct": false}, {"text": "-r * sin(θ)", "correct": false}, {"text": "None", "correct": false}], "explanation": "The product rule applies, and the derivative of cos(θ) introduces a negative sign: $-r\\sin(\\theta)$." },
              { "q": "If dr/dθ is positive at a specific angle, what is the behavior of the curve relative to the origin?", "options": [{"text": "The curve is moving further away from the origin", "correct": true}, {"text": "The curve is moving closer to the origin", "correct": false}, {"text": "The curve has a horizontal tangent", "correct": false}, {"text": "None", "correct": false}], "explanation": "A positive radial derivative shows that the distance from the origin is increasing as θ turns." },
              { "q": "What polar equation describes a perfect circle centered at the origin with radius 4?", "options": [{"text": "r = 4", "correct": true}, {"text": "θ = 4", "correct": false}, {"text": "r = 4cos(θ)", "correct": false}, {"text": "None", "correct": false}], "explanation": "A constant radius creates a circular path regardless of the angle." },
              { "q": "True or False: The derivative dr/dθ represents the slope of the tangent line to a polar graph.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "dr/dθ is the radial growth rate. The slope of the tangent line is always the Cartesian derivative dy/dx." },
              { "q": "What is the value of r at the origin (the pole)?", "options": [{"text": "0", "correct": true}, {"text": "1", "correct": false}, {"text": "Undefined", "correct": false}, {"text": "None", "correct": false}], "explanation": "The origin is the reference point where the distance out along the ray is zero." }
            ]
          },
          {
            "id": "9.8",
            "topic": "9.8 Find the Area of a Polar Region or the Area Bounded by a Single Polar Curve",
            "videoId": "iPCbEOCPjIc",
            "quiz": [
              { "q": "What is the definitive calculus integral formula for finding the area of a polar region bounded by r = f(θ) from θ = α to θ = β?", "options": [{"text": "1/2 * Integral from α to β of r^2 dθ", "correct": true}, {"text": "Integral from α to β of r dθ", "correct": false}, {"text": "π * Integral of r^2 dθ", "correct": false}, {"text": "None", "correct": false}], "explanation": "Polar area accumulates a fan of thin sectors rather than vertical rectangles, using the sector area formula $A = \\frac{1}{2}r^2\\Delta\\theta$." },
              { "q": "What geometric element serves as the basis for approximating area in polar integration?", "options": [{"text": "A circular sector (pie slice)", "correct": true}, {"text": "A standard rectangle", "correct": false}, {"text": "A trapezoid", "correct": false}, {"text": "None", "correct": false}], "explanation": "Polar slices radiate from a central pole, matching the shape of thin circular sectors." },
              { "q": "To trace out the complete area of a single loop of the rose curve r = cos(2θ), what are appropriate limits of integration?", "options": [{"text": "-π/4 to π/4", "correct": true}, {"text": "0 to π", "correct": false}, {"text": "0 to 2π", "correct": false}, {"text": "None", "correct": false}], "explanation": "Setting $r = 0$ gives $\\cos(2\\theta) = 0 \\rightarrow 2\\theta = \\pm\\pi/2 \\rightarrow \\theta = \\pm\\pi/4$, enclosing a single loop." },
              { "q": "True or False: Bounded polar area calculations can result in a negative value.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "Because the integrand squares the radius ($r^2$), the output is strictly non-negative, representing real geometric area." },
              { "q": "What is a common arithmetic mistake made when writing out polar area integrals on the AP exam?", "options": [{"text": "Forgetting to write the 1/2 coefficient in front of the integral symbol", "correct": true}, {"text": "Forgetting to square the r", "correct": false}, {"text": "Using the wrong trig functions", "correct": false}, {"text": "None", "correct": false}], "explanation": "Omitting the front $\\frac{1}{2}$ multiplier scales the calculated area incorrectly by a factor of two." },
              { "q": "Find the area inside the circle r = 2 from θ = 0 to θ = π.", "options": [{"text": "2π", "correct": true}, {"text": "4π", "correct": false}, {"text": "π", "correct": false}, {"text": "None", "correct": false}], "explanation": "Area = $\\frac{1}{2} \\int_0^{\\pi} 2^2 d\\theta = \\frac{1}{2} \\int_0^{\\pi} 4 d\\theta = 2\\pi$." },
              { "q": "If an AP question says 'write but do not evaluate an expression for the area of one loop,' what components must be present?", "options": [{"text": "The 1/2 constant, integral symbol with correct θ limits, the squared polar function, and dθ", "correct": true}, {"text": "The antiderivative function", "correct": false}, {"text": "The converted Cartesian equation", "correct": false}, {"text": "None", "correct": false}], "explanation": "A complete mathematical statement requires the setup variables to be properly configured." },
              { "q": "True or False: The limits of integration for polar area represent coordinates along the x-axis.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "The boundaries are bounding radial angles, measured in radians." },
              { "q": "What polar graph family is defined by equations of the form r = a + b*cos(θ)?", "options": [{"text": "Limaçons (including cardioids)", "correct": true}, {"text": "Rose curves", "correct": false}, {"text": "Lemniscates", "correct": false}, {"text": "None", "correct": false}], "explanation": "These equations map out heart-shaped loops and dimpled structures known as limaçons." },
              { "q": "Why is symmetry useful when computing polar areas by hand?", "options": [{"text": "It allows you to integrate a smaller, simpler angular region (like 0 to π/2) and multiply the result to get the total area", "correct": true}, {"text": "It changes the function into a line", "correct": false}, {"text": "It removes the radical", "correct": false}, {"text": "None", "correct": false}], "explanation": "Exploiting symmetry simplifies the limits of integration, minimizing errors when evaluating by hand." }
            ]
          },
          {
            "id": "9.9",
            "topic": "9.9 Finding the Area of the Region Bounded by Two Polar Curves",
            "videoId": "7ioD7CNpdmE",
            "quiz": [
              { "q": "What is the standard definite integral setup for finding the area enclosed between an outer polar curve R(θ) and an inner polar curve r(θ)?", "options": [{"text": "1/2 * Integral from α to β of [(R(θ))^2 - (r(θ))^2] dθ", "correct": true}, {"text": "1/2 * Integral of (R(θ) - r(θ))^2 dθ", "correct": false}, {"text": "1/2 * Integral of [R(θ) - r(θ)] dθ", "correct": false}, {"text": "None", "correct": false}], "explanation": "The area is found by subtracting the inner region's sector area from the outer region's sector area: $\\frac{1}{2}(R^2 - r^2)$." },
              { "q": "How do you determine the limits of integration (α and β) when calculating the area bounded between two intersecting polar curves?", "options": [{"text": "Set the two equations equal to each other ($R(θ) = r(θ)$) and solve for the intersection angles", "correct": true}, {"text": "Find the intercepts on the x-axis", "correct": false}, {"text": "The limits are always 0 and 2π", "correct": false}, {"text": "None", "correct": false}], "explanation": "The intersection angles pinpoint where the shared boundary constraints open and close." },
              { "q": "What is a major algebraic error when squaring the polar difference inside the integrand?", "options": [{"text": "Writing (R - r)^2 instead of the correct split-squared profile R^2 - r^2", "correct": true}, {"text": "Factoring out the 1/2", "correct": false}, {"text": "Using degrees", "correct": false}, {"text": "None", "correct": false}], "explanation": "Subtracting squared radius loops ($R^2 - r^2$) is algebraically different from squaring a simple difference ($(R - r)^2$)." },
              { "q": "If a region is bounded inside the outer curve r = 3 and outside the inner curve r = 2 from θ = 0 to θ = π, write the area integral.", "options": [{"text": "1/2 * Integral from 0 to π of (3^2 - 2^2) dθ", "correct": true}, {"text": "1/2 * Integral from 0 to π of (3 - 2)^2 dθ", "correct": false}, {"text": "Integral from 0 to π of (9 - 4) dθ", "correct": false}, {"text": "None", "correct": false}], "explanation": "Applying the formula directly yields the integrand $(3^2 - 2^2)$ scaled by $\\frac{1}{2}$." },
              { "q": "True or False: The area between two polar curves can be found by adding their individual area integrals together.", "options": [{"text": "False", "correct": true}, {"text": "True", "correct": false}], "explanation": "Finding an enclosed region between boundaries requires subtraction, not addition." },
              { "q": "What should you do if the boundaries of a region shift from tracking one curve to tracking an adjacent curve along a ray?", "options": [{"text": "Split the region into subregions at the boundary shift angle and set up separate single-curve integrals for each section", "correct": true}, {"text": "Use the standard subtraction formula anyway", "correct": false}, {"text": "Multiply the curves", "correct": false}, {"text": "None", "correct": false}], "explanation": "If the region is not a simple 'outer minus inner' arrangement, you must split it into separate sectors and integrate each curve independently." },
              { "q": "What geometric shape is formed by the subtraction of an inner sector area from an outer sector area?", "options": [{"text": "A polar washer sector segment", "correct": true}, {"text": "A perfect rectangle", "correct": false}, {"text": "A triangle", "correct": false}, {"text": "None", "correct": false}], "explanation": "The subtraction isolates the outmost perimeter band segment, creating a polar version of a washer slice." },
              { "q": "If R(θ) = 4 and r(θ) = 2, evaluate the integrand value inside the integral before integration.", "options": [{"text": "12", "correct": true}, {"text": "2", "correct": false}, {"text": "4", "correct": false}, {"text": "None", "correct": false}], "explanation": "$R^2 - r^2 = 4^2 - 2^2 = 16 - 4 = 12$." },
              { "q": "True or False: If two polar curves intersect at the origin (pole), that intersection point can sometimes be hidden algebraically.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "Curves can pass through the origin at different angles $\\theta$, so setting the equations equal may not show the intersection at the pole. Graphing the curves helps confirm the points of intersection." },
              { "q": "Why is graphing highly recommended before setting up a multi-curve polar area integral?", "options": [{"text": "To visually confirm which function is further from the origin (outer) vs closer (inner) across the angular domain", "correct": true}, {"text": "To check the slope", "correct": false}, {"text": "To find the y-intercept", "correct": false}, {"text": "None", "correct": false}], "explanation": "A graph clarifies which function is the outer boundary, preventing you from accidentally reversing the integrand." }
            ]
          }
        ]
        },
        "unit-10": {
        "title": "Unit 10: Infinite Sequences and Series",
        "lessons": [
        {
          "id": "10.1",
          "topic": "10.1 Defining Convergent and Divergent Infinite Series",
          "videoId": "cr8QcflluF0",
          "quiz": [
            { "q": "What is an infinite series?", "options": [{"text": "The summation of the terms of an infinite sequence", "correct": true}, {"text": "An ordered list of numbers separated by commas", "correct": false}, {"text": "A function mapping integers to reals", "correct": false}, {"text": "None", "correct": false}], "explanation": "A sequence is a list of terms, whereas a series is the continuous summation of those terms: $\\sum_{n=1}^{\\infty} a_n$." },
            { "q": "What is a partial sum $S_n$ of an infinite series?", "options": [{"text": "The sum of the first n terms of the series", "correct": true}, {"text": "The limit of the series as n approaches infinity", "correct": false}, {"text": "An approximation using only even terms", "correct": false}, {"text": "None", "correct": false}], "explanation": "The $n$-th partial sum is defined as $S_n = a_1 + a_2 + \\dots + a_n$. The convergence of the entire series is determined by the behavior of the sequence of these partial sums." },
            { "q": "An infinite series converges to a value S if and only if:", "options": [{"text": "The sequence of partial sums approaches a finite limit S", "correct": true}, {"text": "The individual terms $a_n$ approach zero", "correct": false}, {"text": "The partial sums oscillate inside a bounded region", "correct": false}, {"text": "None", "correct": false}], "explanation": "By definition, a series converges to $S$ if $\\lim_{n \\to \\infty} S_n = S$. Terms approaching zero is a prerequisite, not a guarantee." },
            { "q": "If the sequence of partial sums is $S_n = \\frac{2n}{3n + 5}$, what does the series sum to?", "options": [{"text": "2/3", "correct": true}, {"text": "0", "correct": false}, {"text": "Infinity", "correct": false}, {"text": "Diverges", "correct": false}], "explanation": "The sum of the series is $\\lim_{n \\to \\infty} S_n = \\lim_{n \\to \\infty} \\frac{2n}{3n+5} = \\frac{2}{3}$." },
            { "q": "If the sequence of partial sums $\\{S_n\\}$ diverges, what can be concluded about the infinite series?", "options": [{"text": "The infinite series diverges", "correct": true}, {"text": "The infinite series converges conditionally", "correct": false}, {"text": "The series converges to zero", "correct": false}, {"text": "None", "correct": false}], "explanation": "If the sequence of partial sums does not approach a finite limit, the series is divergent by definition." },
            { "q": "Which of the following describes a telescoping series?", "options": [{"text": "A series where intermediate terms cancel out, leaving only a few initial and final terms", "correct": true}, {"text": "A series with a constant common ratio", "correct": false}, {"text": "A series whose terms oscillate between positive and negative", "correct": false}, {"text": "None", "correct": false}], "explanation": "Telescoping series collapse algebraically when written out, making it easy to find an explicit formula for $S_n$." },
            { "q": "Find the sum of the telescoping series $\\sum_{n=1}^{\\infty} \\left( \\frac{1}{n} - \\frac{1}{n+1} \\right)$.", "options": [{"text": "1", "correct": true}, {"text": "0", "correct": false}, {"text": "Infinity", "correct": false}, {"text": "Diverges", "correct": false}], "explanation": "$S_n = (1 - 1/2) + (1/2 - 1/3) + \\dots + (1/n - 1/(n+1)) = 1 - 1/(n+1)$. Taking the limit as $n \\to \\infty$ yields $1 - 0 = 1$." },
            { "q": "If a series $\\sum a_n$ converges to 5, what is $\\lim_{n \\to \\infty} S_{n}$?", "options": [{"text": "5", "correct": true}, {"text": "0", "correct": false}, {"text": "Undefined", "correct": false}, {"text": "None", "correct": false}], "explanation": "The limit of the sequence of partial sums $S_n$ is by definition the sum of the series." },
            { "q": "What happens if a series has partial sums that oscillate between 0 and 1 forever?", "options": [{"text": "The series diverges", "correct": true}, {"text": "The series converges to 0.5", "correct": false}, {"text": "The series converges absolutely", "correct": false}, {"text": "None", "correct": false}], "explanation": "Because the partial sums do not settle on a single finite limit, the limit does not exist, meaning the series diverges." },
            { "q": "True or False: A series can diverge even if its sequence of partial sums is bounded.", "options": [{"text": "True", "correct": true}, {"text": "False", "correct": false}], "explanation": "True. An oscillating sequence of partial sums like $S_n = [0, 1, 0, 1, \\dots]$ is bounded between 0 and 1, but it still diverges because the limit DNE." }
          ]
        },
        {
          "id": "10.2",
          "topic": "10.2 Working with Geometric Series",
          "videoId": "WObMisjsI7Y",
          "quiz": [
            { "q": "What is the general formula for an infinite geometric series starting at n=1?", "options": [{"text": "∑ a * r^(n-1)", "correct": true}, {"text": "∑ a * n^r", "correct": false}, {"text": "∑ (a/r)^n", "correct": false}, {"text": "None", "correct": false}], "explanation": "A geometric series multiplies by a common ratio $r$ from one term to the next: $a + ar + ar^2 + \\dots$" },
            { "q": "Under what condition does an infinite geometric series converge?", "options": [{"text": "|r| < 1", "correct": true}, {"text": "|r| ≤ 1", "correct": false}, {"text": "r > 1", "correct": false}, {"text": "None", "correct": false}], "explanation": "An infinite geometric series converges if and only if the absolute value of its common ratio is strictly less than 1." },
            { "q": "If a geometric series converges, what formula yields its sum?", "options": [{"text": "Sum = a / (1 - r)", "correct": true}, {"text": "Sum = 1 / (1 - r)", "correct": false}, {"text": "Sum = a / (r - 1)", "correct": false}, {"text": "None", "correct": false}], "explanation": "The sum is computed as the first term ($a$) divided by $1 - r$, where $r$ is the common ratio." },
            { "q": "Find the sum of the series: $5 + 5/2 + 5/4 + 5/8 + \\dots$", "options": [{"text": "10", "correct": true}, {"text": "5", "correct": false}, {"text": "20", "correct": false}, {"text": "Diverges", "correct": false}], "explanation": "Here, $a = 5$ and $r = 1/2$. Since $|1/2| < 1$, Sum = $5 / (1 - 1/2) = 5 / (1/2) = 10$." },
            { "q": "Evaluate the infinite geometric series: $\\sum_{n=1}^{\\infty} 4 \\cdot (3/2)^{n-1}$.", "options": [{"text": "The series diverges because |r| ≥ 1", "correct": true}, {"text": "8", "correct": false}, {"text": "-8", "correct": false}, {"text": "12", "correct": false}], "explanation": "The common ratio is $r = 3/2$. Since $|3/2| \\ge 1$, the terms grow without bound, and the series diverges." },
            { "q": "Find the sum of the geometric series: $\\sum_{n=1}^{\\infty} 2 \\cdot (-1/3)^{n-1}$.", "options": [{"text": "3/2", "correct": true}, {"text": "3", "correct": false}, {"text": "1/2", "correct": false}, {"text": "Diverges", "correct": false}], "explanation": "$a = 2$, $r = -1/3$. Sum = $2 / (1 - (-1/3)) = 2 / (4/3) = 2 \\cdot (3/4) = 6/4 = 3/2$." },
            { "q": "What is the common ratio of the geometric series $\\sum_{n=1}^{\\infty} \\frac{3^{n+1}}{5^n}$?", "options": [{"text": "3/5", "correct": true}, {"text": "3", "correct": false}, {"text": "9/5", "correct": false}, {"text": "None", "correct": false}], "explanation": "Expanding the first few terms gives $9/5 + 27/25 + 81/125 + \\dots$ Each term is multiplied by $3/5$." },
            { "q": "Find the sum of the series $\\sum_{n=1}^{\\infty} \\frac{3^{n+1}}{5^n}$.", "options": [{"text": "4.5", "correct": true}, {"text": "9/5", "correct": false}, {"text": "3", "correct": false}, {"text": "Diverges", "correct": false}], "explanation": "First term $a = 3^2/5 = 9/5$. Ratio $r = 3/5$. Sum = $(9/5) / (1 - 3/5) = (9/5) / (2/5) = 9/2 = 4.5$." },
            { "q": "If a geometric series has a sum of 12 and a common ratio of $r = 1/4$, what is its first term $a$?", "options": [{"text": "9", "correct": true}, {"text": "3", "correct": false}, {"text": "16", "correct": false}, {"text": "None", "correct": false}], "explanation": "Using $Sum = a/(1-r) \\to 12 = a/(1 - 1/4) \\to 12 = a/(3/4) \\to a = 12 \\cdot (3/4) = 9$." },
            { "q": "True or False: The repeating decimal $0.999\\dots$ can be modeled and evaluated as an infinite convergent geometric series.", "options": [{"text": "True, and it equals exactly 1", "correct": true}, {"text": "False, it is always strictly less than 1", "correct": false}], "explanation": "True. It can be written as $9/10 + 9/100 + 9/1000 + \\dots$ where $a = 9/10$ and $r = 1/10$. Sum = $(9/10)/(1 - 1/10) = (9/10)/(9/10) = 1$." }
          ]
        },
        {
          "id": "10.3",
          "topic": "10.3 The nth Term Test for Divergence",
          "videoId": "iZZHhMa_RkE",
          "quiz": [
            { "q": "What is the primary conclusion of the nth Term Test for Divergence?", "options": [{"text": "If the limit of a_n as n approaches infinity does not equal zero, the series diverges.", "correct": true}, {"text": "If the limit equals zero, the series converges.", "correct": false}, {"text": "If the limit is zero, the series diverges.", "correct": false}, {"text": "None", "correct": false}], "explanation": "The test state that if $\\lim_{n \\to \\infty} a_n \\neq 0$, the terms do not shrink fast enough to form a finite sum, so the series must diverge." },
            { "q": "If $\\lim_{n \\to \\infty} a_n = 0$, what does the nth Term Test tell you?", "options": [{"text": "The test is completely inconclusive.", "correct": true}, {"text": "The series converges absolutely.", "correct": false}, {"text": "The series diverges.", "correct": false}, {"text": "None", "correct": false}], "explanation": "Terms approaching zero is a necessary condition for convergence, but not a sufficient guarantee. Further testing is required." },
            { "q": "Analyze the series $\\sum_{n=1}^{\\infty} \\frac{3n^2 - 5}{2n^2 + 7}$ using the nth Term Test.", "options": [{"text": "Diverges because the limit of the terms is 3/2.", "correct": true}, {"text": "Converges because the limit of the terms is 3/2.", "correct": false}, {"text": "The test is inconclusive.", "correct": false}, {"text": "None", "correct": false}], "explanation": "Since $\\lim_{n \\to \\infty} \\frac{3n^2 - 5}{2n^2 + 7} = \\frac{3}{2} \\neq 0$, the series diverges by the $n$-th term test." },
            { "q": "Does the nth Term Test ever prove that a series converges?", "options": [{"text": "No, it can only prove divergence or be inconclusive.", "correct": true}, {"text": "Yes, if the limit is a fraction less than 1.", "correct": false}, {"text": "Yes, if the limit approaches 0 slowly.", "correct": false}, {"text": "None", "correct": false}], "explanation": "The $n$-th term test is strictly a test for *divergence*. It can never be used to confirm convergence." },
            { "q": "Evaluate the divergence of $\\sum_{n=1}^{\\infty} \\cos\\left(\\frac{1}{n}\\right)$.", "options": [{"text": "Diverges because the limit of the terms is 1.", "correct": true}, {"text": "Converges because the limit of the terms is 0.", "correct": false}, {"text": "Diverges because the limit of the terms is 0.", "correct": false}, {"text": "None", "correct": false}], "explanation": "As $n \\to \\infty$, $1/n \\to 0$, so $\\lim_{n \\to \\infty} \\cos(1/n) = \\cos(0) = 1$. Since $1 \\neq 0$, the series diverges." },
            { "q": "Apply the nth Term Test to the Harmonic Series $\\sum_{n=1}^{\\infty} \\frac{1}{n}$.", "options": [{"text": "The test is inconclusive because the limit is 0.", "correct": true}, {"text": "It proves the series converges.", "correct": false}, {"text": "It proves the series diverges.", "correct": false}, {"text": "None", "correct": false}], "explanation": "$\\lim_{n \\to \\infty} \\frac{1}{n} = 0$. The test is inconclusive. (We know from other tests that the harmonic series diverges, but this specific test cannot show it)." },
            { "q": "What is $\\lim_{n \\to \\infty} a_n$ for the series $\\sum_{n=1}^{\\infty} \\frac{e^n}{n^5}$?", "options": [{"text": "Infinity, so the series diverges", "correct": true}, {"text": "0, so the series converges", "correct": false}, {"text": "1, so the series diverges", "correct": false}, {"text": "None", "correct": false}], "explanation": "Exponential functions grow significantly faster than polynomial functions, so $\\lim_{n \\to \\infty} \\frac{e^n}{n^5} = \\infty \\neq 0$, proving divergence." },
            { "q": "Evaluate the series $\\sum_{n=1}^{\\infty} (-1)^n$ using the nth Term Test.", "options": [{"text": "Diverges because the limit of the terms does not exist.", "correct": true}, {"text": "Converges because the terms are bounded.", "correct": false}, {"text": "Inconclusive.", "correct": false}, {"text": "None", "correct": false}], "explanation": "The terms alternate between $-1$ and $1$, so the limit $\\lim_{n \\to \\infty} (-1)^n$ Does Not Exist. Since the limit is not exactly 0, the series diverges." },
            { "q": "If $\\sum a_n$ converges, what must be the value of $\\lim_{n \\to \\infty} a_n$?", "options": [{"text": "It must equal 0.", "correct": true}, {"text": "It could be any finite number.", "correct": false}, {"text": "It must equal 1.", "correct": false}, {"text": "None", "correct": false}], "explanation": "If a series successfully converges to a finite sum, the underlying sequence of individual terms must approach 0." },
            { "q": "Analyze the series $\\sum_{n=1}^{\\infty} \\frac{\\ln(n)}{n}$ using the nth Term Test.", "options": [{"text": "The test is inconclusive because the limit is 0.", "correct": true}, {"text": "Diverges because the limit is infinity.", "correct": false}, {"text": "Converges because the limit is 0.", "correct": false}, {"text": "None", "correct": false}], "explanation": "Using L'Hôpital's Rule, $\\lim_{n \\to \\infty} \\frac{\\ln(n)}{n} = \\lim_{n \\to \\infty} \\frac{1/n}{1} = 0$. Because the limit is 0, the test is inconclusive." }
          ]
        },
        {
          "id": "10.4",
          "topic": "10.4 Integral Test for Convergence",
          "videoId": "0oqTH1PmVqE",
          "quiz": [
            { "q": "What three conditions must $f(x)$ satisfy on $[1, \\infty)$ to apply the Integral Test?", "options": [{"text": "Continuous, positive, and decreasing", "correct": true}, {"text": "Differentiable, positive, and increasing", "correct": false}, {"text": "Continuous, alternating, and bounded", "correct": false}, {"text": "None", "correct": false}], "explanation": "The function must be continuous, positive, and steadily decreasing to establish a valid comparative relationship with the series." },
            { "q": "If the improper integral $\\int_1^{\\infty} f(x)\\,dx$ evaluates to a finite value L, what does the test tell us about $\\sum a_n$?", "options": [{"text": "The series converges.", "correct": true}, {"text": "The series diverges.", "correct": false}, {"text": "The sum of the series is exactly L.", "correct": false}, {"text": "None", "correct": false}], "explanation": "The test guarantees that the series converges if the integral converges. However, the exact sum of the series is almost never equal to the value of the integral." },
            { "q": "Apply the Integral Test to the series $\\sum_{n=1}^{\\infty} \\frac{1}{n^2+1}$.", "options": [{"text": "The integral converges to π/4, so the series converges.", "correct": true}, {"text": "The integral diverges, so the series diverges.", "correct": false}, {"text": "The test cannot be applied.", "correct": false}, {"text": "None", "correct": false}], "explanation": "$\\int_1^{\\infty} \\frac{1}{x^2+1}\\,dx = \\lim_{b \\to \\infty} [\\arctan(x)]_1^b = \\frac{\\pi}{2} - \\frac{\\pi}{4} = \\frac{\\pi}{4}$. Since the integral converges, the series converges." },
            { "q": "If the improper integral $\\int_1^{\\infty} f(x)\\,dx$ diverges to infinity, the corresponding series:", "options": [{"text": "Diverges", "correct": true}, {"text": "Converges", "correct": false}, {"text": "Could either converge or diverge", "correct": false}, {"text": "None", "correct": false}], "explanation": "The Integral Test establishes that the series and the improper integral share the exact same convergence or divergence behavior." },
            { "q": "Why can't the Integral Test be applied to the series $\\sum_{n=1}^{\\infty} \\frac{\\sin(n)}{n^2}$?", "options": [{"text": "The terms are not strictly positive.", "correct": true}, {"text": "The function is not continuous.", "correct": false}, {"text": "The terms do not go to zero.", "correct": false}, {"text": "None", "correct": false}], "explanation": "Because $\\sin(n)$ alternates between positive and negative values, the matching function is not positive, violating a core prerequisite." },
            { "q": "Evaluate the convergence of $\\sum_{n=2}^{\\infty} \\frac{1}{n \\ln(n)}$ using the Integral Test.", "options": [{"text": "Diverges because $\\int \\frac{1}{x \\ln(x)}\\,dx$ diverges.", "correct": true}, {"text": "Converges cleanly.", "correct": false}, {"text": "Inconclusive.", "correct": false}, {"text": "None", "correct": false}], "explanation": "Using u-substitution where $u = \\ln(x)$, $\\int_2^{\\infty} \\frac{1}{x \\ln(x)}\\,dx = [\\ln(\\ln(x))]_2^{\\infty} = \\infty$. The integral diverges, so the series diverges." },
            { "q": "Evaluate the convergence of $\\sum_{n=1}^{\\infty} n e^{-x^2}$ using the Integral Test parameters.", "options": [{"text": "Converges because the improper integral converges.", "correct": true}, {"text": "Diverges to infinity.", "correct": false}, {"text": "Inconclusive.", "correct": false}, {"text": "None", "correct": false}], "explanation": "The matching function $x e^{-x^2}$ is continuous, positive, and decreasing for $x > 1/\\sqrt{2}$. Its improper integral evaluates to $1/(2e)$, which means the series converges." },
            { "q": "True or False: The lower limit of integration must always be exactly 1 to evaluate convergence using the Integral Test.", "options": [{"text": "False, any finite integer index where the conditions hold can be used.", "correct": true}, {"text": "True, otherwise the geometric alignment fails.", "correct": false}], "explanation": "As long as the function is well-behaved on the tail interval $[k, \\infty)$, the lower index bound can be adjusted to match where the behavior stabilizes." },
            { "q": "What happens if you try to apply the Integral Test to a function that is increasing?", "options": [{"text": "The test is invalid because a core condition is violated.", "correct": true}, {"text": "The series always converges.", "correct": false}, {"text": "The integral evaluates to 0.", "correct": false}, {"text": "None", "correct": false}], "explanation": "The function must be steadily decreasing. If it increases, it cannot model a convergent series boundary." },
            { "q": "When using the Integral Test, what notation is required on the AP Exam to evaluate $\\int_1^{\\infty} f(x)\\,dx$?", "options": [{"text": "Rewrite with proper limit notation: $\\lim_{b \\to \\infty} \\int_1^b f(x)\\,dx$", "correct": true}, {"text": "Plug in infinity directly as a standard integer.", "correct": false}, {"text": "Omit the bounds entirely.", "correct": false}, {"text": "None", "correct": false}], "explanation": "Infinity is an unbounded concept, not a real number. AP rubrics require notation using proper limit evaluation to earn full credit." }
          ]
        },
        {
          "id": "10.5",
          "topic": "10.5 Harmonic Series and p-Series",
          "videoId": "SxRP1EREzr8",
          "quiz": [
            { "q": "What is the general structural format of a p-series?", "options": [{"text": "∑ 1 / n^p", "correct": true}, {"text": "∑ p^n", "correct": false}, {"text": "∑ 1 / p^n", "correct": false}, {"text": "None", "correct": false}], "explanation": "A $p$-series raises the index variable $n$ in the denominator to a fixed constant power exponent $p$." },
            { "q": "Under what precise parameter condition does a p-series converge?", "options": [{"text": "p > 1", "correct": true}, {"text": "p ≥ 1", "correct": false}, {"text": "p < 1", "correct": false}, {"text": "None", "correct": false}], "explanation": "Using the integral test template, $\\int_1^{\\infty} \\frac{1}{x^p}\\,dx$ only yields a finite convergence value if $p > 1$." },
            { "q": "What is the specific name and behavior of the p-series where p = 1?", "options": [{"text": "The Harmonic Series; it diverges.", "correct": true}, {"text": "The Harmonic Series; it converges.", "correct": false}, {"text": "The Alternating Series; it converges.", "correct": false}, {"text": "None", "correct": false}], "explanation": "The series $\\sum \\frac{1}{n}$ is the Harmonic Series. It is famous because its individual terms shrink to zero, yet the cumulative series still diverges to infinity." },
            { "q": "Determine the convergence of the series: $\\sum_{n=1}^{\\infty} \\frac{1}{n^{4/3}}$.", "options": [{"text": "Converges because p = 4/3, which is greater than 1.", "correct": true}, {"text": "Diverges because p = 4/3.", "correct": false}, {"text": "Inconclusive.", "correct": false}, {"text": "None", "correct": false}], "explanation": "This is a $p$-series with $p = 4/3$. Since $4/3 > 1$, the series converges." },
            { "q": "Determine the convergence of the series: $\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{n}}$.", "options": [{"text": "Diverges because p = 1/2, which is less than or equal to 1.", "correct": true}, {"text": "Converges because p = 1/2.", "correct": false}, {"text": "Diverges by the nth term test.", "correct": false}, {"text": "None", "correct": false}], "explanation": "Rewritten as $\\sum \\frac{1}{n^{1/2}}$, this is a $p$-series with $p = 1/2$. Since $1/2 \\le 1$, it diverges." },
            { "q": "Analyze the convergence of the series $\\sum_{n=1}^{\\infty} \\frac{3}{n^5}$.", "options": [{"text": "Converges because p = 5, which is greater than 1.", "correct": true}, {"text": "Diverges because of the constant 3.", "correct": false}, {"text": "Inconclusive.", "correct": false}, {"text": "None", "correct": false}], "explanation": "Constant multipliers do not alter convergence profiles. Since the exponent $p = 5 > 1$, the series converges." },
            { "q": "For what values of k will the series $\\sum_{n=1}^{\\infty} \\frac{1}{n^{3k-2}}$ converge?", "options": [{"text": "k > 1", "correct": true}, {"text": "k > 1/3", "correct": false}, {"text": "k < 1", "correct": false}, {"text": "None", "correct": false}], "explanation": "Set the exponent to satisfy the convergence rule: $3k - 2 > 1 \\to 3k > 3 \\to k > 1$." },
            { "q": "True or False: The series $\\sum_{n=1}^{\\infty} n^{-0.99}$ converges.", "options": [{"text": "False, it diverges because p = 0.99 ≤ 1.", "correct": true}, {"text": "True, it converges because the exponent is close to 1.", "correct": false}], "explanation": "Rewritten as $\\sum \\frac{1}{n^{0.99}}$, the exponent $p = 0.99 \\le 1$, meaning it diverges." },
            { "q": "What is the limit of the individual terms $a_n = \\frac{1}{n^2}$ as n approaches infinity?", "options": [{"text": "0", "correct": true}, {"text": "1", "correct": false}, {"text": "Infinity", "correct": false}, {"text": "None", "correct": false}], "explanation": "The sequence of terms approaches 0, which satisfies the prerequisite condition for this convergent $p$-series." },
            { "q": "Does a p-series ever converge conditionally?", "options": [{"text": "No, it either converges absolutely (when p > 1) or diverges (when p ≤ 1).", "correct": true}, {"text": "Yes, when p is an integer.", "correct": false}, {"text": "Yes, when p = 1.", "correct": false}, {"text": "None", "correct": false}], "explanation": "Standard $p$-series contain only positive terms, so conditional convergence (which requires an alternating sign profile) does not apply." }
          ]
        },
        {
          "id": "10.6",
          "topic": "10.6 Comparison Tests for Convergence",
          "videoId": "xlDjLbrYfNU",
          "quiz": [
            { "q": "Under the Direct Comparison Test (DCT), if $0 \\le a_n \\le b_n$ and $\\sum b_n$ converges, what can be concluded?", "options": [{"text": "∑ a_n also converges.", "correct": true}, {"text": "∑ a_n diverges.", "correct": false}, {"text": "The test is inconclusive.", "correct": false}, {"text": "None", "correct": false}], "explanation": "If a larger positive series converges to a finite value, it forces the smaller positive series underneath it to also remain finite." },
            { "q": "Under the Direct Comparison Test (DCT), if $0 \\le b_n \\le a_n$ and $\\sum b_n$ diverges, what can be concluded?", "options": [{"text": "∑ a_n also diverges.", "correct": true}, {"text": "∑ a_n converges.", "correct": false}, {"text": "The test is inconclusive.", "correct": false}, {"text": "None", "correct": false}], "explanation": "If a smaller series diverges to infinity, it pushes the larger series above it to also diverge to infinity." },
            { "q": "When using the Limit Comparison Test (LCT) on positive series, what condition must the limit $L = \\lim_{n \\to \\infty} \\frac{a_n}{b_n}$ satisfy for both series to share the same behavior?", "options": [{"text": "L must be a finite, positive number (0 < L < ∞)", "correct": true}, {"text": "L must equal 0", "correct": false}, {"text": "L must equal infinity", "correct": false}, {"text": "None", "correct": false}], "explanation": "A finite, positive limit confirms that both series grow at proportional speeds at infinity, meaning they converge or diverge together." },
            { "q": "Analyze the convergence of $\\sum_{n=1}^{\\infty} \\frac{1}{n^3 + 4}$ using direct comparison.", "options": [{"text": "Converges by comparing it to the convergent p-series 1/n^3", "correct": true}, {"text": "Diverges by comparing it to 1/n", "correct": false}, {"text": "Inconclusive.", "correct": false}, {"text": "None", "correct": false}], "explanation": "Since $n^3 + 4 > n^3$, it follows that $\\frac{1}{n^3 + 4} < \\frac{1}{n^3}$. Because $\\sum \\frac{1}{n^3}$ converges ($p=3 > 1$), the smaller series converges by DCT." },
            { "q": "Which test is best suited to evaluate the series $\\sum_{n=1}^{\\infty} \\frac{n-2}{n^2+5}$?", "options": [{"text": "Limit Comparison Test with 1/n", "correct": true}, {"text": "Direct Comparison Test with 1/n^2", "correct": false}, {"text": "Geometric Series Test", "correct": false}, {"text": "None", "correct": false}], "explanation": "At infinity, the leading terms behave like $n/n^2 = 1/n$. Using LCT with $b_n = 1/n$ yields a limit of 1. Since $\\sum \\frac{1}{n}$ diverges, the original series also diverges." },
            { "q": "True or False: If $0 \\le a_n \\le b_n$ and $\\sum b_n$ diverges, the Direct Comparison Test proves that $\\sum a_n$ diverges.", "options": [{"text": "False, being smaller than an infinite series tells us nothing; the test is inconclusive.", "correct": true}, {"text": "True, they always mirror each other.", "correct": false}], "explanation": "This is a common logical trap. Being smaller than infinity does not prevent a series from converging or diverging; the test fails." },
            { "q": "True or False: If $0 \\le a_n \\le b_n$ and $\\sum a_n$ converges, the Direct Comparison Test is inconclusive for $\\sum b_n$.", "options": [{"text": "True, being larger than a finite sum does not tell us if the upper bound is finite or infinite.", "correct": true}, {"text": "False, it automatically converges.", "correct": false}], "explanation": "Knowing a smaller series converges does not tell us if the larger series stays finite or grows without bound." },
            { "q": "If you perform LCT with $a_n$ and $b_n$, and find $\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = 0$, when can a conclusion be drawn?", "options": [{"text": "If ∑ b_n converges, then ∑ a_n also converges.", "correct": true}, {"text": "If ∑ b_n diverges, then ∑ a_n diverges.", "correct": false}, {"text": "Never", "correct": false}, {"text": "None", "correct": false}], "explanation": "A limit of 0 means $a_n$ shrinks faster than $b_n$. If the larger benchmark series $b_n$ converges, it pulls $a_n$ down into convergence as well." },
            { "q": "If you perform LCT and find $\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = \\infty$, when can a conclusion be簡 drawn?", "options": [{"text": "If ∑ b_n diverges, then ∑ a_n also diverges.", "correct": true}, {"text": "If ∑ b_n converges, then ∑ a_n converges.", "correct": false}, {"text": "Never", "correct": false}, {"text": "None", "correct": false}], "explanation": "A limit of infinity means $a_n$ grows much faster than $b_n$. If the smaller benchmark series $b_n$ diverges, it pushes $a_n$ into divergence as well." },
            { "q": "What is the benchmark series behavior for $\\sum_{n=1}^{\\infty} \\frac{\\sqrt{n}}{n^2+1}$ under LCT?", "options": [{"text": "Compare with 1/n^(3/2), which converges", "correct": true}, {"text": "Compare with 1/n, which diverges", "correct": false}, {"text": "Compare with 1/n^2, which converges", "correct": false}, {"text": "None", "correct": false}], "explanation": "The leading term ratio is $\\frac{n^{1/2}}{n^2} = \\frac{1}{n^{3/2}}$. Using LCT with this convergent $p$-series ($p = 1.5 > 1$) confirms that the original series converges." }
          ]
        },
        {
          "id": "10.7",
          "topic": "10.7 Alternating Series Test for Convergence",
          "videoId": "4vThWeL4RwM",
          "quiz": [
            { "q": "What two conditions must an alternating series $\\sum_{n=1}^{\\infty} (-1)^n a_n$ satisfy to guarantee convergence?", "options": [{"text": "The terms must be decreasing ($a_{n+1} \\le a_n$) and $\\lim_{n \\to \\infty} a_n = 0$", "correct": true}, {"text": "The terms must be increasing and $\\lim_{n \\to \\infty} a_n = 0$", "correct": false}, {"text": "The series must be geometric and $|r| < 1$", "correct": false}, {"text": "None", "correct": false}], "explanation": "The Alternating Series Test (Leibniz's Theorem) requires that the absolute magnitudes of the terms decrease monotonically and approach a limit of zero." },
            { "q": "If an alternating series satisfies $\\lim_{n \\to \\infty} a_n = 0$ but the absolute terms are NOT strictly decreasing, what is the conclusion?", "options": [{"text": "The Alternating Series Test is inconclusive", "correct": true}, {"text": "The series definitely diverges", "correct": false}, {"text": "The series definitely converges", "correct": false}, {"text": "None", "correct": false}], "explanation": "If the absolute terms do not decrease monotonically, the test is inconclusive, and you must use an alternative strategy to verify behavior." },
            { "q": "Analyze the series $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n}$ using the Alternating Series Test.", "options": [{"text": "Converges because $1/(n+1) < 1/n$ and $\\lim_{n \\to \\infty} 1/n = 0$", "correct": true}, {"text": "Diverges because it is the harmonic series", "correct": false}, {"text": "Diverges by the nth term test", "correct": false}, {"text": "None", "correct": false}], "explanation": "This is the Alternating Harmonic Series. Its absolute terms are strictly decreasing and approach zero, so it converges via AST." },
            { "q": "Why does the alternating series $\\sum_{n=1}^{\\infty} (-1)^n \\frac{2n}{3n+1}$ fail the Alternating Series Test?", "options": [{"text": "The limit of the absolute terms is 2/3, not 0", "correct": true}, {"text": "The terms do not alternate", "correct": false}, {"text": "The terms are strictly decreasing", "correct": false}, {"text": "None", "correct": false}], "explanation": "Because $\\lim_{n \\to \\infty} \\frac{2n}{3n+1} = \\frac{2}{3} \\neq 0$, it fails the AST baseline. This also means the series diverges by the $n$-th Term Test." },
            { "q": "True or False: If an alternating series fails the Alternating Series Test because $\\lim_{n \\to \\infty} a_n \\neq 0$, the series is always divergent.", "options": [{"text": "True, by the nth Term Test for Divergence", "correct": true}, {"text": "False, it could still converge via a comparison test", "correct": false}], "explanation": "If the terms do not approach zero, the two-sided limit of the sequence of terms DNE, confirming divergence via the $n$-th term test." },
            { "q": "Evaluate the convergence of $\\sum_{n=1}^{\\infty} (-1)^n \\frac{\\ln(n)}{n}$ for $n \\ge 3$.", "options": [{"text": "Converges because the terms decrease and approach 0 for $n \\ge 3$", "correct": true}, {"text": "Diverges because $\\ln(n)/n$ grows without bound", "correct": false}, {"text": "Inconclusive", "correct": false}, {"text": "None", "correct": false}], "explanation": "The function $f(x) = \\ln(x)/x$ has a negative derivative for $x > e$, meaning the terms decrease monotonically for $n \\ge 3$, and $\\lim_{n \\to \\infty} \\frac{\\ln(n)}{n} = 0$, satisfying AST." },
            { "q": "What can the Alternating Series Test tell us about a series with entirely positive terms?", "options": [{"text": "Nothing, the test cannot be applied", "correct": true}, {"text": "It can prove divergence", "correct": false}, {"text": "It can prove absolute convergence", "correct": false}, {"text": "None", "correct": false}], "explanation": "The series must alternate signs at every sequential step to fall within the scope of the Alternating Series Test." },
            { "q": "Determine the behavior of $\\sum_{n=1}^{\\infty} (-1)^n e^{-n}$.", "options": [{"text": "Converges by the Alternating Series Test", "correct": true}, {"text": "Diverges by the nth term test", "correct": false}, {"text": "Diverges because it is exponential", "correct": false}, {"text": "None", "correct": false}], "explanation": "The absolute terms $1/e^n$ are strictly decreasing and approach a limit of 0, so the series converges via AST (and can also be shown to converge as a geometric series)." },
            { "q": "If a series is rewritten as $\\sum_{n=1}^{\\infty} \\frac{\\cos(\\pi n)}{n^2}$, does AST apply?", "options": [{"text": "Yes, because $\\cos(\\pi n)$ is equivalent to $(-1)^n$", "correct": true}, {"text": "No, because it does not contain a literal $(-1)^n$ factor", "correct": false}, {"text": "No, because cosine oscillates continuously", "correct": false}, {"text": "None", "correct": false}], "explanation": "Since $\\cos(\\pi) = -1, \\cos(2\\pi) = 1, \\cos(3\\pi) = -1$, the term $\\cos(\\pi n)$ behaves exactly like $(-1)^n$, rendering it an alternating series." },
            { "q": "Does the Alternating Series Test evaluate absolute or conditional convergence?", "options": [{"text": "It only checks for regular convergence; it cannot differentiate between absolute and conditional types", "correct": true}, {"text": "It only proves absolute convergence", "correct": false}, {"text": "It only proves conditional convergence", "correct": false}, {"text": "None", "correct": false}], "explanation": "AST only tells you if the alternating series converges. You must evaluate the absolute value of the series to classify it as absolute or conditional." }
          ]
        },
        {
          "id": "10.8",
          "topic": "10.8 Ratio Test for Convergence",
          "videoId": "xGCO9E8Nl5M",
          "quiz": [
            { "q": "What condition must the Ratio Test limit $L = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|$ satisfy to prove absolute convergence?", "options": [{"text": "L < 1", "correct": true}, {"text": "L > 1", "correct": false}, {"text": "L = 1", "correct": false}, {"text": "L = 0 only", "correct": false}], "explanation": "If the ratio of consecutive terms settles on a limit strictly less than 1, the series behaves like a shrinking geometric series at infinity, ensuring absolute convergence." },
            { "q": "If the Ratio Test limit evaluates to $L > 1$ or $L = \\infty$, what is the conclusion?", "options": [{"text": "The series diverges", "correct": true}, {"text": "The series converges conditionally", "correct": false}, {"text": "The test is inconclusive", "correct": false}, {"text": "None", "correct": false}], "explanation": "A ratio limit greater than 1 proves the individual terms are growing in size at infinity, confirming divergence." },
            { "q": "If the Ratio Test limit evaluates to exactly $L = 1$, what does this indicate?", "options": [{"text": "The test is completely inconclusive", "correct": true}, {"text": "The series converges absolutely", "correct": false}, {"text": "The series diverges", "correct": false}, {"text": "None", "correct": false}], "explanation": "When $L = 1$, the test provides no information, and you must select a different convergence test (such as a comparison or $p$-series test)." },
            { "q": "Evaluate the Ratio Test limit for the series $\\sum_{n=1}^{\\infty} \\frac{n!}{2^n}$.", "options": [{"text": "L = ∞, so the series diverges", "correct": true}, {"text": "L = 0, so the series converges", "correct": false}, {"text": "L = 1/2, so the series converges", "correct": false}, {"text": "None", "correct": false}], "explanation": "$\\lim_{n \\to \\infty} \\frac{(n+1)!}{2^{n+1}} \\cdot \\frac{2^n}{n!} = \\lim_{n \\to \\infty} \\frac{n+1}{2} = \\infty$. Since $L > 1$, the series diverges." },
            { "q": "The Ratio Test is highly optimized for evaluating series that feature which algebraic components?", "options": [{"text": "Factorials ($n!$) and exponential tracking layers ($k^n$)", "correct": true}, {"text": "Standard polynomials and rational functions", "correct": false}, {"text": "Logarithms and linear terms", "correct": false}, {"text": "None", "correct": false}], "explanation": "Factorials and exponents cancel out cleanly when forming a fraction of consecutive terms, making them perfect targets for the Ratio Test." },
            { "q": "Evaluate the limit ratio for the series $\\sum_{n=1}^{\\infty} \\frac{4^n}{n^2}$.", "options": [{"text": "L = 4, so the series diverges", "correct": true}, {"text": "L = 1, so the test is inconclusive", "correct": false}, {"text": "L = 0, so the series converges", "correct": false}, {"text": "None", "correct": false}], "explanation": "$\\lim_{n \\to \\infty} \\frac{4^{n+1}}{(n+1)^2} \\cdot \\frac{n^2}{4^n} = \\lim_{n \\to \\infty} 4 \\cdot \\left(\\frac{n}{n+1}\\right)^2 = 4 \\cdot 1 = 4$. Since $4 > 1$, it diverges." },
            { "q": "If you apply the Ratio Test to a standard p-series $\\sum \\frac{1}{n^p}$, what will the limit L equal?", "options": [{"text": "L = 1, making the test inconclusive", "correct": true}, {"text": "L = p", "correct": false}, {"text": "L = 0", "correct": false}, {"text": "None", "correct": false}], "explanation": "For any $p$-series, $\\lim_{n \\to \\infty} \\frac{n^p}{(n+1)^p} = 1$. The Ratio Test always fails on rational/algebraic functions, meaning you shouldn't waste time using it on them." },
            { "q": "Evaluate the convergence of $\\sum_{n=1}^{\\infty} \\frac{(-1)^n n^3}{3^n}$ using the Ratio Test.", "options": [{"text": "L = 1/3, so the series converges absolutely", "correct": true}, {"text": "L = 1, so the test fails", "correct": false}, {"text": "L = 3, so the series diverges", "correct": false}, {"text": "None", "correct": false}], "explanation": "The absolute value drops the alternating sign: $\\lim_{n \\to \\infty} \\frac{(n+1)^3}{3^{n+1}} \\cdot \\frac{3^n}{n^3} = \\lim_{n \\to \\infty} \\frac{1}{3}\\left(\\frac{n+1}{n}\\right)^3 = \\frac{1}{3}$. Since $1/3 < 1$, it converges absolutely." },
            { "q": "What is the consequence of omitting the absolute value bars when evaluating the Ratio Test limit for an alternating series?", "options": [{"text": "The limit could evaluate to a negative number, violating the test definition and rendering it invalid", "correct": true}, {"text": "It makes no algebraic difference", "correct": false}, {"text": "The series will always appear to converge", "correct": false}, {"text": "None", "correct": false}], "explanation": "The Ratio Test explicitly requires taking the absolute value of the terms ($|a_{n+1}/a_n|$), forcing a non-negative limit." },
            { "q": "If $\\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = 0.999$, what is the structural conclusion?", "options": [{"text": "The series converges absolutely", "correct": true}, {"text": "The series diverges", "correct": false}, {"text": "The test is inconclusive because the value is too close to 1", "correct": false}, {"text": "None", "correct": false}], "explanation": "As long as $L$ is strictly less than 1, no matter how close it is, absolute convergence is mathematically guaranteed." }
          ]
        },
        {
          "id": "10.9",
          "topic": "10.9 Determining Absolute or Conditional Convergence",
          "videoId": "vnO1v1Dp8v0",
          "quiz": [
            { "q": "What is the requirement for an infinite series to be classified as absolutely convergent?", "options": [{"text": "The series of absolute values ∑ |a_n| must converge", "correct": true}, {"text": "The series must alternate signs", "correct": false}, {"text": "The terms must be integers", "correct": false}, {"text": "None", "correct": false}], "explanation": "If a series converges when all its terms are forced positive ($\\sum |a_n|$), the original series converges absolutely." },
            { "q": "What is the definition of conditional convergence?", "options": [{"text": "The alternating series ∑ a_n converges, but its absolute counterpart ∑ |a_n| diverges", "correct": true}, {"text": "The series only converges under certain initial values", "correct": false}, {"text": "The series converges to a negative limit", "correct": false}, {"text": "None", "correct": false}], "explanation": "Conditional convergence means the alternating signs are solely responsible for keeping the sum finite; without them, the values accumulate to infinity." },
            { "q": "Classify the convergence of the Alternating Harmonic Series $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$.", "options": [{"text": "Conditionally convergent", "correct": true}, {"text": "Absolutely convergent", "correct": false}, {"text": "Divergent", "correct": false}, {"text": "None", "correct": false}], "explanation": "The series converges via the Alternating Series Test. However, taking the absolute value yields the standard Harmonic Series $\\sum \\frac{1}{n}$, which diverges, making it conditionally convergent." },
            { "q": "Classify the convergence of the series $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^3}$.", "options": [{"text": "Absolutely convergent", "correct": true}, {"text": "Conditionally convergent", "correct": false}, {"text": "Divergent", "correct": false}, {"text": "None", "correct": false}], "explanation": "Taking the absolute value yields $\\sum \\frac{1}{n^3}$, which is a convergent $p$-series ($p = 3 > 1$). Since the positive series converges, the original series converges absolutely." },
            { "q": "If a series contains entirely positive terms, can it be conditionally convergent?", "options": [{"text": "No, it can only be absolutely convergent or divergent", "correct": true}, {"text": "Yes, if it is a rational function", "correct": false}, {"text": "Yes, if the limit is 1", "correct": false}, {"text": "None", "correct": false}], "explanation": "For positive series, $\\sum a_n$ and $\\sum |a_n|$ are identical, so conditional convergence is structurally impossible." },
            { "q": "True or False: If a series is absolutely convergent, it is automatically guaranteed to be convergent in its original form.", "options": [{"text": "True, absolute convergence implies convergence", "correct": true}, {"text": "False, you must check it with AST separately", "correct": false}], "explanation": "A foundational theorem states that if $\\sum |a_n|$ converges, $\\sum a_n$ must also converge. Absolute convergence is a stronger property." },
            { "q": "Classify the convergence of $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\sqrt{n+2}}$.", "options": [{"text": "Conditionally convergent", "correct": true}, {"text": "Absolutely convergent", "correct": false}, {"text": "Divergent", "correct": false}, {"text": "None", "correct": false}], "explanation": "It converges via AST since the terms drop monotonically to 0. Its absolute value forms a series that behaves like the divergent $p$-series $1/n^{1/2}$ under LCT, confirming conditional convergence." },
            { "q": "If $\\sum a_n$ diverges, what can we conclude about $\\sum |a_n|$?", "options": [{"text": "The absolute series ∑ |a_n| must also diverge", "correct": true}, {"text": "The absolute series could still converge", "correct": false}, {"text": "The absolute series equals zero", "correct": false}, {"text": "None", "correct": false}], "explanation": "If a series cannot converge with the help of alternating cancellations, it has no chance of converging when all terms are made positive." },
            { "q": "Which test can simultaneously prove that an alternating series converges AND that it does so absolutely?", "options": [{"text": "The Ratio Test, if L < 1", "correct": true}, {"text": "The Alternating Series Test", "correct": false}, {"text": "The nth term test", "correct": false}, {"text": "None", "correct": false}], "explanation": "The Ratio Test incorporates absolute value bars ($|a_{n+1}/a_n|$), so an output of $L < 1$ proves absolute convergence directly." },
            { "q": "Classify the series $\\sum_{n=1}^{\\infty} (-1)^n \\frac{n^2}{n^2+1}$.", "options": [{"text": "Divergent", "correct": true}, {"text": "Absolutely convergent", "correct": false}, {"text": "Conditionally convergent", "correct": false}, {"text": "None", "correct": false}], "explanation": "Taking the limit of the terms yields $\\lim_{n \\to \\infty} \\frac{n^2}{n^2+1} = 1 \\neq 0$. Because the terms do not approach zero, the series diverges by the $n$-th Term Test." }
          ]
        },
        {
          "id": "10.10",
          "topic": "10.10 Alternating Series Error Bound",
          "videoId": "frkDf69nYj8",
          "quiz": [
            { "q": "What does the Alternating Series Error Bound state about the truncation error of an alternating series approximated by $S_n$?", "options": [{"text": "The error |S - S_n| is bounded by the magnitude of the next term, |a_{n+1}|", "correct": true}, {"text": "The error is bounded by the first term, a_1", "correct": false}, {"text": "The error is bounded by the derivative at n", "correct": false}, {"text": "None", "correct": false}], "explanation": "The Alternating Series Estimation Theorem guarantees that the remainder error is less than or equal to the absolute value of the first neglected term." },
            { "q": "If you approximate the sum of $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$ using the first 99 terms, the error is guaranteed to be less than or equal to:", "options": [{"text": "1/100", "correct": true}, {"text": "1/99", "correct": false}, {"text": "1/101", "correct": false}, {"text": "None", "correct": false}], "explanation": "The first neglected term is the 100th term: $a_{100} = 1/100$, which serves as our maximum error ceiling." },
            { "q": "To approximate the sum of $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^2}$ with an error less than 0.01, what is the minimum number of terms required?", "options": [{"text": "9 terms", "correct": true}, {"text": "10 terms", "correct": false}, {"text": "99 terms", "correct": false}, {"text": "None", "correct": false}], "explanation": "We want the first neglected term to be less than $0.01$, meaning $1/(n+1)^2 < 1/100 \\to (n+1)^2 > 100 \\to n+1 > 10 \\to n > 9$. Thus, summing 9 terms ensures the 10th term ($1/100$) acts as a valid bound." },
            { "q": "True or False: The Alternating Series Error Bound can be used to bound the error of any convergent series.", "options": [{"text": "False, it applies strictly to series that satisfy the conditions of the Alternating Series Test", "correct": true}, {"text": "True, as long as it converges", "correct": false}], "explanation": "This estimation shortcut requires the series to meet all AST conditions (alternating signs, decreasing magnitudes, terms approaching 0)." },
            { "q": "If $S_5 = 0.6167$ is an approximation of a convergent alternating series, and $|a_6| = 0.0012$, what is the valid interval containing the true sum S?", "options": [{"text": "[0.6155, 0.6179]", "correct": true}, {"text": "[0.6167, 0.6179]", "correct": false}, {"text": "[0.6155, 0.6167]", "correct": false}, {"text": "None", "correct": false}], "explanation": "The maximum error is $\\pm 0.0012$, so the true sum must lie within $0.6167 \\pm 0.0012$, which defines the interval $[0.6155, 0.6179]$." },
            { "q": "If an alternating series error bound is evaluated, what is the sign of the error bound value?", "options": [{"text": "Strictly positive", "correct": true}, {"text": "Strictly negative", "correct": false}, {"text": "Can be either", "correct": false}, {"text": "None", "correct": false}], "explanation": "Error bounds represent absolute geometric distance margins ($|S - S_n|$), so they are always expressed as positive scalar ceilings." },
            { "q": "If you sum the first 4 terms of $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n!}$, what term determines the error bound?", "options": [{"text": "1/5!", "correct": true}, {"text": "1/4!", "correct": false}, {"text": "1/6!", "correct": false}, {"text": "None", "correct": false}], "explanation": "Since the approximation uses terms 1 through 4, the first un-accumulated element is the 5th term, which has a magnitude of $1/5!$." },
            { "q": "If a series satisfies $|S - S_n| \\le 0.005$, what can we say about the precision of our partial sum?", "options": [{"text": "The approximation is accurate to at least two decimal places", "correct": true}, {"text": "It is accurate to five decimal places", "correct": false}, {"text": "It is exact", "correct": false}, {"text": "None", "correct": false}], "explanation": "An error bound of $\\le 0.005$ guarantees that the tenths and hundredths places are secure under standard rounding." },
            { "q": "What is the error bound if you use $S_3$ to approximate the alternating series $1 - 1/2 + 1/4 - 1/8 + \\dots$?", "options": [{"text": "1/8", "correct": true}, {"text": "1/4", "correct": false}, {"text": "1/16", "correct": false}, {"text": "None", "correct": false}], "explanation": "The terms are $a_1=1, a_2=-1/2, a_3=1/4$. The first omitted term is $a_4$, which has a magnitude of $1/8$." },
            { "q": "Why is the alternating series error bound preferred over other error metrics when applicable?", "options": [{"text": "It requires no integration or complex derivation; you just read the next term in the sequence", "correct": true}, {"text": "It is always more accurate", "correct": false}, {"text": "Calculators require it", "correct": false}, {"text": "None", "correct": false}], "explanation": "The Alternating Series Error Bound is highly efficient because it avoids complex calculations, requiring you to find only the value of the very next term." }
          ]
        },
        {
          "id": "10.11",
          "topic": "10.11 Finding Taylor Polynomial Approximations of Functions",
          "videoId": "-g0NbTsEtVc",
          "quiz": [
            { "q": "What is the general n-th term formula for a Taylor polynomial coefficient centered at x = c?", "options": [{"text": "f^(n)(c) / n!", "correct": true}, {"text": "f'(c) / n", "correct": false}, {"text": "f^(n)(c)", "correct": false}, {"text": "None", "correct": false}], "explanation": "The coefficient of the $(x-c)^n$ term is always the $n$-th derivative of the function evaluated at the center $c$, divided by $n!$." },
            { "q": "What is a Taylor polynomial called if its center is explicitly c = 0?", "options": [{"text": "Maclaurin Polynomial", "correct": true}, {"text": "Euler Polynomial", "correct": false}, {"text": "Lagrange Polynomial", "correct": false}, {"text": "None", "correct": false}], "explanation": "A Maclaurin polynomial is standardly defined as a Taylor polynomial centered precisely at $c = 0$." },
            { "q": "Find the linear (1st-degree) Taylor approximation $T_1(x)$ for $f(x) = \\ln(x)$ centered at x = 1.", "options": [{"text": "x - 1", "correct": true}, {"text": "x", "correct": false}, {"text": "1 + (x - 1)", "correct": false}, {"text": "None", "correct": false}], "explanation": "$f(1) = \\ln(1) = 0$ and $f'(1) = 1/1 = 1$. The tangent line approximation is $T_1(x) = 0 + 1(x - 1) = x - 1$." },
            { "q": "What is the second-degree Maclaurin polynomial $P_2(x)$ for $f(x) = e^x$?", "options": [{"text": "1 + x + x^2 / 2", "correct": true}, {"text": "1 + x + x^2", "correct": false}, {"text": "x + x^2 / 2", "correct": false}, {"text": "None", "correct": false}], "explanation": "Since all derivatives of $e^x$ evaluate to $1$ at $x=0$, the polynomial expands as $1 + 1x + \\frac{1}{2!}x^2 = 1 + x + \\frac{x^2}{2}$." },
            { "q": "If a third-degree Taylor polynomial centers at x = 5, what base tracking expression features in every power term?", "options": [{"text": "(x - 5)^n", "correct": true}, {"text": "(x + 5)^n", "correct": false}, {"text": "x^n", "correct": false}, {"text": "None", "correct": false}], "explanation": "Taylor series expansion terms always track local horizontal translation shifts from the center point, written as $(x - c)^n$." },
            { "q": "Find the 2nd-degree Maclaurin polynomial for $f(x) = \\cos(x)$.", "options": [{"text": "1 - x^2 / 2", "correct": true}, {"text": "1 - x^2", "correct": false}, {"text": "x - x^2 / 2", "correct": false}, {"text": "None", "correct": false}], "explanation": "$f(0) = 1, f'(0) = 0, f''(0) = -1$. Substituting gives $1 + 0x - \\frac{1}{2!}x^2 = 1 - \\frac{x^2}{2}$." },
            { "q": "If $f(2) = 3$, $f'(2) = -1$, and $f''(2) = 4$, construct the 2nd-degree Taylor polynomial centered at x = 2.", "options": [{"text": "3 - (x - 2) + 2(x - 2)^2", "correct": true}, {"text": "3 - (x - 2) + 4(x - 2)^2", "correct": false}, {"text": "-1 + 4(x - 2)^2", "correct": false}, {"text": "None", "correct": false}], "explanation": "$P_2(x) = f(2) + f'(2)(x-2) + \\frac{f''(2)}{2!}(x-2)^2 = 3 - 1(x-2) + \\frac{4}{2}(x-2)^2 = 3 - (x-2) + 2(x-2)^2$." },
            { "q": "True or False: The value of a function and its Taylor polynomial approximation are always exactly equal at the center x = c.", "options": [{"text": "True, because all error terms drop to zero at the center point", "correct": true}, {"text": "False, they are only approximations", "correct": false}], "explanation": "Evaluating at $x = c$ causes all $(x-c)$ components to become zero, leaving exactly $P_n(c) = f(c)$." },
            { "q": "What is the 3rd-degree Maclaurin polynomial for $f(x) = \\sin(x)$?", "options": [{"text": "x - x^3 / 6", "correct": true}, {"text": "x - x^3 / 3", "correct": false}, {"text": "1 - x^3 / 6", "correct": false}, {"text": "None", "correct": false}], "explanation": "$f(0)=0, f'(0)=1, f''(0)=0, f'''(0)=-1$. The polynomial evaluates to $x - \\frac{x^3}{3!} = x - \\frac{x^3}{6}$." },
            { "q": "Why do we utilize Taylor polynomials in analytical software computations?", "options": [{"text": "They translate complex transcendental functions into basic, easily calculated polynomial expressions", "correct": true}, {"text": "They eliminate rounding fractions", "correct": false}, {"text": "They find exact vertical asymptotes", "correct": false}, {"text": "None", "correct": false}], "explanation": "Polynomial operations require only basic addition, subtraction, multiplication, and division, which hardware architectures can compute very fast." }
          ]
        },
        {
          "id": "10.12",
          "topic": "10.12 Lagrange Error Bound",
          "videoId": "gg6FqaiYGD4",
          "quiz": [
            { "q": "What does the Lagrange Error Bound calculate?", "options": [{"text": "The worst-case maximum possible remainder error when approximating a function value using a Taylor polynomial", "correct": true}, {"text": "The exact error value", "correct": false}, {"text": "The lower bound integration constant", "correct": false}, {"text": "None", "correct": false}], "explanation": "The Lagrange remainder formula sets an upper bound margin on the truncation error profile over an interval." },
            { "q": "What derivative layer is evaluated to find the Lagrange error bound for an n-th degree Taylor polynomial?", "options": [{"text": "The (n + 1)-th derivative", "correct": true}, {"text": "The n-th derivative", "correct": false}, {"text": "The first derivative", "correct": false}, {"text": "None", "correct": false}], "explanation": "The maximum error uses information from the first omitted derivative layer: the $(n+1)$-th derivative." },
            { "q": "State the complete structural formula for the Lagrange error remainder $R_n(x)$.", "options": [{"text": "R_n(x) ≤ [max|f^(n+1)(z)| / (n + 1)!] * |x - c|^(n+1)", "correct": true}, {"text": "R_n(x) ≤ |a_{n+1}|", "correct": false}, {"text": "R_n(x) ≤ f'(c)(x-c)", "correct": false}, {"text": "None", "correct": false}], "explanation": "This takes the maximum value achieved by the $(n+1)$-th derivative between the center $c$ and evaluation point $x$, and applies it to an $(n+1)$ Taylor component step." },
            { "q": "A 3rd-degree Taylor polynomial centered at 0 approximates $f(0.5)$. If the maximum value of $|f^{(4)}(z)|$ on $[0, 0.5]$ is 24, find the Lagrange error bound.", "options": [{"text": "0.0625", "correct": true}, {"text": "1.5", "correct": false}, {"text": "0.5", "correct": false}, {"text": "None", "correct": false}], "explanation": "Error $\\le \\frac{24}{4!}|0.5|^4 = \\frac{24}{24}(0.0625) = 0.0625$." },
            { "q": "When is the Alternating Series Error Bound used instead of the Lagrange Error Bound?", "options": [{"text": "When the Taylor series alternates signs and its absolute terms decrease monotonically to zero", "correct": true}, {"text": "When the functions are linear", "correct": false}, {"text": "When the center point is not zero", "correct": false}, {"text": "None", "correct": false}], "explanation": "If the series is alternating and satisfies AST, reading the next term ($|a_{n+1}|$) provides a much faster error bound calculation than Lagrange." },
            { "q": "If the Lagrange error bound calculation evaluates to 0.0034, what can be concluded about an approximation value of 1.45?", "options": [{"text": "The actual functional value is guaranteed to be trapped within [1.4466, 1.4534]", "correct": true}, {"text": "The exact value is 1.4534", "correct": false}, {"text": "The error is exactly 0.0034", "correct": false}, {"text": "None", "correct": false}], "explanation": "The bound defines a symmetrical margin of error ($1.45 \\pm 0.0034$) that traps the true value within that interval." },
            { "q": "True or False: The variable 'z' in the Lagrange remainder formula represents a single constant location that is always exactly at the center c.", "options": [{"text": "False, z is a value located somewhere within the interval between the center c and the evaluation point x", "correct": true}, {"text": "True, it is always the center", "correct": false}], "explanation": "To maximize the bound defensively, we find the worst-case maximum derivative value anywhere within the interval span between $c$ and $x$." },
            { "q": "Find the Lagrange error bound factor denominator for a 5th-degree polynomial approximation.", "options": [{"text": "720", "correct": true}, {"text": "120", "correct": false}, {"text": "6", "correct": false}, {"text": "None", "correct": false}], "explanation": "The formula requires the $(n+1)$ factorial layer. For $n=5$, $(5+1)! = 6! = 720$." },
            { "q": "If an AP FRQ gives a graph of the 4th derivative of a function, how do you find the max value needed for a 3rd-degree Lagrange error bound?", "options": [{"text": "Find the highest absolute y-value achieved by the f^(4) graph on the interval between the center and x", "correct": true}, {"text": "Find the x-intercept", "correct": false}, {"text": "Find the area under the derivative curve", "correct": false}, {"text": "None", "correct": false}], "explanation": "The maximum value of the absolute $(n+1)$-th derivative on that interval serves as the coefficient numerator." },
            { "q": "Why is the Lagrange Error Bound valuable for non-alternating Taylor series setups?", "options": [{"text": "It provides a rigorous mathematical safeguard to guarantee accuracy limits when terms do not alternate signs", "correct": true}, {"text": "It converts series into products", "correct": false}, {"text": "It handles complex fractions easily", "correct": false}, {"text": "None", "correct": false}], "explanation": "Non-alternating series (like $e^x$ evaluated at positive parameters) cannot use the alternating test shortcut, requiring Lagrange to analyze truncation errors." }
          ]
        },
        {
          "id": "10.13",
          "topic": "10.13 Radius and Interval of Convergence of Power Series",
          "videoId": "1PGNIIemZaw",
          "quiz": [
            { "q": "What is a power series?", "options": [{"text": "An infinite series of the form ∑ c_n * (x - c)^n containing variable powers", "correct": true}, {"text": "A standard polynomial with finite terms", "correct": false}, {"text": "A series where exponents are factorials", "correct": false}, {"text": "None", "correct": false}], "explanation": "Power series introduce a variable $x$, essentially functioning as an infinite polynomial centered at a coordinate location $c$." },
            { "q": "What analytical test serves as the primary tool to find the radius of convergence R of a power series?", "options": [{"text": "The Ratio Test", "correct": true}, {"text": "The nth Term Test", "correct": false}, {"text": "The Integral Test", "correct": false}, {"text": "None", "correct": false}], "explanation": "Setting the absolute consecutive ratio limit less than 1 ($\\lim |a_{n+1}/a_n| < 1$) lets you isolate an inequality statement for $|x - c| < R$." },
            { "q": "If the Ratio Test limit reduces to $|x - 3| / 5 < 1$, what is the radius of convergence R?", "options": [{"text": "R = 5", "correct": true}, {"text": "R = 3", "correct": false}, {"text": "R = 1/5", "correct": false}, {"text": "None", "correct": false}], "explanation": "Isolating the expression gives $|x - 3| < 5$, where 5 is the radius of convergence $R$." },
            { "q": "What extra analytical task is mandatory when calculating the complete INTERVAL of convergence?", "options": [{"text": "Test both endpoints of the open interval independently back in the original series", "correct": true}, {"text": "Differentiate the series expression", "correct": false}, {"text": "Evaluate the limit at infinity", "correct": false}, {"text": "None", "correct": false}], "explanation": "Because the Ratio Test is inconclusive ($L=1$) at the boundary endpoints, you must manually check each endpoint to determine if the interval is open or closed there." },
            { "q": "If a power series converges ONLY at its center point x = c, what is its radius of convergence R?", "options": [{"text": "R = 0", "correct": true}, {"text": "R = ∞", "correct": false}, {"text": "R = 1", "correct": false}, {"text": "None", "correct": false}], "explanation": "If a series has no lateral width of convergence, its radius is defined as zero." },
            { "q": "If a power series converges for all real numbers along the entire x-axis, what is its radius of convergence R?", "options": [{"text": "R = ∞", "correct": true}, {"text": "R = 0", "correct": false}, {"text": "R = 1", "correct": false}, {"text": "None", "correct": false}], "explanation": "An infinite radius means the series converges regardless of the variable value you plug in." },
            { "q": "Find the radius of convergence R for $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$.", "options": [{"text": "R = ∞", "correct": true}, {"text": "R = 0", "correct": false}, {"text": "R = 1", "correct": false}, {"text": "None", "correct": false}], "explanation": "The Ratio Test limit evaluates to $\\lim \\left|\\frac{x}{n+1}\\right| = 0$ for all $x$. Since $0 < 1$ always, it converges everywhere ($R = \\infty$)." },
            { "q": "If testing endpoint x = 5 turns a power series into the harmonic series $\\sum 1/n$, should x = 5 be included in the interval?", "options": [{"text": "No, exclude it with an open parenthesis since the harmonic series diverges", "correct": true}, {"text": "Yes, include it with a bracket", "correct": false}], "explanation": "Since the series diverges at that specific boundary point, that endpoint value is excluded from the interval of convergence." },
            { "q": "If testing endpoint x = 1 turns a power series into the alternating harmonic series, should x = 1 be included in the interval?", "options": [{"text": "Yes, include it with a closed bracket since the alternating harmonic series converges", "correct": true}, {"text": "No, exclude it", "correct": false}], "explanation": "Since the resulting series converges at that location, the endpoint is included in the interval of convergence." },
            { "q": "True or False: Differentiating or integrating a power series can change its radius of convergence.", "options": [{"text": "False, the radius remains identical, though convergence at the endpoints can change", "correct": true}, {"text": "True, the radius updates completely", "correct": false}], "explanation": "Performing calculus operations on a power series preserves the radius of convergence $R$, but the endpoints must be re-tested." }
          ]
        },
        {
          "id": "10.14",
          "topic": "10.14 Finding Taylor or Maclaurin Series for a Function",
          "videoId": "tna89JFJ7_s",
          "quiz": [
            { "q": "What is the general n-th term of the Maclaurin expansion series for e^x?", "options": [{"text": "x^n / n!", "correct": true}, {"text": "(-1)^n * x^n / n!", "correct": false}, {"text": "x^(2n) / (2n)!", "correct": false}, {"text": "None", "correct": false}], "explanation": "The exponential series expands as $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots$" },
            { "q": "What is the general n-th term of the Maclaurin expansion series for sin(x)?", "options": [{"text": "(-1)^n * x^(2n+1) / (2n+1)!", "correct": true}, {"text": "(-1)^n * x^(2n) / (2n)!", "correct": false}, {"text": "x^(2n+1) / (2n+1)!", "correct": false}, {"text": "None", "correct": false}], "explanation": "The sine function is odd, so its Maclaurin series contains only odd powers with alternating signs." },
            { "q": "What is the general n-th term of the Maclaurin expansion series for cos(x)?", "options": [{"text": "(-1)^n * x^(2n) / (2n)!", "correct": true}, {"text": "(-1)^n * x^(2n+1) / (2n+1)!", "correct": false}, {"text": "x^(2n) / (2n)!", "correct": false}, {"text": "None", "correct": false}], "explanation": "The cosine function is even, so its Maclaurin series contains only even powers with alternating signs." },
            { "q": "What is the Maclaurin series expansion for the geometric form 1 / (1 - x)?", "options": [{"text": "1 + x + x^2 + x^3 + ... = ∑ x^n", "correct": true}, {"text": "1 - x + x^2 - x^3 + ...", "correct": false}, {"text": "x + x^2 + x^3 + ...", "correct": false}, {"text": "None", "correct": false}], "explanation": "This matches the basic infinite geometric sum expansion format where $a=1$ and $r=x$." },
            { "q": "If you know the Maclaurin series for $\\sin(x)$, how do you find the Maclaurin series for $\\sin(x^2)$?", "options": [{"text": "Substitute x^2 into every x spot in the standard sine expansion series", "correct": true}, {"text": "Square the entire series expression", "correct": false}, {"text": "Differentiate the series", "correct": false}, {"text": "None", "correct": false}], "explanation": "Functional composition properties allow substituting variable arguments directly into known series expansions." },
            { "q": "What is the first term of the Taylor series for $\\cos(x)$ centered at x = π?", "options": [{"text": "-1", "correct": true}, {"text": "1", "correct": false}, {"text": "0", "correct": false}, {"text": "None", "correct": false}], "explanation": "The first term is $f(\\pi) = \\cos(\\pi) = -1$." },
            { "q": "True or False: The Maclaurin series for a polynomial function has a finite number of non-zero terms.", "options": [{"text": "True, because high-order derivatives eventually drop to zero permanently", "correct": true}, {"text": "False, all series have infinite active terms", "correct": false}], "explanation": "Differentiating a polynomial of degree $k$ repeatedly will eventually result in zero for all derivatives beyond the $k$-th layer, terminating the series." },
            { "q": "Differentiate the Maclaurin series for $\\sin(x)$ term-by-term. What standard series do you get?", "options": [{"text": "The Maclaurin series for cos(x)", "correct": true}, {"text": "The Maclaurin series for -sin(x)", "correct": false}, {"text": "The series for e^x", "correct": false}, {"text": "None", "correct": false}], "explanation": "Since $d/dx[\\sin(x)] = \\cos(x)$, differentiating the sine series term-by-term yields the even-powered cosine series expansion." },
            { "q": "What is the Maclaurin series for $f(x) = \\ln(1+x)$?", "options": [{"text": "x - x^2/2 + x^3/3 - x^4/4 + ...", "correct": true}, {"text": "x - x^3/3! + x^5/5! - ...", "correct": false}, {"text": "1 + x + x^2 + ...", "correct": false}, {"text": "None", "correct": false}], "explanation": "Integrating the geometric series $1/(1+x) = 1 - x + x^2 - x^3 + \\dots$ term-by-term yields the standard natural log series expansion without factorials." },
            { "q": "What is the value of the 4th derivative $f^{(4)}(0)$ for a function whose Maclaurin series features the term $5x^4$?", "options": [{"text": "120", "correct": true}, {"text": "5", "correct": false}, { "text": "24", "correct": false}, {"text": "None", "correct": false}], "explanation": "The coefficient of $x^4$ is $\\frac{f^{(4)}(0)}{4!} = 5 \\to f^{(4)}(0) = 5 \\cdot 4! = 5 \\cdot 24 = 120$." }
          ]
        },
        {
          "id": "10.15",
          "topic": "10.15 Representing Functions as Power Series",
          "videoId": "Fc0OMMtSzns",
          "quiz": [
            { "q": "Find a power series representation centered at x = 0 for the function f(x) = 1 / (1 + 4x).", "options": [{"text": "∑ (-1)^n * 4^n * x^n", "correct": true}, {"text": "∑ 4^n * x^n", "correct": false}, {"text": "∑ (-4)^n * x^(2n)", "correct": false}, {"text": "None", "correct": false}], "explanation": "Using the geometric series template $\\frac{1}{1-r} = \\sum r^n$, we substitute $r = -4x$. This yields $\\sum (-4x)^n = \\sum (-1)^n 4^n x^n$." },
            { "q": "What is the interval of convergence for the series representation of f(x) = 1 / (1 - 2x) centered at 0?", "options": [{"text": "(-1/2, 1/2)", "correct": true}, {"text": "(-2, 2)", "correct": false}, {"text": "(-1, 1)", "correct": false}, {"text": "None", "correct": false}], "explanation": "The geometric series converges if $|r| < 1$. Here, $|2x| < 1 \\to |x| < 1/2$, defining the open interval $(-1/2, 1/2)$." },
            { "q": "Find a power series for $f(x) = x^2 \\cdot e^x$ using the known Maclaurin series for $e^x$.", "options": [{"text": "∑ x^(n+2) / n!", "correct": true}, {"text": "∑ x^2n / n!", "correct": false}, {"text": "∑ x^(n+2) / (n+2)!", "correct": false}, {"text": "None", "correct": false}], "explanation": "Multiplying the series $\\sum \\frac{x^n}{n!}$ by $x^2$ distributes the power across every term: $\\sum \\frac{x^2 \\cdot x^n}{n!} = \\sum \\frac{x^{n+2}}{n!}$." },
            { "q": "If $f(x) = \\sum_{n=0}^{\\infty} x^n$, what is the power series representation of the derivative $f'(x)$?", "options": [{"text": "∑ n * x^(n-1)", "correct": true}, {"text": "∑ x^(n-1)", "correct": false}, {"text": "∑ n * x^n", "correct": false}, {"text": "None", "correct": false}], "explanation": "Differentiating term-by-term using the power rule maps $\\frac{d}{dx}[x^n] = n x^{n-1}$." },
            { "q": "Represent the function $f(x) = \\frac{1}{(1-x)^2}$ as a power series by differentiating a known geometric template.", "options": [{"text": "1 + 2x + 3x^2 + 4x^3 + ... = ∑ (n+1)*x^n", "correct": true}, {"text": "1 + x + x^2 + x^3 + ...", "correct": false}, {"text": "x + 2x^2 + 3x^3 + ...", "correct": false}, {"text": "None", "correct": false}], "explanation": "Since $d/dx[1/(1-x)] = 1/(1-x)^2$, differentiating $\\sum x^n = 1 + x + x^2 + x^3 + \\dots$ term-by-term yields $0 + 1 + 2x + 3x^2 + 4x^3 + \\dots = \\sum (n+1)x^n$." },
            { "q": "Find a power series representation for $f(x) = \\frac{x}{1 + x^2}$.", "options": [{"text": "∑ (-1)^n * x^(2n+1)", "correct": true}, {"text": "∑ (-1)^n * x^2n", "correct": false}, {"text": "∑ x^(2n+1)", "correct": false}, {"text": "None", "correct": false}], "explanation": "Substitute $r = -x^2$ into the geometric template to get $\\frac{1}{1+x^2} = \\sum (-1)^n x^{2n}$. Multiplying by $x$ increases the exponents: $\\sum (-1)^n x^{2n+1}$." },
            { "q": "What operation converts the power series of $\\frac{1}{1+x}$ into the power series of $\\ln(1+x)$?", "options": [{"text": "Term-by-term integration", "correct": true}, {"text": "Term-by-term differentiation", "correct": false}, {"text": "Squaring the series", "correct": false}, {"text": "None", "correct": false}], "explanation": "Since $\\int \\frac{1}{1+x}\\,dx = \\ln|1+x|$, integrating the geometric series expansion yields the natural log power series." },
            { "q": "Find the power series representation for $f(x) = \\frac{1}{5-x}$ centered at x = 0.", "options": [{"text": "1/5 * ∑ (x/5)^n", "correct": true}, {"text": "∑ (x/5)^n", "correct": false}, {"text": "1/5 * ∑ x^n", "correct": false}, {"text": "None", "correct": false}], "explanation": "Factor out 5 from the denominator: $\\frac{1}{5(1 - x/5)} = \\frac{1}{5} \\cdot \\frac{1}{1 - x/5}$. Substituting $r = x/5$ into the template gives $\\frac{1}{5}\\sum (x/5)^n$." },
            { "q": "What is the radius of convergence for the series representation of $f(x) = \\frac{1}{9 + x^2}$ centered at 0?", "options": [{"text": "R = 3", "correct": true}, {"text": "R = 9", "correct": false}, {"text": "R = 1", "correct": false}, {"text": "None", "correct": false}], "explanation": "Rewritten as $\\frac{1}{9}\\cdot\\frac{1}{1 - (-x^2/9)}$. The geometric series converges when $|-x^2/9| < 1 \\to x^2 < 9 \\to |x| < 3$, so $R = 3$." },
            { "q": "True or False: Term-by-term integration of a power series can change the center of the interval of convergence.", "options": [{"text": "False, the center and radius always stay the same under integration", "correct": true}, {"text": "True, the center shifts dynamically", "correct": false}], "explanation": "Integration does not alter the center point $c$ or the radius of convergence $R$. It only affects convergence at the boundaries (endpoints)." }
          ]
        }
      ]
    }
}
};

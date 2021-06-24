export type answerOptions = {
  answerText: string;
  isCorrect: boolean;
};

export type QuestionType = {
  question: string;
  answerOptions: answerOptions[];
};

export const questions: QuestionType[] = [
  {
    question: "Inside which HTML element do we put the JavaScript?\n" + "\n",
    answerOptions: [
      { answerText: "<javascript>", isCorrect: false },
      { answerText: "<scripting>", isCorrect: false },
      { answerText: "<js>", isCorrect: false },
      { answerText: "<script>", isCorrect: true },
    ],
  },
  {
    question:
      "What is the correct JavaScript syntax to change the content of the HTML element below?\n",
    answerOptions: [
      { answerText: '#demo.innerHTML = "Hello World!";', isCorrect: false },
      {
        answerText: 'document.getElement("p").innerHTML = "Hello World!";',
        isCorrect: false,
      },
      {
        answerText:
          'document.getElementByName("p").innerHTML = "Hello World!";',
        isCorrect: false,
      },
      {
        answerText:
          'document.getElementById("demo").innerHTML = "Hello World!";',
        isCorrect: true,
      },
    ],
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answerOptions: [
      { answerText: "The <body> section", isCorrect: false },
      { answerText: " The <head> section", isCorrect: false },
      {
        answerText:
          " Both the <head> section and the <body> section are correct",
        isCorrect: true,
      },
      { answerText: "None of the above answers", isCorrect: false },
    ],
  },
  {
    question:
      'What is the correct syntax for referring to an external script called "xxx.js"?',
    answerOptions: [
      { answerText: '<script href="xxx.js">\n', isCorrect: false },
      { answerText: '<script src="xxx.js">  ', isCorrect: true },
      { answerText: '<script name="xxx.js">  ', isCorrect: false },
      { answerText: ' <script file="xxx.js">  ', isCorrect: false },
    ],
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    answerOptions: [
      { answerText: "false", isCorrect: true },
      { answerText: "true", isCorrect: false },
    ],
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    answerOptions: [
      { answerText: 'msg("Hello World");\n', isCorrect: false },
      { answerText: 'msgBox("Hello World");\n', isCorrect: false },
      { answerText: 'alert("Hello World");\n', isCorrect: true },
      { answerText: 'alertBox("Hello World");', isCorrect: false },
    ],
  },
];

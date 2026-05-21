https://github.com/priya42bagde/JavaScriptCodingInterviewQuestions/blob/master/js%20codes.docx


///thos ver imp kr lo coding ke question yhi se puche jaye ge

let str = "hello world";

let result = str
  .split(" ")
 .map(x => x.split("").reverse()
  .join(""))
 .join(" ");

console.log(result);
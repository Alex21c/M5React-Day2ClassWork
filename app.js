function H1LearnWebDev(){
  return React.createElement('h1', null, 'Learn web development');  
}
function ParagraphFirst(){
  return (
    <div>
      <p>
        Welcome to Geekster learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.
      </p>
    </div>
  );
}
function ParagraphSecond(){
  return (
    <div>
      <p>
        The aim of this area of MDN is not to take me from "beginner" to "expert" but to take me from "beginner" to "comfortable". From there, i should be able to start making my way, learning from <a href="https://www.geekster.in/">the rest of Geekster</a>, and other intermediate to advanced resources that assume a lot of previous konwledge.
      </p>
    </div>
  );
}
function ParagraphLast(){
  return (
    <div>
      <p>
        If i am a complete beginner, web development can be challenging &mdash; Geekster will hold my hand and provide enough detail for me to feel comfortable and learn the topics properly. I should feel at home whether i am a student learning web developemnt (on my own or as part of class), a teach looking for class materials, a hobbist, or someone who just want to understand more about how web technologies work.
      </p>
    </div>
  );
}

function MyFirstReactComponent(){
  return (
    <div>
      <H1LearnWebDev/>      
      <ParagraphFirst/>
      <ParagraphSecond/>
      <ParagraphLast/>
    </div>
  );
}

// let myFirstReactElement = React.createElement('h1', null, "hello world!");
// let firstDivWithP = React.createElement('div',null, "<p>Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.");


let root = document.querySelector('body#root');
ReactDOM.render(<MyFirstReactComponent/>, root);

// let h1Element = React.createElement('h1', null, "");

// let divWrapperParagraphs = React.createElement('div', {id:divWrapperParagraphs});
// ReactDOM.render(divWrapperParagraphs, root)
// ReactDOM.render(firstDivWithP, root);
import logo from './logo.svg';

import q0a0 from './images/0/0.png';
import q0a1 from './images/0/1.png';
import q0a2 from './images/0/2.png';
import q0a3 from './images/0/3.png';

import q1a0 from './images/1/0.png';
import q1a1 from './images/1/1.png';
import q1a2 from './images/1/2.png';
import q1a3 from './images/1/3.png';

import q2a0 from './images/2/0.png';
import q2a1 from './images/2/1.png';
import q2a2 from './images/2/2.png';
import q2a3 from './images/2/3.png';

import q3a0 from './images/3/0.png';
import q3a1 from './images/3/1.png';
import q3a2 from './images/3/2.png';
import q3a3 from './images/3/3.png';

import q4a0 from './images/4/0.png';
import q4a1 from './images/4/1.png';
import q4a2 from './images/4/2.png';
import q4a3 from './images/4/3.png';

import q5a0 from './images/5/0.png';
import q5a1 from './images/5/1.png';
import q5a2 from './images/5/2.png';
import q5a3 from './images/5/3.png';

import q6a0 from './images/6/0.png';
import q6a1 from './images/6/1.png';
import q6a2 from './images/6/2.png';
import q6a3 from './images/6/3.png';

import q7a0 from './images/7/0.png';
import q7a1 from './images/7/1.png';
import q7a2 from './images/7/2.png';
import q7a3 from './images/7/3.png';

import q8a0 from './images/8/0.png';
import q8a1 from './images/8/1.png';
import q8a2 from './images/8/2.png';
import q8a3 from './images/8/3.png';

import q9a0 from './images/9/0.png';
import q9a1 from './images/9/1.png';
import q9a2 from './images/9/2.png';
import q9a3 from './images/9/3.png';

import q10a0 from './images/10/0.png';
import q10a1 from './images/10/1.png';
import q10a2 from './images/10/2.png';
import q10a3 from './images/10/3.png';

import joePic from "./images/peter/joe.jpg";
import rollerbladePic from "./images/peter/rollerblade.jpg";
import dealershipPic from "./images/peter/dealership.jpg";
import dancingPic from "./images/peter/dancing.jpg";
import classyPic from "./images/peter/classy.jpg";
import chibiPic from "./images/peter/chibi.jpg";
import runningPic from "./images/peter/running.jpg";

import whichPeterLogo from "./images/logo.png"


import './App.css';

import React, { useState } from 'react';

function App() {
        
    const questions = [
		{
            questionText: "What's your favourite mode of transportation?",
            answerOptions: [
                { answerText: 'Boat', associatedPeters: ["Classy", "Rollerblade"], imgSrc: q0a0},
                { answerText: 'Plane', associatedPeters: ["Running", "Running"], imgSrc: q0a1},
                { answerText: 'Train', associatedPeters: ["Joe", "Dancing"], imgSrc: q0a2},
                { answerText: 'Car', associatedPeters: ["Football", "Chibi"], imgSrc: q0a3},
            ],
            selectedAnswer: -1,
        },

        {  
            questionText: "What's your dream holiday?",
            answerOptions: [
                { answerText: 'Beach', associatedPeters: ["Chibi", "Dancing"], imgSrc: q1a0},
                { answerText: 'Winter Lodge', associatedPeters: ["Classy", "Classy"], imgSrc: q1a1},
                { answerText: 'City', associatedPeters: ["Joe", "Dealership"], imgSrc: q1a2},
                { answerText: 'Country', associatedPeters: ["Rollerblade", "Running"], imgSrc: q1a3},
            ],
            selectedAnswer: -1,
        },

        {
            questionText: "What's your favourite fictional character?",
            answerOptions: [
                { answerText: 'Big Chungus', associatedPeters: ["Classy", "Joe"], imgSrc: q2a0},
                { answerText: 'Crewmate', associatedPeters: ["Dancing", "Rollerblade"], imgSrc: q2a1},
                { answerText: 'Minion', associatedPeters: ["Chibi", "Chibi"], imgSrc: q2a2},
                { answerText: 'Sonic', associatedPeters: ["Dealership", "Running"], imgSrc: q2a3},
            ],
            selectedAnswer: -1,
        },

        {
            questionText: 'Describe your relationship status.',
            answerOptions: [
                { answerText: 'Single', associatedPeters: ["Chibi", "Running"], imgSrc: q3a0},
                { answerText: 'Taken', associatedPeters: ["Classy", "Joe"], imgSrc: q3a1},
                { answerText: 'Gamer', associatedPeters: ["Dancing", "Rollerblade"], imgSrc: q3a2},
                { answerText: 'Divorced', associatedPeters: ["Dealership"], imgSrc: q3a3},
            ],
            selectedAnswer: -1,
        },

        {
            questionText: "What's your favourite Italian food?",
            answerOptions: [
                { answerText: 'Pizza', associatedPeters: ["Joe", "Joe"], imgSrc: q4a0},
                { answerText: 'Pasta', associatedPeters: ["Dealership", "Rollerblade"], imgSrc: q4a1},
                { answerText: 'Risotto', associatedPeters: ["Running", "Classy"], imgSrc: q4a2},
                { answerText: 'I hate Italians', associatedPeters: ["Dancing", "Chibi"], imgSrc: q4a3},
            ],
            selectedAnswer: -1,
        },
        
        {
            questionText: 'What is your favourite WW2 ally?',
            answerOptions: [
                { answerText: 'USSR', associatedPeters: ['Running', 'Joe'], imgSrc: q5a0},
                { answerText: 'France', associatedPeters: ['Chibi', 'Rollerblade'], imgSrc: q5a1},
                { answerText: 'USA', associatedPeters: ['Dealership', 'Dancing'], imgSrc: q5a2},
                { answerText: 'UK', associatedPeters: ['Classy', 'Classy'], imgSrc: q5a3},
            ],
            selectedAnswer: -1,
        },
        
        {
            questionText: 'Which animated TV series would you pick?',
            answerOptions: [
                { answerText: 'South Park', associatedPeters: ['Dealership', 'Dealership'], imgSrc: q6a0},
                { answerText: 'The Simpsons', associatedPeters: ['Rollerblade', 'Chibi'], imgSrc: q6a1},
                { answerText: 'Bojack Horseman', associatedPeters: ['Classy', 'Joe'], imgSrc: q6a2},
                { answerText: 'Rick and Morty', associatedPeters: ['Running', 'Dancing'], imgSrc: q6a3},
            ],
            selectedAnswer: -1,
        },
        
        {
            questionText: 'Pick a Minecraft skin',
            answerOptions: [
                { answerText: 'Herobrine', associatedPeters: ['Chibi', 'Chibi'], imgSrc: q7a0},
                { answerText: 'Trollface', associatedPeters: ['Joe', 'Dealership'], imgSrc: q7a1},
                { answerText: 'Creeper in a suit', associatedPeters: ['Classy', 'Dancing'], imgSrc: q7a2},
                { answerText: 'Honeydew', associatedPeters: ['Rollerblade', 'Running'], imgSrc: q7a3},
            ],
            selectedAnswer: -1,
        },
        
        {
            questionText: 'In mid 2010s Youtube, which video would you prefer to watch?',
            answerOptions: [
                { answerText: 'Minecraft Let’s Play: Part 74 - Starting work on the new house', associatedPeters: ['Chibi', 'Dancing'], imgSrc: q8a0},
                { answerText: 'KISSING PRANK IN THE DARK (GONE SEXUAL) (I KISSED MY SISTER??!?!?!?)', associatedPeters: ['Rollerblade', 'Dealership'], imgSrc: q8a1},
                { answerText: 'Club Penguin Hackzz (Stil works patch 1.4!!!)', associatedPeters: ['Running', 'Joe'], imgSrc: q8a2},
                { answerText: 'Vanoss Gaming Funny Moments - Best Moments of 2014 (Gmod, GTA 5, Skate 3, & More!)', associatedPeters: ['Classy', 'Classy'], imgSrc: q8a3},
            ],
            selectedAnswer: -1,
        },
        
        {
            questionText: 'Who is your favourite Family Guy character?',
            answerOptions: [
                { answerText: 'Lois Griffin', associatedPeters: ['Chibi', 'Dancing'], imgSrc: q9a0},
                { answerText: 'Quagmire', associatedPeters: ['Joe', 'Dealership'], imgSrc: q9a1},
                { answerText: 'Stewie Griffin', associatedPeters: ['Rollerblade', 'Running'], imgSrc: q9a2},
                { answerText: 'Brian Griffin', associatedPeters: ['Classy', 'Classy'], imgSrc: q9a3},
            ],
            selectedAnswer: -1,
        },
        
        {
            questionText: "No really, who's your FAVOURITE Family Guy character?",
            answerOptions: [
                { answerText: 'Peter Griffin', associatedPeters: ['Chibi', 'Chibi'], imgSrc: q10a0},
                { answerText: 'Peetah', associatedPeters: ['Dealership', 'Running'], imgSrc: q10a1},
                { answerText: 'A man who positively can do', associatedPeters: ['Classy', 'Dancing'], imgSrc: q10a2},
                { answerText: 'Friend of Cleveland Brown', associatedPeters: ['Rollerblade', 'Joe'], imgSrc: q10a3},
            ],
            selectedAnswer: -1,
        },
	];
    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState((-1));
    const [showSubmission, setShowSubmission] = useState(false);
    
    const [joe, setJoe] = useState(0);
    const [rollerblade, setRollerblade] = useState(0);
    const [dealership, setDealership] = useState(0);
    const [dancing, setDancing] = useState(0);
    const [classy, setClassy] = useState(0);
    const [chibi, setChibi] = useState(0);
    const [running, setRunning] = useState(0);
    
    
    
    function resetMap() {
        setJoe(0);
        setRollerblade(0);
        setDealership(0);
        setDancing(0);
        setClassy(0);
        setChibi(0);
        setRunning(0);
    }
    
    function updateScore() {
        questions[currentQuestion].answerOptions[currentAnswer].associatedPeters.map((peter, index) => {
            if (peter == "Classy") {
                const newClassy = classy+1;
                setClassy(newClassy);
            } else if (peter == "Rollerblade") {
                const newRollerblade = rollerblade+1;
                setRollerblade(newRollerblade);
            } else if (peter == "Dancing") {
                const newDancing = dancing+1;
                setDancing(newDancing);
            } else if (peter == "Chibi") {
                const newChibi = chibi+1;
                setChibi(newChibi);
            } else if (peter == "Joe") {
                const newJoe = joe+1;
                setJoe(newJoe);
            } else if (peter == "Running") {
                const newRunning = running+1;
                setRunning(newRunning);
            } else if (peter == "Dealership") {
                const newdealership = dealership+1;
                setClassy(newdealership);
            } else {
                console.log(peter);
            }
        });
    }
        
    function selectButton(questionNumber, selection) {
        setCurrentAnswer(selection);
        console.log(questions[questionNumber].selectedAnswer);
    }
    
    function restart() {
        questions.map((question, index) => {
            question.selectedAnswer = -1;
        });
        setCurrentAnswer(-1);
        setCurrentQuestion(0);
        setShowSubmission(false);
    }
    
    function goBackwards() {
        const newCurrentQuestion = currentQuestion - 1;
        const newAnswer = questions[newCurrentQuestion].selectedAnswer;
        setCurrentAnswer(newAnswer);
        setCurrentQuestion(newCurrentQuestion)
    }
    
    function goForwards() {
        if (currentAnswer < 0 || currentAnswer > 4) {
            displayError();
            return;
        }
        updateScore()
        const newCurrentQuestion = currentQuestion + 1;
        const newAnswer = -1;
        setCurrentAnswer(newAnswer);
        setCurrentQuestion(newCurrentQuestion)
    }
    
    function displayError() {
        //TODO: Implement this
        return;
    }
    
    function goToResults() {
        setShowSubmission(true);
    }
    
    const renderActiveSelection = () => {
        if (currentAnswer != -1) {
            return (
                <div className='active-selection'>
                <span> Selected answer: {questions[currentQuestion].answerOptions[currentAnswer].answerText}</span>
                </div>
            );
        }
    }
    
    const renderBackButton = () => {
        if (currentQuestion != 0) {
            return (
                <button onClick={() => goBackwards()}>Previous Question</button>
            );
        }
    }

    const renderForwardButton = () => {
        if (currentQuestion != questions.length - 1) {
            return (        
                <button onClick={() => goForwards()}>Next Question</button>
            );
        }   
    }
    
    const renderSubmitButton = () => {
        if (currentQuestion == questions.length - 1) {
            return (
              <button onClick={() => goToResults()}> See results</button>  
            );
        }
    }
    
    const renderAnswer = (selected) => {
        console.log("rendering");
        console.log(currentAnswer);
        console.log(questions[currentQuestion].selectedAnswer);
        if (currentAnswer == selected) {
            return (
               <div onClick={() => selectButton(currentQuestion, selected)} class="selectedImg">
                 <img src={questions[currentQuestion].answerOptions[selected].imgSrc} class="answerImg"></img>
                 <span>{questions[currentQuestion].answerOptions[selected].answerText}</span>
               </div>
            );
        } else {
            return (
               <div onClick={() => selectButton(currentQuestion, selected)}>
                 <img src={questions[currentQuestion].answerOptions[selected].imgSrc} class="answerImg"></img>
                 <span>{questions[currentQuestion].answerOptions[selected].answerText}</span>
               </div>
            );
        }
    }
    
    const renderQuizPage =() => {
        return (
        <div className='question-section'>
            <div className='question-count'>
                <span>Question {(currentQuestion+1)}/{questions.length}</span>
            </div>
            <div className='question-text'>
                {questions[currentQuestion].questionText}
            </div>
            <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
		     renderAnswer(index)
	         ))}
            </div>
        
            <div className='navigation'>
                <button onClick={() => restart()}> Restart</button>
                {renderForwardButton()}
                {renderSubmitButton()}
            </div>
        </div>
        );
    }
    
    const renderResults = () => {
            console.log(joe);
            console.log(rollerblade);
            console.log(dealership);
            console.log(dancing);
            console.log(classy);
            console.log(chibi);
            console.log(running);
            if (joe >= joe && joe >= rollerblade && joe >= dealership && joe >= dancing && joe >= classy && joe >= chibi && joe >= running) {
                return (
                <div>
                <span>YOU'RE ... </span>
                <span>Joe Peter!</span>
                    <p></p>
                <img src={joePic}></img>
                    <p></p>
                <span>You aren't like the other Peters - you don't let anything get you down, and you put the family in family guy.</span>
                <div className='navigation'>
                    <button onClick={() => restart()}> Try Again</button>
                </div>
                </div>
                );
            } else if (rollerblade >= joe && rollerblade >= rollerblade && rollerblade >= dealership && rollerblade >= dancing && rollerblade >= classy && rollerblade >= chibi && rollerblade >= running) {
                return (
                <div>
                <span>YOU'RE ... </span>
                <span>Rollerblade Peter!</span>
                    <p></p>
                <img src={rollerbladePic}></img>
                    <p></p>
                <span>You're rambunctious, and have a wild life and side. However, your friends always know they can rely on you.</span>
                <div className='navigation'>
                    <button onClick={() => restart()}> Try Again</button>
                </div>
                </div>
                );
            } else if (dealership >= joe && dealership >= rollerblade && dealership >= dealership && dealership >= dancing && dealership >= classy && dealership >= chibi && dealership >= running) {
                return (
                <div>
                <span>YOU'RE ... </span>
                <span>Dealership Peter!</span>
                    <p></p>
                <img src={dealershipPic}></img>
                    <p></p>
                <span>Your job knows that they can always rely on you - however you know how to wind down with weekend football!</span>
                <div className='navigation'>
                    <button onClick={() => restart()}> Try Again</button>
                </div>
                </div>
                );
            } else if (dancing >= joe && dancing >= rollerblade && dancing >= dealership && dancing >= dancing && dancing >= classy && dancing >= chibi && dancing >= running) {
                return (
                <div>
                <span>YOU'RE ... </span>
                <span>Dancing Peter!</span>
                    <p></p>
                <img src={dancingPic}></img>
                    <p></p>
                <span>Bird is the word - and boy do you know it! Everyone lights up when you enter a room.</span>
                <div className='navigation'>
                    <button onClick={() => restart()}> Try Again</button>
                </div>
                </div>
                );
            } else if (classy >= joe && classy >= rollerblade && classy >= dealership && classy >= dancing && classy >= classy && classy >= chibi && classy >= running) {
                return (
                <div>
                <span>YOU'RE ... </span>
                <span>Classy Peter!</span>
                    <p></p>
                <img src={classyPic}></img>
                    <p></p>
                <span>You like to unwind with a cup of earl grey and watch the sun shine, living life in your second mansion.</span>
                    <div className='navigation'>
                    <button onClick={() => restart()}> Try Again</button>
                </div>
                </div>
                );
            } else if (chibi >= joe && chibi >= rollerblade && chibi >= dealership && chibi >= dancing && chibi >= classy && chibi >= chibi && chibi >= running) {
                return (
                <div>
                <span>YOU'RE ... </span>
                <span>Chibi Peter!</span>
                    <p></p>
                <img src={chibiPic}></img>
                    <p></p>
                <span>You like cuteness - and you're the cutest thing around! You have a good time and love being described as kawaii.</span>
                    <div className='navigation'>
                    <button onClick={() => restart()}> Try Again</button>
                </div>
                </div>
                );
            } else if (running >= joe && running >= rollerblade && running >= dealership && running >= dancing && running >= classy && running >= chibi && running >= running) {
                running (
                <div>
                <span>YOU'RE ... </span>
                <span>Running Peter!</span>
                    <p></p>
                <img src={runningPic}></img>
                    <p></p>
                <span>You live a fast life, never looking back and always ready to see the challenges fate's gonna throw at you! You're the kinda guy to throw away a fortune cookie so you never know what's gonna hit you.</span>
                <div className='navigation'>
                    <button onClick={() => restart()}> Try Again</button>
                </div>
                </div>
                );
            }
        }
    
    function renderApp() {
        if (showSubmission) {
            return renderResults();
        } else {
            return renderQuizPage();
        }
    }    
        
  return (
    <div className="App">
      <header className="App-header">
        <img src={whichPeterLogo}></img>
        {renderApp()}
      </header>
      </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
/**==============================================
 * *                MainContainer
 *   Container - Components: MainContainer
 *
 *  TODO - Contraints - 
 *     Media Types: Large Device, Small Device
 *  
 *=============================================
 *     Imports needed
 *  Components -
 *    -->Scoreboxes
 *    -->ControlButtons
 *    -->Keypad
 *    -->ScoreByInning
 *============================================**/ 
import Keypad from '../Keypad/Keypad';
import ControlButtons from '../controlButtons/controlButtons';
import ScoreBoxes from '../scoreBox/scoreBoxes';

/**============================================
 **        MAIN - Component Container
 ** SECTION - States and Hooks
 ** SECTION - JS functions for rendering view
 ** SECTION - Baseball Darts Component View
 ** see index.css for styling 
 *=============================================**/
export default function MainContainer() {
  const [tempScore, setTempScore] = useState(0);
  const [history, setHistory] = useState([]);
  const [innings] = useState(9);
  const [awayScores, setAwayScores] = useState(new Array(innings).fill(0));
  const [homeScores, setHomeScores] = useState(new Array(innings).fill(0));
  const [currentInning, setCurrentInning] = useState(0);
  const [isTop, setIsTop] = useState(true);

  /**==============================================
   **     FUNCTION NAME --- nextInning
   **               
   *?  What does it do? --- Checks to see what
          the current inning status is. 
          -Top or Not - Away or not
   *@var isTop bool  
   *@var currentInning number  
   *@var innings number  
   *@var currentInning number
   *@
   *@return void
   *=============================================**/
  const nextInning = () => {
    if (isTop) {
      setIsTop(false);
    } else {
      setIsTop(true);
      if (currentInning < innings - 1) {
        setCurrentInning(currentInning + 1);
      }
    }
  };

  const updateScore = () => {
    let newScores, team;
    if (isTop) {
      newScores = [...awayScores];
      newScores[currentInning] = tempScore;
      setAwayScores(newScores);
      team = 'away';
    } else {
      newScores = [...homeScores];
      newScores[currentInning] = tempScore;
      setHomeScores(newScores);
      team = 'home';
    }
    setHistory([...history, { inning: currentInning, isTop, team, score: tempScore }]);
    setTempScore(0);
    nextInning();
  };

  const undoScore = () => {
    if (history.length > 0) {
      const lastAction = history.pop();
      let newScores;

      if (lastAction.team === 'away') {
        newScores = [...awayScores];
        newScores[lastAction.inning] = 0;
        setAwayScores(newScores);
      } else {
        newScores = [...homeScores];
        newScores[lastAction.inning] = 0;
        setHomeScores(newScores);
      }

      setCurrentInning(lastAction.isTop ? currentInning : currentInning > 0 ? currentInning - 1 : 0);
      setIsTop(lastAction.isTop ? true : false);
      setHistory([...history]);
    }
  };

  useEffect(() => {
    setAwayScores(new Array(innings).fill(0));
    setHomeScores(new Array(innings).fill(0));
  }, [innings]);

  return (
    <div className="bg-main" style={{ padding: '20px' }}>
      <ScoreBoxes awayScores={awayScores} homeScores={homeScores} isTop={isTop} currentInning={currentInning} ></ScoreBoxes>
      <ControlButtons tempScore={tempScore} updateScore={updateScore} undoScore={undoScore} />
      <Keypad setTempScore={setTempScore} />
            {/* <ScoreByInning awayScores={awayScores} homeScores={homeScores} innings={innings} /> */}
    </div>
  );
}

// // import React from 'react';
// import PropTypes from 'prop-types';


// export default function ScoreByInning({ awayScores, homeScores, innings }) {
//   return (
//     <div className="bg-black bg-opacity-50 rounded-md text-center text-sm">
//       {/* Inning Numbers Header */}
//       <div className="flex gap-1 items-center border-b-2" style={{ paddingLeft: '57.5px' }}>
//         {Array.from({ length: innings }).map((_, index) => (
//           <div key={index} className="text-center" style={{ width: '36px' }}>
//             {index + 1}
//           </div>
//         ))}
//       </div>

//         {/* Away Scores */}
//         <div className="flex gap-1 m-1 my-2 items-center">
//           <div style={{ width: '50px' }}>AWAY</div>
//           <div id="away-inning-scores" className="flex gap-1">
//             {Array.from({ length: innings }).map((_, index) => (
//               <div
//                 key={index}
//                 className="bg-green-800  border-dashed border-2 text-lg text-center"
//                 style={{ width: '36px' }}
//               >
//                 {awayScores[index]}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Scores Container with Border */}
//         <div className="border-container" style={{ position: 'relative' }}>
//         {/* Border Line */}
//         <div className="border-line" style={{
//           position: 'absolute',
//           left: 0,
//           right: 0,
//           top: '100%',
//           height: '2px',
//           backgroundColor: 'white'
//         }} />
//       </div>

//         {/* Home Scores */}
//         <div className="flex gap-1 m-1 items-center">
//           <div style={{ width: '50px' }}>HOME</div>
//           <div id="home-inning-scores" className="flex gap-1">
//             {Array.from({ length: innings }).map((_, index) => (
//               <div
//                 key={index}
//                 className="bg-green-800 my-2 border-dashed border-2 text-lg text-center"
//                 style={{ width: '36px' }}
//               >
//                 {homeScores[index]}
//               </div>
//             ))}
//           </div>
//         </div>
//     </div>
//   );
// }

// ScoreByInning.propTypes = {
//   awayScores: PropTypes.arrayOf(PropTypes.number).isRequired,
//   homeScores: PropTypes.arrayOf(PropTypes.number).isRequired,
//   innings: PropTypes.number.isRequired,
// };




// // import PropTypes from 'prop-types';

// // // function InningHeader({ innings }) {
// // //   return (
// // //     <div className="flex gap-1 items-center border-b-2" style={{ paddingLeft: '57.5px' }}>
// // //       {Array.from({ length: innings }).map((_, index) => (
// // //         <div key={index} className="text-center" style={{ width: '56px' }}>
// // //           {index + 1}
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // // InningHeader.propTypes = {
// // //   innings: PropTypes.number.isRequired,
// // // };




// // export default function ScoreByInning({ awayScores, homeScores, innings }) {
// //   return (



// // /** SECTION
// //  * 
// //  *  
// //  * InningHeader
// //  * 
// //  */


// //     <div className="bg-black bg-opacity-50 rounded-md text-center text-sm">
// //       {/* Inning Numbers Header */}
// //       {/* <InningHeader innings={innings}></InningHeader> */}
// //       <div className="flex gap-1 items-center border-b-2" style={{ paddingLeft: '57.5px' }}>
// //         {Array.from({ length: innings }).map((_, index) => (
// //           <div key={index} className="text-center" style={{ width: '56px' }}>
// //             {index + 1}
// //           </div>
// //         ))}
// //       </div>

// //         {/*  <ScoreRow label='Home' scores={homeScores} innings={innings}></ScoreRow>*/}
// //         {/*  <BorderLine></BorderLine>*/}
// //         {/*  <ScoreRow label='Away' scores={awayScores} innings={innings}></ScoreRo*/}






// //         {/* Away Scores */}
// //         <div className="flex gap-1 m-1 my-2 items-center">
// //           <div style={{ width: '50px' }}>AWAY</div>
// //           <div id="away-inning-scores" className="flex gap-1">
// //             {Array.from({ length: innings }).map((_, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-green-450 border-dashed border-2 inset-20 text-lg text-center"
// //                 style={{ width: '45px',height: '45px'  }}
// //               >
// //                 {awayScores[index]}
// //               </div>
// //             ))}
// //           </div>
// //         </div>






// //         {/* Scores Container with Border */}
// //         <div className="border-container" style={{ position: 'relative' }}>
// //         {/* Border Line */}
// //         <div className="border-line" style={{
// //           position: 'absolute',
// //           left: 0,
// //           right: 0,
// //           top: '100%',
// //           height: '2px',
// //           backgroundColor: 'white'
// //         }} />
// //         {/* <BorderLine></BorderLine> */}
// //       </div>






// //         {/* Home Scores */}
// //         <div className="flex gap-1 m-1 items-center">
// //           <div style={{ width: '50px' }}>HOME</div>
// //           <div id="home-inning-scores" className="flex gap-1">
// //             {Array.from({ length: innings }).map((_, index) => (
// //               <div
// //                 key={index}
// //                 className="bg-green-800 my-2 border-dashed border-2 text-lg text-center"
// //                 style={{ width: '36px' }}
// //               >
// //                 {homeScores[index]}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //     </div>
// //   );
// // }

// // ScoreByInning.propTypes = {
// //   awayScores: PropTypes.arrayOf(PropTypes.number).isRequired,
// //   homeScores: PropTypes.arrayOf(PropTypes.number).isRequired,
// //   innings: PropTypes.number.isRequired,
// // };



// // //   //   function BoxScore({scores, innings, score_index}) {
// // //   //     var i == {score_index};
// // //   //     return (<div className="flex gap-1 m-1 items-center">
// // //   //         <div style={{
// // //   //   width: '50px'
// // //   // }}>HOME</div>
// // //   //         <div id="home-inning-scores" className="flex gap-1">
// // //   //           {Array.from({
// // //   //     length: innings
// // //   //   }).map((_, i) => <div key={i} className="bg-green-800 my-2 border-dashed border-2 text-lg text-center" style={{
// // //   //     width: '36px'
// // //   //   }}>
// // //   //               {scores[i]}
// // //   //             </div>)}
// // //   //         </div>
// // //   //       </div>);
// // //   //   }
// // //   //   BoxScore.propTypes = {
// // //   //     _: PropTypes.any,
// // //   //     scores: PropTypes.arrayOf(PropTypes.number).isRequired,
// // //   //     innings: PropTypes.number.isRequired,
// // //   //     score_index: PropTypes.number.isRequired,
// // //   //   };
    


// // //   function BorderLine() {
// // //     return (
// // //       <div className="border-container" style={{ position: 'relative' }}>
// // //         <div className="border-line" style={{
// // //           position: 'absolute',
// // //           left: 0,
// // //           right: 0,
// // //           top: '100%',
// // //           height: '2px',
// // //           backgroundColor: 'white'
// // //         }} />
// // //       </div>
// // //     );
// // //   }
  


// // // function ScoreRow({ label, scores, innings }) {
// // //   return (
// // //     <div className="flex gap-1 m-1 items-center">
// // //       <div style={{ width: '50px' }}>{label}</div>
// // //       <div className="flex gap-1">
// // //         {Array.from({ length: innings }).map((_, index) => (
// // //           <div
// // //             key={index}
// // //             className={`bg-green-${label === 'AWAY' ? '450' : '800'} border-dashed border-2 text-lg text-center`}
// // //             style={{ width: label === 'AWAY' ? '45px' : '36px', height: '45px' }}
// // //           >
// // //             {scores[index]}
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // ScoreRow.propTypes = {
// // //   label: PropTypes.string.isRequired,
// // //   scores: PropTypes.arrayOf(PropTypes.number).isRequired,
// // //   innings: PropTypes.number.isRequired,
// // // };
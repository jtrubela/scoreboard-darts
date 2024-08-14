// import PropTypes from 'prop-types';

// function ScoreRow({ label, scores, innings }) {
//   return (
//     <div className="flex gap-1 m-1 items-center">
//       <div style={{ width: '50px' }}>{label}</div>
//       <div className="flex gap-1">
//         {Array.from({ length: innings }).map((_, index) => (
//           <div
//             key={index}
//             className={`bg-green-${label === 'AWAY' ? '450' : '800'} border-dashed border-2 text-lg text-center`}
//             style={{ width: label === 'AWAY' ? '45px' : '36px', height: '45px' }}
//           >
//             {scores[index]}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// ScoreRow.propTypes = {
//   label: PropTypes.string.isRequired,
//   scores: PropTypes.arrayOf(PropTypes.number).isRequired,
//   innings: PropTypes.number.isRequired,
// };

// export default ScoreRow;
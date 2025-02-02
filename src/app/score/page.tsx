// import React from 'react';
// import { useQuery } from 'convex/react';
// //import { api } from '../../convex/_generated/api';

// const ScorePage: React.FC = () => {
//     const burgerLeaders = useQuery(api.leaderboard.getBurgerLeaders) || [];
//     const hazardLeaders = useQuery(api.leaderboard.getHazardLeaders) || [];

//     const sortedBurgerLeaders = burgerLeaders.sort((a, b) => b.score - a.score);
//     const sortedHazardLeaders = hazardLeaders.sort((a, b) => b.score - a.score);

//     return (
//         <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//             <div>
//                 <h2>Most Burgers</h2>
//                 <ul>
//                     {sortedBurgerLeaders.map((leader, index) => (
//                         <li key={index}>
//                             {leader.name}: {leader.score}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             <div>
//                 <h2>Most Hazard Points</h2>
//                 <ul>
//                     {sortedHazardLeaders.map((leader, index) => (
//                         <li key={index}>
//                             {leader.name}: {leader.score}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default ScorePage;
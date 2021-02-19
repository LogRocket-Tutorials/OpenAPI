// import React from 'react';

// import { Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { isAuth } from '../auth';

// export default function PrivateRoute({ children, ...rest }: any) {
//   const auth = useSelector(isAuth);

//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         auth ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: '/login',
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// }


export {}
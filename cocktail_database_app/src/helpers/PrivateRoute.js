import { useKeycloak } from "@react-keycloak/web";

const PrivateRoute = ({ children }) => {
 const { keycloak } = useKeycloak();

 const isLoggedIn = keycloak.authenticated;

 return isLoggedIn ? children :
  <div className='main'>
 <div className='content'>
     <h1> You need to log in to see this page!</h1>
 </div>
</div>;
};

export default PrivateRoute;
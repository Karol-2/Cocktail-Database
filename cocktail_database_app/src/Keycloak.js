import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8080",
 realm: "keyclock-react-auth",
 //clientId: "React-auth",
 clientId:"new-client"
 
});

export default keycloak;
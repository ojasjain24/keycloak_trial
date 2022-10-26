import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8080/auth",
 realm: "Realm1",
 clientId: "test",
});

export default keycloak;
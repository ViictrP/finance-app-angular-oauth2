import {KeycloakConfig} from "keycloak-js";

const keycloakConfig: KeycloakConfig = {
  url: 'http://127.0.0.1:8080',
  realm: 'finance-app',
  clientId: 'finance-app-frontend'
};

export default keycloakConfig;

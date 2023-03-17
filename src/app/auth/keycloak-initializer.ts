import {KeycloakOptions, KeycloakService} from "keycloak-angular";
import keycloakConfig from "../../../keycloak.config";

export function initializer(keycloak: KeycloakService): () => Promise<boolean> {
  const options: KeycloakOptions = {
    config: keycloakConfig,
    loadUserProfileAtStartUp: true,
    initOptions: {
      onLoad: 'login-required',
      flow: 'standard',
      checkLoginIframe: true
    },
    bearerExcludedUrls: []
  };

  return () => keycloak.init(options);
}

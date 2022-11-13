import { Configuration } from "../../plugins/openapi";
import { useRuntimeConfig } from '~/.nuxt/imports'

export default class ConfigurationBuilder {
  protected readonly config = useRuntimeConfig()

  buildDefault(): Configuration {
    return new Configuration({
      basePath: this.config.FRONT_API_URL,
    });
  }
}


declare module "dotenv-config" {
  interface DotenvConfig {
    REDIS_CONNECTION_STRING: string;
  }

  const config: DotenvConfig;
  export default config;
}

import { configTypeorm } from "./typeorm"

const config = async () => {
  await configTypeorm();
}

export default config;

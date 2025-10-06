import * as Joi from 'joi';

export default Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'test', 'staging', 'production')
    .default('development')
    .required(),
  DATABASE_PORT: Joi.number().port().default(5432),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_SYNC: Joi.boolean().default(false),
  DATABASE_AUTOLOAD: Joi.boolean().default(false),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_USERNAME: Joi.string().required(),
  PROFILE_API_KEY: Joi.string().required(),
});

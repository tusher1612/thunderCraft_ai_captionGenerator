export default {
  dialect: "postgresql",
  schema: "./utils/db/schema.ts",
  out: "./drizzle",

  dbCredentials: {
    url: "postgresql://neondb_owner:uOX61hVblqCB@ep-weathered-moon-a1703hn3.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
    connectionString:
      "postgresql://neondb_owner:uOX61hVblqCB@ep-weathered-moon-a1703hn3.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
  },
};

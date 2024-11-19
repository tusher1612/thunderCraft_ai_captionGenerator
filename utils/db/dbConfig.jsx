import { neon } from "@neondatabase/serverless";

import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

const sql = neon("postgresql://neondb_owner:uOX61hVblqCB@ep-weathered-moon-a1703hn3.ap-southeast-1.aws.neon.tech/neondb?sslmode=require" || process.env.DATABASE_URl);

export const db = drizzle(sql, { schema });

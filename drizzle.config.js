import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });
dotenv.config();

/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: "postgresql",
    dbCredentials: {
        url:
            process.env.DRIZZLE_DB_URL ||
            process.env.NEXT_PUBLIC_DRIZZLE_DB_URL,
    },
};

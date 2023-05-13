import { CronJob } from "cron";
import deleteUnverifiedUsers from "./deleteUnverifiedUsers.js";

const job = new CronJob("0 0 * * *", deleteUnverifiedUsers);
job.start();

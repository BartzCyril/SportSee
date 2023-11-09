import {UserData} from "../data/UserData.ts";
import {UserPerformance} from "../data/UserPerformance.ts";
import {UserActivity} from "../data/UserActivity.ts";
import {UserAverageSessions} from "../data/UserAverageSessions.ts";

export type Data = UserData | UserPerformance | UserActivity | UserAverageSessions
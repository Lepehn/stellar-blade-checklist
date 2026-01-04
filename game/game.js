import { GAME_CONFIG } from "./config.js";
import { STATUSES, COMPLETED_STATUSES } from "./statuses.js";
import { CATEGORIES } from "./categories.js";

import { main } from "./data/main.js";
import { side } from "./data/side.js";
import { request } from "./data/request.js";
import { can } from "./data/can.js";

console.log("GAME index loaded");

export const GAME = {
  ...GAME_CONFIG,
  statuses: STATUSES,
  completedStatuses: COMPLETED_STATUSES,
  categories: CATEGORIES,
  data: {
    main,
    side,
    request,
    can
  }

};

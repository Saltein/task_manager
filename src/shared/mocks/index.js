import { taskHandlers } from "./handlers/task";
import { loginHandlers } from "./handlers/login";
import { registrationHandlers } from "./handlers/registration";

const handlers = [...taskHandlers,
                         ...loginHandlers,
                         ...registrationHandlers,
                         ]

export {handlers}

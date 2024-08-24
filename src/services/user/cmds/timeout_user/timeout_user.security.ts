import { CmdSecurity, baseCmds } from "@eicrud/core/config";
import { User } from "../../user.entity";


const getCmdSecurity = (timeout_user, user): CmdSecurity<CmdDto, User> => { 
    return {
        minTimeBetweenCmdCallMs: 1000,
        dto: baseCmds.timeoutUser.dto,
        rolesRights: {
            user: {
                async defineCMDAbility(can, cannot, ctx) {
                    // Define abilities for user

                }
            }
        },
    }
}

export const timeoutUserSecurity = {
    getCmdSecurity,
}

class CmdDto extends baseCmds.timeoutUser.dto {};

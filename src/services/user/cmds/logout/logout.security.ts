import { CmdSecurity, baseCmds } from "@eicrud/core/config";
import { User } from "../../user.entity";


const getCmdSecurity = (logout, user): CmdSecurity<CmdDto, User> => { 
    return {
        minTimeBetweenCmdCallMs: 1000,
        dto: baseCmds.logout.dto,
        rolesRights: {
            user: {
                async defineCMDAbility(can, cannot, ctx) {
                    // Define abilities for user

                }
            }
        },
    }
}

export const logoutSecurity = {
    getCmdSecurity,
}

class CmdDto extends baseCmds.logout.dto {};

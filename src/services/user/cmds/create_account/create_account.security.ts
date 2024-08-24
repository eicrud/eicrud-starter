import { CmdSecurity, baseCmds } from "@eicrud/core/config";
import { User } from "../../user.entity";


const getCmdSecurity = (create_account, user): CmdSecurity<CmdDto, User> => { 
    return {
        minTimeBetweenCmdCallMs: 1000,
        dto: baseCmds.createAccount.dto,
        rolesRights: {
            user: {
                async defineCMDAbility(can, cannot, ctx) {
                    // Define abilities for user

                }
            }
        },
    }
}

export const createAccountSecurity = {
    getCmdSecurity,
}

class CmdDto extends baseCmds.createAccount.dto {};

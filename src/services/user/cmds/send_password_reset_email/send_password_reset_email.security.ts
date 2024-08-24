import { CmdSecurity, baseCmds } from "@eicrud/core/config";
import { User } from "../../user.entity";


const getCmdSecurity = (send_password_reset_email, user): CmdSecurity<CmdDto, User> => { 
    return {
        minTimeBetweenCmdCallMs: 1000,
        dto: baseCmds.sendPasswordResetEmail.dto,
        rolesRights: {
            user: {
                async defineCMDAbility(can, cannot, ctx) {
                    // Define abilities for user

                }
            }
        },
    }
}

export const sendPasswordResetEmailSecurity = {
    getCmdSecurity,
}

class CmdDto extends baseCmds.sendPasswordResetEmail.dto {};
